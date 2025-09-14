import { a as de, b as ue, e as u } from "@nf-internal/chunk-ACKELEN3";
var he = () => { };
var be = function (t) { let e = [], n = 0; for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
} return e; }, ze = function (t) { let e = [], n = 0, r = 0; for (; n < t.length;) {
    let i = t[n++];
    if (i < 128)
        e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
        let s = t[n++];
        e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    }
    else if (i > 239 && i < 365) {
        let s = t[n++], o = t[n++], l = t[n++], c = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | l & 63) - 65536;
        e[r++] = String.fromCharCode(55296 + (c >> 10)), e[r++] = String.fromCharCode(56320 + (c & 1023));
    }
    else {
        let s = t[n++], o = t[n++];
        e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
} return e.join(""); }, _e = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/="; }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_."; }, HAS_NATIVE_SUPPORT: typeof atob == "function", encodeByteArray(t, e) { if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter"); this.init_(); let n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = []; for (let i = 0; i < t.length; i += 3) {
        let s = t[i], o = i + 1 < t.length, l = o ? t[i + 1] : 0, c = i + 2 < t.length, d = c ? t[i + 2] : 0, w = s >> 2, m = (s & 3) << 4 | l >> 4, a = (l & 15) << 2 | d >> 6, p = d & 63;
        c || (p = 64, o || (a = 64)), r.push(n[w], n[m], n[a], n[p]);
    } return r.join(""); }, encodeString(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(be(t), e); }, decodeString(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : ze(this.decodeStringToByteArray(t, e)); }, decodeStringToByteArray(t, e) { this.init_(); let n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = []; for (let i = 0; i < t.length;) {
        let s = n[t.charAt(i++)], l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        let d = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        let m = i < t.length ? n[t.charAt(i)] : 64;
        if (++i, s == null || l == null || d == null || m == null)
            throw new V;
        let a = s << 2 | l >> 4;
        if (r.push(a), d !== 64) {
            let p = l << 4 & 240 | d >> 2;
            if (r.push(p), m !== 64) {
                let C = d << 6 & 192 | m;
                r.push(C);
            }
        }
    } return r; }, init_() { if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
            this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    } } }, V = class extends Error {
    constructor() { super(...arguments), this.name = "DecodeBase64StringError"; }
}, Ue = function (t) { let e = be(t); return _e.encodeByteArray(e, !0); }, S = function (t) { return Ue(t).replace(/\./g, ""); }, I = function (t) { try {
    return _e.decodeString(t, !0);
}
catch (e) {
    console.error("base64Decode failed: ", e);
} return null; };
function Ve() { if (typeof self < "u")
    return self; if (typeof window < "u")
    return window; if (typeof global < "u")
    return global; throw new Error("Unable to locate global object."); }
