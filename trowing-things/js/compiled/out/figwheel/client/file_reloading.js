// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26784_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26784_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26785 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26786 = null;
var count__26787 = (0);
var i__26788 = (0);
while(true){
if((i__26788 < count__26787)){
var n = cljs.core._nth.call(null,chunk__26786,i__26788);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26789 = seq__26785;
var G__26790 = chunk__26786;
var G__26791 = count__26787;
var G__26792 = (i__26788 + (1));
seq__26785 = G__26789;
chunk__26786 = G__26790;
count__26787 = G__26791;
i__26788 = G__26792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26785);
if(temp__5457__auto__){
var seq__26785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26785__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26785__$1);
var G__26793 = cljs.core.chunk_rest.call(null,seq__26785__$1);
var G__26794 = c__4319__auto__;
var G__26795 = cljs.core.count.call(null,c__4319__auto__);
var G__26796 = (0);
seq__26785 = G__26793;
chunk__26786 = G__26794;
count__26787 = G__26795;
i__26788 = G__26796;
continue;
} else {
var n = cljs.core.first.call(null,seq__26785__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26797 = cljs.core.next.call(null,seq__26785__$1);
var G__26798 = null;
var G__26799 = (0);
var G__26800 = (0);
seq__26785 = G__26797;
chunk__26786 = G__26798;
count__26787 = G__26799;
i__26788 = G__26800;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26801){
var vec__26802 = p__26801;
var _ = cljs.core.nth.call(null,vec__26802,(0),null);
var v = cljs.core.nth.call(null,vec__26802,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__26805){
var vec__26806 = p__26805;
var k = cljs.core.nth.call(null,vec__26806,(0),null);
var v = cljs.core.nth.call(null,vec__26806,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26818_26826 = cljs.core.seq.call(null,deps);
var chunk__26819_26827 = null;
var count__26820_26828 = (0);
var i__26821_26829 = (0);
while(true){
if((i__26821_26829 < count__26820_26828)){
var dep_26830 = cljs.core._nth.call(null,chunk__26819_26827,i__26821_26829);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26830;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26830));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26830,(depth + (1)),state);
} else {
}


var G__26831 = seq__26818_26826;
var G__26832 = chunk__26819_26827;
var G__26833 = count__26820_26828;
var G__26834 = (i__26821_26829 + (1));
seq__26818_26826 = G__26831;
chunk__26819_26827 = G__26832;
count__26820_26828 = G__26833;
i__26821_26829 = G__26834;
continue;
} else {
var temp__5457__auto___26835 = cljs.core.seq.call(null,seq__26818_26826);
if(temp__5457__auto___26835){
var seq__26818_26836__$1 = temp__5457__auto___26835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26818_26836__$1)){
var c__4319__auto___26837 = cljs.core.chunk_first.call(null,seq__26818_26836__$1);
var G__26838 = cljs.core.chunk_rest.call(null,seq__26818_26836__$1);
var G__26839 = c__4319__auto___26837;
var G__26840 = cljs.core.count.call(null,c__4319__auto___26837);
var G__26841 = (0);
seq__26818_26826 = G__26838;
chunk__26819_26827 = G__26839;
count__26820_26828 = G__26840;
i__26821_26829 = G__26841;
continue;
} else {
var dep_26842 = cljs.core.first.call(null,seq__26818_26836__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26842;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26842));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26842,(depth + (1)),state);
} else {
}


var G__26843 = cljs.core.next.call(null,seq__26818_26836__$1);
var G__26844 = null;
var G__26845 = (0);
var G__26846 = (0);
seq__26818_26826 = G__26843;
chunk__26819_26827 = G__26844;
count__26820_26828 = G__26845;
i__26821_26829 = G__26846;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26822){
var vec__26823 = p__26822;
var seq__26824 = cljs.core.seq.call(null,vec__26823);
var first__26825 = cljs.core.first.call(null,seq__26824);
var seq__26824__$1 = cljs.core.next.call(null,seq__26824);
var x = first__26825;
var xs = seq__26824__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26823,seq__26824,first__26825,seq__26824__$1,x,xs,get_deps__$1){
return (function (p1__26809_SHARP_){
return clojure.set.difference.call(null,p1__26809_SHARP_,x);
});})(vec__26823,seq__26824,first__26825,seq__26824__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26847 = cljs.core.seq.call(null,provides);
var chunk__26848 = null;
var count__26849 = (0);
var i__26850 = (0);
while(true){
if((i__26850 < count__26849)){
var prov = cljs.core._nth.call(null,chunk__26848,i__26850);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26851_26859 = cljs.core.seq.call(null,requires);
var chunk__26852_26860 = null;
var count__26853_26861 = (0);
var i__26854_26862 = (0);
while(true){
if((i__26854_26862 < count__26853_26861)){
var req_26863 = cljs.core._nth.call(null,chunk__26852_26860,i__26854_26862);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26863,prov);


var G__26864 = seq__26851_26859;
var G__26865 = chunk__26852_26860;
var G__26866 = count__26853_26861;
var G__26867 = (i__26854_26862 + (1));
seq__26851_26859 = G__26864;
chunk__26852_26860 = G__26865;
count__26853_26861 = G__26866;
i__26854_26862 = G__26867;
continue;
} else {
var temp__5457__auto___26868 = cljs.core.seq.call(null,seq__26851_26859);
if(temp__5457__auto___26868){
var seq__26851_26869__$1 = temp__5457__auto___26868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26851_26869__$1)){
var c__4319__auto___26870 = cljs.core.chunk_first.call(null,seq__26851_26869__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26851_26869__$1);
var G__26872 = c__4319__auto___26870;
var G__26873 = cljs.core.count.call(null,c__4319__auto___26870);
var G__26874 = (0);
seq__26851_26859 = G__26871;
chunk__26852_26860 = G__26872;
count__26853_26861 = G__26873;
i__26854_26862 = G__26874;
continue;
} else {
var req_26875 = cljs.core.first.call(null,seq__26851_26869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26875,prov);


var G__26876 = cljs.core.next.call(null,seq__26851_26869__$1);
var G__26877 = null;
var G__26878 = (0);
var G__26879 = (0);
seq__26851_26859 = G__26876;
chunk__26852_26860 = G__26877;
count__26853_26861 = G__26878;
i__26854_26862 = G__26879;
continue;
}
} else {
}
}
break;
}


