// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23227 = arguments.length;
switch (G__23227) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23228 = (function (f,blockable,meta23229){
this.f = f;
this.blockable = blockable;
this.meta23229 = meta23229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23230,meta23229__$1){
var self__ = this;
var _23230__$1 = this;
return (new cljs.core.async.t_cljs$core$async23228(self__.f,self__.blockable,meta23229__$1));
});

cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23230){
var self__ = this;
var _23230__$1 = this;
return self__.meta23229;
});

cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23229","meta23229",1348747339,null)], null);
});

cljs.core.async.t_cljs$core$async23228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23228";

cljs.core.async.t_cljs$core$async23228.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23228");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23228.
 */
cljs.core.async.__GT_t_cljs$core$async23228 = (function cljs$core$async$__GT_t_cljs$core$async23228(f__$1,blockable__$1,meta23229){
return (new cljs.core.async.t_cljs$core$async23228(f__$1,blockable__$1,meta23229));
});

}

return (new cljs.core.async.t_cljs$core$async23228(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23234 = arguments.length;
switch (G__23234) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23237 = arguments.length;
switch (G__23237) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23240 = arguments.length;
switch (G__23240) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23242 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23242);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23242,ret){
return (function (){
return fn1.call(null,val_23242);
});})(val_23242,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23244 = arguments.length;
switch (G__23244) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___23246 = n;
var x_23247 = (0);
while(true){
if((x_23247 < n__4376__auto___23246)){
(a[x_23247] = (0));

var G__23248 = (x_23247 + (1));
x_23247 = G__23248;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23249 = (i + (1));
i = G__23249;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23250 = (function (flag,meta23251){
this.flag = flag;
this.meta23251 = meta23251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23252,meta23251__$1){
var self__ = this;
var _23252__$1 = this;
return (new cljs.core.async.t_cljs$core$async23250(self__.flag,meta23251__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23252){
var self__ = this;
var _23252__$1 = this;
return self__.meta23251;
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23251","meta23251",-1726722846,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23250";

cljs.core.async.t_cljs$core$async23250.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23250");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23250.
 */
cljs.core.async.__GT_t_cljs$core$async23250 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23250(flag__$1,meta23251){
return (new cljs.core.async.t_cljs$core$async23250(flag__$1,meta23251));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23250(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23253 = (function (flag,cb,meta23254){
this.flag = flag;
this.cb = cb;
this.meta23254 = meta23254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23255,meta23254__$1){
var self__ = this;
var _23255__$1 = this;
return (new cljs.core.async.t_cljs$core$async23253(self__.flag,self__.cb,meta23254__$1));
});

cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23255){
var self__ = this;
var _23255__$1 = this;
return self__.meta23254;
});

cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23254","meta23254",-1344686417,null)], null);
});

cljs.core.async.t_cljs$core$async23253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23253";

cljs.core.async.t_cljs$core$async23253.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23253");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23253.
 */
cljs.core.async.__GT_t_cljs$core$async23253 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23253(flag__$1,cb__$1,meta23254){
return (new cljs.core.async.t_cljs$core$async23253(flag__$1,cb__$1,meta23254));
});

}

return (new cljs.core.async.t_cljs$core$async23253(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23256_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23257_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23257_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23258 = (i + (1));
i = G__23258;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23264 = arguments.length;
var i__4500__auto___23265 = (0);
while(true){
if((i__4500__auto___23265 < len__4499__auto___23264)){
args__4502__auto__.push((arguments[i__4500__auto___23265]));

var G__23266 = (i__4500__auto___23265 + (1));
i__4500__auto___23265 = G__23266;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23261){
var map__23262 = p__23261;
var map__23262__$1 = ((((!((map__23262 == null)))?(((((map__23262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23262):map__23262);
var opts = map__23262__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23259){
var G__23260 = cljs.core.first.call(null,seq23259);
var seq23259__$1 = cljs.core.next.call(null,seq23259);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23260,seq23259__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23268 = arguments.length;
switch (G__23268) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23167__auto___23314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___23314){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___23314){
return (function (state_23292){
var state_val_23293 = (state_23292[(1)]);
if((state_val_23293 === (7))){
var inst_23288 = (state_23292[(2)]);
var state_23292__$1 = state_23292;
var statearr_23294_23315 = state_23292__$1;
(statearr_23294_23315[(2)] = inst_23288);

(statearr_23294_23315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (1))){
var state_23292__$1 = state_23292;
var statearr_23295_23316 = state_23292__$1;
(statearr_23295_23316[(2)] = null);

(statearr_23295_23316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (4))){
var inst_23271 = (state_23292[(7)]);
var inst_23271__$1 = (state_23292[(2)]);
var inst_23272 = (inst_23271__$1 == null);
var state_23292__$1 = (function (){var statearr_23296 = state_23292;
(statearr_23296[(7)] = inst_23271__$1);

return statearr_23296;
})();
if(cljs.core.truth_(inst_23272)){
var statearr_23297_23317 = state_23292__$1;
(statearr_23297_23317[(1)] = (5));

} else {
var statearr_23298_23318 = state_23292__$1;
(statearr_23298_23318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (13))){
var state_23292__$1 = state_23292;
var statearr_23299_23319 = state_23292__$1;
(statearr_23299_23319[(2)] = null);

(statearr_23299_23319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (6))){
var inst_23271 = (state_23292[(7)]);
var state_23292__$1 = state_23292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23292__$1,(11),to,inst_23271);
} else {
if((state_val_23293 === (3))){
var inst_23290 = (state_23292[(2)]);
var state_23292__$1 = state_23292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23292__$1,inst_23290);
} else {
if((state_val_23293 === (12))){
var state_23292__$1 = state_23292;
var statearr_23300_23320 = state_23292__$1;
(statearr_23300_23320[(2)] = null);

(statearr_23300_23320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (2))){
var state_23292__$1 = state_23292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23292__$1,(4),from);
} else {
if((state_val_23293 === (11))){
var inst_23281 = (state_23292[(2)]);
var state_23292__$1 = state_23292;
if(cljs.core.truth_(inst_23281)){
var statearr_23301_23321 = state_23292__$1;
(statearr_23301_23321[(1)] = (12));

} else {
var statearr_23302_23322 = state_23292__$1;
(statearr_23302_23322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (9))){
var state_23292__$1 = state_23292;
var statearr_23303_23323 = state_23292__$1;
(statearr_23303_23323[(2)] = null);

(statearr_23303_23323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (5))){
var state_23292__$1 = state_23292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23304_23324 = state_23292__$1;
(statearr_23304_23324[(1)] = (8));

} else {
var statearr_23305_23325 = state_23292__$1;
(statearr_23305_23325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (14))){
var inst_23286 = (state_23292[(2)]);
var state_23292__$1 = state_23292;
var statearr_23306_23326 = state_23292__$1;
(statearr_23306_23326[(2)] = inst_23286);

(statearr_23306_23326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (10))){
var inst_23278 = (state_23292[(2)]);
var state_23292__$1 = state_23292;
var statearr_23307_23327 = state_23292__$1;
(statearr_23307_23327[(2)] = inst_23278);

(statearr_23307_23327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23293 === (8))){
var inst_23275 = cljs.core.async.close_BANG_.call(null,to);
var state_23292__$1 = state_23292;
var statearr_23308_23328 = state_23292__$1;
(statearr_23308_23328[(2)] = inst_23275);

(statearr_23308_23328[(1)] = (10));


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
});})(c__23167__auto___23314))
;
return ((function (switch__23077__auto__,c__23167__auto___23314){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_23309 = [null,null,null,null,null,null,null,null];
(statearr_23309[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_23309[(1)] = (1));

return statearr_23309;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_23292){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23310){if((e23310 instanceof Object)){
var ex__23081__auto__ = e23310;
var statearr_23311_23329 = state_23292;
(statearr_23311_23329[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23330 = state_23292;
state_23292 = G__23330;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_23292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_23292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___23314))
})();
var state__23169__auto__ = (function (){var statearr_23312 = f__23168__auto__.call(null);
(statearr_23312[(6)] = c__23167__auto___23314);

return statearr_23312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___23314))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23331){
var vec__23332 = p__23331;
var v = cljs.core.nth.call(null,vec__23332,(0),null);
var p = cljs.core.nth.call(null,vec__23332,(1),null);
var job = vec__23332;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23167__auto___23503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results){
return (function (state_23339){
var state_val_23340 = (state_23339[(1)]);
if((state_val_23340 === (1))){
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23339__$1,(2),res,v);
} else {
if((state_val_23340 === (2))){
var inst_23336 = (state_23339[(2)]);
var inst_23337 = cljs.core.async.close_BANG_.call(null,res);
var state_23339__$1 = (function (){var statearr_23341 = state_23339;
(statearr_23341[(7)] = inst_23336);

return statearr_23341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23339__$1,inst_23337);
} else {
return null;
}
}
});})(c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results))
;
return ((function (switch__23077__auto__,c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_23342 = [null,null,null,null,null,null,null,null];
(statearr_23342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__);

(statearr_23342[(1)] = (1));

return statearr_23342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1 = (function (state_23339){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23343){if((e23343 instanceof Object)){
var ex__23081__auto__ = e23343;
var statearr_23344_23504 = state_23339;
(statearr_23344_23504[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23505 = state_23339;
state_23339 = G__23505;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = function(state_23339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1.call(this,state_23339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results))
})();
var state__23169__auto__ = (function (){var statearr_23345 = f__23168__auto__.call(null);
(statearr_23345[(6)] = c__23167__auto___23503);

return statearr_23345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___23503,res,vec__23332,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23346){
var vec__23347 = p__23346;
var v = cljs.core.nth.call(null,vec__23347,(0),null);
var p = cljs.core.nth.call(null,vec__23347,(1),null);
var job = vec__23347;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___23506 = n;
var __23507 = (0);
while(true){
if((__23507 < n__4376__auto___23506)){
var G__23350_23508 = type;
var G__23350_23509__$1 = (((G__23350_23508 instanceof cljs.core.Keyword))?G__23350_23508.fqn:null);
switch (G__23350_23509__$1) {
case "compute":
var c__23167__auto___23511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23507,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (__23507,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function (state_23363){
var state_val_23364 = (state_23363[(1)]);
if((state_val_23364 === (1))){
var state_23363__$1 = state_23363;
var statearr_23365_23512 = state_23363__$1;
(statearr_23365_23512[(2)] = null);

(statearr_23365_23512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (2))){
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23363__$1,(4),jobs);
} else {
if((state_val_23364 === (3))){
var inst_23361 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23363__$1,inst_23361);
} else {
if((state_val_23364 === (4))){
var inst_23353 = (state_23363[(2)]);
var inst_23354 = process.call(null,inst_23353);
var state_23363__$1 = state_23363;
if(cljs.core.truth_(inst_23354)){
var statearr_23366_23513 = state_23363__$1;
(statearr_23366_23513[(1)] = (5));

} else {
var statearr_23367_23514 = state_23363__$1;
(statearr_23367_23514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (5))){
var state_23363__$1 = state_23363;
var statearr_23368_23515 = state_23363__$1;
(statearr_23368_23515[(2)] = null);

(statearr_23368_23515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (6))){
var state_23363__$1 = state_23363;
var statearr_23369_23516 = state_23363__$1;
(statearr_23369_23516[(2)] = null);

(statearr_23369_23516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (7))){
var inst_23359 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23370_23517 = state_23363__$1;
(statearr_23370_23517[(2)] = inst_23359);

(statearr_23370_23517[(1)] = (3));


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
});})(__23507,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
;
return ((function (__23507,switch__23077__auto__,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_23371 = [null,null,null,null,null,null,null];
(statearr_23371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__);

(statearr_23371[(1)] = (1));

return statearr_23371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1 = (function (state_23363){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23372){if((e23372 instanceof Object)){
var ex__23081__auto__ = e23372;
var statearr_23373_23518 = state_23363;
(statearr_23373_23518[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23519 = state_23363;
state_23363 = G__23519;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = function(state_23363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1.call(this,state_23363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__;
})()
;})(__23507,switch__23077__auto__,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
})();
var state__23169__auto__ = (function (){var statearr_23374 = f__23168__auto__.call(null);
(statearr_23374[(6)] = c__23167__auto___23511);

return statearr_23374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(__23507,c__23167__auto___23511,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
);


break;
case "async":
var c__23167__auto___23520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23507,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (__23507,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function (state_23387){
var state_val_23388 = (state_23387[(1)]);
if((state_val_23388 === (1))){
var state_23387__$1 = state_23387;
var statearr_23389_23521 = state_23387__$1;
(statearr_23389_23521[(2)] = null);

(statearr_23389_23521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (2))){
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23387__$1,(4),jobs);
} else {
if((state_val_23388 === (3))){
var inst_23385 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23387__$1,inst_23385);
} else {
if((state_val_23388 === (4))){
var inst_23377 = (state_23387[(2)]);
var inst_23378 = async.call(null,inst_23377);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23378)){
var statearr_23390_23522 = state_23387__$1;
(statearr_23390_23522[(1)] = (5));

} else {
var statearr_23391_23523 = state_23387__$1;
(statearr_23391_23523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (5))){
var state_23387__$1 = state_23387;
var statearr_23392_23524 = state_23387__$1;
(statearr_23392_23524[(2)] = null);

(statearr_23392_23524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (6))){
var state_23387__$1 = state_23387;
var statearr_23393_23525 = state_23387__$1;
(statearr_23393_23525[(2)] = null);

(statearr_23393_23525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (7))){
var inst_23383 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23394_23526 = state_23387__$1;
(statearr_23394_23526[(2)] = inst_23383);

(statearr_23394_23526[(1)] = (3));


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
});})(__23507,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
;
return ((function (__23507,switch__23077__auto__,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_23395 = [null,null,null,null,null,null,null];
(statearr_23395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__);

(statearr_23395[(1)] = (1));

return statearr_23395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1 = (function (state_23387){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23396){if((e23396 instanceof Object)){
var ex__23081__auto__ = e23396;
var statearr_23397_23527 = state_23387;
(statearr_23397_23527[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23387;
state_23387 = G__23528;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__;
})()
;})(__23507,switch__23077__auto__,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
})();
var state__23169__auto__ = (function (){var statearr_23398 = f__23168__auto__.call(null);
(statearr_23398[(6)] = c__23167__auto___23520);

return statearr_23398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(__23507,c__23167__auto___23520,G__23350_23508,G__23350_23509__$1,n__4376__auto___23506,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23350_23509__$1)].join('')));

}

var G__23529 = (__23507 + (1));
__23507 = G__23529;
continue;
} else {
}
break;
}

var c__23167__auto___23530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___23530,jobs,results,process,async){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___23530,jobs,results,process,async){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (1))){
var state_23420__$1 = state_23420;
var statearr_23422_23531 = state_23420__$1;
(statearr_23422_23531[(2)] = null);

(statearr_23422_23531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (2))){
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23420__$1,(4),from);
} else {
if((state_val_23421 === (3))){
var inst_23418 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
if((state_val_23421 === (4))){
var inst_23401 = (state_23420[(7)]);
var inst_23401__$1 = (state_23420[(2)]);
var inst_23402 = (inst_23401__$1 == null);
var state_23420__$1 = (function (){var statearr_23423 = state_23420;
(statearr_23423[(7)] = inst_23401__$1);

return statearr_23423;
})();
if(cljs.core.truth_(inst_23402)){
var statearr_23424_23532 = state_23420__$1;
(statearr_23424_23532[(1)] = (5));

} else {
var statearr_23425_23533 = state_23420__$1;
(statearr_23425_23533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (5))){
var inst_23404 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23420__$1 = state_23420;
var statearr_23426_23534 = state_23420__$1;
(statearr_23426_23534[(2)] = inst_23404);

(statearr_23426_23534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (6))){
var inst_23401 = (state_23420[(7)]);
var inst_23406 = (state_23420[(8)]);
var inst_23406__$1 = cljs.core.async.chan.call(null,(1));
var inst_23407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23408 = [inst_23401,inst_23406__$1];
var inst_23409 = (new cljs.core.PersistentVector(null,2,(5),inst_23407,inst_23408,null));
var state_23420__$1 = (function (){var statearr_23427 = state_23420;
(statearr_23427[(8)] = inst_23406__$1);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(8),jobs,inst_23409);
} else {
if((state_val_23421 === (7))){
var inst_23416 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23428_23535 = state_23420__$1;
(statearr_23428_23535[(2)] = inst_23416);

(statearr_23428_23535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (8))){
var inst_23406 = (state_23420[(8)]);
var inst_23411 = (state_23420[(2)]);
var state_23420__$1 = (function (){var statearr_23429 = state_23420;
(statearr_23429[(9)] = inst_23411);

return statearr_23429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(9),results,inst_23406);
} else {
if((state_val_23421 === (9))){
var inst_23413 = (state_23420[(2)]);
var state_23420__$1 = (function (){var statearr_23430 = state_23420;
(statearr_23430[(10)] = inst_23413);

return statearr_23430;
})();
var statearr_23431_23536 = state_23420__$1;
(statearr_23431_23536[(2)] = null);

(statearr_23431_23536[(1)] = (2));


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
});})(c__23167__auto___23530,jobs,results,process,async))
;
return ((function (switch__23077__auto__,c__23167__auto___23530,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_23432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__);

(statearr_23432[(1)] = (1));

return statearr_23432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1 = (function (state_23420){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23433){if((e23433 instanceof Object)){
var ex__23081__auto__ = e23433;
var statearr_23434_23537 = state_23420;
(statearr_23434_23537[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23538 = state_23420;
state_23420 = G__23538;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___23530,jobs,results,process,async))
})();
var state__23169__auto__ = (function (){var statearr_23435 = f__23168__auto__.call(null);
(statearr_23435[(6)] = c__23167__auto___23530);

return statearr_23435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___23530,jobs,results,process,async))
);


var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__,jobs,results,process,async){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__,jobs,results,process,async){
return (function (state_23473){
var state_val_23474 = (state_23473[(1)]);
if((state_val_23474 === (7))){
var inst_23469 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
var statearr_23475_23539 = state_23473__$1;
(statearr_23475_23539[(2)] = inst_23469);

(statearr_23475_23539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (20))){
var state_23473__$1 = state_23473;
var statearr_23476_23540 = state_23473__$1;
(statearr_23476_23540[(2)] = null);

(statearr_23476_23540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (1))){
var state_23473__$1 = state_23473;
var statearr_23477_23541 = state_23473__$1;
(statearr_23477_23541[(2)] = null);

(statearr_23477_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (4))){
var inst_23438 = (state_23473[(7)]);
var inst_23438__$1 = (state_23473[(2)]);
var inst_23439 = (inst_23438__$1 == null);
var state_23473__$1 = (function (){var statearr_23478 = state_23473;
(statearr_23478[(7)] = inst_23438__$1);

return statearr_23478;
})();
if(cljs.core.truth_(inst_23439)){
var statearr_23479_23542 = state_23473__$1;
(statearr_23479_23542[(1)] = (5));

} else {
var statearr_23480_23543 = state_23473__$1;
(statearr_23480_23543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (15))){
var inst_23451 = (state_23473[(8)]);
var state_23473__$1 = state_23473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23473__$1,(18),to,inst_23451);
} else {
if((state_val_23474 === (21))){
var inst_23464 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
var statearr_23481_23544 = state_23473__$1;
(statearr_23481_23544[(2)] = inst_23464);

(statearr_23481_23544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (13))){
var inst_23466 = (state_23473[(2)]);
var state_23473__$1 = (function (){var statearr_23482 = state_23473;
(statearr_23482[(9)] = inst_23466);

return statearr_23482;
})();
var statearr_23483_23545 = state_23473__$1;
(statearr_23483_23545[(2)] = null);

(statearr_23483_23545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (6))){
var inst_23438 = (state_23473[(7)]);
var state_23473__$1 = state_23473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23473__$1,(11),inst_23438);
} else {
if((state_val_23474 === (17))){
var inst_23459 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
if(cljs.core.truth_(inst_23459)){
var statearr_23484_23546 = state_23473__$1;
(statearr_23484_23546[(1)] = (19));

} else {
var statearr_23485_23547 = state_23473__$1;
(statearr_23485_23547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (3))){
var inst_23471 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23473__$1,inst_23471);
} else {
if((state_val_23474 === (12))){
var inst_23448 = (state_23473[(10)]);
var state_23473__$1 = state_23473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23473__$1,(14),inst_23448);
} else {
if((state_val_23474 === (2))){
var state_23473__$1 = state_23473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23473__$1,(4),results);
} else {
if((state_val_23474 === (19))){
var state_23473__$1 = state_23473;
var statearr_23486_23548 = state_23473__$1;
(statearr_23486_23548[(2)] = null);

(statearr_23486_23548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (11))){
var inst_23448 = (state_23473[(2)]);
var state_23473__$1 = (function (){var statearr_23487 = state_23473;
(statearr_23487[(10)] = inst_23448);

return statearr_23487;
})();
var statearr_23488_23549 = state_23473__$1;
(statearr_23488_23549[(2)] = null);

(statearr_23488_23549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (9))){
var state_23473__$1 = state_23473;
var statearr_23489_23550 = state_23473__$1;
(statearr_23489_23550[(2)] = null);

(statearr_23489_23550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (5))){
var state_23473__$1 = state_23473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23490_23551 = state_23473__$1;
(statearr_23490_23551[(1)] = (8));

} else {
var statearr_23491_23552 = state_23473__$1;
(statearr_23491_23552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (14))){
var inst_23451 = (state_23473[(8)]);
var inst_23453 = (state_23473[(11)]);
var inst_23451__$1 = (state_23473[(2)]);
var inst_23452 = (inst_23451__$1 == null);
var inst_23453__$1 = cljs.core.not.call(null,inst_23452);
var state_23473__$1 = (function (){var statearr_23492 = state_23473;
(statearr_23492[(8)] = inst_23451__$1);

(statearr_23492[(11)] = inst_23453__$1);

return statearr_23492;
})();
if(inst_23453__$1){
var statearr_23493_23553 = state_23473__$1;
(statearr_23493_23553[(1)] = (15));

} else {
var statearr_23494_23554 = state_23473__$1;
(statearr_23494_23554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (16))){
var inst_23453 = (state_23473[(11)]);
var state_23473__$1 = state_23473;
var statearr_23495_23555 = state_23473__$1;
(statearr_23495_23555[(2)] = inst_23453);

(statearr_23495_23555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (10))){
var inst_23445 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
var statearr_23496_23556 = state_23473__$1;
(statearr_23496_23556[(2)] = inst_23445);

(statearr_23496_23556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (18))){
var inst_23456 = (state_23473[(2)]);
var state_23473__$1 = state_23473;
var statearr_23497_23557 = state_23473__$1;
(statearr_23497_23557[(2)] = inst_23456);

(statearr_23497_23557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23474 === (8))){
var inst_23442 = cljs.core.async.close_BANG_.call(null,to);
var state_23473__$1 = state_23473;
var statearr_23498_23558 = state_23473__$1;
(statearr_23498_23558[(2)] = inst_23442);

(statearr_23498_23558[(1)] = (10));


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
}
}
}
}
});})(c__23167__auto__,jobs,results,process,async))
;
return ((function (switch__23077__auto__,c__23167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_23499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__);

(statearr_23499[(1)] = (1));

return statearr_23499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1 = (function (state_23473){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23500){if((e23500 instanceof Object)){
var ex__23081__auto__ = e23500;
var statearr_23501_23559 = state_23473;
(statearr_23501_23559[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23560 = state_23473;
state_23473 = G__23560;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__ = function(state_23473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1.call(this,state_23473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__,jobs,results,process,async))
})();
var state__23169__auto__ = (function (){var statearr_23502 = f__23168__auto__.call(null);
(statearr_23502[(6)] = c__23167__auto__);

return statearr_23502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__,jobs,results,process,async))
);

return c__23167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23562 = arguments.length;
switch (G__23562) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23565 = arguments.length;
switch (G__23565) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23568 = arguments.length;
switch (G__23568) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23167__auto___23617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___23617,tc,fc){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___23617,tc,fc){
return (function (state_23594){
var state_val_23595 = (state_23594[(1)]);
if((state_val_23595 === (7))){
var inst_23590 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23596_23618 = state_23594__$1;
(statearr_23596_23618[(2)] = inst_23590);

(statearr_23596_23618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (1))){
var state_23594__$1 = state_23594;
var statearr_23597_23619 = state_23594__$1;
(statearr_23597_23619[(2)] = null);

(statearr_23597_23619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (4))){
var inst_23571 = (state_23594[(7)]);
var inst_23571__$1 = (state_23594[(2)]);
var inst_23572 = (inst_23571__$1 == null);
var state_23594__$1 = (function (){var statearr_23598 = state_23594;
(statearr_23598[(7)] = inst_23571__$1);

return statearr_23598;
})();
if(cljs.core.truth_(inst_23572)){
var statearr_23599_23620 = state_23594__$1;
(statearr_23599_23620[(1)] = (5));

} else {
var statearr_23600_23621 = state_23594__$1;
(statearr_23600_23621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (13))){
var state_23594__$1 = state_23594;
var statearr_23601_23622 = state_23594__$1;
(statearr_23601_23622[(2)] = null);

(statearr_23601_23622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (6))){
var inst_23571 = (state_23594[(7)]);
var inst_23577 = p.call(null,inst_23571);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23577)){
var statearr_23602_23623 = state_23594__$1;
(statearr_23602_23623[(1)] = (9));

} else {
var statearr_23603_23624 = state_23594__$1;
(statearr_23603_23624[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (3))){
var inst_23592 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23594__$1,inst_23592);
} else {
if((state_val_23595 === (12))){
var state_23594__$1 = state_23594;
var statearr_23604_23625 = state_23594__$1;
(statearr_23604_23625[(2)] = null);

(statearr_23604_23625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (2))){
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(4),ch);
} else {
if((state_val_23595 === (11))){
var inst_23571 = (state_23594[(7)]);
var inst_23581 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23594__$1,(8),inst_23581,inst_23571);
} else {
if((state_val_23595 === (9))){
var state_23594__$1 = state_23594;
var statearr_23605_23626 = state_23594__$1;
(statearr_23605_23626[(2)] = tc);

(statearr_23605_23626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (5))){
var inst_23574 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23575 = cljs.core.async.close_BANG_.call(null,fc);
var state_23594__$1 = (function (){var statearr_23606 = state_23594;
(statearr_23606[(8)] = inst_23574);

return statearr_23606;
})();
var statearr_23607_23627 = state_23594__$1;
(statearr_23607_23627[(2)] = inst_23575);

(statearr_23607_23627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (14))){
var inst_23588 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23608_23628 = state_23594__$1;
(statearr_23608_23628[(2)] = inst_23588);

(statearr_23608_23628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (10))){
var state_23594__$1 = state_23594;
var statearr_23609_23629 = state_23594__$1;
(statearr_23609_23629[(2)] = fc);

(statearr_23609_23629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (8))){
var inst_23583 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23583)){
var statearr_23610_23630 = state_23594__$1;
(statearr_23610_23630[(1)] = (12));

} else {
var statearr_23611_23631 = state_23594__$1;
(statearr_23611_23631[(1)] = (13));

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
});})(c__23167__auto___23617,tc,fc))
;
return ((function (switch__23077__auto__,c__23167__auto___23617,tc,fc){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_23612 = [null,null,null,null,null,null,null,null,null];
(statearr_23612[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_23612[(1)] = (1));

return statearr_23612;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_23594){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23613){if((e23613 instanceof Object)){
var ex__23081__auto__ = e23613;
var statearr_23614_23632 = state_23594;
(statearr_23614_23632[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23633 = state_23594;
state_23594 = G__23633;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___23617,tc,fc))
})();
var state__23169__auto__ = (function (){var statearr_23615 = f__23168__auto__.call(null);
(statearr_23615[(6)] = c__23167__auto___23617);

return statearr_23615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___23617,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__){
return (function (state_23654){
var state_val_23655 = (state_23654[(1)]);
if((state_val_23655 === (7))){
var inst_23650 = (state_23654[(2)]);
var state_23654__$1 = state_23654;
var statearr_23656_23674 = state_23654__$1;
(statearr_23656_23674[(2)] = inst_23650);

(statearr_23656_23674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (1))){
var inst_23634 = init;
var state_23654__$1 = (function (){var statearr_23657 = state_23654;
(statearr_23657[(7)] = inst_23634);

return statearr_23657;
})();
var statearr_23658_23675 = state_23654__$1;
(statearr_23658_23675[(2)] = null);

(statearr_23658_23675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (4))){
var inst_23637 = (state_23654[(8)]);
var inst_23637__$1 = (state_23654[(2)]);
var inst_23638 = (inst_23637__$1 == null);
var state_23654__$1 = (function (){var statearr_23659 = state_23654;
(statearr_23659[(8)] = inst_23637__$1);

return statearr_23659;
})();
if(cljs.core.truth_(inst_23638)){
var statearr_23660_23676 = state_23654__$1;
(statearr_23660_23676[(1)] = (5));

} else {
var statearr_23661_23677 = state_23654__$1;
(statearr_23661_23677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (6))){
var inst_23637 = (state_23654[(8)]);
var inst_23634 = (state_23654[(7)]);
var inst_23641 = (state_23654[(9)]);
var inst_23641__$1 = f.call(null,inst_23634,inst_23637);
var inst_23642 = cljs.core.reduced_QMARK_.call(null,inst_23641__$1);
var state_23654__$1 = (function (){var statearr_23662 = state_23654;
(statearr_23662[(9)] = inst_23641__$1);

return statearr_23662;
})();
if(inst_23642){
var statearr_23663_23678 = state_23654__$1;
(statearr_23663_23678[(1)] = (8));

} else {
var statearr_23664_23679 = state_23654__$1;
(statearr_23664_23679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (3))){
var inst_23652 = (state_23654[(2)]);
var state_23654__$1 = state_23654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23654__$1,inst_23652);
} else {
if((state_val_23655 === (2))){
var state_23654__$1 = state_23654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23654__$1,(4),ch);
} else {
if((state_val_23655 === (9))){
var inst_23641 = (state_23654[(9)]);
var inst_23634 = inst_23641;
var state_23654__$1 = (function (){var statearr_23665 = state_23654;
(statearr_23665[(7)] = inst_23634);

return statearr_23665;
})();
var statearr_23666_23680 = state_23654__$1;
(statearr_23666_23680[(2)] = null);

(statearr_23666_23680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (5))){
var inst_23634 = (state_23654[(7)]);
var state_23654__$1 = state_23654;
var statearr_23667_23681 = state_23654__$1;
(statearr_23667_23681[(2)] = inst_23634);

(statearr_23667_23681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (10))){
var inst_23648 = (state_23654[(2)]);
var state_23654__$1 = state_23654;
var statearr_23668_23682 = state_23654__$1;
(statearr_23668_23682[(2)] = inst_23648);

(statearr_23668_23682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (8))){
var inst_23641 = (state_23654[(9)]);
var inst_23644 = cljs.core.deref.call(null,inst_23641);
var state_23654__$1 = state_23654;
var statearr_23669_23683 = state_23654__$1;
(statearr_23669_23683[(2)] = inst_23644);

(statearr_23669_23683[(1)] = (10));


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
});})(c__23167__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23078__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23078__auto____0 = (function (){
var statearr_23670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23670[(0)] = cljs$core$async$reduce_$_state_machine__23078__auto__);

(statearr_23670[(1)] = (1));

return statearr_23670;
});
var cljs$core$async$reduce_$_state_machine__23078__auto____1 = (function (state_23654){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23671){if((e23671 instanceof Object)){
var ex__23081__auto__ = e23671;
var statearr_23672_23684 = state_23654;
(statearr_23672_23684[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23685 = state_23654;
state_23654 = G__23685;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23078__auto__ = function(state_23654){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23078__auto____1.call(this,state_23654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23078__auto____0;
cljs$core$async$reduce_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23078__auto____1;
return cljs$core$async$reduce_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__))
})();
var state__23169__auto__ = (function (){var statearr_23673 = f__23168__auto__.call(null);
(statearr_23673[(6)] = c__23167__auto__);

return statearr_23673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__))
);

return c__23167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__,f__$1){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__,f__$1){
return (function (state_23691){
var state_val_23692 = (state_23691[(1)]);
if((state_val_23692 === (1))){
var inst_23686 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23691__$1 = state_23691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23691__$1,(2),inst_23686);
} else {
if((state_val_23692 === (2))){
var inst_23688 = (state_23691[(2)]);
var inst_23689 = f__$1.call(null,inst_23688);
var state_23691__$1 = state_23691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23691__$1,inst_23689);
} else {
return null;
}
}
});})(c__23167__auto__,f__$1))
;
return ((function (switch__23077__auto__,c__23167__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23078__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23078__auto____0 = (function (){
var statearr_23693 = [null,null,null,null,null,null,null];
(statearr_23693[(0)] = cljs$core$async$transduce_$_state_machine__23078__auto__);

(statearr_23693[(1)] = (1));

return statearr_23693;
});
var cljs$core$async$transduce_$_state_machine__23078__auto____1 = (function (state_23691){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23694){if((e23694 instanceof Object)){
var ex__23081__auto__ = e23694;
var statearr_23695_23697 = state_23691;
(statearr_23695_23697[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23698 = state_23691;
state_23691 = G__23698;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23078__auto__ = function(state_23691){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23078__auto____1.call(this,state_23691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23078__auto____0;
cljs$core$async$transduce_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23078__auto____1;
return cljs$core$async$transduce_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__,f__$1))
})();
var state__23169__auto__ = (function (){var statearr_23696 = f__23168__auto__.call(null);
(statearr_23696[(6)] = c__23167__auto__);

return statearr_23696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__,f__$1))
);

return c__23167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23700 = arguments.length;
switch (G__23700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__){
return (function (state_23725){
var state_val_23726 = (state_23725[(1)]);
if((state_val_23726 === (7))){
var inst_23707 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23727_23748 = state_23725__$1;
(statearr_23727_23748[(2)] = inst_23707);

(statearr_23727_23748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (1))){
var inst_23701 = cljs.core.seq.call(null,coll);
var inst_23702 = inst_23701;
var state_23725__$1 = (function (){var statearr_23728 = state_23725;
(statearr_23728[(7)] = inst_23702);

return statearr_23728;
})();
var statearr_23729_23749 = state_23725__$1;
(statearr_23729_23749[(2)] = null);

(statearr_23729_23749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (4))){
var inst_23702 = (state_23725[(7)]);
var inst_23705 = cljs.core.first.call(null,inst_23702);
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23725__$1,(7),ch,inst_23705);
} else {
if((state_val_23726 === (13))){
var inst_23719 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23730_23750 = state_23725__$1;
(statearr_23730_23750[(2)] = inst_23719);

(statearr_23730_23750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (6))){
var inst_23710 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
if(cljs.core.truth_(inst_23710)){
var statearr_23731_23751 = state_23725__$1;
(statearr_23731_23751[(1)] = (8));

} else {
var statearr_23732_23752 = state_23725__$1;
(statearr_23732_23752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (3))){
var inst_23723 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23725__$1,inst_23723);
} else {
if((state_val_23726 === (12))){
var state_23725__$1 = state_23725;
var statearr_23733_23753 = state_23725__$1;
(statearr_23733_23753[(2)] = null);

(statearr_23733_23753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (2))){
var inst_23702 = (state_23725[(7)]);
var state_23725__$1 = state_23725;
if(cljs.core.truth_(inst_23702)){
var statearr_23734_23754 = state_23725__$1;
(statearr_23734_23754[(1)] = (4));

} else {
var statearr_23735_23755 = state_23725__$1;
(statearr_23735_23755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (11))){
var inst_23716 = cljs.core.async.close_BANG_.call(null,ch);
var state_23725__$1 = state_23725;
var statearr_23736_23756 = state_23725__$1;
(statearr_23736_23756[(2)] = inst_23716);

(statearr_23736_23756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (9))){
var state_23725__$1 = state_23725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23737_23757 = state_23725__$1;
(statearr_23737_23757[(1)] = (11));

} else {
var statearr_23738_23758 = state_23725__$1;
(statearr_23738_23758[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (5))){
var inst_23702 = (state_23725[(7)]);
var state_23725__$1 = state_23725;
var statearr_23739_23759 = state_23725__$1;
(statearr_23739_23759[(2)] = inst_23702);

(statearr_23739_23759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (10))){
var inst_23721 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23740_23760 = state_23725__$1;
(statearr_23740_23760[(2)] = inst_23721);

(statearr_23740_23760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (8))){
var inst_23702 = (state_23725[(7)]);
var inst_23712 = cljs.core.next.call(null,inst_23702);
var inst_23702__$1 = inst_23712;
var state_23725__$1 = (function (){var statearr_23741 = state_23725;
(statearr_23741[(7)] = inst_23702__$1);

return statearr_23741;
})();
var statearr_23742_23761 = state_23725__$1;
(statearr_23742_23761[(2)] = null);

(statearr_23742_23761[(1)] = (2));


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
});})(c__23167__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_23743 = [null,null,null,null,null,null,null,null];
(statearr_23743[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_23743[(1)] = (1));

return statearr_23743;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_23725){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23744){if((e23744 instanceof Object)){
var ex__23081__auto__ = e23744;
var statearr_23745_23762 = state_23725;
(statearr_23745_23762[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23763 = state_23725;
state_23725 = G__23763;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_23725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_23725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__))
})();
var state__23169__auto__ = (function (){var statearr_23746 = f__23168__auto__.call(null);
(statearr_23746[(6)] = c__23167__auto__);

return statearr_23746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__))
);

return c__23167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23764 = (function (ch,cs,meta23765){
this.ch = ch;
this.cs = cs;
this.meta23765 = meta23765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23766,meta23765__$1){
var self__ = this;
var _23766__$1 = this;
return (new cljs.core.async.t_cljs$core$async23764(self__.ch,self__.cs,meta23765__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23766){
var self__ = this;
var _23766__$1 = this;
return self__.meta23765;
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23765","meta23765",1076629902,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23764";

cljs.core.async.t_cljs$core$async23764.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23764");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23764.
 */
cljs.core.async.__GT_t_cljs$core$async23764 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23764(ch__$1,cs__$1,meta23765){
return (new cljs.core.async.t_cljs$core$async23764(ch__$1,cs__$1,meta23765));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23764(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23167__auto___23986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___23986,cs,m,dchan,dctr,done){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___23986,cs,m,dchan,dctr,done){
return (function (state_23901){
var state_val_23902 = (state_23901[(1)]);
if((state_val_23902 === (7))){
var inst_23897 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23903_23987 = state_23901__$1;
(statearr_23903_23987[(2)] = inst_23897);

(statearr_23903_23987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (20))){
var inst_23800 = (state_23901[(7)]);
var inst_23812 = cljs.core.first.call(null,inst_23800);
var inst_23813 = cljs.core.nth.call(null,inst_23812,(0),null);
var inst_23814 = cljs.core.nth.call(null,inst_23812,(1),null);
var state_23901__$1 = (function (){var statearr_23904 = state_23901;
(statearr_23904[(8)] = inst_23813);

return statearr_23904;
})();
if(cljs.core.truth_(inst_23814)){
var statearr_23905_23988 = state_23901__$1;
(statearr_23905_23988[(1)] = (22));

} else {
var statearr_23906_23989 = state_23901__$1;
(statearr_23906_23989[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (27))){
var inst_23769 = (state_23901[(9)]);
var inst_23849 = (state_23901[(10)]);
var inst_23842 = (state_23901[(11)]);
var inst_23844 = (state_23901[(12)]);
var inst_23849__$1 = cljs.core._nth.call(null,inst_23842,inst_23844);
var inst_23850 = cljs.core.async.put_BANG_.call(null,inst_23849__$1,inst_23769,done);
var state_23901__$1 = (function (){var statearr_23907 = state_23901;
(statearr_23907[(10)] = inst_23849__$1);

return statearr_23907;
})();
if(cljs.core.truth_(inst_23850)){
var statearr_23908_23990 = state_23901__$1;
(statearr_23908_23990[(1)] = (30));

} else {
var statearr_23909_23991 = state_23901__$1;
(statearr_23909_23991[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (1))){
var state_23901__$1 = state_23901;
var statearr_23910_23992 = state_23901__$1;
(statearr_23910_23992[(2)] = null);

(statearr_23910_23992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (24))){
var inst_23800 = (state_23901[(7)]);
var inst_23819 = (state_23901[(2)]);
var inst_23820 = cljs.core.next.call(null,inst_23800);
var inst_23778 = inst_23820;
var inst_23779 = null;
var inst_23780 = (0);
var inst_23781 = (0);
var state_23901__$1 = (function (){var statearr_23911 = state_23901;
(statearr_23911[(13)] = inst_23779);

(statearr_23911[(14)] = inst_23781);

(statearr_23911[(15)] = inst_23778);

(statearr_23911[(16)] = inst_23819);

(statearr_23911[(17)] = inst_23780);

return statearr_23911;
})();
var statearr_23912_23993 = state_23901__$1;
(statearr_23912_23993[(2)] = null);

(statearr_23912_23993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (39))){
var state_23901__$1 = state_23901;
var statearr_23916_23994 = state_23901__$1;
(statearr_23916_23994[(2)] = null);

(statearr_23916_23994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (4))){
var inst_23769 = (state_23901[(9)]);
var inst_23769__$1 = (state_23901[(2)]);
var inst_23770 = (inst_23769__$1 == null);
var state_23901__$1 = (function (){var statearr_23917 = state_23901;
(statearr_23917[(9)] = inst_23769__$1);

return statearr_23917;
})();
if(cljs.core.truth_(inst_23770)){
var statearr_23918_23995 = state_23901__$1;
(statearr_23918_23995[(1)] = (5));

} else {
var statearr_23919_23996 = state_23901__$1;
(statearr_23919_23996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (15))){
var inst_23779 = (state_23901[(13)]);
var inst_23781 = (state_23901[(14)]);
var inst_23778 = (state_23901[(15)]);
var inst_23780 = (state_23901[(17)]);
var inst_23796 = (state_23901[(2)]);
var inst_23797 = (inst_23781 + (1));
var tmp23913 = inst_23779;
var tmp23914 = inst_23778;
var tmp23915 = inst_23780;
var inst_23778__$1 = tmp23914;
var inst_23779__$1 = tmp23913;
var inst_23780__$1 = tmp23915;
var inst_23781__$1 = inst_23797;
var state_23901__$1 = (function (){var statearr_23920 = state_23901;
(statearr_23920[(13)] = inst_23779__$1);

(statearr_23920[(14)] = inst_23781__$1);

(statearr_23920[(15)] = inst_23778__$1);

(statearr_23920[(17)] = inst_23780__$1);

(statearr_23920[(18)] = inst_23796);

return statearr_23920;
})();
var statearr_23921_23997 = state_23901__$1;
(statearr_23921_23997[(2)] = null);

(statearr_23921_23997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (21))){
var inst_23823 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23925_23998 = state_23901__$1;
(statearr_23925_23998[(2)] = inst_23823);

(statearr_23925_23998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (31))){
var inst_23849 = (state_23901[(10)]);
var inst_23853 = done.call(null,null);
var inst_23854 = cljs.core.async.untap_STAR_.call(null,m,inst_23849);
var state_23901__$1 = (function (){var statearr_23926 = state_23901;
(statearr_23926[(19)] = inst_23853);

return statearr_23926;
})();
var statearr_23927_23999 = state_23901__$1;
(statearr_23927_23999[(2)] = inst_23854);

(statearr_23927_23999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (32))){
var inst_23841 = (state_23901[(20)]);
var inst_23843 = (state_23901[(21)]);
var inst_23842 = (state_23901[(11)]);
var inst_23844 = (state_23901[(12)]);
var inst_23856 = (state_23901[(2)]);
var inst_23857 = (inst_23844 + (1));
var tmp23922 = inst_23841;
var tmp23923 = inst_23843;
var tmp23924 = inst_23842;
var inst_23841__$1 = tmp23922;
var inst_23842__$1 = tmp23924;
var inst_23843__$1 = tmp23923;
var inst_23844__$1 = inst_23857;
var state_23901__$1 = (function (){var statearr_23928 = state_23901;
(statearr_23928[(20)] = inst_23841__$1);

(statearr_23928[(21)] = inst_23843__$1);

(statearr_23928[(22)] = inst_23856);

(statearr_23928[(11)] = inst_23842__$1);

(statearr_23928[(12)] = inst_23844__$1);

return statearr_23928;
})();
var statearr_23929_24000 = state_23901__$1;
(statearr_23929_24000[(2)] = null);

(statearr_23929_24000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (40))){
var inst_23869 = (state_23901[(23)]);
var inst_23873 = done.call(null,null);
var inst_23874 = cljs.core.async.untap_STAR_.call(null,m,inst_23869);
var state_23901__$1 = (function (){var statearr_23930 = state_23901;
(statearr_23930[(24)] = inst_23873);

return statearr_23930;
})();
var statearr_23931_24001 = state_23901__$1;
(statearr_23931_24001[(2)] = inst_23874);

(statearr_23931_24001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (33))){
var inst_23860 = (state_23901[(25)]);
var inst_23862 = cljs.core.chunked_seq_QMARK_.call(null,inst_23860);
var state_23901__$1 = state_23901;
if(inst_23862){
var statearr_23932_24002 = state_23901__$1;
(statearr_23932_24002[(1)] = (36));

} else {
var statearr_23933_24003 = state_23901__$1;
(statearr_23933_24003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (13))){
var inst_23790 = (state_23901[(26)]);
var inst_23793 = cljs.core.async.close_BANG_.call(null,inst_23790);
var state_23901__$1 = state_23901;
var statearr_23934_24004 = state_23901__$1;
(statearr_23934_24004[(2)] = inst_23793);

(statearr_23934_24004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (22))){
var inst_23813 = (state_23901[(8)]);
var inst_23816 = cljs.core.async.close_BANG_.call(null,inst_23813);
var state_23901__$1 = state_23901;
var statearr_23935_24005 = state_23901__$1;
(statearr_23935_24005[(2)] = inst_23816);

(statearr_23935_24005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (36))){
var inst_23860 = (state_23901[(25)]);
var inst_23864 = cljs.core.chunk_first.call(null,inst_23860);
var inst_23865 = cljs.core.chunk_rest.call(null,inst_23860);
var inst_23866 = cljs.core.count.call(null,inst_23864);
var inst_23841 = inst_23865;
var inst_23842 = inst_23864;
var inst_23843 = inst_23866;
var inst_23844 = (0);
var state_23901__$1 = (function (){var statearr_23936 = state_23901;
(statearr_23936[(20)] = inst_23841);

(statearr_23936[(21)] = inst_23843);

(statearr_23936[(11)] = inst_23842);

(statearr_23936[(12)] = inst_23844);

return statearr_23936;
})();
var statearr_23937_24006 = state_23901__$1;
(statearr_23937_24006[(2)] = null);

(statearr_23937_24006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (41))){
var inst_23860 = (state_23901[(25)]);
var inst_23876 = (state_23901[(2)]);
var inst_23877 = cljs.core.next.call(null,inst_23860);
var inst_23841 = inst_23877;
var inst_23842 = null;
var inst_23843 = (0);
var inst_23844 = (0);
var state_23901__$1 = (function (){var statearr_23938 = state_23901;
(statearr_23938[(20)] = inst_23841);

(statearr_23938[(21)] = inst_23843);

(statearr_23938[(27)] = inst_23876);

(statearr_23938[(11)] = inst_23842);

(statearr_23938[(12)] = inst_23844);

return statearr_23938;
})();
var statearr_23939_24007 = state_23901__$1;
(statearr_23939_24007[(2)] = null);

(statearr_23939_24007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (43))){
var state_23901__$1 = state_23901;
var statearr_23940_24008 = state_23901__$1;
(statearr_23940_24008[(2)] = null);

(statearr_23940_24008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (29))){
var inst_23885 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23941_24009 = state_23901__$1;
(statearr_23941_24009[(2)] = inst_23885);

(statearr_23941_24009[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (44))){
var inst_23894 = (state_23901[(2)]);
var state_23901__$1 = (function (){var statearr_23942 = state_23901;
(statearr_23942[(28)] = inst_23894);

return statearr_23942;
})();
var statearr_23943_24010 = state_23901__$1;
(statearr_23943_24010[(2)] = null);

(statearr_23943_24010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (6))){
var inst_23833 = (state_23901[(29)]);
var inst_23832 = cljs.core.deref.call(null,cs);
var inst_23833__$1 = cljs.core.keys.call(null,inst_23832);
var inst_23834 = cljs.core.count.call(null,inst_23833__$1);
var inst_23835 = cljs.core.reset_BANG_.call(null,dctr,inst_23834);
var inst_23840 = cljs.core.seq.call(null,inst_23833__$1);
var inst_23841 = inst_23840;
var inst_23842 = null;
var inst_23843 = (0);
var inst_23844 = (0);
var state_23901__$1 = (function (){var statearr_23944 = state_23901;
(statearr_23944[(29)] = inst_23833__$1);

(statearr_23944[(20)] = inst_23841);

(statearr_23944[(21)] = inst_23843);

(statearr_23944[(11)] = inst_23842);

(statearr_23944[(12)] = inst_23844);

(statearr_23944[(30)] = inst_23835);

return statearr_23944;
})();
var statearr_23945_24011 = state_23901__$1;
(statearr_23945_24011[(2)] = null);

(statearr_23945_24011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (28))){
var inst_23841 = (state_23901[(20)]);
var inst_23860 = (state_23901[(25)]);
var inst_23860__$1 = cljs.core.seq.call(null,inst_23841);
var state_23901__$1 = (function (){var statearr_23946 = state_23901;
(statearr_23946[(25)] = inst_23860__$1);

return statearr_23946;
})();
if(inst_23860__$1){
var statearr_23947_24012 = state_23901__$1;
(statearr_23947_24012[(1)] = (33));

} else {
var statearr_23948_24013 = state_23901__$1;
(statearr_23948_24013[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (25))){
var inst_23843 = (state_23901[(21)]);
var inst_23844 = (state_23901[(12)]);
var inst_23846 = (inst_23844 < inst_23843);
var inst_23847 = inst_23846;
var state_23901__$1 = state_23901;
if(cljs.core.truth_(inst_23847)){
var statearr_23949_24014 = state_23901__$1;
(statearr_23949_24014[(1)] = (27));

} else {
var statearr_23950_24015 = state_23901__$1;
(statearr_23950_24015[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (34))){
var state_23901__$1 = state_23901;
var statearr_23951_24016 = state_23901__$1;
(statearr_23951_24016[(2)] = null);

(statearr_23951_24016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (17))){
var state_23901__$1 = state_23901;
var statearr_23952_24017 = state_23901__$1;
(statearr_23952_24017[(2)] = null);

(statearr_23952_24017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (3))){
var inst_23899 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23901__$1,inst_23899);
} else {
if((state_val_23902 === (12))){
var inst_23828 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23953_24018 = state_23901__$1;
(statearr_23953_24018[(2)] = inst_23828);

(statearr_23953_24018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (2))){
var state_23901__$1 = state_23901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23901__$1,(4),ch);
} else {
if((state_val_23902 === (23))){
var state_23901__$1 = state_23901;
var statearr_23954_24019 = state_23901__$1;
(statearr_23954_24019[(2)] = null);

(statearr_23954_24019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (35))){
var inst_23883 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23955_24020 = state_23901__$1;
(statearr_23955_24020[(2)] = inst_23883);

(statearr_23955_24020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (19))){
var inst_23800 = (state_23901[(7)]);
var inst_23804 = cljs.core.chunk_first.call(null,inst_23800);
var inst_23805 = cljs.core.chunk_rest.call(null,inst_23800);
var inst_23806 = cljs.core.count.call(null,inst_23804);
var inst_23778 = inst_23805;
var inst_23779 = inst_23804;
var inst_23780 = inst_23806;
var inst_23781 = (0);
var state_23901__$1 = (function (){var statearr_23956 = state_23901;
(statearr_23956[(13)] = inst_23779);

(statearr_23956[(14)] = inst_23781);

(statearr_23956[(15)] = inst_23778);

(statearr_23956[(17)] = inst_23780);

return statearr_23956;
})();
var statearr_23957_24021 = state_23901__$1;
(statearr_23957_24021[(2)] = null);

(statearr_23957_24021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (11))){
var inst_23778 = (state_23901[(15)]);
var inst_23800 = (state_23901[(7)]);
var inst_23800__$1 = cljs.core.seq.call(null,inst_23778);
var state_23901__$1 = (function (){var statearr_23958 = state_23901;
(statearr_23958[(7)] = inst_23800__$1);

return statearr_23958;
})();
if(inst_23800__$1){
var statearr_23959_24022 = state_23901__$1;
(statearr_23959_24022[(1)] = (16));

} else {
var statearr_23960_24023 = state_23901__$1;
(statearr_23960_24023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (9))){
var inst_23830 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23961_24024 = state_23901__$1;
(statearr_23961_24024[(2)] = inst_23830);

(statearr_23961_24024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (5))){
var inst_23776 = cljs.core.deref.call(null,cs);
var inst_23777 = cljs.core.seq.call(null,inst_23776);
var inst_23778 = inst_23777;
var inst_23779 = null;
var inst_23780 = (0);
var inst_23781 = (0);
var state_23901__$1 = (function (){var statearr_23962 = state_23901;
(statearr_23962[(13)] = inst_23779);

(statearr_23962[(14)] = inst_23781);

(statearr_23962[(15)] = inst_23778);

(statearr_23962[(17)] = inst_23780);

return statearr_23962;
})();
var statearr_23963_24025 = state_23901__$1;
(statearr_23963_24025[(2)] = null);

(statearr_23963_24025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (14))){
var state_23901__$1 = state_23901;
var statearr_23964_24026 = state_23901__$1;
(statearr_23964_24026[(2)] = null);

(statearr_23964_24026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (45))){
var inst_23891 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23965_24027 = state_23901__$1;
(statearr_23965_24027[(2)] = inst_23891);

(statearr_23965_24027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (26))){
var inst_23833 = (state_23901[(29)]);
var inst_23887 = (state_23901[(2)]);
var inst_23888 = cljs.core.seq.call(null,inst_23833);
var state_23901__$1 = (function (){var statearr_23966 = state_23901;
(statearr_23966[(31)] = inst_23887);

return statearr_23966;
})();
if(inst_23888){
var statearr_23967_24028 = state_23901__$1;
(statearr_23967_24028[(1)] = (42));

} else {
var statearr_23968_24029 = state_23901__$1;
(statearr_23968_24029[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (16))){
var inst_23800 = (state_23901[(7)]);
var inst_23802 = cljs.core.chunked_seq_QMARK_.call(null,inst_23800);
var state_23901__$1 = state_23901;
if(inst_23802){
var statearr_23969_24030 = state_23901__$1;
(statearr_23969_24030[(1)] = (19));

} else {
var statearr_23970_24031 = state_23901__$1;
(statearr_23970_24031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (38))){
var inst_23880 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23971_24032 = state_23901__$1;
(statearr_23971_24032[(2)] = inst_23880);

(statearr_23971_24032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (30))){
var state_23901__$1 = state_23901;
var statearr_23972_24033 = state_23901__$1;
(statearr_23972_24033[(2)] = null);

(statearr_23972_24033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (10))){
var inst_23779 = (state_23901[(13)]);
var inst_23781 = (state_23901[(14)]);
var inst_23789 = cljs.core._nth.call(null,inst_23779,inst_23781);
var inst_23790 = cljs.core.nth.call(null,inst_23789,(0),null);
var inst_23791 = cljs.core.nth.call(null,inst_23789,(1),null);
var state_23901__$1 = (function (){var statearr_23973 = state_23901;
(statearr_23973[(26)] = inst_23790);

return statearr_23973;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23974_24034 = state_23901__$1;
(statearr_23974_24034[(1)] = (13));

} else {
var statearr_23975_24035 = state_23901__$1;
(statearr_23975_24035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (18))){
var inst_23826 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23976_24036 = state_23901__$1;
(statearr_23976_24036[(2)] = inst_23826);

(statearr_23976_24036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (42))){
var state_23901__$1 = state_23901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23901__$1,(45),dchan);
} else {
if((state_val_23902 === (37))){
var inst_23769 = (state_23901[(9)]);
var inst_23869 = (state_23901[(23)]);
var inst_23860 = (state_23901[(25)]);
var inst_23869__$1 = cljs.core.first.call(null,inst_23860);
var inst_23870 = cljs.core.async.put_BANG_.call(null,inst_23869__$1,inst_23769,done);
var state_23901__$1 = (function (){var statearr_23977 = state_23901;
(statearr_23977[(23)] = inst_23869__$1);

return statearr_23977;
})();
if(cljs.core.truth_(inst_23870)){
var statearr_23978_24037 = state_23901__$1;
(statearr_23978_24037[(1)] = (39));

} else {
var statearr_23979_24038 = state_23901__$1;
(statearr_23979_24038[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (8))){
var inst_23781 = (state_23901[(14)]);
var inst_23780 = (state_23901[(17)]);
var inst_23783 = (inst_23781 < inst_23780);
var inst_23784 = inst_23783;
var state_23901__$1 = state_23901;
if(cljs.core.truth_(inst_23784)){
var statearr_23980_24039 = state_23901__$1;
(statearr_23980_24039[(1)] = (10));

} else {
var statearr_23981_24040 = state_23901__$1;
(statearr_23981_24040[(1)] = (11));

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
});})(c__23167__auto___23986,cs,m,dchan,dctr,done))
;
return ((function (switch__23077__auto__,c__23167__auto___23986,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23078__auto__ = null;
var cljs$core$async$mult_$_state_machine__23078__auto____0 = (function (){
var statearr_23982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23982[(0)] = cljs$core$async$mult_$_state_machine__23078__auto__);

(statearr_23982[(1)] = (1));

return statearr_23982;
});
var cljs$core$async$mult_$_state_machine__23078__auto____1 = (function (state_23901){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_23901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object)){
var ex__23081__auto__ = e23983;
var statearr_23984_24041 = state_23901;
(statearr_23984_24041[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24042 = state_23901;
state_23901 = G__24042;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23078__auto__ = function(state_23901){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23078__auto____1.call(this,state_23901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23078__auto____0;
cljs$core$async$mult_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23078__auto____1;
return cljs$core$async$mult_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___23986,cs,m,dchan,dctr,done))
})();
var state__23169__auto__ = (function (){var statearr_23985 = f__23168__auto__.call(null);
(statearr_23985[(6)] = c__23167__auto___23986);

return statearr_23985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___23986,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24044 = arguments.length;
switch (G__24044) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24056 = arguments.length;
var i__4500__auto___24057 = (0);
while(true){
if((i__4500__auto___24057 < len__4499__auto___24056)){
args__4502__auto__.push((arguments[i__4500__auto___24057]));

var G__24058 = (i__4500__auto___24057 + (1));
i__4500__auto___24057 = G__24058;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24050){
var map__24051 = p__24050;
var map__24051__$1 = ((((!((map__24051 == null)))?(((((map__24051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24051):map__24051);
var opts = map__24051__$1;
var statearr_24053_24059 = state;
(statearr_24053_24059[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24051,map__24051__$1,opts){
return (function (val){
var statearr_24054_24060 = state;
(statearr_24054_24060[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24051,map__24051__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24055_24061 = state;
(statearr_24055_24061[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24046){
var G__24047 = cljs.core.first.call(null,seq24046);
var seq24046__$1 = cljs.core.next.call(null,seq24046);
var G__24048 = cljs.core.first.call(null,seq24046__$1);
var seq24046__$2 = cljs.core.next.call(null,seq24046__$1);
var G__24049 = cljs.core.first.call(null,seq24046__$2);
var seq24046__$3 = cljs.core.next.call(null,seq24046__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24047,G__24048,G__24049,seq24046__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24062 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24063){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24063 = meta24063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24064,meta24063__$1){
var self__ = this;
var _24064__$1 = this;
return (new cljs.core.async.t_cljs$core$async24062(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24063__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24064){
var self__ = this;
var _24064__$1 = this;
return self__.meta24063;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24063","meta24063",-689146679,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24062";

cljs.core.async.t_cljs$core$async24062.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24062");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24062.
 */
cljs.core.async.__GT_t_cljs$core$async24062 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24062(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24063){
return (new cljs.core.async.t_cljs$core$async24062(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24063));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24062(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23167__auto___24226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24166){
var state_val_24167 = (state_24166[(1)]);
if((state_val_24167 === (7))){
var inst_24081 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24168_24227 = state_24166__$1;
(statearr_24168_24227[(2)] = inst_24081);

(statearr_24168_24227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (20))){
var inst_24093 = (state_24166[(7)]);
var state_24166__$1 = state_24166;
var statearr_24169_24228 = state_24166__$1;
(statearr_24169_24228[(2)] = inst_24093);

(statearr_24169_24228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (27))){
var state_24166__$1 = state_24166;
var statearr_24170_24229 = state_24166__$1;
(statearr_24170_24229[(2)] = null);

(statearr_24170_24229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (1))){
var inst_24068 = (state_24166[(8)]);
var inst_24068__$1 = calc_state.call(null);
var inst_24070 = (inst_24068__$1 == null);
var inst_24071 = cljs.core.not.call(null,inst_24070);
var state_24166__$1 = (function (){var statearr_24171 = state_24166;
(statearr_24171[(8)] = inst_24068__$1);

return statearr_24171;
})();
if(inst_24071){
var statearr_24172_24230 = state_24166__$1;
(statearr_24172_24230[(1)] = (2));

} else {
var statearr_24173_24231 = state_24166__$1;
(statearr_24173_24231[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (24))){
var inst_24117 = (state_24166[(9)]);
var inst_24140 = (state_24166[(10)]);
var inst_24126 = (state_24166[(11)]);
var inst_24140__$1 = inst_24117.call(null,inst_24126);
var state_24166__$1 = (function (){var statearr_24174 = state_24166;
(statearr_24174[(10)] = inst_24140__$1);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24140__$1)){
var statearr_24175_24232 = state_24166__$1;
(statearr_24175_24232[(1)] = (29));

} else {
var statearr_24176_24233 = state_24166__$1;
(statearr_24176_24233[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (4))){
var inst_24084 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24084)){
var statearr_24177_24234 = state_24166__$1;
(statearr_24177_24234[(1)] = (8));

} else {
var statearr_24178_24235 = state_24166__$1;
(statearr_24178_24235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (15))){
var inst_24111 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24111)){
var statearr_24179_24236 = state_24166__$1;
(statearr_24179_24236[(1)] = (19));

} else {
var statearr_24180_24237 = state_24166__$1;
(statearr_24180_24237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (21))){
var inst_24116 = (state_24166[(12)]);
var inst_24116__$1 = (state_24166[(2)]);
var inst_24117 = cljs.core.get.call(null,inst_24116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24118 = cljs.core.get.call(null,inst_24116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24119 = cljs.core.get.call(null,inst_24116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24166__$1 = (function (){var statearr_24181 = state_24166;
(statearr_24181[(9)] = inst_24117);

(statearr_24181[(12)] = inst_24116__$1);

(statearr_24181[(13)] = inst_24118);

return statearr_24181;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24166__$1,(22),inst_24119);
} else {
if((state_val_24167 === (31))){
var inst_24148 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24148)){
var statearr_24182_24238 = state_24166__$1;
(statearr_24182_24238[(1)] = (32));

} else {
var statearr_24183_24239 = state_24166__$1;
(statearr_24183_24239[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (32))){
var inst_24125 = (state_24166[(14)]);
var state_24166__$1 = state_24166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24166__$1,(35),out,inst_24125);
} else {
if((state_val_24167 === (33))){
var inst_24116 = (state_24166[(12)]);
var inst_24093 = inst_24116;
var state_24166__$1 = (function (){var statearr_24184 = state_24166;
(statearr_24184[(7)] = inst_24093);

return statearr_24184;
})();
var statearr_24185_24240 = state_24166__$1;
(statearr_24185_24240[(2)] = null);

(statearr_24185_24240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (13))){
var inst_24093 = (state_24166[(7)]);
var inst_24100 = inst_24093.cljs$lang$protocol_mask$partition0$;
var inst_24101 = (inst_24100 & (64));
var inst_24102 = inst_24093.cljs$core$ISeq$;
var inst_24103 = (cljs.core.PROTOCOL_SENTINEL === inst_24102);
var inst_24104 = ((inst_24101) || (inst_24103));
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24104)){
var statearr_24186_24241 = state_24166__$1;
(statearr_24186_24241[(1)] = (16));

} else {
var statearr_24187_24242 = state_24166__$1;
(statearr_24187_24242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (22))){
var inst_24126 = (state_24166[(11)]);
var inst_24125 = (state_24166[(14)]);
var inst_24124 = (state_24166[(2)]);
var inst_24125__$1 = cljs.core.nth.call(null,inst_24124,(0),null);
var inst_24126__$1 = cljs.core.nth.call(null,inst_24124,(1),null);
var inst_24127 = (inst_24125__$1 == null);
var inst_24128 = cljs.core._EQ_.call(null,inst_24126__$1,change);
var inst_24129 = ((inst_24127) || (inst_24128));
var state_24166__$1 = (function (){var statearr_24188 = state_24166;
(statearr_24188[(11)] = inst_24126__$1);

(statearr_24188[(14)] = inst_24125__$1);

return statearr_24188;
})();
if(cljs.core.truth_(inst_24129)){
var statearr_24189_24243 = state_24166__$1;
(statearr_24189_24243[(1)] = (23));

} else {
var statearr_24190_24244 = state_24166__$1;
(statearr_24190_24244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (36))){
var inst_24116 = (state_24166[(12)]);
var inst_24093 = inst_24116;
var state_24166__$1 = (function (){var statearr_24191 = state_24166;
(statearr_24191[(7)] = inst_24093);

return statearr_24191;
})();
var statearr_24192_24245 = state_24166__$1;
(statearr_24192_24245[(2)] = null);

(statearr_24192_24245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (29))){
var inst_24140 = (state_24166[(10)]);
var state_24166__$1 = state_24166;
var statearr_24193_24246 = state_24166__$1;
(statearr_24193_24246[(2)] = inst_24140);

(statearr_24193_24246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (6))){
var state_24166__$1 = state_24166;
var statearr_24194_24247 = state_24166__$1;
(statearr_24194_24247[(2)] = false);

(statearr_24194_24247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (28))){
var inst_24136 = (state_24166[(2)]);
var inst_24137 = calc_state.call(null);
var inst_24093 = inst_24137;
var state_24166__$1 = (function (){var statearr_24195 = state_24166;
(statearr_24195[(7)] = inst_24093);

(statearr_24195[(15)] = inst_24136);

return statearr_24195;
})();
var statearr_24196_24248 = state_24166__$1;
(statearr_24196_24248[(2)] = null);

(statearr_24196_24248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (25))){
var inst_24162 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24197_24249 = state_24166__$1;
(statearr_24197_24249[(2)] = inst_24162);

(statearr_24197_24249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (34))){
var inst_24160 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24198_24250 = state_24166__$1;
(statearr_24198_24250[(2)] = inst_24160);

(statearr_24198_24250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (17))){
var state_24166__$1 = state_24166;
var statearr_24199_24251 = state_24166__$1;
(statearr_24199_24251[(2)] = false);

(statearr_24199_24251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (3))){
var state_24166__$1 = state_24166;
var statearr_24200_24252 = state_24166__$1;
(statearr_24200_24252[(2)] = false);

(statearr_24200_24252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (12))){
var inst_24164 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24166__$1,inst_24164);
} else {
if((state_val_24167 === (2))){
var inst_24068 = (state_24166[(8)]);
var inst_24073 = inst_24068.cljs$lang$protocol_mask$partition0$;
var inst_24074 = (inst_24073 & (64));
var inst_24075 = inst_24068.cljs$core$ISeq$;
var inst_24076 = (cljs.core.PROTOCOL_SENTINEL === inst_24075);
var inst_24077 = ((inst_24074) || (inst_24076));
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24077)){
var statearr_24201_24253 = state_24166__$1;
(statearr_24201_24253[(1)] = (5));

} else {
var statearr_24202_24254 = state_24166__$1;
(statearr_24202_24254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (23))){
var inst_24125 = (state_24166[(14)]);
var inst_24131 = (inst_24125 == null);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24131)){
var statearr_24203_24255 = state_24166__$1;
(statearr_24203_24255[(1)] = (26));

} else {
var statearr_24204_24256 = state_24166__$1;
(statearr_24204_24256[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (35))){
var inst_24151 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24151)){
var statearr_24205_24257 = state_24166__$1;
(statearr_24205_24257[(1)] = (36));

} else {
var statearr_24206_24258 = state_24166__$1;
(statearr_24206_24258[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (19))){
var inst_24093 = (state_24166[(7)]);
var inst_24113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24093);
var state_24166__$1 = state_24166;
var statearr_24207_24259 = state_24166__$1;
(statearr_24207_24259[(2)] = inst_24113);

(statearr_24207_24259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (11))){
var inst_24093 = (state_24166[(7)]);
var inst_24097 = (inst_24093 == null);
var inst_24098 = cljs.core.not.call(null,inst_24097);
var state_24166__$1 = state_24166;
if(inst_24098){
var statearr_24208_24260 = state_24166__$1;
(statearr_24208_24260[(1)] = (13));

} else {
var statearr_24209_24261 = state_24166__$1;
(statearr_24209_24261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (9))){
var inst_24068 = (state_24166[(8)]);
var state_24166__$1 = state_24166;
var statearr_24210_24262 = state_24166__$1;
(statearr_24210_24262[(2)] = inst_24068);

(statearr_24210_24262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (5))){
var state_24166__$1 = state_24166;
var statearr_24211_24263 = state_24166__$1;
(statearr_24211_24263[(2)] = true);

(statearr_24211_24263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (14))){
var state_24166__$1 = state_24166;
var statearr_24212_24264 = state_24166__$1;
(statearr_24212_24264[(2)] = false);

(statearr_24212_24264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (26))){
var inst_24126 = (state_24166[(11)]);
var inst_24133 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24126);
var state_24166__$1 = state_24166;
var statearr_24213_24265 = state_24166__$1;
(statearr_24213_24265[(2)] = inst_24133);

(statearr_24213_24265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (16))){
var state_24166__$1 = state_24166;
var statearr_24214_24266 = state_24166__$1;
(statearr_24214_24266[(2)] = true);

(statearr_24214_24266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (38))){
var inst_24156 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24215_24267 = state_24166__$1;
(statearr_24215_24267[(2)] = inst_24156);

(statearr_24215_24267[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (30))){
var inst_24117 = (state_24166[(9)]);
var inst_24126 = (state_24166[(11)]);
var inst_24118 = (state_24166[(13)]);
var inst_24143 = cljs.core.empty_QMARK_.call(null,inst_24117);
var inst_24144 = inst_24118.call(null,inst_24126);
var inst_24145 = cljs.core.not.call(null,inst_24144);
var inst_24146 = ((inst_24143) && (inst_24145));
var state_24166__$1 = state_24166;
var statearr_24216_24268 = state_24166__$1;
(statearr_24216_24268[(2)] = inst_24146);

(statearr_24216_24268[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (10))){
var inst_24068 = (state_24166[(8)]);
var inst_24089 = (state_24166[(2)]);
var inst_24090 = cljs.core.get.call(null,inst_24089,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24091 = cljs.core.get.call(null,inst_24089,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24092 = cljs.core.get.call(null,inst_24089,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24093 = inst_24068;
var state_24166__$1 = (function (){var statearr_24217 = state_24166;
(statearr_24217[(7)] = inst_24093);

(statearr_24217[(16)] = inst_24091);

(statearr_24217[(17)] = inst_24092);

(statearr_24217[(18)] = inst_24090);

return statearr_24217;
})();
var statearr_24218_24269 = state_24166__$1;
(statearr_24218_24269[(2)] = null);

(statearr_24218_24269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (18))){
var inst_24108 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24219_24270 = state_24166__$1;
(statearr_24219_24270[(2)] = inst_24108);

(statearr_24219_24270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (37))){
var state_24166__$1 = state_24166;
var statearr_24220_24271 = state_24166__$1;
(statearr_24220_24271[(2)] = null);

(statearr_24220_24271[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (8))){
var inst_24068 = (state_24166[(8)]);
var inst_24086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24068);
var state_24166__$1 = state_24166;
var statearr_24221_24272 = state_24166__$1;
(statearr_24221_24272[(2)] = inst_24086);

(statearr_24221_24272[(1)] = (10));


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
});})(c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23077__auto__,c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23078__auto__ = null;
var cljs$core$async$mix_$_state_machine__23078__auto____0 = (function (){
var statearr_24222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24222[(0)] = cljs$core$async$mix_$_state_machine__23078__auto__);

(statearr_24222[(1)] = (1));

return statearr_24222;
});
var cljs$core$async$mix_$_state_machine__23078__auto____1 = (function (state_24166){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24223){if((e24223 instanceof Object)){
var ex__23081__auto__ = e24223;
var statearr_24224_24273 = state_24166;
(statearr_24224_24273[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24274 = state_24166;
state_24166 = G__24274;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23078__auto__ = function(state_24166){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23078__auto____1.call(this,state_24166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23078__auto____0;
cljs$core$async$mix_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23078__auto____1;
return cljs$core$async$mix_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23169__auto__ = (function (){var statearr_24225 = f__23168__auto__.call(null);
(statearr_24225[(6)] = c__23167__auto___24226);

return statearr_24225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24226,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24276 = arguments.length;
switch (G__24276) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24280 = arguments.length;
switch (G__24280) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24278_SHARP_){
if(cljs.core.truth_(p1__24278_SHARP_.call(null,topic))){
return p1__24278_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24278_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24281 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24282){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24282 = meta24282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24283,meta24282__$1){
var self__ = this;
var _24283__$1 = this;
return (new cljs.core.async.t_cljs$core$async24281(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24282__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24283){
var self__ = this;
var _24283__$1 = this;
return self__.meta24282;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24282","meta24282",408070042,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24281";

cljs.core.async.t_cljs$core$async24281.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24281");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24281.
 */
cljs.core.async.__GT_t_cljs$core$async24281 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24281(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24282){
return (new cljs.core.async.t_cljs$core$async24281(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24282));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24281(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23167__auto___24401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24401,mults,ensure_mult,p){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24401,mults,ensure_mult,p){
return (function (state_24355){
var state_val_24356 = (state_24355[(1)]);
if((state_val_24356 === (7))){
var inst_24351 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24357_24402 = state_24355__$1;
(statearr_24357_24402[(2)] = inst_24351);

(statearr_24357_24402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (20))){
var state_24355__$1 = state_24355;
var statearr_24358_24403 = state_24355__$1;
(statearr_24358_24403[(2)] = null);

(statearr_24358_24403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (1))){
var state_24355__$1 = state_24355;
var statearr_24359_24404 = state_24355__$1;
(statearr_24359_24404[(2)] = null);

(statearr_24359_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (24))){
var inst_24334 = (state_24355[(7)]);
var inst_24343 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24334);
var state_24355__$1 = state_24355;
var statearr_24360_24405 = state_24355__$1;
(statearr_24360_24405[(2)] = inst_24343);

(statearr_24360_24405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (4))){
var inst_24286 = (state_24355[(8)]);
var inst_24286__$1 = (state_24355[(2)]);
var inst_24287 = (inst_24286__$1 == null);
var state_24355__$1 = (function (){var statearr_24361 = state_24355;
(statearr_24361[(8)] = inst_24286__$1);

return statearr_24361;
})();
if(cljs.core.truth_(inst_24287)){
var statearr_24362_24406 = state_24355__$1;
(statearr_24362_24406[(1)] = (5));

} else {
var statearr_24363_24407 = state_24355__$1;
(statearr_24363_24407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (15))){
var inst_24328 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24364_24408 = state_24355__$1;
(statearr_24364_24408[(2)] = inst_24328);

(statearr_24364_24408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (21))){
var inst_24348 = (state_24355[(2)]);
var state_24355__$1 = (function (){var statearr_24365 = state_24355;
(statearr_24365[(9)] = inst_24348);

return statearr_24365;
})();
var statearr_24366_24409 = state_24355__$1;
(statearr_24366_24409[(2)] = null);

(statearr_24366_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (13))){
var inst_24310 = (state_24355[(10)]);
var inst_24312 = cljs.core.chunked_seq_QMARK_.call(null,inst_24310);
var state_24355__$1 = state_24355;
if(inst_24312){
var statearr_24367_24410 = state_24355__$1;
(statearr_24367_24410[(1)] = (16));

} else {
var statearr_24368_24411 = state_24355__$1;
(statearr_24368_24411[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (22))){
var inst_24340 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
if(cljs.core.truth_(inst_24340)){
var statearr_24369_24412 = state_24355__$1;
(statearr_24369_24412[(1)] = (23));

} else {
var statearr_24370_24413 = state_24355__$1;
(statearr_24370_24413[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (6))){
var inst_24286 = (state_24355[(8)]);
var inst_24336 = (state_24355[(11)]);
var inst_24334 = (state_24355[(7)]);
var inst_24334__$1 = topic_fn.call(null,inst_24286);
var inst_24335 = cljs.core.deref.call(null,mults);
var inst_24336__$1 = cljs.core.get.call(null,inst_24335,inst_24334__$1);
var state_24355__$1 = (function (){var statearr_24371 = state_24355;
(statearr_24371[(11)] = inst_24336__$1);

(statearr_24371[(7)] = inst_24334__$1);

return statearr_24371;
})();
if(cljs.core.truth_(inst_24336__$1)){
var statearr_24372_24414 = state_24355__$1;
(statearr_24372_24414[(1)] = (19));

} else {
var statearr_24373_24415 = state_24355__$1;
(statearr_24373_24415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (25))){
var inst_24345 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24374_24416 = state_24355__$1;
(statearr_24374_24416[(2)] = inst_24345);

(statearr_24374_24416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (17))){
var inst_24310 = (state_24355[(10)]);
var inst_24319 = cljs.core.first.call(null,inst_24310);
var inst_24320 = cljs.core.async.muxch_STAR_.call(null,inst_24319);
var inst_24321 = cljs.core.async.close_BANG_.call(null,inst_24320);
var inst_24322 = cljs.core.next.call(null,inst_24310);
var inst_24296 = inst_24322;
var inst_24297 = null;
var inst_24298 = (0);
var inst_24299 = (0);
var state_24355__$1 = (function (){var statearr_24375 = state_24355;
(statearr_24375[(12)] = inst_24297);

(statearr_24375[(13)] = inst_24296);

(statearr_24375[(14)] = inst_24298);

(statearr_24375[(15)] = inst_24321);

(statearr_24375[(16)] = inst_24299);

return statearr_24375;
})();
var statearr_24376_24417 = state_24355__$1;
(statearr_24376_24417[(2)] = null);

(statearr_24376_24417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (3))){
var inst_24353 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24355__$1,inst_24353);
} else {
if((state_val_24356 === (12))){
var inst_24330 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24377_24418 = state_24355__$1;
(statearr_24377_24418[(2)] = inst_24330);

(statearr_24377_24418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (2))){
var state_24355__$1 = state_24355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24355__$1,(4),ch);
} else {
if((state_val_24356 === (23))){
var state_24355__$1 = state_24355;
var statearr_24378_24419 = state_24355__$1;
(statearr_24378_24419[(2)] = null);

(statearr_24378_24419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (19))){
var inst_24286 = (state_24355[(8)]);
var inst_24336 = (state_24355[(11)]);
var inst_24338 = cljs.core.async.muxch_STAR_.call(null,inst_24336);
var state_24355__$1 = state_24355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24355__$1,(22),inst_24338,inst_24286);
} else {
if((state_val_24356 === (11))){
var inst_24296 = (state_24355[(13)]);
var inst_24310 = (state_24355[(10)]);
var inst_24310__$1 = cljs.core.seq.call(null,inst_24296);
var state_24355__$1 = (function (){var statearr_24379 = state_24355;
(statearr_24379[(10)] = inst_24310__$1);

return statearr_24379;
})();
if(inst_24310__$1){
var statearr_24380_24420 = state_24355__$1;
(statearr_24380_24420[(1)] = (13));

} else {
var statearr_24381_24421 = state_24355__$1;
(statearr_24381_24421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (9))){
var inst_24332 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24382_24422 = state_24355__$1;
(statearr_24382_24422[(2)] = inst_24332);

(statearr_24382_24422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (5))){
var inst_24293 = cljs.core.deref.call(null,mults);
var inst_24294 = cljs.core.vals.call(null,inst_24293);
var inst_24295 = cljs.core.seq.call(null,inst_24294);
var inst_24296 = inst_24295;
var inst_24297 = null;
var inst_24298 = (0);
var inst_24299 = (0);
var state_24355__$1 = (function (){var statearr_24383 = state_24355;
(statearr_24383[(12)] = inst_24297);

(statearr_24383[(13)] = inst_24296);

(statearr_24383[(14)] = inst_24298);

(statearr_24383[(16)] = inst_24299);

return statearr_24383;
})();
var statearr_24384_24423 = state_24355__$1;
(statearr_24384_24423[(2)] = null);

(statearr_24384_24423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (14))){
var state_24355__$1 = state_24355;
var statearr_24388_24424 = state_24355__$1;
(statearr_24388_24424[(2)] = null);

(statearr_24388_24424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (16))){
var inst_24310 = (state_24355[(10)]);
var inst_24314 = cljs.core.chunk_first.call(null,inst_24310);
var inst_24315 = cljs.core.chunk_rest.call(null,inst_24310);
var inst_24316 = cljs.core.count.call(null,inst_24314);
var inst_24296 = inst_24315;
var inst_24297 = inst_24314;
var inst_24298 = inst_24316;
var inst_24299 = (0);
var state_24355__$1 = (function (){var statearr_24389 = state_24355;
(statearr_24389[(12)] = inst_24297);

(statearr_24389[(13)] = inst_24296);

(statearr_24389[(14)] = inst_24298);

(statearr_24389[(16)] = inst_24299);

return statearr_24389;
})();
var statearr_24390_24425 = state_24355__$1;
(statearr_24390_24425[(2)] = null);

(statearr_24390_24425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (10))){
var inst_24297 = (state_24355[(12)]);
var inst_24296 = (state_24355[(13)]);
var inst_24298 = (state_24355[(14)]);
var inst_24299 = (state_24355[(16)]);
var inst_24304 = cljs.core._nth.call(null,inst_24297,inst_24299);
var inst_24305 = cljs.core.async.muxch_STAR_.call(null,inst_24304);
var inst_24306 = cljs.core.async.close_BANG_.call(null,inst_24305);
var inst_24307 = (inst_24299 + (1));
var tmp24385 = inst_24297;
var tmp24386 = inst_24296;
var tmp24387 = inst_24298;
var inst_24296__$1 = tmp24386;
var inst_24297__$1 = tmp24385;
var inst_24298__$1 = tmp24387;
var inst_24299__$1 = inst_24307;
var state_24355__$1 = (function (){var statearr_24391 = state_24355;
(statearr_24391[(17)] = inst_24306);

(statearr_24391[(12)] = inst_24297__$1);

(statearr_24391[(13)] = inst_24296__$1);

(statearr_24391[(14)] = inst_24298__$1);

(statearr_24391[(16)] = inst_24299__$1);

return statearr_24391;
})();
var statearr_24392_24426 = state_24355__$1;
(statearr_24392_24426[(2)] = null);

(statearr_24392_24426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (18))){
var inst_24325 = (state_24355[(2)]);
var state_24355__$1 = state_24355;
var statearr_24393_24427 = state_24355__$1;
(statearr_24393_24427[(2)] = inst_24325);

(statearr_24393_24427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24356 === (8))){
var inst_24298 = (state_24355[(14)]);
var inst_24299 = (state_24355[(16)]);
var inst_24301 = (inst_24299 < inst_24298);
var inst_24302 = inst_24301;
var state_24355__$1 = state_24355;
if(cljs.core.truth_(inst_24302)){
var statearr_24394_24428 = state_24355__$1;
(statearr_24394_24428[(1)] = (10));

} else {
var statearr_24395_24429 = state_24355__$1;
(statearr_24395_24429[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23167__auto___24401,mults,ensure_mult,p))
;
return ((function (switch__23077__auto__,c__23167__auto___24401,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24355){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object)){
var ex__23081__auto__ = e24397;
var statearr_24398_24430 = state_24355;
(statearr_24398_24430[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24431 = state_24355;
state_24355 = G__24431;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24401,mults,ensure_mult,p))
})();
var state__23169__auto__ = (function (){var statearr_24399 = f__23168__auto__.call(null);
(statearr_24399[(6)] = c__23167__auto___24401);

return statearr_24399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24401,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24433 = arguments.length;
switch (G__24433) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24436 = arguments.length;
switch (G__24436) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24439 = arguments.length;
switch (G__24439) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23167__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24478){
var state_val_24479 = (state_24478[(1)]);
if((state_val_24479 === (7))){
var state_24478__$1 = state_24478;
var statearr_24480_24507 = state_24478__$1;
(statearr_24480_24507[(2)] = null);

(statearr_24480_24507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (1))){
var state_24478__$1 = state_24478;
var statearr_24481_24508 = state_24478__$1;
(statearr_24481_24508[(2)] = null);

(statearr_24481_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (4))){
var inst_24442 = (state_24478[(7)]);
var inst_24444 = (inst_24442 < cnt);
var state_24478__$1 = state_24478;
if(cljs.core.truth_(inst_24444)){
var statearr_24482_24509 = state_24478__$1;
(statearr_24482_24509[(1)] = (6));

} else {
var statearr_24483_24510 = state_24478__$1;
(statearr_24483_24510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (15))){
var inst_24474 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
var statearr_24484_24511 = state_24478__$1;
(statearr_24484_24511[(2)] = inst_24474);

(statearr_24484_24511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (13))){
var inst_24467 = cljs.core.async.close_BANG_.call(null,out);
var state_24478__$1 = state_24478;
var statearr_24485_24512 = state_24478__$1;
(statearr_24485_24512[(2)] = inst_24467);

(statearr_24485_24512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (6))){
var state_24478__$1 = state_24478;
var statearr_24486_24513 = state_24478__$1;
(statearr_24486_24513[(2)] = null);

(statearr_24486_24513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (3))){
var inst_24476 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24478__$1,inst_24476);
} else {
if((state_val_24479 === (12))){
var inst_24464 = (state_24478[(8)]);
var inst_24464__$1 = (state_24478[(2)]);
var inst_24465 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24464__$1);
var state_24478__$1 = (function (){var statearr_24487 = state_24478;
(statearr_24487[(8)] = inst_24464__$1);

return statearr_24487;
})();
if(cljs.core.truth_(inst_24465)){
var statearr_24488_24514 = state_24478__$1;
(statearr_24488_24514[(1)] = (13));

} else {
var statearr_24489_24515 = state_24478__$1;
(statearr_24489_24515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (2))){
var inst_24441 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24442 = (0);
var state_24478__$1 = (function (){var statearr_24490 = state_24478;
(statearr_24490[(9)] = inst_24441);

(statearr_24490[(7)] = inst_24442);

return statearr_24490;
})();
var statearr_24491_24516 = state_24478__$1;
(statearr_24491_24516[(2)] = null);

(statearr_24491_24516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (11))){
var inst_24442 = (state_24478[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24478,(10),Object,null,(9));
var inst_24451 = chs__$1.call(null,inst_24442);
var inst_24452 = done.call(null,inst_24442);
var inst_24453 = cljs.core.async.take_BANG_.call(null,inst_24451,inst_24452);
var state_24478__$1 = state_24478;
var statearr_24492_24517 = state_24478__$1;
(statearr_24492_24517[(2)] = inst_24453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (9))){
var inst_24442 = (state_24478[(7)]);
var inst_24455 = (state_24478[(2)]);
var inst_24456 = (inst_24442 + (1));
var inst_24442__$1 = inst_24456;
var state_24478__$1 = (function (){var statearr_24493 = state_24478;
(statearr_24493[(10)] = inst_24455);

(statearr_24493[(7)] = inst_24442__$1);

return statearr_24493;
})();
var statearr_24494_24518 = state_24478__$1;
(statearr_24494_24518[(2)] = null);

(statearr_24494_24518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (5))){
var inst_24462 = (state_24478[(2)]);
var state_24478__$1 = (function (){var statearr_24495 = state_24478;
(statearr_24495[(11)] = inst_24462);

return statearr_24495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24478__$1,(12),dchan);
} else {
if((state_val_24479 === (14))){
var inst_24464 = (state_24478[(8)]);
var inst_24469 = cljs.core.apply.call(null,f,inst_24464);
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24478__$1,(16),out,inst_24469);
} else {
if((state_val_24479 === (16))){
var inst_24471 = (state_24478[(2)]);
var state_24478__$1 = (function (){var statearr_24496 = state_24478;
(statearr_24496[(12)] = inst_24471);

return statearr_24496;
})();
var statearr_24497_24519 = state_24478__$1;
(statearr_24497_24519[(2)] = null);

(statearr_24497_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (10))){
var inst_24446 = (state_24478[(2)]);
var inst_24447 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24478__$1 = (function (){var statearr_24498 = state_24478;
(statearr_24498[(13)] = inst_24446);

return statearr_24498;
})();
var statearr_24499_24520 = state_24478__$1;
(statearr_24499_24520[(2)] = inst_24447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (8))){
var inst_24460 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
var statearr_24500_24521 = state_24478__$1;
(statearr_24500_24521[(2)] = inst_24460);

(statearr_24500_24521[(1)] = (5));


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
});})(c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23077__auto__,c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24501[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24501[(1)] = (1));

return statearr_24501;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24478){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24502){if((e24502 instanceof Object)){
var ex__23081__auto__ = e24502;
var statearr_24503_24522 = state_24478;
(statearr_24503_24522[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24523 = state_24478;
state_24478 = G__24523;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23169__auto__ = (function (){var statearr_24504 = f__23168__auto__.call(null);
(statearr_24504[(6)] = c__23167__auto___24506);

return statearr_24504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24506,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24526 = arguments.length;
switch (G__24526) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___24580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24580,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24580,out){
return (function (state_24558){
var state_val_24559 = (state_24558[(1)]);
if((state_val_24559 === (7))){
var inst_24537 = (state_24558[(7)]);
var inst_24538 = (state_24558[(8)]);
var inst_24537__$1 = (state_24558[(2)]);
var inst_24538__$1 = cljs.core.nth.call(null,inst_24537__$1,(0),null);
var inst_24539 = cljs.core.nth.call(null,inst_24537__$1,(1),null);
var inst_24540 = (inst_24538__$1 == null);
var state_24558__$1 = (function (){var statearr_24560 = state_24558;
(statearr_24560[(7)] = inst_24537__$1);

(statearr_24560[(8)] = inst_24538__$1);

(statearr_24560[(9)] = inst_24539);

return statearr_24560;
})();
if(cljs.core.truth_(inst_24540)){
var statearr_24561_24581 = state_24558__$1;
(statearr_24561_24581[(1)] = (8));

} else {
var statearr_24562_24582 = state_24558__$1;
(statearr_24562_24582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (1))){
var inst_24527 = cljs.core.vec.call(null,chs);
var inst_24528 = inst_24527;
var state_24558__$1 = (function (){var statearr_24563 = state_24558;
(statearr_24563[(10)] = inst_24528);

return statearr_24563;
})();
var statearr_24564_24583 = state_24558__$1;
(statearr_24564_24583[(2)] = null);

(statearr_24564_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (4))){
var inst_24528 = (state_24558[(10)]);
var state_24558__$1 = state_24558;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24558__$1,(7),inst_24528);
} else {
if((state_val_24559 === (6))){
var inst_24554 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24565_24584 = state_24558__$1;
(statearr_24565_24584[(2)] = inst_24554);

(statearr_24565_24584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (3))){
var inst_24556 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24558__$1,inst_24556);
} else {
if((state_val_24559 === (2))){
var inst_24528 = (state_24558[(10)]);
var inst_24530 = cljs.core.count.call(null,inst_24528);
var inst_24531 = (inst_24530 > (0));
var state_24558__$1 = state_24558;
if(cljs.core.truth_(inst_24531)){
var statearr_24567_24585 = state_24558__$1;
(statearr_24567_24585[(1)] = (4));

} else {
var statearr_24568_24586 = state_24558__$1;
(statearr_24568_24586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (11))){
var inst_24528 = (state_24558[(10)]);
var inst_24547 = (state_24558[(2)]);
var tmp24566 = inst_24528;
var inst_24528__$1 = tmp24566;
var state_24558__$1 = (function (){var statearr_24569 = state_24558;
(statearr_24569[(10)] = inst_24528__$1);

(statearr_24569[(11)] = inst_24547);

return statearr_24569;
})();
var statearr_24570_24587 = state_24558__$1;
(statearr_24570_24587[(2)] = null);

(statearr_24570_24587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (9))){
var inst_24538 = (state_24558[(8)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24558__$1,(11),out,inst_24538);
} else {
if((state_val_24559 === (5))){
var inst_24552 = cljs.core.async.close_BANG_.call(null,out);
var state_24558__$1 = state_24558;
var statearr_24571_24588 = state_24558__$1;
(statearr_24571_24588[(2)] = inst_24552);

(statearr_24571_24588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (10))){
var inst_24550 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24572_24589 = state_24558__$1;
(statearr_24572_24589[(2)] = inst_24550);

(statearr_24572_24589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (8))){
var inst_24528 = (state_24558[(10)]);
var inst_24537 = (state_24558[(7)]);
var inst_24538 = (state_24558[(8)]);
var inst_24539 = (state_24558[(9)]);
var inst_24542 = (function (){var cs = inst_24528;
var vec__24533 = inst_24537;
var v = inst_24538;
var c = inst_24539;
return ((function (cs,vec__24533,v,c,inst_24528,inst_24537,inst_24538,inst_24539,state_val_24559,c__23167__auto___24580,out){
return (function (p1__24524_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24524_SHARP_);
});
;})(cs,vec__24533,v,c,inst_24528,inst_24537,inst_24538,inst_24539,state_val_24559,c__23167__auto___24580,out))
})();
var inst_24543 = cljs.core.filterv.call(null,inst_24542,inst_24528);
var inst_24528__$1 = inst_24543;
var state_24558__$1 = (function (){var statearr_24573 = state_24558;
(statearr_24573[(10)] = inst_24528__$1);

return statearr_24573;
})();
var statearr_24574_24590 = state_24558__$1;
(statearr_24574_24590[(2)] = null);

(statearr_24574_24590[(1)] = (2));


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
});})(c__23167__auto___24580,out))
;
return ((function (switch__23077__auto__,c__23167__auto___24580,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24575[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24575[(1)] = (1));

return statearr_24575;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24558){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24576){if((e24576 instanceof Object)){
var ex__23081__auto__ = e24576;
var statearr_24577_24591 = state_24558;
(statearr_24577_24591[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24592 = state_24558;
state_24558 = G__24592;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24580,out))
})();
var state__23169__auto__ = (function (){var statearr_24578 = f__23168__auto__.call(null);
(statearr_24578[(6)] = c__23167__auto___24580);

return statearr_24578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24580,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24594 = arguments.length;
switch (G__24594) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___24639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24639,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24639,out){
return (function (state_24618){
var state_val_24619 = (state_24618[(1)]);
if((state_val_24619 === (7))){
var inst_24600 = (state_24618[(7)]);
var inst_24600__$1 = (state_24618[(2)]);
var inst_24601 = (inst_24600__$1 == null);
var inst_24602 = cljs.core.not.call(null,inst_24601);
var state_24618__$1 = (function (){var statearr_24620 = state_24618;
(statearr_24620[(7)] = inst_24600__$1);

return statearr_24620;
})();
if(inst_24602){
var statearr_24621_24640 = state_24618__$1;
(statearr_24621_24640[(1)] = (8));

} else {
var statearr_24622_24641 = state_24618__$1;
(statearr_24622_24641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (1))){
var inst_24595 = (0);
var state_24618__$1 = (function (){var statearr_24623 = state_24618;
(statearr_24623[(8)] = inst_24595);

return statearr_24623;
})();
var statearr_24624_24642 = state_24618__$1;
(statearr_24624_24642[(2)] = null);

(statearr_24624_24642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (4))){
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24618__$1,(7),ch);
} else {
if((state_val_24619 === (6))){
var inst_24613 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24625_24643 = state_24618__$1;
(statearr_24625_24643[(2)] = inst_24613);

(statearr_24625_24643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (3))){
var inst_24615 = (state_24618[(2)]);
var inst_24616 = cljs.core.async.close_BANG_.call(null,out);
var state_24618__$1 = (function (){var statearr_24626 = state_24618;
(statearr_24626[(9)] = inst_24615);

return statearr_24626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24618__$1,inst_24616);
} else {
if((state_val_24619 === (2))){
var inst_24595 = (state_24618[(8)]);
var inst_24597 = (inst_24595 < n);
var state_24618__$1 = state_24618;
if(cljs.core.truth_(inst_24597)){
var statearr_24627_24644 = state_24618__$1;
(statearr_24627_24644[(1)] = (4));

} else {
var statearr_24628_24645 = state_24618__$1;
(statearr_24628_24645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (11))){
var inst_24595 = (state_24618[(8)]);
var inst_24605 = (state_24618[(2)]);
var inst_24606 = (inst_24595 + (1));
var inst_24595__$1 = inst_24606;
var state_24618__$1 = (function (){var statearr_24629 = state_24618;
(statearr_24629[(10)] = inst_24605);

(statearr_24629[(8)] = inst_24595__$1);

return statearr_24629;
})();
var statearr_24630_24646 = state_24618__$1;
(statearr_24630_24646[(2)] = null);

(statearr_24630_24646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (9))){
var state_24618__$1 = state_24618;
var statearr_24631_24647 = state_24618__$1;
(statearr_24631_24647[(2)] = null);

(statearr_24631_24647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (5))){
var state_24618__$1 = state_24618;
var statearr_24632_24648 = state_24618__$1;
(statearr_24632_24648[(2)] = null);

(statearr_24632_24648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (10))){
var inst_24610 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24633_24649 = state_24618__$1;
(statearr_24633_24649[(2)] = inst_24610);

(statearr_24633_24649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (8))){
var inst_24600 = (state_24618[(7)]);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24618__$1,(11),out,inst_24600);
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
});})(c__23167__auto___24639,out))
;
return ((function (switch__23077__auto__,c__23167__auto___24639,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24634[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24634[(1)] = (1));

return statearr_24634;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24618){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24635){if((e24635 instanceof Object)){
var ex__23081__auto__ = e24635;
var statearr_24636_24650 = state_24618;
(statearr_24636_24650[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24651 = state_24618;
state_24618 = G__24651;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24639,out))
})();
var state__23169__auto__ = (function (){var statearr_24637 = f__23168__auto__.call(null);
(statearr_24637[(6)] = c__23167__auto___24639);

return statearr_24637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24639,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24653 = (function (f,ch,meta24654){
this.f = f;
this.ch = ch;
this.meta24654 = meta24654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24655,meta24654__$1){
var self__ = this;
var _24655__$1 = this;
return (new cljs.core.async.t_cljs$core$async24653(self__.f,self__.ch,meta24654__$1));
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24655){
var self__ = this;
var _24655__$1 = this;
return self__.meta24654;
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24656 = (function (f,ch,meta24654,_,fn1,meta24657){
this.f = f;
this.ch = ch;
this.meta24654 = meta24654;
this._ = _;
this.fn1 = fn1;
this.meta24657 = meta24657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24658,meta24657__$1){
var self__ = this;
var _24658__$1 = this;
return (new cljs.core.async.t_cljs$core$async24656(self__.f,self__.ch,self__.meta24654,self__._,self__.fn1,meta24657__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24658){
var self__ = this;
var _24658__$1 = this;
return self__.meta24657;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24652_SHARP_){
return f1.call(null,(((p1__24652_SHARP_ == null))?null:self__.f.call(null,p1__24652_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24654","meta24654",-1640547551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24653","cljs.core.async/t_cljs$core$async24653",-804975417,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24657","meta24657",-337942219,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24656";

cljs.core.async.t_cljs$core$async24656.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24656");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24656.
 */
cljs.core.async.__GT_t_cljs$core$async24656 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24656(f__$1,ch__$1,meta24654__$1,___$2,fn1__$1,meta24657){
return (new cljs.core.async.t_cljs$core$async24656(f__$1,ch__$1,meta24654__$1,___$2,fn1__$1,meta24657));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24656(self__.f,self__.ch,self__.meta24654,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24654","meta24654",-1640547551,null)], null);
});

cljs.core.async.t_cljs$core$async24653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24653";

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24653");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24653.
 */
cljs.core.async.__GT_t_cljs$core$async24653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24653(f__$1,ch__$1,meta24654){
return (new cljs.core.async.t_cljs$core$async24653(f__$1,ch__$1,meta24654));
});

}

return (new cljs.core.async.t_cljs$core$async24653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24659 = (function (f,ch,meta24660){
this.f = f;
this.ch = ch;
this.meta24660 = meta24660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24661,meta24660__$1){
var self__ = this;
var _24661__$1 = this;
return (new cljs.core.async.t_cljs$core$async24659(self__.f,self__.ch,meta24660__$1));
});

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24661){
var self__ = this;
var _24661__$1 = this;
return self__.meta24660;
});

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24660","meta24660",902121880,null)], null);
});

cljs.core.async.t_cljs$core$async24659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24659";

cljs.core.async.t_cljs$core$async24659.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24659");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24659.
 */
cljs.core.async.__GT_t_cljs$core$async24659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24659(f__$1,ch__$1,meta24660){
return (new cljs.core.async.t_cljs$core$async24659(f__$1,ch__$1,meta24660));
});

}

return (new cljs.core.async.t_cljs$core$async24659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24662 = (function (p,ch,meta24663){
this.p = p;
this.ch = ch;
this.meta24663 = meta24663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24664,meta24663__$1){
var self__ = this;
var _24664__$1 = this;
return (new cljs.core.async.t_cljs$core$async24662(self__.p,self__.ch,meta24663__$1));
});

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24664){
var self__ = this;
var _24664__$1 = this;
return self__.meta24663;
});

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24663","meta24663",-2001679857,null)], null);
});

cljs.core.async.t_cljs$core$async24662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24662";

cljs.core.async.t_cljs$core$async24662.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24662");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24662.
 */
cljs.core.async.__GT_t_cljs$core$async24662 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24662(p__$1,ch__$1,meta24663){
return (new cljs.core.async.t_cljs$core$async24662(p__$1,ch__$1,meta24663));
});

}

return (new cljs.core.async.t_cljs$core$async24662(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24666 = arguments.length;
switch (G__24666) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___24706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24706,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24706,out){
return (function (state_24687){
var state_val_24688 = (state_24687[(1)]);
if((state_val_24688 === (7))){
var inst_24683 = (state_24687[(2)]);
var state_24687__$1 = state_24687;
var statearr_24689_24707 = state_24687__$1;
(statearr_24689_24707[(2)] = inst_24683);

(statearr_24689_24707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (1))){
var state_24687__$1 = state_24687;
var statearr_24690_24708 = state_24687__$1;
(statearr_24690_24708[(2)] = null);

(statearr_24690_24708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (4))){
var inst_24669 = (state_24687[(7)]);
var inst_24669__$1 = (state_24687[(2)]);
var inst_24670 = (inst_24669__$1 == null);
var state_24687__$1 = (function (){var statearr_24691 = state_24687;
(statearr_24691[(7)] = inst_24669__$1);

return statearr_24691;
})();
if(cljs.core.truth_(inst_24670)){
var statearr_24692_24709 = state_24687__$1;
(statearr_24692_24709[(1)] = (5));

} else {
var statearr_24693_24710 = state_24687__$1;
(statearr_24693_24710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (6))){
var inst_24669 = (state_24687[(7)]);
var inst_24674 = p.call(null,inst_24669);
var state_24687__$1 = state_24687;
if(cljs.core.truth_(inst_24674)){
var statearr_24694_24711 = state_24687__$1;
(statearr_24694_24711[(1)] = (8));

} else {
var statearr_24695_24712 = state_24687__$1;
(statearr_24695_24712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (3))){
var inst_24685 = (state_24687[(2)]);
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24687__$1,inst_24685);
} else {
if((state_val_24688 === (2))){
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24687__$1,(4),ch);
} else {
if((state_val_24688 === (11))){
var inst_24677 = (state_24687[(2)]);
var state_24687__$1 = state_24687;
var statearr_24696_24713 = state_24687__$1;
(statearr_24696_24713[(2)] = inst_24677);

(statearr_24696_24713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (9))){
var state_24687__$1 = state_24687;
var statearr_24697_24714 = state_24687__$1;
(statearr_24697_24714[(2)] = null);

(statearr_24697_24714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (5))){
var inst_24672 = cljs.core.async.close_BANG_.call(null,out);
var state_24687__$1 = state_24687;
var statearr_24698_24715 = state_24687__$1;
(statearr_24698_24715[(2)] = inst_24672);

(statearr_24698_24715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (10))){
var inst_24680 = (state_24687[(2)]);
var state_24687__$1 = (function (){var statearr_24699 = state_24687;
(statearr_24699[(8)] = inst_24680);

return statearr_24699;
})();
var statearr_24700_24716 = state_24687__$1;
(statearr_24700_24716[(2)] = null);

(statearr_24700_24716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24688 === (8))){
var inst_24669 = (state_24687[(7)]);
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24687__$1,(11),out,inst_24669);
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
});})(c__23167__auto___24706,out))
;
return ((function (switch__23077__auto__,c__23167__auto___24706,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24701 = [null,null,null,null,null,null,null,null,null];
(statearr_24701[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24701[(1)] = (1));

return statearr_24701;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24687){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object)){
var ex__23081__auto__ = e24702;
var statearr_24703_24717 = state_24687;
(statearr_24703_24717[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24718 = state_24687;
state_24687 = G__24718;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24706,out))
})();
var state__23169__auto__ = (function (){var statearr_24704 = f__23168__auto__.call(null);
(statearr_24704[(6)] = c__23167__auto___24706);

return statearr_24704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24706,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24720 = arguments.length;
switch (G__24720) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__){
return (function (state_24783){
var state_val_24784 = (state_24783[(1)]);
if((state_val_24784 === (7))){
var inst_24779 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24785_24823 = state_24783__$1;
(statearr_24785_24823[(2)] = inst_24779);

(statearr_24785_24823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (20))){
var inst_24749 = (state_24783[(7)]);
var inst_24760 = (state_24783[(2)]);
var inst_24761 = cljs.core.next.call(null,inst_24749);
var inst_24735 = inst_24761;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24786 = state_24783;
(statearr_24786[(8)] = inst_24738);

(statearr_24786[(9)] = inst_24735);

(statearr_24786[(10)] = inst_24760);

(statearr_24786[(11)] = inst_24737);

(statearr_24786[(12)] = inst_24736);

return statearr_24786;
})();
var statearr_24787_24824 = state_24783__$1;
(statearr_24787_24824[(2)] = null);

(statearr_24787_24824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (1))){
var state_24783__$1 = state_24783;
var statearr_24788_24825 = state_24783__$1;
(statearr_24788_24825[(2)] = null);

(statearr_24788_24825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (4))){
var inst_24724 = (state_24783[(13)]);
var inst_24724__$1 = (state_24783[(2)]);
var inst_24725 = (inst_24724__$1 == null);
var state_24783__$1 = (function (){var statearr_24789 = state_24783;
(statearr_24789[(13)] = inst_24724__$1);

return statearr_24789;
})();
if(cljs.core.truth_(inst_24725)){
var statearr_24790_24826 = state_24783__$1;
(statearr_24790_24826[(1)] = (5));

} else {
var statearr_24791_24827 = state_24783__$1;
(statearr_24791_24827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (15))){
var state_24783__$1 = state_24783;
var statearr_24795_24828 = state_24783__$1;
(statearr_24795_24828[(2)] = null);

(statearr_24795_24828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (21))){
var state_24783__$1 = state_24783;
var statearr_24796_24829 = state_24783__$1;
(statearr_24796_24829[(2)] = null);

(statearr_24796_24829[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (13))){
var inst_24738 = (state_24783[(8)]);
var inst_24735 = (state_24783[(9)]);
var inst_24737 = (state_24783[(11)]);
var inst_24736 = (state_24783[(12)]);
var inst_24745 = (state_24783[(2)]);
var inst_24746 = (inst_24738 + (1));
var tmp24792 = inst_24735;
var tmp24793 = inst_24737;
var tmp24794 = inst_24736;
var inst_24735__$1 = tmp24792;
var inst_24736__$1 = tmp24794;
var inst_24737__$1 = tmp24793;
var inst_24738__$1 = inst_24746;
var state_24783__$1 = (function (){var statearr_24797 = state_24783;
(statearr_24797[(14)] = inst_24745);

(statearr_24797[(8)] = inst_24738__$1);

(statearr_24797[(9)] = inst_24735__$1);

(statearr_24797[(11)] = inst_24737__$1);

(statearr_24797[(12)] = inst_24736__$1);

return statearr_24797;
})();
var statearr_24798_24830 = state_24783__$1;
(statearr_24798_24830[(2)] = null);

(statearr_24798_24830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (22))){
var state_24783__$1 = state_24783;
var statearr_24799_24831 = state_24783__$1;
(statearr_24799_24831[(2)] = null);

(statearr_24799_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (6))){
var inst_24724 = (state_24783[(13)]);
var inst_24733 = f.call(null,inst_24724);
var inst_24734 = cljs.core.seq.call(null,inst_24733);
var inst_24735 = inst_24734;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24800 = state_24783;
(statearr_24800[(8)] = inst_24738);

(statearr_24800[(9)] = inst_24735);

(statearr_24800[(11)] = inst_24737);

(statearr_24800[(12)] = inst_24736);

return statearr_24800;
})();
var statearr_24801_24832 = state_24783__$1;
(statearr_24801_24832[(2)] = null);

(statearr_24801_24832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (17))){
var inst_24749 = (state_24783[(7)]);
var inst_24753 = cljs.core.chunk_first.call(null,inst_24749);
var inst_24754 = cljs.core.chunk_rest.call(null,inst_24749);
var inst_24755 = cljs.core.count.call(null,inst_24753);
var inst_24735 = inst_24754;
var inst_24736 = inst_24753;
var inst_24737 = inst_24755;
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24802 = state_24783;
(statearr_24802[(8)] = inst_24738);

(statearr_24802[(9)] = inst_24735);

(statearr_24802[(11)] = inst_24737);

(statearr_24802[(12)] = inst_24736);

return statearr_24802;
})();
var statearr_24803_24833 = state_24783__$1;
(statearr_24803_24833[(2)] = null);

(statearr_24803_24833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (3))){
var inst_24781 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24783__$1,inst_24781);
} else {
if((state_val_24784 === (12))){
var inst_24769 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24804_24834 = state_24783__$1;
(statearr_24804_24834[(2)] = inst_24769);

(statearr_24804_24834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (2))){
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24783__$1,(4),in$);
} else {
if((state_val_24784 === (23))){
var inst_24777 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24805_24835 = state_24783__$1;
(statearr_24805_24835[(2)] = inst_24777);

(statearr_24805_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (19))){
var inst_24764 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24806_24836 = state_24783__$1;
(statearr_24806_24836[(2)] = inst_24764);

(statearr_24806_24836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (11))){
var inst_24735 = (state_24783[(9)]);
var inst_24749 = (state_24783[(7)]);
var inst_24749__$1 = cljs.core.seq.call(null,inst_24735);
var state_24783__$1 = (function (){var statearr_24807 = state_24783;
(statearr_24807[(7)] = inst_24749__$1);

return statearr_24807;
})();
if(inst_24749__$1){
var statearr_24808_24837 = state_24783__$1;
(statearr_24808_24837[(1)] = (14));

} else {
var statearr_24809_24838 = state_24783__$1;
(statearr_24809_24838[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (9))){
var inst_24771 = (state_24783[(2)]);
var inst_24772 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24783__$1 = (function (){var statearr_24810 = state_24783;
(statearr_24810[(15)] = inst_24771);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24772)){
var statearr_24811_24839 = state_24783__$1;
(statearr_24811_24839[(1)] = (21));

} else {
var statearr_24812_24840 = state_24783__$1;
(statearr_24812_24840[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (5))){
var inst_24727 = cljs.core.async.close_BANG_.call(null,out);
var state_24783__$1 = state_24783;
var statearr_24813_24841 = state_24783__$1;
(statearr_24813_24841[(2)] = inst_24727);

(statearr_24813_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (14))){
var inst_24749 = (state_24783[(7)]);
var inst_24751 = cljs.core.chunked_seq_QMARK_.call(null,inst_24749);
var state_24783__$1 = state_24783;
if(inst_24751){
var statearr_24814_24842 = state_24783__$1;
(statearr_24814_24842[(1)] = (17));

} else {
var statearr_24815_24843 = state_24783__$1;
(statearr_24815_24843[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (16))){
var inst_24767 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24816_24844 = state_24783__$1;
(statearr_24816_24844[(2)] = inst_24767);

(statearr_24816_24844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (10))){
var inst_24738 = (state_24783[(8)]);
var inst_24736 = (state_24783[(12)]);
var inst_24743 = cljs.core._nth.call(null,inst_24736,inst_24738);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(13),out,inst_24743);
} else {
if((state_val_24784 === (18))){
var inst_24749 = (state_24783[(7)]);
var inst_24758 = cljs.core.first.call(null,inst_24749);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(20),out,inst_24758);
} else {
if((state_val_24784 === (8))){
var inst_24738 = (state_24783[(8)]);
var inst_24737 = (state_24783[(11)]);
var inst_24740 = (inst_24738 < inst_24737);
var inst_24741 = inst_24740;
var state_24783__$1 = state_24783;
if(cljs.core.truth_(inst_24741)){
var statearr_24817_24845 = state_24783__$1;
(statearr_24817_24845[(1)] = (10));

} else {
var statearr_24818_24846 = state_24783__$1;
(statearr_24818_24846[(1)] = (11));

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
}
}
}
}
}
}
});})(c__23167__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____0 = (function (){
var statearr_24819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24819[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__);

(statearr_24819[(1)] = (1));

return statearr_24819;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____1 = (function (state_24783){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24820){if((e24820 instanceof Object)){
var ex__23081__auto__ = e24820;
var statearr_24821_24847 = state_24783;
(statearr_24821_24847[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24848 = state_24783;
state_24783 = G__24848;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__ = function(state_24783){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____1.call(this,state_24783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23078__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__))
})();
var state__23169__auto__ = (function (){var statearr_24822 = f__23168__auto__.call(null);
(statearr_24822[(6)] = c__23167__auto__);

return statearr_24822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__))
);

return c__23167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24850 = arguments.length;
switch (G__24850) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24853 = arguments.length;
switch (G__24853) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24856 = arguments.length;
switch (G__24856) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___24903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24903,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24903,out){
return (function (state_24880){
var state_val_24881 = (state_24880[(1)]);
if((state_val_24881 === (7))){
var inst_24875 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24882_24904 = state_24880__$1;
(statearr_24882_24904[(2)] = inst_24875);

(statearr_24882_24904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (1))){
var inst_24857 = null;
var state_24880__$1 = (function (){var statearr_24883 = state_24880;
(statearr_24883[(7)] = inst_24857);

return statearr_24883;
})();
var statearr_24884_24905 = state_24880__$1;
(statearr_24884_24905[(2)] = null);

(statearr_24884_24905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (4))){
var inst_24860 = (state_24880[(8)]);
var inst_24860__$1 = (state_24880[(2)]);
var inst_24861 = (inst_24860__$1 == null);
var inst_24862 = cljs.core.not.call(null,inst_24861);
var state_24880__$1 = (function (){var statearr_24885 = state_24880;
(statearr_24885[(8)] = inst_24860__$1);

return statearr_24885;
})();
if(inst_24862){
var statearr_24886_24906 = state_24880__$1;
(statearr_24886_24906[(1)] = (5));

} else {
var statearr_24887_24907 = state_24880__$1;
(statearr_24887_24907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (6))){
var state_24880__$1 = state_24880;
var statearr_24888_24908 = state_24880__$1;
(statearr_24888_24908[(2)] = null);

(statearr_24888_24908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (3))){
var inst_24877 = (state_24880[(2)]);
var inst_24878 = cljs.core.async.close_BANG_.call(null,out);
var state_24880__$1 = (function (){var statearr_24889 = state_24880;
(statearr_24889[(9)] = inst_24877);

return statearr_24889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24880__$1,inst_24878);
} else {
if((state_val_24881 === (2))){
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24880__$1,(4),ch);
} else {
if((state_val_24881 === (11))){
var inst_24860 = (state_24880[(8)]);
var inst_24869 = (state_24880[(2)]);
var inst_24857 = inst_24860;
var state_24880__$1 = (function (){var statearr_24890 = state_24880;
(statearr_24890[(10)] = inst_24869);

(statearr_24890[(7)] = inst_24857);

return statearr_24890;
})();
var statearr_24891_24909 = state_24880__$1;
(statearr_24891_24909[(2)] = null);

(statearr_24891_24909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (9))){
var inst_24860 = (state_24880[(8)]);
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24880__$1,(11),out,inst_24860);
} else {
if((state_val_24881 === (5))){
var inst_24860 = (state_24880[(8)]);
var inst_24857 = (state_24880[(7)]);
var inst_24864 = cljs.core._EQ_.call(null,inst_24860,inst_24857);
var state_24880__$1 = state_24880;
if(inst_24864){
var statearr_24893_24910 = state_24880__$1;
(statearr_24893_24910[(1)] = (8));

} else {
var statearr_24894_24911 = state_24880__$1;
(statearr_24894_24911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (10))){
var inst_24872 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24895_24912 = state_24880__$1;
(statearr_24895_24912[(2)] = inst_24872);

(statearr_24895_24912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (8))){
var inst_24857 = (state_24880[(7)]);
var tmp24892 = inst_24857;
var inst_24857__$1 = tmp24892;
var state_24880__$1 = (function (){var statearr_24896 = state_24880;
(statearr_24896[(7)] = inst_24857__$1);

return statearr_24896;
})();
var statearr_24897_24913 = state_24880__$1;
(statearr_24897_24913[(2)] = null);

(statearr_24897_24913[(1)] = (2));


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
});})(c__23167__auto___24903,out))
;
return ((function (switch__23077__auto__,c__23167__auto___24903,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24898[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24898[(1)] = (1));

return statearr_24898;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24880){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24899){if((e24899 instanceof Object)){
var ex__23081__auto__ = e24899;
var statearr_24900_24914 = state_24880;
(statearr_24900_24914[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24915 = state_24880;
state_24880 = G__24915;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24903,out))
})();
var state__23169__auto__ = (function (){var statearr_24901 = f__23168__auto__.call(null);
(statearr_24901[(6)] = c__23167__auto___24903);

return statearr_24901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24903,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24917 = arguments.length;
switch (G__24917) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___24983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___24983,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___24983,out){
return (function (state_24955){
var state_val_24956 = (state_24955[(1)]);
if((state_val_24956 === (7))){
var inst_24951 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
var statearr_24957_24984 = state_24955__$1;
(statearr_24957_24984[(2)] = inst_24951);

(statearr_24957_24984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (1))){
var inst_24918 = (new Array(n));
var inst_24919 = inst_24918;
var inst_24920 = (0);
var state_24955__$1 = (function (){var statearr_24958 = state_24955;
(statearr_24958[(7)] = inst_24919);

(statearr_24958[(8)] = inst_24920);

return statearr_24958;
})();
var statearr_24959_24985 = state_24955__$1;
(statearr_24959_24985[(2)] = null);

(statearr_24959_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (4))){
var inst_24923 = (state_24955[(9)]);
var inst_24923__$1 = (state_24955[(2)]);
var inst_24924 = (inst_24923__$1 == null);
var inst_24925 = cljs.core.not.call(null,inst_24924);
var state_24955__$1 = (function (){var statearr_24960 = state_24955;
(statearr_24960[(9)] = inst_24923__$1);

return statearr_24960;
})();
if(inst_24925){
var statearr_24961_24986 = state_24955__$1;
(statearr_24961_24986[(1)] = (5));

} else {
var statearr_24962_24987 = state_24955__$1;
(statearr_24962_24987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (15))){
var inst_24945 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
var statearr_24963_24988 = state_24955__$1;
(statearr_24963_24988[(2)] = inst_24945);

(statearr_24963_24988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (13))){
var state_24955__$1 = state_24955;
var statearr_24964_24989 = state_24955__$1;
(statearr_24964_24989[(2)] = null);

(statearr_24964_24989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (6))){
var inst_24920 = (state_24955[(8)]);
var inst_24941 = (inst_24920 > (0));
var state_24955__$1 = state_24955;
if(cljs.core.truth_(inst_24941)){
var statearr_24965_24990 = state_24955__$1;
(statearr_24965_24990[(1)] = (12));

} else {
var statearr_24966_24991 = state_24955__$1;
(statearr_24966_24991[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (3))){
var inst_24953 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24955__$1,inst_24953);
} else {
if((state_val_24956 === (12))){
var inst_24919 = (state_24955[(7)]);
var inst_24943 = cljs.core.vec.call(null,inst_24919);
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24955__$1,(15),out,inst_24943);
} else {
if((state_val_24956 === (2))){
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24955__$1,(4),ch);
} else {
if((state_val_24956 === (11))){
var inst_24935 = (state_24955[(2)]);
var inst_24936 = (new Array(n));
var inst_24919 = inst_24936;
var inst_24920 = (0);
var state_24955__$1 = (function (){var statearr_24967 = state_24955;
(statearr_24967[(10)] = inst_24935);

(statearr_24967[(7)] = inst_24919);

(statearr_24967[(8)] = inst_24920);

return statearr_24967;
})();
var statearr_24968_24992 = state_24955__$1;
(statearr_24968_24992[(2)] = null);

(statearr_24968_24992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (9))){
var inst_24919 = (state_24955[(7)]);
var inst_24933 = cljs.core.vec.call(null,inst_24919);
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24955__$1,(11),out,inst_24933);
} else {
if((state_val_24956 === (5))){
var inst_24923 = (state_24955[(9)]);
var inst_24928 = (state_24955[(11)]);
var inst_24919 = (state_24955[(7)]);
var inst_24920 = (state_24955[(8)]);
var inst_24927 = (inst_24919[inst_24920] = inst_24923);
var inst_24928__$1 = (inst_24920 + (1));
var inst_24929 = (inst_24928__$1 < n);
var state_24955__$1 = (function (){var statearr_24969 = state_24955;
(statearr_24969[(11)] = inst_24928__$1);

(statearr_24969[(12)] = inst_24927);

return statearr_24969;
})();
if(cljs.core.truth_(inst_24929)){
var statearr_24970_24993 = state_24955__$1;
(statearr_24970_24993[(1)] = (8));

} else {
var statearr_24971_24994 = state_24955__$1;
(statearr_24971_24994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (14))){
var inst_24948 = (state_24955[(2)]);
var inst_24949 = cljs.core.async.close_BANG_.call(null,out);
var state_24955__$1 = (function (){var statearr_24973 = state_24955;
(statearr_24973[(13)] = inst_24948);

return statearr_24973;
})();
var statearr_24974_24995 = state_24955__$1;
(statearr_24974_24995[(2)] = inst_24949);

(statearr_24974_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (10))){
var inst_24939 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
var statearr_24975_24996 = state_24955__$1;
(statearr_24975_24996[(2)] = inst_24939);

(statearr_24975_24996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24956 === (8))){
var inst_24928 = (state_24955[(11)]);
var inst_24919 = (state_24955[(7)]);
var tmp24972 = inst_24919;
var inst_24919__$1 = tmp24972;
var inst_24920 = inst_24928;
var state_24955__$1 = (function (){var statearr_24976 = state_24955;
(statearr_24976[(7)] = inst_24919__$1);

(statearr_24976[(8)] = inst_24920);

return statearr_24976;
})();
var statearr_24977_24997 = state_24955__$1;
(statearr_24977_24997[(2)] = null);

(statearr_24977_24997[(1)] = (2));


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
});})(c__23167__auto___24983,out))
;
return ((function (switch__23077__auto__,c__23167__auto___24983,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_24978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24978[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_24978[(1)] = (1));

return statearr_24978;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_24955){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_24955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e24979){if((e24979 instanceof Object)){
var ex__23081__auto__ = e24979;
var statearr_24980_24998 = state_24955;
(statearr_24980_24998[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24999 = state_24955;
state_24955 = G__24999;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_24955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_24955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___24983,out))
})();
var state__23169__auto__ = (function (){var statearr_24981 = f__23168__auto__.call(null);
(statearr_24981[(6)] = c__23167__auto___24983);

return statearr_24981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___24983,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25001 = arguments.length;
switch (G__25001) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23167__auto___25071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___25071,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___25071,out){
return (function (state_25043){
var state_val_25044 = (state_25043[(1)]);
if((state_val_25044 === (7))){
var inst_25039 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25045_25072 = state_25043__$1;
(statearr_25045_25072[(2)] = inst_25039);

(statearr_25045_25072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (1))){
var inst_25002 = [];
var inst_25003 = inst_25002;
var inst_25004 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25043__$1 = (function (){var statearr_25046 = state_25043;
(statearr_25046[(7)] = inst_25004);

(statearr_25046[(8)] = inst_25003);

return statearr_25046;
})();
var statearr_25047_25073 = state_25043__$1;
(statearr_25047_25073[(2)] = null);

(statearr_25047_25073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (4))){
var inst_25007 = (state_25043[(9)]);
var inst_25007__$1 = (state_25043[(2)]);
var inst_25008 = (inst_25007__$1 == null);
var inst_25009 = cljs.core.not.call(null,inst_25008);
var state_25043__$1 = (function (){var statearr_25048 = state_25043;
(statearr_25048[(9)] = inst_25007__$1);

return statearr_25048;
})();
if(inst_25009){
var statearr_25049_25074 = state_25043__$1;
(statearr_25049_25074[(1)] = (5));

} else {
var statearr_25050_25075 = state_25043__$1;
(statearr_25050_25075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (15))){
var inst_25033 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25051_25076 = state_25043__$1;
(statearr_25051_25076[(2)] = inst_25033);

(statearr_25051_25076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (13))){
var state_25043__$1 = state_25043;
var statearr_25052_25077 = state_25043__$1;
(statearr_25052_25077[(2)] = null);

(statearr_25052_25077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (6))){
var inst_25003 = (state_25043[(8)]);
var inst_25028 = inst_25003.length;
var inst_25029 = (inst_25028 > (0));
var state_25043__$1 = state_25043;
if(cljs.core.truth_(inst_25029)){
var statearr_25053_25078 = state_25043__$1;
(statearr_25053_25078[(1)] = (12));

} else {
var statearr_25054_25079 = state_25043__$1;
(statearr_25054_25079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (3))){
var inst_25041 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25043__$1,inst_25041);
} else {
if((state_val_25044 === (12))){
var inst_25003 = (state_25043[(8)]);
var inst_25031 = cljs.core.vec.call(null,inst_25003);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25043__$1,(15),out,inst_25031);
} else {
if((state_val_25044 === (2))){
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25043__$1,(4),ch);
} else {
if((state_val_25044 === (11))){
var inst_25011 = (state_25043[(10)]);
var inst_25007 = (state_25043[(9)]);
var inst_25021 = (state_25043[(2)]);
var inst_25022 = [];
var inst_25023 = inst_25022.push(inst_25007);
var inst_25003 = inst_25022;
var inst_25004 = inst_25011;
var state_25043__$1 = (function (){var statearr_25055 = state_25043;
(statearr_25055[(11)] = inst_25023);

(statearr_25055[(7)] = inst_25004);

(statearr_25055[(8)] = inst_25003);

(statearr_25055[(12)] = inst_25021);

return statearr_25055;
})();
var statearr_25056_25080 = state_25043__$1;
(statearr_25056_25080[(2)] = null);

(statearr_25056_25080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (9))){
var inst_25003 = (state_25043[(8)]);
var inst_25019 = cljs.core.vec.call(null,inst_25003);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25043__$1,(11),out,inst_25019);
} else {
if((state_val_25044 === (5))){
var inst_25004 = (state_25043[(7)]);
var inst_25011 = (state_25043[(10)]);
var inst_25007 = (state_25043[(9)]);
var inst_25011__$1 = f.call(null,inst_25007);
var inst_25012 = cljs.core._EQ_.call(null,inst_25011__$1,inst_25004);
var inst_25013 = cljs.core.keyword_identical_QMARK_.call(null,inst_25004,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25014 = ((inst_25012) || (inst_25013));
var state_25043__$1 = (function (){var statearr_25057 = state_25043;
(statearr_25057[(10)] = inst_25011__$1);

return statearr_25057;
})();
if(cljs.core.truth_(inst_25014)){
var statearr_25058_25081 = state_25043__$1;
(statearr_25058_25081[(1)] = (8));

} else {
var statearr_25059_25082 = state_25043__$1;
(statearr_25059_25082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (14))){
var inst_25036 = (state_25043[(2)]);
var inst_25037 = cljs.core.async.close_BANG_.call(null,out);
var state_25043__$1 = (function (){var statearr_25061 = state_25043;
(statearr_25061[(13)] = inst_25036);

return statearr_25061;
})();
var statearr_25062_25083 = state_25043__$1;
(statearr_25062_25083[(2)] = inst_25037);

(statearr_25062_25083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (10))){
var inst_25026 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25063_25084 = state_25043__$1;
(statearr_25063_25084[(2)] = inst_25026);

(statearr_25063_25084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (8))){
var inst_25003 = (state_25043[(8)]);
var inst_25011 = (state_25043[(10)]);
var inst_25007 = (state_25043[(9)]);
var inst_25016 = inst_25003.push(inst_25007);
var tmp25060 = inst_25003;
var inst_25003__$1 = tmp25060;
var inst_25004 = inst_25011;
var state_25043__$1 = (function (){var statearr_25064 = state_25043;
(statearr_25064[(14)] = inst_25016);

(statearr_25064[(7)] = inst_25004);

(statearr_25064[(8)] = inst_25003__$1);

return statearr_25064;
})();
var statearr_25065_25085 = state_25043__$1;
(statearr_25065_25085[(2)] = null);

(statearr_25065_25085[(1)] = (2));


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
});})(c__23167__auto___25071,out))
;
return ((function (switch__23077__auto__,c__23167__auto___25071,out){
return (function() {
var cljs$core$async$state_machine__23078__auto__ = null;
var cljs$core$async$state_machine__23078__auto____0 = (function (){
var statearr_25066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25066[(0)] = cljs$core$async$state_machine__23078__auto__);

(statearr_25066[(1)] = (1));

return statearr_25066;
});
var cljs$core$async$state_machine__23078__auto____1 = (function (state_25043){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_25043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e25067){if((e25067 instanceof Object)){
var ex__23081__auto__ = e25067;
var statearr_25068_25086 = state_25043;
(statearr_25068_25086[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25087 = state_25043;
state_25043 = G__25087;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
cljs$core$async$state_machine__23078__auto__ = function(state_25043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23078__auto____1.call(this,state_25043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23078__auto____0;
cljs$core$async$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23078__auto____1;
return cljs$core$async$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___25071,out))
})();
var state__23169__auto__ = (function (){var statearr_25069 = f__23168__auto__.call(null);
(statearr_25069[(6)] = c__23167__auto___25071);

return statearr_25069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___25071,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1539278410517