var We = () => Ve().__FIREBASE_DEFAULTS__, Ge = () => { if (typeof process > "u" || typeof process.env > "u")
    return; let t = process.env.__FIREBASE_DEFAULTS__; if (t)
    return JSON.parse(t); }, Je = () => { if (typeof document > "u")
    return; let t; try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
}
catch {
    return;
} let e = t && I(t[1]); return e && JSON.parse(e); }, R = () => { try {
    return he() || We() || Ge() || Je();
}
catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
} }, Ke = t => { var e, n; return (n = (e = R()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]; }, un = t => { let e = Ke(t); if (!e)
    return; let n = e.lastIndexOf(":"); if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`); let r = parseInt(e.substring(n + 1), 10); return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]; }, G = () => { var t; return (t = R()) === null || t === void 0 ? void 0 : t.config; }, hn = t => { var e; return (e = R()) === null || e === void 0 ? void 0 : e[`_${t}`]; };
var N = class {
    constructor() { this.reject = () => { }, this.resolve = () => { }, this.promise = new Promise((e, n) => { this.resolve = e, this.reject = n; }); }
    wrapCallback(e) { return (n, r) => { n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => { }), e.length === 1 ? e(n) : e(n, r)); }; }
};
function Ze(t) { try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
}
catch {
    return !1;
} }
function pn(t) { return u(this, null, function* () { return (yield fetch(t, { credentials: "include" })).ok; }); }
function mn(t, e) { if (t.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'); let n = { alg: "none", type: "JWT" }, r = e || "demo-project", i = t.iat || 0, s = t.sub || t.user_id; if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!"); let o = Object.assign({ iss: `https://securetoken.google.com/${r}`, aud: r, iat: i, exp: i + 3600, auth_time: i, sub: s, user_id: s, firebase: { sign_in_provider: "custom", identities: {} } }, t); return [S(JSON.stringify(n)), S(JSON.stringify(o)), ""].join("."); }
var D = {};
function Ye() { let t = { prod: [], emulator: [] }; for (let e of Object.keys(D))
    D[e] ? t.emulator.push(e) : t.prod.push(e); return t; }
function qe(t) { let e = document.getElementById(t), n = !1; return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e }; }
var pe = !1;
function gn(t, e) {
    if (typeof window > "u" || typeof document > "u" || !Ze(window.location.host) || D[t] === e || D[t] || pe)
        return;
    D[t] = e;
    function n(a) { return `__firebase__banner__${a}`; }
    let r = "__firebase__banner", s = Ye().prod.length > 0;
    function o() { let a = document.getElementById(r); a && a.remove(); }
    function l(a) { a.style.display = "flex", a.style.background = "#7faaf0", a.style.position = "fixed", a.style.bottom = "5px", a.style.left = "5px", a.style.padding = ".5em", a.style.borderRadius = "5px", a.style.alignItems = "center"; }
    function c(a, p) { a.setAttribute("width", "24"), a.setAttribute("id", p), a.setAttribute("height", "24"), a.setAttribute("viewBox", "0 0 24 24"), a.setAttribute("fill", "none"), a.style.marginLeft = "-6px"; }
    function d() { let a = document.createElement("span"); return a.style.cursor = "pointer", a.style.marginLeft = "16px", a.style.fontSize = "24px", a.innerHTML = " &times;", a.onclick = () => { pe = !0, o(); }, a; }
    function w(a, p) { a.setAttribute("id", p), a.innerText = "Learn more", a.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", a.setAttribute("target", "__blank"), a.style.paddingLeft = "5px", a.style.textDecoration = "underline"; }
    function m() {
        let a = qe(r), p = n("text"), C = document.getElementById(p) || document.createElement("span"), ce = n("learnmore"), le = document.getElementById(ce) || document.createElement("a"), fe = n("preprendIcon"), M = document.getElementById(fe) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (a.created) {
            let z = a.element;
            l(z), w(le, ce);
            let je = d();
            c(M, fe), z.append(M, C, le, je), document.body.appendChild(z);
        }
        s ? (C.innerText = "Preview backend disconnected.", M.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (M.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`, C.innerText = "Preview backend running in this workspace."), C.setAttribute("id", p);
    }
    document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", m) : m();
}
function ye() { return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""; }
function bn() { return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye()); }
function ve() { var t; let e = (t = R()) === null || t === void 0 ? void 0 : t.forceEnvironment; if (e === "node")
    return !0; if (e === "browser")
    return !1; try {
    return Object.prototype.toString.call(global.process) === "[object process]";
}
catch {
    return !1;
} }
function Ee() { return typeof window < "u" || J(); }
function J() { return typeof WorkerGlobalScope < "u" && typeof self < "u" && self instanceof WorkerGlobalScope; }
function _n() { return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"; }
function yn() { let t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0; return typeof t == "object" && t.id !== void 0; }
function vn() { return typeof navigator == "object" && navigator.product === "ReactNative"; }
function En() { let t = ye(); return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0; }
function wn() { return !ve() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"); }
function Cn() { return !ve() && !!navigator.userAgent && (navigator.userAgent.includes("Safari") || navigator.userAgent.includes("WebKit")) && !navigator.userAgent.includes("Chrome"); }
function we() { try {
    return typeof indexedDB == "object";
}
catch {
    return !1;
} }
function Ce() { return new Promise((t, e) => { try {
    let n = !0, r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
    i.onsuccess = () => { i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0); }, i.onupgradeneeded = () => { n = !1; }, i.onerror = () => { var s; e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""); };
}
catch (n) {
    e(n);
} }); }
var Xe = "FirebaseError", _ = class t extends Error {
    constructor(e, n, r) { super(n), this.code = e, this.customData = r, this.name = Xe, Object.setPrototypeOf(this, t.prototype), Error.captureStackTrace && Error.captureStackTrace(this, A.prototype.create); }
}, A = class {
    constructor(e, n, r) { this.service = e, this.serviceName = n, this.errors = r; }
    create(e, ...n) { let r = n[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? Qe(s, r) : "Error", l = `${this.serviceName}: ${o} (${i}).`; return new _(i, l, r); }
};
function Qe(t, e) { return t.replace(et, (n, r) => { let i = e[r]; return i != null ? String(i) : `<${r}?>`; }); }
var et = /\{\$([^}]+)}/g;
function me(t) { return JSON.parse(t); }
var tt = function (t) { let e = {}, n = {}, r = {}, i = ""; try {
    let s = t.split(".");
    e = me(I(s[0]) || ""), n = me(I(s[1]) || ""), i = s[2], r = n.d || {}, delete n.d;
}
catch { } return { header: e, claims: n, data: r, signature: i }; };
var Dn = function (t) { let e = tt(t).claims; return typeof e == "object" && e.hasOwnProperty("iat") ? e.iat : null; };
function Sn(t) { for (let e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
        return !1; return !0; }
function L(t, e) { if (t === e)
    return !0; let n = Object.keys(t), r = Object.keys(e); for (let i of n) {
    if (!r.includes(i))
        return !1;
    let s = t[i], o = e[i];
    if (ge(s) && ge(o)) {
        if (!L(s, o))
            return !1;
    }
    else if (s !== o)
        return !1;
} for (let i of r)
    if (!n.includes(i))
        return !1; return !0; }
function ge(t) { return t !== null && typeof t == "object"; }
function In(t) { let e = []; for (let [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach(i => { e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i)); }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r)); return e.length ? "&" + e.join("&") : ""; }
function An(t) { let e = {}; return t.replace(/^\?/, "").split("&").forEach(r => { if (r) {
    let [i, s] = r.split("=");
    e[decodeURIComponent(i)] = decodeURIComponent(s);
} }), e; }
function On(t) { let e = t.indexOf("?"); if (!e)
    return ""; let n = t.indexOf("#", e); return t.substring(e, n > 0 ? n : void 0); }
function xn(t, e) { let n = new W(t, e); return n.subscribe.bind(n); }
var W = class {
    constructor(e, n) { this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => { e(this); }).catch(r => { this.error(r); }); }
    next(e) { this.forEachObserver(n => { n.next(e); }); }
    error(e) { this.forEachObserver(n => { n.error(e); }), this.close(e); }
    complete() { this.forEachObserver(e => { e.complete(); }), this.close(); }
    subscribe(e, n, r) { let i; if (e === void 0 && n === void 0 && r === void 0)
        throw new Error("Missing Observer."); nt(e, ["next", "error", "complete"]) ? i = e : i = { next: e, error: n, complete: r }, i.next === void 0 && (i.next = U), i.error === void 0 && (i.error = U), i.complete === void 0 && (i.complete = U); let s = this.unsubscribeOne.bind(this, this.observers.length); return this.finalized && this.task.then(() => { try {
        this.finalError ? i.error(this.finalError) : i.complete();
    }
    catch { } }), this.observers.push(i), s; }
    unsubscribeOne(e) { this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this)); }
    forEachObserver(e) { if (!this.finalized)
        for (let n = 0; n < this.observers.length; n++)
            this.sendOne(n, e); }
    sendOne(e, n) { this.task.then(() => { if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
            n(this.observers[e]);
        }
        catch (r) {
            typeof console < "u" && console.error && console.error(r);
        } }); }
    close(e) { this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => { this.observers = void 0, this.onNoObservers = void 0; })); }
};
function nt(t, e) { if (typeof t != "object" || t === null)
    return !1; for (let n of e)
    if (n in t && typeof t[n] == "function")
        return !0; return !1; }
function U() { }
var rt = 1e3, it = 2, st = 14400 * 1e3, ot = .5;
function Bn(t, e = rt, n = it) { let r = e * Math.pow(n, t), i = Math.round(ot * r * (Math.random() - .5) * 2); return Math.min(st, r + i); }
function Tn(t) { return t && t._delegate ? t._delegate : t; }
var v = class {
    constructor(e, n, r) { this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null; }
    setInstantiationMode(e) { return this.instantiationMode = e, this; }
    setMultipleInstances(e) { return this.multipleInstances = e, this; }
    setServiceProps(e) { return this.serviceProps = e, this; }
    setInstanceCreatedCallback(e) { return this.onInstanceCreated = e, this; }
};
var y = "[DEFAULT]";
var K = class {
    constructor(e, n) { this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map; }
    get(e) { let n = this.normalizeInstanceIdentifier(e); if (!this.instancesDeferred.has(n)) {
        let r = new N;
        if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
            try {
                let i = this.getOrInitializeService({ instanceIdentifier: n });
                i && r.resolve(i);
            }
            catch { }
    } return this.instancesDeferred.get(n).promise; }
    getImmediate(e) { var n; let r = this.normalizeInstanceIdentifier(e?.identifier), i = (n = e?.optional) !== null && n !== void 0 ? n : !1; if (this.isInitialized(r) || this.shouldAutoInitialize())
        try {
            return this.getOrInitializeService({ instanceIdentifier: r });
        }
        catch (s) {
            if (i)
                return null;
            throw s;
        }
    else {
        if (i)
            return null;
        throw Error(`Service ${this.name} is not available`);
    } }
    getComponent() { return this.component; }
    setComponent(e) { if (e.name !== this.name)
        throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`); if (this.component)
        throw Error(`Component for ${this.name} has already been provided`); if (this.component = e, !!this.shouldAutoInitialize()) {
        if (ct(e))
            try {
                this.getOrInitializeService({ instanceIdentifier: y });
            }
            catch { }
        for (let [n, r] of this.instancesDeferred.entries()) {
            let i = this.normalizeInstanceIdentifier(n);
            try {
                let s = this.getOrInitializeService({ instanceIdentifier: i });
                r.resolve(s);
            }
            catch { }
        }
    } }
    clearInstance(e = y) { this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e); }
    delete() { return u(this, null, function* () { let e = Array.from(this.instances.values()); yield Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())]); }); }
    isComponentSet() { return this.component != null; }
    isInitialized(e = y) { return this.instances.has(e); }
    getOptions(e = y) { return this.instancesOptions.get(e) || {}; }
    initialize(e = {}) { let { options: n = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier); if (this.isInitialized(r))
        throw Error(`${this.name}(${r}) has already been initialized`); if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`); let i = this.getOrInitializeService({ instanceIdentifier: r, options: n }); for (let [s, o] of this.instancesDeferred.entries()) {
        let l = this.normalizeInstanceIdentifier(s);
        r === l && o.resolve(i);
    } return i; }
    onInit(e, n) { var r; let i = this.normalizeInstanceIdentifier(n), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set; s.add(e), this.onInitCallbacks.set(i, s); let o = this.instances.get(i); return o && e(o, i), () => { s.delete(e); }; }
    invokeOnInitCallbacks(e, n) { let r = this.onInitCallbacks.get(n); if (r)
        for (let i of r)
            try {
                i(e, n);
            }
            catch { } }
    getOrInitializeService({ instanceIdentifier: e, options: n = {} }) { let r = this.instances.get(e); if (!r && this.component && (r = this.component.instanceFactory(this.container, { instanceIdentifier: at(e), options: n }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
        try {
            this.component.onInstanceCreated(this.container, e, r);
        }
        catch { } return r || null; }
    normalizeInstanceIdentifier(e = y) { return this.component ? this.component.multipleInstances ? e : y : e; }
    shouldAutoInitialize() { return !!this.component && this.component.instantiationMode !== "EXPLICIT"; }
};
function at(t) { return t === y ? void 0 : t; }
function ct(t) { return t.instantiationMode === "EAGER"; }
var O = class {
    constructor(e) { this.name = e, this.providers = new Map; }
    addComponent(e) { let n = this.getProvider(e.name); if (n.isComponentSet())
        throw new Error(`Component ${e.name} has already been registered with ${this.name}`); n.setComponent(e); }
    addOrOverwriteComponent(e) { this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e); }
    getProvider(e) { if (this.providers.has(e))
        return this.providers.get(e); let n = new K(e, this); return this.providers.set(e, n), n; }
    getProviders() { return Array.from(this.providers.values()); }
};
var Z = [], f = (function (t) { return t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT", t; })(f || {}), De = { debug: f.DEBUG, verbose: f.VERBOSE, info: f.INFO, warn: f.WARN, error: f.ERROR, silent: f.SILENT }, lt = f.INFO, ft = { [f.DEBUG]: "log", [f.VERBOSE]: "log", [f.INFO]: "info", [f.WARN]: "warn", [f.ERROR]: "error" }, dt = (t, e, ...n) => { if (e < t.logLevel)
    return; let r = new Date().toISOString(), i = ft[e]; if (i)
    console[i](`[${r}]  ${t.name}:`, ...n);
else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`); }, k = class {
    constructor(e) { this.name = e, this._logLevel = lt, this._logHandler = dt, this._userLogHandler = null, Z.push(this); }
    get logLevel() { return this._logLevel; }
    set logLevel(e) { if (!(e in f))
        throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``); this._logLevel = e; }
    setLogLevel(e) { this._logLevel = typeof e == "string" ? De[e] : e; }
    get logHandler() { return this._logHandler; }
    set logHandler(e) { if (typeof e != "function")
        throw new TypeError("Value assigned to `logHandler` must be a function"); this._logHandler = e; }
    get userLogHandler() { return this._userLogHandler; }
    set userLogHandler(e) { this._userLogHandler = e; }
    debug(...e) { this._userLogHandler && this._userLogHandler(this, f.DEBUG, ...e), this._logHandler(this, f.DEBUG, ...e); }
    log(...e) { this._userLogHandler && this._userLogHandler(this, f.VERBOSE, ...e), this._logHandler(this, f.VERBOSE, ...e); }
    info(...e) { this._userLogHandler && this._userLogHandler(this, f.INFO, ...e), this._logHandler(this, f.INFO, ...e); }
    warn(...e) { this._userLogHandler && this._userLogHandler(this, f.WARN, ...e), this._logHandler(this, f.WARN, ...e); }
    error(...e) { this._userLogHandler && this._userLogHandler(this, f.ERROR, ...e), this._logHandler(this, f.ERROR, ...e); }
};
function Se(t) { Z.forEach(e => { e.setLogLevel(t); }); }
function Ie(t, e) { for (let n of Z) {
    let r = null;
    e && e.level && (r = De[e.level]), t === null ? n.userLogHandler = null : n.userLogHandler = (i, s, ...o) => { let l = o.map(c => { if (c == null)
        return null; if (typeof c == "string")
        return c; if (typeof c == "number" || typeof c == "boolean")
        return c.toString(); if (c instanceof Error)
        return c.message; try {
        return JSON.stringify(c);
    }
    catch {
        return null;
    } }).filter(c => c).join(" "); s >= (r ?? i.logLevel) && t({ level: f[s].toLowerCase(), message: l, args: o, type: i.name }); };
} }
var ut = (t, e) => e.some(n => t instanceof n), Ae, Oe;
function ht() { return Ae || (Ae = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]); }
function pt() { return Oe || (Oe = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]); }
var xe = new WeakMap, q = new WeakMap, Be = new WeakMap, Y = new WeakMap, Q = new WeakMap;
function mt(t) { let e = new Promise((n, r) => { let i = () => { t.removeEventListener("success", s), t.removeEventListener("error", o); }, s = () => { n(g(t.result)), i(); }, o = () => { r(t.error), i(); }; t.addEventListener("success", s), t.addEventListener("error", o); }); return e.then(n => { n instanceof IDBCursor && xe.set(n, t); }).catch(() => { }), Q.set(e, t), e; }
function gt(t) { if (q.has(t))
    return; let e = new Promise((n, r) => { let i = () => { t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o); }, s = () => { n(), i(); }, o = () => { r(t.error || new DOMException("AbortError", "AbortError")), i(); }; t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o); }); q.set(t, e); }
