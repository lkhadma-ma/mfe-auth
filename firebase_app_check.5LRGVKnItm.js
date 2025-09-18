import { D as G, E as X, F as y, H as V, O as D, P as E, X as Y, _ as J, a as j, c as U, g, t as P, v as q, w as W } from "@nf-internal/chunk-PCT6XG3Z";
import { e as d } from "@nf-internal/chunk-ACKELEN3";
var M = new Map, oe = { activated: !1, tokenObservers: [] }, me = { initialized: !1, enabled: !1 };
function c(e) { return M.get(e) || Object.assign({}, oe); }
function Ee(e, t) { return M.set(e, t), M.get(e); }
function C() { return me; }
var O = "https://content-firebaseappcheck.googleapis.com/v1", we = "exchangeRecaptchaV3Token", _e = "exchangeRecaptchaEnterpriseToken", be = "exchangeDebugToken", Q = { OFFSET_DURATION: 300 * 1e3, RETRIAL_MIN_WAIT: 30 * 1e3, RETRIAL_MAX_WAIT: 960 * 1e3 }, Ae = 1440 * 60 * 1e3;
var x = class {
    constructor(t, r, n, o, i) { if (this.operation = t, this.retryPolicy = r, this.getWaitDuration = n, this.lowerBound = o, this.upperBound = i, this.pending = null, this.nextErrorWaitInterval = o, o > i)
        throw new Error("Proactive refresh lower bound greater than upper bound!"); }
    start() { this.nextErrorWaitInterval = this.lowerBound, this.process(!0).catch(() => { }); }
    stop() { this.pending && (this.pending.reject("cancelled"), this.pending = null); }
    isRunning() { return !!this.pending; }
    process(t) { return d(this, null, function* () { this.stop(); try {
        this.pending = new g, this.pending.promise.catch(r => { }), yield ve(this.getNextRun(t)), this.pending.resolve(), yield this.pending.promise, this.pending = new g, this.pending.promise.catch(r => { }), yield this.operation(), this.pending.resolve(), yield this.pending.promise, this.process(!0).catch(() => { });
    }
    catch (r) {
        this.retryPolicy(r) ? this.process(!1).catch(() => { }) : this.stop();
    } }); }
    getNextRun(t) { if (t)
        return this.nextErrorWaitInterval = this.lowerBound, this.getWaitDuration(); {
        let r = this.nextErrorWaitInterval;
        return this.nextErrorWaitInterval *= 2, this.nextErrorWaitInterval > this.upperBound && (this.nextErrorWaitInterval = this.upperBound), r;
    } }
};
function ve(e) { return new Promise(t => { setTimeout(t, e); }); }
var Ce = { "already-initialized": "You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.", "use-before-activation": "App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.", "fetch-network-error": "Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.", "fetch-parse-error": "Fetch client could not parse response. Original error: {$originalErrorMessage}.", "fetch-status-error": "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.", "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.", "storage-get": "Error thrown when reading from storage. Original error: {$originalErrorMessage}.", "storage-set": "Error thrown when writing to storage. Original error: {$originalErrorMessage}.", "recaptcha-error": "ReCAPTCHA error.", "initial-throttle": "{$httpStatus} error. Attempts allowed again after {$time}", throttled: "Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}" }, u = new q("appCheck", "AppCheck", Ce);
function b(e = !1) { var t; return e ? (t = self.grecaptcha) === null || t === void 0 ? void 0 : t.enterprise : self.grecaptcha; }
function $(e) { if (!c(e).activated)
    throw u.create("use-before-activation", { appName: e.name }); }
