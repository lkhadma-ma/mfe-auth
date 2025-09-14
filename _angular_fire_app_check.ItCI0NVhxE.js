import "@nf-internal/chunk-ACKELEN3";
import { \u0275getAllInstancesOf as u, \u0275getDefaultInstanceOf as C, VERSION as l, \u0275AngularFireSchedulers as h, \u0275zoneWrap as r } from "@angular/fire";
import { timer as E, from as T } from "rxjs";
import { concatMap as _, distinct as I } from "rxjs/operators";
import { isPlatformServer as P } from "@angular/common";
import * as s from "@angular/core";
import { InjectionToken as O, isDevMode as D, Optional as d, PLATFORM_ID as f, makeEnvironmentProviders as R, NgZone as v, Injector as F } from "@angular/core";
import { FirebaseApp as N, FirebaseApps as S } from "@angular/fire/app";
import { registerVersion as m } from "firebase/app";
import { getLimitedUseToken as w, getToken as M, initializeAppCheck as y, onTokenChanged as L, setTokenAutoRefreshEnabled as b } from "firebase/app-check";
export * from "firebase/app-check";
var c = "app-check", o = class {
    constructor(t) { return t; }
}, a = class {
    constructor() { return u(c); }
}, J = E(0, 300).pipe(_(() => T(u(c))), I()), p = new O("angularfire2.app-check-instances");
function H(e, t) { let n = C(c, e, t); return n && new o(n); }
var K = ["localhost", "0.0.0.0", "127.0.0.1"], V = typeof window < "u" && K.includes(window.location.hostname);
function $(e) { return (t, n, i) => { !P(i) && (D() || V) && (globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN ??= !0); let k = t.runOutsideAngular(() => e(n)); return new o(k); }; }
var A = { provide: a, deps: [[new d, p]] }, g = { provide: o, useFactory: H, deps: [[new d, p], N, f] }, Q = (() => { class e {
    constructor() { m("angularfire", l.full, "app-check"); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [g, A] });
} return e; })();
function X(e, ...t) { return m("angularfire", l.full, "app-check"), R([g, A, { provide: p, useFactory: $(e), multi: !0, deps: [v, F, f, h, S, ...t] }]); }
var Y = r(w, !0, 2), ee = r(M, !0), te = r(y, !0), ne = r(L, !0), oe = r(b, !0);
export { o as AppCheck, a as AppCheckInstances, Q as AppCheckModule, J as appCheckInstance$, Y as getLimitedUseToken, ee as getToken, te as initializeAppCheck, ne as onTokenChanged, X as provideAppCheck, oe as setTokenAutoRefreshEnabled };