var G__26880 = seq__26847;
var G__26881 = chunk__26848;
var G__26882 = count__26849;
var G__26883 = (i__26850 + (1));
seq__26847 = G__26880;
chunk__26848 = G__26881;
count__26849 = G__26882;
i__26850 = G__26883;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26847);
if(temp__5457__auto__){
var seq__26847__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26847__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26847__$1);
var G__26884 = cljs.core.chunk_rest.call(null,seq__26847__$1);
var G__26885 = c__4319__auto__;
var G__26886 = cljs.core.count.call(null,c__4319__auto__);
var G__26887 = (0);
seq__26847 = G__26884;
chunk__26848 = G__26885;
count__26849 = G__26886;
i__26850 = G__26887;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26847__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26855_26888 = cljs.core.seq.call(null,requires);
var chunk__26856_26889 = null;
var count__26857_26890 = (0);
var i__26858_26891 = (0);
while(true){
if((i__26858_26891 < count__26857_26890)){
var req_26892 = cljs.core._nth.call(null,chunk__26856_26889,i__26858_26891);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26892,prov);


var G__26893 = seq__26855_26888;
var G__26894 = chunk__26856_26889;
var G__26895 = count__26857_26890;
var G__26896 = (i__26858_26891 + (1));
seq__26855_26888 = G__26893;
chunk__26856_26889 = G__26894;
count__26857_26890 = G__26895;
i__26858_26891 = G__26896;
continue;
} else {
var temp__5457__auto___26897__$1 = cljs.core.seq.call(null,seq__26855_26888);
if(temp__5457__auto___26897__$1){
var seq__26855_26898__$1 = temp__5457__auto___26897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26855_26898__$1)){
var c__4319__auto___26899 = cljs.core.chunk_first.call(null,seq__26855_26898__$1);
var G__26900 = cljs.core.chunk_rest.call(null,seq__26855_26898__$1);
var G__26901 = c__4319__auto___26899;
var G__26902 = cljs.core.count.call(null,c__4319__auto___26899);
var G__26903 = (0);
seq__26855_26888 = G__26900;
chunk__26856_26889 = G__26901;
count__26857_26890 = G__26902;
i__26858_26891 = G__26903;
continue;
} else {
var req_26904 = cljs.core.first.call(null,seq__26855_26898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26904,prov);


var G__26905 = cljs.core.next.call(null,seq__26855_26898__$1);
var G__26906 = null;
var G__26907 = (0);
var G__26908 = (0);
seq__26855_26888 = G__26905;
chunk__26856_26889 = G__26906;
count__26857_26890 = G__26907;
i__26858_26891 = G__26908;
continue;
}
} else {
}
}
break;
}


