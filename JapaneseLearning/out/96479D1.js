goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__26__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27__i = 0, G__27__a = new Array(arguments.length -  0);
while (G__27__i < G__27__a.length) {G__27__a[G__27__i] = arguments[G__27__i + 0]; ++G__27__i;}
  args = new cljs.core.IndexedSeq(G__27__a,0,null);
} 
return G__26__delegate.call(this,args);};
G__26.cljs$lang$maxFixedArity = 0;
G__26.cljs$lang$applyTo = (function (arglist__28){
var args = cljs.core.seq(arglist__28);
return G__26__delegate(args);
});
G__26.cljs$core$IFn$_invoke$arity$variadic = G__26__delegate;
return G__26;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30__i = 0, G__30__a = new Array(arguments.length -  0);
while (G__30__i < G__30__a.length) {G__30__a[G__30__i] = arguments[G__30__i + 0]; ++G__30__i;}
  args = new cljs.core.IndexedSeq(G__30__a,0,null);
} 
return G__29__delegate.call(this,args);};
G__29.cljs$lang$maxFixedArity = 0;
G__29.cljs$lang$applyTo = (function (arglist__31){
var args = cljs.core.seq(arglist__31);
return G__29__delegate(args);
});
G__29.cljs$core$IFn$_invoke$arity$variadic = G__29__delegate;
return G__29;
})()
);

return null;
});
