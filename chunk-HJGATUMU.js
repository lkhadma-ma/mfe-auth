import { a as te, b as I, f as re } from "@nf-internal/chunk-R4BOCH5O";
import { D as ie, E as Ve, F as $e, G as qe, b as m, c as b, d as je, g as Oe, o as Se, p as Pe, q as Le, r as oe, u as Ae, w as ke } from "@nf-internal/chunk-O24SRXC7";
import { a as $, b as q, e as ne } from "@nf-internal/chunk-ACKELEN3";
import { BehaviorSubject as Pn, Observable as Ln } from "rxjs";
import { setActiveConsumer as T } from "@angular/core/primitives/signals";
import { isNotFound as An } from "@angular/core/primitives/di";
var hr = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", f = class extends Error {
    code;
    constructor(n, t) { super(Y(n, t)), this.code = n; }
};
function kn(e) { return `NG0${Math.abs(e)}`; }
function Y(e, n) { return `${kn(e)}${n ? ": " + n : ""}`; }
var pr = globalThis;
function c(e) { for (let n in e)
    if (e[n] === c)
        return n; throw Error(""); }
function gr(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function S(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(S).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function mr(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function vr(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var Vn = c({ __forward_ref__: c });
function Qe(e) { return e.__forward_ref__ = Qe, e.toString = function () { return S(this()); }, e; }
function v(e) { return $n(e) ? e() : e; }
function $n(e) { return typeof e == "function" && e.hasOwnProperty(Vn) && e.__forward_ref__ === Qe; }
function yr(e, n, t) { e != n && J(t, e, n, "=="); }
function qn(e, n) { e == null && J(n, e, null, "!="); }
function J(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function _(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var Ir = _;
function Er(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function Z(e) { return Hn(e, Ke); }
function Dr(e) { return Z(e) !== null; }
function Hn(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function Gn(e) { let n = e?.[Ke] ?? null; return n || null; }
function He(e) { return e && e.hasOwnProperty(Ge) ? e[Ge] : null; }
var Ke = c({ \u0275prov: c }), Ge = c({ \u0275inj: c }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = _({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Be;
function wr(e) { J("setInjectorProfilerContext should never be called in production mode"); let n = Be; return Be = e, n; }
function Xe(e) { return e && !!e.\u0275providers; }
var Bn = c({ \u0275cmp: c }), Un = c({ \u0275dir: c }), Wn = c({ \u0275pipe: c }), zn = c({ \u0275mod: c }), Ue = c({ \u0275fac: c }), Tr = c({ __NG_ELEMENT_ID__: c }), We = c({ __NG_ENV_ID__: c });
function Yn(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function ze(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Yn(e); }
var ye = c({ ngErrorCode: c }), en = c({ ngErrorMessage: c }), O = c({ ngTokenPath: c });
function Jn(e, n) { return nn("", -200, n); }
function Zn(e, n) { throw new f(-201, !1); }
function Qn(e, n) { e[O] ??= []; let t = e[O], r; typeof n == "object" && "multi" in n && n?.multi === !0 ? (qn(n.provide, "Token with multi: true should have a provide property"), r = ze(n.provide)) : r = ze(n), t[0] !== r && e[O].unshift(r); }
function Kn(e, n) { let t = e[O], r = e[ye], o = e[en] || e.message; return e.message = et(o, r, t, n), e; }
function nn(e, n, t) { let r = new f(n, e); return r[ye] = n, r[en] = e, t && (r[O] = t), r; }
function Xn(e) { return e[ye]; }
function et(e, n, t = [], r = null) { let o = ""; t && t.length > 1 && (o = ` Path: ${t.join(" -> ")}.`); let i = r ? ` Source: ${r}.` : ""; return Y(n, `${e}${i}${o}`); }
var ue;
function tn() { return ue; }
function E(e) { let n = ue; return ue = e, n; }
function nt(e, n, t) { let r = Z(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; Zn(e, "Injector"); }
var tt = {}, w = tt, ce = "__NG_DI_FLAG__", ae = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = G(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : w, r);
    }
    catch (o) {
        if (re(o))
            return o;
        throw o;
    } }
};
function rt(e, n = 0) { let t = te(); if (t === void 0)
    throw new f(-203, !1); if (t === null)
    return nt(e, void 0, n); {
    let r = ot(n), o = t.retrieve(e, r);
    if (re(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function C(e, n = 0) { return (tn() || rt)(v(e), n); }
function Nr(e) { throw new f(202, !1); }
function h(e, n) { return C(e, G(n)); }
function G(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function ot(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function de(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = v(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new f(900, !1);
        let o, i = 0;
        for (let u = 0; u < r.length; u++) {
            let d = r[u], a = it(d);
            typeof a == "number" ? a === -1 ? o = d.token : i |= a : o = d;
        }
        n.push(C(o, i));
    }
    else
        n.push(C(r));
} return n; }
function xr(e, n) { return e[ce] = n, e.prototype[ce] = n, e; }
function it(e) { return e[ce]; }
function B(e, n) { let t = e.hasOwnProperty(Ue); return t ? e[Ue] : null; }
function Cr(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function Mr(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Ie(e, n) { e.forEach(t => Array.isArray(t) ? Ie(t, n) : n(t)); }
function _r(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Fr(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function Rr(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function br(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function st(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function jr(e, n, t) { let r = rn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, st(e, r, n, t)), r; }
function Or(e, n) { let t = rn(e, n); if (t >= 0)
    return e[t | 1]; }
function rn(e, n) { return ut(e, n, 1); }
function ut(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), u = e[i << t];
    if (n === u)
        return i << t;
    u > n ? o = i : r = i + 1;
} return ~(o << t); }
var Sr = {}, U = [], Q = new g(""), on = new g("", -1), sn = new g(""), W = class {
    get(n, t = w) { if (t === w) {
        let o = nn("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function ct(e) { return e[zn] || null; }
function Pr(e) { let n = ct(e); if (!n)
    throw new f(915, !1); return n; }
function un(e) { return e[Bn] || null; }
function at(e) { return e[Un] || null; }
function dt(e) { return e[Wn] || null; }
function Lr(e) { let n = un(e) || at(e) || dt(e); return n !== null && n.standalone; }
function cn(e) { return { \u0275providers: e }; }
function lt(e) { return cn([{ provide: Q, multi: !0, useValue: e }]); }
function ft(...e) { return { \u0275providers: ht(!0, e), \u0275fromNgModule: !0 }; }
function ht(e, ...n) { let t = [], r = new Set, o, i = u => { t.push(u); }; return Ie(n, u => { let d = u; le(d, i, [], r) && (o ||= [], o.push(d)); }), o !== void 0 && an(o, i), t; }
function an(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Ee(o, i => { n(i, r); });
} }
function le(e, n, t, r) { if (e = v(e), !e)
    return !1; let o = null, i = He(e), u = !i && un(e); if (!i && !u) {
    let a = e.ngModule;
    if (i = He(a), i)
        o = a;
    else
        return !1;
}
else {
    if (u && !u.standalone)
        return !1;
    o = e;
} let d = r.has(o); if (u) {
    if (d)
        return !1;
    if (r.add(o), u.dependencies) {
        let a = typeof u.dependencies == "function" ? u.dependencies() : u.dependencies;
        for (let l of a)
            le(l, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !d) {
        r.add(o);
        let l;
        try {
            Ie(i.imports, D => { le(D, n, t, r) && (l ||= [], l.push(D)); });
        }
        finally { }
        l !== void 0 && an(l, n);
    }
    if (!d) {
        let l = B(o) || (() => new o);
        n({ provide: o, useFactory: l, deps: U }, o), n({ provide: sn, useValue: o, multi: !0 }, o), n({ provide: Q, useValue: () => C(o), multi: !0 }, o);
    }
    let a = i.providers;
    if (a != null && !d) {
        let l = e;
        Ee(a, D => { n(D, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Ee(e, n) { for (let t of e)
    Xe(t) && (t = t.\u0275providers), Array.isArray(t) ? Ee(t, n) : n(t); }
var pt = c({ provide: String, useValue: c });
function dn(e) { return e !== null && typeof e == "object" && pt in e; }
function gt(e) { return !!(e && e.useExisting); }
function mt(e) { return !!(e && e.useFactory); }
function fe(e) { return typeof e == "function"; }
function Ar(e) { return !!e.useClass; }
var vt = new g(""), H = {}, Ye = {}, se;
function ln() { return se === void 0 && (se = new W), se; }
var P = class {
}, z = class extends P {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, pe(n, u => this.processProvider(u)), this.records.set(on, N(void 0, this)), o.has("environment") && this.records.set(P, N(void 0, this)); let i = this.records.get(vt); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(sn, U, { self: !0 })); }
    retrieve(n, t) { let r = G(t) || 0; try {
        return this.get(n, w, r);
    }
    catch (o) {
        if (An(o))
            return o;
        throw o;
    } }
    destroy() { j(this), this._destroyed = !0; let n = T(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), T(n);
    } }
    onDestroy(n) { return j(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { j(this); let t = I(this), r = E(void 0), o; try {
        return n();
    }
    finally {
        I(t), E(r);
    } }
    get(n, t = w, r) { if (j(this), n.hasOwnProperty(We))
        return n[We](this); let o = G(r), i, u = I(this), d = E(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(n);
            if (l === void 0) {
                let D = Tt(n) && Z(n);
                D && this.injectableDefInScope(D) ? l = N(he(n), H) : l = null, this.records.set(n, l);
            }
            if (l != null)
                return this.hydrate(n, l, o);
        }
        let a = o & 2 ? ln() : this.parent;
        return t = o & 8 && t === w ? null : t, a.get(n, t);
    }
    catch (a) {
        let l = Xn(a);
        throw l === -200 || l === -201 ? new f(l, null) : a;
    }
    finally {
        E(d), I(u);
    } }
    resolveInjectorInitializers() { let n = T(null), t = I(this), r = E(void 0), o; try {
        let i = this.get(Q, U, { self: !0 });
        for (let u of i)
            u();
    }
    finally {
        I(t), E(r), T(n);
    } }
    toString() { let n = [], t = this.records; for (let r of t.keys())
        n.push(S(r)); return `R3Injector[${n.join(", ")}]`; }
    processProvider(n) { n = v(n); let t = fe(n) ? n : v(n && n.provide), r = It(n); if (!fe(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = N(void 0, H, !0), o.factory = () => de(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = T(null); try {
        if (t.value === Ye)
            throw Jn(S(n));
        return t.value === H && (t.value = Ye, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && wt(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        T(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = v(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function he(e) { let n = Z(e), t = n !== null ? n.factory : B(e); if (t !== null)
    return t; if (e instanceof g)
    throw new f(204, !1); if (e instanceof Function)
    return yt(e); throw new f(204, !1); }
function yt(e) { if (e.length > 0)
    throw new f(204, !1); let t = Gn(e); return t !== null ? () => t.factory(e) : () => new e; }
function It(e) { if (dn(e))
    return N(void 0, e.useValue); {
    let n = Et(e);
    return N(n, H);
} }
function Et(e, n, t) { let r; if (fe(e)) {
    let o = v(e);
    return B(o) || he(o);
}
else if (dn(e))
    r = () => v(e.useValue);
else if (mt(e))
    r = () => e.useFactory(...de(e.deps || []));
else if (gt(e))
    r = (o, i) => C(v(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = v(e && (e.useClass || e.provide));
    if (Dt(e))
        r = () => new o(...de(e.deps));
    else
        return B(o) || he(o);
} return r; }
function j(e) { if (e.destroyed)
    throw new f(205, !1); }
function N(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function Dt(e) { return !!e.deps; }
function wt(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function Tt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function pe(e, n) { for (let t of e)
    Array.isArray(t) ? pe(t, n) : t && Xe(t) ? pe(t.\u0275providers, n) : n(t); }
function kr(e, n) { let t; e instanceof z ? (j(e), t = e) : t = new ae(e); let r, o = I(t), i = E(void 0); try {
    return n();
}
finally {
    I(o), E(i);
} }
function Nt() { return tn() !== void 0 || te() != null; }
function Vr(e) { if (!Nt())
    throw new f(-203, !1); }
var De = 0, fn = 1, p = 2, ge = 3, $r = 4, xt = 5, qr = 6, Ct = 7, hn = 8, Hr = 9, pn = 10, Gr = 11, Br = 12, Ur = 13, gn = 14, Wr = 15, zr = 16, Mt = 17, Yr = 18, Jr = 19, Zr = 20, x = 21, Qr = 22, K = 23, _t = 24, Kr = 25, Xr = 26, we = 1, eo = 6, no = 7, to = 8, ro = 9, oo = 10;
function Ft(e) { return Array.isArray(e) && typeof e[we] == "object"; }
function mn(e) { return Array.isArray(e) && e[we] === !0; }
function io(e) { return (e.flags & 4) !== 0; }
function so(e) { return e.componentOffset > -1; }
function uo(e) { return (e.flags & 1) === 1; }
function co(e) { return !!e.template; }
function ao(e) { return (e[p] & 512) !== 0; }
function lo(e) { return (e.type & 16) === 16; }
function fo(e) { return (e[p] & 32) === 32; }
function vn(e) { return (e[p] & 256) === 256; }
var Rt = "svg", bt = "math";
function Te(e) { for (; Array.isArray(e);)
    e = e[De]; return e; }
function ho(e) { for (; Array.isArray(e);) {
    if (typeof e[we] == "object")
        return e;
    e = e[De];
} return null; }
function po(e, n) { return Te(n[e]); }
function go(e, n) { return Te(n[e.index]); }
function mo(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? Te(n[t]) : null; }
function jt(e, n) { return e.data[n]; }
function vo(e, n) { return e[n]; }
function yo(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function Io(e, n) { let t = n[e]; return Ft(t) ? t : t[De]; }
function Eo(e) { return (e[p] & 4) === 4; }
function yn(e) { return (e[p] & 128) === 128; }
function Do(e) { return mn(e[ge]); }
function wo(e, n) { return n == null ? null : e[n]; }
function To(e) { e[Mt] = 0; }
function No(e) { e[p] & 1024 || (e[p] |= 1024, yn(e) && X(e)); }
function Ot(e, n) { for (; e > 0;)
    n = n[gn], e--; return n; }
function St(e) { return !!(e[p] & 9216 || e[_t]?.dirty); }
function xo(e) { e[pn].changeDetectionScheduler?.notify(8), e[p] & 64 && (e[p] |= 1024), St(e) && X(e); }
function X(e) { e[pn].changeDetectionScheduler?.notify(0); let n = Je(e); for (; n !== null && !(n[p] & 8192 || (n[p] |= 8192, !yn(n)));)
    n = Je(n); }
function Pt(e, n) { if (vn(e))
    throw new f(911, !1); e[x] === null && (e[x] = []), e[x].push(n); }
function Lt(e, n) { if (e[x] === null)
    return; let t = e[x].indexOf(n); t !== -1 && e[x].splice(t, 1); }
function Je(e) { let n = e[ge]; return mn(n) ? n[ge] : n; }
function At(e) { return e[Ct] ??= []; }
function kt(e) { return e.cleanup ??= []; }
function Co(e, n, t, r) { let o = At(n); o.push(t), e.firstCreatePass && kt(e).push(r, o.length - 1); }
var s = { lFrame: Dn(null), bindingsEnabled: !0, skipHydrationRootTNode: null }, Vt = (function (e) { return e[e.Off = 0] = "Off", e[e.Exhaustive = 1] = "Exhaustive", e[e.OnlyDirtyViews = 2] = "OnlyDirtyViews", e; })(Vt || {}), $t = 0, me = !1;
function Mo() { return s.lFrame.elementDepthCount; }
function _o() { s.lFrame.elementDepthCount++; }
function Fo() { s.lFrame.elementDepthCount--; }
function Ro() { return s.bindingsEnabled; }
function bo() { return s.skipHydrationRootTNode !== null; }
function jo(e) { return s.skipHydrationRootTNode === e; }
function Oo() { s.bindingsEnabled = !0; }
function So(e) { s.skipHydrationRootTNode = e; }
function Po() { s.bindingsEnabled = !1; }
function Lo() { s.skipHydrationRootTNode = null; }
function In() { return s.lFrame.lView; }
function Ao() { return s.lFrame.tView; }
function ko(e) { return s.lFrame.contextLView = e, e[hn]; }
function Vo(e) { return s.lFrame.contextLView = null, e; }
function qt() { let e = Ht(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Ht() { return s.lFrame.currentTNode; }
function $o() { let e = s.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function qo(e, n) { let t = s.lFrame; t.currentTNode = e, t.isParent = n; }
function Ho() { return s.lFrame.isParent; }
function Go() { s.lFrame.isParent = !1; }
function Bo() { return s.lFrame.contextLView; }
function Uo(e) { J("Must never be called in production mode"), $t = e; }
function Wo() { return me; }
function Ne(e) { let n = me; return me = e, n; }
function zo() { let e = s.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Yo() { return s.lFrame.bindingIndex; }
function Jo(e) { return s.lFrame.bindingIndex = e; }
function Zo() { return s.lFrame.bindingIndex++; }
function Qo(e) { let n = s.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function Ko() { return s.lFrame.inI18n; }
function Xo(e) { s.lFrame.inI18n = e; }
function ei(e, n) { let t = s.lFrame; t.bindingIndex = t.bindingRootIndex = e, Gt(n); }
function ni() { return s.lFrame.currentDirectiveIndex; }
function Gt(e) { s.lFrame.currentDirectiveIndex = e; }
function ti(e) { let n = s.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function ri() { return s.lFrame.currentQueryIndex; }
function oi(e) { s.lFrame.currentQueryIndex = e; }
function Bt(e) { let n = e[fn]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[xt] : null; }
function ii(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = Bt(i), o === null || (i = i[gn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = s.lFrame = En(); return r.currentTNode = n, r.lView = e, !0; }
function si(e) { let n = En(), t = e[fn]; s.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function En() { let e = s.lFrame, n = e === null ? null : e.child; return n === null ? Dn(e) : n; }
function Dn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function wn() { let e = s.lFrame; return s.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var ui = wn;
function ci() { let e = wn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function ai(e) { return (s.lFrame.contextLView = Ot(e, s.lFrame.contextLView))[hn]; }
function di() { return s.lFrame.selectedIndex; }
function li(e) { s.lFrame.selectedIndex = e; }
function fi() { let e = s.lFrame; return jt(e.tView, e.selectedIndex); }
function hi() { s.lFrame.currentNamespace = Rt; }
function pi() { s.lFrame.currentNamespace = bt; }
function gi() { Ut(); }
function Ut() { s.lFrame.currentNamespace = null; }
function mi() { return s.lFrame.currentNamespace; }
var Tn = !0;
function vi() { return Tn; }
function yi(e) { Tn = e; }
function Ze(e, n = null, t = null, r) { let o = Wt(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function Wt(e, n = null, t = null, r, o = new Set) { let i = [t || U, ft(e)]; return r = r || (typeof e == "object" ? void 0 : S(e)), new z(i, n || ln(), r || null, o); }
var L = class e {
    static THROW_IF_NOT_FOUND = w;
    static NULL = new W;
    static create(n, t) { if (Array.isArray(n))
        return Ze({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return Ze({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = _({ token: e, providedIn: "any", factory: () => C(on) });
    static __NG_ELEMENT_ID__ = -1;
}, zt = new g(""), F = (() => { class e {
    static __NG_ELEMENT_ID__ = Yt;
    static __NG_ENV_ID__ = t => t;
} return e; })(), A = class extends F {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return vn(this._lView); }
    onDestroy(n) { let t = this._lView; return Pt(t, n), () => Lt(t, n); }
};
function Yt() { return new A(In()); }
var M = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, Nn = new g("", { providedIn: "root", factory: () => { let e = h(P), n; return t => { e.destroyed && !n ? setTimeout(() => { throw t; }) : (n ??= e.get(M), n.handleError(t)); }; } }), Ii = { provide: Q, useValue: () => void h(M), multi: !0 }, Jt = new g("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = h(zt).defaultView; if (!e)
        return; let n = h(Nn), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), h(F).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function Ei() { return cn([lt(() => void h(Jt))]); }
function Zt(e) { return typeof e == "function" && e[m] !== void 0; }
function Di(e) { return null; }
function V(e, n) { let [t, r, o] = ke(e, n?.equal), i = t, u = i[m]; return i.set = r, i.update = o, i.asReadonly = ee.bind(i), i; }
function ee() { let e = this[m]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[m] = e, e.readonlyFn = n;
} return e.readonlyFn; }
function wi(e) { return Zt(e) && typeof e.set == "function"; }
var k = class {
}, Ti = new g("", { providedIn: "root", factory: () => !1 });
var Ni = new g(""), xi = new g("");
function Ci(e, n) { if (je() !== null)
    throw new f(-602, !1); }
var xe = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Qt;
} return e; })();
function Qt() { return new xe(In(), qt()); }
var Kt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new Pn(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Ln(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), xn = (() => { class e {
    internalPendingTasks = h(Kt);
    scheduler = h(k);
    errorHandler = h(Nn);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); t().catch(this.errorHandler).finally(r); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Cn(...e) { }
var Mn = (() => { class e {
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new ve });
} return e; })(), ve = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
};
var _n = class {
    destroyed = !1;
    listeners = null;
    errorHandler = h(M, { optional: !0 });
    destroyRef = h(F);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new f(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners?.indexOf(n); t !== void 0 && t !== -1 && this.listeners?.splice(t, 1); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(Y(953, !1));
        return;
    } if (this.listeners === null)
        return; let t = b(null); try {
        for (let r of this.listeners)
            try {
                r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        b(t);
    } }
};
function Li(e) { return e.destroyRef; }
function y(e) { return qe(e); }
function R(e, n) { return Ae(e, n?.equal); }
var Ce = class {
    [m];
    constructor(n) { this[m] = n; }
    destroy() { this[m].destroy(); }
};
function Xt(e, n) { let t = n?.injector ?? h(L), r = n?.manualCleanup !== !0 ? t.get(F) : null, o, i = t.get(xe, null, { optional: !0 }), u = t.get(k); return i !== null ? (o = tr(i.view, u, e), r instanceof A && r._lView === i.view && (r = null)) : o = rr(e, t.get(Mn), u), o.injector = t, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new Ce(o); }
var jn = q($({}, Oe), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, hasRun: !1, cleanupFns: void 0, zone: null, kind: "effect", onDestroyFn: Cn, run() { if (this.dirty = !1, this.hasRun && !Le(this))
        return; this.hasRun = !0; let e = r => (this.cleanupFns ??= []).push(r), n = Se(this), t = Ne(!1); try {
        this.maybeCleanup(), this.fn(e);
    }
    finally {
        Ne(t), Pe(this, n);
    } }, maybeCleanup() { if (!this.cleanupFns?.length)
        return; let e = b(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], b(e);
    } } }), er = q($({}, jn), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { oe(this), this.onDestroyFn(), this.maybeCleanup(), this.scheduler.remove(this); } }), nr = q($({}, jn), { consumerMarkedDirty() { this.view[p] |= 8192, X(this.view), this.notifier.notify(13); }, destroy() { oe(this), this.onDestroyFn(), this.maybeCleanup(), this.view[K]?.delete(this); } });
function tr(e, n, t) { let r = Object.create(nr); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = t, e[K] ??= new Set, e[K].add(r), r.consumerMarkedDirty(r), r; }
function rr(e, n, t) { let r = Object.create(er); return r.fn = e, r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
var or = e => e;
function Fn(e, n) { if (typeof e == "function") {
    let t = ie(e, or, n?.equal);
    return Rn(t);
}
else {
    let t = ie(e.source, e.computation, e.equal);
    return Rn(t);
} }
function Rn(e) { let n = e[m], t = e; return t.set = r => Ve(n, r), t.update = r => $e(n, r), t.asReadonly = ee.bind(e), t; }
var On = !0;
function Ai(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new _e(t, sr(e), e.defaultValue, e.equal ? ir(e.equal) : void 0, e.injector ?? h(L), On); }
var Me = class {
    value;
    constructor(n) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = ee; }
    isError = R(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isLoading = R(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = R(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, _e = class extends Me {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(n, t, r, o, i, u = On) { super(R(() => { let d = this.state().stream?.(); if (!d || this.state().status === "loading" && this.error())
        return r; if (!Fe(d)) {
        if (u)
            throw new Re(this.error());
        return r;
    } return d.value; }, { equal: o })), this.loaderFn = t, this.equal = o, this.extRequest = Fn({ source: n, computation: d => ({ request: d, reload: 0 }) }), this.state = Fn({ source: this.extRequest, computation: (d, a) => { let l = d.request === void 0 ? "idle" : "loading"; return a ? { extRequest: d, status: l, previousStatus: bn(a.value), stream: a.value.extRequest.request === d.request ? a.value.stream : void 0 } : { extRequest: d, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = Xt(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(xn), this.unregisterOnDestroy = i.get(F).onDestroy(() => this.destroy()); }
    status = R(() => bn(this.state()));
    error = R(() => { let n = this.state().stream?.(); return n && !Fe(n) ? n.error : void 0; });
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: V({ value: n }) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return ne(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let u = yield y(() => this.loaderFn({ params: n.request, request: n.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
    }
    catch (u) {
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: V({ error: Sn(u) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function ir(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function sr(e) { return ur(e) ? e.stream : n => ne(null, null, function* () { try {
    return V({ value: yield e.loader(n) });
}
catch (t) {
    return V({ error: Sn(t) });
} }); }
function ur(e) { return !!e.stream; }
function bn(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Fe(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Fe(e) { return e.error === void 0; }
function Sn(e) { return e instanceof Error ? e : new be(e); }
var Re = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, be = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
export { hr as a, f as b, Y as c, pr as d, c as e, gr as f, S as g, mr as h, vr as i, Qe as j, v as k, $n as l, yr as m, _ as n, Ir as o, Er as p, Z as q, Dr as r, Ke as s, Ge as t, g as u, wr as v, Xe as w, Bn as x, Un as y, Wn as z, zn as A, Ue as B, Tr as C, Yn as D, ze as E, Jn as F, Zn as G, E as H, nt as I, C as J, Nr as K, h as L, G as M, xr as N, B as O, Cr as P, Mr as Q, _r as R, Fr as S, Rr as T, br as U, st as V, jr as W, Or as X, rn as Y, Sr as Z, U as _, Q as $, on as aa, ct as ba, Pr as ca, un as da, at as ea, dt as fa, Lr as ga, cn as ha, lt as ia, ft as ja, ht as ka, fe as la, Ar as ma, vt as na, ln as oa, P as pa, z as qa, Et as ra, kr as sa, Nt as ta, Vr as ua, De as va, fn as wa, p as xa, ge as ya, $r as za, xt as Aa, qr as Ba, Ct as Ca, hn as Da, Hr as Ea, pn as Fa, Gr as Ga, Br as Ha, Ur as Ia, gn as Ja, Wr as Ka, zr as La, Mt as Ma, Yr as Na, Jr as Oa, Zr as Pa, x as Qa, Qr as Ra, K as Sa, _t as Ta, Kr as Ua, Xr as Va, eo as Wa, no as Xa, to as Ya, ro as Za, oo as _a, Ft as $a, mn as ab, io as bb, so as cb, uo as db, co as eb, ao as fb, lo as gb, fo as hb, vn as ib, Rt as jb, bt as kb, Te as lb, ho as mb, po as nb, go as ob, mo as pb, jt as qb, vo as rb, yo as sb, Io as tb, Eo as ub, yn as vb, Do as wb, wo as xb, To as yb, No as zb, Ot as Ab, St as Bb, xo as Cb, X as Db, Pt as Eb, Lt as Fb, Je as Gb, At as Hb, kt as Ib, Co as Jb, Vt as Kb, Mo as Lb, _o as Mb, Fo as Nb, Ro as Ob, bo as Pb, jo as Qb, Oo as Rb, So as Sb, Po as Tb, Lo as Ub, In as Vb, Ao as Wb, ko as Xb, Vo as Yb, qt as Zb, Ht as _b, $o as $b, qo as ac, Ho as bc, Go as cc, Bo as dc, Uo as ec, Wo as fc, Ne as gc, zo as hc, Yo as ic, Jo as jc, Zo as kc, Qo as lc, Ko as mc, Xo as nc, ei as oc, ni as pc, Gt as qc, ti as rc, ri as sc, oi as tc, ii as uc, si as vc, ui as wc, ci as xc, ai as yc, di as zc, li as Ac, fi as Bc, hi as Cc, pi as Dc, gi as Ec, mi as Fc, vi as Gc, yi as Hc, Ze as Ic, Wt as Jc, L as Kc, zt as Lc, F as Mc, M as Nc, Nn as Oc, Ii as Pc, Ei as Qc, Zt as Rc, Di as Sc, V as Tc, ee as Uc, wi as Vc, k as Wc, Ti as Xc, Ni as Yc, xi as Zc, Ci as _c, xe as $c, Kt as ad, xn as bd, Cn as cd, Mn as dd, _n as ed, Li as fd, y as gd, R as hd, Xt as id, Fn as jd, Ai as kd, _e as ld, Sn as md };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/resource.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
