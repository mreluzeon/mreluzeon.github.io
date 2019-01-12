// Compiled by ClojureScript 1.10.238 {}
goog.provide('japaneseLearning.core');
goog.require('cljs.core');
japaneseLearning.core.romanaji = "a i u e o ka ki ku ke ko sa si su se so ta ti tu te to na ni nu ne no ha hi hu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wi we wo n".split(" ");
japaneseLearning.core.hiragana_alph = "\u3042\u3044\u3046\u3048\u304a\u304b\u304d\u304f\u3051\u3053\u3055\u3057\u3059\u305b\u305d\u305f\u3061\u3064\u3066\u3068\u306a\u306b\u306c\u306d\u306e\u306f\u3072\u3075\u3078\u307b\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093".split("");
japaneseLearning.core.katakana_alph = "\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3".split("");
japaneseLearning.core.hiragana = cljs.core.zipmap.call(null,cljs.core.js__GT_clj.call(null,japaneseLearning.core.romanaji),cljs.core.js__GT_clj.call(null,japaneseLearning.core.hiragana_alph));
japaneseLearning.core.katakana = cljs.core.zipmap.call(null,cljs.core.js__GT_clj.call(null,japaneseLearning.core.romanaji),cljs.core.js__GT_clj.call(null,japaneseLearning.core.katakana_alph));
japaneseLearning.core.wins = (0);
japaneseLearning.core.lifes = (5);
japaneseLearning.core.right_romanaji = "";
japaneseLearning.core.get_n_randoms = (function japaneseLearning$core$get_n_randoms(initletter,coll,n){
return cljs.core.conj.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,cljs.core.reduce.call(null,(function (p1__2_SHARP_,p2__1_SHARP_){
if(cljs.core._EQ_.call(null,p2__1_SHARP_,initletter)){
return p1__2_SHARP_;
} else {
return cljs.core.conj.call(null,p1__2_SHARP_,p2__1_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,coll))),initletter);
});
japaneseLearning.core.from_wins = (function japaneseLearning$core$from_wins(wins,initletter,coll){
var pred__24 = cljs.core.contains_QMARK_;
var expr__25 = wins;
if(cljs.core.truth_(pred__24.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(2),null,(3),null,(4),null,(5),null], null), null),expr__25))){
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(2));
} else {
if(cljs.core.truth_(pred__24.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(6),null,(7),null,(8),null,(9),null,(10),null], null), null),expr__25))){
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(3));
} else {
if(cljs.core.truth_(pred__24.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(11),null,(12),null,(13),null,(14),null,(15),null], null), null),expr__25))){
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(4));
} else {
if(cljs.core.truth_(pred__24.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(16),null,(17),null,(18),null,(19),null,(20),null], null), null),expr__25))){
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(5));
} else {
if(cljs.core.truth_(pred__24.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(21),null,(22),null,(23),null,(24),null,(25),null], null), null),expr__25))){
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(6));
} else {
return japaneseLearning.core.get_n_randoms.call(null,initletter,coll,(7));
}
}
}
}
}
});
japaneseLearning.core.to_radios = (function japaneseLearning$core$to_radios(coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__3_SHARP_){
return ["<input name=\"ans\" type=\"radio\" id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3_SHARP_),"\"/>","<label for=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3_SHARP_),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3_SHARP_),"</label></br>"].join('');
}),coll)));
});
japaneseLearning.core.next_question_BANG_ = (function japaneseLearning$core$next_question_BANG_(alphabet){
var romanaji_letter = cljs.core.rand_nth.call(null,japaneseLearning.core.romanaji);
var letter = ((cljs.core._EQ_.call(null,alphabet,new cljs.core.Keyword(null,"hiragana","hiragana",(-1226472014))))?japaneseLearning.core.hiragana.call(null,romanaji_letter):japaneseLearning.core.katakana.call(null,romanaji_letter));
var random_romanajis = cljs.core.shuffle.call(null,japaneseLearning.core.from_wins.call(null,japaneseLearning.core.wins,romanaji_letter,japaneseLearning.core.romanaji));
document.getElementById("answers").innerHTML = japaneseLearning.core.to_radios.call(null,random_romanajis);

document.getElementById("letter").innerText = letter;

return japaneseLearning.core.right_romanaji = romanaji_letter;
});
japaneseLearning.core.to_vec = (function japaneseLearning$core$to_vec(coll){
return [].slice.call(coll);
});
japaneseLearning.core.answered = (function japaneseLearning$core$answered(){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__4_SHARP_){
return cljs.core.nth.call(null,p1__4_SHARP_,(0));
}),cljs.core.map.call(null,(function (p1__5_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__5_SHARP_.checked,p1__5_SHARP_.id],null));
}),japaneseLearning.core.to_vec.call(null,document.getElementsByName("ans")))));
});
japaneseLearning.core.learn_hiragana_BANG_ = (function japaneseLearning$core$learn_hiragana_BANG_(){
japaneseLearning.core.wins = (0);

japaneseLearning.core.lifes = (5);

japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"hiragana","hiragana",(-1226472014)));

