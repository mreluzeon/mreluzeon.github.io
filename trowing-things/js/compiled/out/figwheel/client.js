// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e28545){if((e28545 instanceof Error)){
var e = e28545;
return "Error: Unable to stringify";
} else {
throw e28545;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28548 = arguments.length;
switch (G__28548) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28546_SHARP_){
if(typeof p1__28546_SHARP_ === 'string'){
return p1__28546_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28546_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28551 = arguments.length;
var i__4500__auto___28552 = (0);
while(true){
if((i__4500__auto___28552 < len__4499__auto___28551)){
args__4502__auto__.push((arguments[i__4500__auto___28552]));

var G__28553 = (i__4500__auto___28552 + (1));
i__4500__auto___28552 = G__28553;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28550){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28550));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28555 = arguments.length;
var i__4500__auto___28556 = (0);
while(true){
if((i__4500__auto___28556 < len__4499__auto___28555)){
args__4502__auto__.push((arguments[i__4500__auto___28556]));

var G__28557 = (i__4500__auto___28556 + (1));
i__4500__auto___28556 = G__28557;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28554){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28554));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28558){
var map__28559 = p__28558;
var map__28559__$1 = ((((!((map__28559 == null)))?(((((map__28559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28559):map__28559);
var message = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23167__auto___28638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___28638,ch){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___28638,ch){
return (function (state_28610){
var state_val_28611 = (state_28610[(1)]);
if((state_val_28611 === (7))){
var inst_28606 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28612_28639 = state_28610__$1;
(statearr_28612_28639[(2)] = inst_28606);

(statearr_28612_28639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (1))){
var state_28610__$1 = state_28610;
var statearr_28613_28640 = state_28610__$1;
(statearr_28613_28640[(2)] = null);

(statearr_28613_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (4))){
var inst_28563 = (state_28610[(7)]);
var inst_28563__$1 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28614 = state_28610;
(statearr_28614[(7)] = inst_28563__$1);

return statearr_28614;
})();
if(cljs.core.truth_(inst_28563__$1)){
var statearr_28615_28641 = state_28610__$1;
(statearr_28615_28641[(1)] = (5));

} else {
var statearr_28616_28642 = state_28610__$1;
(statearr_28616_28642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (15))){
var inst_28570 = (state_28610[(8)]);
var inst_28585 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28570);
var inst_28586 = cljs.core.first.call(null,inst_28585);
var inst_28587 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28586);
var inst_28588 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28587)].join('');
var inst_28589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28588);
var state_28610__$1 = state_28610;
var statearr_28617_28643 = state_28610__$1;
(statearr_28617_28643[(2)] = inst_28589);

(statearr_28617_28643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (13))){
var inst_28594 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28618_28644 = state_28610__$1;
(statearr_28618_28644[(2)] = inst_28594);

(statearr_28618_28644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (6))){
var state_28610__$1 = state_28610;
var statearr_28619_28645 = state_28610__$1;
(statearr_28619_28645[(2)] = null);

(statearr_28619_28645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (17))){
var inst_28592 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28620_28646 = state_28610__$1;
(statearr_28620_28646[(2)] = inst_28592);

(statearr_28620_28646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (3))){
var inst_28608 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28610__$1,inst_28608);
} else {
if((state_val_28611 === (12))){
var inst_28569 = (state_28610[(9)]);
var inst_28583 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28569,opts);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28583)){
var statearr_28621_28647 = state_28610__$1;
(statearr_28621_28647[(1)] = (15));

} else {
var statearr_28622_28648 = state_28610__$1;
(statearr_28622_28648[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (2))){
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(4),ch);
} else {
if((state_val_28611 === (11))){
var inst_28570 = (state_28610[(8)]);
var inst_28575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28576 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28570);
var inst_28577 = cljs.core.async.timeout.call(null,(1000));
var inst_28578 = [inst_28576,inst_28577];
var inst_28579 = (new cljs.core.PersistentVector(null,2,(5),inst_28575,inst_28578,null));
var state_28610__$1 = state_28610;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28610__$1,(14),inst_28579);
} else {
if((state_val_28611 === (9))){
var inst_28570 = (state_28610[(8)]);
var inst_28596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28597 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28570);
var inst_28598 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28597);
var inst_28599 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28598)].join('');
var inst_28600 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28599);
var state_28610__$1 = (function (){var statearr_28623 = state_28610;
(statearr_28623[(10)] = inst_28596);

return statearr_28623;
})();
var statearr_28624_28649 = state_28610__$1;
(statearr_28624_28649[(2)] = inst_28600);

