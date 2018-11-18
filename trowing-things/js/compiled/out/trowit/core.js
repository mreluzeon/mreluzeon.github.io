// Compiled by ClojureScript 1.10.238 {}
goog.provide('trowit.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Capitalism succ");
trowit.core.canvas = document.getElementById("canvas");
trowit.core.ctx = trowit.core.canvas.getContext("2d");
trowit.core.ctx.font = "13px Roboto";
trowit.core.draw_point = (function trowit$core$draw_point(x,y){
var G__28599 = trowit.core.ctx;
G__28599.beginPath();

G__28599.arc(x,y,(3),(0),(Math.PI * (2)),true);

G__28599.fill();

return G__28599;
});
trowit.core.init_plot = (function trowit$core$init_plot(){
trowit.core.ctx.fillStyle = "#000000";

var G__28600_28619 = trowit.core.ctx;
G__28600_28619.moveTo((50),(0));

G__28600_28619.lineTo((50),(430));

G__28600_28619.lineTo((974),(430));

G__28600_28619.stroke();


var seq__28601_28620 = cljs.core.seq.call(null,cljs.core.range.call(null,(50),(974),(40)));
var chunk__28602_28621 = null;
var count__28603_28622 = (0);
var i__28604_28623 = (0);
while(true){
if((i__28604_28623 < count__28603_28622)){
var i_28624 = cljs.core._nth.call(null,chunk__28602_28621,i__28604_28623);
trowit.core.ctx.fillRect(i_28624,(428),(1),(5));

trowit.core.ctx.fillText((i_28624 - (50)),i_28624,(448));


var G__28625 = seq__28601_28620;
var G__28626 = chunk__28602_28621;
var G__28627 = count__28603_28622;
var G__28628 = (i__28604_28623 + (1));
seq__28601_28620 = G__28625;
chunk__28602_28621 = G__28626;
count__28603_28622 = G__28627;
i__28604_28623 = G__28628;
continue;
} else {
var temp__5457__auto___28629 = cljs.core.seq.call(null,seq__28601_28620);
if(temp__5457__auto___28629){
var seq__28601_28630__$1 = temp__5457__auto___28629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28601_28630__$1)){
var c__4319__auto___28631 = cljs.core.chunk_first.call(null,seq__28601_28630__$1);
var G__28632 = cljs.core.chunk_rest.call(null,seq__28601_28630__$1);
var G__28633 = c__4319__auto___28631;
var G__28634 = cljs.core.count.call(null,c__4319__auto___28631);
var G__28635 = (0);
seq__28601_28620 = G__28632;
chunk__28602_28621 = G__28633;
count__28603_28622 = G__28634;
i__28604_28623 = G__28635;
continue;
} else {
var i_28636 = cljs.core.first.call(null,seq__28601_28630__$1);
trowit.core.ctx.fillRect(i_28636,(428),(1),(5));

trowit.core.ctx.fillText((i_28636 - (50)),i_28636,(448));


var G__28637 = cljs.core.next.call(null,seq__28601_28630__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28601_28620 = G__28637;
chunk__28602_28621 = G__28638;
count__28603_28622 = G__28639;
i__28604_28623 = G__28640;
continue;
}
} else {
}
}
break;
}

var seq__28605_28641 = cljs.core.seq.call(null,cljs.core.range.call(null,(70),(974),(40)));
var chunk__28606_28642 = null;
var count__28607_28643 = (0);
var i__28608_28644 = (0);
while(true){
if((i__28608_28644 < count__28607_28643)){
var i_28645 = cljs.core._nth.call(null,chunk__28606_28642,i__28608_28644);
trowit.core.ctx.fillRect(i_28645,(428),(1),(5));

trowit.core.ctx.fillText((i_28645 - (50)),i_28645,(460));


var G__28646 = seq__28605_28641;
var G__28647 = chunk__28606_28642;
var G__28648 = count__28607_28643;
var G__28649 = (i__28608_28644 + (1));
seq__28605_28641 = G__28646;
chunk__28606_28642 = G__28647;
count__28607_28643 = G__28648;
i__28608_28644 = G__28649;
continue;
} else {
var temp__5457__auto___28650 = cljs.core.seq.call(null,seq__28605_28641);
if(temp__5457__auto___28650){
var seq__28605_28651__$1 = temp__5457__auto___28650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28605_28651__$1)){
var c__4319__auto___28652 = cljs.core.chunk_first.call(null,seq__28605_28651__$1);
var G__28653 = cljs.core.chunk_rest.call(null,seq__28605_28651__$1);
var G__28654 = c__4319__auto___28652;
var G__28655 = cljs.core.count.call(null,c__4319__auto___28652);
var G__28656 = (0);
seq__28605_28641 = G__28653;
chunk__28606_28642 = G__28654;
count__28607_28643 = G__28655;
i__28608_28644 = G__28656;
continue;
} else {
var i_28657 = cljs.core.first.call(null,seq__28605_28651__$1);
trowit.core.ctx.fillRect(i_28657,(428),(1),(5));

trowit.core.ctx.fillText((i_28657 - (50)),i_28657,(460));


var G__28658 = cljs.core.next.call(null,seq__28605_28651__$1);
var G__28659 = null;
var G__28660 = (0);
var G__28661 = (0);
seq__28605_28641 = G__28658;
chunk__28606_28642 = G__28659;
count__28607_28643 = G__28660;
i__28608_28644 = G__28661;
continue;
}
} else {
}
}
break;
}