function H(e) { let t = Math.round(e / 1e3), r = Math.floor(t / (3600 * 24)), n = Math.floor((t - r * 3600 * 24) / 3600), o = Math.floor((t - r * 3600 * 24 - n * 3600) / 60), i = t - r * 3600 * 24 - n * 3600 - o * 60, s = ""; return r && (s += w(r) + "d:"), n && (s += w(n) + "h:"), s += w(o) + "m:" + w(i) + "s", s; }
function w(e) { return e === 0 ? "00" : e >= 10 ? e.toString() : "0" + e; }
function R(n, o) { return d(this, arguments, function* ({ url: e, body: t }, r) { let i = { "Content-Type": "application/json" }, s = r.getImmediate({ optional: !0 }); if (s) {
    let f = yield s.getHeartbeatsHeader();
    f && (i["X-Firebase-Client"] = f);
} let h = { method: "POST", body: JSON.stringify(t), headers: i }, l; try {
    l = yield fetch(e, h);
}
catch (f) {
    throw u.create("fetch-network-error", { originalErrorMessage: f?.message });
} if (l.status !== 200)
    throw u.create("fetch-status-error", { httpStatus: l.status }); let a; try {
    a = yield l.json();
}
catch (f) {
    throw u.create("fetch-parse-error", { originalErrorMessage: f?.message });
} let m = a.ttl.match(/^([\d.]+)(s)$/); if (!m || !m[2] || isNaN(Number(m[1])))
    throw u.create("fetch-parse-error", { originalErrorMessage: `ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}` }); let Te = Number(m[1]) * 1e3, z = Date.now(); return { token: a.token, expireTimeMillis: z + Te, issuedAtTimeMillis: z }; }); }
function Re(e, t) { let { projectId: r, appId: n, apiKey: o } = e.options; return { url: `${O}/projects/${r}/apps/${n}:${we}?key=${o}`, body: { recaptcha_v3_token: t } }; }
function Pe(e, t) { let { projectId: r, appId: n, apiKey: o } = e.options; return { url: `${O}/projects/${r}/apps/${n}:${_e}?key=${o}`, body: { recaptcha_enterprise_token: t } }; }
function ie(e, t) { let { projectId: r, appId: n, apiKey: o } = e.options; return { url: `${O}/projects/${r}/apps/${n}:${be}?key=${o}`, body: { debug_token: t } }; }
var ye = "firebase-app-check-database", De = 1, T = "firebase-app-check-store", se = "debug-token", _ = null;
function ae() { return _ || (_ = new Promise((e, t) => { try {
    let r = indexedDB.open(ye, De);
    r.onsuccess = n => { e(n.target.result); }, r.onerror = n => { var o; t(u.create("storage-open", { originalErrorMessage: (o = n.target.error) === null || o === void 0 ? void 0 : o.message })); }, r.onupgradeneeded = n => { let o = n.target.result; switch (n.oldVersion) {
        case 0: o.createObjectStore(T, { keyPath: "compositeKey" });
    } };
}
catch (r) {
    t(u.create("storage-open", { originalErrorMessage: r?.message }));
} }), _); }
function Ie(e) { return le(ue(e)); }
function Se(e, t) { return ce(ue(e), t); }
function Me(e) { return ce(se, e); }
function xe() { return le(se); }
function ce(e, t) { return d(this, null, function* () { let n = (yield ae()).transaction(T, "readwrite"), i = n.objectStore(T).put({ compositeKey: e, value: t }); return new Promise((s, h) => { i.onsuccess = l => { s(); }, n.onerror = l => { var a; h(u.create("storage-set", { originalErrorMessage: (a = l.target.error) === null || a === void 0 ? void 0 : a.message })); }; }); }); }
function le(e) { return d(this, null, function* () { let r = (yield ae()).transaction(T, "readonly"), o = r.objectStore(T).get(e); return new Promise((i, s) => { o.onsuccess = h => { let l = h.target.result; i(l ? l.value : void 0); }, r.onerror = h => { var l; s(u.create("storage-get", { originalErrorMessage: (l = h.target.error) === null || l === void 0 ? void 0 : l.message })); }; }); }); }
function ue(e) { return `${e.options.appId}-${e.name}`; }
var p = new V("@firebase/app-check");
function Ne(e) { return d(this, null, function* () { if (P()) {
    let t;
    try {
        t = yield Ie(e);
    }
    catch (r) {
        p.warn(`Failed to read token from IndexedDB. Error: ${r}`);
    }
    return t;
} }); }
function I(e, t) { return P() ? Se(e, t).catch(r => { p.warn(`Failed to write token to IndexedDB. Error: ${r}`); }) : Promise.resolve(); }
function Oe() { return d(this, null, function* () { let e; try {
    e = yield xe();
}
catch { } if (e)
    return e; {
    let t = crypto.randomUUID();
    return Me(t).catch(r => p.warn(`Failed to persist debug token to IndexedDB. Error: ${r}`)), t;
} }); }
function B() { return C().enabled; }
function K() {
    return d(this, null, function* () {
        let e = C();
        if (e.enabled && e.token)
            return e.token.promise;
        throw Error(`
            Can't get debug token in production mode.
        `);
    });
}
function $e() { let e = U(), t = C(); if (t.initialized = !0, typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN != "string" && e.FIREBASE_APPCHECK_DEBUG_TOKEN !== !0)
    return; t.enabled = !0; let r = new g; t.token = r, typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN == "string" ? r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN) : r.resolve(Oe()); }