(statearr_28624_28649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (5))){
var inst_28563 = (state_28610[(7)]);
var inst_28565 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28566 = (new cljs.core.PersistentArrayMap(null,2,inst_28565,null));
var inst_28567 = (new cljs.core.PersistentHashSet(null,inst_28566,null));
var inst_28568 = figwheel.client.focus_msgs.call(null,inst_28567,inst_28563);
var inst_28569 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28568);
var inst_28570 = cljs.core.first.call(null,inst_28568);
var inst_28571 = figwheel.client.autoload_QMARK_.call(null);
var state_28610__$1 = (function (){var statearr_28625 = state_28610;
(statearr_28625[(9)] = inst_28569);

(statearr_28625[(8)] = inst_28570);

return statearr_28625;
})();
if(cljs.core.truth_(inst_28571)){
var statearr_28626_28650 = state_28610__$1;
(statearr_28626_28650[(1)] = (8));

} else {
var statearr_28627_28651 = state_28610__$1;
(statearr_28627_28651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (14))){
var inst_28581 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28628_28652 = state_28610__$1;
(statearr_28628_28652[(2)] = inst_28581);

(statearr_28628_28652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (16))){
var state_28610__$1 = state_28610;
var statearr_28629_28653 = state_28610__$1;
(statearr_28629_28653[(2)] = null);

(statearr_28629_28653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (10))){
var inst_28602 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28630 = state_28610;
(statearr_28630[(11)] = inst_28602);

return statearr_28630;
})();
var statearr_28631_28654 = state_28610__$1;
(statearr_28631_28654[(2)] = null);