var marks = cljs.core.range.call(null,(10),(431),(20));
var labels = cljs.core.range.call(null,(420),(-1),(-20));
var seq__28609 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,marks,labels));
var chunk__28610 = null;
var count__28611 = (0);
var i__28612 = (0);
while(true){
if((i__28612 < count__28611)){
var vec__28613 = cljs.core._nth.call(null,chunk__28610,i__28612);
var i = cljs.core.nth.call(null,vec__28613,(0),null);
var j = cljs.core.nth.call(null,vec__28613,(1),null);
trowit.core.ctx.fillRect((48),i,(5),(1));

trowit.core.ctx.fillText(j,(10),(i + (3)));


var G__28662 = seq__28609;
var G__28663 = chunk__28610;
var G__28664 = count__28611;
var G__28665 = (i__28612 + (1));
seq__28609 = G__28662;
chunk__28610 = G__28663;
count__28611 = G__28664;
i__28612 = G__28665;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28609);
if(temp__5457__auto__){
var seq__28609__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28609__$1);
var G__28666 = cljs.core.chunk_rest.call(null,seq__28609__$1);
var G__28667 = c__4319__auto__;
var G__28668 = cljs.core.count.call(null,c__4319__auto__);
var G__28669 = (0);
seq__28609 = G__28666;
chunk__28610 = G__28667;
count__28611 = G__28668;
i__28612 = G__28669;
continue;
} else {
var vec__28616 = cljs.core.first.call(null,seq__28609__$1);
var i = cljs.core.nth.call(null,vec__28616,(0),null);
var j = cljs.core.nth.call(null,vec__28616,(1),null);
trowit.core.ctx.fillRect((48),i,(5),(1));

trowit.core.ctx.fillText(j,(10),(i + (3)));


var G__28670 = cljs.core.next.call(null,seq__28609__$1);
var G__28671 = null;
var G__28672 = (0);
var G__28673 = (0);
seq__28609 = G__28670;
chunk__28610 = G__28671;
count__28611 = G__28672;
i__28612 = G__28673;
continue;
}
} else {
return null;
}
}
break;
}
});
trowit.core.to_x = (function trowit$core$to_x(x){
return ((50) + x);
});
trowit.core.to_y = (function trowit$core$to_y(y){
return Math.abs(((430) - y));
});
trowit.core.trow = (function trowit$core$trow(vel0,y0,time_step,angle){
var x = (50);
var y = trowit.core.to_y.call(null,y0);
var t = 0.0;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((y > (430))){
return res;
} else {
var G__28674 = trowit.core.to_x.call(null,((vel0 * t) * Math.cos(angle)));
var G__28675 = ((trowit.core.to_y.call(null,y0) + ((vel0 * t) * Math.sin(angle))) + (((9.8 * t) * t) / (2)));
var G__28676 = (t + time_step);
var G__28677 = cljs.core.conj.call(null,res,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"t","t",-1397832519),t], null));
x = G__28674;
y = G__28675;
t = G__28676;
res = G__28677;
continue;
}
break;
}
});
trowit.core.render = (function trowit$core$render(dots){
var seq__28678 = cljs.core.seq.call(null,dots);
var chunk__28679 = null;
var count__28680 = (0);
var i__28681 = (0);
while(true){
if((i__28681 < count__28680)){
var i = cljs.core._nth.call(null,chunk__28679,i__28681);
trowit.core.draw_point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i));


var G__28682 = seq__28678;
var G__28683 = chunk__28679;
var G__28684 = count__28680;
var G__28685 = (i__28681 + (1));
seq__28678 = G__28682;
chunk__28679 = G__28683;
count__28680 = G__28684;
i__28681 = G__28685;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28678);
if(temp__5457__auto__){
var seq__28678__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28678__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28678__$1);
var G__28686 = cljs.core.chunk_rest.call(null,seq__28678__$1);
var G__28687 = c__4319__auto__;
var G__28688 = cljs.core.count.call(null,c__4319__auto__);
var G__28689 = (0);
seq__28678 = G__28686;
chunk__28679 = G__28687;
count__28680 = G__28688;
i__28681 = G__28689;
continue;
} else {
var i = cljs.core.first.call(null,seq__28678__$1);
trowit.core.draw_point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i));