var He = { error: "UNKNOWN_ERROR" };
function Be(e) { return j.encodeString(JSON.stringify(e), !1); }
function A(e, t = !1, r = !1) { return d(this, null, function* () { let n = e.app; $(n); let o = c(n), i = o.token, s; if (i && !k(i) && (o.token = void 0, i = void 0), !i) {
    let a = yield o.cachedTokenPromise;
    a && (k(a) ? i = a : yield I(n, void 0));
} if (!t && i && k(i))
    return { token: i.token }; let h = !1; if (B())
    try {
        o.exchangeTokenPromise || (o.exchangeTokenPromise = R(ie(n, yield K()), e.heartbeatServiceProvider).finally(() => { o.exchangeTokenPromise = void 0; }), h = !0);
        let a = yield o.exchangeTokenPromise;
        return yield I(n, a), o.token = a, { token: a.token };
    }
    catch (a) {
        return a.code === "appCheck/throttled" || a.code === "appCheck/initial-throttle" ? p.warn(a.message) : r && p.error(a), S(a);
    } try {
    o.exchangeTokenPromise || (o.exchangeTokenPromise = o.provider.getToken().finally(() => { o.exchangeTokenPromise = void 0; }), h = !0), i = yield c(n).exchangeTokenPromise;
}
catch (a) {
    a.code === "appCheck/throttled" || a.code === "appCheck/initial-throttle" ? p.warn(a.message) : r && p.error(a), s = a;
} let l; return i ? s ? k(i) ? l = { token: i.token, internalError: s } : l = S(s) : (l = { token: i.token }, o.token = i, yield I(n, i)) : l = S(s), h && he(n, l), l; }); }
function de(e) { return d(this, null, function* () { let t = e.app; $(t); let { provider: r } = c(t); if (B()) {
    let n = yield K(), { token: o } = yield R(ie(t, n), e.heartbeatServiceProvider);
    return { token: o };
}
else {
    let { token: n } = yield r.getToken();
    return { token: n };
} }); }
function F(e, t, r, n) { let { app: o } = e, i = c(o), s = { next: r, error: n, type: t }; if (i.tokenObservers = [...i.tokenObservers, s], i.token && k(i.token)) {
    let h = i.token;
    Promise.resolve().then(() => { r({ token: h.token }), Z(e); }).catch(() => { });
} i.cachedTokenPromise.then(() => Z(e)); }
function L(e, t) { let r = c(e), n = r.tokenObservers.filter(o => o.next !== t); n.length === 0 && r.tokenRefresher && r.tokenRefresher.isRunning() && r.tokenRefresher.stop(), r.tokenObservers = n; }
function Z(e) { let { app: t } = e, r = c(t), n = r.tokenRefresher; n || (n = Ke(e), r.tokenRefresher = n), !n.isRunning() && r.isTokenAutoRefreshEnabled && n.start(); }
function Ke(e) { let { app: t } = e; return new x(() => d(null, null, function* () { let r = c(t), n; if (r.token ? n = yield A(e, !0) : n = yield A(e), n.error)
    throw n.error; if (n.internalError)
    throw n.internalError; }), () => !0, () => { let r = c(t); if (r.token) {
    let n = r.token.issuedAtTimeMillis + (r.token.expireTimeMillis - r.token.issuedAtTimeMillis) * .5 + 3e5, o = r.token.expireTimeMillis - 300 * 1e3;
    return n = Math.min(n, o), Math.max(0, n - Date.now());
}
else
    return 0; }, Q.RETRIAL_MIN_WAIT, Q.RETRIAL_MAX_WAIT); }
function he(e, t) { let r = c(e).tokenObservers; for (let n of r)
    try {
        n.type === "EXTERNAL" && t.error != null ? n.error(t.error) : n.next(t);
    }
    catch { } }