var G__26909 = cljs.core.next.call(null,seq__26847__$1);
var G__26910 = null;
var G__26911 = (0);
var G__26912 = (0);
seq__26847 = G__26909;
chunk__26848 = G__26910;
count__26849 = G__26911;
i__26850 = G__26912;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26913_26917 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26914_26918 = null;
var count__26915_26919 = (0);
var i__26916_26920 = (0);
while(true){
if((i__26916_26920 < count__26915_26919)){
var ns_26921 = cljs.core._nth.call(null,chunk__26914_26918,i__26916_26920);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26921);


var G__26922 = seq__26913_26917;
var G__26923 = chunk__26914_26918;
var G__26924 = count__26915_26919;
var G__26925 = (i__26916_26920 + (1));
seq__26913_26917 = G__26922;
chunk__26914_26918 = G__26923;
count__26915_26919 = G__26924;
i__26916_26920 = G__26925;
continue;
} else {
var temp__5457__auto___26926 = cljs.core.seq.call(null,seq__26913_26917);
if(temp__5457__auto___26926){
var seq__26913_26927__$1 = temp__5457__auto___26926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26913_26927__$1)){
var c__4319__auto___26928 = cljs.core.chunk_first.call(null,seq__26913_26927__$1);
var G__26929 = cljs.core.chunk_rest.call(null,seq__26913_26927__$1);
var G__26930 = c__4319__auto___26928;
var G__26931 = cljs.core.count.call(null,c__4319__auto___26928);
var G__26932 = (0);
seq__26913_26917 = G__26929;
chunk__26914_26918 = G__26930;
count__26915_26919 = G__26931;
i__26916_26920 = G__26932;
continue;
} else {
var ns_26933 = cljs.core.first.call(null,seq__26913_26927__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26933);


var G__26934 = cljs.core.next.call(null,seq__26913_26927__$1);
var G__26935 = null;
var G__26936 = (0);
var G__26937 = (0);
seq__26913_26917 = G__26934;
chunk__26914_26918 = G__26935;
count__26915_26919 = G__26936;
i__26916_26920 = G__26937;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26938__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26939__i = 0, G__26939__a = new Array(arguments.length -  0);
while (G__26939__i < G__26939__a.length) {G__26939__a[G__26939__i] = arguments[G__26939__i + 0]; ++G__26939__i;}
  args = new cljs.core.IndexedSeq(G__26939__a,0,null);
} 
return G__26938__delegate.call(this,args);};
G__26938.cljs$lang$maxFixedArity = 0;
G__26938.cljs$lang$applyTo = (function (arglist__26940){
var args = cljs.core.seq(arglist__26940);
return G__26938__delegate(args);
});
G__26938.cljs$core$IFn$_invoke$arity$variadic = G__26938__delegate;
return G__26938;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__26941_SHARP_,p2__26942_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26941_SHARP_)].join('')),p2__26942_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__26943_SHARP_,p2__26944_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26943_SHARP_)].join(''),p2__26944_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26945 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26945.addCallback(((function (G__26945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26945))
);

G__26945.addErrback(((function (G__26945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26945))
);

return G__26945;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26946){if((e26946 instanceof Error)){
var e = e26946;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26946;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26947){if((e26947 instanceof Error)){
var e = e26947;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26947;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26948 = cljs.core._EQ_;
var expr__26949 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26948.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26949))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26948.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26949))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26948.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26949))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26948,expr__26949){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26948,expr__26949))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26951,callback){
var map__26952 = p__26951;
var map__26952__$1 = ((((!((map__26952 == null)))?(((((map__26952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26952):map__26952);
var file_msg = map__26952__$1;
var request_url = cljs.core.get.call(null,map__26952__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26952,map__26952__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26952,map__26952__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__){
return (function (state_26990){
var state_val_26991 = (state_26990[(1)]);
if((state_val_26991 === (7))){
var inst_26986 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26992_27018 = state_26990__$1;
(statearr_26992_27018[(2)] = inst_26986);

(statearr_26992_27018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (1))){
var state_26990__$1 = state_26990;
var statearr_26993_27019 = state_26990__$1;
(statearr_26993_27019[(2)] = null);

(statearr_26993_27019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (4))){
var inst_26956 = (state_26990[(7)]);
var inst_26956__$1 = (state_26990[(2)]);
var state_26990__$1 = (function (){var statearr_26994 = state_26990;
(statearr_26994[(7)] = inst_26956__$1);

return statearr_26994;
})();
if(cljs.core.truth_(inst_26956__$1)){
var statearr_26995_27020 = state_26990__$1;
(statearr_26995_27020[(1)] = (5));

} else {
var statearr_26996_27021 = state_26990__$1;
(statearr_26996_27021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (15))){
var inst_26971 = (state_26990[(8)]);
var inst_26969 = (state_26990[(9)]);
var inst_26973 = inst_26971.call(null,inst_26969);
var state_26990__$1 = state_26990;
var statearr_26997_27022 = state_26990__$1;
(statearr_26997_27022[(2)] = inst_26973);

(statearr_26997_27022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (13))){
var inst_26980 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26998_27023 = state_26990__$1;
(statearr_26998_27023[(2)] = inst_26980);

(statearr_26998_27023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (6))){
var state_26990__$1 = state_26990;
var statearr_26999_27024 = state_26990__$1;
(statearr_26999_27024[(2)] = null);

(statearr_26999_27024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (17))){
var inst_26977 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_27000_27025 = state_26990__$1;
(statearr_27000_27025[(2)] = inst_26977);

(statearr_27000_27025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (3))){
var inst_26988 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26990__$1,inst_26988);
} else {
if((state_val_26991 === (12))){
var state_26990__$1 = state_26990;
var statearr_27001_27026 = state_26990__$1;
(statearr_27001_27026[(2)] = null);

(statearr_27001_27026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (2))){
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26991 === (11))){
var inst_26961 = (state_26990[(10)]);
var inst_26967 = figwheel.client.file_reloading.blocking_load.call(null,inst_26961);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(14),inst_26967);
} else {
if((state_val_26991 === (9))){
var inst_26961 = (state_26990[(10)]);
var state_26990__$1 = state_26990;
if(cljs.core.truth_(inst_26961)){
var statearr_27002_27027 = state_26990__$1;
(statearr_27002_27027[(1)] = (11));

} else {
var statearr_27003_27028 = state_26990__$1;
(statearr_27003_27028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (5))){
var inst_26962 = (state_26990[(11)]);
var inst_26956 = (state_26990[(7)]);
var inst_26961 = cljs.core.nth.call(null,inst_26956,(0),null);
var inst_26962__$1 = cljs.core.nth.call(null,inst_26956,(1),null);
var state_26990__$1 = (function (){var statearr_27004 = state_26990;
(statearr_27004[(11)] = inst_26962__$1);

(statearr_27004[(10)] = inst_26961);

return statearr_27004;
})();
if(cljs.core.truth_(inst_26962__$1)){
var statearr_27005_27029 = state_26990__$1;
(statearr_27005_27029[(1)] = (8));

} else {
var statearr_27006_27030 = state_26990__$1;
(statearr_27006_27030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (14))){
var inst_26971 = (state_26990[(8)]);
var inst_26961 = (state_26990[(10)]);
var inst_26969 = (state_26990[(2)]);
var inst_26970 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26971__$1 = cljs.core.get.call(null,inst_26970,inst_26961);
var state_26990__$1 = (function (){var statearr_27007 = state_26990;
(statearr_27007[(8)] = inst_26971__$1);

(statearr_27007[(9)] = inst_26969);

return statearr_27007;
})();
if(cljs.core.truth_(inst_26971__$1)){
var statearr_27008_27031 = state_26990__$1;
(statearr_27008_27031[(1)] = (15));

} else {
var statearr_27009_27032 = state_26990__$1;
(statearr_27009_27032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (16))){
var inst_26969 = (state_26990[(9)]);
var inst_26975 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26969);
var state_26990__$1 = state_26990;
var statearr_27010_27033 = state_26990__$1;
(statearr_27010_27033[(2)] = inst_26975);

(statearr_27010_27033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (10))){
var inst_26982 = (state_26990[(2)]);
var state_26990__$1 = (function (){var statearr_27011 = state_26990;
(statearr_27011[(12)] = inst_26982);

return statearr_27011;
})();
var statearr_27012_27034 = state_26990__$1;
(statearr_27012_27034[(2)] = null);

(statearr_27012_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (8))){
var inst_26962 = (state_26990[(11)]);
var inst_26964 = eval(inst_26962);
var state_26990__$1 = state_26990;
var statearr_27013_27035 = state_26990__$1;
(statearr_27013_27035[(2)] = inst_26964);

(statearr_27013_27035[(1)] = (10));


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
});})(c__23167__auto__))
;
return ((function (switch__23077__auto__,c__23167__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23078__auto__ = null;
var figwheel$client$file_reloading$state_machine__23078__auto____0 = (function (){
var statearr_27014 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27014[(0)] = figwheel$client$file_reloading$state_machine__23078__auto__);

(statearr_27014[(1)] = (1));

return statearr_27014;
});
var figwheel$client$file_reloading$state_machine__23078__auto____1 = (function (state_26990){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_26990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e27015){if((e27015 instanceof Object)){
var ex__23081__auto__ = e27015;
var statearr_27016_27036 = state_26990;
(statearr_27016_27036[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27037 = state_26990;
state_26990 = G__27037;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23078__auto__ = function(state_26990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23078__auto____1.call(this,state_26990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23078__auto____0;
figwheel$client$file_reloading$state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23078__auto____1;
return figwheel$client$file_reloading$state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__))
})();
var state__23169__auto__ = (function (){var statearr_27017 = f__23168__auto__.call(null);
(statearr_27017[(6)] = c__23167__auto__);

return statearr_27017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__))
);

return c__23167__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27039 = arguments.length;
switch (G__27039) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27041,callback){
var map__27042 = p__27041;
var map__27042__$1 = ((((!((map__27042 == null)))?(((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27042):map__27042);
var file_msg = map__27042__$1;
var namespace = cljs.core.get.call(null,map__27042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27042,map__27042__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27042,map__27042__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27044){
var map__27045 = p__27044;
var map__27045__$1 = ((((!((map__27045 == null)))?(((((map__27045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27045):map__27045);
var file_msg = map__27045__$1;
var namespace = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27047){
var map__27048 = p__27047;
var map__27048__$1 = ((((!((map__27048 == null)))?(((((map__27048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27048):map__27048);
var file_msg = map__27048__$1;
var namespace = cljs.core.get.call(null,map__27048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27050,callback){
var map__27051 = p__27050;
var map__27051__$1 = ((((!((map__27051 == null)))?(((((map__27051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27051):map__27051);
var file_msg = map__27051__$1;
var request_url = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23167__auto___27101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto___27101,out){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto___27101,out){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (1))){
var inst_27060 = cljs.core.seq.call(null,files);
var inst_27061 = cljs.core.first.call(null,inst_27060);
var inst_27062 = cljs.core.next.call(null,inst_27060);
var inst_27063 = files;
var state_27086__$1 = (function (){var statearr_27088 = state_27086;
(statearr_27088[(7)] = inst_27062);

(statearr_27088[(8)] = inst_27063);

(statearr_27088[(9)] = inst_27061);

return statearr_27088;
})();
var statearr_27089_27102 = state_27086__$1;
(statearr_27089_27102[(2)] = null);

(statearr_27089_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (2))){
var inst_27063 = (state_27086[(8)]);
var inst_27069 = (state_27086[(10)]);
var inst_27068 = cljs.core.seq.call(null,inst_27063);
var inst_27069__$1 = cljs.core.first.call(null,inst_27068);
var inst_27070 = cljs.core.next.call(null,inst_27068);
var inst_27071 = (inst_27069__$1 == null);
var inst_27072 = cljs.core.not.call(null,inst_27071);
var state_27086__$1 = (function (){var statearr_27090 = state_27086;
(statearr_27090[(11)] = inst_27070);

(statearr_27090[(10)] = inst_27069__$1);

return statearr_27090;
})();
if(inst_27072){
var statearr_27091_27103 = state_27086__$1;
(statearr_27091_27103[(1)] = (4));

} else {
var statearr_27092_27104 = state_27086__$1;
(statearr_27092_27104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (3))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else {
if((state_val_27087 === (4))){
var inst_27069 = (state_27086[(10)]);
var inst_27074 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27069);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(7),inst_27074);
} else {
if((state_val_27087 === (5))){
var inst_27080 = cljs.core.async.close_BANG_.call(null,out);
var state_27086__$1 = state_27086;
var statearr_27093_27105 = state_27086__$1;
(statearr_27093_27105[(2)] = inst_27080);

(statearr_27093_27105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (6))){
var inst_27082 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27094_27106 = state_27086__$1;
(statearr_27094_27106[(2)] = inst_27082);

(statearr_27094_27106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (7))){
var inst_27070 = (state_27086[(11)]);
var inst_27076 = (state_27086[(2)]);
var inst_27077 = cljs.core.async.put_BANG_.call(null,out,inst_27076);
var inst_27063 = inst_27070;
var state_27086__$1 = (function (){var statearr_27095 = state_27086;
(statearr_27095[(8)] = inst_27063);

(statearr_27095[(12)] = inst_27077);

return statearr_27095;
})();
var statearr_27096_27107 = state_27086__$1;
(statearr_27096_27107[(2)] = null);

(statearr_27096_27107[(1)] = (2));


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
});})(c__23167__auto___27101,out))
;
return ((function (switch__23077__auto__,c__23167__auto___27101,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____0 = (function (){
var statearr_27097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27097[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__);

(statearr_27097[(1)] = (1));

return statearr_27097;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____1 = (function (state_27086){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_27086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e27098){if((e27098 instanceof Object)){
var ex__23081__auto__ = e27098;
var statearr_27099_27108 = state_27086;
(statearr_27099_27108[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27109 = state_27086;
state_27086 = G__27109;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto___27101,out))
})();
var state__23169__auto__ = (function (){var statearr_27100 = f__23168__auto__.call(null);
(statearr_27100[(6)] = c__23167__auto___27101);

return statearr_27100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto___27101,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27110,opts){
var map__27111 = p__27110;
var map__27111__$1 = ((((!((map__27111 == null)))?(((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27111):map__27111);
var eval_body = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27113){var e = e27113;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27114_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27114_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27115){
var vec__27116 = p__27115;
var k = cljs.core.nth.call(null,vec__27116,(0),null);
var v = cljs.core.nth.call(null,vec__27116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27119){
var vec__27120 = p__27119;
var k = cljs.core.nth.call(null,vec__27120,(0),null);
var v = cljs.core.nth.call(null,vec__27120,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27126,p__27127){
var map__27128 = p__27126;
var map__27128__$1 = ((((!((map__27128 == null)))?(((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var opts = map__27128__$1;
var before_jsload = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27129 = p__27127;
var map__27129__$1 = ((((!((map__27129 == null)))?(((((map__27129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27129):map__27129);
var msg = map__27129__$1;
var files = cljs.core.get.call(null,map__27129__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27129__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27129__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23168__auto__ = (function (){var switch__23077__auto__ = ((function (c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27283){
var state_val_27284 = (state_27283[(1)]);
if((state_val_27284 === (7))){
var inst_27144 = (state_27283[(7)]);
var inst_27146 = (state_27283[(8)]);
var inst_27143 = (state_27283[(9)]);
var inst_27145 = (state_27283[(10)]);
var inst_27151 = cljs.core._nth.call(null,inst_27144,inst_27146);
var inst_27152 = figwheel.client.file_reloading.eval_body.call(null,inst_27151,opts);
var inst_27153 = (inst_27146 + (1));
var tmp27285 = inst_27144;
var tmp27286 = inst_27143;
var tmp27287 = inst_27145;
var inst_27143__$1 = tmp27286;
var inst_27144__$1 = tmp27285;
var inst_27145__$1 = tmp27287;
var inst_27146__$1 = inst_27153;
var state_27283__$1 = (function (){var statearr_27288 = state_27283;
(statearr_27288[(7)] = inst_27144__$1);

(statearr_27288[(8)] = inst_27146__$1);

(statearr_27288[(9)] = inst_27143__$1);

(statearr_27288[(10)] = inst_27145__$1);

(statearr_27288[(11)] = inst_27152);

return statearr_27288;
})();
var statearr_27289_27372 = state_27283__$1;
(statearr_27289_27372[(2)] = null);

(statearr_27289_27372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (20))){
var inst_27186 = (state_27283[(12)]);
var inst_27194 = figwheel.client.file_reloading.sort_files.call(null,inst_27186);
var state_27283__$1 = state_27283;
var statearr_27290_27373 = state_27283__$1;
(statearr_27290_27373[(2)] = inst_27194);

(statearr_27290_27373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (27))){
var state_27283__$1 = state_27283;
var statearr_27291_27374 = state_27283__$1;
(statearr_27291_27374[(2)] = null);

(statearr_27291_27374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (1))){
var inst_27135 = (state_27283[(13)]);
var inst_27132 = before_jsload.call(null,files);
var inst_27133 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27134 = (function (){return ((function (inst_27135,inst_27132,inst_27133,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27123_SHARP_);
});
;})(inst_27135,inst_27132,inst_27133,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27135__$1 = cljs.core.filter.call(null,inst_27134,files);
var inst_27136 = cljs.core.not_empty.call(null,inst_27135__$1);
var state_27283__$1 = (function (){var statearr_27292 = state_27283;
(statearr_27292[(14)] = inst_27132);

(statearr_27292[(15)] = inst_27133);

(statearr_27292[(13)] = inst_27135__$1);

return statearr_27292;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27293_27375 = state_27283__$1;
(statearr_27293_27375[(1)] = (2));

} else {
var statearr_27294_27376 = state_27283__$1;
(statearr_27294_27376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (24))){
var state_27283__$1 = state_27283;
var statearr_27295_27377 = state_27283__$1;
(statearr_27295_27377[(2)] = null);

(statearr_27295_27377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (39))){
var inst_27236 = (state_27283[(16)]);
var state_27283__$1 = state_27283;
var statearr_27296_27378 = state_27283__$1;
(statearr_27296_27378[(2)] = inst_27236);

(statearr_27296_27378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (46))){
var inst_27278 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27297_27379 = state_27283__$1;
(statearr_27297_27379[(2)] = inst_27278);

(statearr_27297_27379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (4))){
var inst_27180 = (state_27283[(2)]);
var inst_27181 = cljs.core.List.EMPTY;
var inst_27182 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27181);
var inst_27183 = (function (){return ((function (inst_27180,inst_27181,inst_27182,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27124_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27124_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27124_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27124_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27180,inst_27181,inst_27182,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27184 = cljs.core.filter.call(null,inst_27183,files);
var inst_27185 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27186 = cljs.core.concat.call(null,inst_27184,inst_27185);
var state_27283__$1 = (function (){var statearr_27298 = state_27283;
(statearr_27298[(17)] = inst_27182);

(statearr_27298[(18)] = inst_27180);

(statearr_27298[(12)] = inst_27186);

return statearr_27298;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27299_27380 = state_27283__$1;
(statearr_27299_27380[(1)] = (16));

} else {
var statearr_27300_27381 = state_27283__$1;
(statearr_27300_27381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (15))){
var inst_27170 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27301_27382 = state_27283__$1;
(statearr_27301_27382[(2)] = inst_27170);

(statearr_27301_27382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (21))){
var inst_27196 = (state_27283[(19)]);
var inst_27196__$1 = (state_27283[(2)]);
var inst_27197 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27196__$1);
var state_27283__$1 = (function (){var statearr_27302 = state_27283;
(statearr_27302[(19)] = inst_27196__$1);

return statearr_27302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27283__$1,(22),inst_27197);
} else {
if((state_val_27284 === (31))){
var inst_27281 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27283__$1,inst_27281);
} else {
if((state_val_27284 === (32))){
var inst_27236 = (state_27283[(16)]);
var inst_27241 = inst_27236.cljs$lang$protocol_mask$partition0$;
var inst_27242 = (inst_27241 & (64));
var inst_27243 = inst_27236.cljs$core$ISeq$;
var inst_27244 = (cljs.core.PROTOCOL_SENTINEL === inst_27243);
var inst_27245 = ((inst_27242) || (inst_27244));
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27245)){
var statearr_27303_27383 = state_27283__$1;
(statearr_27303_27383[(1)] = (35));

} else {
var statearr_27304_27384 = state_27283__$1;
(statearr_27304_27384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (40))){
var inst_27258 = (state_27283[(20)]);
var inst_27257 = (state_27283[(2)]);
var inst_27258__$1 = cljs.core.get.call(null,inst_27257,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27259 = cljs.core.get.call(null,inst_27257,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27260 = cljs.core.not_empty.call(null,inst_27258__$1);
var state_27283__$1 = (function (){var statearr_27305 = state_27283;
(statearr_27305[(21)] = inst_27259);

(statearr_27305[(20)] = inst_27258__$1);

return statearr_27305;
})();
if(cljs.core.truth_(inst_27260)){
var statearr_27306_27385 = state_27283__$1;
(statearr_27306_27385[(1)] = (41));

} else {
var statearr_27307_27386 = state_27283__$1;
(statearr_27307_27386[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (33))){
var state_27283__$1 = state_27283;
var statearr_27308_27387 = state_27283__$1;
(statearr_27308_27387[(2)] = false);

(statearr_27308_27387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (13))){
var inst_27156 = (state_27283[(22)]);
var inst_27160 = cljs.core.chunk_first.call(null,inst_27156);
var inst_27161 = cljs.core.chunk_rest.call(null,inst_27156);
var inst_27162 = cljs.core.count.call(null,inst_27160);
var inst_27143 = inst_27161;
var inst_27144 = inst_27160;
var inst_27145 = inst_27162;
var inst_27146 = (0);
var state_27283__$1 = (function (){var statearr_27309 = state_27283;
(statearr_27309[(7)] = inst_27144);

(statearr_27309[(8)] = inst_27146);

(statearr_27309[(9)] = inst_27143);

(statearr_27309[(10)] = inst_27145);

return statearr_27309;
})();
var statearr_27310_27388 = state_27283__$1;
(statearr_27310_27388[(2)] = null);

(statearr_27310_27388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (22))){
var inst_27196 = (state_27283[(19)]);
var inst_27199 = (state_27283[(23)]);
var inst_27204 = (state_27283[(24)]);
var inst_27200 = (state_27283[(25)]);
var inst_27199__$1 = (state_27283[(2)]);
var inst_27200__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27199__$1);
var inst_27201 = (function (){var all_files = inst_27196;
var res_SINGLEQUOTE_ = inst_27199__$1;
var res = inst_27200__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27196,inst_27199,inst_27204,inst_27200,inst_27199__$1,inst_27200__$1,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27125_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27125_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27196,inst_27199,inst_27204,inst_27200,inst_27199__$1,inst_27200__$1,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27202 = cljs.core.filter.call(null,inst_27201,inst_27199__$1);
var inst_27203 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27204__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27203);
var inst_27205 = cljs.core.not_empty.call(null,inst_27204__$1);
var state_27283__$1 = (function (){var statearr_27311 = state_27283;
(statearr_27311[(23)] = inst_27199__$1);

(statearr_27311[(26)] = inst_27202);

(statearr_27311[(24)] = inst_27204__$1);

(statearr_27311[(25)] = inst_27200__$1);

return statearr_27311;
})();
if(cljs.core.truth_(inst_27205)){
var statearr_27312_27389 = state_27283__$1;
(statearr_27312_27389[(1)] = (23));

} else {
var statearr_27313_27390 = state_27283__$1;
(statearr_27313_27390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (36))){
var state_27283__$1 = state_27283;
var statearr_27314_27391 = state_27283__$1;
(statearr_27314_27391[(2)] = false);

(statearr_27314_27391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (41))){
var inst_27258 = (state_27283[(20)]);
var inst_27262 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27263 = cljs.core.map.call(null,inst_27262,inst_27258);
var inst_27264 = cljs.core.pr_str.call(null,inst_27263);
var inst_27265 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27264)].join('');
var inst_27266 = figwheel.client.utils.log.call(null,inst_27265);
var state_27283__$1 = state_27283;
var statearr_27315_27392 = state_27283__$1;
(statearr_27315_27392[(2)] = inst_27266);

(statearr_27315_27392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (43))){
var inst_27259 = (state_27283[(21)]);
var inst_27269 = (state_27283[(2)]);
var inst_27270 = cljs.core.not_empty.call(null,inst_27259);
var state_27283__$1 = (function (){var statearr_27316 = state_27283;
(statearr_27316[(27)] = inst_27269);

return statearr_27316;
})();
if(cljs.core.truth_(inst_27270)){
var statearr_27317_27393 = state_27283__$1;
(statearr_27317_27393[(1)] = (44));

} else {
var statearr_27318_27394 = state_27283__$1;
(statearr_27318_27394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (29))){
var inst_27196 = (state_27283[(19)]);
var inst_27199 = (state_27283[(23)]);
var inst_27236 = (state_27283[(16)]);
var inst_27202 = (state_27283[(26)]);
var inst_27204 = (state_27283[(24)]);
var inst_27200 = (state_27283[(25)]);
var inst_27232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27235 = (function (){var all_files = inst_27196;
var res_SINGLEQUOTE_ = inst_27199;
var res = inst_27200;
var files_not_loaded = inst_27202;
var dependencies_that_loaded = inst_27204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27236,inst_27202,inst_27204,inst_27200,inst_27232,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27234){
var map__27319 = p__27234;
var map__27319__$1 = ((((!((map__27319 == null)))?(((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var namespace = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27236,inst_27202,inst_27204,inst_27200,inst_27232,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27236__$1 = cljs.core.group_by.call(null,inst_27235,inst_27202);
var inst_27238 = (inst_27236__$1 == null);
var inst_27239 = cljs.core.not.call(null,inst_27238);
var state_27283__$1 = (function (){var statearr_27321 = state_27283;
(statearr_27321[(16)] = inst_27236__$1);

(statearr_27321[(28)] = inst_27232);

return statearr_27321;
})();
if(inst_27239){
var statearr_27322_27395 = state_27283__$1;
(statearr_27322_27395[(1)] = (32));

} else {
var statearr_27323_27396 = state_27283__$1;
(statearr_27323_27396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (44))){
var inst_27259 = (state_27283[(21)]);
var inst_27272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27259);
var inst_27273 = cljs.core.pr_str.call(null,inst_27272);
var inst_27274 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27273)].join('');
var inst_27275 = figwheel.client.utils.log.call(null,inst_27274);
var state_27283__$1 = state_27283;
var statearr_27324_27397 = state_27283__$1;
(statearr_27324_27397[(2)] = inst_27275);

(statearr_27324_27397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (6))){
var inst_27177 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27325_27398 = state_27283__$1;
(statearr_27325_27398[(2)] = inst_27177);

(statearr_27325_27398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (28))){
var inst_27202 = (state_27283[(26)]);
var inst_27229 = (state_27283[(2)]);
var inst_27230 = cljs.core.not_empty.call(null,inst_27202);
var state_27283__$1 = (function (){var statearr_27326 = state_27283;
(statearr_27326[(29)] = inst_27229);

return statearr_27326;
})();
if(cljs.core.truth_(inst_27230)){
var statearr_27327_27399 = state_27283__$1;
(statearr_27327_27399[(1)] = (29));

} else {
var statearr_27328_27400 = state_27283__$1;
(statearr_27328_27400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (25))){
var inst_27200 = (state_27283[(25)]);
var inst_27216 = (state_27283[(2)]);
var inst_27217 = cljs.core.not_empty.call(null,inst_27200);
var state_27283__$1 = (function (){var statearr_27329 = state_27283;
(statearr_27329[(30)] = inst_27216);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27217)){
var statearr_27330_27401 = state_27283__$1;
(statearr_27330_27401[(1)] = (26));

} else {
var statearr_27331_27402 = state_27283__$1;
(statearr_27331_27402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (34))){
var inst_27252 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27252)){
var statearr_27332_27403 = state_27283__$1;
(statearr_27332_27403[(1)] = (38));

} else {
var statearr_27333_27404 = state_27283__$1;
(statearr_27333_27404[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (17))){
var state_27283__$1 = state_27283;
var statearr_27334_27405 = state_27283__$1;
(statearr_27334_27405[(2)] = recompile_dependents);

(statearr_27334_27405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (3))){
var state_27283__$1 = state_27283;
var statearr_27335_27406 = state_27283__$1;
(statearr_27335_27406[(2)] = null);

(statearr_27335_27406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (12))){
var inst_27173 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27336_27407 = state_27283__$1;
(statearr_27336_27407[(2)] = inst_27173);

(statearr_27336_27407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (2))){
var inst_27135 = (state_27283[(13)]);
var inst_27142 = cljs.core.seq.call(null,inst_27135);
var inst_27143 = inst_27142;
var inst_27144 = null;
var inst_27145 = (0);
var inst_27146 = (0);
var state_27283__$1 = (function (){var statearr_27337 = state_27283;
(statearr_27337[(7)] = inst_27144);

(statearr_27337[(8)] = inst_27146);

(statearr_27337[(9)] = inst_27143);

(statearr_27337[(10)] = inst_27145);

return statearr_27337;
})();
var statearr_27338_27408 = state_27283__$1;
(statearr_27338_27408[(2)] = null);

(statearr_27338_27408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (23))){
var inst_27196 = (state_27283[(19)]);
var inst_27199 = (state_27283[(23)]);
var inst_27202 = (state_27283[(26)]);
var inst_27204 = (state_27283[(24)]);
var inst_27200 = (state_27283[(25)]);
var inst_27207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27209 = (function (){var all_files = inst_27196;
var res_SINGLEQUOTE_ = inst_27199;
var res = inst_27200;
var files_not_loaded = inst_27202;
var dependencies_that_loaded = inst_27204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27207,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27208){
var map__27339 = p__27208;
var map__27339__$1 = ((((!((map__27339 == null)))?(((((map__27339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27339):map__27339);
var request_url = cljs.core.get.call(null,map__27339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27207,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27210 = cljs.core.reverse.call(null,inst_27204);
var inst_27211 = cljs.core.map.call(null,inst_27209,inst_27210);
var inst_27212 = cljs.core.pr_str.call(null,inst_27211);
var inst_27213 = figwheel.client.utils.log.call(null,inst_27212);
var state_27283__$1 = (function (){var statearr_27341 = state_27283;
(statearr_27341[(31)] = inst_27207);

return statearr_27341;
})();
var statearr_27342_27409 = state_27283__$1;
(statearr_27342_27409[(2)] = inst_27213);

(statearr_27342_27409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (35))){
var state_27283__$1 = state_27283;
var statearr_27343_27410 = state_27283__$1;
(statearr_27343_27410[(2)] = true);

(statearr_27343_27410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (19))){
var inst_27186 = (state_27283[(12)]);
var inst_27192 = figwheel.client.file_reloading.expand_files.call(null,inst_27186);
var state_27283__$1 = state_27283;
var statearr_27344_27411 = state_27283__$1;
(statearr_27344_27411[(2)] = inst_27192);

(statearr_27344_27411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (11))){
var state_27283__$1 = state_27283;
var statearr_27345_27412 = state_27283__$1;
(statearr_27345_27412[(2)] = null);

(statearr_27345_27412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (9))){
var inst_27175 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27346_27413 = state_27283__$1;
(statearr_27346_27413[(2)] = inst_27175);

(statearr_27346_27413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (5))){
var inst_27146 = (state_27283[(8)]);
var inst_27145 = (state_27283[(10)]);
var inst_27148 = (inst_27146 < inst_27145);
var inst_27149 = inst_27148;
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27149)){
var statearr_27347_27414 = state_27283__$1;
(statearr_27347_27414[(1)] = (7));

} else {
var statearr_27348_27415 = state_27283__$1;
(statearr_27348_27415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (14))){
var inst_27156 = (state_27283[(22)]);
var inst_27165 = cljs.core.first.call(null,inst_27156);
var inst_27166 = figwheel.client.file_reloading.eval_body.call(null,inst_27165,opts);
var inst_27167 = cljs.core.next.call(null,inst_27156);
var inst_27143 = inst_27167;
var inst_27144 = null;
var inst_27145 = (0);
var inst_27146 = (0);
var state_27283__$1 = (function (){var statearr_27349 = state_27283;
(statearr_27349[(7)] = inst_27144);

(statearr_27349[(8)] = inst_27146);

(statearr_27349[(9)] = inst_27143);

(statearr_27349[(10)] = inst_27145);

(statearr_27349[(32)] = inst_27166);

return statearr_27349;
})();
var statearr_27350_27416 = state_27283__$1;
(statearr_27350_27416[(2)] = null);

(statearr_27350_27416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (45))){
var state_27283__$1 = state_27283;
var statearr_27351_27417 = state_27283__$1;
(statearr_27351_27417[(2)] = null);

(statearr_27351_27417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (26))){
var inst_27196 = (state_27283[(19)]);
var inst_27199 = (state_27283[(23)]);
var inst_27202 = (state_27283[(26)]);
var inst_27204 = (state_27283[(24)]);
var inst_27200 = (state_27283[(25)]);
var inst_27219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27221 = (function (){var all_files = inst_27196;
var res_SINGLEQUOTE_ = inst_27199;
var res = inst_27200;
var files_not_loaded = inst_27202;
var dependencies_that_loaded = inst_27204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27219,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27220){
var map__27352 = p__27220;
var map__27352__$1 = ((((!((map__27352 == null)))?(((((map__27352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27352):map__27352);
var namespace = cljs.core.get.call(null,map__27352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27219,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27222 = cljs.core.map.call(null,inst_27221,inst_27200);
var inst_27223 = cljs.core.pr_str.call(null,inst_27222);
var inst_27224 = figwheel.client.utils.log.call(null,inst_27223);
var inst_27225 = (function (){var all_files = inst_27196;
var res_SINGLEQUOTE_ = inst_27199;
var res = inst_27200;
var files_not_loaded = inst_27202;
var dependencies_that_loaded = inst_27204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27219,inst_27221,inst_27222,inst_27223,inst_27224,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27199,inst_27202,inst_27204,inst_27200,inst_27219,inst_27221,inst_27222,inst_27223,inst_27224,state_val_27284,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27226 = setTimeout(inst_27225,(10));
var state_27283__$1 = (function (){var statearr_27354 = state_27283;
(statearr_27354[(33)] = inst_27224);

(statearr_27354[(34)] = inst_27219);

return statearr_27354;
})();
var statearr_27355_27418 = state_27283__$1;
(statearr_27355_27418[(2)] = inst_27226);

(statearr_27355_27418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (16))){
var state_27283__$1 = state_27283;
var statearr_27356_27419 = state_27283__$1;
(statearr_27356_27419[(2)] = reload_dependents);

(statearr_27356_27419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (38))){
var inst_27236 = (state_27283[(16)]);
var inst_27254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27236);
var state_27283__$1 = state_27283;
var statearr_27357_27420 = state_27283__$1;
(statearr_27357_27420[(2)] = inst_27254);

(statearr_27357_27420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (30))){
var state_27283__$1 = state_27283;
var statearr_27358_27421 = state_27283__$1;
(statearr_27358_27421[(2)] = null);

(statearr_27358_27421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (10))){
var inst_27156 = (state_27283[(22)]);
var inst_27158 = cljs.core.chunked_seq_QMARK_.call(null,inst_27156);
var state_27283__$1 = state_27283;
if(inst_27158){
var statearr_27359_27422 = state_27283__$1;
(statearr_27359_27422[(1)] = (13));

} else {
var statearr_27360_27423 = state_27283__$1;
(statearr_27360_27423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (18))){
var inst_27190 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27190)){
var statearr_27361_27424 = state_27283__$1;
(statearr_27361_27424[(1)] = (19));

} else {
var statearr_27362_27425 = state_27283__$1;
(statearr_27362_27425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (42))){
var state_27283__$1 = state_27283;
var statearr_27363_27426 = state_27283__$1;
(statearr_27363_27426[(2)] = null);

(statearr_27363_27426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (37))){
var inst_27249 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27364_27427 = state_27283__$1;
(statearr_27364_27427[(2)] = inst_27249);

(statearr_27364_27427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (8))){
var inst_27143 = (state_27283[(9)]);
var inst_27156 = (state_27283[(22)]);
var inst_27156__$1 = cljs.core.seq.call(null,inst_27143);
var state_27283__$1 = (function (){var statearr_27365 = state_27283;
(statearr_27365[(22)] = inst_27156__$1);

return statearr_27365;
})();
if(inst_27156__$1){
var statearr_27366_27428 = state_27283__$1;
(statearr_27366_27428[(1)] = (10));

} else {
var statearr_27367_27429 = state_27283__$1;
(statearr_27367_27429[(1)] = (11));

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
}
});})(c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23077__auto__,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____0 = (function (){
var statearr_27368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27368[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__);

(statearr_27368[(1)] = (1));

return statearr_27368;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____1 = (function (state_27283){
while(true){
var ret_value__23079__auto__ = (function (){try{while(true){
var result__23080__auto__ = switch__23077__auto__.call(null,state_27283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23080__auto__;
}
break;
}
}catch (e27369){if((e27369 instanceof Object)){
var ex__23081__auto__ = e27369;
var statearr_27370_27430 = state_27283;
(statearr_27370_27430[(5)] = ex__23081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27431 = state_27283;
state_27283 = G__27431;
continue;
} else {
return ret_value__23079__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__ = function(state_27283){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____1.call(this,state_27283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23078__auto__;
})()
;})(switch__23077__auto__,c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23169__auto__ = (function (){var statearr_27371 = f__23168__auto__.call(null);
(statearr_27371[(6)] = c__23167__auto__);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23169__auto__);
});})(c__23167__auto__,map__27128,map__27128__$1,opts,before_jsload,on_jsload,reload_dependents,map__27129,map__27129__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23167__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27434,link){
var map__27435 = p__27434;
var map__27435__$1 = ((((!((map__27435 == null)))?(((((map__27435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27435):map__27435);
var file = cljs.core.get.call(null,map__27435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27435,map__27435__$1,file){
return (function (p1__27432_SHARP_,p2__27433_SHARP_){
if(cljs.core._EQ_.call(null,p1__27432_SHARP_,p2__27433_SHARP_)){
return p1__27432_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27435,map__27435__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27438){
var map__27439 = p__27438;
var map__27439__$1 = ((((!((map__27439 == null)))?(((((map__27439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27439):map__27439);
var match_length = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27437_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27437_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27441_SHARP_,p2__27442_SHARP_){
return cljs.core.assoc.call(null,p1__27441_SHARP_,cljs.core.get.call(null,p2__27442_SHARP_,key),p2__27442_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27443 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27443);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27443);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27444,p__27445){
var map__27446 = p__27444;
var map__27446__$1 = ((((!((map__27446 == null)))?(((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
var on_cssload = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27447 = p__27445;
var map__27447__$1 = ((((!((map__27447 == null)))?(((((map__27447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27447):map__27447);
var files_msg = map__27447__$1;
var files = cljs.core.get.call(null,map__27447__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1539278419070
