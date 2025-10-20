import { a as OC } from "@nf-internal/chunk-IJSCYRMU";
import { $ as pt, $a as Y, $b as un, $c as ni, A as Ia, Aa as ie, Ab as Pf, Ac as It, B as ft, Ba as te, Bb as Do, Bc as we, C as kt, Ca as xt, Cb as qr, Cc as Ja, D as T, Da as F, Db as Wr, Dc as Xa, E as Ee, Ea as Q, Eb as zr, Ec as ec, F as Df, Fa as Qe, Fb as Oa, Fc as tc, G as Da, Ga as M, Gb as jt, Gc as Mo, H as Ot, Ha as gt, Hb as Lf, Hc as Oe, I as Cf, Ia as go, Ib as Ff, Ic as IC, J as Re, Ja as mo, Jb as jf, Jc as zf, K as Pr, Ka as Z, Kb as Qr, Kc as Te, L as D, La as mt, Lb as Vf, Lc as DC, M as Ca, Ma as an, Mb as Hf, Mc as dn, N as rn, Na as Ve, Nb as xa, Nc as ei, O as Lr, Oa as cn, Ob as Zr, Oc as Dt, P as Tf, Pa as Sa, Pb as Co, Pc as nc, Q as Ae, Qa as ba, Qb as Pa, Qc as CC, R as Ta, Ra as $r, Rb as La, Rc as Qf, S as uo, Sa as yo, Sb as Bf, Sc as TC, T as fo, Ta as _e, Tb as Fa, Tc as oc, U as Ma, Ua as Pt, Ub as ja, Uc as Zf, V as Mf, Va as E, Vb as g, Vc as rc, W as po, Wa as Ie, Wb as _, Wc as Ze, X as Fr, Xa as ke, Xb as Va, Xc as fn, Y as jr, Ya as vo, Yb as Ha, Yc as ic, Z as Me, Za as Lt, Zb as N, Zc as ti, _ as P, _a as U, _b as Uf, _c as MC, a as br, aa as mC, ab as K, ac as Be, ad as Ct, b as w, ba as sn, bb as Ra, bc as Ba, bd as sc, c as vf, ca as Vr, cb as De, cc as Ua, cd as No, d as ve, da as B, db as ln, dc as $a, dd as ac, e as ya, ea as Ne, eb as me, ec as Ga, ed as cc, f as Ef, fa as je, fb as He, fc as qa, fd as NC, g as nn, ga as ho, gb as Aa, gc as Wa, gd as _C, h as Rr, ha as ze, hb as Sf, hc as ue, hd as wC, i as uC, ia as yC, ib as yt, ic as Ue, id as SC, j as va, ja as vC, jb as bf, jc as za, jd as bC, k as H, ka as Na, kb as Rf, kc as pe, kd as RC, l as Ar, la as Hr, lb as k, lc as $e, ld as AC, m as If, ma as Nf, mb as Eo, mc as $f, md as kC, n as j, na as _f, nb as Ft, nc as Qa, o as dC, oa as Br, ob as Ce, oc as Gf, p as lo, pa as ht, pb as Af, pc as qf, q as fC, qa as _a, qb as vt, qc as Za, r as pC, ra as wf, rb as Et, rc as Yr, s as kr, sa as Ur, sb as Io, sc as Kr, t as Ea, ta as wa, tb as le, tc as To, u as S, ua as EC, ub as kf, uc as Ya, v as hC, va as L, vb as Of, vc as Jr, w as gC, wa as y, wb as xf, wc as Ka, x as on, xa as b, xb as se, xc as Xr, y as Or, ya as W, yb as ka, yc as Wf, z as xr, za as re, zb as Gr, zc as ne } from "@nf-internal/chunk-HJGATUMU";
import { b as lC } from "@nf-internal/chunk-R4BOCH5O";
import { C as ma, b as dt, c as R, d as gf, g as pa, h as _r, o as co, p as wr, q as Sr, r as ha, u as mf, v as yf, z as ga } from "@nf-internal/chunk-O24SRXC7";
import { a as q, b as Fe, e as ao } from "@nf-internal/chunk-ACKELEN3";
import { Subject as Pl, Subscription as Ll } from "rxjs";
import { setActiveConsumer as Yf } from "@angular/core/primitives/signals";
import { map as xC } from "rxjs/operators";
var pn = { JSACTION: "jsaction" };
function qe(e) { return { toString: e }.toString(); }
var mn = "__annotations__", yn = "__parameters__", vn = "__prop__metadata__";
function er(e, t, n, o, r) { return qe(() => { let i = Fl(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(mn) ? u[mn] : Object.defineProperty(u, mn, { value: [] })[mn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function Fl(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Bn(e, t, n) { return qe(() => { let o = Fl(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(yn) ? c[yn] : Object.defineProperty(c, yn, { value: [] })[yn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function nt(e, t, n, o) { return qe(() => { let r = Fl(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(vn) ? d[vn] : Object.defineProperty(d, vn, { value: {} })[vn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var ah = rn(Bn("Inject", e => ({ token: e })), -1), Qi = rn(Bn("Optional"), 8), ch = rn(Bn("Self"), 2), Zi = rn(Bn("SkipSelf"), 4), lh = rn(Bn("Host"), 1);
function X(e) { let t = ve.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Kf = { \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: lo, \u0275\u0275inject: Re, \u0275\u0275invalidFactoryDep: Pr, resolveForwardRef: H }, uh = Function;
function wo(e) { return typeof e == "function"; }
var PC = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, LC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, FC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, jC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function VC(e) { return PC.test(e) || jC.test(e) || LC.test(e) && !FC.test(e); }
var Di = class {
    _reflect;
    constructor(t) { this._reflect = t || ve.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = fo(n.length) : o = fo(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (VC(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && lc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(yn) && t[yn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : fo(t.length); }
    parameters(t) { if (!wo(t))
        return []; let n = oi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? lc(t.decorators) : t.hasOwnProperty(mn) ? t[mn] : null; }
    annotations(t) { if (!wo(t))
        return []; let n = oi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = lc(o[i]); }), r;
    } return t.hasOwnProperty(vn) ? t[vn] : null; }
    propMetadata(t) { if (!wo(t))
        return {}; let n = oi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return wo(t) ? this._ownPropMetadata(t, oi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof uh && n in t.prototype; }
};
function lc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function oi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var Ci = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function dh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var fh = (() => { let e = () => ph; return e.ngInherit = !0, e; })();
function ph(e) { return e.type.prototype.ngOnChanges && (e.setInput = BC), HC; }
function HC() { let e = gh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Me)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function BC(e, t, n, o, r) { let i = this.declaredInputs[o], s = gh(e) || UC(e, { previous: Me, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Ci(l && l.currentValue, n, c === Me), dh(e, t, r, n); }
var hh = "__ngSimpleChanges__";
function gh(e) { return e[hh] || null; }
function UC(e, t) { return e[hh] = t; }
var Jf = [];
var O = function (e, t = null, n) { for (let o = 0; o < Jf.length; o++) {
    let r = Jf[o];
    r(e, t, n);
} };
function $C(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = ph(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function mh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function di(e, t, n) { yh(e, t, 3, n); }
function fi(e, t, n, o) { (e[b] & 3) === n && yh(e, t, n, o); }
function uc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function yh(e, t, n, o) { let r = o !== void 0 ? e[an] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[an] += 65536), (a < i || i == -1) && (GC(e, n, t, c), e[an] = (e[an] & 4294901760) + c + 2), c++; }
function Xf(e, t) { O(4, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), O(5, e, t);
} }
function GC(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[an] >> 16 && (e[b] & 3) === t && (e[b] += 16384, Xf(a, i)) : Xf(a, i); }
var Tn = -1, Gt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function Yi(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function vh(e) { return !!(e.type & 128); }
function qC(e) { return (e.flags & 8) !== 0; }
function WC(e) { return (e.flags & 16) !== 0; }
function zC(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        QC(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Eh(e) { return e === 3 || e === 4 || e === 6; }
function QC(e) { return e.charCodeAt(0) === 64; }
function bn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? ep(e, n, r, null, t[++o]) : ep(e, n, r, null, null));
        }
    } return e; }
function ep(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Ih(e) { return e !== Tn; }
function Ti(e) { return e & 32767; }
function ZC(e) { return e >> 16; }
function Mi(e, t) { let n = ZC(e), o = t; for (; n > 0;)
    o = o[mo], n--; return o; }
var Pc = !0;
function Ni(e) { let t = Pc; return Pc = e, t; }
var YC = 256, Dh = YC - 1, Ch = 5, KC = 0, Ge = {};
function JC(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(kt) && (o = n[kt]), o == null && (o = n[kt] = KC++); let r = o & Dh, i = 1 << r; t.data[e + (r >> Ch)] |= i; }
function _i(e, t) { let n = Th(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, dc(o.data, e), dc(t, null), dc(o.blueprint, null)); let r = jl(e, t), i = e.injectorIndex; if (Ih(r)) {
    let s = Ti(r), a = Mi(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function dc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Th(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function jl(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = bh(r), o === null)
        return Tn;
    if (n++, r = r[mo], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return Tn; }
function Lc(e, t, n) { JC(e, t, n); }
function XC(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Eh(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Mh(e, t, n) { if (n & 8 || e !== void 0)
    return e; Da(t, "NodeInjector"); }
function Nh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[Q], i = Ot(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Cf(t, o, n & 8);
    }
    finally {
        Ot(i);
    }
} return Mh(o, t, n); }
function _h(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = oT(e, t, n, o, Ge);
        if (s !== Ge)
            return s;
    }
    let i = wh(e, t, n, o, Ge);
    if (i !== Ge)
        return i;
} return Nh(t, n, o, r); }
function wh(e, t, n, o, r) { let i = tT(n); if (typeof i == "function") {
    if (!Ya(t, e, o))
        return o & 1 ? Mh(r, n, o) : Nh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Da(n);
        else
            return s;
    }
    finally {
        Ka();
    }
}
else if (typeof i == "number") {
    let s = null, a = Th(e, t), c = Tn, l = o & 1 ? t[Z][ie] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? jl(e, t) : t[a + 8], c === Tn || !np(o, !1) ? a = -1 : (s = t[y], a = Ti(c), t = Mi(c, t))); a !== -1;) {
        let u = t[y];
        if (tp(i, a, u.data)) {
            let d = eT(a, t, n, s, o, l);
            if (d !== Ge)
                return d;
        }
        c = t[a + 8], c !== Tn && np(o, t[y].data[a + 8] === l) && tp(i, a, t) ? (s = u, a = Ti(c), t = Mi(c, t)) : a = -1;
    }
} return r; }
function eT(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? De(a) && Pc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = pi(a, s, n, c, l); return u !== null ? jo(t, s, u, a, r) : Ge; }
function pi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && me(p) && p.type === n)
        return c;
} return null; }
function jo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Gt) {
    let a = i;
    if (a.resolving) {
        let p = Ee(s[n]);
        throw Df(p);
    }
    let c = Ni(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ot(a.injectImpl) : null, f = Ya(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && $C(n, s[n], t);
    }
    finally {
        d !== null && Ot(d), Ni(c), a.resolving = !1, Ka();
    }
} return i; }
function tT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(kt) ? e[kt] : void 0; return typeof t == "number" ? t >= 0 ? t & Dh : nT : t; }
function tp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Ch)] & o); }
function np(e, t) { return !(e & 2) && !(e & 1 && t); }
var Mt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return _h(this._tNode, this._lView, t, Ca(o), n); }
};
function nT() { return new Mt(N(), g()); }
function Sh(e) { return qe(() => { let t = e.prototype.constructor, n = t[ft] || Fc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ft] || Fc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Fc(e) { return Ar(e) ? () => { let t = Fc(H(e)); return t && t(); } : Lr(e); }
function oT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !He(s);) {
    let a = wh(i, s, n, o | 2, Ge);
    if (a !== Ge)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Sa];
        if (l) {
            let u = l.get(n, Ge, o);
            if (u !== Ge)
                return u;
        }
        c = bh(s), s = s[mo];
    }
    i = c;
} return r; }
function bh(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ie] : null; }
function Ki(e) { return XC(N(), e); }
var Rh = Bn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => Ki(e) })), op = null;
function Vl() { return op = op || new Di; }
function Ji(e) { return Ah(Vl().parameters(e)); }
function Ah(e) { return e.map(t => rT(t)); }
function rT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Qi || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Zi || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof ch || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof lh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof ah)
            t.token = o.token;
        else if (o instanceof Rh) {
            if (o.attributeName === void 0)
                throw new w(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function iT(e, t) { let n = null, o = null; e.hasOwnProperty(kr) || Object.defineProperty(e, kr, { get: () => (n === null && (n = X({ usage: 0, kind: "injectable", type: e }).compileInjectable(Kf, `ng:///${e.name}/\u0275prov.js`, lT(e, t))), n) }), e.hasOwnProperty(ft) || Object.defineProperty(e, ft, { get: () => { if (o === null) {
        let r = X({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Kf, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Ji(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var sT = ya({ provide: String, useValue: ya });
function rp(e) { return e.useClass !== void 0; }
function aT(e) { return sT in e; }
function ip(e) { return e.useFactory !== void 0; }
function cT(e) { return e.useExisting !== void 0; }
function lT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (rp(n) || ip(n)) && n.deps !== void 0 && (o.deps = Ah(n.deps)), rp(n) ? o.useClass = n.useClass : aT(n) ? o.useValue = n.useValue : ip(n) ? o.useFactory = n.useFactory : cT(n) && (o.useExisting = n.useExisting), o; }
var uT = er("Injectable", void 0, void 0, void 0, (e, t) => iT(e, t));
function dT() { return Un(N(), g()); }
function Un(e, t) { return new tr(Ce(e, t)); }
var tr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = dT;
} return e; })();
function kh(e) { return e instanceof tr ? e.nativeElement : e; }
function fT() { return this._results[Symbol.iterator](); }
var wi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Pl; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Ae(t); (this._changesDetected = !Tf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = fT;
}, $n = "ngSkipHydration", pT = "ngskiphydration";
function Hl(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === pT)
        return !0;
} return !1; }
function Oh(e) { return e.hasAttribute($n); }
function Vo(e) { return (e.flags & 128) === 128; }
function Gn(e) { if (Vo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Vo(e) || Hl(t))
        return !0;
    t = t.parent;
} return !1; }
function xh(e) { return Vo(e) || Hl(e) || Gn(e); }
var Xi = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(Xi || {}), es = new Map, hT = 0;
function gT() { return hT++; }
function mT(e) { es.set(e[cn], e); }
function Ph(e) { return es.get(e) || null; }
function jc(e) { es.delete(e[cn]); }
function yT() { return es; }
var Si = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Ph(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = hi(e); if (t) {
    if (Y(t)) {
        let n = t, o, r, i;
        if (Fh(e)) {
            if (o = IT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (vT(e)) {
            if (o = DT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = jh(o, n);
        }
        else if (o = ap(n, e), o == -1)
            return null;
        let s = k(n[o]), a = hi(s), c = a && !Array.isArray(a) ? a : sp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Se(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Se(i[l], c);
        }
        Se(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = hi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = ap(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = sp(i, s, a);
                Se(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function sp(e, t, n) { return new Si(e[cn], t, n); }
var Vc = "__ngContext__";
function Se(e, t) { Y(t) ? (e[Vc] = t[cn], mT(t)) : e[Vc] = t; }
function hi(e) { let t = e[Vc]; return typeof t == "number" ? Ph(t) : t || null; }
function Lh(e) { let t = hi(e); return t ? Y(t) ? t : t.lView : null; }
function Fh(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function vT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function ap(e, t) { let n = e[y]; for (let o = E; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function ET(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function IT(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (le(r, e)[F] === t)
            return r;
    }
else if (le(E, e)[F] === t)
    return E; return -1; }
function DT(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = ET(n);
} return -1; }
function jh(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Fh(i) || o.push(i);
} return o; }
function CT(e, t) { let n = t[y].data[e]; return De(n) ? t[n.directiveStart + n.componentOffset] : null; }
function TT(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Vh(e) { return Bh(e[gt]); }
function Hh(e) { return Bh(e[re]); }
function Bh(e) { for (; e !== null && !K(e);)
    e = e[re]; return e; }
function cp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = CT(t.nodeIndex, n);
} return t.component; }
function MT(e) { xT(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function NT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = jt(n));)
    n = o; return He(n) ? null : n[F]; }
function _T(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return Te.NULL; let o = n[y].data[t.nodeIndex]; return new Mt(o, n); }
function wT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    OT(l) && (l = l.type), i.push(l);
} return i; }
function ST(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = jh(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Uh = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Uh || {}), $h = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })($h || {}), Gh = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Gh || {});
function bT(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = TT(n, t.nodeIndex);
} return t.localRefs || {}; }
function RT(e) { return ye(e).native; }
function AT(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[xt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(kT), s; }
function kT(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function OT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function xT(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Hc;
function PT(e) { Hc = e; }
function ot() { if (Hc !== void 0)
    return Hc; if (typeof document < "u")
    return document; throw new w(210, !1); }
var rt = new S("", { providedIn: "root", factory: () => LT }), LT = "ng", Bl = new S(""), FT = new S("", { providedIn: "platform", factory: () => "unknown" }), jT = new S(""), VT = new S(""), HT = new S("", { providedIn: "root", factory: () => ot().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), qh = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, BT = new S("", { providedIn: "root", factory: () => qh });
function UT(e) { return e; }
function $T() { let e = new Kt; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = Ul(ot(), D(rt))), e; }
var Kt = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: $T });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function Ul(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var $l = "h", Gl = "b", Wh = "f", zh = "n", nr = "e", ts = "t", qn = "c", or = "x", Xe = "r", ns = "i", rr = "n", Wn = "d", os = "l", rs = "di", ir = "s", ql = "p", is = "t", Jt = new S(""), Qh = !1, Wl = new S("", { providedIn: "root", factory: () => Qh }), zl = new S(""), ss = new S(""), Ql = !1, Zl = new S(""), sr = new S("", { providedIn: "root", factory: () => new Map });
var bi = { passive: !0, capture: !0 }, fc = new WeakMap, pc = new WeakMap, En = new WeakMap, Ri = ["click", "keydown"], Ai = ["mouseenter", "mouseover", "focusin"], hn = null, hc = 0, Ho = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Zh(e, t) { let n = pc.get(e); if (!n) {
    n = new Ho, pc.set(e, n);
    for (let o of Ri)
        e.addEventListener(o, n.listener, bi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    pc.delete(e);
    for (let i of Ri)
        e.removeEventListener(i, r, bi);
} }; }
function Yh(e, t) { let n = fc.get(e); if (!n) {
    n = new Ho, fc.set(e, n);
    for (let o of Ai)
        e.addEventListener(o, n.listener, bi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ai)
        e.removeEventListener(i, r, bi);
    fc.delete(e);
} }; }
function GT() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && En.has(t.target) && En.get(t.target).listener(); }); }
function qT(e, t, n) { let o = En.get(e); return hn = hn || n(), o || (o = new Ho, hn.observe(e), En.set(e, o), hc++), o.callbacks.add(t), () => { En.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (hn?.unobserve(e), En.delete(e), hc--), hc === 0 && (hn?.disconnect(), hn = null)); }; }
var zn = "ngb";
function Yl(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(pn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(pn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(zn, i); }
var Kh = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Kl = (e, t) => { let n = e, o = n.getAttribute(zn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function WT(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(Jl);
} }
var Jl = e => { e.removeAttribute(pn.JSACTION), e.removeAttribute(zn), e.__jsaction_fns = void 0; }, Xl = new S("", { providedIn: "root", factory: () => ({}) });
function eu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Bc = new Map;
function Jh(e, t) { return Bc.set(e, t), () => Bc.delete(e); }
var lp = !1, Xh = (e, t, n, o) => { };
function zT(e, t, n, o) { Xh(e, t, n, o); }
function eg() { lp || (Xh = (e, t, n, o) => { let r = e[Q].get(rt); Bc.get(r)?.(t, n, o); }, lp = !0); }
var it = new S(""), tg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(sr);
    contract = D(Xl);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { WT(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = j({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Qn(e) { return (e.flags & 32) === 32; }
var ng = "__nghData__", as = ng, og = "__nghDeferData__", cs = og;
function rg(e) { return e === ng || e === og; }
var Mn = "ngh", ig = "nghm", sg = () => null;
function QT(e, t, n = !1) { let o = e.getAttribute(Mn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Kt, null, { optional: !0 });
    u !== null && (c = u.get(as, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ls(l, 0, e.nextSibling)), a ? e.setAttribute(Mn, a) : e.removeAttribute(Mn), l; }
function ag() { sg = QT; }
function cg(e, t, n = !1) { return sg(e, t, n); }
function tu(e) { let t = e._lView; return t[y].type === 2 ? null : (He(t) && (t = t[E]), t); }
function ZT(e) { return e.textContent?.replace(/\s/gm, ""); }
function YT(e) { let t = ot(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = ZT(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var lg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(lg || {}), KT = "__ngDebugHydrationInfo__";
function JT(e) { return e[KT] ?? null; }
function ls(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Uc(e, t) { return e.segmentHeads?.[t] ?? null; }
function us(e) { return e.get(Zl, !1, { optional: !0 }); }
function ug(e, t) { let n = e.data, o = n[nr]?.[t] ?? null; return o === null && n[qn]?.[t] && (o = nu(e, t)), o; }
function XT(e, t) { return e.data[nr]?.[t] !== void 0; }
function dg(e, t) { return e.data[qn]?.[t] ?? null; }
function nu(e, t) { let n = dg(e, t) ?? [], o = 0; for (let r of n)
    o += r[Xe] * (r[or] ?? 1); return o; }
function fg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Wn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function ds(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Wn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!fg(e)?.has(t); }
function fs(e, t) { let n = e[te]; return n !== null && !Co() && !Qn(t) && !ds(n, t.index - E); }
function ou(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function pg(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ai), e.has(3) && t.push(...Ri)), t; }
function eM(e, t) { let n = t.get(it), r = t.get(Kt).get(cs, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][ql];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function tM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ai.join(":;"), Ri.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function hg(e, t) { let n = tM(e), o = t.get(sr); for (let r of n)
    Kl(r, o); }
var gg = () => ({});
function nM(e) { let t = e.get(Kt, null, { optional: !0 }); return t !== null ? t.get(cs, {}) : {}; }
function mg() { gg = nM; }
function oM(e) { return gg(e); }
function rM(e) { return typeof e == "object" && e.trigger === 5; }
function iM(e) { return e[is]?.find(n => rM(n))?.delay ?? null; }
function gc(e, t) { return e[is]?.includes(t) ?? !1; }
function sM(e) { return { data: e, hydrate: { idle: gc(e, 0), immediate: gc(e, 1), timer: iM(e), viewport: gc(e, 2) } }; }
function yg(e) { let t = oM(e), n = new Map; for (let o in t)
    n.set(o, sM(t[o])); return n; }
function mc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === ig; }
function up(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function vg(e) { for (let o of e.body.childNodes)
    if (mc(o))
        return; let t = up(e.body.previousSibling); if (mc(t))
    return; let n = up(e.head.lastChild); if (!mc(n))
    throw new w(-507, !1); }
function Eg(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                To(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function $c(e, t, n) { To(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function ru(e, t, n) { if (Ra(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var et = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(et || {}), ri;
function Ig() { if (ri === void 0 && (ri = null, ve.trustedTypes))
    try {
        ri = ve.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ri; }
function Zn(e) { return Ig()?.createHTML(e) || e; }
function aM(e) { return Ig()?.createScriptURL(e) || e; }
var ii;
function iu() { if (ii === void 0 && (ii = null, ve.trustedTypes))
    try {
        ii = ve.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ii; }
function dp(e) { return iu()?.createHTML(e) || e; }
function fp(e) { return iu()?.createScript(e) || e; }
function pp(e) { return iu()?.createScriptURL(e) || e; }
var tt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${br})`; }
}, Gc = class extends tt {
    getTypeName() { return "HTML"; }
}, qc = class extends tt {
    getTypeName() { return "Style"; }
}, Wc = class extends tt {
    getTypeName() { return "Script"; }
}, zc = class extends tt {
    getTypeName() { return "URL"; }
}, Qc = class extends tt {
    getTypeName() { return "ResourceURL"; }
};
function st(e) { return e instanceof tt ? e.changingThisBreaksApplicationSecurity : e; }
function Yn(e, t) { let n = Dg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${br})`);
} return n === t; }
function Dg(e) { return e instanceof tt && e.getTypeName() || null; }
function cM(e) { return new Gc(e); }
function lM(e) { return new qc(e); }
function uM(e) { return new Wc(e); }
function dM(e) { return new zc(e); }
function fM(e) { return new Qc(e); }
function Cg(e) { let t = new Yc(e); return pM() ? new Zc(t) : t; }
var Zc = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Zn(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, Yc = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Zn(t), n; }
};
function pM() { try {
    return !!new window.DOMParser().parseFromString(Zn(""), "text/html");
}
catch {
    return !1;
} }
var hM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ps(e) { return e = String(e), e.match(hM) ? e : "unsafe:" + e; }
function at(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ar(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Tg = at("area,br,col,hr,img,wbr"), Mg = at("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Ng = at("rp,rt"), gM = ar(Ng, Mg), mM = ar(Mg, at("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), yM = ar(Ng, at("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Kc = ar(Tg, mM, yM, gM), su = at("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), vM = at("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), EM = at("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), _g = ar(su, vM, EM), IM = at("script,style,template"), Jc = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = TM(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = CM(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = hp(t).toLowerCase(); if (!Kc.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !IM.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!_g.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        su[a] && (c = ps(c)), this.buf.push(" ", s, '="', gp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = hp(t).toLowerCase(); Kc.hasOwnProperty(n) && !Tg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(gp(t)); }
};
function DM(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function CM(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw wg(t); return t; }
function TM(e) { let t = e.firstChild; if (t && DM(e, t))
    throw wg(t); return t; }
function hp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function wg(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var MM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, NM = /([^\#-~ |!])/g;
function gp(e) { return e.replace(/&/g, "&amp;").replace(MM, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(NM, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var si;
function Sg(e, t) { let n = null; try {
    si = si || Cg(e);
    let o = t ? String(t) : "";
    n = si.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = si.getInertBodyElement(o);
    } while (o !== i);
    let a = new Jc().sanitizeChildren(Xc(n) || n);
    return Zn(a);
}
finally {
    if (n) {
        let o = Xc(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Xc(e) { return "content" in e && _M(e) ? e.content : null; }
function _M(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var Xt = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(Xt || {});
function bg(e) { let t = cr(); return t ? dp(t.sanitize(Xt.HTML, e) || "") : Yn(e, "HTML") ? dp(st(e)) : Sg(ot(), T(e)); }
function Rg(e) { let t = cr(); return t ? t.sanitize(Xt.STYLE, e) || "" : Yn(e, "Style") ? st(e) : T(e); }
function au(e) { let t = cr(); return t ? t.sanitize(Xt.URL, e) || "" : Yn(e, "URL") ? st(e) : ps(T(e)); }
function cu(e) { let t = cr(); if (t)
    return pp(t.sanitize(Xt.RESOURCE_URL, e) || ""); if (Yn(e, "ResourceURL"))
    return pp(st(e)); throw new w(904, !1); }
function Ag(e) { let t = cr(); if (t)
    return fp(t.sanitize(Xt.SCRIPT, e) || ""); if (Yn(e, "Script"))
    return fp(st(e)); throw new w(905, !1); }
function kg(e) { return Zn(e[0]); }
function Og(e) { return aM(e[0]); }
function wM(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? cu : au; }
function xg(e, t, n) { return wM(t, n)(e); }
function cr() { let e = g(); return e && e[Qe].sanitizer; }
var SM = /^>|^->|<!--|-->|--!>|<!-$/g, bM = /(<|>)/g, RM = "\u200B$1\u200B";
function AM(e) { return e.replace(SM, t => t.replace(bM, RM)); }
function kM() { return ze([]); }
var OM = { name: "custom-elements" }, xM = { name: "no-errors-schema" }, Pg = !1;
function PM(e) { Pg = e; }
function LM() { return Pg; }
var Lg = !1;
function FM(e) { Lg = e; }
function jM() { return Lg; }
function Fg(e) { return e.ownerDocument.defaultView; }
function jg(e) { return e.ownerDocument; }
function lu(e) { return e.ownerDocument.body; }
var VM = "\uFFFD";
function In(e) { return e instanceof Function ? e() : e; }
function HM(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Vg = "ng-template";
function BM(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && HM(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (uu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function uu(e) { return e.type === 4 && e.value !== Vg; }
function UM(e, t, n) { let o = e.type === 4 && !n ? Vg : e.value; return t === o; }
function $M(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? WM(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !xe(o) && !xe(c))
            return !1;
        if (s && xe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !UM(e, c, n) || c === "" && t.length === 1) {
                if (xe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !BM(e, r, c, n)) {
                if (xe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = GM(c, r, uu(e), n);
            if (u === -1) {
                if (xe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (xe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return xe(o) || s; }
function xe(e) { return (e & 1) === 0; }
function GM(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return zM(t, e); }
function Hg(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if ($M(e, t[o], n))
        return !0; return !1; }
function qM(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function WM(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Eh(n))
        return t;
} return e.length; }
function zM(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function QM(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function mp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function ZM(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !xe(s) && (t += mp(i, r), r = ""), o = s, i = i || !xe(o);
    n++;
} return r !== "" && (t += mp(i, r)), t; }
function YM(e) { return e.map(ZM).join(","); }
function KM(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!xe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var x = {};
function du(e, t) { return e.createText(t); }
function Bg(e, t, n) { e.setValue(t, n); }
function fu(e, t) { return e.createComment(AM(t)); }
function hs(e, t, n) { return e.createElement(t, n); }
function qt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Ug(e, t, n) { e.appendChild(t, n); }
function yp(e, t, n, o, r) { o !== null ? qt(e, t, n, o, r) : Ug(e, t, n); }
function lr(e, t, n) { e.removeChild(null, t, n); }
function $g(e) { e.textContent = ""; }
function JM(e, t, n) { e.setAttribute(t, "style", n); }
function XM(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Gg(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && zC(e, t, o), r !== null && XM(e, t, r), i !== null && JM(e, t, i); }
function pu(e, t, n, o, r, i, s, a, c, l, u) { let d = E + o, f = d + r, p = eN(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function eN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : x); return n; }
function qg(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = pu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function gs(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[L] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), ka(d), d[W] = d[mo] = e, d[F] = n, d[Qe] = s || e && e[Qe], d[M] = a || e && e[M], d[Q] = c || e && e[Q] || null, d[ie] = i, d[cn] = gT(), d[te] = u, d[Sa] = l, d[Z] = t.type == 2 ? e[Z] : d, d; }
function tN(e, t, n) { let o = Ce(t, e), r = qg(n), i = e[Qe].rendererFactory, s = gu(e, gs(e, r, null, hu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function hu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function ur(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function gu(e, t) { return e[gt] ? e[go][re] = t : e[gt] = t, e[go] = t, t; }
function Wg(e = 1) { zg(_(), g(), ne() + e, !1); }
function zg(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && di(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && fi(t, i, 0, n);
    } It(n); }
var ms = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(ms || {});
function Bo(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & ms.SignalBased) !== 0 && (c = t[i][dt]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : dh(t, c, i, o);
}
finally {
    R(r);
} }
var ki = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(ki || {}), el;
function mu(e, t) { return el(e, t); }
function nN(e) { el === void 0 && (el = e()); }
function Dn(e, t, n, o, r) { if (o != null) {
    let i, s = !1;
    K(o) ? i = o : Y(o) && (s = !0, o = o[L]);
    let a = k(o);
    e === 0 && n !== null ? r == null ? Ug(t, n, a) : qt(t, n, a, r || null, !0) : e === 1 && n !== null ? qt(t, n, a, r || null, !0) : e === 2 ? lr(t, a, s) : e === 3 && t.destroyNode(a), i != null && cN(t, e, i, n, r);
} }
function Qg(e, t) { Zg(e, t), t[L] = null, t[ie] = null; }
function oN(e, t, n, o, r, i) { o[L] = r, o[ie] = t, ys(e, o, n, 1, r, i); }
function Zg(e, t) { t[Qe].changeDetectionScheduler?.notify(9), ys(e, t, t[M], 2, null, null); }
function rN(e) { let t = e[gt]; if (!t)
    return yc(e[y], e); for (; t;) {
    let n = null;
    if (Y(t))
        n = t[gt];
    else {
        let o = t[U];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[re] && t !== e;)
            Y(t) && yc(t[y], t), t = t[W];
        t === null && (t = e), Y(t) && yc(t[y], t), n = t && t[re];
    }
    t = n;
} }
function yu(e, t) { let n = e[Lt], o = n.indexOf(t); n.splice(o, 1); }
function dr(e, t) { if (yt(t))
    return; let n = t[M]; n.destroyNode && ys(e, t, n, 3, null, null), rN(t); }
function yc(e, t) { if (yt(t))
    return; let n = R(null); try {
    t[b] &= -129, t[b] |= 256, t[_e] && ha(t[_e]), sN(e, t), iN(e, t), t[y].type === 1 && t[M].destroy();
    let o = t[mt];
    if (o !== null && K(t[W])) {
        o !== t[W] && yu(o, t);
        let r = t[Ve];
        r !== null && r.detachView(e);
    }
    jc(t);
}
finally {
    R(n);
} }
function iN(e, t) { let n = e.cleanup, o = t[xt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[xt] = null); let r = t[ba]; if (r !== null) {
    t[ba] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[yo]; if (i !== null) {
    t[yo] = null;
    for (let s of i)
        s.destroy();
} }
function sN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Gt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    O(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        O(5, a, c);
                    }
                }
            else {
                O(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    O(5, r, i);
                }
            }
        }
    } }
function vu(e, t, n) { return Yg(e, t.parent, n); }
function Yg(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[L]; if (De(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === et.None || r === et.Emulated)
        return null;
} return Ce(o, n); }
function Kg(e, t, n) { return Xg(e, t, n); }
function Jg(e, t, n) { return e.type & 40 ? Ce(e, n) : null; }
var Xg = Jg, tl;
function em(e, t) { Xg = e, tl = t; }
function Eu(e, t, n, o) { let r = vu(e, o, t), i = t[M], s = o.parent || t[ie], a = Kg(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            yp(i, r, n[c], a, !1);
    else
        yp(i, r, n, a, !1); tl !== void 0 && tl(i, o, t, n, r); }
function $t(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return Ce(t, e);
    if (n & 4)
        return nl(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return $t(e, o);
        {
            let r = e[t.index];
            return K(r) ? nl(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return $t(e, t.next);
        if (n & 32)
            return mu(t, e)() || k(e[t.index]);
        {
            let o = tm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = jt(e[Z]);
                return $t(r, o);
            }
            else
                return $t(e, t.next);
        }
    }
} return null; }
function tm(e, t) { if (t !== null) {
    let o = e[Z][ie], r = t.projection;
    return o.projection[r];
} return null; }
function nl(e, t) { let n = U + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return $t(o, r);
} return t[ke]; }
function Iu(e, t, n, o, r, i, s) { for (; n != null;) {
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let a = o[n.index], c = n.type;
    if (s && t === 0 && (a && Se(k(a), o), n.flags |= 2), !Qn(n))
        if (c & 8)
            Iu(e, t, n.child, o, r, i, !1), Dn(t, e, r, a, i);
        else if (c & 32) {
            let l = mu(n, o), u;
            for (; u = l();)
                Dn(t, e, r, u, i);
            Dn(t, e, r, a, i);
        }
        else
            c & 16 ? nm(e, t, o, n, r, i) : Dn(t, e, r, a, i);
    n = s ? n.projectionNext : n.next;
} }
function ys(e, t, n, o, r, i) { Iu(n, o, e.firstChild, t, r, i, !1); }
function aN(e, t, n) { let o = t[M], r = vu(e, n, t), i = n.parent || t[ie], s = Kg(i, n, t); nm(o, 0, t, n, r, s); }
function nm(e, t, n, o, r, i) { let s = n[Z], c = s[ie].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Dn(t, e, r, u, i);
    }
else {
    let l = c, u = s[W];
    Vo(o) && (l.flags |= 128), Iu(e, t, l, u, r, i, !0);
} }
function cN(e, t, n, o, r) { let i = n[ke], s = k(n); i !== s && Dn(t, e, o, i, r); for (let a = U; a < n.length; a++) {
    let c = n[a];
    ys(c[y], c, e, t, o, i);
} }
function lN(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : ki.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= ki.Important), e.setStyle(n, o, r, i));
} }
function om(e, t, n, o, r) { let i = ne(), s = o & 2; try {
    It(-1), s && t.length > E && zg(e, t, E, !1), O(s ? 2 : 0, r, n), n(o, r);
}
finally {
    It(i), O(s ? 3 : 1, r, n);
} }
function vs(e, t, n) { gN(e, t, n), (n.flags & 64) === 64 && mN(e, t, n); }
function Kn(e, t, n = Ce) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function uN(e, t, n, o) { let i = o.get(Wl, Qh) || n === et.ShadowDom, s = e.selectRootElement(t, i); return dN(s), s; }
function dN(e) { rm(e); }
var rm = () => null;
function fN(e) { Oh(e) ? $g(e) : YT(e); }
function im() { rm = fN; }
function pN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Du(e, t, n, o, r, i) { let s = t[y]; if (_u(e, s, t, n, o)) {
    De(e) && hN(t, e.index);
    return;
} e.type & 3 && (n = pN(n)), Cu(e, t, n, o, r, i); }
function Cu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = Ce(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function hN(e, t) { let n = le(t, e); n[b] & 16 || (n[b] |= 64); }
function gN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; De(n) && tN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || _i(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = jo(t, e, s, n);
    if (Se(c, t), i !== null && EN(t, s - o, c, a, n, i), me(a)) {
        let l = le(n.index, t);
        l[F] = jo(t, e, s, n);
    }
} }
function mN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = qf(); try {
    It(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Za(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && yN(c, l);
    }
}
finally {
    It(-1), Za(s);
} }
function yN(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Tu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Hg(t, i.selectors, !1) && (o ??= [], me(i) ? o.unshift(i) : o.push(i));
    } return o; }
function vN(e, t, n, o, r, i) { let s = Ce(e, t); Mu(t[M], s, i, e.value, n, o, r); }
function Mu(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? T(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function EN(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Bo(o, n, c, l);
    } }
function Es(e, t, n, o, r) { let i = E + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, Be(e, !0); let c = e.type === 2; return c ? (Gg(t[M], a, e), (Vf() === 0 || ln(e)) && Se(a, t), Hf()) : Se(a, t), Mo() && (!c || !Qn(e)) && Eu(s, t, a, e), e; }
function Is(e) { let t = e; return Ba() ? Ua() : (t = t.parent, Be(t, !1)), t; }
function sm(e, t, n) { return (e === null || me(e)) && (n = Eo(n[t.index])), n[M]; }
function Nu(e, t) { let n = e[Q]; if (!n)
    return; n.get(Dt, null)?.(t); }
function _u(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Bo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Bo(u, l, o, r), a = !0;
    } return a; }
function IN(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Bo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Bo(o, n[s], r, i), l = !0), l; }
function DN(e, t) { let n = le(t, e), o = n[y]; CN(o, n); let r = n[L]; r !== null && n[te] === null && (n[te] = cg(r, n[Q])), O(18), Ds(o, n, n[F]), O(19, n[F]); }
function CN(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ds(e, t, n) { Jr(t); try {
    let o = e.viewQuery;
    o !== null && $c(1, o, n);
    let r = e.template;
    r !== null && om(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[Ve]?.finishViewCreation(e), e.staticContentQueries && Eg(e, t), e.staticViewQueries && $c(2, e.viewQuery, n);
    let i = e.components;
    i !== null && TN(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, Xr();
} }
function TN(e, t) { for (let n = 0; n < t.length; n++)
    DN(e, t[n]); }
function Jn(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = gs(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[mt] = l;
    let u = e[Ve];
    return u !== null && (c[Ve] = u.createEmbeddedView(i)), Ds(i, c, n), c;
}
finally {
    R(r);
} }
function Wt(e, t) { return !t || t.firstChild === null || Vo(e); }
var vp = !1, MN = new S("");
function Rn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), K(i) && Cs(i, o);
    let s = n.type;
    if (s & 8)
        Rn(e, t, n.child, o);
    else if (s & 32) {
        let a = mu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = tm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = jt(t[Z]);
            Rn(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Cs(e, t) { for (let n = U; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && Rn(o[y], o, r, t);
} e[ke] !== e[L] && t.push(e[ke]); }
function am(e) { if (e[Pt] !== null) {
    for (let t of e[Pt])
        t.impl.addSequence(t);
    e[Pt].length = 0;
} }
var cm = [];
function NN(e) { return e[_e] ?? _N(e); }
function _N(e) { let t = cm.pop() ?? Object.create(SN); return t.lView = e, t; }
function wN(e) { e.lView[_e] !== e && (e.lView = null, cm.push(e)); }
var SN = Fe(q({}, pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Wr(e.lView); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function bN(e) { let t = e[_e] ?? Object.create(RN); return t.lView = e, t; }
var RN = Fe(q({}, pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = jt(e.lView); for (; t && !lm(t[y]);)
        t = jt(t); t && Gr(t); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function lm(e) { return e.type !== 2; }
function um(e) { if (e[yo] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[yo])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var AN = 100;
function wu(e, t = 0) { let o = e[Qe].rendererFactory, r = !1; r || o.begin?.(); try {
    kN(e, t);
}
finally {
    r || o.end?.();
} }
function kN(e, t) { let n = qa(); try {
    Wa(!0), ol(e, t);
    let o = 0;
    for (; Do(e);) {
        if (o === AN)
            throw new w(103, !1);
        o++, ol(e, 1);
    }
}
finally {
    Wa(n);
} }
function dm(e, t) { Ga(t ? Qr.Exhaustive : Qr.OnlyDirtyViews); try {
    wu(e);
}
finally {
    Ga(Qr.Off);
} }
function fm(e, t, n, o) { if (yt(t))
    return; let r = t[b], i = !1, s = !1; Jr(t); let a = !0, c = null, l = null; i || (lm(e) ? (l = NN(t), c = co(l)) : gf() === null ? (a = !1, l = bN(t), c = co(l)) : t[_e] && (ha(t[_e]), t[_e] = null)); try {
    ka(t), za(e.bindingStartIndex), n !== null && om(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && di(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && fi(t, p, 0, null), uc(t, 0);
        }
    if (s || ON(t), um(t), pm(t, 0), e.contentQueries !== null && Eg(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && di(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && fi(t, p, 1), uc(t, 1);
        }
    PN(e, t);
    let d = e.components;
    d !== null && gm(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && $c(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && di(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && fi(t, p, 2), uc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[$r]) {
        for (let p of t[$r])
            p();
        t[$r] = null;
    }
    i || (am(t), t[b] &= -73);
}
catch (u) {
    throw i || Wr(t), u;
}
finally {
    l !== null && (wr(l, c), a && wN(l)), Xr();
} }
function pm(e, t) { for (let n = Vh(e); n !== null; n = Hh(n))
    for (let o = U; o < n.length; o++) {
        let r = n[o];
        hm(r, t);
    } }
function ON(e) { for (let t = Vh(e); t !== null; t = Hh(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Lt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Gr(r);
    }
} }
function xN(e, t, n) { O(18); let o = le(t, e); hm(o, n), O(19, o[F]); }
function hm(e, t) { Of(e) && ol(e, t); }
function ol(e, t) { let o = e[y], r = e[b], i = e[_e], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Sr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    fm(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = R(null);
    try {
        um(e), pm(e, 1);
        let c = o.components;
        c !== null && gm(e, c, 1), am(e);
    }
    finally {
        R(a);
    }
} }
function gm(e, t, n) { for (let o = 0; o < t.length; o++)
    xN(e, t[o], n); }
function PN(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                It(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Gf(s, i);
                let c = t[i];
                O(24, c), a(2, c), O(25, c);
            }
        }
    }
    finally {
        It(-1);
    } }
function fr(e, t) { let n = qa() ? 64 : 1088; for (e[Qe].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = jt(e);
    if (He(e) && !o)
        return e;
    e = o;
} return null; }
function mm(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function ym(e, t) { let n = U + t; if (n < e.length)
    return e[n]; }
function Xn(e, t, n, o = !0) { let r = t[y]; if (LN(r, t, e, n), o) {
    let s = nl(n, e), a = t[M], c = a.parentNode(e[ke]);
    c !== null && oN(r, e[ie], a, t, c, s);
} let i = t[te]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Su(e, t) { let n = Uo(e, t); return n !== void 0 && dr(n[y], n), n; }
function Uo(e, t) { if (e.length <= U)
    return; let n = U + t, o = e[n]; if (o) {
    let r = o[mt];
    r !== null && r !== e && yu(r, o), t > 0 && (e[n - 1][re] = o[re]);
    let i = uo(e, U + t);
    Qg(o[y], o);
    let s = i[Ve];
    s !== null && s.detachView(i[y]), o[W] = null, o[re] = null, o[b] &= -129;
} return o; }
function LN(e, t, n, o) { let r = U + o, i = n.length; o > 0 && (n[r - 1][re] = t), o < i - U ? (t[re] = n[r], Ta(n, U + o, t)) : (n.push(t), t[re] = null), t[W] = n; let s = t[mt]; s !== null && n !== s && vm(s, t); let a = t[Ve]; a !== null && a.insertView(e), qr(t), t[b] |= 128; }
function vm(e, t) { let n = e[Lt], o = t[W]; if (Y(o))
    e[b] |= 2;
else {
    let r = o[W][Z];
    t[Z] !== r && (e[b] |= 2);
} n === null ? e[Lt] = [t] : n.push(t); }
var _t = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return Rn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return yt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[W];
        if (K(t)) {
            let n = t[vo], o = n ? n.indexOf(this) : -1;
            o > -1 && (Uo(t, o), uo(n, o));
        }
        this._attachedToViewContainer = !1;
    } dr(this._lView[y], this._lView); }
    onDestroy(t) { zr(this._lView, t); }
    markForCheck() { fr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { qr(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, wu(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = He(this._lView), n = this._lView[mt]; n !== null && !t && yu(n, this._lView), Zg(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = He(this._lView), o = this._lView[mt]; o !== null && !n && vm(o, this._lView), qr(this._lView); }
};
function FN(e) { return Do(e._lView) || !!(e._lView[b] & 64); }
function jN(e) { Gr(e._lView); }
var $o = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = VN;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Jn(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new _t(i); }
} return e; })();
function VN() { return Ts(N(), g()); }
function Ts(e, t) { return e.type & 4 ? new $o(t, e, Un(e, t)) : null; }
var rl = "<-- AT THIS LOCATION";
function HN(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function BN(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${qN(e, t, !1)}

`, r = zN();
    throw new w(-502, n + o + r);
}
function Em(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${WN(e)}

`, o = t + n + QN();
    return new w(-503, o);
}
function UN(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Oi(r)}"`);
    } return t.join(" "); }
var $N = new Set(["ngh", "ng-version", "ng-server-context"]);
function GN(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    $N.has(o.name) || t.push(`${o.name}="${Oi(o.value)}"`);
} return t.join(" "); }
function vc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = UN(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${HN(e.type)})`;
} }
function gi(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = GN(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Oi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Oi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function qN(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + vc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + vc(t) + `
`, r += `  <!-- container -->  ${rl}
`) : r += "  " + vc(t) + `  ${rl}
`, r += `  \u2026
`;
    let i = t.type ? vu(e[y], t, e) : null;
    return i && (r = gi(i, `
` + r)), r;
}
function WN(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + gi(o.previousSibling) + `
`), n += "  " + gi(o) + `  ${rl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = gi(o.parentNode, `
` + n)), n;
}
function zN(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function QN() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function ZN(e) { return e.replace(/\s+/gm, ""); }
function Oi(e, t = 50) { return e ? (e = ZN(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Im(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Jg(e, t, n) : k(n[r]); }
function Dm(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            qt(e, s, l, a, !1);
        }
} }
function en(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = bu(e, t, n, o, r), $f() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = un();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Be(i, !0), i; }
function bu(e, t, n, o, r) { let i = Uf(), s = Ba(), a = s ? i : i && i.parent, c = e.data[t] = KN(e, a, n, t, o, r); return YN(e, c, i, s), c; }
function YN(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function KN(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return Co() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Cm(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Tm(o) || JN(o, t) && XN(o) === null && e_(o, t.index);
    } }
function Tm(e) { return !(e.type & 64); }
function JN(e, t) { return Tm(t) || e.index > t.index; }
function XN(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function e_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (em(Im, Dm), e.insertBeforeIndex = t); }
function bo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function t_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function n_(e, t) { let n = e.insertBeforeIndex; n === null ? (em(Im, Dm), n = e.insertBeforeIndex = [null, t]) : (If(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function o_(e, t, n) { let o = bu(e, n, 64, null, null); return Cm(t, o), o; }
function Ms(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function r_(e) { return e >>> 17; }
function i_(e) { return (e & 131070) >>> 1; }
function s_(e, t, n) { return e | t << 17 | n << 1; }
function Mm(e) { return e === -1; }
function Ru(e, t, n) { e.index = 0; let o = Ms(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function xi(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return Ru(e, o, e.lView), xi(e);
    }
}
else
    return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), xi(e)); }
function a_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Ru(e, n.value, o), xi.bind(null, e); } return t; }
function c_(e, t) { let n = { stack: [], index: -1, lView: t }; return Ru(n, e, t), xi.bind(null, n); }
var l_ = new RegExp(`^(\\d+)*(${Gl}|${$l})*(.*)`);
function u_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function d_(e) { let t = e.match(l_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function f_(e) { return !e.prev && e.parent?.type === 8; }
function Ec(e) { return e.index - E; }
function eo(e, t) { return !(e.type & 144) && !!t[e.index] && Nm(k(t[e.index])); }
function Nm(e) { return !!e && !e.isConnected; }
function _m(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function p_(e, t, n) { let r = e.data[rr]?.[n]; return r ? wm(r, t) : null; }
function pr(e, t, n, o) { let r = Ec(o), i = _m(e, r); if (i === void 0) {
    let s = e.data[rr];
    if (s?.[r])
        i = wm(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (f_(o)) {
            let l = Ec(o.parent);
            i = Uc(e, l);
        }
        else {
            let l = Ce(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Ec(c), d = Uc(e, u);
                if (c.type === 2 && d) {
                    let p = nu(e, u) + 1;
                    i = Ns(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ns(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function h_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Wh:
                n = n.firstChild;
                break;
            case zh:
                n = n.nextSibling;
                break;
        }
} return n; }
function wm(e, t) { let [n, ...o] = d_(e), r; if (n === $l)
    r = t[Z][L];
else if (n === Gl)
    r = lu(t[Z][L]);
else {
    let i = Number(n);
    r = k(t[i + E]);
} return h_(r, o); }
function il(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return g_(e, t); {
    let n = t.parentElement, o = il(e, n), r = il(n.firstChild, t);
    return !o || !r ? null : [...o, Wh, ...r];
} }
function g_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(zh); return o == null ? null : n; }
function Ep(e, t, n) { let o = il(e, t); return o === null ? null : u_(n, o); }
function Sm(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (eo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = $l, i = t[Z][L]) : (r = o.index, i = k(t[r]), s = T(r - E)); let a = k(t[e.index]); if (e.type & 44) {
    let l = $t(t, e);
    l && (a = l);
} let c = Ep(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Ep(l, a, Gl), c === null)
        throw BN(t, e);
} return c; }
function bm(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: m_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function m_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Rm = !1, Am = () => { };
function Au(e) { Rm = e; }
function _s() { return Rm; }
function y_(e, t, n, o) { Am(e, t, n, o); }
function km() { Am = C_; }
function Om(e) { return e = e ?? D(Te), e.get(zl, !1); }
function xm(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = v_(e), t.i18nChildren.set(e, n)), n; }
function v_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = E; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Pm(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && xh(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return sl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function sl(e, t, n, o) { let r = null; for (let i of o) {
    let s = I_(e, t, n, i);
    s && (E_(r, s) && t.disjointNodes.add(i.index - E), r = s);
} return r; }
function E_(e, t) { return e && e.nextSibling !== t; }
function I_(e, t, n, o) { let r = k(e[o.index]); if (!r || Nm(r))
    return t.disconnectedNodes.add(o.index - E), null; let i = r; switch (o.kind) {
    case 0: {
        ou(n, i);
        break;
    }
    case 1:
    case 2: {
        sl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), sl(e, t, n, o.cases[a]);
        }
        break;
    }
} return D_(e, o); }
function D_(e, t) { let o = e[y].data[t.index]; return Yi(o) ? $t(e, o) : t.kind === 3 ? c_(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function Vt(e, t) { e.currentNode = t; }
function _o(e, t, n) { let o = n.index - E, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Ic(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Dc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function C_(e, t, n, o) { let r = e[te]; if (!r || !_s() || n && (xh(n) || ds(r, n.index - E)))
    return; let i = e[y], s = i.data[t]; function a() { if (Mm(o)) {
    let p = pr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = fg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[os]?.[t - E] ?? [], f = r.dehydratedIcuData ??= new Map; gn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function gn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = p_(e.hydrationInfo, e.lView, r.index - E);
        i && (o = Dc(t, i)), gn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - E))
        return;
    switch (n.kind) {
        case 0: {
            let o = _o(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            gn(e, Dc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = _o(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - E, { hydrationInfo: r } = e, i = ug(r, o);
            switch (n.type) {
                case 0: {
                    let s = _o(e, t, n);
                    if (XT(r, o)) {
                        gn(e, t, n.children);
                        let a = Ic(t, 1);
                        Vt(t, a);
                    }
                    else if (gn(e, Dc(t, t.currentNode?.firstChild ?? null), n.children), Vt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Ic(t, i + 1);
                        Vt(t, a);
                    }
                    break;
                }
                case 1: {
                    _o(e, t, n);
                    let s = Ic(t, i + 1);
                    Vt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                gn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = _o(e, t, n);
            Vt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Lm = () => { };
function T_(e, t, n) { Lm(e, t, n); }
function Fm() { Lm = M_; }
function M_(e, t, n) { let o = e[te]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function N_(e) { let t = e[te]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[M];
        for (let i of o.values())
            __(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function __(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - E);
    r && lr(e, r, !1);
} }
function ws(e) { let t = e[Ie] ?? [], o = e[W][M], r = []; for (let i of t)
    i.data[rs] !== void 0 ? r.push(i) : jm(i, o); e[Ie] = r; }
function w_(e) { let { lContainer: t } = e, n = t[Ie]; if (n === null)
    return; let r = t[W][M]; for (let i of n)
    jm(i, r); }
function jm(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Xe];
    for (; n < r;) {
        let i = o.nextSibling;
        lr(t, o, !1), o = i, n++;
    }
} }
function Ss(e) { ws(e); let t = e[L]; Y(t) && Pi(t); for (let n = U; n < e.length; n++)
    Pi(e[n]); }
function Pi(e) { N_(e); let t = e[y]; for (let n = E; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Ss(o);
    }
    else
        Y(e[n]) && Pi(e[n]); }
function ku(e) { let t = e._views; for (let n of t) {
    let o = tu(n);
    o !== null && o[L] !== null && (Y(o) ? Pi(o) : Ss(o));
} }
function S_(e, t, n, o) { e !== null && (n.cleanup(t), Ss(e.lContainer), ku(o)); }
function b_(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[or] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Xe] > 0 && (i.firstChild = e, e = Ns(o[Xe], e)), n.push(i);
    } return [e, n]; }
var Vm = () => null, Hm = () => null;
function Bm() { Vm = R_, Hm = A_; }
function R_(e, t) { return $m(e, t) ? e[Ie].shift() : (ws(e), null); }
function Go(e, t) { return Vm(e, t); }
function A_(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Go(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && k_(n, t), o; }
function Um(e, t, n) { return Hm(e, t, n); }
function k_(e, t) { let n = t; for (; n;) {
    if (Ip(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Ip(e, n))
        return;
    n = n.next;
} }
function $m(e, t) { let n = e[Ie]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ns] === t; }
function Ip(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && $m(o, n) ? (ws(o), !0) : !1; }
var Gm = class {
}, bs = class {
}, al = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, hr = class {
    static NULL = new al;
}, qo = class {
}, O_ = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => x_();
} return e; })();
function x_() { let e = g(), t = N(), n = le(t.index, e); return (Y(n) ? n : e)[M]; }
var qm = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Ou(e) { return e.ngModule !== void 0; }
function Bt(e) { return !!sn(e); }
function ai(e) { return !!je(e); }
function Dp(e) { return !!Ne(e); }
function Ro(e) { return !!B(e); }
function P_(e) { return B(e) ? "component" : Ne(e) ? "directive" : je(e) ? "pipe" : "type"; }
function L_(e, t) { if (Ar(e) && (e = H(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ee(t)}", to return a standalone entity or NgModule but got "${Ee(e) || e}".`); if (sn(e) == null) {
    let n = B(e) || Ne(e) || je(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ee(e)}" ${P_(e)}, imported from "${Ee(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw Ou(e) ? new Error(`A module with providers was imported from "${Ee(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ee(e)}" type, imported from "${Ee(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var cl = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = sn(t);
            if (n?.declarations)
                for (let o of In(n.declarations))
                    Ro(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = B(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Bt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Vr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of In(n.imports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            Tt(i.exported.directives, o.compilation.directives), Tt(i.exported.pipes, o.compilation.pipes);
        }
        else if (ho(r))
            if (Dp(r) || Ro(r))
                o.compilation.directives.add(r);
            else if (ai(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of In(n.declarations)) {
            if (Bt(r) || ho(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            ai(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of In(n.exports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            Tt(i.exported.directives, o.exported.directives), Tt(i.exported.pipes, o.exported.pipes), Tt(i.exported.directives, o.compilation.directives), Tt(i.exported.pipes, o.compilation.pipes);
        }
        else
            ai(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ae(n ?? [])) {
        let i = H(r);
        try {
            L_(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Bt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Tt(s.exported.directives, o.compilation.directives), Tt(s.exported.pipes, o.compilation.pipes);
        }
        else if (ai(i))
            o.compilation.pipes.add(i);
        else if (Dp(i) || Ro(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = B(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Tt(e, t) { for (let n of e)
    t.add(n); }
var An = new cl, mi = {}, Nn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, mi, o); return r !== mi || n === mi ? r : this.parentInjector.get(t, n, o); }
};
function Li(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Rr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Rr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function to(e, t = 0) { let n = g(); if (n === null)
    return Re(e, t); let o = N(); return _h(o, n, H(e), t); }
function Wm() { let e = "invalid"; throw new Error(e); }
function zm(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    V_(e, t, n, a, i, c, l);
} i !== null && o !== null && F_(n, o, i); }
function F_(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function j_(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function V_(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && me(p) && (c = !0, j_(e, n, f)), Lc(_i(n, t), e, p.type);
} q_(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = ur(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = bn(n.mergedAttrs, p.hostAttrs), B_(e, n, t, d, p), G_(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} H_(e, n, i); }
function H_(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Cp(0, t, r, o), Cp(1, t, r, o), Mp(t, o, !1);
    else {
        let i = n.get(r);
        Tp(0, t, i, o), Tp(1, t, i, o), Mp(t, o, !0);
    }
} }
function Cp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Qm(t, i);
    } }
function Tp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Qm(t, s);
    } }
function Qm(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Mp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || uu(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function B_(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Lr(r.type, !0)), s = new Gt(i, me(r), to, null); e.blueprint[o] = s, n[o] = s, U_(e, t, o, ur(e, n, r.hostVars, x), r); }
function U_(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    $_(s) != a && s.push(a), s.push(n, o, i);
} }
function $_(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function G_(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    me(t) && (n[""] = e);
} }
function q_(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function xu(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = se(l, s), d = en(c, e, n, o, u); return i && zm(c, t, d, se(l, a), r), d.mergedAttrs = bn(d.mergedAttrs, d.attrs), d.attrs !== null && Li(d, d.attrs, !1), d.mergedAttrs !== null && Li(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Pu(e, t) { mh(e, t), Ra(t) && e.queries.elementEnd(t); }
function Zm(e, t, n, o, r, i) { let s = t.consts, a = se(s, r), c = en(t, e, n, o, a); if (c.mergedAttrs = bn(c.mergedAttrs, c.attrs), i != null) {
    let l = se(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Li(c, c.attrs, !1), c.mergedAttrs !== null && Li(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Wo(e) { return Rs(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function W_(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Ym(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Rs(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Km(e, t) { let n = Wo(e), o = Wo(t); return n && o ? W_(e, t, Km) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function We(e, t, n) { return e[t] = n; }
function gr(e, t) { return e[t]; }
function G(e, t, n) { if (n === x)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function zt(e, t, n, o) { let r = G(e, t, n); return G(e, t + 1, o) || r; }
function As(e, t, n, o, r) { let i = zt(e, t, n, o); return G(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = zt(e, t, n, o); return zt(e, t + 2, r, i) || s; }
function Ao(e, t, n) { return function o(r) { let i = De(e) ? le(e.index, t) : t; fr(i, 5); let s = t[F], a = Np(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Np(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Np(e, t, n, o) { let r = Yf(null); try {
    return O(6, t, n), n(o) !== !1;
}
catch (i) {
    return Nu(e, i), !1;
}
finally {
    O(7, t, n), Yf(r);
} }
function Jm(e, t, n, o, r, i, s, a) { let c = ln(e), l = !1, u = null; if (!o && c && (u = z_(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = Ce(e, n), f = o ? o(d) : d;
    zT(n, f, i, a);
    let p = r.listen(f, i, a), h = o ? m => o(k(m[e.index])) : e.index;
    Xm(h, t, n, i, a, p, !1);
} return l; }
function z_(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[xt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Xm(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? Ff(t) : null, c = Lf(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Q_(e, t, n, o, r) { let i = Ao(e, t, n), s = Z_(e, t, o, r, i); }
function Z_(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Fi(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Fi(e, t, i, o, o, r)), c; }
function Fi(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); Xm(e.index, a, t, r, i, d, !0); }
var Nt = Symbol("BINDING"), Y_ = { kind: "input", requiredVars: 1 }, K_ = { kind: "output", requiredVars: 0 };
function J_(e, t, n) { let o = g(), r = pe(); if (G(o, r, n)) {
    let i = o[y], s = we(), a = le(s.index, o);
    fr(a, 1);
    let c = i.directiveRegistry[e], l = IN(s, i, o, c, t, n);
} }
function ey(e, t) { let n = { [Nt]: Y_, update: () => J_(n.targetIdx, e, t()) }; return n; }
function ty(e, t) { let n = { [Nt]: K_, create: () => { let o = g(), r = N(), s = o[y].directiveRegistry[n.targetIdx]; Q_(r, o, t, s, e); } }; return n; }
function X_(e, t) { let n = ey(e, t), o = ty(e + "Change", i => t.set(i)); return { [Nt]: { kind: "twoWay", requiredVars: n[Nt].requiredVars + o[Nt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var ji = class extends hr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = B(t); return new wt(n, this.ngModule); }
};
function ew(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & ms.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function tw(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function nw(e, t, n) { let o = t instanceof ht ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new Nn(n, o) : n; }
function ow(e) { let t = e.get(qo, null); if (t === null)
    throw new w(407, !1); let n = e.get(qm, null), o = e.get(Ze, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function rw(e, t) { let n = (e.selectors[0][0] || "div").toLowerCase(); return hs(t, n, n === "svg" ? bf : n === "math" ? Rf : null); }
var wt = class extends bs {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= ew(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= tw(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = YM(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { O(22); let a = R(null); try {
        let c = this.componentDef, l = iw(o, c, s, i), u = nw(c, r || this.ngModule, t), d = ow(u), f = d.rendererFactory.createRenderer(null, c), p = o ? uN(f, o, c.encapsulation, u) : rw(c, f), h = s?.some(_p) || i?.some(I => typeof I != "function" && I.bindings.some(_p)), m = gs(null, l, null, 512 | hu(c), null, null, d, f, u, null, cg(p, u, !0));
        m[E] = p, Jr(m);
        let v = null;
        try {
            let I = xu(E, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            p && (Gg(f, p, I), Se(p, m)), vs(l, m, I), ru(l, I, m), Pu(l, I), n !== void 0 && aw(I, this.ngContentSelectors, n), v = le(I.index, m), m[F] = v[F], Ds(l, m, null);
        }
        catch (I) {
            throw v !== null && jc(v), jc(m), I;
        }
        finally {
            O(23), Xr();
        }
        return new Vi(this.componentType, m, !!h);
    }
    finally {
        R(a);
    } }
};
function iw(e, t, n, o) { let r = e ? ["ng-version", "20.1.3"] : KM(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Nt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Nt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ne(d);
        c.push(f);
    } return pu(0, null, sw(i, s), 1, a, c, null, null, null, [r], null); }
function sw(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function _p(e) { let t = e[Nt].kind; return t === "input" || t === "twoWay"; }
var Vi = class extends Gm {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = vt(n[y], E), this.location = Un(this._tNode, n), this.instance = le(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new _t(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = _u(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = le(o.index, r); fr(s, 1); }
    get injector() { return new Mt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function aw(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var ks = (() => { class e {
    static __NG_ELEMENT_ID__ = cw;
} return e; })();
function cw() { let e = N(); return oy(e, g()); }
var lw = ks, ny = class extends lw {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Un(this._hostTNode, this._hostLView); }
    get injector() { return new Mt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = jl(this._hostTNode, this._hostLView); if (Ih(t)) {
        let n = Mi(t, this._hostLView), o = Ti(t), r = n[y].data[o + 8];
        return new Mt(r, n);
    }
    else
        return new Mt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = wp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - U; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Go(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Wt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !wo(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new wt(B(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let I = (c ? d : this.parentInjector).get(ht, null);
        I && (i = I);
    } let f = B(u.componentType ?? {}), p = Go(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, Wt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (xf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[W], l = new ny(c, c[ie], c[W]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Xn(s, r, i, o), t.attachToViewContainerRef(), Ta(Cc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = wp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Uo(this._lContainer, n); o && (uo(Cc(this._lContainer), n), dr(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Uo(this._lContainer, n); return o && uo(Cc(this._lContainer), n) != null ? new _t(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function wp(e) { return e[vo]; }
function Cc(e) { return e[vo] || (e[vo] = []); }
function oy(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = mm(o, t, null, e), t[e.index] = n, gu(t, n)), ry(n, t, e, o), new ny(n, e, t); }
function uw(e, t) { let n = e[M], o = n.createComment(""), r = Ce(t, e), i = n.parentNode(r); return qt(n, i, o, n.nextSibling(r), !1), o; }
var ry = sy, Lu = () => !1;
function iy(e, t, n) { return Lu(e, t, n); }
function sy(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = uw(t, n), e[ke] = r; }
function dw(e, t, n) { if (e[ke] && e[Ie])
    return !0; let o = n[te], r = t.index - E; if (!o || Gn(t) || ds(o, r))
    return !1; let s = Uc(o, r), a = o.data[qn]?.[r], [c, l] = b_(s, a); return e[ke] = c, e[Ie] = l, !0; }
function fw(e, t, n, o) { Lu(e, n, t) || sy(e, t, n, o); }
function ay() { ry = fw, Lu = dw; }
var ll = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, ul = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        ju(t, n).matches !== null && this.queries[n].setDirty(); }
}, Hi = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = yw(t) : this.predicate = t; }
}, dl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, fl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, pw(n, i)), this.matchTNodeWithReadOption(t, n, pi(n, t, i, !1, !1));
        }
    else
        o === $o ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, pi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === tr || r === ks || r === $o && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = pi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function pw(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function hw(e, t) { return e.type & 11 ? Un(e, t) : e.type & 4 ? Ts(e, t) : null; }
function gw(e, t, n, o) { return n === -1 ? hw(t, e) : n === -2 ? mw(e, t, o) : jo(e, e[y], n, t); }
function mw(e, t, n) { if (n === tr)
    return Un(t, e); if (n === $o)
    return Ts(t, e); if (n === ks)
    return oy(t, e); }
function cy(e, t, n, o) { let r = t[Ve].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(gw(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function pl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = cy(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = U; d < u.length; d++) {
                let f = u[d];
                f[mt] === f[W] && pl(f[y], f, l, o);
            }
            if (u[Lt] !== null) {
                let d = u[Lt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    pl(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function Fu(e, t) { return e[Ve].queries[t].queryList; }
function ly(e, t, n) { let o = new wi((n & 4) === 4); return jf(e, t, o, o.destroy), (t[Ve] ??= new ul).queries.push(new ll(o)) - 1; }
function uy(e, t, n) { let o = _(); return o.firstCreatePass && (fy(o, new Hi(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), ly(o, g(), t); }
function dy(e, t, n, o) { let r = _(); if (r.firstCreatePass) {
    let i = N();
    fy(r, new Hi(t, n, o), i.index), vw(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return ly(r, g(), n); }
function yw(e) { return e.split(",").map(t => t.trim()); }
function fy(e, t, n) { e.queries === null && (e.queries = new dl), e.queries.track(new fl(t, n)); }
function vw(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function ju(e, t) { return e.queries.getByIndex(t); }
function py(e, t) { let n = e[y], o = ju(n, t); return o.crossesNgTemplate ? pl(n, e, t, []) : cy(n, e, o, t); }
function Vu(e, t, n) { let o, r = mf(() => { o._dirtyCounter(); let i = Ew(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[dt], o._dirtyCounter = oc(0), o._flatValue = void 0, r; }
function Hu(e) { return Vu(!0, !1, e); }
function Bu(e) { return Vu(!0, !0, e); }
function Uu(e) { return Vu(!1, !1, e); }
function hy(e, t) { let n = e[dt]; n._lView = g(), n._queryIndex = t, n._queryList = Fu(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function Ew(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : P; let r = Fu(n, o), i = py(n, o); return r.reset(i, kh), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function gy(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(Tw));
} return i; } return kn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => Mw(i)); t.push(c); }), yy(), Promise.all(t).then(() => { }); }
var kn = new Map, zo = new Set;
function Iw(e, t) { my(t) && (kn.set(e, t), zo.add(e)); }
function Dw(e) { return zo.has(e); }
function my(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function yy() { let e = kn; return kn = new Map, e; }
function Cw(e) { zo.clear(), e.forEach((t, n) => zo.add(n)), kn = e; }
function vy() { return kn.size === 0; }
function Tw(e) { return typeof e == "string" ? e : e.text(); }
function Mw(e) { zo.delete(e); }
var hl = new Map, Ey = !0;
function Nw(e, t, n) { if (t && t !== n && Ey)
    throw new Error(`Duplicate module registered for ${e} - ${nn(t)} vs ${nn(t.name)}`); }
function $u(e, t) { let n = hl.get(t) || null; Nw(t, n, e), hl.set(t, e); }
function Gu(e) { return hl.get(e); }
function _w(e) { Ey = !e; }
function Iy(e, t, n) { let o = g(), r = we(), i = Ce(r, o); if (r.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = Zn(""), lr(o[M], s);
    let a = !1;
    throw new w(-910, a);
} return e; }
var Sp = new Set;
function ae(e) { Sp.has(e) || (Sp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var On = class {
}, Dy = class {
};
function Cy(e, t) { return new xn(e, t ?? null, []); }
var ww = Cy, xn = class extends On {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new ji(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = sn(t); this._bootstrapComponents = In(i.bootstrap), this._r3Injector = zf(t, n, [{ provide: On, useValue: this }, { provide: hr, useValue: this.componentFactoryResolver }, ...o], nn(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Pn = class extends Dy {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new xn(this.moduleType, t, []); }
};
function Ty(e, t, n) { return new xn(e, t, n, !1); }
var Qo = class extends On {
    injector;
    componentFactoryResolver = new ji(this);
    instance = null;
    constructor(t) { super(); let n = new _a([...t.providers, { provide: On, useValue: this }, { provide: hr, useValue: this.componentFactoryResolver }], t.parent || Br(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function qu(e, t, n = null) { return new Qo({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var Sw = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Na(!1, n.type), r = o.length > 0 ? qu([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e(Re(ht)) });
} return e; })();
function My(e) { return qe(() => { let t = Sy(e), n = Fe(q({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Xi.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(Sw).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || et.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && ae("NgStandalone"), by(n); let o = e.dependencies; return n.directiveDefs = Bi(o, Ny), n.pipeDefs = Bi(o, je), n.id = kw(n), n; }); }
function Ny(e) { return B(e) || Ne(e); }
function Wu(e) { return qe(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function bw(e, t) { if (e == null)
    return Me; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = ms.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function Rw(e) { if (e == null)
    return Me; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function _y(e) { return qe(() => { let t = Sy(e); return by(t), t; }); }
function wy(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function Sy(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Me, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: bw(e.inputs, t), outputs: Rw(e.outputs), debugInfo: null }; }
function by(e) { e.features?.forEach(t => t(e)); }
function Bi(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var Aw = new Map;
function kw(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function Ry(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function zu(e) { let t = Ry(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (me(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new w(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Tc(e.inputs), s.declaredInputs = Tc(e.declaredInputs), s.outputs = Tc(e.outputs);
            let a = r.hostBindings;
            a && Fw(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && Pw(e, c), l && Lw(e, l), Ow(e, r), Ef(e.outputs, r.outputs), me(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === zu && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} xw(o); }
function Ow(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function xw(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = bn(r.hostAttrs, n = bn(n, r.hostAttrs));
} }
function Tc(e) { return e === Me ? {} : e === P ? [] : e; }
function Pw(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function Lw(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function Fw(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var jw = ["providersResolver"], Vw = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function Ay(e) { let t = Ry(e.type), n; me(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of jw)
    o[r] = n[r]; if (me(n))
    for (let r of Vw)
        o[r] = n[r]; }
function ky(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = Hw, n.hostDirectives = o ? e.map(gl) : [e]) : o ? n.hostDirectives.unshift(...e.map(gl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function Hw(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, Oy(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && me(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function Oy(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                bp(gl(i), t, n);
        }
        else
            bp(o, t, n); }
function bp(e, t, n) { let o = Ne(e.directive); Bw(o.declaredInputs, e.inputs), Oy(o, t, n), n.set(o, e), t.push(o); }
function gl(e) { return typeof e == "function" ? { directive: H(e), inputs: Me, outputs: Me } : { directive: H(e.directive), inputs: Rp(e.inputs), outputs: Rp(e.outputs) }; }
function Rp(e) { if (e === void 0 || e.length === 0)
    return Me; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function Bw(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function xy(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = bn(e.mergedAttrs, e.attrs);
    let u = e.tView = pu(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Be(e, !1); let c = Py(n, t, e, o); Mo() && Eu(n, t, c, e), Se(c, t); let l = mm(c, t, c, e); t[o + E] = l, gu(t, l), iy(l, e, t); }
function Uw(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; return t.firstCreatePass ? (f = en(t, d, 4, s || null, a || null), Zr() && zm(t, e, f, se(t.consts, l), Tu), mh(t, f)) : f = t.data[d], xy(f, e, t, n, o, r, i, c), ln(f) && vs(t, e, f), l != null && Kn(e, f, u), f; }
function Qt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; if (t.firstCreatePass) {
    if (f = en(t, d, 4, s || null, a || null), l != null) {
        let p = se(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return xy(f, e, t, n, o, r, i, c), l != null && Kn(e, f, u), f; }
function Qu(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = se(l.consts, i); return Uw(c, l, e, t, n, o, r, u, void 0, s, a), Qu; }
function Zu(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = se(l.consts, i); return Qt(c, l, e, t, n, o, r, u, void 0, s, a), Zu; }
var Py = Ly;
function Ly(e, t, n, o) { return Oe(!0), t[M].createComment(""); }
function $w(e, t, n, o) { let r = !fs(t, n); Oe(r); let i = t[te]?.data[ts]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return Ly(e, t); let s = t[te], a = pr(s, e, t, n); ls(s, o, a); let c = nu(s, o); return Ns(c, a); }
function Fy() { Py = $w; }
var J = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(J || {}), Ap = 0, Gw = 1, V = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(V || {}), Zo = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Zo || {}), _n = 0, ct = 1, So = 2, ci = 3, qw = 4, Ww = 5, Os = 6, zw = 7, wn = 8, Qw = 9, Yu = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Yu || {});
function mr(e, t, n) { let o = Vy(e); t[o] === null && (t[o] = []), t[o].push(n); }
function yi(e, t) { let n = Vy(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function jy(e) { yi(1, e), yi(0, e), yi(2, e); }
function Vy(e) { let t = qw; return e === 1 ? t = Ww : e === 2 && (t = Qw), t; }
var xs = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(xs || {}), no = new S(""), Hy = !1, ml = class extends Pl {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, wa() && (this.destroyRef = D(dn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Ct, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof Ll && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, Ke = ml;
function By(e) { let t, n; function o() { e = No; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function kp(e) { return queueMicrotask(() => e()), () => { e = No; }; }
var Ku = "isAngularZone", Ui = Ku + "_ID", Zw = 0, $ = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Ke(!1);
    onMicrotaskEmpty = new Ke(!1);
    onStable = new Ke(!1);
    onError = new Ke(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Hy } = t; if (typeof Zone > "u")
        throw new w(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, Jw(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Ku) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new w(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new w(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, Yw, No, No); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, Yw = {};
function Ju(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function Kw(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { By(() => { e.callbackScheduled = !1, yl(e), e.isCheckStableRunning = !0, Ju(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), yl(e); }
function Jw(e) { let t = () => { Kw(e); }, n = Zw++; e._inner = e._inner.fork({ name: "angular", properties: { [Ku]: !0, [Ui]: n, [Ui + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (Xw(c))
        return o.invokeTask(i, s, a, c); try {
        return Op(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), xp(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Op(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !eS(c) && t(), xp(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, yl(e), Ju(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function yl(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Op(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function xp(e) { e._nesting--, Ju(e); }
var Ln = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new Ke;
    onMicrotaskEmpty = new Ke;
    onStable = new Ke;
    onError = new Ke;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function Xw(e) { return Uy(e, "__ignore_ng_zone__"); }
function eS(e) { return Uy(e, "__scheduler_tick__"); }
function Uy(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function $y(e = "zone.js", t) { return e === "noop" ? new Ln : e === "zone.js" ? new $(t) : e; }
var Ps = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Xu = [0, 1, 2, 3], ed = (() => { class e {
    ngZone = D($);
    scheduler = D(Ze);
    errorHandler = D(ei, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(no, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && O(16), this.executing = !0; for (let o of Xu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && O(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Pt] ??= []).push(n), Wr(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(xs.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Yo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Pt]; t && (this.view[Pt] = t.filter(n => n !== this)); }
};
function Gy(e, t) { let n = t?.injector ?? D(Te); return typeof ngServerMode < "u" && ngServerMode ? Ls : (ae("NgAfterRender"), Wy(e, n, t, !1)); }
function qy(e, t) { let n = t?.injector ?? D(Te); return typeof ngServerMode < "u" && ngServerMode ? Ls : (ae("NgAfterNextRender"), Wy(e, n, t, !0)); }
function tS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Wy(e, t, n, o) { let r = t.get(Ps); r.impl ??= t.get(ed); let i = t.get(no, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(dn) : null, a = t.get(ni, null, { optional: !0 }), c = new Yo(r.impl, tS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Ls = { destroy() { } };
function yr(e) { return e + 1; }
function he(e, t) { let n = e[y], o = yr(t.index); return e[o]; }
function nS(e, t, n) { let o = e[y], r = yr(t); e[r] = n; }
function oe(e, t) { let n = yr(t.index); return e.data[n]; }
function oS(e, t, n) { let o = yr(t); e.data[o] = n; }
function rS(e, t, n) { let o = t[y], r = oe(o, n); switch (e) {
    case V.Complete: return r.primaryTmplIndex;
    case V.Loading: return r.loadingTmplIndex;
    case V.Error: return r.errorTmplIndex;
    case V.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function vl(e, t) { return t === V.Placeholder ? e.placeholderBlockConfig?.[Ap] ?? null : t === V.Loading ? e.loadingBlockConfig?.[Ap] ?? null : null; }
function zy(e) { return e.loadingBlockConfig?.[Gw] ?? null; }
function Pp(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function iS(e, t) { let n = t.primaryTmplIndex + E; return vt(e, n); }
function Qy(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Zy(e, t) { let n = null, o = yr(t.index); return E < o && o < e.bindingStartIndex && (n = oe(e, t)), !!n && Qy(n); }
function td(e, t, n) { let o = n.get($); return qT(e, () => o.run(t), () => o.runOutsideAngular(() => GT())); }
function sS(e, t, n) { return n == null ? e : n >= 0 ? Pf(n, e) : e[t.index][U] ?? null; }
function aS(e, t) { return Ft(E + t, e); }
function oo(e, t, n, o, r, i, s) { let a = e[Q], c = a.get($), l; function u() { if (yt(e)) {
    l.destroy();
    return;
} let d = he(e, t), f = d[ct]; if (f !== Zo.Initial && f !== V.Placeholder) {
    l.destroy();
    return;
} let p = sS(e, t, o); if (!p || (l.destroy(), yt(p)))
    return; let h = aS(p, n), m = r(h, () => { c.run(() => { e !== p && Oa(p, m), i(); }); }, a); e !== p && zr(p, m), mr(s, d, m); } l = Gy({ read: u }, { injector: a }); }
function Fs(e, t) { let n = t.get(uS), o = () => n.remove(e); return n.add(e), o; }
var cS = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, lS = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, uS = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D($);
    requestIdleCallbackFn = cS().bind(globalThis);
    cancelIdleCallbackFn = lS().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function js(e) { return (t, n) => Yy(e, t, n); }
function Yy(e, t, n) { let o = n.get(Ky), r = n.get($), i = () => o.remove(t); return o.add(e, t, r), i; }
var Ky = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Mf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Ma(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Ma(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), dS = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? qu(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), fS = new S("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Jy = new S("");
function Mc(e, t, n) { return e.get(dS).getOrCreateInjector(t, e, n, ""); }
function pS(e, t, n) { if (e instanceof Nn) {
    let r = e.injector, i = e.parentInjector, s = Mc(i, t, n);
    return new Nn(r, s);
} let o = e.get(ht); if (o !== e) {
    let r = Mc(o, t, n);
    return new Nn(e, r);
} return Mc(e, t, n); }
function Je(e, t, n, o = !1) { let r = n[W], i = r[y]; if (yt(r))
    return; let s = he(r, t), a = s[ct], c = s[zw]; if (!(c !== null && e < c) && Fp(a, e) && Fp(s[_n] ?? -1, e)) {
    let l = oe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (zy(l) !== null || vl(l, V.Loading) !== null || vl(l, V.Placeholder)) ? El : Xy;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Nu(r, f);
    }
} }
function hS(e, t) { let n = e[Ie]?.findIndex(r => r.data[ir] === t[ct]) ?? -1; return { dehydratedView: n > -1 ? e[Ie][n] : null, dehydratedViewIx: n }; }
function Xy(e, t, n, o, r) { O(20); let i = rS(e, r, o); if (i !== null) {
    t[ct] = e;
    let s = r[y], a = i + E, c = vt(s, a), l = 0;
    Su(n, l);
    let u;
    if (e === V.Complete) {
        let h = oe(s, o), m = h.providers;
        m && m.length > 0 && (u = pS(r[Q], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = hS(n, t), p = Jn(r, c, null, { injector: u, dehydratedView: d });
    if (Xn(n, p, l, Wt(c, d)), fr(p, 2), f > -1 && n[Ie]?.splice(f, 1), (e === V.Complete || e === V.Error) && Array.isArray(t[wn])) {
        for (let h of t[wn])
            h();
        t[wn] = null;
    }
} O(21); }
function gS(e, t, n, o, r) { let i = Date.now(), s = r[y], a = oe(s, o); if (t[So] === null || t[So] <= i) {
    t[So] = null;
    let c = zy(a), l = t[ci] !== null;
    if (e === V.Loading && c !== null && !l) {
        t[_n] = e;
        let u = Lp(c, t, o, n, r);
        t[ci] = u;
    }
    else {
        e > V.Loading && l && (t[ci](), t[ci] = null, t[_n] = null), Xy(e, t, n, o, r);
        let u = vl(a, e);
        u !== null && (t[So] = i + u, Lp(u, t, o, n, r));
    }
}
else
    t[_n] = e; }
function Lp(e, t, n, o, r) { return Yy(e, () => { let s = t[_n]; t[So] = null, t[_n] = null, s !== null && Je(s, n, o); }, r[Q]); }
function Fp(e, t) { return e < t; }
function ro(e, t) { let n = e[t.index]; Je(V.Placeholder, t, n); }
function jp(e, t, n) { e.loadingPromise.then(() => { e.loadingState === J.COMPLETE ? Je(V.Complete, t, n) : e.loadingState === J.FAILED && Je(V.Error, t, n); }); }
var El = null;
function ev(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = se(r, n)), o != null && (t.loadingBlockConfig = se(r, o)), El === null && (El = gS); }
var vi = "__ngAsyncComponentMetadataFn__";
function mS(e) { return e[vi] ?? null; }
function tv(e, t, n) { let o = e; return o[vi] = () => Promise.all(t()).then(r => (n(...r), o[vi] = null, r)), o[vi]; }
function nd(e, t, n, o) { return qe(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = q(q({}, r.propDecorators), o) : r.propDecorators = o); }); }
var yS = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Ei(e, t) { let n = e[y]; for (let o = E; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = oe(n, s);
            if (Qy(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        Y(r[L]) && Ei(r[L], t);
        for (let s = U; s < r.length; s++)
            Ei(r[s], t);
    }
    else
        Y(e[o]) && Ei(e[o], t); }
function vS() { return ae("Chrome DevTools profiling"), () => { }; }
var Vp = "ng";
function ES(e, t) { IS(e, t); }
function IS(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = ve;
    n[Vp] ??= {}, n[Vp][e] = t;
} }
var nv = new S(""), ov = new S(""), DS = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, wa() && (this._destroyRef = D(dn, { optional: !0 }) ?? void 0), od || (iv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { $.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Re($), Re(rv), Re(ov)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac });
} return e; })(), rv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return od?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function iv(e) { od = e; }
var od;
function rd(e) { return !!e && typeof e.then == "function"; }
function sv(e) { return !!e && typeof e.subscribe == "function"; }
var id = new S("");
function CS(e) { return ze([{ provide: id, multi: !0, useValue: e }]); }
var sd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(id, { optional: !0 }) ?? [];
    injector = D(Te);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Ur(this.injector, r);
        if (rd(i))
            n.push(i);
        else if (sv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), vr = new S("");
function ad() { yf(() => { let e = ""; throw new w(600, e); }); }
function av(e) { return e.isBoundToModule; }
var Il = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, TS = 10;
function cd(e, t) { return Array.isArray(t) ? t.reduce(cd, e) : q(q({}, e), t); }
var Pe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Dt);
    afterRenderManager = D(Ps);
    zonelessEnabled = D(fn);
    rootEffectScheduler = D(ac);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Pl;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Ct);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(xC(n => !n)); }
    constructor() { D(no, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(ht);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Te.NULL) { return this._injector.get($).run(() => { O(10); let s = n instanceof bs; if (!this._injector.get(sd).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(hr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = av(c) ? void 0 : this._injector.get(On), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(nv, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), ko(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), O(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { O(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(xs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new w(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), O(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(qo, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < TS;)
        O(14), this.synchronizeOnce(), O(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Do(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            wu(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Do(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; ko(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(vr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => ko(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function ko(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function cv(e) { let t = g(), n = N(); if (ro(t, n), !dv(0, t))
    return; let o = t[Q], r = he(t, n), i = e(() => ge(0, t, n), o); mr(0, r, i); }
function lv(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let n = g(), o = n[Q], r = N(), i = n[y], s = oe(i, r); if (s.loadingState === J.NOT_STARTED) {
    let a = he(n, r), l = e(() => Er(s, n, r), o);
    mr(1, a, l);
} }
function uv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[Q], r = he(t, n), i = r[Os], s = e(() => lt(o, i), o); mr(2, r, s); }
function Er(e, t, n) { Vs(e, t, n); }
function Vs(e, t, n) { let o = t[Q], r = t[y]; if (e.loadingState !== J.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = he(t, n), s = iS(r, e); e.loadingState = J.IN_PROGRESS, yi(1, i); let a = e.dependencyResolverFn, c = o.get(sc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = B(h) || Ne(h);
        if (m)
            d.push(m);
        else {
            let v = je(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = J.FAILED, e.errorTmplIndex === null) {
        let h = new w(-750, !1);
        Nu(t, h);
    }
}
else {
    e.loadingState = J.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Pp(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = Na(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Pp(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = J.COMPLETE, c(); }), e.loadingPromise); }
function dv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[Q].get(Jy, null, { optional: !0 })?.behavior === Yu.Manual); }
function ge(e, t, n) { let o = t[y], r = t[n.index]; if (!dv(e, t))
    return; let i = he(t, n), s = oe(o, n); switch (jy(i), s.loadingState) {
    case J.NOT_STARTED:
        Je(V.Loading, n, r), Vs(s, t, n), s.loadingState === J.IN_PROGRESS && jp(s, n, r);
        break;
    case J.IN_PROGRESS:
        Je(V.Loading, n, r), jp(s, n, r);
        break;
    case J.COMPLETE:
        Je(V.Complete, n, r);
        break;
    case J.FAILED:
        Je(V.Error, n, r);
        break;
    default:
} }
function lt(e, t, n) { return ao(this, null, function* () { let o = e.get(it); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = eM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), _S(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Hp(e, s, n) : o.awaitParentBlock(a, () => ao(null, null, function* () { return yield Hp(e, s, n); })); }); }
function Hp(e, t, n) { return ao(this, null, function* () { let o = e.get(it), r = o.hydrating, i = e.get(Ct), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield SS(u), yield wS(e), MS(u)) {
            w_(u), Bp(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        NS(c, t, o), Bp(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), S_(o.get(a), t, o, e.get(Pe)); }); }
function MS(e) { return he(e.lView, e.tNode)[ct] === V.Error; }
function NS(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ss(r.lContainer); }
function Bp(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function _S(e, t) { for (let n of t)
    e.hydrating.set(n, Promise.withResolvers()); }
function wS(e) { return new Promise(t => qy(t, { injector: e })); }
function SS(e) { return ao(this, null, function* () { let { tNode: t, lView: n } = e, o = he(n, t); return new Promise(r => { bS(o, r), ge(2, n, t); }); }); }
function bS(e, t) { Array.isArray(e[wn]) || (e[wn] = []), e[wn].push(t); }
function z(e, t, n) { return e === 0 ? Up(t, n) : e === 2 ? !Up(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function RS(e) { return e != null && (e & 1) === 1; }
function Up(e, t) { let n = e[Q], o = oe(e[y], t), r = us(n), i = RS(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = he(e, t)[Os] !== null; return !(i && a && r); }
function St(e, t) { let n = oe(e, t); return n.hydrateTriggers ??= new Map; }
function fv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Xe], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} AS(e, o), xS(e, s), kS(e, i), OS(e, r); }
function AS(e, t) { for (let n of t) {
    let o = e.get(it), i = Fs(() => lt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function kS(e, t) { if (t.length > 0) {
    let n = e.get(it);
    for (let o of t) {
        let r = td(o.el, () => lt(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function OS(e, t) { for (let n of t) {
    let o = e.get(it), r = () => lt(e, n.blockName), s = js(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function xS(e, t) { for (let n of t)
    lt(e, n.blockName); }
function pv(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = _(), f = e + E, p = Qt(u, d, e, null, 0, 0), h = u[Q]; if (d.firstCreatePass) {
    ae("NgDefer");
    let fe = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: J.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, fe, a, s), oS(d, f, fe);
} let m = u[f]; iy(m, p, u); let v = null, I = null; if (m[Ie]?.length > 0) {
    let fe = m[Ie][0].data;
    I = fe[rs] ?? null, v = fe[ir];
} let A = [null, Zo.Initial, null, null, null, null, I, v, null, null]; nS(u, f, A); let ce = null; I !== null && (ce = h.get(it), ce.add(I, { lView: u, tNode: p, lContainer: m })); let Le = () => { jy(A), I !== null && ce?.cleanup([I]); }; mr(0, A, () => Oa(u, Le)), zr(u, Le); }
function hv(e) { let t = g(), n = we(); if (!z(0, t, n))
    return; let o = pe(); if (G(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = he(t, n)[ct];
        i === !1 && a === Zo.Initial ? ro(t, n) : i === !0 && (a === Zo.Initial || a === V.Placeholder) && ge(0, t, n);
    }
    finally {
        R(r);
    }
} }
function gv(e) { let t = g(), n = we(); if (!z(1, t, n))
    return; let o = pe(); if (G(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[y], a = we(), c = oe(s, a);
        i === !0 && c.loadingState === J.NOT_STARTED && Er(c, t, a);
    }
    finally {
        R(r);
    }
} }
function mv(e) { let t = g(), n = we(); if (!z(2, t, n))
    return; let o = pe(), r = _(); if (St(r, n).set(6, null), G(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ge(2, t, n);
    else {
        let s = t[Q], a = R(null);
        try {
            if (!!e === !0) {
                let u = he(t, n)[Os];
                lt(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function yv() { let e = g(), t = N(); if (!z(2, e, t))
    return; St(_(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function vv() { let e = g(), t = N(); z(0, e, t) && cv(Fs); }
function Ev() { let e = g(), t = N(); z(1, e, t) && lv(Fs); }
function Iv() { let e = g(), t = N(); if (!z(2, e, t))
    return; St(_(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ge(2, e, t) : uv(Fs, e, t); }
function Dv() { let e = g(), t = N(); if (!z(0, e, t))
    return; oe(e[y], t).loadingTmplIndex === null && ro(e, t), ge(0, e, t); }
function Cv() { let e = g(), t = N(); if (!z(1, e, t))
    return; let n = e[y], o = oe(n, t); o.loadingState === J.NOT_STARTED && Vs(o, e, t); }
function Tv() { let e = g(), t = N(); if (!z(2, e, t))
    return; if (St(_(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ge(2, e, t);
else {
    let o = e[Q], i = he(e, t)[Os];
    lt(o, i);
} }
function Mv(e) { let t = g(), n = N(); z(0, t, n) && cv(js(e)); }
function Nv(e) { let t = g(), n = N(); z(1, t, n) && lv(js(e)); }
function _v(e) { let t = g(), n = N(); if (!z(2, t, n))
    return; St(_(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? ge(2, t, n) : uv(js(e), t, n); }
function wv(e, t) { let n = g(), o = N(); z(0, n, o) && (ro(n, o), typeof ngServerMode < "u" && ngServerMode || oo(n, o, e, t, Yh, () => ge(0, n, o), 0)); }
function Sv(e, t) { let n = g(), o = N(); if (!z(1, n, o))
    return; let r = n[y], i = oe(r, o); i.loadingState === J.NOT_STARTED && oo(n, o, e, t, Yh, () => Er(i, n, o), 1); }
function bv() { let e = g(), t = N(); if (!z(2, e, t))
    return; St(_(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function Rv(e, t) { let n = g(), o = N(); z(0, n, o) && (ro(n, o), typeof ngServerMode < "u" && ngServerMode || oo(n, o, e, t, Zh, () => ge(0, n, o), 0)); }
function Av(e, t) { let n = g(), o = N(); if (!z(1, n, o))
    return; let r = n[y], i = oe(r, o); i.loadingState === J.NOT_STARTED && oo(n, o, e, t, Zh, () => Er(i, n, o), 1); }
function kv() { let e = g(), t = N(); if (!z(2, e, t))
    return; St(_(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function Ov(e, t) { let n = g(), o = N(); z(0, n, o) && (ro(n, o), typeof ngServerMode < "u" && ngServerMode || oo(n, o, e, t, td, () => ge(0, n, o), 0)); }
function xv(e, t) { let n = g(), o = N(); if (!z(1, n, o))
    return; let r = n[y], i = oe(r, o); i.loadingState === J.NOT_STARTED && oo(n, o, e, t, td, () => Er(i, n, o), 1); }
function Pv() { let e = g(), t = N(); if (!z(2, e, t))
    return; St(_(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function ld(e, t, n, o) { let r = g(), i = pe(); if (G(r, i, t)) {
    let s = _(), a = we();
    vN(a, r, e, t, n, o);
} return ld; }
function Lv() { return g()[Z][F]; }
var Dl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Nc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function PS(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Nc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Nc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), v = n(s, f), I = n(i, u);
        if (Object.is(I, v)) {
            let A = n(c, p);
            Object.is(A, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new $i, r ??= Gp(e, i, s, n), Cl(e, o, i, I))
            e.updateValue(i, u), i++, s++;
        else if (r.has(I))
            o.set(m, e.detach(i)), s--;
        else {
            let A = e.create(i, t[i]);
            e.attach(i, A), i++, s++;
        }
    }
    for (; i <= c;)
        $p(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Nc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new $i, r ??= Gp(e, i, s, n);
            let p = n(i, d);
            if (Cl(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        $p(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function Cl(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function $p(e, t, n, o, r) { if (Cl(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Gp(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var $i = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function Fv(e, t, n, o, r, i, s, a) { ae("NgControlFlow"); let c = g(), l = _(), u = se(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 256, s, a), Hs; }
function Hs(e, t, n, o, r, i, s, a) { ae("NgControlFlow"); let c = g(), l = _(), u = se(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 512, s, a), Hs; }
function jv(e, t) { ae("NgControlFlow"); let n = g(), o = pe(), r = n[o] !== x ? n[o] : -1, i = r !== -1 ? Gi(n, E + r) : void 0, s = 0; if (G(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && Su(i, s), e !== -1) {
            let c = E + e, l = Gi(n, c), u = _l(n[y], c), d = Um(l, u, n), f = Jn(n, u, t, { dehydratedView: d });
            Xn(l, f, s, Wt(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = ym(i, s);
    a !== void 0 && (a[F] = t);
} }
var Tl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - U; }
};
function Vv(e) { return e; }
function Hv(e, t) { return t; }
var Ml = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function Bv(e, t, n, o, r, i, s, a, c, l, u, d, f) { ae("NgControlFlow"); let p = g(), h = _(), m = c !== void 0, v = g(), I = a ? s.bind(v[Z][F]) : s, A = new Ml(m, I); v[E + e] = A, Qt(p, h, e + 1, t, n, o, r, se(h.consts, i), 256), m && Qt(p, h, e + 2, c, l, u, d, se(h.consts, f), 512); }
var Nl = class extends Dl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - U; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[te]; this.needsIndexUpdate ||= t !== this.length, Xn(this.lContainer, n, t, Wt(this.templateTNode, o)); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, LS(this.lContainer, t); }
    create(t, n) { let o = Go(this.lContainer, this.templateTNode.tView.ssrId), r = Jn(this.hostLView, this.templateTNode, new Tl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { dr(t[y], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return FS(this.lContainer, t); }
};
function Uv(e) { let t = R(null), n = ne(); try {
    let o = g(), r = o[y], i = o[n], s = n + 1, a = Gi(o, s);
    if (i.liveCollection === void 0) {
        let l = _l(r, s);
        i.liveCollection = new Nl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (PS(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = pe(), u = c.length === 0;
        if (G(o, l, u)) {
            let d = n + 2, f = Gi(o, d);
            if (u) {
                let p = _l(r, d), h = Um(f, p, o), m = Jn(o, p, void 0, { dehydratedView: h });
                Xn(f, m, 0, Wt(p, h));
            }
            else
                r.firstUpdatePass && ws(f), Su(f, 0);
        }
    }
}
finally {
    R(t);
} }
function Gi(e, t) { return e[t]; }
function LS(e, t) { return Uo(e, t); }
function FS(e, t) { return ym(e, t); }
function _l(e, t) { return vt(e, t); }
function ud(e, t, n) { let o = g(), r = pe(); if (G(o, r, t)) {
    let i = _(), s = we();
    Du(s, o, e, t, o[M], n);
} return ud; }
function wl(e, t, n, o, r) { _u(t, e, n, r ? "class" : "style", o); }
function Bs(e, t, n, o) { let r = g(), i = r[y], s = e + E, a = i.firstCreatePass ? xu(s, r, 2, t, Tu, Zr(), n, o) : i.data[s]; if (Es(a, r, e, t, pd), ln(a)) {
    let c = r[y];
    vs(c, r, a), ru(c, a, r);
} return o != null && Kn(r, a), Bs; }
function Us() { let e = _(), t = N(), n = Is(t); return e.firstCreatePass && Pu(e, n), Pa(n) && ja(), xa(), n.classesWithoutHost != null && qC(n) && wl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && WC(n) && wl(e, n, g(), n.stylesWithoutHost, !1), Us; }
function dd(e, t, n, o) { return Bs(e, t, n, o), Us(), dd; }
function $s(e, t, n, o) { let r = g(), i = r[y], s = e + E, a = i.firstCreatePass ? Zm(s, i, 2, t, n, o) : i.data[s]; return Es(a, r, e, t, pd), o != null && Kn(r, a), $s; }
function Gs() { let e = N(), t = Is(e); return Pa(t) && ja(), xa(), Gs; }
function fd(e, t, n, o) { return $s(e, t, n, o), Gs(), fd; }
var pd = (e, t, n, o, r) => (Oe(!0), hs(t[M], o, tc()));
function jS(e, t, n, o, r) { let i = !fs(t, n); if (Oe(i), i)
    return hs(t[M], o, tc()); let s = t[te], a = pr(s, e, t, n); return dg(s, r) && ls(s, r, a.nextSibling), s && (Hl(n) || Oh(a)) && De(n) && (Bf(n), $g(a)), a; }
function $v() { pd = jS; }
function qs(e, t, n) { let o = g(), r = o[y], i = e + E, s = r.firstCreatePass ? xu(i, o, 8, "ng-container", Tu, Zr(), t, n) : r.data[i]; if (Es(s, o, e, "ng-container", yd), ln(s)) {
    let a = o[y];
    vs(a, o, s), ru(a, s, o);
} return n != null && Kn(o, s), qs; }
function Ir() { let e = _(), t = N(), n = Is(t); return e.firstCreatePass && Pu(e, n), Ir; }
function hd(e, t, n) { return qs(e, t, n), Ir(), hd; }
function Ws(e, t, n) { let o = g(), r = o[y], i = e + E, s = r.firstCreatePass ? Zm(i, r, 8, "ng-container", t, n) : r.data[i]; return Es(s, o, e, "ng-container", yd), n != null && Kn(o, s), Ws; }
function gd() { let e = N(), t = Is(e); return Ir; }
function md(e, t, n) { return Ws(e, t, n), gd(), md; }
var yd = (e, t, n, o, r) => (Oe(!0), fu(t[M], ""));
function VS(e, t, n, o, r) { let i, s = !fs(t, n); if (Oe(s), s)
    return fu(t[M], ""); let a = t[te], c = pr(a, e, t, n), l = ug(a, r); return ls(a, r, c), i = Ns(l, c), i; }
function Gv() { yd = VS; }
function qv() { return g(); }
function vd(e, t, n) { let o = g(), r = pe(); if (G(o, r, t)) {
    let i = _(), s = we();
    Cu(s, o, e, t, o[M], n);
} return vd; }
function Ed(e, t, n) { let o = g(), r = pe(); if (G(o, r, t)) {
    let i = _(), s = we(), a = Yr(i.data), c = sm(a, s, o);
    Cu(s, o, e, t, c, n);
} return Ed; }
var Ht = void 0;
function HS(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var BS = ["en", [["a", "p"], ["AM", "PM"], Ht], [["AM", "PM"], Ht, Ht], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ht, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ht, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Ht, "{1} 'at' {0}", Ht], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", HS], Sn = {};
function US(e, t, n) { typeof t != "string" && (n = t, t = e[Fn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Sn[t] = e, n && (Sn[t][Fn.ExtraData] = n); }
function Id(e) { let t = qS(e), n = qp(t); if (n)
    return n; let o = t.split("-")[0]; if (n = qp(o), n)
    return n; if (o === "en")
    return BS; throw new w(701, !1); }
function $S(e) { return Id(e)[Fn.CurrencyCode] || null; }
function Wv(e) { return Id(e)[Fn.PluralCase]; }
function qp(e) { return e in Sn || (Sn[e] = ve.ng && ve.ng.common && ve.ng.common.locales && ve.ng.common.locales[e]), Sn[e]; }
function GS() { Sn = {}; }
var Fn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Fn || {});
function qS(e) { return e.toLowerCase().replace(/_/g, "-"); }
var WS = ["zero", "one", "two", "few", "many"];
function zS(e, t) { let n = Wv(t)(parseInt(e, 10)), o = WS[n]; return o !== void 0 ? o : "other"; }
var Dr = "en-US", QS = "USD", zv = { marker: "element" }, Qv = { marker: "ICU" }, Ye = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Ye || {}), Zv = Dr;
function Yv(e) { typeof e == "string" && (Zv = e.toLowerCase().replace(/_/g, "-")); }
function ZS() { return Zv; }
var Ko = 0, Oo = 0;
function YS(e) { e && (Ko = Ko | 1 << Math.min(Oo, 31)), Oo++; }
function KS(e, t, n) { if (Oo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Ue() - Oo - 1;
    eE(e, t, r, i, Ko);
} Ko = 0, Oo = 0; }
function Kv(e, t, n) { let o = e[M]; switch (n) {
    case Node.COMMENT_NODE: return fu(o, t);
    case Node.TEXT_NODE: return du(o, t);
    case Node.ELEMENT_NODE: return hs(o, t, null);
} }
var xo = (e, t, n, o) => (Oe(!0), Kv(e, n, o));
function JS(e, t, n, o) { let r = e[te], i = t - E, s = !_s() || !r || Co() || ds(r, i); return Oe(s), s ? Kv(e, n, o) : _m(r, i); }
function Jv() { xo = JS; }
function XS(e, t, n, o) { let r = e[M]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Ye.COMMENT) === Ye.COMMENT, l = (s & Ye.APPEND_EAGERLY) === Ye.APPEND_EAGERLY, u = s >>> Ye.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = xo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Mo()), l && n !== null && f && qt(r, n, d, o, !1);
} }
function Xv(e, t, n, o) { let r = n[M], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = xo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = r_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = i_(c), v = n[m];
                    qt(r, d, v, u, !1);
                    let I = bo(e, m);
                    if (I !== null && typeof I == "object") {
                        let A = Ms(I, n);
                        A !== null && Xv(e, I.create[A], n, n[I.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Mu(r, Ft(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case Qv:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = xo(n, u, l, Node.COMMENT_NODE);
                    Se(p, n);
                }
                break;
            case zv:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = xo(n, f, d, Node.ELEMENT_NODE);
                    Se(p, n);
                }
                break;
            default:
        }
} }
function eE(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += T(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Mu(t[M], t[d], null, h, f, c, p) : Du(h, t, f, c, t[M], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && Bg(t[M], m, c);
                            break;
                        case 2:
                            eb(e, bo(e, d), t, c);
                            break;
                        case 3:
                            Wp(e, bo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = bo(e, l);
            t[u.currentCaseLViewIndex] < 0 && Wp(e, u, o, t);
        }
    }
    i += a;
} }
function Wp(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Ko;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), eE(e, o, t.update[r], n, i);
} }
function eb(e, t, n, o) { let r = tb(t, o); if (Ms(t, n) !== r && (tE(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && Xv(e, t.create[r], n, s), T_(n, t.anchorIdx, r);
} }
function tE(e, t, n) { let o = Ms(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Ft(s, n);
            a !== null && lr(n[M], a);
        }
        else
            tE(e, bo(e, ~s), n);
    }
} }
function tb(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = zS(t, ZS());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var qi = /�(\d+):?\d*�/gi, nb = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, ob = /�(\d+)�/, nE = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Po = "\uFFFD", rb = /�\/?\*(\d+:\d+)�/gi, ib = /�(\/?[#*]\d+):?\d*�/gi, sb = /\uE500/g;
function ab(e) { return e.replace(sb, " "); }
function cb(e, t, n, o, r, i) { let s = un(), a = [], c = [], l = [[]], u = [[]]; r = fb(r, i); let d = ab(r).split(ib); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Sl(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let I = v;
                I !== "" && lb(u[0], e, s, l[0], a, c, n, I);
            }
            else {
                let I = v;
                if (typeof I != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ce = oE(e, s, l[0], n, a, "", !0).index;
                iE(u[0], e, n, c, t, I, ce);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = E + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Be(un(), !1);
        else {
            let I = o_(e, l[0], v);
            l.unshift([]), Be(I, !0);
            let A = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(A), u.unshift(A.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function oE(e, t, n, o, r, i, s) { let a = ur(e, o, 1, null), c = a << Ye.SHIFT, l = un(); t === l && (l = null), l === null && (c |= Ye.APPEND_EAGERLY), s && (c |= Ye.COMMENT, nN(a_)), r.push(c, i === null ? "" : i); let u = bu(e, a, s ? 32 : 1, i === null ? "" : i, null); Cm(n, u); let d = u.index; return Be(u, !1), l !== null && t !== l && n_(l, d), u; }
function lb(e, t, n, o, r, i, s, a) { let c = a.match(qi), u = oE(t, n, o, s, r, c ? null : a, !1).index; c && Lo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function ub(e, t, n) { let r = N().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (nb.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Lo(i, c, r, a, db(i), null);
        }
    }
    e.data[t] = i;
} }
function Lo(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(qi), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | rE(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function db(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function rE(e) { return 1 << Math.min(e, 31); }
function zp(e) { let t, n = "", o = 0, r = !1, i; for (; (t = rb.exec(e)) !== null;)
    r ? t[0] === `${Po}/*${i}${Po}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function fb(e, t) { if (Mm(t))
    return zp(e); {
    let n = e.indexOf(`:${t}${Po}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Po}\\/\\*\\d+:${t}${Po}`));
    return zp(e.substring(n, o));
} }
function iE(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: ur(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; mb(o, i, s), t_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let I = p.push(v) - 1;
            f[m] = `<!--\uFFFD${I}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = hb(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && yb(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function pb(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(nE, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Sl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Sl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Sl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            nE.test(c) ? o.push(pb(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function hb(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Cg(ot()).getInertBodyElement(a), h = Xc(p) || p; return h ? sE(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function sE(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = ur(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (Kc.hasOwnProperty(v)) {
                _c(i, zv, v, l, h), t.data[h] = v;
                let Le = m.attributes;
                for (let fa = 0; fa < Le.length; fa++) {
                    let At = Le.item(fa), hf = At.name.toLowerCase();
                    !!At.value.match(qi) ? _g.hasOwnProperty(hf) && (su[hf] ? Lo(a, At.value, h, At.name, 0, ps) : Lo(a, At.value, h, At.name, 0, null)) : vb(i, h, At);
                }
                let fe = { kind: 1, index: h, children: [] };
                e.push(fe), f = sE(fe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Qp(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let I = p.textContent || "", A = I.match(qi);
            _c(i, null, A ? "" : I, l, h), Qp(s, h, d), A && (f = Lo(a, I, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ce = ob.exec(p.textContent || "");
            if (ce) {
                let Le = parseInt(ce[1], 10), fe = u[Le];
                _c(i, Qv, "", l, h), iE(e, t, o, r, l, fe, h), gb(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Qp(e, t, n) { n === 0 && e.push(t); }
function gb(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function mb(e, t, n) { e.push(rE(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function yb(e, t, n) { e.push(t, 1, n << 2 | 3); }
function _c(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, s_(0, o, r)); }
function vb(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var Zp = 0, Eb = /\[(�.+?�?)\]/, Ib = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, Db = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, Cb = /{([A-Z0-9_]+)}/g, Tb = /�I18N_EXP_(ICU(_\d+)?)�/g, Mb = /\/\*/, Nb = /\d+\:(\d+)/;
function _b(e, t = {}) { let n = e; if (Eb.test(e)) {
    let o = {}, r = [Zp];
    n = n.replace(Ib, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(Nb), I = v ? parseInt(v[1], 10) : Zp, A = Mb.test(m); l.push([I, A, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(Db, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(Cb, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(Tb, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Dd(e, t, n = -1) { let o = _(), r = g(), i = E + e, s = se(o.consts, t), a = un(); if (o.firstCreatePass && cb(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Z];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[ie] ? null : a, u = Yg(o, l, r), d = a && a.type & 8 ? r[a.index] : null; y_(r, i, a, n), XS(r, c.create, u, d), Qa(!0); }
function Cd() { Qa(!1); }
function aE(e, t, n) { Dd(e, t, n), Cd(); }
function cE(e, t) { let n = _(), o = se(n.consts, t); ub(n, e + E, o); }
function Td(e) { let t = g(); return YS(G(t, pe(), e)), Td; }
function lE(e) { KS(_(), g(), e + E); }
function uE(e, t = {}) { return _b(e, t); }
function Md(e, t, n) { let o = g(), r = _(), i = N(); return wd(r, o, o[M], i, e, t, n), Md; }
function Nd(e, t) { let n = N(), o = g(), r = _(), i = Yr(r.data), s = sm(i, n, o); return wd(r, o, s, n, e, t), Nd; }
function _d(e, t, n) { let o = g(), r = _(), i = N(); return (i.type & 3 || n) && Jm(i, r, o, n, o[M], e, t, Ao(i, o, t)), _d; }
function wd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Ao(o, t, i), Jm(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Ao(o, t, i), Fi(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Ao(o, t, i), Fi(o, t, d, r, r, c);
} }
function dE(e = 1) { return Wf(e); }
function wb(e, t) { let n = null, o = qM(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Hg(e, i, !0) : QM(o, i))
        return r;
} return n; }
function fE(e) { let t = g()[Z][ie]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = fo(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? wb(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function pE(e, t = 0, n, o, r, i) { let s = g(), a = _(), c = o ? e + 1 : null; c !== null && Qt(s, a, c, o, r, i, null, n); let l = en(a, E + e, 16, null, n || null); l.projection === null && (l.projection = t), Ua(); let d = !s[te] || Co(); s[Z][ie].projection[l.projection] === null && c !== null ? Sb(s, a, c) : d && !Qn(l) && aN(a, s, l); }
function Sb(e, t, n) { let o = E + n, r = t.data[o], i = e[o], s = Go(i, r.tView.ssrId), a = Jn(e, r, void 0, { dehydratedView: s }); Xn(i, a, 0, Wt(r, s)); }
function hE(e, t, n, o) { dy(e, t, n, o); }
function gE(e, t, n) { uy(e, t, n); }
function mE(e) { let t = g(), n = _(), o = Kr(); To(o + 1); let r = ju(n, o); if (e.dirty && kf(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = py(t, o);
        e.reset(i, kh), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function yE() { return Fu(g(), Kr()); }
function vE(e, t, n, o, r) { hy(t, dy(e, n, o, r)); }
function EE(e, t, n, o) { hy(e, uy(t, n, o)); }
function IE(e = 1) { To(Kr() + e); }
function DE(e) { let t = $a(); return Et(t, E + e); }
function li(e, t) { return e << 17 | t << 2; }
function Zt(e) { return e >> 17 & 32767; }
function bb(e) { return (e & 2) == 2; }
function Rb(e, t) { return e & 131071 | t << 17; }
function bl(e) { return e | 2; }
function jn(e) { return (e & 131068) >> 2; }
function wc(e, t) { return e & -131069 | t << 2; }
function Ab(e) { return (e & 1) === 1; }
function Rl(e) { return e | 1; }
function kb(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Zt(s), c = jn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || jr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Zt(e[a + 1]);
        e[o + 1] = li(f, a), f !== 0 && (e[f + 1] = wc(e[f + 1], o)), e[a + 1] = Rb(e[a + 1], o);
    }
    else
        e[o + 1] = li(a, 0), a !== 0 && (e[a + 1] = wc(e[a + 1], o)), a = o;
else
    e[o + 1] = li(c, 0), a === 0 ? a = o : e[c + 1] = wc(e[c + 1], o), c = o; l && (e[o + 1] = bl(e[o + 1])), Yp(e, u, o, !0), Yp(e, u, o, !1), Ob(t, u, e, o, i), s = li(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function Ob(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && jr(i, t) >= 0 && (n[o + 1] = Rl(n[o + 1])); }
function Yp(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Zt(r) : jn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    xb(c, t) && (a = !0, e[s + 1] = o ? Rl(l) : bl(l)), s = o ? Zt(l) : jn(l);
} a && (e[n + 1] = o ? bl(r) : Rl(r)); }
function xb(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? jr(e, t) >= 0 : !1; }
var ee = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function CE(e) { return e.substring(ee.key, ee.keyEnd); }
function Pb(e) { return e.substring(ee.value, ee.valueEnd); }
function Lb(e) { return NE(e), TE(e, Vn(e, 0, ee.textEnd)); }
function TE(e, t) { let n = ee.textEnd; return n === t ? -1 : (t = ee.keyEnd = jb(e, ee.key = t, n), Vn(e, t, n)); }
function Fb(e) { return NE(e), ME(e, Vn(e, 0, ee.textEnd)); }
function ME(e, t) { let n = ee.textEnd, o = ee.key = Vn(e, t, n); return n === o ? -1 : (o = ee.keyEnd = Vb(e, o, n), o = Kp(e, o, n, 58), o = ee.value = Vn(e, o, n), o = ee.valueEnd = Hb(e, o, n), Kp(e, o, n, 59)); }
function NE(e) { ee.key = 0, ee.keyEnd = 0, ee.value = 0, ee.valueEnd = 0, ee.textEnd = e.length; }
function Vn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function jb(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function Vb(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Kp(e, t, n, o) { return t = Vn(e, t, n), t < n && t++, t; }
function Hb(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Jp(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Jp(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Jp(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Sd(e, t, n) { return SE(e, t, n, !1), Sd; }
function bd(e, t) { return SE(e, t, null, !0), bd; }
function _E(e) { bE(kE, Bb, e, !1); }
function Bb(e, t) { for (let n = Fb(t); n >= 0; n = ME(t, n))
    kE(e, CE(t), Pb(t)); }
function wE(e) { bE(Qb, Ub, e, !0); }
function Ub(e, t) { for (let n = Lb(t); n >= 0; n = TE(t, n))
    po(e, CE(t), !0); }
function SE(e, t, n, o) { let r = g(), i = _(), s = $e(2); if (i.firstUpdatePass && AE(i, e, s, o), t !== x && G(r, s, t)) {
    let a = i.data[ne()];
    OE(i, a, r, r[M], e, r[s + 1] = Yb(t, n), o, s);
} }
function bE(e, t, n, o) { let r = _(), i = $e(2); r.firstUpdatePass && AE(r, null, i, o); let s = g(); if (n !== x && G(s, i, n)) {
    let a = r.data[ne()];
    if (xE(a, o) && !RE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Rr(c, n || "")), wl(r, a, s, n, o);
    }
    else
        Zb(r, a, s, s[M], s[i + 1], s[i + 1] = zb(e, t, n), o, i);
} }
function RE(e, t) { return t >= e.expandoStartIndex; }
function AE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[ne()], s = RE(e, n);
    xE(i, o) && t === null && !s && (t = !1), t = $b(r, i, t, o), kb(r, i, t, n, s, o);
} }
function $b(e, t, n, o) { let r = Yr(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Sc(null, e, t, n, o), n = Jo(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Sc(r, e, t, n, o), i === null) {
            let c = Gb(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Sc(null, e, t, c[1], o), c = Jo(c, t.attrs, o), qb(e, t, o, c));
        }
        else
            i = Wb(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function Gb(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (jn(o) !== 0)
    return e[Zt(o)]; }
function qb(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Zt(r)] = o; }
function Wb(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Jo(o, s, n);
} return Jo(o, t.attrs, n); }
function Sc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Jo(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Jo(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), po(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function zb(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = st(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function kE(e, t, n) { po(e, t, st(n)); }
function Qb(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && po(e, o, n); }
function Zb(e, t, n, o, r, i, s, a) { r === x && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && OE(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function OE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = Ab(l) ? Xp(c, t, n, r, jn(l), s) : void 0; if (!Wi(u)) {
    Wi(i) || bb(l) && (i = Xp(c, null, n, r, a, s));
    let d = Ft(ne(), n);
    lN(o, s, d, r, i);
} }
function Xp(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === x && (f = d ? P : void 0);
    let p = d ? Fr(f, o) : u === o ? f : void 0;
    if (l && !Wi(p) && (p = Fr(c, o)), Wi(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Zt(h) : jn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Fr(c, o));
} return a; }
function Wi(e) { return e !== void 0; }
function Yb(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = nn(st(e)))), e; }
function xE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function PE(e, t = "") { let n = g(), o = _(), r = e + E, i = o.firstCreatePass ? en(o, r, 1, t, null) : o.data[r], s = LE(o, n, i, t, e); n[r] = s, Mo() && Eu(o, n, s, i), Be(i, !1); }
var LE = (e, t, n, o, r) => (Oe(!0), du(t[M], o));
function Kb(e, t, n, o, r) { let i = !fs(t, n); if (Oe(i), i)
    return du(t[M], o); let s = t[te]; return pr(s, e, t, n); }
function FE() { LE = Kb; }
function jE(e, t) { let n = !1, o = Ue(); for (let i = 1; i < t.length; i += 2)
    n = G(e, o++, t[i]) || n; if (za(o), !n)
    return x; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += T(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function VE(e, t, n, o = "") { return G(e, pe(), n) ? t + T(n) + o : x; }
function HE(e, t, n, o, r, i = "") { let s = Ue(), a = zt(e, s, n, r); return $e(2), a ? t + T(n) + o + T(r) + i : x; }
function BE(e, t, n, o, r, i, s, a = "") { let c = Ue(), l = As(e, c, n, r, s); return $e(3), l ? t + T(n) + o + T(r) + i + T(s) + a : x; }
function UE(e, t, n, o, r, i, s, a, c, l = "") { let u = Ue(), d = be(e, u, n, r, s, c); return $e(4), d ? t + T(n) + o + T(r) + i + T(s) + a + T(c) + l : x; }
function $E(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Ue(), p = be(e, f, n, r, s, c); return p = G(e, f + 4, u) || p, $e(5), p ? t + T(n) + o + T(r) + i + T(s) + a + T(c) + l + T(u) + d : x; }
function GE(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Ue(), m = be(e, h, n, r, s, c); return m = zt(e, h + 4, u, f) || m, $e(6), m ? t + T(n) + o + T(r) + i + T(s) + a + T(c) + l + T(u) + d + T(f) + p : x; }
function qE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let v = Ue(), I = be(e, v, n, r, s, c); return I = As(e, v + 4, u, f, h) || I, $e(7), I ? t + T(n) + o + T(r) + i + T(s) + a + T(c) + l + T(u) + d + T(f) + p + T(h) + m : x; }
function WE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v, I = "") { let A = Ue(), ce = be(e, A, n, r, s, c); return ce = be(e, A + 4, u, f, h, v) || ce, $e(8), ce ? t + T(n) + o + T(r) + i + T(s) + a + T(c) + l + T(u) + d + T(f) + p + T(h) + m + T(v) + I : x; }
function Rd(e) { return zs("", e), Rd; }
function zs(e, t, n) { let o = g(), r = VE(o, e, t, n); return r !== x && ut(o, ne(), r), zs; }
function Ad(e, t, n, o, r) { let i = g(), s = HE(i, e, t, n, o, r); return s !== x && ut(i, ne(), s), Ad; }
function kd(e, t, n, o, r, i, s) { let a = g(), c = BE(a, e, t, n, o, r, i, s); return c !== x && ut(a, ne(), c), kd; }
function Od(e, t, n, o, r, i, s, a, c) { let l = g(), u = UE(l, e, t, n, o, r, i, s, a, c); return u !== x && ut(l, ne(), u), Od; }
function xd(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = $E(d, e, t, n, o, r, i, s, a, c, l, u); return f !== x && ut(d, ne(), f), xd; }
function Pd(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = GE(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== x && ut(p, ne(), h), Pd; }
function Ld(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = qE(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== x && ut(m, ne(), v), Ld; }
function Fd(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v) { let I = g(), A = WE(I, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); return A !== x && ut(I, ne(), A), Fd; }
function jd(e) { let t = g(), n = jE(t, e); return n !== x && ut(t, ne(), n), jd; }
function ut(e, t, n) { let o = Ft(t, e); Bg(e[M], o, n); }
function Vd(e, t, n) { rc(t) && (t = t()); let o = g(), r = pe(); if (G(o, r, t)) {
    let i = _(), s = we();
    Du(s, o, e, t, o[M], n);
} return Vd; }
function zE(e, t) { let n = rc(e); return n && e.set(t), n; }
function Hd(e, t) { let n = g(), o = _(), r = N(); return wd(o, n, n[M], r, e, t), Hd; }
var QE = {};
function Bd(e) { let t = _(), n = g(), o = e + E, r = en(t, o, 128, null, null); return Be(r, !1), Io(t, n, o, QE), Bd; }
function ZE(e) { ae("NgLet"); let t = _(), n = g(), o = ne(); return Io(t, n, o, e), e; }
function YE(e) { let t = $a(), n = Et(t, E + e); if (n === QE)
    throw new w(314, !1); return n; }
function KE(e, t) { let n = _(), o = g(), r = o[M], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = vt(n, s + E), d = Ft(s + E, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function JE(e) { return G(g(), pe(), e) ? T(e) : x; }
function XE(e, t, n = "") { return VE(g(), e, t, n); }
function eI(e, t, n, o, r = "") { return HE(g(), e, t, n, o, r); }
function tI(e, t, n, o, r, i, s = "") { return BE(g(), e, t, n, o, r, i, s); }
function nI(e, t, n, o, r, i, s, a, c = "") { return UE(g(), e, t, n, o, r, i, s, a, c); }
function oI(e, t, n, o, r, i, s, a, c, l, u = "") { return $E(g(), e, t, n, o, r, i, s, a, c, l, u); }
function rI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return GE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function iI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return qE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function sI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v = "") { return WE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); }
function aI(e) { return jE(g(), e); }
function Jb(e, t, n) { let o = _(); if (o.firstCreatePass) {
    let r = me(e);
    Al(n, o.data, o.blueprint, r, !0), Al(t, o.data, o.blueprint, r, !1);
} }
function Al(e, t, n, o, r) { if (e = H(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Al(e[i], t, n, o, r);
else {
    let i = _(), s = g(), a = N(), c = Hr(e) ? e : H(e.provide), l = wf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Hr(e) || !e.multi) {
        let p = new Gt(l, r, to, null), h = Rc(c, t, r ? u : u + f, d);
        h === -1 ? (Lc(_i(a, s), i, c), bc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Rc(c, t, u + f, d), h = Rc(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !m) {
            Lc(_i(a, s), i, c);
            let I = tR(r ? eR : Xb, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = I), bc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(I), s.push(I);
        }
        else {
            let I = cI(n[r ? h : p], l, !r && o);
            bc(i, e, p > -1 ? p : h, I);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function bc(e, t, n, o) { let r = Hr(t), i = Nf(t); if (r || i) {
    let c = (i ? H(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function cI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Rc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function Xb(e, t, n, o, r) { return kl(this.multi, []); }
function eR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = jo(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), kl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], kl(i, s); return s; }
function kl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function tR(e, t, n, o, r, i) { let s = new Gt(e, n, to, null); return s.multi = [], s.index = t, s.componentProviders = 0, cI(s, r, o && !n), s; }
function lI(e, t = []) { return n => { n.providersResolver = (o, r) => Jb(o, r ? r(e) : e, t); }; }
function uI(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function dI(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Bi(t, Ny), o.pipeDefs = Bi(n, je); }
function fI(e, t) { return qe(() => { let n = Vr(e); n.declarations = ui(t.declarations || P), n.imports = ui(t.imports || P), n.exports = ui(t.exports || P), t.bootstrap && (n.bootstrap = ui(t.bootstrap)), An.registerNgModule(e, t); }); }
function ui(e) { if (typeof e == "function")
    return e; let t = Ae(e); return t.some(Ar) ? () => t.map(H).map(eh) : t.map(eh); }
function eh(e) { return Ou(e) ? e.ngModule : e; }
function pI(e, t, n) { let o = ue() + e, r = g(); return r[o] === x ? We(r, o, n ? t.call(n) : t()) : gr(r, o); }
function hI(e, t, n, o) { return TI(g(), ue(), e, t, n, o); }
function gI(e, t, n, o, r) { return MI(g(), ue(), e, t, n, o, r); }
function mI(e, t, n, o, r, i) { return NI(g(), ue(), e, t, n, o, r, i); }
function yI(e, t, n, o, r, i, s) { return _I(g(), ue(), e, t, n, o, r, i, s); }
function vI(e, t, n, o, r, i, s, a) { let c = ue() + e, l = g(), u = be(l, c, n, o, r, i); return G(l, c + 4, s) || u ? We(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : gr(l, c + 5); }
function EI(e, t, n, o, r, i, s, a, c) { let l = ue() + e, u = g(), d = be(u, l, n, o, r, i); return zt(u, l + 4, s, a) || d ? We(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : gr(u, l + 6); }
function II(e, t, n, o, r, i, s, a, c, l) { let u = ue() + e, d = g(), f = be(d, u, n, o, r, i); return As(d, u + 4, s, a, c) || f ? We(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : gr(d, u + 7); }
function DI(e, t, n, o, r, i, s, a, c, l, u) { let d = ue() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? We(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : gr(f, d + 8); }
function CI(e, t, n, o) { return wI(g(), ue(), e, t, n, o); }
function Cr(e, t) { let n = e[t]; return n === x ? void 0 : n; }
function TI(e, t, n, o, r, i) { let s = t + n; return G(e, s, r) ? We(e, s + 1, i ? o.call(i, r) : o(r)) : Cr(e, s + 1); }
function MI(e, t, n, o, r, i, s) { let a = t + n; return zt(e, a, r, i) ? We(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Cr(e, a + 2); }
function NI(e, t, n, o, r, i, s, a) { let c = t + n; return As(e, c, r, i, s) ? We(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Cr(e, c + 3); }
function _I(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? We(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Cr(e, l + 4); }
function wI(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    G(e, s++, r[c]) && (a = !0); return a ? We(e, s, o.apply(i, r)) : Cr(e, s); }
function SI(e, t) { let n = _(), o, r = e + E; n.firstCreatePass ? (o = nR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Lr(o.type, !0)), s, a = Ot(to); try {
    let c = Ni(!1), l = i();
    return Ni(c), Io(n, g(), r, l), l;
}
finally {
    Ot(a);
} }
function nR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function bI(e, t, n) { let o = e + E, r = g(), i = Et(r, o); return Tr(r, o) ? TI(r, ue(), t, i.transform, n, i) : i.transform(n); }
function RI(e, t, n, o) { let r = e + E, i = g(), s = Et(i, r); return Tr(i, r) ? MI(i, ue(), t, s.transform, n, o, s) : s.transform(n, o); }
function AI(e, t, n, o, r) { let i = e + E, s = g(), a = Et(s, i); return Tr(s, i) ? NI(s, ue(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function kI(e, t, n, o, r, i) { let s = e + E, a = g(), c = Et(a, s); return Tr(a, s) ? _I(a, ue(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function OI(e, t, n) { let o = e + E, r = g(), i = Et(r, o); return Tr(r, o) ? wI(r, ue(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Tr(e, t) { return e[y].data[t].pure; }
function xI(e, t) { return Ts(e, t); }
function PI(e, t) { return () => { try {
    return An.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function LI(e, t) { let n = B(e); n !== null && (n.debugInfo = t); }
function FI(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function jI(e, t, n, o, r = null, i = null) { let s = B(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = oR(s, B(e)); if (e[on] = a, c.tView) {
    let l = yT().values();
    for (let u of l)
        He(u) && u[W] === null && Ii(r, i, a, c, u);
} }
function oR(e, t) { let n = q({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Ii(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    iR(e, t, n, o, r);
    return;
} for (let s = E; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        Y(a[L]) && Ii(e, t, n, o, a[L]);
        for (let c = U; c < a.length; c++)
            Ii(e, t, n, o, a[c]);
    }
    else
        Y(a) && Ii(e, t, n, o, a);
} }
function rR(e, t) { e.componentReplaced?.(t.id); }
function iR(e, t, n, o, r) { let i = r[F], s = r[L], a = r[W], c = r[ie], l = r[Q].get($, null), u = () => { if (o.encapsulation === et.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = qg(n), f = gs(a, d, i, hu(n), s, c, null, null, null, null, null); sR(a, r, f, c.index), dr(r[y], r); let p = r[Qe].rendererFactory; rR(p, o), f[M] = p.createRenderer(s, n), Qg(r[y], r), aR(c), Ds(d, f, i), fm(d, f, d.template, i); }; l === null ? th(e, t, u) : l.run(() => th(e, t, u)); }
function th(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function sR(e, t, n, o) { for (let r = E; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((Y(i) || K(i)) && i[re] === t) {
        i[re] = n;
        break;
    }
} e[gt] === t && (e[gt] = n), e[go] === t && (e[go] = n), n[re] = t[re], t[re] = null, e[o] = n; }
function aR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        Yi(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var de = { \u0275\u0275attribute: ld, \u0275\u0275defineComponent: My, \u0275\u0275defineDirective: _y, \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: lo, \u0275\u0275defineNgModule: Wu, \u0275\u0275definePipe: wy, \u0275\u0275directiveInject: to, \u0275\u0275getInheritedFactory: Sh, \u0275\u0275inject: Re, \u0275\u0275injectAttribute: Ki, \u0275\u0275invalidFactory: Wm, \u0275\u0275invalidFactoryDep: Pr, \u0275\u0275templateRefExtractor: xI, \u0275\u0275resetView: Ha, \u0275\u0275HostDirectivesFeature: ky, \u0275\u0275NgOnChangesFeature: fh, \u0275\u0275ProvidersFeature: lI, \u0275\u0275CopyDefinitionFeature: Ay, \u0275\u0275InheritDefinitionFeature: zu, \u0275\u0275ExternalStylesFeature: uI, \u0275\u0275nextContext: dE, \u0275\u0275namespaceHTML: ec, \u0275\u0275namespaceMathML: Xa, \u0275\u0275namespaceSVG: Ja, \u0275\u0275enableBindings: La, \u0275\u0275disableBindings: Fa, \u0275\u0275elementStart: Bs, \u0275\u0275elementEnd: Us, \u0275\u0275element: dd, \u0275\u0275elementContainerStart: qs, \u0275\u0275elementContainerEnd: Ir, \u0275\u0275domElement: fd, \u0275\u0275domElementStart: $s, \u0275\u0275domElementEnd: Gs, \u0275\u0275domElementContainer: md, \u0275\u0275domElementContainerStart: Ws, \u0275\u0275domElementContainerEnd: gd, \u0275\u0275domTemplate: Zu, \u0275\u0275domListener: _d, \u0275\u0275elementContainer: hd, \u0275\u0275pureFunction0: pI, \u0275\u0275pureFunction1: hI, \u0275\u0275pureFunction2: gI, \u0275\u0275pureFunction3: mI, \u0275\u0275pureFunction4: yI, \u0275\u0275pureFunction5: vI, \u0275\u0275pureFunction6: EI, \u0275\u0275pureFunction7: II, \u0275\u0275pureFunction8: DI, \u0275\u0275pureFunctionV: CI, \u0275\u0275getCurrentView: qv, \u0275\u0275restoreView: Va, \u0275\u0275listener: Md, \u0275\u0275projection: pE, \u0275\u0275syntheticHostProperty: Ed, \u0275\u0275syntheticHostListener: Nd, \u0275\u0275pipeBind1: bI, \u0275\u0275pipeBind2: RI, \u0275\u0275pipeBind3: AI, \u0275\u0275pipeBind4: kI, \u0275\u0275pipeBindV: OI, \u0275\u0275projectionDef: fE, \u0275\u0275domProperty: vd, \u0275\u0275property: ud, \u0275\u0275pipe: SI, \u0275\u0275queryRefresh: mE, \u0275\u0275queryAdvance: IE, \u0275\u0275viewQuery: gE, \u0275\u0275viewQuerySignal: EE, \u0275\u0275loadQuery: yE, \u0275\u0275contentQuery: hE, \u0275\u0275contentQuerySignal: vE, \u0275\u0275reference: DE, \u0275\u0275classMap: wE, \u0275\u0275styleMap: _E, \u0275\u0275styleProp: Sd, \u0275\u0275classProp: bd, \u0275\u0275advance: Wg, \u0275\u0275template: Qu, \u0275\u0275conditional: jv, \u0275\u0275conditionalCreate: Fv, \u0275\u0275conditionalBranchCreate: Hs, \u0275\u0275defer: pv, \u0275\u0275deferWhen: hv, \u0275\u0275deferOnIdle: vv, \u0275\u0275deferOnImmediate: Dv, \u0275\u0275deferOnTimer: Mv, \u0275\u0275deferOnHover: wv, \u0275\u0275deferOnInteraction: Rv, \u0275\u0275deferOnViewport: Ov, \u0275\u0275deferPrefetchWhen: gv, \u0275\u0275deferPrefetchOnIdle: Ev, \u0275\u0275deferPrefetchOnImmediate: Cv, \u0275\u0275deferPrefetchOnTimer: Nv, \u0275\u0275deferPrefetchOnHover: Sv, \u0275\u0275deferPrefetchOnInteraction: Av, \u0275\u0275deferPrefetchOnViewport: xv, \u0275\u0275deferHydrateWhen: mv, \u0275\u0275deferHydrateNever: yv, \u0275\u0275deferHydrateOnIdle: Iv, \u0275\u0275deferHydrateOnImmediate: Tv, \u0275\u0275deferHydrateOnTimer: _v, \u0275\u0275deferHydrateOnHover: bv, \u0275\u0275deferHydrateOnInteraction: kv, \u0275\u0275deferHydrateOnViewport: Pv, \u0275\u0275deferEnableTimerScheduling: ev, \u0275\u0275repeater: Uv, \u0275\u0275repeaterCreate: Bv, \u0275\u0275repeaterTrackByIndex: Vv, \u0275\u0275repeaterTrackByIdentity: Hv, \u0275\u0275componentInstance: Lv, \u0275\u0275text: PE, \u0275\u0275textInterpolate: Rd, \u0275\u0275textInterpolate1: zs, \u0275\u0275textInterpolate2: Ad, \u0275\u0275textInterpolate3: kd, \u0275\u0275textInterpolate4: Od, \u0275\u0275textInterpolate5: xd, \u0275\u0275textInterpolate6: Pd, \u0275\u0275textInterpolate7: Ld, \u0275\u0275textInterpolate8: Fd, \u0275\u0275textInterpolateV: jd, \u0275\u0275i18n: aE, \u0275\u0275i18nAttributes: cE, \u0275\u0275i18nExp: Td, \u0275\u0275i18nStart: Dd, \u0275\u0275i18nEnd: Cd, \u0275\u0275i18nApply: lE, \u0275\u0275i18nPostprocess: uE, \u0275\u0275resolveWindow: Fg, \u0275\u0275resolveDocument: jg, \u0275\u0275resolveBody: lu, \u0275\u0275setComponentScope: dI, \u0275\u0275setNgModuleScope: fI, \u0275\u0275registerNgModuleType: $u, \u0275\u0275getComponentDepsFactory: PI, \u0275setClassDebugInfo: LI, \u0275\u0275declareLet: Bd, \u0275\u0275storeLet: ZE, \u0275\u0275readContextLet: YE, \u0275\u0275attachSourceLocations: KE, \u0275\u0275interpolate: JE, \u0275\u0275interpolate1: XE, \u0275\u0275interpolate2: eI, \u0275\u0275interpolate3: tI, \u0275\u0275interpolate4: nI, \u0275\u0275interpolate5: oI, \u0275\u0275interpolate6: rI, \u0275\u0275interpolate7: iI, \u0275\u0275interpolate8: sI, \u0275\u0275interpolateV: aI, \u0275\u0275sanitizeHtml: bg, \u0275\u0275sanitizeStyle: Rg, \u0275\u0275sanitizeResourceUrl: cu, \u0275\u0275sanitizeScript: Ag, \u0275\u0275sanitizeUrl: au, \u0275\u0275sanitizeUrlOrResourceUrl: xg, \u0275\u0275trustConstantHtml: kg, \u0275\u0275trustConstantResourceUrl: Og, \u0275\u0275validateIframeAttribute: Iy, forwardRef: va, resolveForwardRef: H, \u0275\u0275twoWayProperty: Vd, \u0275\u0275twoWayBindingSet: zE, \u0275\u0275twoWayListener: Hd, \u0275\u0275replaceMetadata: jI, \u0275\u0275getReplaceMetadataURL: FI }, Cn = null;
function VI(e) { Cn !== null && (e.defaultEncapsulation !== Cn.defaultEncapsulation || e.preserveWhitespaces !== Cn.preserveWhitespaces) || (Cn = e); }
function cR() { return Cn; }
function lR() { Cn = null; }
var Fo = [];
function uR(e, t) { Fo.push({ moduleType: e, ngModule: t }); }
var Ac = !1;
function HI() { if (!Ac) {
    Ac = !0;
    try {
        for (let e = Fo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Fo[e];
            n.declarations && n.declarations.every(BI) && (Fo.splice(e, 1), gR(t, n));
        }
    }
    finally {
        Ac = !1;
    }
} }
function BI(e) { return Array.isArray(e) ? e.every(BI) : !!H(e); }
function UI(e, t = {}) { $I(e, t), t.id !== void 0 && $u(e, t.id), uR(e, t); }
function $I(e, t, n = !1) { let o = Ae(t.declarations || P), r = null; Object.defineProperty(e, Ia, { configurable: !0, get: () => (r === null && (r = X({ usage: 0, kind: "NgModule", type: e }).compileNgModule(de, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ae(t.bootstrap || P).map(H), declarations: o.map(H), imports: Ae(t.imports || P).map(H).map(nh), exports: Ae(t.exports || P).map(H).map(nh), schemas: t.schemas ? Ae(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ft, { get: () => { if (i === null) {
        let a = X({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(de, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Ji(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ea, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(H), (t.exports || P).map(H)] };
        s = X({ usage: 0, kind: "NgModule", type: e }).compileInjector(de, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function dR(e, t) { let n = `Unexpected "${Ee(e)}" found in the "declarations" array of the`, o = `"${Ee(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var fR = new WeakMap, pR = new WeakMap;
function hR() { fR = new WeakMap, pR = new WeakMap, Fo.length = 0, Aw.clear(); }
function gR(e, t) { let n = Ae(t.declarations || P), o = $d(e); n.forEach(r => { if (r = H(r), r.hasOwnProperty(on)) {
    let s = B(r);
    Ud(s, o);
}
else
    !r.hasOwnProperty(Or) && !r.hasOwnProperty(xr) && (r.ngSelectorScope = e); }); }
function Ud(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(on) ? B(n) : Ne(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => je(n)), e.schemas = t.schemas, e.tView = null; }
function $d(e) { if (Bt(e)) {
    let t = An.getNgModuleScope(e), n = Vr(e);
    return q({ schemas: n.schemas || null }, t);
}
else if (ho(e)) {
    if ((B(e) || Ne(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (je(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function nh(e) { return Ou(e) ? e.ngModule : e; }
var kc = 0;
function GI(e, t) {
    let n = null;
    Iw(e, t), WI(e, t), Object.defineProperty(e, on, { get: () => {
            if (n === null) {
                let o = X({ usage: 0, kind: "component", type: e });
                if (my(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = cR(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = et.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = zI(e, t), l = Fe(q({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                kc++;
                try {
                    if (l.usesInheritance && QI(e), n = o.compileComponent(de, a, l), l.isStandalone) {
                        let u = Ae(t.imports || P), { directiveDefs: d, pipeDefs: f } = mR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(H);
                    }
                }
                finally {
                    kc--;
                }
                if (kc === 0 && HI(), yR(e)) {
                    let u = $d(e.ngSelectorScope);
                    Ud(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ee(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function mR(e, t) { return { directiveDefs: () => Ro(e) ? [...An.getStandaloneComponentScope(e, t).compilation.directives].map(i => B(i) || Ne(i)).filter(i => i !== null) : [], pipeDefs: () => Ro(e) ? [...An.getStandaloneComponentScope(e, t).compilation.pipes].map(i => je(i)).filter(i => i !== null) : [] }; }
function yR(e) { return e.ngSelectorScope !== void 0; }
function Gd(e, t) { let n = null; WI(e, t || {}), Object.defineProperty(e, Or, { get: () => { if (n === null) {
        let o = qI(e, t || {});
        n = X({ usage: 0, kind: "directive", type: e }).compileDirective(de, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function qI(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = X({ usage: 0, kind: "directive", type: e }), i = zI(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && QI(e), { metadata: i, sourceMapUrl: o }; }
function WI(e, t) { let n = null; Object.defineProperty(e, ft, { get: () => { if (n === null) {
        let o = qI(e, t), r = X({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(de, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Ji(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function vR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function zI(e, t) { let n = Vl(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Me, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: oh(e, o, ZI), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !vR(e), exportAs: DR(t.exportAs), providers: t.providers || null, viewQueries: oh(e, o, YI), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function QI(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ne(n) && !B(n) && TR(n) && Gd(n, null), n = Object.getPrototypeOf(n); }
function ER(e) { return typeof e == "string" ? JI(e) : H(e); }
function IR(e, t) { return { propertyName: e, predicate: ER(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function oh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ee(e)}" since the query selector wasn't defined.`);
            if (i.some(KI))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(IR(r, s));
        } });
    } return o; }
function DR(e) { return e === void 0 ? null : JI(e); }
function ZI(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function YI(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function KI(e) { return e.ngMetadataName === "Input"; }
function JI(e) { return e.split(",").map(t => t.trim()); }
var CR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function TR(e) { let t = Vl(); if (CR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (KI(s) || ZI(s) || YI(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function XI(e, t) { let n = null, o = null; Object.defineProperty(e, ft, { get: () => { if (o === null) {
        let r = rh(e, t), i = X({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(de, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Ji(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, xr, { get: () => { if (n === null) {
        let r = rh(e, t);
        n = X({ usage: 0, kind: "pipe", type: r.type }).compilePipe(de, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function rh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var eD = er("Directive", (e = {}) => e, void 0, void 0, (e, t) => Gd(e, t)), MR = er("Component", (e = {}) => q({ changeDetection: Xi.Default }, e), eD, void 0, (e, t) => GI(e, t)), NR = er("Pipe", e => q({ pure: !0 }, e), void 0, void 0, (e, t) => XI(e, t)), _R = nt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), wR = nt("Output", e => ({ alias: e })), SR = nt("HostBinding", e => ({ hostPropertyName: e })), bR = nt("HostListener", (e, t) => ({ eventName: e, args: t })), RR = er("NgModule", e => e, void 0, void 0, (e, t) => UI(e, t)), zi = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, AR = (() => { class e {
    compileModuleSync(n) { return new Pn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = sn(n), i = In(r.declarations).reduce((s, a) => { let c = B(a); return c && s.push(new wt(c)), s; }, []); return new zi(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), tD = new S(""), Ol = class {
}, kR = (() => { class e {
    zone = D($);
    changeDetectionScheduler = D(Ze);
    applicationRef = D(Pe);
    applicationErrorHandler = D(Dt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), nD = new S("", { factory: () => !1 });
function Qs({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new $(Fe(q({}, Zs()), { scheduleInRootZone: n })), [{ provide: $, useFactory: e }, { provide: pt, multi: !0, useFactory: () => { let o = D(kR, { optional: !0 }); return () => o.initialize(); } }, { provide: pt, multi: !0, useFactory: () => { let o = D(xR); return () => { o.initialize(); }; } }, t === !0 ? { provide: ic, useValue: !0 } : [], { provide: ti, useValue: n ?? Hy }, { provide: Dt, useFactory: () => { let o = D($), r = D(ht), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(ei), i.handleError(s)); }); }; } }]; }
function OR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = Qs({ ngZoneFactory: () => { let r = Zs(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && ae("NgZone_CoalesceEvent"), new $(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return ze([{ provide: nD, useValue: !0 }, { provide: fn, useValue: !1 }, o]); }
function Zs(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var xR = (() => { class e {
    subscription = new Ll;
    initialized = !1;
    zone = D($);
    pendingTasks = D(Ct);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { $.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { $.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ys = (() => { class e {
    applicationErrorHandler = D(Dt);
    appRef = D(Pe);
    taskService = D(Ct);
    ngZone = D($);
    zonelessEnabled = D(fn);
    tracing = D(no, { optional: !0 });
    disableScheduling = D(ic, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Ll;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ui) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(ti, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof Ln || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? kp : By; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ui + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, kp(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function PR() { return ae("NgZoneless"), ze([{ provide: Ze, useExisting: Ys }, { provide: $, useClass: Ln }, { provide: fn, useValue: !0 }, { provide: ti, useValue: !1 }, []]); }
function LR() { return typeof $localize < "u" && $localize.locale || Dr; }
var qd = new S("", { providedIn: "root", factory: () => D(qd, { optional: !0, skipSelf: !0 }) || LR() }), FR = new S("", { providedIn: "root", factory: () => QS }), jR = new S(""), VR = new S(""), oD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(oD || {}), xl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function HR(e) { return e.map(t => t.nativeElement); }
var Xo = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Yt(t) : null; }
    get injector() { return _T(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (cp(t) || NT(t)); }
    get context() { return cp(this.nativeNode) || MT(this.nativeNode); }
    get listeners() { return AT(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return bT(this.nativeNode); }
    get providerTokens() { return wT(this.nativeNode); }
}, Yt = class extends Xo {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return BR(this.nativeElement, i), $R(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Hn(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Hn(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return ih(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return ih(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function BR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                UR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function UR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function ih(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    Ut(s, i, t, n, o, e.nativeNode);
}
else
    Wd(e.nativeNode, t, n, o); }
function Ut(e, t, n, o, r, i) { let s = Af(e, t); if (e.type & 11) {
    if (Oc(s, n, o, r, i), De(e)) {
        let c = le(e.index, t);
        c && c[y].firstChild && Ut(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && Ut(e.child, t, n, o, r, i), s && Wd(s, n, o, r);
    let a = t[e.index];
    K(a) && sh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Oc(a[ke], n, o, r, i), sh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Z], l = a[ie].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Oc(u, n, o, r, i);
    else if (l) {
        let u = a[W], d = u[y].data[l.index];
        Ut(d, u, n, o, r, i);
    }
}
else
    e.child && Ut(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Ut(a, t, n, o, r, i);
} }
function sh(e, t, n, o, r) { for (let i = U; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && Ut(a, s, t, n, o, r);
} }
function Oc(e, t, n, o, r) { if (r !== e) {
    let i = Hn(e);
    if (!i)
        return;
    (o && i instanceof Yt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Wd(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Hn(a);
    c && ((o && c instanceof Yt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Wd(a, t, n, o));
} }
function $R(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(VM), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += T(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var xc = "__ng_debug__";
function Hn(e) { return e instanceof Node ? (e.hasOwnProperty(xc) || (e[xc] = e.nodeType == Node.ELEMENT_NODE ? new Yt(e) : new Xo(e)), e[xc]) : null; }
var Kd = { JSACTION: "__jsaction", OWNER: "__owner" }, aD = {};
function GR(e) { return e[Kd.JSACTION]; }
function rD(e, t) { e[Kd.JSACTION] = t; }
function qR(e) { return aD[e]; }
function WR(e, t) { aD[e] = t; }
var C = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, zR = [C.MOUSEENTER, C.MOUSELEAVE, "pointerenter", "pointerleave"], QR = [C.CLICK, C.DBLCLICK, C.FOCUSIN, C.FOCUSOUT, C.KEYDOWN, C.KEYUP, C.KEYPRESS, C.MOUSEOVER, C.MOUSEOUT, C.SUBMIT, C.TOUCHSTART, C.TOUCHEND, C.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], cD = [C.FOCUS, C.BLUR, C.ERROR, C.LOAD, C.TOGGLE], na = e => cD.indexOf(e) >= 0, ZR = QR.concat(cD), lD = e => ZR.indexOf(e) >= 0;
function YR(e) { return e === C.MOUSEENTER ? C.MOUSEOVER : e === C.MOUSELEAVE ? C.MOUSEOUT : e === C.POINTERENTER ? C.POINTEROVER : e === C.POINTERLEAVE ? C.POINTEROUT : e; }
function KR(e, t, n, o) { let r = !1; na(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function JR(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function XR(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var iD = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function eA(e) { return e.which === 2 || e.which == null && e.button === 4; }
function tA(e) { return iD && e.metaKey || !iD && e.ctrlKey || eA(e) || e.shiftKey; }
function nA(e, t, n) { let o = e.relatedTarget; return (e.type === C.MOUSEOVER && t === C.MOUSEENTER || e.type === C.MOUSEOUT && t === C.MOUSELEAVE || e.type === C.POINTEROVER && t === C.POINTERENTER || e.type === C.POINTEROUT && t === C.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function oA(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === C.MOUSEOVER ? n.type = C.MOUSEENTER : e.type === C.MOUSEOUT ? n.type = C.MOUSELEAVE : e.type === C.POINTEROVER ? n.type = C.POINTERENTER : n.type = C.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var rA = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), ea = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { rA && (this.element.style.cursor = "pointer"), this.handlerInfos.push(KR(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        JR(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, iA = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function bt(e) { return e.eventType; }
function Jd(e, t) { e.eventType = t; }
function Js(e) { return e.event; }
function uD(e, t) { e.event = t; }
function dD(e) { return e.targetElement; }
function fD(e, t) { e.targetElement = t; }
function pD(e) { return e.eic; }
function sA(e, t) { e.eic = t; }
function aA(e) { return e.timeStamp; }
function cA(e, t) { e.timeStamp = t; }
function Xs(e) { return e.eia; }
function hD(e, t, n) { e.eia = [t, n]; }
function zd(e) { e.eia = void 0; }
function Ks(e) { return e[1]; }
function lA(e) { return e.eirp; }
function gD(e, t) { e.eirp = t; }
function mD(e) { return e.eir; }
function yD(e, t) { e.eir = t; }
function vD(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function uA(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Qd = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return bt(this.eventInfo); }
    setEventType(t) { Jd(this.eventInfo, t); }
    getEvent() { return Js(this.eventInfo); }
    setEvent(t) { uD(this.eventInfo, t); }
    getTargetElement() { return dD(this.eventInfo); }
    setTargetElement(t) { fD(this.eventInfo, t); }
    getContainer() { return pD(this.eventInfo); }
    setContainer(t) { sA(this.eventInfo, t); }
    getTimestamp() { return aA(this.eventInfo); }
    setTimestamp(t) { cA(this.eventInfo, t); }
    getAction() { let t = Xs(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        zd(this.eventInfo);
        return;
    } hD(this.eventInfo, t.name, t.element); }
    getIsReplay() { return lA(this.eventInfo); }
    setIsReplay(t) { gD(this.eventInfo, t); }
    getResolved() { return mD(this.eventInfo); }
    setResolved(t) { yD(this.eventInfo, t); }
    clone() { return new e(vD(this.eventInfo)); }
}, dA = {}, fA = /\s*;\s*/, pA = C.CLICK, Zd = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && bt(t) === C.CLICK && tA(Js(t)) ? Jd(t, C.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { mD(t) || (this.populateAction(t, dD(t)), yD(t, !0)); }
    resolveParentAction(t) { let n = Xs(t), o = n && Ks(n); zd(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== pD(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Xs(t));)
        o = this.getParentNode(o); let r = Xs(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (bt(t) === C.MOUSEENTER || bt(t) === C.MOUSELEAVE || bt(t) === C.POINTERENTER || bt(t) === C.POINTERLEAVE)))
        if (nA(Js(t), bt(t), Ks(r))) {
            let i = oA(Js(t), Ks(r));
            uD(t, i), fD(t, Ks(r));
        }
        else
            zd(t); }
    getParentNode(t) { let n = t[Kd.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[bt(n)]; r !== void 0 && hD(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = GR(t); if (!n) {
        let o = t.getAttribute(pn.JSACTION);
        if (!o)
            n = dA, rD(t, n);
        else {
            if (n = qR(o), !n) {
                n = {};
                let r = o.split(fA);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(iA.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : pA, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                WR(o, n);
            }
            rD(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, ED = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(ED || {}), Yd = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Qd(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && hA(o.element, n) && XR(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function hA(e, t) { return e.tagName === "A" && (t.getEventType() === C.CLICK || t.getEventType() === C.CLICKMOD); }
var ID = Symbol.for("propagationStopped"), Xd = { REPLAY: 101 };
var gA = "`preventDefault` called during event replay.";
var mA = "`composedPath` called during event replay.", ta = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Zd({ clickModSupport: n }), this.dispatcher = new Yd(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && EA(t), yA(t); t.getAction();) {
        if (IA(t), na(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), vA(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function yA(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[ID] = !0, n(); }; tn(t, "stopPropagation", o), tn(t, "stopImmediatePropagation", o); }
function vA(e) { return !!e.getEvent()[ID]; }
function EA(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); tn(t, "target", n), tn(t, "eventPhase", Xd.REPLAY), tn(t, "preventDefault", () => { throw o(), new Error(gA + ""); }), tn(t, "composedPath", () => { throw new Error(mA + ""); }); }
function IA(e) { let t = e.getEvent(), n = e.getAction()?.element; n && tn(t, "currentTarget", n, { configurable: !0 }); }
function tn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function DD(e, t) { e.ecrd(n => { t.dispatch(n); }, ED.I_AM_THE_JSACTION_FRAMEWORK); }
function DA(e) { return e?.q ?? []; }
function CA(e) { e && (sD(e.c, e.et, e.h), sD(e.c, e.etc, e.h, !0)); }
function sD(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var TA = !1, CD = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = TA;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = uA(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        gD(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && zR.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = YR(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), CA(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = vD(r);
            Jd(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function TD(e, t = window) { return DA(t._ejsas?.[e]); }
function ef(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var ua = Symbol("InputSignalNode#UNSET"), $D = Fe(q({}, ma), { transformFn: void 0, applyValueToInputSignal(e, t) { ga(e, t); } }), KO = Symbol();
function GD(e, t) { let n = Object.create($D); n.value = e, n.transformFn = t?.transform; function o() { if (_r(n), n.value === ua) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[dt] = n, o; }
var io = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(io || {});
var MD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => Ki(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, MA = new S("");
MA.__NG_ELEMENT_ID__ = e => { let t = N(); if (t === null)
    throw new w(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new w(204, !1); };
function JO(e) { return new cc; }
function ND(e, t) { return GD(e, t); }
function NA(e) { return GD(ua, e); }
var XO = (ND.required = NA, ND);
function _D(e, t) { return Hu(t); }
function _A(e, t) { return Bu(t); }
var ex = (_D.required = _A, _D);
function tx(e, t) { return Uu(t); }
function wD(e, t) { return Hu(t); }
function wA(e, t) { return Bu(t); }
var nx = (wD.required = wA, wD);
function ox(e, t) { return Uu(t); }
function qD(e, t) { let n = Object.create($D), o = new cc; n.value = e; function r() { return _r(n), SD(n.value), n.value; } return r[dt] = n, r.asReadonly = Zf.bind(r), r.set = i => { n.equal(n.value, i) || (ga(n, i), o.emit(i)); }, r.update = i => { SD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function SD(e) { if (e === ua)
    throw new w(952, !1); }
function bD(e, t) { return qD(e, t); }
function SA(e) { return qD(ua, e); }
var rx = (bD.required = SA, bD), WD = !0, so = class {
}, ix = nt("ContentChildren", (e, t = {}) => q({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: WD }, t), so), sx = nt("ContentChild", (e, t = {}) => q({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), so), ax = nt("ViewChildren", (e, t = {}) => q({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: WD }, t), so), cx = nt("ViewChild", (e, t) => q({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), so), of = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, lx = new of("20.1.3");
function bA(e, t, n) { let o = new Pn(n); return Promise.resolve(o); }
function RD(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var ia = new S(""), RA = new S("");
function Mr(e) { return !e.moduleRef; }
function zD(e) { let t = Mr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get($); return n.run(() => { Mr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Dt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Mr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(ia);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(ia);
    s.add(i), e.moduleRef.onDestroy(() => { ko(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return kA(o, n, () => { let i = t.get(Ct), s = i.add(), a = t.get(sd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(qd, Dr); if (Yv(c || Dr), !t.get(RA, !0))
    return Mr(e) ? t.get(Pe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Mr(e)) {
    let u = t.get(Pe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return QD?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var QD;
function AD() { QD = AA; }
function AA(e, t) { let n = e.injector.get(Pe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function kA(e, t, n) { try {
    let o = n();
    return rd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var ZD = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => $y(o?.ngZone, Fe(q({}, Zs({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [Qs({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Ze, useExisting: Ys }, nc], c = Ty(n.moduleType, this.injector, a); return AD(), zD({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = cd({}, o); return AD(), bA(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(ia, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Re(Te)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), Rt = null, YD = new S("");
function OA(e) { if (Rt && !Rt.get(YD, !1))
    throw new w(400, !1); ad(), Rt = e; let t = e.get(ZD); return JD(e), t; }
function xA(e, t, n = []) { let o = `Platform: ${t}`, r = new S(o); return (i = []) => { let s = pf(); if (!s || s.injector.get(YD, !1)) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    e ? e(a) : OA(KD(a, o));
} return PA(r); }; }
function KD(e = [], t) { return Te.create({ name: t, providers: [{ provide: _f, useValue: "platform" }, { provide: ia, useValue: new Set([() => Rt = null]) }, ...e] }); }
function PA(e) { let t = pf(); if (!t)
    throw new w(401, !1); return t; }
function pf() { return Rt?.get(ZD) ?? null; }
function ux() { pf()?.destroy(); }
function LA(e = []) { if (Rt)
    return Rt; let t = KD(e); return Rt = t, ad(), JD(t), t; }
function dx(e) { return ze([{ provide: Bl, useValue: e, multi: !0 }]); }
function JD(e) { let t = e.get(Bl, null); Ur(e, () => { t?.forEach(n => n()); }); }
function fx(e) { return ze([]); }
function px() { return !1; }
function hx() { }
function gx(e) { let t = Gu(e); if (!t)
    throw XD(e); return new Pn(t); }
function mx(e) { let t = Gu(e); if (!t)
    throw XD(e); return t; }
function XD(e) { return new Error(`No module with ID ${e} loaded`); }
var FA = (() => { class e {
    static __NG_ELEMENT_ID__ = jA;
} return e; })();
function jA(e) { return VA(N(), g(), (e & 16) === 16); }
function VA(e, t, n) { if (De(e) && !n) {
    let o = le(e.index, t);
    return new _t(o, o);
}
else if (e.type & 175) {
    let o = t[Z];
    return new _t(o, t);
} return null; }
var rf = class extends FA {
}, kD = class extends rf {
}, sa = class {
    constructor() { }
    supports(t) { return Wo(t); }
    create(t) { return new sf(t); }
}, HA = (e, t) => t, sf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || HA; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < OD(o, r, i) ? n : o, a = OD(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Wo(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Ym(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new af(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new aa), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new aa), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, af = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, cf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, aa = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new cf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function OD(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var ca = class {
    constructor() { }
    supports(t) { return t instanceof Map || Rs(t); }
    create() { return new lf; }
}, lf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Rs(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new uf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, uf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function xD() { return new eC([new sa]); }
var eC = (() => { class e {
    factories;
    static \u0275prov = j({ token: e, providedIn: "root", factory: xD });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: o => e.create(n, o || xD()), deps: [[e, new Zi, new Qi]] }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function PD() { return new tC([new ca]); }
var tC = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: PD });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: o => e.create(n, o || PD()), deps: [[e, new Zi, new Qi]] }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), BA = [new ca], UA = [new sa], yx = new eC(UA), vx = new tC(BA), Ex = xA(null, "core", []), Ix = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Re(Pe)); };
    static \u0275mod = Wu({ type: e });
    static \u0275inj = lo({});
} return e; })();
function Dx(e) { O(8); try {
    let { rootComponent: t, appProviders: n, platformProviders: o } = e, r = LA(o), i = [Qs({}), { provide: Ze, useExisting: Ys }, nc, ...n || []], s = new Qo({ providers: i, parent: r, debugName: "", runEnvironmentInitializers: !1 });
    return zD({ r3Injector: s.injector, platformInjector: r, rootComponent: t });
}
catch (t) {
    return Promise.reject(t);
}
finally {
    O(9);
} }
var oa = new WeakSet, LD = "", ra = [];
function FD(e) { return e.get(ss, Ql); }
function $A() { let e = [{ provide: ss, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(rt);
            t = !!window._ejsas?.[n];
        } return t && ae("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: pt, useValue: () => { let t = D(Pe), { injector: n } = t; if (!oa.has(t)) {
        let o = D(sr);
        if (FD(n)) {
            eg();
            let r = n.get(rt), i = Jh(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Kh(s, a, c), Kl(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: vr, useFactory: () => { let t = D(Pe), { injector: n } = t; return () => { if (!FD(n) || oa.has(t))
        return; oa.add(t); let o = n.get(rt); t.onDestroy(() => { oa.delete(t), typeof ngServerMode < "u" && !ngServerMode && ef(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Xl); GA(r, n); let i = n.get(sr); i.get(LD)?.forEach(Jl), i.delete(LD); let s = r.instance; us(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var GA = (e, t) => { let n = t.get(rt), o = window._ejsas[n], r = e.instance = new CD(new ea(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = TD(n); r.replayEarlyEventInfos(i), ef(n); let s = new ta(a => { WA(t, a, a.currentTarget); }); DD(r, s); };
function qA(e, t, n) { let o = new Map, r = t[xt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!lD(l))
        continue;
    na(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function WA(e, t, n) { let o = (n && n.getAttribute(zn)) ?? ""; /d\d+/.test(o) ? zA(o, e, t, n) : t.eventPhase === Xd.REPLAY && eu(t, n); }
function zA(e, t, n, o) { ra.push({ event: n, currentTarget: o }), lt(t, e, QA); }
function QA(e) { let t = [...ra], n = new Set(e); ra = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(zn);
    n.has(i) ? eu(o, r) : ra.push({ event: o, currentTarget: r });
} }
var df = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, ZA = 0;
function nC(e) { return e.ssrId || (e.ssrId = `t${ZA++}`), e.ssrId; }
function oC(e, t, n) { let o = []; return Rn(e, t, n, o), o.length; }
function YA(e) { let t = []; return Cs(e, t), t.length; }
function rC(e, t, n) { let o = e[L]; return o && !o.hasAttribute($n) ? la(o, e, null, t) : null; }
function iC(e, t, n) { let o = Eo(e[L]), r = rC(o, t); if (r === null)
    return; let i = k(o[L]), s = e[W], a = la(i, s, null, t), c = o[M], l = `${r}|${a}`; c.setAttribute(i, Mn, l); }
function Cx(e, t) { let n = e.injector, o = Om(n), r = us(n), i = new df, s = new Map, a = e._views, c = n.get(ss, Ql), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(rt); for (let h of a) {
    let m = tu(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        K(m) ? iC(m, v) : rC(m, v), tk(s, t);
    }
} let f = i.getAll(), p = n.get(Kt); if (p.set(as, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(cs, h);
} return l; }
function KA(e, t, n, o, r) { let i = [], s = ""; for (let a = U; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (He(c) && (c = c[E], K(c))) {
        u = YA(c) + 1, iC(c, r);
        let p = Eo(c[L]);
        d = { [ns]: p[y].ssrId, [Xe]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = nC(p), u = oC(p, c, p.firstChild)), d = { [ns]: l, [Xe]: u };
        let h = !1;
        if (Zy(n[y], t)) {
            let m = he(n, t), v = oe(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let I = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let A = [];
                Cs(e, A);
                let ce = { [Xe]: A.length, [ir]: m[ct] }, Le = JA(v.hydrateTriggers);
                Le.length > 0 && (ce[is] = Le), o !== null && (ce[ql] = o), r.deferBlocks.set(I, ce);
                let fe = k(e);
                fe !== void 0 ? fe.nodeType === Node.COMMENT_NODE && jD(fe, I) : jD(fe, I), h || ok(v, A, I, r), o = I, d[rs] = I;
            }
            d[ir] = m[ct];
        }
        h || Object.assign(d, sC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[or] ??= 1, p[or]++;
    }
    else
        s = f, i.push(d);
} return i; }
function JA(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function Nr(e, t, n, o) { let r = t.index - E; e[rr] ??= {}, e[rr][r] ??= Sm(t, n, o); }
function tf(e, t) { let n = typeof t == "number" ? t : t.index - E; e[Wn] ??= [], e[Wn].includes(n) || e[Wn].push(n); }
function sC(e, t = null, n) { let o = {}, r = e[y], i = xm(r, n), s = n.shouldReplayEvents ? qA(r, e, n.eventTypesToReplay) : null; for (let a = E; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - E, u = Pm(e, a, n);
    if (u) {
        o[os] ??= {}, o[os][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            tf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + E];
            Nr(o, f, e, i);
        }
        continue;
    }
    if (Yi(c) && !Qn(c)) {
        if (K(e[a]) && c.tView && (o[ts] ??= {}, o[ts][l] = nC(c.tView)), eo(c, e) && nk(c)) {
            tf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Aa(d) && !Gn(d) && (eo(d, e) ? tf(o, d) : Nr(o, d, e, i));
                    else
                        throw Em(k(e[a]));
        }
        if (XA(o, c, e, i), K(e[a])) {
            let d = e[a][L];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute($n) || la(f, d, t, n);
            }
            o[qn] ??= {}, o[qn][l] = KA(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !vh(c)) {
            let d = k(e[a][L]);
            d.hasAttribute($n) || la(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[nr] ??= {}, o[nr][l] = oC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Gn(d) && Nr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            ou(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && Yl(d, s.get(d), t);
        }
    }
} return o; }
function XA(e, t, n, o) { Aa(t) || (t.projectionNext && t.projectionNext !== t.next && !Gn(t.projectionNext) && Nr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && eo(t.parent, n) && !eo(t, n) && Nr(e, t, n, o)); }
function ek(e) { let t = e[F]; return t?.constructor ? B(t.constructor)?.encapsulation === et.ShadowDom : !1; }
function la(e, t, n, o) { let r = t[M]; if (Sf(t) && !_s() || ek(t))
    return r.setAttribute(e, $n, ""), null; {
    let i = sC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Mn, s.toString()), s;
} }
function jD(e, t) { e.textContent = `ngh=${t}`; }
function tk(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function nk(e) { let t = e; for (; t != null;) {
    if (De(t))
        return !0;
    t = t.parent;
} return !1; }
function ok(e, t, n, o) { let r = pg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Yl(s, r, n);
} }
var VD = !1, HD = !1, BD = !1;
function rk() { VD || (VD = !0, ag(), $v(), FE(), Gv(), Fy(), ay(), Bm(), im()); }
function ik() { HD || (HD = !0, Jv(), km(), Fm()); }
function sk() { BD || (BD = !0, mg()); }
function ak(e) { return e.whenStable(); }
var Tx = "ngcm";
function Mx() { let e = [{ provide: Jt, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Kt, { optional: !0 })?.get(as, null)), t && ae("NgHydration"), t; } }, { provide: pt, useValue: () => { Au(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(Jt) && (vg(ot()), rk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Wl, useFactory: () => D(Jt) }, { provide: vr, useFactory: () => { if (D(Jt)) {
        let t = D(Pe);
        return () => { ak(t).then(() => { t.destroyed || ku(t); }); };
    } return () => { }; }, multi: !0 }), ze(e); }
function Nx() { return [{ provide: zl, useFactory: () => D(Jt) }, { provide: pt, useValue: () => { D(Jt) && (ik(), Au(!0), ae("NgI18nHydration")); }, multi: !0 }]; }
function _x() { let e = [$A(), { provide: Zl, useValue: !0 }, { provide: it, useClass: tg }, { provide: pt, useValue: () => { sk(), ae("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vr, useFactory: () => { let t = D(Te), n = ot(); return () => { let o = yg(t), r = bm(n, n.body); fv(t, o, r), hg(n, t); }; }, multi: !0 }), e; }
function wx(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function Sx(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var ck = "\u{1F170}\uFE0F", da = !1;
function bx(e) { if (!da)
    return; let { startLabel: t } = aC(e); performance.mark(t); }
function Rx(e) { if (!da)
    return; let { startLabel: t, labelName: n, endLabel: o } = aC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function aC(e) { let t = `${ck}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var UD = !1;
function Ax() { if (!UD && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    UD = !0, console.warn("Performance API is not supported on this platform");
    return;
} da = !0; }
function kx() { da = !1; }
function Ox(e) { let t = e; for (; t;) {
    let n = Lh(t);
    if (n !== null)
        for (let o = E; o < n.length; o++) {
            let r = n[o];
            if (!Y(r) && !K(r) || r[L] !== t)
                continue;
            let i = n[y], s = vt(i, o);
            if (De(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function xx(e) { }
function Px(e) { return X({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(de, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Lx(e) { nd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function Fx(e) { tv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); nd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function jx(e) { return X({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(de, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function Vx(e) { return X({ usage: 1, kind: lk(e.target), type: e.type }).compileFactoryDeclaration(de, `ng:///${e.type.name}/\u0275fac.js`, e); }
function lk(e) { switch (e) {
    case io.Directive: return "directive";
    case io.Component: return "component";
    case io.Injectable: return "injectable";
    case io.Pipe: return "pipe";
    case io.NgModule: return "NgModule";
} }
function Hx(e) { return X({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(de, `ng:///${e.type.name}/\u0275prov.js`, e); }
function Bx(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(de, `ng:///${e.type.name}/\u0275inj.js`, e); }
function Ux(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(de, `ng:///${e.type.name}/\u0275mod.js`, e); }
function $x(e) { return X({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(de, `ng:///${e.type.name}/\u0275pipe.js`, e); }
function Gx(e) { let t = ot(), n = e.get(rt), o = Ul(t, n), r = {}; for (let [i, s] of Object.entries(o))
    rg(i) || (r[i] = s); return r; }
var nf = Symbol("NOT_SET"), cC = new Set, uk = Fe(q({}, ma), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: nf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== nf && !Sr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? cC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = co(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        wr(this, n);
    } return (this.value === nf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), ff = class extends Yo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i, s), this.scheduler = r; for (let a of Xu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(uk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (_r(l), l.value), l.signal[dt] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        for (let n of t?.cleanup ?? cC)
            n(); }
};
function qx(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ls; let n = t?.injector ?? D(Te), o = n.get(Ze), r = n.get(Ps), i = n.get(no, null, { optional: !0 }); r.impl ??= n.get(ed); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(ni, null, { optional: !0 }), c = new ff(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n.get(dn), i?.snapshot(null)); return r.impl.register(c), c; }
function Wx(e, t) { let n = B(e), o = t.elementInjector || Br(); return new wt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function zx(e) { let t = B(e); if (!t)
    return null; let n = new wt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function Qx(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var Zx = new S("", { providedIn: "platform", factory: () => null }), Yx = new S("", { providedIn: "platform", factory: () => null }), Kx = new S("", { providedIn: "platform", factory: () => null });
export { VT as ANIMATION_MODULE_TYPE, vr as APP_BOOTSTRAP_LISTENER, rt as APP_ID, id as APP_INITIALIZER, sd as ApplicationInitStatus, Ix as ApplicationModule, Pe as ApplicationRef, Rh as Attribute, tD as COMPILER_OPTIONS, HT as CSP_NONCE, OM as CUSTOM_ELEMENTS_SCHEMA, Xi as ChangeDetectionStrategy, FA as ChangeDetectorRef, AR as Compiler, Ol as CompilerFactory, MR as Component, bs as ComponentFactory, hr as ComponentFactoryResolver, Gm as ComponentRef, sx as ContentChild, ix as ContentChildren, FR as DEFAULT_CURRENCY_CODE, DC as DOCUMENT, Yt as DebugElement, xl as DebugEventListener, Xo as DebugNode, sf as DefaultIterableDiffer, dn as DestroyRef, eD as Directive, pt as ENVIRONMENT_INITIALIZER, tr as ElementRef, kD as EmbeddedViewRef, ht as EnvironmentInjector, ei as ErrorHandler, Ke as EventEmitter, MA as HOST_TAG_NAME, lh as Host, MD as HostAttributeToken, SR as HostBinding, bR as HostListener, mC as INJECTOR, ah as Inject, uT as Injectable, S as InjectionToken, Te as Injector, _R as Input, eC as IterableDiffers, tC as KeyValueDiffers, qd as LOCALE_ID, oD as MissingTranslationStrategy, zi as ModuleWithComponentFactories, xM as NO_ERRORS_SCHEMA, RR as NgModule, Dy as NgModuleFactory, On as NgModuleRef, Il as NgProbeToken, $ as NgZone, Qi as Optional, wR as Output, cc as OutputEmitterRef, jT as PACKAGE_ROOT_URL, FT as PLATFORM_ID, Bl as PLATFORM_INITIALIZER, sc as PendingTasks, NR as Pipe, ZD as PlatformRef, so as Query, wi as QueryList, Zx as REQUEST, Kx as REQUEST_CONTEXT, Yx as RESPONSE_INIT, O_ as Renderer2, qo as RendererFactory2, ki as RendererStyleFlags2, qm as Sanitizer, Xt as SecurityContext, ch as Self, Ci as SimpleChange, Zi as SkipSelf, jR as TRANSLATIONS, VR as TRANSLATIONS_FORMAT, $o as TemplateRef, DS as Testability, rv as TestabilityRegistry, Kt as TransferState, uh as Type, lx as VERSION, of as Version, cx as ViewChild, ax as ViewChildren, ks as ViewContainerRef, et as ViewEncapsulation, rf as ViewRef, Gy as afterEveryRender, qy as afterNextRender, qx as afterRenderEffect, HR as asNativeElements, EC as assertInInjectionContext, MC as assertNotInReactiveContext, PA as assertPlatform, wx as booleanAttribute, wC as computed, nx as contentChild, ox as contentChildren, Wx as createComponent, qu as createEnvironmentInjector, Cy as createNgModule, ww as createNgModuleRef, OA as createPlatform, xA as createPlatformFactory, dC as defineInjectable, ux as destroyPlatform, SC as effect, hx as enableProdMode, vS as enableProfiling, va as forwardRef, Hn as getDebugNode, gx as getModuleFactory, mx as getNgModuleById, pf as getPlatform, vC as importProvidersFrom, D as inject, XO as input, ey as inputBinding, px as isDevMode, Qf as isSignal, ho as isStandalone, bC as linkedSignal, ze as makeEnvironmentProviders, UT as makeStateKey, Qx as mergeApplicationConfig, rx as model, Sx as numberAttribute, JO as output, ty as outputBinding, Ex as platformCore, CS as provideAppInitializer, CC as provideBrowserGlobalErrorListeners, fx as provideCheckNoChangesConfig, yC as provideEnvironmentInitializer, kM as provideNgReflectAttributes, dx as providePlatformInitializer, OR as provideZoneChangeDetection, PR as provideZonelessChangeDetection, zx as reflectComponentType, H as resolveForwardRef, RC as resource, Ur as runInInjectionContext, iv as setTestabilityGetter, oc as signal, X_ as twoWayBinding, _C as untracked, ex as viewChild, tx as viewChildren, YD as \u0275ALLOW_MULTIPLE_PLATFORMS, $h as \u0275AcxChangeDetectionStrategy, Gh as \u0275AcxViewEncapsulation, Ps as \u0275AfterRenderManager, Tx as \u0275CLIENT_RENDER_MODE_FLAG, U as \u0275CONTAINER_HEADER_OFFSET, Ze as \u0275ChangeDetectionScheduler, Ys as \u0275ChangeDetectionSchedulerImpl, bs as \u0275ComponentFactory, yS as \u0275Console, Dr as \u0275DEFAULT_LOCALE_ID, Jy as \u0275DEFER_BLOCK_CONFIG, fS as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, it as \u0275DEHYDRATED_BLOCK_REGISTRY, Yu as \u0275DeferBlockBehavior, V as \u0275DeferBlockState, RA as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, ac as \u0275EffectScheduler, Uh as \u0275Framework, lg as \u0275HydrationStatus, BT as \u0275IMAGE_CONFIG, qh as \u0275IMAGE_CONFIG_DEFAULTS, _f as \u0275INJECTOR_SCOPE, KO as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Dt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Jt as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Zl as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, sr as \u0275JSACTION_BLOCK_ELEMENT_MAP, Xl as \u0275JSACTION_EVENT_CONTRACT, Si as \u0275LContext, Fn as \u0275LocaleDataIndex, on as \u0275NG_COMP_DEF, Or as \u0275NG_DIR_DEF, kt as \u0275NG_ELEMENT_ID, Ea as \u0275NG_INJ_DEF, Ia as \u0275NG_MOD_DEF, xr as \u0275NG_PIPE_DEF, kr as \u0275NG_PROV_DEF, mi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, x as \u0275NO_CHANGE, Pn as \u0275NgModuleFactory, Ln as \u0275NoopNgZone, ck as \u0275PERFORMANCE_MARK_PREFIX, nD as \u0275PROVIDED_NG_ZONE, Ct as \u0275PendingTasksInternal, _a as \u0275R3Injector, Di as \u0275ReflectionCapabilities, wt as \u0275Render3ComponentFactory, Vi as \u0275Render3ComponentRef, xn as \u0275Render3NgModuleRef, AC as \u0275ResourceImpl, w as \u0275RuntimeError, dt as \u0275SIGNAL, ig as \u0275SSR_CONTENT_INTEGRITY_MARKER, nv as \u0275TESTABILITY, ov as \u0275TESTABILITY_GETTER, Ky as \u0275TimerScheduler, xs as \u0275TracingAction, no as \u0275TracingService, _t as \u0275ViewRef, br as \u0275XSS_SECURITY_URL, fn as \u0275ZONELESS_ENABLED, Sg as \u0275_sanitizeHtml, ps as \u0275_sanitizeUrl, Yn as \u0275allowSanitizationBypassAndThrow, Cx as \u0275annotateForHydration, xx as \u0275assertType, cM as \u0275bypassSanitizationTrustHtml, fM as \u0275bypassSanitizationTrustResourceUrl, uM as \u0275bypassSanitizationTrustScript, lM as \u0275bypassSanitizationTrustStyle, dM as \u0275bypassSanitizationTrustUrl, yy as \u0275clearResolutionOfComponentResourcesQueue, GI as \u0275compileComponent, Gd as \u0275compileDirective, UI as \u0275compileNgModule, $I as \u0275compileNgModuleDefs, bA as \u0275compileNgModuleFactory, XI as \u0275compilePipe, Ca as \u0275convertToBitFlags, IC as \u0275createInjector, LA as \u0275createOrReusePlatformInjector, yx as \u0275defaultIterableDiffers, vx as \u0275defaultKeyValueDiffers, An as \u0275depsTracker, Km as \u0275devModeEqual, kx as \u0275disableProfiling, Ax as \u0275enableProfiling, kC as \u0275encapsulateResourceError, Id as \u0275findLocaleData, HI as \u0275flushModuleScopingQueueAsMuchAsPossible, vf as \u0275formatRuntimeError, dR as \u0275generateStandaloneInDeclarationsError, mS as \u0275getAsyncClassMetadataFn, Ox as \u0275getClosestComponentName, B as \u0275getComponentDef, Hn as \u0275getDebugNode, Ei as \u0275getDeferBlocks, ST as \u0275getDirectives, ot as \u0275getDocument, RT as \u0275getHostElement, fC as \u0275getInjectableDef, ye as \u0275getLContext, $S as \u0275getLocaleCurrencyCode, Wv as \u0275getLocalePluralCase, NC as \u0275getOutputDestroyRef, Dg as \u0275getSanitizationBypassType, Gx as \u0275getTransferState, LM as \u0275getUnknownElementStrictMode, jM as \u0275getUnknownPropertyStrictMode, ve as \u0275global, jA as \u0275injectChangeDetectorRef, Dx as \u0275internalCreateApplication, Qs as \u0275internalProvideZoneChangeDetection, av as \u0275isBoundToModule, Dw as \u0275isComponentDefPendingResolution, gC as \u0275isEnvironmentProviders, pC as \u0275isInjectable, Bt as \u0275isNgModule, rd as \u0275isPromise, sv as \u0275isSubscribable, FN as \u0275isViewDirty, jN as \u0275markForRefresh, qe as \u0275noSideEffects, Ud as \u0275patchComponentDefWithScope, ae as \u0275performanceMarkFeature, ES as \u0275publishExternalGlobalUtil, JT as \u0275readHydrationInfo, US as \u0275registerLocaleData, Je as \u0275renderDeferBlockState, hR as \u0275resetCompiledComponents, lR as \u0275resetJitOptions, gy as \u0275resolveComponentResources, Cw as \u0275restoreComponentResolutionQueue, _w as \u0275setAllowDuplicateNgModuleIdsForTest, OC as \u0275setAlternateWeakRefImpl, LI as \u0275setClassDebugInfo, nd as \u0275setClassMetadata, tv as \u0275setClassMetadataAsync, lC as \u0275setCurrentInjector, PT as \u0275setDocument, hC as \u0275setInjectorProfilerContext, Yv as \u0275setLocaleId, PM as \u0275setUnknownElementStrictMode, FM as \u0275setUnknownPropertyStrictMode, bx as \u0275startMeasuring, Rx as \u0275stopMeasuring, Io as \u0275store, nn as \u0275stringify, $d as \u0275transitiveScopesFor, Vs as \u0275triggerResourceLoading, uC as \u0275truncateMiddle, GS as \u0275unregisterLocaleData, st as \u0275unwrapSafeValue, TC as \u0275unwrapWritableSignal, Mx as \u0275withDomHydration, $A as \u0275withEventReplay, Nx as \u0275withI18nSupport, _x as \u0275withIncrementalHydration, Ay as \u0275\u0275CopyDefinitionFeature, uI as \u0275\u0275ExternalStylesFeature, io as \u0275\u0275FactoryTarget, ky as \u0275\u0275HostDirectivesFeature, zu as \u0275\u0275InheritDefinitionFeature, fh as \u0275\u0275NgOnChangesFeature, lI as \u0275\u0275ProvidersFeature, Wg as \u0275\u0275advance, KE as \u0275\u0275attachSourceLocations, ld as \u0275\u0275attribute, wE as \u0275\u0275classMap, bd as \u0275\u0275classProp, Lv as \u0275\u0275componentInstance, jv as \u0275\u0275conditional, Hs as \u0275\u0275conditionalBranchCreate, Fv as \u0275\u0275conditionalCreate, hE as \u0275\u0275contentQuery, vE as \u0275\u0275contentQuerySignal, Bd as \u0275\u0275declareLet, pv as \u0275\u0275defer, ev as \u0275\u0275deferEnableTimerScheduling, yv as \u0275\u0275deferHydrateNever, bv as \u0275\u0275deferHydrateOnHover, Iv as \u0275\u0275deferHydrateOnIdle, Tv as \u0275\u0275deferHydrateOnImmediate, kv as \u0275\u0275deferHydrateOnInteraction, _v as \u0275\u0275deferHydrateOnTimer, Pv as \u0275\u0275deferHydrateOnViewport, mv as \u0275\u0275deferHydrateWhen, wv as \u0275\u0275deferOnHover, vv as \u0275\u0275deferOnIdle, Dv as \u0275\u0275deferOnImmediate, Rv as \u0275\u0275deferOnInteraction, Mv as \u0275\u0275deferOnTimer, Ov as \u0275\u0275deferOnViewport, Sv as \u0275\u0275deferPrefetchOnHover, Ev as \u0275\u0275deferPrefetchOnIdle, Cv as \u0275\u0275deferPrefetchOnImmediate, Av as \u0275\u0275deferPrefetchOnInteraction, Nv as \u0275\u0275deferPrefetchOnTimer, xv as \u0275\u0275deferPrefetchOnViewport, gv as \u0275\u0275deferPrefetchWhen, hv as \u0275\u0275deferWhen, My as \u0275\u0275defineComponent, _y as \u0275\u0275defineDirective, j as \u0275\u0275defineInjectable, lo as \u0275\u0275defineInjector, Wu as \u0275\u0275defineNgModule, wy as \u0275\u0275definePipe, to as \u0275\u0275directiveInject, Fa as \u0275\u0275disableBindings, fd as \u0275\u0275domElement, md as \u0275\u0275domElementContainer, gd as \u0275\u0275domElementContainerEnd, Ws as \u0275\u0275domElementContainerStart, Gs as \u0275\u0275domElementEnd, $s as \u0275\u0275domElementStart, _d as \u0275\u0275domListener, vd as \u0275\u0275domProperty, Zu as \u0275\u0275domTemplate, dd as \u0275\u0275element, hd as \u0275\u0275elementContainer, Ir as \u0275\u0275elementContainerEnd, qs as \u0275\u0275elementContainerStart, Us as \u0275\u0275elementEnd, Bs as \u0275\u0275elementStart, La as \u0275\u0275enableBindings, PI as \u0275\u0275getComponentDepsFactory, qv as \u0275\u0275getCurrentView, Sh as \u0275\u0275getInheritedFactory, FI as \u0275\u0275getReplaceMetadataURL, aE as \u0275\u0275i18n, lE as \u0275\u0275i18nApply, cE as \u0275\u0275i18nAttributes, Cd as \u0275\u0275i18nEnd, Td as \u0275\u0275i18nExp, uE as \u0275\u0275i18nPostprocess, Dd as \u0275\u0275i18nStart, Re as \u0275\u0275inject, Ki as \u0275\u0275injectAttribute, JE as \u0275\u0275interpolate, XE as \u0275\u0275interpolate1, eI as \u0275\u0275interpolate2, tI as \u0275\u0275interpolate3, nI as \u0275\u0275interpolate4, oI as \u0275\u0275interpolate5, rI as \u0275\u0275interpolate6, iI as \u0275\u0275interpolate7, sI as \u0275\u0275interpolate8, aI as \u0275\u0275interpolateV, Wm as \u0275\u0275invalidFactory, Pr as \u0275\u0275invalidFactoryDep, Md as \u0275\u0275listener, yE as \u0275\u0275loadQuery, ec as \u0275\u0275namespaceHTML, Xa as \u0275\u0275namespaceMathML, Ja as \u0275\u0275namespaceSVG, dE as \u0275\u0275nextContext, Lx as \u0275\u0275ngDeclareClassMetadata, Fx as \u0275\u0275ngDeclareClassMetadataAsync, jx as \u0275\u0275ngDeclareComponent, Px as \u0275\u0275ngDeclareDirective, Vx as \u0275\u0275ngDeclareFactory, Hx as \u0275\u0275ngDeclareInjectable, Bx as \u0275\u0275ngDeclareInjector, Ux as \u0275\u0275ngDeclareNgModule, $x as \u0275\u0275ngDeclarePipe, SI as \u0275\u0275pipe, bI as \u0275\u0275pipeBind1, RI as \u0275\u0275pipeBind2, AI as \u0275\u0275pipeBind3, kI as \u0275\u0275pipeBind4, OI as \u0275\u0275pipeBindV, pE as \u0275\u0275projection, fE as \u0275\u0275projectionDef, ud as \u0275\u0275property, pI as \u0275\u0275pureFunction0, hI as \u0275\u0275pureFunction1, gI as \u0275\u0275pureFunction2, mI as \u0275\u0275pureFunction3, yI as \u0275\u0275pureFunction4, vI as \u0275\u0275pureFunction5, EI as \u0275\u0275pureFunction6, II as \u0275\u0275pureFunction7, DI as \u0275\u0275pureFunction8, CI as \u0275\u0275pureFunctionV, IE as \u0275\u0275queryAdvance, mE as \u0275\u0275queryRefresh, YE as \u0275\u0275readContextLet, DE as \u0275\u0275reference, $u as \u0275\u0275registerNgModuleType, Uv as \u0275\u0275repeater, Bv as \u0275\u0275repeaterCreate, Hv as \u0275\u0275repeaterTrackByIdentity, Vv as \u0275\u0275repeaterTrackByIndex, jI as \u0275\u0275replaceMetadata, Ha as \u0275\u0275resetView, lu as \u0275\u0275resolveBody, jg as \u0275\u0275resolveDocument, Fg as \u0275\u0275resolveWindow, Va as \u0275\u0275restoreView, bg as \u0275\u0275sanitizeHtml, cu as \u0275\u0275sanitizeResourceUrl, Ag as \u0275\u0275sanitizeScript, Rg as \u0275\u0275sanitizeStyle, au as \u0275\u0275sanitizeUrl, xg as \u0275\u0275sanitizeUrlOrResourceUrl, dI as \u0275\u0275setComponentScope, fI as \u0275\u0275setNgModuleScope, ZE as \u0275\u0275storeLet, _E as \u0275\u0275styleMap, Sd as \u0275\u0275styleProp, Nd as \u0275\u0275syntheticHostListener, Ed as \u0275\u0275syntheticHostProperty, Qu as \u0275\u0275template, xI as \u0275\u0275templateRefExtractor, PE as \u0275\u0275text, Rd as \u0275\u0275textInterpolate, zs as \u0275\u0275textInterpolate1, Ad as \u0275\u0275textInterpolate2, kd as \u0275\u0275textInterpolate3, Od as \u0275\u0275textInterpolate4, xd as \u0275\u0275textInterpolate5, Pd as \u0275\u0275textInterpolate6, Ld as \u0275\u0275textInterpolate7, Fd as \u0275\u0275textInterpolate8, jd as \u0275\u0275textInterpolateV, kg as \u0275\u0275trustConstantHtml, Og as \u0275\u0275trustConstantResourceUrl, zE as \u0275\u0275twoWayBindingSet, Hd as \u0275\u0275twoWayListener, Vd as \u0275\u0275twoWayProperty, Iy as \u0275\u0275validateIframeAttribute, gE as \u0275\u0275viewQuery, EE as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