function k(e) { return e.expireTimeMillis - Date.now() > 0; }
function S(e) { return { token: Be(He), error: e }; }
var N = class {
    constructor(t, r) { this.app = t, this.heartbeatServiceProvider = r; }
    _delete() { let { tokenObservers: t } = c(this.app); for (let r of t)
        L(this.app, r.next); return Promise.resolve(); }
};
function Fe(e, t) { return new N(e, t); }
function Le(e) { return { getToken: t => A(e, t), getLimitedUseToken: () => de(e), addTokenListener: t => F(e, "INTERNAL", t), removeTokenListener: t => L(e.app, t) }; }
var ze = "@firebase/app-check", je = "0.10.1";
var Ue = "https://www.google.com/recaptcha/api.js", qe = "https://www.google.com/recaptcha/enterprise.js";
function We(e, t) { let r = new g, n = c(e); n.reCAPTCHAState = { initialized: r }; let o = fe(e), i = b(!1); return i ? v(e, t, i, o, r) : Ve(() => { let s = b(!1); if (!s)
    throw new Error("no recaptcha"); v(e, t, s, o, r); }), r.promise; }
function Ge(e, t) { let r = new g, n = c(e); n.reCAPTCHAState = { initialized: r }; let o = fe(e), i = b(!0); return i ? v(e, t, i, o, r) : Ye(() => { let s = b(!0); if (!s)
    throw new Error("no recaptcha"); v(e, t, s, o, r); }), r.promise; }
function v(e, t, r, n, o) { r.ready(() => { Xe(e, t, r, n), o.resolve(r); }); }
function fe(e) { let t = `fire_app_check_${e.name}`, r = document.createElement("div"); return r.id = t, r.style.display = "none", document.body.appendChild(r), t; }
function pe(e) { return d(this, null, function* () { $(e); let r = yield c(e).reCAPTCHAState.initialized.promise; return new Promise((n, o) => { let i = c(e).reCAPTCHAState; r.ready(() => { n(r.execute(i.widgetId, { action: "fire_app_check" })); }); }); }); }
function Xe(e, t, r, n) { let o = r.render(n, { sitekey: t, size: "invisible", callback: () => { c(e).reCAPTCHAState.succeeded = !0; }, "error-callback": () => { c(e).reCAPTCHAState.succeeded = !1; } }), i = c(e); i.reCAPTCHAState = Object.assign(Object.assign({}, i.reCAPTCHAState), { widgetId: o }); }
function Ve(e) { let t = document.createElement("script"); t.src = Ue, t.onload = e, document.head.appendChild(t); }
function Ye(e) { let t = document.createElement("script"); t.src = qe, t.onload = e, document.head.appendChild(t); }
var ee = class e {
    constructor(t) { this._siteKey = t, this._throttleData = null; }
    getToken() { return d(this, null, function* () { var t, r, n; ke(this._throttleData); let o = yield pe(this._app).catch(s => { throw u.create("recaptcha-error"); }); if (!(!((t = c(this._app).reCAPTCHAState) === null || t === void 0) && t.succeeded))
        throw u.create("recaptcha-error"); let i; try {
        i = yield R(Re(this._app, o), this._heartbeatServiceProvider);
    }
    catch (s) {
        throw !((r = s.code) === null || r === void 0) && r.includes("fetch-status-error") ? (this._throttleData = ge(Number((n = s.customData) === null || n === void 0 ? void 0 : n.httpStatus), this._throttleData), u.create("initial-throttle", { time: H(this._throttleData.allowRequestsAfter - Date.now()), httpStatus: this._throttleData.httpStatus })) : s;
    } return this._throttleData = null, i; }); }
    initialize(t) { this._app = t, this._heartbeatServiceProvider = E(t, "heartbeat"), We(t, this._siteKey).catch(() => { }); }
    isEqual(t) { return t instanceof e ? this._siteKey === t._siteKey : !1; }
}, te = class e {
    constructor(t) { this._siteKey = t, this._throttleData = null; }
    getToken() { return d(this, null, function* () { var t, r, n; ke(this._throttleData); let o = yield pe(this._app).catch(s => { throw u.create("recaptcha-error"); }); if (!(!((t = c(this._app).reCAPTCHAState) === null || t === void 0) && t.succeeded))
        throw u.create("recaptcha-error"); let i; try {
        i = yield R(Pe(this._app, o), this._heartbeatServiceProvider);
    }
    catch (s) {
        throw !((r = s.code) === null || r === void 0) && r.includes("fetch-status-error") ? (this._throttleData = ge(Number((n = s.customData) === null || n === void 0 ? void 0 : n.httpStatus), this._throttleData), u.create("initial-throttle", { time: H(this._throttleData.allowRequestsAfter - Date.now()), httpStatus: this._throttleData.httpStatus })) : s;
    } return this._throttleData = null, i; }); }
    initialize(t) { this._app = t, this._heartbeatServiceProvider = E(t, "heartbeat"), Ge(t, this._siteKey).catch(() => { }); }
    isEqual(t) { return t instanceof e ? this._siteKey === t._siteKey : !1; }
}, re = class e {
    constructor(t) { this._customProviderOptions = t; }
    getToken() { return d(this, null, function* () { let t = yield this._customProviderOptions.getToken(), r = W(t.token), n = r !== null && r < Date.now() && r > 0 ? r * 1e3 : Date.now(); return Object.assign(Object.assign({}, t), { issuedAtTimeMillis: n }); }); }
    initialize(t) { this._app = t; }
    isEqual(t) { return t instanceof e ? this._customProviderOptions.getToken.toString() === t._customProviderOptions.getToken.toString() : !1; }
};
function ge(e, t) { if (e === 404 || e === 403)
    return { backoffCount: 1, allowRequestsAfter: Date.now() + Ae, httpStatus: e }; {
    let r = t ? t.backoffCount : 0, n = G(r, 1e3, 2);
    return { backoffCount: r + 1, allowRequestsAfter: Date.now() + n, httpStatus: e };
} }
function ke(e) { if (e && Date.now() - e.allowRequestsAfter <= 0)
    throw u.create("throttled", { time: H(e.allowRequestsAfter - Date.now()), httpStatus: e.httpStatus }); }
