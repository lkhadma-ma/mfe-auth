import "@nf-internal/chunk-ACKELEN3";
import { \u0275getAllInstancesOf as B, \u0275getDefaultInstanceOf as ne, VERSION as j, \u0275AngularFireSchedulers as oe, \u0275zoneWrap as t } from "@angular/fire";
import { timer as ae, from as se } from "rxjs";
import { concatMap as ce, distinct as ue } from "rxjs/operators";
import * as v from "@angular/core";
import { InjectionToken as ie, Optional as m, makeEnvironmentProviders as de, NgZone as le, Injector as fe } from "@angular/core";
import { FirebaseApp as ge, FirebaseApps as pe } from "@angular/fire/app";
import { AppCheckInstances as me } from "@angular/fire/app-check";
import { AuthInstances as ve } from "@angular/fire/auth";
import { registerVersion as V } from "firebase/app";
import { onSnapshot as z, refEqual as i, getCountFromServer as U } from "firebase/firestore";
import { Observable as G, from as J, pipe as T } from "rxjs";
import { map as c, scan as b, distinctUntilChanged as Z, filter as O, startWith as H, pairwise as K } from "rxjs/operators";
var f = function () { return f = Object.assign || function (e) { for (var n, o = 1, s = arguments.length; o < s; o++) {
    n = arguments[o];
    for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
} return e; }, f.apply(this, arguments); };
function D(r, e, n) { if (n || arguments.length === 2)
    for (var o = 0, s = e.length, a; o < s; o++)
        (a || !(o in e)) && (a || (a = Array.prototype.slice.call(e, 0, o)), a[o] = e[o]); return r.concat(a || Array.prototype.slice.call(e)); }
var X = { includeMetadataChanges: !1 };
function d(r, e) { return e === void 0 && (e = X), new G(function (n) { var o = z(r, e, { next: n.next.bind(n), error: n.error.bind(n), complete: n.complete.bind(n) }); return { unsubscribe: o }; }); }
function F(r) { return d(r, { includeMetadataChanges: !0 }); }
function q(r, e) { return e === void 0 && (e = {}), F(r).pipe(c(function (n) { return g(n, e); })); }
function g(r, e) { var n; e === void 0 && (e = {}); var o = r.data(e); return !r.exists() || typeof o != "object" || o === null || !e.idField ? o : f(f({}, o), (n = {}, n[e.idField] = r.id, n)); }
var N = ["added", "modified", "removed"], Y = function (r) { return O(function (e) { for (var n = !1, o = 0; o < e.length; o++) {
    var s = e[o];
    if (r && r.indexOf(s.type) >= 0) {
        n = !0;
        break;
    }
} return n; }); };
function I(r, e, n) { for (var o = [], s = 3; s < arguments.length; s++)
    o[s - 3] = arguments[s]; var a = r.slice(); return a.splice.apply(a, D([e, n], o, !1)), a; }
