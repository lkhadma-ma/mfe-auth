import { E as gt, F as Lh, G as Jt, H as qh, O as Uh, P as ba, Q as Bh, S as jh, U as zh, X as Gh, _ as Sa, c as Dh, e as Nh, h as fs, i as Ia, j as kh, k as Fh, l as Wr, r as Ea, s as Aa, t as Oh, u as Mh, y as Fn } from "@nf-internal/chunk-PCT6XG3Z";
import { d as Ta, e as V } from "@nf-internal/chunk-ACKELEN3";
var Kh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $h = {};
var he, Ra;
(function () { var r; function t(v, y) { function w() { } w.prototype = y.prototype, v.D = y.prototype, v.prototype = new w, v.prototype.constructor = v, v.C = function (T, I, S) { for (var _ = Array(arguments.length - 2), ue = 2; ue < arguments.length; ue++)
    _[ue - 2] = arguments[ue]; return y.prototype[I].apply(T, _); }; } function e() { this.blockSize = -1; } function n() { this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s(); } t(n, e), n.prototype.s = function () { this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0; }; function i(v, y, w) { w || (w = 0); var T = Array(16); if (typeof y == "string")
    for (var I = 0; 16 > I; ++I)
        T[I] = y.charCodeAt(w++) | y.charCodeAt(w++) << 8 | y.charCodeAt(w++) << 16 | y.charCodeAt(w++) << 24;
else
    for (I = 0; 16 > I; ++I)
        T[I] = y[w++] | y[w++] << 8 | y[w++] << 16 | y[w++] << 24; y = v.g[0], w = v.g[1], I = v.g[2]; var S = v.g[3], _ = y + (S ^ w & (I ^ S)) + T[0] + 3614090360 & 4294967295; y = w + (_ << 7 & 4294967295 | _ >>> 25), _ = S + (I ^ y & (w ^ I)) + T[1] + 3905402710 & 4294967295, S = y + (_ << 12 & 4294967295 | _ >>> 20), _ = I + (w ^ S & (y ^ w)) + T[2] + 606105819 & 4294967295, I = S + (_ << 17 & 4294967295 | _ >>> 15), _ = w + (y ^ I & (S ^ y)) + T[3] + 3250441966 & 4294967295, w = I + (_ << 22 & 4294967295 | _ >>> 10), _ = y + (S ^ w & (I ^ S)) + T[4] + 4118548399 & 4294967295, y = w + (_ << 7 & 4294967295 | _ >>> 25), _ = S + (I ^ y & (w ^ I)) + T[5] + 1200080426 & 4294967295, S = y + (_ << 12 & 4294967295 | _ >>> 20), _ = I + (w ^ S & (y ^ w)) + T[6] + 2821735955 & 4294967295, I = S + (_ << 17 & 4294967295 | _ >>> 15), _ = w + (y ^ I & (S ^ y)) + T[7] + 4249261313 & 4294967295, w = I + (_ << 22 & 4294967295 | _ >>> 10), _ = y + (S ^ w & (I ^ S)) + T[8] + 1770035416 & 4294967295, y = w + (_ << 7 & 4294967295 | _ >>> 25), _ = S + (I ^ y & (w ^ I)) + T[9] + 2336552879 & 4294967295, S = y + (_ << 12 & 4294967295 | _ >>> 20), _ = I + (w ^ S & (y ^ w)) + T[10] + 4294925233 & 4294967295, I = S + (_ << 17 & 4294967295 | _ >>> 15), _ = w + (y ^ I & (S ^ y)) + T[11] + 2304563134 & 4294967295, w = I + (_ << 22 & 4294967295 | _ >>> 10), _ = y + (S ^ w & (I ^ S)) + T[12] + 1804603682 & 4294967295, y = w + (_ << 7 & 4294967295 | _ >>> 25), _ = S + (I ^ y & (w ^ I)) + T[13] + 4254626195 & 4294967295, S = y + (_ << 12 & 4294967295 | _ >>> 20), _ = I + (w ^ S & (y ^ w)) + T[14] + 2792965006 & 4294967295, I = S + (_ << 17 & 4294967295 | _ >>> 15), _ = w + (y ^ I & (S ^ y)) + T[15] + 1236535329 & 4294967295, w = I + (_ << 22 & 4294967295 | _ >>> 10), _ = y + (I ^ S & (w ^ I)) + T[1] + 4129170786 & 4294967295, y = w + (_ << 5 & 4294967295 | _ >>> 27), _ = S + (w ^ I & (y ^ w)) + T[6] + 3225465664 & 4294967295, S = y + (_ << 9 & 4294967295 | _ >>> 23), _ = I + (y ^ w & (S ^ y)) + T[11] + 643717713 & 4294967295, I = S + (_ << 14 & 4294967295 | _ >>> 18), _ = w + (S ^ y & (I ^ S)) + T[0] + 3921069994 & 4294967295, w = I + (_ << 20 & 4294967295 | _ >>> 12), _ = y + (I ^ S & (w ^ I)) + T[5] + 3593408605 & 4294967295, y = w + (_ << 5 & 4294967295 | _ >>> 27), _ = S + (w ^ I & (y ^ w)) + T[10] + 38016083 & 4294967295, S = y + (_ << 9 & 4294967295 | _ >>> 23), _ = I + (y ^ w & (S ^ y)) + T[15] + 3634488961 & 4294967295, I = S + (_ << 14 & 4294967295 | _ >>> 18), _ = w + (S ^ y & (I ^ S)) + T[4] + 3889429448 & 4294967295, w = I + (_ << 20 & 4294967295 | _ >>> 12), _ = y + (I ^ S & (w ^ I)) + T[9] + 568446438 & 4294967295, y = w + (_ << 5 & 4294967295 | _ >>> 27), _ = S + (w ^ I & (y ^ w)) + T[14] + 3275163606 & 4294967295, S = y + (_ << 9 & 4294967295 | _ >>> 23), _ = I + (y ^ w & (S ^ y)) + T[3] + 4107603335 & 4294967295, I = S + (_ << 14 & 4294967295 | _ >>> 18), _ = w + (S ^ y & (I ^ S)) + T[8] + 1163531501 & 4294967295, w = I + (_ << 20 & 4294967295 | _ >>> 12), _ = y + (I ^ S & (w ^ I)) + T[13] + 2850285829 & 4294967295, y = w + (_ << 5 & 4294967295 | _ >>> 27), _ = S + (w ^ I & (y ^ w)) + T[2] + 4243563512 & 4294967295, S = y + (_ << 9 & 4294967295 | _ >>> 23), _ = I + (y ^ w & (S ^ y)) + T[7] + 1735328473 & 4294967295, I = S + (_ << 14 & 4294967295 | _ >>> 18), _ = w + (S ^ y & (I ^ S)) + T[12] + 2368359562 & 4294967295, w = I + (_ << 20 & 4294967295 | _ >>> 12), _ = y + (w ^ I ^ S) + T[5] + 4294588738 & 4294967295, y = w + (_ << 4 & 4294967295 | _ >>> 28), _ = S + (y ^ w ^ I) + T[8] + 2272392833 & 4294967295, S = y + (_ << 11 & 4294967295 | _ >>> 21), _ = I + (S ^ y ^ w) + T[11] + 1839030562 & 4294967295, I = S + (_ << 16 & 4294967295 | _ >>> 16), _ = w + (I ^ S ^ y) + T[14] + 4259657740 & 4294967295, w = I + (_ << 23 & 4294967295 | _ >>> 9), _ = y + (w ^ I ^ S) + T[1] + 2763975236 & 4294967295, y = w + (_ << 4 & 4294967295 | _ >>> 28), _ = S + (y ^ w ^ I) + T[4] + 1272893353 & 4294967295, S = y + (_ << 11 & 4294967295 | _ >>> 21), _ = I + (S ^ y ^ w) + T[7] + 4139469664 & 4294967295, I = S + (_ << 16 & 4294967295 | _ >>> 16), _ = w + (I ^ S ^ y) + T[10] + 3200236656 & 4294967295, w = I + (_ << 23 & 4294967295 | _ >>> 9), _ = y + (w ^ I ^ S) + T[13] + 681279174 & 4294967295, y = w + (_ << 4 & 4294967295 | _ >>> 28), _ = S + (y ^ w ^ I) + T[0] + 3936430074 & 4294967295, S = y + (_ << 11 & 4294967295 | _ >>> 21), _ = I + (S ^ y ^ w) + T[3] + 3572445317 & 4294967295, I = S + (_ << 16 & 4294967295 | _ >>> 16), _ = w + (I ^ S ^ y) + T[6] + 76029189 & 4294967295, w = I + (_ << 23 & 4294967295 | _ >>> 9), _ = y + (w ^ I ^ S) + T[9] + 3654602809 & 4294967295, y = w + (_ << 4 & 4294967295 | _ >>> 28), _ = S + (y ^ w ^ I) + T[12] + 3873151461 & 4294967295, S = y + (_ << 11 & 4294967295 | _ >>> 21), _ = I + (S ^ y ^ w) + T[15] + 530742520 & 4294967295, I = S + (_ << 16 & 4294967295 | _ >>> 16), _ = w + (I ^ S ^ y) + T[2] + 3299628645 & 4294967295, w = I + (_ << 23 & 4294967295 | _ >>> 9), _ = y + (I ^ (w | ~S)) + T[0] + 4096336452 & 4294967295, y = w + (_ << 6 & 4294967295 | _ >>> 26), _ = S + (w ^ (y | ~I)) + T[7] + 1126891415 & 4294967295, S = y + (_ << 10 & 4294967295 | _ >>> 22), _ = I + (y ^ (S | ~w)) + T[14] + 2878612391 & 4294967295, I = S + (_ << 15 & 4294967295 | _ >>> 17), _ = w + (S ^ (I | ~y)) + T[5] + 4237533241 & 4294967295, w = I + (_ << 21 & 4294967295 | _ >>> 11), _ = y + (I ^ (w | ~S)) + T[12] + 1700485571 & 4294967295, y = w + (_ << 6 & 4294967295 | _ >>> 26), _ = S + (w ^ (y | ~I)) + T[3] + 2399980690 & 4294967295, S = y + (_ << 10 & 4294967295 | _ >>> 22), _ = I + (y ^ (S | ~w)) + T[10] + 4293915773 & 4294967295, I = S + (_ << 15 & 4294967295 | _ >>> 17), _ = w + (S ^ (I | ~y)) + T[1] + 2240044497 & 4294967295, w = I + (_ << 21 & 4294967295 | _ >>> 11), _ = y + (I ^ (w | ~S)) + T[8] + 1873313359 & 4294967295, y = w + (_ << 6 & 4294967295 | _ >>> 26), _ = S + (w ^ (y | ~I)) + T[15] + 4264355552 & 4294967295, S = y + (_ << 10 & 4294967295 | _ >>> 22), _ = I + (y ^ (S | ~w)) + T[6] + 2734768916 & 4294967295, I = S + (_ << 15 & 4294967295 | _ >>> 17), _ = w + (S ^ (I | ~y)) + T[13] + 1309151649 & 4294967295, w = I + (_ << 21 & 4294967295 | _ >>> 11), _ = y + (I ^ (w | ~S)) + T[4] + 4149444226 & 4294967295, y = w + (_ << 6 & 4294967295 | _ >>> 26), _ = S + (w ^ (y | ~I)) + T[11] + 3174756917 & 4294967295, S = y + (_ << 10 & 4294967295 | _ >>> 22), _ = I + (y ^ (S | ~w)) + T[2] + 718787259 & 4294967295, I = S + (_ << 15 & 4294967295 | _ >>> 17), _ = w + (S ^ (I | ~y)) + T[9] + 3951481745 & 4294967295, v.g[0] = v.g[0] + y & 4294967295, v.g[1] = v.g[1] + (I + (_ << 21 & 4294967295 | _ >>> 11)) & 4294967295, v.g[2] = v.g[2] + I & 4294967295, v.g[3] = v.g[3] + S & 4294967295; } n.prototype.u = function (v, y) { y === void 0 && (y = v.length); for (var w = y - this.blockSize, T = this.B, I = this.h, S = 0; S < y;) {
    if (I == 0)
        for (; S <= w;)
            i(this, v, S), S += this.blockSize;
    if (typeof v == "string") {
        for (; S < y;)
            if (T[I++] = v.charCodeAt(S++), I == this.blockSize) {
                i(this, T), I = 0;
                break;
            }
    }
    else
        for (; S < y;)
            if (T[I++] = v[S++], I == this.blockSize) {
                i(this, T), I = 0;
                break;
            }
} this.h = I, this.o += y; }, n.prototype.v = function () { var v = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h); v[0] = 128; for (var y = 1; y < v.length - 8; ++y)
    v[y] = 0; var w = 8 * this.o; for (y = v.length - 8; y < v.length; ++y)
    v[y] = w & 255, w /= 256; for (this.u(v), v = Array(16), y = w = 0; 4 > y; ++y)
    for (var T = 0; 32 > T; T += 8)
        v[w++] = this.g[y] >>> T & 255; return v; }; function s(v, y) { var w = u; return Object.prototype.hasOwnProperty.call(w, v) ? w[v] : w[v] = y(v); } function a(v, y) { this.h = y; for (var w = [], T = !0, I = v.length - 1; 0 <= I; I--) {
    var S = v[I] | 0;
    T && S == y || (w[I] = S, T = !1);
} this.g = w; } var u = {}; function c(v) { return -128 <= v && 128 > v ? s(v, function (y) { return new a([y | 0], 0 > y ? -1 : 0); }) : new a([v | 0], 0 > v ? -1 : 0); } function h(v) { if (isNaN(v) || !isFinite(v))
    return m; if (0 > v)
    return N(h(-v)); for (var y = [], w = 1, T = 0; v >= w; T++)
    y[T] = v / w | 0, w *= 4294967296; return new a(y, 0); } function f(v, y) { if (v.length == 0)
    throw Error("number format error: empty string"); if (y = y || 10, 2 > y || 36 < y)
    throw Error("radix out of range: " + y); if (v.charAt(0) == "-")
    return N(f(v.substring(1), y)); if (0 <= v.indexOf("-"))
    throw Error('number format error: interior "-" character'); for (var w = h(Math.pow(y, 8)), T = m, I = 0; I < v.length; I += 8) {
    var S = Math.min(8, v.length - I), _ = parseInt(v.substring(I, I + S), y);
    8 > S ? (S = h(Math.pow(y, S)), T = T.j(S).add(h(_))) : (T = T.j(w), T = T.add(h(_)));
} return T; } var m = c(0), p = c(1), A = c(16777216); r = a.prototype, r.m = function () { if (D(this))
    return -N(this).m(); for (var v = 0, y = 1, w = 0; w < this.g.length; w++) {
    var T = this.i(w);
    v += (0 <= T ? T : 4294967296 + T) * y, y *= 4294967296;
} return v; }, r.toString = function (v) { if (v = v || 10, 2 > v || 36 < v)
    throw Error("radix out of range: " + v); if (C(this))
    return "0"; if (D(this))
    return "-" + N(this).toString(v); for (var y = h(Math.pow(v, 6)), w = this, T = "";;) {
    var I = Q(w, y).g;
    w = q(w, I.j(y));
    var S = ((0 < w.g.length ? w.g[0] : w.h) >>> 0).toString(v);
    if (w = I, C(w))
        return S + T;
    for (; 6 > S.length;)
        S = "0" + S;
    T = S + T;
} }, r.i = function (v) { return 0 > v ? 0 : v < this.g.length ? this.g[v] : this.h; }; function C(v) { if (v.h != 0)
    return !1; for (var y = 0; y < v.g.length; y++)
    if (v.g[y] != 0)
        return !1; return !0; } function D(v) { return v.h == -1; } r.l = function (v) { return v = q(this, v), D(v) ? -1 : C(v) ? 0 : 1; }; function N(v) { for (var y = v.g.length, w = [], T = 0; T < y; T++)
    w[T] = ~v.g[T]; return new a(w, ~v.h).add(p); } r.abs = function () { return D(this) ? N(this) : this; }, r.add = function (v) { for (var y = Math.max(this.g.length, v.g.length), w = [], T = 0, I = 0; I <= y; I++) {
    var S = T + (this.i(I) & 65535) + (v.i(I) & 65535), _ = (S >>> 16) + (this.i(I) >>> 16) + (v.i(I) >>> 16);
    T = _ >>> 16, S &= 65535, _ &= 65535, w[I] = _ << 16 | S;
} return new a(w, w[w.length - 1] & -2147483648 ? -1 : 0); }; function q(v, y) { return v.add(N(y)); } r.j = function (v) { if (C(this) || C(v))
    return m; if (D(this))
    return D(v) ? N(this).j(N(v)) : N(N(this).j(v)); if (D(v))
    return N(this.j(N(v))); if (0 > this.l(A) && 0 > v.l(A))
    return h(this.m() * v.m()); for (var y = this.g.length + v.g.length, w = [], T = 0; T < 2 * y; T++)
    w[T] = 0; for (T = 0; T < this.g.length; T++)
    for (var I = 0; I < v.g.length; I++) {
        var S = this.i(T) >>> 16, _ = this.i(T) & 65535, ue = v.i(I) >>> 16, Vr = v.i(I) & 65535;
        w[2 * T + 2 * I] += _ * Vr, j(w, 2 * T + 2 * I), w[2 * T + 2 * I + 1] += S * Vr, j(w, 2 * T + 2 * I + 1), w[2 * T + 2 * I + 1] += _ * ue, j(w, 2 * T + 2 * I + 1), w[2 * T + 2 * I + 2] += S * ue, j(w, 2 * T + 2 * I + 2);
    } for (T = 0; T < y; T++)
    w[T] = w[2 * T + 1] << 16 | w[2 * T]; for (T = y; T < 2 * y; T++)
    w[T] = 0; return new a(w, 0); }; function j(v, y) { for (; (v[y] & 65535) != v[y];)
    v[y + 1] += v[y] >>> 16, v[y] &= 65535, y++; } function B(v, y) { this.g = v, this.h = y; } function Q(v, y) { if (C(y))
    throw Error("division by zero"); if (C(v))
    return new B(m, m); if (D(v))
    return y = Q(N(v), y), new B(N(y.g), N(y.h)); if (D(y))
    return y = Q(v, N(y)), new B(N(y.g), y.h); if (30 < v.g.length) {
    if (D(v) || D(y))
        throw Error("slowDivide_ only works with positive integers.");
    for (var w = p, T = y; 0 >= T.l(v);)
        w = Z(w), T = Z(T);
    var I = $(w, 1), S = $(T, 1);
    for (T = $(T, 2), w = $(w, 2); !C(T);) {
        var _ = S.add(T);
        0 >= _.l(v) && (I = I.add(w), S = _), T = $(T, 1), w = $(w, 1);
    }
    return y = q(v, I.j(y)), new B(I, y);
} for (I = m; 0 <= v.l(y);) {
    for (w = Math.max(1, Math.floor(v.m() / y.m())), T = Math.ceil(Math.log(w) / Math.LN2), T = 48 >= T ? 1 : Math.pow(2, T - 48), S = h(w), _ = S.j(y); D(_) || 0 < _.l(v);)
        w -= T, S = h(w), _ = S.j(y);
    C(S) && (S = p), I = I.add(S), v = q(v, _);
} return new B(I, v); } r.A = function (v) { return Q(this, v).h; }, r.and = function (v) { for (var y = Math.max(this.g.length, v.g.length), w = [], T = 0; T < y; T++)
    w[T] = this.i(T) & v.i(T); return new a(w, this.h & v.h); }, r.or = function (v) { for (var y = Math.max(this.g.length, v.g.length), w = [], T = 0; T < y; T++)
    w[T] = this.i(T) | v.i(T); return new a(w, this.h | v.h); }, r.xor = function (v) { for (var y = Math.max(this.g.length, v.g.length), w = [], T = 0; T < y; T++)
    w[T] = this.i(T) ^ v.i(T); return new a(w, this.h ^ v.h); }; function Z(v) { for (var y = v.g.length + 1, w = [], T = 0; T < y; T++)
    w[T] = v.i(T) << 1 | v.i(T - 1) >>> 31; return new a(w, v.h); } function $(v, y) { var w = y >> 5; y %= 32; for (var T = v.g.length - w, I = [], S = 0; S < T; S++)
    I[S] = 0 < y ? v.i(S + w) >>> y | v.i(S + w + 1) << 32 - y : v.i(S + w); return new a(I, v.h); } n.prototype.digest = n.prototype.v, n.prototype.reset = n.prototype.s, n.prototype.update = n.prototype.u, Ra = $h.Md5 = n, a.prototype.add = a.prototype.add, a.prototype.multiply = a.prototype.j, a.prototype.modulo = a.prototype.A, a.prototype.compare = a.prototype.l, a.prototype.toNumber = a.prototype.m, a.prototype.toString = a.prototype.toString, a.prototype.getBits = a.prototype.i, a.fromNumber = h, a.fromString = f, he = $h.Integer = a; }).apply(typeof Kh < "u" ? Kh : typeof self < "u" ? self : typeof window < "u" ? window : {});
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, de = {};
var Pa, sp, On, Va, Hr, gs, Ca, xa, Da;
(function () {
    var r, t = typeof Object.defineProperties == "function" ? Object.defineProperty : function (o, l, d) { return o == Array.prototype || o == Object.prototype || (o[l] = d.value), o; };
    function e(o) { o = [typeof globalThis == "object" && globalThis, o, typeof window == "object" && window, typeof self == "object" && self, typeof ms == "object" && ms]; for (var l = 0; l < o.length; ++l) {
        var d = o[l];
        if (d && d.Math == Math)
            return d;
    } throw Error("Cannot find global object"); }
    var n = e(this);
    function i(o, l) { if (l)
        t: {
            var d = n;
            o = o.split(".");
            for (var g = 0; g < o.length - 1; g++) {
                var E = o[g];
                if (!(E in d))
                    break t;
                d = d[E];
            }
            o = o[o.length - 1], g = d[o], l = l(g), l != g && l != null && t(d, o, { configurable: !0, writable: !0, value: l });
        } }
    function s(o, l) { o instanceof String && (o += ""); var d = 0, g = !1, E = { next: function () { if (!g && d < o.length) {
            var P = d++;
            return { value: l(P, o[P]), done: !1 };
        } return g = !0, { done: !0, value: void 0 }; } }; return E[Symbol.iterator] = function () { return E; }, E; }
    i("Array.prototype.values", function (o) { return o || function () { return s(this, function (l, d) { return d; }); }; });
    var a = a || {}, u = this || self;
    function c(o) { var l = typeof o; return l = l != "object" ? l : o ? Array.isArray(o) ? "array" : l : "null", l == "array" || l == "object" && typeof o.length == "number"; }
    function h(o) { var l = typeof o; return l == "object" && o != null || l == "function"; }
    function f(o, l, d) { return o.call.apply(o.bind, arguments); }
    function m(o, l, d) { if (!o)
        throw Error(); if (2 < arguments.length) {
        var g = Array.prototype.slice.call(arguments, 2);
        return function () { var E = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(E, g), o.apply(l, E); };
    } return function () { return o.apply(l, arguments); }; }
    function p(o, l, d) { return p = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? f : m, p.apply(null, arguments); }
    function A(o, l) { var d = Array.prototype.slice.call(arguments, 1); return function () { var g = d.slice(); return g.push.apply(g, arguments), o.apply(this, g); }; }
    function C(o, l) { function d() { } d.prototype = l.prototype, o.aa = l.prototype, o.prototype = new d, o.prototype.constructor = o, o.Qb = function (g, E, P) { for (var O = Array(arguments.length - 2), rt = 2; rt < arguments.length; rt++)
        O[rt - 2] = arguments[rt]; return l.prototype[E].apply(g, O); }; }
    function D(o) { let l = o.length; if (0 < l) {
        let d = Array(l);
        for (let g = 0; g < l; g++)
            d[g] = o[g];
        return d;
    } return []; }
    function N(o, l) { for (let d = 1; d < arguments.length; d++) {
        let g = arguments[d];
        if (c(g)) {
            let E = o.length || 0, P = g.length || 0;
            o.length = E + P;
            for (let O = 0; O < P; O++)
                o[E + O] = g[O];
        }
        else
            o.push(g);
    } }
    class q {
        constructor(l, d) { this.i = l, this.j = d, this.h = 0, this.g = null; }
        get() { let l; return 0 < this.h ? (this.h--, l = this.g, this.g = l.next, l.next = null) : l = this.i(), l; }
    }
    function j(o) { return /^[\s\xa0]*$/.test(o); }
    function B() { var o = u.navigator; return o && (o = o.userAgent) ? o : ""; }
    function Q(o) { return Q[" "](o), o; }
    Q[" "] = function () { };
    var Z = B().indexOf("Gecko") != -1 && !(B().toLowerCase().indexOf("webkit") != -1 && B().indexOf("Edge") == -1) && !(B().indexOf("Trident") != -1 || B().indexOf("MSIE") != -1) && B().indexOf("Edge") == -1;
    function $(o, l, d) { for (let g in o)
        l.call(d, o[g], g, o); }
    function v(o, l) { for (let d in o)
        l.call(void 0, o[d], d, o); }
    function y(o) { let l = {}; for (let d in o)
        l[d] = o[d]; return l; }
    let w = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function T(o, l) { let d, g; for (let E = 1; E < arguments.length; E++) {
        g = arguments[E];
        for (d in g)
            o[d] = g[d];
        for (let P = 0; P < w.length; P++)
            d = w[P], Object.prototype.hasOwnProperty.call(g, d) && (o[d] = g[d]);
    } }
    function I(o) { var l = 1; o = o.split(":"); let d = []; for (; 0 < l && o.length;)
        d.push(o.shift()), l--; return o.length && d.push(o.join(":")), d; }
    function S(o) { u.setTimeout(() => { throw o; }, 0); }
    function _() { var o = Xo; let l = null; return o.g && (l = o.g, o.g = o.g.next, o.g || (o.h = null), l.next = null), l; }
    class ue {
        constructor() { this.h = this.g = null; }
        add(l, d) { let g = Vr.get(); g.set(l, d), this.h ? this.h.next = g : this.g = g, this.h = g; }
    }
    var Vr = new q(() => new bg, o => o.reset());
    class bg {
        constructor() { this.next = this.g = this.h = null; }
        set(l, d) { this.h = l, this.g = d, this.next = null; }
        reset() { this.next = this.g = this.h = null; }
    }
    let Cr, xr = !1, Xo = new ue, xl = () => { let o = u.Promise.resolve(void 0); Cr = () => { o.then(Sg); }; };
    var Sg = () => { for (var o; o = _();) {
        try {
            o.h.call(o.g);
        }
        catch (d) {
            S(d);
        }
        var l = Vr;
        l.j(o), 100 > l.h && (l.h++, o.next = l.g, l.g = o);
    } xr = !1; };
    function Ae() { this.s = this.s, this.C = this.C; }
    Ae.prototype.s = !1, Ae.prototype.ma = function () { this.s || (this.s = !0, this.N()); }, Ae.prototype.N = function () { if (this.C)
        for (; this.C.length;)
            this.C.shift()(); };
    function St(o, l) { this.type = o, this.g = this.target = l, this.defaultPrevented = !1; }
    St.prototype.h = function () { this.defaultPrevented = !0; };
    var Rg = (function () { if (!u.addEventListener || !Object.defineProperty)
        return !1; var o = !1, l = Object.defineProperty({}, "passive", { get: function () { o = !0; } }); try {
        let d = () => { };
        u.addEventListener("test", d, l), u.removeEventListener("test", d, l);
    }
    catch { } return o; })();
    function Dr(o, l) { if (St.call(this, o ? o.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, o) {
        var d = this.type = o.type, g = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : null;
        if (this.target = o.target || o.srcElement, this.g = l, l = o.relatedTarget) {
            if (Z) {
                t: {
                    try {
                        Q(l.nodeName);
                        var E = !0;
                        break t;
                    }
                    catch { }
                    E = !1;
                }
                E || (l = null);
            }
        }
        else
            d == "mouseover" ? l = o.fromElement : d == "mouseout" && (l = o.toElement);
        this.relatedTarget = l, g ? (this.clientX = g.clientX !== void 0 ? g.clientX : g.pageX, this.clientY = g.clientY !== void 0 ? g.clientY : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0) : (this.clientX = o.clientX !== void 0 ? o.clientX : o.pageX, this.clientY = o.clientY !== void 0 ? o.clientY : o.pageY, this.screenX = o.screenX || 0, this.screenY = o.screenY || 0), this.button = o.button, this.key = o.key || "", this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.pointerId = o.pointerId || 0, this.pointerType = typeof o.pointerType == "string" ? o.pointerType : Pg[o.pointerType] || "", this.state = o.state, this.i = o, o.defaultPrevented && Dr.aa.h.call(this);
    } }
    C(Dr, St);
    var Pg = { 2: "touch", 3: "pen", 4: "mouse" };
    Dr.prototype.h = function () { Dr.aa.h.call(this); var o = this.i; o.preventDefault ? o.preventDefault() : o.returnValue = !1; };
    var Nr = "closure_listenable_" + (1e6 * Math.random() | 0), Vg = 0;
    function Cg(o, l, d, g, E) { this.listener = o, this.proxy = null, this.src = l, this.type = d, this.capture = !!g, this.ha = E, this.key = ++Vg, this.da = this.fa = !1; }
    function Xi(o) { o.da = !0, o.listener = null, o.proxy = null, o.src = null, o.ha = null; }
    function Ji(o) { this.src = o, this.g = {}, this.h = 0; }
    Ji.prototype.add = function (o, l, d, g, E) { var P = o.toString(); o = this.g[P], o || (o = this.g[P] = [], this.h++); var O = Yo(o, l, g, E); return -1 < O ? (l = o[O], d || (l.fa = !1)) : (l = new Cg(l, this.src, P, !!g, E), l.fa = d, o.push(l)), l; };
    function Jo(o, l) { var d = l.type; if (d in o.g) {
        var g = o.g[d], E = Array.prototype.indexOf.call(g, l, void 0), P;
        (P = 0 <= E) && Array.prototype.splice.call(g, E, 1), P && (Xi(l), o.g[d].length == 0 && (delete o.g[d], o.h--));
    } }
    function Yo(o, l, d, g) { for (var E = 0; E < o.length; ++E) {
        var P = o[E];
        if (!P.da && P.listener == l && P.capture == !!d && P.ha == g)
            return E;
    } return -1; }
    var Zo = "closure_lm_" + (1e6 * Math.random() | 0), ta = {};
    function Dl(o, l, d, g, E) { if (g && g.once)
        return kl(o, l, d, g, E); if (Array.isArray(l)) {
        for (var P = 0; P < l.length; P++)
            Dl(o, l[P], d, g, E);
        return null;
    } return d = ia(d), o && o[Nr] ? o.K(l, d, h(g) ? !!g.capture : !!g, E) : Nl(o, l, d, !1, g, E); }
    function Nl(o, l, d, g, E, P) { if (!l)
        throw Error("Invalid event type"); var O = h(E) ? !!E.capture : !!E, rt = na(o); if (rt || (o[Zo] = rt = new Ji(o)), d = rt.add(l, d, g, O, P), d.proxy)
        return d; if (g = xg(), d.proxy = g, g.src = o, g.listener = d, o.addEventListener)
        Rg || (E = O), E === void 0 && (E = !1), o.addEventListener(l.toString(), g, E);
    else if (o.attachEvent)
        o.attachEvent(Ol(l.toString()), g);
    else if (o.addListener && o.removeListener)
        o.addListener(g);
    else
        throw Error("addEventListener and attachEvent are unavailable."); return d; }
    function xg() { function o(d) { return l.call(o.src, o.listener, d); } let l = Dg; return o; }
    function kl(o, l, d, g, E) { if (Array.isArray(l)) {
        for (var P = 0; P < l.length; P++)
            kl(o, l[P], d, g, E);
        return null;
    } return d = ia(d), o && o[Nr] ? o.L(l, d, h(g) ? !!g.capture : !!g, E) : Nl(o, l, d, !0, g, E); }
    function Fl(o, l, d, g, E) { if (Array.isArray(l))
        for (var P = 0; P < l.length; P++)
            Fl(o, l[P], d, g, E);
    else
        g = h(g) ? !!g.capture : !!g, d = ia(d), o && o[Nr] ? (o = o.i, l = String(l).toString(), l in o.g && (P = o.g[l], d = Yo(P, d, g, E), -1 < d && (Xi(P[d]), Array.prototype.splice.call(P, d, 1), P.length == 0 && (delete o.g[l], o.h--)))) : o && (o = na(o)) && (l = o.g[l.toString()], o = -1, l && (o = Yo(l, d, g, E)), (d = -1 < o ? l[o] : null) && ea(d)); }
    function ea(o) { if (typeof o != "number" && o && !o.da) {
        var l = o.src;
        if (l && l[Nr])
            Jo(l.i, o);
        else {
            var d = o.type, g = o.proxy;
            l.removeEventListener ? l.removeEventListener(d, g, o.capture) : l.detachEvent ? l.detachEvent(Ol(d), g) : l.addListener && l.removeListener && l.removeListener(g), (d = na(l)) ? (Jo(d, o), d.h == 0 && (d.src = null, l[Zo] = null)) : Xi(o);
        }
    } }
    function Ol(o) { return o in ta ? ta[o] : ta[o] = "on" + o; }
    function Dg(o, l) { if (o.da)
        o = !0;
    else {
        l = new Dr(l, this);
        var d = o.listener, g = o.ha || o.src;
        o.fa && ea(o), o = d.call(g, l);
    } return o; }
    function na(o) { return o = o[Zo], o instanceof Ji ? o : null; }
    var ra = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
    function ia(o) { return typeof o == "function" ? o : (o[ra] || (o[ra] = function (l) { return o.handleEvent(l); }), o[ra]); }
    function Rt() { Ae.call(this), this.i = new Ji(this), this.M = this, this.F = null; }
    C(Rt, Ae), Rt.prototype[Nr] = !0, Rt.prototype.removeEventListener = function (o, l, d, g) { Fl(this, o, l, d, g); };
    function kt(o, l) { var d, g = o.F; if (g)
        for (d = []; g; g = g.F)
            d.push(g); if (o = o.M, g = l.type || l, typeof l == "string")
        l = new St(l, o);
    else if (l instanceof St)
        l.target = l.target || o;
    else {
        var E = l;
        l = new St(g, o), T(l, E);
    } if (E = !0, d)
        for (var P = d.length - 1; 0 <= P; P--) {
            var O = l.g = d[P];
            E = Yi(O, g, !0, l) && E;
        } if (O = l.g = o, E = Yi(O, g, !0, l) && E, E = Yi(O, g, !1, l) && E, d)
        for (P = 0; P < d.length; P++)
            O = l.g = d[P], E = Yi(O, g, !1, l) && E; }
    Rt.prototype.N = function () { if (Rt.aa.N.call(this), this.i) {
        var o = this.i, l;
        for (l in o.g) {
            for (var d = o.g[l], g = 0; g < d.length; g++)
                Xi(d[g]);
            delete o.g[l], o.h--;
        }
    } this.F = null; }, Rt.prototype.K = function (o, l, d, g) { return this.i.add(String(o), l, !1, d, g); }, Rt.prototype.L = function (o, l, d, g) { return this.i.add(String(o), l, !0, d, g); };
    function Yi(o, l, d, g) { if (l = o.i.g[String(l)], !l)
        return !0; l = l.concat(); for (var E = !0, P = 0; P < l.length; ++P) {
        var O = l[P];
        if (O && !O.da && O.capture == d) {
            var rt = O.listener, bt = O.ha || O.src;
            O.fa && Jo(o.i, O), E = rt.call(bt, g) !== !1 && E;
        }
    } return E && !g.defaultPrevented; }
    function Ml(o, l, d) { if (typeof o == "function")
        d && (o = p(o, d));
    else if (o && typeof o.handleEvent == "function")
        o = p(o.handleEvent, o);
    else
        throw Error("Invalid listener argument"); return 2147483647 < Number(l) ? -1 : u.setTimeout(o, l || 0); }
    function Ll(o) { o.g = Ml(() => { o.g = null, o.i && (o.i = !1, Ll(o)); }, o.l); let l = o.h; o.h = null, o.m.apply(null, l); }
    class Ng extends Ae {
        constructor(l, d) { super(), this.m = l, this.l = d, this.h = null, this.i = !1, this.g = null; }
        j(l) { this.h = arguments, this.g ? this.i = !0 : Ll(this); }
        N() { super.N(), this.g && (u.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null); }
    }
    function kr(o) { Ae.call(this), this.h = o, this.g = {}; }
    C(kr, Ae);
    var ql = [];
    function Ul(o) { $(o.g, function (l, d) { this.g.hasOwnProperty(d) && ea(l); }, o), o.g = {}; }
    kr.prototype.N = function () { kr.aa.N.call(this), Ul(this); }, kr.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
    var sa = u.JSON.stringify, kg = u.JSON.parse, Fg = class {
        stringify(o) { return u.JSON.stringify(o, void 0); }
        parse(o) { return u.JSON.parse(o, void 0); }
    };
    function oa() { }
    oa.prototype.h = null;
    function Bl(o) { return o.h || (o.h = o.i()); }
    function jl() { }
    var Fr = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
    function aa() { St.call(this, "d"); }
    C(aa, St);
    function ua() { St.call(this, "c"); }
    C(ua, St);
    var Ze = {}, zl = null;
    function Zi() { return zl = zl || new Rt; }
    Ze.La = "serverreachability";
    function Gl(o) { St.call(this, Ze.La, o); }
    C(Gl, St);
    function Or(o) { let l = Zi(); kt(l, new Gl(l)); }
    Ze.STAT_EVENT = "statevent";
    function Kl(o, l) { St.call(this, Ze.STAT_EVENT, o), this.stat = l; }
    C(Kl, St);
    function Ft(o) { let l = Zi(); kt(l, new Kl(l, o)); }
    Ze.Ma = "timingevent";
    function $l(o, l) { St.call(this, Ze.Ma, o), this.size = l; }
    C($l, St);
    function Mr(o, l) { if (typeof o != "function")
        throw Error("Fn must not be null and must be a function"); return u.setTimeout(function () { o(); }, l); }
    function Lr() { this.g = !0; }
    Lr.prototype.xa = function () { this.g = !1; };
    function Og(o, l, d, g, E, P) {
        o.info(function () {
            if (o.g)
                if (P)
                    for (var O = "", rt = P.split("&"), bt = 0; bt < rt.length; bt++) {
                        var Y = rt[bt].split("=");
                        if (1 < Y.length) {
                            var Pt = Y[0];
                            Y = Y[1];
                            var Vt = Pt.split("_");
                            O = 2 <= Vt.length && Vt[1] == "type" ? O + (Pt + "=" + Y + "&") : O + (Pt + "=redacted&");
                        }
                    }
                else
                    O = null;
            else
                O = P;
            return "XMLHTTP REQ (" + g + ") [attempt " + E + "]: " + l + `
` + d + `
` + O;
        });
    }
    function Mg(o, l, d, g, E, P, O) {
        o.info(function () {
            return "XMLHTTP RESP (" + g + ") [ attempt " + E + "]: " + l + `
` + d + `
` + P + " " + O;
        });
    }
    function xn(o, l, d, g) { o.info(function () { return "XMLHTTP TEXT (" + l + "): " + qg(o, d) + (g ? " " + g : ""); }); }
    function Lg(o, l) { o.info(function () { return "TIMEOUT: " + l; }); }
    Lr.prototype.info = function () { };
    function qg(o, l) { if (!o.g)
        return l; if (!l)
        return null; try {
        var d = JSON.parse(l);
        if (d) {
            for (o = 0; o < d.length; o++)
                if (Array.isArray(d[o])) {
                    var g = d[o];
                    if (!(2 > g.length)) {
                        var E = g[1];
                        if (Array.isArray(E) && !(1 > E.length)) {
                            var P = E[0];
                            if (P != "noop" && P != "stop" && P != "close")
                                for (var O = 1; O < E.length; O++)
                                    E[O] = "";
                        }
                    }
                }
        }
        return sa(d);
    }
    catch {
        return l;
    } }
    var ts = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 }, Ql = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" }, ca;
    function es() { }
    C(es, oa), es.prototype.g = function () { return new XMLHttpRequest; }, es.prototype.i = function () { return {}; }, ca = new es;
    function be(o, l, d, g) { this.j = o, this.i = l, this.l = d, this.R = g || 1, this.U = new kr(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new Wl; }
    function Wl() { this.i = null, this.g = "", this.h = !1; }
    var Hl = {}, la = {};
    function ha(o, l, d) { o.L = 1, o.v = ss(ce(l)), o.m = d, o.P = !0, Xl(o, null); }
    function Xl(o, l) { o.F = Date.now(), ns(o), o.A = ce(o.v); var d = o.A, g = o.R; Array.isArray(g) || (g = [String(g)]), lh(d.i, "t", g), o.C = 0, d = o.j.J, o.h = new Wl, o.g = Ph(o.j, d ? l : null, !o.m), 0 < o.O && (o.M = new Ng(p(o.Y, o, o.g), o.O)), l = o.U, d = o.g, g = o.ca; var E = "readystatechange"; Array.isArray(E) || (E && (ql[0] = E.toString()), E = ql); for (var P = 0; P < E.length; P++) {
        var O = Dl(d, E[P], g || l.handleEvent, !1, l.h || l);
        if (!O)
            break;
        l.g[O.key] = O;
    } l = o.H ? y(o.H) : {}, o.m ? (o.u || (o.u = "POST"), l["Content-Type"] = "application/x-www-form-urlencoded", o.g.ea(o.A, o.u, o.m, l)) : (o.u = "GET", o.g.ea(o.A, o.u, null, l)), Or(), Og(o.i, o.u, o.A, o.l, o.R, o.m); }
    be.prototype.ca = function (o) { o = o.target; let l = this.M; l && le(o) == 3 ? l.j() : this.Y(o); }, be.prototype.Y = function (o) { try {
        if (o == this.g)
            t: {
                let Vt = le(this.g);
                var l = this.g.Ba();
                let kn = this.g.Z();
                if (!(3 > Vt) && (Vt != 3 || this.g && (this.h.h || this.g.oa() || yh(this.g)))) {
                    this.J || Vt != 4 || l == 7 || (l == 8 || 0 >= kn ? Or(3) : Or(2)), da(this);
                    var d = this.g.Z();
                    this.X = d;
                    e: if (Jl(this)) {
                        var g = yh(this.g);
                        o = "";
                        var E = g.length, P = le(this.g) == 4;
                        if (!this.h.i) {
                            if (typeof TextDecoder > "u") {
                                tn(this), qr(this);
                                var O = "";
                                break e;
                            }
                            this.h.i = new u.TextDecoder;
                        }
                        for (l = 0; l < E; l++)
                            this.h.h = !0, o += this.h.i.decode(g[l], { stream: !(P && l == E - 1) });
                        g.length = 0, this.h.g += o, this.C = 0, O = this.h.g;
                    }
                    else
                        O = this.g.oa();
                    if (this.o = d == 200, Mg(this.i, this.u, this.A, this.l, this.R, Vt, d), this.o) {
                        if (this.T && !this.K) {
                            e: {
                                if (this.g) {
                                    var rt, bt = this.g;
                                    if ((rt = bt.g ? bt.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !j(rt)) {
                                        var Y = rt;
                                        break e;
                                    }
                                }
                                Y = null;
                            }
                            if (d = Y)
                                xn(this.i, this.l, d, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, fa(this, d);
                            else {
                                this.o = !1, this.s = 3, Ft(12), tn(this), qr(this);
                                break t;
                            }
                        }
                        if (this.P) {
                            d = !0;
                            let $t;
                            for (; !this.J && this.C < O.length;)
                                if ($t = Ug(this, O), $t == la) {
                                    Vt == 4 && (this.s = 4, Ft(14), d = !1), xn(this.i, this.l, null, "[Incomplete Response]");
                                    break;
                                }
                                else if ($t == Hl) {
                                    this.s = 4, Ft(15), xn(this.i, this.l, O, "[Invalid Chunk]"), d = !1;
                                    break;
                                }
                                else
                                    xn(this.i, this.l, $t, null), fa(this, $t);
                            if (Jl(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), Vt != 4 || O.length != 0 || this.h.h || (this.s = 1, Ft(16), d = !1), this.o = this.o && d, !d)
                                xn(this.i, this.l, O, "[Invalid Chunked Response]"), tn(this), qr(this);
                            else if (0 < O.length && !this.W) {
                                this.W = !0;
                                var Pt = this.j;
                                Pt.g == this && Pt.ba && !Pt.M && (Pt.j.info("Great, no buffering proxy detected. Bytes received: " + O.length), wa(Pt), Pt.M = !0, Ft(11));
                            }
                        }
                        else
                            xn(this.i, this.l, O, null), fa(this, O);
                        Vt == 4 && tn(this), this.o && !this.J && (Vt == 4 ? Ah(this.j, this) : (this.o = !1, ns(this)));
                    }
                    else
                        rp(this.g), d == 400 && 0 < O.indexOf("Unknown SID") ? (this.s = 3, Ft(12)) : (this.s = 0, Ft(13)), tn(this), qr(this);
                }
            }
    }
    catch { }
    finally { } };
    function Jl(o) { return o.g ? o.u == "GET" && o.L != 2 && o.j.Ca : !1; }
    function Ug(o, l) {
        var d = o.C, g = l.indexOf(`
`, d);
        return g == -1 ? la : (d = Number(l.substring(d, g)), isNaN(d) ? Hl : (g += 1, g + d > l.length ? la : (l = l.slice(g, g + d), o.C = g + d, l)));
    }
    be.prototype.cancel = function () { this.J = !0, tn(this); };
    function ns(o) { o.S = Date.now() + o.I, Yl(o, o.I); }
    function Yl(o, l) { if (o.B != null)
        throw Error("WatchDog timer not null"); o.B = Mr(p(o.ba, o), l); }
    function da(o) { o.B && (u.clearTimeout(o.B), o.B = null); }
    be.prototype.ba = function () { this.B = null; let o = Date.now(); 0 <= o - this.S ? (Lg(this.i, this.A), this.L != 2 && (Or(), Ft(17)), tn(this), this.s = 2, qr(this)) : Yl(this, this.S - o); };
    function qr(o) { o.j.G == 0 || o.J || Ah(o.j, o); }
    function tn(o) { da(o); var l = o.M; l && typeof l.ma == "function" && l.ma(), o.M = null, Ul(o.U), o.g && (l = o.g, o.g = null, l.abort(), l.ma()); }
    function fa(o, l) { try {
        var d = o.j;
        if (d.G != 0 && (d.g == o || ma(d.h, o))) {
            if (!o.K && ma(d.h, o) && d.G == 3) {
                try {
                    var g = d.Da.g.parse(l);
                }
                catch {
                    g = null;
                }
                if (Array.isArray(g) && g.length == 3) {
                    var E = g;
                    if (E[0] == 0) {
                        t: if (!d.u) {
                            if (d.g)
                                if (d.g.F + 3e3 < o.F)
                                    ls(d), us(d);
                                else
                                    break t;
                            _a(d), Ft(18);
                        }
                    }
                    else
                        d.za = E[1], 0 < d.za - d.T && 37500 > E[2] && d.F && d.v == 0 && !d.C && (d.C = Mr(p(d.Za, d), 6e3));
                    if (1 >= eh(d.h) && d.ca) {
                        try {
                            d.ca();
                        }
                        catch { }
                        d.ca = void 0;
                    }
                }
                else
                    nn(d, 11);
            }
            else if ((o.K || d.g == o) && ls(d), !j(l))
                for (E = d.Da.g.parse(l), l = 0; l < E.length; l++) {
                    let Y = E[l];
                    if (d.T = Y[0], Y = Y[1], d.G == 2)
                        if (Y[0] == "c") {
                            d.K = Y[1], d.ia = Y[2];
                            let Pt = Y[3];
                            Pt != null && (d.la = Pt, d.j.info("VER=" + d.la));
                            let Vt = Y[4];
                            Vt != null && (d.Aa = Vt, d.j.info("SVER=" + d.Aa));
                            let kn = Y[5];
                            kn != null && typeof kn == "number" && 0 < kn && (g = 1.5 * kn, d.L = g, d.j.info("backChannelRequestTimeoutMs_=" + g)), g = d;
                            let $t = o.g;
                            if ($t) {
                                let ds = $t.g ? $t.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (ds) {
                                    var P = g.h;
                                    P.g || ds.indexOf("spdy") == -1 && ds.indexOf("quic") == -1 && ds.indexOf("h2") == -1 || (P.j = P.l, P.g = new Set, P.h && (ga(P, P.h), P.h = null));
                                }
                                if (g.D) {
                                    let va = $t.g ? $t.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                    va && (g.ya = va, it(g.I, g.D, va));
                                }
                            }
                            d.G = 3, d.l && d.l.ua(), d.ba && (d.R = Date.now() - o.F, d.j.info("Handshake RTT: " + d.R + "ms")), g = d;
                            var O = o;
                            if (g.qa = Rh(g, g.J ? g.ia : null, g.W), O.K) {
                                nh(g.h, O);
                                var rt = O, bt = g.L;
                                bt && (rt.I = bt), rt.B && (da(rt), ns(rt)), g.g = O;
                            }
                            else
                                Ih(g);
                            0 < d.i.length && cs(d);
                        }
                        else
                            Y[0] != "stop" && Y[0] != "close" || nn(d, 7);
                    else
                        d.G == 3 && (Y[0] == "stop" || Y[0] == "close" ? Y[0] == "stop" ? nn(d, 7) : ya(d) : Y[0] != "noop" && d.l && d.l.ta(Y), d.v = 0);
                }
        }
        Or(4);
    }
    catch { } }
    var Bg = class {
        constructor(o, l) { this.g = o, this.map = l; }
    };
    function Zl(o) { this.l = o || 10, u.PerformanceNavigationTiming ? (o = u.performance.getEntriesByType("navigation"), o = 0 < o.length && (o[0].nextHopProtocol == "hq" || o[0].nextHopProtocol == "h2")) : o = !!(u.chrome && u.chrome.loadTimes && u.chrome.loadTimes() && u.chrome.loadTimes().wasFetchedViaSpdy), this.j = o ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []; }
    function th(o) { return o.h ? !0 : o.g ? o.g.size >= o.j : !1; }
    function eh(o) { return o.h ? 1 : o.g ? o.g.size : 0; }
    function ma(o, l) { return o.h ? o.h == l : o.g ? o.g.has(l) : !1; }
    function ga(o, l) { o.g ? o.g.add(l) : o.h = l; }
    function nh(o, l) { o.h && o.h == l ? o.h = null : o.g && o.g.has(l) && o.g.delete(l); }
    Zl.prototype.cancel = function () { if (this.i = rh(this), this.h)
        this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
        for (let o of this.g.values())
            o.cancel();
        this.g.clear();
    } };
    function rh(o) { if (o.h != null)
        return o.i.concat(o.h.D); if (o.g != null && o.g.size !== 0) {
        let l = o.i;
        for (let d of o.g.values())
            l = l.concat(d.D);
        return l;
    } return D(o.i); }
    function jg(o) { if (o.V && typeof o.V == "function")
        return o.V(); if (typeof Map < "u" && o instanceof Map || typeof Set < "u" && o instanceof Set)
        return Array.from(o.values()); if (typeof o == "string")
        return o.split(""); if (c(o)) {
        for (var l = [], d = o.length, g = 0; g < d; g++)
            l.push(o[g]);
        return l;
    } l = [], d = 0; for (g in o)
        l[d++] = o[g]; return l; }
    function zg(o) { if (o.na && typeof o.na == "function")
        return o.na(); if (!o.V || typeof o.V != "function") {
        if (typeof Map < "u" && o instanceof Map)
            return Array.from(o.keys());
        if (!(typeof Set < "u" && o instanceof Set)) {
            if (c(o) || typeof o == "string") {
                var l = [];
                o = o.length;
                for (var d = 0; d < o; d++)
                    l.push(d);
                return l;
            }
            l = [], d = 0;
            for (let g in o)
                l[d++] = g;
            return l;
        }
    } }
    function ih(o, l) { if (o.forEach && typeof o.forEach == "function")
        o.forEach(l, void 0);
    else if (c(o) || typeof o == "string")
        Array.prototype.forEach.call(o, l, void 0);
    else
        for (var d = zg(o), g = jg(o), E = g.length, P = 0; P < E; P++)
            l.call(void 0, g[P], d && d[P], o); }
    var sh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function Gg(o, l) { if (o) {
        o = o.split("&");
        for (var d = 0; d < o.length; d++) {
            var g = o[d].indexOf("="), E = null;
            if (0 <= g) {
                var P = o[d].substring(0, g);
                E = o[d].substring(g + 1);
            }
            else
                P = o[d];
            l(P, E ? decodeURIComponent(E.replace(/\+/g, " ")) : "");
        }
    } }
    function en(o) { if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, o instanceof en) {
        this.h = o.h, rs(this, o.j), this.o = o.o, this.g = o.g, is(this, o.s), this.l = o.l;
        var l = o.i, d = new jr;
        d.i = l.i, l.g && (d.g = new Map(l.g), d.h = l.h), oh(this, d), this.m = o.m;
    }
    else
        o && (l = String(o).match(sh)) ? (this.h = !1, rs(this, l[1] || "", !0), this.o = Ur(l[2] || ""), this.g = Ur(l[3] || "", !0), is(this, l[4]), this.l = Ur(l[5] || "", !0), oh(this, l[6] || "", !0), this.m = Ur(l[7] || "")) : (this.h = !1, this.i = new jr(null, this.h)); }
    en.prototype.toString = function () { var o = [], l = this.j; l && o.push(Br(l, ah, !0), ":"); var d = this.g; return (d || l == "file") && (o.push("//"), (l = this.o) && o.push(Br(l, ah, !0), "@"), o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.s, d != null && o.push(":", String(d))), (d = this.l) && (this.g && d.charAt(0) != "/" && o.push("/"), o.push(Br(d, d.charAt(0) == "/" ? Qg : $g, !0))), (d = this.i.toString()) && o.push("?", d), (d = this.m) && o.push("#", Br(d, Hg)), o.join(""); };
    function ce(o) { return new en(o); }
    function rs(o, l, d) { o.j = d ? Ur(l, !0) : l, o.j && (o.j = o.j.replace(/:$/, "")); }
    function is(o, l) { if (l) {
        if (l = Number(l), isNaN(l) || 0 > l)
            throw Error("Bad port number " + l);
        o.s = l;
    }
    else
        o.s = null; }
    function oh(o, l, d) { l instanceof jr ? (o.i = l, Xg(o.i, o.h)) : (d || (l = Br(l, Wg)), o.i = new jr(l, o.h)); }
    function it(o, l, d) { o.i.set(l, d); }
    function ss(o) { return it(o, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), o; }
    function Ur(o, l) { return o ? l ? decodeURI(o.replace(/%25/g, "%2525")) : decodeURIComponent(o) : ""; }
    function Br(o, l, d) { return typeof o == "string" ? (o = encodeURI(o).replace(l, Kg), d && (o = o.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), o) : null; }
    function Kg(o) { return o = o.charCodeAt(0), "%" + (o >> 4 & 15).toString(16) + (o & 15).toString(16); }
    var ah = /[#\/\?@]/g, $g = /[#\?:]/g, Qg = /[#\?]/g, Wg = /[#\?@]/g, Hg = /#/g;
    function jr(o, l) { this.h = this.g = null, this.i = o || null, this.j = !!l; }
    function Se(o) { o.g || (o.g = new Map, o.h = 0, o.i && Gg(o.i, function (l, d) { o.add(decodeURIComponent(l.replace(/\+/g, " ")), d); })); }
    r = jr.prototype, r.add = function (o, l) { Se(this), this.i = null, o = Dn(this, o); var d = this.g.get(o); return d || this.g.set(o, d = []), d.push(l), this.h += 1, this; };
    function uh(o, l) { Se(o), l = Dn(o, l), o.g.has(l) && (o.i = null, o.h -= o.g.get(l).length, o.g.delete(l)); }
    function ch(o, l) { return Se(o), l = Dn(o, l), o.g.has(l); }
    r.forEach = function (o, l) { Se(this), this.g.forEach(function (d, g) { d.forEach(function (E) { o.call(l, E, g, this); }, this); }, this); }, r.na = function () { Se(this); let o = Array.from(this.g.values()), l = Array.from(this.g.keys()), d = []; for (let g = 0; g < l.length; g++) {
        let E = o[g];
        for (let P = 0; P < E.length; P++)
            d.push(l[g]);
    } return d; }, r.V = function (o) { Se(this); let l = []; if (typeof o == "string")
        ch(this, o) && (l = l.concat(this.g.get(Dn(this, o))));
    else {
        o = Array.from(this.g.values());
        for (let d = 0; d < o.length; d++)
            l = l.concat(o[d]);
    } return l; }, r.set = function (o, l) { return Se(this), this.i = null, o = Dn(this, o), ch(this, o) && (this.h -= this.g.get(o).length), this.g.set(o, [l]), this.h += 1, this; }, r.get = function (o, l) { return o ? (o = this.V(o), 0 < o.length ? String(o[0]) : l) : l; };
    function lh(o, l, d) { uh(o, l), 0 < d.length && (o.i = null, o.g.set(Dn(o, l), D(d)), o.h += d.length); }
    r.toString = function () { if (this.i)
        return this.i; if (!this.g)
        return ""; let o = [], l = Array.from(this.g.keys()); for (var d = 0; d < l.length; d++) {
        var g = l[d];
        let P = encodeURIComponent(String(g)), O = this.V(g);
        for (g = 0; g < O.length; g++) {
            var E = P;
            O[g] !== "" && (E += "=" + encodeURIComponent(String(O[g]))), o.push(E);
        }
    } return this.i = o.join("&"); };
    function Dn(o, l) { return l = String(l), o.j && (l = l.toLowerCase()), l; }
    function Xg(o, l) { l && !o.j && (Se(o), o.i = null, o.g.forEach(function (d, g) { var E = g.toLowerCase(); g != E && (uh(this, g), lh(this, E, d)); }, o)), o.j = l; }
    function Jg(o, l) { let d = new Lr; if (u.Image) {
        let g = new Image;
        g.onload = A(Re, d, "TestLoadImage: loaded", !0, l, g), g.onerror = A(Re, d, "TestLoadImage: error", !1, l, g), g.onabort = A(Re, d, "TestLoadImage: abort", !1, l, g), g.ontimeout = A(Re, d, "TestLoadImage: timeout", !1, l, g), u.setTimeout(function () { g.ontimeout && g.ontimeout(); }, 1e4), g.src = o;
    }
    else
        l(!1); }
    function Yg(o, l) { let d = new Lr, g = new AbortController, E = setTimeout(() => { g.abort(), Re(d, "TestPingServer: timeout", !1, l); }, 1e4); fetch(o, { signal: g.signal }).then(P => { clearTimeout(E), P.ok ? Re(d, "TestPingServer: ok", !0, l) : Re(d, "TestPingServer: server error", !1, l); }).catch(() => { clearTimeout(E), Re(d, "TestPingServer: error", !1, l); }); }
    function Re(o, l, d, g, E) { try {
        E && (E.onload = null, E.onerror = null, E.onabort = null, E.ontimeout = null), g(d);
    }
    catch { } }
    function Zg() { this.g = new Fg; }
    function tp(o, l, d) { let g = d || ""; try {
        ih(o, function (E, P) { let O = E; h(E) && (O = sa(E)), l.push(g + P + "=" + encodeURIComponent(O)); });
    }
    catch (E) {
        throw l.push(g + "type=" + encodeURIComponent("_badmap")), E;
    } }
    function zr(o) { this.l = o.Ub || null, this.j = o.eb || !1; }
    C(zr, oa), zr.prototype.g = function () { return new os(this.l, this.j); }, zr.prototype.i = (function (o) { return function () { return o; }; })({});
    function os(o, l) { Rt.call(this), this.D = o, this.o = l, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers, this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null; }
    C(os, Rt), r = os.prototype, r.open = function (o, l) { if (this.readyState != 0)
        throw this.abort(), Error("Error reopening a connection"); this.B = o, this.A = l, this.readyState = 1, Kr(this); }, r.send = function (o) { if (this.readyState != 1)
        throw this.abort(), Error("need to call open() first. "); this.g = !0; let l = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 }; o && (l.body = o), (this.D || u).fetch(new Request(this.A, l)).then(this.Sa.bind(this), this.ga.bind(this)); }, r.abort = function () { this.response = this.responseText = "", this.u = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => { }), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, Gr(this)), this.readyState = 0; }, r.Sa = function (o) { if (this.g && (this.l = o, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = o.headers, this.readyState = 2, Kr(this)), this.g && (this.readyState = 3, Kr(this), this.g)))
        if (this.responseType === "arraybuffer")
            o.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof u.ReadableStream < "u" && "body" in o) {
            if (this.j = o.body.getReader(), this.o) {
                if (this.responseType)
                    throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                this.response = [];
            }
            else
                this.response = this.responseText = "", this.v = new TextDecoder;
            hh(this);
        }
        else
            o.text().then(this.Ra.bind(this), this.ga.bind(this)); };
    function hh(o) { o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o)); }
    r.Pa = function (o) { if (this.g) {
        if (this.o && o.value)
            this.response.push(o.value);
        else if (!this.o) {
            var l = o.value ? o.value : new Uint8Array(0);
            (l = this.v.decode(l, { stream: !o.done })) && (this.response = this.responseText += l);
        }
        o.done ? Gr(this) : Kr(this), this.readyState == 3 && hh(this);
    } }, r.Ra = function (o) { this.g && (this.response = this.responseText = o, Gr(this)); }, r.Qa = function (o) { this.g && (this.response = o, Gr(this)); }, r.ga = function () { this.g && Gr(this); };
    function Gr(o) { o.readyState = 4, o.l = null, o.j = null, o.v = null, Kr(o); }
    r.setRequestHeader = function (o, l) { this.u.append(o, l); }, r.getResponseHeader = function (o) { return this.h && this.h.get(o.toLowerCase()) || ""; }, r.getAllResponseHeaders = function () {
        if (!this.h)
            return "";
        let o = [], l = this.h.entries();
        for (var d = l.next(); !d.done;)
            d = d.value, o.push(d[0] + ": " + d[1]), d = l.next();
        return o.join(`\r
`);
    };
    function Kr(o) { o.onreadystatechange && o.onreadystatechange.call(o); }
    Object.defineProperty(os.prototype, "withCredentials", { get: function () { return this.m === "include"; }, set: function (o) { this.m = o ? "include" : "same-origin"; } });
    function dh(o) {
        let l = "";
        return $(o, function (d, g) {
            l += g, l += ":", l += d, l += `\r
`;
        }), l;
    }
    function pa(o, l, d) { t: {
        for (g in d) {
            var g = !1;
            break t;
        }
        g = !0;
    } g || (d = dh(d), typeof o == "string" ? d != null && encodeURIComponent(String(d)) : it(o, l, d)); }
    function lt(o) { Rt.call(this), this.headers = new Map, this.o = o || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1; }
    C(lt, Rt);
    var ep = /^https?$/i, np = ["POST", "PUT"];
    r = lt.prototype, r.Ha = function (o) { this.J = o; }, r.ea = function (o, l, d, g) { if (this.g)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + o); l = l ? l.toUpperCase() : "GET", this.D = o, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : ca.g(), this.v = this.o ? Bl(this.o) : Bl(ca), this.g.onreadystatechange = p(this.Ea, this); try {
        this.B = !0, this.g.open(l, String(o), !0), this.B = !1;
    }
    catch (P) {
        fh(this, P);
        return;
    } if (o = d || "", d = new Map(this.headers), g)
        if (Object.getPrototypeOf(g) === Object.prototype)
            for (var E in g)
                d.set(E, g[E]);
        else if (typeof g.keys == "function" && typeof g.get == "function")
            for (let P of g.keys())
                d.set(P, g.get(P));
        else
            throw Error("Unknown input type for opt_headers: " + String(g)); g = Array.from(d.keys()).find(P => P.toLowerCase() == "content-type"), E = u.FormData && o instanceof u.FormData, !(0 <= Array.prototype.indexOf.call(np, l, void 0)) || g || E || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); for (let [P, O] of d)
        this.g.setRequestHeader(P, O); this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J); try {
        ph(this), this.u = !0, this.g.send(o), this.u = !1;
    }
    catch (P) {
        fh(this, P);
    } };
    function fh(o, l) { o.h = !1, o.g && (o.j = !0, o.g.abort(), o.j = !1), o.l = l, o.m = 5, mh(o), as(o); }
    function mh(o) { o.A || (o.A = !0, kt(o, "complete"), kt(o, "error")); }
    r.abort = function (o) { this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = o || 7, kt(this, "complete"), kt(this, "abort"), as(this)); }, r.N = function () { this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), as(this, !0)), lt.aa.N.call(this); }, r.Ea = function () { this.s || (this.B || this.u || this.j ? gh(this) : this.bb()); }, r.bb = function () { gh(this); };
    function gh(o) { if (o.h && typeof a < "u" && (!o.v[1] || le(o) != 4 || o.Z() != 2)) {
        if (o.u && le(o) == 4)
            Ml(o.Ea, 0, o);
        else if (kt(o, "readystatechange"), le(o) == 4) {
            o.h = !1;
            try {
                let O = o.Z();
                t: switch (O) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var l = !0;
                        break t;
                    default: l = !1;
                }
                var d;
                if (!(d = l)) {
                    var g;
                    if (g = O === 0) {
                        var E = String(o.D).match(sh)[1] || null;
                        !E && u.self && u.self.location && (E = u.self.location.protocol.slice(0, -1)), g = !ep.test(E ? E.toLowerCase() : "");
                    }
                    d = g;
                }
                if (d)
                    kt(o, "complete"), kt(o, "success");
                else {
                    o.m = 6;
                    try {
                        var P = 2 < le(o) ? o.g.statusText : "";
                    }
                    catch {
                        P = "";
                    }
                    o.l = P + " [" + o.Z() + "]", mh(o);
                }
            }
            finally {
                as(o);
            }
        }
    } }
    function as(o, l) { if (o.g) {
        ph(o);
        let d = o.g, g = o.v[0] ? () => { } : null;
        o.g = null, o.v = null, l || kt(o, "ready");
        try {
            d.onreadystatechange = g;
        }
        catch { }
    } }
    function ph(o) { o.I && (u.clearTimeout(o.I), o.I = null); }
    r.isActive = function () { return !!this.g; };
    function le(o) { return o.g ? o.g.readyState : 0; }
    r.Z = function () { try {
        return 2 < le(this) ? this.g.status : -1;
    }
    catch {
        return -1;
    } }, r.oa = function () { try {
        return this.g ? this.g.responseText : "";
    }
    catch {
        return "";
    } }, r.Oa = function (o) { if (this.g) {
        var l = this.g.responseText;
        return o && l.indexOf(o) == 0 && (l = l.substring(o.length)), kg(l);
    } };
    function yh(o) { try {
        if (!o.g)
            return null;
        if ("response" in o.g)
            return o.g.response;
        switch (o.H) {
            case "":
            case "text": return o.g.responseText;
            case "arraybuffer": if ("mozResponseArrayBuffer" in o.g)
                return o.g.mozResponseArrayBuffer;
        }
        return null;
    }
    catch {
        return null;
    } }
    function rp(o) {
        let l = {};
        o = (o.g && 2 <= le(o) && o.g.getAllResponseHeaders() || "").split(`\r
`);
        for (let g = 0; g < o.length; g++) {
            if (j(o[g]))
                continue;
            var d = I(o[g]);
            let E = d[0];
            if (d = d[1], typeof d != "string")
                continue;
            d = d.trim();
            let P = l[E] || [];
            l[E] = P, P.push(d);
        }
        v(l, function (g) { return g.join(", "); });
    }
    r.Ba = function () { return this.m; }, r.Ka = function () { return typeof this.l == "string" ? this.l : String(this.l); };
    function $r(o, l, d) { return d && d.internalChannelParams && d.internalChannelParams[o] || l; }
    function _h(o) { this.Aa = 0, this.i = [], this.j = new Lr, this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = $r("failFast", !1, o), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = $r("baseRetryDelayMs", 5e3, o), this.cb = $r("retryDelaySeedMs", 1e4, o), this.Wa = $r("forwardChannelMaxRetries", 2, o), this.wa = $r("forwardChannelRequestTimeoutMs", 2e4, o), this.pa = o && o.xmlHttpFactory || void 0, this.Xa = o && o.Tb || void 0, this.Ca = o && o.useFetchStreams || !1, this.L = void 0, this.J = o && o.supportsCrossDomainXhr || !1, this.K = "", this.h = new Zl(o && o.concurrentRequestLimit), this.Da = new Zg, this.P = o && o.fastHandshake || !1, this.O = o && o.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = o && o.Rb || !1, o && o.xa && this.j.xa(), o && o.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && o && o.detectBufferingProxy || !1, this.ja = void 0, o && o.longPollingTimeout && 0 < o.longPollingTimeout && (this.ja = o.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null; }
    r = _h.prototype, r.la = 8, r.G = 1, r.connect = function (o, l, d, g) { Ft(0), this.W = o, this.H = l || {}, d && g !== void 0 && (this.H.OSID = d, this.H.OAID = g), this.F = this.X, this.I = Rh(this, null, this.W), cs(this); };
    function ya(o) { if (wh(o), o.G == 3) {
        var l = o.U++, d = ce(o.I);
        if (it(d, "SID", o.K), it(d, "RID", l), it(d, "TYPE", "terminate"), Qr(o, d), l = new be(o, o.j, l), l.L = 2, l.v = ss(ce(d)), d = !1, u.navigator && u.navigator.sendBeacon)
            try {
                d = u.navigator.sendBeacon(l.v.toString(), "");
            }
            catch { }
        !d && u.Image && (new Image().src = l.v, d = !0), d || (l.g = Ph(l.j, null), l.g.ea(l.v)), l.F = Date.now(), ns(l);
    } Sh(o); }
    function us(o) { o.g && (wa(o), o.g.cancel(), o.g = null); }
    function wh(o) { us(o), o.u && (u.clearTimeout(o.u), o.u = null), ls(o), o.h.cancel(), o.s && (typeof o.s == "number" && u.clearTimeout(o.s), o.s = null); }
    function cs(o) { if (!th(o.h) && !o.s) {
        o.s = !0;
        var l = o.Ga;
        Cr || xl(), xr || (Cr(), xr = !0), Xo.add(l, o), o.B = 0;
    } }
    function ip(o, l) { return eh(o.h) >= o.h.j - (o.s ? 1 : 0) ? !1 : o.s ? (o.i = l.D.concat(o.i), !0) : o.G == 1 || o.G == 2 || o.B >= (o.Va ? 0 : o.Wa) ? !1 : (o.s = Mr(p(o.Ga, o, l), bh(o, o.B)), o.B++, !0); }
    r.Ga = function (o) { if (this.s)
        if (this.s = null, this.G == 1) {
            if (!o) {
                this.U = Math.floor(1e5 * Math.random()), o = this.U++;
                let E = new be(this, this.j, o), P = this.o;
                if (this.S && (P ? (P = y(P), T(P, this.S)) : P = this.S), this.m !== null || this.O || (E.H = P, P = null), this.P)
                    t: {
                        for (var l = 0, d = 0; d < this.i.length; d++) {
                            e: {
                                var g = this.i[d];
                                if ("__data__" in g.map && (g = g.map.__data__, typeof g == "string")) {
                                    g = g.length;
                                    break e;
                                }
                                g = void 0;
                            }
                            if (g === void 0)
                                break;
                            if (l += g, 4096 < l) {
                                l = d;
                                break t;
                            }
                            if (l === 4096 || d === this.i.length - 1) {
                                l = d + 1;
                                break t;
                            }
                        }
                        l = 1e3;
                    }
                else
                    l = 1e3;
                l = Th(this, E, l), d = ce(this.I), it(d, "RID", o), it(d, "CVER", 22), this.D && it(d, "X-HTTP-Session-Id", this.D), Qr(this, d), P && (this.O ? l = "headers=" + encodeURIComponent(String(dh(P))) + "&" + l : this.m && pa(d, this.m, P)), ga(this.h, E), this.Ua && it(d, "TYPE", "init"), this.P ? (it(d, "$req", l), it(d, "SID", "null"), E.T = !0, ha(E, d, null)) : ha(E, d, l), this.G = 2;
            }
        }
        else
            this.G == 3 && (o ? vh(this, o) : this.i.length == 0 || th(this.h) || vh(this)); };
    function vh(o, l) { var d; l ? d = l.l : d = o.U++; let g = ce(o.I); it(g, "SID", o.K), it(g, "RID", d), it(g, "AID", o.T), Qr(o, g), o.m && o.o && pa(g, o.m, o.o), d = new be(o, o.j, d, o.B + 1), o.m === null && (d.H = o.o), l && (o.i = l.D.concat(o.i)), l = Th(o, d, 1e3), d.I = Math.round(.5 * o.wa) + Math.round(.5 * o.wa * Math.random()), ga(o.h, d), ha(d, g, l); }
    function Qr(o, l) { o.H && $(o.H, function (d, g) { it(l, g, d); }), o.l && ih({}, function (d, g) { it(l, g, d); }); }
    function Th(o, l, d) { d = Math.min(o.i.length, d); var g = o.l ? p(o.l.Na, o.l, o) : null; t: {
        var E = o.i;
        let P = -1;
        for (;;) {
            let O = ["count=" + d];
            P == -1 ? 0 < d ? (P = E[0].g, O.push("ofs=" + P)) : P = 0 : O.push("ofs=" + P);
            let rt = !0;
            for (let bt = 0; bt < d; bt++) {
                let Y = E[bt].g, Pt = E[bt].map;
                if (Y -= P, 0 > Y)
                    P = Math.max(0, E[bt].g - 100), rt = !1;
                else
                    try {
                        tp(Pt, O, "req" + Y + "_");
                    }
                    catch {
                        g && g(Pt);
                    }
            }
            if (rt) {
                g = O.join("&");
                break t;
            }
        }
    } return o = o.i.splice(0, d), l.D = o, g; }
    function Ih(o) { if (!o.g && !o.u) {
        o.Y = 1;
        var l = o.Fa;
        Cr || xl(), xr || (Cr(), xr = !0), Xo.add(l, o), o.v = 0;
    } }
    function _a(o) { return o.g || o.u || 3 <= o.v ? !1 : (o.Y++, o.u = Mr(p(o.Fa, o), bh(o, o.v)), o.v++, !0); }
    r.Fa = function () { if (this.u = null, Eh(this), this.ba && !(this.M || this.g == null || 0 >= this.R)) {
        var o = 2 * this.R;
        this.j.info("BP detection timer enabled: " + o), this.A = Mr(p(this.ab, this), o);
    } }, r.ab = function () { this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, Ft(10), us(this), Eh(this)); };
    function wa(o) { o.A != null && (u.clearTimeout(o.A), o.A = null); }
    function Eh(o) { o.g = new be(o, o.j, "rpc", o.Y), o.m === null && (o.g.H = o.o), o.g.O = 0; var l = ce(o.qa); it(l, "RID", "rpc"), it(l, "SID", o.K), it(l, "AID", o.T), it(l, "CI", o.F ? "0" : "1"), !o.F && o.ja && it(l, "TO", o.ja), it(l, "TYPE", "xmlhttp"), Qr(o, l), o.m && o.o && pa(l, o.m, o.o), o.L && (o.g.I = o.L); var d = o.g; o = o.ia, d.L = 1, d.v = ss(ce(l)), d.m = null, d.P = !0, Xl(d, o); }
    r.Za = function () { this.C != null && (this.C = null, us(this), _a(this), Ft(19)); };
    function ls(o) { o.C != null && (u.clearTimeout(o.C), o.C = null); }
    function Ah(o, l) { var d = null; if (o.g == l) {
        ls(o), wa(o), o.g = null;
        var g = 2;
    }
    else if (ma(o.h, l))
        d = l.D, nh(o.h, l), g = 1;
    else
        return; if (o.G != 0) {
        if (l.o)
            if (g == 1) {
                d = l.m ? l.m.length : 0, l = Date.now() - l.F;
                var E = o.B;
                g = Zi(), kt(g, new $l(g, d)), cs(o);
            }
            else
                Ih(o);
        else if (E = l.s, E == 3 || E == 0 && 0 < l.X || !(g == 1 && ip(o, l) || g == 2 && _a(o)))
            switch (d && 0 < d.length && (l = o.h, l.i = l.i.concat(d)), E) {
                case 1:
                    nn(o, 5);
                    break;
                case 4:
                    nn(o, 10);
                    break;
                case 3:
                    nn(o, 6);
                    break;
                default: nn(o, 2);
            }
    } }
    function bh(o, l) { let d = o.Ta + Math.floor(Math.random() * o.cb); return o.isActive() || (d *= 2), d * l; }
    function nn(o, l) { if (o.j.info("Error code " + l), l == 2) {
        var d = p(o.fb, o), g = o.Xa;
        let E = !g;
        g = new en(g || "//www.google.com/images/cleardot.gif"), u.location && u.location.protocol == "http" || rs(g, "https"), ss(g), E ? Jg(g.toString(), d) : Yg(g.toString(), d);
    }
    else
        Ft(2); o.G = 0, o.l && o.l.sa(l), Sh(o), wh(o); }
    r.fb = function (o) { o ? (this.j.info("Successfully pinged google.com"), Ft(2)) : (this.j.info("Failed to ping google.com"), Ft(1)); };
    function Sh(o) { if (o.G = 0, o.ka = [], o.l) {
        let l = rh(o.h);
        (l.length != 0 || o.i.length != 0) && (N(o.ka, l), N(o.ka, o.i), o.h.i.length = 0, D(o.i), o.i.length = 0), o.l.ra();
    } }
    function Rh(o, l, d) { var g = d instanceof en ? ce(d) : new en(d); if (g.g != "")
        l && (g.g = l + "." + g.g), is(g, g.s);
    else {
        var E = u.location;
        g = E.protocol, l = l ? l + "." + E.hostname : E.hostname, E = +E.port;
        var P = new en(null);
        g && rs(P, g), l && (P.g = l), E && is(P, E), d && (P.l = d), g = P;
    } return d = o.D, l = o.ya, d && l && it(g, d, l), it(g, "VER", o.la), Qr(o, g), g; }
    function Ph(o, l, d) { if (l && !o.J)
        throw Error("Can't create secondary domain capable XhrIo object."); return l = o.Ca && !o.pa ? new lt(new zr({ eb: d })) : new lt(o.pa), l.Ha(o.J), l; }
    r.isActive = function () { return !!this.l && this.l.isActive(this); };
    function Vh() { }
    r = Vh.prototype, r.ua = function () { }, r.ta = function () { }, r.sa = function () { }, r.ra = function () { }, r.isActive = function () { return !0; }, r.Na = function () { };
    function hs() { }
    hs.prototype.g = function (o, l) { return new qt(o, l); };
    function qt(o, l) { Rt.call(this), this.g = new _h(l), this.l = o, this.h = l && l.messageUrlParams || null, o = l && l.messageHeaders || null, l && l.clientProtocolHeaderRequired && (o ? o["X-Client-Protocol"] = "webchannel" : o = { "X-Client-Protocol": "webchannel" }), this.g.o = o, o = l && l.initMessageHeaders || null, l && l.messageContentType && (o ? o["X-WebChannel-Content-Type"] = l.messageContentType : o = { "X-WebChannel-Content-Type": l.messageContentType }), l && l.va && (o ? o["X-WebChannel-Client-Profile"] = l.va : o = { "X-WebChannel-Client-Profile": l.va }), this.g.S = o, (o = l && l.Sb) && !j(o) && (this.g.m = o), this.v = l && l.supportsCrossDomainXhr || !1, this.u = l && l.sendRawJson || !1, (l = l && l.httpSessionIdParam) && !j(l) && (this.g.D = l, o = this.h, o !== null && l in o && (o = this.h, l in o && delete o[l])), this.j = new Nn(this); }
    C(qt, Rt), qt.prototype.m = function () { this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0); }, qt.prototype.close = function () { ya(this.g); }, qt.prototype.o = function (o) { var l = this.g; if (typeof o == "string") {
        var d = {};
        d.__data__ = o, o = d;
    }
    else
        this.u && (d = {}, d.__data__ = sa(o), o = d); l.i.push(new Bg(l.Ya++, o)), l.G == 3 && cs(l); }, qt.prototype.N = function () { this.g.l = null, delete this.j, ya(this.g), delete this.g, qt.aa.N.call(this); };
    function Ch(o) { aa.call(this), o.__headers__ && (this.headers = o.__headers__, this.statusCode = o.__status__, delete o.__headers__, delete o.__status__); var l = o.__sm__; if (l) {
        t: {
            for (let d in l) {
                o = d;
                break t;
            }
            o = void 0;
        }
        (this.i = o) && (o = this.i, l = l !== null && o in l ? l[o] : void 0), this.data = l;
    }
    else
        this.data = o; }
    C(Ch, aa);
    function xh() { ua.call(this), this.status = 1; }
    C(xh, ua);
    function Nn(o) { this.g = o; }
    C(Nn, Vh), Nn.prototype.ua = function () { kt(this.g, "a"); }, Nn.prototype.ta = function (o) { kt(this.g, new Ch(o)); }, Nn.prototype.sa = function (o) { kt(this.g, new xh); }, Nn.prototype.ra = function () { kt(this.g, "b"); }, hs.prototype.createWebChannel = hs.prototype.g, qt.prototype.send = qt.prototype.o, qt.prototype.open = qt.prototype.m, qt.prototype.close = qt.prototype.close, Da = de.createWebChannelTransport = function () { return new hs; }, xa = de.getStatEventTarget = function () { return Zi(); }, Ca = de.Event = Ze, gs = de.Stat = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 }, ts.NO_ERROR = 0, ts.TIMEOUT = 8, ts.HTTP_ERROR = 6, Hr = de.ErrorCode = ts, Ql.COMPLETE = "complete", Va = de.EventType = Ql, jl.EventType = Fr, Fr.OPEN = "a", Fr.CLOSE = "b", Fr.ERROR = "c", Fr.MESSAGE = "d", Rt.prototype.listen = Rt.prototype.K, On = de.WebChannel = jl, sp = de.FetchXmlHttpFactory = zr, lt.prototype.listenOnce = lt.prototype.L, lt.prototype.getLastError = lt.prototype.Ka, lt.prototype.getLastErrorCode = lt.prototype.Ba, lt.prototype.getStatus = lt.prototype.Z, lt.prototype.getResponseJson = lt.prototype.Oa, lt.prototype.getResponseText = lt.prototype.oa, lt.prototype.send = lt.prototype.ea, lt.prototype.setWithCredentials = lt.prototype.Ha, Pa = de.XhrIo = lt;
}).apply(typeof ms < "u" ? ms : typeof self < "u" ? self : typeof window < "u" ? window : {});
var Qh = "@firebase/firestore", Wh = "4.8.0";
var _t = class {
    constructor(t) { this.uid = t; }
    isAuthenticated() { return this.uid != null; }
    toKey() { return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"; }
    isEqual(t) { return t.uid === this.uid; }
};
_t.UNAUTHENTICATED = new _t(null), _t.GOOGLE_CREDENTIALS = new _t("google-credentials-uid"), _t.FIRST_PARTY = new _t("first-party-uid"), _t.MOCK_USER = new _t("mock-user");
var Tr = "11.10.0";
var Me = new qh("@firebase/firestore");
function zn() { return Me.logLevel; }
function C_(r) { Me.setLogLevel(r); }
function k(r, ...t) { if (Me.logLevel <= Jt.DEBUG) {
    let e = t.map(Hc);
    Me.debug(`Firestore (${Tr}): ${r}`, ...e);
} }
function dt(r, ...t) { if (Me.logLevel <= Jt.ERROR) {
    let e = t.map(Hc);
    Me.error(`Firestore (${Tr}): ${r}`, ...e);
} }
function Ot(r, ...t) { if (Me.logLevel <= Jt.WARN) {
    let e = t.map(Hc);
    Me.warn(`Firestore (${Tr}): ${r}`, ...e);
} }
function Hc(r) { if (typeof r == "string")
    return r; try {
    return (function (e) { return JSON.stringify(e); })(r);
}
catch {
    return r;
} }
function L(r, t, e) { let n = "Unexpected state"; typeof t == "string" ? n = t : e = t, mf(r, n, e); }
function mf(r, t, e) { let n = `FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`; if (e !== void 0)
    try {
        n += " CONTEXT: " + JSON.stringify(e);
    }
    catch {
        n += " CONTEXT: " + e;
    } throw dt(n), new Error(n); }
function U(r, t, e, n) { let i = "Unexpected state"; typeof e == "string" ? i = e : n = e, r || mf(t, i, n); }
function x_(r, t) { r || L(57014, t); }
function F(r, t) { return r; }
var b = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" }, x = class extends Mh {
    constructor(t, e) { super(t, e), this.code = t, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`; }
};
var vt = class {
    constructor() { this.promise = new Promise((t, e) => { this.resolve = t, this.reject = e; }); }
};
var Cs = class {
    constructor(t, e) { this.user = e, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${t}`); }
}, Ua = class {
    getToken() { return Promise.resolve(null); }
    invalidateToken() { }
    start(t, e) { t.enqueueRetryable(() => e(_t.UNAUTHENTICATED)); }
    shutdown() { }
}, Ba = class {
    constructor(t) { this.token = t, this.changeListener = null; }
    getToken() { return Promise.resolve(this.token); }
    invalidateToken() { }
    start(t, e) { this.changeListener = e, t.enqueueRetryable(() => e(this.token.user)); }
    shutdown() { this.changeListener = null; }
}, ja = class {
    constructor(t) { this.t = t, this.currentUser = _t.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null; }
    start(t, e) { U(this.o === void 0, 42304); let n = this.i, i = c => this.i !== n ? (n = this.i, e(c)) : Promise.resolve(), s = new vt; this.o = () => { this.i++, this.currentUser = this.u(), s.resolve(), s = new vt, t.enqueueRetryable(() => i(this.currentUser)); }; let a = () => { let c = s; t.enqueueRetryable(() => V(this, null, function* () { yield c.promise, yield i(this.currentUser); })); }, u = c => { k("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = c, this.o && (this.auth.addAuthTokenListener(this.o), a()); }; this.t.onInit(c => u(c)), setTimeout(() => { if (!this.auth) {
        let c = this.t.getImmediate({ optional: !0 });
        c ? u(c) : (k("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new vt);
    } }, 0), a(); }
    getToken() { let t = this.i, e = this.forceRefresh; return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then(n => this.i !== t ? (k("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : n ? (U(typeof n.accessToken == "string", 31837, { l: n }), new Cs(n.accessToken, this.currentUser)) : null) : Promise.resolve(null); }
    invalidateToken() { this.forceRefresh = !0; }
    shutdown() { this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0; }
    u() { let t = this.auth && this.auth.getUid(); return U(t === null || typeof t == "string", 2055, { h: t }), new _t(t); }
}, za = class {
    constructor(t, e, n) { this.P = t, this.T = e, this.I = n, this.type = "FirstParty", this.user = _t.FIRST_PARTY, this.A = new Map; }
    R() { return this.I ? this.I() : null; }
    get headers() { this.A.set("X-Goog-AuthUser", this.P); let t = this.R(); return t && this.A.set("Authorization", t), this.T && this.A.set("X-Goog-Iam-Authorization-Token", this.T), this.A; }
}, Ga = class {
    constructor(t, e, n) { this.P = t, this.T = e, this.I = n; }
    getToken() { return Promise.resolve(new za(this.P, this.T, this.I)); }
    start(t, e) { t.enqueueRetryable(() => e(_t.FIRST_PARTY)); }
    shutdown() { }
    invalidateToken() { }
}, li = class {
    constructor(t) { this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value); }
}, Ka = class {
    constructor(t, e) { this.V = e, this.forceRefresh = !1, this.appCheck = null, this.m = null, this.p = null, jh(t) && t.settings.appCheckToken && (this.p = t.settings.appCheckToken); }
    start(t, e) { U(this.o === void 0, 3512); let n = s => { s.error != null && k("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`); let a = s.token !== this.m; return this.m = s.token, k("FirebaseAppCheckTokenProvider", `Received ${a ? "new" : "existing"} token.`), a ? e(s.token) : Promise.resolve(); }; this.o = s => { t.enqueueRetryable(() => n(s)); }; let i = s => { k("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = s, this.o && this.appCheck.addTokenListener(this.o); }; this.V.onInit(s => i(s)), setTimeout(() => { if (!this.appCheck) {
        let s = this.V.getImmediate({ optional: !0 });
        s ? i(s) : k("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
    } }, 0); }
    getToken() { if (this.p)
        return Promise.resolve(new li(this.p)); let t = this.forceRefresh; return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then(e => e ? (U(typeof e.token == "string", 44558, { tokenResult: e }), this.m = e.token, new li(e.token)) : null) : Promise.resolve(null); }
    invalidateToken() { this.forceRefresh = !0; }
    shutdown() { this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0; }
}, Hh = class {
    getToken() { return Promise.resolve(new li("")); }
    invalidateToken() { }
    start(t, e) { }
    shutdown() { }
};
function op(r) { let t = typeof self < "u" && (self.crypto || self.msCrypto), e = new Uint8Array(r); if (t && typeof t.getRandomValues == "function")
    t.getRandomValues(e);
else
    for (let n = 0; n < r; n++)
        e[n] = Math.floor(256 * Math.random()); return e; }
function Xc() { return new TextEncoder; }
var hi = class {
    static newId() { let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 62 * Math.floor(4.129032258064516), n = ""; for (; n.length < 20;) {
        let i = op(40);
        for (let s = 0; s < i.length; ++s)
            n.length < 20 && i[s] < e && (n += t.charAt(i[s] % 62));
    } return n; }
};
function G(r, t) { return r < t ? -1 : r > t ? 1 : 0; }
function $a(r, t) { let e = 0; for (; e < r.length && e < t.length;) {
    let n = r.codePointAt(e), i = t.codePointAt(e);
    if (n !== i) {
        if (n < 128 && i < 128)
            return G(n, i);
        {
            let s = Xc(), a = ap(s.encode(Xh(r, e)), s.encode(Xh(t, e)));
            return a !== 0 ? a : G(n, i);
        }
    }
    e += n > 65535 ? 2 : 1;
} return G(r.length, t.length); }
function Xh(r, t) { return r.codePointAt(t) > 65535 ? r.substring(t, t + 2) : r.substring(t, t + 1); }
function ap(r, t) { for (let e = 0; e < r.length && e < t.length; ++e)
    if (r[e] !== t[e])
        return G(r[e], t[e]); return G(r.length, t.length); }
function Yn(r, t, e) { return r.length === t.length && r.every((n, i) => e(n, t[i])); }
function gf(r) { return r + "\0"; }
var Qa = "__name__", xs = class r {
    constructor(t, e, n) { e === void 0 ? e = 0 : e > t.length && L(637, { offset: e, range: t.length }), n === void 0 ? n = t.length - e : n > t.length - e && L(1746, { length: n, range: t.length - e }), this.segments = t, this.offset = e, this.len = n; }
    get length() { return this.len; }
    isEqual(t) { return r.comparator(this, t) === 0; }
    child(t) { let e = this.segments.slice(this.offset, this.limit()); return t instanceof r ? t.forEach(n => { e.push(n); }) : e.push(t), this.construct(e); }
    limit() { return this.offset + this.length; }
    popFirst(t) { return t = t === void 0 ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t); }
    popLast() { return this.construct(this.segments, this.offset, this.length - 1); }
    firstSegment() { return this.segments[this.offset]; }
    lastSegment() { return this.get(this.length - 1); }
    get(t) { return this.segments[this.offset + t]; }
    isEmpty() { return this.length === 0; }
    isPrefixOf(t) { if (t.length < this.length)
        return !1; for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t.get(e))
            return !1; return !0; }
    isImmediateParentOf(t) { if (this.length + 1 !== t.length)
        return !1; for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t.get(e))
            return !1; return !0; }
    forEach(t) { for (let e = this.offset, n = this.limit(); e < n; e++)
        t(this.segments[e]); }
    toArray() { return this.segments.slice(this.offset, this.limit()); }
    static comparator(t, e) { let n = Math.min(t.length, e.length); for (let i = 0; i < n; i++) {
        let s = r.compareSegments(t.get(i), e.get(i));
        if (s !== 0)
            return s;
    } return G(t.length, e.length); }
    static compareSegments(t, e) { let n = r.isNumericId(t), i = r.isNumericId(e); return n && !i ? -1 : !n && i ? 1 : n && i ? r.extractNumericId(t).compare(r.extractNumericId(e)) : $a(t, e); }
    static isNumericId(t) { return t.startsWith("__id") && t.endsWith("__"); }
    static extractNumericId(t) { return he.fromString(t.substring(4, t.length - 2)); }
}, H = class r extends xs {
    construct(t, e, n) { return new r(t, e, n); }
    canonicalString() { return this.toArray().join("/"); }
    toString() { return this.canonicalString(); }
    toUriEncodedString() { return this.toArray().map(encodeURIComponent).join("/"); }
    static fromString(...t) { let e = []; for (let n of t) {
        if (n.indexOf("//") >= 0)
            throw new x(b.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
        e.push(...n.split("/").filter(i => i.length > 0));
    } return new r(e); }
    static emptyPath() { return new r([]); }
}, up = /^[_a-zA-Z][_a-zA-Z0-9]*$/, Tt = class r extends xs {
    construct(t, e, n) { return new r(t, e, n); }
    static isValidIdentifier(t) { return up.test(t); }
    canonicalString() { return this.toArray().map(t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), r.isValidIdentifier(t) || (t = "`" + t + "`"), t)).join("."); }
    toString() { return this.canonicalString(); }
    isKeyField() { return this.length === 1 && this.get(0) === Qa; }
    static keyField() { return new r([Qa]); }
    static fromServerFormat(t) { let e = [], n = "", i = 0, s = () => { if (n.length === 0)
        throw new x(b.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`); e.push(n), n = ""; }, a = !1; for (; i < t.length;) {
        let u = t[i];
        if (u === "\\") {
            if (i + 1 === t.length)
                throw new x(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
            let c = t[i + 1];
            if (c !== "\\" && c !== "." && c !== "`")
                throw new x(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
            n += c, i += 2;
        }
        else
            u === "`" ? (a = !a, i++) : u !== "." || a ? (n += u, i++) : (s(), i++);
    } if (s(), a)
        throw new x(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t); return new r(e); }
    static emptyPath() { return new r([]); }
};
var M = class r {
    constructor(t) { this.path = t; }
    static fromPath(t) { return new r(H.fromString(t)); }
    static fromName(t) { return new r(H.fromString(t).popFirst(5)); }
    static empty() { return new r(H.emptyPath()); }
    get collectionGroup() { return this.path.popLast().lastSegment(); }
    hasCollectionId(t) { return this.path.length >= 2 && this.path.get(this.path.length - 2) === t; }
    getCollectionGroup() { return this.path.get(this.path.length - 2); }
    getCollectionPath() { return this.path.popLast(); }
    isEqual(t) { return t !== null && H.comparator(this.path, t.path) === 0; }
    toString() { return this.path.toString(); }
    static comparator(t, e) { return H.comparator(t.path, e.path); }
    static isDocumentKey(t) { return t.length % 2 == 0; }
    static fromSegments(t) { return new r(new H(t.slice())); }
};
function Jc(r, t, e) { if (!e)
    throw new x(b.INVALID_ARGUMENT, `Function ${r}() cannot be called with an empty ${t}.`); }
function cp(r, t, e, n) { if (t === !0 && n === !0)
    throw new x(b.INVALID_ARGUMENT, `${r} and ${e} cannot be used together.`); }
function Jh(r) { if (!M.isDocumentKey(r))
    throw new x(b.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`); }
function Yh(r) { if (M.isDocumentKey(r))
    throw new x(b.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`); }
function pf(r) { return typeof r == "object" && r !== null && (Object.getPrototypeOf(r) === Object.prototype || Object.getPrototypeOf(r) === null); }
function Do(r) { if (r === void 0)
    return "undefined"; if (r === null)
    return "null"; if (typeof r == "string")
    return r.length > 20 && (r = `${r.substring(0, 20)}...`), JSON.stringify(r); if (typeof r == "number" || typeof r == "boolean")
    return "" + r; if (typeof r == "object") {
    if (r instanceof Array)
        return "an array";
    {
        let t = (function (n) { return n.constructor ? n.constructor.name : null; })(r);
        return t ? `a custom ${t} object` : "an object";
    }
} return typeof r == "function" ? "a function" : L(12329, { type: typeof r }); }
function W(r, t) { if ("_delegate" in r && (r = r._delegate), !(r instanceof t)) {
    if (t.name === r.constructor.name)
        throw new x(b.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
        let e = Do(r);
        throw new x(b.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${e}`);
    }
} return r; }
function yf(r, t) { if (t <= 0)
    throw new x(b.INVALID_ARGUMENT, `Function ${r}() requires a positive number, but it was: ${t}.`); }
function wt(r, t) { let e = { typeString: r }; return t && (e.value = t), e; }
function Rn(r, t) { if (!pf(r))
    throw new x(b.INVALID_ARGUMENT, "JSON must be an object"); let e; for (let n in t)
    if (t[n]) {
        let i = t[n].typeString, s = "value" in t[n] ? { value: t[n].value } : void 0;
        if (!(n in r)) {
            e = `JSON missing required field: '${n}'`;
            break;
        }
        let a = r[n];
        if (i && typeof a !== i) {
            e = `JSON field '${n}' must be a ${i}.`;
            break;
        }
        if (s !== void 0 && a !== s.value) {
            e = `Expected '${n}' field to equal '${s.value}'`;
            break;
        }
    } if (e)
    throw new x(b.INVALID_ARGUMENT, e); return !0; }
var Zh = -62135596800, td = 1e6, ut = class r {
    static now() { return r.fromMillis(Date.now()); }
    static fromDate(t) { return r.fromMillis(t.getTime()); }
    static fromMillis(t) { let e = Math.floor(t / 1e3), n = Math.floor((t - 1e3 * e) * td); return new r(e, n); }
    constructor(t, e) { if (this.seconds = t, this.nanoseconds = e, e < 0)
        throw new x(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (e >= 1e9)
        throw new x(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (t < Zh)
        throw new x(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); if (t >= 253402300800)
        throw new x(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); }
    toDate() { return new Date(this.toMillis()); }
    toMillis() { return 1e3 * this.seconds + this.nanoseconds / td; }
    _compareTo(t) { return this.seconds === t.seconds ? G(this.nanoseconds, t.nanoseconds) : G(this.seconds, t.seconds); }
    isEqual(t) { return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds; }
    toString() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"; }
    toJSON() { return { type: r._jsonSchemaVersion, seconds: this.seconds, nanoseconds: this.nanoseconds }; }
    static fromJSON(t) { if (Rn(t, r._jsonSchema))
        return new r(t.seconds, t.nanoseconds); }
    valueOf() { let t = this.seconds - Zh; return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0"); }
};
ut._jsonSchemaVersion = "firestore/timestamp/1.0", ut._jsonSchema = { type: wt("string", ut._jsonSchemaVersion), seconds: wt("number"), nanoseconds: wt("number") };
var z = class r {
    static fromTimestamp(t) { return new r(t); }
    static min() { return new r(new ut(0, 0)); }
    static max() { return new r(new ut(253402300799, 999999999)); }
    constructor(t) { this.timestamp = t; }
    compareTo(t) { return this.timestamp._compareTo(t.timestamp); }
    isEqual(t) { return this.timestamp.isEqual(t.timestamp); }
    toMicroseconds() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3; }
    toString() { return "SnapshotVersion(" + this.timestamp.toString() + ")"; }
    toTimestamp() { return this.timestamp; }
};
var Zn = -1, Le = class {
    constructor(t, e, n, i) { this.indexId = t, this.collectionGroup = e, this.fields = n, this.indexState = i; }
};
function Wa(r) { return r.fields.find(t => t.kind === 2); }
function sn(r) { return r.fields.filter(t => t.kind !== 2); }
function lp(r, t) { let e = G(r.collectionGroup, t.collectionGroup); if (e !== 0)
    return e; for (let n = 0; n < Math.min(r.fields.length, t.fields.length); ++n)
    if (e = hp(r.fields[n], t.fields[n]), e !== 0)
        return e; return G(r.fields.length, t.fields.length); }
Le.UNKNOWN_ID = -1;
var me = class {
    constructor(t, e) { this.fieldPath = t, this.kind = e; }
};
function hp(r, t) { let e = Tt.comparator(r.fieldPath, t.fieldPath); return e !== 0 ? e : G(r.kind, t.kind); }
var tr = class r {
    constructor(t, e) { this.sequenceNumber = t, this.offset = e; }
    static empty() { return new r(0, Kt.min()); }
};
function _f(r, t) { let e = r.toTimestamp().seconds, n = r.toTimestamp().nanoseconds + 1, i = z.fromTimestamp(n === 1e9 ? new ut(e + 1, 0) : new ut(e, n)); return new Kt(i, M.empty(), t); }
function wf(r) { return new Kt(r.readTime, r.key, Zn); }
var Kt = class r {
    constructor(t, e, n) { this.readTime = t, this.documentKey = e, this.largestBatchId = n; }
    static min() { return new r(z.min(), M.empty(), Zn); }
    static max() { return new r(z.max(), M.empty(), Zn); }
};
function Yc(r, t) { let e = r.readTime.compareTo(t.readTime); return e !== 0 ? e : (e = M.comparator(r.documentKey, t.documentKey), e !== 0 ? e : G(r.largestBatchId, t.largestBatchId)); }
var vf = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Ds = class {
    constructor() { this.onCommittedListeners = []; }
    addOnCommittedListener(t) { this.onCommittedListeners.push(t); }
    raiseOnCommittedEvent() { this.onCommittedListeners.forEach(t => t()); }
};
function We(r) { return V(this, null, function* () { if (r.code !== b.FAILED_PRECONDITION || r.message !== vf)
    throw r; k("LocalStore", "Unexpectedly lost primary lease"); }); }
var R = class r {
    constructor(t) { this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(e => { this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e); }, e => { this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e); }); }
    catch(t) { return this.next(void 0, t); }
    next(t, e) { return this.callbackAttached && L(59440), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new r((n, i) => { this.nextCallback = s => { this.wrapSuccess(t, s).next(n, i); }, this.catchCallback = s => { this.wrapFailure(e, s).next(n, i); }; }); }
    toPromise() { return new Promise((t, e) => { this.next(t, e); }); }
    wrapUserFunction(t) { try {
        let e = t();
        return e instanceof r ? e : r.resolve(e);
    }
    catch (e) {
        return r.reject(e);
    } }
    wrapSuccess(t, e) { return t ? this.wrapUserFunction(() => t(e)) : r.resolve(e); }
    wrapFailure(t, e) { return t ? this.wrapUserFunction(() => t(e)) : r.reject(e); }
    static resolve(t) { return new r((e, n) => { e(t); }); }
    static reject(t) { return new r((e, n) => { n(t); }); }
    static waitFor(t) { return new r((e, n) => { let i = 0, s = 0, a = !1; t.forEach(u => { ++i, u.next(() => { ++s, a && s === i && e(); }, c => n(c)); }), a = !0, s === i && e(); }); }
    static or(t) { let e = r.resolve(!1); for (let n of t)
        e = e.next(i => i ? r.resolve(i) : n()); return e; }
    static forEach(t, e) { let n = []; return t.forEach((i, s) => { n.push(e.call(this, i, s)); }), this.waitFor(n); }
    static mapArray(t, e) { return new r((n, i) => { let s = t.length, a = new Array(s), u = 0; for (let c = 0; c < s; c++) {
        let h = c;
        e(t[h]).next(f => { a[h] = f, ++u, u === s && n(a); }, f => i(f));
    } }); }
    static doWhile(t, e) { return new r((n, i) => { let s = () => { t() === !0 ? e().next(() => { s(); }, i) : n(); }; s(); }); }
};
var Ut = "SimpleDb", Ns = class r {
    static open(t, e, n, i) { try {
        return new r(e, t.transaction(i, n));
    }
    catch (s) {
        throw new fn(e, s);
    } }
    constructor(t, e) { this.action = t, this.transaction = e, this.aborted = !1, this.S = new vt, this.transaction.oncomplete = () => { this.S.resolve(); }, this.transaction.onabort = () => { e.error ? this.S.reject(new fn(t, e.error)) : this.S.resolve(); }, this.transaction.onerror = n => { let i = Zc(n.target.error); this.S.reject(new fn(t, i)); }; }
    get D() { return this.S.promise; }
    abort(t) { t && this.S.reject(t), this.aborted || (k(Ut, "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()); }
    v() { let t = this.transaction; this.aborted || typeof t.commit != "function" || t.commit(); }
    store(t) { let e = this.transaction.objectStore(t); return new Xa(e); }
}, qe = class r {
    static delete(t) { return k(Ut, "Removing database:", t), an(Dh().indexedDB.deleteDatabase(t)).toPromise(); }
    static C() { if (!Oh())
        return !1; if (r.F())
        return !0; let t = Wr(), e = r.M(t), n = 0 < e && e < 10, i = Tf(t), s = 0 < i && i < 4.5; return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || n || s); }
    static F() { var t; return typeof process < "u" && ((t = process.__PRIVATE_env) === null || t === void 0 ? void 0 : t.O) === "YES"; }
    static N(t, e) { return t.store(e); }
    static M(t) { let e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1"; return Number(n); }
    constructor(t, e, n) { this.name = t, this.version = e, this.B = n, this.L = null, r.M(Wr()) === 12.2 && dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."); }
    k(t) { return V(this, null, function* () { return this.db || (k(Ut, "Opening database:", this.name), this.db = yield new Promise((e, n) => { let i = indexedDB.open(this.name, this.version); i.onsuccess = s => { let a = s.target.result; e(a); }, i.onblocked = () => { n(new fn(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.")); }, i.onerror = s => { let a = s.target.error; a.name === "VersionError" ? n(new x(b.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : a.name === "InvalidStateError" ? n(new x(b.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + a)) : n(new fn(t, a)); }, i.onupgradeneeded = s => { k(Ut, 'Database "' + this.name + '" requires upgrade from version:', s.oldVersion); let a = s.target.result; if (this.L !== null && this.L !== s.oldVersion)
        throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${a.version}`); this.B.q(a, i.transaction, s.oldVersion, this.version).next(() => { k(Ut, "Database upgrade to version " + this.version + " complete"); }); }; }), this.db.addEventListener("close", e => { let n = e.target; this.L = n.version; }, { passive: !0 })), this.db.addEventListener("versionchange", e => { var n; e.newVersion === null && (Ot('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'), (n = this.databaseDeletedListener) === null || n === void 0 || n.call(this)); }, { passive: !0 }), this.db; }); }
    setDatabaseDeletedListener(t) { if (this.databaseDeletedListener)
        throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called"); this.databaseDeletedListener = t; }
    runTransaction(t, e, n, i) { return V(this, null, function* () { let s = e === "readonly", a = 0; for (;;) {
        ++a;
        try {
            this.db = yield this.k(t);
            let u = Ns.open(this.db, t, s ? "readonly" : "readwrite", n), c = i(u).next(h => (u.v(), h)).catch(h => (u.abort(h), R.reject(h))).toPromise();
            return c.catch(() => { }), yield u.D, c;
        }
        catch (u) {
            let c = u, h = c.name !== "FirebaseError" && a < 3;
            if (k(Ut, "Transaction failed with error:", c.message, "Retrying:", h), this.close(), !h)
                return Promise.reject(c);
        }
    } }); }
    close() { this.db && this.db.close(), this.db = void 0; }
};
function Tf(r) { let t = r.match(/Android ([\d.]+)/i), e = t ? t[1].split(".").slice(0, 2).join(".") : "-1"; return Number(e); }
var Ha = class {
    constructor(t) { this.$ = t, this.U = !1, this.K = null; }
    get isDone() { return this.U; }
    get W() { return this.K; }
    set cursor(t) { this.$ = t; }
    done() { this.U = !0; }
    G(t) { this.K = t; }
    delete() { return an(this.$.delete()); }
}, fn = class extends x {
    constructor(t, e) { super(b.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`), this.name = "IndexedDbTransactionError"; }
};
function He(r) { return r.name === "IndexedDbTransactionError"; }
var Xa = class {
    constructor(t) { this.store = t; }
    put(t, e) { let n; return e !== void 0 ? (k(Ut, "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (k(Ut, "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), an(n); }
    add(t) { return k(Ut, "ADD", this.store.name, t, t), an(this.store.add(t)); }
    get(t) { return an(this.store.get(t)).next(e => (e === void 0 && (e = null), k(Ut, "GET", this.store.name, t, e), e)); }
    delete(t) { return k(Ut, "DELETE", this.store.name, t), an(this.store.delete(t)); }
    count() { return k(Ut, "COUNT", this.store.name), an(this.store.count()); }
    j(t, e) { let n = this.options(t, e), i = n.index ? this.store.index(n.index) : this.store; if (typeof i.getAll == "function") {
        let s = i.getAll(n.range);
        return new R((a, u) => { s.onerror = c => { u(c.target.error); }, s.onsuccess = c => { a(c.target.result); }; });
    } {
        let s = this.cursor(n), a = [];
        return this.J(s, (u, c) => { a.push(c); }).next(() => a);
    } }
    H(t, e) { let n = this.store.getAll(t, e === null ? void 0 : e); return new R((i, s) => { n.onerror = a => { s(a.target.error); }, n.onsuccess = a => { i(a.target.result); }; }); }
    Y(t, e) { k(Ut, "DELETE ALL", this.store.name); let n = this.options(t, e); n.Z = !1; let i = this.cursor(n); return this.J(i, (s, a, u) => u.delete()); }
    X(t, e) { let n; e ? n = t : (n = {}, e = t); let i = this.cursor(n); return this.J(i, e); }
    ee(t) { let e = this.cursor({}); return new R((n, i) => { e.onerror = s => { let a = Zc(s.target.error); i(a); }, e.onsuccess = s => { let a = s.target.result; a ? t(a.primaryKey, a.value).next(u => { u ? a.continue() : n(); }) : n(); }; }); }
    J(t, e) { let n = []; return new R((i, s) => { t.onerror = a => { s(a.target.error); }, t.onsuccess = a => { let u = a.target.result; if (!u)
        return void i(); let c = new Ha(u), h = e(u.primaryKey, u.value, c); if (h instanceof R) {
        let f = h.catch(m => (c.done(), R.reject(m)));
        n.push(f);
    } c.isDone ? i() : c.W === null ? u.continue() : u.continue(c.W); }; }).next(() => R.waitFor(n)); }
    options(t, e) { let n; return t !== void 0 && (typeof t == "string" ? n = t : e = t), { index: n, range: e }; }
    cursor(t) { let e = "next"; if (t.reverse && (e = "prev"), t.index) {
        let n = this.store.index(t.index);
        return t.Z ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
    } return this.store.openCursor(t.range, e); }
};
function an(r) { return new R((t, e) => { r.onsuccess = n => { let i = n.target.result; t(i); }, r.onerror = n => { let i = Zc(n.target.error); e(i); }; }); }
var ed = !1;
function Zc(r) { let t = qe.M(Wr()); if (t >= 12.2 && t < 13) {
    let e = "An internal error was encountered in the Indexed Database server";
    if (r.message.indexOf(e) >= 0) {
        let n = new x("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
        return ed || (ed = !0, setTimeout(() => { throw n; }, 0)), n;
    }
} return r; }
var ni = "IndexBackfiller", Ja = class {
    constructor(t, e) { this.asyncQueue = t, this.te = e, this.task = null; }
    start() { this.ne(15e3); }
    stop() { this.task && (this.task.cancel(), this.task = null); }
    get started() { return this.task !== null; }
    ne(t) { k(ni, `Scheduled in ${t}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t, () => V(this, null, function* () { this.task = null; try {
        let e = yield this.te.re();
        k(ni, `Documents written: ${e}`);
    }
    catch (e) {
        He(e) ? k(ni, "Ignoring IndexedDB error during index backfill: ", e) : yield We(e);
    } yield this.ne(6e4); })); }
}, Ya = class {
    constructor(t, e) { this.localStore = t, this.persistence = e; }
    re(t = 50) { return V(this, null, function* () { return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", e => this.ie(e, t)); }); }
    ie(t, e) { let n = new Set, i = e, s = !0; return R.doWhile(() => s === !0 && i > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a => { if (a !== null && !n.has(a))
        return k(ni, `Processing collection: ${a}`), this.se(t, a, i).next(u => { i -= u, n.add(a); }); s = !1; })).next(() => e - i); }
    se(t, e, n) { return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t, e).next(i => this.localStore.localDocuments.getNextDocuments(t, e, i, n).next(s => { let a = s.changes; return this.localStore.indexManager.updateIndexEntries(t, a).next(() => this.oe(i, s)).next(u => (k(ni, `Updating offset: ${u}`), this.localStore.indexManager.updateCollectionGroup(t, e, u))).next(() => a.size); })); }
    oe(t, e) { let n = t; return e.changes.forEach((i, s) => { let a = wf(s); Yc(a, n) > 0 && (n = a); }), new Kt(n.readTime, n.documentKey, Math.max(e.batchId, t.largestBatchId)); }
};
var Bt = (() => { class r {
    constructor(e, n) { this.previousValue = e, n && (n.sequenceNumberHandler = i => this._e(i), this.ae = i => n.writeSequenceNumber(i)); }
    _e(e) { return this.previousValue = Math.max(e, this.previousValue), this.previousValue; }
    next() { let e = ++this.previousValue; return this.ae && this.ae(e), e; }
} r.ue = -1; return r; })(), Fe = -1;
function zi(r) { return r == null; }
function di(r) { return r === 0 && 1 / r == -1 / 0; }
function If(r) { return typeof r == "number" && Number.isInteger(r) && !di(r) && r <= Number.MAX_SAFE_INTEGER && r >= Number.MIN_SAFE_INTEGER; }
var ks = "";
function Dt(r) { let t = ""; for (let e = 0; e < r.length; e++)
    t.length > 0 && (t = nd(t)), t = dp(r.get(e), t); return nd(t); }
function dp(r, t) { let e = t, n = r.length; for (let i = 0; i < n; i++) {
    let s = r.charAt(i);
    switch (s) {
        case "\0":
            e += "";
            break;
        case ks:
            e += "";
            break;
        default: e += s;
    }
} return e; }
function nd(r) { return r + ks + ""; }
function Zt(r) { let t = r.length; if (U(t >= 2, 64408, { path: r }), t === 2)
    return U(r.charAt(0) === ks && r.charAt(1) === "", 56145, { path: r }), H.emptyPath(); let e = t - 2, n = [], i = ""; for (let s = 0; s < t;) {
    let a = r.indexOf(ks, s);
    switch ((a < 0 || a > e) && L(50515, { path: r }), r.charAt(a + 1)) {
        case "":
            let u = r.substring(s, a), c;
            i.length === 0 ? c = u : (i += u, c = i, i = ""), n.push(c);
            break;
        case "":
            i += r.substring(s, a), i += "\0";
            break;
        case "":
            i += r.substring(s, a + 1);
            break;
        default: L(61167, { path: r });
    }
    s = a + 2;
} return new H(n); }
var on = "remoteDocuments", Gi = "owner", Mn = "owner", fi = "mutationQueues", fp = "userId", Qt = "mutations", rd = "batchId", hn = "userMutationsIndex", id = ["userId", "batchId"];
function Is(r, t) { return [r, Dt(t)]; }
function Ef(r, t, e) { return [r, Dt(t), e]; }
var mp = {}, er = "documentMutations", Fs = "remoteDocumentsV14", gp = ["prefixPath", "collectionGroup", "readTime", "documentId"], Es = "documentKeyIndex", pp = ["prefixPath", "collectionGroup", "documentId"], Af = "collectionGroupIndex", yp = ["collectionGroup", "readTime", "prefixPath", "documentId"], mi = "remoteDocumentGlobal", Za = "remoteDocumentGlobalKey", nr = "targets", bf = "queryTargetsIndex", _p = ["canonicalId", "targetId"], rr = "targetDocuments", wp = ["targetId", "path"], tl = "documentTargetsIndex", vp = ["path", "targetId"], Os = "targetGlobalKey", mn = "targetGlobal", gi = "collectionParents", Tp = ["collectionId", "parent"], ir = "clientMetadata", Ip = "clientId", No = "bundles", Ep = "bundleId", ko = "namedQueries", Ap = "name", el = "indexConfiguration", bp = "indexId", tu = "collectionGroupIndex", Sp = "collectionGroup", ri = "indexState", Rp = ["indexId", "uid"], Sf = "sequenceNumberIndex", Pp = ["uid", "sequenceNumber"], ii = "indexEntries", Vp = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"], Rf = "documentKeyIndex", Cp = ["indexId", "uid", "orderedDocumentKey"], Fo = "documentOverlays", xp = ["userId", "collectionPath", "documentId"], eu = "collectionPathOverlayIndex", Dp = ["userId", "collectionPath", "largestBatchId"], Pf = "collectionGroupOverlayIndex", Np = ["userId", "collectionGroup", "largestBatchId"], nl = "globals", kp = "name", Vf = [fi, Qt, er, on, nr, Gi, mn, rr, ir, mi, gi, No, ko], Fp = [...Vf, Fo], Cf = [fi, Qt, er, Fs, nr, Gi, mn, rr, ir, mi, gi, No, ko, Fo], xf = Cf, rl = [...xf, el, ri, ii], Op = rl, Df = [...rl, nl], Mp = Df;
var pi = class extends Ds {
    constructor(t, e) { super(), this.ce = t, this.currentSequenceNumber = e; }
};
function Et(r, t) { let e = F(r); return qe.N(e.ce, t); }
function sd(r) { let t = 0; for (let e in r)
    Object.prototype.hasOwnProperty.call(r, e) && t++; return t; }
function Xe(r, t) { for (let e in r)
    Object.prototype.hasOwnProperty.call(r, e) && t(e, r[e]); }
function Nf(r, t) { let e = []; for (let n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.push(t(r[n], n, r)); return e; }
function kf(r) { for (let t in r)
    if (Object.prototype.hasOwnProperty.call(r, t))
        return !1; return !0; }
var ot = class r {
    constructor(t, e) { this.comparator = t, this.root = e || ne.EMPTY; }
    insert(t, e) { return new r(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, ne.BLACK, null, null)); }
    remove(t) { return new r(this.comparator, this.root.remove(t, this.comparator).copy(null, null, ne.BLACK, null, null)); }
    get(t) { let e = this.root; for (; !e.isEmpty();) {
        let n = this.comparator(t, e.key);
        if (n === 0)
            return e.value;
        n < 0 ? e = e.left : n > 0 && (e = e.right);
    } return null; }
    indexOf(t) { let e = 0, n = this.root; for (; !n.isEmpty();) {
        let i = this.comparator(t, n.key);
        if (i === 0)
            return e + n.left.size;
        i < 0 ? n = n.left : (e += n.left.size + 1, n = n.right);
    } return -1; }
    isEmpty() { return this.root.isEmpty(); }
    get size() { return this.root.size; }
    minKey() { return this.root.minKey(); }
    maxKey() { return this.root.maxKey(); }
    inorderTraversal(t) { return this.root.inorderTraversal(t); }
    forEach(t) { this.inorderTraversal((e, n) => (t(e, n), !1)); }
    toString() { let t = []; return this.inorderTraversal((e, n) => (t.push(`${e}:${n}`), !1)), `{${t.join(", ")}}`; }
    reverseTraversal(t) { return this.root.reverseTraversal(t); }
    getIterator() { return new Qn(this.root, null, this.comparator, !1); }
    getIteratorFrom(t) { return new Qn(this.root, t, this.comparator, !1); }
    getReverseIterator() { return new Qn(this.root, null, this.comparator, !0); }
    getReverseIteratorFrom(t) { return new Qn(this.root, t, this.comparator, !0); }
}, Qn = class {
    constructor(t, e, n, i) { this.isReverse = i, this.nodeStack = []; let s = 1; for (; !t.isEmpty();)
        if (s = e ? n(t.key, e) : 1, e && i && (s *= -1), s < 0)
            t = this.isReverse ? t.left : t.right;
        else {
            if (s === 0) {
                this.nodeStack.push(t);
                break;
            }
            this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        } }
    getNext() { let t = this.nodeStack.pop(), e = { key: t.key, value: t.value }; if (this.isReverse)
        for (t = t.left; !t.isEmpty();)
            this.nodeStack.push(t), t = t.right;
    else
        for (t = t.right; !t.isEmpty();)
            this.nodeStack.push(t), t = t.left; return e; }
    hasNext() { return this.nodeStack.length > 0; }
    peek() { if (this.nodeStack.length === 0)
        return null; let t = this.nodeStack[this.nodeStack.length - 1]; return { key: t.key, value: t.value }; }
}, ne = class r {
    constructor(t, e, n, i, s) { this.key = t, this.value = e, this.color = n ?? r.RED, this.left = i ?? r.EMPTY, this.right = s ?? r.EMPTY, this.size = this.left.size + 1 + this.right.size; }
    copy(t, e, n, i, s) { return new r(t ?? this.key, e ?? this.value, n ?? this.color, i ?? this.left, s ?? this.right); }
    isEmpty() { return !1; }
    inorderTraversal(t) { return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t); }
    reverseTraversal(t) { return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t); }
    min() { return this.left.isEmpty() ? this : this.left.min(); }
    minKey() { return this.min().key; }
    maxKey() { return this.right.isEmpty() ? this.key : this.right.maxKey(); }
    insert(t, e, n) { let i = this, s = n(t, i.key); return i = s < 0 ? i.copy(null, null, null, i.left.insert(t, e, n), null) : s === 0 ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, n)), i.fixUp(); }
    removeMin() { if (this.left.isEmpty())
        return r.EMPTY; let t = this; return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp(); }
    remove(t, e) { let n, i = this; if (e(t, i.key) < 0)
        i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, e), null);
    else {
        if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), e(t, i.key) === 0) {
            if (i.right.isEmpty())
                return r.EMPTY;
            n = i.right.min(), i = i.copy(n.key, n.value, null, null, i.right.removeMin());
        }
        i = i.copy(null, null, null, null, i.right.remove(t, e));
    } return i.fixUp(); }
    isRed() { return this.color; }
    fixUp() { let t = this; return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t; }
    moveRedLeft() { let t = this.colorFlip(); return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t; }
    moveRedRight() { let t = this.colorFlip(); return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t; }
    rotateLeft() { let t = this.copy(null, null, r.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null); }
    rotateRight() { let t = this.copy(null, null, r.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t); }
    colorFlip() { let t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, t, e); }
    checkMaxDepth() { let t = this.check(); return Math.pow(2, t) <= this.size + 1; }
    check() { if (this.isRed() && this.left.isRed())
        throw L(43730, { key: this.key, value: this.value }); if (this.right.isRed())
        throw L(14113, { key: this.key, value: this.value }); let t = this.left.check(); if (t !== this.right.check())
        throw L(27949); return t + (this.isRed() ? 0 : 1); }
};
ne.EMPTY = null, ne.RED = !0, ne.BLACK = !1;
ne.EMPTY = new class {
    constructor() { this.size = 0; }
    get key() { throw L(57766); }
    get value() { throw L(16141); }
    get color() { throw L(16727); }
    get left() { throw L(29726); }
    get right() { throw L(36894); }
    copy(t, e, n, i, s) { return this; }
    insert(t, e, n) { return new ne(t, e); }
    remove(t, e) { return this; }
    isEmpty() { return !0; }
    inorderTraversal(t) { return !1; }
    reverseTraversal(t) { return !1; }
    minKey() { return null; }
    maxKey() { return null; }
    isRed() { return !1; }
    checkMaxDepth() { return !0; }
    check() { return 0; }
};
var nt = class r {
    constructor(t) { this.comparator = t, this.data = new ot(this.comparator); }
    has(t) { return this.data.get(t) !== null; }
    first() { return this.data.minKey(); }
    last() { return this.data.maxKey(); }
    get size() { return this.data.size; }
    indexOf(t) { return this.data.indexOf(t); }
    forEach(t) { this.data.inorderTraversal((e, n) => (t(e), !1)); }
    forEachInRange(t, e) { let n = this.data.getIteratorFrom(t[0]); for (; n.hasNext();) {
        let i = n.getNext();
        if (this.comparator(i.key, t[1]) >= 0)
            return;
        e(i.key);
    } }
    forEachWhile(t, e) { let n; for (n = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
        if (!t(n.getNext().key))
            return; }
    firstAfterOrEqual(t) { let e = this.data.getIteratorFrom(t); return e.hasNext() ? e.getNext().key : null; }
    getIterator() { return new Ms(this.data.getIterator()); }
    getIteratorFrom(t) { return new Ms(this.data.getIteratorFrom(t)); }
    add(t) { return this.copy(this.data.remove(t).insert(t, !0)); }
    delete(t) { return this.has(t) ? this.copy(this.data.remove(t)) : this; }
    isEmpty() { return this.data.isEmpty(); }
    unionWith(t) { let e = this; return e.size < t.size && (e = t, t = this), t.forEach(n => { e = e.add(n); }), e; }
    isEqual(t) { if (!(t instanceof r) || this.size !== t.size)
        return !1; let e = this.data.getIterator(), n = t.data.getIterator(); for (; e.hasNext();) {
        let i = e.getNext().key, s = n.getNext().key;
        if (this.comparator(i, s) !== 0)
            return !1;
    } return !0; }
    toArray() { let t = []; return this.forEach(e => { t.push(e); }), t; }
    toString() { let t = []; return this.forEach(e => t.push(e)), "SortedSet(" + t.toString() + ")"; }
    copy(t) { let e = new r(this.comparator); return e.data = t, e; }
}, Ms = class {
    constructor(t) { this.iter = t; }
    getNext() { return this.iter.getNext().key; }
    hasNext() { return this.iter.hasNext(); }
};
function Ln(r) { return r.hasNext() ? r.getNext() : void 0; }
var jt = class r {
    constructor(t) { this.fields = t, t.sort(Tt.comparator); }
    static empty() { return new r([]); }
    unionWith(t) { let e = new nt(Tt.comparator); for (let n of this.fields)
        e = e.add(n); for (let n of t)
        e = e.add(n); return new r(e.toArray()); }
    covers(t) { for (let e of this.fields)
        if (e.isPrefixOf(t))
            return !0; return !1; }
    isEqual(t) { return Yn(this.fields, t.fields, (e, n) => e.isEqual(n)); }
};
var Ls = class extends Error {
    constructor() { super(...arguments), this.name = "Base64DecodeError"; }
};
function N_() { return typeof atob < "u"; }
var mt = class r {
    constructor(t) { this.binaryString = t; }
    static fromBase64String(t) { let e = (function (i) { try {
        return atob(i);
    }
    catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException ? new Ls("Invalid base64 string: " + s) : s;
    } })(t); return new r(e); }
    static fromUint8Array(t) { let e = (function (i) { let s = ""; for (let a = 0; a < i.length; ++a)
        s += String.fromCharCode(i[a]); return s; })(t); return new r(e); }
    [Symbol.iterator]() { let t = 0; return { next: () => t < this.binaryString.length ? { value: this.binaryString.charCodeAt(t++), done: !1 } : { value: void 0, done: !0 } }; }
    toBase64() { return (function (e) { return btoa(e); })(this.binaryString); }
    toUint8Array() { return (function (e) { let n = new Uint8Array(e.length); for (let i = 0; i < e.length; i++)
        n[i] = e.charCodeAt(i); return n; })(this.binaryString); }
    approximateByteSize() { return 2 * this.binaryString.length; }
    compareTo(t) { return G(this.binaryString, t.binaryString); }
    isEqual(t) { return this.binaryString === t.binaryString; }
};
mt.EMPTY_BYTE_STRING = new mt("");
var Lp = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function ye(r) { if (U(!!r, 39018), typeof r == "string") {
    let t = 0, e = Lp.exec(r);
    if (U(!!e, 46558, { timestamp: r }), e[1]) {
        let i = e[1];
        i = (i + "000000000").substr(0, 9), t = Number(i);
    }
    let n = new Date(r);
    return { seconds: Math.floor(n.getTime() / 1e3), nanos: t };
} return { seconds: at(r.seconds), nanos: at(r.nanos) }; }
function at(r) { return typeof r == "number" ? r : typeof r == "string" ? Number(r) : 0; }
function _e(r) { return typeof r == "string" ? mt.fromBase64String(r) : mt.fromUint8Array(r); }
var Ff = "server_timestamp", Of = "__type__", Mf = "__previous_value__", Lf = "__local_write_time__";
function Oo(r) { var t, e; return ((e = (((t = r?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {})[Of]) === null || e === void 0 ? void 0 : e.stringValue) === Ff; }
function Mo(r) { let t = r.mapValue.fields[Mf]; return Oo(t) ? Mo(t) : t; }
function yi(r) { let t = ye(r.mapValue.fields[Lf].timestampValue); return new ut(t.seconds, t.nanos); }
var nu = class {
    constructor(t, e, n, i, s, a, u, c, h, f) { this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = i, this.ssl = s, this.forceLongPolling = a, this.autoDetectLongPolling = u, this.longPollingOptions = c, this.useFetchStreams = h, this.isUsingEmulator = f; }
}, _i = "(default)", sr = class r {
    constructor(t, e) { this.projectId = t, this.database = e || _i; }
    static empty() { return new r("", ""); }
    get isDefaultDatabase() { return this.database === _i; }
    isEqual(t) { return t instanceof r && t.projectId === this.projectId && t.database === this.database; }
};
var il = "__type__", qf = "__max__", Ne = { mapValue: { fields: { __type__: { stringValue: qf } } } }, sl = "__vector__", or = "value", As = { nullValue: "NULL_VALUE" };
function Ue(r) { return "nullValue" in r ? 0 : "booleanValue" in r ? 1 : "integerValue" in r || "doubleValue" in r ? 2 : "timestampValue" in r ? 3 : "stringValue" in r ? 5 : "bytesValue" in r ? 6 : "referenceValue" in r ? 7 : "geoPointValue" in r ? 8 : "arrayValue" in r ? 9 : "mapValue" in r ? Oo(r) ? 4 : Uf(r) ? 9007199254740991 : Lo(r) ? 10 : 11 : L(28295, { value: r }); }
function se(r, t) { if (r === t)
    return !0; let e = Ue(r); if (e !== Ue(t))
    return !1; switch (e) {
    case 0:
    case 9007199254740991: return !0;
    case 1: return r.booleanValue === t.booleanValue;
    case 4: return yi(r).isEqual(yi(t));
    case 3: return (function (i, s) { if (typeof i.timestampValue == "string" && typeof s.timestampValue == "string" && i.timestampValue.length === s.timestampValue.length)
        return i.timestampValue === s.timestampValue; let a = ye(i.timestampValue), u = ye(s.timestampValue); return a.seconds === u.seconds && a.nanos === u.nanos; })(r, t);
    case 5: return r.stringValue === t.stringValue;
    case 6: return (function (i, s) { return _e(i.bytesValue).isEqual(_e(s.bytesValue)); })(r, t);
    case 7: return r.referenceValue === t.referenceValue;
    case 8: return (function (i, s) { return at(i.geoPointValue.latitude) === at(s.geoPointValue.latitude) && at(i.geoPointValue.longitude) === at(s.geoPointValue.longitude); })(r, t);
    case 2: return (function (i, s) { if ("integerValue" in i && "integerValue" in s)
        return at(i.integerValue) === at(s.integerValue); if ("doubleValue" in i && "doubleValue" in s) {
        let a = at(i.doubleValue), u = at(s.doubleValue);
        return a === u ? di(a) === di(u) : isNaN(a) && isNaN(u);
    } return !1; })(r, t);
    case 9: return Yn(r.arrayValue.values || [], t.arrayValue.values || [], se);
    case 10:
    case 11: return (function (i, s) { let a = i.mapValue.fields || {}, u = s.mapValue.fields || {}; if (sd(a) !== sd(u))
        return !1; for (let c in a)
        if (a.hasOwnProperty(c) && (u[c] === void 0 || !se(a[c], u[c])))
            return !1; return !0; })(r, t);
    default: return L(52216, { left: r });
} }
function wi(r, t) { return (r.values || []).find(e => se(e, t)) !== void 0; }
function Be(r, t) { if (r === t)
    return 0; let e = Ue(r), n = Ue(t); if (e !== n)
    return G(e, n); switch (e) {
    case 0:
    case 9007199254740991: return 0;
    case 1: return G(r.booleanValue, t.booleanValue);
    case 2: return (function (s, a) { let u = at(s.integerValue || s.doubleValue), c = at(a.integerValue || a.doubleValue); return u < c ? -1 : u > c ? 1 : u === c ? 0 : isNaN(u) ? isNaN(c) ? 0 : -1 : 1; })(r, t);
    case 3: return od(r.timestampValue, t.timestampValue);
    case 4: return od(yi(r), yi(t));
    case 5: return $a(r.stringValue, t.stringValue);
    case 6: return (function (s, a) { let u = _e(s), c = _e(a); return u.compareTo(c); })(r.bytesValue, t.bytesValue);
    case 7: return (function (s, a) { let u = s.split("/"), c = a.split("/"); for (let h = 0; h < u.length && h < c.length; h++) {
        let f = G(u[h], c[h]);
        if (f !== 0)
            return f;
    } return G(u.length, c.length); })(r.referenceValue, t.referenceValue);
    case 8: return (function (s, a) { let u = G(at(s.latitude), at(a.latitude)); return u !== 0 ? u : G(at(s.longitude), at(a.longitude)); })(r.geoPointValue, t.geoPointValue);
    case 9: return ad(r.arrayValue, t.arrayValue);
    case 10: return (function (s, a) { var u, c, h, f; let m = s.fields || {}, p = a.fields || {}, A = (u = m[or]) === null || u === void 0 ? void 0 : u.arrayValue, C = (c = p[or]) === null || c === void 0 ? void 0 : c.arrayValue, D = G(((h = A?.values) === null || h === void 0 ? void 0 : h.length) || 0, ((f = C?.values) === null || f === void 0 ? void 0 : f.length) || 0); return D !== 0 ? D : ad(A, C); })(r.mapValue, t.mapValue);
    case 11: return (function (s, a) { if (s === Ne.mapValue && a === Ne.mapValue)
        return 0; if (s === Ne.mapValue)
        return 1; if (a === Ne.mapValue)
        return -1; let u = s.fields || {}, c = Object.keys(u), h = a.fields || {}, f = Object.keys(h); c.sort(), f.sort(); for (let m = 0; m < c.length && m < f.length; ++m) {
        let p = $a(c[m], f[m]);
        if (p !== 0)
            return p;
        let A = Be(u[c[m]], h[f[m]]);
        if (A !== 0)
            return A;
    } return G(c.length, f.length); })(r.mapValue, t.mapValue);
    default: throw L(23264, { le: e });
} }
function od(r, t) { if (typeof r == "string" && typeof t == "string" && r.length === t.length)
    return G(r, t); let e = ye(r), n = ye(t), i = G(e.seconds, n.seconds); return i !== 0 ? i : G(e.nanos, n.nanos); }
function ad(r, t) { let e = r.values || [], n = t.values || []; for (let i = 0; i < e.length && i < n.length; ++i) {
    let s = Be(e[i], n[i]);
    if (s)
        return s;
} return G(e.length, n.length); }
function ar(r) { return ru(r); }
function ru(r) { return "nullValue" in r ? "null" : "booleanValue" in r ? "" + r.booleanValue : "integerValue" in r ? "" + r.integerValue : "doubleValue" in r ? "" + r.doubleValue : "timestampValue" in r ? (function (e) { let n = ye(e); return `time(${n.seconds},${n.nanos})`; })(r.timestampValue) : "stringValue" in r ? r.stringValue : "bytesValue" in r ? (function (e) { return _e(e).toBase64(); })(r.bytesValue) : "referenceValue" in r ? (function (e) { return M.fromName(e).toString(); })(r.referenceValue) : "geoPointValue" in r ? (function (e) { return `geo(${e.latitude},${e.longitude})`; })(r.geoPointValue) : "arrayValue" in r ? (function (e) { let n = "[", i = !0; for (let s of e.values || [])
    i ? i = !1 : n += ",", n += ru(s); return n + "]"; })(r.arrayValue) : "mapValue" in r ? (function (e) { let n = Object.keys(e.fields || {}).sort(), i = "{", s = !0; for (let a of n)
    s ? s = !1 : i += ",", i += `${a}:${ru(e.fields[a])}`; return i + "}"; })(r.mapValue) : L(61005, { value: r }); }
function bs(r) { switch (Ue(r)) {
    case 0:
    case 1: return 4;
    case 2: return 8;
    case 3:
    case 8: return 16;
    case 4:
        let t = Mo(r);
        return t ? 16 + bs(t) : 16;
    case 5: return 2 * r.stringValue.length;
    case 6: return _e(r.bytesValue).approximateByteSize();
    case 7: return r.referenceValue.length;
    case 9: return (function (n) { return (n.values || []).reduce((i, s) => i + bs(s), 0); })(r.arrayValue);
    case 10:
    case 11: return (function (n) { let i = 0; return Xe(n.fields, (s, a) => { i += s.length + bs(a); }), i; })(r.mapValue);
    default: throw L(13486, { value: r });
} }
function gn(r, t) { return { referenceValue: `projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}` }; }
function iu(r) { return !!r && "integerValue" in r; }
function vi(r) { return !!r && "arrayValue" in r; }
function ud(r) { return !!r && "nullValue" in r; }
function cd(r) { return !!r && "doubleValue" in r && isNaN(Number(r.doubleValue)); }
function Ss(r) { return !!r && "mapValue" in r; }
function Lo(r) { var t, e; return ((e = (((t = r?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {})[il]) === null || e === void 0 ? void 0 : e.stringValue) === sl; }
function si(r) { if (r.geoPointValue)
    return { geoPointValue: Object.assign({}, r.geoPointValue) }; if (r.timestampValue && typeof r.timestampValue == "object")
    return { timestampValue: Object.assign({}, r.timestampValue) }; if (r.mapValue) {
    let t = { mapValue: { fields: {} } };
    return Xe(r.mapValue.fields, (e, n) => t.mapValue.fields[e] = si(n)), t;
} if (r.arrayValue) {
    let t = { arrayValue: { values: [] } };
    for (let e = 0; e < (r.arrayValue.values || []).length; ++e)
        t.arrayValue.values[e] = si(r.arrayValue.values[e]);
    return t;
} return Object.assign({}, r); }
function Uf(r) { return (((r.mapValue || {}).fields || {}).__type__ || {}).stringValue === qf; }
var Bf = { mapValue: { fields: { [il]: { stringValue: sl }, [or]: { arrayValue: {} } } } };
function qp(r) { return "nullValue" in r ? As : "booleanValue" in r ? { booleanValue: !1 } : "integerValue" in r || "doubleValue" in r ? { doubleValue: NaN } : "timestampValue" in r ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } } : "stringValue" in r ? { stringValue: "" } : "bytesValue" in r ? { bytesValue: "" } : "referenceValue" in r ? gn(sr.empty(), M.empty()) : "geoPointValue" in r ? { geoPointValue: { latitude: -90, longitude: -180 } } : "arrayValue" in r ? { arrayValue: {} } : "mapValue" in r ? Lo(r) ? Bf : { mapValue: {} } : L(35942, { value: r }); }
function Up(r) { return "nullValue" in r ? { booleanValue: !1 } : "booleanValue" in r ? { doubleValue: NaN } : "integerValue" in r || "doubleValue" in r ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } } : "timestampValue" in r ? { stringValue: "" } : "stringValue" in r ? { bytesValue: "" } : "bytesValue" in r ? gn(sr.empty(), M.empty()) : "referenceValue" in r ? { geoPointValue: { latitude: -90, longitude: -180 } } : "geoPointValue" in r ? { arrayValue: {} } : "arrayValue" in r ? Bf : "mapValue" in r ? Lo(r) ? { mapValue: {} } : Ne : L(61959, { value: r }); }
function ld(r, t) { let e = Be(r.value, t.value); return e !== 0 ? e : r.inclusive && !t.inclusive ? -1 : !r.inclusive && t.inclusive ? 1 : 0; }
function hd(r, t) { let e = Be(r.value, t.value); return e !== 0 ? e : r.inclusive && !t.inclusive ? 1 : !r.inclusive && t.inclusive ? -1 : 0; }
var xt = class r {
    constructor(t) { this.value = t; }
    static empty() { return new r({ mapValue: {} }); }
    field(t) { if (t.isEmpty())
        return this.value; {
        let e = this.value;
        for (let n = 0; n < t.length - 1; ++n)
            if (e = (e.mapValue.fields || {})[t.get(n)], !Ss(e))
                return null;
        return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
    } }
    set(t, e) { this.getFieldsMap(t.popLast())[t.lastSegment()] = si(e); }
    setAll(t) { let e = Tt.emptyPath(), n = {}, i = []; t.forEach((a, u) => { if (!e.isImmediateParentOf(u)) {
        let c = this.getFieldsMap(e);
        this.applyChanges(c, n, i), n = {}, i = [], e = u.popLast();
    } a ? n[u.lastSegment()] = si(a) : i.push(u.lastSegment()); }); let s = this.getFieldsMap(e); this.applyChanges(s, n, i); }
    delete(t) { let e = this.field(t.popLast()); Ss(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()]; }
    isEqual(t) { return se(this.value, t.value); }
    getFieldsMap(t) { let e = this.value; e.mapValue.fields || (e.mapValue = { fields: {} }); for (let n = 0; n < t.length; ++n) {
        let i = e.mapValue.fields[t.get(n)];
        Ss(i) && i.mapValue.fields || (i = { mapValue: { fields: {} } }, e.mapValue.fields[t.get(n)] = i), e = i;
    } return e.mapValue.fields; }
    applyChanges(t, e, n) { Xe(e, (i, s) => t[i] = s); for (let i of n)
        delete t[i]; }
    clone() { return new r(si(this.value)); }
};
function jf(r) { let t = []; return Xe(r.fields, (e, n) => { let i = new Tt([e]); if (Ss(n)) {
    let s = jf(n.mapValue).fields;
    if (s.length === 0)
        t.push(i);
    else
        for (let a of s)
            t.push(i.child(a));
}
else
    t.push(i); }), new jt(t); }
var It = class r {
    constructor(t, e, n, i, s, a, u) { this.key = t, this.documentType = e, this.version = n, this.readTime = i, this.createTime = s, this.data = a, this.documentState = u; }
    static newInvalidDocument(t) { return new r(t, 0, z.min(), z.min(), z.min(), xt.empty(), 0); }
    static newFoundDocument(t, e, n, i) { return new r(t, 1, e, z.min(), n, i, 0); }
    static newNoDocument(t, e) { return new r(t, 2, e, z.min(), z.min(), xt.empty(), 0); }
    static newUnknownDocument(t, e) { return new r(t, 3, e, z.min(), z.min(), xt.empty(), 2); }
    convertToFoundDocument(t, e) { return !this.createTime.isEqual(z.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = t), this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this; }
    convertToNoDocument(t) { return this.version = t, this.documentType = 2, this.data = xt.empty(), this.documentState = 0, this; }
    convertToUnknownDocument(t) { return this.version = t, this.documentType = 3, this.data = xt.empty(), this.documentState = 2, this; }
    setHasCommittedMutations() { return this.documentState = 2, this; }
    setHasLocalMutations() { return this.documentState = 1, this.version = z.min(), this; }
    setReadTime(t) { return this.readTime = t, this; }
    get hasLocalMutations() { return this.documentState === 1; }
    get hasCommittedMutations() { return this.documentState === 2; }
    get hasPendingWrites() { return this.hasLocalMutations || this.hasCommittedMutations; }
    isValidDocument() { return this.documentType !== 0; }
    isFoundDocument() { return this.documentType === 1; }
    isNoDocument() { return this.documentType === 2; }
    isUnknownDocument() { return this.documentType === 3; }
    isEqual(t) { return t instanceof r && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data); }
    mutableCopy() { return new r(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState); }
    toString() { return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`; }
};
var oe = class {
    constructor(t, e) { this.position = t, this.inclusive = e; }
};
function dd(r, t, e) { let n = 0; for (let i = 0; i < r.position.length; i++) {
    let s = t[i], a = r.position[i];
    if (s.field.isKeyField() ? n = M.comparator(M.fromName(a.referenceValue), e.key) : n = Be(a, e.data.field(s.field)), s.dir === "desc" && (n *= -1), n !== 0)
        break;
} return n; }
function fd(r, t) { if (r === null)
    return t === null; if (t === null || r.inclusive !== t.inclusive || r.position.length !== t.position.length)
    return !1; for (let e = 0; e < r.position.length; e++)
    if (!se(r.position[e], t.position[e]))
        return !1; return !0; }
var pn = class {
    constructor(t, e = "asc") { this.field = t, this.dir = e; }
};
function Bp(r, t) { return r.dir === t.dir && r.field.isEqual(t.field); }
var qs = class {
}, X = class r extends qs {
    constructor(t, e, n) { super(), this.field = t, this.op = e, this.value = n; }
    static create(t, e, n) { return t.isKeyField() ? e === "in" || e === "not-in" ? this.createKeyFieldInFilter(t, e, n) : new au(t, e, n) : e === "array-contains" ? new lu(t, n) : e === "in" ? new Us(t, n) : e === "not-in" ? new hu(t, n) : e === "array-contains-any" ? new du(t, n) : new r(t, e, n); }
    static createKeyFieldInFilter(t, e, n) { return e === "in" ? new uu(t, n) : new cu(t, n); }
    matches(t) { let e = t.data.field(this.field); return this.op === "!=" ? e !== null && e.nullValue === void 0 && this.matchesComparison(Be(e, this.value)) : e !== null && Ue(this.value) === Ue(e) && this.matchesComparison(Be(e, this.value)); }
    matchesComparison(t) { switch (this.op) {
        case "<": return t < 0;
        case "<=": return t <= 0;
        case "==": return t === 0;
        case "!=": return t !== 0;
        case ">": return t > 0;
        case ">=": return t >= 0;
        default: return L(47266, { operator: this.op });
    } }
    isInequality() { return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0; }
    getFlattenedFilters() { return [this]; }
    getFilters() { return [this]; }
}, tt = class r extends qs {
    constructor(t, e) { super(), this.filters = t, this.op = e, this.he = null; }
    static create(t, e) { return new r(t, e); }
    matches(t) { return ur(this) ? this.filters.find(e => !e.matches(t)) === void 0 : this.filters.find(e => e.matches(t)) !== void 0; }
    getFlattenedFilters() { return this.he !== null || (this.he = this.filters.reduce((t, e) => t.concat(e.getFlattenedFilters()), [])), this.he; }
    getFilters() { return Object.assign([], this.filters); }
};
function ur(r) { return r.op === "and"; }
function su(r) { return r.op === "or"; }
function ol(r) { return zf(r) && ur(r); }
function zf(r) { for (let t of r.filters)
    if (t instanceof tt)
        return !1; return !0; }
function ou(r) { if (r instanceof X)
    return r.field.canonicalString() + r.op.toString() + ar(r.value); if (ol(r))
    return r.filters.map(t => ou(t)).join(","); {
    let t = r.filters.map(e => ou(e)).join(",");
    return `${r.op}(${t})`;
} }
function Gf(r, t) { return r instanceof X ? (function (n, i) { return i instanceof X && n.op === i.op && n.field.isEqual(i.field) && se(n.value, i.value); })(r, t) : r instanceof tt ? (function (n, i) { return i instanceof tt && n.op === i.op && n.filters.length === i.filters.length ? n.filters.reduce((s, a, u) => s && Gf(a, i.filters[u]), !0) : !1; })(r, t) : void L(19439); }
function Kf(r, t) { let e = r.filters.concat(t); return tt.create(e, r.op); }
function $f(r) { return r instanceof X ? (function (e) { return `${e.field.canonicalString()} ${e.op} ${ar(e.value)}`; })(r) : r instanceof tt ? (function (e) { return e.op.toString() + " {" + e.getFilters().map($f).join(" ,") + "}"; })(r) : "Filter"; }
var au = class extends X {
    constructor(t, e, n) { super(t, e, n), this.key = M.fromName(n.referenceValue); }
    matches(t) { let e = M.comparator(t.key, this.key); return this.matchesComparison(e); }
}, uu = class extends X {
    constructor(t, e) { super(t, "in", e), this.keys = Qf("in", e); }
    matches(t) { return this.keys.some(e => e.isEqual(t.key)); }
}, cu = class extends X {
    constructor(t, e) { super(t, "not-in", e), this.keys = Qf("not-in", e); }
    matches(t) { return !this.keys.some(e => e.isEqual(t.key)); }
};
function Qf(r, t) { var e; return (((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []).map(n => M.fromName(n.referenceValue)); }
var lu = class extends X {
    constructor(t, e) { super(t, "array-contains", e); }
    matches(t) { let e = t.data.field(this.field); return vi(e) && wi(e.arrayValue, this.value); }
}, Us = class extends X {
    constructor(t, e) { super(t, "in", e); }
    matches(t) { let e = t.data.field(this.field); return e !== null && wi(this.value.arrayValue, e); }
}, hu = class extends X {
    constructor(t, e) { super(t, "not-in", e); }
    matches(t) { if (wi(this.value.arrayValue, { nullValue: "NULL_VALUE" }))
        return !1; let e = t.data.field(this.field); return e !== null && e.nullValue === void 0 && !wi(this.value.arrayValue, e); }
}, du = class extends X {
    constructor(t, e) { super(t, "array-contains-any", e); }
    matches(t) { let e = t.data.field(this.field); return !(!vi(e) || !e.arrayValue.values) && e.arrayValue.values.some(n => wi(this.value.arrayValue, n)); }
};
var fu = class {
    constructor(t, e = null, n = [], i = [], s = null, a = null, u = null) { this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = i, this.limit = s, this.startAt = a, this.endAt = u, this.Pe = null; }
};
function mu(r, t = null, e = [], n = [], i = null, s = null, a = null) { return new fu(r, t, e, n, i, s, a); }
function yn(r) { let t = F(r); if (t.Pe === null) {
    let e = t.path.canonicalString();
    t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map(n => ou(n)).join(","), e += "|ob:", e += t.orderBy.map(n => (function (s) { return s.field.canonicalString() + s.dir; })(n)).join(","), zi(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map(n => ar(n)).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map(n => ar(n)).join(",")), t.Pe = e;
} return t.Pe; }
function Ki(r, t) { if (r.limit !== t.limit || r.orderBy.length !== t.orderBy.length)
    return !1; for (let e = 0; e < r.orderBy.length; e++)
    if (!Bp(r.orderBy[e], t.orderBy[e]))
        return !1; if (r.filters.length !== t.filters.length)
    return !1; for (let e = 0; e < r.filters.length; e++)
    if (!Gf(r.filters[e], t.filters[e]))
        return !1; return r.collectionGroup === t.collectionGroup && !!r.path.isEqual(t.path) && !!fd(r.startAt, t.startAt) && fd(r.endAt, t.endAt); }
function Bs(r) { return M.isDocumentKey(r.path) && r.collectionGroup === null && r.filters.length === 0; }
function js(r, t) { return r.filters.filter(e => e instanceof X && e.field.isEqual(t)); }
function md(r, t, e) { let n = As, i = !0; for (let s of js(r, t)) {
    let a = As, u = !0;
    switch (s.op) {
        case "<":
        case "<=":
            a = qp(s.value);
            break;
        case "==":
        case "in":
        case ">=":
            a = s.value;
            break;
        case ">":
            a = s.value, u = !1;
            break;
        case "!=":
        case "not-in": a = As;
    }
    ld({ value: n, inclusive: i }, { value: a, inclusive: u }) < 0 && (n = a, i = u);
} if (e !== null) {
    for (let s = 0; s < r.orderBy.length; ++s)
        if (r.orderBy[s].field.isEqual(t)) {
            let a = e.position[s];
            ld({ value: n, inclusive: i }, { value: a, inclusive: e.inclusive }) < 0 && (n = a, i = e.inclusive);
            break;
        }
} return { value: n, inclusive: i }; }
function gd(r, t, e) { let n = Ne, i = !0; for (let s of js(r, t)) {
    let a = Ne, u = !0;
    switch (s.op) {
        case ">=":
        case ">":
            a = Up(s.value), u = !1;
            break;
        case "==":
        case "in":
        case "<=":
            a = s.value;
            break;
        case "<":
            a = s.value, u = !1;
            break;
        case "!=":
        case "not-in": a = Ne;
    }
    hd({ value: n, inclusive: i }, { value: a, inclusive: u }) > 0 && (n = a, i = u);
} if (e !== null) {
    for (let s = 0; s < r.orderBy.length; ++s)
        if (r.orderBy[s].field.isEqual(t)) {
            let a = e.position[s];
            hd({ value: n, inclusive: i }, { value: a, inclusive: e.inclusive }) > 0 && (n = a, i = e.inclusive);
            break;
        }
} return { value: n, inclusive: i }; }
var Wt = class {
    constructor(t, e = null, n = [], i = [], s = null, a = "F", u = null, c = null) { this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = i, this.limit = s, this.limitType = a, this.startAt = u, this.endAt = c, this.Te = null, this.Ie = null, this.de = null, this.startAt, this.endAt; }
};
function Wf(r, t, e, n, i, s, a, u) { return new Wt(r, t, e, n, i, s, a, u); }
function Ir(r) { return new Wt(r); }
function pd(r) { return r.filters.length === 0 && r.limit === null && r.startAt == null && r.endAt == null && (r.explicitOrderBy.length === 0 || r.explicitOrderBy.length === 1 && r.explicitOrderBy[0].field.isKeyField()); }
function al(r) { return r.collectionGroup !== null; }
function Wn(r) { let t = F(r); if (t.Te === null) {
    t.Te = [];
    let e = new Set;
    for (let s of t.explicitOrderBy)
        t.Te.push(s), e.add(s.field.canonicalString());
    let n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
    (function (a) { let u = new nt(Tt.comparator); return a.filters.forEach(c => { c.getFlattenedFilters().forEach(h => { h.isInequality() && (u = u.add(h.field)); }); }), u; })(t).forEach(s => { e.has(s.canonicalString()) || s.isKeyField() || t.Te.push(new pn(s, n)); }), e.has(Tt.keyField().canonicalString()) || t.Te.push(new pn(Tt.keyField(), n));
} return t.Te; }
function Nt(r) { let t = F(r); return t.Ie || (t.Ie = Xf(t, Wn(r))), t.Ie; }
function Hf(r) { let t = F(r); return t.de || (t.de = Xf(t, r.explicitOrderBy)), t.de; }
function Xf(r, t) { if (r.limitType === "F")
    return mu(r.path, r.collectionGroup, t, r.filters, r.limit, r.startAt, r.endAt); {
    t = t.map(i => { let s = i.dir === "desc" ? "asc" : "desc"; return new pn(i.field, s); });
    let e = r.endAt ? new oe(r.endAt.position, r.endAt.inclusive) : null, n = r.startAt ? new oe(r.startAt.position, r.startAt.inclusive) : null;
    return mu(r.path, r.collectionGroup, t, r.filters, r.limit, e, n);
} }
function gu(r, t) { let e = r.filters.concat([t]); return new Wt(r.path, r.collectionGroup, r.explicitOrderBy.slice(), e, r.limit, r.limitType, r.startAt, r.endAt); }
function zs(r, t, e) { return new Wt(r.path, r.collectionGroup, r.explicitOrderBy.slice(), r.filters.slice(), t, e, r.startAt, r.endAt); }
function $i(r, t) { return Ki(Nt(r), Nt(t)) && r.limitType === t.limitType; }
function Jf(r) { return `${yn(Nt(r))}|lt:${r.limitType}`; }
function Gn(r) { return `Query(target=${(function (e) { let n = e.path.canonicalString(); return e.collectionGroup !== null && (n += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (n += `, filters: [${e.filters.map(i => $f(i)).join(", ")}]`), zi(e.limit) || (n += ", limit: " + e.limit), e.orderBy.length > 0 && (n += `, orderBy: [${e.orderBy.map(i => (function (a) { return `${a.field.canonicalString()} (${a.dir})`; })(i)).join(", ")}]`), e.startAt && (n += ", startAt: ", n += e.startAt.inclusive ? "b:" : "a:", n += e.startAt.position.map(i => ar(i)).join(",")), e.endAt && (n += ", endAt: ", n += e.endAt.inclusive ? "a:" : "b:", n += e.endAt.position.map(i => ar(i)).join(",")), `Target(${n})`; })(Nt(r))}; limitType=${r.limitType})`; }
function Qi(r, t) { return t.isFoundDocument() && (function (n, i) { let s = i.key.path; return n.collectionGroup !== null ? i.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(s) : M.isDocumentKey(n.path) ? n.path.isEqual(s) : n.path.isImmediateParentOf(s); })(r, t) && (function (n, i) { for (let s of Wn(n))
    if (!s.field.isKeyField() && i.data.field(s.field) === null)
        return !1; return !0; })(r, t) && (function (n, i) { for (let s of n.filters)
    if (!s.matches(i))
        return !1; return !0; })(r, t) && (function (n, i) { return !(n.startAt && !(function (a, u, c) { let h = dd(a, u, c); return a.inclusive ? h <= 0 : h < 0; })(n.startAt, Wn(n), i) || n.endAt && !(function (a, u, c) { let h = dd(a, u, c); return a.inclusive ? h >= 0 : h > 0; })(n.endAt, Wn(n), i)); })(r, t); }
function Yf(r) { return r.collectionGroup || (r.path.length % 2 == 1 ? r.path.lastSegment() : r.path.get(r.path.length - 2)); }
function Zf(r) { return (t, e) => { let n = !1; for (let i of Wn(r)) {
    let s = jp(i, t, e);
    if (s !== 0)
        return s;
    n = n || i.field.isKeyField();
} return 0; }; }
function jp(r, t, e) { let n = r.field.isKeyField() ? M.comparator(t.key, e.key) : (function (s, a, u) { let c = a.data.field(s), h = u.data.field(s); return c !== null && h !== null ? Be(c, h) : L(42886); })(r.field, t, e); switch (r.dir) {
    case "asc": return n;
    case "desc": return -1 * n;
    default: return L(19790, { direction: r.dir });
} }
var Ht = class {
    constructor(t, e) { this.mapKeyFn = t, this.equalsFn = e, this.inner = {}, this.innerSize = 0; }
    get(t) { let e = this.mapKeyFn(t), n = this.inner[e]; if (n !== void 0) {
        for (let [i, s] of n)
            if (this.equalsFn(i, t))
                return s;
    } }
    has(t) { return this.get(t) !== void 0; }
    set(t, e) { let n = this.mapKeyFn(t), i = this.inner[n]; if (i === void 0)
        return this.inner[n] = [[t, e]], void this.innerSize++; for (let s = 0; s < i.length; s++)
        if (this.equalsFn(i[s][0], t))
            return void (i[s] = [t, e]); i.push([t, e]), this.innerSize++; }
    delete(t) { let e = this.mapKeyFn(t), n = this.inner[e]; if (n === void 0)
        return !1; for (let i = 0; i < n.length; i++)
        if (this.equalsFn(n[i][0], t))
            return n.length === 1 ? delete this.inner[e] : n.splice(i, 1), this.innerSize--, !0; return !1; }
    forEach(t) { Xe(this.inner, (e, n) => { for (let [i, s] of n)
        t(i, s); }); }
    isEmpty() { return kf(this.inner); }
    size() { return this.innerSize; }
};
var zp = new ot(M.comparator);
function Lt() { return zp; }
var tm = new ot(M.comparator);
function ti(...r) { let t = tm; for (let e of r)
    t = t.insert(e.key, e); return t; }
function em(r) { let t = tm; return r.forEach((e, n) => t = t.insert(e, n.overlayedDocument)), t; }
function te() { return oi(); }
function nm() { return oi(); }
function oi() { return new Ht(r => r.toString(), (r, t) => r.isEqual(t)); }
var Gp = new ot(M.comparator), Kp = new nt(M.comparator);
function K(...r) { let t = Kp; for (let e of r)
    t = t.add(e); return t; }
var $p = new nt(G);
function ul() { return $p; }
function cl(r, t) { if (r.useProto3Json) {
    if (isNaN(t))
        return { doubleValue: "NaN" };
    if (t === 1 / 0)
        return { doubleValue: "Infinity" };
    if (t === -1 / 0)
        return { doubleValue: "-Infinity" };
} return { doubleValue: di(t) ? "-0" : t }; }
function rm(r) { return { integerValue: "" + r }; }
function im(r, t) { return If(t) ? rm(t) : cl(r, t); }
var cr = class {
    constructor() { this._ = void 0; }
};
function Qp(r, t, e) { return r instanceof je ? (function (i, s) { let a = { fields: { [Of]: { stringValue: Ff }, [Lf]: { timestampValue: { seconds: i.seconds, nanos: i.nanoseconds } } } }; return s && Oo(s) && (s = Mo(s)), s && (a.fields[Mf] = s), { mapValue: a }; })(e, t) : r instanceof we ? om(r, t) : r instanceof ve ? am(r, t) : (function (i, s) { let a = sm(i, s), u = yd(a) + yd(i.Ee); return iu(a) && iu(i.Ee) ? rm(u) : cl(i.serializer, u); })(r, t); }
function Wp(r, t, e) { return r instanceof we ? om(r, t) : r instanceof ve ? am(r, t) : e; }
function sm(r, t) { return r instanceof ze ? (function (n) { return iu(n) || (function (s) { return !!s && "doubleValue" in s; })(n); })(t) ? t : { integerValue: 0 } : null; }
var je = class extends cr {
}, we = class extends cr {
    constructor(t) { super(), this.elements = t; }
};
function om(r, t) { let e = um(t); for (let n of r.elements)
    e.some(i => se(i, n)) || e.push(n); return { arrayValue: { values: e } }; }
var ve = class extends cr {
    constructor(t) { super(), this.elements = t; }
};
function am(r, t) { let e = um(t); for (let n of r.elements)
    e = e.filter(i => !se(i, n)); return { arrayValue: { values: e } }; }
var ze = class extends cr {
    constructor(t, e) { super(), this.serializer = t, this.Ee = e; }
};
function yd(r) { return at(r.integerValue || r.doubleValue); }
function um(r) { return vi(r) && r.arrayValue.values ? r.arrayValue.values.slice() : []; }
var _n = class {
    constructor(t, e) { this.field = t, this.transform = e; }
};
function Hp(r, t) { return r.field.isEqual(t.field) && (function (n, i) { return n instanceof we && i instanceof we || n instanceof ve && i instanceof ve ? Yn(n.elements, i.elements, se) : n instanceof ze && i instanceof ze ? se(n.Ee, i.Ee) : n instanceof je && i instanceof je; })(r.transform, t.transform); }
var pu = class {
    constructor(t, e) { this.version = t, this.transformResults = e; }
}, ht = class r {
    constructor(t, e) { this.updateTime = t, this.exists = e; }
    static none() { return new r; }
    static exists(t) { return new r(void 0, t); }
    static updateTime(t) { return new r(t); }
    get isNone() { return this.updateTime === void 0 && this.exists === void 0; }
    isEqual(t) { return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime); }
};
function Rs(r, t) { return r.updateTime !== void 0 ? t.isFoundDocument() && t.version.isEqual(r.updateTime) : r.exists === void 0 || r.exists === t.isFoundDocument(); }
var lr = class {
};
function cm(r, t) { if (!r.hasLocalMutations || t && t.fields.length === 0)
    return null; if (t === null)
    return r.isNoDocument() ? new Ke(r.key, ht.none()) : new Ge(r.key, r.data, ht.none()); {
    let e = r.data, n = xt.empty(), i = new nt(Tt.comparator);
    for (let s of t.fields)
        if (!i.has(s)) {
            let a = e.field(s);
            a === null && s.length > 1 && (s = s.popLast(), a = e.field(s)), a === null ? n.delete(s) : n.set(s, a), i = i.add(s);
        }
    return new Xt(r.key, n, new jt(i.toArray()), ht.none());
} }
function Xp(r, t, e) { r instanceof Ge ? (function (i, s, a) { let u = i.value.clone(), c = wd(i.fieldTransforms, s, a.transformResults); u.setAll(c), s.convertToFoundDocument(a.version, u).setHasCommittedMutations(); })(r, t, e) : r instanceof Xt ? (function (i, s, a) { if (!Rs(i.precondition, s))
    return void s.convertToUnknownDocument(a.version); let u = wd(i.fieldTransforms, s, a.transformResults), c = s.data; c.setAll(lm(i)), c.setAll(u), s.convertToFoundDocument(a.version, c).setHasCommittedMutations(); })(r, t, e) : (function (i, s, a) { s.convertToNoDocument(a.version).setHasCommittedMutations(); })(0, t, e); }
function ai(r, t, e, n) { return r instanceof Ge ? (function (s, a, u, c) { if (!Rs(s.precondition, a))
    return u; let h = s.value.clone(), f = vd(s.fieldTransforms, c, a); return h.setAll(f), a.convertToFoundDocument(a.version, h).setHasLocalMutations(), null; })(r, t, e, n) : r instanceof Xt ? (function (s, a, u, c) { if (!Rs(s.precondition, a))
    return u; let h = vd(s.fieldTransforms, c, a), f = a.data; return f.setAll(lm(s)), f.setAll(h), a.convertToFoundDocument(a.version, f).setHasLocalMutations(), u === null ? null : u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m => m.field)); })(r, t, e, n) : (function (s, a, u) { return Rs(s.precondition, a) ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null) : u; })(r, t, e); }
function Jp(r, t) { let e = null; for (let n of r.fieldTransforms) {
    let i = t.data.field(n.field), s = sm(n.transform, i || null);
    s != null && (e === null && (e = xt.empty()), e.set(n.field, s));
} return e || null; }
function _d(r, t) { return r.type === t.type && !!r.key.isEqual(t.key) && !!r.precondition.isEqual(t.precondition) && !!(function (n, i) { return n === void 0 && i === void 0 || !(!n || !i) && Yn(n, i, (s, a) => Hp(s, a)); })(r.fieldTransforms, t.fieldTransforms) && (r.type === 0 ? r.value.isEqual(t.value) : r.type !== 1 || r.data.isEqual(t.data) && r.fieldMask.isEqual(t.fieldMask)); }
var Ge = class extends lr {
    constructor(t, e, n, i = []) { super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = i, this.type = 0; }
    getFieldMask() { return null; }
}, Xt = class extends lr {
    constructor(t, e, n, i, s = []) { super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = i, this.fieldTransforms = s, this.type = 1; }
    getFieldMask() { return this.fieldMask; }
};
function lm(r) { let t = new Map; return r.fieldMask.fields.forEach(e => { if (!e.isEmpty()) {
    let n = r.data.field(e);
    t.set(e, n);
} }), t; }
function wd(r, t, e) { let n = new Map; U(r.length === e.length, 32656, { Ae: e.length, Re: r.length }); for (let i = 0; i < e.length; i++) {
    let s = r[i], a = s.transform, u = t.data.field(s.field);
    n.set(s.field, Wp(a, u, e[i]));
} return n; }
function vd(r, t, e) { let n = new Map; for (let i of r) {
    let s = i.transform, a = e.data.field(i.field);
    n.set(i.field, Qp(s, a, t));
} return n; }
var Ke = class extends lr {
    constructor(t, e) { super(), this.key = t, this.precondition = e, this.type = 2, this.fieldTransforms = []; }
    getFieldMask() { return null; }
}, Ti = class extends lr {
    constructor(t, e) { super(), this.key = t, this.precondition = e, this.type = 3, this.fieldTransforms = []; }
    getFieldMask() { return null; }
};
var Ii = class {
    constructor(t, e, n, i) { this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = i; }
    applyToRemoteDocument(t, e) { let n = e.mutationResults; for (let i = 0; i < this.mutations.length; i++) {
        let s = this.mutations[i];
        s.key.isEqual(t.key) && Xp(s, t, n[i]);
    } }
    applyToLocalView(t, e) { for (let n of this.baseMutations)
        n.key.isEqual(t.key) && (e = ai(n, t, e, this.localWriteTime)); for (let n of this.mutations)
        n.key.isEqual(t.key) && (e = ai(n, t, e, this.localWriteTime)); return e; }
    applyToLocalDocumentSet(t, e) { let n = nm(); return this.mutations.forEach(i => { let s = t.get(i.key), a = s.overlayedDocument, u = this.applyToLocalView(a, s.mutatedFields); u = e.has(i.key) ? null : u; let c = cm(a, u); c !== null && n.set(i.key, c), a.isValidDocument() || a.convertToNoDocument(z.min()); }), n; }
    keys() { return this.mutations.reduce((t, e) => t.add(e.key), K()); }
    isEqual(t) { return this.batchId === t.batchId && Yn(this.mutations, t.mutations, (e, n) => _d(e, n)) && Yn(this.baseMutations, t.baseMutations, (e, n) => _d(e, n)); }
}, yu = class r {
    constructor(t, e, n, i) { this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = i; }
    static from(t, e, n) { U(t.mutations.length === n.length, 58842, { Ve: t.mutations.length, me: n.length }); let i = (function () { return Gp; })(), s = t.mutations; for (let a = 0; a < s.length; a++)
        i = i.insert(s[a].key, n[a].version); return new r(t, e, n, i); }
};
var Ei = class {
    constructor(t, e) { this.largestBatchId = t, this.mutation = e; }
    getKey() { return this.mutation.key; }
    isEqual(t) { return t !== null && this.mutation === t.mutation; }
    toString() {
        return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
    }
};
var Gs = class {
    constructor(t, e, n) { this.alias = t, this.aggregateType = e, this.fieldPath = n; }
};
var _u = class {
    constructor(t, e) { this.count = t, this.unchangedNames = e; }
};
var pt, J;
function hm(r) { switch (r) {
    case b.OK: return L(64938);
    case b.CANCELLED:
    case b.UNKNOWN:
    case b.DEADLINE_EXCEEDED:
    case b.RESOURCE_EXHAUSTED:
    case b.INTERNAL:
    case b.UNAVAILABLE:
    case b.UNAUTHENTICATED: return !1;
    case b.INVALID_ARGUMENT:
    case b.NOT_FOUND:
    case b.ALREADY_EXISTS:
    case b.PERMISSION_DENIED:
    case b.FAILED_PRECONDITION:
    case b.ABORTED:
    case b.OUT_OF_RANGE:
    case b.UNIMPLEMENTED:
    case b.DATA_LOSS: return !0;
    default: return L(15467, { code: r });
} }
function dm(r) { if (r === void 0)
    return dt("GRPC error has no .code"), b.UNKNOWN; switch (r) {
    case pt.OK: return b.OK;
    case pt.CANCELLED: return b.CANCELLED;
    case pt.UNKNOWN: return b.UNKNOWN;
    case pt.DEADLINE_EXCEEDED: return b.DEADLINE_EXCEEDED;
    case pt.RESOURCE_EXHAUSTED: return b.RESOURCE_EXHAUSTED;
    case pt.INTERNAL: return b.INTERNAL;
    case pt.UNAVAILABLE: return b.UNAVAILABLE;
    case pt.UNAUTHENTICATED: return b.UNAUTHENTICATED;
    case pt.INVALID_ARGUMENT: return b.INVALID_ARGUMENT;
    case pt.NOT_FOUND: return b.NOT_FOUND;
    case pt.ALREADY_EXISTS: return b.ALREADY_EXISTS;
    case pt.PERMISSION_DENIED: return b.PERMISSION_DENIED;
    case pt.FAILED_PRECONDITION: return b.FAILED_PRECONDITION;
    case pt.ABORTED: return b.ABORTED;
    case pt.OUT_OF_RANGE: return b.OUT_OF_RANGE;
    case pt.UNIMPLEMENTED: return b.UNIMPLEMENTED;
    case pt.DATA_LOSS: return b.DATA_LOSS;
    default: return L(39323, { code: r });
} }
(J = pt || (pt = {}))[J.OK = 0] = "OK", J[J.CANCELLED = 1] = "CANCELLED", J[J.UNKNOWN = 2] = "UNKNOWN", J[J.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", J[J.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", J[J.NOT_FOUND = 5] = "NOT_FOUND", J[J.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", J[J.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", J[J.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", J[J.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", J[J.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", J[J.ABORTED = 10] = "ABORTED", J[J.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", J[J.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", J[J.INTERNAL = 13] = "INTERNAL", J[J.UNAVAILABLE = 14] = "UNAVAILABLE", J[J.DATA_LOSS = 15] = "DATA_LOSS";
var Ks = null;
var Yp = new he([4294967295, 4294967295], 0);
function Td(r) { let t = Xc().encode(r), e = new Ra; return e.update(t), new Uint8Array(e.digest()); }
function Id(r) { let t = new DataView(r.buffer), e = t.getUint32(0, !0), n = t.getUint32(4, !0), i = t.getUint32(8, !0), s = t.getUint32(12, !0); return [new he([e, n], 0), new he([i, s], 0)]; }
var wu = class r {
    constructor(t, e, n) { if (this.bitmap = t, this.padding = e, this.hashCount = n, e < 0 || e >= 8)
        throw new dn(`Invalid padding: ${e}`); if (n < 0)
        throw new dn(`Invalid hash count: ${n}`); if (t.length > 0 && this.hashCount === 0)
        throw new dn(`Invalid hash count: ${n}`); if (t.length === 0 && e !== 0)
        throw new dn(`Invalid padding when bitmap length is 0: ${e}`); this.fe = 8 * t.length - e, this.ge = he.fromNumber(this.fe); }
    pe(t, e, n) { let i = t.add(e.multiply(he.fromNumber(n))); return i.compare(Yp) === 1 && (i = new he([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.ge).toNumber(); }
    ye(t) { return !!(this.bitmap[Math.floor(t / 8)] & 1 << t % 8); }
    mightContain(t) { if (this.fe === 0)
        return !1; let e = Td(t), [n, i] = Id(e); for (let s = 0; s < this.hashCount; s++) {
        let a = this.pe(n, i, s);
        if (!this.ye(a))
            return !1;
    } return !0; }
    static create(t, e, n) { let i = t % 8 == 0 ? 0 : 8 - t % 8, s = new Uint8Array(Math.ceil(t / 8)), a = new r(s, i, e); return n.forEach(u => a.insert(u)), a; }
    insert(t) { if (this.fe === 0)
        return; let e = Td(t), [n, i] = Id(e); for (let s = 0; s < this.hashCount; s++) {
        let a = this.pe(n, i, s);
        this.we(a);
    } }
    we(t) { let e = Math.floor(t / 8), n = t % 8; this.bitmap[e] |= 1 << n; }
}, dn = class extends Error {
    constructor() { super(...arguments), this.name = "BloomFilterError"; }
};
var Ai = class r {
    constructor(t, e, n, i, s) { this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = i, this.resolvedLimboDocuments = s; }
    static createSynthesizedRemoteEventForCurrentChange(t, e, n) { let i = new Map; return i.set(t, bi.createSynthesizedTargetChangeForCurrentChange(t, e, n)), new r(z.min(), i, new ot(G), Lt(), K()); }
}, bi = class r {
    constructor(t, e, n, i, s) { this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = i, this.removedDocuments = s; }
    static createSynthesizedTargetChangeForCurrentChange(t, e, n) { return new r(n, e, K(), K(), K()); }
};
var Hn = class {
    constructor(t, e, n, i) { this.Se = t, this.removedTargetIds = e, this.key = n, this.be = i; }
}, $s = class {
    constructor(t, e) { this.targetId = t, this.De = e; }
}, Qs = class {
    constructor(t, e, n = mt.EMPTY_BYTE_STRING, i = null) { this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = i; }
}, Ws = class {
    constructor() { this.ve = 0, this.Ce = Ed(), this.Fe = mt.EMPTY_BYTE_STRING, this.Me = !1, this.xe = !0; }
    get current() { return this.Me; }
    get resumeToken() { return this.Fe; }
    get Oe() { return this.ve !== 0; }
    get Ne() { return this.xe; }
    Be(t) { t.approximateByteSize() > 0 && (this.xe = !0, this.Fe = t); }
    Le() { let t = K(), e = K(), n = K(); return this.Ce.forEach((i, s) => { switch (s) {
        case 0:
            t = t.add(i);
            break;
        case 2:
            e = e.add(i);
            break;
        case 1:
            n = n.add(i);
            break;
        default: L(38017, { changeType: s });
    } }), new bi(this.Fe, this.Me, t, e, n); }
    ke() { this.xe = !1, this.Ce = Ed(); }
    qe(t, e) { this.xe = !0, this.Ce = this.Ce.insert(t, e); }
    Qe(t) { this.xe = !0, this.Ce = this.Ce.remove(t); }
    $e() { this.ve += 1; }
    Ue() { this.ve -= 1, U(this.ve >= 0, 3241, { ve: this.ve }); }
    Ke() { this.xe = !0, this.Me = !0; }
}, vu = class {
    constructor(t) { this.We = t, this.Ge = new Map, this.ze = Lt(), this.je = ps(), this.Je = ps(), this.He = new ot(G); }
    Ye(t) { for (let e of t.Se)
        t.be && t.be.isFoundDocument() ? this.Ze(e, t.be) : this.Xe(e, t.key, t.be); for (let e of t.removedTargetIds)
        this.Xe(e, t.key, t.be); }
    et(t) { this.forEachTarget(t, e => { let n = this.tt(e); switch (t.state) {
        case 0:
            this.nt(e) && n.Be(t.resumeToken);
            break;
        case 1:
            n.Ue(), n.Oe || n.ke(), n.Be(t.resumeToken);
            break;
        case 2:
            n.Ue(), n.Oe || this.removeTarget(e);
            break;
        case 3:
            this.nt(e) && (n.Ke(), n.Be(t.resumeToken));
            break;
        case 4:
            this.nt(e) && (this.rt(e), n.Be(t.resumeToken));
            break;
        default: L(56790, { state: t.state });
    } }); }
    forEachTarget(t, e) { t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ge.forEach((n, i) => { this.nt(i) && e(i); }); }
    it(t) { let e = t.targetId, n = t.De.count, i = this.st(e); if (i) {
        let s = i.target;
        if (Bs(s))
            if (n === 0) {
                let a = new M(s.path);
                this.Xe(e, a, It.newNoDocument(a, z.min()));
            }
            else
                U(n === 1, 20013, { expectedCount: n });
        else {
            let a = this.ot(e);
            if (a !== n) {
                let u = this._t(t), c = u ? this.ut(u, t, a) : 1;
                if (c !== 0) {
                    this.rt(e);
                    let h = c === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                    this.He = this.He.insert(e, h);
                }
                Ks?.ct((function (f, m, p, A, C) { var D, N, q, j, B, Q; let Z = { localCacheCount: f, existenceFilterCount: m.count, databaseId: p.database, projectId: p.projectId }, $ = m.unchangedNames; return $ && (Z.bloomFilter = { applied: C === 0, hashCount: (D = $?.hashCount) !== null && D !== void 0 ? D : 0, bitmapLength: (j = (q = (N = $?.bits) === null || N === void 0 ? void 0 : N.bitmap) === null || q === void 0 ? void 0 : q.length) !== null && j !== void 0 ? j : 0, padding: (Q = (B = $?.bits) === null || B === void 0 ? void 0 : B.padding) !== null && Q !== void 0 ? Q : 0, mightContain: v => { var y; return (y = A?.mightContain(v)) !== null && y !== void 0 && y; } }), Z; })(a, t.De, this.We.lt(), u, c));
            }
        }
    } }
    _t(t) { let e = t.De.unchangedNames; if (!e || !e.bits)
        return null; let { bits: { bitmap: n = "", padding: i = 0 }, hashCount: s = 0 } = e, a, u; try {
        a = _e(n).toUint8Array();
    }
    catch (c) {
        if (c instanceof Ls)
            return Ot("Decoding the base64 bloom filter in existence filter failed (" + c.message + "); ignoring the bloom filter and falling back to full re-query."), null;
        throw c;
    } try {
        u = new wu(a, i, s);
    }
    catch (c) {
        return Ot(c instanceof dn ? "BloomFilter error: " : "Applying bloom filter failed: ", c), null;
    } return u.fe === 0 ? null : u; }
    ut(t, e, n) { return e.De.count === n - this.ht(t, e.targetId) ? 0 : 2; }
    ht(t, e) { let n = this.We.getRemoteKeysForTarget(e), i = 0; return n.forEach(s => { let a = this.We.lt(), u = `projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`; t.mightContain(u) || (this.Xe(e, s, null), i++); }), i; }
    Pt(t) { let e = new Map; this.Ge.forEach((s, a) => { let u = this.st(a); if (u) {
        if (s.current && Bs(u.target)) {
            let c = new M(u.target.path);
            this.Tt(c).has(a) || this.It(a, c) || this.Xe(a, c, It.newNoDocument(c, t));
        }
        s.Ne && (e.set(a, s.Le()), s.ke());
    } }); let n = K(); this.Je.forEach((s, a) => { let u = !0; a.forEachWhile(c => { let h = this.st(c); return !h || h.purpose === "TargetPurposeLimboResolution" || (u = !1, !1); }), u && (n = n.add(s)); }), this.ze.forEach((s, a) => a.setReadTime(t)); let i = new Ai(t, e, this.He, this.ze, n); return this.ze = Lt(), this.je = ps(), this.Je = ps(), this.He = new ot(G), i; }
    Ze(t, e) { if (!this.nt(t))
        return; let n = this.It(t, e.key) ? 2 : 0; this.tt(t).qe(e.key, n), this.ze = this.ze.insert(e.key, e), this.je = this.je.insert(e.key, this.Tt(e.key).add(t)), this.Je = this.Je.insert(e.key, this.dt(e.key).add(t)); }
    Xe(t, e, n) { if (!this.nt(t))
        return; let i = this.tt(t); this.It(t, e) ? i.qe(e, 1) : i.Qe(e), this.Je = this.Je.insert(e, this.dt(e).delete(t)), this.Je = this.Je.insert(e, this.dt(e).add(t)), n && (this.ze = this.ze.insert(e, n)); }
    removeTarget(t) { this.Ge.delete(t); }
    ot(t) { let e = this.tt(t).Le(); return this.We.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size; }
    $e(t) { this.tt(t).$e(); }
    tt(t) { let e = this.Ge.get(t); return e || (e = new Ws, this.Ge.set(t, e)), e; }
    dt(t) { let e = this.Je.get(t); return e || (e = new nt(G), this.Je = this.Je.insert(t, e)), e; }
    Tt(t) { let e = this.je.get(t); return e || (e = new nt(G), this.je = this.je.insert(t, e)), e; }
    nt(t) { let e = this.st(t) !== null; return e || k("WatchChangeAggregator", "Detected inactive target", t), e; }
    st(t) { let e = this.Ge.get(t); return e && e.Oe ? null : this.We.Et(t); }
    rt(t) { this.Ge.set(t, new Ws), this.We.getRemoteKeysForTarget(t).forEach(e => { this.Xe(t, e, null); }); }
    It(t, e) { return this.We.getRemoteKeysForTarget(t).has(e); }
};
function ps() { return new ot(M.comparator); }
function Ed() { return new ot(M.comparator); }
var Zp = { asc: "ASCENDING", desc: "DESCENDING" }, ty = { "<": "LESS_THAN", "<=": "LESS_THAN_OR_EQUAL", ">": "GREATER_THAN", ">=": "GREATER_THAN_OR_EQUAL", "==": "EQUAL", "!=": "NOT_EQUAL", "array-contains": "ARRAY_CONTAINS", in: "IN", "not-in": "NOT_IN", "array-contains-any": "ARRAY_CONTAINS_ANY" }, ey = { and: "AND", or: "OR" }, Tu = class {
    constructor(t, e) { this.databaseId = t, this.useProto3Json = e; }
};
function Iu(r, t) { return r.useProto3Json || zi(t) ? t : { value: t }; }
function hr(r, t) { return r.useProto3Json ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : { seconds: "" + t.seconds, nanos: t.nanoseconds }; }
function fm(r, t) { return r.useProto3Json ? t.toBase64() : t.toUint8Array(); }
function ny(r, t) { return hr(r, t.toTimestamp()); }
function ft(r) { return U(!!r, 49232), z.fromTimestamp((function (e) { let n = ye(e); return new ut(n.seconds, n.nanos); })(r)); }
function ll(r, t) { return Eu(r, t).canonicalString(); }
function Eu(r, t) { let e = (function (i) { return new H(["projects", i.projectId, "databases", i.database]); })(r).child("documents"); return t === void 0 ? e : e.child(t); }
function mm(r) { let t = H.fromString(r); return U(Em(t), 10190, { key: t.toString() }), t; }
function Si(r, t) { return ll(r.databaseId, t.path); }
function re(r, t) { let e = mm(t); if (e.get(1) !== r.databaseId.projectId)
    throw new x(b.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + e.get(1) + " vs " + r.databaseId.projectId); if (e.get(3) !== r.databaseId.database)
    throw new x(b.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + e.get(3) + " vs " + r.databaseId.database); return new M(ym(e)); }
function gm(r, t) { return ll(r.databaseId, t); }
function pm(r) { let t = mm(r); return t.length === 4 ? H.emptyPath() : ym(t); }
function Au(r) { return new H(["projects", r.databaseId.projectId, "databases", r.databaseId.database]).canonicalString(); }
function ym(r) { return U(r.length > 4 && r.get(4) === "documents", 29091, { key: r.toString() }), r.popFirst(5); }
function Ad(r, t, e) { return { name: Si(r, t), fields: e.value.mapValue.fields }; }
function qo(r, t, e) { let n = re(r, t.name), i = ft(t.updateTime), s = t.createTime ? ft(t.createTime) : z.min(), a = new xt({ mapValue: { fields: t.fields } }), u = It.newFoundDocument(n, i, s, a); return e && u.setHasCommittedMutations(), e ? u.setHasCommittedMutations() : u; }
function ry(r, t) { return "found" in t ? (function (n, i) { U(!!i.found, 43571), i.found.name, i.found.updateTime; let s = re(n, i.found.name), a = ft(i.found.updateTime), u = i.found.createTime ? ft(i.found.createTime) : z.min(), c = new xt({ mapValue: { fields: i.found.fields } }); return It.newFoundDocument(s, a, u, c); })(r, t) : "missing" in t ? (function (n, i) { U(!!i.missing, 3894), U(!!i.readTime, 22933); let s = re(n, i.missing), a = ft(i.readTime); return It.newNoDocument(s, a); })(r, t) : L(7234, { result: t }); }
function iy(r, t) { let e; if ("targetChange" in t) {
    t.targetChange;
    let n = (function (h) { return h === "NO_CHANGE" ? 0 : h === "ADD" ? 1 : h === "REMOVE" ? 2 : h === "CURRENT" ? 3 : h === "RESET" ? 4 : L(39313, { state: h }); })(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], s = (function (h, f) { return h.useProto3Json ? (U(f === void 0 || typeof f == "string", 58123), mt.fromBase64String(f || "")) : (U(f === void 0 || f instanceof Buffer || f instanceof Uint8Array, 16193), mt.fromUint8Array(f || new Uint8Array)); })(r, t.targetChange.resumeToken), a = t.targetChange.cause, u = a && (function (h) { let f = h.code === void 0 ? b.UNKNOWN : dm(h.code); return new x(f, h.message || ""); })(a);
    e = new Qs(n, i, s, u || null);
}
else if ("documentChange" in t) {
    t.documentChange;
    let n = t.documentChange;
    n.document, n.document.name, n.document.updateTime;
    let i = re(r, n.document.name), s = ft(n.document.updateTime), a = n.document.createTime ? ft(n.document.createTime) : z.min(), u = new xt({ mapValue: { fields: n.document.fields } }), c = It.newFoundDocument(i, s, a, u), h = n.targetIds || [], f = n.removedTargetIds || [];
    e = new Hn(h, f, c.key, c);
}
else if ("documentDelete" in t) {
    t.documentDelete;
    let n = t.documentDelete;
    n.document;
    let i = re(r, n.document), s = n.readTime ? ft(n.readTime) : z.min(), a = It.newNoDocument(i, s), u = n.removedTargetIds || [];
    e = new Hn([], u, a.key, a);
}
else if ("documentRemove" in t) {
    t.documentRemove;
    let n = t.documentRemove;
    n.document;
    let i = re(r, n.document), s = n.removedTargetIds || [];
    e = new Hn([], s, i, null);
}
else {
    if (!("filter" in t))
        return L(11601, { At: t });
    {
        t.filter;
        let n = t.filter;
        n.targetId;
        let { count: i = 0, unchangedNames: s } = n, a = new _u(i, s), u = n.targetId;
        e = new $s(u, a);
    }
} return e; }
function Ri(r, t) { let e; if (t instanceof Ge)
    e = { update: Ad(r, t.key, t.value) };
else if (t instanceof Ke)
    e = { delete: Si(r, t.key) };
else if (t instanceof Xt)
    e = { update: Ad(r, t.key, t.data), updateMask: ly(t.fieldMask) };
else {
    if (!(t instanceof Ti))
        return L(16599, { Rt: t.type });
    e = { verify: Si(r, t.key) };
} return t.fieldTransforms.length > 0 && (e.updateTransforms = t.fieldTransforms.map(n => (function (s, a) { let u = a.transform; if (u instanceof je)
    return { fieldPath: a.field.canonicalString(), setToServerValue: "REQUEST_TIME" }; if (u instanceof we)
    return { fieldPath: a.field.canonicalString(), appendMissingElements: { values: u.elements } }; if (u instanceof ve)
    return { fieldPath: a.field.canonicalString(), removeAllFromArray: { values: u.elements } }; if (u instanceof ze)
    return { fieldPath: a.field.canonicalString(), increment: u.Ee }; throw L(20930, { transform: a.transform }); })(0, n))), t.precondition.isNone || (e.currentDocument = (function (i, s) { return s.updateTime !== void 0 ? { updateTime: ny(i, s.updateTime) } : s.exists !== void 0 ? { exists: s.exists } : L(27497); })(r, t.precondition)), e; }
function bu(r, t) { let e = t.currentDocument ? (function (s) { return s.updateTime !== void 0 ? ht.updateTime(ft(s.updateTime)) : s.exists !== void 0 ? ht.exists(s.exists) : ht.none(); })(t.currentDocument) : ht.none(), n = t.updateTransforms ? t.updateTransforms.map(i => (function (a, u) { let c = null; if ("setToServerValue" in u)
    U(u.setToServerValue === "REQUEST_TIME", 16630, { proto: u }), c = new je;
else if ("appendMissingElements" in u) {
    let f = u.appendMissingElements.values || [];
    c = new we(f);
}
else if ("removeAllFromArray" in u) {
    let f = u.removeAllFromArray.values || [];
    c = new ve(f);
}
else
    "increment" in u ? c = new ze(a, u.increment) : L(16584, { proto: u }); let h = Tt.fromServerFormat(u.fieldPath); return new _n(h, c); })(r, i)) : []; if (t.update) {
    t.update.name;
    let i = re(r, t.update.name), s = new xt({ mapValue: { fields: t.update.fields } });
    if (t.updateMask) {
        let a = (function (c) { let h = c.fieldPaths || []; return new jt(h.map(f => Tt.fromServerFormat(f))); })(t.updateMask);
        return new Xt(i, s, a, e, n);
    }
    return new Ge(i, s, e, n);
} if (t.delete) {
    let i = re(r, t.delete);
    return new Ke(i, e);
} if (t.verify) {
    let i = re(r, t.verify);
    return new Ti(i, e);
} return L(1463, { proto: t }); }
function sy(r, t) { return r && r.length > 0 ? (U(t !== void 0, 14353), r.map(e => (function (i, s) { let a = i.updateTime ? ft(i.updateTime) : ft(s); return a.isEqual(z.min()) && (a = ft(s)), new pu(a, i.transformResults || []); })(e, t))) : []; }
function _m(r, t) { return { documents: [gm(r, t.path)] }; }
function Uo(r, t) { let e = { structuredQuery: {} }, n = t.path, i; t.collectionGroup !== null ? (i = n, e.structuredQuery.from = [{ collectionId: t.collectionGroup, allDescendants: !0 }]) : (i = n.popLast(), e.structuredQuery.from = [{ collectionId: n.lastSegment() }]), e.parent = gm(r, i); let s = (function (h) { if (h.length !== 0)
    return Im(tt.create(h, "and")); })(t.filters); s && (e.structuredQuery.where = s); let a = (function (h) { if (h.length !== 0)
    return h.map(f => (function (p) { return { field: xe(p.field), direction: ay(p.dir) }; })(f)); })(t.orderBy); a && (e.structuredQuery.orderBy = a); let u = Iu(r, t.limit); return u !== null && (e.structuredQuery.limit = u), t.startAt && (e.structuredQuery.startAt = (function (h) { return { before: h.inclusive, values: h.position }; })(t.startAt)), t.endAt && (e.structuredQuery.endAt = (function (h) { return { before: !h.inclusive, values: h.position }; })(t.endAt)), { Vt: e, parent: i }; }
function wm(r, t, e, n) { let { Vt: i, parent: s } = Uo(r, t), a = {}, u = [], c = 0; return e.forEach(h => { let f = n ? h.alias : "aggregate_" + c++; a[f] = h.alias, h.aggregateType === "count" ? u.push({ alias: f, count: {} }) : h.aggregateType === "avg" ? u.push({ alias: f, avg: { field: xe(h.fieldPath) } }) : h.aggregateType === "sum" && u.push({ alias: f, sum: { field: xe(h.fieldPath) } }); }), { request: { structuredAggregationQuery: { aggregations: u, structuredQuery: i.structuredQuery }, parent: i.parent }, ft: a, parent: s }; }
function vm(r) { let t = pm(r.parent), e = r.structuredQuery, n = e.from ? e.from.length : 0, i = null; if (n > 0) {
    U(n === 1, 65062);
    let f = e.from[0];
    f.allDescendants ? i = f.collectionId : t = t.child(f.collectionId);
} let s = []; e.where && (s = (function (m) { let p = Tm(m); return p instanceof tt && ol(p) ? p.getFilters() : [p]; })(e.where)); let a = []; e.orderBy && (a = (function (m) { return m.map(p => (function (C) { return new pn(Kn(C.field), (function (N) { switch (N) {
    case "ASCENDING": return "asc";
    case "DESCENDING": return "desc";
    default: return;
} })(C.direction)); })(p)); })(e.orderBy)); let u = null; e.limit && (u = (function (m) { let p; return p = typeof m == "object" ? m.value : m, zi(p) ? null : p; })(e.limit)); let c = null; e.startAt && (c = (function (m) { let p = !!m.before, A = m.values || []; return new oe(A, p); })(e.startAt)); let h = null; return e.endAt && (h = (function (m) { let p = !m.before, A = m.values || []; return new oe(A, p); })(e.endAt)), Wf(t, i, a, s, u, "F", c, h); }
function oy(r, t) { let e = (function (i) { switch (i) {
    case "TargetPurposeListen": return null;
    case "TargetPurposeExistenceFilterMismatch": return "existence-filter-mismatch";
    case "TargetPurposeExistenceFilterMismatchBloom": return "existence-filter-mismatch-bloom";
    case "TargetPurposeLimboResolution": return "limbo-document";
    default: return L(28987, { purpose: i });
} })(t.purpose); return e == null ? null : { "goog-listen-tags": e }; }
function Tm(r) { return r.unaryFilter !== void 0 ? (function (e) { switch (e.unaryFilter.op) {
    case "IS_NAN":
        let n = Kn(e.unaryFilter.field);
        return X.create(n, "==", { doubleValue: NaN });
    case "IS_NULL":
        let i = Kn(e.unaryFilter.field);
        return X.create(i, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
        let s = Kn(e.unaryFilter.field);
        return X.create(s, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
        let a = Kn(e.unaryFilter.field);
        return X.create(a, "!=", { nullValue: "NULL_VALUE" });
    case "OPERATOR_UNSPECIFIED": return L(61313);
    default: return L(60726);
} })(r) : r.fieldFilter !== void 0 ? (function (e) { return X.create(Kn(e.fieldFilter.field), (function (i) { switch (i) {
    case "EQUAL": return "==";
    case "NOT_EQUAL": return "!=";
    case "GREATER_THAN": return ">";
    case "GREATER_THAN_OR_EQUAL": return ">=";
    case "LESS_THAN": return "<";
    case "LESS_THAN_OR_EQUAL": return "<=";
    case "ARRAY_CONTAINS": return "array-contains";
    case "IN": return "in";
    case "NOT_IN": return "not-in";
    case "ARRAY_CONTAINS_ANY": return "array-contains-any";
    case "OPERATOR_UNSPECIFIED": return L(58110);
    default: return L(50506);
} })(e.fieldFilter.op), e.fieldFilter.value); })(r) : r.compositeFilter !== void 0 ? (function (e) { return tt.create(e.compositeFilter.filters.map(n => Tm(n)), (function (i) { switch (i) {
    case "AND": return "and";
    case "OR": return "or";
    default: return L(1026);
} })(e.compositeFilter.op)); })(r) : L(30097, { filter: r }); }
function ay(r) { return Zp[r]; }
function uy(r) { return ty[r]; }
function cy(r) { return ey[r]; }
function xe(r) { return { fieldPath: r.canonicalString() }; }
function Kn(r) { return Tt.fromServerFormat(r.fieldPath); }
function Im(r) { return r instanceof X ? (function (e) { if (e.op === "==") {
    if (cd(e.value))
        return { unaryFilter: { field: xe(e.field), op: "IS_NAN" } };
    if (ud(e.value))
        return { unaryFilter: { field: xe(e.field), op: "IS_NULL" } };
}
else if (e.op === "!=") {
    if (cd(e.value))
        return { unaryFilter: { field: xe(e.field), op: "IS_NOT_NAN" } };
    if (ud(e.value))
        return { unaryFilter: { field: xe(e.field), op: "IS_NOT_NULL" } };
} return { fieldFilter: { field: xe(e.field), op: uy(e.op), value: e.value } }; })(r) : r instanceof tt ? (function (e) { let n = e.getFilters().map(i => Im(i)); return n.length === 1 ? n[0] : { compositeFilter: { op: cy(e.op), filters: n } }; })(r) : L(54877, { filter: r }); }
function ly(r) { let t = []; return r.fields.forEach(e => t.push(e.canonicalString())), { fieldPaths: t }; }
function Em(r) { return r.length >= 4 && r.get(0) === "projects" && r.get(2) === "databases"; }
var dr = class r {
    constructor(t, e, n, i, s = z.min(), a = z.min(), u = mt.EMPTY_BYTE_STRING, c = null) { this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = i, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = u, this.expectedCount = c; }
    withSequenceNumber(t) { return new r(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount); }
    withResumeToken(t, e) { return new r(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t, null); }
    withExpectedCount(t) { return new r(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t); }
    withLastLimboFreeSnapshotVersion(t) { return new r(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount); }
};
var Hs = class {
    constructor(t) { this.gt = t; }
};
function hy(r, t) { let e; if (t.document)
    e = qo(r.gt, t.document, !!t.hasCommittedMutations);
else if (t.noDocument) {
    let n = M.fromSegments(t.noDocument.path), i = vn(t.noDocument.readTime);
    e = It.newNoDocument(n, i), t.hasCommittedMutations && e.setHasCommittedMutations();
}
else {
    if (!t.unknownDocument)
        return L(56709);
    {
        let n = M.fromSegments(t.unknownDocument.path), i = vn(t.unknownDocument.version);
        e = It.newUnknownDocument(n, i);
    }
} return t.readTime && e.setReadTime((function (i) { let s = new ut(i[0], i[1]); return z.fromTimestamp(s); })(t.readTime)), e; }
function bd(r, t) { let e = t.key, n = { prefixPath: e.getCollectionPath().popLast().toArray(), collectionGroup: e.collectionGroup, documentId: e.path.lastSegment(), readTime: Xs(t.readTime), hasCommittedMutations: t.hasCommittedMutations }; if (t.isFoundDocument())
    n.document = (function (s, a) { return { name: Si(s, a.key), fields: a.data.value.mapValue.fields, updateTime: hr(s, a.version.toTimestamp()), createTime: hr(s, a.createTime.toTimestamp()) }; })(r.gt, t);
else if (t.isNoDocument())
    n.noDocument = { path: e.path.toArray(), readTime: wn(t.version) };
else {
    if (!t.isUnknownDocument())
        return L(57904, { document: t });
    n.unknownDocument = { path: e.path.toArray(), version: wn(t.version) };
} return n; }
function Xs(r) { let t = r.toTimestamp(); return [t.seconds, t.nanoseconds]; }
function wn(r) { let t = r.toTimestamp(); return { seconds: t.seconds, nanoseconds: t.nanoseconds }; }
function vn(r) { let t = new ut(r.seconds, r.nanoseconds); return z.fromTimestamp(t); }
function un(r, t) { let e = (t.baseMutations || []).map(s => bu(r.gt, s)); for (let s = 0; s < t.mutations.length - 1; ++s) {
    let a = t.mutations[s];
    if (s + 1 < t.mutations.length && t.mutations[s + 1].transform !== void 0) {
        let u = t.mutations[s + 1];
        a.updateTransforms = u.transform.fieldTransforms, t.mutations.splice(s + 1, 1), ++s;
    }
} let n = t.mutations.map(s => bu(r.gt, s)), i = ut.fromMillis(t.localWriteTimeMs); return new Ii(t.batchId, i, e, n); }
function ei(r) { let t = vn(r.readTime), e = r.lastLimboFreeSnapshotVersion !== void 0 ? vn(r.lastLimboFreeSnapshotVersion) : z.min(), n; return n = (function (s) { return s.documents !== void 0; })(r.query) ? (function (s) { let a = s.documents.length; return U(a === 1, 1966, { count: a }), Nt(Ir(pm(s.documents[0]))); })(r.query) : (function (s) { return Nt(vm(s)); })(r.query), new dr(n, r.targetId, "TargetPurposeListen", r.lastListenSequenceNumber, t, e, mt.fromBase64String(r.resumeToken)); }
function Am(r, t) { let e = wn(t.snapshotVersion), n = wn(t.lastLimboFreeSnapshotVersion), i; i = Bs(t.target) ? _m(r.gt, t.target) : Uo(r.gt, t.target).Vt; let s = t.resumeToken.toBase64(); return { targetId: t.targetId, canonicalId: yn(t.target), readTime: e, resumeToken: s, lastListenSequenceNumber: t.sequenceNumber, lastLimboFreeSnapshotVersion: n, query: i }; }
function Bo(r) { let t = vm({ parent: r.parent, structuredQuery: r.structuredQuery }); return r.limitType === "LAST" ? zs(t, t.limit, "L") : t; }
function Na(r, t) { return new Ei(t.largestBatchId, bu(r.gt, t.overlayMutation)); }
function Sd(r, t) { let e = t.path.lastSegment(); return [r, Dt(t.path.popLast()), e]; }
function Rd(r, t, e, n) { return { indexId: r, uid: t, sequenceNumber: e, readTime: wn(n.readTime), documentKey: Dt(n.documentKey.path), largestBatchId: n.largestBatchId }; }
var Su = class {
    getBundleMetadata(t, e) { return Pd(t).get(e).next(n => { if (n)
        return (function (s) { return { id: s.bundleId, createTime: vn(s.createTime), version: s.version }; })(n); }); }
    saveBundleMetadata(t, e) { return Pd(t).put((function (i) { return { bundleId: i.id, createTime: wn(ft(i.createTime)), version: i.version }; })(e)); }
    getNamedQuery(t, e) { return Vd(t).get(e).next(n => { if (n)
        return (function (s) { return { name: s.name, query: Bo(s.bundledQuery), readTime: vn(s.readTime) }; })(n); }); }
    saveNamedQuery(t, e) { return Vd(t).put((function (i) { return { name: i.name, readTime: wn(ft(i.readTime)), bundledQuery: i.bundledQuery }; })(e)); }
};
function Pd(r) { return Et(r, No); }
function Vd(r) { return Et(r, ko); }
var Js = class r {
    constructor(t, e) { this.serializer = t, this.userId = e; }
    static yt(t, e) { let n = e.uid || ""; return new r(t, n); }
    getOverlay(t, e) { return Xr(t).get(Sd(this.userId, e)).next(n => n ? Na(this.serializer, n) : null); }
    getOverlays(t, e) { let n = te(); return R.forEach(e, i => this.getOverlay(t, i).next(s => { s !== null && n.set(i, s); })).next(() => n); }
    saveOverlays(t, e, n) { let i = []; return n.forEach((s, a) => { let u = new Ei(e, a); i.push(this.wt(t, u)); }), R.waitFor(i); }
    removeOverlaysForBatchId(t, e, n) { let i = new Set; e.forEach(a => i.add(Dt(a.getCollectionPath()))); let s = []; return i.forEach(a => { let u = IDBKeyRange.bound([this.userId, a, n], [this.userId, a, n + 1], !1, !0); s.push(Xr(t).Y(eu, u)); }), R.waitFor(s); }
    getOverlaysForCollection(t, e, n) { let i = te(), s = Dt(e), a = IDBKeyRange.bound([this.userId, s, n], [this.userId, s, Number.POSITIVE_INFINITY], !0); return Xr(t).j(eu, a).next(u => { for (let c of u) {
        let h = Na(this.serializer, c);
        i.set(h.getKey(), h);
    } return i; }); }
    getOverlaysForCollectionGroup(t, e, n, i) { let s = te(), a, u = IDBKeyRange.bound([this.userId, e, n], [this.userId, e, Number.POSITIVE_INFINITY], !0); return Xr(t).X({ index: Pf, range: u }, (c, h, f) => { let m = Na(this.serializer, h); s.size() < i || m.largestBatchId === a ? (s.set(m.getKey(), m), a = m.largestBatchId) : f.done(); }).next(() => s); }
    wt(t, e) { return Xr(t).put((function (i, s, a) { let [u, c, h] = Sd(s, a.mutation.key); return { userId: s, collectionPath: c, documentId: h, collectionGroup: a.mutation.key.getCollectionGroup(), largestBatchId: a.largestBatchId, overlayMutation: Ri(i.gt, a.mutation) }; })(this.serializer, this.userId, e)); }
};
function Xr(r) { return Et(r, Fo); }
var Ru = class {
    St(t) { return Et(t, nl); }
    getSessionToken(t) { return this.St(t).get("sessionToken").next(e => { let n = e?.value; return n ? mt.fromUint8Array(n) : mt.EMPTY_BYTE_STRING; }); }
    setSessionToken(t, e) { return this.St(t).put({ name: "sessionToken", value: e.toUint8Array() }); }
};
var fe = class {
    constructor() { }
    bt(t, e) { this.Dt(t, e), e.vt(); }
    Dt(t, e) { if ("nullValue" in t)
        this.Ct(e, 5);
    else if ("booleanValue" in t)
        this.Ct(e, 10), e.Ft(t.booleanValue ? 1 : 0);
    else if ("integerValue" in t)
        this.Ct(e, 15), e.Ft(at(t.integerValue));
    else if ("doubleValue" in t) {
        let n = at(t.doubleValue);
        isNaN(n) ? this.Ct(e, 13) : (this.Ct(e, 15), di(n) ? e.Ft(0) : e.Ft(n));
    }
    else if ("timestampValue" in t) {
        let n = t.timestampValue;
        this.Ct(e, 20), typeof n == "string" && (n = ye(n)), e.Mt(`${n.seconds || ""}`), e.Ft(n.nanos || 0);
    }
    else if ("stringValue" in t)
        this.xt(t.stringValue, e), this.Ot(e);
    else if ("bytesValue" in t)
        this.Ct(e, 30), e.Nt(_e(t.bytesValue)), this.Ot(e);
    else if ("referenceValue" in t)
        this.Bt(t.referenceValue, e);
    else if ("geoPointValue" in t) {
        let n = t.geoPointValue;
        this.Ct(e, 45), e.Ft(n.latitude || 0), e.Ft(n.longitude || 0);
    }
    else
        "mapValue" in t ? Uf(t) ? this.Ct(e, Number.MAX_SAFE_INTEGER) : Lo(t) ? this.Lt(t.mapValue, e) : (this.kt(t.mapValue, e), this.Ot(e)) : "arrayValue" in t ? (this.qt(t.arrayValue, e), this.Ot(e)) : L(19022, { Qt: t }); }
    xt(t, e) { this.Ct(e, 25), this.$t(t, e); }
    $t(t, e) { e.Mt(t); }
    kt(t, e) { let n = t.fields || {}; this.Ct(e, 55); for (let i of Object.keys(n))
        this.xt(i, e), this.Dt(n[i], e); }
    Lt(t, e) { var n, i; let s = t.fields || {}; this.Ct(e, 53); let a = or, u = ((i = (n = s[a].arrayValue) === null || n === void 0 ? void 0 : n.values) === null || i === void 0 ? void 0 : i.length) || 0; this.Ct(e, 15), e.Ft(at(u)), this.xt(a, e), this.Dt(s[a], e); }
    qt(t, e) { let n = t.values || []; this.Ct(e, 50); for (let i of n)
        this.Dt(i, e); }
    Bt(t, e) { this.Ct(e, 37), M.fromName(t).path.forEach(n => { this.Ct(e, 60), this.$t(n, e); }); }
    Ct(t, e) { t.Ft(e); }
    Ot(t) { t.Ft(2); }
};
fe.Ut = new fe;
var qn = 255;
function dy(r) { if (r === 0)
    return 8; let t = 0; return r >> 4 || (t += 4, r <<= 4), r >> 6 || (t += 2, r <<= 2), r >> 7 || (t += 1), t; }
function Cd(r) { let t = 64 - (function (n) { let i = 0; for (let s = 0; s < 8; ++s) {
    let a = dy(255 & n[s]);
    if (i += a, a !== 8)
        break;
} return i; })(r); return Math.ceil(t / 8); }
var Pu = class {
    constructor() { this.buffer = new Uint8Array(1024), this.position = 0; }
    Kt(t) { let e = t[Symbol.iterator](), n = e.next(); for (; !n.done;)
        this.Wt(n.value), n = e.next(); this.Gt(); }
    zt(t) { let e = t[Symbol.iterator](), n = e.next(); for (; !n.done;)
        this.jt(n.value), n = e.next(); this.Jt(); }
    Ht(t) { for (let e of t) {
        let n = e.charCodeAt(0);
        if (n < 128)
            this.Wt(n);
        else if (n < 2048)
            this.Wt(960 | n >>> 6), this.Wt(128 | 63 & n);
        else if (e < "\uD800" || "\uDBFF" < e)
            this.Wt(480 | n >>> 12), this.Wt(128 | 63 & n >>> 6), this.Wt(128 | 63 & n);
        else {
            let i = e.codePointAt(0);
            this.Wt(240 | i >>> 18), this.Wt(128 | 63 & i >>> 12), this.Wt(128 | 63 & i >>> 6), this.Wt(128 | 63 & i);
        }
    } this.Gt(); }
    Yt(t) { for (let e of t) {
        let n = e.charCodeAt(0);
        if (n < 128)
            this.jt(n);
        else if (n < 2048)
            this.jt(960 | n >>> 6), this.jt(128 | 63 & n);
        else if (e < "\uD800" || "\uDBFF" < e)
            this.jt(480 | n >>> 12), this.jt(128 | 63 & n >>> 6), this.jt(128 | 63 & n);
        else {
            let i = e.codePointAt(0);
            this.jt(240 | i >>> 18), this.jt(128 | 63 & i >>> 12), this.jt(128 | 63 & i >>> 6), this.jt(128 | 63 & i);
        }
    } this.Jt(); }
    Zt(t) { let e = this.Xt(t), n = Cd(e); this.en(1 + n), this.buffer[this.position++] = 255 & n; for (let i = e.length - n; i < e.length; ++i)
        this.buffer[this.position++] = 255 & e[i]; }
    tn(t) { let e = this.Xt(t), n = Cd(e); this.en(1 + n), this.buffer[this.position++] = ~(255 & n); for (let i = e.length - n; i < e.length; ++i)
        this.buffer[this.position++] = ~(255 & e[i]); }
    nn() { this.rn(qn), this.rn(255); }
    sn() { this._n(qn), this._n(255); }
    reset() { this.position = 0; }
    seed(t) { this.en(t.length), this.buffer.set(t, this.position), this.position += t.length; }
    an() { return this.buffer.slice(0, this.position); }
    Xt(t) { let e = (function (s) { let a = new DataView(new ArrayBuffer(8)); return a.setFloat64(0, s, !1), new Uint8Array(a.buffer); })(t), n = !!(128 & e[0]); e[0] ^= n ? 255 : 128; for (let i = 1; i < e.length; ++i)
        e[i] ^= n ? 255 : 0; return e; }
    Wt(t) { let e = 255 & t; e === 0 ? (this.rn(0), this.rn(255)) : e === qn ? (this.rn(qn), this.rn(0)) : this.rn(e); }
    jt(t) { let e = 255 & t; e === 0 ? (this._n(0), this._n(255)) : e === qn ? (this._n(qn), this._n(0)) : this._n(t); }
    Gt() { this.rn(0), this.rn(1); }
    Jt() { this._n(0), this._n(1); }
    rn(t) { this.en(1), this.buffer[this.position++] = t; }
    _n(t) { this.en(1), this.buffer[this.position++] = ~t; }
    en(t) { let e = t + this.position; if (e <= this.buffer.length)
        return; let n = 2 * this.buffer.length; n < e && (n = e); let i = new Uint8Array(n); i.set(this.buffer), this.buffer = i; }
}, Vu = class {
    constructor(t) { this.un = t; }
    Nt(t) { this.un.Kt(t); }
    Mt(t) { this.un.Ht(t); }
    Ft(t) { this.un.Zt(t); }
    vt() { this.un.nn(); }
}, Cu = class {
    constructor(t) { this.un = t; }
    Nt(t) { this.un.zt(t); }
    Mt(t) { this.un.Yt(t); }
    Ft(t) { this.un.tn(t); }
    vt() { this.un.sn(); }
}, cn = class {
    constructor() { this.un = new Pu, this.cn = new Vu(this.un), this.ln = new Cu(this.un); }
    seed(t) { this.un.seed(t); }
    hn(t) { return t === 0 ? this.cn : this.ln; }
    an() { return this.un.an(); }
    reset() { this.un.reset(); }
};
var ln = class r {
    constructor(t, e, n, i) { this.Pn = t, this.Tn = e, this.In = n, this.dn = i; }
    En() { let t = this.dn.length, e = t === 0 || this.dn[t - 1] === 255 ? t + 1 : t, n = new Uint8Array(e); return n.set(this.dn, 0), e !== t ? n.set([0], this.dn.length) : ++n[n.length - 1], new r(this.Pn, this.Tn, this.In, n); }
    An(t, e, n) { return { indexId: this.Pn, uid: t, arrayValue: Ps(this.In), directionalValue: Ps(this.dn), orderedDocumentKey: Ps(e), documentKey: n.path.toArray() }; }
    Rn(t, e, n) { let i = this.An(t, e, n); return [i.indexId, i.uid, i.arrayValue, i.directionalValue, i.orderedDocumentKey, i.documentKey]; }
};
function Pe(r, t) { let e = r.Pn - t.Pn; return e !== 0 ? e : (e = xd(r.In, t.In), e !== 0 ? e : (e = xd(r.dn, t.dn), e !== 0 ? e : M.comparator(r.Tn, t.Tn))); }
function xd(r, t) { for (let e = 0; e < r.length && e < t.length; ++e) {
    let n = r[e] - t[e];
    if (n !== 0)
        return n;
} return r.length - t.length; }
function Ps(r) { return Aa() ? (function (e) { let n = ""; for (let i = 0; i < e.length; i++)
    n += String.fromCharCode(e[i]); return n; })(r) : r; }
function Dd(r) { return typeof r != "string" ? r : (function (e) { let n = new Uint8Array(e.length); for (let i = 0; i < e.length; i++)
    n[i] = e.charCodeAt(i); return n; })(r); }
var Ys = class {
    constructor(t) { this.Vn = new nt((e, n) => Tt.comparator(e.field, n.field)), this.collectionId = t.collectionGroup != null ? t.collectionGroup : t.path.lastSegment(), this.mn = t.orderBy, this.fn = []; for (let e of t.filters) {
        let n = e;
        n.isInequality() ? this.Vn = this.Vn.add(n) : this.fn.push(n);
    } }
    get gn() { return this.Vn.size > 1; }
    pn(t) { if (U(t.collectionGroup === this.collectionId, 49279), this.gn)
        return !1; let e = Wa(t); if (e !== void 0 && !this.yn(e))
        return !1; let n = sn(t), i = new Set, s = 0, a = 0; for (; s < n.length && this.yn(n[s]); ++s)
        i = i.add(n[s].fieldPath.canonicalString()); if (s === n.length)
        return !0; if (this.Vn.size > 0) {
        let u = this.Vn.getIterator().getNext();
        if (!i.has(u.field.canonicalString())) {
            let c = n[s];
            if (!this.wn(u, c) || !this.Sn(this.mn[a++], c))
                return !1;
        }
        ++s;
    } for (; s < n.length; ++s) {
        let u = n[s];
        if (a >= this.mn.length || !this.Sn(this.mn[a++], u))
            return !1;
    } return !0; }
    bn() { if (this.gn)
        return null; let t = new nt(Tt.comparator), e = []; for (let n of this.fn)
        if (!n.field.isKeyField())
            if (n.op === "array-contains" || n.op === "array-contains-any")
                e.push(new me(n.field, 2));
            else {
                if (t.has(n.field))
                    continue;
                t = t.add(n.field), e.push(new me(n.field, 0));
            } for (let n of this.mn)
        n.field.isKeyField() || t.has(n.field) || (t = t.add(n.field), e.push(new me(n.field, n.dir === "asc" ? 0 : 1))); return new Le(Le.UNKNOWN_ID, this.collectionId, e, tr.empty()); }
    yn(t) { for (let e of this.fn)
        if (this.wn(e, t))
            return !0; return !1; }
    wn(t, e) { if (t === void 0 || !t.field.isEqual(e.fieldPath))
        return !1; let n = t.op === "array-contains" || t.op === "array-contains-any"; return e.kind === 2 === n; }
    Sn(t, e) { return !!t.field.isEqual(e.fieldPath) && (e.kind === 0 && t.dir === "asc" || e.kind === 1 && t.dir === "desc"); }
};
function bm(r) { var t, e; if (U(r instanceof X || r instanceof tt, 20012), r instanceof X) {
    if (r instanceof Us) {
        let i = ((e = (t = r.value.arrayValue) === null || t === void 0 ? void 0 : t.values) === null || e === void 0 ? void 0 : e.map(s => X.create(r.field, "==", s))) || [];
        return tt.create(i, "or");
    }
    return r;
} let n = r.filters.map(i => bm(i)); return tt.create(n, r.op); }
function fy(r) { if (r.getFilters().length === 0)
    return []; let t = Nu(bm(r)); return U(Sm(t), 7391), xu(t) || Du(t) ? [t] : t.getFilters(); }
function xu(r) { return r instanceof X; }
function Du(r) { return r instanceof tt && ol(r); }
function Sm(r) { return xu(r) || Du(r) || (function (e) { if (e instanceof tt && su(e)) {
    for (let n of e.getFilters())
        if (!xu(n) && !Du(n))
            return !1;
    return !0;
} return !1; })(r); }
function Nu(r) { if (U(r instanceof X || r instanceof tt, 34018), r instanceof X)
    return r; if (r.filters.length === 1)
    return Nu(r.filters[0]); let t = r.filters.map(n => Nu(n)), e = tt.create(t, r.op); return e = Zs(e), Sm(e) ? e : (U(e instanceof tt, 64498), U(ur(e), 40251), U(e.filters.length > 1, 57927), e.filters.reduce((n, i) => hl(n, i))); }
function hl(r, t) { let e; return U(r instanceof X || r instanceof tt, 38388), U(t instanceof X || t instanceof tt, 25473), e = r instanceof X ? t instanceof X ? (function (i, s) { return tt.create([i, s], "and"); })(r, t) : Nd(r, t) : t instanceof X ? Nd(t, r) : (function (i, s) { if (U(i.filters.length > 0 && s.filters.length > 0, 48005), ur(i) && ur(s))
    return Kf(i, s.getFilters()); let a = su(i) ? i : s, u = su(i) ? s : i, c = a.filters.map(h => hl(h, u)); return tt.create(c, "or"); })(r, t), Zs(e); }
function Nd(r, t) { if (ur(t))
    return Kf(t, r.getFilters()); {
    let e = t.filters.map(n => hl(r, n));
    return tt.create(e, "or");
} }
function Zs(r) { if (U(r instanceof X || r instanceof tt, 11850), r instanceof X)
    return r; let t = r.getFilters(); if (t.length === 1)
    return Zs(t[0]); if (zf(r))
    return r; let e = t.map(i => Zs(i)), n = []; return e.forEach(i => { i instanceof X ? n.push(i) : i instanceof tt && (i.op === r.op ? n.push(...i.filters) : n.push(i)); }), n.length === 1 ? n[0] : tt.create(n, r.op); }
var ku = class {
    constructor() { this.Dn = new Pi; }
    addToCollectionParentIndex(t, e) { return this.Dn.add(e), R.resolve(); }
    getCollectionParents(t, e) { return R.resolve(this.Dn.getEntries(e)); }
    addFieldIndex(t, e) { return R.resolve(); }
    deleteFieldIndex(t, e) { return R.resolve(); }
    deleteAllFieldIndexes(t) { return R.resolve(); }
    createTargetIndexes(t, e) { return R.resolve(); }
    getDocumentsMatchingTarget(t, e) { return R.resolve(null); }
    getIndexType(t, e) { return R.resolve(0); }
    getFieldIndexes(t, e) { return R.resolve([]); }
    getNextCollectionGroupToUpdate(t) { return R.resolve(null); }
    getMinOffset(t, e) { return R.resolve(Kt.min()); }
    getMinOffsetFromCollectionGroup(t, e) { return R.resolve(Kt.min()); }
    updateCollectionGroup(t, e, n) { return R.resolve(); }
    updateIndexEntries(t, e) { return R.resolve(); }
}, Pi = class {
    constructor() { this.index = {}; }
    add(t) { let e = t.lastSegment(), n = t.popLast(), i = this.index[e] || new nt(H.comparator), s = !i.has(n); return this.index[e] = i.add(n), s; }
    has(t) { let e = t.lastSegment(), n = t.popLast(), i = this.index[e]; return i && i.has(n); }
    getEntries(t) { return (this.index[t] || new nt(H.comparator)).toArray(); }
};
var kd = "IndexedDbIndexManager", ys = new Uint8Array(0), Fu = class {
    constructor(t, e) { this.databaseId = e, this.vn = new Pi, this.Cn = new Ht(n => yn(n), (n, i) => Ki(n, i)), this.uid = t.uid || ""; }
    addToCollectionParentIndex(t, e) { if (!this.vn.has(e)) {
        let n = e.lastSegment(), i = e.popLast();
        t.addOnCommittedListener(() => { this.vn.add(e); });
        let s = { collectionId: n, parent: Dt(i) };
        return Fd(t).put(s);
    } return R.resolve(); }
    getCollectionParents(t, e) { let n = [], i = IDBKeyRange.bound([e, ""], [gf(e), ""], !1, !0); return Fd(t).j(i).next(s => { for (let a of s) {
        if (a.collectionId !== e)
            break;
        n.push(Zt(a.parent));
    } return n; }); }
    addFieldIndex(t, e) { let n = Jr(t), i = (function (u) { return { indexId: u.indexId, collectionGroup: u.collectionGroup, fields: u.fields.map(c => [c.fieldPath.canonicalString(), c.kind]) }; })(e); delete i.indexId; let s = n.add(i); if (e.indexState) {
        let a = Bn(t);
        return s.next(u => { a.put(Rd(u, this.uid, e.indexState.sequenceNumber, e.indexState.offset)); });
    } return s.next(); }
    deleteFieldIndex(t, e) { let n = Jr(t), i = Bn(t), s = Un(t); return n.delete(e.indexId).next(() => i.delete(IDBKeyRange.bound([e.indexId], [e.indexId + 1], !1, !0))).next(() => s.delete(IDBKeyRange.bound([e.indexId], [e.indexId + 1], !1, !0))); }
    deleteAllFieldIndexes(t) { let e = Jr(t), n = Un(t), i = Bn(t); return e.Y().next(() => n.Y()).next(() => i.Y()); }
    createTargetIndexes(t, e) { return R.forEach(this.Fn(e), n => this.getIndexType(t, n).next(i => { if (i === 0 || i === 1) {
        let s = new Ys(n).bn();
        if (s != null)
            return this.addFieldIndex(t, s);
    } })); }
    getDocumentsMatchingTarget(t, e) { let n = Un(t), i = !0, s = new Map; return R.forEach(this.Fn(e), a => this.Mn(t, a).next(u => { i && (i = !!u), s.set(a, u); })).next(() => { if (i) {
        let a = K(), u = [];
        return R.forEach(s, (c, h) => { k(kd, `Using index ${(function (B) { return `id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q => `${Q.fieldPath}:${Q.kind}`).join(",")}`; })(c)} to execute ${yn(e)}`); let f = (function (B, Q) { let Z = Wa(Q); if (Z === void 0)
            return null; for (let $ of js(B, Z.fieldPath))
            switch ($.op) {
                case "array-contains-any": return $.value.arrayValue.values || [];
                case "array-contains": return [$.value];
            } return null; })(h, c), m = (function (B, Q) { let Z = new Map; for (let $ of sn(Q))
            for (let v of js(B, $.fieldPath))
                switch (v.op) {
                    case "==":
                    case "in":
                        Z.set($.fieldPath.canonicalString(), v.value);
                        break;
                    case "not-in":
                    case "!=": return Z.set($.fieldPath.canonicalString(), v.value), Array.from(Z.values());
                } return null; })(h, c), p = (function (B, Q) { let Z = [], $ = !0; for (let v of sn(Q)) {
            let y = v.kind === 0 ? md(B, v.fieldPath, B.startAt) : gd(B, v.fieldPath, B.startAt);
            Z.push(y.value), $ && ($ = y.inclusive);
        } return new oe(Z, $); })(h, c), A = (function (B, Q) { let Z = [], $ = !0; for (let v of sn(Q)) {
            let y = v.kind === 0 ? gd(B, v.fieldPath, B.endAt) : md(B, v.fieldPath, B.endAt);
            Z.push(y.value), $ && ($ = y.inclusive);
        } return new oe(Z, $); })(h, c), C = this.xn(c, h, p), D = this.xn(c, h, A), N = this.On(c, h, m), q = this.Nn(c.indexId, f, C, p.inclusive, D, A.inclusive, N); return R.forEach(q, j => n.H(j, e.limit).next(B => { B.forEach(Q => { let Z = M.fromSegments(Q.documentKey); a.has(Z) || (a = a.add(Z), u.push(Z)); }); })); }).next(() => u);
    } return R.resolve(null); }); }
    Fn(t) { let e = this.Cn.get(t); return e || (t.filters.length === 0 ? e = [t] : e = fy(tt.create(t.filters, "and")).map(n => mu(t.path, t.collectionGroup, t.orderBy, n.getFilters(), t.limit, t.startAt, t.endAt)), this.Cn.set(t, e), e); }
    Nn(t, e, n, i, s, a, u) { let c = (e != null ? e.length : 1) * Math.max(n.length, s.length), h = c / (e != null ? e.length : 1), f = []; for (let m = 0; m < c; ++m) {
        let p = e ? this.Bn(e[m / h]) : ys, A = this.Ln(t, p, n[m % h], i), C = this.kn(t, p, s[m % h], a), D = u.map(N => this.Ln(t, p, N, !0));
        f.push(...this.createRange(A, C, D));
    } return f; }
    Ln(t, e, n, i) { let s = new ln(t, M.empty(), e, n); return i ? s : s.En(); }
    kn(t, e, n, i) { let s = new ln(t, M.empty(), e, n); return i ? s.En() : s; }
    Mn(t, e) { let n = new Ys(e), i = e.collectionGroup != null ? e.collectionGroup : e.path.lastSegment(); return this.getFieldIndexes(t, i).next(s => { let a = null; for (let u of s)
        n.pn(u) && (!a || u.fields.length > a.fields.length) && (a = u); return a; }); }
    getIndexType(t, e) { let n = 2, i = this.Fn(e); return R.forEach(i, s => this.Mn(t, s).next(a => { a ? n !== 0 && a.fields.length < (function (c) { let h = new nt(Tt.comparator), f = !1; for (let m of c.filters)
        for (let p of m.getFlattenedFilters())
            p.field.isKeyField() || (p.op === "array-contains" || p.op === "array-contains-any" ? f = !0 : h = h.add(p.field)); for (let m of c.orderBy)
        m.field.isKeyField() || (h = h.add(m.field)); return h.size + (f ? 1 : 0); })(s) && (n = 1) : n = 0; })).next(() => (function (a) { return a.limit !== null; })(e) && i.length > 1 && n === 2 ? 1 : n); }
    qn(t, e) { let n = new cn; for (let i of sn(t)) {
        let s = e.data.field(i.fieldPath);
        if (s == null)
            return null;
        let a = n.hn(i.kind);
        fe.Ut.bt(s, a);
    } return n.an(); }
    Bn(t) { let e = new cn; return fe.Ut.bt(t, e.hn(0)), e.an(); }
    Qn(t, e) { let n = new cn; return fe.Ut.bt(gn(this.databaseId, e), n.hn((function (s) { let a = sn(s); return a.length === 0 ? 0 : a[a.length - 1].kind; })(t))), n.an(); }
    On(t, e, n) { if (n === null)
        return []; let i = []; i.push(new cn); let s = 0; for (let a of sn(t)) {
        let u = n[s++];
        for (let c of i)
            if (this.$n(e, a.fieldPath) && vi(u))
                i = this.Un(i, a, u);
            else {
                let h = c.hn(a.kind);
                fe.Ut.bt(u, h);
            }
    } return this.Kn(i); }
    xn(t, e, n) { return this.On(t, e, n.position); }
    Kn(t) { let e = []; for (let n = 0; n < t.length; ++n)
        e[n] = t[n].an(); return e; }
    Un(t, e, n) { let i = [...t], s = []; for (let a of n.arrayValue.values || [])
        for (let u of i) {
            let c = new cn;
            c.seed(u.an()), fe.Ut.bt(a, c.hn(e.kind)), s.push(c);
        } return s; }
    $n(t, e) { return !!t.filters.find(n => n instanceof X && n.field.isEqual(e) && (n.op === "in" || n.op === "not-in")); }
    getFieldIndexes(t, e) { let n = Jr(t), i = Bn(t); return (e ? n.j(tu, IDBKeyRange.bound(e, e)) : n.j()).next(s => { let a = []; return R.forEach(s, u => i.get([u.indexId, this.uid]).next(c => { a.push((function (f, m) { let p = m ? new tr(m.sequenceNumber, new Kt(vn(m.readTime), new M(Zt(m.documentKey)), m.largestBatchId)) : tr.empty(), A = f.fields.map(([C, D]) => new me(Tt.fromServerFormat(C), D)); return new Le(f.indexId, f.collectionGroup, A, p); })(u, c)); })).next(() => a); }); }
    getNextCollectionGroupToUpdate(t) { return this.getFieldIndexes(t).next(e => e.length === 0 ? null : (e.sort((n, i) => { let s = n.indexState.sequenceNumber - i.indexState.sequenceNumber; return s !== 0 ? s : G(n.collectionGroup, i.collectionGroup); }), e[0].collectionGroup)); }
    updateCollectionGroup(t, e, n) { let i = Jr(t), s = Bn(t); return this.Wn(t).next(a => i.j(tu, IDBKeyRange.bound(e, e)).next(u => R.forEach(u, c => s.put(Rd(c.indexId, this.uid, a, n))))); }
    updateIndexEntries(t, e) { let n = new Map; return R.forEach(e, (i, s) => { let a = n.get(i.collectionGroup); return (a ? R.resolve(a) : this.getFieldIndexes(t, i.collectionGroup)).next(u => (n.set(i.collectionGroup, u), R.forEach(u, c => this.Gn(t, i, c).next(h => { let f = this.zn(s, c); return h.isEqual(f) ? R.resolve() : this.jn(t, s, c, h, f); })))); }); }
    Jn(t, e, n, i) { return Un(t).put(i.An(this.uid, this.Qn(n, e.key), e.key)); }
    Hn(t, e, n, i) { return Un(t).delete(i.Rn(this.uid, this.Qn(n, e.key), e.key)); }
    Gn(t, e, n) { let i = Un(t), s = new nt(Pe); return i.X({ index: Rf, range: IDBKeyRange.only([n.indexId, this.uid, Ps(this.Qn(n, e))]) }, (a, u) => { s = s.add(new ln(n.indexId, e, Dd(u.arrayValue), Dd(u.directionalValue))); }).next(() => s); }
    zn(t, e) { let n = new nt(Pe), i = this.qn(e, t); if (i == null)
        return n; let s = Wa(e); if (s != null) {
        let a = t.data.field(s.fieldPath);
        if (vi(a))
            for (let u of a.arrayValue.values || [])
                n = n.add(new ln(e.indexId, t.key, this.Bn(u), i));
    }
    else
        n = n.add(new ln(e.indexId, t.key, ys, i)); return n; }
    jn(t, e, n, i, s) { k(kd, "Updating index entries for document '%s'", e.key); let a = []; return (function (c, h, f, m, p) { let A = c.getIterator(), C = h.getIterator(), D = Ln(A), N = Ln(C); for (; D || N;) {
        let q = !1, j = !1;
        if (D && N) {
            let B = f(D, N);
            B < 0 ? j = !0 : B > 0 && (q = !0);
        }
        else
            D != null ? j = !0 : q = !0;
        q ? (m(N), N = Ln(C)) : j ? (p(D), D = Ln(A)) : (D = Ln(A), N = Ln(C));
    } })(i, s, Pe, u => { a.push(this.Jn(t, e, n, u)); }, u => { a.push(this.Hn(t, e, n, u)); }), R.waitFor(a); }
    Wn(t) { let e = 1; return Bn(t).X({ index: Sf, reverse: !0, range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER]) }, (n, i, s) => { s.done(), e = i.sequenceNumber + 1; }).next(() => e); }
    createRange(t, e, n) { n = n.sort((a, u) => Pe(a, u)).filter((a, u, c) => !u || Pe(a, c[u - 1]) !== 0); let i = []; i.push(t); for (let a of n) {
        let u = Pe(a, t), c = Pe(a, e);
        if (u === 0)
            i[0] = t.En();
        else if (u > 0 && c < 0)
            i.push(a), i.push(a.En());
        else if (c > 0)
            break;
    } i.push(e); let s = []; for (let a = 0; a < i.length; a += 2) {
        if (this.Yn(i[a], i[a + 1]))
            return [];
        let u = i[a].Rn(this.uid, ys, M.empty()), c = i[a + 1].Rn(this.uid, ys, M.empty());
        s.push(IDBKeyRange.bound(u, c));
    } return s; }
    Yn(t, e) { return Pe(t, e) > 0; }
    getMinOffsetFromCollectionGroup(t, e) { return this.getFieldIndexes(t, e).next(Od); }
    getMinOffset(t, e) { return R.mapArray(this.Fn(e), n => this.Mn(t, n).next(i => i || L(44426))).next(Od); }
};
function Fd(r) { return Et(r, gi); }
function Un(r) { return Et(r, ii); }
function Jr(r) { return Et(r, el); }
function Bn(r) { return Et(r, ri); }
function Od(r) { U(r.length !== 0, 28825); let t = r[0].indexState.offset, e = t.largestBatchId; for (let n = 1; n < r.length; n++) {
    let i = r[n].indexState.offset;
    Yc(i, t) < 0 && (t = i), e < i.largestBatchId && (e = i.largestBatchId);
} return new Kt(t.readTime, t.documentKey, e); }
var Md = { didRun: !1, sequenceNumbersCollected: 0, targetsRemoved: 0, documentsRemoved: 0 }, Rm = 41943040, Mt = class r {
    static withCacheSize(t) { return new r(t, r.DEFAULT_COLLECTION_PERCENTILE, r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT); }
    constructor(t, e, n) { this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n; }
};
function Pm(r, t, e) { let n = r.store(Qt), i = r.store(er), s = [], a = IDBKeyRange.only(e.batchId), u = 0, c = n.X({ range: a }, (f, m, p) => (u++, p.delete())); s.push(c.next(() => { U(u === 1, 47070, { batchId: e.batchId }); })); let h = []; for (let f of e.mutations) {
    let m = Ef(t, f.key.path, e.batchId);
    s.push(i.delete(m)), h.push(f.key);
} return R.waitFor(s).next(() => h); }
function to(r) { if (!r)
    return 0; let t; if (r.document)
    t = r.document;
else if (r.unknownDocument)
    t = r.unknownDocument;
else {
    if (!r.noDocument)
        throw L(14731);
    t = r.noDocument;
} return JSON.stringify(t).length; }
Mt.DEFAULT_COLLECTION_PERCENTILE = 10, Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Mt.DEFAULT = new Mt(Rm, Mt.DEFAULT_COLLECTION_PERCENTILE, Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Mt.DISABLED = new Mt(-1, 0, 0);
var eo = class r {
    constructor(t, e, n, i) { this.userId = t, this.serializer = e, this.indexManager = n, this.referenceDelegate = i, this.Zn = {}; }
    static yt(t, e, n, i) { U(t.uid !== "", 64387); let s = t.isAuthenticated() ? t.uid : ""; return new r(s, e, n, i); }
    checkEmpty(t) { let e = !0, n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]); return Ve(t).X({ index: hn, range: n }, (i, s, a) => { e = !1, a.done(); }).next(() => e); }
    addMutationBatch(t, e, n, i) { let s = $n(t), a = Ve(t); return a.add({}).next(u => { U(typeof u == "number", 49019); let c = new Ii(u, e, n, i), h = (function (A, C, D) { let N = D.baseMutations.map(j => Ri(A.gt, j)), q = D.mutations.map(j => Ri(A.gt, j)); return { userId: C, batchId: D.batchId, localWriteTimeMs: D.localWriteTime.toMillis(), baseMutations: N, mutations: q }; })(this.serializer, this.userId, c), f = [], m = new nt((p, A) => G(p.canonicalString(), A.canonicalString())); for (let p of i) {
        let A = Ef(this.userId, p.key.path, u);
        m = m.add(p.key.path.popLast()), f.push(a.put(h)), f.push(s.put(A, mp));
    } return m.forEach(p => { f.push(this.indexManager.addToCollectionParentIndex(t, p)); }), t.addOnCommittedListener(() => { this.Zn[u] = c.keys(); }), R.waitFor(f).next(() => c); }); }
    lookupMutationBatch(t, e) { return Ve(t).get(e).next(n => n ? (U(n.userId === this.userId, 48, "Unexpected user for mutation batch", { userId: n.userId, batchId: e }), un(this.serializer, n)) : null); }
    Xn(t, e) { return this.Zn[e] ? R.resolve(this.Zn[e]) : this.lookupMutationBatch(t, e).next(n => { if (n) {
        let i = n.keys();
        return this.Zn[e] = i, i;
    } return null; }); }
    getNextMutationBatchAfterBatchId(t, e) { let n = e + 1, i = IDBKeyRange.lowerBound([this.userId, n]), s = null; return Ve(t).X({ index: hn, range: i }, (a, u, c) => { u.userId === this.userId && (U(u.batchId >= n, 47524, { er: n }), s = un(this.serializer, u)), c.done(); }).next(() => s); }
    getHighestUnacknowledgedBatchId(t) { let e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n = Fe; return Ve(t).X({ index: hn, range: e, reverse: !0 }, (i, s, a) => { n = s.batchId, a.done(); }).next(() => n); }
    getAllMutationBatches(t) { let e = IDBKeyRange.bound([this.userId, Fe], [this.userId, Number.POSITIVE_INFINITY]); return Ve(t).j(hn, e).next(n => n.map(i => un(this.serializer, i))); }
    getAllMutationBatchesAffectingDocumentKey(t, e) { let n = Is(this.userId, e.path), i = IDBKeyRange.lowerBound(n), s = []; return $n(t).X({ range: i }, (a, u, c) => { let [h, f, m] = a, p = Zt(f); if (h === this.userId && e.path.isEqual(p))
        return Ve(t).get(m).next(A => { if (!A)
            throw L(61480, { tr: a, batchId: m }); U(A.userId === this.userId, 10503, "Unexpected user for mutation batch", { userId: A.userId, batchId: m }), s.push(un(this.serializer, A)); }); c.done(); }).next(() => s); }
    getAllMutationBatchesAffectingDocumentKeys(t, e) { let n = new nt(G), i = []; return e.forEach(s => { let a = Is(this.userId, s.path), u = IDBKeyRange.lowerBound(a), c = $n(t).X({ range: u }, (h, f, m) => { let [p, A, C] = h, D = Zt(A); p === this.userId && s.path.isEqual(D) ? n = n.add(C) : m.done(); }); i.push(c); }), R.waitFor(i).next(() => this.nr(t, n)); }
    getAllMutationBatchesAffectingQuery(t, e) { let n = e.path, i = n.length + 1, s = Is(this.userId, n), a = IDBKeyRange.lowerBound(s), u = new nt(G); return $n(t).X({ range: a }, (c, h, f) => { let [m, p, A] = c, C = Zt(p); m === this.userId && n.isPrefixOf(C) ? C.length === i && (u = u.add(A)) : f.done(); }).next(() => this.nr(t, u)); }
    nr(t, e) { let n = [], i = []; return e.forEach(s => { i.push(Ve(t).get(s).next(a => { if (a === null)
        throw L(35274, { batchId: s }); U(a.userId === this.userId, 9748, "Unexpected user for mutation batch", { userId: a.userId, batchId: s }), n.push(un(this.serializer, a)); })); }), R.waitFor(i).next(() => n); }
    removeMutationBatch(t, e) { return Pm(t.ce, this.userId, e).next(n => (t.addOnCommittedListener(() => { this.rr(e.batchId); }), R.forEach(n, i => this.referenceDelegate.markPotentiallyOrphaned(t, i)))); }
    rr(t) { delete this.Zn[t]; }
    performConsistencyCheck(t) { return this.checkEmpty(t).next(e => { if (!e)
        return R.resolve(); let n = IDBKeyRange.lowerBound((function (a) { return [a]; })(this.userId)), i = []; return $n(t).X({ range: n }, (s, a, u) => { if (s[0] === this.userId) {
        let c = Zt(s[1]);
        i.push(c);
    }
    else
        u.done(); }).next(() => { U(i.length === 0, 56720, { ir: i.map(s => s.canonicalString()) }); }); }); }
    containsKey(t, e) { return Vm(t, this.userId, e); }
    sr(t) { return Cm(t).get(this.userId).next(e => e || { userId: this.userId, lastAcknowledgedBatchId: Fe, lastStreamToken: "" }); }
};
function Vm(r, t, e) { let n = Is(t, e.path), i = n[1], s = IDBKeyRange.lowerBound(n), a = !1; return $n(r).X({ range: s, Z: !0 }, (u, c, h) => { let [f, m, p] = u; f === t && m === i && (a = !0), h.done(); }).next(() => a); }
function Ve(r) { return Et(r, Qt); }
function $n(r) { return Et(r, er); }
function Cm(r) { return Et(r, fi); }
var fr = class r {
    constructor(t) { this._r = t; }
    next() { return this._r += 2, this._r; }
    static ar() { return new r(0); }
    static ur() { return new r(-1); }
};
var Ou = class {
    constructor(t, e) { this.referenceDelegate = t, this.serializer = e; }
    allocateTargetId(t) { return this.cr(t).next(e => { let n = new fr(e.highestTargetId); return e.highestTargetId = n.next(), this.lr(t, e).next(() => e.highestTargetId); }); }
    getLastRemoteSnapshotVersion(t) { return this.cr(t).next(e => z.fromTimestamp(new ut(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds))); }
    getHighestSequenceNumber(t) { return this.cr(t).next(e => e.highestListenSequenceNumber); }
    setTargetsMetadata(t, e, n) { return this.cr(t).next(i => (i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), this.lr(t, i))); }
    addTargetData(t, e) { return this.hr(t, e).next(() => this.cr(t).next(n => (n.targetCount += 1, this.Pr(e, n), this.lr(t, n)))); }
    updateTargetData(t, e) { return this.hr(t, e); }
    removeTargetData(t, e) { return this.removeMatchingKeysForTargetId(t, e.targetId).next(() => jn(t).delete(e.targetId)).next(() => this.cr(t)).next(n => (U(n.targetCount > 0, 8065), n.targetCount -= 1, this.lr(t, n))); }
    removeTargets(t, e, n) { let i = 0, s = []; return jn(t).X((a, u) => { let c = ei(u); c.sequenceNumber <= e && n.get(c.targetId) === null && (i++, s.push(this.removeTargetData(t, c))); }).next(() => R.waitFor(s)).next(() => i); }
    forEachTarget(t, e) { return jn(t).X((n, i) => { let s = ei(i); e(s); }); }
    cr(t) { return Ld(t).get(Os).next(e => (U(e !== null, 2888), e)); }
    lr(t, e) { return Ld(t).put(Os, e); }
    hr(t, e) { return jn(t).put(Am(this.serializer, e)); }
    Pr(t, e) { let n = !1; return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n; }
    getTargetCount(t) { return this.cr(t).next(e => e.targetCount); }
    getTargetData(t, e) { let n = yn(e), i = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]), s = null; return jn(t).X({ range: i, index: bf }, (a, u, c) => { let h = ei(u); Ki(e, h.target) && (s = h, c.done()); }).next(() => s); }
    addMatchingKeys(t, e, n) { let i = [], s = De(t); return e.forEach(a => { let u = Dt(a.path); i.push(s.put({ targetId: n, path: u })), i.push(this.referenceDelegate.addReference(t, n, a)); }), R.waitFor(i); }
    removeMatchingKeys(t, e, n) { let i = De(t); return R.forEach(e, s => { let a = Dt(s.path); return R.waitFor([i.delete([n, a]), this.referenceDelegate.removeReference(t, n, s)]); }); }
    removeMatchingKeysForTargetId(t, e) { let n = De(t), i = IDBKeyRange.bound([e], [e + 1], !1, !0); return n.delete(i); }
    getMatchingKeysForTargetId(t, e) { let n = IDBKeyRange.bound([e], [e + 1], !1, !0), i = De(t), s = K(); return i.X({ range: n, Z: !0 }, (a, u, c) => { let h = Zt(a[1]), f = new M(h); s = s.add(f); }).next(() => s); }
    containsKey(t, e) { let n = Dt(e.path), i = IDBKeyRange.bound([n], [gf(n)], !1, !0), s = 0; return De(t).X({ index: tl, Z: !0, range: i }, ([a, u], c, h) => { a !== 0 && (s++, h.done()); }).next(() => s > 0); }
    Et(t, e) { return jn(t).get(e).next(n => n ? ei(n) : null); }
};
function jn(r) { return Et(r, nr); }
function Ld(r) { return Et(r, mn); }
function De(r) { return Et(r, rr); }
var qd = "LruGarbageCollector", xm = 1048576;
function Ud([r, t], [e, n]) { let i = G(r, e); return i === 0 ? G(t, n) : i; }
var Mu = class {
    constructor(t) { this.Tr = t, this.buffer = new nt(Ud), this.Ir = 0; }
    dr() { return ++this.Ir; }
    Er(t) { let e = [t, this.dr()]; if (this.buffer.size < this.Tr)
        this.buffer = this.buffer.add(e);
    else {
        let n = this.buffer.last();
        Ud(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
    } }
    get maxValue() { return this.buffer.last()[0]; }
}, no = class {
    constructor(t, e, n) { this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.Ar = null; }
    start() { this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 && this.Rr(6e4); }
    stop() { this.Ar && (this.Ar.cancel(), this.Ar = null); }
    get started() { return this.Ar !== null; }
    Rr(t) { k(qd, `Garbage collection scheduled in ${t}ms`), this.Ar = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t, () => V(this, null, function* () { this.Ar = null; try {
        yield this.localStore.collectGarbage(this.garbageCollector);
    }
    catch (e) {
        He(e) ? k(qd, "Ignoring IndexedDB error during garbage collection: ", e) : yield We(e);
    } yield this.Rr(3e5); })); }
}, Lu = class {
    constructor(t, e) { this.Vr = t, this.params = e; }
    calculateTargetCount(t, e) { return this.Vr.mr(t).next(n => Math.floor(e / 100 * n)); }
    nthSequenceNumber(t, e) { if (e === 0)
        return R.resolve(Bt.ue); let n = new Mu(e); return this.Vr.forEachTarget(t, i => n.Er(i.sequenceNumber)).next(() => this.Vr.gr(t, i => n.Er(i))).next(() => n.maxValue); }
    removeTargets(t, e, n) { return this.Vr.removeTargets(t, e, n); }
    removeOrphanedDocuments(t, e) { return this.Vr.removeOrphanedDocuments(t, e); }
    collect(t, e) { return this.params.cacheSizeCollectionThreshold === -1 ? (k("LruGarbageCollector", "Garbage collection skipped; disabled"), R.resolve(Md)) : this.getCacheSize(t).next(n => n < this.params.cacheSizeCollectionThreshold ? (k("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Md) : this.pr(t, e)); }
    getCacheSize(t) { return this.Vr.getCacheSize(t); }
    pr(t, e) {
        let n, i, s, a, u, c, h, f = Date.now();
        return this.calculateTargetCount(t, this.params.percentileToCollect).next(m => (m > this.params.maximumSequenceNumbersToCollect ? (k("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`), i = this.params.maximumSequenceNumbersToCollect) : i = m, a = Date.now(), this.nthSequenceNumber(t, i))).next(m => (n = m, u = Date.now(), this.removeTargets(t, n, e))).next(m => (s = m, c = Date.now(), this.removeOrphanedDocuments(t, n))).next(m => (h = Date.now(), zn() <= Jt.DEBUG && k("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${a - f}ms
	Determined least recently used ${i} in ` + (u - a) + `ms
	Removed ${s} targets in ` + (c - u) + `ms
	Removed ${m} documents in ` + (h - c) + `ms
Total Duration: ${h - f}ms`), R.resolve({ didRun: !0, sequenceNumbersCollected: i, targetsRemoved: s, documentsRemoved: m })));
    }
};
function Dm(r, t) { return new Lu(r, t); }
var qu = class {
    constructor(t, e) { this.db = t, this.garbageCollector = Dm(this, e); }
    mr(t) { let e = this.yr(t); return this.db.getTargetCache().getTargetCount(t).next(n => e.next(i => n + i)); }
    yr(t) { let e = 0; return this.gr(t, n => { e++; }).next(() => e); }
    forEachTarget(t, e) { return this.db.getTargetCache().forEachTarget(t, e); }
    gr(t, e) { return this.wr(t, (n, i) => e(i)); }
    addReference(t, e, n) { return _s(t, n); }
    removeReference(t, e, n) { return _s(t, n); }
    removeTargets(t, e, n) { return this.db.getTargetCache().removeTargets(t, e, n); }
    markPotentiallyOrphaned(t, e) { return _s(t, e); }
    Sr(t, e) { return (function (i, s) { let a = !1; return Cm(i).ee(u => Vm(i, u, s).next(c => (c && (a = !0), R.resolve(!c)))).next(() => a); })(t, e); }
    removeOrphanedDocuments(t, e) { let n = this.db.getRemoteDocumentCache().newChangeBuffer(), i = [], s = 0; return this.wr(t, (a, u) => { if (u <= e) {
        let c = this.Sr(t, a).next(h => { if (!h)
            return s++, n.getEntry(t, a).next(() => (n.removeEntry(a, z.min()), De(t).delete((function (m) { return [0, Dt(m.path)]; })(a)))); });
        i.push(c);
    } }).next(() => R.waitFor(i)).next(() => n.apply(t)).next(() => s); }
    removeTarget(t, e) { let n = e.withSequenceNumber(t.currentSequenceNumber); return this.db.getTargetCache().updateTargetData(t, n); }
    updateLimboDocument(t, e) { return _s(t, e); }
    wr(t, e) { let n = De(t), i, s = Bt.ue; return n.X({ index: tl }, ([a, u], { path: c, sequenceNumber: h }) => { a === 0 ? (s !== Bt.ue && e(new M(Zt(i)), s), s = h, i = c) : s = Bt.ue; }).next(() => { s !== Bt.ue && e(new M(Zt(i)), s); }); }
    getCacheSize(t) { return this.db.getRemoteDocumentCache().getSize(t); }
};
function _s(r, t) { return De(r).put((function (n, i) { return { targetId: 0, path: Dt(n.path), sequenceNumber: i }; })(t, r.currentSequenceNumber)); }
var ro = class {
    constructor() { this.changes = new Ht(t => t.toString(), (t, e) => t.isEqual(e)), this.changesApplied = !1; }
    addEntry(t) { this.assertNotApplied(), this.changes.set(t.key, t); }
    removeEntry(t, e) { this.assertNotApplied(), this.changes.set(t, It.newInvalidDocument(t).setReadTime(e)); }
    getEntry(t, e) { this.assertNotApplied(); let n = this.changes.get(e); return n !== void 0 ? R.resolve(n) : this.getFromCache(t, e); }
    getEntries(t, e) { return this.getAllFromCache(t, e); }
    apply(t) { return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t); }
    assertNotApplied() { }
};
var Uu = class {
    constructor(t) { this.serializer = t; }
    setIndexManager(t) { this.indexManager = t; }
    addEntry(t, e, n) { return rn(t).put(n); }
    removeEntry(t, e, n) { return rn(t).delete((function (s, a) { let u = s.path.toArray(); return [u.slice(0, u.length - 2), u[u.length - 2], Xs(a), u[u.length - 1]]; })(e, n)); }
    updateMetadata(t, e) { return this.getMetadata(t).next(n => (n.byteSize += e, this.br(t, n))); }
    getEntry(t, e) { let n = It.newInvalidDocument(e); return rn(t).X({ index: Es, range: IDBKeyRange.only(Yr(e)) }, (i, s) => { n = this.Dr(e, s); }).next(() => n); }
    vr(t, e) { let n = { size: 0, document: It.newInvalidDocument(e) }; return rn(t).X({ index: Es, range: IDBKeyRange.only(Yr(e)) }, (i, s) => { n = { document: this.Dr(e, s), size: to(s) }; }).next(() => n); }
    getEntries(t, e) { let n = Lt(); return this.Cr(t, e, (i, s) => { let a = this.Dr(i, s); n = n.insert(i, a); }).next(() => n); }
    Fr(t, e) { let n = Lt(), i = new ot(M.comparator); return this.Cr(t, e, (s, a) => { let u = this.Dr(s, a); n = n.insert(s, u), i = i.insert(s, to(a)); }).next(() => ({ documents: n, Mr: i })); }
    Cr(t, e, n) { if (e.isEmpty())
        return R.resolve(); let i = new nt(zd); e.forEach(c => i = i.add(c)); let s = IDBKeyRange.bound(Yr(i.first()), Yr(i.last())), a = i.getIterator(), u = a.getNext(); return rn(t).X({ index: Es, range: s }, (c, h, f) => { let m = M.fromSegments([...h.prefixPath, h.collectionGroup, h.documentId]); for (; u && zd(u, m) < 0;)
        n(u, null), u = a.getNext(); u && u.isEqual(m) && (n(u, h), u = a.hasNext() ? a.getNext() : null), u ? f.G(Yr(u)) : f.done(); }).next(() => { for (; u;)
        n(u, null), u = a.hasNext() ? a.getNext() : null; }); }
    getDocumentsMatchingQuery(t, e, n, i, s) { let a = e.path, u = [a.popLast().toArray(), a.lastSegment(), Xs(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], c = [a.popLast().toArray(), a.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""]; return rn(t).j(IDBKeyRange.bound(u, c, !0)).next(h => { s?.incrementDocumentReadCount(h.length); let f = Lt(); for (let m of h) {
        let p = this.Dr(M.fromSegments(m.prefixPath.concat(m.collectionGroup, m.documentId)), m);
        p.isFoundDocument() && (Qi(e, p) || i.has(p.key)) && (f = f.insert(p.key, p));
    } return f; }); }
    getAllFromCollectionGroup(t, e, n, i) { let s = Lt(), a = jd(e, n), u = jd(e, Kt.max()); return rn(t).X({ index: Af, range: IDBKeyRange.bound(a, u, !0) }, (c, h, f) => { let m = this.Dr(M.fromSegments(h.prefixPath.concat(h.collectionGroup, h.documentId)), h); s = s.insert(m.key, m), s.size === i && f.done(); }).next(() => s); }
    newChangeBuffer(t) { return new Bu(this, !!t && t.trackRemovals); }
    getSize(t) { return this.getMetadata(t).next(e => e.byteSize); }
    getMetadata(t) { return Bd(t).get(Za).next(e => (U(!!e, 20021), e)); }
    br(t, e) { return Bd(t).put(Za, e); }
    Dr(t, e) { if (e) {
        let n = hy(this.serializer, e);
        if (!(n.isNoDocument() && n.version.isEqual(z.min())))
            return n;
    } return It.newInvalidDocument(t); }
};
function Nm(r) { return new Uu(r); }
var Bu = class extends ro {
    constructor(t, e) { super(), this.Or = t, this.trackRemovals = e, this.Nr = new Ht(n => n.toString(), (n, i) => n.isEqual(i)); }
    applyChanges(t) { let e = [], n = 0, i = new nt((s, a) => G(s.canonicalString(), a.canonicalString())); return this.changes.forEach((s, a) => { let u = this.Nr.get(s); if (e.push(this.Or.removeEntry(t, s, u.readTime)), a.isValidDocument()) {
        let c = bd(this.Or.serializer, a);
        i = i.add(s.path.popLast());
        let h = to(c);
        n += h - u.size, e.push(this.Or.addEntry(t, s, c));
    }
    else if (n -= u.size, this.trackRemovals) {
        let c = bd(this.Or.serializer, a.convertToNoDocument(z.min()));
        e.push(this.Or.addEntry(t, s, c));
    } }), i.forEach(s => { e.push(this.Or.indexManager.addToCollectionParentIndex(t, s)); }), e.push(this.Or.updateMetadata(t, n)), R.waitFor(e); }
    getFromCache(t, e) { return this.Or.vr(t, e).next(n => (this.Nr.set(e, { size: n.size, readTime: n.document.readTime }), n.document)); }
    getAllFromCache(t, e) { return this.Or.Fr(t, e).next(({ documents: n, Mr: i }) => (i.forEach((s, a) => { this.Nr.set(s, { size: a, readTime: n.get(s).readTime }); }), n)); }
};
function Bd(r) { return Et(r, mi); }
function rn(r) { return Et(r, Fs); }
function Yr(r) { let t = r.path.toArray(); return [t.slice(0, t.length - 2), t[t.length - 2], t[t.length - 1]]; }
function jd(r, t) { let e = t.documentKey.path.toArray(); return [r, Xs(t.readTime), e.slice(0, e.length - 2), e.length > 0 ? e[e.length - 1] : ""]; }
function zd(r, t) { let e = r.path.toArray(), n = t.path.toArray(), i = 0; for (let s = 0; s < e.length - 2 && s < n.length - 2; ++s)
    if (i = G(e[s], n[s]), i)
        return i; return i = G(e.length, n.length), i || (i = G(e[e.length - 2], n[n.length - 2]), i || G(e[e.length - 1], n[n.length - 1])); }
var ju = class {
    constructor(t, e) { this.overlayedDocument = t, this.mutatedFields = e; }
};
var io = class {
    constructor(t, e, n, i) { this.remoteDocumentCache = t, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = i; }
    getDocument(t, e) { let n = null; return this.documentOverlayCache.getOverlay(t, e).next(i => (n = i, this.remoteDocumentCache.getEntry(t, e))).next(i => (n !== null && ai(n.mutation, i, jt.empty(), ut.now()), i)); }
    getDocuments(t, e) { return this.remoteDocumentCache.getEntries(t, e).next(n => this.getLocalViewOfDocuments(t, n, K()).next(() => n)); }
    getLocalViewOfDocuments(t, e, n = K()) { let i = te(); return this.populateOverlays(t, i, e).next(() => this.computeViews(t, e, i, n).next(s => { let a = ti(); return s.forEach((u, c) => { a = a.insert(u, c.overlayedDocument); }), a; })); }
    getOverlayedDocuments(t, e) { let n = te(); return this.populateOverlays(t, n, e).next(() => this.computeViews(t, e, n, K())); }
    populateOverlays(t, e, n) { let i = []; return n.forEach(s => { e.has(s) || i.push(s); }), this.documentOverlayCache.getOverlays(t, i).next(s => { s.forEach((a, u) => { e.set(a, u); }); }); }
    computeViews(t, e, n, i) { let s = Lt(), a = oi(), u = (function () { return oi(); })(); return e.forEach((c, h) => { let f = n.get(h.key); i.has(h.key) && (f === void 0 || f.mutation instanceof Xt) ? s = s.insert(h.key, h) : f !== void 0 ? (a.set(h.key, f.mutation.getFieldMask()), ai(f.mutation, h, f.mutation.getFieldMask(), ut.now())) : a.set(h.key, jt.empty()); }), this.recalculateAndSaveOverlays(t, s).next(c => (c.forEach((h, f) => a.set(h, f)), e.forEach((h, f) => { var m; return u.set(h, new ju(f, (m = a.get(h)) !== null && m !== void 0 ? m : null)); }), u)); }
    recalculateAndSaveOverlays(t, e) { let n = oi(), i = new ot((a, u) => a - u), s = K(); return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, e).next(a => { for (let u of a)
        u.keys().forEach(c => { let h = e.get(c); if (h === null)
            return; let f = n.get(c) || jt.empty(); f = u.applyToLocalView(h, f), n.set(c, f); let m = (i.get(u.batchId) || K()).add(c); i = i.insert(u.batchId, m); }); }).next(() => { let a = [], u = i.getReverseIterator(); for (; u.hasNext();) {
        let c = u.getNext(), h = c.key, f = c.value, m = nm();
        f.forEach(p => { if (!s.has(p)) {
            let A = cm(e.get(p), n.get(p));
            A !== null && m.set(p, A), s = s.add(p);
        } }), a.push(this.documentOverlayCache.saveOverlays(t, h, m));
    } return R.waitFor(a); }).next(() => n); }
    recalculateAndSaveOverlaysForDocumentKeys(t, e) { return this.remoteDocumentCache.getEntries(t, e).next(n => this.recalculateAndSaveOverlays(t, n)); }
    getDocumentsMatchingQuery(t, e, n, i) { return (function (a) { return M.isDocumentKey(a.path) && a.collectionGroup === null && a.filters.length === 0; })(e) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : al(e) ? this.getDocumentsMatchingCollectionGroupQuery(t, e, n, i) : this.getDocumentsMatchingCollectionQuery(t, e, n, i); }
    getNextDocuments(t, e, n, i) { return this.remoteDocumentCache.getAllFromCollectionGroup(t, e, n, i).next(s => { let a = i - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t, e, n.largestBatchId, i - s.size) : R.resolve(te()), u = Zn, c = s; return a.next(h => R.forEach(h, (f, m) => (u < m.largestBatchId && (u = m.largestBatchId), s.get(f) ? R.resolve() : this.remoteDocumentCache.getEntry(t, f).next(p => { c = c.insert(f, p); }))).next(() => this.populateOverlays(t, h, s)).next(() => this.computeViews(t, c, h, K())).next(f => ({ batchId: u, changes: em(f) }))); }); }
    getDocumentsMatchingDocumentQuery(t, e) { return this.getDocument(t, new M(e)).next(n => { let i = ti(); return n.isFoundDocument() && (i = i.insert(n.key, n)), i; }); }
    getDocumentsMatchingCollectionGroupQuery(t, e, n, i) { let s = e.collectionGroup, a = ti(); return this.indexManager.getCollectionParents(t, s).next(u => R.forEach(u, c => { let h = (function (m, p) { return new Wt(p, null, m.explicitOrderBy.slice(), m.filters.slice(), m.limit, m.limitType, m.startAt, m.endAt); })(e, c.child(s)); return this.getDocumentsMatchingCollectionQuery(t, h, n, i).next(f => { f.forEach((m, p) => { a = a.insert(m, p); }); }); }).next(() => a)); }
    getDocumentsMatchingCollectionQuery(t, e, n, i) { let s; return this.documentOverlayCache.getOverlaysForCollection(t, e.path, n.largestBatchId).next(a => (s = a, this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, n, s, i))).next(a => { s.forEach((c, h) => { let f = h.getKey(); a.get(f) === null && (a = a.insert(f, It.newInvalidDocument(f))); }); let u = ti(); return a.forEach((c, h) => { let f = s.get(c); f !== void 0 && ai(f.mutation, h, jt.empty(), ut.now()), Qi(e, h) && (u = u.insert(c, h)); }), u; }); }
};
var zu = class {
    constructor(t) { this.serializer = t, this.Br = new Map, this.Lr = new Map; }
    getBundleMetadata(t, e) { return R.resolve(this.Br.get(e)); }
    saveBundleMetadata(t, e) { return this.Br.set(e.id, (function (i) { return { id: i.id, version: i.version, createTime: ft(i.createTime) }; })(e)), R.resolve(); }
    getNamedQuery(t, e) { return R.resolve(this.Lr.get(e)); }
    saveNamedQuery(t, e) { return this.Lr.set(e.name, (function (i) { return { name: i.name, query: Bo(i.bundledQuery), readTime: ft(i.readTime) }; })(e)), R.resolve(); }
};
var Gu = class {
    constructor() { this.overlays = new ot(M.comparator), this.kr = new Map; }
    getOverlay(t, e) { return R.resolve(this.overlays.get(e)); }
    getOverlays(t, e) { let n = te(); return R.forEach(e, i => this.getOverlay(t, i).next(s => { s !== null && n.set(i, s); })).next(() => n); }
    saveOverlays(t, e, n) { return n.forEach((i, s) => { this.wt(t, e, s); }), R.resolve(); }
    removeOverlaysForBatchId(t, e, n) { let i = this.kr.get(n); return i !== void 0 && (i.forEach(s => this.overlays = this.overlays.remove(s)), this.kr.delete(n)), R.resolve(); }
    getOverlaysForCollection(t, e, n) { let i = te(), s = e.length + 1, a = new M(e.child("")), u = this.overlays.getIteratorFrom(a); for (; u.hasNext();) {
        let c = u.getNext().value, h = c.getKey();
        if (!e.isPrefixOf(h.path))
            break;
        h.path.length === s && c.largestBatchId > n && i.set(c.getKey(), c);
    } return R.resolve(i); }
    getOverlaysForCollectionGroup(t, e, n, i) { let s = new ot((h, f) => h - f), a = this.overlays.getIterator(); for (; a.hasNext();) {
        let h = a.getNext().value;
        if (h.getKey().getCollectionGroup() === e && h.largestBatchId > n) {
            let f = s.get(h.largestBatchId);
            f === null && (f = te(), s = s.insert(h.largestBatchId, f)), f.set(h.getKey(), h);
        }
    } let u = te(), c = s.getIterator(); for (; c.hasNext() && (c.getNext().value.forEach((h, f) => u.set(h, f)), !(u.size() >= i));)
        ; return R.resolve(u); }
    wt(t, e, n) { let i = this.overlays.get(n.key); if (i !== null) {
        let a = this.kr.get(i.largestBatchId).delete(n.key);
        this.kr.set(i.largestBatchId, a);
    } this.overlays = this.overlays.insert(n.key, new Ei(e, n)); let s = this.kr.get(e); s === void 0 && (s = K(), this.kr.set(e, s)), this.kr.set(e, s.add(n.key)); }
};
var Ku = class {
    constructor() { this.sessionToken = mt.EMPTY_BYTE_STRING; }
    getSessionToken(t) { return R.resolve(this.sessionToken); }
    setSessionToken(t, e) { return this.sessionToken = e, R.resolve(); }
};
var Vi = class {
    constructor() { this.qr = new nt(yt.Qr), this.$r = new nt(yt.Ur); }
    isEmpty() { return this.qr.isEmpty(); }
    addReference(t, e) { let n = new yt(t, e); this.qr = this.qr.add(n), this.$r = this.$r.add(n); }
    Kr(t, e) { t.forEach(n => this.addReference(n, e)); }
    removeReference(t, e) { this.Wr(new yt(t, e)); }
    Gr(t, e) { t.forEach(n => this.removeReference(n, e)); }
    zr(t) { let e = new M(new H([])), n = new yt(e, t), i = new yt(e, t + 1), s = []; return this.$r.forEachInRange([n, i], a => { this.Wr(a), s.push(a.key); }), s; }
    jr() { this.qr.forEach(t => this.Wr(t)); }
    Wr(t) { this.qr = this.qr.delete(t), this.$r = this.$r.delete(t); }
    Jr(t) { let e = new M(new H([])), n = new yt(e, t), i = new yt(e, t + 1), s = K(); return this.$r.forEachInRange([n, i], a => { s = s.add(a.key); }), s; }
    containsKey(t) { let e = new yt(t, 0), n = this.qr.firstAfterOrEqual(e); return n !== null && t.isEqual(n.key); }
}, yt = class {
    constructor(t, e) { this.key = t, this.Hr = e; }
    static Qr(t, e) { return M.comparator(t.key, e.key) || G(t.Hr, e.Hr); }
    static Ur(t, e) { return G(t.Hr, e.Hr) || M.comparator(t.key, e.key); }
};
var $u = class {
    constructor(t, e) { this.indexManager = t, this.referenceDelegate = e, this.mutationQueue = [], this.er = 1, this.Yr = new nt(yt.Qr); }
    checkEmpty(t) { return R.resolve(this.mutationQueue.length === 0); }
    addMutationBatch(t, e, n, i) { let s = this.er; this.er++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1]; let a = new Ii(s, e, n, i); this.mutationQueue.push(a); for (let u of i)
        this.Yr = this.Yr.add(new yt(u.key, s)), this.indexManager.addToCollectionParentIndex(t, u.key.path.popLast()); return R.resolve(a); }
    lookupMutationBatch(t, e) { return R.resolve(this.Zr(e)); }
    getNextMutationBatchAfterBatchId(t, e) { let n = e + 1, i = this.Xr(n), s = i < 0 ? 0 : i; return R.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null); }
    getHighestUnacknowledgedBatchId() { return R.resolve(this.mutationQueue.length === 0 ? Fe : this.er - 1); }
    getAllMutationBatches(t) { return R.resolve(this.mutationQueue.slice()); }
    getAllMutationBatchesAffectingDocumentKey(t, e) { let n = new yt(e, 0), i = new yt(e, Number.POSITIVE_INFINITY), s = []; return this.Yr.forEachInRange([n, i], a => { let u = this.Zr(a.Hr); s.push(u); }), R.resolve(s); }
    getAllMutationBatchesAffectingDocumentKeys(t, e) { let n = new nt(G); return e.forEach(i => { let s = new yt(i, 0), a = new yt(i, Number.POSITIVE_INFINITY); this.Yr.forEachInRange([s, a], u => { n = n.add(u.Hr); }); }), R.resolve(this.ei(n)); }
    getAllMutationBatchesAffectingQuery(t, e) { let n = e.path, i = n.length + 1, s = n; M.isDocumentKey(s) || (s = s.child("")); let a = new yt(new M(s), 0), u = new nt(G); return this.Yr.forEachWhile(c => { let h = c.key.path; return !!n.isPrefixOf(h) && (h.length === i && (u = u.add(c.Hr)), !0); }, a), R.resolve(this.ei(u)); }
    ei(t) { let e = []; return t.forEach(n => { let i = this.Zr(n); i !== null && e.push(i); }), e; }
    removeMutationBatch(t, e) { U(this.ti(e.batchId, "removed") === 0, 55003), this.mutationQueue.shift(); let n = this.Yr; return R.forEach(e.mutations, i => { let s = new yt(i.key, e.batchId); return n = n.delete(s), this.referenceDelegate.markPotentiallyOrphaned(t, i.key); }).next(() => { this.Yr = n; }); }
    rr(t) { }
    containsKey(t, e) { let n = new yt(e, 0), i = this.Yr.firstAfterOrEqual(n); return R.resolve(e.isEqual(i && i.key)); }
    performConsistencyCheck(t) { return this.mutationQueue.length, R.resolve(); }
    ti(t, e) { return this.Xr(t); }
    Xr(t) { return this.mutationQueue.length === 0 ? 0 : t - this.mutationQueue[0].batchId; }
    Zr(t) { let e = this.Xr(t); return e < 0 || e >= this.mutationQueue.length ? null : this.mutationQueue[e]; }
};
var Qu = class {
    constructor(t) { this.ni = t, this.docs = (function () { return new ot(M.comparator); })(), this.size = 0; }
    setIndexManager(t) { this.indexManager = t; }
    addEntry(t, e) { let n = e.key, i = this.docs.get(n), s = i ? i.size : 0, a = this.ni(e); return this.docs = this.docs.insert(n, { document: e.mutableCopy(), size: a }), this.size += a - s, this.indexManager.addToCollectionParentIndex(t, n.path.popLast()); }
    removeEntry(t) { let e = this.docs.get(t); e && (this.docs = this.docs.remove(t), this.size -= e.size); }
    getEntry(t, e) { let n = this.docs.get(e); return R.resolve(n ? n.document.mutableCopy() : It.newInvalidDocument(e)); }
    getEntries(t, e) { let n = Lt(); return e.forEach(i => { let s = this.docs.get(i); n = n.insert(i, s ? s.document.mutableCopy() : It.newInvalidDocument(i)); }), R.resolve(n); }
    getDocumentsMatchingQuery(t, e, n, i) { let s = Lt(), a = e.path, u = new M(a.child("__id-9223372036854775808__")), c = this.docs.getIteratorFrom(u); for (; c.hasNext();) {
        let { key: h, value: { document: f } } = c.getNext();
        if (!a.isPrefixOf(h.path))
            break;
        h.path.length > a.length + 1 || Yc(wf(f), n) <= 0 || (i.has(f.key) || Qi(e, f)) && (s = s.insert(f.key, f.mutableCopy()));
    } return R.resolve(s); }
    getAllFromCollectionGroup(t, e, n, i) { L(9500); }
    ri(t, e) { return R.forEach(this.docs, n => e(n)); }
    newChangeBuffer(t) { return new Wu(this); }
    getSize(t) { return R.resolve(this.size); }
}, Wu = class extends ro {
    constructor(t) { super(), this.Or = t; }
    applyChanges(t) { let e = []; return this.changes.forEach((n, i) => { i.isValidDocument() ? e.push(this.Or.addEntry(t, i)) : this.Or.removeEntry(n); }), R.waitFor(e); }
    getFromCache(t, e) { return this.Or.getEntry(t, e); }
    getAllFromCache(t, e) { return this.Or.getEntries(t, e); }
};
var Hu = class {
    constructor(t) { this.persistence = t, this.ii = new Ht(e => yn(e), Ki), this.lastRemoteSnapshotVersion = z.min(), this.highestTargetId = 0, this.si = 0, this.oi = new Vi, this.targetCount = 0, this._i = fr.ar(); }
    forEachTarget(t, e) { return this.ii.forEach((n, i) => e(i)), R.resolve(); }
    getLastRemoteSnapshotVersion(t) { return R.resolve(this.lastRemoteSnapshotVersion); }
    getHighestSequenceNumber(t) { return R.resolve(this.si); }
    allocateTargetId(t) { return this.highestTargetId = this._i.next(), R.resolve(this.highestTargetId); }
    setTargetsMetadata(t, e, n) { return n && (this.lastRemoteSnapshotVersion = n), e > this.si && (this.si = e), R.resolve(); }
    hr(t) { this.ii.set(t.target, t); let e = t.targetId; e > this.highestTargetId && (this._i = new fr(e), this.highestTargetId = e), t.sequenceNumber > this.si && (this.si = t.sequenceNumber); }
    addTargetData(t, e) { return this.hr(e), this.targetCount += 1, R.resolve(); }
    updateTargetData(t, e) { return this.hr(e), R.resolve(); }
    removeTargetData(t, e) { return this.ii.delete(e.target), this.oi.zr(e.targetId), this.targetCount -= 1, R.resolve(); }
    removeTargets(t, e, n) { let i = 0, s = []; return this.ii.forEach((a, u) => { u.sequenceNumber <= e && n.get(u.targetId) === null && (this.ii.delete(a), s.push(this.removeMatchingKeysForTargetId(t, u.targetId)), i++); }), R.waitFor(s).next(() => i); }
    getTargetCount(t) { return R.resolve(this.targetCount); }
    getTargetData(t, e) { let n = this.ii.get(e) || null; return R.resolve(n); }
    addMatchingKeys(t, e, n) { return this.oi.Kr(e, n), R.resolve(); }
    removeMatchingKeys(t, e, n) { this.oi.Gr(e, n); let i = this.persistence.referenceDelegate, s = []; return i && e.forEach(a => { s.push(i.markPotentiallyOrphaned(t, a)); }), R.waitFor(s); }
    removeMatchingKeysForTargetId(t, e) { return this.oi.zr(e), R.resolve(); }
    getMatchingKeysForTargetId(t, e) { let n = this.oi.Jr(e); return R.resolve(n); }
    containsKey(t, e) { return R.resolve(this.oi.containsKey(e)); }
};
var Ci = class {
    constructor(t, e) { this.ai = {}, this.overlays = {}, this.ui = new Bt(0), this.ci = !1, this.ci = !0, this.li = new Ku, this.referenceDelegate = t(this), this.hi = new Hu(this), this.indexManager = new ku, this.remoteDocumentCache = (function (i) { return new Qu(i); })(n => this.referenceDelegate.Pi(n)), this.serializer = new Hs(e), this.Ti = new zu(this.serializer); }
    start() { return Promise.resolve(); }
    shutdown() { return this.ci = !1, Promise.resolve(); }
    get started() { return this.ci; }
    setDatabaseDeletedListener() { }
    setNetworkEnabled() { }
    getIndexManager(t) { return this.indexManager; }
    getDocumentOverlayCache(t) { let e = this.overlays[t.toKey()]; return e || (e = new Gu, this.overlays[t.toKey()] = e), e; }
    getMutationQueue(t, e) { let n = this.ai[t.toKey()]; return n || (n = new $u(e, this.referenceDelegate), this.ai[t.toKey()] = n), n; }
    getGlobalsCache() { return this.li; }
    getTargetCache() { return this.hi; }
    getRemoteDocumentCache() { return this.remoteDocumentCache; }
    getBundleCache() { return this.Ti; }
    runTransaction(t, e, n) { k("MemoryPersistence", "Starting transaction:", t); let i = new Xu(this.ui.next()); return this.referenceDelegate.Ii(), n(i).next(s => this.referenceDelegate.di(i).next(() => s)).toPromise().then(s => (i.raiseOnCommittedEvent(), s)); }
    Ei(t, e) { return R.or(Object.values(this.ai).map(n => () => n.containsKey(t, e))); }
}, Xu = class extends Ds {
    constructor(t) { super(), this.currentSequenceNumber = t; }
}, so = class r {
    constructor(t) { this.persistence = t, this.Ai = new Vi, this.Ri = null; }
    static Vi(t) { return new r(t); }
    get mi() { if (this.Ri)
        return this.Ri; throw L(60996); }
    addReference(t, e, n) { return this.Ai.addReference(n, e), this.mi.delete(n.toString()), R.resolve(); }
    removeReference(t, e, n) { return this.Ai.removeReference(n, e), this.mi.add(n.toString()), R.resolve(); }
    markPotentiallyOrphaned(t, e) { return this.mi.add(e.toString()), R.resolve(); }
    removeTarget(t, e) { this.Ai.zr(e.targetId).forEach(i => this.mi.add(i.toString())); let n = this.persistence.getTargetCache(); return n.getMatchingKeysForTargetId(t, e.targetId).next(i => { i.forEach(s => this.mi.add(s.toString())); }).next(() => n.removeTargetData(t, e)); }
    Ii() { this.Ri = new Set; }
    di(t) { let e = this.persistence.getRemoteDocumentCache().newChangeBuffer(); return R.forEach(this.mi, n => { let i = M.fromPath(n); return this.fi(t, i).next(s => { s || e.removeEntry(i, z.min()); }); }).next(() => (this.Ri = null, e.apply(t))); }
    updateLimboDocument(t, e) { return this.fi(t, e).next(n => { n ? this.mi.delete(e.toString()) : this.mi.add(e.toString()); }); }
    Pi(t) { return 0; }
    fi(t, e) { return R.or([() => R.resolve(this.Ai.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Ei(t, e)]); }
}, oo = class r {
    constructor(t, e) { this.persistence = t, this.gi = new Ht(n => Dt(n.path), (n, i) => n.isEqual(i)), this.garbageCollector = Dm(this, e); }
    static Vi(t, e) { return new r(t, e); }
    Ii() { }
    di(t) { return R.resolve(); }
    forEachTarget(t, e) { return this.persistence.getTargetCache().forEachTarget(t, e); }
    mr(t) { let e = this.yr(t); return this.persistence.getTargetCache().getTargetCount(t).next(n => e.next(i => n + i)); }
    yr(t) { let e = 0; return this.gr(t, n => { e++; }).next(() => e); }
    gr(t, e) { return R.forEach(this.gi, (n, i) => this.Sr(t, n, i).next(s => s ? R.resolve() : e(i))); }
    removeTargets(t, e, n) { return this.persistence.getTargetCache().removeTargets(t, e, n); }
    removeOrphanedDocuments(t, e) { let n = 0, i = this.persistence.getRemoteDocumentCache(), s = i.newChangeBuffer(); return i.ri(t, a => this.Sr(t, a, e).next(u => { u || (n++, s.removeEntry(a, z.min())); })).next(() => s.apply(t)).next(() => n); }
    markPotentiallyOrphaned(t, e) { return this.gi.set(e, t.currentSequenceNumber), R.resolve(); }
    removeTarget(t, e) { let n = e.withSequenceNumber(t.currentSequenceNumber); return this.persistence.getTargetCache().updateTargetData(t, n); }
    addReference(t, e, n) { return this.gi.set(n, t.currentSequenceNumber), R.resolve(); }
    removeReference(t, e, n) { return this.gi.set(n, t.currentSequenceNumber), R.resolve(); }
    updateLimboDocument(t, e) { return this.gi.set(e, t.currentSequenceNumber), R.resolve(); }
    Pi(t) { let e = t.key.toString().length; return t.isFoundDocument() && (e += bs(t.data.value)), e; }
    Sr(t, e, n) { return R.or([() => this.persistence.Ei(t, e), () => this.persistence.getTargetCache().containsKey(t, e), () => { let i = this.gi.get(e); return R.resolve(i !== void 0 && i > n); }]); }
    getCacheSize(t) { return this.persistence.getRemoteDocumentCache().getSize(t); }
};
var Ju = class {
    constructor(t) { this.serializer = t; }
    q(t, e, n, i) { let s = new Ns("createOrUpgrade", e); n < 1 && i >= 1 && ((function (c) { c.createObjectStore(Gi); })(t), (function (c) { c.createObjectStore(fi, { keyPath: fp }), c.createObjectStore(Qt, { keyPath: rd, autoIncrement: !0 }).createIndex(hn, id, { unique: !0 }), c.createObjectStore(er); })(t), Gd(t), (function (c) { c.createObjectStore(on); })(t)); let a = R.resolve(); return n < 3 && i >= 3 && (n !== 0 && ((function (c) { c.deleteObjectStore(rr), c.deleteObjectStore(nr), c.deleteObjectStore(mn); })(t), Gd(t)), a = a.next(() => (function (c) { let h = c.store(mn), f = { highestTargetId: 0, highestListenSequenceNumber: 0, lastRemoteSnapshotVersion: z.min().toTimestamp(), targetCount: 0 }; return h.put(Os, f); })(s))), n < 4 && i >= 4 && (n !== 0 && (a = a.next(() => (function (c, h) { return h.store(Qt).j().next(m => { c.deleteObjectStore(Qt), c.createObjectStore(Qt, { keyPath: rd, autoIncrement: !0 }).createIndex(hn, id, { unique: !0 }); let p = h.store(Qt), A = m.map(C => p.put(C)); return R.waitFor(A); }); })(t, s))), a = a.next(() => { (function (c) { c.createObjectStore(ir, { keyPath: Ip }); })(t); })), n < 5 && i >= 5 && (a = a.next(() => this.pi(s))), n < 6 && i >= 6 && (a = a.next(() => ((function (c) { c.createObjectStore(mi); })(t), this.yi(s)))), n < 7 && i >= 7 && (a = a.next(() => this.wi(s))), n < 8 && i >= 8 && (a = a.next(() => this.Si(t, s))), n < 9 && i >= 9 && (a = a.next(() => { (function (c) { c.objectStoreNames.contains("remoteDocumentChanges") && c.deleteObjectStore("remoteDocumentChanges"); })(t); })), n < 10 && i >= 10 && (a = a.next(() => this.bi(s))), n < 11 && i >= 11 && (a = a.next(() => { (function (c) { c.createObjectStore(No, { keyPath: Ep }); })(t), (function (c) { c.createObjectStore(ko, { keyPath: Ap }); })(t); })), n < 12 && i >= 12 && (a = a.next(() => { (function (c) { let h = c.createObjectStore(Fo, { keyPath: xp }); h.createIndex(eu, Dp, { unique: !1 }), h.createIndex(Pf, Np, { unique: !1 }); })(t); })), n < 13 && i >= 13 && (a = a.next(() => (function (c) { let h = c.createObjectStore(Fs, { keyPath: gp }); h.createIndex(Es, pp), h.createIndex(Af, yp); })(t)).next(() => this.Di(t, s)).next(() => t.deleteObjectStore(on))), n < 14 && i >= 14 && (a = a.next(() => this.Ci(t, s))), n < 15 && i >= 15 && (a = a.next(() => (function (c) { c.createObjectStore(el, { keyPath: bp, autoIncrement: !0 }).createIndex(tu, Sp, { unique: !1 }), c.createObjectStore(ri, { keyPath: Rp }).createIndex(Sf, Pp, { unique: !1 }), c.createObjectStore(ii, { keyPath: Vp }).createIndex(Rf, Cp, { unique: !1 }); })(t))), n < 16 && i >= 16 && (a = a.next(() => { e.objectStore(ri).clear(); }).next(() => { e.objectStore(ii).clear(); })), n < 17 && i >= 17 && (a = a.next(() => { (function (c) { c.createObjectStore(nl, { keyPath: kp }); })(t); })), n < 18 && i >= 18 && Aa() && (a = a.next(() => { e.objectStore(ri).clear(); }).next(() => { e.objectStore(ii).clear(); })), a; }
    yi(t) { let e = 0; return t.store(on).X((n, i) => { e += to(i); }).next(() => { let n = { byteSize: e }; return t.store(mi).put(Za, n); }); }
    pi(t) { let e = t.store(fi), n = t.store(Qt); return e.j().next(i => R.forEach(i, s => { let a = IDBKeyRange.bound([s.userId, Fe], [s.userId, s.lastAcknowledgedBatchId]); return n.j(hn, a).next(u => R.forEach(u, c => { U(c.userId === s.userId, 18650, "Cannot process batch from unexpected user", { batchId: c.batchId }); let h = un(this.serializer, c); return Pm(t, s.userId, h).next(() => { }); })); })); }
    wi(t) { let e = t.store(rr), n = t.store(on); return t.store(mn).get(Os).next(i => { let s = []; return n.X((a, u) => { let c = new H(a), h = (function (m) { return [0, Dt(m)]; })(c); s.push(e.get(h).next(f => f ? R.resolve() : (m => e.put({ targetId: 0, path: Dt(m), sequenceNumber: i.highestListenSequenceNumber }))(c))); }).next(() => R.waitFor(s)); }); }
    Si(t, e) { t.createObjectStore(gi, { keyPath: Tp }); let n = e.store(gi), i = new Pi, s = a => { if (i.add(a)) {
        let u = a.lastSegment(), c = a.popLast();
        return n.put({ collectionId: u, parent: Dt(c) });
    } }; return e.store(on).X({ Z: !0 }, (a, u) => { let c = new H(a); return s(c.popLast()); }).next(() => e.store(er).X({ Z: !0 }, ([a, u, c], h) => { let f = Zt(u); return s(f.popLast()); })); }
    bi(t) { let e = t.store(nr); return e.X((n, i) => { let s = ei(i), a = Am(this.serializer, s); return e.put(a); }); }
    Di(t, e) { let n = e.store(on), i = []; return n.X((s, a) => { let u = e.store(Fs), c = (function (m) { return m.document ? new M(H.fromString(m.document.name).popFirst(5)) : m.noDocument ? M.fromSegments(m.noDocument.path) : m.unknownDocument ? M.fromSegments(m.unknownDocument.path) : L(36783); })(a).path.toArray(), h = { prefixPath: c.slice(0, c.length - 2), collectionGroup: c[c.length - 2], documentId: c[c.length - 1], readTime: a.readTime || [0, 0], unknownDocument: a.unknownDocument, noDocument: a.noDocument, document: a.document, hasCommittedMutations: !!a.hasCommittedMutations }; i.push(u.put(h)); }).next(() => R.waitFor(i)); }
    Ci(t, e) { let n = e.store(Qt), i = Nm(this.serializer), s = new Ci(so.Vi, this.serializer.gt); return n.j().next(a => { let u = new Map; return a.forEach(c => { var h; let f = (h = u.get(c.userId)) !== null && h !== void 0 ? h : K(); un(this.serializer, c).keys().forEach(m => f = f.add(m)), u.set(c.userId, f); }), R.forEach(u, (c, h) => { let f = new _t(h), m = Js.yt(this.serializer, f), p = s.getIndexManager(f), A = eo.yt(f, this.serializer, p, s.referenceDelegate); return new io(i, A, m, p).recalculateAndSaveOverlaysForDocumentKeys(new pi(e, Bt.ue), c).next(); }); }); }
};
function Gd(r) { r.createObjectStore(rr, { keyPath: wp }).createIndex(tl, vp, { unique: !0 }), r.createObjectStore(nr, { keyPath: "targetId" }).createIndex(bf, _p, { unique: !0 }), r.createObjectStore(mn); }
var Ce = "IndexedDbPersistence", ka = 18e5, Fa = 5e3, Oa = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", km = "main", Yu = class r {
    constructor(t, e, n, i, s, a, u, c, h, f, m = 18) { if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.Fi = s, this.window = a, this.document = u, this.Mi = h, this.xi = f, this.Oi = m, this.ui = null, this.ci = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Ni = null, this.inForeground = !1, this.Bi = null, this.Li = null, this.ki = Number.NEGATIVE_INFINITY, this.qi = p => Promise.resolve(), !r.C())
        throw new x(b.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."); this.referenceDelegate = new qu(this, i), this.Qi = e + km, this.serializer = new Hs(c), this.$i = new qe(this.Qi, this.Oi, new Ju(this.serializer)), this.li = new Ru, this.hi = new Ou(this.referenceDelegate, this.serializer), this.remoteDocumentCache = Nm(this.serializer), this.Ti = new Su, this.window && this.window.localStorage ? this.Ui = this.window.localStorage : (this.Ui = null, f === !1 && dt(Ce, "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.")); }
    start() { return this.Ki().then(() => { if (!this.isPrimary && !this.allowTabSynchronization)
        throw new x(b.FAILED_PRECONDITION, Oa); return this.Wi(), this.Gi(), this.zi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", t => this.hi.getHighestSequenceNumber(t)); }).then(t => { this.ui = new Bt(t, this.Mi); }).then(() => { this.ci = !0; }).catch(t => (this.$i && this.$i.close(), Promise.reject(t))); }
    ji(t) { return this.qi = e => V(this, null, function* () { if (this.started)
        return t(e); }), t(this.isPrimary); }
    setDatabaseDeletedListener(t) { this.$i.setDatabaseDeletedListener(t); }
    setNetworkEnabled(t) { this.networkEnabled !== t && (this.networkEnabled = t, this.Fi.enqueueAndForget(() => V(this, null, function* () { this.started && (yield this.Ki()); }))); }
    Ki() { return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", t => ws(t).put({ clientId: this.clientId, updateTimeMs: Date.now(), networkEnabled: this.networkEnabled, inForeground: this.inForeground }).next(() => { if (this.isPrimary)
        return this.Ji(t).next(e => { e || (this.isPrimary = !1, this.Fi.enqueueRetryable(() => this.qi(!1))); }); }).next(() => this.Hi(t)).next(e => this.isPrimary && !e ? this.Yi(t).next(() => !1) : !!e && this.Zi(t).next(() => !0))).catch(t => { if (He(t))
        return k(Ce, "Failed to extend owner lease: ", t), this.isPrimary; if (!this.allowTabSynchronization)
        throw t; return k(Ce, "Releasing owner lease after error during lease refresh", t), !1; }).then(t => { this.isPrimary !== t && this.Fi.enqueueRetryable(() => this.qi(t)), this.isPrimary = t; }); }
    Ji(t) { return Zr(t).get(Mn).next(e => R.resolve(this.Xi(e))); }
    es(t) { return ws(t).delete(this.clientId); }
    ts() { return V(this, null, function* () { if (this.isPrimary && !this.ns(this.ki, ka)) {
        this.ki = Date.now();
        let t = yield this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", e => { let n = Et(e, ir); return n.j().next(i => { let s = this.rs(i, ka), a = i.filter(u => s.indexOf(u) === -1); return R.forEach(a, u => n.delete(u.clientId)).next(() => a); }); }).catch(() => []);
        if (this.Ui)
            for (let e of t)
                this.Ui.removeItem(this.ss(e.clientId));
    } }); }
    zi() { this.Li = this.Fi.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.Ki().then(() => this.ts()).then(() => this.zi())); }
    Xi(t) { return !!t && t.ownerId === this.clientId; }
    Hi(t) { return this.xi ? R.resolve(!0) : Zr(t).get(Mn).next(e => { if (e !== null && this.ns(e.leaseTimestampMs, Fa) && !this._s(e.ownerId)) {
        if (this.Xi(e) && this.networkEnabled)
            return !0;
        if (!this.Xi(e)) {
            if (!e.allowTabSynchronization)
                throw new x(b.FAILED_PRECONDITION, Oa);
            return !1;
        }
    } return !(!this.networkEnabled || !this.inForeground) || ws(t).j().next(n => this.rs(n, Fa).find(i => { if (this.clientId !== i.clientId) {
        let s = !this.networkEnabled && i.networkEnabled, a = !this.inForeground && i.inForeground, u = this.networkEnabled === i.networkEnabled;
        if (s || a && u)
            return !0;
    } return !1; }) === void 0); }).next(e => (this.isPrimary !== e && k(Ce, `Client ${e ? "is" : "is not"} eligible for a primary lease.`), e)); }
    shutdown() { return V(this, null, function* () { this.ci = !1, this.us(), this.Li && (this.Li.cancel(), this.Li = null), this.cs(), this.ls(), yield this.$i.runTransaction("shutdown", "readwrite", [Gi, ir], t => { let e = new pi(t, Bt.ue); return this.Yi(e).next(() => this.es(e)); }), this.$i.close(), this.hs(); }); }
    rs(t, e) { return t.filter(n => this.ns(n.updateTimeMs, e) && !this._s(n.clientId)); }
    Ps() { return this.runTransaction("getActiveClients", "readonly", t => ws(t).j().next(e => this.rs(e, ka).map(n => n.clientId))); }
    get started() { return this.ci; }
    getGlobalsCache() { return this.li; }
    getMutationQueue(t, e) { return eo.yt(t, this.serializer, e, this.referenceDelegate); }
    getTargetCache() { return this.hi; }
    getRemoteDocumentCache() { return this.remoteDocumentCache; }
    getIndexManager(t) { return new Fu(t, this.serializer.gt.databaseId); }
    getDocumentOverlayCache(t) { return Js.yt(this.serializer, t); }
    getBundleCache() { return this.Ti; }
    runTransaction(t, e, n) { k(Ce, "Starting transaction:", t); let i = e === "readonly" ? "readonly" : "readwrite", s = (function (c) { return c === 18 ? Mp : c === 17 ? Df : c === 16 ? Op : c === 15 ? rl : c === 14 ? xf : c === 13 ? Cf : c === 12 ? Fp : c === 11 ? Vf : void L(60245); })(this.Oi), a; return this.$i.runTransaction(t, i, s, u => (a = new pi(u, this.ui ? this.ui.next() : Bt.ue), e === "readwrite-primary" ? this.Ji(a).next(c => !!c || this.Hi(a)).next(c => { if (!c)
        throw dt(`Failed to obtain primary lease for action '${t}'.`), this.isPrimary = !1, this.Fi.enqueueRetryable(() => this.qi(!1)), new x(b.FAILED_PRECONDITION, vf); return n(a); }).next(c => this.Zi(a).next(() => c)) : this.Ts(a).next(() => n(a)))).then(u => (a.raiseOnCommittedEvent(), u)); }
    Ts(t) { return Zr(t).get(Mn).next(e => { if (e !== null && this.ns(e.leaseTimestampMs, Fa) && !this._s(e.ownerId) && !this.Xi(e) && !(this.xi || this.allowTabSynchronization && e.allowTabSynchronization))
        throw new x(b.FAILED_PRECONDITION, Oa); }); }
    Zi(t) { let e = { ownerId: this.clientId, allowTabSynchronization: this.allowTabSynchronization, leaseTimestampMs: Date.now() }; return Zr(t).put(Mn, e); }
    static C() { return qe.C(); }
    Yi(t) { let e = Zr(t); return e.get(Mn).next(n => this.Xi(n) ? (k(Ce, "Releasing primary lease."), e.delete(Mn)) : R.resolve()); }
    ns(t, e) { let n = Date.now(); return !(t < n - e) && (!(t > n) || (dt(`Detected an update time that is in the future: ${t} > ${n}`), !1)); }
    Wi() { this.document !== null && typeof this.document.addEventListener == "function" && (this.Bi = () => { this.Fi.enqueueAndForget(() => (this.inForeground = this.document.visibilityState === "visible", this.Ki())); }, this.document.addEventListener("visibilitychange", this.Bi), this.inForeground = this.document.visibilityState === "visible"); }
    cs() { this.Bi && (this.document.removeEventListener("visibilitychange", this.Bi), this.Bi = null); }
    Gi() { var t; typeof ((t = this.window) === null || t === void 0 ? void 0 : t.addEventListener) == "function" && (this.Ni = () => { this.us(); let e = /(?:Version|Mobile)\/1[456]/; Ea() && (navigator.appVersion.match(e) || navigator.userAgent.match(e)) && this.Fi.enterRestrictedMode(!0), this.Fi.enqueueAndForget(() => this.shutdown()); }, this.window.addEventListener("pagehide", this.Ni)); }
    ls() { this.Ni && (this.window.removeEventListener("pagehide", this.Ni), this.Ni = null); }
    _s(t) { var e; try {
        let n = ((e = this.Ui) === null || e === void 0 ? void 0 : e.getItem(this.ss(t))) !== null;
        return k(Ce, `Client '${t}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    }
    catch (n) {
        return dt(Ce, "Failed to get zombied client id.", n), !1;
    } }
    us() { if (this.Ui)
        try {
            this.Ui.setItem(this.ss(this.clientId), String(Date.now()));
        }
        catch (t) {
            dt("Failed to set zombie client id.", t);
        } }
    hs() { if (this.Ui)
        try {
            this.Ui.removeItem(this.ss(this.clientId));
        }
        catch { } }
    ss(t) { return `firestore_zombie_${this.persistenceKey}_${t}`; }
};
function Zr(r) { return Et(r, Gi); }
function ws(r) { return Et(r, ir); }
function dl(r, t) { let e = r.projectId; return r.isDefaultDatabase || (e += "." + r.database), "firestore/" + t + "/" + e + "/"; }
var Zu = class r {
    constructor(t, e, n, i) { this.targetId = t, this.fromCache = e, this.Is = n, this.ds = i; }
    static Es(t, e) { let n = K(), i = K(); for (let s of e.docChanges)
        switch (s.type) {
            case 0:
                n = n.add(s.doc.key);
                break;
            case 1: i = i.add(s.doc.key);
        } return new r(t, e.fromCache, n, i); }
};
var tc = class {
    constructor() { this._documentReadCount = 0; }
    get documentReadCount() { return this._documentReadCount; }
    incrementDocumentReadCount(t) { this._documentReadCount += t; }
};
var ao = class {
    constructor() { this.As = !1, this.Rs = !1, this.Vs = 100, this.fs = (function () { return Ea() ? 8 : Tf(Wr()) > 0 ? 6 : 4; })(); }
    initialize(t, e) { this.gs = t, this.indexManager = e, this.As = !0; }
    getDocumentsMatchingQuery(t, e, n, i) { let s = { result: null }; return this.ps(t, e).next(a => { s.result = a; }).next(() => { if (!s.result)
        return this.ys(t, e, i, n).next(a => { s.result = a; }); }).next(() => { if (s.result)
        return; let a = new tc; return this.ws(t, e, a).next(u => { if (s.result = u, this.Rs)
        return this.Ss(t, e, a, u.size); }); }).next(() => s.result); }
    Ss(t, e, n, i) { return n.documentReadCount < this.Vs ? (zn() <= Jt.DEBUG && k("QueryEngine", "SDK will not create cache indexes for query:", Gn(e), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"), R.resolve()) : (zn() <= Jt.DEBUG && k("QueryEngine", "Query:", Gn(e), "scans", n.documentReadCount, "local documents and returns", i, "documents as results."), n.documentReadCount > this.fs * i ? (zn() <= Jt.DEBUG && k("QueryEngine", "The SDK decides to create cache indexes for query:", Gn(e), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(t, Nt(e))) : R.resolve()); }
    ps(t, e) { if (pd(e))
        return R.resolve(null); let n = Nt(e); return this.indexManager.getIndexType(t, n).next(i => i === 0 ? null : (e.limit !== null && i === 1 && (e = zs(e, null, "F"), n = Nt(e)), this.indexManager.getDocumentsMatchingTarget(t, n).next(s => { let a = K(...s); return this.gs.getDocuments(t, a).next(u => this.indexManager.getMinOffset(t, n).next(c => { let h = this.bs(e, u); return this.Ds(e, h, a, c.readTime) ? this.ps(t, zs(e, null, "F")) : this.vs(t, h, e, c); })); }))); }
    ys(t, e, n, i) { return pd(e) || i.isEqual(z.min()) ? R.resolve(null) : this.gs.getDocuments(t, n).next(s => { let a = this.bs(e, s); return this.Ds(e, a, n, i) ? R.resolve(null) : (zn() <= Jt.DEBUG && k("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), Gn(e)), this.vs(t, a, e, _f(i, Zn)).next(u => u)); }); }
    bs(t, e) { let n = new nt(Zf(t)); return e.forEach((i, s) => { Qi(t, s) && (n = n.add(s)); }), n; }
    Ds(t, e, n, i) { if (t.limit === null)
        return !1; if (n.size !== e.size)
        return !0; let s = t.limitType === "F" ? e.last() : e.first(); return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0); }
    ws(t, e, n) { return zn() <= Jt.DEBUG && k("QueryEngine", "Using full collection scan to execute query:", Gn(e)), this.gs.getDocumentsMatchingQuery(t, e, Kt.min(), n); }
    vs(t, e, n, i) { return this.gs.getDocumentsMatchingQuery(t, n, i).next(s => (e.forEach(a => { s = s.insert(a.key, a); }), s)); }
};
var fl = "LocalStore", my = 3e8, ec = class {
    constructor(t, e, n, i) { this.persistence = t, this.Cs = e, this.serializer = i, this.Fs = new ot(G), this.Ms = new Ht(s => yn(s), Ki), this.xs = new Map, this.Os = t.getRemoteDocumentCache(), this.hi = t.getTargetCache(), this.Ti = t.getBundleCache(), this.Ns(n); }
    Ns(t) { this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t), this.indexManager = this.persistence.getIndexManager(t), this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager), this.localDocuments = new io(this.Os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Os.setIndexManager(this.indexManager), this.Cs.initialize(this.localDocuments, this.indexManager); }
    collectGarbage(t) { return this.persistence.runTransaction("Collect garbage", "readwrite-primary", e => t.collect(e, this.Fs)); }
};
function Fm(r, t, e, n) { return new ec(r, t, e, n); }
function Om(r, t) { return V(this, null, function* () { let e = F(r); return yield e.persistence.runTransaction("Handle user change", "readonly", n => { let i; return e.mutationQueue.getAllMutationBatches(n).next(s => (i = s, e.Ns(t), e.mutationQueue.getAllMutationBatches(n))).next(s => { let a = [], u = [], c = K(); for (let h of i) {
    a.push(h.batchId);
    for (let f of h.mutations)
        c = c.add(f.key);
} for (let h of s) {
    u.push(h.batchId);
    for (let f of h.mutations)
        c = c.add(f.key);
} return e.localDocuments.getDocuments(n, c).next(h => ({ Bs: h, removedBatchIds: a, addedBatchIds: u })); }); }); }); }
function gy(r, t) { let e = F(r); return e.persistence.runTransaction("Acknowledge batch", "readwrite-primary", n => { let i = t.batch.keys(), s = e.Os.newChangeBuffer({ trackRemovals: !0 }); return (function (u, c, h, f) { let m = h.batch, p = m.keys(), A = R.resolve(); return p.forEach(C => { A = A.next(() => f.getEntry(c, C)).next(D => { let N = h.docVersions.get(C); U(N !== null, 48541), D.version.compareTo(N) < 0 && (m.applyToRemoteDocument(D, h), D.isValidDocument() && (D.setReadTime(h.commitVersion), f.addEntry(D))); }); }), A.next(() => u.mutationQueue.removeMutationBatch(c, m)); })(e, n, t, s).next(() => s.apply(n)).next(() => e.mutationQueue.performConsistencyCheck(n)).next(() => e.documentOverlayCache.removeOverlaysForBatchId(n, i, t.batch.batchId)).next(() => e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n, (function (u) { let c = K(); for (let h = 0; h < u.mutationResults.length; ++h)
    u.mutationResults[h].transformResults.length > 0 && (c = c.add(u.batch.mutations[h].key)); return c; })(t))).next(() => e.localDocuments.getDocuments(n, i)); }); }
function Mm(r) { let t = F(r); return t.persistence.runTransaction("Get last remote snapshot version", "readonly", e => t.hi.getLastRemoteSnapshotVersion(e)); }
function py(r, t) { let e = F(r), n = t.snapshotVersion, i = e.Fs; return e.persistence.runTransaction("Apply remote event", "readwrite-primary", s => { let a = e.Os.newChangeBuffer({ trackRemovals: !0 }); i = e.Fs; let u = []; t.targetChanges.forEach((f, m) => { let p = i.get(m); if (!p)
    return; u.push(e.hi.removeMatchingKeys(s, f.removedDocuments, m).next(() => e.hi.addMatchingKeys(s, f.addedDocuments, m))); let A = p.withSequenceNumber(s.currentSequenceNumber); t.targetMismatches.get(m) !== null ? A = A.withResumeToken(mt.EMPTY_BYTE_STRING, z.min()).withLastLimboFreeSnapshotVersion(z.min()) : f.resumeToken.approximateByteSize() > 0 && (A = A.withResumeToken(f.resumeToken, n)), i = i.insert(m, A), (function (D, N, q) { return D.resumeToken.approximateByteSize() === 0 || N.snapshotVersion.toMicroseconds() - D.snapshotVersion.toMicroseconds() >= my ? !0 : q.addedDocuments.size + q.modifiedDocuments.size + q.removedDocuments.size > 0; })(p, A, f) && u.push(e.hi.updateTargetData(s, A)); }); let c = Lt(), h = K(); if (t.documentUpdates.forEach(f => { t.resolvedLimboDocuments.has(f) && u.push(e.persistence.referenceDelegate.updateLimboDocument(s, f)); }), u.push(Lm(s, a, t.documentUpdates).next(f => { c = f.Ls, h = f.ks; })), !n.isEqual(z.min())) {
    let f = e.hi.getLastRemoteSnapshotVersion(s).next(m => e.hi.setTargetsMetadata(s, s.currentSequenceNumber, n));
    u.push(f);
} return R.waitFor(u).next(() => a.apply(s)).next(() => e.localDocuments.getLocalViewOfDocuments(s, c, h)).next(() => c); }).then(s => (e.Fs = i, s)); }
function Lm(r, t, e) { let n = K(), i = K(); return e.forEach(s => n = n.add(s)), t.getEntries(r, n).next(s => { let a = Lt(); return e.forEach((u, c) => { let h = s.get(u); c.isFoundDocument() !== h.isFoundDocument() && (i = i.add(u)), c.isNoDocument() && c.version.isEqual(z.min()) ? (t.removeEntry(u, c.readTime), a = a.insert(u, c)) : !h.isValidDocument() || c.version.compareTo(h.version) > 0 || c.version.compareTo(h.version) === 0 && h.hasPendingWrites ? (t.addEntry(c), a = a.insert(u, c)) : k(fl, "Ignoring outdated watch update for ", u, ". Current version:", h.version, " Watch version:", c.version); }), { Ls: a, ks: i }; }); }
function yy(r, t) { let e = F(r); return e.persistence.runTransaction("Get next mutation batch", "readonly", n => (t === void 0 && (t = Fe), e.mutationQueue.getNextMutationBatchAfterBatchId(n, t))); }
function mr(r, t) { let e = F(r); return e.persistence.runTransaction("Allocate target", "readwrite", n => { let i; return e.hi.getTargetData(n, t).next(s => s ? (i = s, R.resolve(i)) : e.hi.allocateTargetId(n).next(a => (i = new dr(t, a, "TargetPurposeListen", n.currentSequenceNumber), e.hi.addTargetData(n, i).next(() => i)))); }).then(n => { let i = e.Fs.get(n.targetId); return (i === null || n.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (e.Fs = e.Fs.insert(n.targetId, n), e.Ms.set(t, n.targetId)), n; }); }
function gr(r, t, e) { return V(this, null, function* () { let n = F(r), i = n.Fs.get(t), s = e ? "readwrite" : "readwrite-primary"; try {
    e || (yield n.persistence.runTransaction("Release target", s, a => n.persistence.referenceDelegate.removeTarget(a, i)));
}
catch (a) {
    if (!He(a))
        throw a;
    k(fl, `Failed to update sequence numbers for target ${t}: ${a}`);
} n.Fs = n.Fs.remove(t), n.Ms.delete(i.target); }); }
function uo(r, t, e) { let n = F(r), i = z.min(), s = K(); return n.persistence.runTransaction("Execute query", "readwrite", a => (function (c, h, f) { let m = F(c), p = m.Ms.get(f); return p !== void 0 ? R.resolve(m.Fs.get(p)) : m.hi.getTargetData(h, f); })(n, a, Nt(t)).next(u => { if (u)
    return i = u.lastLimboFreeSnapshotVersion, n.hi.getMatchingKeysForTargetId(a, u.targetId).next(c => { s = c; }); }).next(() => n.Cs.getDocumentsMatchingQuery(a, t, e ? i : z.min(), e ? s : K())).next(u => (Bm(n, Yf(t), u), { documents: u, qs: s }))); }
function qm(r, t) { let e = F(r), n = F(e.hi), i = e.Fs.get(t); return i ? Promise.resolve(i.target) : e.persistence.runTransaction("Get target data", "readonly", s => n.Et(s, t).next(a => a ? a.target : null)); }
function Um(r, t) { let e = F(r), n = e.xs.get(t) || z.min(); return e.persistence.runTransaction("Get new document changes", "readonly", i => e.Os.getAllFromCollectionGroup(i, t, _f(n, Zn), Number.MAX_SAFE_INTEGER)).then(i => (Bm(e, t, i), i)); }
function Bm(r, t, e) { let n = r.xs.get(t) || z.min(); e.forEach((i, s) => { s.readTime.compareTo(n) > 0 && (n = s.readTime); }), r.xs.set(t, n); }
function _y(r, t, e, n) { return V(this, null, function* () { let i = F(r), s = K(), a = Lt(); for (let h of e) {
    let f = t.Qs(h.metadata.name);
    h.document && (s = s.add(f));
    let m = t.$s(h);
    m.setReadTime(t.Us(h.metadata.readTime)), a = a.insert(f, m);
} let u = i.Os.newChangeBuffer({ trackRemovals: !0 }), c = yield mr(i, (function (f) { return Nt(Ir(H.fromString(`__bundle__/docs/${f}`))); })(n)); return i.persistence.runTransaction("Apply bundle documents", "readwrite", h => Lm(h, u, a).next(f => (u.apply(h), f)).next(f => i.hi.removeMatchingKeysForTargetId(h, c.targetId).next(() => i.hi.addMatchingKeys(h, s, c.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(h, f.Ls, f.ks)).next(() => f.Ls))); }); }
function wy(n, i) { return V(this, arguments, function* (r, t, e = K()) { let s = yield mr(r, Nt(Bo(t.bundledQuery))), a = F(r); return a.persistence.runTransaction("Save named query", "readwrite", u => { let c = ft(t.readTime); if (s.snapshotVersion.compareTo(c) >= 0)
    return a.Ti.saveNamedQuery(u, t); let h = s.withResumeToken(mt.EMPTY_BYTE_STRING, c); return a.Fs = a.Fs.insert(h.targetId, h), a.hi.updateTargetData(u, h).next(() => a.hi.removeMatchingKeysForTargetId(u, s.targetId)).next(() => a.hi.addMatchingKeys(u, e, s.targetId)).next(() => a.Ti.saveNamedQuery(u, t)); }); }); }
var jm = "firestore_clients";
function Kd(r, t) { return `${jm}_${r}_${t}`; }
var zm = "firestore_mutations";
function $d(r, t, e) { let n = `${zm}_${r}_${e}`; return t.isAuthenticated() && (n += `_${t.uid}`), n; }
var Gm = "firestore_targets";
function Ma(r, t) { return `${Gm}_${r}_${t}`; }
var Yt = "SharedClientState", co = class r {
    constructor(t, e, n, i) { this.user = t, this.batchId = e, this.state = n, this.error = i; }
    static Ks(t, e, n) { let i = JSON.parse(n), s, a = typeof i == "object" && ["pending", "acknowledged", "rejected"].indexOf(i.state) !== -1 && (i.error === void 0 || typeof i.error == "object"); return a && i.error && (a = typeof i.error.message == "string" && typeof i.error.code == "string", a && (s = new x(i.error.code, i.error.message))), a ? new r(t, e, i.state, s) : (dt(Yt, `Failed to parse mutation state for ID '${e}': ${n}`), null); }
    Ws() { let t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t); }
}, ui = class r {
    constructor(t, e, n) { this.targetId = t, this.state = e, this.error = n; }
    static Ks(t, e) { let n = JSON.parse(e), i, s = typeof n == "object" && ["not-current", "current", "rejected"].indexOf(n.state) !== -1 && (n.error === void 0 || typeof n.error == "object"); return s && n.error && (s = typeof n.error.message == "string" && typeof n.error.code == "string", s && (i = new x(n.error.code, n.error.message))), s ? new r(t, n.state, i) : (dt(Yt, `Failed to parse target state for ID '${t}': ${e}`), null); }
    Ws() { let t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t); }
}, lo = class r {
    constructor(t, e) { this.clientId = t, this.activeTargetIds = e; }
    static Ks(t, e) { let n = JSON.parse(e), i = typeof n == "object" && n.activeTargetIds instanceof Array, s = ul(); for (let a = 0; i && a < n.activeTargetIds.length; ++a)
        i = If(n.activeTargetIds[a]), s = s.add(n.activeTargetIds[a]); return i ? new r(t, s) : (dt(Yt, `Failed to parse client data for instance '${t}': ${e}`), null); }
}, nc = class r {
    constructor(t, e) { this.clientId = t, this.onlineState = e; }
    static Ks(t) { let e = JSON.parse(t); return typeof e == "object" && ["Unknown", "Online", "Offline"].indexOf(e.onlineState) !== -1 && typeof e.clientId == "string" ? new r(e.clientId, e.onlineState) : (dt(Yt, `Failed to parse online state: ${t}`), null); }
}, xi = class {
    constructor() { this.activeTargetIds = ul(); }
    Gs(t) { this.activeTargetIds = this.activeTargetIds.add(t); }
    zs(t) { this.activeTargetIds = this.activeTargetIds.delete(t); }
    Ws() { let t = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() }; return JSON.stringify(t); }
}, ci = class {
    constructor(t, e, n, i, s) { this.window = t, this.Fi = e, this.persistenceKey = n, this.js = i, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.Js = this.Hs.bind(this), this.Ys = new ot(G), this.started = !1, this.Zs = []; let a = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); this.storage = this.window.localStorage, this.currentUser = s, this.Xs = Kd(this.persistenceKey, this.js), this.eo = (function (c) { return `firestore_sequence_number_${c}`; })(this.persistenceKey), this.Ys = this.Ys.insert(this.js, new xi), this.no = new RegExp(`^${jm}_${a}_([^_]*)$`), this.ro = new RegExp(`^${zm}_${a}_(\\d+)(?:_(.*))?$`), this.io = new RegExp(`^${Gm}_${a}_(\\d+)$`), this.so = (function (c) { return `firestore_online_state_${c}`; })(this.persistenceKey), this.oo = (function (c) { return `firestore_bundle_loaded_v2_${c}`; })(this.persistenceKey), this.window.addEventListener("storage", this.Js); }
    static C(t) { return !(!t || !t.localStorage); }
    start() { return V(this, null, function* () { let t = yield this.syncEngine.Ps(); for (let n of t) {
        if (n === this.js)
            continue;
        let i = this.getItem(Kd(this.persistenceKey, n));
        if (i) {
            let s = lo.Ks(n, i);
            s && (this.Ys = this.Ys.insert(s.clientId, s));
        }
    } this._o(); let e = this.storage.getItem(this.so); if (e) {
        let n = this.ao(e);
        n && this.uo(n);
    } for (let n of this.Zs)
        this.Hs(n); this.Zs = [], this.window.addEventListener("pagehide", () => this.shutdown()), this.started = !0; }); }
    writeSequenceNumber(t) { this.setItem(this.eo, JSON.stringify(t)); }
    getAllActiveQueryTargets() { return this.co(this.Ys); }
    isActiveQueryTarget(t) { let e = !1; return this.Ys.forEach((n, i) => { i.activeTargetIds.has(t) && (e = !0); }), e; }
    addPendingMutation(t) { this.lo(t, "pending"); }
    updateMutationState(t, e, n) { this.lo(t, e, n), this.ho(t); }
    addLocalQueryTarget(t, e = !0) { let n = "not-current"; if (this.isActiveQueryTarget(t)) {
        let i = this.storage.getItem(Ma(this.persistenceKey, t));
        if (i) {
            let s = ui.Ks(t, i);
            s && (n = s.state);
        }
    } return e && this.Po.Gs(t), this._o(), n; }
    removeLocalQueryTarget(t) { this.Po.zs(t), this._o(); }
    isLocalQueryTarget(t) { return this.Po.activeTargetIds.has(t); }
    clearQueryState(t) { this.removeItem(Ma(this.persistenceKey, t)); }
    updateQueryState(t, e, n) { this.To(t, e, n); }
    handleUserChange(t, e, n) { e.forEach(i => { this.ho(i); }), this.currentUser = t, n.forEach(i => { this.addPendingMutation(i); }); }
    setOnlineState(t) { this.Io(t); }
    notifyBundleLoaded(t) { this.Eo(t); }
    shutdown() { this.started && (this.window.removeEventListener("storage", this.Js), this.removeItem(this.Xs), this.started = !1); }
    getItem(t) { let e = this.storage.getItem(t); return k(Yt, "READ", t, e), e; }
    setItem(t, e) { k(Yt, "SET", t, e), this.storage.setItem(t, e); }
    removeItem(t) { k(Yt, "REMOVE", t), this.storage.removeItem(t); }
    Hs(t) { let e = t; if (e.storageArea === this.storage) {
        if (k(Yt, "EVENT", e.key, e.newValue), e.key === this.Xs)
            return void dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");
        this.Fi.enqueueRetryable(() => V(this, null, function* () { if (this.started) {
            if (e.key !== null) {
                if (this.no.test(e.key)) {
                    if (e.newValue == null) {
                        let n = this.Ao(e.key);
                        return this.Ro(n, null);
                    }
                    {
                        let n = this.Vo(e.key, e.newValue);
                        if (n)
                            return this.Ro(n.clientId, n);
                    }
                }
                else if (this.ro.test(e.key)) {
                    if (e.newValue !== null) {
                        let n = this.mo(e.key, e.newValue);
                        if (n)
                            return this.fo(n);
                    }
                }
                else if (this.io.test(e.key)) {
                    if (e.newValue !== null) {
                        let n = this.po(e.key, e.newValue);
                        if (n)
                            return this.yo(n);
                    }
                }
                else if (e.key === this.so) {
                    if (e.newValue !== null) {
                        let n = this.ao(e.newValue);
                        if (n)
                            return this.uo(n);
                    }
                }
                else if (e.key === this.eo) {
                    let n = (function (s) { let a = Bt.ue; if (s != null)
                        try {
                            let u = JSON.parse(s);
                            U(typeof u == "number", 30636, { wo: s }), a = u;
                        }
                        catch (u) {
                            dt(Yt, "Failed to read sequence number from WebStorage", u);
                        } return a; })(e.newValue);
                    n !== Bt.ue && this.sequenceNumberHandler(n);
                }
                else if (e.key === this.oo) {
                    let n = this.So(e.newValue);
                    yield Promise.all(n.map(i => this.syncEngine.bo(i)));
                }
            }
        }
        else
            this.Zs.push(e); }));
    } }
    get Po() { return this.Ys.get(this.js); }
    _o() { this.setItem(this.Xs, this.Po.Ws()); }
    lo(t, e, n) { let i = new co(this.currentUser, t, e, n), s = $d(this.persistenceKey, this.currentUser, t); this.setItem(s, i.Ws()); }
    ho(t) { let e = $d(this.persistenceKey, this.currentUser, t); this.removeItem(e); }
    Io(t) { let e = { clientId: this.js, onlineState: t }; this.storage.setItem(this.so, JSON.stringify(e)); }
    To(t, e, n) { let i = Ma(this.persistenceKey, t), s = new ui(t, e, n); this.setItem(i, s.Ws()); }
    Eo(t) { let e = JSON.stringify(Array.from(t)); this.setItem(this.oo, e); }
    Ao(t) { let e = this.no.exec(t); return e ? e[1] : null; }
    Vo(t, e) { let n = this.Ao(t); return lo.Ks(n, e); }
    mo(t, e) { let n = this.ro.exec(t), i = Number(n[1]), s = n[2] !== void 0 ? n[2] : null; return co.Ks(new _t(s), i, e); }
    po(t, e) { let n = this.io.exec(t), i = Number(n[1]); return ui.Ks(i, e); }
    ao(t) { return nc.Ks(t); }
    So(t) { return JSON.parse(t); }
    fo(t) { return V(this, null, function* () { if (t.user.uid === this.currentUser.uid)
        return this.syncEngine.Do(t.batchId, t.state, t.error); k(Yt, `Ignoring mutation for non-active user ${t.user.uid}`); }); }
    yo(t) { return this.syncEngine.vo(t.targetId, t.state, t.error); }
    Ro(t, e) { let n = e ? this.Ys.insert(t, e) : this.Ys.remove(t), i = this.co(this.Ys), s = this.co(n), a = [], u = []; return s.forEach(c => { i.has(c) || a.push(c); }), i.forEach(c => { s.has(c) || u.push(c); }), this.syncEngine.Co(a, u).then(() => { this.Ys = n; }); }
    uo(t) { this.Ys.get(t.clientId) && this.onlineStateHandler(t.onlineState); }
    co(t) { let e = ul(); return t.forEach((n, i) => { e = e.unionWith(i.activeTargetIds); }), e; }
}, ho = class {
    constructor() { this.Fo = new xi, this.Mo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null; }
    addPendingMutation(t) { }
    updateMutationState(t, e, n) { }
    addLocalQueryTarget(t, e = !0) { return e && this.Fo.Gs(t), this.Mo[t] || "not-current"; }
    updateQueryState(t, e, n) { this.Mo[t] = e; }
    removeLocalQueryTarget(t) { this.Fo.zs(t); }
    isLocalQueryTarget(t) { return this.Fo.activeTargetIds.has(t); }
    clearQueryState(t) { delete this.Mo[t]; }
    getAllActiveQueryTargets() { return this.Fo.activeTargetIds; }
    isActiveQueryTarget(t) { return this.Fo.activeTargetIds.has(t); }
    start() { return this.Fo = new xi, Promise.resolve(); }
    handleUserChange(t, e, n) { }
    setOnlineState(t) { }
    shutdown() { }
    writeSequenceNumber(t) { }
    notifyBundleLoaded(t) { }
};
var rc = class {
    xo(t) { }
    shutdown() { }
};
var Qd = "ConnectivityMonitor", fo = class {
    constructor() { this.Oo = () => this.No(), this.Bo = () => this.Lo(), this.ko = [], this.qo(); }
    xo(t) { this.ko.push(t); }
    shutdown() { window.removeEventListener("online", this.Oo), window.removeEventListener("offline", this.Bo); }
    qo() { window.addEventListener("online", this.Oo), window.addEventListener("offline", this.Bo); }
    No() { k(Qd, "Network connectivity changed: AVAILABLE"); for (let t of this.ko)
        t(0); }
    Lo() { k(Qd, "Network connectivity changed: UNAVAILABLE"); for (let t of this.ko)
        t(1); }
    static C() { return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0; }
};
var vs = null;
function ic() { return vs === null ? vs = (function () { return 268435456 + Math.round(2147483648 * Math.random()); })() : vs++, "0x" + vs.toString(16); }
var La = "RestConnection", vy = { BatchGetDocuments: "batchGet", Commit: "commit", RunQuery: "runQuery", RunAggregationQuery: "runAggregationQuery" }, sc = class {
    get Qo() { return !1; }
    constructor(t) { this.databaseInfo = t, this.databaseId = t.databaseId; let e = t.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), i = encodeURIComponent(this.databaseId.database); this.$o = e + "://" + t.host, this.Uo = `projects/${n}/databases/${i}`, this.Ko = this.databaseId.database === _i ? `project_id=${n}` : `project_id=${n}&database_id=${i}`; }
    Wo(t, e, n, i, s) { let a = ic(), u = this.Go(t, e.toUriEncodedString()); k(La, `Sending RPC '${t}' ${a}:`, u, n); let c = { "google-cloud-resource-prefix": this.Uo, "x-goog-request-params": this.Ko }; this.zo(c, i, s); let { host: h } = new URL(u), f = fs(h); return this.jo(t, u, c, n, f).then(m => (k(La, `Received RPC '${t}' ${a}: `, m), m), m => { throw Ot(La, `RPC '${t}' ${a} failed with error: `, m, "url: ", u, "request:", n), m; }); }
    Jo(t, e, n, i, s, a) { return this.Wo(t, e, n, i, s); }
    zo(t, e, n) { t["X-Goog-Api-Client"] = (function () { return "gl-js/ fire/" + Tr; })(), t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((i, s) => t[s] = i), n && n.headers.forEach((i, s) => t[s] = i); }
    Go(t, e) { let n = vy[t]; return `${this.$o}/v1/${e}:${n}`; }
    terminate() { }
};
var oc = class {
    constructor(t) { this.Ho = t.Ho, this.Yo = t.Yo; }
    Zo(t) { this.Xo = t; }
    e_(t) { this.t_ = t; }
    n_(t) { this.r_ = t; }
    onMessage(t) { this.i_ = t; }
    close() { this.Yo(); }
    send(t) { this.Ho(t); }
    s_() { this.Xo(); }
    o_() { this.t_(); }
    __(t) { this.r_(t); }
    a_(t) { this.i_(t); }
};
var Ct = "WebChannelConnection", ac = class extends sc {
    constructor(t) { super(t), this.u_ = [], this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, this.useFetchStreams = t.useFetchStreams, this.longPollingOptions = t.longPollingOptions; }
    jo(t, e, n, i, s) { let a = ic(); return new Promise((u, c) => { let h = new Pa; h.setWithCredentials(!0), h.listenOnce(Va.COMPLETE, () => { try {
        switch (h.getLastErrorCode()) {
            case Hr.NO_ERROR:
                let m = h.getResponseJson();
                k(Ct, `XHR for RPC '${t}' ${a} received:`, JSON.stringify(m)), u(m);
                break;
            case Hr.TIMEOUT:
                k(Ct, `RPC '${t}' ${a} timed out`), c(new x(b.DEADLINE_EXCEEDED, "Request time out"));
                break;
            case Hr.HTTP_ERROR:
                let p = h.getStatus();
                if (k(Ct, `RPC '${t}' ${a} failed with status:`, p, "response text:", h.getResponseText()), p > 0) {
                    let A = h.getResponseJson();
                    Array.isArray(A) && (A = A[0]);
                    let C = A?.error;
                    if (C && C.status && C.message) {
                        let D = (function (q) { let j = q.toLowerCase().replace(/_/g, "-"); return Object.values(b).indexOf(j) >= 0 ? j : b.UNKNOWN; })(C.status);
                        c(new x(D, C.message));
                    }
                    else
                        c(new x(b.UNKNOWN, "Server responded with status " + h.getStatus()));
                }
                else
                    c(new x(b.UNAVAILABLE, "Connection failed."));
                break;
            default: L(9055, { c_: t, streamId: a, l_: h.getLastErrorCode(), h_: h.getLastError() });
        }
    }
    finally {
        k(Ct, `RPC '${t}' ${a} completed.`);
    } }); let f = JSON.stringify(i); k(Ct, `RPC '${t}' ${a} sending request:`, i), h.send(e, "POST", f, n, 15); }); }
    P_(t, e, n) { let i = ic(), s = [this.$o, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], a = Da(), u = xa(), c = { httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}` }, sendRawJson: !0, supportsCrossDomainXhr: !0, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling, detectBufferingProxy: this.autoDetectLongPolling }, h = this.longPollingOptions.timeoutSeconds; h !== void 0 && (c.longPollingTimeout = Math.round(1e3 * h)), this.useFetchStreams && (c.useFetchStreams = !0), this.zo(c.initMessageHeaders, e, n), c.encodeInitMessageHeaders = !0; let f = s.join(""); k(Ct, `Creating RPC '${t}' stream ${i}: ${f}`, c); let m = a.createWebChannel(f, c); this.T_(m); let p = !1, A = !1, C = new oc({ Ho: N => { A ? k(Ct, `Not sending because RPC '${t}' stream ${i} is closed:`, N) : (p || (k(Ct, `Opening RPC '${t}' stream ${i} transport.`), m.open(), p = !0), k(Ct, `RPC '${t}' stream ${i} sending:`, N), m.send(N)); }, Yo: () => m.close() }), D = (N, q, j) => { N.listen(q, B => { try {
        j(B);
    }
    catch (Q) {
        setTimeout(() => { throw Q; }, 0);
    } }); }; return D(m, On.EventType.OPEN, () => { A || (k(Ct, `RPC '${t}' stream ${i} transport opened.`), C.s_()); }), D(m, On.EventType.CLOSE, () => { A || (A = !0, k(Ct, `RPC '${t}' stream ${i} transport closed`), C.__(), this.I_(m)); }), D(m, On.EventType.ERROR, N => { A || (A = !0, Ot(Ct, `RPC '${t}' stream ${i} transport errored. Name:`, N.name, "Message:", N.message), C.__(new x(b.UNAVAILABLE, "The operation could not be completed"))); }), D(m, On.EventType.MESSAGE, N => { var q; if (!A) {
        let j = N.data[0];
        U(!!j, 16349);
        let B = j, Q = B?.error || ((q = B[0]) === null || q === void 0 ? void 0 : q.error);
        if (Q) {
            k(Ct, `RPC '${t}' stream ${i} received error:`, Q);
            let Z = Q.status, $ = (function (w) { let T = pt[w]; if (T !== void 0)
                return dm(T); })(Z), v = Q.message;
            $ === void 0 && ($ = b.INTERNAL, v = "Unknown error status: " + Z + " with message " + Q.message), A = !0, C.__(new x($, v)), m.close();
        }
        else
            k(Ct, `RPC '${t}' stream ${i} received:`, j), C.a_(j);
    } }), D(u, Ca.STAT_EVENT, N => { N.stat === gs.PROXY ? k(Ct, `RPC '${t}' stream ${i} detected buffering proxy`) : N.stat === gs.NOPROXY && k(Ct, `RPC '${t}' stream ${i} detected no buffering proxy`); }), setTimeout(() => { C.o_(); }, 0), C; }
    terminate() { this.u_.forEach(t => t.close()), this.u_ = []; }
    T_(t) { this.u_.push(t); }
    I_(t) { this.u_ = this.u_.filter(e => e === t); }
};
function Km() { return typeof window < "u" ? window : null; }
function Vs() { return typeof document < "u" ? document : null; }
function Pn(r) { return new Tu(r, !0); }
var Di = class {
    constructor(t, e, n = 1e3, i = 1.5, s = 6e4) { this.Fi = t, this.timerId = e, this.d_ = n, this.E_ = i, this.A_ = s, this.R_ = 0, this.V_ = null, this.m_ = Date.now(), this.reset(); }
    reset() { this.R_ = 0; }
    f_() { this.R_ = this.A_; }
    g_(t) { this.cancel(); let e = Math.floor(this.R_ + this.p_()), n = Math.max(0, Date.now() - this.m_), i = Math.max(0, e - n); i > 0 && k("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.V_ = this.Fi.enqueueAfterDelay(this.timerId, i, () => (this.m_ = Date.now(), t())), this.R_ *= this.E_, this.R_ < this.d_ && (this.R_ = this.d_), this.R_ > this.A_ && (this.R_ = this.A_); }
    y_() { this.V_ !== null && (this.V_.skipDelay(), this.V_ = null); }
    cancel() { this.V_ !== null && (this.V_.cancel(), this.V_ = null); }
    p_() { return (Math.random() - .5) * this.R_; }
};
var Wd = "PersistentStream", mo = class {
    constructor(t, e, n, i, s, a, u, c) { this.Fi = t, this.w_ = n, this.S_ = i, this.connection = s, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = u, this.listener = c, this.state = 0, this.b_ = 0, this.D_ = null, this.v_ = null, this.stream = null, this.C_ = 0, this.F_ = new Di(t, e); }
    M_() { return this.state === 1 || this.state === 5 || this.x_(); }
    x_() { return this.state === 2 || this.state === 3; }
    start() { this.C_ = 0, this.state !== 4 ? this.auth() : this.O_(); }
    stop() { return V(this, null, function* () { this.M_() && (yield this.close(0)); }); }
    N_() { this.state = 0, this.F_.reset(); }
    B_() { this.x_() && this.D_ === null && (this.D_ = this.Fi.enqueueAfterDelay(this.w_, 6e4, () => this.L_())); }
    k_(t) { this.q_(), this.stream.send(t); }
    L_() { return V(this, null, function* () { if (this.x_())
        return this.close(0); }); }
    q_() { this.D_ && (this.D_.cancel(), this.D_ = null); }
    Q_() { this.v_ && (this.v_.cancel(), this.v_ = null); }
    close(t, e) { return V(this, null, function* () { this.q_(), this.Q_(), this.F_.cancel(), this.b_++, t !== 4 ? this.F_.reset() : e && e.code === b.RESOURCE_EXHAUSTED ? (dt(e.toString()), dt("Using maximum backoff delay to prevent overloading the backend."), this.F_.f_()) : e && e.code === b.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), this.stream !== null && (this.U_(), this.stream.close(), this.stream = null), this.state = t, yield this.listener.n_(e); }); }
    U_() { }
    auth() { this.state = 1; let t = this.K_(this.b_), e = this.b_; Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([n, i]) => { this.b_ === e && this.W_(n, i); }, n => { t(() => { let i = new x(b.UNKNOWN, "Fetching auth token failed: " + n.message); return this.G_(i); }); }); }
    W_(t, e) { let n = this.K_(this.b_); this.stream = this.z_(t, e), this.stream.Zo(() => { n(() => this.listener.Zo()); }), this.stream.e_(() => { n(() => (this.state = 2, this.v_ = this.Fi.enqueueAfterDelay(this.S_, 1e4, () => (this.x_() && (this.state = 3), Promise.resolve())), this.listener.e_())); }), this.stream.n_(i => { n(() => this.G_(i)); }), this.stream.onMessage(i => { n(() => ++this.C_ == 1 ? this.j_(i) : this.onNext(i)); }); }
    O_() { this.state = 5, this.F_.g_(() => V(this, null, function* () { this.state = 0, this.start(); })); }
    G_(t) { return k(Wd, `close with error: ${t}`), this.stream = null, this.close(4, t); }
    K_(t) { return e => { this.Fi.enqueueAndForget(() => this.b_ === t ? e() : (k(Wd, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())); }; }
}, uc = class extends mo {
    constructor(t, e, n, i, s, a) { super(t, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, i, a), this.serializer = s; }
    z_(t, e) { return this.connection.P_("Listen", t, e); }
    j_(t) { return this.onNext(t); }
    onNext(t) { this.F_.reset(); let e = iy(this.serializer, t), n = (function (s) { if (!("targetChange" in s))
        return z.min(); let a = s.targetChange; return a.targetIds && a.targetIds.length ? z.min() : a.readTime ? ft(a.readTime) : z.min(); })(t); return this.listener.J_(e, n); }
    H_(t) { let e = {}; e.database = Au(this.serializer), e.addTarget = (function (s, a) { let u, c = a.target; if (u = Bs(c) ? { documents: _m(s, c) } : { query: Uo(s, c).Vt }, u.targetId = a.targetId, a.resumeToken.approximateByteSize() > 0) {
        u.resumeToken = fm(s, a.resumeToken);
        let h = Iu(s, a.expectedCount);
        h !== null && (u.expectedCount = h);
    }
    else if (a.snapshotVersion.compareTo(z.min()) > 0) {
        u.readTime = hr(s, a.snapshotVersion.toTimestamp());
        let h = Iu(s, a.expectedCount);
        h !== null && (u.expectedCount = h);
    } return u; })(this.serializer, t); let n = oy(this.serializer, t); n && (e.labels = n), this.k_(e); }
    Y_(t) { let e = {}; e.database = Au(this.serializer), e.removeTarget = t, this.k_(e); }
}, cc = class extends mo {
    constructor(t, e, n, i, s, a) { super(t, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, i, a), this.serializer = s; }
    get Z_() { return this.C_ > 0; }
    start() { this.lastStreamToken = void 0, super.start(); }
    U_() { this.Z_ && this.X_([]); }
    z_(t, e) { return this.connection.P_("Write", t, e); }
    j_(t) { return U(!!t.streamToken, 31322), this.lastStreamToken = t.streamToken, U(!t.writeResults || t.writeResults.length === 0, 55816), this.listener.ea(); }
    onNext(t) { U(!!t.streamToken, 12678), this.lastStreamToken = t.streamToken, this.F_.reset(); let e = sy(t.writeResults, t.commitTime), n = ft(t.commitTime); return this.listener.ta(n, e); }
    na() { let t = {}; t.database = Au(this.serializer), this.k_(t); }
    X_(t) { let e = { streamToken: this.lastStreamToken, writes: t.map(n => Ri(this.serializer, n)) }; this.k_(e); }
};
var lc = class {
}, hc = class extends lc {
    constructor(t, e, n, i) { super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = n, this.serializer = i, this.ra = !1; }
    ia() { if (this.ra)
        throw new x(b.FAILED_PRECONDITION, "The client has already been terminated."); }
    Wo(t, e, n, i) { return this.ia(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, a]) => this.connection.Wo(t, Eu(e, n), i, s, a)).catch(s => { throw s.name === "FirebaseError" ? (s.code === b.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new x(b.UNKNOWN, s.toString()); }); }
    Jo(t, e, n, i, s) { return this.ia(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([a, u]) => this.connection.Jo(t, Eu(e, n), i, a, u, s)).catch(a => { throw a.name === "FirebaseError" ? (a.code === b.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), a) : new x(b.UNKNOWN, a.toString()); }); }
    terminate() { this.ra = !0, this.connection.terminate(); }
}, dc = class {
    constructor(t, e) { this.asyncQueue = t, this.onlineStateHandler = e, this.state = "Unknown", this.sa = 0, this.oa = null, this._a = !0; }
    aa() { this.sa === 0 && (this.ua("Unknown"), this.oa = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.oa = null, this.ca("Backend didn't respond within 10 seconds."), this.ua("Offline"), Promise.resolve()))); }
    la(t) { this.state === "Online" ? this.ua("Unknown") : (this.sa++, this.sa >= 1 && (this.ha(), this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`), this.ua("Offline"))); }
    set(t) { this.ha(), this.sa = 0, t === "Online" && (this._a = !1), this.ua(t); }
    ua(t) { t !== this.state && (this.state = t, this.onlineStateHandler(t)); }
    ca(t) {
        let e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this._a ? (dt(e), this._a = !1) : k("OnlineStateTracker", e);
    }
    ha() { this.oa !== null && (this.oa.cancel(), this.oa = null); }
};
var Tn = "RemoteStore", fc = class {
    constructor(t, e, n, i, s) { this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.Pa = [], this.Ta = new Map, this.Ia = new Set, this.da = [], this.Ea = s, this.Ea.xo(a => { n.enqueueAndForget(() => V(this, null, function* () { Je(this) && (k(Tn, "Restarting streams for network reachability change."), yield (function (c) { return V(this, null, function* () { let h = F(c); h.Ia.add(4), yield Er(h), h.Aa.set("Unknown"), h.Ia.delete(4), yield Wi(h); }); })(this)); })); }), this.Aa = new dc(n, i); }
};
function Wi(r) { return V(this, null, function* () { if (Je(r))
    for (let t of r.da)
        yield t(!0); }); }
function Er(r) { return V(this, null, function* () { for (let t of r.da)
    yield t(!1); }); }
function jo(r, t) { let e = F(r); e.Ta.has(t.targetId) || (e.Ta.set(t.targetId, t), pl(e) ? gl(e) : br(e).x_() && ml(e, t)); }
function pr(r, t) { let e = F(r), n = br(e); e.Ta.delete(t), n.x_() && $m(e, t), e.Ta.size === 0 && (n.x_() ? n.B_() : Je(e) && e.Aa.set("Unknown")); }
function ml(r, t) { if (r.Ra.$e(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(z.min()) > 0) {
    let e = r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(e);
} br(r).H_(t); }
function $m(r, t) { r.Ra.$e(t), br(r).Y_(t); }
function gl(r) { r.Ra = new vu({ getRemoteKeysForTarget: t => r.remoteSyncer.getRemoteKeysForTarget(t), Et: t => r.Ta.get(t) || null, lt: () => r.datastore.serializer.databaseId }), br(r).start(), r.Aa.aa(); }
function pl(r) { return Je(r) && !br(r).M_() && r.Ta.size > 0; }
function Je(r) { return F(r).Ia.size === 0; }
function Qm(r) { r.Ra = void 0; }
function Ty(r) { return V(this, null, function* () { r.Aa.set("Online"); }); }
function Iy(r) { return V(this, null, function* () { r.Ta.forEach((t, e) => { ml(r, t); }); }); }
function Ey(r, t) { return V(this, null, function* () { Qm(r), pl(r) ? (r.Aa.la(t), gl(r)) : r.Aa.set("Unknown"); }); }
function Ay(r, t, e) { return V(this, null, function* () { if (r.Aa.set("Online"), t instanceof Qs && t.state === 2 && t.cause)
    try {
        yield (function (i, s) { return V(this, null, function* () { let a = s.cause; for (let u of s.targetIds)
            i.Ta.has(u) && (yield i.remoteSyncer.rejectListen(u, a), i.Ta.delete(u), i.Ra.removeTarget(u)); }); })(r, t);
    }
    catch (n) {
        k(Tn, "Failed to remove targets %s: %s ", t.targetIds.join(","), n), yield go(r, n);
    }
else if (t instanceof Hn ? r.Ra.Ye(t) : t instanceof $s ? r.Ra.it(t) : r.Ra.et(t), !e.isEqual(z.min()))
    try {
        let n = yield Mm(r.localStore);
        e.compareTo(n) >= 0 && (yield (function (s, a) { let u = s.Ra.Pt(a); return u.targetChanges.forEach((c, h) => { if (c.resumeToken.approximateByteSize() > 0) {
            let f = s.Ta.get(h);
            f && s.Ta.set(h, f.withResumeToken(c.resumeToken, a));
        } }), u.targetMismatches.forEach((c, h) => { let f = s.Ta.get(c); if (!f)
            return; s.Ta.set(c, f.withResumeToken(mt.EMPTY_BYTE_STRING, f.snapshotVersion)), $m(s, c); let m = new dr(f.target, c, h, f.sequenceNumber); ml(s, m); }), s.remoteSyncer.applyRemoteEvent(u); })(r, e));
    }
    catch (n) {
        k(Tn, "Failed to raise snapshot:", n), yield go(r, n);
    } }); }
function go(r, t, e) { return V(this, null, function* () { if (!He(t))
    throw t; r.Ia.add(1), yield Er(r), r.Aa.set("Offline"), e || (e = () => Mm(r.localStore)), r.asyncQueue.enqueueRetryable(() => V(null, null, function* () { k(Tn, "Retrying IndexedDB access"), yield e(), r.Ia.delete(1), yield Wi(r); })); }); }
function Wm(r, t) { return t().catch(e => go(r, e, t)); }
function Ar(r) { return V(this, null, function* () { let t = F(r), e = $e(t), n = t.Pa.length > 0 ? t.Pa[t.Pa.length - 1].batchId : Fe; for (; by(t);)
    try {
        let i = yield yy(t.localStore, n);
        if (i === null) {
            t.Pa.length === 0 && e.B_();
            break;
        }
        n = i.batchId, Sy(t, i);
    }
    catch (i) {
        yield go(t, i);
    } Hm(t) && Xm(t); }); }
function by(r) { return Je(r) && r.Pa.length < 10; }
function Sy(r, t) { r.Pa.push(t); let e = $e(r); e.x_() && e.Z_ && e.X_(t.mutations); }
function Hm(r) { return Je(r) && !$e(r).M_() && r.Pa.length > 0; }
function Xm(r) { $e(r).start(); }
function Ry(r) { return V(this, null, function* () { $e(r).na(); }); }
function Py(r) { return V(this, null, function* () { let t = $e(r); for (let e of r.Pa)
    t.X_(e.mutations); }); }
function Vy(r, t, e) { return V(this, null, function* () { let n = r.Pa.shift(), i = yu.from(n, t, e); yield Wm(r, () => r.remoteSyncer.applySuccessfulWrite(i)), yield Ar(r); }); }
function Cy(r, t) { return V(this, null, function* () { t && $e(r).Z_ && (yield (function (n, i) { return V(this, null, function* () { if ((function (a) { return hm(a) && a !== b.ABORTED; })(i.code)) {
    let s = n.Pa.shift();
    $e(n).N_(), yield Wm(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, i)), yield Ar(n);
} }); })(r, t)), Hm(r) && Xm(r); }); }
function Hd(r, t) { return V(this, null, function* () { let e = F(r); e.asyncQueue.verifyOperationInProgress(), k(Tn, "RemoteStore received new credentials"); let n = Je(e); e.Ia.add(3), yield Er(e), n && e.Aa.set("Unknown"), yield e.remoteSyncer.handleCredentialChange(t), e.Ia.delete(3), yield Wi(e); }); }
function mc(r, t) { return V(this, null, function* () { let e = F(r); t ? (e.Ia.delete(2), yield Wi(e)) : t || (e.Ia.add(2), yield Er(e), e.Aa.set("Unknown")); }); }
function br(r) { return r.Va || (r.Va = (function (e, n, i) { let s = F(e); return s.ia(), new uc(n, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i); })(r.datastore, r.asyncQueue, { Zo: Ty.bind(null, r), e_: Iy.bind(null, r), n_: Ey.bind(null, r), J_: Ay.bind(null, r) }), r.da.push(t => V(null, null, function* () { t ? (r.Va.N_(), pl(r) ? gl(r) : r.Aa.set("Unknown")) : (yield r.Va.stop(), Qm(r)); }))), r.Va; }
function $e(r) { return r.ma || (r.ma = (function (e, n, i) { let s = F(e); return s.ia(), new cc(n, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i); })(r.datastore, r.asyncQueue, { Zo: () => Promise.resolve(), e_: Ry.bind(null, r), n_: Cy.bind(null, r), ea: Py.bind(null, r), ta: Vy.bind(null, r) }), r.da.push(t => V(null, null, function* () { t ? (r.ma.N_(), yield Ar(r)) : (yield r.ma.stop(), r.Pa.length > 0 && (k(Tn, `Stopping write stream with ${r.Pa.length} pending writes`), r.Pa = [])); }))), r.ma; }
var gc = class r {
    constructor(t, e, n, i, s) { this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = i, this.removalCallback = s, this.deferred = new vt, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(a => { }); }
    get promise() { return this.deferred.promise; }
    static createAndSchedule(t, e, n, i, s) { let a = Date.now() + n, u = new r(t, e, a, i, s); return u.start(n), u; }
    start(t) { this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t); }
    skipDelay() { return this.handleDelayElapsed(); }
    cancel(t) { this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new x(b.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")))); }
    handleDelayElapsed() { this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(t => this.deferred.resolve(t))) : Promise.resolve()); }
    clearTimeout() { this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null); }
};
function Sr(r, t) { if (dt("AsyncQueue", `${t}: ${r}`), He(r))
    return new x(b.UNAVAILABLE, `${t}: ${r}`); throw r; }
var Ni = class r {
    static emptySet(t) { return new r(t.comparator); }
    constructor(t) { this.comparator = t ? (e, n) => t(e, n) || M.comparator(e.key, n.key) : (e, n) => M.comparator(e.key, n.key), this.keyedMap = ti(), this.sortedSet = new ot(this.comparator); }
    has(t) { return this.keyedMap.get(t) != null; }
    get(t) { return this.keyedMap.get(t); }
    first() { return this.sortedSet.minKey(); }
    last() { return this.sortedSet.maxKey(); }
    isEmpty() { return this.sortedSet.isEmpty(); }
    indexOf(t) { let e = this.keyedMap.get(t); return e ? this.sortedSet.indexOf(e) : -1; }
    get size() { return this.sortedSet.size; }
    forEach(t) { this.sortedSet.inorderTraversal((e, n) => (t(e), !1)); }
    add(t) { let e = this.delete(t.key); return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null)); }
    delete(t) { let e = this.get(t); return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this; }
    isEqual(t) { if (!(t instanceof r) || this.size !== t.size)
        return !1; let e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); for (; e.hasNext();) {
        let i = e.getNext().key, s = n.getNext().key;
        if (!i.isEqual(s))
            return !1;
    } return !0; }
    toString() {
        let t = [];
        return this.forEach(e => { t.push(e.toString()); }), t.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + t.join(`  
`) + `
)`;
    }
    copy(t, e) { let n = new r; return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n; }
};
var po = class {
    constructor() { this.fa = new ot(M.comparator); }
    track(t) { let e = t.doc.key, n = this.fa.get(e); n ? t.type !== 0 && n.type === 3 ? this.fa = this.fa.insert(e, t) : t.type === 3 && n.type !== 1 ? this.fa = this.fa.insert(e, { type: n.type, doc: t.doc }) : t.type === 2 && n.type === 2 ? this.fa = this.fa.insert(e, { type: 2, doc: t.doc }) : t.type === 2 && n.type === 0 ? this.fa = this.fa.insert(e, { type: 0, doc: t.doc }) : t.type === 1 && n.type === 0 ? this.fa = this.fa.remove(e) : t.type === 1 && n.type === 2 ? this.fa = this.fa.insert(e, { type: 1, doc: n.doc }) : t.type === 0 && n.type === 1 ? this.fa = this.fa.insert(e, { type: 2, doc: t.doc }) : L(63341, { At: t, ga: n }) : this.fa = this.fa.insert(e, t); }
    pa() { let t = []; return this.fa.inorderTraversal((e, n) => { t.push(n); }), t; }
}, In = class r {
    constructor(t, e, n, i, s, a, u, c, h) { this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = i, this.mutatedKeys = s, this.fromCache = a, this.syncStateChanged = u, this.excludesMetadataChanges = c, this.hasCachedResults = h; }
    static fromInitialDocuments(t, e, n, i, s) { let a = []; return e.forEach(u => { a.push({ type: 0, doc: u }); }), new r(t, e, Ni.emptySet(e), a, n, i, !0, !1, s); }
    get hasPendingWrites() { return !this.mutatedKeys.isEmpty(); }
    isEqual(t) { if (!(this.fromCache === t.fromCache && this.hasCachedResults === t.hasCachedResults && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && $i(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs)))
        return !1; let e = this.docChanges, n = t.docChanges; if (e.length !== n.length)
        return !1; for (let i = 0; i < e.length; i++)
        if (e[i].type !== n[i].type || !e[i].doc.isEqual(n[i].doc))
            return !1; return !0; }
};
var pc = class {
    constructor() { this.ya = void 0, this.wa = []; }
    Sa() { return this.wa.some(t => t.ba()); }
}, yc = class {
    constructor() { this.queries = Xd(), this.onlineState = "Unknown", this.Da = new Set; }
    terminate() { (function (e, n) { let i = F(e), s = i.queries; i.queries = Xd(), s.forEach((a, u) => { for (let c of u.wa)
        c.onError(n); }); })(this, new x(b.ABORTED, "Firestore shutting down")); }
};
function Xd() { return new Ht(r => Jf(r), $i); }
function yl(r, t) { return V(this, null, function* () { let e = F(r), n = 3, i = t.query, s = e.queries.get(i); s ? !s.Sa() && t.ba() && (n = 2) : (s = new pc, n = t.ba() ? 0 : 1); try {
    switch (n) {
        case 0:
            s.ya = yield e.onListen(i, !0);
            break;
        case 1:
            s.ya = yield e.onListen(i, !1);
            break;
        case 2: yield e.onFirstRemoteStoreListen(i);
    }
}
catch (a) {
    let u = Sr(a, `Initialization of query '${Gn(t.query)}' failed`);
    return void t.onError(u);
} e.queries.set(i, s), s.wa.push(t), t.va(e.onlineState), s.ya && t.Ca(s.ya) && wl(e); }); }
function _l(r, t) { return V(this, null, function* () { let e = F(r), n = t.query, i = 3, s = e.queries.get(n); if (s) {
    let a = s.wa.indexOf(t);
    a >= 0 && (s.wa.splice(a, 1), s.wa.length === 0 ? i = t.ba() ? 0 : 1 : !s.Sa() && t.ba() && (i = 2));
} switch (i) {
    case 0: return e.queries.delete(n), e.onUnlisten(n, !0);
    case 1: return e.queries.delete(n), e.onUnlisten(n, !1);
    case 2: return e.onLastRemoteStoreUnlisten(n);
    default: return;
} }); }
function xy(r, t) { let e = F(r), n = !1; for (let i of t) {
    let s = i.query, a = e.queries.get(s);
    if (a) {
        for (let u of a.wa)
            u.Ca(i) && (n = !0);
        a.ya = i;
    }
} n && wl(e); }
function Dy(r, t, e) { let n = F(r), i = n.queries.get(t); if (i)
    for (let s of i.wa)
        s.onError(e); n.queries.delete(t); }
function wl(r) { r.Da.forEach(t => { t.next(); }); }
var _c, Jd;
(Jd = _c || (_c = {})).Fa = "default", Jd.Cache = "cache";
var ki = class {
    constructor(t, e, n) { this.query = t, this.Ma = e, this.xa = !1, this.Oa = null, this.onlineState = "Unknown", this.options = n || {}; }
    Ca(t) { if (!this.options.includeMetadataChanges) {
        let n = [];
        for (let i of t.docChanges)
            i.type !== 3 && n.push(i);
        t = new In(t.query, t.docs, t.oldDocs, n, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0, t.hasCachedResults);
    } let e = !1; return this.xa ? this.Na(t) && (this.Ma.next(t), e = !0) : this.Ba(t, this.onlineState) && (this.La(t), e = !0), this.Oa = t, e; }
    onError(t) { this.Ma.error(t); }
    va(t) { this.onlineState = t; let e = !1; return this.Oa && !this.xa && this.Ba(this.Oa, t) && (this.La(this.Oa), e = !0), e; }
    Ba(t, e) { if (!t.fromCache || !this.ba())
        return !0; let n = e !== "Offline"; return (!this.options.ka || !n) && (!t.docs.isEmpty() || t.hasCachedResults || e === "Offline"); }
    Na(t) { if (t.docChanges.length > 0)
        return !0; let e = this.Oa && this.Oa.hasPendingWrites !== t.hasPendingWrites; return !(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0; }
    La(t) { t = In.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults), this.xa = !0, this.Ma.next(t); }
    ba() { return this.options.source !== _c.Cache; }
};
var yo = class {
    constructor(t, e) { this.qa = t, this.byteLength = e; }
    Qa() { return "metadata" in this.qa; }
};
var _o = class {
    constructor(t) { this.serializer = t; }
    Qs(t) { return re(this.serializer, t); }
    $s(t) { return t.metadata.exists ? qo(this.serializer, t.document, !1) : It.newNoDocument(this.Qs(t.metadata.name), this.Us(t.metadata.readTime)); }
    Us(t) { return ft(t); }
}, Fi = class {
    constructor(t, e) { this.$a = t, this.serializer = e, this.Ua = [], this.Ka = [], this.collectionGroups = new Set, this.progress = Jm(t); }
    get queries() { return this.Ua; }
    get documents() { return this.Ka; }
    Wa(t) { this.progress.bytesLoaded += t.byteLength; let e = this.progress.documentsLoaded; if (t.qa.namedQuery)
        this.Ua.push(t.qa.namedQuery);
    else if (t.qa.documentMetadata) {
        this.Ka.push({ metadata: t.qa.documentMetadata }), t.qa.documentMetadata.exists || ++e;
        let n = H.fromString(t.qa.documentMetadata.name);
        this.collectionGroups.add(n.get(n.length - 2));
    }
    else
        t.qa.document && (this.Ka[this.Ka.length - 1].document = t.qa.document, ++e); return e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null; }
    Ga(t) { let e = new Map, n = new _o(this.serializer); for (let i of t)
        if (i.metadata.queries) {
            let s = n.Qs(i.metadata.name);
            for (let a of i.metadata.queries) {
                let u = (e.get(a) || K()).add(s);
                e.set(a, u);
            }
        } return e; }
    za(t) { return V(this, null, function* () { let e = yield _y(t, new _o(this.serializer), this.Ka, this.$a.id), n = this.Ga(this.documents); for (let i of this.Ua)
        yield wy(t, i, n.get(i.name)); return this.progress.taskState = "Success", { progress: this.progress, ja: this.collectionGroups, Ja: e }; }); }
};
function Jm(r) { return { taskState: "Running", documentsLoaded: 0, bytesLoaded: 0, totalDocuments: r.totalDocuments, totalBytes: r.totalBytes }; }
var wo = class {
    constructor(t) { this.key = t; }
}, vo = class {
    constructor(t) { this.key = t; }
}, To = class {
    constructor(t, e) { this.query = t, this.Ha = e, this.Ya = null, this.hasCachedResults = !1, this.current = !1, this.Za = K(), this.mutatedKeys = K(), this.Xa = Zf(t), this.eu = new Ni(this.Xa); }
    get tu() { return this.Ha; }
    nu(t, e) { let n = e ? e.ru : new po, i = e ? e.eu : this.eu, s = e ? e.mutatedKeys : this.mutatedKeys, a = i, u = !1, c = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null, h = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null; if (t.inorderTraversal((f, m) => { let p = i.get(f), A = Qi(this.query, m) ? m : null, C = !!p && this.mutatedKeys.has(p.key), D = !!A && (A.hasLocalMutations || this.mutatedKeys.has(A.key) && A.hasCommittedMutations), N = !1; p && A ? p.data.isEqual(A.data) ? C !== D && (n.track({ type: 3, doc: A }), N = !0) : this.iu(p, A) || (n.track({ type: 2, doc: A }), N = !0, (c && this.Xa(A, c) > 0 || h && this.Xa(A, h) < 0) && (u = !0)) : !p && A ? (n.track({ type: 0, doc: A }), N = !0) : p && !A && (n.track({ type: 1, doc: p }), N = !0, (c || h) && (u = !0)), N && (A ? (a = a.add(A), s = D ? s.add(f) : s.delete(f)) : (a = a.delete(f), s = s.delete(f))); }), this.query.limit !== null)
        for (; a.size > this.query.limit;) {
            let f = this.query.limitType === "F" ? a.last() : a.first();
            a = a.delete(f.key), s = s.delete(f.key), n.track({ type: 1, doc: f });
        } return { eu: a, ru: n, Ds: u, mutatedKeys: s }; }
    iu(t, e) { return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations; }
    applyChanges(t, e, n, i) { let s = this.eu; this.eu = t.eu, this.mutatedKeys = t.mutatedKeys; let a = t.ru.pa(); a.sort((f, m) => (function (A, C) { let D = N => { switch (N) {
        case 0: return 1;
        case 2:
        case 3: return 2;
        case 1: return 0;
        default: return L(20277, { At: N });
    } }; return D(A) - D(C); })(f.type, m.type) || this.Xa(f.doc, m.doc)), this.su(n), i = i != null && i; let u = e && !i ? this.ou() : [], c = this.Za.size === 0 && this.current && !i ? 1 : 0, h = c !== this.Ya; return this.Ya = c, a.length !== 0 || h ? { snapshot: new In(this.query, t.eu, s, a, t.mutatedKeys, c === 0, h, !1, !!n && n.resumeToken.approximateByteSize() > 0), _u: u } : { _u: u }; }
    va(t) { return this.current && t === "Offline" ? (this.current = !1, this.applyChanges({ eu: this.eu, ru: new po, mutatedKeys: this.mutatedKeys, Ds: !1 }, !1)) : { _u: [] }; }
    au(t) { return !this.Ha.has(t) && !!this.eu.has(t) && !this.eu.get(t).hasLocalMutations; }
    su(t) { t && (t.addedDocuments.forEach(e => this.Ha = this.Ha.add(e)), t.modifiedDocuments.forEach(e => { }), t.removedDocuments.forEach(e => this.Ha = this.Ha.delete(e)), this.current = t.current); }
    ou() { if (!this.current)
        return []; let t = this.Za; this.Za = K(), this.eu.forEach(n => { this.au(n.key) && (this.Za = this.Za.add(n.key)); }); let e = []; return t.forEach(n => { this.Za.has(n) || e.push(new vo(n)); }), this.Za.forEach(n => { t.has(n) || e.push(new wo(n)); }), e; }
    uu(t) { this.Ha = t.qs, this.Za = K(); let e = this.nu(t.documents); return this.applyChanges(e, !0); }
    cu() { return In.fromInitialDocuments(this.query, this.eu, this.mutatedKeys, this.Ya === 0, this.hasCachedResults); }
}, Ye = "SyncEngine", wc = class {
    constructor(t, e, n) { this.query = t, this.targetId = e, this.view = n; }
}, vc = class {
    constructor(t) { this.key = t, this.lu = !1; }
}, Tc = class {
    constructor(t, e, n, i, s, a) { this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = i, this.currentUser = s, this.maxConcurrentLimboResolutions = a, this.hu = {}, this.Pu = new Ht(u => Jf(u), $i), this.Tu = new Map, this.Iu = new Set, this.du = new ot(M.comparator), this.Eu = new Map, this.Au = new Vi, this.Ru = {}, this.Vu = new Map, this.mu = fr.ur(), this.onlineState = "Unknown", this.fu = void 0; }
    get isPrimaryClient() { return this.fu === !0; }
};
function Ny(r, t, e = !0) { return V(this, null, function* () { let n = zo(r), i, s = n.Pu.get(t); return s ? (n.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.cu()) : i = yield Ym(n, t, e, !0), i; }); }
function ky(r, t) { return V(this, null, function* () { let e = zo(r); yield Ym(e, t, !0, !1); }); }
function Ym(r, t, e, n) { return V(this, null, function* () { let i = yield mr(r.localStore, Nt(t)), s = i.targetId, a = r.sharedClientState.addLocalQueryTarget(s, e), u; return n && (u = yield vl(r, t, s, a === "current", i.resumeToken)), r.isPrimaryClient && e && jo(r.remoteStore, i), u; }); }
function vl(r, t, e, n, i) { return V(this, null, function* () { r.gu = (m, p, A) => (function (D, N, q, j) { return V(this, null, function* () { let B = N.view.nu(q); B.Ds && (B = yield uo(D.localStore, N.query, !1).then(({ documents: v }) => N.view.nu(v, B))); let Q = j && j.targetChanges.get(N.targetId), Z = j && j.targetMismatches.get(N.targetId) != null, $ = N.view.applyChanges(B, D.isPrimaryClient, Q, Z); return Ic(D, N.targetId, $._u), $.snapshot; }); })(r, m, p, A); let s = yield uo(r.localStore, t, !0), a = new To(t, s.qs), u = a.nu(s.documents), c = bi.createSynthesizedTargetChangeForCurrentChange(e, n && r.onlineState !== "Offline", i), h = a.applyChanges(u, r.isPrimaryClient, c); Ic(r, e, h._u); let f = new wc(t, e, a); return r.Pu.set(t, f), r.Tu.has(e) ? r.Tu.get(e).push(t) : r.Tu.set(e, [t]), h.snapshot; }); }
function Fy(r, t, e) { return V(this, null, function* () { let n = F(r), i = n.Pu.get(t), s = n.Tu.get(i.targetId); if (s.length > 1)
    return n.Tu.set(i.targetId, s.filter(a => !$i(a, t))), void n.Pu.delete(t); n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(i.targetId), n.sharedClientState.isActiveQueryTarget(i.targetId) || (yield gr(n.localStore, i.targetId, !1).then(() => { n.sharedClientState.clearQueryState(i.targetId), e && pr(n.remoteStore, i.targetId), yr(n, i.targetId); }).catch(We))) : (yr(n, i.targetId), yield gr(n.localStore, i.targetId, !0)); }); }
function Oy(r, t) { return V(this, null, function* () { let e = F(r), n = e.Pu.get(t), i = e.Tu.get(n.targetId); e.isPrimaryClient && i.length === 1 && (e.sharedClientState.removeLocalQueryTarget(n.targetId), pr(e.remoteStore, n.targetId)); }); }
function My(r, t, e) { return V(this, null, function* () { let n = Al(r); try {
    let i = yield (function (a, u) { let c = F(a), h = ut.now(), f = u.reduce((A, C) => A.add(C.key), K()), m, p; return c.persistence.runTransaction("Locally write mutations", "readwrite", A => { let C = Lt(), D = K(); return c.Os.getEntries(A, f).next(N => { C = N, C.forEach((q, j) => { j.isValidDocument() || (D = D.add(q)); }); }).next(() => c.localDocuments.getOverlayedDocuments(A, C)).next(N => { m = N; let q = []; for (let j of u) {
        let B = Jp(j, m.get(j.key).overlayedDocument);
        B != null && q.push(new Xt(j.key, B, jf(B.value.mapValue), ht.exists(!0)));
    } return c.mutationQueue.addMutationBatch(A, h, q, u); }).next(N => { p = N; let q = N.applyToLocalDocumentSet(m, D); return c.documentOverlayCache.saveOverlays(A, N.batchId, q); }); }).then(() => ({ batchId: p.batchId, changes: em(m) })); })(n.localStore, t);
    n.sharedClientState.addPendingMutation(i.batchId), (function (a, u, c) { let h = a.Ru[a.currentUser.toKey()]; h || (h = new ot(G)), h = h.insert(u, c), a.Ru[a.currentUser.toKey()] = h; })(n, i.batchId, e), yield Ee(n, i.changes), yield Ar(n.remoteStore);
}
catch (i) {
    let s = Sr(i, "Failed to persist write");
    e.reject(s);
} }); }
function Zm(r, t) { return V(this, null, function* () { let e = F(r); try {
    let n = yield py(e.localStore, t);
    t.targetChanges.forEach((i, s) => { let a = e.Eu.get(s); a && (U(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1, 22616), i.addedDocuments.size > 0 ? a.lu = !0 : i.modifiedDocuments.size > 0 ? U(a.lu, 14607) : i.removedDocuments.size > 0 && (U(a.lu, 42227), a.lu = !1)); }), yield Ee(e, n, t);
}
catch (n) {
    yield We(n);
} }); }
function Yd(r, t, e) { let n = F(r); if (n.isPrimaryClient && e === 0 || !n.isPrimaryClient && e === 1) {
    let i = [];
    n.Pu.forEach((s, a) => { let u = a.view.va(t); u.snapshot && i.push(u.snapshot); }), (function (a, u) { let c = F(a); c.onlineState = u; let h = !1; c.queries.forEach((f, m) => { for (let p of m.wa)
        p.va(u) && (h = !0); }), h && wl(c); })(n.eventManager, t), i.length && n.hu.J_(i), n.onlineState = t, n.isPrimaryClient && n.sharedClientState.setOnlineState(t);
} }
function Ly(r, t, e) { return V(this, null, function* () { let n = F(r); n.sharedClientState.updateQueryState(t, "rejected", e); let i = n.Eu.get(t), s = i && i.key; if (s) {
    let a = new ot(M.comparator);
    a = a.insert(s, It.newNoDocument(s, z.min()));
    let u = K().add(s), c = new Ai(z.min(), new Map, new ot(G), a, u);
    yield Zm(n, c), n.du = n.du.remove(s), n.Eu.delete(t), El(n);
}
else
    yield gr(n.localStore, t, !1).then(() => yr(n, t, e)).catch(We); }); }
function qy(r, t) { return V(this, null, function* () { let e = F(r), n = t.batch.batchId; try {
    let i = yield gy(e.localStore, t);
    Il(e, n, null), Tl(e, n), e.sharedClientState.updateMutationState(n, "acknowledged"), yield Ee(e, i);
}
catch (i) {
    yield We(i);
} }); }
function Uy(r, t, e) { return V(this, null, function* () { let n = F(r); try {
    let i = yield (function (a, u) { let c = F(a); return c.persistence.runTransaction("Reject batch", "readwrite-primary", h => { let f; return c.mutationQueue.lookupMutationBatch(h, u).next(m => (U(m !== null, 37113), f = m.keys(), c.mutationQueue.removeMutationBatch(h, m))).next(() => c.mutationQueue.performConsistencyCheck(h)).next(() => c.documentOverlayCache.removeOverlaysForBatchId(h, f, u)).next(() => c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, f)).next(() => c.localDocuments.getDocuments(h, f)); }); })(n.localStore, t);
    Il(n, t, e), Tl(n, t), n.sharedClientState.updateMutationState(t, "rejected", e), yield Ee(n, i);
}
catch (i) {
    yield We(i);
} }); }
function By(r, t) { return V(this, null, function* () { let e = F(r); Je(e.remoteStore) || k(Ye, "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."); try {
    let n = yield (function (a) { let u = F(a); return u.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", c => u.mutationQueue.getHighestUnacknowledgedBatchId(c)); })(e.localStore);
    if (n === Fe)
        return void t.resolve();
    let i = e.Vu.get(n) || [];
    i.push(t), e.Vu.set(n, i);
}
catch (n) {
    let i = Sr(n, "Initialization of waitForPendingWrites() operation failed");
    t.reject(i);
} }); }
function Tl(r, t) { (r.Vu.get(t) || []).forEach(e => { e.resolve(); }), r.Vu.delete(t); }
function Il(r, t, e) { let n = F(r), i = n.Ru[n.currentUser.toKey()]; if (i) {
    let s = i.get(t);
    s && (e ? s.reject(e) : s.resolve(), i = i.remove(t)), n.Ru[n.currentUser.toKey()] = i;
} }
function yr(r, t, e = null) { r.sharedClientState.removeLocalQueryTarget(t); for (let n of r.Tu.get(t))
    r.Pu.delete(n), e && r.hu.pu(n, e); r.Tu.delete(t), r.isPrimaryClient && r.Au.zr(t).forEach(n => { r.Au.containsKey(n) || tg(r, n); }); }
function tg(r, t) { r.Iu.delete(t.path.canonicalString()); let e = r.du.get(t); e !== null && (pr(r.remoteStore, e), r.du = r.du.remove(t), r.Eu.delete(e), El(r)); }
function Ic(r, t, e) { for (let n of e)
    n instanceof wo ? (r.Au.addReference(n.key, t), jy(r, n)) : n instanceof vo ? (k(Ye, "Document no longer in limbo: " + n.key), r.Au.removeReference(n.key, t), r.Au.containsKey(n.key) || tg(r, n.key)) : L(19791, { yu: n }); }
function jy(r, t) { let e = t.key, n = e.path.canonicalString(); r.du.get(e) || r.Iu.has(n) || (k(Ye, "New document in limbo: " + e), r.Iu.add(n), El(r)); }
function El(r) { for (; r.Iu.size > 0 && r.du.size < r.maxConcurrentLimboResolutions;) {
    let t = r.Iu.values().next().value;
    r.Iu.delete(t);
    let e = new M(H.fromString(t)), n = r.mu.next();
    r.Eu.set(n, new vc(e)), r.du = r.du.insert(e, n), jo(r.remoteStore, new dr(Nt(Ir(e.path)), n, "TargetPurposeLimboResolution", Bt.ue));
} }
function Ee(r, t, e) { return V(this, null, function* () { let n = F(r), i = [], s = [], a = []; n.Pu.isEmpty() || (n.Pu.forEach((u, c) => { a.push(n.gu(c, t, e).then(h => { var f; if ((h || e) && n.isPrimaryClient) {
    let m = h ? !h.fromCache : (f = e?.targetChanges.get(c.targetId)) === null || f === void 0 ? void 0 : f.current;
    n.sharedClientState.updateQueryState(c.targetId, m ? "current" : "not-current");
} if (h) {
    i.push(h);
    let m = Zu.Es(c.targetId, h);
    s.push(m);
} })); }), yield Promise.all(a), n.hu.J_(i), yield (function (c, h) { return V(this, null, function* () { let f = F(c); try {
    yield f.persistence.runTransaction("notifyLocalViewChanges", "readwrite", m => R.forEach(h, p => R.forEach(p.Is, A => f.persistence.referenceDelegate.addReference(m, p.targetId, A)).next(() => R.forEach(p.ds, A => f.persistence.referenceDelegate.removeReference(m, p.targetId, A)))));
}
catch (m) {
    if (!He(m))
        throw m;
    k(fl, "Failed to update sequence numbers: " + m);
} for (let m of h) {
    let p = m.targetId;
    if (!m.fromCache) {
        let A = f.Fs.get(p), C = A.snapshotVersion, D = A.withLastLimboFreeSnapshotVersion(C);
        f.Fs = f.Fs.insert(p, D);
    }
} }); })(n.localStore, s)); }); }
function zy(r, t) { return V(this, null, function* () { let e = F(r); if (!e.currentUser.isEqual(t)) {
    k(Ye, "User change. New user:", t.toKey());
    let n = yield Om(e.localStore, t);
    e.currentUser = t, (function (s, a) { s.Vu.forEach(u => { u.forEach(c => { c.reject(new x(b.CANCELLED, a)); }); }), s.Vu.clear(); })(e, "'waitForPendingWrites' promise is rejected due to a user change."), e.sharedClientState.handleUserChange(t, n.removedBatchIds, n.addedBatchIds), yield Ee(e, n.Bs);
} }); }
function Gy(r, t) { let e = F(r), n = e.Eu.get(t); if (n && n.lu)
    return K().add(n.key); {
    let i = K(), s = e.Tu.get(t);
    if (!s)
        return i;
    for (let a of s) {
        let u = e.Pu.get(a);
        i = i.unionWith(u.view.tu);
    }
    return i;
} }
function Ky(r, t) { return V(this, null, function* () { let e = F(r), n = yield uo(e.localStore, t.query, !0), i = t.view.uu(n); return e.isPrimaryClient && Ic(e, t.targetId, i._u), i; }); }
function $y(r, t) { return V(this, null, function* () { let e = F(r); return Um(e.localStore, t).then(n => Ee(e, n)); }); }
function Qy(r, t, e, n) { return V(this, null, function* () { let i = F(r), s = yield (function (u, c) { let h = F(u), f = F(h.mutationQueue); return h.persistence.runTransaction("Lookup mutation documents", "readonly", m => f.Xn(m, c).next(p => p ? h.localDocuments.getDocuments(m, p) : R.resolve(null))); })(i.localStore, t); s !== null ? (e === "pending" ? yield Ar(i.remoteStore) : e === "acknowledged" || e === "rejected" ? (Il(i, t, n || null), Tl(i, t), (function (u, c) { F(F(u).mutationQueue).rr(c); })(i.localStore, t)) : L(6720, "Unknown batchState", { wu: e }), yield Ee(i, s)) : k(Ye, "Cannot apply mutation batch with id: " + t); }); }
function Wy(r, t) { return V(this, null, function* () { let e = F(r); if (zo(e), Al(e), t === !0 && e.fu !== !0) {
    let n = e.sharedClientState.getAllActiveQueryTargets(), i = yield Zd(e, n.toArray());
    e.fu = !0, yield mc(e.remoteStore, !0);
    for (let s of i)
        jo(e.remoteStore, s);
}
else if (t === !1 && e.fu !== !1) {
    let n = [], i = Promise.resolve();
    e.Tu.forEach((s, a) => { e.sharedClientState.isLocalQueryTarget(a) ? n.push(a) : i = i.then(() => (yr(e, a), gr(e.localStore, a, !0))), pr(e.remoteStore, a); }), yield i, yield Zd(e, n), (function (a) { let u = F(a); u.Eu.forEach((c, h) => { pr(u.remoteStore, h); }), u.Au.jr(), u.Eu = new Map, u.du = new ot(M.comparator); })(e), e.fu = !1, yield mc(e.remoteStore, !1);
} }); }
function Zd(r, t, e) { return V(this, null, function* () { let n = F(r), i = [], s = []; for (let a of t) {
    let u, c = n.Tu.get(a);
    if (c && c.length !== 0) {
        u = yield mr(n.localStore, Nt(c[0]));
        for (let h of c) {
            let f = n.Pu.get(h), m = yield Ky(n, f);
            m.snapshot && s.push(m.snapshot);
        }
    }
    else {
        let h = yield qm(n.localStore, a);
        u = yield mr(n.localStore, h), yield vl(n, eg(h), a, !1, u.resumeToken);
    }
    i.push(u);
} return n.hu.J_(s), i; }); }
function eg(r) { return Wf(r.path, r.collectionGroup, r.orderBy, r.filters, r.limit, "F", r.startAt, r.endAt); }
function Hy(r) { return (function (e) { return F(F(e).persistence).Ps(); })(F(r).localStore); }
function Xy(r, t, e, n) { return V(this, null, function* () { let i = F(r); if (i.fu)
    return void k(Ye, "Ignoring unexpected query state notification."); let s = i.Tu.get(t); if (s && s.length > 0)
    switch (e) {
        case "current":
        case "not-current": {
            let a = yield Um(i.localStore, Yf(s[0])), u = Ai.createSynthesizedRemoteEventForCurrentChange(t, e === "current", mt.EMPTY_BYTE_STRING);
            yield Ee(i, a, u);
            break;
        }
        case "rejected":
            yield gr(i.localStore, t, !0), yr(i, t, n);
            break;
        default: L(64155, e);
    } }); }
function Jy(r, t, e) { return V(this, null, function* () { let n = zo(r); if (n.fu) {
    for (let i of t) {
        if (n.Tu.has(i) && n.sharedClientState.isActiveQueryTarget(i)) {
            k(Ye, "Adding an already active target " + i);
            continue;
        }
        let s = yield qm(n.localStore, i), a = yield mr(n.localStore, s);
        yield vl(n, eg(s), a.targetId, !1, a.resumeToken), jo(n.remoteStore, a);
    }
    for (let i of e)
        n.Tu.has(i) && (yield gr(n.localStore, i, !1).then(() => { pr(n.remoteStore, i), yr(n, i); }).catch(We));
} }); }
function zo(r) { let t = F(r); return t.remoteStore.remoteSyncer.applyRemoteEvent = Zm.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Gy.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = Ly.bind(null, t), t.hu.J_ = xy.bind(null, t.eventManager), t.hu.pu = Dy.bind(null, t.eventManager), t; }
function Al(r) { let t = F(r); return t.remoteStore.remoteSyncer.applySuccessfulWrite = qy.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = Uy.bind(null, t), t; }
function Yy(r, t, e) { let n = F(r); (function (s, a, u) { return V(this, null, function* () { try {
    let c = yield a.getMetadata();
    if (yield (function (A, C) { let D = F(A), N = ft(C.createTime); return D.persistence.runTransaction("hasNewerBundle", "readonly", q => D.Ti.getBundleMetadata(q, C.id)).then(q => !!q && q.createTime.compareTo(N) >= 0); })(s.localStore, c))
        return yield a.close(), u._completeWith((function (A) { return { taskState: "Success", documentsLoaded: A.totalDocuments, bytesLoaded: A.totalBytes, totalDocuments: A.totalDocuments, totalBytes: A.totalBytes }; })(c)), Promise.resolve(new Set);
    u._updateProgress(Jm(c));
    let h = new Fi(c, a.serializer), f = yield a.Su();
    for (; f;) {
        let p = yield h.Wa(f);
        p && u._updateProgress(p), f = yield a.Su();
    }
    let m = yield h.za(s.localStore);
    return yield Ee(s, m.Ja, void 0), yield (function (A, C) { let D = F(A); return D.persistence.runTransaction("Save bundle", "readwrite", N => D.Ti.saveBundleMetadata(N, C)); })(s.localStore, c), u._completeWith(m.progress), Promise.resolve(m.ja);
}
catch (c) {
    return Ot(Ye, `Loading bundle failed with ${c}`), u._failWith(c), Promise.resolve(new Set);
} }); })(n, t, e).then(i => { n.sharedClientState.notifyBundleLoaded(i); }); }
var Go = (() => { class r {
    constructor() { this.kind = "memory", this.synchronizeTabs = !1; }
    initialize(e) { return V(this, null, function* () { this.serializer = Pn(e.databaseInfo.databaseId), this.sharedClientState = this.bu(e), this.persistence = this.Du(e), yield this.persistence.start(), this.localStore = this.vu(e), this.gcScheduler = this.Cu(e, this.localStore), this.indexBackfillerScheduler = this.Fu(e, this.localStore); }); }
    Cu(e, n) { return null; }
    Fu(e, n) { return null; }
    vu(e) { return Fm(this.persistence, new ao, e.initialUser, this.serializer); }
    Du(e) { return new Ci(so.Vi, this.serializer); }
    bu(e) { return new ho; }
    terminate() { return V(this, null, function* () { var e, n; (e = this.gcScheduler) === null || e === void 0 || e.stop(), (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(), this.sharedClientState.shutdown(), yield this.persistence.shutdown(); }); }
} return r.provider = { build: () => new r }, r; })(), Oi = class extends Go {
    constructor(t) { super(), this.cacheSizeBytes = t; }
    Cu(t, e) { U(this.persistence.referenceDelegate instanceof oo, 46915); let n = this.persistence.referenceDelegate.garbageCollector; return new no(n, t.asyncQueue, e); }
    Du(t) { let e = this.cacheSizeBytes !== void 0 ? Mt.withCacheSize(this.cacheSizeBytes) : Mt.DEFAULT; return new Ci(n => oo.Vi(n, e), this.serializer); }
}, Mi = class r extends Go {
    constructor(t, e, n) { super(), this.Mu = t, this.cacheSizeBytes = e, this.forceOwnership = n, this.kind = "persistent", this.synchronizeTabs = !1; }
    initialize(t) { return V(this, null, function* () { yield Ta(r.prototype, this, "initialize").call(this, t), yield this.Mu.initialize(this, t), yield Al(this.Mu.syncEngine), yield Ar(this.Mu.remoteStore), yield this.persistence.ji(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve())); }); }
    vu(t) { return Fm(this.persistence, new ao, t.initialUser, this.serializer); }
    Cu(t, e) { let n = this.persistence.referenceDelegate.garbageCollector; return new no(n, t.asyncQueue, e); }
    Fu(t, e) { let n = new Ya(e, this.persistence); return new Ja(t.asyncQueue, n); }
    Du(t) { let e = dl(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = this.cacheSizeBytes !== void 0 ? Mt.withCacheSize(this.cacheSizeBytes) : Mt.DEFAULT; return new Yu(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, Km(), Vs(), this.serializer, this.sharedClientState, !!this.forceOwnership); }
    bu(t) { return new ho; }
}, Io = class r extends Mi {
    constructor(t, e) { super(t, e, !1), this.Mu = t, this.cacheSizeBytes = e, this.synchronizeTabs = !0; }
    initialize(t) { return V(this, null, function* () { yield Ta(r.prototype, this, "initialize").call(this, t); let e = this.Mu.syncEngine; this.sharedClientState instanceof ci && (this.sharedClientState.syncEngine = { Do: Qy.bind(null, e), vo: Xy.bind(null, e), Co: Jy.bind(null, e), Ps: Hy.bind(null, e), bo: $y.bind(null, e) }, yield this.sharedClientState.start()), yield this.persistence.ji(n => V(this, null, function* () { yield Wy(this.Mu.syncEngine, n), this.gcScheduler && (n && !this.gcScheduler.started ? this.gcScheduler.start() : n || this.gcScheduler.stop()), this.indexBackfillerScheduler && (n && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : n || this.indexBackfillerScheduler.stop()); })); }); }
    bu(t) { let e = Km(); if (!ci.C(e))
        throw new x(b.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage."); let n = dl(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey); return new ci(e, t.asyncQueue, n, t.clientId, t.initialUser); }
}, Rr = (() => { class r {
    initialize(e, n) { return V(this, null, function* () { this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = i => Yd(this.syncEngine, i, 1), this.remoteStore.remoteSyncer.handleCredentialChange = zy.bind(null, this.syncEngine), yield mc(this.remoteStore, this.syncEngine.isPrimaryClient)); }); }
    createEventManager(e) { return (function () { return new yc; })(); }
    createDatastore(e) { let n = Pn(e.databaseInfo.databaseId), i = (function (a) { return new ac(a); })(e.databaseInfo); return (function (a, u, c, h) { return new hc(a, u, c, h); })(e.authCredentials, e.appCheckCredentials, i, n); }
    createRemoteStore(e) { return (function (i, s, a, u, c) { return new fc(i, s, a, u, c); })(this.localStore, this.datastore, e.asyncQueue, n => Yd(this.syncEngine, n, 0), (function () { return fo.C() ? new fo : new rc; })()); }
    createSyncEngine(e, n) { return (function (s, a, u, c, h, f, m) { let p = new Tc(s, a, u, c, h, f); return m && (p.fu = !0), p; })(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, n); }
    terminate() { return V(this, null, function* () { var e, n; yield (function (s) { return V(this, null, function* () { let a = F(s); k(Tn, "RemoteStore shutting down."), a.Ia.add(5), yield Er(a), a.Ea.shutdown(), a.Aa.set("Unknown"); }); })(this.remoteStore), (e = this.datastore) === null || e === void 0 || e.terminate(), (n = this.eventManager) === null || n === void 0 || n.terminate(); }); }
} return r.provider = { build: () => new r }, r; })();
function tf(r, t = 10240) { let e = 0; return { read() { return V(this, null, function* () { if (e < r.byteLength) {
        let i = { value: r.slice(e, e + t), done: !1 };
        return e += t, i;
    } return { done: !0 }; }); }, cancel() { return V(this, null, function* () { }); }, releaseLock() { }, closed: Promise.resolve() }; }
var _r = class {
    constructor(t) { this.observer = t, this.muted = !1; }
    next(t) { this.muted || this.observer.next && this.xu(this.observer.next, t); }
    error(t) { this.muted || (this.observer.error ? this.xu(this.observer.error, t) : dt("Uncaught Error in snapshot listener:", t.toString())); }
    Ou() { this.muted = !0; }
    xu(t, e) { setTimeout(() => { this.muted || t(e); }, 0); }
};
var Ec = class {
    constructor(t, e) {
        this.Nu = t, this.serializer = e, this.metadata = new vt, this.buffer = new Uint8Array, this.Bu = (function () { return new TextDecoder("utf-8"); })(), this.Lu().then(n => {
            n && n.Qa() ? this.metadata.resolve(n.qa.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n?.qa)}`));
        }, n => this.metadata.reject(n));
    }
    close() { return this.Nu.cancel(); }
    getMetadata() { return V(this, null, function* () { return this.metadata.promise; }); }
    Su() { return V(this, null, function* () { return yield this.getMetadata(), this.Lu(); }); }
    Lu() { return V(this, null, function* () { let t = yield this.ku(); if (t === null)
        return null; let e = this.Bu.decode(t), n = Number(e); isNaN(n) && this.qu(`length string (${e}) is not valid number`); let i = yield this.Qu(n); return new yo(JSON.parse(i), t.length + n); }); }
    $u() { return this.buffer.findIndex(t => t === 123); }
    ku() { return V(this, null, function* () { for (; this.$u() < 0 && !(yield this.Uu());)
        ; if (this.buffer.length === 0)
        return null; let t = this.$u(); t < 0 && this.qu("Reached the end of bundle when a length string is expected."); let e = this.buffer.slice(0, t); return this.buffer = this.buffer.slice(t), e; }); }
    Qu(t) { return V(this, null, function* () { for (; this.buffer.length < t;)
        (yield this.Uu()) && this.qu("Reached the end of bundle when more is expected."); let e = this.Bu.decode(this.buffer.slice(0, t)); return this.buffer = this.buffer.slice(t), e; }); }
    qu(t) { throw this.Nu.cancel(), new Error(`Invalid bundle format: ${t}`); }
    Uu() { return V(this, null, function* () { let t = yield this.Nu.read(); if (!t.done) {
        let e = new Uint8Array(this.buffer.length + t.value.length);
        e.set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e;
    } return t.done; }); }
};
var Ac = class {
    constructor(t, e) {
        this.bundleData = t, this.serializer = e, this.cursor = 0, this.elements = [];
        let n = this.Su();
        if (!n || !n.Qa())
            throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n?.qa)}`);
        this.metadata = n;
        do
            n = this.Su(), n !== null && this.elements.push(n);
        while (n !== null);
    }
    getMetadata() { return this.metadata; }
    Ku() { return this.elements; }
    Su() { if (this.cursor === this.bundleData.length)
        return null; let t = this.ku(), e = this.Qu(t); return new yo(JSON.parse(e), t); }
    Qu(t) { if (this.cursor + t > this.bundleData.length)
        throw new x(b.INTERNAL, "Reached the end of bundle when more is expected."); return this.bundleData.slice(this.cursor, this.cursor += t); }
    ku() { let t = this.cursor, e = this.cursor; for (; e < this.bundleData.length;) {
        if (this.bundleData[e] === "{") {
            if (e === t)
                throw new Error("First character is a bracket and not a number");
            return this.cursor = e, Number(this.bundleData.slice(t, e));
        }
        e++;
    } throw new Error("Reached the end of bundle when more is expected."); }
};
var bc = class {
    constructor(t) { this.datastore = t, this.readVersions = new Map, this.mutations = [], this.committed = !1, this.lastTransactionError = null, this.writtenDocs = new Set; }
    lookup(t) { return V(this, null, function* () { if (this.ensureCommitNotCalled(), this.mutations.length > 0)
        throw this.lastTransactionError = new x(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError; let e = yield (function (i, s) { return V(this, null, function* () { let a = F(i), u = { documents: s.map(m => Si(a.serializer, m)) }, c = yield a.Jo("BatchGetDocuments", a.serializer.databaseId, H.emptyPath(), u, s.length), h = new Map; c.forEach(m => { let p = ry(a.serializer, m); h.set(p.key.toString(), p); }); let f = []; return s.forEach(m => { let p = h.get(m.toString()); U(!!p, 55234, { key: m }), f.push(p); }), f; }); })(this.datastore, t); return e.forEach(n => this.recordVersion(n)), e; }); }
    set(t, e) { this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString()); }
    update(t, e) { try {
        this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    }
    catch (n) {
        this.lastTransactionError = n;
    } this.writtenDocs.add(t.toString()); }
    delete(t) { this.write(new Ke(t, this.precondition(t))), this.writtenDocs.add(t.toString()); }
    commit() { return V(this, null, function* () { if (this.ensureCommitNotCalled(), this.lastTransactionError)
        throw this.lastTransactionError; let t = this.readVersions; this.mutations.forEach(e => { t.delete(e.key.toString()); }), t.forEach((e, n) => { let i = M.fromPath(n); this.mutations.push(new Ti(i, this.precondition(i))); }), yield (function (n, i) { return V(this, null, function* () { let s = F(n), a = { writes: i.map(u => Ri(s.serializer, u)) }; yield s.Wo("Commit", s.serializer.databaseId, H.emptyPath(), a); }); })(this.datastore, this.mutations), this.committed = !0; }); }
    recordVersion(t) { let e; if (t.isFoundDocument())
        e = t.version;
    else {
        if (!t.isNoDocument())
            throw L(50498, { Wu: t.constructor.name });
        e = z.min();
    } let n = this.readVersions.get(t.key.toString()); if (n) {
        if (!e.isEqual(n))
            throw new x(b.ABORTED, "Document version changed between two reads.");
    }
    else
        this.readVersions.set(t.key.toString(), e); }
    precondition(t) { let e = this.readVersions.get(t.toString()); return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(z.min()) ? ht.exists(!1) : ht.updateTime(e) : ht.none(); }
    preconditionForUpdate(t) { let e = this.readVersions.get(t.toString()); if (!this.writtenDocs.has(t.toString()) && e) {
        if (e.isEqual(z.min()))
            throw new x(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
        return ht.updateTime(e);
    } return ht.exists(!0); }
    write(t) { this.ensureCommitNotCalled(), this.mutations.push(t); }
    ensureCommitNotCalled() { }
};
var Sc = class {
    constructor(t, e, n, i, s) { this.asyncQueue = t, this.datastore = e, this.options = n, this.updateFunction = i, this.deferred = s, this.Gu = n.maxAttempts, this.F_ = new Di(this.asyncQueue, "transaction_retry"); }
    zu() { this.Gu -= 1, this.ju(); }
    ju() { this.F_.g_(() => V(this, null, function* () { let t = new bc(this.datastore), e = this.Ju(t); e && e.then(n => { this.asyncQueue.enqueueAndForget(() => t.commit().then(() => { this.deferred.resolve(n); }).catch(i => { this.Hu(i); })); }).catch(n => { this.Hu(n); }); })); }
    Ju(t) { try {
        let e = this.updateFunction(t);
        return !zi(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    }
    catch (e) {
        return this.deferred.reject(e), null;
    } }
    Hu(t) { this.Gu > 0 && this.Yu(t) ? (this.Gu -= 1, this.asyncQueue.enqueueAndForget(() => (this.ju(), Promise.resolve()))) : this.deferred.reject(t); }
    Yu(t) { if (t.name === "FirebaseError") {
        let e = t.code;
        return e === "aborted" || e === "failed-precondition" || e === "already-exists" || !hm(e);
    } return !1; }
};
var Qe = "FirestoreClient", Rc = class {
    constructor(t, e, n, i, s) { this.authCredentials = t, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = i, this.user = _t.UNAUTHENTICATED, this.clientId = hi.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = s, this.authCredentials.start(n, a => V(this, null, function* () { k(Qe, "Received user=", a.uid), yield this.authCredentialListener(a), this.user = a; })), this.appCheckCredentials.start(n, a => (k(Qe, "Received new app check token=", a), this.appCheckCredentialListener(a, this.user))); }
    get configuration() { return { asyncQueue: this.asyncQueue, databaseInfo: this.databaseInfo, clientId: this.clientId, authCredentials: this.authCredentials, appCheckCredentials: this.appCheckCredentials, initialUser: this.user, maxConcurrentLimboResolutions: 100 }; }
    setCredentialChangeListener(t) { this.authCredentialListener = t; }
    setAppCheckTokenChangeListener(t) { this.appCheckCredentialListener = t; }
    terminate() { this.asyncQueue.enterRestrictedMode(); let t = new vt; return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(() => V(this, null, function* () { try {
        this._onlineComponents && (yield this._onlineComponents.terminate()), this._offlineComponents && (yield this._offlineComponents.terminate()), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve();
    }
    catch (e) {
        let n = Sr(e, "Failed to shutdown persistence");
        t.reject(n);
    } })), t.promise; }
};
function qa(r, t) { return V(this, null, function* () { r.asyncQueue.verifyOperationInProgress(), k(Qe, "Initializing OfflineComponentProvider"); let e = r.configuration; yield t.initialize(e); let n = e.initialUser; r.setCredentialChangeListener(i => V(null, null, function* () { n.isEqual(i) || (yield Om(t.localStore, i), n = i); })), t.persistence.setDatabaseDeletedListener(() => { Ot("Terminating Firestore due to IndexedDb database deletion"), r.terminate().then(() => { k("Terminating Firestore due to IndexedDb database deletion completed successfully"); }).catch(i => { Ot("Terminating Firestore due to IndexedDb database deletion failed", i); }); }), r._offlineComponents = t; }); }
function ef(r, t) { return V(this, null, function* () { r.asyncQueue.verifyOperationInProgress(); let e = yield bl(r); k(Qe, "Initializing OnlineComponentProvider"), yield t.initialize(e, r.configuration), r.setCredentialChangeListener(n => Hd(t.remoteStore, n)), r.setAppCheckTokenChangeListener((n, i) => Hd(t.remoteStore, i)), r._onlineComponents = t; }); }
function bl(r) { return V(this, null, function* () { if (!r._offlineComponents)
    if (r._uninitializedComponentsProvider) {
        k(Qe, "Using user provided OfflineComponentProvider");
        try {
            yield qa(r, r._uninitializedComponentsProvider._offline);
        }
        catch (t) {
            let e = t;
            if (!(function (i) { return i.name === "FirebaseError" ? i.code === b.FAILED_PRECONDITION || i.code === b.UNIMPLEMENTED : !(typeof DOMException < "u" && i instanceof DOMException) || i.code === 22 || i.code === 20 || i.code === 11; })(e))
                throw e;
            Ot("Error using user provided cache. Falling back to memory cache: " + e), yield qa(r, new Go);
        }
    }
    else
        k(Qe, "Using default OfflineComponentProvider"), yield qa(r, new Oi(void 0)); return r._offlineComponents; }); }
function Ko(r) { return V(this, null, function* () { return r._onlineComponents || (r._uninitializedComponentsProvider ? (k(Qe, "Using user provided OnlineComponentProvider"), yield ef(r, r._uninitializedComponentsProvider._online)) : (k(Qe, "Using default OnlineComponentProvider"), yield ef(r, new Rr))), r._onlineComponents; }); }
function ng(r) { return bl(r).then(t => t.persistence); }
function Pr(r) { return bl(r).then(t => t.localStore); }
function rg(r) { return Ko(r).then(t => t.remoteStore); }
function Sl(r) { return Ko(r).then(t => t.syncEngine); }
function ig(r) { return Ko(r).then(t => t.datastore); }
function wr(r) { return V(this, null, function* () { let t = yield Ko(r), e = t.eventManager; return e.onListen = Ny.bind(null, t.syncEngine), e.onUnlisten = Fy.bind(null, t.syncEngine), e.onFirstRemoteStoreListen = ky.bind(null, t.syncEngine), e.onLastRemoteStoreUnlisten = Oy.bind(null, t.syncEngine), e; }); }
function Zy(r) { return r.asyncQueue.enqueue(() => V(null, null, function* () { let t = yield ng(r), e = yield rg(r); return t.setNetworkEnabled(!0), (function (i) { let s = F(i); return s.Ia.delete(0), Wi(s); })(e); })); }
function t_(r) { return r.asyncQueue.enqueue(() => V(null, null, function* () { let t = yield ng(r), e = yield rg(r); return t.setNetworkEnabled(!1), (function (i) { return V(this, null, function* () { let s = F(i); s.Ia.add(0), yield Er(s), s.Aa.set("Offline"); }); })(e); })); }
function e_(r, t) { let e = new vt; return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (i, s, a) { return V(this, null, function* () { try {
    let u = yield (function (h, f) { let m = F(h); return m.persistence.runTransaction("read document", "readonly", p => m.localDocuments.getDocument(p, f)); })(i, s);
    u.isFoundDocument() ? a.resolve(u) : u.isNoDocument() ? a.resolve(null) : a.reject(new x(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
}
catch (u) {
    let c = Sr(u, `Failed to get document '${s} from cache`);
    a.reject(c);
} }); })(yield Pr(r), t, e); })), e.promise; }
function sg(r, t, e = {}) { let n = new vt; return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (s, a, u, c, h) { let f = new _r({ next: p => { f.Ou(), a.enqueueAndForget(() => _l(s, m)); let A = p.docs.has(u); !A && p.fromCache ? h.reject(new x(b.UNAVAILABLE, "Failed to get document because the client is offline.")) : A && p.fromCache && c && c.source === "server" ? h.reject(new x(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : h.resolve(p); }, error: p => h.reject(p) }), m = new ki(Ir(u.path), f, { includeMetadataChanges: !0, ka: !0 }); return yl(s, m); })(yield wr(r), r.asyncQueue, t, e, n); })), n.promise; }
function n_(r, t) { let e = new vt; return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (i, s, a) { return V(this, null, function* () { try {
    let u = yield uo(i, s, !0), c = new To(s, u.qs), h = c.nu(u.documents), f = c.applyChanges(h, !1);
    a.resolve(f.snapshot);
}
catch (u) {
    let c = Sr(u, `Failed to execute query '${s} against cache`);
    a.reject(c);
} }); })(yield Pr(r), t, e); })), e.promise; }
function og(r, t, e = {}) { let n = new vt; return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (s, a, u, c, h) { let f = new _r({ next: p => { f.Ou(), a.enqueueAndForget(() => _l(s, m)), p.fromCache && c.source === "server" ? h.reject(new x(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : h.resolve(p); }, error: p => h.reject(p) }), m = new ki(u, f, { includeMetadataChanges: !0, ka: !0 }); return yl(s, m); })(yield wr(r), r.asyncQueue, t, e, n); })), n.promise; }
function r_(r, t, e) { let n = new vt; return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { try {
    let i = yield ig(r);
    n.resolve((function (a, u, c) { return V(this, null, function* () { var h; let f = F(a), { request: m, ft: p, parent: A } = wm(f.serializer, Hf(u), c); f.connection.Qo || delete m.parent; let C = (yield f.Jo("RunAggregationQuery", f.serializer.databaseId, A, m, 1)).filter(N => !!N.result); U(C.length === 1, 64727); let D = (h = C[0].result) === null || h === void 0 ? void 0 : h.aggregateFields; return Object.keys(D).reduce((N, q) => (N[p[q]] = D[q], N), {}); }); })(i, t, e));
}
catch (i) {
    n.reject(i);
} })), n.promise; }
function i_(r, t) { let e = new _r(t); return r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (i, s) { F(i).Da.add(s), s.next(); })(yield wr(r), e); })), () => { e.Ou(), r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return (function (i, s) { F(i).Da.delete(s); })(yield wr(r), e); })); }; }
function s_(r, t, e, n) { let i = (function (a, u) { let c; return c = typeof a == "string" ? Xc().encode(a) : a, (function (f, m) { return new Ec(f, m); })((function (f, m) { if (f instanceof Uint8Array)
    return tf(f, m); if (f instanceof ArrayBuffer)
    return tf(new Uint8Array(f), m); if (f instanceof ReadableStream)
    return f.getReader(); throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream"); })(c), u); })(e, Pn(t)); r.asyncQueue.enqueueAndForget(() => V(null, null, function* () { Yy(yield Sl(r), i, n); })); }
function o_(r, t) { return r.asyncQueue.enqueue(() => V(null, null, function* () { return (function (n, i) { let s = F(n); return s.persistence.runTransaction("Get named query", "readonly", a => s.Ti.getNamedQuery(a, i)); })(yield Pr(r), t); })); }
function ag(r, t) { return (function (n, i) { return new Ac(n, i); })(r, t); }
function a_(r, t) { return r.asyncQueue.enqueue(() => V(null, null, function* () { return (function (n, i) { return V(this, null, function* () { let s = F(n), a = s.indexManager, u = []; return s.persistence.runTransaction("Configure indexes", "readwrite", c => a.getFieldIndexes(c).next(h => (function (m, p, A, C, D) { m = [...m], p = [...p], m.sort(A), p.sort(A); let N = m.length, q = p.length, j = 0, B = 0; for (; j < q && B < N;) {
    let Q = A(m[B], p[j]);
    Q < 0 ? D(m[B++]) : Q > 0 ? C(p[j++]) : (j++, B++);
} for (; j < q;)
    C(p[j++]); for (; B < N;)
    D(m[B++]); })(h, i, lp, f => { u.push(a.addFieldIndex(c, f)); }, f => { u.push(a.deleteFieldIndex(c, f)); })).next(() => R.waitFor(u))); }); })(yield Pr(r), t); })); }
function u_(r, t) { return r.asyncQueue.enqueue(() => V(null, null, function* () { return (function (n, i) { F(n).Cs.Rs = i; })(yield Pr(r), t); })); }
function c_(r) { return r.asyncQueue.enqueue(() => V(null, null, function* () { return (function (e) { let n = F(e), i = n.indexManager; return n.persistence.runTransaction("Delete All Indexes", "readwrite", s => i.deleteAllFieldIndexes(s)); })(yield Pr(r)); })); }
function ug(r) { let t = {}; return r.timeoutSeconds !== void 0 && (t.timeoutSeconds = r.timeoutSeconds), t; }
var nf = new Map;
var cg = "firestore.googleapis.com", rf = !0, Eo = class {
    constructor(t) { var e, n; if (t.host === void 0) {
        if (t.ssl !== void 0)
            throw new x(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
        this.host = cg, this.ssl = rf;
    }
    else
        this.host = t.host, this.ssl = (e = t.ssl) !== null && e !== void 0 ? e : rf; if (this.isUsingEmulator = t.emulatorOptions !== void 0, this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, t.cacheSizeBytes === void 0)
        this.cacheSizeBytes = Rm;
    else {
        if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < xm)
            throw new x(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
        this.cacheSizeBytes = t.cacheSizeBytes;
    } cp("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : t.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = ug((n = t.experimentalLongPollingOptions) !== null && n !== void 0 ? n : {}), (function (s) { if (s.timeoutSeconds !== void 0) {
        if (isNaN(s.timeoutSeconds))
            throw new x(b.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
        if (s.timeoutSeconds < 5)
            throw new x(b.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);
        if (s.timeoutSeconds > 30)
            throw new x(b.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`);
    } })(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams; }
    isEqual(t) { return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && (function (n, i) { return n.timeoutSeconds === i.timeoutSeconds; })(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams; }
}, En = class {
    constructor(t, e, n, i) { this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = n, this._app = i, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Eo({}), this._settingsFrozen = !1, this._emulatorOptions = {}, this._terminateTask = "notTerminated"; }
    get app() { if (!this._app)
        throw new x(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this._app; }
    get _initialized() { return this._settingsFrozen; }
    get _terminated() { return this._terminateTask !== "notTerminated"; }
    _setSettings(t) { if (this._settingsFrozen)
        throw new x(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."); this._settings = new Eo(t), this._emulatorOptions = t.emulatorOptions || {}, t.credentials !== void 0 && (this._authCredentials = (function (n) { if (!n)
        return new Ua; switch (n.type) {
        case "firstParty": return new Ga(n.sessionIndex || "0", n.iamToken || null, n.authTokenFactory || null);
        case "provider": return n.client;
        default: throw new x(b.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
    } })(t.credentials)); }
    _getSettings() { return this._settings; }
    _getEmulatorOptions() { return this._emulatorOptions; }
    _freezeSettings() { return this._settingsFrozen = !0, this._settings; }
    _delete() { return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()), this._terminateTask; }
    _restart() { return V(this, null, function* () { this._terminateTask === "notTerminated" ? yield this._terminate() : this._terminateTask = "notTerminated"; }); }
    toJSON() { return { app: this._app, databaseId: this._databaseId, settings: this._settings }; }
    _terminate() { return (function (e) { let n = nf.get(e); n && (k("ComponentProvider", "Removing Datastore"), nf.delete(e), n.terminate()); })(this), Promise.resolve(); }
};
function l_(r, t, e, n = {}) { var i; r = W(r, En); let s = fs(t), a = r._getSettings(), u = Object.assign(Object.assign({}, a), { emulatorOptions: r._getEmulatorOptions() }), c = `${t}:${e}`; s && (Ia(`https://${c}`), Fh("Firestore", !0)), a.host !== cg && a.host !== c && Ot("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."); let h = Object.assign(Object.assign({}, a), { host: c, ssl: s, emulatorOptions: n }); if (!Fn(h, u) && (r._setSettings(h), n.mockUserToken)) {
    let f, m;
    if (typeof n.mockUserToken == "string")
        f = n.mockUserToken, m = _t.MOCK_USER;
    else {
        f = kh(n.mockUserToken, (i = r._app) === null || i === void 0 ? void 0 : i.options.projectId);
        let p = n.mockUserToken.sub || n.mockUserToken.user_id;
        if (!p)
            throw new x(b.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
        m = new _t(p);
    }
    r._authCredentials = new Ba(new Cs(f, m));
} }
var At = class r {
    constructor(t, e, n) { this.converter = e, this._query = n, this.type = "query", this.firestore = t; }
    withConverter(t) { return new r(this.firestore, t, this._query); }
}, st = class r {
    constructor(t, e, n) { this.converter = e, this._key = n, this.type = "document", this.firestore = t; }
    get _path() { return this._key.path; }
    get id() { return this._key.path.lastSegment(); }
    get path() { return this._key.path.canonicalString(); }
    get parent() { return new ie(this.firestore, this.converter, this._key.path.popLast()); }
    withConverter(t) { return new r(this.firestore, t, this._key); }
    toJSON() { return { type: r._jsonSchemaVersion, referencePath: this._key.toString() }; }
    static fromJSON(t, e, n) { if (Rn(e, r._jsonSchema))
        return new r(t, n || null, new M(H.fromString(e.referencePath))); }
};
st._jsonSchemaVersion = "firestore/documentReference/1.0", st._jsonSchema = { type: wt("string", st._jsonSchemaVersion), referencePath: wt("string") };
var ie = class r extends At {
    constructor(t, e, n) { super(t, e, Ir(n)), this._path = n, this.type = "collection"; }
    get id() { return this._query.path.lastSegment(); }
    get path() { return this._query.path.canonicalString(); }
    get parent() { let t = this._path.popLast(); return t.isEmpty() ? null : new st(this.firestore, null, new M(t)); }
    withConverter(t) { return new r(this.firestore, t, this._path); }
};
function k_(r, t, ...e) { if (r = gt(r), Jc("collection", "path", t), r instanceof En) {
    let n = H.fromString(t, ...e);
    return Yh(n), new ie(r, null, n);
} {
    if (!(r instanceof st || r instanceof ie))
        throw new x(b.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    let n = r._path.child(H.fromString(t, ...e));
    return Yh(n), new ie(r.firestore, null, n);
} }
function F_(r, t) { if (r = W(r, En), Jc("collectionGroup", "collection id", t), t.indexOf("/") >= 0)
    throw new x(b.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`); return new At(r, null, (function (n) { return new Wt(H.emptyPath(), n); })(t)); }
function h_(r, t, ...e) { if (r = gt(r), arguments.length === 1 && (t = hi.newId()), Jc("doc", "path", t), r instanceof En) {
    let n = H.fromString(t, ...e);
    return Jh(n), new st(r, null, new M(n));
} {
    if (!(r instanceof st || r instanceof ie))
        throw new x(b.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    let n = r._path.child(H.fromString(t, ...e));
    return Jh(n), new st(r.firestore, r instanceof ie ? r.converter : null, new M(n));
} }
function O_(r, t) { return r = gt(r), t = gt(t), (r instanceof st || r instanceof ie) && (t instanceof st || t instanceof ie) && r.firestore === t.firestore && r.path === t.path && r.converter === t.converter; }
function lg(r, t) { return r = gt(r), t = gt(t), r instanceof At && t instanceof At && r.firestore === t.firestore && $i(r._query, t._query) && r.converter === t.converter; }
var sf = "AsyncQueue", Ao = class {
    constructor(t = Promise.resolve()) { this.Zu = [], this.Xu = !1, this.ec = [], this.tc = null, this.nc = !1, this.rc = !1, this.sc = [], this.F_ = new Di(this, "async_queue_retry"), this.oc = () => { let n = Vs(); n && k(sf, "Visibility state changed to " + n.visibilityState), this.F_.y_(); }, this._c = t; let e = Vs(); e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.oc); }
    get isShuttingDown() { return this.Xu; }
    enqueueAndForget(t) { this.enqueue(t); }
    enqueueAndForgetEvenWhileRestricted(t) { this.ac(), this.uc(t); }
    enterRestrictedMode(t) { if (!this.Xu) {
        this.Xu = !0, this.rc = t || !1;
        let e = Vs();
        e && typeof e.removeEventListener == "function" && e.removeEventListener("visibilitychange", this.oc);
    } }
    enqueue(t) { if (this.ac(), this.Xu)
        return new Promise(() => { }); let e = new vt; return this.uc(() => this.Xu && this.rc ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise)).then(() => e.promise); }
    enqueueRetryable(t) { this.enqueueAndForget(() => (this.Zu.push(t), this.cc())); }
    cc() { return V(this, null, function* () { if (this.Zu.length !== 0) {
        try {
            yield this.Zu[0](), this.Zu.shift(), this.F_.reset();
        }
        catch (t) {
            if (!He(t))
                throw t;
            k(sf, "Operation failed with retryable error: " + t);
        }
        this.Zu.length > 0 && this.F_.g_(() => this.cc());
    } }); }
    uc(t) { let e = this._c.then(() => (this.nc = !0, t().catch(n => { throw this.tc = n, this.nc = !1, dt("INTERNAL UNHANDLED ERROR: ", of(n)), n; }).then(n => (this.nc = !1, n)))); return this._c = e, e; }
    enqueueAfterDelay(t, e, n) { this.ac(), this.sc.indexOf(t) > -1 && (e = 0); let i = gc.createAndSchedule(this, t, e, n, s => this.lc(s)); return this.ec.push(i), i; }
    ac() { this.tc && L(47125, { hc: of(this.tc) }); }
    verifyOperationInProgress() { }
    Pc() { return V(this, null, function* () { let t; do
        t = this._c, yield t;
    while (t !== this._c); }); }
    Tc(t) { for (let e of this.ec)
        if (e.timerId === t)
            return !0; return !1; }
    Ic(t) { return this.Pc().then(() => { this.ec.sort((e, n) => e.targetTimeMs - n.targetTimeMs); for (let e of this.ec)
        if (e.skipDelay(), t !== "all" && e.timerId === t)
            break; return this.Pc(); }); }
    dc(t) { this.sc.push(t); }
    lc(t) { let e = this.ec.indexOf(t); this.ec.splice(e, 1); }
};
function of(r) {
    let t = r.message || "";
    return r.stack && (t = r.stack.includes(r.message) ? r.stack : r.message + `
` + r.stack), t;
}
function Xn(r) { return (function (e, n) { if (typeof e != "object" || e === null)
    return !1; let i = e; for (let s of n)
    if (s in i && typeof i[s] == "function")
        return !0; return !1; })(r, ["next", "error", "complete"]); }
var Pc = class {
    constructor() { this._progressObserver = {}, this._taskCompletionResolver = new vt, this._lastProgress = { taskState: "Running", totalBytes: 0, totalDocuments: 0, bytesLoaded: 0, documentsLoaded: 0 }; }
    onProgress(t, e, n) { this._progressObserver = { next: t, error: e, complete: n }; }
    catch(t) { return this._taskCompletionResolver.promise.catch(t); }
    then(t, e) { return this._taskCompletionResolver.promise.then(t, e); }
    _completeWith(t) { this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t); }
    _failWith(t) { this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t); }
    _updateProgress(t) { this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t); }
};
var M_ = -1, et = class extends En {
    constructor(t, e, n, i) { super(t, e, n, i), this.type = "firestore", this._queue = new Ao, this._persistenceKey = i?.name || "[DEFAULT]"; }
    _terminate() { return V(this, null, function* () { if (this._firestoreClient) {
        let t = this._firestoreClient.terminate();
        this._queue = new Ao(t), this._firestoreClient = void 0, yield t;
    } }); }
};
function L_(r, t, e) { e || (e = _i); let n = ba(r, "firestore"); if (n.isInitialized(e)) {
    let i = n.getImmediate({ identifier: e }), s = n.getOptions(e);
    if (Fn(s, t))
        return i;
    throw new x(b.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
} if (t.cacheSizeBytes !== void 0 && t.localCache !== void 0)
    throw new x(b.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object"); if (t.cacheSizeBytes !== void 0 && t.cacheSizeBytes !== -1 && t.cacheSizeBytes < xm)
    throw new x(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576"); return t.host && fs(t.host) && Ia(t.host), n.initialize({ options: t, instanceIdentifier: e }); }
function q_(r, t) { let e = typeof r == "object" ? r : Gh(), n = typeof r == "string" ? r : t || _i, i = ba(e, "firestore").getImmediate({ identifier: n }); if (!i._initialized) {
    let s = Nh("firestore");
    s && l_(i, ...s);
} return i; }
function ct(r) { if (r._terminated)
    throw new x(b.FAILED_PRECONDITION, "The client has already been terminated."); return r._firestoreClient || hg(r), r._firestoreClient; }
function hg(r) { var t, e, n; let i = r._freezeSettings(), s = (function (u, c, h, f) { return new nu(u, c, h, f.host, f.ssl, f.experimentalForceLongPolling, f.experimentalAutoDetectLongPolling, ug(f.experimentalLongPollingOptions), f.useFetchStreams, f.isUsingEmulator); })(r._databaseId, ((t = r._app) === null || t === void 0 ? void 0 : t.options.appId) || "", r._persistenceKey, i); r._componentsProvider || !((e = i.localCache) === null || e === void 0) && e._offlineComponentProvider && (!((n = i.localCache) === null || n === void 0) && n._onlineComponentProvider) && (r._componentsProvider = { _offline: i.localCache._offlineComponentProvider, _online: i.localCache._onlineComponentProvider }), r._firestoreClient = new Rc(r._authCredentials, r._appCheckCredentials, r._queue, s, r._componentsProvider && (function (u) { let c = u?._online.build(); return { _offline: u?._offline.build(c), _online: c }; })(r._componentsProvider)); }
function U_(r, t) { Ot("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead."); let e = r._freezeSettings(); return dg(r, Rr.provider, { build: n => new Mi(n, e.cacheSizeBytes, t?.forceOwnership) }), Promise.resolve(); }
function B_(r) { return V(this, null, function* () { Ot("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead."); let t = r._freezeSettings(); dg(r, Rr.provider, { build: e => new Io(e, t.cacheSizeBytes) }); }); }
function dg(r, t, e) { if ((r = W(r, et))._firestoreClient || r._terminated)
    throw new x(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."); if (r._componentsProvider || r._getSettings().localCache)
    throw new x(b.FAILED_PRECONDITION, "SDK cache is already specified."); r._componentsProvider = { _online: t, _offline: e }, hg(r); }
function j_(r) { if (r._initialized && !r._terminated)
    throw new x(b.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."); let t = new vt; return r._queue.enqueueAndForgetEvenWhileRestricted(() => V(null, null, function* () { try {
    yield (function (n) { return V(this, null, function* () { if (!qe.C())
        return Promise.resolve(); let i = n + km; yield qe.delete(i); }); })(dl(r._databaseId, r._persistenceKey)), t.resolve();
}
catch (e) {
    t.reject(e);
} })), t.promise; }
function z_(r) { return (function (e) { let n = new vt; return e.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return By(yield Sl(e), n); })), n.promise; })(ct(r = W(r, et))); }
function G_(r) { return Zy(ct(r = W(r, et))); }
function K_(r) { return t_(ct(r = W(r, et))); }
function $_(r) { return Bh(r.app, "firestore", r._databaseId.database), r._delete(); }
function af(r, t) { let e = ct(r = W(r, et)), n = new Pc; return s_(e, r._databaseId, t, n), n; }
function d_(r, t) { return o_(ct(r = W(r, et)), t).then(e => e ? new At(r, null, e.query) : null); }
var An = class {
    constructor(t = "count", e) { this._internalFieldPath = e, this.type = "AggregateField", this.aggregateType = t; }
}, Vc = class {
    constructor(t, e, n) { this._userDataWriter = e, this._data = n, this.type = "AggregateQuerySnapshot", this.query = t; }
    data() { return this._userDataWriter.convertObjectMap(this._data); }
};
var ge = class r {
    constructor(t) { this._byteString = t; }
    static fromBase64String(t) { try {
        return new r(mt.fromBase64String(t));
    }
    catch (e) {
        throw new x(b.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
    } }
    static fromUint8Array(t) { return new r(mt.fromUint8Array(t)); }
    toBase64() { return this._byteString.toBase64(); }
    toUint8Array() { return this._byteString.toUint8Array(); }
    toString() { return "Bytes(base64: " + this.toBase64() + ")"; }
    isEqual(t) { return this._byteString.isEqual(t._byteString); }
    toJSON() { return { type: r._jsonSchemaVersion, bytes: this.toBase64() }; }
    static fromJSON(t) { if (Rn(t, r._jsonSchema))
        return r.fromBase64String(t.bytes); }
};
ge._jsonSchemaVersion = "firestore/bytes/1.0", ge._jsonSchema = { type: wt("string", ge._jsonSchemaVersion), bytes: wt("string") };
var Te = class {
    constructor(...t) { for (let e = 0; e < t.length; ++e)
        if (t[e].length === 0)
            throw new x(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty."); this._internalPath = new Tt(t); }
    isEqual(t) { return this._internalPath.isEqual(t._internalPath); }
};
function Q_() { return new Te(Qa); }
var Ie = class {
    constructor(t) { this._methodName = t; }
};
var Oe = class r {
    constructor(t, e) { if (!isFinite(t) || t < -90 || t > 90)
        throw new x(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t); if (!isFinite(e) || e < -180 || e > 180)
        throw new x(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e); this._lat = t, this._long = e; }
    get latitude() { return this._lat; }
    get longitude() { return this._long; }
    isEqual(t) { return this._lat === t._lat && this._long === t._long; }
    _compareTo(t) { return G(this._lat, t._lat) || G(this._long, t._long); }
    toJSON() { return { latitude: this._lat, longitude: this._long, type: r._jsonSchemaVersion }; }
    static fromJSON(t) { if (Rn(t, r._jsonSchema))
        return new r(t.latitude, t.longitude); }
};
Oe._jsonSchemaVersion = "firestore/geoPoint/1.0", Oe._jsonSchema = { type: wt("string", Oe._jsonSchemaVersion), latitude: wt("number"), longitude: wt("number") };
var pe = class r {
    constructor(t) { this._values = (t || []).map(e => e); }
    toArray() { return this._values.map(t => t); }
    isEqual(t) { return (function (n, i) { if (n.length !== i.length)
        return !1; for (let s = 0; s < n.length; ++s)
        if (n[s] !== i[s])
            return !1; return !0; })(this._values, t._values); }
    toJSON() { return { type: r._jsonSchemaVersion, vectorValues: this._values }; }
    static fromJSON(t) { if (Rn(t, r._jsonSchema)) {
        if (Array.isArray(t.vectorValues) && t.vectorValues.every(e => typeof e == "number"))
            return new r(t.vectorValues);
        throw new x(b.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
    } }
};
pe._jsonSchemaVersion = "firestore/vectorValue/1.0", pe._jsonSchema = { type: wt("string", pe._jsonSchemaVersion), vectorValues: wt("object") };
var f_ = /^__.*__$/, Cc = class {
    constructor(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n; }
    toMutation(t, e) { return this.fieldMask !== null ? new Xt(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Ge(t, this.data, e, this.fieldTransforms); }
}, bo = class {
    constructor(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n; }
    toMutation(t, e) { return new Xt(t, this.data, this.fieldMask, e, this.fieldTransforms); }
};
function fg(r) { switch (r) {
    case 0:
    case 2:
    case 1: return !0;
    case 3:
    case 4: return !1;
    default: throw L(40011, { Ec: r });
} }
var So = class r {
    constructor(t, e, n, i, s, a) { this.settings = t, this.databaseId = e, this.serializer = n, this.ignoreUndefinedProperties = i, s === void 0 && this.Ac(), this.fieldTransforms = s || [], this.fieldMask = a || []; }
    get path() { return this.settings.path; }
    get Ec() { return this.settings.Ec; }
    Rc(t) { return new r(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask); }
    Vc(t) { var e; let n = (e = this.path) === null || e === void 0 ? void 0 : e.child(t), i = this.Rc({ path: n, mc: !1 }); return i.fc(t), i; }
    gc(t) { var e; let n = (e = this.path) === null || e === void 0 ? void 0 : e.child(t), i = this.Rc({ path: n, mc: !1 }); return i.Ac(), i; }
    yc(t) { return this.Rc({ path: void 0, mc: !0 }); }
    wc(t) { return Ro(t, this.settings.methodName, this.settings.Sc || !1, this.path, this.settings.bc); }
    contains(t) { return this.fieldMask.find(e => t.isPrefixOf(e)) !== void 0 || this.fieldTransforms.find(e => t.isPrefixOf(e.field)) !== void 0; }
    Ac() { if (this.path)
        for (let t = 0; t < this.path.length; t++)
            this.fc(this.path.get(t)); }
    fc(t) { if (t.length === 0)
        throw this.wc("Document fields must not be empty"); if (fg(this.Ec) && f_.test(t))
        throw this.wc('Document fields cannot begin and end with "__"'); }
}, xc = class {
    constructor(t, e, n) { this.databaseId = t, this.ignoreUndefinedProperties = e, this.serializer = n || Pn(t); }
    Dc(t, e, n, i = !1) { return new So({ Ec: t, methodName: e, bc: n, path: Tt.emptyPath(), mc: !1, Sc: i }, this.databaseId, this.serializer, this.ignoreUndefinedProperties); }
};
function Vn(r) { let t = r._freezeSettings(), e = Pn(r._databaseId); return new xc(r._databaseId, !!t.ignoreUndefinedProperties, e); }
function $o(r, t, e, n, i, s = {}) { let a = r.Dc(s.merge || s.mergeFields ? 2 : 0, t, e, i); Vl("Data must be an object, but it was:", a, n); let u = pg(n, a), c, h; if (s.merge)
    c = new jt(a.fieldMask), h = a.fieldTransforms;
else if (s.mergeFields) {
    let f = [];
    for (let m of s.mergeFields) {
        let p = qi(t, m, e);
        if (!a.contains(p))
            throw new x(b.INVALID_ARGUMENT, `Field '${p}' is specified in your field mask but missing from your input data.`);
        _g(f, p) || f.push(p);
    }
    c = new jt(f), h = a.fieldTransforms.filter(m => c.covers(m.field));
}
else
    c = null, h = a.fieldTransforms; return new Cc(new xt(u), c, h); }
var Li = class r extends Ie {
    _toFieldTransform(t) { if (t.Ec !== 2)
        throw t.Ec === 1 ? t.wc(`${this._methodName}() can only appear at the top level of your update data`) : t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`); return t.fieldMask.push(t.path), null; }
    isEqual(t) { return t instanceof r; }
};
function mg(r, t, e) { return new So({ Ec: 3, bc: t.settings.bc, methodName: r._methodName, mc: e }, t.databaseId, t.serializer, t.ignoreUndefinedProperties); }
var Dc = class r extends Ie {
    _toFieldTransform(t) { return new _n(t.path, new je); }
    isEqual(t) { return t instanceof r; }
}, Nc = class r extends Ie {
    constructor(t, e) { super(t), this.vc = e; }
    _toFieldTransform(t) { let e = mg(this, t, !0), n = this.vc.map(s => Cn(s, e)), i = new we(n); return new _n(t.path, i); }
    isEqual(t) { return t instanceof r && Fn(this.vc, t.vc); }
}, kc = class r extends Ie {
    constructor(t, e) { super(t), this.vc = e; }
    _toFieldTransform(t) { let e = mg(this, t, !0), n = this.vc.map(s => Cn(s, e)), i = new ve(n); return new _n(t.path, i); }
    isEqual(t) { return t instanceof r && Fn(this.vc, t.vc); }
}, Fc = class r extends Ie {
    constructor(t, e) { super(t), this.Cc = e; }
    _toFieldTransform(t) { let e = new ze(t.serializer, im(t.serializer, this.Cc)); return new _n(t.path, e); }
    isEqual(t) { return t instanceof r && this.Cc === t.Cc; }
};
function Rl(r, t, e, n) { let i = r.Dc(1, t, e); Vl("Data must be an object, but it was:", i, n); let s = [], a = xt.empty(); Xe(n, (c, h) => { let f = Qo(t, c, e); h = gt(h); let m = i.gc(f); if (h instanceof Li)
    s.push(f);
else {
    let p = Cn(h, m);
    p != null && (s.push(f), a.set(f, p));
} }); let u = new jt(s); return new bo(a, u, i.fieldTransforms); }
function Pl(r, t, e, n, i, s) { let a = r.Dc(1, t, e), u = [qi(t, n, e)], c = [i]; if (s.length % 2 != 0)
    throw new x(b.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`); for (let p = 0; p < s.length; p += 2)
    u.push(qi(t, s[p])), c.push(s[p + 1]); let h = [], f = xt.empty(); for (let p = u.length - 1; p >= 0; --p)
    if (!_g(h, u[p])) {
        let A = u[p], C = c[p];
        C = gt(C);
        let D = a.gc(A);
        if (C instanceof Li)
            h.push(A);
        else {
            let N = Cn(C, D);
            N != null && (h.push(A), f.set(A, N));
        }
    } let m = new jt(h); return new bo(f, m, a.fieldTransforms); }
function gg(r, t, e, n = !1) { return Cn(e, r.Dc(n ? 4 : 3, t)); }
function Cn(r, t) { if (yg(r = gt(r)))
    return Vl("Unsupported field value:", t, r), pg(r, t); if (r instanceof Ie)
    return (function (n, i) { if (!fg(i.Ec))
        throw i.wc(`${n._methodName}() can only be used with update() and set()`); if (!i.path)
        throw i.wc(`${n._methodName}() is not currently supported inside arrays`); let s = n._toFieldTransform(i); s && i.fieldTransforms.push(s); })(r, t), null; if (r === void 0 && t.ignoreUndefinedProperties)
    return null; if (t.path && t.fieldMask.push(t.path), r instanceof Array) {
    if (t.settings.mc && t.Ec !== 4)
        throw t.wc("Nested arrays are not supported");
    return (function (n, i) { let s = [], a = 0; for (let u of n) {
        let c = Cn(u, i.yc(a));
        c == null && (c = { nullValue: "NULL_VALUE" }), s.push(c), a++;
    } return { arrayValue: { values: s } }; })(r, t);
} return (function (n, i) { if ((n = gt(n)) === null)
    return { nullValue: "NULL_VALUE" }; if (typeof n == "number")
    return im(i.serializer, n); if (typeof n == "boolean")
    return { booleanValue: n }; if (typeof n == "string")
    return { stringValue: n }; if (n instanceof Date) {
    let s = ut.fromDate(n);
    return { timestampValue: hr(i.serializer, s) };
} if (n instanceof ut) {
    let s = new ut(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
    return { timestampValue: hr(i.serializer, s) };
} if (n instanceof Oe)
    return { geoPointValue: { latitude: n.latitude, longitude: n.longitude } }; if (n instanceof ge)
    return { bytesValue: fm(i.serializer, n._byteString) }; if (n instanceof st) {
    let s = i.databaseId, a = n.firestore._databaseId;
    if (!a.isEqual(s))
        throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);
    return { referenceValue: ll(n.firestore._databaseId || i.databaseId, n._key.path) };
} if (n instanceof pe)
    return (function (a, u) { return { mapValue: { fields: { [il]: { stringValue: sl }, [or]: { arrayValue: { values: a.toArray().map(h => { if (typeof h != "number")
                            throw u.wc("VectorValues must only contain numeric values."); return cl(u.serializer, h); }) } } } } }; })(n, i); throw i.wc(`Unsupported field value: ${Do(n)}`); })(r, t); }
function pg(r, t) { let e = {}; return kf(r) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : Xe(r, (n, i) => { let s = Cn(i, t.Vc(n)); s != null && (e[n] = s); }), { mapValue: { fields: e } }; }
function yg(r) { return !(typeof r != "object" || r === null || r instanceof Array || r instanceof Date || r instanceof ut || r instanceof Oe || r instanceof ge || r instanceof st || r instanceof Ie || r instanceof pe); }
function Vl(r, t, e) { if (!yg(e) || !pf(e)) {
    let n = Do(e);
    throw n === "an object" ? t.wc(r + " a custom object") : t.wc(r + " " + n);
} }
function qi(r, t, e) { if ((t = gt(t)) instanceof Te)
    return t._internalPath; if (typeof t == "string")
    return Qo(r, t); throw Ro("Field path arguments must be of type string or ", r, !1, void 0, e); }
var m_ = new RegExp("[~\\*/\\[\\]]");
function Qo(r, t, e) { if (t.search(m_) >= 0)
    throw Ro(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, r, !1, void 0, e); try {
    return new Te(...t.split("."))._internalPath;
}
catch {
    throw Ro(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, r, !1, void 0, e);
} }
function Ro(r, t, e, n, i) { let s = n && !n.isEmpty(), a = i !== void 0, u = `Function ${t}() called with invalid data`; e && (u += " (via `toFirestore()`)"), u += ". "; let c = ""; return (s || a) && (c += " (found", s && (c += ` in field ${n}`), a && (c += ` in document ${i}`), c += ")"), new x(b.INVALID_ARGUMENT, u + r + c); }
function _g(r, t) { return r.some(e => e.isEqual(t)); }
var bn = class {
    constructor(t, e, n, i, s) { this._firestore = t, this._userDataWriter = e, this._key = n, this._document = i, this._converter = s; }
    get id() { return this._key.path.lastSegment(); }
    get ref() { return new st(this._firestore, this._converter, this._key); }
    exists() { return this._document !== null; }
    data() { if (this._document) {
        if (this._converter) {
            let t = new Oc(this._firestore, this._userDataWriter, this._key, this._document, null);
            return this._converter.fromFirestore(t);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
    } }
    get(t) { if (this._document) {
        let e = this._document.data.field(Wo("DocumentSnapshot.get", t));
        if (e !== null)
            return this._userDataWriter.convertValue(e);
    } }
}, Oc = class extends bn {
    data() { return super.data(); }
};
function Wo(r, t) { return typeof t == "string" ? Qo(r, t) : t instanceof Te ? t._internalPath : t._delegate._internalPath; }
function wg(r) { if (r.limitType === "L" && r.explicitOrderBy.length === 0)
    throw new x(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause"); }
var Ui = class {
}, Sn = class extends Ui {
};
function W_(r, t, ...e) { let n = []; t instanceof Ui && n.push(t), n = n.concat(e), (function (s) { let a = s.filter(c => c instanceof vr).length, u = s.filter(c => c instanceof Bi).length; if (a > 1 || a > 0 && u > 0)
    throw new x(b.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."); })(n); for (let i of n)
    r = i._apply(r); return r; }
var Bi = class r extends Sn {
    constructor(t, e, n) { super(), this._field = t, this._op = e, this._value = n, this.type = "where"; }
    static _create(t, e, n) { return new r(t, e, n); }
    _apply(t) { let e = this._parse(t); return Tg(t._query, e), new At(t.firestore, t.converter, gu(t._query, e)); }
    _parse(t) { let e = Vn(t.firestore); return (function (s, a, u, c, h, f, m) { let p; if (h.isKeyField()) {
        if (f === "array-contains" || f === "array-contains-any")
            throw new x(b.INVALID_ARGUMENT, `Invalid Query. You can't perform '${f}' queries on documentId().`);
        if (f === "in" || f === "not-in") {
            cf(m, f);
            let C = [];
            for (let D of m)
                C.push(uf(c, s, D));
            p = { arrayValue: { values: C } };
        }
        else
            p = uf(c, s, m);
    }
    else
        f !== "in" && f !== "not-in" && f !== "array-contains-any" || cf(m, f), p = gg(u, a, m, f === "in" || f === "not-in"); return X.create(h, f, p); })(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value); }
};
function H_(r, t, e) { let n = t, i = Wo("where", r); return Bi._create(i, n, e); }
var vr = class r extends Ui {
    constructor(t, e) { super(), this.type = t, this._queryConstraints = e; }
    static _create(t, e) { return new r(t, e); }
    _parse(t) { let e = this._queryConstraints.map(n => n._parse(t)).filter(n => n.getFilters().length > 0); return e.length === 1 ? e[0] : tt.create(e, this._getOperator()); }
    _apply(t) { let e = this._parse(t); return e.getFilters().length === 0 ? t : ((function (i, s) { let a = i, u = s.getFlattenedFilters(); for (let c of u)
        Tg(a, c), a = gu(a, c); })(t._query, e), new At(t.firestore, t.converter, gu(t._query, e))); }
    _getQueryConstraints() { return this._queryConstraints; }
    _getOperator() { return this.type === "and" ? "and" : "or"; }
};
function X_(...r) { return r.forEach(t => Ig("or", t)), vr._create("or", r); }
function J_(...r) { return r.forEach(t => Ig("and", t)), vr._create("and", r); }
var Mc = class r extends Sn {
    constructor(t, e) { super(), this._field = t, this._direction = e, this.type = "orderBy"; }
    static _create(t, e) { return new r(t, e); }
    _apply(t) { let e = (function (i, s, a) { if (i.startAt !== null)
        throw new x(b.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."); if (i.endAt !== null)
        throw new x(b.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."); return new pn(s, a); })(t._query, this._field, this._direction); return new At(t.firestore, t.converter, (function (i, s) { let a = i.explicitOrderBy.concat([s]); return new Wt(i.path, i.collectionGroup, a, i.filters.slice(), i.limit, i.limitType, i.startAt, i.endAt); })(t._query, e)); }
};
function Y_(r, t = "asc") { let e = t, n = Wo("orderBy", r); return Mc._create(n, e); }
var Po = class r extends Sn {
    constructor(t, e, n) { super(), this.type = t, this._limit = e, this._limitType = n; }
    static _create(t, e, n) { return new r(t, e, n); }
    _apply(t) { return new At(t.firestore, t.converter, zs(t._query, this._limit, this._limitType)); }
};
function Z_(r) { return yf("limit", r), Po._create("limit", r, "F"); }
function tw(r) { return yf("limitToLast", r), Po._create("limitToLast", r, "L"); }
var Vo = class r extends Sn {
    constructor(t, e, n) { super(), this.type = t, this._docOrFields = e, this._inclusive = n; }
    static _create(t, e, n) { return new r(t, e, n); }
    _apply(t) { let e = vg(t, this.type, this._docOrFields, this._inclusive); return new At(t.firestore, t.converter, (function (i, s) { return new Wt(i.path, i.collectionGroup, i.explicitOrderBy.slice(), i.filters.slice(), i.limit, i.limitType, s, i.endAt); })(t._query, e)); }
};
function ew(...r) { return Vo._create("startAt", r, !0); }
function nw(...r) { return Vo._create("startAfter", r, !1); }
var Co = class r extends Sn {
    constructor(t, e, n) { super(), this.type = t, this._docOrFields = e, this._inclusive = n; }
    static _create(t, e, n) { return new r(t, e, n); }
    _apply(t) { let e = vg(t, this.type, this._docOrFields, this._inclusive); return new At(t.firestore, t.converter, (function (i, s) { return new Wt(i.path, i.collectionGroup, i.explicitOrderBy.slice(), i.filters.slice(), i.limit, i.limitType, i.startAt, s); })(t._query, e)); }
};
function rw(...r) { return Co._create("endBefore", r, !1); }
function iw(...r) { return Co._create("endAt", r, !0); }
function vg(r, t, e, n) { if (e[0] = gt(e[0]), e[0] instanceof bn)
    return (function (s, a, u, c, h) { if (!c)
        throw new x(b.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${u}().`); let f = []; for (let m of Wn(s))
        if (m.field.isKeyField())
            f.push(gn(a, c.key));
        else {
            let p = c.data.field(m.field);
            if (Oo(p))
                throw new x(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + m.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (p === null) {
                let A = m.field.canonicalString();
                throw new x(b.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`);
            }
            f.push(p);
        } return new oe(f, h); })(r._query, r.firestore._databaseId, t, e[0]._document, n); {
    let i = Vn(r.firestore);
    return (function (a, u, c, h, f, m) { let p = a.explicitOrderBy; if (f.length > p.length)
        throw new x(b.INVALID_ARGUMENT, `Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`); let A = []; for (let C = 0; C < f.length; C++) {
        let D = f[C];
        if (p[C].field.isKeyField()) {
            if (typeof D != "string")
                throw new x(b.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);
            if (!al(a) && D.indexOf("/") !== -1)
                throw new x(b.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);
            let N = a.path.child(H.fromString(D));
            if (!M.isDocumentKey(N))
                throw new x(b.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);
            let q = new M(N);
            A.push(gn(u, q));
        }
        else {
            let N = gg(c, h, D);
            A.push(N);
        }
    } return new oe(A, m); })(r._query, r.firestore._databaseId, i, t, e, n);
} }
function uf(r, t, e) { if (typeof (e = gt(e)) == "string") {
    if (e === "")
        throw new x(b.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!al(t) && e.indexOf("/") !== -1)
        throw new x(b.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);
    let n = t.path.child(H.fromString(e));
    if (!M.isDocumentKey(n))
        throw new x(b.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);
    return gn(r, new M(n));
} if (e instanceof st)
    return gn(r, e._key); throw new x(b.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Do(e)}.`); }
function cf(r, t) { if (!Array.isArray(r) || r.length === 0)
    throw new x(b.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`); }
function Tg(r, t) { let e = (function (i, s) { for (let a of i)
    for (let u of a.getFlattenedFilters())
        if (s.indexOf(u.op) >= 0)
            return u.op; return null; })(r.filters, (function (i) { switch (i) {
    case "!=": return ["!=", "not-in"];
    case "array-contains-any":
    case "in": return ["not-in"];
    case "not-in": return ["array-contains-any", "in", "not-in", "!="];
    default: return [];
} })(t.op)); if (e !== null)
    throw e === t.op ? new x(b.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new x(b.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`); }
function Ig(r, t) { if (!(t instanceof Bi || t instanceof vr))
    throw new x(b.INVALID_ARGUMENT, `Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`); }
var xo = class {
    convertValue(t, e = "none") { switch (Ue(t)) {
        case 0: return null;
        case 1: return t.booleanValue;
        case 2: return at(t.integerValue || t.doubleValue);
        case 3: return this.convertTimestamp(t.timestampValue);
        case 4: return this.convertServerTimestamp(t, e);
        case 5: return t.stringValue;
        case 6: return this.convertBytes(_e(t.bytesValue));
        case 7: return this.convertReference(t.referenceValue);
        case 8: return this.convertGeoPoint(t.geoPointValue);
        case 9: return this.convertArray(t.arrayValue, e);
        case 11: return this.convertObject(t.mapValue, e);
        case 10: return this.convertVectorValue(t.mapValue);
        default: throw L(62114, { value: t });
    } }
    convertObject(t, e) { return this.convertObjectMap(t.fields, e); }
    convertObjectMap(t, e = "none") { let n = {}; return Xe(t, (i, s) => { n[i] = this.convertValue(s, e); }), n; }
    convertVectorValue(t) { var e, n, i; let s = (i = (n = (e = t.fields) === null || e === void 0 ? void 0 : e[or].arrayValue) === null || n === void 0 ? void 0 : n.values) === null || i === void 0 ? void 0 : i.map(a => at(a.doubleValue)); return new pe(s); }
    convertGeoPoint(t) { return new Oe(at(t.latitude), at(t.longitude)); }
    convertArray(t, e) { return (t.values || []).map(n => this.convertValue(n, e)); }
    convertServerTimestamp(t, e) { switch (e) {
        case "previous":
            let n = Mo(t);
            return n == null ? null : this.convertValue(n, e);
        case "estimate": return this.convertTimestamp(yi(t));
        default: return null;
    } }
    convertTimestamp(t) { let e = ye(t); return new ut(e.seconds, e.nanos); }
    convertDocumentKey(t, e) { let n = H.fromString(t); U(Em(n), 9688, { name: t }); let i = new sr(n.get(1), n.get(3)), s = new M(n.popFirst(5)); return i.isEqual(e) || dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), s; }
};
function Ho(r, t, e) { let n; return n = r ? e && (e.merge || e.mergeFields) ? r.toFirestore(t, e) : r.toFirestore(t) : t, n; }
var ji = class extends xo {
    constructor(t) { super(), this.firestore = t; }
    convertBytes(t) { return new ge(t); }
    convertReference(t) { let e = this.convertDocumentKey(t, this.firestore._databaseId); return new st(this.firestore, null, e); }
};
function sw(r) { return new An("sum", qi("sum", r)); }
function ow(r) { return new An("avg", qi("average", r)); }
function g_() { return new An("count"); }
function aw(r, t) { var e, n; return r instanceof An && t instanceof An && r.aggregateType === t.aggregateType && ((e = r._internalFieldPath) === null || e === void 0 ? void 0 : e.canonicalString()) === ((n = t._internalFieldPath) === null || n === void 0 ? void 0 : n.canonicalString()); }
function uw(r, t) { return lg(r.query, t.query) && Fn(r.data(), t.data()); }
var Eg = "NOT SUPPORTED", ee = class {
    constructor(t, e) { this.hasPendingWrites = t, this.fromCache = e; }
    isEqual(t) { return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache; }
}, zt = class r extends bn {
    constructor(t, e, n, i, s, a) { super(t, e, n, i, a), this._firestore = t, this._firestoreImpl = t, this.metadata = s; }
    exists() { return super.exists(); }
    data(t = {}) { if (this._document) {
        if (this._converter) {
            let e = new Jn(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
            return this._converter.fromFirestore(e, t);
        }
        return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
    } }
    get(t, e = {}) { if (this._document) {
        let n = this._document.data.field(Wo("DocumentSnapshot.get", t));
        if (n !== null)
            return this._userDataWriter.convertValue(n, e.serverTimestamps);
    } }
    toJSON() { if (this.metadata.hasPendingWrites)
        throw new x(b.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON()."); let t = this._document, e = {}; return e.type = r._jsonSchemaVersion, e.bundle = "", e.bundleSource = "DocumentSnapshot", e.bundleName = this._key.toString(), !t || !t.isValidDocument() || !t.isFoundDocument() ? e : (this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields, "previous"), e.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED"), e); }
};
function cw(r, t, e) { if (Rn(t, zt._jsonSchema)) {
    if (t.bundle === Eg)
        throw new x(b.INVALID_ARGUMENT, "The provided JSON object was created in a client environment, which is not supported.");
    let n = Pn(r._databaseId), i = ag(t.bundle, n), s = i.Ku(), a = new Fi(i.getMetadata(), n);
    for (let f of s)
        a.Wa(f);
    let u = a.documents;
    if (u.length !== 1)
        throw new x(b.INVALID_ARGUMENT, `Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);
    let c = qo(n, u[0].document), h = new M(H.fromString(t.bundleName));
    return new zt(r, new ji(r), h, c, new ee(!1, !1), e || null);
} }
zt._jsonSchemaVersion = "firestore/documentSnapshot/1.0", zt._jsonSchema = { type: wt("string", zt._jsonSchemaVersion), bundleSource: wt("string", "DocumentSnapshot"), bundleName: wt("string"), bundle: wt("string") };
var Jn = class extends zt {
    data(t = {}) { return super.data(t); }
}, Gt = class r {
    constructor(t, e, n, i) { this._firestore = t, this._userDataWriter = e, this._snapshot = i, this.metadata = new ee(i.hasPendingWrites, i.fromCache), this.query = n; }
    get docs() { let t = []; return this.forEach(e => t.push(e)), t; }
    get size() { return this._snapshot.docs.size; }
    get empty() { return this.size === 0; }
    forEach(t, e) { this._snapshot.docs.forEach(n => { t.call(e, new Jn(this._firestore, this._userDataWriter, n.key, n, new ee(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter)); }); }
    docChanges(t = {}) { let e = !!t.includeMetadataChanges; if (e && this._snapshot.excludesMetadataChanges)
        throw new x(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."); return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = (function (i, s) { if (i._snapshot.oldDocs.isEmpty()) {
        let a = 0;
        return i._snapshot.docChanges.map(u => { let c = new Jn(i._firestore, i._userDataWriter, u.doc.key, u.doc, new ee(i._snapshot.mutatedKeys.has(u.doc.key), i._snapshot.fromCache), i.query.converter); return u.doc, { type: "added", doc: c, oldIndex: -1, newIndex: a++ }; });
    } {
        let a = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter(u => s || u.type !== 3).map(u => { let c = new Jn(i._firestore, i._userDataWriter, u.doc.key, u.doc, new ee(i._snapshot.mutatedKeys.has(u.doc.key), i._snapshot.fromCache), i.query.converter), h = -1, f = -1; return u.type !== 0 && (h = a.indexOf(u.doc.key), a = a.delete(u.doc.key)), u.type !== 1 && (a = a.add(u.doc), f = a.indexOf(u.doc.key)), { type: p_(u.type), doc: c, oldIndex: h, newIndex: f }; });
    } })(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges; }
    toJSON() { if (this.metadata.hasPendingWrites)
        throw new x(b.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON()."); let t = {}; t.type = r._jsonSchemaVersion, t.bundleSource = "QuerySnapshot", t.bundleName = hi.newId(), this._firestore._databaseId.database, this._firestore._databaseId.projectId; let e = [], n = [], i = []; return this.docs.forEach(s => { s._document !== null && (e.push(s._document), n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields, "previous")), i.push(s.ref.path)); }), t.bundle = (this._firestore, this.query._query, t.bundleName, "NOT SUPPORTED"), t; }
};
function lw(r, t, e) { if (Rn(t, Gt._jsonSchema)) {
    if (t.bundle === Eg)
        throw new x(b.INVALID_ARGUMENT, "The provided JSON object was created in a client environment, which is not supported.");
    let n = Pn(r._databaseId), i = ag(t.bundle, n), s = i.Ku(), a = new Fi(i.getMetadata(), n);
    for (let p of s)
        a.Wa(p);
    if (a.queries.length !== 1)
        throw new x(b.INVALID_ARGUMENT, `Snapshot data expected 1 query but found ${a.queries.length} queries.`);
    let u = Bo(a.queries[0].bundledQuery), c = a.documents, h = new Ni;
    c.map(p => { let A = qo(n, p.document); h = h.add(A); });
    let f = In.fromInitialDocuments(u, h, K(), !1, !1), m = new At(r, e || null, u);
    return new Gt(r, new ji(r), m, f);
} }
function p_(r) { switch (r) {
    case 0: return "added";
    case 2:
    case 3: return "modified";
    case 1: return "removed";
    default: return L(61501, { type: r });
} }
function hw(r, t) { return r instanceof zt && t instanceof zt ? r._firestore === t._firestore && r._key.isEqual(t._key) && (r._document === null ? t._document === null : r._document.isEqual(t._document)) && r._converter === t._converter : r instanceof Gt && t instanceof Gt && r._firestore === t._firestore && lg(r.query, t.query) && r.metadata.isEqual(t.metadata) && r._snapshot.isEqual(t._snapshot); }
function dw(r) { r = W(r, st); let t = W(r.firestore, et); return sg(ct(t), r._key).then(e => Cl(t, r, e)); }
Gt._jsonSchemaVersion = "firestore/querySnapshot/1.0", Gt._jsonSchema = { type: wt("string", Gt._jsonSchemaVersion), bundleSource: wt("string", "QuerySnapshot"), bundleName: wt("string"), bundle: wt("string") };
var ae = class extends xo {
    constructor(t) { super(), this.firestore = t; }
    convertBytes(t) { return new ge(t); }
    convertReference(t) { let e = this.convertDocumentKey(t, this.firestore._databaseId); return new st(this.firestore, null, e); }
};
function fw(r) { r = W(r, st); let t = W(r.firestore, et), e = ct(t), n = new ae(t); return e_(e, r._key).then(i => new zt(t, n, r._key, i, new ee(i !== null && i.hasLocalMutations, !0), r.converter)); }
function mw(r) { r = W(r, st); let t = W(r.firestore, et); return sg(ct(t), r._key, { source: "server" }).then(e => Cl(t, r, e)); }
function gw(r) { r = W(r, At); let t = W(r.firestore, et), e = ct(t), n = new ae(t); return wg(r._query), og(e, r._query).then(i => new Gt(t, n, r, i)); }
function pw(r) { r = W(r, At); let t = W(r.firestore, et), e = ct(t), n = new ae(t); return n_(e, r._query).then(i => new Gt(t, n, r, i)); }
function yw(r) { r = W(r, At); let t = W(r.firestore, et), e = ct(t), n = new ae(t); return og(e, r._query, { source: "server" }).then(i => new Gt(t, n, r, i)); }
function _w(r, t, e) { r = W(r, st); let n = W(r.firestore, et), i = Ho(r.converter, t, e); return Hi(n, [$o(Vn(n), "setDoc", r._key, i, r.converter !== null, e).toMutation(r._key, ht.none())]); }
function ww(r, t, e, ...n) { r = W(r, st); let i = W(r.firestore, et), s = Vn(i), a; return a = typeof (t = gt(t)) == "string" || t instanceof Te ? Pl(s, "updateDoc", r._key, t, e, n) : Rl(s, "updateDoc", r._key, t), Hi(i, [a.toMutation(r._key, ht.exists(!0))]); }
function vw(r) { return Hi(W(r.firestore, et), [new Ke(r._key, ht.none())]); }
function Tw(r, t) { let e = W(r.firestore, et), n = h_(r), i = Ho(r.converter, t); return Hi(e, [$o(Vn(r.firestore), "addDoc", n._key, i, r.converter !== null, {}).toMutation(n._key, ht.exists(!1))]).then(() => n); }
function lf(r, ...t) { var e, n, i; r = gt(r); let s = { includeMetadataChanges: !1, source: "default" }, a = 0; typeof t[a] != "object" || Xn(t[a]) || (s = t[a++]); let u = { includeMetadataChanges: s.includeMetadataChanges, source: s.source }; if (Xn(t[a])) {
    let m = t[a];
    t[a] = (e = m.next) === null || e === void 0 ? void 0 : e.bind(m), t[a + 1] = (n = m.error) === null || n === void 0 ? void 0 : n.bind(m), t[a + 2] = (i = m.complete) === null || i === void 0 ? void 0 : i.bind(m);
} let c, h, f; if (r instanceof st)
    h = W(r.firestore, et), f = Ir(r._key.path), c = { next: m => { t[a] && t[a](Cl(h, r, m)); }, error: t[a + 1], complete: t[a + 2] };
else {
    let m = W(r, At);
    h = W(m.firestore, et), f = m._query;
    let p = new ae(h);
    c = { next: A => { t[a] && t[a](new Gt(h, p, m, A)); }, error: t[a + 1], complete: t[a + 2] }, wg(r._query);
} return (function (p, A, C, D) { let N = new _r(D), q = new ki(A, N, C); return p.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return yl(yield wr(p), q); })), () => { N.Ou(), p.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return _l(yield wr(p), q); })); }; })(ct(h), f, u, c); }
function Iw(r, t, ...e) { let n = gt(r), i = (function (c) { let h = { bundle: "", bundleName: "", bundleSource: "" }, f = ["bundle", "bundleName", "bundleSource"]; for (let m of f) {
    if (!(m in c)) {
        h.error = `snapshotJson missing required field: ${m}`;
        break;
    }
    let p = c[m];
    if (typeof p != "string") {
        h.error = `snapshotJson field '${m}' must be a string.`;
        break;
    }
    if (p.length === 0) {
        h.error = `snapshotJson field '${m}' cannot be an empty string.`;
        break;
    }
    m === "bundle" ? h.bundle = p : m === "bundleName" ? h.bundleName = p : m === "bundleSource" && (h.bundleSource = p);
} return h; })(t); if (i.error)
    throw new x(b.INVALID_ARGUMENT, i.error); let s, a = 0; if (typeof e[a] != "object" || Xn(e[a]) || (s = e[a++]), i.bundleSource === "QuerySnapshot") {
    let u = null;
    if (typeof e[a] == "object" && Xn(e[a])) {
        let c = e[a++];
        u = { next: c.next, error: c.error, complete: c.complete };
    }
    else
        u = { next: e[a++], error: e[a++], complete: e[a++] };
    return (function (h, f, m, p, A) { let C, D = !1; return af(h, f.bundle).then(() => d_(h, f.bundleName)).then(q => { q && !D && (A && q.withConverter(A), C = lf(q, m || {}, p)); }).catch(q => (p.error && p.error(q), () => { })), () => { D || (D = !0, C && C()); }; })(n, i, s, u, e[a]);
} if (i.bundleSource === "DocumentSnapshot") {
    let u = null;
    if (typeof e[a] == "object" && Xn(e[a])) {
        let c = e[a++];
        u = { next: c.next, error: c.error, complete: c.complete };
    }
    else
        u = { next: e[a++], error: e[a++], complete: e[a++] };
    return (function (h, f, m, p, A) { let C, D = !1; return af(h, f.bundle).then(() => { if (!D) {
        let q = new st(h, A || null, M.fromPath(f.bundleName));
        C = lf(q, m || {}, p);
    } }).catch(q => (p.error && p.error(q), () => { })), () => { D || (D = !0, C && C()); }; })(n, i, s, u, e[a]);
} throw new x(b.INVALID_ARGUMENT, `unsupported bundle source: ${i.bundleSource}`); }
function Ew(r, t) { return i_(ct(r = W(r, et)), Xn(t) ? t : { next: t }); }
function Hi(r, t) { return (function (n, i) { let s = new vt; return n.asyncQueue.enqueueAndForget(() => V(null, null, function* () { return My(yield Sl(n), i, s); })), s.promise; })(ct(r), t); }
function Cl(r, t, e) { let n = e.docs.get(t._key), i = new ae(r); return new zt(r, i, t._key, n, new ee(e.hasPendingWrites, e.fromCache), t.converter); }
function Aw(r) { return y_(r, { count: g_() }); }
function y_(r, t) { let e = W(r.firestore, et), n = ct(e), i = Nf(t, (s, a) => new Gs(a, s.aggregateType, s._internalFieldPath)); return r_(n, r._query, i).then(s => (function (u, c, h) { let f = new ae(u); return new Vc(c, f, h); })(e, r, s)); }
var Lc = class {
    constructor(t) { this.kind = "memory", this._onlineComponentProvider = Rr.provider, t?.garbageCollector ? this._offlineComponentProvider = t.garbageCollector._offlineComponentProvider : this._offlineComponentProvider = { build: () => new Oi(void 0) }; }
    toJSON() { return { kind: this.kind }; }
}, qc = class {
    constructor(t) { let e; this.kind = "persistent", t?.tabManager ? (t.tabManager._initialize(t), e = t.tabManager) : (e = __(void 0), e._initialize(t)), this._onlineComponentProvider = e._onlineComponentProvider, this._offlineComponentProvider = e._offlineComponentProvider; }
    toJSON() { return { kind: this.kind }; }
}, Uc = class {
    constructor() { this.kind = "memoryEager", this._offlineComponentProvider = Go.provider; }
    toJSON() { return { kind: this.kind }; }
}, Bc = class {
    constructor(t) { this.kind = "memoryLru", this._offlineComponentProvider = { build: () => new Oi(t) }; }
    toJSON() { return { kind: this.kind }; }
};
function bw() { return new Uc; }
function Sw(r) { return new Bc(r?.cacheSizeBytes); }
function Rw(r) { return new Lc(r); }
function Pw(r) { return new qc(r); }
var jc = class {
    constructor(t) { this.forceOwnership = t, this.kind = "persistentSingleTab"; }
    toJSON() { return { kind: this.kind }; }
    _initialize(t) { this._onlineComponentProvider = Rr.provider, this._offlineComponentProvider = { build: e => new Mi(e, t?.cacheSizeBytes, this.forceOwnership) }; }
}, zc = class {
    constructor() { this.kind = "PersistentMultipleTab"; }
    toJSON() { return { kind: this.kind }; }
    _initialize(t) { this._onlineComponentProvider = Rr.provider, this._offlineComponentProvider = { build: e => new Io(e, t?.cacheSizeBytes) }; }
};
function __(r) { return new jc(r?.forceOwnership); }
function Vw() { return new zc; }
var w_ = { maxAttempts: 5 };
var Gc = class {
    constructor(t, e) { this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, this._dataReader = Vn(t); }
    set(t, e, n) { this._verifyNotCommitted(); let i = ke(t, this._firestore), s = Ho(i.converter, e, n), a = $o(this._dataReader, "WriteBatch.set", i._key, s, i.converter !== null, n); return this._mutations.push(a.toMutation(i._key, ht.none())), this; }
    update(t, e, n, ...i) { this._verifyNotCommitted(); let s = ke(t, this._firestore), a; return a = typeof (e = gt(e)) == "string" || e instanceof Te ? Pl(this._dataReader, "WriteBatch.update", s._key, e, n, i) : Rl(this._dataReader, "WriteBatch.update", s._key, e), this._mutations.push(a.toMutation(s._key, ht.exists(!0))), this; }
    delete(t) { this._verifyNotCommitted(); let e = ke(t, this._firestore); return this._mutations = this._mutations.concat(new Ke(e._key, ht.none())), this; }
    commit() { return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve(); }
    _verifyNotCommitted() { if (this._committed)
        throw new x(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called."); }
};
function ke(r, t) { if ((r = gt(r)).firestore !== t)
    throw new x(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance."); return r; }
var Kc = class {
    constructor(t, e) { this._firestore = t, this._transaction = e, this._dataReader = Vn(t); }
    get(t) { let e = ke(t, this._firestore), n = new ji(this._firestore); return this._transaction.lookup([e._key]).then(i => { if (!i || i.length !== 1)
        return L(24041); let s = i[0]; if (s.isFoundDocument())
        return new bn(this._firestore, n, s.key, s, e.converter); if (s.isNoDocument())
        return new bn(this._firestore, n, e._key, null, e.converter); throw L(18433, { doc: s }); }); }
    set(t, e, n) { let i = ke(t, this._firestore), s = Ho(i.converter, e, n), a = $o(this._dataReader, "Transaction.set", i._key, s, i.converter !== null, n); return this._transaction.set(i._key, a), this; }
    update(t, e, n, ...i) { let s = ke(t, this._firestore), a; return a = typeof (e = gt(e)) == "string" || e instanceof Te ? Pl(this._dataReader, "Transaction.update", s._key, e, n, i) : Rl(this._dataReader, "Transaction.update", s._key, e), this._transaction.update(s._key, a), this; }
    delete(t) { let e = ke(t, this._firestore); return this._transaction.delete(e._key), this; }
};
var $c = class extends Kc {
    constructor(t, e) { super(t, e), this._firestore = t; }
    get(t) { let e = ke(t, this._firestore), n = new ae(this._firestore); return super.get(t).then(i => new zt(this._firestore, n, e._key, i._document, new ee(!1, !1), e.converter)); }
};
function Cw(r, t, e) { r = W(r, et); let n = Object.assign(Object.assign({}, w_), e); return (function (s) { if (s.maxAttempts < 1)
    throw new x(b.INVALID_ARGUMENT, "Max attempts must be at least 1"); })(n), (function (s, a, u) { let c = new vt; return s.asyncQueue.enqueueAndForget(() => V(null, null, function* () { let h = yield ig(s); new Sc(s.asyncQueue, h, u, a, c).zu(); })), c.promise; })(ct(r), i => t(new $c(r, i)), n); }
function xw() { return new Li("deleteField"); }
function Dw() { return new Dc("serverTimestamp"); }
function Nw(...r) { return new Nc("arrayUnion", r); }
function kw(...r) { return new kc("arrayRemove", r); }
function Fw(r) { return new Fc("increment", r); }
function Ow(r) { return new pe(r); }
function Mw(r) { return ct(r = W(r, et)), new Gc(r, t => Hi(r, t)); }
function Lw(r, t) { let e = ct(r = W(r, et)); if (!e._uninitializedComponentsProvider || e._uninitializedComponentsProvider._offline.kind === "memory")
    return Ot("Cannot enable indexes when persistence is disabled"), Promise.resolve(); let n = (function (s) { let a = typeof s == "string" ? (function (h) { try {
    return JSON.parse(h);
}
catch (f) {
    throw new x(b.INVALID_ARGUMENT, "Failed to parse JSON: " + f?.message);
} })(s) : s, u = []; if (Array.isArray(a.indexes))
    for (let c of a.indexes) {
        let h = hf(c, "collectionGroup"), f = [];
        if (Array.isArray(c.fields))
            for (let m of c.fields) {
                let p = Qo("setIndexConfiguration", hf(m, "fieldPath"));
                m.arrayConfig === "CONTAINS" ? f.push(new me(p, 2)) : m.order === "ASCENDING" ? f.push(new me(p, 0)) : m.order === "DESCENDING" && f.push(new me(p, 1));
            }
        u.push(new Le(Le.UNKNOWN_ID, h, f, tr.empty()));
    } return u; })(t); return a_(e, n); }
function hf(r, t) { if (typeof r[t] != "string")
    throw new x(b.INVALID_ARGUMENT, "Missing string value for: " + t); return r[t]; }
var Qc = class {
    constructor(t) { this._firestore = t, this.type = "PersistentCacheIndexManager"; }
};
function qw(r) { var t; r = W(r, et); let e = df.get(r); if (e)
    return e; if (((t = ct(r)._uninitializedComponentsProvider) === null || t === void 0 ? void 0 : t._offline.kind) !== "persistent")
    return null; let n = new Qc(r); return df.set(r, n), n; }
function Uw(r) { Ag(r, !0); }
function Bw(r) { Ag(r, !1); }
function jw(r) { c_(ct(r._firestore)).then(t => k("deleting all persistent cache indexes succeeded")).catch(t => Ot("deleting all persistent cache indexes failed", t)); }
function Ag(r, t) { u_(ct(r._firestore), t).then(e => k(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e => Ot(`setting persistent cache index auto creation isEnabled=${t} failed`, e)); }
var df = new WeakMap;
function zw(r) { var t; let e = (t = ct(W(r.firestore, et))._onlineComponents) === null || t === void 0 ? void 0 : t.datastore.serializer; return e === void 0 ? null : Uo(e, Nt(r._query)).Vt; }
function Gw(r, t) { var e; let n = Nf(t, (s, a) => new Gs(a, s.aggregateType, s._internalFieldPath)), i = (e = ct(W(r.firestore, et))._onlineComponents) === null || e === void 0 ? void 0 : e.datastore.serializer; return i === void 0 ? null : wm(i, Hf(r._query), n, !0).request; }
var ff = class {
    constructor() { throw new Error("instances of this class should not be created"); }
    static onExistenceFilterMismatch(t) { return Wc.instance.onExistenceFilterMismatch(t); }
}, Wc = class r {
    constructor() { this.Fc = new Map; }
    static get instance() { return Ts || (Ts = new r, (function (e) { if (Ks)
        throw new Error("a TestingHooksSpi instance is already set"); Ks = e; })(Ts)), Ts; }
    ct(t) { this.Fc.forEach(e => e(t)); }
    onExistenceFilterMismatch(t) { let e = Symbol(), n = this.Fc; return n.set(e, t), () => n.delete(e); }
}, Ts = null;
(function (t, e = !0) { (function (i) { Tr = i; })(zh), Uh(new Lh("firestore", (n, { instanceIdentifier: i, options: s }) => { let a = n.getProvider("app").getImmediate(), u = new et(new ja(n.getProvider("auth-internal")), new Ka(a, n.getProvider("app-check-internal")), (function (h, f) { if (!Object.prototype.hasOwnProperty.apply(h.options, ["projectId"]))
    throw new x(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); return new sr(h.options.projectId, f); })(a, i), a); return s = Object.assign({ useFetchStreams: e }, s), u._setSettings(s), u; }, "PUBLIC").setMultipleInstances(!0)), Sa(Qh, Wh, t), Sa(Qh, Wh, "esm2017"); })();
export { xo as AbstractUserDataWriter, An as AggregateField, Vc as AggregateQuerySnapshot, ge as Bytes, M_ as CACHE_SIZE_UNLIMITED, ie as CollectionReference, st as DocumentReference, zt as DocumentSnapshot, Te as FieldPath, Ie as FieldValue, et as Firestore, x as FirestoreError, Oe as GeoPoint, Pc as LoadBundleTask, Qc as PersistentCacheIndexManager, At as Query, vr as QueryCompositeFilterConstraint, Sn as QueryConstraint, Jn as QueryDocumentSnapshot, Co as QueryEndAtConstraint, Bi as QueryFieldFilterConstraint, Po as QueryLimitConstraint, Mc as QueryOrderByConstraint, Gt as QuerySnapshot, Vo as QueryStartAtConstraint, ee as SnapshotMetadata, ut as Timestamp, $c as Transaction, pe as VectorValue, Gc as WriteBatch, hi as _AutoId, mt as _ByteString, sr as _DatabaseId, M as _DocumentKey, Hh as _EmptyAppCheckTokenProvider, Ua as _EmptyAuthCredentialsProvider, Tt as _FieldPath, ff as _TestingHooks, W as _cast, x_ as _debugAssert, Gw as _internalAggregationQueryToProtoRunAggregationQueryRequest, zw as _internalQueryToProtoQueryTarget, N_ as _isBase64Available, Ot as _logWarn, cp as _validateIsNotUsedTogether, Tw as addDoc, aw as aggregateFieldEqual, uw as aggregateQuerySnapshotEqual, J_ as and, kw as arrayRemove, Nw as arrayUnion, ow as average, j_ as clearIndexedDbPersistence, k_ as collection, F_ as collectionGroup, l_ as connectFirestoreEmulator, g_ as count, jw as deleteAllPersistentCacheIndexes, vw as deleteDoc, xw as deleteField, K_ as disableNetwork, Bw as disablePersistentCacheIndexAutoCreation, h_ as doc, Q_ as documentId, cw as documentSnapshotFromJSON, U_ as enableIndexedDbPersistence, B_ as enableMultiTabIndexedDbPersistence, G_ as enableNetwork, Uw as enablePersistentCacheIndexAutoCreation, iw as endAt, rw as endBefore, ct as ensureFirestoreConfigured, Hi as executeWrite, y_ as getAggregateFromServer, Aw as getCountFromServer, dw as getDoc, fw as getDocFromCache, mw as getDocFromServer, gw as getDocs, pw as getDocsFromCache, yw as getDocsFromServer, q_ as getFirestore, qw as getPersistentCacheIndexManager, Fw as increment, L_ as initializeFirestore, Z_ as limit, tw as limitToLast, af as loadBundle, bw as memoryEagerGarbageCollector, Rw as memoryLocalCache, Sw as memoryLruGarbageCollector, d_ as namedQuery, lf as onSnapshot, Iw as onSnapshotResume, Ew as onSnapshotsInSync, X_ as or, Y_ as orderBy, Pw as persistentLocalCache, Vw as persistentMultipleTabManager, __ as persistentSingleTabManager, W_ as query, lg as queryEqual, lw as querySnapshotFromJSON, O_ as refEqual, Cw as runTransaction, Dw as serverTimestamp, _w as setDoc, Lw as setIndexConfiguration, C_ as setLogLevel, hw as snapshotEqual, nw as startAfter, ew as startAt, sw as sum, $_ as terminate, ww as updateDoc, Ow as vector, z_ as waitForPendingWrites, H_ as where, Mw as writeBatch };
/*! Bundled license information:

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
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
   * Copyright 2024 Google LLC
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
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