(statearr_28631_28654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (8))){
var inst_28569 = (state_28610[(9)]);
var inst_28573 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28569,opts);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28573)){
var statearr_28632_28655 = state_28610__$1;
(statearr_28632_28655[(1)] = (11));

} else {
var statearr_28633_28656 = state_28610__$1;
(statearr_28633_28656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23167__auto___28638,ch))
;
return ((function (switch__23077__auto__,c__23167__auto___28638,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____0 = (function (){
var statearr_28634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28634[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__);

(statearr_28634[(1)] = (1));

return statearr_28634;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____1 = (function (state_28610){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_28610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e28635){if((e28635 instanceof Object)){
var ex__23081__auto__ = e28635;
var statearr_28636_28657 = state_28610;
(statearr_28636_28657[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28610;
state_28610 = G__28658;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__ = function(state_28610){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____1.call(this,state_28610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23078__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___28638,ch))
})();
var state__23169__auto__ = (function (){var statearr_28637 = f__23168__auto__.call(null);
(statearr_28637[(6)] = c__23167__auto___28638);

return statearr_28637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___28638,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28659_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28659_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28663 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28663){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28662 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28661,_STAR_print_fn_STAR_28662,sb,base_path_28663){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_28661,_STAR_print_fn_STAR_28662,sb,base_path_28663))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28662;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28661;
}}catch (e28660){if((e28660 instanceof Error)){
var e = e28660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28663], null));
} else {
var e = e28660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28663))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28664){
var map__28665 = p__28664;
var map__28665__$1 = ((((!((map__28665 == null)))?(((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var opts = map__28665__$1;
var build_id = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28665,map__28665__$1,opts,build_id){
return (function (p__28667){
var vec__28668 = p__28667;
var seq__28669 = cljs.core.seq.call(null,vec__28668);
var first__28670 = cljs.core.first.call(null,seq__28669);
var seq__28669__$1 = cljs.core.next.call(null,seq__28669);
var map__28671 = first__28670;
var map__28671__$1 = ((((!((map__28671 == null)))?(((((map__28671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28671):map__28671);
var msg = map__28671__$1;
var msg_name = cljs.core.get.call(null,map__28671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28669__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28668,seq__28669,first__28670,seq__28669__$1,map__28671,map__28671__$1,msg,msg_name,_,map__28665,map__28665__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28668,seq__28669,first__28670,seq__28669__$1,map__28671,map__28671__$1,msg,msg_name,_,map__28665,map__28665__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28665,map__28665__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28673){
var vec__28674 = p__28673;
var seq__28675 = cljs.core.seq.call(null,vec__28674);
var first__28676 = cljs.core.first.call(null,seq__28675);
var seq__28675__$1 = cljs.core.next.call(null,seq__28675);
var map__28677 = first__28676;
var map__28677__$1 = ((((!((map__28677 == null)))?(((((map__28677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28677):map__28677);
var msg = map__28677__$1;
var msg_name = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28675__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28679){
var map__28680 = p__28679;
var map__28680__$1 = ((((!((map__28680 == null)))?(((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var on_compile_warning = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28680,map__28680__$1,on_compile_warning,on_compile_fail){
return (function (p__28682){
var vec__28683 = p__28682;
var seq__28684 = cljs.core.seq.call(null,vec__28683);
var first__28685 = cljs.core.first.call(null,seq__28684);
var seq__28684__$1 = cljs.core.next.call(null,seq__28684);
var map__28686 = first__28685;
var map__28686__$1 = ((((!((map__28686 == null)))?(((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);
var msg = map__28686__$1;
var msg_name = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28684__$1;
var pred__28688 = cljs.core._EQ_;
var expr__28689 = msg_name;
if(cljs.core.truth_(pred__28688.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28689))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28688.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28689))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28680,map__28680__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__,msg_hist,msg_names,msg){
return (function (state_28778){
var state_val_28779 = (state_28778[(1)]);
if((state_val_28779 === (7))){
var inst_28698 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28698)){
var statearr_28780_28827 = state_28778__$1;
(statearr_28780_28827[(1)] = (8));

} else {
var statearr_28781_28828 = state_28778__$1;
(statearr_28781_28828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (20))){
var inst_28772 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28782_28829 = state_28778__$1;
(statearr_28782_28829[(2)] = inst_28772);

(statearr_28782_28829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (27))){
var inst_28768 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28783_28830 = state_28778__$1;
(statearr_28783_28830[(2)] = inst_28768);

(statearr_28783_28830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (1))){
var inst_28691 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28691)){
var statearr_28784_28831 = state_28778__$1;
(statearr_28784_28831[(1)] = (2));

} else {
var statearr_28785_28832 = state_28778__$1;
(statearr_28785_28832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (24))){
var inst_28770 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28786_28833 = state_28778__$1;
(statearr_28786_28833[(2)] = inst_28770);

(statearr_28786_28833[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (4))){
var inst_28776 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28778__$1,inst_28776);
} else {
if((state_val_28779 === (15))){
var inst_28774 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28787_28834 = state_28778__$1;
(statearr_28787_28834[(2)] = inst_28774);

(statearr_28787_28834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (21))){
var inst_28727 = (state_28778[(2)]);
var inst_28728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28728);
var state_28778__$1 = (function (){var statearr_28788 = state_28778;
(statearr_28788[(7)] = inst_28727);

return statearr_28788;
})();
var statearr_28789_28835 = state_28778__$1;
(statearr_28789_28835[(2)] = inst_28729);

(statearr_28789_28835[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (31))){
var inst_28757 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28757)){
var statearr_28790_28836 = state_28778__$1;
(statearr_28790_28836[(1)] = (34));

} else {
var statearr_28791_28837 = state_28778__$1;
(statearr_28791_28837[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (32))){
var inst_28766 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28792_28838 = state_28778__$1;
(statearr_28792_28838[(2)] = inst_28766);

(statearr_28792_28838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (33))){
var inst_28753 = (state_28778[(2)]);
var inst_28754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28755 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28754);
var state_28778__$1 = (function (){var statearr_28793 = state_28778;
(statearr_28793[(8)] = inst_28753);

return statearr_28793;
})();
var statearr_28794_28839 = state_28778__$1;
(statearr_28794_28839[(2)] = inst_28755);

(statearr_28794_28839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (13))){
var inst_28712 = figwheel.client.heads_up.clear.call(null);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(16),inst_28712);
} else {
if((state_val_28779 === (22))){
var inst_28733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28734 = figwheel.client.heads_up.append_warning_message.call(null,inst_28733);
var state_28778__$1 = state_28778;
var statearr_28795_28840 = state_28778__$1;
(statearr_28795_28840[(2)] = inst_28734);

(statearr_28795_28840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (36))){
var inst_28764 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28796_28841 = state_28778__$1;
(statearr_28796_28841[(2)] = inst_28764);

(statearr_28796_28841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (29))){
var inst_28744 = (state_28778[(2)]);
var inst_28745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28745);
var state_28778__$1 = (function (){var statearr_28797 = state_28778;
(statearr_28797[(9)] = inst_28744);

return statearr_28797;
})();
var statearr_28798_28842 = state_28778__$1;
(statearr_28798_28842[(2)] = inst_28746);

(statearr_28798_28842[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (6))){
var inst_28693 = (state_28778[(10)]);
var state_28778__$1 = state_28778;
var statearr_28799_28843 = state_28778__$1;
(statearr_28799_28843[(2)] = inst_28693);

(statearr_28799_28843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (28))){
var inst_28740 = (state_28778[(2)]);
var inst_28741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28742 = figwheel.client.heads_up.display_warning.call(null,inst_28741);
var state_28778__$1 = (function (){var statearr_28800 = state_28778;
(statearr_28800[(11)] = inst_28740);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(29),inst_28742);
} else {
if((state_val_28779 === (25))){
var inst_28738 = figwheel.client.heads_up.clear.call(null);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(28),inst_28738);
} else {
if((state_val_28779 === (34))){
var inst_28759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(37),inst_28759);
} else {
if((state_val_28779 === (17))){
var inst_28718 = (state_28778[(2)]);
var inst_28719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28719);
var state_28778__$1 = (function (){var statearr_28801 = state_28778;
(statearr_28801[(12)] = inst_28718);

return statearr_28801;
})();
var statearr_28802_28844 = state_28778__$1;
(statearr_28802_28844[(2)] = inst_28720);

(statearr_28802_28844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (3))){
var inst_28710 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28710)){
var statearr_28803_28845 = state_28778__$1;
(statearr_28803_28845[(1)] = (13));

} else {
var statearr_28804_28846 = state_28778__$1;
(statearr_28804_28846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (12))){
var inst_28706 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28805_28847 = state_28778__$1;
(statearr_28805_28847[(2)] = inst_28706);

(statearr_28805_28847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (2))){
var inst_28693 = (state_28778[(10)]);
var inst_28693__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28778__$1 = (function (){var statearr_28806 = state_28778;
(statearr_28806[(10)] = inst_28693__$1);

return statearr_28806;
})();
if(cljs.core.truth_(inst_28693__$1)){
var statearr_28807_28848 = state_28778__$1;
(statearr_28807_28848[(1)] = (5));

} else {
var statearr_28808_28849 = state_28778__$1;
(statearr_28808_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (23))){
var inst_28736 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28736)){
var statearr_28809_28850 = state_28778__$1;
(statearr_28809_28850[(1)] = (25));

} else {
var statearr_28810_28851 = state_28778__$1;
(statearr_28810_28851[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (35))){
var state_28778__$1 = state_28778;
var statearr_28811_28852 = state_28778__$1;
(statearr_28811_28852[(2)] = null);

(statearr_28811_28852[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (19))){
var inst_28731 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28731)){
var statearr_28812_28853 = state_28778__$1;
(statearr_28812_28853[(1)] = (22));

} else {
var statearr_28813_28854 = state_28778__$1;
(statearr_28813_28854[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (11))){
var inst_28702 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28814_28855 = state_28778__$1;
(statearr_28814_28855[(2)] = inst_28702);

(statearr_28814_28855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (9))){
var inst_28704 = figwheel.client.heads_up.clear.call(null);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(12),inst_28704);
} else {
if((state_val_28779 === (5))){
var inst_28695 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28778__$1 = state_28778;
var statearr_28815_28856 = state_28778__$1;
(statearr_28815_28856[(2)] = inst_28695);

(statearr_28815_28856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (14))){
var inst_28722 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28722)){
var statearr_28816_28857 = state_28778__$1;
(statearr_28816_28857[(1)] = (18));

} else {
var statearr_28817_28858 = state_28778__$1;
(statearr_28817_28858[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (26))){
var inst_28748 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28748)){
var statearr_28818_28859 = state_28778__$1;
(statearr_28818_28859[(1)] = (30));

} else {
var statearr_28819_28860 = state_28778__$1;
(statearr_28819_28860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (16))){
var inst_28714 = (state_28778[(2)]);
var inst_28715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28716 = figwheel.client.heads_up.display_exception.call(null,inst_28715);
var state_28778__$1 = (function (){var statearr_28820 = state_28778;
(statearr_28820[(13)] = inst_28714);

return statearr_28820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(17),inst_28716);
} else {
if((state_val_28779 === (30))){
var inst_28750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28751 = figwheel.client.heads_up.display_warning.call(null,inst_28750);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(33),inst_28751);
} else {
if((state_val_28779 === (10))){
var inst_28708 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28821_28861 = state_28778__$1;
(statearr_28821_28861[(2)] = inst_28708);

(statearr_28821_28861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (18))){
var inst_28724 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28725 = figwheel.client.heads_up.display_exception.call(null,inst_28724);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(21),inst_28725);
} else {
if((state_val_28779 === (37))){
var inst_28761 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28822_28862 = state_28778__$1;
(statearr_28822_28862[(2)] = inst_28761);

(statearr_28822_28862[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (8))){
var inst_28700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(11),inst_28700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23167__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23077__auto__,c__23167__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____0 = (function (){
var statearr_28823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28823[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__);

(statearr_28823[(1)] = (1));

return statearr_28823;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____1 = (function (state_28778){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_28778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e28824){if((e28824 instanceof Object)){
var ex__23081__auto__ = e28824;
var statearr_28825_28863 = state_28778;
(statearr_28825_28863[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28864 = state_28778;
state_28778 = G__28864;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__ = function(state_28778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____1.call(this,state_28778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__,msg_hist,msg_names,msg))
})();
var state__23169__auto__ = (function (){var statearr_28826 = f__23168__auto__.call(null);
(statearr_28826[(6)] = c__23167__auto__);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__,msg_hist,msg_names,msg))
);

return c__23167__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23167__auto___28893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___28893,ch){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___28893,ch){
return (function (state_28879){
var state_val_28880 = (state_28879[(1)]);
if((state_val_28880 === (1))){
var state_28879__$1 = state_28879;
var statearr_28881_28894 = state_28879__$1;
(statearr_28881_28894[(2)] = null);

(statearr_28881_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (2))){
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(4),ch);
} else {
if((state_val_28880 === (3))){
var inst_28877 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28879__$1,inst_28877);
} else {
if((state_val_28880 === (4))){
var inst_28867 = (state_28879[(7)]);
var inst_28867__$1 = (state_28879[(2)]);
var state_28879__$1 = (function (){var statearr_28882 = state_28879;
(statearr_28882[(7)] = inst_28867__$1);

return statearr_28882;
})();
if(cljs.core.truth_(inst_28867__$1)){
var statearr_28883_28895 = state_28879__$1;
(statearr_28883_28895[(1)] = (5));

} else {
var statearr_28884_28896 = state_28879__$1;
(statearr_28884_28896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (5))){
var inst_28867 = (state_28879[(7)]);
var inst_28869 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28867);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(8),inst_28869);
} else {
if((state_val_28880 === (6))){
var state_28879__$1 = state_28879;
var statearr_28885_28897 = state_28879__$1;
(statearr_28885_28897[(2)] = null);

(statearr_28885_28897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (7))){
var inst_28875 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28886_28898 = state_28879__$1;
(statearr_28886_28898[(2)] = inst_28875);

(statearr_28886_28898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (8))){
var inst_28871 = (state_28879[(2)]);
var state_28879__$1 = (function (){var statearr_28887 = state_28879;
(statearr_28887[(8)] = inst_28871);

return statearr_28887;
})();
var statearr_28888_28899 = state_28879__$1;
(statearr_28888_28899[(2)] = null);

(statearr_28888_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23167__auto___28893,ch))
;
return ((function (switch__23077__auto__,c__23167__auto___28893,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23078__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23078__auto____0 = (function (){
var statearr_28889 = [null,null,null,null,null,null,null,null,null];
(statearr_28889[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23078__auto__);

(statearr_28889[(1)] = (1));

return statearr_28889;
});
var figwheel$client$heads_up_plugin_$_state_machine__23078__auto____1 = (function (state_28879){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_28879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e28890){if((e28890 instanceof Object)){
var ex__23081__auto__ = e28890;
var statearr_28891_28900 = state_28879;
(statearr_28891_28900[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28901 = state_28879;
state_28879 = G__28901;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23078__auto__ = function(state_28879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23078__auto____1.call(this,state_28879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23078__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23078__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___28893,ch))
})();
var state__23169__auto__ = (function (){var statearr_28892 = f__23168__auto__.call(null);
(statearr_28892[(6)] = c__23167__auto___28893);

return statearr_28892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___28893,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__){
return (function (state_28907){
var state_val_28908 = (state_28907[(1)]);
if((state_val_28908 === (1))){
var inst_28902 = cljs.core.async.timeout.call(null,(3000));
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(2),inst_28902);
} else {
if((state_val_28908 === (2))){
var inst_28904 = (state_28907[(2)]);
var inst_28905 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28907__$1 = (function (){var statearr_28909 = state_28907;
(statearr_28909[(7)] = inst_28904);

return statearr_28909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28907__$1,inst_28905);
} else {
return null;
}
}
});})(c__23167__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____0 = (function (){
var statearr_28910 = [null,null,null,null,null,null,null,null];
(statearr_28910[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__);

(statearr_28910[(1)] = (1));

return statearr_28910;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____1 = (function (state_28907){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_28907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e28911){if((e28911 instanceof Object)){
var ex__23081__auto__ = e28911;
var statearr_28912_28914 = state_28907;
(statearr_28912_28914[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28907;
state_28907 = G__28915;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__ = function(state_28907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____1.call(this,state_28907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23078__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__))
})();
var state__23169__auto__ = (function (){var statearr_28913 = f__23168__auto__.call(null);
(statearr_28913[(6)] = c__23167__auto__);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__))
);

return c__23167__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__,figwheel_version,temp__5457__auto__){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (1))){
var inst_28916 = cljs.core.async.timeout.call(null,(2000));
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(2),inst_28916);
} else {
if((state_val_28923 === (2))){
var inst_28918 = (state_28922[(2)]);
var inst_28919 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28920 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28919);
var state_28922__$1 = (function (){var statearr_28924 = state_28922;
(statearr_28924[(7)] = inst_28918);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
return null;
}
}
});})(c__23167__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____0 = (function (){
var statearr_28925 = [null,null,null,null,null,null,null,null];
(statearr_28925[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__);

(statearr_28925[(1)] = (1));

return statearr_28925;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____1 = (function (state_28922){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object)){
var ex__23081__auto__ = e28926;
var statearr_28927_28929 = state_28922;
(statearr_28927_28929[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28930 = state_28922;
state_28922 = G__28930;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23169__auto__ = (function (){var statearr_28928 = f__23168__auto__.call(null);
(statearr_28928[(6)] = c__23167__auto__);

return statearr_28928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__,figwheel_version,temp__5457__auto__))
);

return c__23167__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28931){
var map__28932 = p__28931;
var map__28932__$1 = ((((!((map__28932 == null)))?(((((map__28932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28932):map__28932);
var file = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28934 = "";
var G__28934__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28934),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28934);
var G__28934__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28934__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28934__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28934__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28934__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28935){
var map__28936 = p__28935;
var map__28936__$1 = ((((!((map__28936 == null)))?(((((map__28936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28936):map__28936);
var ed = map__28936__$1;
var formatted_exception = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28938_28942 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28939_28943 = null;
var count__28940_28944 = (0);
var i__28941_28945 = (0);
while(true){
if((i__28941_28945 < count__28940_28944)){
var msg_28946 = cljs.core._nth.call(null,chunk__28939_28943,i__28941_28945);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28946);


var G__28947 = seq__28938_28942;
var G__28948 = chunk__28939_28943;
var G__28949 = count__28940_28944;
var G__28950 = (i__28941_28945 + (1));
seq__28938_28942 = G__28947;
chunk__28939_28943 = G__28948;
count__28940_28944 = G__28949;
i__28941_28945 = G__28950;
continue;
} else {
var temp__5457__auto___28951 = cljs.core.seq.call(null,seq__28938_28942);
if(temp__5457__auto___28951){
var seq__28938_28952__$1 = temp__5457__auto___28951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28938_28952__$1)){
var c__4319__auto___28953 = cljs.core.chunk_first.call(null,seq__28938_28952__$1);
var G__28954 = cljs.core.chunk_rest.call(null,seq__28938_28952__$1);
var G__28955 = c__4319__auto___28953;
var G__28956 = cljs.core.count.call(null,c__4319__auto___28953);
var G__28957 = (0);
seq__28938_28942 = G__28954;
chunk__28939_28943 = G__28955;
count__28940_28944 = G__28956;
i__28941_28945 = G__28957;
continue;
} else {
var msg_28958 = cljs.core.first.call(null,seq__28938_28952__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28958);


var G__28959 = cljs.core.next.call(null,seq__28938_28952__$1);
var G__28960 = null;
var G__28961 = (0);
var G__28962 = (0);
seq__28938_28942 = G__28959;
chunk__28939_28943 = G__28960;
count__28940_28944 = G__28961;
i__28941_28945 = G__28962;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28963){
var map__28964 = p__28963;
var map__28964__$1 = ((((!((map__28964 == null)))?(((((map__28964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28964):map__28964);
var w = map__28964__$1;
var message = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28966 = cljs.core.seq.call(null,plugins);
var chunk__28967 = null;
var count__28968 = (0);
var i__28969 = (0);
while(true){
if((i__28969 < count__28968)){
var vec__28970 = cljs.core._nth.call(null,chunk__28967,i__28969);
var k = cljs.core.nth.call(null,vec__28970,(0),null);
var plugin = cljs.core.nth.call(null,vec__28970,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28966,chunk__28967,count__28968,i__28969,pl_28976,vec__28970,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28976.call(null,msg_hist);
});})(seq__28966,chunk__28967,count__28968,i__28969,pl_28976,vec__28970,k,plugin))
);
} else {
}


var G__28977 = seq__28966;
var G__28978 = chunk__28967;
var G__28979 = count__28968;
var G__28980 = (i__28969 + (1));
seq__28966 = G__28977;
chunk__28967 = G__28978;
count__28968 = G__28979;
i__28969 = G__28980;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28966);
if(temp__5457__auto__){
var seq__28966__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28966__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28966__$1);
var G__28981 = cljs.core.chunk_rest.call(null,seq__28966__$1);
var G__28982 = c__4319__auto__;
var G__28983 = cljs.core.count.call(null,c__4319__auto__);
var G__28984 = (0);
seq__28966 = G__28981;
chunk__28967 = G__28982;
count__28968 = G__28983;
i__28969 = G__28984;
continue;
} else {
var vec__28973 = cljs.core.first.call(null,seq__28966__$1);
var k = cljs.core.nth.call(null,vec__28973,(0),null);
var plugin = cljs.core.nth.call(null,vec__28973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28985 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28966,chunk__28967,count__28968,i__28969,pl_28985,vec__28973,k,plugin,seq__28966__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28985.call(null,msg_hist);
});})(seq__28966,chunk__28967,count__28968,i__28969,pl_28985,vec__28973,k,plugin,seq__28966__$1,temp__5457__auto__))
);
} else {
}


var G__28986 = cljs.core.next.call(null,seq__28966__$1);
var G__28987 = null;
var G__28988 = (0);
var G__28989 = (0);
seq__28966 = G__28986;
chunk__28967 = G__28987;
count__28968 = G__28988;
i__28969 = G__28989;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28991 = arguments.length;
switch (G__28991) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28992_28997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28993_28998 = null;
var count__28994_28999 = (0);
var i__28995_29000 = (0);
while(true){
if((i__28995_29000 < count__28994_28999)){
var msg_29001 = cljs.core._nth.call(null,chunk__28993_28998,i__28995_29000);
figwheel.client.socket.handle_incoming_message.call(null,msg_29001);


var G__29002 = seq__28992_28997;
var G__29003 = chunk__28993_28998;
var G__29004 = count__28994_28999;
var G__29005 = (i__28995_29000 + (1));
seq__28992_28997 = G__29002;
chunk__28993_28998 = G__29003;
count__28994_28999 = G__29004;
i__28995_29000 = G__29005;
continue;
} else {
var temp__5457__auto___29006 = cljs.core.seq.call(null,seq__28992_28997);
if(temp__5457__auto___29006){
var seq__28992_29007__$1 = temp__5457__auto___29006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28992_29007__$1)){
var c__4319__auto___29008 = cljs.core.chunk_first.call(null,seq__28992_29007__$1);
var G__29009 = cljs.core.chunk_rest.call(null,seq__28992_29007__$1);
var G__29010 = c__4319__auto___29008;
var G__29011 = cljs.core.count.call(null,c__4319__auto___29008);
var G__29012 = (0);
seq__28992_28997 = G__29009;
chunk__28993_28998 = G__29010;
count__28994_28999 = G__29011;
i__28995_29000 = G__29012;
continue;
} else {
var msg_29013 = cljs.core.first.call(null,seq__28992_29007__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29013);


var G__29014 = cljs.core.next.call(null,seq__28992_29007__$1);
var G__29015 = null;
var G__29016 = (0);
var G__29017 = (0);
seq__28992_28997 = G__29014;
chunk__28993_28998 = G__29015;
count__28994_28999 = G__29016;
i__28995_29000 = G__29017;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29022 = arguments.length;
var i__4500__auto___29023 = (0);
while(true){
if((i__4500__auto___29023 < len__4499__auto___29022)){
args__4502__auto__.push((arguments[i__4500__auto___29023]));

var G__29024 = (i__4500__auto___29023 + (1));
i__4500__auto___29023 = G__29024;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29019){
var map__29020 = p__29019;
var map__29020__$1 = ((((!((map__29020 == null)))?(((((map__29020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29020):map__29020);
var opts = map__29020__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29018){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29018));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29025){if((e29025 instanceof Error)){
var e = e29025;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29025;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29026){
var map__29027 = p__29026;
var map__29027__$1 = ((((!((map__29027 == null)))?(((((map__29027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29027):map__29027);
var msg_name = cljs.core.get.call(null,map__29027__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1539278424304
