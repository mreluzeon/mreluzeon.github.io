(ns japaneseLearning.core
  )

(def romanaji (.split "a i u e o ka ki ku ke ko sa si su se so ta ti tu te to na ni nu ne no ha hi hu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wi we wo n" " "))
(def hiragana-alph (.split "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん" ""))
(def katakana-alph (.split "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン" ""))

(def hiragana
  (zipmap (js->clj romanaji)
          (js->clj hiragana-alph)))

(def katakana
  (zipmap (js->clj romanaji)
          (js->clj katakana-alph)))

(def wins 0)
(def lifes 5)
(def right-romanaji "")

(defn get-n-randoms [initletter coll n]
  (conj (take n (shuffle (reduce #(if (= %2 initletter) %1 (conj %1 %2)) [] coll))) initletter))

(defn from-wins [wins initletter coll]
  (condp contains? wins
    #{0 1 2 3 4 5}    (get-n-randoms initletter coll 2)
    #{6 7 8 9 10}     (get-n-randoms initletter coll 3)
    #{11 12 13 14 15} (get-n-randoms initletter coll 4)
    #{16 17 18 19 20} (get-n-randoms initletter coll 5)
    #{21 22 23 24 25} (get-n-randoms initletter coll 6)
    (get-n-randoms initletter coll 7)))

(defn to-radios [coll]
  (apply str
         (concat
          (map #(str "<input name=\"ans\" type=\"radio\" id=\"" %1 "\"/>"
                     "<label for=\"" %1 "\">" %1 "</label></br>") coll))))

(defn next-question! [alphabet]
  (let [romanaji-letter (rand-nth romanaji)
        letter (if (= alphabet :hiragana)
                 (hiragana romanaji-letter)
                 (katakana romanaji-letter))
        random-romanajis (shuffle (from-wins wins romanaji-letter romanaji))]
    (set! (.-innerHTML (.getElementById js/document "answers"))
          (to-radios random-romanajis))
    (set! (.-innerText (.getElementById js/document "letter"))
          letter)
    (set! right-romanaji romanaji-letter)))

(defn to-vec [coll]
  (.call (.-slice #js[]) coll))

(defn answered []
  (first
   (filter #(nth %1 0)
           (map #(vector (.-checked %1) (.-id %1))
                (to-vec (.getElementsByName js/document "ans"))))))

(defn learn-hiragana! []
  (set! wins 0)
  (set! lifes 5)
  (next-question! :hiragana)
  (set! (.-onclick (.getElementById js/document "answer"))
        (fn []
          (when (not (zero? lifes))
            (if (= right-romanaji (nth (answered) 1))
              (do (js/alert "yes, it is")
                  (set! wins (inc wins))
                  (next-question! :hiragana))
              (do (js/alert (str "no, it is " right-romanaji))
                  (set! lifes (dec lifes))
                  (next-question! :hiragana)))))))

(defn learn-katakana! []
  (set! wins 0)
  (set! lifes 5)
  (next-question! :katakana)
  (set! (.-onclick (.getElementById js/document "answer"))
        (fn []
          (when (not (zero? lifes))
            (if (= right-romanaji (nth (answered) 1))
              (do (js/alert "yes, it is")
                  (set! wins (inc wins))
                  (next-question! :katakana))
              (do (js/alert (str "no, it is " right-romanaji))
                  (set! lifes (dec lifes))
                  (next-question! :katakana)))))))

(set! (.-onclick (.getElementById js/document "begin"))
      #(if (.-checked (.getElementById js/document "hiragana"))
         (learn-hiragana!)
         (learn-katakana!)))
