import "@nf-internal/chunk-ACKELEN3";
import * as b from "@angular/core";
import { Version as S, isDevMode as O, inject as d, NgZone as I, runInInjectionContext as h, PendingTasks as j, EnvironmentInjector as w } from "@angular/core";
import { getApps as T } from "firebase/app";
import { pendingUntilEvent as Z } from "@angular/core/rxjs-interop";
import { queueScheduler as P, asyncScheduler as W, Observable as A } from "rxjs";
import { subscribeOn as y, observeOn as E } from "rxjs/operators";
var G = new S("ANGULARFIRE2_VERSION"), q = e => `The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${e} in the constructor, first ensure that ${e} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${e})\`.`;
function U(e, n, t) { if (n) {
    if (n.length === 1)
        return n[0];
    let o = n.filter(s => s.app === t);
    if (o.length === 1)
        return o[0];
} return t.container.getProvider(e).getImmediate({ optional: !0 }); }
var _ = (e, n) => { let t = n ? [n] : T(), r = []; return t.forEach(i => { i.container.getProvider(e).instances.forEach(s => { r.includes(s) || r.push(s); }); }), r; }, f = (function (e) { return e[e.SILENT = 0] = "SILENT", e[e.WARN = 1] = "WARN", e[e.VERBOSE = 2] = "VERBOSE", e; })(f || {}), m = O() && typeof Zone < "u" ? f.WARN : f.SILENT, H = e => m = e, p = class {
    zone;
    delegate;
    constructor(n, t = P) { this.zone = n, this.delegate = t; }
    now() { return this.delegate.now(); }
    schedule(n, t, r) { let i = this.zone, o = function (s) { i ? i.runGuarded(() => { n.apply(this, [s]); }) : n.apply(this, [s]); }; return this.delegate.schedule(o, t, r); }
}, z = (() => { class e {
    outsideAngular;
    insideAngular;
    constructor() { let t = d(I); this.outsideAngular = t.runOutsideAngular(() => new p(typeof Zone > "u" ? void 0 : Zone.current)), this.insideAngular = t.run(() => new p(typeof Zone > "u" ? void 0 : Zone.current, W)); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = b.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), v = !1;
function x(e, n) { !v && (m > f.SILENT || O()) && (v = !0, console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md")), m >= n && console.warn(`Firebase API called outside injection context: ${e.name}`); }
function D(e) { let n = d(I, { optional: !0 }); return n ? n.runOutsideAngular(() => e()) : e(); }
function c(e) { let n = d(I, { optional: !0 }); return n ? n.run(() => e()) : e(); }
var V = (e, n, t) => (...r) => (n && setTimeout(n, 0), h(t, () => c(() => e.apply(void 0, r)))), J = (e, n, t) => (t ||= n ? f.WARN : f.VERBOSE, function () { let r, i = arguments, o, s, l; try {
    o = d(z), s = d(j), l = d(w);
}
catch {
    return x(e, t), e.apply(this, i);
} for (let u = 0; u < arguments.length; u++)
    typeof i[u] == "function" && (n && (r ||= c(() => s.add())), i[u] = V(i[u], r, l)); let a = D(() => e.apply(this, i)); return n ? a instanceof A ? a.pipe(y(o.outsideAngular), E(o.insideAngular), Z(l)) : a instanceof Promise ? c(() => { let u = s.add(); return new Promise((N, R) => { a.then(g => h(l, () => c(() => N(g))), g => h(l, () => c(() => R(g)))).finally(u); }); }) : typeof a == "function" && r ? function () { return setTimeout(r, 0), a.apply(this, arguments); } : c(() => a) : a instanceof A ? a.pipe(y(o.outsideAngular), E(o.insideAngular)) : c(() => a); });
export { f as LogLevel, G as VERSION, H as setLogLevel, z as \u0275AngularFireSchedulers, p as \u0275ZoneScheduler, _ as \u0275getAllInstancesOf, U as \u0275getDefaultInstanceOf, q as \u0275isSupportedError, J as \u0275zoneWrap };
