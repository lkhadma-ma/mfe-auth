import { a as de, b as ue, e as u } from "@nf-internal/chunk-ACKELEN3";
var he = () => { };
var be = function (t) { let e = [], n = 0; for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
} return e; }, je = function (t) { let e = [], n = 0, r = 0; for (; n < t.length;) {
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
    } return r.join(""); }, encodeString(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(be(t), e); }, decodeString(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : je(this.decodeStringToByteArray(t, e)); }, decodeStringToByteArray(t, e) { this.init_(); let n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = []; for (let i = 0; i < t.length;) {
        let s = n[t.charAt(i++)], l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        let d = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        let m = i < t.length ? n[t.charAt(i)] : 64;
        if (++i, s == null || l == null || d == null || m == null)
            throw new z;
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
    } } }, z = class extends Error {
    constructor() { super(...arguments), this.name = "DecodeBase64StringError"; }
}, ze = function (t) { let e = be(t); return _e.encodeByteArray(e, !0); }, V = function (t) { return ze(t).replace(/\./g, ""); }, S = function (t) { try {
    return _e.decodeString(t, !0);
}
catch (e) {
    console.error("base64Decode failed: ", e);
} return null; };
function Ue() { if (typeof self < "u")
    return self; if (typeof window < "u")
    return window; if (typeof global < "u")
    return global; throw new Error("Unable to locate global object."); }
var Ve = () => Ue().__FIREBASE_DEFAULTS__, We = () => { if (typeof process > "u" || typeof process.env > "u")
    return; let t = process.env.__FIREBASE_DEFAULTS__; if (t)
    return JSON.parse(t); }, Ge = () => { if (typeof document > "u")
    return; let t; try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
}
catch {
    return;
} let e = t && S(t[1]); return e && JSON.parse(e); }, W = () => { try {
    return he() || Ve() || We() || Ge();
}
catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
} }, fn = t => { var e, n; return (n = (e = W()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]; };
var G = () => { var t; return (t = W()) === null || t === void 0 ? void 0 : t.config; }, dn = t => { var e; return (e = W()) === null || e === void 0 ? void 0 : e[`_${t}`]; };
var M = class {
    constructor() { this.reject = () => { }, this.resolve = () => { }, this.promise = new Promise((e, n) => { this.resolve = e, this.reject = n; }); }
    wrapCallback(e) { return (n, r) => { n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => { }), e.length === 1 ? e(n) : e(n, r)); }; }
};
function Je(t) { try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
}
catch {
    return !1;
} }
function un(t) { return u(this, null, function* () { return (yield fetch(t, { credentials: "include" })).ok; }); }
var D = {};
function Ke() { let t = { prod: [], emulator: [] }; for (let e of Object.keys(D))
    D[e] ? t.emulator.push(e) : t.prod.push(e); return t; }
