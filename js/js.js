(function () {

  var data = {
    "resource": {
      "version": "1",

      "macros": [{
        "function": "__e"
      }, {
        "function": "__cid"
      }],
      "tags": [{
        "function": "__rep",
        "once_per_event": true,
        "vtp_containerId": ["macro", 1],
        "tag_id": 1
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }],
      "rules": [
        [
          ["if", 0],
          ["add", 0]
        ]
      ]
    },
    "runtime": []




  };


  var aa, ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    da = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b
    },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = {
          a: !0
        },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a
      } catch (a) {}
      fa = !1
    }
    ea = fa ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.qk = b.prototype
    },
    la = this || self,
    ma = function (a) {
      return a
    };
  var na = function () {},
    oa = function (a) {
      return "function" === typeof a
    },
    h = function (a) {
      return "string" === typeof a
    },
    pa = function (a) {
      return "number" === typeof a && !isNaN(a)
    },
    qa = Array.isArray,
    ra = function (a, b) {
      if (a && qa(a))
        for (var c = 0; c < a.length; c++)
          if (a[c] && b(a[c])) return a[c]
    },
    sa = function (a, b) {
      if (!pa(a) || !pa(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    ua = function (a, b) {
      for (var c = new ta, d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++)
        if (c.get(b[e])) return !0;
      return !1
    },
    k = function (a,
      b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    xa = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    },
    za = function (a) {
      return Math.round(Number(a)) || 0
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a
    },
    Ba = function (a) {
      var b = [];
      if (qa(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    Da = function () {
      return new Date(Date.now())
    },
    z = function () {
      return Da().getTime()
    },
    ta = function () {
      this.prefix = "gtm.";
      this.values = {}
    };
  ta.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  };
  ta.prototype.get = function (a) {
    return this.values[this.prefix + a]
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c()
          } catch (d) {}
        }
      }
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Ha = function (a) {
      for (var b in a)
        if (a.hasOwnProperty(b)) return !0;
      return !1
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c
    },
    Ka = /^\w{1,9}$/,
    La = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ka.test(d) && e && c.push(d)
      });
      return c.join(b)
    },
    Ma = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0)
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c
    };
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var Pa, Qa = function () {
    if (void 0 === Pa) {
      var a = null,
        b = la.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: ma,
            createScript: ma,
            createScriptURL: ma
          })
        } catch (c) {
          la.console && la.console.error(c.message)
        }
        Pa = a
      } else Pa = a
    }
    return Pa
  };
  var Sa = function (a, b) {
    this.h = b === Ra ? a : ""
  };
  Sa.prototype.toString = function () {
    return this.h + ""
  };
  var Ra = {};
  var Ta = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function Ua() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b
    }
    return ""
  }

  function Va(a) {
    return -1 != Ua().indexOf(a)
  };

  function Wa() {
    return Va("Firefox") || Va("FxiOS")
  }

  function Xa() {
    return (Va("Chrome") || Va("CriOS")) && !Va("Edge") || Va("Silk")
  };
  var Ya = {},
    Za = function (a, b) {
      this.h = b === Ya ? a : ""
    };
  Za.prototype.toString = function () {
    return this.h.toString()
  };
  var $a = function (a) {
      return a instanceof Za && a.constructor === Za ? a.h : "type_error:SafeHtml"
    },
    ab = function (a) {
      var b = a,
        c = Qa(),
        d = c ? c.createHTML(b) : b;
      return new Za(d, Ya)
    };

  function bb(a) {
    if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
  };
  var cb = {},
    db = function (a, b) {
      cb[a] = cb[a] || [];
      cb[a][b] = !0
    },
    eb = function () {
      delete cb.GA4_EVENT
    },
    fb = function (a) {
      for (var b = [], c = cb[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
      return b.join("")
    };
  var E = window,
    F = document,
    gb = navigator,
    hb = F.currentScript && F.currentScript.src,
    ib = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a]
    },
    jb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b())
      })
    },
    kb = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    lb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };

  function mb(a, b, c) {
    b && k(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e)
    })
  }
  var nb = function (a, b, c, d, e) {
      var f = F.createElement("script");
      mb(f, d, kb);
      f.type = "text/javascript";
      f.async = !0;
      var g, l = a,
        m = Qa(),
        n = m ? m.createScriptURL(l) : l;
      g = new Sa(n, Ra);
      f.src = g instanceof Sa && g.constructor === Sa ? g.h : "type_error:TrustedResourceUrl";
      var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
      (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      jb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r =
          F.getElementsByTagName("script")[0] || F.body || F.head;
        r.parentNode.insertBefore(f, r)
      }
      return f
    },
    ob = function () {
      if (hb) {
        var a = hb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3
      }
      return 1
    },
    pb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || (g = F.createElement("iframe"), l = !0);
      mb(g, c, lb);
      d && k(d, function (n, p) {
        g.dataset[n] = p
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (l) {
        var m = F.body && F.body.lastChild || F.body || F.head;
        m.parentNode.insertBefore(g, m)
      }
      jb(g, b);
      void 0 !== a && (g.src = a);
      return g
    },
    qb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b()
      };
      d.onerror = function () {
        d.onerror = null;
        c && c()
      };
      d.src = a
    },
    rb = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    sb = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    G = function (a) {
      E.setTimeout(a, 0)
    },
    tb = function (a, b) {
      return a && b && a.attributes &&
        a.attributes[b] ? a.attributes[b].value : null
    },
    ub = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
    },
    vb = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = ab("A<div>" + a + "</div>");
      void 0 !== c.tagName && bb(c);
      c.innerHTML = $a(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e
    },
    wb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f &&
        g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement
      }
      return null
    },
    xb = function (a) {
      var b;
      try {
        b = gb.sendBeacon && gb.sendBeacon(a)
      } catch (c) {
        db("TAGGING", 15)
      }
      b || qb(a)
    },
    yb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c
    },
    zb = function () {
      var a = E.performance;
      if (a && oa(a.now)) return a.now()
    };
  /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ab = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Bb = function (a) {
      if (null == a) return String(a);
      var b = Ab.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
    },
    Cb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    J = function (a) {
      if (!a || "object" != Bb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Cb(a, "constructor") && !Cb(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 ===
        b || Cb(a, b)
    },
    N = function (a, b) {
      var c = b || ("array" == Bb(a) ? [] : {}),
        d;
      for (d in a)
        if (Cb(a, d)) {
          var e = a[d];
          "array" == Bb(e) ? ("array" != Bb(c[d]) && (c[d] = []), c[d] = N(e, c[d])) : J(e) ? (J(c[d]) || (c[d] = {}), c[d] = N(e, c[d])) : c[d] = e
        } return c
    };
  var Db = function (a) {
    if (void 0 === a || qa(a) || J(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0
    }
    return !1
  };
  var Eb = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        }
      }
    };
    return {
      Ih: a("consent"),
      Ef: a("convert_case_to"),
      Ff: a("convert_false_to"),
      Gf: a("convert_null_to"),
      Hf: a("convert_true_to"),
      If: a("convert_undefined_to"),
      dk: a("debug_mode_metadata"),
      xb: a("function"),
      Qe: a("instance_name"),
      vi: a("live_only"),
      wi: a("malware_disabled"),
      xi: a("metadata"),
      Ai: a("original_activity_id"),
      gk: a("original_vendor_template_id"),
      fk: a("once_on_load"),
      zi: a("once_per_event"),
      Mg: a("once_per_load"),
      hk: a("priority_override"),
      ik: a("respected_consent_types"),
      Qg: a("setup_tags"),
      Rg: a("tag_id"),
      Sg: a("teardown_tags")
    }
  }();
  var ac;
  var bc = [],
    cc = [],
    dc = [],
    ec = [],
    fc = [],
    gc = {},
    hc, ic, kc = function () {
      var a = jc;
      ic = ic || a
    },
    lc, mc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = gc[c],
        f = {},
        g;
      for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Xg && d.Xg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
      e && d && d.Wg && (f.vtp_gtmCachedValues = d.Wg);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = bc[m];
                  break;
                case 1:
                  n = ec[m];
                  break;
                default:
                  l = "";
                  break a
              }
              var p = n && n[Eb.Qe];
              l = p ? String(p) : ""
            }
          }
          b.name = l
        }
        e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
      }
      return void 0 !== e ? e(f) : ac(c, f, b)
    },
    oc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = nc(a[e], b, c));
      return d
    },
    nc = function (a, b, c) {
      if (qa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(nc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = bc[f];
            if (!g || b.ef(g)) return;
            c[f] = !0;
            var l =
              String(g[Eb.Qe]);
            try {
              var m = oc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = mc(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              lc && (d = lc.Oi(d, m))
            } catch (x) {
              b.lh && b.lh(x, Number(f), l), d = !1
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[nc(a[n], b, c)] = nc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = nc(a[q], b, c);
              ic && (p = p || t === ic.Od);
              d.push(t)
            }
            return ic && p ? ic.Pi(d) : d.join("");
          case "escape":
            d = nc(a[1], b, c);
            if (ic && qa(a[1]) && "macro" ===
              a[1][0] && ic.nj(a)) return ic.Ej(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Fb[a[u]] && (d = Fb[a[u]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!ec[r]) throw Error("Unable to resolve tag reference " + r + ".");
            return d = {
              eh: a[2],
              index: r
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v["function"] = a[1];
            var w = pc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a
    },
    pc = function (a, b, c) {
      try {
        return hc(oc(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    };
  var sc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0
      }
      for (var c = [], d = [], e = qc(a), f = 0; f < cc.length; f++) {
        var g = cc[f],
          l = rc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || [])
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < ec.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p
    },
    rc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null
      }
      for (var f =
          a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1
      }
      return !0
    },
    qc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = pc(dc[c], a));
        return b[c]
      }
    };
  var tc = {
    Oi: function (a, b) {
      b[Eb.Ef] && "string" === typeof a && (a = 1 == b[Eb.Ef] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Eb.Gf) && null === a && (a = b[Eb.Gf]);
      b.hasOwnProperty(Eb.If) && void 0 === a && (a = b[Eb.If]);
      b.hasOwnProperty(Eb.Hf) && !0 === a && (a = b[Eb.Hf]);
      b.hasOwnProperty(Eb.Ff) && !1 === a && (a = b[Eb.Ff]);
      return a
    }
  };
  var Qc = function (a) {
      return Pc ? F.querySelectorAll(a) : null
    },
    Rc = function (a, b) {
      if (!Pc) return null;
      if (Element.prototype.closest) try {
        return a.closest(b)
      } catch (e) {
        return null
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType);
      return null
    },
    Sc = !1;
  if (F.querySelectorAll) try {
    var Tc = F.querySelectorAll(":root");
    Tc && 1 == Tc.length && Tc[0] == F.documentElement && (Sc = !0)
  } catch (a) {}
  var Pc = Sc;
  var Uc = [];
  Uc[7] = !0;
  Uc[9] = !0;
  Uc[27] = !0;
  Uc[5] = !0;
  Uc[6] = !0;
  Uc[11] = !0;
  Uc[15] = !0;
  Uc[18] = !0;
  Uc[19] = !0;
  Uc[24] = !0;

  Uc[35] = !0;
  Uc[36] = !0;
  Uc[38] = !0;
  Uc[42] = !0;
  Uc[43] = !0;
  Uc[44] = !0;
  Vc(46, 47);

  function Vc(a, b) {
    for (var c, d, e = 0; c === d;)
      if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
    c ? Uc[a] = !0 : Uc[b] = !0
  }
  var Wc = function (a) {
    return !!Uc[a]
  };
  var O = function (a) {
    db("GTM", a)
  };
  var R = {
      g: {
        F: "ad_storage",
        U: "analytics_storage",
        Bf: "region",
        Cf: "consent_updated",
        Df: "wait_for_update",
        Lh: "app_remove",
        Mh: "app_store_refund",
        Nh: "app_store_subscription_cancel",
        Oh: "app_store_subscription_convert",
        Ph: "app_store_subscription_renew",
        Jf: "add_payment_info",
        Kf: "add_shipping_info",
        kc: "add_to_cart",
        mc: "remove_from_cart",
        Lf: "view_cart",
        Ib: "begin_checkout",
        nc: "select_item",
        rb: "view_item_list",
        Jb: "select_promotion",
        sb: "view_promotion",
        Ba: "purchase",
        oc: "refund",
        Ha: "view_item",
        Mf: "add_to_wishlist",
        Qh: "first_open",
        Rh: "first_visit",
        va: "gtag.config",
        Ca: "gtag.get",
        Sh: "in_app_purchase",
        qc: "page_view",
        Th: "session_start",
        te: "user_engagement",
        Kb: "gclid",
        ia: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        ue: "allow_custom_scripts",
        Uh: "allow_display_features",
        sc: "allow_enhanced_conversions",
        uc: "allow_google_signals",
        wa: "allow_interest_groups",
        rd: "auid",
        Vh: "auto_detection_enabled",
        Va: "aw_remarketing",
        sd: "aw_remarketing_only",
        vc: "discount",
        wc: "aw_feed_country",
        xc: "aw_feed_language",
        Z: "items",
        yc: "aw_merchant_id",
        Nf: "aw_basket_type",
        ud: "campaign_content",
        vd: "campaign_id",
        wd: "campaign_medium",
        xd: "campaign_name",
        zc: "campaign",
        yd: "campaign_source",
        zd: "campaign_term",
        jb: "client_id",
        Wh: "content_group",
        Xh: "content_type",
        Da: "conversion_cookie_prefix",
        Ac: "conversion_id",
        Wa: "conversion_label",
        qa: "conversion_linker",
        ve: "conversion_api",
        Xa: "cookie_domain",
        Ia: "cookie_expires",
        Ya: "cookie_flags",
        Bc: "cookie_name",
        we: "cookie_path",
        Pa: "cookie_prefix",
        tb: "cookie_update",
        Lb: "country",
        ma: "currency",
        Cc: "customer_lifetime_value",
        Dc: "custom_map",
        Yh: "debug_mode",
        aa: "developer_id",
        Of: "disable_merchant_reported_purchases",
        Zh: "dc_custom_params",
        ai: "dc_natural_search",
        xe: "dynamic_event_settings",
        bi: "affiliation",
        Pf: "checkout_option",
        Qf: "checkout_step",
        ci: "coupon",
        Rf: "item_list_name",
        Sf: "list_name",
        di: "promotions",
        Ec: "shipping",
        Tf: "tax",
        Ad: "engagement_time_msec",
        Fc: "enhanced_client_id",
        Gc: "enhanced_conversions",
        Uf: "enhanced_conversions_automatic_settings",
        Hc: "estimated_delivery_date",
        ye: "euid_logged_in_state",
        Mb: "event_callback",
        Nb: "event_developer_id_string",
        Vf: "event",
        Bd: "event_settings",
        Cd: "event_timeout",
        ei: "experiments",
        ze: "firebase_id",
        Dd: "first_party_collection",
        Ed: "_x_20",
        ub: "_x_19",
        Wf: "fledge",
        Xf: "flight_error_code",
        Yf: "flight_error_message",
        Zf: "gac_gclid",
        Fd: "gac_wbraid",
        ag: "gac_wbraid_multiple_conversions",
        Ic: "ga_restrict_domain",
        Ae: "ga_temp_client_id",
        cg: "gdpr_applies",
        dg: "geo_granularity",
        Za: "value_callback",
        Qa: "value_key",
        Ob: "global_developer_id_string",
        ek: "google_ono",
        kb: "google_signals",
        Gd: "google_tld",
        Hd: "groups",
        eg: "gsa_experiment_id",
        fg: "iframe_state",
        Id: "ignore_referrer",
        Be: "internal_traffic_results",
        gg: "is_passthrough",
        Ja: "language",
        Ce: "legacy_developer_id_string",
        ra: "linker",
        Pb: "accept_incoming",
        Qb: "decorate_forms",
        R: "domains",
        Jc: "url_position",
        hg: "method",
        Rb: "new_customer",
        ig: "non_interaction",
        fi: "optimize_id",
        Ka: "page_location",
        De: "page_path",
        La: "page_referrer",
        Sb: "page_title",
        jg: "passengers",
        kg: "phone_conversion_callback",
        gi: "phone_conversion_country_code",
        lg: "phone_conversion_css_class",
        hi: "phone_conversion_ids",
        mg: "phone_conversion_number",
        ng: "phone_conversion_options",
        og: "quantity",
        Jd: "redact_device_info",
        pg: "redact_enhanced_user_id",
        ii: "redact_ga_client_id",
        ji: "redact_user_id",
        Kd: "referral_exclusion_definition",
        lb: "restricted_data_processing",
        ki: "retoken",
        qg: "screen_name",
        vb: "screen_resolution",
        li: "search_term",
        xa: "send_page_view",
        wb: "send_to",
        Kc: "session_duration",
        Ld: "session_engaged",
        Ee: "session_engaged_time",
        nb: "session_id",
        Md: "session_number",
        Tb: "delivery_postal_code",
        rg: "tc_privacy_string",
        sg: "temporary_client_id",
        mi: "tracking_id",
        Fe: "traffic_type",
        Ea: "transaction_id",
        na: "transport_url",
        ug: "trip_type",
        Lc: "update",
        ab: "url_passthrough",
        Ge: "_user_agent_architecture",
        He: "_user_agent_bitness",
        Ie: "_user_agent_full_version_list",
        vg: "_user_agent_mobile",
        Je: "_user_agent_model",
        Ke: "_user_agent_platform",
        Le: "_user_agent_platform_version",
        Me: "_user_agent_wow64",
        ca: "user_data",
        wg: "user_data_auto_latency",
        xg: "user_data_auto_meta",
        yg: "user_data_auto_multi",
        zg: "user_data_auto_selectors",
        Ag: "user_data_auto_status",
        Bg: "user_data_mode",
        Ne: "user_data_settings",
        sa: "user_id",
        Ma: "user_properties",
        Cg: "us_privacy_string",
        ka: "value",
        Nd: "wbraid",
        Dg: "wbraid_multiple_conversions",
        Gg: "_host_name",
        Hg: "_in_page_command",
        Ig: "_is_linker_valid",
        Jg: "_is_passthrough_cid",
        Lg: "non_personalized_ads"
      }
    },
    wd = {},
    xd = Object.freeze((wd[R.g.X] = 1, wd[R.g.sc] = 1, wd[R.g.uc] = 1, wd[R.g.Z] = 1, wd[R.g.Xa] = 1, wd[R.g.Ia] = 1, wd[R.g.Ya] = 1, wd[R.g.Bc] = 1, wd[R.g.we] = 1, wd[R.g.Pa] = 1, wd[R.g.tb] = 1, wd[R.g.Dc] = 1, wd[R.g.aa] = 1, wd[R.g.xe] = 1, wd[R.g.Mb] = 1, wd[R.g.Bd] = 1, wd[R.g.Cd] = 1, wd[R.g.Dd] =
      1, wd[R.g.Ic] = 1, wd[R.g.kb] = 1, wd[R.g.Gd] = 1, wd[R.g.Hd] = 1, wd[R.g.Be] = 1, wd[R.g.ra] = 1, wd[R.g.Kd] = 1, wd[R.g.lb] = 1, wd[R.g.xa] = 1, wd[R.g.wb] = 1, wd[R.g.Kc] = 1, wd[R.g.Ee] = 1, wd[R.g.Tb] = 1, wd[R.g.na] = 1, wd[R.g.Lc] = 1, wd[R.g.Ne] = 1, wd[R.g.Ma] = 1, wd));
  Object.freeze([R.g.Ka, R.g.La, R.g.Sb, R.g.Ja, R.g.qg, R.g.sa, R.g.ze, R.g.Wh]);
  var yd = {},
    zd = Object.freeze((yd[R.g.Lh] = 1, yd[R.g.Mh] = 1, yd[R.g.Nh] = 1, yd[R.g.Oh] = 1, yd[R.g.Ph] = 1, yd[R.g.Qh] = 1, yd[R.g.Rh] = 1, yd[R.g.Sh] = 1, yd[R.g.Th] = 1, yd[R.g.te] = 1, yd)),
    Ad = {},
    Bd = Object.freeze((Ad[R.g.Jf] = 1, Ad[R.g.Kf] = 1, Ad[R.g.kc] = 1, Ad[R.g.mc] = 1, Ad[R.g.Lf] = 1, Ad[R.g.Ib] = 1, Ad[R.g.nc] = 1, Ad[R.g.rb] = 1, Ad[R.g.Jb] = 1, Ad[R.g.sb] = 1, Ad[R.g.Ba] = 1, Ad[R.g.oc] = 1, Ad[R.g.Ha] = 1, Ad[R.g.Mf] = 1, Ad)),
    Cd = Object.freeze([R.g.X, R.g.uc, R.g.tb]),
    Dd = Object.freeze([].concat(Cd)),
    Ed = Object.freeze([R.g.Ia, R.g.Cd, R.g.Kc, R.g.Ee, R.g.Ad]),
    Fd = Object.freeze([].concat(Ed)),
    Gd = {},
    Hd = (Gd[R.g.F] = "1", Gd[R.g.U] = "2", Gd),
    Jd = {},
    Kd = Object.freeze((Jd[R.g.X] = 1, Jd[R.g.sc] = 1, Jd[R.g.wa] = 1, Jd[R.g.Va] = 1, Jd[R.g.sd] = 1, Jd[R.g.vc] = 1, Jd[R.g.wc] = 1, Jd[R.g.xc] = 1, Jd[R.g.Z] = 1, Jd[R.g.yc] = 1, Jd[R.g.Da] = 1, Jd[R.g.qa] = 1, Jd[R.g.Xa] = 1, Jd[R.g.Ia] = 1, Jd[R.g.Ya] = 1, Jd[R.g.Pa] = 1, Jd[R.g.ma] = 1, Jd[R.g.Cc] = 1, Jd[R.g.aa] = 1, Jd[R.g.Of] = 1, Jd[R.g.Gc] = 1, Jd[R.g.Hc] = 1, Jd[R.g.ze] = 1, Jd[R.g.Dd] = 1, Jd[R.g.Ja] = 1, Jd[R.g.Rb] = 1, Jd[R.g.Ka] = 1, Jd[R.g.La] = 1, Jd[R.g.kg] = 1, Jd[R.g.lg] = 1, Jd[R.g.mg] = 1, Jd[R.g.ng] =
      1, Jd[R.g.lb] = 1, Jd[R.g.xa] = 1, Jd[R.g.wb] = 1, Jd[R.g.Tb] = 1, Jd[R.g.Ea] = 1, Jd[R.g.na] = 1, Jd[R.g.Lc] = 1, Jd[R.g.ab] = 1, Jd[R.g.ca] = 1, Jd[R.g.sa] = 1, Jd[R.g.ka] = 1, Jd));
  Object.freeze(R.g);
  var Ld = {},
    Md = E.google_tag_manager = E.google_tag_manager || {},
    Nd = Math.random();
  Ld.Sd = "aa0";
  Ld.jk = Number("") || 0;
  Ld.fa = "dataLayer";
  Ld.Kh = "ChEI8KiUmgYQk8PTp4Hr1v3/ARInAP0HAQCkVZLMwHgQKEQyLt9cQauo0MXIFFnKQ3dcewiO3GcioQNvGgKtDQ\x3d\x3d";
  var Od = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0
    },
    Pd = {
      __paused: !0,
      __tg: !0
    },
    Qd;
  for (Qd in Od) Od.hasOwnProperty(Qd) && (Pd[Qd] = !0);
  var Rd = Aa(""),
    Sd = Aa(""),
    Td, Ud = !1;
  Ud = !0;
  Td = Ud;
  var Vd, Wd = !1;
  Vd = Wd;
  var Xd, Yd = !1;
  Xd = Yd;
  var Zd, $d = !1;
  Zd = $d;
  Ld.qd = "www.googletagmanager.com";
  var ae = "" + Ld.qd + (Td ? "/gtag/js" : "/gtm.js"),
    be = null,
    ce = null,
    de = {},
    ee = {},
    fe = function () {
      var a = Md.sequence || 1;
      Md.sequence = a + 1;
      return a
    };
  Ld.Jh = "";
  var ge = "";
  Ld.Td = ge;
  var he = new ta,
    ie = {},
    je = {},
    me = {
      name: Ld.fa,
      set: function (a, b) {
        N(Ja(a, b), ie);
        ke()
      },
      get: function (a) {
        return le(a, 2)
      },
      reset: function () {
        he = new ta;
        ie = {};
        ke()
      }
    },
    le = function (a, b) {
      return 2 != b ? he.get(a) : ne(a)
    },
    ne = function (a) {
      var b, c = a.split(".");
      b = b || [];
      for (var d = ie, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return
      }
      return d
    },
    oe = function (a, b) {
      je.hasOwnProperty(a) || (he.set(a, b), N(Ja(a, b), ie), ke())
    },
    ke = function (a) {
      k(je, function (b, c) {
        he.set(b, c);
        N(Ja(b), ie);
        N(Ja(b,
          c), ie);
        a && delete je[b]
      })
    },
    pe = function (a, b) {
      var c, d = 1 !== (void 0 === b ? 2 : b) ? ne(a) : he.get(a);
      "array" === Bb(d) || "object" === Bb(d) ? c = N(d) : c = d;
      return c
    };
  var qe, re = !1,
    se = function (a) {
      if (!re) {
        re = !0;
        qe = qe || {}
      }
      return qe[a]
    };
  var te = function () {
      var a = E.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      }
    },
    ue = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
            f))
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null))
      }
      return !1
    };
  var Fe = /:[0-9]+$/,
    Ge = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
        }
      }
    },
    Je = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = He(a.protocol) || He(E.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
        b && (a.hostname = (a.hostname || E.location.hostname).replace(Fe, "").toLowerCase());
      return Ie(a, b, c, d, e)
    },
    Ie = function (a, b, c, d, e) {
      var f, g = He(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ke(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Fe, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length))
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || db("TAGGING",
            1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Ge(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href
      }
      return f
    },
    He = function (a) {
      return a ? a.replace(":", "").toLowerCase() : ""
    },
    Ke = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    Le = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || db("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(Fe, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    },
    Me = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0"
      }

      function c(n) {
        return n.split("&").map(b).filter(function (p) {
          return void 0 !== p
        }).join("&")
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Le(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m
    };
  var Ne = {};
  var pf = {},
    qf = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
      void 0 === pf[a] && (pf[a] = Math.floor(Math.random() * b));
      return pf[a]
    };
  var sf = {
    Zg: "BD",
    Kj: "BD-C"
  };
  var tf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var uf = function (a) {
    uf[" "](a);
    return a
  };
  uf[" "] = function () {};
  var wf = function () {
    var a = vf,
      b = "cf";
    if (a.cf && a.hasOwnProperty(b)) return a.cf;
    var c = new a;
    return a.cf = c
  };
  var vf = function () {
    var a = {};
    this.h = function () {
      var b = tf.h,
        c = tf.defaultValue;
      return null != a[b] ? a[b] : c
    };
    this.m = function () {
      a[tf.h] = !0
    }
  };
  var xf = [];

  function yf() {
    var a = ib("google_tag_data", {});
    a.ics || (a.ics = {
      entries: {},
      set: zf,
      update: Af,
      addListener: Bf,
      notifyListeners: Cf,
      active: !1,
      usedDefault: !1,
      usedUpdate: !1,
      accessedDefault: !1,
      accessedAny: !1,
      wasSetLate: !1
    });
    return a.ics
  }

  function zf(a, b, c, d, e, f) {
    var g = yf();
    g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q && E.setTimeout(function () {
          l[a] === t && t.quiet && (t.quiet = !1, Df(a), Cf(), db("TAGGING",
            2))
        }, f)
      }
    }
  }

  function Af(a, b) {
    var c = yf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Ef(c, a),
        e = c.entries,
        f = e[a] = e[a] || {};
      f.update = "granted" === b;
      var g = Ef(c, a);
      f.quiet ? (f.quiet = !1, Df(a)) : g !== d && Df(a)
    }
  }

  function Bf(a, b) {
    xf.push({
      Ve: a,
      Wi: b
    })
  }

  function Df(a) {
    for (var b = 0; b < xf.length; ++b) {
      var c = xf[b];
      qa(c.Ve) && -1 !== c.Ve.indexOf(a) && (c.qh = !0)
    }
  }

  function Cf(a, b) {
    for (var c = 0; c < xf.length; ++c) {
      var d = xf[c];
      if (d.qh) {
        d.qh = !1;
        try {
          d.Wi({
            consentEventId: a,
            consentPriorityId: b
          })
        } catch (e) {}
      }
    }
  }

  function Ef(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial
  }
  var Ff = function (a) {
      var b = yf();
      b.accessedAny = !0;
      return Ef(b, a)
    },
    Gf = function (a) {
      var b = yf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial
    },
    Hf = function (a) {
      var b = yf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet
    },
    If = function () {
      if (!wf().h()) return !1;
      var a = yf();
      a.accessedAny = !0;
      return a.active
    },
    Jf = function () {
      var a = yf();
      a.accessedDefault = !0;
      return a.usedDefault
    },
    Kf = function (a, b) {
      yf().addListener(a, b)
    },
    Lf = function (a, b) {
      yf().notifyListeners(a, b)
    },
    Mf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++)
          if (!Hf(b[e])) return !0;
        return !1
      }
      if (c()) {
        var d = !1;
        Kf(b, function (e) {
          d || c() || (d = !0, a(e))
        })
      } else a({})
    },
    Nf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Ff(l) || e[l] || (f.push(l), e[l] = !0)
        }
        return f
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length && Kf(d, function (f) {
        var g = c();
        0 < g.length && (f.Ve = g, a(f))
      })
    };

  function Of() {}

  function Pf() {};

  function Qf(a) {
    for (var b = [], c = 0; c < Rf.length; c++) {
      var d = a(Rf[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
    }
    return b.join("")
  }
  var Rf = [R.g.F, R.g.U],
    Sf = function (a) {
      var b = a[R.g.Bf];
      b && O(40);
      var c = a[R.g.Df];
      c && O(41);
      for (var d = qa(b) ? b : [b], e = {
          hc: 0
        }; e.hc < d.length; e = {
          hc: e.hc
        }, ++e.hc) k(a, function (f) {
        return function (g, l) {
          if (g !== R.g.Bf && g !== R.g.Df) {
            var m = d[f.hc],
              n = sf.Zg,
              p = sf.Kj;
            yf().set(g, l, m, n, p, c)
          }
        }
      }(e))
    },
    Tf = 0,
    Uf = function (a, b) {
      k(a, function (e, f) {
        yf().update(e, f)
      });
      Lf(b.eventId, b.priorityId);
      var c = z(),
        d = c - Tf;
      Tf && 0 <= d && 1E3 > d && O(66);
      Tf = c
    },
    Vf = function (a) {
      var b = Ff(a);
      return void 0 != b ? b : !0
    },
    Wf = function () {
      return "G1" + Qf(Ff)
    },
    Xf = function (a,
      b) {
      Nf(a, b)
    },
    Yf = function (a, b) {
      Mf(a, b)
    };
  var Zf = function (a) {
    var b = 1,
      c, d, e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b
  };
  var $f = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m)
      }
    }
    return d
  };
  var ag = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
    },
    bg = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c()
        }
      }
    };

  function cg(a) {
    return "null" !== a.origin
  };
  var fg = function (a, b, c, d) {
      return dg(d) ? $f(a, String(b || eg()), c) : []
    },
    ig = function (a, b, c, d, e) {
      if (dg(e)) {
        var f = gg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = hg(f, function (g) {
            return g.Zd
          }, b);
          if (1 === f.length) return f[0].id;
          f = hg(f, function (g) {
            return g.cd
          }, c);
          return f[0] ? f[0].id : void 0
        }
      }
    };

  function jg(a, b, c, d) {
    var e = eg(),
      f = window;
    cg(f) && (f.document.cookie = a);
    var g = eg();
    return e != g || void 0 != c && 0 <= fg(b, g, !1, d).indexOf(c)
  }
  var ng = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v
      }

      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r
      }
      if (!dg(c.qb)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = kg(b), f = a + "=" + b);
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.mk);
      f = d(f, "samesite",
        c.nk);
      c.pk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = lg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!mg(q, c.path) && jg(t, a, b, c.qb)) return 0
        }
        return 1
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return mg(m, c.path) ? 1 : jg(f, a, b, c.qb) ? 0 : 1
    },
    og = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return ng(a, b, c)
    };

  function hg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
    }
    return 0 < d.length ? d : e
  }

  function gg(a, b, c) {
    for (var d = [], e = fg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          Zd: 1 * m[0] || 1,
          cd: 1 * m[1] || 1
        }))
      }
    }
    return d
  }
  var kg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a
    },
    wg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    xg = /(^|\.)doubleclick\.net$/i,
    mg = function (a, b) {
      return xg.test(window.document.location.hostname) || "/" === b && wg.test(a)
    },
    eg = function () {
      return cg(window) ? window.document.cookie : ""
    },
    lg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"]
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      xg.test(e) || wg.test(e) || a.push("none");
      return a
    },
    dg = function (a) {
      if (!wf().h() || !a || !If()) return !0;
      if (!Hf(a)) return !1;
      var b = Ff(a);
      return null == b ? !0 : !!b
    };
  var yg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ Zf(a) & 2147483647) : String(b)
    },
    zg = function (a) {
      return [yg(a), Math.round(z() / 1E3)].join(".")
    },
    Cg = function (a, b, c, d, e) {
      var f = Ag(b);
      return ig(a, f, Bg(c), d, e)
    },
    Dg = function (a, b, c, d) {
      var e = "" + Ag(c),
        f = Bg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".")
    },
    Ag = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length
    },
    Bg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length -
        1
    };
  var Eg = function () {
    Md.dedupe_gclid || (Md.dedupe_gclid = "" + zg());
    return Md.dedupe_gclid
  };
  var Fg = function () {
    var a = !1;
    return a
  };
  var Gg = {
      M: "UA-23581568-13",
      Hb: ""
    },
    Hg = {
      nh: "UA-23581568-13",
      oh: "UA-23581568-13"
    };
  Gg.Kg = Aa("");
  var Ig = function () {
      return Hg.nh ? Hg.nh.split("|") : [Gg.M]
    },
    Jg = function () {
      if (Hg.oh) return Hg.oh.split("|");
      O(84);
      return []
    },
    Kg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {}
    },
    Mg = function () {
      for (var a = Lg(), b = Ig(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || pa(d) ? a.container[b[c]] = {
          state: 2
        } : d.state = 2
      }
      for (var e = Jg(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? g.state = 2 : a.destination[e[f]] = {
          state: 2
        }
      }
      a.canonical[Gg.Hb] = 2
    },
    Ng = function (a) {
      return !!Lg().container[a]
    },
    Og = function () {
      var a = Lg().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (pa(c)) {
            if (1 === c) return !0
          } else if (1 === c.state) return !0
        } return !1
    },
    Pg = function () {
      var a = {};
      k(Lg().destination, function (b, c) {
        0 === c.state && (a[b] = c)
      });
      return a
    };

  function Lg() {
    var a = Md.tidr;
    a || (a = new Kg, Md.tidr = a);
    return a
  }
  var Qg = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o"
    },
    Rg = function (a) {
      var b = Gg.M.split("-"),
        c = b[0].toUpperCase(),
        d = Qg[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f = "w";
      Td && (f = Fg() ? "s" : "o");
      Vd ? ("w" === f && (f = "x"), "o" === f && (f = "q")) : Xd ? ("w" === f && (f = "y"), "o" === f && (f = "r")) : Zd && (f = "z");
      return "2" + f + d + (4 === Ld.Sd.length ? Ld.Sd.slice(1) : Ld.Sd) + e
    };

  function Sg(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c
  };
  var Tg = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1)
  };

  function Ug() {
    return Va("iPhone") && !Va("iPod") && !Va("iPad")
  }

  function Vg() {
    Ug() || Va("iPad") || Va("iPod")
  };
  Va("Opera");
  Va("Trident") || Va("MSIE");
  Va("Edge");
  !Va("Gecko") || -1 != Ua().toLowerCase().indexOf("webkit") && !Va("Edge") || Va("Trident") || Va("MSIE") || Va("Edge"); - 1 != Ua().toLowerCase().indexOf("webkit") && !Va("Edge") && Va("Mobile");
  Va("Macintosh");
  Va("Windows");
  Va("Linux") || Va("CrOS");
  var Wg = la.navigator || null;
  Wg && (Wg.appVersion || "").indexOf("X11");
  Va("Android");
  Ug();
  Va("iPad");
  Va("iPod");
  Vg();
  Ua().toLowerCase().indexOf("kaios");
  var Xg = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e
        }
        e += f + 1
      }
      return -1
    },
    Yg = /#|$/,
    Zg = function (a, b) {
      var c = a.search(Yg),
        d = Xg(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    },
    $g = /[?&]($|#)/,
    ah = function (a, b, c) {
      for (var d, e = a.search(Yg), f = 0, g, l = []; 0 <= (g = Xg(a, f, b, e));) l.push(a.substring(f,
        g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace($g, "$1");
      var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q, t = d.indexOf("#");
        0 > t && (t = d.length);
        var u = d.indexOf("?"),
          r;
        0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
        q = [d.slice(0, u), r, d.slice(t)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
      } else m = d;
      return m
    };

  function bh(a) {
    if (!a || !F.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b
  }
  var ch = function () {
    if (E.top == E) return 0;
    var a = E.location.ancestorOrigins;
    if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
    var b;
    var c = E.top;
    try {
      var d;
      if (d = !!c && null != c.location.href) b: {
        try {
          uf(c.foo);
          d = !0;
          break b
        } catch (e) {}
        d = !1
      }
      b = d
    } catch (e) {
      b = !1
    }
    return b ? 1 : 2
  };
  var dh = function () {};
  var eh = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    },
    fh = function (a, b, c) {
      this.m = a;
      this.h = null;
      this.K = {};
      this.Ga = 0;
      this.P = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null
    };
  ka(fh, dh);
  fh.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.D
      },
      d = bg(function () {
        return a(c)
      }),
      e = 0; - 1 !== this.P && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d()
    }, this.P));
    var f = function (g, l) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = eh(c), c.internalBlockOnErrors = b.D, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c)
    };
    try {
      gh(this, "addEventListener", f)
    } catch (g) {
      c.tcString =
        "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
    }
  };
  fh.prototype.removeEventListener = function (a) {
    a && a.listenerId && gh(this, "removeEventListener", null, a.listenerId)
  };
  var ih = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a
          }
        }
        e = void 0
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = hh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && hh(a.purpose.consents, b)
        } else m = !0;
      else m = 1 === l ? a.purpose && a.vendor ? hh(a.purpose.legitimateInterests,
        b) && hh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m
    },
    hh = function (a, b) {
      return !(!a || !a[b])
    },
    gh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d)
      } else if (jh(a)) {
        kh(a);
        var f = ++a.Ga;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage((g.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, g), "*")
        }
      } else c({}, !1)
    },
    jh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator)
          } catch (l) {
            e = !1
          }
          if (e) {
            b = c;
            break a
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b
              }
            } catch (l) {}
            f = null
          }
          if (!(c = f)) break
        }
        b = null
      }
      a.h = b;
      return a.h
    },
    kh = function (a) {
      a.B || (a.B = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.K[c.callId](c.returnValue, c.success)
        } catch (d) {}
      }, Tg(a.m, a.B))
    };
  var lh = !0;
  lh = !1;
  var mh = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    nh = Sg("", 550),
    oh = Sg("", 500);

  function ph() {
    var a = Md.tcf || {};
    return Md.tcf = a
  }
  var uh = function () {
    var a = ph(),
      b = new fh(E, lh ? 3E3 : -1);
    if (!0 === E.gtag_enable_tcf_support && !a.active && ("function" === typeof E.__tcfapi || "function" === typeof b.m.__tcfapi || null != jh(b))) {
      a.active = !0;
      a.ed = {};
      qh();
      var c = null;
      lh ? c = E.setTimeout(function () {
        rh(a);
        sh(a);
        c = null
      }, oh) : a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), c = null);
          if (0 !== d.internalErrorState) rh(a), sh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) e = th(), b.removeEventListener(d);
            else if ("tcloaded" ===
              d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
              var f = {},
                g;
              for (g in mh)
                if (mh.hasOwnProperty(g))
                  if ("1" === g) {
                    var l = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var p = l;
                    !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = eh(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                    f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString ||
                      void 0 === l.gdprApplies && !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : ih(l, "1", 0) : !1
                  } else f[g] = ih(d, g, mh[g]);
              e = f
            }
            e && (a.tcString = d.tcString || "tcempty", a.ed = e, sh(a))
          }
        })
      } catch (d) {
        c && (clearTimeout(c), c = null), rh(a), sh(a)
      }
    }
  };

  function rh(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    lh && (a.ed = th())
  }

  function qh() {
    var a = {},
      b = (a.ad_storage = "denied", a.wait_for_update = nh, a);
    Sf(b)
  }

  function th() {
    var a = {},
      b;
    for (b in mh) mh.hasOwnProperty(b) && (a[b] = !0);
    return a
  }

  function sh(a) {
    var b = {},
      c = (b.ad_storage = a.ed["1"] ? "granted" : "denied", b);
    Uf(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: vh()
    })
  }
  var vh = function () {
      var a = ph();
      return a.active ? a.tcString || "" : ""
    },
    wh = function () {
      var a = ph();
      return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    },
    xh = function (a) {
      if (!mh.hasOwnProperty(String(a))) return !0;
      var b = ph();
      return b.active && b.ed ? !!b.ed[String(a)] : !0
    };

  function yh(a, b, c, d) {
    var e, f = Number(null != a.Sa ? a.Sa : void 0);
    0 !== f && (e = new Date((b || z()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      qb: d
    }
  };
  var zh = ["1"],
    Ah = {},
    Bh = {},
    Dh = function (a) {
      return Ah[Ch(a)]
    },
    Gh = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Ch(a.prefix);
      if (!Ah[c] && !Eh(c, a.path, a.domain) && b) {
        var d = Ch(a.prefix),
          e = zg();
        if (0 === Fh(d, e, a)) {
          var f = ib("google_tag_data", {});
          f._gcl_au ? db("GTM", 57) : f._gcl_au = e
        }
        Eh(c, a.path, a.domain)
      }
    };

  function Fh(a, b, c, d) {
    var e = Dg(b, "1", c.domain, c.path),
      f = yh(c, d);
    f.qb = "ad_storage";
    return og(a, e, f)
  }

  function Eh(a, b, c) {
    var d = Cg(a, b, c, zh, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length ? (Ah[a] = e.slice(0, 2).join("."), Bh[a] = {
      id: e.slice(2, 4).join("."),
      kh: Number(e[4]) || 0
    }) : 3 === e.length ? Bh[a] = {
      id: e.slice(0, 2).join("."),
      kh: Number(e[2]) || 0
    } : Ah[a] = d;
    return !0
  }

  function Ch(a) {
    return (a || "_gcl") + "_au"
  };

  function Hh() {
    for (var a = Ih, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function Jh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }
  var Ih, Kh;

  function Lh(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = Kh[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m
    }
    Ih = Ih || Jh();
    Kh = Kh || Hh();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
    }
  };
  var Mh;
  var Qh = function () {
      var a = Nh,
        b = Oh,
        c = Ph(),
        d = function (g) {
          a(g.target || g.srcElement || {})
        },
        e = function (g) {
          b(g.target || g.srcElement || {})
        };
      if (!c.init) {
        rb(F, "mousedown", d);
        rb(F, "keyup", d);
        rb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this)
        };
        c.init = !0
      }
    },
    Rh = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Ph().decorators.push(f)
    },
    Sh = function (a, b, c) {
      for (var d = Ph().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g =
          d[f],
          l;
        if (l = !c || g.forms) a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== F.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  l = !0;
                  break a
                }
              } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            l = !0;
            break a
          }
          l = !1
        }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ga(e, g.callback())
        }
      }
      return e
    };

  function Ph() {
    var a = ib("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b
  };
  var Th = /(.*?)\*(.*?)\*(.*)/,
    Uh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Vh = /^(?:www\.|m\.|amp\.)+/,
    Wh = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Xh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }
  var Zh = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
          b.push(c);
          var e = b,
            f = e.push,
            g, l = String(d);
          Ih = Ih || Jh();
          Kh = Kh || Hh();
          for (var m = [], n = 0; n < l.length; n += 3) {
            var p = n + 1 < l.length,
              q = n + 2 < l.length,
              t = l.charCodeAt(n),
              u = p ? l.charCodeAt(n + 1) : 0,
              r = q ? l.charCodeAt(n + 2) : 0,
              v = t >> 2,
              w = (t & 3) << 4 | u >> 4,
              y = (u & 15) << 2 | r >> 6,
              x = r & 63;
            q || (x = 64, p || (y = 64));
            m.push(Ih[v], Ih[w], Ih[y], Ih[x])
          }
          g = m.join("");
          f.call(e, g)
        }
      } var A = b.join("*");
    return ["1", Yh(A),
      A
    ].join("*")
  };

  function Yh(a, b) {
    var c = [E.navigator.userAgent, (new Date).getTimezoneOffset(), gb.userLanguage || gb.language, Math.floor(z() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Mh)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g
      }
      d = e
    }
    Mh = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Mh[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36)
  }

  function $h() {
    return function (a) {
      var b = Le(E.location.href),
        c = b.search.replace("?", ""),
        d = Ge(c, "_gl", !0) || "";
      a.query = ai(d) || {};
      var e = Je(b, "fragment").match(Xh("_gl"));
      a.fragment = ai(e && e[3] || "") || {}
    }
  }

  function bi(a, b) {
    var c = Xh(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f)
    }
    return d
  }
  var ci = function (a, b) {
      b || (b = "_gl");
      var c = Wh.exec(a);
      if (!c) return "";
      var d = c[1],
        e = bi(b, (c[2] || "").slice(1)),
        f = bi(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f
    },
    di = function (a) {
      var b = $h(),
        c = Ph();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d
    },
    ai = function (a) {
      try {
        var b = ei(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = Lh(d[e + 1]);
            c[f] = g
          }
          db("TAGGING", 6);
          return c
        }
      } catch (l) {
        db("TAGGING",
          8)
      }
    };

  function ei(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Th.exec(d);
          if (f) {
            c = f;
            break a
          }
          d = decodeURIComponent(d)
        }
        c = void 0
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Yh(l, p)) {
              m = !0;
              break a
            } m = !1
        }
        if (m) return l;
        db("TAGGING", 7)
      }
    }
  }

  function fi(a, b, c, d) {
    function e(p) {
      p = bi(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n
    }
    d = void 0 === d ? !1 : d;
    var f = Wh.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
    return "" + g + l + m
  }

  function gi(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Sh(b, 1, c),
      e = Sh(b, 2, c),
      f = Sh(b, 3, c);
    if (Ha(d)) {
      var g = Zh(d);
      c ? hi("_gl", g, a) : ii("_gl", g, a, !1)
    }
    if (!c && Ha(e)) {
      var l = Zh(e);
      ii("_gl", l, a, !0)
    }
    for (var m in f)
      if (f.hasOwnProperty(m)) a: {
        var n = m,
          p = f[m],
          q = a;
        if (q.tagName) {
          if ("a" === q.tagName.toLowerCase()) {
            ii(n, p, q);
            break a
          }
          if ("form" === q.tagName.toLowerCase()) {
            hi(n, p, q);
            break a
          }
        }
        "string" == typeof q && fi(n, p, q)
      }
  }

  function ii(a, b, c, d) {
    if (c.href) {
      var e = fi(a, b, c.href, void 0 === d ? !1 : d);
      Ta.test(e) && (c.href = e)
    }
  }

  function hi(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m)
        }
      } else if ("post" === d) {
        var n = fi(a, b, c.action);
        Ta.test(n) && (c.action = n)
      }
    }
  }

  function Nh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a
          }
          c = c.parentNode;
          d--
        }
        b = null
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || gi(e, e.hostname)
      }
    } catch (g) {}
  }

  function Oh(a) {
    try {
      if (a.action) {
        var b = Je(Le(a.action), "host");
        gi(a, b)
      }
    } catch (c) {}
  }
  var ji = function (a, b, c, d) {
      Qh();
      Rh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    },
    ki = function (a, b) {
      Qh();
      Rh(a, [Ie(E.location, "host", !0)], b, !0, !0)
    },
    li = function () {
      var a = F.location.hostname,
        b = Uh.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-")
      }
      var l = a.replace(Vh, ""),
        m = e.replace(Vh, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length,
          l.length) === p
      }
      return n
    },
    mi = function (a, b) {
      return !1 === a ? !1 : a || b || li()
    };
  var ni = {};
  var oi = function (a) {
    for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        xf: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      })
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp
    });
    return b
  };

  function pi(a, b) {
    var c = oi(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].xf] || (d[c[e].xf] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          da: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].xf].push(g)
      }
    }
    return d
  };
  var qi = /^\w+$/,
    ri = /^[\w-]+$/,
    si = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    ti = function () {
      if (!wf().h() || !If()) return !0;
      var a = Ff("ad_storage");
      return null == a ? !0 : !!a
    },
    ui = function (a, b) {
      Hf("ad_storage") ? ti() ? a() : Nf(a, "ad_storage") : b ? db("TAGGING", 3) : Mf(function () {
        ui(a, !0)
      }, ["ad_storage"])
    },
    wi = function (a) {
      return vi(a).map(function (b) {
        return b.da
      })
    },
    vi = function (a) {
      var b = [];
      if (!cg(E) || !F.cookie) return b;
      var c = fg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
          ld: d.ld
        }, e++) {
        var f = xi(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.ld = g.da;
          var m = g.timestamp,
            n = g.labels,
            p = ra(b, function (q) {
              return function (t) {
                return t.da === q.ld
              }
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = yi(p.labels, n || [])) : b.push({
            version: l,
            da: d.ld,
            timestamp: m,
            labels: n
          })
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp
      });
      return zi(b)
    };

  function yi(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d
  }

  function Ai(a) {
    return a && "string" == typeof a && a.match(qi) ? a : "_gcl"
  }
  var Ci = function () {
      var a = Le(E.location.href),
        b = Je(a, "query", !1, void 0, "gclid"),
        c = Je(a, "query", !1, void 0, "gclsrc"),
        d = Je(a, "query", !1, void 0, "wbraid"),
        e = Je(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Ge(f, "gclid");
        c = c || Ge(f, "gclsrc");
        d = d || Ge(f, "wbraid")
      }
      return Bi(b, c, e, d)
    },
    Bi = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g)
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && ri.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(ri)) switch (b) {
        case void 0:
          f(a,
            "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha")
      }
      c && f(c, "dc");
      return e
    },
    Ei = function (a) {
      var b = Ci();
      ui(function () {
        Di(b, !1, a)
      })
    };

  function Di(a, b, c, d, e) {
    function f(w, y) {
      var x = Fi(w, g);
      x && (og(x, y, l), m = !0)
    }
    c = c || {};
    e = e || [];
    var g = Ai(c.prefix);
    d = d || z();
    var l = yh(c, d, !0);
    l.qb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1E3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".")
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if ((void 0 == ni.enable_gbraid_cookie_write ? 0 : ni.enable_gbraid_cookie_write) && !m && a.gb) {
      var q = a.gb[0],
        t = Fi("gb", g),
        u = !1;
      if (!b)
        for (var r = vi(t), v = 0; v < r.length; v++) r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q))
    }
  }
  var Hi = function (a, b) {
      var c = di(!0);
      ui(function () {
        for (var d = Ai(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== si[f]) {
            var g = Fi(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Gi(l), z()),
                n;
              b: {
                var p = m;
                if (cg(E))
                  for (var q = fg(g, F.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                    if (Gi(q[t]) > p) {
                      n = !0;
                      break b
                    } n = !1
              }
              if (!n) {
                var u = yh(b, m, !0);
                u.qb = "ad_storage";
                og(g, l, u)
              }
            }
          }
        }
        Di(Bi(c.gclid, c.gclsrc), !1, b)
      })
    },
    Fi = function (a, b) {
      var c = si[a];
      if (void 0 !== c) return b + c
    },
    Gi = function (a) {
      return 0 !== Ii(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
        0) : 0
    };

  function xi(a) {
    var b = Ii(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      da: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    }
  }

  function Ii(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ri.test(a[2]) ? [] : a
  }
  var Ji = function (a, b, c, d, e) {
      if (qa(b) && cg(E)) {
        var f = Ai(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Fi(a[m], f);
              if (n) {
                var p = fg(n, F.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1])
              }
            }
            return l
          };
        ui(function () {
          ji(g, b, c, d)
        })
      }
    },
    zi = function (a) {
      return a.filter(function (b) {
        return ri.test(b.da)
      })
    },
    Ki = function (a, b) {
      if (cg(E)) {
        for (var c = Ai(b.prefix), d = {}, e = 0; e < a.length; e++) si[a[e]] && (d[a[e]] = si[a[e]]);
        ui(function () {
          k(d, function (f, g) {
            var l = fg(c + g, F.cookie, void 0, "ad_storage");
            l.sort(function (u,
              r) {
              return Gi(r) - Gi(u)
            });
            if (l.length) {
              var m = l[0],
                n = Gi(m),
                p = 0 !== Ii(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Ii(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Di(q, !0, b, n, p)
            }
          })
        })
      }
    };

  function Li(a, b) {
    for (var c = 0; c < b.length; ++c)
      if (a[b[c]]) return !0;
    return !1
  }
  var Mi = function (a) {
      function b(e, f, g) {
        g && (e[f] = g)
      }
      if (If()) {
        var c = Ci();
        if (Li(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ki(function () {
            return d
          }, 3);
          ki(function () {
            var e = {};
            return e._up = "1", e
          }, 1)
        }
      }
    },
    Ni = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!ti()) return e;
      var f = vi(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m /
            1E3), l.da].concat(l.labels || [], [b]).join("."),
          p = yh(c, m, !0);
        p.qb = "ad_storage";
        og(a, n, p)
      }
      return e
    };

  function Oi(a, b) {
    var c = Ai(b),
      d = Fi(a, c);
    if (!d) return 0;
    for (var e = vi(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f
  }

  function Pi(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b
  }
  var Qi = function (a) {
    var b = Math.max(Oi("aw", a), Pi(ti() ? pi() : {}));
    return Math.max(Oi("gb", a), Pi(ti() ? pi("_gac_gb", !0) : {})) > b
  };
  var Vi = /[A-Z]+/,
    Wi = /\s/,
    Xi = function (a) {
      if (h(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Vi.test(c)) {
            for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
              if (!d[e] || Wi.test(d[e]) && ("AW" !== c || 1 !== e)) return;
            return {
              id: a,
              prefix: c,
              T: c + "-" + d[0],
              I: d
            }
          }
        }
      }
    },
    Zi = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Xi(a[c]);
        d && (b[d.id] = d)
      }
      Yi(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g)
      });
      return e
    };

  function Yi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.I[1] && b.push(d.T)
      } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var aj = function (a, b, c, d) {
      return (2 === $i() || d || "http:" != E.location.protocol ? a : b) + c
    },
    $i = function () {
      var a = ob(),
        b;
      if (1 === a) a: {
        var c = ae;c = c.toLowerCase();
        for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
          var m = g[l].src;
          if (m) {
            m = m.toLowerCase();
            if (0 === m.indexOf(e)) {
              b = 3;
              break a
            }
            1 === f && 0 === m.indexOf(d) && (f = 2)
          }
        }
        b = f
      }
      else b = a;
      return b
    };
  var cj = function (a, b, c) {
      if (E[a.functionName]) return b.pf && G(b.pf), E[a.functionName];
      var d = bj();
      E[a.functionName] = d;
      if (a.Vd)
        for (var e = 0; e < a.Vd.length; e++) E[a.Vd[e]] = E[a.Vd[e]] || bj();
      a.je && void 0 === E[a.je] && (E[a.je] = c);
      nb(aj("https://", "http://", a.wf), b.pf, b.zj);
      return d
    },
    bj = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments)
      };
      return a
    },
    dj = {
      functionName: "_googWcmImpl",
      je: "_googWcmAk",
      wf: "www.gstatic.com/wcm/loader.js"
    },
    ej = {
      functionName: "_gaPhoneImpl",
      je: "ga_wpid",
      wf: "www.gstatic.com/gaphone/loader.js"
    },
    fj = {
      Hh: "",
      Bi: "5"
    },
    gj = {
      functionName: "_googCallTrackingImpl",
      Vd: [ej.functionName, dj.functionName],
      wf: "www.gstatic.com/call-tracking/call-tracking_" + (fj.Hh || fj.Bi) + ".js"
    },
    hj = {},
    ij = function (a, b, c, d) {
      O(22);
      if (c) {
        d = d || {};
        var e = cj(dj, d, a),
          f = {
            ak: a,
            cl: b
          };
        void 0 === d.eb && (f.autoreplace = c);
        e(2, d.eb, f, c, 0, Da(), d.options)
      }
    },
    jj = function (a, b, c, d) {
      O(21);
      if (b && c) {
        d = d || {};
        for (var e = {
            countryNameCode: c,
            destinationNumber: b,
            retrievalTime: Da()
          }, f = 0; f < a.length; f++) {
          var g = a[f];
          hj[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length ? (e.adData = {
              ak: g.I[0],
              cl: g.I[1]
            }, hj[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
              gaWpid: g.T
            }, hj[g.id] = !0))
        }(e.gaData || e.adData) && cj(gj, d)(d.eb, e, d.options)
      }
    },
    kj = function () {
      var a = !1;
      return a
    },
    Aj = function (a, b) {
      if (a)
        if (Fg()) {} else {
          if (h(a)) {
            var c =
              Xi(a);
            if (!c) return;
            a = c
          }
          var d = void 0,
            e = !1,
            f = U(b, R.g.hi);
          if (f && qa(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = Xi(f[g]);
              l && (d.push(l), (a.id === l.id || a.id === a.T && a.T === l.T) && (e = !0))
            }
          }
          if (!d || e) {
            var m = U(b, R.g.mg),
              n;
            if (m) {
              qa(m) ? n = m : n = [m];
              var p = U(b, R.g.kg),
                q = U(b, R.g.lg),
                t = U(b, R.g.ng),
                u = U(b, R.g.gi),
                r = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) jj(d, n[w], u, {
                    eb: r,
                    options: t
                  });
                  else if ("AW" === a.prefix && a.I[1]) kj() ? jj([a], n[w], u || "US", {
                eb: r,
                options: t
              }) : ij(a.I[0], a.I[1], n[w], {
                eb: r,
                options: t
              });
              else if ("UA" === a.prefix)
                if (kj()) jj([a], n[w], u || "US", {
                  eb: r
                });
                else {
                  var y = a.T,
                    x = n[w],
                    A = {
                      eb: r
                    };
                  O(23);
                  if (x) {
                    A = A || {};
                    var B = cj(ej, A, y),
                      D = {};
                    void 0 !== A.eb ? D.receiver = A.eb : D.replace = x;
                    D.ga_wpid = y;
                    D.destination = x;
                    B(2, Da(), D)
                  }
                }
            }
          }
        }
    };
  var Bj = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = N(c.eventMetadata || {});
      this.H = !1
    },
    Cj = function (a, b, c) {
      var d = U(a.h, b);
      void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
    },
    Dj = function (a, b, c) {
      var d = se(a.target.T);
      return d && d.hasOwnProperty(b) ? d[b] : c
    };

  function Ej(a) {
    return {
      getDestinationId: function () {
        return a.target.T
      },
      getEventName: function () {
        return a.eventName
      },
      setEventName: function (b) {
        return void(a.eventName = b)
      },
      getHitData: function (b) {
        return a.m[b]
      },
      setHitData: function (b, c) {
        return void(a.m[b] = c)
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c)
      },
      copyToHitData: function (b, c) {
        Cj(a, b, c)
      },
      getMetadata: function (b) {
        return a.metadata[b]
      },
      setMetadata: function (b, c) {
        return void(a.metadata[b] = c)
      },
      abort: function () {
        return void(a.H = !0)
      },
      getProcessedEvent: function () {
        return a
      },
      getFromEventContext: function (b) {
        return U(a.h, b)
      }
    }
  };
  var Xj = ["L", "S", "Y"],
    Yj = ["S", "E"],
    Zj = {
      sampleRate: "0.005000",
      Eh: "",
      Dh: Number("5")
    },
    ak = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="),
    bk;
  if (!(bk = ak)) {
    var ck = Math.random(),
      dk = Zj.sampleRate;
    bk = ck < dk
  }
  var ek = bk,
    fk = "https://www.googletagmanager.com/a?id=" + Gg.M + "&cv=1",
    gk = {
      label: Gg.M + " Container",
      children: [{
        label: "Initialization",
        children: []
      }]
    };

  function hk() {
    return [fk, "&v=3&t=t", "&pid=" + sa(), "&rv=" + Ld.Sd].join("")
  }
  var ik = hk();

  function jk() {
    ik = hk()
  }
  var kk = {},
    lk = "",
    mk = "",
    nk = "",
    ok = "",
    pk = [],
    qk = "",
    rk = {},
    sk = !1,
    tk = {},
    uk = {},
    vk = "",
    wk = void 0,
    xk = {},
    yk = {},
    zk = void 0,
    Ak = 5;
  0 < Zj.Dh && (Ak = Zj.Dh);
  var Bk = function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        oj: function () {
          return c < a ? !1 : z() - d[c % a] < b
        },
        Lj: function () {
          var f = c++ % a;
          d[f] = z()
        }
      }
    }(Ak, 1E3),
    Ck = 1E3;

  function Dk(a, b) {
    var c = wk;
    if (void 0 === c) return "";
    var d = fb("GTM"),
      e = fb("TAGGING"),
      f = ik,
      g = kk[c] ? "" : "&es=1",
      l = xk[c],
      m = Ek(c),
      n = Fk(),
      p = lk,
      q = mk,
      t = vk,
      u = Gk(a),
      r = nk,
      v = ok,
      w = Hk(a, b),
      y;
    return [f, g, l, m, d ? "&u=" + d : "", e ? "&ut=" + e : "", n, p, q, t, u, r, v, w, y, qk ? "&dl=" + encodeURIComponent(qk) : "", 0 < pk.length ? "&tdp=" + pk.join(".") : "", "&z=0"].join("")
  }

  function Jk(a) {
    zk && (E.clearTimeout(zk), zk = void 0);
    if (void 0 !== wk && (!kk[wk] || lk || mk || Kk(a)))
      if (void 0 === Lk[wk] && (yk[wk] || Bk.oj() || 0 >= Ck--)) O(1), yk[wk] = !0;
      else {
        void 0 === Lk[wk] && Bk.Lj();
        var b = Dk(!0, a);
        a ? xb(b) : qb(b);
        if (ok || qk && 0 < pk.length) {
          var c = b.replace("/a?", "/td?");
          qb(c)
        }
        kk[wk] = !0;
        qk = ok = nk = vk = mk = lk = "";
        pk = []
      }
  }

  function Mk() {
    zk || (zk = E.setTimeout(Jk, 500))
  }

  function Nk(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
  }

  function Ok() {
    2022 <= Dk().length && Jk()
  }

  function Fk() {
    return "&tc=" + ec.filter(function (a) {
      return a
    }).length
  }
  var Qk = function (a, b) {
      if (ek && !yk[a] && wk !== a) {
        Jk();
        wk = a;
        nk = lk = "";
        xk[a] = "&e=" + Nk(b) + "&eid=" + a;
        Mk();
      }
    },
    Rk = function (a, b, c, d) {
      if (ek && b) {
        var e, f = String(b[Eb.xb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!yk[a]) {
          a !== wk && (Jk(), wk = a);
          lk = lk ? lk + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l) throw Error("Error: No function name given for function call.");
          var m = (gc[l] ? "1" : "2") + e;
          nk = nk ? nk + "." + m : "&ti=" + m;
          Mk();
          Ok()
        }
      }
    };

  function Gk(a) {}

  function Ek(a) {}
  var Yk = function (a, b, c) {
      if (ek && void 0 !== a && !yk[a]) {
        a !== wk && (Jk(), wk = a);
        var d = c + b;
        mk = mk ? mk + "." + d : "&epr=" + d;
        Mk();
        Ok()
      }
    },
    Zk = function (a, b, c) {},
    $k = ["S", "P", "C", "Z"],
    al = {},
    bl = (al[1] = 5, al[2] = 5, al[3] = 5, al),
    cl = {},
    Lk = {},
    Ik = void 0,
    dl = function (a, b) {
      var c = !1;
      if (!ek || Lk[a] || 0 === bl[b]) return !1;
      --bl[b];
      Lk[a] = b;
      c = !0;
      return c
    },
    el = function (a, b, c) {
      if (!ek || !Lk[a]) return;
      var d = cl[a];
      d || (cl[a] = d = {});
      d[b] = c;
    };

  function Hk(a, b) {
    var c;
    if (!wk || !Kk(b)) return "";
    var d = cl[wk];
    c = "&al=" + $k.filter(function (e) {
      return void 0 !== d[e]
    }).map(function (e) {
      return e + Math.floor(d[e])
    }).join(".") + (".Z" + Lk[wk]);
    a && delete cl[wk];
    return c
  }

  function Kk(a) {
    var b = !1;
    if (!wk || !cl[wk]) return !1;
    b = a || "C" in cl[wk];
    return b
  }
  var fl = function () {
    if (ek) {
      E.setInterval(jk, 864E5);
      rb(E, "pagehide", function () {
        wk && Lk[wk] && Jk(!0);
        for (var a in cl) cl.hasOwnProperty(a) && (wk = Number(a), Jk(!0));
      });
    }
  };
  var gl = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.m = e;
      this.D = f;
      this.P = g;
      this.B = l;
      this.eventMetadata = m;
      this.O = n;
      this.N = p;
      this.C = q
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.m[b]) return a.m[b];
      ek && hl(a, a.D[b], a.P[b]) && (O(71), O(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
    },
    il = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.m);
      b(a.D);
      if (ek)
        for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
          var f = d[e];
          if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
            O(71);
            O(80);
            break
          }
        }
      return Object.keys(c)
    },
    jl = function (a, b, c) {
      function d(m) {
        J(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p
        })
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
      c && 2 !== c || d(a.h[b]);
      if (ek) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || hl(a, e, l)) O(71), O(81);
        f = g;
        e = l
      }
      return f ? e : void 0
    },
    kl = function (a) {
      var b = [R.g.zc, R.g.ud, R.g.vd, R.g.wd, R.g.xd, R.g.yd, R.g.zd],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d
        };
      if (e(a.h) || e(a.K) || e(a.m)) return c;
      e(a.D);
      if (ek) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.P);
        hl(a, c, f) && (O(71), O(82));
        c = f;
        d = g
      }
      if (d) return c;
      e(a.B);
      return c
    },
    hl = function (a, b, c) {
      if (!ek) return !1;
      try {
        if (b === c) return !1;
        var d = Bb(b);
        if (d !== Bb(c) || !(J(b) && J(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++)
            if (hl(a,
                b[e], c[e])) return !0
        } else {
          for (var f in c)
            if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || hl(a, b[g], c[g])) return !0
        }
      } catch (l) {
        O(72)
      }
      return !1
    },
    ll = function (a, b) {
      this.ni = a;
      this.oi = b;
      this.D = {};
      this.Eg = {};
      this.h = {};
      this.K = {};
      this.m = {};
      this.Mc = {};
      this.B = {};
      this.jc = function () {};
      this.Ga = function () {};
      this.P = !1
    },
    ml = function (a, b) {
      a.D = b;
      return a
    },
    nl = function (a, b) {
      a.Eg = b;
      return a
    },
    ol = function (a, b) {
      a.h = b;
      return a
    },
    pl = function (a, b) {
      a.K = b;
      return a
    },
    ql = function (a, b) {
      a.m = b;
      return a
    },
    rl = function (a,
      b) {
      a.Mc = b;
      return a
    },
    sl = function (a, b) {
      a.B = b || {};
      return a
    },
    tl = function (a, b) {
      a.jc = b;
      return a
    },
    ul = function (a, b) {
      a.Ga = b;
      return a
    },
    vl = function (a) {
      a.P = !0;
      return a
    },
    wl = function (a) {
      return new gl(a.ni, a.oi, a.D, a.Eg, a.h, a.K, a.m, a.Mc, a.B, a.jc, a.Ga, a.P)
    };
  Wa();
  Ug() || Va("iPod");
  Va("iPad");
  !Va("Android") || Xa() || Wa() || Va("Opera") || Va("Silk");
  Xa();
  !Va("Safari") || Xa() || Va("Coast") || Va("Opera") || Va("Edge") || Va("Edg/") || Va("OPR") || Wa() || Va("Silk") || Va("Android") || Vg();
  var Al = {},
    Bl = null,
    Cl = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Bl) {
        Bl = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(l[m].split(""));
          Al[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Bl[q] && (Bl[q] = p)
          }
        }
      }
      for (var t = Al[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = t[y >> 2],
          D = t[(y & 3) << 4 | x >> 4],
          H = t[(x & 15) << 2 | A >> 6],
          I = t[A & 63];
        u[w++] = "" + B + D + H + I
      }
      var C = 0,
        K = r;
      switch (b.length - v) {
        case 2:
          C = b[v + 1], K = t[(C & 15) << 2] || r;
        case 1:
          var M = b[v];
          u[w] = "" + t[M >> 2] + t[(M & 3) << 4 | C >> 4] + K + r
      }
      return u.join("")
    };
  var Dl = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

  function El() {
    var a;
    return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
  }

  function Fl() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d
    } else b = null;
    return b
  }

  function Gl() {
    var a, b;
    return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
  }

  function Hl() {
    var a, b;
    return "function" === typeof (null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
  }

  function Il() {
    if (!Hl()) return null;
    var a = El();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData.getHighEntropyValues(Dl).then(function (c) {
      null != a.uach || (a.uach = c);
      return c
    });
    return a.uach_promise = b
  };

  function Ol() {
    return "attribution-reporting"
  }

  function Pl(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
  };
  var Ql = !1;

  function Rl() {
    if (Pl("join-ad-interest-group") && oa(gb.joinAdInterestGroup)) return !0;
    Ql || (bh('A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Ql = !0);
    return Pl("join-ad-interest-group") && oa(gb.joinAdInterestGroup)
  }

  function Sl(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > z() - d) {
        db("TAGGING", 9);
        return
      }
    } else try {
      if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        db("TAGGING", 10);
        return
      }
    } catch (e) {}
    pb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: z()
    }, c)
  };
  var Tl = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    Ul = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Vl = /^\d+\.fls\.doubleclick\.net$/,
    Wl = /;gac=([^;?]+)/,
    Xl = /;gacgb=([^;?]+)/,
    Yl = /;gclaw=([^;?]+)/,
    Zl = /;gclgb=([^;?]+)/;

  function $l(a, b) {
    if (Vl.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(Tl) ? decodeURIComponent(c[1]) : ""
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
      d.push(e + ":" + f.join(","))
    }
    return 0 < d.length ? d.join(";") : ""
  }
  var am = function (a, b, c) {
    var d = ti() ? pi("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Ni("_gac_gb_" + g, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m
      });
      e.push(g + ":" + l.join(","))
    }
    return {
      Zi: f ? e.join(";") : "",
      Yi: $l(d, Xl)
    }
  };

  function bm(a, b, c) {
    if (Vl.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Ul)) return [{
        da: d[1]
      }]
    } else return vi((a || "_gcl") + b);
    return []
  }
  var cm = function (a) {
      return bm(a, "_aw", Yl).map(function (b) {
        return b.da
      }).join(".")
    },
    dm = function (a) {
      return bm(a, "_gb", Zl).map(function (b) {
        return b.da
      }).join(".")
    },
    em = function (a, b) {
      var c = Ni((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d
      }) ? "" : c.join(".")
    };
  var fm = function () {
    if (oa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
          }
        })
      } catch (b) {}
      return a
    }
  };
  var Pm = function (a, b) {
    var c, d = E.GooglebQhCsO;
    d || (d = {}, E.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0
  };
  var Qm = function (a, b) {
    var c = Zg(a, "fmt");
    if (b) {
      var d = Zg(a, "random"),
        e = Zg(a, "label") || "";
      if (!d) return !1;
      var f = Cl(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
      if (!Pm(f, b)) return !1
    }
    c && 4 != c && (a = ah(a, "rfmt", c));
    var g = ah(a, "fmt", 4);
    nb(g, function () {
      E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
    }, void 0, void 0, F.getElementsByTagName("script")[0].parentElement || void 0);
    return !0
  };
  var fn = function () {
      this.h = {}
    },
    gn = function (a, b, c) {
      null != c && (a.h[b] = c)
    },
    hn = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
      }).join("&")
    },
    kn = function (a, b, c, d, e) {};

  function mn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Le("" + c + b).href
    }
  }

  function nn(a, b) {
    return Vd || Xd ? mn(a, b) : void 0
  }

  function on() {
    return !!Ld.Td && "SGTM_TOKEN" !== Ld.Td.split("@@").join("")
  };
  var qn = function (a, b, c, d) {
      if (!pn() && !Ng(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Ld.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = on();
        l && (f += "&sign=" + Ld.Td);
        var m = nn(b, e + f);
        if (!m) {
          var n = Ld.qd + e;
          l && hb && g && (n = hb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = aj("https://", "http://", n + f)
        }
        Lg().container[a] = {
          state: 1,
          context: d
        };
        nb(m)
      }
    },
    rn = function (a, b, c) {
      var d;
      if (d = !pn()) {
        var e = Lg().destination[a];
        d = !(e && e.state)
      }
      if (d)
        if (Og()) Lg().destination[a] = {
          state: 0,
          transportUrl: b,
          context: c
        }, O(91);
        else {
          var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ld.fa + "&cx=c";
          on() && (f += "&sign=" + Ld.Td);
          var g = nn(b, f);
          g || (g = aj("https://", "http://", Ld.qd + f));
          Lg().destination[a] = {
            state: 1,
            context: c
          };
          nb(g)
        }
    };

  function pn() {
    if (Fg()) {
      return !0
    }
    return !1
  };
  var sn = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    tn = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    un = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    vn = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var wn = function () {
      var a = !1;
      a = !0;
      return a
    },
    yn = function (a) {
      var b = le("gtm.allowlist") || le("gtm.whitelist");
      b && O(9);
      wn() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Ia(Ba(b), tn),
        d = le("gtm.blocklist") ||
        le("gtm.blacklist");
      d || (d = le("tagTypeBlacklist")) && O(3);
      d ? O(8) : d = [];
      xn() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && O(2);
      var e = d && Ia(Ba(d), un),
        f = {};
      return function (g) {
        var l = g && g[Eb.xb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = ee[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if (p = n) a: {
            if (0 > c.indexOf(l))
              if (m && 0 < m.length)
                for (var q = 0; q < m.length; q++) {
                  if (0 > c.indexOf(m[q])) {
                    O(11);
                    p = !1;
                    break a
                  }
                } else {
                  p = !1;
                  break a
                }
            p = !0
          }
          n = p
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = ua(e, m || []);
            r && O(10);
            t = r
          }
        }
        var v = !n || t;
        v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ua(e, vn));
        return f[l] = v
      }
    },
    xn = function () {
      return sn.test(E.location && E.location.hostname)
    };
  var zn = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    An = {},
    Bn = Object.freeze((An[R.g.xa] = !0, An)),
    Cn = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
    En = function (a, b, c) {
      if (ek && "config" === a && !(1 < Xi(b).I.length)) {
        var d, e = ib("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = N(c.D);
        N(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = Dn(d[l], f);
          m.length && (Cn && console.log(m), g.push(l))
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            ok = ok ? ok + "!" + n : "&tdc=" + n
          }
          db("TAGGING",
            zn[F.readyState] || 14)
        }
        d[b] = f
      }
    };

  function Fn(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c
  }

  function Dn(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var u = t[q];
        return void 0 === u ? Bn[q] : u
      },
      f;
    for (f in Fn(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Bb(l) || "array" === Bb(l),
        p = "object" === Bb(m) || "array" === Bb(m);
      if (n && p) Dn(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0
    }
    return Object.keys(c)
  };
  var Gn = !1,
    Hn = 0,
    In = [];

  function Jn(a) {
    if (!Gn) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Gn = !0;
        for (var e = 0; e < In.length; e++) G(In[e])
      }
      In.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0
      }
    }
  }

  function Kn() {
    if (!Gn && 140 > Hn) {
      Hn++;
      try {
        F.documentElement.doScroll("left"), Jn()
      } catch (a) {
        E.setTimeout(Kn, 50)
      }
    }
  }
  var Ln = function (a) {
    Gn ? a() : In.push(a)
  };
  var Mn = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Gg.M
    }
  };
  var On = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = {
        tags: []
      };
      this.P = !1;
      this.m = this.B = 0;
      Nn(this, a, b)
    },
    Pn = function (a, b, c, d) {
      if (Pd.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      J(d) && (e = N(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1
    },
    Qn = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && (e.status = c, e.executionTime = d)
    },
    Rn = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0
      }
    },
    Nn = function (a, b, c) {
      void 0 !== b && Sn(a, b);
      c && E.setTimeout(function () {
        return Rn(a)
      }, Number(c))
    },
    Sn = function (a,
      b) {
      var c = Fa(function () {
        return G(function () {
          b(Gg.M, a.K)
        })
      });
      a.h ? c() : a.D.push(c)
    },
    Tn = function (a) {
      a.B++;
      return Fa(function () {
        a.m++;
        a.P && a.m >= a.B && Rn(a)
      })
    },
    Un = function (a) {
      a.P = !0;
      a.m >= a.B && Rn(a)
    };
  var Vn = function () {
      function a(d) {
        return !pa(d) || 0 > d ? 0 : d
      }
      if (!Md._li && E.performance && E.performance.timing) {
        var b = E.performance.timing.navigationStart,
          c = pa(me.get("gtm.start")) ? me.get("gtm.start") : 0;
        Md._li = {
          cst: a(c - b),
          cbt: a(ce - b)
        }
      }
    },
    Wn = function (a) {
      E.performance && E.performance.mark(Gg.M + "_" + a + "_start")
    },
    Xn = function (a) {
      if (E.performance) {
        var b = Gg.M + "_" + a + "_start",
          c = Gg.M + "_" + a + "_duration";
        E.performance.measure(c, b);
        var d = E.performance.getEntriesByName(c)[0];
        E.performance.clearMarks(b);
        E.performance.clearMeasures(c);
        var e = Md._p || {};
        void 0 === e[a] && (e[a] = d.duration, Md._p = e);
        return d.duration
      }
    },
    Yn = function () {
      var a = zb();
      if (void 0 !== a) {
        var b = Md._p || {};
        b.PAGEVIEW = a;
        Md._p = b
      }
    };
  var Zn = {},
    $n = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
    },
    ao = !1;
  var bo = function (a) {
      E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
      var b = E.GoogleAnalyticsObject;
      if (E[b]) E.hasOwnProperty(b) || O(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments)
        };
        c.l = Number(Da());
        E[b] = c
      }
      Vn();
      return E[b]
    },
    co = function (a) {
      if (If()) {
        var b = $n();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0)
      }
    };

  function eo() {
    return E.GoogleAnalyticsObject || "ga"
  }
  var fo = function (a) {},
    go = function (a, b) {
      return function () {
        var c = $n(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload",
              g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
          })
        }
      }
    };

  function lo(a, b, c, d) {
    var e = ec[a],
      f = mo(a, b, c, d);
    if (!f) return null;
    var g = nc(e[Eb.Qg], c, []);
    if (g && g.length) {
      var l = g[0];
      f = lo(l.index, {
        O: f,
        N: 1 === l.eh ? b.terminate : f,
        terminate: b.terminate
      }, c, d)
    }
    return f
  }

  function mo(a, b, c, d) {
    function e() {
      if (f[Eb.wi]) l();
      else {
        var w = oc(f, c, []),
          y = w[Eb.Ih];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!Vf(y[x])) {
              l();
              return
            } var A = Pn(c.zb, String(f[Eb.xb]), Number(f[Eb.Rg]), w[Eb.xi]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Rk(c.id, ec[a], "5", I);
            Qn(c.zb, A, "success", I);
            g()
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Rk(c.id, ec[a], "6", I);
            Qn(c.zb, A, "failure", I);
            l()
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Rk(c.id, f, "1");
        var D = function () {
          var I = z() - H;
          Rk(c.id, f, "7", I);
          Qn(c.zb, A, "exception", I);
          B || (B = !0, l())
        };
        var H = z();
        try {
          mc(w, {
            event: c,
            index: a,
            type: 1
          })
        } catch (I) {
          D(I)
        }
      }
    }
    var f = ec[a],
      g = b.O,
      l = b.N,
      m = b.terminate;
    if (c.ef(f)) return null;
    var n = nc(f[Eb.Sg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = lo(p.index, {
          O: g,
          N: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.eh ? m : q
    }
    if (f[Eb.Mg] || f[Eb.zi]) {
      var t = f[Eb.Mg] ? fc : c.Wj,
        u = g,
        r = l;
      if (!t[a]) {
        e = Fa(e);
        var v = no(a, t, e);
        g = v.O;
        l = v.N
      }
      return function () {
        t[a](u, r)
      }
    }
    return e
  }

  function no(a, b, c) {
    var d = [],
      e = [];
    b[a] = oo(d, e, c);
    return {
      O: function () {
        b[a] = po;
        for (var f = 0; f < d.length; f++) d[f]()
      },
      N: function () {
        b[a] = qo;
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }

  function oo(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function po(a) {
    a()
  }

  function qo(a, b) {
    b()
  };
  var so = function (a, b) {
      return 1 === arguments.length ? ro("config", a) : ro("config", a, b)
    },
    to = function (a, b, c) {
      c = c || {};
      c[R.g.wb] = a;
      return ro("event", b, c)
    };

  function ro(a) {
    return arguments
  }
  var uo = function () {
    this.h = [];
    this.m = []
  };
  uo.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++) try {
      this.m[f](e)
    } catch (g) {}
  };
  uo.prototype.listen = function (a) {
    this.m.push(a)
  };
  uo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c)
    }
    return a
  };
  uo.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e)
    }
    this.h = c;
    return b
  };
  var wo = function (a, b, c) {
      vo().enqueue(a, b, c)
    },
    yo = function () {
      var a = xo;
      vo().listen(a)
    };

  function vo() {
    var a = Md.mb;
    a || (a = new uo, Md.mb = a);
    return a
  }
  var Go = function (a) {
      var b = Md.zones;
      return b ? b.getIsAllowedFn(Ig(), a) : function () {
        return !0
      }
    },
    Ho = function (a) {
      var b = Md.zones;
      return b ? b.isActive(Ig(), a) : !0
    };
  var Ko = function (a, b) {
    for (var c = [], d = 0; d < ec.length; d++)
      if (a[d]) {
        var e = ec[d];
        var f = Tn(b.zb);
        try {
          var g = lo(d, {
            O: f,
            N: f,
            terminate: f
          }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = gc[p];
            m.call(l, {
              Ah: n,
              rh: q ? q.priorityOverride || 0 : 0,
              execute: g
            })
          } else Io(d, b), f()
        } catch (u) {
          f()
        }
      } c.sort(Jo);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length
  };

  function Jo(a, b) {
    var c, d = b.rh,
      e = a.rh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Ah,
        l = b.Ah;
      f = g > l ? 1 : g < l ? -1 : 0
    }
    return f
  }

  function Io(a, b) {
    if (ek) {
      var c = function (d) {
        var e = b.ef(ec[d]) ? "3" : "4",
          f = nc(ec[d][Eb.Qg], b, []);
        f && f.length && c(f[0].index);
        Rk(b.id, ec[d], e);
        var g = nc(ec[d][Eb.Sg], b, []);
        g && g.length && c(g[0].index)
      };
      c(a)
    }
  }
  var No = !1,
    Lo;
  var So = function (a) {
    var b = z(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (No) return !1;
      No = !0;
    }
    var l, m = !1;
    if (Ho(c)) l = Go(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
      m = !0;
      l = Go(Number.MAX_SAFE_INTEGER)
    }
    Qk(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var t = {
        id: c,
        priorityId: d,
        name: e,
        ef: yn(l),
        Wj: [],
        lh: function () {
          O(6)
        },
        Wg: Oo(),
        Xg: Po(c),
        zb: new On(q, p)
      },
      u = sc(t);
    m && (u = Qo(u));
    var r =
      Ko(u, t),
      v = !1;
    Un(t.zb);
    "gtm.js" !== e && "gtm.sync" !== e || fo(Gg.M);
    return Ro(u, r) || v
  };

  function Po(a) {
    return function (b) {
      ek && (Db(b) || Zk(a, "input", b))
    }
  }

  function Oo() {
    var a = {};
    a.event = pe("event", 1);
    a.ecommerce = pe("ecommerce", 1);
    a.gtm = pe("gtm");
    a.eventModel = pe("eventModel");
    return a
  }

  function Qo(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(ec[c][Eb.xb]),
          e;
        if (!(e = Od[d] || void 0 !== ec[c][Eb.Ai])) {
          var f = ec[c]["function"];
          if (!f) throw "Error: No function name given for function call.";
          var g = gc[f];
          e = g ? g.isInfrastructure || !1 : !1
        }
        if (e || 0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d) b[c] = !0
      } return b
  }

  function Ro(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ec[c] && !Pd[String(ec[c][Eb.xb])]) return !0;
    return !1
  }
  var Uo = function (a, b, c, d) {
      To.push("event", [b, a], c, d)
    },
    Vo = function (a, b, c, d) {
      To.push("get", [a, b], c, d)
    },
    up = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.K = {};
      this.P = null;
      this.B = {};
      this.m = !1
    },
    vp = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d
    },
    wp = function () {
      this.m = {};
      this.B = {};
      this.h = []
    },
    xp = function (a, b) {
      var c = Xi(b);
      return a.m[c.T] = a.m[c.T] || new up
    },
    yp = function (a, b, c, d) {
      if (d.W) {
        var e = xp(a, d.W),
          f = e.P;
        if (f) {
          var g = N(c),
            l = N(e.D[d.W]),
            m = N(e.B),
            n = N(e.h),
            p = N(a.B),
            q = {};
          if (ek) try {
            q = N(ie)
          } catch (v) {
            O(72)
          }
          var t = Xi(d.W).prefix,
            u = function (v) {
              Yk(d.messageContext.eventId, t, v);
              var w = g[R.g.Mb];
              w && G(w)
            },
            r = wl(ul(tl(sl(ql(pl(rl(ol(nl(ml(new ll(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function () {
              if (u) {
                var v = u;
                u = void 0;
                v("2")
              }
            }), function () {
              if (u) {
                var v = u;
                u = void 0;
                v("3")
              }
            }));
          try {
            Yk(d.messageContext.eventId, t, "1"), En(d.type, d.W, r), f(d.W, b, d.m, r)
          } catch (v) {
            Yk(d.messageContext.eventId, t, "4")
          }
        }
      }
    };
  wp.prototype.register = function (a, b, c) {
    var d = xp(this, a);
    3 !== d.status && (d.P = b, d.status = 3, c && (N(d.h, c), d.h = c), this.flush())
  };
  wp.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Xi(c)) return;
      if (c) {
        var e = Xi(c);
        e && 1 === xp(this, c).status && (xp(this, c).status = 2, this.push("require", [{}], e.T, {}))
      }
      xp(this, c).m && (d.deferrable = !1)
    }
    this.h.push(new vp(a, c, b, d));
    d.deferrable || this.flush()
  };
  wp.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      var f = this.h[0];
      if (f.messageContext.deferrable) !f.W || xp(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = xp(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return
            }
            break;
          case "set":
            k(f.h[0], function (t, u) {
              N(Ja(t, u), b.B)
            });
            break;
          case "config":
            g = xp(this, f.W);
            e.fb = {};
            k(f.h[0], function (t) {
              return function (u, r) {
                N(Ja(u, r), t.fb)
              }
            }(e));
            var l = !!e.fb[R.g.Lc];
            delete e.fb[R.g.Lc];
            var m = Xi(f.W),
              n = m.T === m.id;
            l || (n ? g.B = {} : g.D[f.W] = {});
            g.m && l || yp(this, R.g.va, e.fb, f);
            g.m = !0;
            n ? N(e.fb, g.B) : (N(e.fb, g.D[f.W]), O(70));
            d = !0;
            break;
          case "event":
            g = xp(this, f.W);
            e.kd = {};
            k(f.h[0], function (t) {
              return function (u, r) {
                N(Ja(u, r), t.kd)
              }
            }(e));
            yp(this, f.h[1], e.kd, f);
            break;
          case "get":
            g = xp(this, f.W);
            var p = {},
              q = (p[R.g.Qa] = f.h[0], p[R.g.Za] = f.h[1], p);
            yp(this, R.g.Ca, q, f)
        }
        this.h.shift();
        zp(this, f)
      }
      e = {
        fb: e.fb,
        kd: e.kd
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush()
  };
  var zp = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = xp(a, b.W).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.K)
                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++) g[l]()
            }
    },
    Ap = function (a, b) {
      var c = To,
        d = N(b);
      N(xp(c, a).h, d);
      xp(c, a).h = d
    },
    To = new wp;
  var Bp = {},
    Cp = {},
    Dp = function (a) {
      for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
          pd: d.pd,
          md: d.md
        }, e++) {
        var f = a[e];
        if (0 <= f.indexOf("-")) {
          if (d.pd = Xi(f), d.pd) {
            var g = Jg();
            ra(g, function (q) {
              return function (t) {
                return q.pd.T === t
              }
            }(d)) ? b.push(f) : c.push(f)
          }
        } else {
          var l = Bp[f] || [];
          d.md = {};
          l.forEach(function (q) {
            return function (t) {
              return q.md[t] = !0
            }
          }(d));
          for (var m = Ig(), n = 0; n < m.length; n++)
            if (d.md[m[n]]) {
              b = b.concat(Jg());
              break
            } var p = Cp[f] || [];
          p.length && (b = b.concat(p))
        }
      }
      return {
        wj: b,
        yj: c
      }
    },
    Ep = function (a) {
      k(Bp, function (b, c) {
        var d =
          c.indexOf(a);
        0 <= d && c.splice(d, 1)
      })
    },
    Fp = function (a) {
      k(Cp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1)
      })
    };
  var Gp = "HA GF G UA AW DC MC".split(" "),
    Hp = !1,
    Ip = !1;

  function Jp(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: fe()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    }
  }
  var Kp = {
      config: function (a, b) {
        var c = Jp(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !J(a[2]) || 3 < a.length) return;
            d = a[2]
          }
          var e = Xi(a[1]);
          if (e) {
            Qk(c.eventId, "gtag.config");
            var f = e.T,
              g = e.id !== f;
            if (g ? -1 === Jg().indexOf(f) : -1 === Ig().indexOf(f)) {
              var l = d[R.g.na] || To.B[R.g.na];
              g ? rn(f, l, {
                source: 2,
                fromContainerExecution: b.fromContainerExecution
              }) : qn(f, l, !0, {
                source: 2,
                fromContainerExecution: b.fromContainerExecution
              })
            } else {
              if (Sd && !g && !d[R.g.Lc]) {
                var m = Ip;
                Ip = !0;
                if (m) return
              }
              Hp || O(43);
              if (!b.noTargetGroup)
                if (g) {
                  Fp(e.id);
                  var n = e.id,
                    p = d[R.g.Hd] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var t = Cp[p[q]] || [];
                    Cp[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n)
                  }
                } else {
                  Ep(e.id);
                  var u = e.id,
                    r = d[R.g.Hd] || "default";
                  r = r.toString().split(",");
                  for (var v = 0; v < r.length; v++) {
                    var w = Bp[r[v]] || [];
                    Bp[r[v]] = w;
                    0 > w.indexOf(u) && w.push(u)
                  }
                } delete d[R.g.Hd];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[R.g.Mb];
              for (var x = g ? [e.id] : Jg(), A = 0; A < x.length; A++) {
                var B =
                  N(b);
                To.push("config", [d], x[A], B)
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = Jp(a, b),
            d = a[1];
          "default" === d ? Sf(a[2]) : "update" === d && Uf(a[2], c)
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if (!J(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2]
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = N(e), e[R.g.Mb] && (g.eventCallback = e[R.g.Mb]), e[R.g.Cd] && (g.eventTimeout = e[R.g.Cd]));
          var l = Jp(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] =
            n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            t = q && q[R.g.wb];
          void 0 === t && (t = le(R.g.wb, 2), void 0 === t && (t = "default"));
          if (h(t) || qa(t)) {
            var u = t.toString().replace(/\s+/g, "").split(","),
              r = Dp(u),
              v = r.wj,
              w = r.yj;
            if (w.length)
              for (var y = q && q[R.g.na] || To.B[R.g.na], x = 0; x < w.length; x++) {
                var A = Xi(w[x]);
                A && rn(A.T, y, {
                  source: 3,
                  fromContainerExecution: b.fromContainerExecution
                })
              }
            p = Zi(v)
          } else p = void 0;
          var B = p;
          if (B) {
            Qk(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var I = B[H],
                C = N(b);
              if (-1 !== Gp.indexOf(I.prefix)) {
                var K =
                  N(d),
                  M = C.eventMetadata || {};
                M.hasOwnProperty("is_external_event") || (M.is_external_event = !C.fromContainerExecution);
                C.eventMetadata = M;
                delete K[R.g.Mb];
                Uo(c, K, I.id, C)
              }
              D.push(I.id)
            }
            g.eventModel = g.eventModel || {};
            0 < B.length ? g.eventModel[R.g.wb] = D.join() : delete g.eventModel[R.g.wb];
            Hp || O(43);
            return b.noGtmEvent ? void 0 : g
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
          var c = Xi(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Hp || O(43);
            var f = To.B[R.g.na];
            if (!ra(Jg(), function (l) {
                return c.T === l
              })) rn(c.T,
              f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution
              });
            else if (-1 !== Gp.indexOf(c.prefix)) {
              Jp(a, b);
              var g = {};
              Of(N((g[R.g.Qa] = d, g[R.g.Za] = e, g)));
              Vo(d, function (l) {
                G(function () {
                  return e(l)
                })
              }, c.id, b)
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Hp = !0;
          var c = Jp(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && J(a[1]) ? c = N(a[1]) : 3 == a.length && h(a[1]) &&
          (c = {}, J(a[2]) || qa(a[2]) ? c[a[1]] = N(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Jp(a, b),
            e = d.eventId,
            f = d.priorityId;
          N(c);
          var g = N(c);
          To.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Wc(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c
        }
      }
    },
    Lp = {
      policy: !0
    };
  var Mp = function (a) {
      var b = E[Ld.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break
          } c && (b.end(), b.end = null)
      }
    },
    Np = function (a) {
      var b = E[Ld.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0)
    };
  var Op = !1,
    Pp = [];

  function Qp() {
    if (!Op) {
      Op = !0;
      for (var a = 0; a < Pp.length; a++) G(Pp[a])
    }
  }
  var Rp = function (a) {
    Op ? G(a) : Pp.push(a)
  };
  var hq = function (a) {
    if (gq(a)) return a;
    this.h = a
  };
  hq.prototype.getUntrustedMessageValue = function () {
    return this.h
  };
  var gq = function (a) {
    return !a || "object" !== Bb(a) || J(a) ? !1 : "getUntrustedMessageValue" in a
  };
  hq.prototype.getUntrustedMessageValue = hq.prototype.getUntrustedMessageValue;
  var iq = 0,
    jq = {},
    kq = [],
    lq = [],
    mq = !1,
    nq = !1;

  function oq(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  var pq = function (a) {
      return E[Ld.fa].push(a)
    },
    qq = function (a, b) {
      var c = Md[Ld.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b && (g = E.setTimeout(function () {
        f || (f = !0, a());
        g = void 0
      }, b));
      return function () {
        ++e === d && (g && (E.clearTimeout(g), g = void 0), f || (a(), f = !0))
      }
    };

  function rq(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && oe(e), oe(e, f))
    });
    be || (be = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = fe(), a["gtm.uniqueEventId"] = d, oe("gtm.uniqueEventId", d));
    return So(a)
  }

  function sq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
    }
    return !1
  }

  function tq() {
    var a;
    if (lq.length) a = lq.shift();
    else if (kq.length) a = kq.shift();
    else return;
    var b;
    var c = a;
    if (mq || !sq(c.message)) b = c;
    else {
      mq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = fe());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        g = {},
        l = {
          message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
          messageContext: {
            eventId: d - 1
          }
        };
      kq.unshift(l, c);
      if (ek && Gg.M) {
        var m;
        if (Gg.Kg) {
          var n = Gg.M,
            p = Lg().destination[n];
          m = p && p.context
        } else {
          var q = Gg.M,
            t = Lg().container[q];
          m = t && t.context
        }
        var u = m,
          r, v = Le(E.location.href);
        r = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          y = u && u.source,
          x = Gg.M,
          A = Gg.Hb,
          B = Gg.Kg;
        qk || (qk = r);
        pk.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
      }
      b = f
    }
    return b
  }

  function uq() {
    for (var a = !1, b; !nq && (b = tq());) {
      nq = !0;
      delete ie.eventModel;
      ke();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) nq = !1;
      else {
        if (e.fromContainerExecution)
          for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
            var l = f[g],
              m = le(l, 1);
            if (qa(m) || J(m)) m = N(m);
            je[l] = m
          }
        try {
          if (oa(d)) try {
            d.call(me)
          } catch (A) {} else if (qa(d)) {
            var n =
              d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                u = le(p.join("."), 2);
              if (null != u) try {
                u[q].apply(u, t)
              } catch (A) {}
            }
          } else {
            var r = void 0;
            if (xa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var v = Kp[d[0]];
                  if (v && (!e.fromContainerExecution || !Lp[d[0]])) {
                    r = v(d, e);
                    break a
                  }
                }
                r = void 0
              }
              r && "set" === d[0] && r.event && O(101)
            }
            else r = d;
            r && (a = rq(r, e) || a)
          }
        } finally {
          e.fromContainerExecution && ke(!0);
          var w = d["gtm.uniqueEventId"];
          if ("number" === typeof w) {
            for (var y = jq[String(w)] || [], x = 0; x < y.length; x++) lq.push(vq(y[x]));
            y.length && lq.sort(oq);
            delete jq[String(w)];
            w > iq && (iq = w)
          }
          nq = !1
        }
      }
    }
    return !a
  }

  function wq() {
    var b = uq();
    try {
      Mp(Gg.M)
    } catch (c) {}
    return b
  }

  function xo(a) {
    if (iq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      jq[b] = jq[b] || [];
      jq[b].push(a)
    } else lq.push(vq(a)), lq.sort(oq), G(function () {
      nq || uq()
    })
  }

  function vq(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    }
  }
  var yq = function () {
      function a(f) {
        var g = {};
        if (gq(f)) {
          var l = f;
          f = gq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0
        }
        return {
          message: f,
          messageContext: g
        }
      }
      var b = ib(Ld.fa, []),
        c = Md[Ld.fa] = Md[Ld.fa] || {};
      !0 === c.pruned && O(83);
      jq = vo().get();
      yo();
      Ln(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f))
        }
      });
      Rp(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f))
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Md.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new hq(arguments[g])
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q)
        });
        kq.push.apply(kq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return uq() && p
      };
      var e = b.slice(0).map(function (f) {
        return a(f)
      });
      kq.push.apply(kq, e);
      if (xq()) {
        G(wq)
      }
    },
    xq = function () {
      var a = !0;
      return a
    };

  function zq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3E5 && b > c - 9E5
  };
  var jc = {};
  jc.Od = new String("undefined");
  var $q = E.clearTimeout,
    ar = E.setTimeout,
    V = function (a, b, c, d) {
      if (Fg()) {
        b && G(b)
      } else return nb(a, b, c, d)
    },
    br = function () {
      return new Date
    },
    cr = function () {
      return E.location.href
    },
    dr = function (a) {
      return Je(Le(a), "fragment")
    },
    er = function (a) {
      return Ke(Le(a))
    },
    fr = function (a, b) {
      return le(a, b || 2)
    },
    gr = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = pq(a)) : d = pq(a);
      return d
    },
    hr = function (a, b) {
      E[a] = b
    },
    W = function (a, b, c) {
      b &&
        (void 0 === E[a] || c && !E[a]) && (E[a] = b);
      return E[a]
    },
    ir = function (a, b, c) {
      return fg(a, b, void 0 === c ? !0 : !!c)
    },
    jr = function (a, b, c) {
      return 0 === og(a, b, c)
    },
    kr = function (a, b) {
      if (Fg()) {
        b && G(b)
      } else pb(a, b)
    },
    lr = function (a) {
      return !!Gq(a, "init", !1)
    },
    mr = function (a) {
      Eq(a, "init", !0)
    },
    nr = function (a, b, c) {
      ek && (Db(a) || Zk(c, b, a))
    };
  var Lr = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function Mr(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c
  }
  var Nr = new ta;

  function Or(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Nr.get(e);
      f || (f = new RegExp(b, d), Nr.set(e, f));
      return f.test(a)
    } catch (g) {
      return !1
    }
  }

  function Pr(a, b) {
    function c(g) {
      var l = Le(g),
        m = Je(l, "protocol"),
        n = Je(l, "host", !0),
        p = Je(l, "port"),
        q = Je(l, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0
  }

  function Qr(a) {
    return Rr(a) ? 1 : 0
  }

  function Rr(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = N(a, {});
        N({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Qr(e)) return !0
      }
      return !1
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < Lr.length; g++) {
              var l = Lr[g];
              if (b[l]) {
                f = b[l](c);
                break a
              }
            }
          } catch (m) {}
          f = !1
        }
        return f;
      case "_ew":
        return Mr(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Or(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Pr(b, c)
    }
    return !1
  };
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);

  function is() {
    return E.gaGlobal = E.gaGlobal || {}
  }
  var js = function () {
      var a = is();
      a.hid = a.hid || sa();
      return a.hid
    },
    ks = function (a, b) {
      var c = is();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
  var Hs = function () {
      var a = !0;
      xh(7) && xh(9) && xh(10) || (a = !1);
      return a
    },
    Is = function () {
      var a = !0;
      xh(3) && xh(4) || (a = !1);
      return a
    };
  var kt = window,
    lt = document,
    mt = function (a) {
      var b = kt._gaUserPrefs;
      if (b && b.ioo && b.ioo() || a && !0 === kt["ga-disable-" + a]) return !0;
      try {
        var c = kt.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
      } catch (f) {}
      for (var d = $f("AMP_TOKEN", String(lt.cookie), !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return lt.getElementById("__gaOptOutExtension") ? !0 : !1
    };

  function ut(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c]
    });
    var b = a[R.g.Ma] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c]
    })
  };
  var Dt = function (a, b) {};

  function Ct(a, b) {
    var c = function () {};
    return c
  }

  function Et(a, b, c) {};
  var Ju = function (a, b) {
      if (!b.C) {
        var c = U(b, R.g.Qa),
          d = U(b, R.g.Za),
          e = U(b, c);
        if (void 0 === e) {
          var f = void 0;
          Gu.hasOwnProperty(c) ? f = Gu[c] : Hu.hasOwnProperty(c) && (f = Hu[c]);
          1 === f && (f = Iu(c));
          h(f) ? $n()(function () {
            var g = $n().getByName(a).get(f);
            d(g)
          }) : d(void 0)
        } else d(e)
      }
    },
    Ku = function (a, b) {
      var c = a[R.g.Jc],
        d = b + ".",
        e = a[R.g.R] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[R.g.Qb];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = $n();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, g)
    },
    Ou = function (a, b, c) {
      if (If() &&
        (!c.C || !Lu[a])) {
        var d = !Vf(R.g.U),
          e = function (f) {
            var g, l, m = $n(),
              n = Mu(b, "", c),
              p, q = n.createOnlyFields._useUp;
            if (c.C || Nu(b, n.createOnlyFields)) {
              c.C && (g = "gtm" + fe(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
              m(function () {
                var u = m.getByName(b);
                u && (p = u.get("clientId"));
                c.C || m.remove(b)
              });
              m("create", a, c.C ? l : n.createOnlyFields);
              d &&
                Vf(R.g.U) && (d = !1, m(function () {
                  var u = $n().getByName(c.C ? g : b);
                  !u || u.get("clientId") == p && q || (c.C ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Hd[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Hd[f]), u.set(n.fieldsToSet), c.C ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                }));
              c.C && m(function () {
                m.remove(g)
              })
            }
          };
        Xf(function () {
          return e(R.g.U)
        }, R.g.U);
        Xf(function () {
          return e(R.g.F)
        }, R.g.F);
        c.C && (Lu[a] = !0)
      }
    },
    Pu = function (a, b) {
      on() && b && (a[R.g.ub] = b)
    },
    Yu = function (a, b, c) {
      function d() {
        var C = U(c,
          R.g.Dc);
        l(function () {
          if (!c.C && J(C)) {
            var K = r.fieldsToSend,
              M = m().getByName(n),
              T;
            for (T in C)
              if (C.hasOwnProperty(T) && /^(dimension|metric)\d+$/.test(T) && void 0 != C[T]) {
                var ca = M.get(Iu(C[T]));
                Qu(K, T, ca)
              }
          }
        })
      }

      function e() {
        if (r.displayfeatures) {
          var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, {
            cookieName: C
          })
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        l = c.C ? bo(U(c, "gaFunctionName")) : bo();
      if (oa(l)) {
        var m = $n,
          n;
        c.C ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" +
          f.split("-").join("_");
        var p = function (C) {
            var K = [].slice.call(arguments, 0);
            K[0] = n ? n + "." + K[0] : "" + K[0];
            l.apply(window, K)
          },
          q = function (C) {
            var K = function (X, Q) {
                for (var P = 0; Q && P < Q.length; P++) p(X, Q[P])
              },
              M = c.C,
              T = M ? Ru(r) : Su(b, c);
            if (T) {
              var ca = {};
              Pu(ca, C);
              p("require", "ec", "ec.js", ca);
              M && T.Xe && p("set", "&cu", T.Xe);
              var S = T.action;
              if (M || "impressions" === S)
                if (K("ec:addImpression", T.jh), !M) return;
              if ("promo_click" === S || "promo_view" === S || M && T.dd) {
                var L = T.dd;
                K("ec:addPromo", L);
                if (L && 0 < L.length && "promo_click" === S) {
                  M ? p("ec:setAction",
                    S, T.Ra) : p("ec:setAction", S);
                  return
                }
                if (!M) return
              }
              "promo_view" !== S && "impressions" !== S && (K("ec:addProduct", T.Bb), p("ec:setAction", S, T.Ra))
            }
          },
          t = function (C) {
            if (C) {
              var K = {};
              if (J(C))
                for (var M in Tu) Tu.hasOwnProperty(M) && Uu(Tu[M], M, C[M], K);
              Pu(K, y);
              p("require", "linkid", K)
            }
          },
          u = function () {
            if (Fg()) {} else {
              var C = U(c, R.g.fi);
              C && (p("require", C, {
                dataLayer: Ld.fa
              }), p("require", "render"))
            }
          },
          r = Mu(n, b, c),
          v = function (C, K, M) {
            M && (K = "" + K);
            r.fieldsToSend[C] =
              K
          };
        !c.C && Nu(n, r.createOnlyFields) && (l(function () {
          m() && m().remove(n)
        }), Vu[n] = !1);
        l("create", f, r.createOnlyFields);
        if (r.createOnlyFields[R.g.ub] && !c.C) {
          var w = nn(r.createOnlyFields[R.g.ub], "/analytics.js");
          w && (g = w)
        }
        var y = c.C ? r.fieldsToSet[R.g.ub] : r.createOnlyFields[R.g.ub];
        if (y) {
          var x = c.C ? r.fieldsToSet[R.g.Ed] : r.createOnlyFields[R.g.Ed];
          x && !Vu[n] && (Vu[n] = !0, l(go(n, x)))
        }
        c.C ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(r.linkAttribution));
        var A = r[R.g.ra];
        A && A[R.g.R] && Ku(A, n);
        p("set",
          r.fieldsToSet);
        if (c.C) {
          if (r.enableLinkId) {
            var B = {};
            Pu(B, y);
            p("require", "linkid", "linkid.js", B)
          }
          If() && Ou(f, n, c)
        }
        if (b === R.g.qc)
          if (c.C) {
            e();
            if (r.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", {
                cookieName: D
              })
            }
            q(y);
            p("send", "pageview");
            r.createOnlyFields._useUp && co(n + ".")
          } else u(), p("send", "pageview", r.fieldsToSend);
        else b === R.g.va ? (u(), Aj(f, c), U(c, R.g.ab) && (Mi(["aw", "dc"]), co(n + ".")), 0 != r.sendPageView && p("send", "pageview", r.fieldsToSend), Ou(f, n, c)) : b === R.g.Ca ?
          Ju(n, c) : "screen_view" === b ? p("send", "screenview", r.fieldsToSend) : "timing_complete" === b ? (r.fieldsToSend.hitType = "timing", v("timingCategory", r.eventCategory, !0), c.C ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0), v("timingValue", za(r.value)), void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0), p("send", r.fieldsToSend)) : "exception" === b ? p("send", "exception", r.fieldsToSend) : "" === b && c.C || ("track_social" === b && c.C ? (r.fieldsToSend.hitType = "social", v("socialNetwork", r.socialNetwork, !0), v("socialAction",
            r.socialAction, !0), v("socialTarget", r.socialTarget, !0)) : ((c.C || Wu[b]) && q(y), c.C && e(), r.fieldsToSend.hitType = "event", v("eventCategory", r.eventCategory, !0), v("eventAction", r.eventAction || b, !0), void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0), void 0 !== r.value && v("eventValue", za(r.value))), p("send", r.fieldsToSend));
        if (!Xu && !c.C) {
          Xu = !0;
          Vn();
          var H = function () {
              c.N()
            },
            I = function () {
              m().loaded || H()
            };
          Fg() ? G(I) : nb(g, I, H)
        }
      } else G(c.N)
    },
    Zu = function (a, b, c, d) {
      Yf(function () {
        Yu(a, b, d)
      }, [R.g.U, R.g.F])
    },
    bv = function (a,
      b) {
      function c(f) {
        function g(n, p) {
          for (var q = 0; q < p.length; q++) {
            var t = p[q];
            if (f[t]) {
              m[n] = f[t];
              break
            }
          }
        }

        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var n = "", p = 0; p < $u.length; p++) void 0 !== f[$u[p]] && (n && (n += "/"), n += f[$u[p]]);
            n && (m.category = n)
          }
        }
        var m = N(f);
        if (av || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position",
          "creative_slot", "index"
        ]), l();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++) a[e] && J(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0
    },
    cv = function (a) {
      return Vf(a)
    },
    dv = !1;
  var av = !1;
  av = !0;
  var Xu, Vu = {},
    Lu = {},
    ev = {},
    Gu = Object.freeze((ev.client_storage = "storage", ev.sample_rate = 1, ev.site_speed_sample_rate = 1, ev.store_gac = 1, ev.use_amp_client_id = 1, ev[R.g.jb] = 1, ev[R.g.qa] = "storeGac", ev[R.g.Xa] = 1, ev[R.g.Ia] = 1, ev[R.g.Ya] = 1, ev[R.g.Bc] = 1, ev[R.g.we] = 1, ev[R.g.tb] = 1, ev)),
    fv = {},
    gv = Object.freeze((fv._cs = 1, fv._useUp = 1, fv.allowAnchor = 1, fv.allowLinker = 1, fv.alwaysSendReferrer = 1, fv.clientId = 1, fv.cookieDomain = 1, fv.cookieExpires = 1, fv.cookieFlags =
      1, fv.cookieName = 1, fv.cookiePath = 1, fv.cookieUpdate = 1, fv.legacyCookieDomain = 1, fv.legacyHistoryImport = 1, fv.name = 1, fv.sampleRate = 1, fv.siteSpeedSampleRate = 1, fv.storage = 1, fv.storeGac = 1, fv.useAmpClientId = 1, fv._cd2l = 1, fv)),
    hv = Object.freeze({
      anonymize_ip: 1
    }),
    iv = {},
    Hu = Object.freeze((iv.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
      }, iv.app_id = 1, iv.app_installer_id = 1, iv.app_name = 1, iv.app_version = 1, iv.description =
      "exDescription", iv.fatal = "exFatal", iv.language = 1, iv.page_hostname = "hostname", iv.transport_type = "transport", iv[R.g.ma] = "currencyCode", iv[R.g.ig] = 1, iv[R.g.Ka] = "location", iv[R.g.De] = "page", iv[R.g.La] = "referrer", iv[R.g.Sb] = "title", iv[R.g.qg] = 1, iv[R.g.sa] = 1, iv)),
    jv = {},
    kv = Object.freeze((jv.content_id = 1, jv.event_action = 1, jv.event_category = 1, jv.event_label = 1, jv.link_attribution = 1, jv.name = 1, jv[R.g.ra] = 1, jv[R.g.hg] = 1, jv[R.g.xa] = 1, jv[R.g.ka] = 1, jv)),
    lv = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1
    }),
    $u = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
    mv = {},
    Tu = Object.freeze((mv.levels = 1, mv[R.g.Ia] = "duration", mv[R.g.Bc] = 1, mv)),
    nv = {},
    ov = Object.freeze((nv.anonymize_ip = 1, nv.fatal = 1, nv.send_page_view = 1, nv.store_gac = 1, nv.use_amp_client_id = 1, nv[R.g.qa] = 1, nv[R.g.ig] =
      1, nv)),
    Uu = function (a, b, c, d) {
      if (void 0 !== c)
        if (ov[b] && (c = Aa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Iu(b)] = c;
        else if (h(a)) d[a] = c;
      else
        for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    },
    Iu = function (a) {
      return a && h(a) ? a.replace(/(_[a-z])/g, function (b) {
        return b[1].toUpperCase()
      }) : a
    },
    pv = {},
    Wu = Object.freeze((pv.checkout_progress = 1, pv.select_content = 1, pv.set_checkout_option = 1, pv[R.g.kc] = 1, pv[R.g.mc] = 1, pv[R.g.Ib] = 1, pv[R.g.nc] = 1, pv[R.g.rb] = 1, pv[R.g.Jb] = 1, pv[R.g.sb] = 1, pv[R.g.Ba] = 1, pv[R.g.oc] =
      1, pv[R.g.Ha] = 1, pv)),
    qv = {},
    rv = Object.freeze((qv.checkout_progress = 1, qv.set_checkout_option = 1, qv[R.g.Jf] = 1, qv[R.g.Kf] = 1, qv[R.g.kc] = 1, qv[R.g.mc] = 1, qv[R.g.Lf] = 1, qv[R.g.Ib] = 1, qv[R.g.Ba] = 1, qv[R.g.oc] = 1, qv[R.g.Mf] = 1, qv)),
    sv = {},
    tv = Object.freeze((sv.generate_lead = 1, sv.login = 1, sv.search = 1, sv.select_content = 1, sv.share = 1, sv.sign_up = 1, sv.view_search_results = 1, sv[R.g.nc] = 1, sv[R.g.rb] = 1, sv[R.g.Jb] = 1, sv[R.g.sb] = 1, sv[R.g.Ha] = 1, sv)),
    uv = function (a) {
      var b = "general";
      rv[a] ? b = "ecommerce" : tv[a] ? b = "engagement" : "exception" ===
        a && (b = "error");
      return b
    },
    vv = {},
    wv = Object.freeze((vv.view_search_results = 1, vv[R.g.rb] = 1, vv[R.g.sb] = 1, vv[R.g.Ha] = 1, vv)),
    Qu = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c)
    },
    xv = function (a) {
      if (qa(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
          }
        }
        return 0 < b.length ? b.join("!") : void 0
      }
    },
    Mu = function (a, b, c) {
      var d = function (K) {
          return U(c, K)
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = xv(d(R.g.ei));
      !c.C && m && Qu(f, "exp", m);
      g["&gtm"] = Rg(!0);
      If() &&
        (l._cs = cv);
      var n = d(R.g.Dc);
      if (!c.C && J(n))
        for (var p in n)
          if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
            var q = d(String(n[p]));
            void 0 !== q && Qu(f, p, q)
          } for (var t = il(c), u = 0; u < t.length; ++u) {
        var r = t[u];
        if (c.C) {
          var v = d(r);
          lv.hasOwnProperty(r) ? e[r] = v : gv.hasOwnProperty(r) ? l[r] = v : g[r] = v
        } else {
          var w = void 0;
          w = r !== R.g.aa ? d(r) : jl(c, r);
          if (kv.hasOwnProperty(r)) Uu(kv[r], r, w, e);
          else if (hv.hasOwnProperty(r)) Uu(hv[r], r, w, g);
          else if (Hu.hasOwnProperty(r)) Uu(Hu[r], r, w, f);
          else if (Gu.hasOwnProperty(r)) Uu(Gu[r],
            r, w, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(r)) Uu(1, r, w, f);
          else if (r === R.g.aa) {
            if (!dv) {
              var y = La(w);
              y && (f["&did"] = y)
            }
            var x = void 0,
              A = void 0;
            b === R.g.va ? x = La(jl(c, r), ".") : (x = La(jl(c, r, 1), "."), A = La(jl(c, r, 2), "."));
            x && (f["&gdid"] = x);
            A && (f["&edid"] = A)
          } else r === R.g.Pa && 0 > t.indexOf(R.g.Bc) && (l.cookieName = w + "_ga")
        }
      }!1 !== d(R.g.Uh) && !1 !== d(R.g.uc) && Hs() || (g.allowAdFeatures = !1);
      !1 !== d(R.g.X) && Is() || (g.allowAdPersonalizationSignals = !1);
      !c.C && d(R.g.ab) && (l._useUp = !0);
      if (c.C) {
        l.name = l.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          oa(B) && B();
          c.O()
        }
      } else {
        Qu(l, "cookieDomain", "auto");
        Qu(g, "forceSSL", !0);
        Qu(e, "eventCategory", uv(b));
        wv[b] && Qu(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b ? Qu(e, "eventLabel", d(R.g.hg)) : "search" === b || "view_search_results" === b ? Qu(e, "eventLabel", d(R.g.li)) : "select_content" === b && Qu(e, "eventLabel", d(R.g.Xh));
        var D = e[R.g.ra] || {},
          H = D[R.g.Pb];
        H || 0 != H && D[R.g.R] ? l.allowLinker = !0 : !1 === H && Qu(l, "useAmpClientId", !1);
        f.hitCallback = c.O;
        l.name = a
      }
      If() && (g["&gcs"] =
        Wf(), Vf(R.g.U) || (l.storage = "none"), Vf(R.g.F) || (g.allowAdFeatures = !1, l.storeGac = !1));
      var I = d(R.g.na) || d(R.g.ub),
        C = d(R.g.Ed);
      I && (c.C || (l[R.g.ub] = I), l._cd2l = !0);
      C && !c.C && (l[R.g.Ed] = C);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e
    },
    Ru = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Xe = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.jh = "impressions" === b.translateIfKeyEquals ? bv(d, !0) : d
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.dd = "promoView" === b.translateIfKeyEquals ? bv(e, !0) : e
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.dd = "promoClick" === b.translateIfKeyEquals ? bv(f, !0) : f;
        c.Ra = b.promoClick.actionField;
        return c
      }
      for (var g in b)
        if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
          c.action = g;
          var l = b[g].products;
          c.Bb = "products" === b.translateIfKeyEquals ? bv(l, !0) : l;
          c.Ra = b[g].actionField;
          break
        } return Object.keys(c).length ?
        c : null
    },
    Su = function (a, b) {
      function c(v) {
        return {
          id: d(R.g.Ea),
          affiliation: d(R.g.bi),
          revenue: d(R.g.ka),
          tax: d(R.g.Tf),
          shipping: d(R.g.Ec),
          coupon: d(R.g.ci),
          list: e() || v
        }
      }
      for (var d = function (v) {
          return U(b, v)
        }, e = function () {
          var v;
          av && (v = d(R.g.Rf));
          return d(R.g.Sf) || v
        }, f = d(R.g.Z), g, l = 0; f && l < f.length && (g = f[l][R.g.Sf], !g && av && (g = f[l][R.g.Rf]), !g); l++);
      var m = d(R.g.Dc);
      if (J(m))
        for (var n = 0; f && n < f.length; ++n) {
          var p = f[n],
            q;
          for (q in m) m.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q) && void 0 != m[q] && Qu(p, q, p[m[q]])
        }
      var t =
        null,
        u = d(R.g.di);
      if (a === R.g.Ba || a === R.g.oc) t = {
        action: a,
        Ra: c(),
        Bb: bv(f)
      };
      else if (a === R.g.kc) t = {
        action: "add",
        Ra: c(),
        Bb: bv(f)
      };
      else if (a === R.g.mc) t = {
        action: "remove",
        Ra: c(),
        Bb: bv(f)
      };
      else if (a === R.g.Ha) t = {
        action: "detail",
        Ra: c(g),
        Bb: bv(f)
      };
      else if (a === R.g.rb) t = {
        action: "impressions",
        jh: bv(f)
      };
      else if (a === R.g.sb) t = {
        action: "promo_view",
        dd: av ? bv(u) || bv(f) : bv(u)
      };
      else if ("select_content" === a && u && 0 < u.length || av && a === R.g.Jb) t = {
        action: "promo_click",
        dd: av ? bv(u) || bv(f) : bv(u)
      };
      else if ("select_content" === a || av && a ===
        R.g.nc) t = {
        action: "click",
        Ra: {
          list: e() || g
        },
        Bb: bv(f)
      };
      else if (a === R.g.Ib || "checkout_progress" === a) {
        var r = {
          step: a === R.g.Ib ? 1 : d(R.g.Qf),
          option: d(R.g.Pf)
        };
        t = {
          action: "checkout",
          Bb: bv(f),
          Ra: N(c(), r)
        }
      } else "set_checkout_option" === a && (t = {
        action: "checkout_option",
        Ra: {
          step: d(R.g.Qf),
          option: d(R.g.Pf)
        }
      });
      t && (t.Xe = d(R.g.ma));
      return t
    },
    yv = {},
    Nu = function (a, b) {
      var c = yv[a];
      yv[a] = N(b);
      if (!c) return !1;
      for (var d in b)
        if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c)
        if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1
    };
  var zv = Ct;
  var Bv = encodeURI,
    Y = encodeURIComponent,
    Cv = function (a, b, c) {
      qb(a, b, c)
    },
    Dv = function (a, b) {
      if (!a) return !1;
      var c = Je(Le(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, e = "." + e);
          if (0 <= f && c.indexOf(e, f) == f) return !0
        }
      }
      return !1
    },
    Ev = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null
    };
  var Z = {
    o: {}
  };
  Z.o.e = ["google"],
    function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event)
      })
    }();
  Z.o.v = ["google"],
    function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = fr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        nr(d, "v", a.vtp_gtmEventId);
        return d
      })
    }();

  Z.o.rep = ["google"],
    function () {
      (function (a) {
        Z.__rep = a;
        Z.__rep.s = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
        Z.__rep.isInfrastructure = !1
      })(function (a) {
        var b = Xi(a.vtp_containerId),
          c;
        switch (b.prefix) {
          case "AW":
            c = hu;
            break;
          case "DC":
            c = ru;
            break;
          case "GF":
            c =
              xu;
            break;
          case "HA":
            c = Cu;
            break;
          case "UA":
            c = Zu;
            break;
          case "MC":
            break;
          default:
            G(a.vtp_gtmOnFailure);
            return
        }
        c ? (G(a.vtp_gtmOnSuccess), To.register(a.vtp_containerId, c), a.vtp_remoteConfig && Ap(a.vtp_containerId, a.vtp_remoteConfig || {})) : G(a.vtp_gtmOnFailure)
      })
    }();
  Z.o.cid = ["google"],
    function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.s = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
        Z.__cid.isInfrastructure = !1
      })(function () {
        return Gg.M
      })
    }();











  Z.o.get = ["google"],
    function () {
      (function (a) {
        Z.__get = a;
        Z.__get.s = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = to(String(b.streamId), d, c);
        wo(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
      })
    }();





  var Ww = {};
  Ww.dataLayer = me;
  Ww.callback = function (a) {
    de.hasOwnProperty(a) && oa(de[a]) && de[a]();
    delete de[a]
  };
  Ww.bootstrap = 0;
  Ww._spx = !1;

  function Xw() {
    Md[Gg.M] = Ww;
    Gg.Hb && (Md["ctid_" + Gg.Hb] = Ww);
    Mg();
    Og() || k(Pg(), function (a, b) {
      rn(a, b.transportUrl, b.context);
      O(92)
    });
    Ga(ee, Z.o);
    lc = tc
  }
  (function (a) {
    if (!E["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (F.referrer) {
        var c = Le(F.referrer);
        b = "cct.google" === Ie(c, "host")
      }
      if (!b) {
        var d = fg("googTaggyReferrer");
        b = d.length && d[0].length
      }
      b && (E["__TAGGY_INSTALLED"] = !0, nb("https://cct.google/taggy/agent.js"))
    }
    if (Zd) a();
    else {
      var e = function (p) {
          var q = "GTM",
            t = "GTM";
          Td ? (q = "OGT", t = "GTAG") : Zd && (t = q = "OPT");
          var u = E["google.tagmanager.debugui2.queue"];
          u || (u = [], E["google.tagmanager.debugui2.queue"] = u, nb("https://" + Ld.qd + "/debug/bootstrap?id=" + Gg.M + "&src=" + t + "&cond=" +
            p + "&gtm=" + Rg()));
          var r = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: hb,
              containerProduct: q,
              debug: !1,
              id: Gg.M,
              isGte: Sd
            }
          };
          r.data.resume = function () {
            a()
          };
          Ld.Jh && (r.data.initialPublish = !0);
          u.push(r)
        },
        f = void 0,
        g = Je(E.location, "query", !1, void 0, "gtm_debug");
      zq(g) && (f = 2);
      if (!f && F.referrer) {
        var l = Le(F.referrer);
        "tagassistant.google.com" === Ie(l, "host") && (f = 3)
      }
      if (!f) {
        var m = fg("__TAG_ASSISTANT");
        m.length && m[0].length && (f = 4)
      }
      if (!f) {
        var n = F.documentElement.getAttribute("data-tag-assistant-present");
        zq(n) &&
          (f = 5)
      }
      f && hb ? e(f) : a()
    }
  })(function () {
    var a = !1;
    a && Wn("INIT");
    wf().m();
    uh();
    ni.enable_gbraid_cookie_write = !0;
    var b = !!Md[Gg.M];
    !b && Gg.Hb && (b = !!Md["ctid_" + Gg.Hb]);
    if (b) {
      var c = Md.zones;
      c && c.unregisterChild(Ig());
    } else {
      for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) bc.push(e[f]);
      for (var g = d.tags || [], l = 0; l < g.length; l++) ec.push(g[l]);
      for (var m = d.predicates || [], n = 0; n < m.length; n++) dc.push(m[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
        cc.push(u)
      }
      gc = Z;
      hc = Qr;
      Xw();
      yq();
      Gn = !1;
      Hn = 0;
      if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Jn();
      else {
        rb(F, "DOMContentLoaded", Jn);
        rb(F, "readystatechange", Jn);
        if (F.createEventObject && F.documentElement.doScroll) {
          var v = !0;
          try {
            v = !E.frameElement
          } catch (B) {}
          v && Kn()
        }
        rb(E, "load", Jn)
      }
      Op = !1;
      "complete" === F.readyState ? Qp() : rb(E, "load", Qp);
      fl();
      Wc(46) && O(111);
      Wc(47) && O(112);
      ce = z();
      Ww.bootstrap = ce;
      if (a) {
        var A = Xn("INIT");
      }
    }
  });

})()