var X = { get(t, e, n) { if (t instanceof IDBTransaction) {
        if (e === "done")
            return q.get(t);
        if (e === "objectStoreNames")
            return t.objectStoreNames || Be.get(t);
        if (e === "store")
            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    } return g(t[e]); }, set(t, e, n) { return t[e] = n, !0; }, has(t, e) { return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t; } };
function Te(t) { X = t(X); }
function bt(t) { return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (e, ...n) { let r = t.call(P(this), e, ...n); return Be.set(r, e.sort ? e.sort() : [e]), g(r); } : pt().includes(t) ? function (...e) { return t.apply(P(this), e), g(xe.get(this)); } : function (...e) { return g(t.apply(P(this), e)); }; }
function _t(t) { return typeof t == "function" ? bt(t) : (t instanceof IDBTransaction && gt(t), ut(t, ht()) ? new Proxy(t, X) : t); }
function g(t) { if (t instanceof IDBRequest)
    return mt(t); if (Y.has(t))
    return Y.get(t); let e = _t(t); return e !== t && (Y.set(t, e), Q.set(e, t)), e; }
var P = t => Q.get(t);
function Ne(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) { let o = indexedDB.open(t, e), l = g(o); return r && o.addEventListener("upgradeneeded", c => { r(g(o.result), c.oldVersion, c.newVersion, g(o.transaction), c); }), n && o.addEventListener("blocked", c => n(c.oldVersion, c.newVersion, c)), l.then(c => { s && c.addEventListener("close", () => s()), i && c.addEventListener("versionchange", d => i(d.oldVersion, d.newVersion, d)); }).catch(() => { }), l; }
var yt = ["get", "getKey", "getAll", "getAllKeys", "count"], vt = ["put", "add", "delete", "clear"], ee = new Map;
function Me(t, e) { if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return; if (ee.get(e))
    return ee.get(e); let n = e.replace(/FromIndex$/, ""), r = e !== n, i = vt.includes(n); if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || yt.includes(n)))
    return; let s = function (o, ...l) { return u(this, null, function* () { let c = this.transaction(o, i ? "readwrite" : "readonly"), d = c.store; return r && (d = d.index(l.shift())), (yield Promise.all([d[n](...l), i && c.done]))[0]; }); }; return ee.set(e, s), s; }
