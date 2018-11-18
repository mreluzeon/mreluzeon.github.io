// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28257){
var map__28258 = p__28257;
var map__28258__$1 = ((((!((map__28258 == null)))?(((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var m = map__28258__$1;
var n = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28260_28282 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28261_28283 = null;
var count__28262_28284 = (0);
var i__28263_28285 = (0);
while(true){
if((i__28263_28285 < count__28262_28284)){
var f_28286 = cljs.core._nth.call(null,chunk__28261_28283,i__28263_28285);
cljs.core.println.call(null,"  ",f_28286);


var G__28287 = seq__28260_28282;
var G__28288 = chunk__28261_28283;
var G__28289 = count__28262_28284;
var G__28290 = (i__28263_28285 + (1));
seq__28260_28282 = G__28287;
chunk__28261_28283 = G__28288;
count__28262_28284 = G__28289;
i__28263_28285 = G__28290;
continue;
} else {
var temp__5457__auto___28291 = cljs.core.seq.call(null,seq__28260_28282);
if(temp__5457__auto___28291){
var seq__28260_28292__$1 = temp__5457__auto___28291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28260_28292__$1)){
var c__4319__auto___28293 = cljs.core.chunk_first.call(null,seq__28260_28292__$1);
var G__28294 = cljs.core.chunk_rest.call(null,seq__28260_28292__$1);
var G__28295 = c__4319__auto___28293;
var G__28296 = cljs.core.count.call(null,c__4319__auto___28293);
var G__28297 = (0);
seq__28260_28282 = G__28294;
chunk__28261_28283 = G__28295;
count__28262_28284 = G__28296;
i__28263_28285 = G__28297;
continue;
} else {
var f_28298 = cljs.core.first.call(null,seq__28260_28292__$1);
cljs.core.println.call(null,"  ",f_28298);


var G__28299 = cljs.core.next.call(null,seq__28260_28292__$1);
var G__28300 = null;
var G__28301 = (0);
var G__28302 = (0);
seq__28260_28282 = G__28299;
chunk__28261_28283 = G__28300;
count__28262_28284 = G__28301;
i__28263_28285 = G__28302;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28303 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28303);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28303)))?cljs.core.second.call(null,arglists_28303):arglists_28303));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28264_28304 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28265_28305 = null;
var count__28266_28306 = (0);
var i__28267_28307 = (0);
while(true){
if((i__28267_28307 < count__28266_28306)){
var vec__28268_28308 = cljs.core._nth.call(null,chunk__28265_28305,i__28267_28307);
var name_28309 = cljs.core.nth.call(null,vec__28268_28308,(0),null);
var map__28271_28310 = cljs.core.nth.call(null,vec__28268_28308,(1),null);
var map__28271_28311__$1 = ((((!((map__28271_28310 == null)))?(((((map__28271_28310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28271_28310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28271_28310):map__28271_28310);
var doc_28312 = cljs.core.get.call(null,map__28271_28311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28313 = cljs.core.get.call(null,map__28271_28311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28309);

cljs.core.println.call(null," ",arglists_28313);

if(cljs.core.truth_(doc_28312)){
cljs.core.println.call(null," ",doc_28312);
} else {
}


var G__28314 = seq__28264_28304;
var G__28315 = chunk__28265_28305;
var G__28316 = count__28266_28306;
var G__28317 = (i__28267_28307 + (1));
seq__28264_28304 = G__28314;
chunk__28265_28305 = G__28315;
count__28266_28306 = G__28316;
i__28267_28307 = G__28317;
continue;
} else {
var temp__5457__auto___28318 = cljs.core.seq.call(null,seq__28264_28304);
if(temp__5457__auto___28318){
var seq__28264_28319__$1 = temp__5457__auto___28318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28264_28319__$1)){
var c__4319__auto___28320 = cljs.core.chunk_first.call(null,seq__28264_28319__$1);
var G__28321 = cljs.core.chunk_rest.call(null,seq__28264_28319__$1);
var G__28322 = c__4319__auto___28320;
var G__28323 = cljs.core.count.call(null,c__4319__auto___28320);
var G__28324 = (0);
seq__28264_28304 = G__28321;
chunk__28265_28305 = G__28322;
count__28266_28306 = G__28323;
i__28267_28307 = G__28324;
continue;
} else {
var vec__28273_28325 = cljs.core.first.call(null,seq__28264_28319__$1);
var name_28326 = cljs.core.nth.call(null,vec__28273_28325,(0),null);
var map__28276_28327 = cljs.core.nth.call(null,vec__28273_28325,(1),null);
var map__28276_28328__$1 = ((((!((map__28276_28327 == null)))?(((((map__28276_28327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28276_28327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28276_28327):map__28276_28327);
var doc_28329 = cljs.core.get.call(null,map__28276_28328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28330 = cljs.core.get.call(null,map__28276_28328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28326);

cljs.core.println.call(null," ",arglists_28330);

if(cljs.core.truth_(doc_28329)){
cljs.core.println.call(null," ",doc_28329);
} else {
}


var G__28331 = cljs.core.next.call(null,seq__28264_28319__$1);
var G__28332 = null;
var G__28333 = (0);
var G__28334 = (0);
seq__28264_28304 = G__28331;
chunk__28265_28305 = G__28332;
count__28266_28306 = G__28333;
i__28267_28307 = G__28334;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28278 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28279 = null;
var count__28280 = (0);
var i__28281 = (0);
while(true){
if((i__28281 < count__28280)){
var role = cljs.core._nth.call(null,chunk__28279,i__28281);
var temp__5457__auto___28335__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28335__$1)){
var spec_28336 = temp__5457__auto___28335__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28336));
} else {
}


var G__28337 = seq__28278;
var G__28338 = chunk__28279;
var G__28339 = count__28280;
var G__28340 = (i__28281 + (1));
seq__28278 = G__28337;
chunk__28279 = G__28338;
count__28280 = G__28339;
i__28281 = G__28340;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28278);
if(temp__5457__auto____$1){
var seq__28278__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28278__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28278__$1);
var G__28341 = cljs.core.chunk_rest.call(null,seq__28278__$1);
var G__28342 = c__4319__auto__;
var G__28343 = cljs.core.count.call(null,c__4319__auto__);
var G__28344 = (0);
seq__28278 = G__28341;
chunk__28279 = G__28342;
count__28280 = G__28343;
i__28281 = G__28344;
continue;
} else {
var role = cljs.core.first.call(null,seq__28278__$1);
var temp__5457__auto___28345__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28345__$2)){
var spec_28346 = temp__5457__auto___28345__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28346));
} else {
}


var G__28347 = cljs.core.next.call(null,seq__28278__$1);
var G__28348 = null;
var G__28349 = (0);
var G__28350 = (0);
seq__28278 = G__28347;
chunk__28279 = G__28348;
count__28280 = G__28349;
i__28281 = G__28350;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1539278422702