function ee(r, e) { switch (e.type) {
    case "added":
        if (!(r[e.newIndex] && i(r[e.newIndex].doc.ref, e.doc.ref)))
            return I(r, e.newIndex, 0, e);
        break;
    case "modified":
        if (r[e.oldIndex] == null || i(r[e.oldIndex].doc.ref, e.doc.ref))
            if (e.oldIndex !== e.newIndex) {
                var n = r.slice();
                return n.splice(e.oldIndex, 1), n.splice(e.newIndex, 0, e), n;
            }
            else
                return I(r, e.newIndex, 1, e);
        break;
    case "removed":
        if (r[e.oldIndex] && i(r[e.oldIndex].doc.ref, e.doc.ref))
            return I(r, e.oldIndex, 1);
        break;
} return r; }
function te(r, e, n) { return n === void 0 && (n = N), e.forEach(function (o) { n.indexOf(o.type) > -1 && (r = ee(r, o)); }), r; }
var R = function () { return T(H(void 0), K()); }, C = function (r, e) { return JSON.stringify(r.metadata) === JSON.stringify(e.metadata); }, re = function () { return T(R(), O(function (r) { var e = r[0], n = r[1]; return n.length > 0 || e === void 0; }), c(function (r) { var e = r[1]; return e; })); };
function p(r, e) { return e === void 0 && (e = {}), d(r, { includeMetadataChanges: !0 }).pipe(R(), c(function (n) { var o = n[0], s = n[1], a = s.docChanges(); return o && !C(o, s) && s.docs.forEach(function (u, A) { var w = a.find(function ($) { return i($.doc.ref, u.ref); }); if (w) {
    if (C(w.doc, u))
        return;
}
else {
    var P = o?.docs.find(function ($) { return i($.ref, u.ref); });
    if (P && C(P, u))
        return;
} a.push({ oldIndex: A, newIndex: A, type: "modified", doc: u }); }), a; }), Y(e.events || N), re()); }
function h(r) { return d(r, { includeMetadataChanges: !0 }).pipe(c(function (e) { return e.docs; })); }
function M(r, e) { return e === void 0 && (e = {}), p(r, e).pipe(b(function (n, o) { return te(n, o, e.events); }, []), Z()); }
function _(r, e) { return e === void 0 && (e = {}), p(r, e).pipe(b(function (n, o) { return D(D([], n, !0), o, !0); }, [])); }
function k(r, e) { return e === void 0 && (e = {}), h(r).pipe(c(function (n) { return n.map(function (o) { return g(o, e); }); })); }
function E(r) { return J(U(r)); }
function L(r) { return E(r).pipe(c(function (e) { return e.data().count; })); }
import { addDoc as $e, aggregateFieldEqual as Ie, aggregateQuerySnapshotEqual as Ce, and as De, clearIndexedDbPersistence as Fe, collection as he, collectionGroup as Ee, connectFirestoreEmulator as Se, deleteAllPersistentCacheIndexes as xe, deleteDoc as ye, deleteField as Ae, disableNetwork as we, disablePersistentCacheIndexAutoCreation as Pe, doc as Te, documentId as be, enableIndexedDbPersistence as Oe, enableMultiTabIndexedDbPersistence as qe, enableNetwork as Ne, enablePersistentCacheIndexAutoCreation as Re, endAt as Me, endBefore as _e, getAggregateFromServer as ke, getCountFromServer as Le, getDoc as Be, getDocFromCache as je, getDocFromServer as Ve, getDocs as Qe, getDocsFromCache as We, getDocsFromServer as ze, getFirestore as Ue, getPersistentCacheIndexManager as Ge, increment as Je, initializeFirestore as Ze, limit as He, limitToLast as Ke, loadBundle as Xe, namedQuery as Ye, onSnapshot as et, onSnapshotsInSync as tt, or as rt, orderBy as nt, query as ot, queryEqual as at, refEqual as st, runTransaction as ct, setDoc as ut, setIndexConfiguration as it, setLogLevel as dt, snapshotEqual as lt, startAfter as ft, startAt as gt, sum as pt, terminate as mt, updateDoc as vt, vector as $t, waitForPendingWrites as It, where as Ct, writeBatch as Dt } from "firebase/firestore";
export * from "firebase/firestore";
var l = class {
    constructor(e) { return e; }
}, x = "firestore", S = class {
    constructor() { return B(x); }
}, kt = ae(0, 300).pipe(ce(() => se(B(x))), ue()), y = new ie("angularfire2.firestore-instances");
function Ft(r, e) { let n = ne(x, r, e); return n && new l(n); }
function ht(r) { return (e, n) => { let o = e.runOutsideAngular(() => r(n)); return new l(o); }; }
var Q = { provide: S, deps: [[new m, y]] }, W = { provide: l, useFactory: Ft, deps: [[new m, y], ge] }, Lt = (() => { class r {
    constructor() { V("angularfire", j.full, "fst"); }
    static \u0275fac = function (o) { return new (o || r); };
    static \u0275mod = v.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = v.\u0275\u0275defineInjector({ providers: [W, Q] });
} return r; })();
function Bt(r, ...e) { return V("angularfire", j.full, "fst"), de([W, Q, { provide: y, useFactory: ht(r), multi: !0, deps: [le, fe, oe, pe, [new m, ve], [new m, me], ...e] }]); }
var jt = t(_, !0), Vt = t(h, !0), Qt = t(p, !0), Wt = t(L, !0), zt = t(E, !0), Ut = t(k, !0), Gt = t(F, !0), Jt = t(q, !0), Zt = t(d, !0), Ht = t(g, !0), Kt = t(M, !0), Xt = t($e, !0, 2), Yt = t(Ie, !0, 2), er = t(Ce, !0, 2), tr = t(De, !0, 2), rr = t(Fe, !0), nr = t(he, !0, 2), or = t(Ee, !0, 2), ar = t(Se, !0), sr = t(xe, !0), cr = t(ye, !0, 2), ur = t(Ae, !0, 2), ir = t(we, !0), dr = t(Pe, !0), lr = t(Te, !0, 2), fr = t(be, !0, 2), gr = t(Oe, !0), pr = t(qe, !0), mr = t(Ne, !0), vr = t(Re, !0), $r = t(Me, !0, 2), Ir = t(_e, !0, 2), Cr = t(ke, !0), Dr = t(Le, !0), Fr = t(Be, !0), hr = t(je, !0), Er = t(Ve, !0), Sr = t(Qe, !0), xr = t(We, !0), yr = t(ze, !0), Ar = t(Ue, !0), wr = t(Ge, !0), Pr = t(Je, !0, 2), Tr = t(Ze, !0), br = t(He, !0, 2), Or = t(Ke, !0, 2), qr = t(Xe, !0), Nr = t(Ye, !0, 2), Rr = t(et, !0), Mr = t(tt, !0), _r = t(rt, !0, 2), kr = t(nt, !0, 2), Lr = t(ot, !0, 2), Br = t(at, !0, 2), jr = t(st, !0, 2), Vr = t(ct, !0), Qr = t(ut, !0, 2), Wr = t(it, !0), zr = t(dt, !0), Ur = t(lt, !0, 2), Gr = t(ft, !0, 2), Jr = t(gt, !0, 2), Zr = t(pt, !0, 2), Hr = t(mt, !0), Kr = t(vt, !0, 2), Xr = t($t, !0, 2), Yr = t(It, !0), en = t(Ct, !0, 2), tn = t(Dt, !0, 2);
export { l as Firestore, S as FirestoreInstances, Lt as FirestoreModule, Xt as addDoc, Yt as aggregateFieldEqual, er as aggregateQuerySnapshotEqual, tr as and, jt as auditTrail, rr as clearIndexedDbPersistence, nr as collection, Qt as collectionChanges, Wt as collectionCount, zt as collectionCountSnap, Ut as collectionData, or as collectionGroup, Vt as collectionSnapshots, ar as connectFirestoreEmulator, sr as deleteAllPersistentCacheIndexes, cr as deleteDoc, ur as deleteField, ir as disableNetwork, dr as disablePersistentCacheIndexAutoCreation, lr as doc, Jt as docData, Gt as docSnapshots, fr as documentId, gr as enableIndexedDbPersistence, pr as enableMultiTabIndexedDbPersistence, mr as enableNetwork, vr as enablePersistentCacheIndexAutoCreation, $r as endAt, Ir as endBefore, kt as firestoreInstance$, Zt as fromRef, Cr as getAggregateFromServer, Dr as getCountFromServer, Fr as getDoc, hr as getDocFromCache, Er as getDocFromServer, Sr as getDocs, xr as getDocsFromCache, yr as getDocsFromServer, Ar as getFirestore, wr as getPersistentCacheIndexManager, Pr as increment, Tr as initializeFirestore, br as limit, Or as limitToLast, qr as loadBundle, Nr as namedQuery, Rr as onSnapshot, Mr as onSnapshotsInSync, _r as or, kr as orderBy, Bt as provideFirestore, Lr as query, Br as queryEqual, jr as refEqual, Vr as runTransaction, Qr as setDoc, Wr as setIndexConfiguration, zr as setLogLevel, Ht as snapToData, Ur as snapshotEqual, Kt as sortedChanges, Gr as startAfter, Jr as startAt, Zr as sum, Hr as terminate, Kr as updateDoc, Xr as vector, Yr as waitForPendingWrites, en as where, tn as writeBatch };
/*! Bundled license information:

rxfire/firestore/index.esm.js:
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
  (**
   * @license
   * Copyright 2023 Google LLC
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