Te(t => ue(de({}, t), { get: (e, n, r) => Me(e, n) || t.get(e, n, r), has: (e, n) => !!Me(e, n) || t.has(e, n) }));
var ne = class {
    constructor(e) { this.container = e; }
    getPlatformInfoString() { return this.container.getProviders().map(n => { if (Et(n)) {
        let r = n.getImmediate();
        return `${r.library}/${r.version}`;
    }
    else
        return null; }).filter(n => n).join(" "); }
};
function Et(t) { let e = t.getComponent(); return e?.type === "VERSION"; }
var H = "@firebase/app", re = "0.13.2";
var b = new k("@firebase/app"), wt = "@firebase/app-compat", Ct = "@firebase/analytics-compat", Dt = "@firebase/analytics", St = "@firebase/app-check-compat", It = "@firebase/app-check", At = "@firebase/auth", Ot = "@firebase/auth-compat", xt = "@firebase/database", Bt = "@firebase/data-connect", Tt = "@firebase/database-compat", Mt = "@firebase/functions", Nt = "@firebase/functions-compat", Rt = "@firebase/installations", Lt = "@firebase/installations-compat", kt = "@firebase/messaging", Pt = "@firebase/messaging-compat", $t = "@firebase/performance", Ht = "@firebase/performance-compat", Ft = "@firebase/remote-config", jt = "@firebase/remote-config-compat", zt = "@firebase/storage", Ut = "@firebase/storage-compat", Vt = "@firebase/firestore", Wt = "@firebase/ai", Gt = "@firebase/firestore-compat", Jt = "firebase", Kt = "11.10.0";
var F = "[DEFAULT]", Zt = { [H]: "fire-core", [wt]: "fire-core-compat", [Dt]: "fire-analytics", [Ct]: "fire-analytics-compat", [It]: "fire-app-check", [St]: "fire-app-check-compat", [At]: "fire-auth", [Ot]: "fire-auth-compat", [xt]: "fire-rtdb", [Bt]: "fire-data-connect", [Tt]: "fire-rtdb-compat", [Mt]: "fire-fn", [Nt]: "fire-fn-compat", [Rt]: "fire-iid", [Lt]: "fire-iid-compat", [kt]: "fire-fcm", [Pt]: "fire-fcm-compat", [$t]: "fire-perf", [Ht]: "fire-perf-compat", [Ft]: "fire-rc", [jt]: "fire-rc-compat", [zt]: "fire-gcs", [Ut]: "fire-gcs-compat", [Vt]: "fire-fst", [Gt]: "fire-fst-compat", [Wt]: "fire-vertex", "fire-js": "fire-js", [Jt]: "fire-js-all" };
var E = new Map, x = new Map, B = new Map;
function Re(t, e) { try {
    t.container.addComponent(e);
}
catch (n) {
    b.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
} }
function Jn(t, e) { t.container.addOrOverwriteComponent(e); }
function ie(t) { let e = t.name; if (B.has(e))
    return b.debug(`There were multiple attempts to register component ${e}.`), !1; B.set(e, t); for (let n of E.values())
    Re(n, t); for (let n of x.values())
    Re(n, t); return !0; }