function ot(e = Y(), t) { e = X(e); let r = E(e, "app-check"); if (C().initialized || $e(), B() && K().then(o => console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)), r.isInitialized()) {
    let o = r.getImmediate(), i = r.getOptions();
    if (i.isTokenAutoRefreshEnabled === t.isTokenAutoRefreshEnabled && i.provider.isEqual(t.provider))
        return o;
    throw u.create("already-initialized", { appName: e.name });
} let n = r.initialize({ options: t }); return Je(e, t.provider, t.isTokenAutoRefreshEnabled), c(e).isTokenAutoRefreshEnabled && F(n, "INTERNAL", () => { }), n; }
function Je(e, t, r = !1) { let n = Ee(e, Object.assign({}, oe)); n.activated = !0, n.provider = t, n.cachedTokenPromise = Ne(e).then(o => (o && k(o) && (n.token = o, he(e, { token: o.token })), o)), n.isTokenAutoRefreshEnabled = r && e.automaticDataCollectionEnabled, !e.automaticDataCollectionEnabled && r && p.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."), n.provider.initialize(e); }
function it(e, t) { let r = e.app, n = c(r); n.tokenRefresher && (t === !0 ? n.tokenRefresher.start() : n.tokenRefresher.stop()), n.isTokenAutoRefreshEnabled = t; }
function st(e, t) { return d(this, null, function* () { let r = yield A(e, t); if (r.error)
    throw r.error; if (r.internalError)
    throw r.internalError; return { token: r.token }; }); }
function at(e) { return de(e); }
function ct(e, t, r, n) { let o = () => { }, i = () => { }; return t.next != null ? o = t.next.bind(t) : o = t, t.error != null ? i = t.error.bind(t) : r && (i = r), F(e, "EXTERNAL", o, i), () => L(e.app, o); }
var Qe = "app-check", ne = "app-check-internal";
function Ze() { D(new y(Qe, e => { let t = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"); return Fe(t, r); }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, r) => { e.getProvider(ne).initialize(); })), D(new y(ne, e => { let t = e.getProvider("app-check").getImmediate(); return Le(t); }, "PUBLIC").setInstantiationMode("EXPLICIT")), J(ze, je); }
Ze();
export { re as CustomProvider, te as ReCaptchaEnterpriseProvider, ee as ReCaptchaV3Provider, at as getLimitedUseToken, st as getToken, ot as initializeAppCheck, ct as onTokenChanged, it as setTokenAutoRefreshEnabled };
/*! Bundled license information:

@firebase/app-check/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   * Copyright 2021 Google LLC
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