function Ze(t) { let e = document.getElementById(t), n = !1; return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e }; }
var pe = !1;
function hn(t, e) {
    if (typeof window > "u" || typeof document > "u" || !Je(window.location.host) || D[t] === e || D[t] || pe)
        return;
    D[t] = e;
    function n(a) { return `__firebase__banner__${a}`; }
    let r = "__firebase__banner", s = Ke().prod.length > 0;
    function o() { let a = document.getElementById(r); a && a.remove(); }
    function l(a) { a.style.display = "flex", a.style.background = "#7faaf0", a.style.position = "fixed", a.style.bottom = "5px", a.style.left = "5px", a.style.padding = ".5em", a.style.borderRadius = "5px", a.style.alignItems = "center"; }
    function c(a, p) { a.setAttribute("width", "24"), a.setAttribute("id", p), a.setAttribute("height", "24"), a.setAttribute("viewBox", "0 0 24 24"), a.setAttribute("fill", "none"), a.style.marginLeft = "-6px"; }
    function d() { let a = document.createElement("span"); return a.style.cursor = "pointer", a.style.marginLeft = "16px", a.style.fontSize = "24px", a.innerHTML = " &times;", a.onclick = () => { pe = !0, o(); }, a; }
    function w(a, p) { a.setAttribute("id", p), a.innerText = "Learn more", a.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", a.setAttribute("target", "__blank"), a.style.paddingLeft = "5px", a.style.textDecoration = "underline"; }
    function m() {
        let a = Ze(r), p = n("text"), C = document.getElementById(p) || document.createElement("span"), ce = n("learnmore"), le = document.getElementById(ce) || document.createElement("a"), fe = n("preprendIcon"), T = document.getElementById(fe) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (a.created) {
            let F = a.element;
            l(F), w(le, ce);
            let Fe = d();
            c(T, fe), F.append(T, C, le, Fe), document.body.appendChild(F);
        }
        s ? (C.innerText = "Preview backend disconnected.", T.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (T.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
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
function pn() { return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye()); }
function ve() { return typeof window < "u" || J(); }
function J() { return typeof WorkerGlobalScope < "u" && typeof self < "u" && self instanceof WorkerGlobalScope; }
function mn() { return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"; }
function gn() { let t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0; return typeof t == "object" && t.id !== void 0; }
function bn() { return typeof navigator == "object" && navigator.product === "ReactNative"; }
function _n() { let t = ye(); return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0; }
function Ee() { try {
    return typeof indexedDB == "object";
}
catch {
    return !1;
} }
function we() { return new Promise((t, e) => { try {
    let n = !0, r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
    i.onsuccess = () => { i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0); }, i.onupgradeneeded = () => { n = !1; }, i.onerror = () => { var s; e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""); };
}
catch (n) {
    e(n);
} }); }
var Ye = "FirebaseError", _ = class t extends Error {
    constructor(e, n, r) { super(n), this.code = e, this.customData = r, this.name = Ye, Object.setPrototypeOf(this, t.prototype), Error.captureStackTrace && Error.captureStackTrace(this, I.prototype.create); }
}, I = class {
    constructor(e, n, r) { this.service = e, this.serviceName = n, this.errors = r; }
    create(e, ...n) { let r = n[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? qe(s, r) : "Error", l = `${this.serviceName}: ${o} (${i}).`; return new _(i, l, r); }
};
function qe(t, e) { return t.replace(Xe, (n, r) => { let i = e[r]; return i != null ? String(i) : `<${r}?>`; }); }
var Xe = /\{\$([^}]+)}/g;
function me(t) { return JSON.parse(t); }
var Qe = function (t) { let e = {}, n = {}, r = {}, i = ""; try {
    let s = t.split(".");
    e = me(S(s[0]) || ""), n = me(S(s[1]) || ""), i = s[2], r = n.d || {}, delete n.d;
}
catch { } return { header: e, claims: n, data: r, signature: i }; };
var yn = function (t) { let e = Qe(t).claims; return typeof e == "object" && e.hasOwnProperty("iat") ? e.iat : null; };
function vn(t) { for (let e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
        return !1; return !0; }
function N(t, e) { if (t === e)
    return !0; let n = Object.keys(t), r = Object.keys(e); for (let i of n) {
    if (!r.includes(i))
        return !1;
    let s = t[i], o = e[i];
    if (ge(s) && ge(o)) {
        if (!N(s, o))
            return !1;
    }
    else if (s !== o)
        return !1;
} for (let i of r)
    if (!n.includes(i))
        return !1; return !0; }
function ge(t) { return t !== null && typeof t == "object"; }
function En(t) { let e = []; for (let [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach(i => { e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i)); }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r)); return e.length ? "&" + e.join("&") : ""; }
function wn(t) { let e = {}; return t.replace(/^\?/, "").split("&").forEach(r => { if (r) {
    let [i, s] = r.split("=");
    e[decodeURIComponent(i)] = decodeURIComponent(s);
} }), e; }
function Cn(t) { let e = t.indexOf("?"); if (!e)
    return ""; let n = t.indexOf("#", e); return t.substring(e, n > 0 ? n : void 0); }
function Dn(t, e) { let n = new U(t, e); return n.subscribe.bind(n); }
var U = class {
    constructor(e, n) { this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => { e(this); }).catch(r => { this.error(r); }); }
    next(e) { this.forEachObserver(n => { n.next(e); }); }
    error(e) { this.forEachObserver(n => { n.error(e); }), this.close(e); }
    complete() { this.forEachObserver(e => { e.complete(); }), this.close(); }
    subscribe(e, n, r) { let i; if (e === void 0 && n === void 0 && r === void 0)
        throw new Error("Missing Observer."); et(e, ["next", "error", "complete"]) ? i = e : i = { next: e, error: n, complete: r }, i.next === void 0 && (i.next = j), i.error === void 0 && (i.error = j), i.complete === void 0 && (i.complete = j); let s = this.unsubscribeOne.bind(this, this.observers.length); return this.finalized && this.task.then(() => { try {
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
function et(t, e) { if (typeof t != "object" || t === null)
    return !1; for (let n of e)
    if (n in t && typeof t[n] == "function")
        return !0; return !1; }
function j() { }
var tt = 1e3, nt = 2, rt = 14400 * 1e3, it = .5;
function Sn(t, e = tt, n = nt) { let r = e * Math.pow(n, t), i = Math.round(it * r * (Math.random() - .5) * 2); return Math.min(rt, r + i); }
function In(t) { return t && t._delegate ? t._delegate : t; }
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
        let r = new M;
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
        if (ot(e))
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
    getOrInitializeService({ instanceIdentifier: e, options: n = {} }) { let r = this.instances.get(e); if (!r && this.component && (r = this.component.instanceFactory(this.container, { instanceIdentifier: st(e), options: n }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
        try {
            this.component.onInstanceCreated(this.container, e, r);
        }
        catch { } return r || null; }
    normalizeInstanceIdentifier(e = y) { return this.component ? this.component.multipleInstances ? e : y : e; }
    shouldAutoInitialize() { return !!this.component && this.component.instantiationMode !== "EXPLICIT"; }
};
function st(t) { return t === y ? void 0 : t; }
function ot(t) { return t.instantiationMode === "EAGER"; }
var A = class {
    constructor(e) { this.name = e, this.providers = new Map; }
    addComponent(e) { let n = this.getProvider(e.name); if (n.isComponentSet())
        throw new Error(`Component ${e.name} has already been registered with ${this.name}`); n.setComponent(e); }
    addOrOverwriteComponent(e) { this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e); }
    getProvider(e) { if (this.providers.has(e))
        return this.providers.get(e); let n = new K(e, this); return this.providers.set(e, n), n; }
    getProviders() { return Array.from(this.providers.values()); }
};
var Z = [], f = (function (t) { return t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT", t; })(f || {}), Ce = { debug: f.DEBUG, verbose: f.VERBOSE, info: f.INFO, warn: f.WARN, error: f.ERROR, silent: f.SILENT }, at = f.INFO, ct = { [f.DEBUG]: "log", [f.VERBOSE]: "log", [f.INFO]: "info", [f.WARN]: "warn", [f.ERROR]: "error" }, lt = (t, e, ...n) => { if (e < t.logLevel)
    return; let r = new Date().toISOString(), i = ct[e]; if (i)
    console[i](`[${r}]  ${t.name}:`, ...n);
else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`); }, R = class {
    constructor(e) { this.name = e, this._logLevel = at, this._logHandler = lt, this._userLogHandler = null, Z.push(this); }
    get logLevel() { return this._logLevel; }
    set logLevel(e) { if (!(e in f))
        throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``); this._logLevel = e; }
    setLogLevel(e) { this._logLevel = typeof e == "string" ? Ce[e] : e; }
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
function De(t) { Z.forEach(e => { e.setLogLevel(t); }); }
function Se(t, e) { for (let n of Z) {
    let r = null;
    e && e.level && (r = Ce[e.level]), t === null ? n.userLogHandler = null : n.userLogHandler = (i, s, ...o) => { let l = o.map(c => { if (c == null)
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
var ft = (t, e) => e.some(n => t instanceof n), Ie, Ae;
function dt() { return Ie || (Ie = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]); }
function ut() { return Ae || (Ae = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]); }
var Oe = new WeakMap, q = new WeakMap, xe = new WeakMap, Y = new WeakMap, Q = new WeakMap;
function ht(t) { let e = new Promise((n, r) => { let i = () => { t.removeEventListener("success", s), t.removeEventListener("error", o); }, s = () => { n(g(t.result)), i(); }, o = () => { r(t.error), i(); }; t.addEventListener("success", s), t.addEventListener("error", o); }); return e.then(n => { n instanceof IDBCursor && Oe.set(n, t); }).catch(() => { }), Q.set(e, t), e; }
function pt(t) { if (q.has(t))
    return; let e = new Promise((n, r) => { let i = () => { t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o); }, s = () => { n(), i(); }, o = () => { r(t.error || new DOMException("AbortError", "AbortError")), i(); }; t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o); }); q.set(t, e); }
var X = { get(t, e, n) { if (t instanceof IDBTransaction) {
        if (e === "done")
            return q.get(t);
        if (e === "objectStoreNames")
            return t.objectStoreNames || xe.get(t);
        if (e === "store")
            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    } return g(t[e]); }, set(t, e, n) { return t[e] = n, !0; }, has(t, e) { return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t; } };
function Be(t) { X = t(X); }
function mt(t) { return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (e, ...n) { let r = t.call(L(this), e, ...n); return xe.set(r, e.sort ? e.sort() : [e]), g(r); } : ut().includes(t) ? function (...e) { return t.apply(L(this), e), g(Oe.get(this)); } : function (...e) { return g(t.apply(L(this), e)); }; }
function gt(t) { return typeof t == "function" ? mt(t) : (t instanceof IDBTransaction && pt(t), ft(t, dt()) ? new Proxy(t, X) : t); }
function g(t) { if (t instanceof IDBRequest)
    return ht(t); if (Y.has(t))
    return Y.get(t); let e = gt(t); return e !== t && (Y.set(t, e), Q.set(e, t)), e; }
var L = t => Q.get(t);
function Me(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) { let o = indexedDB.open(t, e), l = g(o); return r && o.addEventListener("upgradeneeded", c => { r(g(o.result), c.oldVersion, c.newVersion, g(o.transaction), c); }), n && o.addEventListener("blocked", c => n(c.oldVersion, c.newVersion, c)), l.then(c => { s && c.addEventListener("close", () => s()), i && c.addEventListener("versionchange", d => i(d.oldVersion, d.newVersion, d)); }).catch(() => { }), l; }
var bt = ["get", "getKey", "getAll", "getAllKeys", "count"], _t = ["put", "add", "delete", "clear"], ee = new Map;
function Te(t, e) { if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return; if (ee.get(e))
    return ee.get(e); let n = e.replace(/FromIndex$/, ""), r = e !== n, i = _t.includes(n); if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || bt.includes(n)))
    return; let s = function (o, ...l) { return u(this, null, function* () { let c = this.transaction(o, i ? "readwrite" : "readonly"), d = c.store; return r && (d = d.index(l.shift())), (yield Promise.all([d[n](...l), i && c.done]))[0]; }); }; return ee.set(e, s), s; }
Be(t => ue(de({}, t), { get: (e, n, r) => Te(e, n) || t.get(e, n, r), has: (e, n) => !!Te(e, n) || t.has(e, n) }));
var ne = class {
    constructor(e) { this.container = e; }
    getPlatformInfoString() { return this.container.getProviders().map(n => { if (yt(n)) {
        let r = n.getImmediate();
        return `${r.library}/${r.version}`;
    }
    else
        return null; }).filter(n => n).join(" "); }
};
function yt(t) { let e = t.getComponent(); return e?.type === "VERSION"; }
var P = "@firebase/app", re = "0.13.2";
var b = new R("@firebase/app"), vt = "@firebase/app-compat", Et = "@firebase/analytics-compat", wt = "@firebase/analytics", Ct = "@firebase/app-check-compat", Dt = "@firebase/app-check", St = "@firebase/auth", It = "@firebase/auth-compat", At = "@firebase/database", Ot = "@firebase/data-connect", xt = "@firebase/database-compat", Bt = "@firebase/functions", Tt = "@firebase/functions-compat", Mt = "@firebase/installations", Nt = "@firebase/installations-compat", Rt = "@firebase/messaging", Lt = "@firebase/messaging-compat", kt = "@firebase/performance", Pt = "@firebase/performance-compat", $t = "@firebase/remote-config", Ht = "@firebase/remote-config-compat", Ft = "@firebase/storage", jt = "@firebase/storage-compat", zt = "@firebase/firestore", Ut = "@firebase/ai", Vt = "@firebase/firestore-compat", Wt = "firebase", Gt = "11.10.0";
var $ = "[DEFAULT]", Jt = { [P]: "fire-core", [vt]: "fire-core-compat", [wt]: "fire-analytics", [Et]: "fire-analytics-compat", [Dt]: "fire-app-check", [Ct]: "fire-app-check-compat", [St]: "fire-auth", [It]: "fire-auth-compat", [At]: "fire-rtdb", [Ot]: "fire-data-connect", [xt]: "fire-rtdb-compat", [Bt]: "fire-fn", [Tt]: "fire-fn-compat", [Mt]: "fire-iid", [Nt]: "fire-iid-compat", [Rt]: "fire-fcm", [Lt]: "fire-fcm-compat", [kt]: "fire-perf", [Pt]: "fire-perf-compat", [$t]: "fire-rc", [Ht]: "fire-rc-compat", [Ft]: "fire-gcs", [jt]: "fire-gcs-compat", [zt]: "fire-fst", [Vt]: "fire-fst-compat", [Ut]: "fire-vertex", "fire-js": "fire-js", [Wt]: "fire-js-all" };
var E = new Map, O = new Map, x = new Map;
function Ne(t, e) { try {
    t.container.addComponent(e);
}
catch (n) {
    b.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
} }
function zn(t, e) { t.container.addOrOverwriteComponent(e); }
function ie(t) { let e = t.name; if (x.has(e))
    return b.debug(`There were multiple attempts to register component ${e}.`), !1; x.set(e, t); for (let n of E.values())
    Ne(n, t); for (let n of O.values())
    Ne(n, t); return !0; }
function Kt(t, e) { let n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 }); return n && n.triggerHeartbeat(), t.container.getProvider(e); }
function Un(t, e, n = $) { Kt(t, e).clearInstance(n); }
function Zt(t) { return t.options !== void 0; }
function Vn(t) { return t == null ? !1 : t.settings !== void 0; }
function Wn() { x.clear(); }
var Yt = { "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first", "bad-app-name": "Illegal App name: '{$appName}'", "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config", "app-deleted": "Firebase App named '{$appName}' already deleted", "server-app-deleted": "Firebase Server App has been deleted", "no-options": "Need to provide options, when not being deployed to hosting via source.", "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.", "invalid-log-argument": "First argument to `onLog` must be null or a function.", "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.", "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.", "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments." }, h = new I("app", "Firebase", Yt);
var H = class {
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
function Re(t, e) { let n = S(t.split(".")[1]); if (n === null) {
    console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);
    return;
} if (JSON.parse(n).exp === void 0) {
    console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);
    return;
} let i = JSON.parse(n).exp * 1e3, s = new Date().getTime(); i - s <= 0 && console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`); }
var se = class extends H {
    constructor(e, n, r, i) { let s = n.automaticDataCollectionEnabled !== void 0 ? n.automaticDataCollectionEnabled : !0, o = { name: r, automaticDataCollectionEnabled: s }; if (e.apiKey !== void 0)
        super(e, o, i);
    else {
        let l = e;
        super(l.options, o, i);
    } this._serverConfig = Object.assign({ automaticDataCollectionEnabled: s }, n), this._serverConfig.authIdToken && Re(this._serverConfig.authIdToken, "authIdToken"), this._serverConfig.appCheckToken && Re(this._serverConfig.appCheckToken, "appCheckToken"), this._finalizationRegistry = null, typeof FinalizationRegistry < "u" && (this._finalizationRegistry = new FinalizationRegistry(() => { this.automaticCleanup(); })), this._refCount = 0, this.incRefCount(this._serverConfig.releaseOnDeref), this._serverConfig.releaseOnDeref = void 0, n.releaseOnDeref = void 0, k(P, re, "serverapp"); }
    toJSON() { }
    get refCount() { return this._refCount; }
    incRefCount(e) { this.isDeleted || (this._refCount++, e !== void 0 && this._finalizationRegistry !== null && this._finalizationRegistry.register(e, this)); }
    decRefCount() { return this.isDeleted ? 0 : --this._refCount; }
    automaticCleanup() { Xt(this); }
    get settings() { return this.checkDestroyed(), this._serverConfig; }
    checkDestroyed() { if (this.isDeleted)
        throw h.create("server-app-deleted"); }
};
var Gn = Gt;
function qt(t, e = {}) { let n = t; typeof e != "object" && (e = { name: e }); let r = Object.assign({ name: $, automaticDataCollectionEnabled: !0 }, e), i = r.name; if (typeof i != "string" || !i)
    throw h.create("bad-app-name", { appName: String(i) }); if (n || (n = G()), !n)
    throw h.create("no-options"); let s = E.get(i); if (s) {
    if (N(n, s.options) && N(r, s.config))
        return s;
    throw h.create("duplicate-app", { appName: i });
} let o = new A(i); for (let c of x.values())
    o.addComponent(c); let l = new H(n, r, o); return E.set(i, l), l; }
function Jn(t, e) { if (ve() && !J())
    throw h.create("invalid-server-app-environment"); e.automaticDataCollectionEnabled === void 0 && (e.automaticDataCollectionEnabled = !0); let n; Zt(t) ? n = t.options : n = t; let r = Object.assign(Object.assign({}, e), n); r.releaseOnDeref !== void 0 && delete r.releaseOnDeref; let i = d => [...d].reduce((w, m) => Math.imul(31, w) + m.charCodeAt(0) | 0, 0); if (e.releaseOnDeref !== void 0 && typeof FinalizationRegistry > "u")
    throw h.create("finalization-registry-not-supported", {}); let s = "" + i(JSON.stringify(r)), o = O.get(s); if (o)
    return o.incRefCount(e.releaseOnDeref), o; let l = new A(s); for (let d of x.values())
    l.addComponent(d); let c = new se(n, e, s, l); return O.set(s, c), c; }
function Kn(t = $) { let e = E.get(t); if (!e && t === $ && G())
    return qt(); if (!e)
    throw h.create("no-app", { appName: t }); return e; }
function Zn() { return Array.from(E.values()); }
function Xt(t) { return u(this, null, function* () { let e = !1, n = t.name; E.has(n) ? (e = !0, E.delete(n)) : O.has(n) && t.decRefCount() <= 0 && (O.delete(n), e = !0), e && (yield Promise.all(t.container.getProviders().map(r => r.delete())), t.isDeleted = !0); }); }
function k(t, e, n) { var r; let i = (r = Jt[t]) !== null && r !== void 0 ? r : t; n && (i += `-${n}`); let s = i.match(/\s|\//), o = e.match(/\s|\//); if (s || o) {
    let l = [`Unable to register library "${i}" with version "${e}":`];
    s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && l.push("and"), o && l.push(`version name "${e}" contains illegal characters (whitespace or "/")`), b.warn(l.join(" "));
    return;
} ie(new v(`${i}-version`, () => ({ library: i, version: e }), "VERSION")); }
function Yn(t, e) { if (t !== null && typeof t != "function")
    throw h.create("invalid-log-argument"); Se(t, e); }
function qn(t) { De(t); }
var Qt = "firebase-heartbeat-database", en = 1, B = "firebase-heartbeat-store", te = null;
function $e() { return te || (te = Me(Qt, en, { upgrade: (t, e) => { switch (e) {
        case 0: try {
            t.createObjectStore(B);
        }
        catch (n) {
            console.warn(n);
        }
    } } }).catch(t => { throw h.create("idb-open", { originalErrorMessage: t.message }); })), te; }
function tn(t) { return u(this, null, function* () { try {
    let n = (yield $e()).transaction(B), r = yield n.objectStore(B).get(He(t));
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
function Le(t, e) { return u(this, null, function* () { try {
    let r = (yield $e()).transaction(B, "readwrite");
    yield r.objectStore(B).put(e, He(t)), yield r.done;
}
catch (n) {
    if (n instanceof _)
        b.warn(n.message);
    else {
        let r = h.create("idb-set", { originalErrorMessage: n?.message });
        b.warn(r.message);
    }
} }); }
function He(t) { return `${t.name}!${t.options.appId}`; }
var nn = 1024, rn = 30, oe = class {
    constructor(e) { this.container = e, this._heartbeatsCache = null; let n = this.container.getProvider("app").getImmediate(); this._storage = new ae(n), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r)); }
    triggerHeartbeat() { return u(this, null, function* () { var e, n; try {
        let i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = ke();
        if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = yield this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s))
            return;
        if (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }), this._heartbeatsCache.heartbeats.length > rn) {
            let o = on(this._heartbeatsCache.heartbeats);
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
        let n = ke(), { heartbeatsToSend: r, unsentEntries: i } = sn(this._heartbeatsCache.heartbeats), s = V(JSON.stringify({ version: 2, heartbeats: r }));
        return this._heartbeatsCache.lastSentHeartbeatDate = n, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
    }
    catch (n) {
        return b.warn(n), "";
    } }); }
};
function ke() { return new Date().toISOString().substring(0, 10); }
function sn(t, e = nn) { let n = [], r = t.slice(); for (let i of t) {
    let s = n.find(o => o.agent === i.agent);
    if (s) {
        if (s.dates.push(i.date), Pe(n) > e) {
            s.dates.pop();
            break;
        }
    }
    else if (n.push({ agent: i.agent, dates: [i.date] }), Pe(n) > e) {
        n.pop();
        break;
    }
    r = r.slice(1);
} return { heartbeatsToSend: n, unsentEntries: r }; }
var ae = class {
    constructor(e) { this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck(); }
    runIndexedDBEnvironmentCheck() { return u(this, null, function* () { return Ee() ? we().then(() => !0).catch(() => !1) : !1; }); }
    read() { return u(this, null, function* () { if (yield this._canUseIndexedDBPromise) {
        let n = yield tn(this.app);
        return n?.heartbeats ? n : { heartbeats: [] };
    }
    else
        return { heartbeats: [] }; }); }
    overwrite(e) { return u(this, null, function* () { var n; if (yield this._canUseIndexedDBPromise) {
        let i = yield this.read();
        return Le(this.app, { lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: e.heartbeats });
    }
    else
        return; }); }
    add(e) { return u(this, null, function* () { var n; if (yield this._canUseIndexedDBPromise) {
        let i = yield this.read();
        return Le(this.app, { lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: [...i.heartbeats, ...e.heartbeats] });
    }
    else
        return; }); }
};
function Pe(t) { return V(JSON.stringify({ version: 2, heartbeats: t })).length; }
function on(t) { if (t.length === 0)
    return -1; let e = 0, n = t[0].date; for (let r = 1; r < t.length; r++)
    t[r].date < n && (n = t[r].date, e = r); return e; }
function an(t) { ie(new v("platform-logger", e => new ne(e), "PRIVATE")), ie(new v("heartbeat", e => new oe(e), "PRIVATE")), k(P, re, t), k(P, re, "esm2017"), k("fire-js", ""); }
an("");
export { _e as a, S as b, Ue as c, fn as d, dn as e, M as f, Je as g, un as h, hn as i, ye as j, pn as k, mn as l, gn as m, bn as n, _n as o, Ee as p, _ as q, I as r, yn as s, vn as t, N as u, En as v, wn as w, Cn as x, Dn as y, Sn as z, In as A, v as B, f as C, R as D, $ as E, E as F, O as G, x as H, Ne as I, zn as J, ie as K, Kt as L, Un as M, Zt as N, Vn as O, Wn as P, Gn as Q, qt as R, Jn as S, Kn as T, Zn as U, Xt as V, k as W, Yn as X, qn as Y };
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