function Yt(t, e) { let n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 }); return n && n.triggerHeartbeat(), t.container.getProvider(e); }
function Kn(t, e, n = F) { Yt(t, e).clearInstance(n); }
function qt(t) { return t.options !== void 0; }
function Zn(t) { return t == null ? !1 : t.settings !== void 0; }
function Yn() { B.clear(); }
var Xt = { "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first", "bad-app-name": "Illegal App name: '{$appName}'", "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config", "app-deleted": "Firebase App named '{$appName}' already deleted", "server-app-deleted": "Firebase Server App has been deleted", "no-options": "Need to provide options, when not being deployed to hosting via source.", "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.", "invalid-log-argument": "First argument to `onLog` must be null or a function.", "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.", "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.", "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments." }, h = new A("app", "Firebase", Xt);
var j = class {
    constructor(e, n, r) { this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new v("app", () => this, "PUBLIC")); }
    get automaticDataCollectionEnabled() { return this.checkDestroyed(), this._automaticDataCollectionEnabled; }
    set automaticDataCollectionEnabled(e) { this.checkDestroyed(), this._automaticDataCollectionEnabled = e; }
    get name() { return this.checkDestroyed(), this._name; }
    get options() { return this.checkDestroyed(), this._options; }
    get config() { return this.checkDestroyed(), this._config; }
    get container() { return this._container; }
    get isDeleted() { return this._isDeleted; }
    set isDeleted(e) { this._isDeleted = e; }
    checkDestroyed() { if (this.isDeleted)
        throw h.create("app-deleted", { appName: this._name }); }
};
function Le(t, e) { let n = I(t.split(".")[1]); if (n === null) {
    console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);
    return;
} if (JSON.parse(n).exp === void 0) {
    console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);
    return;
} let i = JSON.parse(n).exp * 1e3, s = new Date().getTime(); i - s <= 0 && console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`); }
var se = class extends j {
    constructor(e, n, r, i) { let s = n.automaticDataCollectionEnabled !== void 0 ? n.automaticDataCollectionEnabled : !0, o = { name: r, automaticDataCollectionEnabled: s }; if (e.apiKey !== void 0)
        super(e, o, i);
    else {
        let l = e;
        super(l.options, o, i);
    } this._serverConfig = Object.assign({ automaticDataCollectionEnabled: s }, n), this._serverConfig.authIdToken && Le(this._serverConfig.authIdToken, "authIdToken"), this._serverConfig.appCheckToken && Le(this._serverConfig.appCheckToken, "appCheckToken"), this._finalizationRegistry = null, typeof FinalizationRegistry < "u" && (this._finalizationRegistry = new FinalizationRegistry(() => { this.automaticCleanup(); })), this._refCount = 0, this.incRefCount(this._serverConfig.releaseOnDeref), this._serverConfig.releaseOnDeref = void 0, n.releaseOnDeref = void 0, $(H, re, "serverapp"); }
    toJSON() { }
    get refCount() { return this._refCount; }
    incRefCount(e) { this.isDeleted || (this._refCount++, e !== void 0 && this._finalizationRegistry !== null && this._finalizationRegistry.register(e, this)); }
    decRefCount() { return this.isDeleted ? 0 : --this._refCount; }
    automaticCleanup() { en(this); }
    get settings() { return this.checkDestroyed(), this._serverConfig; }
    checkDestroyed() { if (this.isDeleted)
        throw h.create("server-app-deleted"); }
};
var qn = Kt;
function Qt(t, e = {}) { let n = t; typeof e != "object" && (e = { name: e }); let r = Object.assign({ name: F, automaticDataCollectionEnabled: !0 }, e), i = r.name; if (typeof i != "string" || !i)
    throw h.create("bad-app-name", { appName: String(i) }); if (n || (n = G()), !n)
    throw h.create("no-options"); let s = E.get(i); if (s) {
    if (L(n, s.options) && L(r, s.config))
        return s;
    throw h.create("duplicate-app", { appName: i });
} let o = new O(i); for (let c of B.values())
    o.addComponent(c); let l = new j(n, r, o); return E.set(i, l), l; }
function Xn(t, e) { if (Ee() && !J())
    throw h.create("invalid-server-app-environment"); e.automaticDataCollectionEnabled === void 0 && (e.automaticDataCollectionEnabled = !0); let n; qt(t) ? n = t.options : n = t; let r = Object.assign(Object.assign({}, e), n); r.releaseOnDeref !== void 0 && delete r.releaseOnDeref; let i = d => [...d].reduce((w, m) => Math.imul(31, w) + m.charCodeAt(0) | 0, 0); if (e.releaseOnDeref !== void 0 && typeof FinalizationRegistry > "u")
    throw h.create("finalization-registry-not-supported", {}); let s = "" + i(JSON.stringify(r)), o = x.get(s); if (o)
    return o.incRefCount(e.releaseOnDeref), o; let l = new O(s); for (let d of B.values())
    l.addComponent(d); let c = new se(n, e, s, l); return x.set(s, c), c; }
function Qn(t = F) { let e = E.get(t); if (!e && t === F && G())
    return Qt(); if (!e)
    throw h.create("no-app", { appName: t }); return e; }
function er() { return Array.from(E.values()); }
function en(t) { return u(this, null, function* () { let e = !1, n = t.name; E.has(n) ? (e = !0, E.delete(n)) : x.has(n) && t.decRefCount() <= 0 && (x.delete(n), e = !0), e && (yield Promise.all(t.container.getProviders().map(r => r.delete())), t.isDeleted = !0); }); }
function $(t, e, n) { var r; let i = (r = Zt[t]) !== null && r !== void 0 ? r : t; n && (i += `-${n}`); let s = i.match(/\s|\//), o = e.match(/\s|\//); if (s || o) {
    let l = [`Unable to register library "${i}" with version "${e}":`];
    s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && l.push("and"), o && l.push(`version name "${e}" contains illegal characters (whitespace or "/")`), b.warn(l.join(" "));
    return;
} ie(new v(`${i}-version`, () => ({ library: i, version: e }), "VERSION")); }
function tr(t, e) { if (t !== null && typeof t != "function")
    throw h.create("invalid-log-argument"); Ie(t, e); }
function nr(t) { Se(t); }
var tn = "firebase-heartbeat-database", nn = 1, T = "firebase-heartbeat-store", te = null;
function He() { return te || (te = Ne(tn, nn, { upgrade: (t, e) => { switch (e) {
        case 0: try {
            t.createObjectStore(T);
        }
        catch (n) {
            console.warn(n);
        }
    } } }).catch(t => { throw h.create("idb-open", { originalErrorMessage: t.message }); })), te; }
function rn(t) { return u(this, null, function* () { try {
    let n = (yield He()).transaction(T), r = yield n.objectStore(T).get(Fe(t));
    return yield n.done, r;
}
catch (e) {
    if (e instanceof _)
        b.warn(e.message);
    else {
        let n = h.create("idb-get", { originalErrorMessage: e?.message });
        b.warn(n.message);
    }
} }); }
function ke(t, e) { return u(this, null, function* () { try {
    let r = (yield He()).transaction(T, "readwrite");
    yield r.objectStore(T).put(e, Fe(t)), yield r.done;
}
catch (n) {
    if (n instanceof _)
        b.warn(n.message);
    else {
        let r = h.create("idb-set", { originalErrorMessage: n?.message });
        b.warn(r.message);
    }
} }); }
function Fe(t) { return `${t.name}!${t.options.appId}`; }
var sn = 1024, on = 30, oe = class {
    constructor(e) { this.container = e, this._heartbeatsCache = null; let n = this.container.getProvider("app").getImmediate(); this._storage = new ae(n), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r)); }
    triggerHeartbeat() { return u(this, null, function* () { var e, n; try {
        let i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = Pe();
        if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = yield this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s))
            return;
        if (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }), this._heartbeatsCache.heartbeats.length > on) {
            let o = cn(this._heartbeatsCache.heartbeats);
            this._heartbeatsCache.heartbeats.splice(o, 1);
        }
        return this._storage.overwrite(this._heartbeatsCache);
    }
    catch (r) {
        b.warn(r);
    } }); }
    getHeartbeatsHeader() { return u(this, null, function* () { var e; try {
        if (this._heartbeatsCache === null && (yield this._heartbeatsCachePromise), ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
            return "";
        let n = Pe(), { heartbeatsToSend: r, unsentEntries: i } = an(this._heartbeatsCache.heartbeats), s = S(JSON.stringify({ version: 2, heartbeats: r }));
        return this._heartbeatsCache.lastSentHeartbeatDate = n, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
    }
    catch (n) {
        return b.warn(n), "";
    } }); }
};
function Pe() { return new Date().toISOString().substring(0, 10); }
function an(t, e = sn) { let n = [], r = t.slice(); for (let i of t) {
    let s = n.find(o => o.agent === i.agent);
    if (s) {
        if (s.dates.push(i.date), $e(n) > e) {
            s.dates.pop();
            break;
        }
    }
    else if (n.push({ agent: i.agent, dates: [i.date] }), $e(n) > e) {
        n.pop();
        break;
    }
    r = r.slice(1);
} return { heartbeatsToSend: n, unsentEntries: r }; }
var ae = class {
    constructor(e) { this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck(); }
    runIndexedDBEnvironmentCheck() { return u(this, null, function* () { return we() ? Ce().then(() => !0).catch(() => !1) : !1; }); }
    read() { return u(this, null, function* () { if (yield this._canUseIndexedDBPromise) {
        let n = yield rn(this.app);
        return n?.heartbeats ? n : { heartbeats: [] };
    }
    else
        return { heartbeats: [] }; }); }
    overwrite(e) { return u(this, null, function* () { var n; if (yield this._canUseIndexedDBPromise) {
        let i = yield this.read();
        return ke(this.app, { lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: e.heartbeats });
    }
    else
        return; }); }
    add(e) { return u(this, null, function* () { var n; if (yield this._canUseIndexedDBPromise) {
        let i = yield this.read();
        return ke(this.app, { lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: [...i.heartbeats, ...e.heartbeats] });
    }
    else
        return; }); }
};
function $e(t) { return S(JSON.stringify({ version: 2, heartbeats: t })).length; }
function cn(t) { if (t.length === 0)
    return -1; let e = 0, n = t[0].date; for (let r = 1; r < t.length; r++)
    t[r].date < n && (n = t[r].date, e = r); return e; }
function ln(t) { ie(new v("platform-logger", e => new ne(e), "PRIVATE")), ie(new v("heartbeat", e => new oe(e), "PRIVATE")), $(H, re, t), $(H, re, "esm2017"), $("fire-js", ""); }
ln("");
export { _e as a, I as b, Ve as c, Ke as d, un as e, hn as f, N as g, Ze as h, pn as i, mn as j, gn as k, ye as l, bn as m, _n as n, yn as o, vn as p, En as q, wn as r, Cn as s, we as t, _ as u, A as v, Dn as w, Sn as x, L as y, In as z, An as A, On as B, xn as C, Bn as D, Tn as E, v as F, f as G, k as H, F as I, E as J, x as K, B as L, Re as M, Jn as N, ie as O, Yt as P, Kn as Q, qt as R, Zn as S, Yn as T, qn as U, Qt as V, Xn as W, Qn as X, er as Y, en as Z, $ as _, tr as $, nr as aa };
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/util/dist/index.esm2017.js:
@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   * Copyright 2017 Google LLC
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
   * Copyright 2025 Google LLC
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

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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

@firebase/util/dist/index.esm2017.js:
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

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
