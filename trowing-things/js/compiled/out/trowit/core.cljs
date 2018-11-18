(ns trowit.core
    (:require ))

(enable-console-print!)

(println "Capitalism succ")

(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))
(set! (.-font ctx) "13px Roboto")

(defn draw-point [x y]
  (doto ctx
    (.beginPath)
    (.arc x y 3 0 (* Math/PI 2) true)
    (.fill)))

(defn init-plot []
  (set! (.-fillStyle ctx) "#000000")
  (doto ctx
    (.moveTo 50 0)
    (.lineTo 50 430)
    (.lineTo 974 430)
    (.stroke))

  (doseq [i (range 50 974 40)]
    (.fillRect ctx i 428 1 5)
    (.fillText ctx (- i 50) i 448))

  (doseq [i (range 70 974 40)]
    (.fillRect ctx i 428 1 5)
    (.fillText ctx (- i 50) i 460))

  (let [marks (range 10 431 20)
        labels (range 420 -1 -20)]
    (doseq [[i j] (map vector marks labels)]
      (.fillRect ctx 48 i 5 1)
      (.fillText ctx j 10 (+ i 3)))))

;; TODO: Rewrite this fucnction like js's random
(defn to-x [x]
  (+ 50 x))

(defn to-y [y]
  (Math/abs (- 430 y)))

(defn trow [vel0 y0 time-step angle]
  (loop [x 50 y (to-y y0) t 0.0 res []]
    (if (> y 430)
      res
      (recur (to-x (* vel0 t (Math/cos angle)))
             (+ (to-y y0) (* vel0 t (Math/sin angle)) (/ (* 9.8 t t) 2))
             (+ t time-step)
             (conj res {:x x :y y :t t})))))

(defn render [dots]
  (doseq [i dots]
    (draw-point (:x i) (:y i))))

(defn random-color []
  (str "#"
       (.toString (Math/floor (rand 255)) 16)
       (.toString (Math/floor (rand 255)) 16)
       (.toString (Math/floor (rand 255)) 16)))

(defn round [x]
  (/ (Math/round (* 1000 x))
      1000))

;; TODO: REFACTOR
(defn to-table [data]
  (let [table (.getElementById js/document "table")]
    (set! (.-innerHTML table)
      (str
        "<tr><td>x</td><td>y</td><td>t</td></tr>"
        (apply str
          (map #(str "<tr><td>"
                     (round (Math/abs (- 50 (:x %)))) "</td><td>"
                     (round (Math/abs (- 430 (:y %)))) "</td><td>"
                     (round (:t %)) "</td></tr>")
               data))))))

(set! (.-onclick (.getElementById js/document "draw")) (fn [e]
  (set! (.-fillStyle ctx) (random-color))
  (let [vel (.-value (.getElementById js/document "velocity"))
        y0 (.-value (.getElementById js/document "y"))
        step (js/Number (.-value (.getElementById js/document "timestep")))
        angle (* (Math/abs (- 360 (.-value (.getElementById js/document "angle"))))
                  (/ Math/PI 180))
        res (trow vel y0 step angle)]
    (render res)
    (to-table res))))
    
(init-plot)
