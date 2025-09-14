import "@nf-internal/chunk-ACKELEN3";
import { getApps as l, getApp as g, registerVersion as t, deleteApp as v, initializeApp as E, initializeServerApp as F, onLog as R, setLogLevel as L } from "firebase/app";
export * from "firebase/app";
import { timer as P, from as _ } from "rxjs";
import { concatMap as $, distinct as O } from "rxjs/operators";
import * as n from "@angular/core";
import { InjectionToken as V, Optional as f, PLATFORM_ID as A, VERSION as d, makeEnvironmentProviders as z, NgZone as D, Injector as y } from "@angular/core";
import { VERSION as s, \u0275AngularFireSchedulers as M, \u0275zoneWrap as r } from "@angular/fire";
var p = class {
    constructor(o) { return o; }
}, u = class {
    constructor() { return l(); }
}, W = P(0, 300).pipe($(() => _(l())), O());
function w(e) { return e && e.length === 1 ? e[0] : new p(g()); }
var c = new V("angularfire2._apps"), m = { provide: p, useFactory: w, deps: [[new f, c]] }, I = { provide: u, deps: [[new f, c]] };
function N(e) { return (o, i) => { let a = i.get(A); t("angularfire", s.full, "core"), t("angularfire", s.full, "app"), t("angular", d.full, a.toString()); let S = o.runOutsideAngular(() => e(i)); return new p(S); }; }
var U = (() => { class e {
    constructor(i) { t("angularfire", s.full, "core"), t("angularfire", s.full, "app"), t("angular", d.full, i.toString()); }
    static \u0275fac = function (a) { return new (a || e)(n.\u0275\u0275inject(A)); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: [m, I] });
} return e; })();
function Z(e, ...o) { return z([m, I, { provide: c, useFactory: N(e), multi: !0, deps: [D, y, M, ...o] }]); }
var q = r(v, !0), C = r(g, !0), G = r(l, !0), H = r(E, !0), J = r(F, !0), K = r(R, !0), Q = r(t, !0), X = r(L, !0);
export { p as FirebaseApp, U as FirebaseAppModule, u as FirebaseApps, q as deleteApp, W as firebaseApp$, C as getApp, G as getApps, H as initializeApp, J as initializeServerApp, K as onLog, Z as provideFirebaseApp, Q as registerVersion, X as setLogLevel };