return document.getElementById("answer").onclick = (function (){
if(!((japaneseLearning.core.lifes === (0)))){
if(cljs.core._EQ_.call(null,japaneseLearning.core.right_romanaji,cljs.core.nth.call(null,japaneseLearning.core.answered.call(null),(1)))){
alert("yes, it is");

japaneseLearning.core.wins = (japaneseLearning.core.wins + (1));

return japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"hiragana","hiragana",(-1226472014)));
} else {
alert(["no, it is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(japaneseLearning.core.right_romanaji)].join(''));

japaneseLearning.core.lifes = (japaneseLearning.core.lifes - (1));

return japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"hiragana","hiragana",(-1226472014)));
}
} else {
return null;
}
});
});
japaneseLearning.core.learn_katakana_BANG_ = (function japaneseLearning$core$learn_katakana_BANG_(){
japaneseLearning.core.wins = (0);

japaneseLearning.core.lifes = (5);

japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"katakana","katakana",(1973317576)));

return document.getElementById("answer").onclick = (function (){
if(!((japaneseLearning.core.lifes === (0)))){
if(cljs.core._EQ_.call(null,japaneseLearning.core.right_romanaji,cljs.core.nth.call(null,japaneseLearning.core.answered.call(null),(1)))){
alert("yes, it is");

japaneseLearning.core.wins = (japaneseLearning.core.wins + (1));

return japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"katakana","katakana",(1973317576)));
} else {
alert(["no, it is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(japaneseLearning.core.right_romanaji)].join(''));

japaneseLearning.core.lifes = (japaneseLearning.core.lifes - (1));

return japaneseLearning.core.next_question_BANG_.call(null,new cljs.core.Keyword(null,"katakana","katakana",(1973317576)));
}
} else {
return null;
}
});
});
document.getElementById("begin").onclick = (function (){
if(cljs.core.truth_(document.getElementById("hiragana").checked)){
return japaneseLearning.core.learn_hiragana_BANG_.call(null);
} else {
return japaneseLearning.core.learn_katakana_BANG_.call(null);
}
});

