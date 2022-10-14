/*! For license information please see chart-utils.min.js.LICENSE.txt */
(() => {
  "use strict";
  function t(t) {
    return (t + 0.5) | 0;
  }
  const e = (t, e, n) => Math.max(Math.min(t, n), e);
  function n(n) {
    return e(t(2.55 * n), 0, 255);
  }
  function r(n) {
    return e(t(255 * n), 0, 255);
  }
  function s(n) {
    return e(t(n / 2.55) / 100, 0, 1);
  }
  function i(n) {
    return e(t(100 * n), 0, 100);
  }
  const a = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    o = [..."0123456789ABCDEF"],
    u = (t) => o[15 & t],
    l = (t) => o[(240 & t) >> 4] + o[15 & t],
    c = (t) => (240 & t) >> 4 == (15 & t);
  const h =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function d(t, e, n) {
    const r = e * Math.min(n, 1 - n),
      s = (e, s = (e + t / 30) % 12) =>
        n - r * Math.max(Math.min(s - 3, 9 - s, 1), -1);
    return [s(0), s(8), s(4)];
  }
  function f(t, e, n) {
    const r = (r, s = (r + t / 60) % 6) =>
      n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [r(5), r(3), r(1)];
  }
  function m(t, e, n) {
    const r = d(t, 1, 0.5);
    let s;
    for (
      e + n > 1 && ((s = 1 / (e + n)), (e *= s), (n *= s)), s = 0;
      s < 3;
      s++
    )
      (r[s] *= 1 - e - n), (r[s] += e);
    return r;
  }
  function y(t) {
    const e = t.r / 255,
      n = t.g / 255,
      r = t.b / 255,
      s = Math.max(e, n, r),
      i = Math.min(e, n, r),
      a = (s + i) / 2;
    let o, u, l;
    return (
      s !== i &&
        ((l = s - i),
        (u = a > 0.5 ? l / (2 - s - i) : l / (s + i)),
        (o = (function (t, e, n, r, s) {
          return t === s
            ? (e - n) / r + (e < n ? 6 : 0)
            : e === s
            ? (n - t) / r + 2
            : (t - e) / r + 4;
        })(e, n, r, l, s)),
        (o = 60 * o + 0.5)),
      [0 | o, u || 0, a]
    );
  }
  function g(t, e, n, s) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, s)).map(r);
  }
  function p(t, e, n) {
    return g(d, t, e, n);
  }
  function w(t) {
    return ((t % 360) + 360) % 360;
  }
  const b = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh",
    },
    v = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32",
    };
  let O;
  const S =
      /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
    T = (t) =>
      t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
    M = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function k(t, e, n) {
    if (t) {
      let r = y(t);
      (r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1))),
        (r = p(r)),
        (t.r = r[0]),
        (t.g = r[1]),
        (t.b = r[2]);
    }
  }
  function N(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function D(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
          t.length > 3 && (e.a = r(t[3])))
        : ((e = N(t, { r: 0, g: 0, b: 0, a: 1 })).a = r(e.a)),
      e
    );
  }
  function E(t) {
    return "r" === t.charAt(0)
      ? (function (t) {
          const r = S.exec(t);
          let s,
            i,
            a,
            o = 255;
          if (r) {
            if (r[7] !== s) {
              const t = +r[7];
              o = r[8] ? n(t) : e(255 * t, 0, 255);
            }
            return (
              (s = +r[1]),
              (i = +r[3]),
              (a = +r[5]),
              (s = 255 & (r[2] ? n(s) : e(s, 0, 255))),
              (i = 255 & (r[4] ? n(i) : e(i, 0, 255))),
              (a = 255 & (r[6] ? n(a) : e(a, 0, 255))),
              { r: s, g: i, b: a, a: o }
            );
          }
        })(t)
      : (function (t) {
          const e = h.exec(t);
          let s,
            i = 255;
          if (!e) return;
          e[5] !== s && (i = e[6] ? n(+e[5]) : r(+e[5]));
          const a = w(+e[2]),
            o = +e[3] / 100,
            u = +e[4] / 100;
          return (
            (s =
              "hwb" === e[1]
                ? (function (t, e, n) {
                    return g(m, t, e, n);
                  })(a, o, u)
                : "hsv" === e[1]
                ? (function (t, e, n) {
                    return g(f, t, e, n);
                  })(a, o, u)
                : p(a, o, u)),
            { r: s[0], g: s[1], b: s[2], a: i }
          );
        })(t);
  }
  class x {
    constructor(t) {
      if (t instanceof x) return t;
      const e = typeof t;
      let n;
      var r, s, i;
      "object" === e
        ? (n = D(t))
        : "string" === e &&
          ((i = (r = t).length),
          "#" === r[0] &&
            (4 === i || 5 === i
              ? (s = {
                  r: 255 & (17 * a[r[1]]),
                  g: 255 & (17 * a[r[2]]),
                  b: 255 & (17 * a[r[3]]),
                  a: 5 === i ? 17 * a[r[4]] : 255,
                })
              : (7 !== i && 9 !== i) ||
                (s = {
                  r: (a[r[1]] << 4) | a[r[2]],
                  g: (a[r[3]] << 4) | a[r[4]],
                  b: (a[r[5]] << 4) | a[r[6]],
                  a: 9 === i ? (a[r[7]] << 4) | a[r[8]] : 255,
                })),
          (n =
            s ||
            (function (t) {
              O ||
                ((O = (function () {
                  const t = {},
                    e = Object.keys(v),
                    n = Object.keys(b);
                  let r, s, i, a, o;
                  for (r = 0; r < e.length; r++) {
                    for (a = o = e[r], s = 0; s < n.length; s++)
                      (i = n[s]), (o = o.replace(i, b[i]));
                    (i = parseInt(v[a], 16)),
                      (t[o] = [(i >> 16) & 255, (i >> 8) & 255, 255 & i]);
                  }
                  return t;
                })()),
                (O.transparent = [0, 0, 0, 0]));
              const e = O[t.toLowerCase()];
              return (
                e && {
                  r: e[0],
                  g: e[1],
                  b: e[2],
                  a: 4 === e.length ? e[3] : 255,
                }
              );
            })(t) ||
            E(t))),
        (this._rgb = n),
        (this._valid = !!n);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = N(this._rgb);
      return t && (t.a = s(t.a)), t;
    }
    set rgb(t) {
      this._rgb = D(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
            (t.a < 255
              ? `rgba(${t.r}, ${t.g}, ${t.b}, ${s(t.a)})`
              : `rgb(${t.r}, ${t.g}, ${t.b})`)
        : void 0;
      var t;
    }
    hexString() {
      return this._valid
        ? ((t = this._rgb),
          (e = ((t) => c(t.r) && c(t.g) && c(t.b) && c(t.a))(t) ? u : l),
          t
            ? "#" +
              e(t.r) +
              e(t.g) +
              e(t.b) +
              ((t, e) => (t < 255 ? e(t) : ""))(t.a, e)
            : void 0)
        : void 0;
      var t, e;
    }
    hslString() {
      return this._valid
        ? (function (t) {
            if (!t) return;
            const e = y(t),
              n = e[0],
              r = i(e[1]),
              a = i(e[2]);
            return t.a < 255
              ? `hsla(${n}, ${r}%, ${a}%, ${s(t.a)})`
              : `hsl(${n}, ${r}%, ${a}%)`;
          })(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const n = this.rgb,
          r = t.rgb;
        let s;
        const i = e === s ? 0.5 : e,
          a = 2 * i - 1,
          o = n.a - r.a,
          u = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2;
        (s = 1 - u),
          (n.r = 255 & (u * n.r + s * r.r + 0.5)),
          (n.g = 255 & (u * n.g + s * r.g + 0.5)),
          (n.b = 255 & (u * n.b + s * r.b + 0.5)),
          (n.a = i * n.a + (1 - i) * r.a),
          (this.rgb = n);
      }
      return this;
    }
    interpolate(t, e) {
      return (
        t &&
          (this._rgb = (function (t, e, n) {
            const i = M(s(t.r)),
              a = M(s(t.g)),
              o = M(s(t.b));
            return {
              r: r(T(i + n * (M(s(e.r)) - i))),
              g: r(T(a + n * (M(s(e.g)) - a))),
              b: r(T(o + n * (M(s(e.b)) - o))),
              a: t.a + n * (e.a - t.a),
            };
          })(this._rgb, t._rgb, e)),
        this
      );
    }
    clone() {
      return new x(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = r(t)), this;
    }
    clearer(t) {
      return (this._rgb.a *= 1 - t), this;
    }
    greyscale() {
      const e = this._rgb,
        n = t(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
      return (e.r = e.g = e.b = n), this;
    }
    opaquer(t) {
      return (this._rgb.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return k(this._rgb, 2, t), this;
    }
    darken(t) {
      return k(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return k(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return k(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return (
        (function (t, e) {
          var n = y(t);
          (n[0] = w(n[0] + e)),
            (n = p(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2]);
        })(this._rgb, t),
        this
      );
    }
  }
  class C extends Error {}
  class V extends C {
    constructor(t) {
      super(`Invalid DateTime: ${t.toMessage()}`);
    }
  }
  class F extends C {
    constructor(t) {
      super(`Invalid Interval: ${t.toMessage()}`);
    }
  }
  class I extends C {
    constructor(t) {
      super(`Invalid Duration: ${t.toMessage()}`);
    }
  }
  class L extends C {}
  class Z extends C {
    constructor(t) {
      super(`Invalid unit ${t}`);
    }
  }
  class $ extends C {}
  class _ extends C {
    constructor() {
      super("Zone is an abstract class");
    }
  }
  const A = "numeric",
    R = "short",
    z = "long",
    q = { year: A, month: A, day: A },
    Y = { year: A, month: R, day: A },
    j = { year: A, month: R, day: A, weekday: R },
    H = { year: A, month: z, day: A },
    U = { year: A, month: z, day: A, weekday: z },
    W = { hour: A, minute: A },
    P = { hour: A, minute: A, second: A },
    J = { hour: A, minute: A, second: A, timeZoneName: R },
    G = { hour: A, minute: A, second: A, timeZoneName: z },
    X = { hour: A, minute: A, hourCycle: "h23" },
    B = { hour: A, minute: A, second: A, hourCycle: "h23" },
    Q = { hour: A, minute: A, second: A, hourCycle: "h23", timeZoneName: R },
    K = { hour: A, minute: A, second: A, hourCycle: "h23", timeZoneName: z },
    tt = { year: A, month: A, day: A, hour: A, minute: A },
    et = { year: A, month: A, day: A, hour: A, minute: A, second: A },
    nt = { year: A, month: R, day: A, hour: A, minute: A },
    rt = { year: A, month: R, day: A, hour: A, minute: A, second: A },
    st = { year: A, month: R, day: A, weekday: R, hour: A, minute: A },
    it = { year: A, month: z, day: A, hour: A, minute: A, timeZoneName: R },
    at = {
      year: A,
      month: z,
      day: A,
      hour: A,
      minute: A,
      second: A,
      timeZoneName: R,
    },
    ot = {
      year: A,
      month: z,
      day: A,
      weekday: z,
      hour: A,
      minute: A,
      timeZoneName: z,
    },
    ut = {
      year: A,
      month: z,
      day: A,
      weekday: z,
      hour: A,
      minute: A,
      second: A,
      timeZoneName: z,
    };
  function lt(t) {
    return void 0 === t;
  }
  function ct(t) {
    return "number" == typeof t;
  }
  function ht(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function dt() {
    try {
      return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
    } catch (t) {
      return !1;
    }
  }
  function ft(t, e, n) {
    if (0 !== t.length)
      return t.reduce((t, r) => {
        const s = [e(r), r];
        return t && n(t[0], s[0]) === t[0] ? t : s;
      }, null)[1];
  }
  function mt(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function yt(t, e, n) {
    return ht(t) && t >= e && t <= n;
  }
  function gt(t, e = 2) {
    let n;
    return (
      (n =
        t < 0 ? "-" + ("" + -t).padStart(e, "0") : ("" + t).padStart(e, "0")),
      n
    );
  }
  function pt(t) {
    return lt(t) || null === t || "" === t ? void 0 : parseInt(t, 10);
  }
  function wt(t) {
    return lt(t) || null === t || "" === t ? void 0 : parseFloat(t);
  }
  function bt(t) {
    if (!lt(t) && null !== t && "" !== t) {
      const e = 1e3 * parseFloat("0." + t);
      return Math.floor(e);
    }
  }
  function vt(t, e, n = !1) {
    const r = 10 ** e;
    return (n ? Math.trunc : Math.round)(t * r) / r;
  }
  function Ot(t) {
    return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
  }
  function St(t) {
    return Ot(t) ? 366 : 365;
  }
  function Tt(t, e) {
    const n = (r = e - 1) - 12 * Math.floor(r / 12) + 1;
    var r;
    return 2 === n
      ? Ot(t + (e - n) / 12)
        ? 29
        : 28
      : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
  }
  function Mt(t) {
    let e = Date.UTC(
      t.year,
      t.month - 1,
      t.day,
      t.hour,
      t.minute,
      t.second,
      t.millisecond
    );
    return (
      t.year < 100 &&
        t.year >= 0 &&
        ((e = new Date(e)), e.setUTCFullYear(e.getUTCFullYear() - 1900)),
      +e
    );
  }
  function kt(t) {
    const e =
        (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7,
      n = t - 1,
      r =
        (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
    return 4 === e || 3 === r ? 53 : 52;
  }
  function Nt(t) {
    return t > 99 ? t : t > 60 ? 1900 + t : 2e3 + t;
  }
  function Dt(t, e, n, r = null) {
    const s = new Date(t),
      i = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
    r && (i.timeZone = r);
    const a = { timeZoneName: e, ...i },
      o = new Intl.DateTimeFormat(n, a)
        .formatToParts(s)
        .find((t) => "timezonename" === t.type.toLowerCase());
    return o ? o.value : null;
  }
  function Et(t, e) {
    let n = parseInt(t, 10);
    Number.isNaN(n) && (n = 0);
    const r = parseInt(e, 10) || 0;
    return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
  }
  function xt(t) {
    const e = Number(t);
    if ("boolean" == typeof t || "" === t || Number.isNaN(e))
      throw new $(`Invalid unit value ${t}`);
    return e;
  }
  function Ct(t, e) {
    const n = {};
    for (const r in t)
      if (mt(t, r)) {
        const s = t[r];
        if (null == s) continue;
        n[e(r)] = xt(s);
      }
    return n;
  }
  function Vt(t, e) {
    const n = Math.trunc(Math.abs(t / 60)),
      r = Math.trunc(Math.abs(t % 60)),
      s = t >= 0 ? "+" : "-";
    switch (e) {
      case "short":
        return `${s}${gt(n, 2)}:${gt(r, 2)}`;
      case "narrow":
        return `${s}${n}${r > 0 ? `:${r}` : ""}`;
      case "techie":
        return `${s}${gt(n, 2)}${gt(r, 2)}`;
      default:
        throw new RangeError(
          `Value format ${e} is out of range for property format`
        );
    }
  }
  function Ft(t) {
    return (function (t, e) {
      return ["hour", "minute", "second", "millisecond"].reduce(
        (e, n) => ((e[n] = t[n]), e),
        {}
      );
    })(t);
  }
  const It =
      /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,
    Lt = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Zt = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    $t = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function _t(t) {
    switch (t) {
      case "narrow":
        return [...$t];
      case "short":
        return [...Zt];
      case "long":
        return [...Lt];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
      default:
        return null;
    }
  }
  const At = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    Rt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    zt = ["M", "T", "W", "T", "F", "S", "S"];
  function qt(t) {
    switch (t) {
      case "narrow":
        return [...zt];
      case "short":
        return [...Rt];
      case "long":
        return [...At];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  const Yt = ["AM", "PM"],
    jt = ["Before Christ", "Anno Domini"],
    Ht = ["BC", "AD"],
    Ut = ["B", "A"];
  function Wt(t) {
    switch (t) {
      case "narrow":
        return [...Ut];
      case "short":
        return [...Ht];
      case "long":
        return [...jt];
      default:
        return null;
    }
  }
  function Pt(t, e) {
    let n = "";
    for (const r of t) r.literal ? (n += r.val) : (n += e(r.val));
    return n;
  }
  const Jt = {
    D: q,
    DD: Y,
    DDD: H,
    DDDD: U,
    t: W,
    tt: P,
    ttt: J,
    tttt: G,
    T: X,
    TT: B,
    TTT: Q,
    TTTT: K,
    f: tt,
    ff: nt,
    fff: it,
    ffff: ot,
    F: et,
    FF: rt,
    FFF: at,
    FFFF: ut,
  };
  class Gt {
    static create(t, e = {}) {
      return new Gt(t, e);
    }
    static parseFormat(t) {
      let e = null,
        n = "",
        r = !1;
      const s = [];
      for (let i = 0; i < t.length; i++) {
        const a = t.charAt(i);
        "'" === a
          ? (n.length > 0 && s.push({ literal: r, val: n }),
            (e = null),
            (n = ""),
            (r = !r))
          : r || a === e
          ? (n += a)
          : (n.length > 0 && s.push({ literal: !1, val: n }), (n = a), (e = a));
      }
      return n.length > 0 && s.push({ literal: r, val: n }), s;
    }
    static macroTokenToFormatOpts(t) {
      return Jt[t];
    }
    constructor(t, e) {
      (this.opts = e), (this.loc = t), (this.systemLoc = null);
    }
    formatWithSystemDefault(t, e) {
      return (
        null === this.systemLoc &&
          (this.systemLoc = this.loc.redefaultToSystem()),
        this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format()
      );
    }
    formatDateTime(t, e = {}) {
      return this.loc.dtFormatter(t, { ...this.opts, ...e }).format();
    }
    formatDateTimeParts(t, e = {}) {
      return this.loc.dtFormatter(t, { ...this.opts, ...e }).formatToParts();
    }
    resolvedOptions(t, e = {}) {
      return this.loc.dtFormatter(t, { ...this.opts, ...e }).resolvedOptions();
    }
    num(t, e = 0) {
      if (this.opts.forceSimple) return gt(t, e);
      const n = { ...this.opts };
      return e > 0 && (n.padTo = e), this.loc.numberFormatter(n).format(t);
    }
    formatDateTimeFromString(t, e) {
      const n = "en" === this.loc.listingMode(),
        r = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
        s = (e, n) => this.loc.extract(t, e, n),
        i = (e) =>
          t.isOffsetFixed && 0 === t.offset && e.allowZ
            ? "Z"
            : t.isValid
            ? t.zone.formatOffset(t.ts, e.format)
            : "",
        a = (e, r) =>
          n
            ? (function (t, e) {
                return _t(e)[t.month - 1];
              })(t, e)
            : s(r ? { month: e } : { month: e, day: "numeric" }, "month"),
        o = (e, r) =>
          n
            ? (function (t, e) {
                return qt(e)[t.weekday - 1];
              })(t, e)
            : s(
                r
                  ? { weekday: e }
                  : { weekday: e, month: "long", day: "numeric" },
                "weekday"
              ),
        u = (e) => {
          const n = Gt.macroTokenToFormatOpts(e);
          return n ? this.formatWithSystemDefault(t, n) : e;
        },
        l = (e) =>
          n
            ? (function (t, e) {
                return Wt(e)[t.year < 0 ? 0 : 1];
              })(t, e)
            : s({ era: e }, "era");
      return Pt(Gt.parseFormat(e), (e) => {
        switch (e) {
          case "S":
            return this.num(t.millisecond);
          case "u":
          case "SSS":
            return this.num(t.millisecond, 3);
          case "s":
            return this.num(t.second);
          case "ss":
            return this.num(t.second, 2);
          case "uu":
            return this.num(Math.floor(t.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(t.millisecond / 100));
          case "m":
            return this.num(t.minute);
          case "mm":
            return this.num(t.minute, 2);
          case "h":
            return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
          case "hh":
            return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
          case "H":
            return this.num(t.hour);
          case "HH":
            return this.num(t.hour, 2);
          case "Z":
            return i({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return i({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return i({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "short",
              locale: this.loc.locale,
            });
          case "ZZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "long",
              locale: this.loc.locale,
            });
          case "z":
            return t.zoneName;
          case "a":
            return n
              ? (function (t) {
                  return Yt[t.hour < 12 ? 0 : 1];
                })(t)
              : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod");
          case "d":
            return r ? s({ day: "numeric" }, "day") : this.num(t.day);
          case "dd":
            return r ? s({ day: "2-digit" }, "day") : this.num(t.day, 2);
          case "c":
          case "E":
            return this.num(t.weekday);
          case "ccc":
            return o("short", !0);
          case "cccc":
            return o("long", !0);
          case "ccccc":
            return o("narrow", !0);
          case "EEE":
            return o("short", !1);
          case "EEEE":
            return o("long", !1);
          case "EEEEE":
            return o("narrow", !1);
          case "L":
            return r
              ? s({ month: "numeric", day: "numeric" }, "month")
              : this.num(t.month);
          case "LL":
            return r
              ? s({ month: "2-digit", day: "numeric" }, "month")
              : this.num(t.month, 2);
          case "LLL":
            return a("short", !0);
          case "LLLL":
            return a("long", !0);
          case "LLLLL":
            return a("narrow", !0);
          case "M":
            return r ? s({ month: "numeric" }, "month") : this.num(t.month);
          case "MM":
            return r ? s({ month: "2-digit" }, "month") : this.num(t.month, 2);
          case "MMM":
            return a("short", !1);
          case "MMMM":
            return a("long", !1);
          case "MMMMM":
            return a("narrow", !1);
          case "y":
            return r ? s({ year: "numeric" }, "year") : this.num(t.year);
          case "yy":
            return r
              ? s({ year: "2-digit" }, "year")
              : this.num(t.year.toString().slice(-2), 2);
          case "yyyy":
            return r ? s({ year: "numeric" }, "year") : this.num(t.year, 4);
          case "yyyyyy":
            return r ? s({ year: "numeric" }, "year") : this.num(t.year, 6);
          case "G":
            return l("short");
          case "GG":
            return l("long");
          case "GGGGG":
            return l("narrow");
          case "kk":
            return this.num(t.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(t.weekYear, 4);
          case "W":
            return this.num(t.weekNumber);
          case "WW":
            return this.num(t.weekNumber, 2);
          case "o":
            return this.num(t.ordinal);
          case "ooo":
            return this.num(t.ordinal, 3);
          case "q":
            return this.num(t.quarter);
          case "qq":
            return this.num(t.quarter, 2);
          case "X":
            return this.num(Math.floor(t.ts / 1e3));
          case "x":
            return this.num(t.ts);
          default:
            return u(e);
        }
      });
    }
    formatDurationFromString(t, e) {
      const n = (t) => {
          switch (t[0]) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
              return "hour";
            case "d":
              return "day";
            case "w":
              return "week";
            case "M":
              return "month";
            case "y":
              return "year";
            default:
              return null;
          }
        },
        r = Gt.parseFormat(e),
        s = r.reduce((t, { literal: e, val: n }) => (e ? t : t.concat(n)), []);
      return Pt(
        r,
        ((t) => (e) => {
          const r = n(e);
          return r ? this.num(t.get(r), e.length) : e;
        })(t.shiftTo(...s.map(n).filter((t) => t)))
      );
    }
  }
  class Xt {
    constructor(t, e) {
      (this.reason = t), (this.explanation = e);
    }
    toMessage() {
      return this.explanation
        ? `${this.reason}: ${this.explanation}`
        : this.reason;
    }
  }
  class Bt {
    get type() {
      throw new _();
    }
    get name() {
      throw new _();
    }
    get ianaName() {
      return this.name;
    }
    get isUniversal() {
      throw new _();
    }
    offsetName(t, e) {
      throw new _();
    }
    formatOffset(t, e) {
      throw new _();
    }
    offset(t) {
      throw new _();
    }
    equals(t) {
      throw new _();
    }
    get isValid() {
      throw new _();
    }
  }
  let Qt = null;
  class Kt extends Bt {
    static get instance() {
      return null === Qt && (Qt = new Kt()), Qt;
    }
    get type() {
      return "system";
    }
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    get isUniversal() {
      return !1;
    }
    offsetName(t, { format: e, locale: n }) {
      return Dt(t, e, n);
    }
    formatOffset(t, e) {
      return Vt(this.offset(t), e);
    }
    offset(t) {
      return -new Date(t).getTimezoneOffset();
    }
    equals(t) {
      return "system" === t.type;
    }
    get isValid() {
      return !0;
    }
  }
  let te = {};
  const ee = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6,
  };
  let ne = {};
  class re extends Bt {
    static create(t) {
      return ne[t] || (ne[t] = new re(t)), ne[t];
    }
    static resetCache() {
      (ne = {}), (te = {});
    }
    static isValidSpecifier(t) {
      return this.isValidZone(t);
    }
    static isValidZone(t) {
      if (!t) return !1;
      try {
        return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
      } catch (t) {
        return !1;
      }
    }
    constructor(t) {
      super(), (this.zoneName = t), (this.valid = re.isValidZone(t));
    }
    get type() {
      return "iana";
    }
    get name() {
      return this.zoneName;
    }
    get isUniversal() {
      return !1;
    }
    offsetName(t, { format: e, locale: n }) {
      return Dt(t, e, n, this.name);
    }
    formatOffset(t, e) {
      return Vt(this.offset(t), e);
    }
    offset(t) {
      const e = new Date(t);
      if (isNaN(e)) return NaN;
      const n =
        ((r = this.name),
        te[r] ||
          (te[r] = new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: r,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short",
          })),
        te[r]);
      var r;
      let [s, i, a, o, u, l, c] = n.formatToParts
        ? (function (t, e) {
            const n = t.formatToParts(e),
              r = [];
            for (let t = 0; t < n.length; t++) {
              const { type: e, value: s } = n[t],
                i = ee[e];
              "era" === e ? (r[i] = s) : lt(i) || (r[i] = parseInt(s, 10));
            }
            return r;
          })(n, e)
        : (function (t, e) {
            const n = t.format(e).replace(/\u200E/g, ""),
              r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
              [, s, i, a, o, u, l, c] = r;
            return [a, s, i, o, u, l, c];
          })(n, e);
      "BC" === o && (s = 1 - Math.abs(s));
      let h = +e;
      const d = h % 1e3;
      return (
        (h -= d >= 0 ? d : 1e3 + d),
        (Mt({
          year: s,
          month: i,
          day: a,
          hour: 24 === u ? 0 : u,
          minute: l,
          second: c,
          millisecond: 0,
        }) -
          h) /
          6e4
      );
    }
    equals(t) {
      return "iana" === t.type && t.name === this.name;
    }
    get isValid() {
      return this.valid;
    }
  }
  let se = null;
  class ie extends Bt {
    static get utcInstance() {
      return null === se && (se = new ie(0)), se;
    }
    static instance(t) {
      return 0 === t ? ie.utcInstance : new ie(t);
    }
    static parseSpecifier(t) {
      if (t) {
        const e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (e) return new ie(Et(e[1], e[2]));
      }
      return null;
    }
    constructor(t) {
      super(), (this.fixed = t);
    }
    get type() {
      return "fixed";
    }
    get name() {
      return 0 === this.fixed ? "UTC" : `UTC${Vt(this.fixed, "narrow")}`;
    }
    get ianaName() {
      return 0 === this.fixed
        ? "Etc/UTC"
        : `Etc/GMT${Vt(-this.fixed, "narrow")}`;
    }
    offsetName() {
      return this.name;
    }
    formatOffset(t, e) {
      return Vt(this.fixed, e);
    }
    get isUniversal() {
      return !0;
    }
    offset() {
      return this.fixed;
    }
    equals(t) {
      return "fixed" === t.type && t.fixed === this.fixed;
    }
    get isValid() {
      return !0;
    }
  }
  class ae extends Bt {
    constructor(t) {
      super(), (this.zoneName = t);
    }
    get type() {
      return "invalid";
    }
    get name() {
      return this.zoneName;
    }
    get isUniversal() {
      return !1;
    }
    offsetName() {
      return null;
    }
    formatOffset() {
      return "";
    }
    offset() {
      return NaN;
    }
    equals() {
      return !1;
    }
    get isValid() {
      return !1;
    }
  }
  function oe(t, e) {
    if (lt(t) || null === t) return e;
    if (t instanceof Bt) return t;
    if ("string" == typeof t) {
      const n = t.toLowerCase();
      return "default" === n
        ? e
        : "local" === n || "system" === n
        ? Kt.instance
        : "utc" === n || "gmt" === n
        ? ie.utcInstance
        : ie.parseSpecifier(n) || re.create(t);
    }
    return ct(t)
      ? ie.instance(t)
      : "object" == typeof t && t.offset && "number" == typeof t.offset
      ? t
      : new ae(t);
  }
  let ue,
    le = () => Date.now(),
    ce = "system",
    he = null,
    de = null,
    fe = null;
  class me {
    static get now() {
      return le;
    }
    static set now(t) {
      le = t;
    }
    static set defaultZone(t) {
      ce = t;
    }
    static get defaultZone() {
      return oe(ce, Kt.instance);
    }
    static get defaultLocale() {
      return he;
    }
    static set defaultLocale(t) {
      he = t;
    }
    static get defaultNumberingSystem() {
      return de;
    }
    static set defaultNumberingSystem(t) {
      de = t;
    }
    static get defaultOutputCalendar() {
      return fe;
    }
    static set defaultOutputCalendar(t) {
      fe = t;
    }
    static get throwOnInvalid() {
      return ue;
    }
    static set throwOnInvalid(t) {
      ue = t;
    }
    static resetCaches() {
      ke.resetCache(), re.resetCache();
    }
  }
  let ye = {},
    ge = {};
  function pe(t, e = {}) {
    const n = JSON.stringify([t, e]);
    let r = ge[n];
    return r || ((r = new Intl.DateTimeFormat(t, e)), (ge[n] = r)), r;
  }
  let we = {},
    be = {},
    ve = null;
  function Oe(t, e, n, r, s) {
    const i = t.listingMode(n);
    return "error" === i ? null : "en" === i ? r(e) : s(e);
  }
  class Se {
    constructor(t, e, n) {
      (this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
      const { padTo: r, floor: s, ...i } = n;
      if (!e || Object.keys(i).length > 0) {
        const e = { useGrouping: !1, ...n };
        n.padTo > 0 && (e.minimumIntegerDigits = n.padTo),
          (this.inf = (function (t, e = {}) {
            const n = JSON.stringify([t, e]);
            let r = we[n];
            return r || ((r = new Intl.NumberFormat(t, e)), (we[n] = r)), r;
          })(t, e));
      }
    }
    format(t) {
      if (this.inf) {
        const e = this.floor ? Math.floor(t) : t;
        return this.inf.format(e);
      }
      return gt(this.floor ? Math.floor(t) : vt(t, 3), this.padTo);
    }
  }
  class Te {
    constructor(t, e, n) {
      let r;
      if (((this.opts = n), t.zone.isUniversal)) {
        const e = (t.offset / 60) * -1,
          s = e >= 0 ? `Etc/GMT+${e}` : `Etc/GMT${e}`;
        0 !== t.offset && re.create(s).valid
          ? ((r = s), (this.dt = t))
          : ((r = "UTC"),
            n.timeZoneName
              ? (this.dt = t)
              : (this.dt =
                  0 === t.offset
                    ? t
                    : Sr.fromMillis(t.ts + 60 * t.offset * 1e3)));
      } else
        "system" === t.zone.type
          ? (this.dt = t)
          : ((this.dt = t), (r = t.zone.name));
      const s = { ...this.opts };
      r && (s.timeZone = r), (this.dtf = pe(e, s));
    }
    format() {
      return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      return this.dtf.formatToParts(this.dt.toJSDate());
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  }
  class Me {
    constructor(t, e, n) {
      (this.opts = { style: "long", ...n }),
        !e &&
          dt() &&
          (this.rtf = (function (t, e = {}) {
            const { base: n, ...r } = e,
              s = JSON.stringify([t, r]);
            let i = be[s];
            return (
              i || ((i = new Intl.RelativeTimeFormat(t, e)), (be[s] = i)), i
            );
          })(t, n));
    }
    format(t, e) {
      return this.rtf
        ? this.rtf.format(t, e)
        : (function (t, e, n = "always", r = !1) {
            const s = {
                years: ["year", "yr."],
                quarters: ["quarter", "qtr."],
                months: ["month", "mo."],
                weeks: ["week", "wk."],
                days: ["day", "day", "days"],
                hours: ["hour", "hr."],
                minutes: ["minute", "min."],
                seconds: ["second", "sec."],
              },
              i = -1 === ["hours", "minutes", "seconds"].indexOf(t);
            if ("auto" === n && i) {
              const n = "days" === t;
              switch (e) {
                case 1:
                  return n ? "tomorrow" : `next ${s[t][0]}`;
                case -1:
                  return n ? "yesterday" : `last ${s[t][0]}`;
                case 0:
                  return n ? "today" : `this ${s[t][0]}`;
              }
            }
            const a = Object.is(e, -0) || e < 0,
              o = Math.abs(e),
              u = 1 === o,
              l = s[t],
              c = r ? (u ? l[1] : l[2] || l[1]) : u ? s[t][0] : t;
            return a ? `${o} ${c} ago` : `in ${o} ${c}`;
          })(e, t, this.opts.numeric, "long" !== this.opts.style);
    }
    formatToParts(t, e) {
      return this.rtf ? this.rtf.formatToParts(t, e) : [];
    }
  }
  class ke {
    static fromOpts(t) {
      return ke.create(
        t.locale,
        t.numberingSystem,
        t.outputCalendar,
        t.defaultToEN
      );
    }
    static create(t, e, n, r = !1) {
      const s = t || me.defaultLocale,
        i =
          s ||
          (r
            ? "en-US"
            : ve ||
              ((ve = new Intl.DateTimeFormat().resolvedOptions().locale), ve)),
        a = e || me.defaultNumberingSystem,
        o = n || me.defaultOutputCalendar;
      return new ke(i, a, o, s);
    }
    static resetCache() {
      (ve = null), (ge = {}), (we = {}), (be = {});
    }
    static fromObject({
      locale: t,
      numberingSystem: e,
      outputCalendar: n,
    } = {}) {
      return ke.create(t, e, n);
    }
    constructor(t, e, n, r) {
      const [s, i, a] = (function (t) {
        const e = t.indexOf("-u-");
        if (-1 === e) return [t];
        {
          let n;
          const r = t.substring(0, e);
          try {
            n = pe(t).resolvedOptions();
          } catch (t) {
            n = pe(r).resolvedOptions();
          }
          const { numberingSystem: s, calendar: i } = n;
          return [r, s, i];
        }
      })(t);
      (this.locale = s),
        (this.numberingSystem = e || i || null),
        (this.outputCalendar = n || a || null),
        (this.intl = (function (t, e, n) {
          return n || e
            ? ((t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`), t)
            : t;
        })(this.locale, this.numberingSystem, this.outputCalendar)),
        (this.weekdaysCache = { format: {}, standalone: {} }),
        (this.monthsCache = { format: {}, standalone: {} }),
        (this.meridiemCache = null),
        (this.eraCache = {}),
        (this.specifiedLocale = r),
        (this.fastNumbersCached = null);
    }
    get fastNumbers() {
      var t;
      return (
        null == this.fastNumbersCached &&
          (this.fastNumbersCached =
            (!(t = this).numberingSystem || "latn" === t.numberingSystem) &&
            ("latn" === t.numberingSystem ||
              !t.locale ||
              t.locale.startsWith("en") ||
              "latn" ===
                new Intl.DateTimeFormat(t.intl).resolvedOptions()
                  .numberingSystem)),
        this.fastNumbersCached
      );
    }
    listingMode() {
      const t = this.isEnglish(),
        e = !(
          (null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
          (null !== this.outputCalendar && "gregory" !== this.outputCalendar)
        );
      return t && e ? "en" : "intl";
    }
    clone(t) {
      return t && 0 !== Object.getOwnPropertyNames(t).length
        ? ke.create(
            t.locale || this.specifiedLocale,
            t.numberingSystem || this.numberingSystem,
            t.outputCalendar || this.outputCalendar,
            t.defaultToEN || !1
          )
        : this;
    }
    redefaultToEN(t = {}) {
      return this.clone({ ...t, defaultToEN: !0 });
    }
    redefaultToSystem(t = {}) {
      return this.clone({ ...t, defaultToEN: !1 });
    }
    months(t, e = !1, n = !0) {
      return Oe(this, t, n, _t, () => {
        const n = e ? { month: t, day: "numeric" } : { month: t },
          r = e ? "format" : "standalone";
        return (
          this.monthsCache[r][t] ||
            (this.monthsCache[r][t] = (function (t) {
              const e = [];
              for (let n = 1; n <= 12; n++) {
                const r = Sr.utc(2016, n, 1);
                e.push(t(r));
              }
              return e;
            })((t) => this.extract(t, n, "month"))),
          this.monthsCache[r][t]
        );
      });
    }
    weekdays(t, e = !1, n = !0) {
      return Oe(this, t, n, qt, () => {
        const n = e
            ? { weekday: t, year: "numeric", month: "long", day: "numeric" }
            : { weekday: t },
          r = e ? "format" : "standalone";
        return (
          this.weekdaysCache[r][t] ||
            (this.weekdaysCache[r][t] = (function (t) {
              const e = [];
              for (let n = 1; n <= 7; n++) {
                const r = Sr.utc(2016, 11, 13 + n);
                e.push(t(r));
              }
              return e;
            })((t) => this.extract(t, n, "weekday"))),
          this.weekdaysCache[r][t]
        );
      });
    }
    meridiems(t = !0) {
      return Oe(
        this,
        void 0,
        t,
        () => Yt,
        () => {
          if (!this.meridiemCache) {
            const t = { hour: "numeric", hourCycle: "h12" };
            this.meridiemCache = [
              Sr.utc(2016, 11, 13, 9),
              Sr.utc(2016, 11, 13, 19),
            ].map((e) => this.extract(e, t, "dayperiod"));
          }
          return this.meridiemCache;
        }
      );
    }
    eras(t, e = !0) {
      return Oe(this, t, e, Wt, () => {
        const e = { era: t };
        return (
          this.eraCache[t] ||
            (this.eraCache[t] = [Sr.utc(-40, 1, 1), Sr.utc(2017, 1, 1)].map(
              (t) => this.extract(t, e, "era")
            )),
          this.eraCache[t]
        );
      });
    }
    extract(t, e, n) {
      const r = this.dtFormatter(t, e)
        .formatToParts()
        .find((t) => t.type.toLowerCase() === n);
      return r ? r.value : null;
    }
    numberFormatter(t = {}) {
      return new Se(this.intl, t.forceSimple || this.fastNumbers, t);
    }
    dtFormatter(t, e = {}) {
      return new Te(t, this.intl, e);
    }
    relFormatter(t = {}) {
      return new Me(this.intl, this.isEnglish(), t);
    }
    listFormatter(t = {}) {
      return (function (t, e = {}) {
        const n = JSON.stringify([t, e]);
        let r = ye[n];
        return r || ((r = new Intl.ListFormat(t, e)), (ye[n] = r)), r;
      })(this.intl, t);
    }
    isEnglish() {
      return (
        "en" === this.locale ||
        "en-us" === this.locale.toLowerCase() ||
        new Intl.DateTimeFormat(this.intl)
          .resolvedOptions()
          .locale.startsWith("en-us")
      );
    }
    equals(t) {
      return (
        this.locale === t.locale &&
        this.numberingSystem === t.numberingSystem &&
        this.outputCalendar === t.outputCalendar
      );
    }
  }
  function Ne(...t) {
    const e = t.reduce((t, e) => t + e.source, "");
    return RegExp(`^${e}$`);
  }
  function De(...t) {
    return (e) =>
      t
        .reduce(
          ([t, n, r], s) => {
            const [i, a, o] = s(e, r);
            return [{ ...t, ...i }, a || n, o];
          },
          [{}, null, 1]
        )
        .slice(0, 2);
  }
  function Ee(t, ...e) {
    if (null == t) return [null, null];
    for (const [n, r] of e) {
      const e = n.exec(t);
      if (e) return r(e);
    }
    return [null, null];
  }
  function xe(...t) {
    return (e, n) => {
      const r = {};
      let s;
      for (s = 0; s < t.length; s++) r[t[s]] = pt(e[n + s]);
      return [r, null, n + s];
    };
  }
  const Ce = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    Ve = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    Fe = RegExp(`${Ve.source}(?:${Ce.source}?(?:\\[(${It.source})\\])?)?`),
    Ie = RegExp(`(?:T${Fe.source})?`),
    Le = xe("weekYear", "weekNumber", "weekDay"),
    Ze = xe("year", "ordinal"),
    $e = RegExp(`${Ve.source} ?(?:${Ce.source}|(${It.source}))?`),
    _e = RegExp(`(?: ${$e.source})?`);
  function Ae(t, e, n) {
    const r = t[e];
    return lt(r) ? n : pt(r);
  }
  function Re(t, e) {
    return [
      {
        hours: Ae(t, e, 0),
        minutes: Ae(t, e + 1, 0),
        seconds: Ae(t, e + 2, 0),
        milliseconds: bt(t[e + 3]),
      },
      null,
      e + 4,
    ];
  }
  function ze(t, e) {
    const n = !t[e] && !t[e + 1],
      r = Et(t[e + 1], t[e + 2]);
    return [{}, n ? null : ie.instance(r), e + 3];
  }
  function qe(t, e) {
    return [{}, t[e] ? re.create(t[e]) : null, e + 1];
  }
  const Ye = RegExp(`^T?${Ve.source}$`),
    je =
      /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function He(t) {
    const [e, n, r, s, i, a, o, u, l] = t,
      c = "-" === e[0],
      h = u && "-" === u[0],
      d = (t, e = !1) => (void 0 !== t && (e || (t && c)) ? -t : t);
    return [
      {
        years: d(wt(n)),
        months: d(wt(r)),
        weeks: d(wt(s)),
        days: d(wt(i)),
        hours: d(wt(a)),
        minutes: d(wt(o)),
        seconds: d(wt(u), "-0" === u),
        milliseconds: d(bt(l), h),
      },
    ];
  }
  const Ue = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
  function We(t, e, n, r, s, i, a) {
    const o = {
      year: 2 === e.length ? Nt(pt(e)) : pt(e),
      month: Zt.indexOf(n) + 1,
      day: pt(r),
      hour: pt(s),
      minute: pt(i),
    };
    return (
      a && (o.second = pt(a)),
      t && (o.weekday = t.length > 3 ? At.indexOf(t) + 1 : Rt.indexOf(t) + 1),
      o
    );
  }
  const Pe =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function Je(t) {
    const [, e, n, r, s, i, a, o, u, l, c, h] = t,
      d = We(e, s, r, n, i, a, o);
    let f;
    return (f = u ? Ue[u] : l ? 0 : Et(c, h)), [d, new ie(f)];
  }
  const Ge =
      /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    Xe =
      /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    Be =
      /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function Qe(t) {
    const [, e, n, r, s, i, a, o] = t;
    return [We(e, s, r, n, i, a, o), ie.utcInstance];
  }
  function Ke(t) {
    const [, e, n, r, s, i, a, o] = t;
    return [We(e, o, n, r, s, i, a), ie.utcInstance];
  }
  const tn = Ne(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ie),
    en = Ne(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Ie),
    nn = Ne(/(\d{4})-?(\d{3})/, Ie),
    rn = Ne(Fe),
    sn = De(
      function (t, e) {
        return [
          { year: Ae(t, e), month: Ae(t, e + 1, 1), day: Ae(t, e + 2, 1) },
          null,
          e + 3,
        ];
      },
      Re,
      ze,
      qe
    ),
    an = De(Le, Re, ze, qe),
    on = De(Ze, Re, ze, qe),
    un = De(Re, ze, qe),
    ln = De(Re),
    cn = Ne(/(\d{4})-(\d\d)-(\d\d)/, _e),
    hn = Ne($e),
    dn = De(Re, ze, qe),
    fn = {
      weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 6048e5,
      },
      days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
      hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
      minutes: { seconds: 60, milliseconds: 6e4 },
      seconds: { milliseconds: 1e3 },
    },
    mn = {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536e3,
        milliseconds: 31536e6,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 78624e5,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592e3,
        milliseconds: 2592e6,
      },
      ...fn,
    },
    yn = {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52.1775,
        days: 365.2425,
        hours: 8765.82,
        minutes: 525949.2,
        seconds: 525949.2 * 60,
        milliseconds: 525949.2 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: 13.044375,
        days: 91.310625,
        hours: 2191.455,
        minutes: 131487.3,
        seconds: (525949.2 * 60) / 4,
        milliseconds: 7889237999.999999,
      },
      months: {
        weeks: 4.3481250000000005,
        days: 30.436875,
        hours: 730.485,
        minutes: 43829.1,
        seconds: 2629746,
        milliseconds: 2629746e3,
      },
      ...fn,
    },
    gn = [
      "years",
      "quarters",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds",
    ],
    pn = gn.slice(0).reverse();
  function wn(t, e, n = !1) {
    const r = {
      values: n ? e.values : { ...t.values, ...(e.values || {}) },
      loc: t.loc.clone(e.loc),
      conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    };
    return new vn(r);
  }
  function bn(t, e, n, r, s) {
    const i = t[s][n],
      a = e[n] / i,
      o =
        Math.sign(a) !== Math.sign(r[s]) && 0 !== r[s] && Math.abs(a) <= 1
          ? (function (t) {
              return t < 0 ? Math.floor(t) : Math.ceil(t);
            })(a)
          : Math.trunc(a);
    (r[s] += o), (e[n] -= o * i);
  }
  class vn {
    constructor(t) {
      const e = "longterm" === t.conversionAccuracy || !1;
      (this.values = t.values),
        (this.loc = t.loc || ke.create()),
        (this.conversionAccuracy = e ? "longterm" : "casual"),
        (this.invalid = t.invalid || null),
        (this.matrix = e ? yn : mn),
        (this.isLuxonDuration = !0);
    }
    static fromMillis(t, e) {
      return vn.fromObject({ milliseconds: t }, e);
    }
    static fromObject(t, e = {}) {
      if (null == t || "object" != typeof t)
        throw new $(
          "Duration.fromObject: argument expected to be an object, got " +
            (null === t ? "null" : typeof t)
        );
      return new vn({
        values: Ct(t, vn.normalizeUnit),
        loc: ke.fromObject(e),
        conversionAccuracy: e.conversionAccuracy,
      });
    }
    static fromDurationLike(t) {
      if (ct(t)) return vn.fromMillis(t);
      if (vn.isDuration(t)) return t;
      if ("object" == typeof t) return vn.fromObject(t);
      throw new $(`Unknown duration argument ${t} of type ${typeof t}`);
    }
    static fromISO(t, e) {
      const [n] = (function (t) {
        return Ee(t, [je, He]);
      })(t);
      return n
        ? vn.fromObject(n, e)
        : vn.invalid(
            "unparsable",
            `the input "${t}" can't be parsed as ISO 8601`
          );
    }
    static fromISOTime(t, e) {
      const [n] = (function (t) {
        return Ee(t, [Ye, ln]);
      })(t);
      return n
        ? vn.fromObject(n, e)
        : vn.invalid(
            "unparsable",
            `the input "${t}" can't be parsed as ISO 8601`
          );
    }
    static invalid(t, e = null) {
      if (!t) throw new $("need to specify a reason the Duration is invalid");
      const n = t instanceof Xt ? t : new Xt(t, e);
      if (me.throwOnInvalid) throw new I(n);
      return new vn({ invalid: n });
    }
    static normalizeUnit(t) {
      const e = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds",
      }[t ? t.toLowerCase() : t];
      if (!e) throw new Z(t);
      return e;
    }
    static isDuration(t) {
      return (t && t.isLuxonDuration) || !1;
    }
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    toFormat(t, e = {}) {
      const n = { ...e, floor: !1 !== e.round && !1 !== e.floor };
      return this.isValid
        ? Gt.create(this.loc, n).formatDurationFromString(this, t)
        : "Invalid Duration";
    }
    toHuman(t = {}) {
      const e = gn
        .map((e) => {
          const n = this.values[e];
          return lt(n)
            ? null
            : this.loc
                .numberFormatter({
                  style: "unit",
                  unitDisplay: "long",
                  ...t,
                  unit: e.slice(0, -1),
                })
                .format(n);
        })
        .filter((t) => t);
      return this.loc
        .listFormatter({
          type: "conjunction",
          style: t.listStyle || "narrow",
          ...t,
        })
        .format(e);
    }
    toObject() {
      return this.isValid ? { ...this.values } : {};
    }
    toISO() {
      if (!this.isValid) return null;
      let t = "P";
      return (
        0 !== this.years && (t += this.years + "Y"),
        (0 === this.months && 0 === this.quarters) ||
          (t += this.months + 3 * this.quarters + "M"),
        0 !== this.weeks && (t += this.weeks + "W"),
        0 !== this.days && (t += this.days + "D"),
        (0 === this.hours &&
          0 === this.minutes &&
          0 === this.seconds &&
          0 === this.milliseconds) ||
          (t += "T"),
        0 !== this.hours && (t += this.hours + "H"),
        0 !== this.minutes && (t += this.minutes + "M"),
        (0 === this.seconds && 0 === this.milliseconds) ||
          (t += vt(this.seconds + this.milliseconds / 1e3, 3) + "S"),
        "P" === t && (t += "T0S"),
        t
      );
    }
    toISOTime(t = {}) {
      if (!this.isValid) return null;
      const e = this.toMillis();
      if (e < 0 || e >= 864e5) return null;
      t = {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended",
        ...t,
      };
      const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
      let r = "basic" === t.format ? "hhmm" : "hh:mm";
      (t.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds) ||
        ((r += "basic" === t.format ? "ss" : ":ss"),
        (t.suppressMilliseconds && 0 === n.milliseconds) || (r += ".SSS"));
      let s = n.toFormat(r);
      return t.includePrefix && (s = "T" + s), s;
    }
    toJSON() {
      return this.toISO();
    }
    toString() {
      return this.toISO();
    }
    toMillis() {
      return this.as("milliseconds");
    }
    valueOf() {
      return this.toMillis();
    }
    plus(t) {
      if (!this.isValid) return this;
      const e = vn.fromDurationLike(t),
        n = {};
      for (const t of gn)
        (mt(e.values, t) || mt(this.values, t)) &&
          (n[t] = e.get(t) + this.get(t));
      return wn(this, { values: n }, !0);
    }
    minus(t) {
      if (!this.isValid) return this;
      const e = vn.fromDurationLike(t);
      return this.plus(e.negate());
    }
    mapUnits(t) {
      if (!this.isValid) return this;
      const e = {};
      for (const n of Object.keys(this.values)) e[n] = xt(t(this.values[n], n));
      return wn(this, { values: e }, !0);
    }
    get(t) {
      return this[vn.normalizeUnit(t)];
    }
    set(t) {
      return this.isValid
        ? wn(this, { values: { ...this.values, ...Ct(t, vn.normalizeUnit) } })
        : this;
    }
    reconfigure({ locale: t, numberingSystem: e, conversionAccuracy: n } = {}) {
      const r = { loc: this.loc.clone({ locale: t, numberingSystem: e }) };
      return n && (r.conversionAccuracy = n), wn(this, r);
    }
    as(t) {
      return this.isValid ? this.shiftTo(t).get(t) : NaN;
    }
    normalize() {
      if (!this.isValid) return this;
      const t = this.toObject();
      return (
        (function (t, e) {
          pn.reduce(
            (n, r) => (lt(e[r]) ? n : (n && bn(t, e, n, e, r), r)),
            null
          );
        })(this.matrix, t),
        wn(this, { values: t }, !0)
      );
    }
    shiftTo(...t) {
      if (!this.isValid) return this;
      if (0 === t.length) return this;
      t = t.map((t) => vn.normalizeUnit(t));
      const e = {},
        n = {},
        r = this.toObject();
      let s;
      for (const i of gn)
        if (t.indexOf(i) >= 0) {
          s = i;
          let t = 0;
          for (const e in n) (t += this.matrix[e][i] * n[e]), (n[e] = 0);
          ct(r[i]) && (t += r[i]);
          const a = Math.trunc(t);
          (e[i] = a), (n[i] = (1e3 * t - 1e3 * a) / 1e3);
          for (const t in r)
            gn.indexOf(t) > gn.indexOf(i) && bn(this.matrix, r, t, e, i);
        } else ct(r[i]) && (n[i] = r[i]);
      for (const t in n)
        0 !== n[t] && (e[s] += t === s ? n[t] : n[t] / this.matrix[s][t]);
      return wn(this, { values: e }, !0).normalize();
    }
    negate() {
      if (!this.isValid) return this;
      const t = {};
      for (const e of Object.keys(this.values))
        t[e] = 0 === this.values[e] ? 0 : -this.values[e];
      return wn(this, { values: t }, !0);
    }
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    get isValid() {
      return null === this.invalid;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    equals(t) {
      if (!this.isValid || !t.isValid) return !1;
      if (!this.loc.equals(t.loc)) return !1;
      for (const r of gn)
        if (
          ((e = this.values[r]),
          (n = t.values[r]),
          !(void 0 === e || 0 === e ? void 0 === n || 0 === n : e === n))
        )
          return !1;
      var e, n;
      return !0;
    }
  }
  const On = "Invalid Interval";
  class Sn {
    constructor(t) {
      (this.s = t.start),
        (this.e = t.end),
        (this.invalid = t.invalid || null),
        (this.isLuxonInterval = !0);
    }
    static invalid(t, e = null) {
      if (!t) throw new $("need to specify a reason the Interval is invalid");
      const n = t instanceof Xt ? t : new Xt(t, e);
      if (me.throwOnInvalid) throw new F(n);
      return new Sn({ invalid: n });
    }
    static fromDateTimes(t, e) {
      const n = Tr(t),
        r = Tr(e),
        s = (function (t, e) {
          return t && t.isValid
            ? e && e.isValid
              ? e < t
                ? Sn.invalid(
                    "end before start",
                    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
                  )
                : null
              : Sn.invalid("missing or invalid end")
            : Sn.invalid("missing or invalid start");
        })(n, r);
      return null == s ? new Sn({ start: n, end: r }) : s;
    }
    static after(t, e) {
      const n = vn.fromDurationLike(e),
        r = Tr(t);
      return Sn.fromDateTimes(r, r.plus(n));
    }
    static before(t, e) {
      const n = vn.fromDurationLike(e),
        r = Tr(t);
      return Sn.fromDateTimes(r.minus(n), r);
    }
    static fromISO(t, e) {
      const [n, r] = (t || "").split("/", 2);
      if (n && r) {
        let t, s, i, a;
        try {
          (t = Sr.fromISO(n, e)), (s = t.isValid);
        } catch (r) {
          s = !1;
        }
        try {
          (i = Sr.fromISO(r, e)), (a = i.isValid);
        } catch (r) {
          a = !1;
        }
        if (s && a) return Sn.fromDateTimes(t, i);
        if (s) {
          const n = vn.fromISO(r, e);
          if (n.isValid) return Sn.after(t, n);
        } else if (a) {
          const t = vn.fromISO(n, e);
          if (t.isValid) return Sn.before(i, t);
        }
      }
      return Sn.invalid(
        "unparsable",
        `the input "${t}" can't be parsed as ISO 8601`
      );
    }
    static isInterval(t) {
      return (t && t.isLuxonInterval) || !1;
    }
    get start() {
      return this.isValid ? this.s : null;
    }
    get end() {
      return this.isValid ? this.e : null;
    }
    get isValid() {
      return null === this.invalidReason;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    length(t = "milliseconds") {
      return this.isValid ? this.toDuration(t).get(t) : NaN;
    }
    count(t = "milliseconds") {
      if (!this.isValid) return NaN;
      const e = this.start.startOf(t),
        n = this.end.startOf(t);
      return Math.floor(n.diff(e, t).get(t)) + 1;
    }
    hasSame(t) {
      return (
        !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t))
      );
    }
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    isAfter(t) {
      return !!this.isValid && this.s > t;
    }
    isBefore(t) {
      return !!this.isValid && this.e <= t;
    }
    contains(t) {
      return !!this.isValid && this.s <= t && this.e > t;
    }
    set({ start: t, end: e } = {}) {
      return this.isValid ? Sn.fromDateTimes(t || this.s, e || this.e) : this;
    }
    splitAt(...t) {
      if (!this.isValid) return [];
      const e = t
          .map(Tr)
          .filter((t) => this.contains(t))
          .sort(),
        n = [];
      let { s: r } = this,
        s = 0;
      for (; r < this.e; ) {
        const t = e[s] || this.e,
          i = +t > +this.e ? this.e : t;
        n.push(Sn.fromDateTimes(r, i)), (r = i), (s += 1);
      }
      return n;
    }
    splitBy(t) {
      const e = vn.fromDurationLike(t);
      if (!this.isValid || !e.isValid || 0 === e.as("milliseconds")) return [];
      let n,
        { s: r } = this,
        s = 1;
      const i = [];
      for (; r < this.e; ) {
        const t = this.start.plus(e.mapUnits((t) => t * s));
        (n = +t > +this.e ? this.e : t),
          i.push(Sn.fromDateTimes(r, n)),
          (r = n),
          (s += 1);
      }
      return i;
    }
    divideEqually(t) {
      return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
    }
    overlaps(t) {
      return this.e > t.s && this.s < t.e;
    }
    abutsStart(t) {
      return !!this.isValid && +this.e == +t.s;
    }
    abutsEnd(t) {
      return !!this.isValid && +t.e == +this.s;
    }
    engulfs(t) {
      return !!this.isValid && this.s <= t.s && this.e >= t.e;
    }
    equals(t) {
      return (
        !(!this.isValid || !t.isValid) &&
        this.s.equals(t.s) &&
        this.e.equals(t.e)
      );
    }
    intersection(t) {
      if (!this.isValid) return this;
      const e = this.s > t.s ? this.s : t.s,
        n = this.e < t.e ? this.e : t.e;
      return e >= n ? null : Sn.fromDateTimes(e, n);
    }
    union(t) {
      if (!this.isValid) return this;
      const e = this.s < t.s ? this.s : t.s,
        n = this.e > t.e ? this.e : t.e;
      return Sn.fromDateTimes(e, n);
    }
    static merge(t) {
      const [e, n] = t
        .sort((t, e) => t.s - e.s)
        .reduce(
          ([t, e], n) =>
            e
              ? e.overlaps(n) || e.abutsStart(n)
                ? [t, e.union(n)]
                : [t.concat([e]), n]
              : [t, n],
          [[], null]
        );
      return n && e.push(n), e;
    }
    static xor(t) {
      let e = null,
        n = 0;
      const r = [],
        s = t.map((t) => [
          { time: t.s, type: "s" },
          { time: t.e, type: "e" },
        ]),
        i = Array.prototype.concat(...s).sort((t, e) => t.time - e.time);
      for (const t of i)
        (n += "s" === t.type ? 1 : -1),
          1 === n
            ? (e = t.time)
            : (e && +e != +t.time && r.push(Sn.fromDateTimes(e, t.time)),
              (e = null));
      return Sn.merge(r);
    }
    difference(...t) {
      return Sn.xor([this].concat(t))
        .map((t) => this.intersection(t))
        .filter((t) => t && !t.isEmpty());
    }
    toString() {
      return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : On;
    }
    toISO(t) {
      return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : On;
    }
    toISODate() {
      return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : On;
    }
    toISOTime(t) {
      return this.isValid
        ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`
        : On;
    }
    toFormat(t, { separator: e = " – " } = {}) {
      return this.isValid
        ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`
        : On;
    }
    toDuration(t, e) {
      return this.isValid
        ? this.e.diff(this.s, t, e)
        : vn.invalid(this.invalidReason);
    }
    mapEndpoints(t) {
      return Sn.fromDateTimes(t(this.s), t(this.e));
    }
  }
  class Tn {
    static hasDST(t = me.defaultZone) {
      const e = Sr.now().setZone(t).set({ month: 12 });
      return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
    }
    static isValidIANAZone(t) {
      return re.isValidZone(t);
    }
    static normalizeZone(t) {
      return oe(t, me.defaultZone);
    }
    static months(
      t = "long",
      {
        locale: e = null,
        numberingSystem: n = null,
        locObj: r = null,
        outputCalendar: s = "gregory",
      } = {}
    ) {
      return (r || ke.create(e, n, s)).months(t);
    }
    static monthsFormat(
      t = "long",
      {
        locale: e = null,
        numberingSystem: n = null,
        locObj: r = null,
        outputCalendar: s = "gregory",
      } = {}
    ) {
      return (r || ke.create(e, n, s)).months(t, !0);
    }
    static weekdays(
      t = "long",
      { locale: e = null, numberingSystem: n = null, locObj: r = null } = {}
    ) {
      return (r || ke.create(e, n, null)).weekdays(t);
    }
    static weekdaysFormat(
      t = "long",
      { locale: e = null, numberingSystem: n = null, locObj: r = null } = {}
    ) {
      return (r || ke.create(e, n, null)).weekdays(t, !0);
    }
    static meridiems({ locale: t = null } = {}) {
      return ke.create(t).meridiems();
    }
    static eras(t = "short", { locale: e = null } = {}) {
      return ke.create(e, null, "gregory").eras(t);
    }
    static features() {
      return { relative: dt() };
    }
  }
  function Mn(t, e) {
    const n = (t) => t.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
      r = n(e) - n(t);
    return Math.floor(vn.fromMillis(r).as("days"));
  }
  const kn = {
      arab: "[٠-٩]",
      arabext: "[۰-۹]",
      bali: "[᭐-᭙]",
      beng: "[০-৯]",
      deva: "[०-९]",
      fullwide: "[０-９]",
      gujr: "[૦-૯]",
      hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
      khmr: "[០-៩]",
      knda: "[೦-೯]",
      laoo: "[໐-໙]",
      limb: "[᥆-᥏]",
      mlym: "[൦-൯]",
      mong: "[᠐-᠙]",
      mymr: "[၀-၉]",
      orya: "[୦-୯]",
      tamldec: "[௦-௯]",
      telu: "[౦-౯]",
      thai: "[๐-๙]",
      tibt: "[༠-༩]",
      latn: "\\d",
    },
    Nn = {
      arab: [1632, 1641],
      arabext: [1776, 1785],
      bali: [6992, 7001],
      beng: [2534, 2543],
      deva: [2406, 2415],
      fullwide: [65296, 65303],
      gujr: [2790, 2799],
      khmr: [6112, 6121],
      knda: [3302, 3311],
      laoo: [3792, 3801],
      limb: [6470, 6479],
      mlym: [3430, 3439],
      mong: [6160, 6169],
      mymr: [4160, 4169],
      orya: [2918, 2927],
      tamldec: [3046, 3055],
      telu: [3174, 3183],
      thai: [3664, 3673],
      tibt: [3872, 3881],
    },
    Dn = kn.hanidec.replace(/[\[|\]]/g, "").split("");
  function En({ numberingSystem: t }, e = "") {
    return new RegExp(`${kn[t || "latn"]}${e}`);
  }
  function xn(t, e = (t) => t) {
    return {
      regex: t,
      deser: ([t]) =>
        e(
          (function (t) {
            let e = parseInt(t, 10);
            if (isNaN(e)) {
              e = "";
              for (let n = 0; n < t.length; n++) {
                const r = t.charCodeAt(n);
                if (-1 !== t[n].search(kn.hanidec)) e += Dn.indexOf(t[n]);
                else
                  for (const t in Nn) {
                    const [n, s] = Nn[t];
                    r >= n && r <= s && (e += r - n);
                  }
              }
              return parseInt(e, 10);
            }
            return e;
          })(t)
        ),
    };
  }
  const Cn = `[ ${String.fromCharCode(160)}]`,
    Vn = new RegExp(Cn, "g");
  function Fn(t) {
    return t.replace(/\./g, "\\.?").replace(Vn, Cn);
  }
  function In(t) {
    return t.replace(/\./g, "").replace(Vn, " ").toLowerCase();
  }
  function Ln(t, e) {
    return null === t
      ? null
      : {
          regex: RegExp(t.map(Fn).join("|")),
          deser: ([n]) => t.findIndex((t) => In(n) === In(t)) + e,
        };
  }
  function Zn(t, e) {
    return { regex: t, deser: ([, t, e]) => Et(t, e), groups: e };
  }
  function $n(t) {
    return { regex: t, deser: ([t]) => t };
  }
  const _n = {
    year: { "2-digit": "yy", numeric: "yyyyy" },
    month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
    day: { numeric: "d", "2-digit": "dd" },
    weekday: { short: "EEE", long: "EEEE" },
    dayperiod: "a",
    dayPeriod: "a",
    hour: { numeric: "h", "2-digit": "hh" },
    minute: { numeric: "m", "2-digit": "mm" },
    second: { numeric: "s", "2-digit": "ss" },
    timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
  };
  let An = null;
  function Rn(t, e, n) {
    const r = (function (t, e) {
        return Array.prototype.concat(
          ...t.map((t) =>
            (function (t, e) {
              if (t.literal) return t;
              const n = zn(Gt.macroTokenToFormatOpts(t.val), e);
              return null == n || n.includes(void 0) ? t : n;
            })(t, e)
          )
        );
      })(Gt.parseFormat(n), t),
      s = r.map((e) =>
        (function (t, e) {
          const n = En(e),
            r = En(e, "{2}"),
            s = En(e, "{3}"),
            i = En(e, "{4}"),
            a = En(e, "{6}"),
            o = En(e, "{1,2}"),
            u = En(e, "{1,3}"),
            l = En(e, "{1,6}"),
            c = En(e, "{1,9}"),
            h = En(e, "{2,4}"),
            d = En(e, "{4,6}"),
            f = (t) => {
              return {
                regex: RegExp(
                  ((e = t.val),
                  e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                ),
                deser: ([t]) => t,
                literal: !0,
              };
              var e;
            },
            m = ((m) => {
              if (t.literal) return f(m);
              switch (m.val) {
                case "G":
                  return Ln(e.eras("short", !1), 0);
                case "GG":
                  return Ln(e.eras("long", !1), 0);
                case "y":
                  return xn(l);
                case "yy":
                case "kk":
                  return xn(h, Nt);
                case "yyyy":
                case "kkkk":
                  return xn(i);
                case "yyyyy":
                  return xn(d);
                case "yyyyyy":
                  return xn(a);
                case "M":
                case "L":
                case "d":
                case "H":
                case "h":
                case "m":
                case "q":
                case "s":
                case "W":
                  return xn(o);
                case "MM":
                case "LL":
                case "dd":
                case "HH":
                case "hh":
                case "mm":
                case "qq":
                case "ss":
                case "WW":
                  return xn(r);
                case "MMM":
                  return Ln(e.months("short", !0, !1), 1);
                case "MMMM":
                  return Ln(e.months("long", !0, !1), 1);
                case "LLL":
                  return Ln(e.months("short", !1, !1), 1);
                case "LLLL":
                  return Ln(e.months("long", !1, !1), 1);
                case "o":
                case "S":
                  return xn(u);
                case "ooo":
                case "SSS":
                  return xn(s);
                case "u":
                  return $n(c);
                case "uu":
                  return $n(o);
                case "uuu":
                case "E":
                case "c":
                  return xn(n);
                case "a":
                  return Ln(e.meridiems(), 0);
                case "EEE":
                  return Ln(e.weekdays("short", !1, !1), 1);
                case "EEEE":
                  return Ln(e.weekdays("long", !1, !1), 1);
                case "ccc":
                  return Ln(e.weekdays("short", !0, !1), 1);
                case "cccc":
                  return Ln(e.weekdays("long", !0, !1), 1);
                case "Z":
                case "ZZ":
                  return Zn(
                    new RegExp(`([+-]${o.source})(?::(${r.source}))?`),
                    2
                  );
                case "ZZZ":
                  return Zn(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
                case "z":
                  return $n(/[a-z_+-/]{1,256}?/i);
                default:
                  return f(m);
              }
            })(t) || {
              invalidReason:
                "missing Intl.DateTimeFormat.formatToParts support",
            };
          return (m.token = t), m;
        })(e, t)
      ),
      i = s.find((t) => t.invalidReason);
    if (i) return { input: e, tokens: r, invalidReason: i.invalidReason };
    {
      const [t, n] = (function (t) {
          return [
            `^${t
              .map((t) => t.regex)
              .reduce((t, e) => `${t}(${e.source})`, "")}$`,
            t,
          ];
        })(s),
        i = RegExp(t, "i"),
        [a, o] = (function (t, e, n) {
          const r = t.match(e);
          if (r) {
            const t = {};
            let e = 1;
            for (const s in n)
              if (mt(n, s)) {
                const i = n[s],
                  a = i.groups ? i.groups + 1 : 1;
                !i.literal &&
                  i.token &&
                  (t[i.token.val[0]] = i.deser(r.slice(e, e + a))),
                  (e += a);
              }
            return [r, t];
          }
          return [r, {}];
        })(e, i, n),
        [u, l, c] = o
          ? (function (t) {
              let e,
                n = null;
              return (
                lt(t.z) || (n = re.create(t.z)),
                lt(t.Z) || (n || (n = new ie(t.Z)), (e = t.Z)),
                lt(t.q) || (t.M = 3 * (t.q - 1) + 1),
                lt(t.h) ||
                  (t.h < 12 && 1 === t.a
                    ? (t.h += 12)
                    : 12 === t.h && 0 === t.a && (t.h = 0)),
                0 === t.G && t.y && (t.y = -t.y),
                lt(t.u) || (t.S = bt(t.u)),
                [
                  Object.keys(t).reduce((e, n) => {
                    const r = ((t) => {
                      switch (t) {
                        case "S":
                          return "millisecond";
                        case "s":
                          return "second";
                        case "m":
                          return "minute";
                        case "h":
                        case "H":
                          return "hour";
                        case "d":
                          return "day";
                        case "o":
                          return "ordinal";
                        case "L":
                        case "M":
                          return "month";
                        case "y":
                          return "year";
                        case "E":
                        case "c":
                          return "weekday";
                        case "W":
                          return "weekNumber";
                        case "k":
                          return "weekYear";
                        case "q":
                          return "quarter";
                        default:
                          return null;
                      }
                    })(n);
                    return r && (e[r] = t[n]), e;
                  }, {}),
                  n,
                  e,
                ]
              );
            })(o)
          : [null, null, void 0];
      if (mt(o, "a") && mt(o, "H"))
        throw new L("Can't include meridiem when specifying 24-hour format");
      return {
        input: e,
        tokens: r,
        regex: i,
        rawMatches: a,
        matches: o,
        result: u,
        zone: l,
        specificOffset: c,
      };
    }
  }
  function zn(t, e) {
    return t
      ? Gt.create(e, t)
          .formatDateTimeParts((An || (An = Sr.fromMillis(1555555555555)), An))
          .map((e) =>
            (function (t, e, n) {
              const { type: r, value: s } = t;
              if ("literal" === r) return { literal: !0, val: s };
              const i = n[r];
              let a = _n[r];
              return (
                "object" == typeof a && (a = a[i]),
                a ? { literal: !1, val: a } : void 0
              );
            })(e, 0, t)
          )
      : null;
  }
  const qn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    Yn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function jn(t, e) {
    return new Xt(
      "unit out of range",
      `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
    );
  }
  function Hn(t, e, n) {
    const r = new Date(Date.UTC(t, e - 1, n));
    t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
    const s = r.getUTCDay();
    return 0 === s ? 7 : s;
  }
  function Un(t, e, n) {
    return n + (Ot(t) ? Yn : qn)[e - 1];
  }
  function Wn(t, e) {
    const n = Ot(t) ? Yn : qn,
      r = n.findIndex((t) => t < e);
    return { month: r + 1, day: e - n[r] };
  }
  function Pn(t) {
    const { year: e, month: n, day: r } = t,
      s = Un(e, n, r),
      i = Hn(e, n, r);
    let a,
      o = Math.floor((s - i + 10) / 7);
    return (
      o < 1
        ? ((a = e - 1), (o = kt(a)))
        : o > kt(e)
        ? ((a = e + 1), (o = 1))
        : (a = e),
      { weekYear: a, weekNumber: o, weekday: i, ...Ft(t) }
    );
  }
  function Jn(t) {
    const { weekYear: e, weekNumber: n, weekday: r } = t,
      s = Hn(e, 1, 4),
      i = St(e);
    let a,
      o = 7 * n + r - s - 3;
    o < 1
      ? ((a = e - 1), (o += St(a)))
      : o > i
      ? ((a = e + 1), (o -= St(e)))
      : (a = e);
    const { month: u, day: l } = Wn(a, o);
    return { year: a, month: u, day: l, ...Ft(t) };
  }
  function Gn(t) {
    const { year: e, month: n, day: r } = t;
    return { year: e, ordinal: Un(e, n, r), ...Ft(t) };
  }
  function Xn(t) {
    const { year: e, ordinal: n } = t,
      { month: r, day: s } = Wn(e, n);
    return { year: e, month: r, day: s, ...Ft(t) };
  }
  function Bn(t) {
    const e = ht(t.year),
      n = yt(t.month, 1, 12),
      r = yt(t.day, 1, Tt(t.year, t.month));
    return e
      ? n
        ? !r && jn("day", t.day)
        : jn("month", t.month)
      : jn("year", t.year);
  }
  function Qn(t) {
    const { hour: e, minute: n, second: r, millisecond: s } = t,
      i = yt(e, 0, 23) || (24 === e && 0 === n && 0 === r && 0 === s),
      a = yt(n, 0, 59),
      o = yt(r, 0, 59),
      u = yt(s, 0, 999);
    return i
      ? a
        ? o
          ? !u && jn("millisecond", s)
          : jn("second", r)
        : jn("minute", n)
      : jn("hour", e);
  }
  const Kn = "Invalid DateTime",
    tr = 864e13;
  function er(t) {
    return new Xt("unsupported zone", `the zone "${t.name}" is not supported`);
  }
  function nr(t) {
    return null === t.weekData && (t.weekData = Pn(t.c)), t.weekData;
  }
  function rr(t, e) {
    const n = {
      ts: t.ts,
      zone: t.zone,
      c: t.c,
      o: t.o,
      loc: t.loc,
      invalid: t.invalid,
    };
    return new Sr({ ...n, ...e, old: n });
  }
  function sr(t, e, n) {
    let r = t - 60 * e * 1e3;
    const s = n.offset(r);
    if (e === s) return [r, e];
    r -= 60 * (s - e) * 1e3;
    const i = n.offset(r);
    return s === i ? [r, s] : [t - 60 * Math.min(s, i) * 1e3, Math.max(s, i)];
  }
  function ir(t, e) {
    const n = new Date((t += 60 * e * 1e3));
    return {
      year: n.getUTCFullYear(),
      month: n.getUTCMonth() + 1,
      day: n.getUTCDate(),
      hour: n.getUTCHours(),
      minute: n.getUTCMinutes(),
      second: n.getUTCSeconds(),
      millisecond: n.getUTCMilliseconds(),
    };
  }
  function ar(t, e, n) {
    return sr(Mt(t), e, n);
  }
  function or(t, e) {
    const n = t.o,
      r = t.c.year + Math.trunc(e.years),
      s = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters),
      i = {
        ...t.c,
        year: r,
        month: s,
        day:
          Math.min(t.c.day, Tt(r, s)) +
          Math.trunc(e.days) +
          7 * Math.trunc(e.weeks),
      },
      a = vn
        .fromObject({
          years: e.years - Math.trunc(e.years),
          quarters: e.quarters - Math.trunc(e.quarters),
          months: e.months - Math.trunc(e.months),
          weeks: e.weeks - Math.trunc(e.weeks),
          days: e.days - Math.trunc(e.days),
          hours: e.hours,
          minutes: e.minutes,
          seconds: e.seconds,
          milliseconds: e.milliseconds,
        })
        .as("milliseconds"),
      o = Mt(i);
    let [u, l] = sr(o, n, t.zone);
    return 0 !== a && ((u += a), (l = t.zone.offset(u))), { ts: u, o: l };
  }
  function ur(t, e, n, r, s, i) {
    const { setZone: a, zone: o } = n;
    if (t && 0 !== Object.keys(t).length) {
      const r = e || o,
        s = Sr.fromObject(t, { ...n, zone: r, specificOffset: i });
      return a ? s : s.setZone(o);
    }
    return Sr.invalid(
      new Xt("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
  }
  function lr(t, e, n = !0) {
    return t.isValid
      ? Gt.create(ke.create("en-US"), {
          allowZ: n,
          forceSimple: !0,
        }).formatDateTimeFromString(t, e)
      : null;
  }
  function cr(t, e) {
    const n = t.c.year > 9999 || t.c.year < 0;
    let r = "";
    return (
      n && t.c.year >= 0 && (r += "+"),
      (r += gt(t.c.year, n ? 6 : 4)),
      e
        ? ((r += "-"), (r += gt(t.c.month)), (r += "-"), (r += gt(t.c.day)))
        : ((r += gt(t.c.month)), (r += gt(t.c.day))),
      r
    );
  }
  function hr(t, e, n, r, s, i) {
    let a = gt(t.c.hour);
    return (
      e
        ? ((a += ":"),
          (a += gt(t.c.minute)),
          (0 === t.c.second && n) || (a += ":"))
        : (a += gt(t.c.minute)),
      (0 === t.c.second && n) ||
        ((a += gt(t.c.second)),
        (0 === t.c.millisecond && r) ||
          ((a += "."), (a += gt(t.c.millisecond, 3)))),
      s &&
        (t.isOffsetFixed && 0 === t.offset && !i
          ? (a += "Z")
          : t.o < 0
          ? ((a += "-"),
            (a += gt(Math.trunc(-t.o / 60))),
            (a += ":"),
            (a += gt(Math.trunc(-t.o % 60))))
          : ((a += "+"),
            (a += gt(Math.trunc(t.o / 60))),
            (a += ":"),
            (a += gt(Math.trunc(t.o % 60))))),
      i && (a += "[" + t.zone.ianaName + "]"),
      a
    );
  }
  const dr = {
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    },
    fr = {
      weekNumber: 1,
      weekday: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    },
    mr = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    yr = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    gr = [
      "weekYear",
      "weekNumber",
      "weekday",
      "hour",
      "minute",
      "second",
      "millisecond",
    ],
    pr = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function wr(t) {
    const e = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal",
    }[t.toLowerCase()];
    if (!e) throw new Z(t);
    return e;
  }
  function br(t, e) {
    const n = oe(e.zone, me.defaultZone),
      r = ke.fromObject(e),
      s = me.now();
    let i, a;
    if (lt(t.year)) i = s;
    else {
      for (const e of yr) lt(t[e]) && (t[e] = dr[e]);
      const e = Bn(t) || Qn(t);
      if (e) return Sr.invalid(e);
      const r = n.offset(s);
      [i, a] = ar(t, r, n);
    }
    return new Sr({ ts: i, zone: n, loc: r, o: a });
  }
  function vr(t, e, n) {
    const r = !!lt(n.round) || n.round,
      s = (t, s) => (
        (t = vt(t, r || n.calendary ? 0 : 2, !0)),
        e.loc.clone(n).relFormatter(n).format(t, s)
      ),
      i = (r) =>
        n.calendary
          ? e.hasSame(t, r)
            ? 0
            : e.startOf(r).diff(t.startOf(r), r).get(r)
          : e.diff(t, r).get(r);
    if (n.unit) return s(i(n.unit), n.unit);
    for (const t of n.units) {
      const e = i(t);
      if (Math.abs(e) >= 1) return s(e, t);
    }
    return s(t > e ? -0 : 0, n.units[n.units.length - 1]);
  }
  function Or(t) {
    let e,
      n = {};
    return (
      t.length > 0 && "object" == typeof t[t.length - 1]
        ? ((n = t[t.length - 1]), (e = Array.from(t).slice(0, t.length - 1)))
        : (e = Array.from(t)),
      [n, e]
    );
  }
  class Sr {
    constructor(t) {
      const e = t.zone || me.defaultZone;
      let n =
        t.invalid ||
        (Number.isNaN(t.ts) ? new Xt("invalid input") : null) ||
        (e.isValid ? null : er(e));
      this.ts = lt(t.ts) ? me.now() : t.ts;
      let r = null,
        s = null;
      if (!n)
        if (t.old && t.old.ts === this.ts && t.old.zone.equals(e))
          [r, s] = [t.old.c, t.old.o];
        else {
          const t = e.offset(this.ts);
          (r = ir(this.ts, t)),
            (n = Number.isNaN(r.year) ? new Xt("invalid input") : null),
            (r = n ? null : r),
            (s = n ? null : t);
        }
      (this._zone = e),
        (this.loc = t.loc || ke.create()),
        (this.invalid = n),
        (this.weekData = null),
        (this.c = r),
        (this.o = s),
        (this.isLuxonDateTime = !0);
    }
    static now() {
      return new Sr({});
    }
    static local() {
      const [t, e] = Or(arguments),
        [n, r, s, i, a, o, u] = e;
      return br(
        {
          year: n,
          month: r,
          day: s,
          hour: i,
          minute: a,
          second: o,
          millisecond: u,
        },
        t
      );
    }
    static utc() {
      const [t, e] = Or(arguments),
        [n, r, s, i, a, o, u] = e;
      return (
        (t.zone = ie.utcInstance),
        br(
          {
            year: n,
            month: r,
            day: s,
            hour: i,
            minute: a,
            second: o,
            millisecond: u,
          },
          t
        )
      );
    }
    static fromJSDate(t, e = {}) {
      const n =
        ((r = t),
        "[object Date]" === Object.prototype.toString.call(r)
          ? t.valueOf()
          : NaN);
      var r;
      if (Number.isNaN(n)) return Sr.invalid("invalid input");
      const s = oe(e.zone, me.defaultZone);
      return s.isValid
        ? new Sr({ ts: n, zone: s, loc: ke.fromObject(e) })
        : Sr.invalid(er(s));
    }
    static fromMillis(t, e = {}) {
      if (ct(t))
        return t < -tr || t > tr
          ? Sr.invalid("Timestamp out of range")
          : new Sr({
              ts: t,
              zone: oe(e.zone, me.defaultZone),
              loc: ke.fromObject(e),
            });
      throw new $(
        `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
      );
    }
    static fromSeconds(t, e = {}) {
      if (ct(t))
        return new Sr({
          ts: 1e3 * t,
          zone: oe(e.zone, me.defaultZone),
          loc: ke.fromObject(e),
        });
      throw new $("fromSeconds requires a numerical input");
    }
    static fromObject(t, e = {}) {
      t = t || {};
      const n = oe(e.zone, me.defaultZone);
      if (!n.isValid) return Sr.invalid(er(n));
      const r = me.now(),
        s = lt(e.specificOffset) ? n.offset(r) : e.specificOffset,
        i = Ct(t, wr),
        a = !lt(i.ordinal),
        o = !lt(i.year),
        u = !lt(i.month) || !lt(i.day),
        l = o || u,
        c = i.weekYear || i.weekNumber,
        h = ke.fromObject(e);
      if ((l || a) && c)
        throw new L(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      if (u && a) throw new L("Can't mix ordinal dates with month/day");
      const d = c || (i.weekday && !l);
      let f,
        m,
        y = ir(r, s);
      d
        ? ((f = gr), (m = fr), (y = Pn(y)))
        : a
        ? ((f = pr), (m = mr), (y = Gn(y)))
        : ((f = yr), (m = dr));
      let g = !1;
      for (const t of f) lt(i[t]) ? (i[t] = g ? m[t] : y[t]) : (g = !0);
      const p = d
          ? (function (t) {
              const e = ht(t.weekYear),
                n = yt(t.weekNumber, 1, kt(t.weekYear)),
                r = yt(t.weekday, 1, 7);
              return e
                ? n
                  ? !r && jn("weekday", t.weekday)
                  : jn("week", t.week)
                : jn("weekYear", t.weekYear);
            })(i)
          : a
          ? (function (t) {
              const e = ht(t.year),
                n = yt(t.ordinal, 1, St(t.year));
              return e ? !n && jn("ordinal", t.ordinal) : jn("year", t.year);
            })(i)
          : Bn(i),
        w = p || Qn(i);
      if (w) return Sr.invalid(w);
      const b = d ? Jn(i) : a ? Xn(i) : i,
        [v, O] = ar(b, s, n),
        S = new Sr({ ts: v, zone: n, o: O, loc: h });
      return i.weekday && l && t.weekday !== S.weekday
        ? Sr.invalid(
            "mismatched weekday",
            `you can't specify both a weekday of ${
              i.weekday
            } and a date of ${S.toISO()}`
          )
        : S;
    }
    static fromISO(t, e = {}) {
      const [n, r] = (function (t) {
        return Ee(t, [tn, sn], [en, an], [nn, on], [rn, un]);
      })(t);
      return ur(n, r, e, "ISO 8601", t);
    }
    static fromRFC2822(t, e = {}) {
      const [n, r] = (function (t) {
        return Ee(
          (function (t) {
            return t
              .replace(/\([^)]*\)|[\n\t]/g, " ")
              .replace(/(\s\s+)/g, " ")
              .trim();
          })(t),
          [Pe, Je]
        );
      })(t);
      return ur(n, r, e, "RFC 2822", t);
    }
    static fromHTTP(t, e = {}) {
      const [n, r] = (function (t) {
        return Ee(t, [Ge, Qe], [Xe, Qe], [Be, Ke]);
      })(t);
      return ur(n, r, e, "HTTP", e);
    }
    static fromFormat(t, e, n = {}) {
      if (lt(t) || lt(e))
        throw new $("fromFormat requires an input string and a format");
      const { locale: r = null, numberingSystem: s = null } = n,
        i = ke.fromOpts({ locale: r, numberingSystem: s, defaultToEN: !0 }),
        [a, o, u, l] = (function (t, e, n) {
          const {
            result: r,
            zone: s,
            specificOffset: i,
            invalidReason: a,
          } = Rn(t, e, n);
          return [r, s, i, a];
        })(i, t, e);
      return l ? Sr.invalid(l) : ur(a, o, n, `format ${e}`, t, u);
    }
    static fromString(t, e, n = {}) {
      return Sr.fromFormat(t, e, n);
    }
    static fromSQL(t, e = {}) {
      const [n, r] = (function (t) {
        return Ee(t, [cn, sn], [hn, dn]);
      })(t);
      return ur(n, r, e, "SQL", t);
    }
    static invalid(t, e = null) {
      if (!t) throw new $("need to specify a reason the DateTime is invalid");
      const n = t instanceof Xt ? t : new Xt(t, e);
      if (me.throwOnInvalid) throw new V(n);
      return new Sr({ invalid: n });
    }
    static isDateTime(t) {
      return (t && t.isLuxonDateTime) || !1;
    }
    static parseFormatForOpts(t, e = {}) {
      const n = zn(t, ke.fromObject(e));
      return n ? n.map((t) => (t ? t.val : null)).join("") : null;
    }
    get(t) {
      return this[t];
    }
    get isValid() {
      return null === this.invalid;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    get zone() {
      return this._zone;
    }
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    get weekYear() {
      return this.isValid ? nr(this).weekYear : NaN;
    }
    get weekNumber() {
      return this.isValid ? nr(this).weekNumber : NaN;
    }
    get weekday() {
      return this.isValid ? nr(this).weekday : NaN;
    }
    get ordinal() {
      return this.isValid ? Gn(this.c).ordinal : NaN;
    }
    get monthShort() {
      return this.isValid
        ? Tn.months("short", { locObj: this.loc })[this.month - 1]
        : null;
    }
    get monthLong() {
      return this.isValid
        ? Tn.months("long", { locObj: this.loc })[this.month - 1]
        : null;
    }
    get weekdayShort() {
      return this.isValid
        ? Tn.weekdays("short", { locObj: this.loc })[this.weekday - 1]
        : null;
    }
    get weekdayLong() {
      return this.isValid
        ? Tn.weekdays("long", { locObj: this.loc })[this.weekday - 1]
        : null;
    }
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    get offsetNameShort() {
      return this.isValid
        ? this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale,
          })
        : null;
    }
    get offsetNameLong() {
      return this.isValid
        ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
        : null;
    }
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    get isInDST() {
      return (
        !this.isOffsetFixed &&
        (this.offset > this.set({ month: 1, day: 1 }).offset ||
          this.offset > this.set({ month: 5 }).offset)
      );
    }
    get isInLeapYear() {
      return Ot(this.year);
    }
    get daysInMonth() {
      return Tt(this.year, this.month);
    }
    get daysInYear() {
      return this.isValid ? St(this.year) : NaN;
    }
    get weeksInWeekYear() {
      return this.isValid ? kt(this.weekYear) : NaN;
    }
    resolvedLocaleOptions(t = {}) {
      const {
        locale: e,
        numberingSystem: n,
        calendar: r,
      } = Gt.create(this.loc.clone(t), t).resolvedOptions(this);
      return { locale: e, numberingSystem: n, outputCalendar: r };
    }
    toUTC(t = 0, e = {}) {
      return this.setZone(ie.instance(t), e);
    }
    toLocal() {
      return this.setZone(me.defaultZone);
    }
    setZone(t, { keepLocalTime: e = !1, keepCalendarTime: n = !1 } = {}) {
      if ((t = oe(t, me.defaultZone)).equals(this.zone)) return this;
      if (t.isValid) {
        let r = this.ts;
        if (e || n) {
          const e = t.offset(this.ts),
            n = this.toObject();
          [r] = ar(n, e, t);
        }
        return rr(this, { ts: r, zone: t });
      }
      return Sr.invalid(er(t));
    }
    reconfigure({ locale: t, numberingSystem: e, outputCalendar: n } = {}) {
      return rr(this, {
        loc: this.loc.clone({
          locale: t,
          numberingSystem: e,
          outputCalendar: n,
        }),
      });
    }
    setLocale(t) {
      return this.reconfigure({ locale: t });
    }
    set(t) {
      if (!this.isValid) return this;
      const e = Ct(t, wr),
        n = !lt(e.weekYear) || !lt(e.weekNumber) || !lt(e.weekday),
        r = !lt(e.ordinal),
        s = !lt(e.year),
        i = !lt(e.month) || !lt(e.day),
        a = s || i,
        o = e.weekYear || e.weekNumber;
      if ((a || r) && o)
        throw new L(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      if (i && r) throw new L("Can't mix ordinal dates with month/day");
      let u;
      n
        ? (u = Jn({ ...Pn(this.c), ...e }))
        : lt(e.ordinal)
        ? ((u = { ...this.toObject(), ...e }),
          lt(e.day) && (u.day = Math.min(Tt(u.year, u.month), u.day)))
        : (u = Xn({ ...Gn(this.c), ...e }));
      const [l, c] = ar(u, this.o, this.zone);
      return rr(this, { ts: l, o: c });
    }
    plus(t) {
      return this.isValid ? rr(this, or(this, vn.fromDurationLike(t))) : this;
    }
    minus(t) {
      return this.isValid
        ? rr(this, or(this, vn.fromDurationLike(t).negate()))
        : this;
    }
    startOf(t) {
      if (!this.isValid) return this;
      const e = {},
        n = vn.normalizeUnit(t);
      switch (n) {
        case "years":
          e.month = 1;
        case "quarters":
        case "months":
          e.day = 1;
        case "weeks":
        case "days":
          e.hour = 0;
        case "hours":
          e.minute = 0;
        case "minutes":
          e.second = 0;
        case "seconds":
          e.millisecond = 0;
      }
      if (("weeks" === n && (e.weekday = 1), "quarters" === n)) {
        const t = Math.ceil(this.month / 3);
        e.month = 3 * (t - 1) + 1;
      }
      return this.set(e);
    }
    endOf(t) {
      return this.isValid
        ? this.plus({ [t]: 1 })
            .startOf(t)
            .minus(1)
        : this;
    }
    toFormat(t, e = {}) {
      return this.isValid
        ? Gt.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t)
        : Kn;
    }
    toLocaleString(t = q, e = {}) {
      return this.isValid
        ? Gt.create(this.loc.clone(e), t).formatDateTime(this)
        : Kn;
    }
    toLocaleParts(t = {}) {
      return this.isValid
        ? Gt.create(this.loc.clone(t), t).formatDateTimeParts(this)
        : [];
    }
    toISO({
      format: t = "extended",
      suppressSeconds: e = !1,
      suppressMilliseconds: n = !1,
      includeOffset: r = !0,
      extendedZone: s = !1,
    } = {}) {
      if (!this.isValid) return null;
      const i = "extended" === t;
      let a = cr(this, i);
      return (a += "T"), (a += hr(this, i, e, n, r, s)), a;
    }
    toISODate({ format: t = "extended" } = {}) {
      return this.isValid ? cr(this, "extended" === t) : null;
    }
    toISOWeekDate() {
      return lr(this, "kkkk-'W'WW-c");
    }
    toISOTime({
      suppressMilliseconds: t = !1,
      suppressSeconds: e = !1,
      includeOffset: n = !0,
      includePrefix: r = !1,
      extendedZone: s = !1,
      format: i = "extended",
    } = {}) {
      return this.isValid
        ? (r ? "T" : "") + hr(this, "extended" === i, e, t, n, s)
        : null;
    }
    toRFC2822() {
      return lr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
    }
    toHTTP() {
      return lr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    toSQLDate() {
      return this.isValid ? cr(this, !0) : null;
    }
    toSQLTime({
      includeOffset: t = !0,
      includeZone: e = !1,
      includeOffsetSpace: n = !0,
    } = {}) {
      let r = "HH:mm:ss.SSS";
      return (
        (e || t) && (n && (r += " "), e ? (r += "z") : t && (r += "ZZ")),
        lr(this, r, !0)
      );
    }
    toSQL(t = {}) {
      return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
    }
    toString() {
      return this.isValid ? this.toISO() : Kn;
    }
    valueOf() {
      return this.toMillis();
    }
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    toJSON() {
      return this.toISO();
    }
    toBSON() {
      return this.toJSDate();
    }
    toObject(t = {}) {
      if (!this.isValid) return {};
      const e = { ...this.c };
      return (
        t.includeConfig &&
          ((e.outputCalendar = this.outputCalendar),
          (e.numberingSystem = this.loc.numberingSystem),
          (e.locale = this.loc.locale)),
        e
      );
    }
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    diff(t, e = "milliseconds", n = {}) {
      if (!this.isValid || !t.isValid)
        return vn.invalid("created by diffing an invalid DateTime");
      const r = {
          locale: this.locale,
          numberingSystem: this.numberingSystem,
          ...n,
        },
        s = ((o = e), Array.isArray(o) ? o : [o]).map(vn.normalizeUnit),
        i = t.valueOf() > this.valueOf(),
        a = (function (t, e, n, r) {
          let [s, i, a, o] = (function (t, e, n) {
            const r = [
                ["years", (t, e) => e.year - t.year],
                ["quarters", (t, e) => e.quarter - t.quarter],
                [
                  "months",
                  (t, e) => e.month - t.month + 12 * (e.year - t.year),
                ],
                [
                  "weeks",
                  (t, e) => {
                    const n = Mn(t, e);
                    return (n - (n % 7)) / 7;
                  },
                ],
                ["days", Mn],
              ],
              s = {};
            let i, a;
            for (const [o, u] of r)
              if (n.indexOf(o) >= 0) {
                i = o;
                let n = u(t, e);
                (a = t.plus({ [o]: n })),
                  a > e ? ((t = t.plus({ [o]: n - 1 })), (n -= 1)) : (t = a),
                  (s[o] = n);
              }
            return [t, s, a, i];
          })(t, e, n);
          const u = e - s,
            l = n.filter(
              (t) =>
                ["hours", "minutes", "seconds", "milliseconds"].indexOf(t) >= 0
            );
          0 === l.length &&
            (a < e && (a = s.plus({ [o]: 1 })),
            a !== s && (i[o] = (i[o] || 0) + u / (a - s)));
          const c = vn.fromObject(i, r);
          return l.length > 0
            ? vn
                .fromMillis(u, r)
                .shiftTo(...l)
                .plus(c)
            : c;
        })(i ? this : t, i ? t : this, s, r);
      var o;
      return i ? a.negate() : a;
    }
    diffNow(t = "milliseconds", e = {}) {
      return this.diff(Sr.now(), t, e);
    }
    until(t) {
      return this.isValid ? Sn.fromDateTimes(this, t) : this;
    }
    hasSame(t, e) {
      if (!this.isValid) return !1;
      const n = t.valueOf(),
        r = this.setZone(t.zone, { keepLocalTime: !0 });
      return r.startOf(e) <= n && n <= r.endOf(e);
    }
    equals(t) {
      return (
        this.isValid &&
        t.isValid &&
        this.valueOf() === t.valueOf() &&
        this.zone.equals(t.zone) &&
        this.loc.equals(t.loc)
      );
    }
    toRelative(t = {}) {
      if (!this.isValid) return null;
      const e = t.base || Sr.fromObject({}, { zone: this.zone }),
        n = t.padding ? (this < e ? -t.padding : t.padding) : 0;
      let r = ["years", "months", "days", "hours", "minutes", "seconds"],
        s = t.unit;
      return (
        Array.isArray(t.unit) && ((r = t.unit), (s = void 0)),
        vr(e, this.plus(n), { ...t, numeric: "always", units: r, unit: s })
      );
    }
    toRelativeCalendar(t = {}) {
      return this.isValid
        ? vr(t.base || Sr.fromObject({}, { zone: this.zone }), this, {
            ...t,
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: !0,
          })
        : null;
    }
    static min(...t) {
      if (!t.every(Sr.isDateTime))
        throw new $("min requires all arguments be DateTimes");
      return ft(t, (t) => t.valueOf(), Math.min);
    }
    static max(...t) {
      if (!t.every(Sr.isDateTime))
        throw new $("max requires all arguments be DateTimes");
      return ft(t, (t) => t.valueOf(), Math.max);
    }
    static fromFormatExplain(t, e, n = {}) {
      const { locale: r = null, numberingSystem: s = null } = n;
      return Rn(
        ke.fromOpts({ locale: r, numberingSystem: s, defaultToEN: !0 }),
        t,
        e
      );
    }
    static fromStringExplain(t, e, n = {}) {
      return Sr.fromFormatExplain(t, e, n);
    }
    static get DATE_SHORT() {
      return q;
    }
    static get DATE_MED() {
      return Y;
    }
    static get DATE_MED_WITH_WEEKDAY() {
      return j;
    }
    static get DATE_FULL() {
      return H;
    }
    static get DATE_HUGE() {
      return U;
    }
    static get TIME_SIMPLE() {
      return W;
    }
    static get TIME_WITH_SECONDS() {
      return P;
    }
    static get TIME_WITH_SHORT_OFFSET() {
      return J;
    }
    static get TIME_WITH_LONG_OFFSET() {
      return G;
    }
    static get TIME_24_SIMPLE() {
      return X;
    }
    static get TIME_24_WITH_SECONDS() {
      return B;
    }
    static get TIME_24_WITH_SHORT_OFFSET() {
      return Q;
    }
    static get TIME_24_WITH_LONG_OFFSET() {
      return K;
    }
    static get DATETIME_SHORT() {
      return tt;
    }
    static get DATETIME_SHORT_WITH_SECONDS() {
      return et;
    }
    static get DATETIME_MED() {
      return nt;
    }
    static get DATETIME_MED_WITH_SECONDS() {
      return rt;
    }
    static get DATETIME_MED_WITH_WEEKDAY() {
      return st;
    }
    static get DATETIME_FULL() {
      return it;
    }
    static get DATETIME_FULL_WITH_SECONDS() {
      return at;
    }
    static get DATETIME_HUGE() {
      return ot;
    }
    static get DATETIME_HUGE_WITH_SECONDS() {
      return ut;
    }
  }
  function Tr(t) {
    if (Sr.isDateTime(t)) return t;
    if (t && t.valueOf && ct(t.valueOf())) return Sr.fromJSDate(t);
    if (t && "object" == typeof t) return Sr.fromObject(t);
    throw new $(`Unknown datetime argument: ${t}, of type ${typeof t}`);
  }
  const Mr = (() => {
    const t = {
      MONTHS: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      COLORS: [
        "#4dc9f6",
        "#f67019",
        "#f53794",
        "#537bc4",
        "#acc236",
        "#166a8f",
        "#00a950",
        "#58595b",
        "#8549ba",
      ],
      CHART_COLORS: {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      },
    };
    class e {
      constructor(t) {
        (this._seed = Date.now()),
          (this.MONTHS = t.MONTHS),
          (this.COLORS = t.COLORS),
          (this.CHART_COLORS = t.CHART_COLORS),
          (this.NAMED_COLORS = [
            this.CHART_COLORS.red,
            this.CHART_COLORS.orange,
            this.CHART_COLORS.yellow,
            this.CHART_COLORS.green,
            this.CHART_COLORS.blue,
            this.CHART_COLORS.purple,
            this.CHART_COLORS.grey,
          ]);
      }
      valueOrDefault(t, e) {
        return void 0 === t ? e : t;
      }
      srand(t) {
        this._seed = t;
      }
      rand(t, e) {
        return (
          (t = this.valueOrDefault(t, 0)),
          (e = this.valueOrDefault(e, 0)),
          (this._seed = (9301 * this._seed + 49297) % 233280),
          t + (this._seed / 233280) * (e - t)
        );
      }
      numbers(t) {
        const e = t || {},
          n = this.valueOrDefault(e.min, 0),
          r = this.valueOrDefault(e.max, 100),
          s = this.valueOrDefault(e.from, []),
          i = this.valueOrDefault(e.count, 8),
          a = this.valueOrDefault(e.decimals, 8),
          o = this.valueOrDefault(e.continuity, 1),
          u = Math.pow(10, a) || 0,
          l = [];
        let c, h;
        for (c = 0; c < i; ++c)
          (h = (s[c] || 0) + this.rand(n, r)),
            this.rand() <= o ? l.push(Math.round(u * h) / u) : l.push(null);
        return l;
      }
      points(t) {
        const e = this.numbers(t),
          n = this.numbers(t);
        return e.map((t, e) => ({ x: t, y: n[e] }));
      }
      bubbles(t) {
        return this.points(t).map(
          (e) => ((e.r = this.rand(t.rmin, t.rmax)), e)
        );
      }
      labels(t) {
        const e = t || {},
          n = e.min || 0,
          r = e.max || 100,
          s = (r - n) / (e.count || 8),
          i = e.decimals || 8,
          a = Math.pow(10, i) || 0,
          o = e.prefix || "",
          u = [];
        let l;
        for (l = n; l < r; l += s) u.push(o + Math.round(a * l) / a);
        return u;
      }
      months(t) {
        const e = t || {},
          n = e.count || 12,
          r = e.section,
          s = [];
        let i, a;
        for (i = 0; i < n; ++i)
          (a = this.MONTHS[Math.ceil(i) % 12]), s.push(a.substring(0, r));
        return s;
      }
      color(t) {
        return this.COLORS[t % this.COLORS.length];
      }
      transparentize(t, e) {
        const n = void 0 === e ? 0.5 : 1 - e;
        return ((r = t), new x(r)).alpha(n).rgbString();
        var r;
      }
      namedColor(t) {
        return this.NAMED_COLORS[t % this.NAMED_COLORS.length];
      }
      newDate(t) {
        return Sr.now().plus({ days: t }).toJSDate();
      }
      newDateString(t) {
        return Sr.now().plus({ days: t }).toISO();
      }
      parseISODate(t) {
        return Sr.fromISO(t);
      }
    }
    return {
      init: (n) => {
        const r = Object.assign({}, t, n);
        return new e(r);
      },
    };
  })();
  window.ChartUtils = Mr;
})();
