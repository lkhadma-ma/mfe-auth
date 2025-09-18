import "@nf-internal/chunk-ACKELEN3";
import { \u0275getAllInstancesOf as m, \u0275getDefaultInstanceOf as T, VERSION as f, \u0275AngularFireSchedulers as v, \u0275zoneWrap as e } from "@angular/fire";
import { timer as w, from as S } from "rxjs";
import { concatMap as N, distinct as U } from "rxjs/operators";
import * as s from "@angular/core";
import { InjectionToken as y, Optional as c, makeEnvironmentProviders as F, NgZone as L, Injector as O } from "@angular/core";
import { FirebaseApp as M, FirebaseApps as b } from "@angular/fire/app";
import { AppCheckInstances as D } from "@angular/fire/app-check";
import { registerVersion as I } from "firebase/app";
import { onAuthStateChanged as k, onIdTokenChanged as P, getIdToken as W } from "firebase/auth";
import { Observable as l, from as C, of as E } from "rxjs";
import { switchMap as R } from "rxjs/operators";
function g(n) { return new l(function (t) { var i = k(n, t.next.bind(t), t.error.bind(t), t.complete.bind(t)); return { unsubscribe: i }; }); }
function r(n) { return new l(function (t) { var i = P(n, t.next.bind(t), t.error.bind(t), t.complete.bind(t)); return { unsubscribe: i }; }); }
function p(n) { return r(n).pipe(R(function (t) { return t ? C(W(t)) : E(null); })); }
import { applyActionCode as _, beforeAuthStateChanged as V, checkActionCode as z, confirmPasswordReset as x, connectAuthEmulator as j, createUserWithEmailAndPassword as H, deleteUser as B, fetchSignInMethodsForEmail as Z, getAdditionalUserInfo as q, getAuth as G, getIdToken as J, getIdTokenResult as K, getMultiFactorResolver as Q, getRedirectResult as X, initializeAuth as Y, initializeRecaptchaConfig as ee, isSignInWithEmailLink as te, linkWithCredential as ne, linkWithPhoneNumber as ie, linkWithPopup as oe, linkWithRedirect as se, onAuthStateChanged as ae, onIdTokenChanged as re, parseActionCodeURL as ue, reauthenticateWithCredential as ce, reauthenticateWithPhoneNumber as de, reauthenticateWithPopup as he, reauthenticateWithRedirect as le, reload as ge, revokeAccessToken as pe, sendEmailVerification as me, sendPasswordResetEmail as fe, sendSignInLinkToEmail as Ie, setPersistence as Ae, signInAnonymously as $e, signInWithCredential as ke, signInWithCustomToken as Pe, signInWithEmailAndPassword as We, signInWithEmailLink as Ce, signInWithPhoneNumber as Ee, signInWithPopup as Re, signInWithRedirect as Te, signOut as ve, unlink as we, updateCurrentUser as Se, updateEmail as Ne, updatePassword as Ue, updatePhoneNumber as ye, updateProfile as Fe, useDeviceLanguage as Le, validatePassword as Oe, verifyBeforeUpdateEmail as Me, verifyPasswordResetCode as be } from "firebase/auth";
export * from "firebase/auth";
var d = "auth", o = class {
    constructor(t) { return t; }
}, u = class {
    constructor() { return m(d); }
}, et = w(0, 300).pipe(N(() => S(m(d))), U()), h = new y("angularfire2.auth-instances");
function De(n, t) { let i = T(d, n, t); return i && new o(i); }
function _e(n) { return (t, i) => { let a = t.runOutsideAngular(() => n(i)); return new o(a); }; }
var A = { provide: u, deps: [[new c, h]] }, $ = { provide: o, useFactory: De, deps: [[new c, h], M] }, tt = (() => { class n {
    constructor() { I("angularfire", f.full, "auth"); }
    static \u0275fac = function (a) { return new (a || n); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [$, A] });
} return n; })();
function nt(n, ...t) { return I("angularfire", f.full, "auth"), F([$, A, { provide: h, useFactory: _e(n), multi: !0, deps: [L, O, v, b, [new c, D], ...t] }]); }
var it = e(g, !0), ot = e(p, !0), st = e(r, !0), at = e(_, !0), rt = e(V, !0), ut = e(z, !0), ct = e(x, !0, 2), dt = e(j, !0), ht = e(H, !0, 2), lt = e(B, !0, 2), gt = e(Z, !0, 2), pt = e(q, !0, 2), mt = e(G, !0), ft = e(J, !0), It = e(K, !0), At = e(Q, !0), $t = e(X, !0), kt = e(Y, !0), Pt = e(ee, !0), Wt = e(te, !0), Ct = e(ne, !0, 2), Et = e(ie, !0, 2), Rt = e(oe, !0, 2), Tt = e(se, !0, 2), vt = e(ae, !0), wt = e(re, !0), St = e(ue, !0), Nt = e(ce, !0, 2), Ut = e(de, !0, 2), yt = e(he, !0, 2), Ft = e(le, !0, 2), Lt = e(ge, !0, 2), Ot = e(pe, !0, 2), Mt = e(me, !0, 2), bt = e(fe, !0, 2), Dt = e(Ie, !0, 2), _t = e(Ae, !0), Vt = e($e, !0, 2), zt = e(ke, !0, 2), xt = e(Pe, !0, 2), jt = e(We, !0, 2), Ht = e(Ce, !0, 2), Bt = e(Ee, !0, 2), Zt = e(Re, !0, 2), qt = e(Te, !0, 2), Gt = e(ve, !0, 2), Jt = e(we, !0, 2), Kt = e(Se, !0, 2), Qt = e(Ne, !0, 2), Xt = e(Ue, !0, 2), Yt = e(ye, !0, 2), en = e(Fe, !0, 2), tn = e(Le, !0, 2), nn = e(Oe, !0, 2), on = e(Me, !0, 2), sn = e(be, !0, 2);
export { o as Auth, u as AuthInstances, tt as AuthModule, at as applyActionCode, et as authInstance$, it as authState, rt as beforeAuthStateChanged, ut as checkActionCode, ct as confirmPasswordReset, dt as connectAuthEmulator, ht as createUserWithEmailAndPassword, lt as deleteUser, gt as fetchSignInMethodsForEmail, pt as getAdditionalUserInfo, mt as getAuth, ft as getIdToken, It as getIdTokenResult, At as getMultiFactorResolver, $t as getRedirectResult, ot as idToken, kt as initializeAuth, Pt as initializeRecaptchaConfig, Wt as isSignInWithEmailLink, Ct as linkWithCredential, Et as linkWithPhoneNumber, Rt as linkWithPopup, Tt as linkWithRedirect, vt as onAuthStateChanged, wt as onIdTokenChanged, St as parseActionCodeURL, nt as provideAuth, Nt as reauthenticateWithCredential, Ut as reauthenticateWithPhoneNumber, yt as reauthenticateWithPopup, Ft as reauthenticateWithRedirect, Lt as reload, Ot as revokeAccessToken, Mt as sendEmailVerification, bt as sendPasswordResetEmail, Dt as sendSignInLinkToEmail, _t as setPersistence, Vt as signInAnonymously, zt as signInWithCredential, xt as signInWithCustomToken, jt as signInWithEmailAndPassword, Ht as signInWithEmailLink, Bt as signInWithPhoneNumber, Zt as signInWithPopup, qt as signInWithRedirect, Gt as signOut, Jt as unlink, Kt as updateCurrentUser, Qt as updateEmail, Xt as updatePassword, Yt as updatePhoneNumber, en as updateProfile, tn as useDeviceLanguage, st as user, nn as validatePassword, on as verifyBeforeUpdateEmail, sn as verifyPasswordResetCode };
/*! Bundled license information:

rxfire/auth/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
