window.__require = function r(e, t, n) {
function o(i, u) {
if (!t[i]) {
if (!e[i]) {
var _ = i.split("/");
_ = _[_.length - 1];
if (!e[_]) {
var p = "function" == typeof __require && __require;
if (!u && p) return p(_, !0);
if (c) return c(_, !0);
throw new Error("Cannot find module '" + i + "'");
}
}
var a = t[i] = {
exports: {}
};
e[i][0].call(a.exports, function(r) {
return o(e[i][1][r] || r);
}, a, a.exports, r, e, t, n);
}
return t[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
TestScript: [ function(r, e, t) {
"use strict";
cc._RF.push(e, "6ab7fiiYaFBroa7YvCVrMkQ", "TestScript");
Object.defineProperty(t, "__esModule", {
value: !0
});
var n = cc._decorator, o = n.ccclass, c = n.property, i = function(r) {
__extends(e, r);
function e() {
var e = null !== r && r.apply(this, arguments) || this;
e.label_prefab = null;
e.text = [ "陈奶奶的猫走丢啦。", "老奶奶的儿女都不在镇子上。", "老人家平时孤孤单单的。", "就只有猫陪着。", "老人家失魂落魄的。", "这个委托怎么能不接。" ];
e._current_node = null;
e._current_index = 0;
return e;
}
e.prototype.start = function() {};
__decorate([ c(cc.Prefab) ], e.prototype, "label_prefab", void 0);
return e = __decorate([ o ], e);
}(cc.Component);
t.default = i;
cc._RF.pop();
}, {} ]
}, {}, [ "TestScript" ]);