var G__28690 = cljs.core.next.call(null,seq__28678__$1);
var G__28691 = null;
var G__28692 = (0);
var G__28693 = (0);
seq__28678 = G__28690;
chunk__28679 = G__28691;
count__28680 = G__28692;
i__28681 = G__28693;
continue;
}
} else {
return null;
}
}
break;
}
});
trowit.core.random_color = (function trowit$core$random_color(){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(cljs.core.rand.call(null,(255))).toString((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(cljs.core.rand.call(null,(255))).toString((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(cljs.core.rand.call(null,(255))).toString((16)))].join('');
});
trowit.core.round = (function trowit$core$round(x){
return (Math.round(((1000) * x)) / (1000));
});
trowit.core.to_table = (function trowit$core$to_table(data){
var table = document.getElementById("table");
return table.innerHTML = ["<tr><td>x</td><td>y</td><td>t</td></tr>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (table){
return (function (p1__28694_SHARP_){
return ["<tr><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trowit.core.round.call(null,Math.abs(((50) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__28694_SHARP_))))),"</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trowit.core.round.call(null,Math.abs(((430) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__28694_SHARP_))))),"</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trowit.core.round.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(p1__28694_SHARP_))),"</td></tr>"].join('');
});})(table))
,data)))].join('');
});
document.getElementById("draw").onclick = (function (e){
trowit.core.ctx.fillStyle = trowit.core.random_color.call(null);

var vel = document.getElementById("velocity").value;
var y0 = document.getElementById("y").value;
var step = Number(document.getElementById("timestep").value);
var angle = (Math.abs(((360) - document.getElementById("angle").value)) * (Math.PI / (180)));
var res = trowit.core.trow.call(null,vel,y0,step,angle);
trowit.core.render.call(null,res);

return trowit.core.to_table.call(null,res);
});
trowit.core.init_plot.call(null);

//# sourceMappingURL=core.js.map?rel=1539587459417