//# sourceURL=out/japaneseLearning/core.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2phcGFuZXNlTGVhcm5pbmcvY29yZS5qcyIsInNvdXJjZXMiOlsiY29yZS5jbGpzIl0sImxpbmVDb3VudCI6MTMzLCJtYXBwaW5ncyI6IkFBQUE7O0FBR0EsQUFBS0EsaUNBQVMsQUFBQSxrSkFBQTtBQUNkLEFBQUtDLHNDQUFjLEFBQUEseVNBQUE7QUFDbkIsQUFBS0Msc0NBQWMsQUFBQSx5U0FBQTtBQUVuQixBQUFLQyxpQ0FDSCxBQUFDQywyQkFBTyxBQUFDQywrQkFBUUwsZ0NBQ1QsQUFBQ0ssK0JBQVFKO0FBRW5CLEFBQUtLLGlDQUNILEFBQUNGLDJCQUFPLEFBQUNDLCtCQUFRTCxnQ0FDVCxBQUFDSywrQkFBUUg7QUFFbkIsNkJBQUEsN0JBQUtLO0FBQ0wsOEJBQUEsOUJBQUtDO0FBQ0wsdUNBQUEsdkNBQUtDO0FBRUwsc0NBQUEsdENBQU1DLG9GQUFlQyxXQUFXQyxLQUFLQztBQUFyQyxBQUNFLE9BQUNDLHlCQUFLLEFBQUNDLHlCQUFLRixFQUFFLEFBQUNHLDRCQUFRLDJCQUFBLFdBQUFDLGFBQUFDLG5EQUFDQztBQUFELEFBQVMsR0FBSSx5QkFBQUQsekJBQUNFLHNDQUFLVDtBQUFWTTs7QUFBeUIsZ0NBQUFBLGFBQUFDLHRDQUFDSjs7R0FBbkMsaUNBQW1ERixRQUFRRDs7QUFFcEYsa0NBQUEsbENBQU1VLDRFQUFXQyxLQUFLWCxXQUFXQztBQUFqQyxBQUNFLElBQUFXLFdBQU9FO0lBQVBELFdBQWlCRjtBQUFqQixBQUFBLG9CQUFBLEFBQUFDLG1CQUFBLGlGQUFBLFNBQUEsU0FBQSxTQUFBLFNBQUEsU0FBQSx3QkFBQUM7QUFDb0IscUVBQUEsOURBQUNkLDhDQUFjQyxXQUFXQzs7QUFEOUMsb0JBQUEsQUFBQVcsbUJBQUEsaUZBQUEsU0FBQSxTQUFBLFNBQUEsU0FBQSx5QkFBQUM7QUFFb0IscUVBQUEsOURBQUNkLDhDQUFjQyxXQUFXQzs7QUFGOUMsb0JBQUEsQUFBQVcsbUJBQUEsaUZBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSx5QkFBQUM7QUFHb0IscUVBQUEsOURBQUNkLDhDQUFjQyxXQUFXQzs7QUFIOUMsb0JBQUEsQUFBQVcsbUJBQUEsaUZBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSx5QkFBQUM7QUFJb0IscUVBQUEsOURBQUNkLDhDQUFjQyxXQUFXQzs7QUFKOUMsb0JBQUEsQUFBQVcsbUJBQUEsaUZBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSx5QkFBQUM7QUFLb0IscUVBQUEsOURBQUNkLDhDQUFjQyxXQUFXQzs7QUFDNUMscUVBQUEsOURBQUNGLDhDQUFjQyxXQUFXQzs7Ozs7OztBQUU5QixrQ0FBQSxsQ0FBTWMsNEVBQVdkO0FBQWpCLEFBQ0UsT0FBQ2UsMEJBQU1DLGNBQ0EsQUFBQ0MsMkJBQ0Esd0JBQUEsV0FBQUMsbkNBQUNDO0FBQUQsQUFBTSxRQUFBLHVGQUFBRCxjQUFBLE9BQUEsNERBQUFBLGNBQUEsa0RBQUFBLGNBQUE7R0FDa0RsQjs7QUFFbEUsNENBQUEsNUNBQU1vQixnR0FBZ0JDO0FBQXRCLEFBQ0UsSUFBTUMsa0JBQWdCLEFBQUNDLDZCQUFTbkM7SUFDMUJvQyxTQUFPLEVBQUksa0NBQUEsbENBQUNoQix5QkFBRWEsMkVBQ0wsQUFBQzlCLHlDQUFTK0IsaUJBQ1YsQUFBQzVCLHlDQUFTNEI7SUFDbkJHLG1CQUFpQixBQUFDckIsNEJBQVEsQUFBQ0ssMENBQVVkLDJCQUFLMkIsZ0JBQWdCbEM7QUFKaEUsQUFLRSxBQUFNLEFBQWEsd0JBQUEseEJBQWlCc0MsK0NBQzlCLEFBQUNaLDBDQUFVVzs7QUFDakIsQUFBTSxBQUFhLHdCQUFBLHhCQUFpQkMsOENBQzlCRjs7QUFDTixPQUFNM0IsdUNBQWV5Qjs7QUFFekIsK0JBQUEsL0JBQU1LLHNFQUFRM0I7QUFBZCxBQUNFLE9BQU8sQUFBQSxjQUFnQkE7O0FBRXpCLGlDQUFBLGpDQUFNNEI7QUFBTixBQUNFLE9BQUNDLDBCQUNBLDJCQUFBLFdBQUFDLHRDQUFDQztBQUFELEFBQVMsK0JBQUFELGFBQUEsckNBQUNFO0dBQ0Ysd0JBQUEsV0FBQUMsbkNBQUNkO0FBQUQsQUFBTSxZQUFBZSwyQkFBQSxLQUFBLElBQUEsSUFBQSxBQUFBQSxzQ0FBQSx1Q0FBQSx0Q0FBUSxBQUFBRCxxQkFBZSxBQUFBQTtHQUN4QixBQUFDTix1Q0FBTywyQkFBQSwzQkFBb0JEOztBQUU1Qyw2Q0FBQSw3Q0FBTVM7QUFBTixBQUNFLDZCQUFBLDdCQUFNeEM7O0FBQ04sOEJBQUEsOUJBQU1DOztBQUNOLG9EQUFBLHBEQUFDd0I7O0FBQ0QsT0FBTSxBQUFXLHdCQUFBLHhCQUFpQk0sNENBQzVCO0FBQUEsQUFDRSxHQUFNLEVBQUssaUNBQUEsaENBQU85QjtBQUFsQixBQUNFLEdBQUksQUFBQ1kseUJBQUVYLHFDQUFlLGtFQUFBLGxFQUFDbUMsd0JBQUksQUFBQ0o7QUFDMUIsQUFBSSxNQUFBLE5BQUNROztBQUNELEFBQU16Qyw2QkFBSyw4QkFBQSw3QkFBS0E7O0FBQ2hCLDJEQUFBLHBEQUFDeUI7O0FBQ0wsQUFBSSxBQUFDZ0IsTUFBUyxDQUFBLHlEQUFrQnZDOztBQUM1QixBQUFNRCw4QkFBTSwrQkFBQSw5QkFBS0E7O0FBQ2pCLDJEQUFBLHBEQUFDd0I7OztBQVBUOzs7O0FBU1YsNkNBQUEsN0NBQU1pQjtBQUFOLEFBQ0UsNkJBQUEsN0JBQU0xQzs7QUFDTiw4QkFBQSw5QkFBTUM7O0FBQ04sb0RBQUEscERBQUN3Qjs7QUFDRCxPQUFNLEFBQVcsd0JBQUEseEJBQWlCTSw0Q0FDNUI7QUFBQSxBQUNFLEdBQU0sRUFBSyxpQ0FBQSxoQ0FBTzlCO0FBQWxCLEFBQ0UsR0FBSSxBQUFDWSx5QkFBRVgscUNBQWUsa0VBQUEsbEVBQUNtQyx3QkFBSSxBQUFDSjtBQUMxQixBQUFJLE1BQUEsTkFBQ1E7O0FBQ0QsQUFBTXpDLDZCQUFLLDhCQUFBLDdCQUFLQTs7QUFDaEIsMkRBQUEscERBQUN5Qjs7QUFDTCxBQUFJLEFBQUNnQixNQUFTLENBQUEseURBQWtCdkM7O0FBQzVCLEFBQU1ELDhCQUFNLCtCQUFBLDlCQUFLQTs7QUFDakIsMkRBQUEscERBQUN3Qjs7O0FBUFQ7Ozs7QUFTViwyQ0FBQSwzQ0FBTSxBQUFXLHdCQUFBLHhCQUFpQk07QUFBbEMsQUFDTyxvQkFBSSxBQUFXLHdCQUFBLHhCQUFpQkE7QUFDOUIsT0FBQ1M7O0FBQ0QsT0FBQ0UiLCJuYW1lcyI6WyJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvcm9tYW5hamkiLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvaGlyYWdhbmEtYWxwaCIsImphcGFuZXNlTGVhcm5pbmcuY29yZS9rYXRha2FuYS1hbHBoIiwiamFwYW5lc2VMZWFybmluZy5jb3JlL2hpcmFnYW5hIiwiY2xqcy5jb3JlL3ppcG1hcCIsImNsanMuY29yZS9qcy0+Y2xqIiwiamFwYW5lc2VMZWFybmluZy5jb3JlL2thdGFrYW5hIiwiamFwYW5lc2VMZWFybmluZy5jb3JlL3dpbnMiLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvbGlmZXMiLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvcmlnaHQtcm9tYW5hamkiLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvZ2V0LW4tcmFuZG9tcyIsImluaXRsZXR0ZXIiLCJjb2xsIiwibiIsImNsanMuY29yZS9jb25qIiwiY2xqcy5jb3JlL3Rha2UiLCJjbGpzLmNvcmUvc2h1ZmZsZSIsInAxX18yIyIsInAyX18xIyIsImNsanMuY29yZS9yZWR1Y2UiLCJjbGpzLmNvcmUvPSIsImphcGFuZXNlTGVhcm5pbmcuY29yZS9mcm9tLXdpbnMiLCJ3aW5zIiwicHJlZF9fMjQiLCJleHByX18yNSIsImNsanMuY29yZS9jb250YWlucz8iLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvdG8tcmFkaW9zIiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL3N0ciIsImNsanMuY29yZS9jb25jYXQiLCJwMV9fMyMiLCJjbGpzLmNvcmUvbWFwIiwiamFwYW5lc2VMZWFybmluZy5jb3JlL25leHQtcXVlc3Rpb24hIiwiYWxwaGFiZXQiLCJyb21hbmFqaS1sZXR0ZXIiLCJjbGpzLmNvcmUvcmFuZC1udGgiLCJsZXR0ZXIiLCJyYW5kb20tcm9tYW5hamlzIiwianMvZG9jdW1lbnQiLCJqYXBhbmVzZUxlYXJuaW5nLmNvcmUvdG8tdmVjIiwiamFwYW5lc2VMZWFybmluZy5jb3JlL2Fuc3dlcmVkIiwiY2xqcy5jb3JlL2ZpcnN0IiwicDFfXzQjIiwiY2xqcy5jb3JlL2ZpbHRlciIsImNsanMuY29yZS9udGgiLCJwMV9fNSMiLCJjbGpzLmNvcmUvUGVyc2lzdGVudFZlY3RvciIsImphcGFuZXNlTGVhcm5pbmcuY29yZS9sZWFybi1oaXJhZ2FuYSEiLCJqcy9hbGVydCIsImphcGFuZXNlTGVhcm5pbmcuY29yZS9sZWFybi1rYXRha2FuYSEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGphcGFuZXNlTGVhcm5pbmcuY29yZVxuICApXG5cbihkZWYgcm9tYW5hamkgKC5zcGxpdCBcImEgaSB1IGUgbyBrYSBraSBrdSBrZSBrbyBzYSBzaSBzdSBzZSBzbyB0YSB0aSB0dSB0ZSB0byBuYSBuaSBudSBuZSBubyBoYSBoaSBodSBoZSBobyBtYSBtaSBtdSBtZSBtbyB5YSB5dSB5byByYSByaSBydSByZSBybyB3YSB3aSB3ZSB3byBuXCIgXCIgXCIpKVxuKGRlZiBoaXJhZ2FuYS1hbHBoICguc3BsaXQgXCLjgYLjgYTjgYbjgYjjgYrjgYvjgY3jgY/jgZHjgZPjgZXjgZfjgZnjgZvjgZ3jgZ/jgaHjgaTjgabjgajjgarjgavjgazjga3jga7jga/jgbLjgbXjgbjjgbvjgb7jgb/jgoDjgoHjgoLjgoTjgobjgojjgonjgorjgovjgozjgo3jgo/jgpDjgpHjgpLjgpNcIiBcIlwiKSlcbihkZWYga2F0YWthbmEtYWxwaCAoLnNwbGl0IFwi44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44Kz44K144K344K544K744K944K/44OB44OE44OG44OI44OK44OL44OM44ON44OO44OP44OS44OV44OY44Ob44Oe44Of44Og44Oh44Oi44Ok44Om44Oo44Op44Oq44Or44Os44Ot44Ov44Ow44Ox44Oy44OzXCIgXCJcIikpXG5cbihkZWYgaGlyYWdhbmFcbiAgKHppcG1hcCAoanMtPmNsaiByb21hbmFqaSlcbiAgICAgICAgICAoanMtPmNsaiBoaXJhZ2FuYS1hbHBoKSkpXG5cbihkZWYga2F0YWthbmFcbiAgKHppcG1hcCAoanMtPmNsaiByb21hbmFqaSlcbiAgICAgICAgICAoanMtPmNsaiBrYXRha2FuYS1hbHBoKSkpXG5cbihkZWYgd2lucyAwKVxuKGRlZiBsaWZlcyA1KVxuKGRlZiByaWdodC1yb21hbmFqaSBcIlwiKVxuXG4oZGVmbiBnZXQtbi1yYW5kb21zIFtpbml0bGV0dGVyIGNvbGwgbl1cbiAgKGNvbmogKHRha2UgbiAoc2h1ZmZsZSAocmVkdWNlICMoaWYgKD0gJTIgaW5pdGxldHRlcikgJTEgKGNvbmogJTEgJTIpKSBbXSBjb2xsKSkpIGluaXRsZXR0ZXIpKVxuXG4oZGVmbiBmcm9tLXdpbnMgW3dpbnMgaW5pdGxldHRlciBjb2xsXVxuICAoY29uZHAgY29udGFpbnM/IHdpbnNcbiAgICAjezAgMSAyIDMgNCA1fSAgICAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgMilcbiAgICAjezYgNyA4IDkgMTB9ICAgICAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgMylcbiAgICAjezExIDEyIDEzIDE0IDE1fSAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgNClcbiAgICAjezE2IDE3IDE4IDE5IDIwfSAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgNSlcbiAgICAjezIxIDIyIDIzIDI0IDI1fSAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgNilcbiAgICAoZ2V0LW4tcmFuZG9tcyBpbml0bGV0dGVyIGNvbGwgNykpKVxuXG4oZGVmbiB0by1yYWRpb3MgW2NvbGxdXG4gIChhcHBseSBzdHJcbiAgICAgICAgIChjb25jYXRcbiAgICAgICAgICAobWFwICMoc3RyIFwiPGlucHV0IG5hbWU9XFxcImFuc1xcXCIgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJcIiAlMSBcIlxcXCIvPlwiXG4gICAgICAgICAgICAgICAgICAgICBcIjxsYWJlbCBmb3I9XFxcIlwiICUxIFwiXFxcIj5cIiAlMSBcIjwvbGFiZWw+PC9icj5cIikgY29sbCkpKSlcblxuKGRlZm4gbmV4dC1xdWVzdGlvbiEgW2FscGhhYmV0XVxuICAobGV0IFtyb21hbmFqaS1sZXR0ZXIgKHJhbmQtbnRoIHJvbWFuYWppKVxuICAgICAgICBsZXR0ZXIgKGlmICg9IGFscGhhYmV0IDpoaXJhZ2FuYSlcbiAgICAgICAgICAgICAgICAgKGhpcmFnYW5hIHJvbWFuYWppLWxldHRlcilcbiAgICAgICAgICAgICAgICAgKGthdGFrYW5hIHJvbWFuYWppLWxldHRlcikpXG4gICAgICAgIHJhbmRvbS1yb21hbmFqaXMgKHNodWZmbGUgKGZyb20td2lucyB3aW5zIHJvbWFuYWppLWxldHRlciByb21hbmFqaSkpXVxuICAgIChzZXQhICguLWlubmVySFRNTCAoLmdldEVsZW1lbnRCeUlkIGpzL2RvY3VtZW50IFwiYW5zd2Vyc1wiKSlcbiAgICAgICAgICAodG8tcmFkaW9zIHJhbmRvbS1yb21hbmFqaXMpKVxuICAgIChzZXQhICguLWlubmVyVGV4dCAoLmdldEVsZW1lbnRCeUlkIGpzL2RvY3VtZW50IFwibGV0dGVyXCIpKVxuICAgICAgICAgIGxldHRlcilcbiAgICAoc2V0ISByaWdodC1yb21hbmFqaSByb21hbmFqaS1sZXR0ZXIpKSlcblxuKGRlZm4gdG8tdmVjIFtjb2xsXVxuICAoLmNhbGwgKC4tc2xpY2UgI2pzW10pIGNvbGwpKVxuXG4oZGVmbiBhbnN3ZXJlZCBbXVxuICAoZmlyc3RcbiAgIChmaWx0ZXIgIyhudGggJTEgMClcbiAgICAgICAgICAgKG1hcCAjKHZlY3RvciAoLi1jaGVja2VkICUxKSAoLi1pZCAlMSkpXG4gICAgICAgICAgICAgICAgKHRvLXZlYyAoLmdldEVsZW1lbnRzQnlOYW1lIGpzL2RvY3VtZW50IFwiYW5zXCIpKSkpKSlcblxuKGRlZm4gbGVhcm4taGlyYWdhbmEhIFtdXG4gIChzZXQhIHdpbnMgMClcbiAgKHNldCEgbGlmZXMgNSlcbiAgKG5leHQtcXVlc3Rpb24hIDpoaXJhZ2FuYSlcbiAgKHNldCEgKC4tb25jbGljayAoLmdldEVsZW1lbnRCeUlkIGpzL2RvY3VtZW50IFwiYW5zd2VyXCIpKVxuICAgICAgICAoZm4gW11cbiAgICAgICAgICAod2hlbiAobm90ICh6ZXJvPyBsaWZlcykpXG4gICAgICAgICAgICAoaWYgKD0gcmlnaHQtcm9tYW5hamkgKG50aCAoYW5zd2VyZWQpIDEpKVxuICAgICAgICAgICAgICAoZG8gKGpzL2FsZXJ0IFwieWVzLCBpdCBpc1wiKVxuICAgICAgICAgICAgICAgICAgKHNldCEgd2lucyAoaW5jIHdpbnMpKVxuICAgICAgICAgICAgICAgICAgKG5leHQtcXVlc3Rpb24hIDpoaXJhZ2FuYSkpXG4gICAgICAgICAgICAgIChkbyAoanMvYWxlcnQgKHN0ciBcIm5vLCBpdCBpcyBcIiByaWdodC1yb21hbmFqaSkpXG4gICAgICAgICAgICAgICAgICAoc2V0ISBsaWZlcyAoZGVjIGxpZmVzKSlcbiAgICAgICAgICAgICAgICAgIChuZXh0LXF1ZXN0aW9uISA6aGlyYWdhbmEpKSkpKSkpXG5cbihkZWZuIGxlYXJuLWthdGFrYW5hISBbXVxuICAoc2V0ISB3aW5zIDApXG4gIChzZXQhIGxpZmVzIDUpXG4gIChuZXh0LXF1ZXN0aW9uISA6a2F0YWthbmEpXG4gIChzZXQhICguLW9uY2xpY2sgKC5nZXRFbGVtZW50QnlJZCBqcy9kb2N1bWVudCBcImFuc3dlclwiKSlcbiAgICAgICAgKGZuIFtdXG4gICAgICAgICAgKHdoZW4gKG5vdCAoemVybz8gbGlmZXMpKVxuICAgICAgICAgICAgKGlmICg9IHJpZ2h0LXJvbWFuYWppIChudGggKGFuc3dlcmVkKSAxKSlcbiAgICAgICAgICAgICAgKGRvIChqcy9hbGVydCBcInllcywgaXQgaXNcIilcbiAgICAgICAgICAgICAgICAgIChzZXQhIHdpbnMgKGluYyB3aW5zKSlcbiAgICAgICAgICAgICAgICAgIChuZXh0LXF1ZXN0aW9uISA6a2F0YWthbmEpKVxuICAgICAgICAgICAgICAoZG8gKGpzL2FsZXJ0IChzdHIgXCJubywgaXQgaXMgXCIgcmlnaHQtcm9tYW5hamkpKVxuICAgICAgICAgICAgICAgICAgKHNldCEgbGlmZXMgKGRlYyBsaWZlcykpXG4gICAgICAgICAgICAgICAgICAobmV4dC1xdWVzdGlvbiEgOmthdGFrYW5hKSkpKSkpKVxuXG4oc2V0ISAoLi1vbmNsaWNrICguZ2V0RWxlbWVudEJ5SWQganMvZG9jdW1lbnQgXCJiZWdpblwiKSlcbiAgICAgICMoaWYgKC4tY2hlY2tlZCAoLmdldEVsZW1lbnRCeUlkIGpzL2RvY3VtZW50IFwiaGlyYWdhbmFcIikpXG4gICAgICAgICAobGVhcm4taGlyYWdhbmEhKVxuICAgICAgICAgKGxlYXJuLWthdGFrYW5hISkpKVxuIl19