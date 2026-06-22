(self.webpackChunk = self.webpackChunk || []).push([
  ["687"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new M.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            $.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          j.debug && window && window.console.warn(e);
        }
        var s,
          c,
          u,
          l = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(s, c) {
              function u() {
                var e = new l();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function l() {}
              c === n && ((c = s), (s = Object)), (u.Bare = l);
              var d,
                f = (r[e] = s[e]),
                p = (l[e] = u[e] = new r());
              return (
                (p.constructor = u),
                (u.mixin = function (t) {
                  return (l[e] = u[e] = o(u, t)[e]), u;
                }),
                (u.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(u, p, f, u, s)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return a(p.init) || (p.init = s), u;
                }),
                u.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          m = /[A-Z]/,
          I = "number",
          y = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          O = /(em|cm|mm|in|pt|pc|px|%)$/,
          h = /(deg|rad|turn)$/,
          b = "unitless",
          v = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          A = document.createElement("a"),
          S = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < S.length; t++)
              if ((n = S[t] + i) in A.style) return { dom: n, css: R[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (N.transition) {
          var C = N.timing.dom;
          if (((A.style[C] = d["ease-in-back"][0]), !A.style[C]))
            for (var w in f) d[w][0] = f[w];
        }
        var P = (t.frame =
            (s =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && N.bind
              ? s.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          G = (t.now =
            (u =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && N.bind
              ? u.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          F = l(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  s = this.props[i];
                return (
                  s || (s = this.props[i] = new r.Bare()),
                  s.init(this.$el, n, a, t),
                  s
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      s.call(this);
                      break;
                    case "redraw":
                      u.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    l.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    g = !1,
                    E = {};
                  P(function () {
                    d.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function s(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                l.call(this);
            }
            function c() {
              s.call(this), (this.el.style.display = "none");
            }
            function u() {
              this.el.offsetHeight;
            }
            function l() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[N.transition.dom] = n));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                s,
                c = t !== f,
                u = {};
              for (a in e)
                (o = e[a]),
                  a in Y
                    ? (u.transform || (u.transform = {}), (u.transform[a] = o))
                    : (m.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Q ? (u[a] = o) : (s || (s = {}), (s[a] = o)));
              for (a in u) {
                if (((o = u[a]), !(r = this.props[a]))) {
                  if (!c) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && s && i.call(this, s);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function I(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !v.test(n) && (this.upstream = n);
              }
              N.backface &&
                j.hideBackface &&
                H(this.el, N.backface.css, "hidden");
            }),
              I("add", n),
              I("start", i),
              I("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              I("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              I("next", a),
              I("stop", s),
              I("set", function (e) {
                s.call(this, e), d.call(this, e, p, E);
              }),
              I("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              I("hide", c),
              I("redraw", u),
              I("destroy", function () {
                s.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          M = l(F, function (t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new F.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          x = l(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            var n = 500,
              a = "ease",
              s = 0;
            (e.init = function (e, t, i, o) {
              (this.$el = e), (this.el = e[0]);
              var c,
                u,
                l,
                f = t[0];
              i[2] && (f = i[2]),
                W[f] && (f = W[f]),
                (this.name = f),
                (this.type = i[1]),
                (this.duration = r(t[1], this.duration, n)),
                (this.ease =
                  ((c = t[2]),
                  (u = this.ease),
                  (l = a),
                  void 0 !== u && (l = u),
                  c in d ? c : l)),
                (this.delay = r(t[3], this.delay, s)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = o.unit || this.unit || j.defaultUnit),
                (this.angle = o.angle || this.angle || j.defaultAngle),
                j.fallback || o.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                H(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  H(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r,
                  s,
                  c = "number" == typeof e,
                  u = "string" == typeof e;
                switch (t) {
                  case I:
                    if (c) return e;
                    if (u && "" === e.replace(E, "")) return +e;
                    s = "number(unitless)";
                    break;
                  case y:
                    if (u) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e)) {
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = e),
                            ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n))
                              ? i(a[1], a[2], a[3])
                              : n
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                      }
                    }
                    s = "hex or rgb string";
                    break;
                  case T:
                    if (c) return e + this.unit;
                    if (u && t.test(e)) return e;
                    s = "number(px) or string(unit)";
                    break;
                  case O:
                    if (c) return e + this.unit;
                    if (u && t.test(e)) return e;
                    s = "number(px) or string(unit or %)";
                    break;
                  case h:
                    if (c) return e + this.angle;
                    if (u && t.test(e)) return e;
                    s = "number(deg) or string(angle)";
                    break;
                  case b:
                    if (c || (u && O.test(e))) return e;
                    s = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      s +
                      "] Got: [" +
                      typeof (r = e) +
                      "] " +
                      r
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          U = l(x, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          D = l(x, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          k = l(x, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = Y[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Y.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  H(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                H(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          V = l(function (t) {
            function r() {
              var e,
                t,
                n,
                i = c.length;
              if (i)
                for (P(r), t = G(), e = i; e--; ) (n = c[e]) && n.render(t);
            }
            var s = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || s.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = s.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = s.from),
                void 0 === i && (i = s.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = G()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                var e;
                this.active ||
                  (this.start || (this.start = G()),
                  (this.active = !0),
                  (e = this),
                  1 === c.push(e) && P(r));
              }),
              (t.stop = function () {
                var t, n, i;
                this.active &&
                  ((this.active = !1),
                  (t = this),
                  (i = e.inArray(t, c)) >= 0 &&
                    ((n = c.slice(i + 1)),
                    (c.length = i),
                    n.length && (c = c.concat(n))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o,
                    s = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        (o = s),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + s * this.change) * u) / u),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(E, "");
                  i !== e.replace(E, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var c = [],
              u = 1e3;
          }),
          B = l(V, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = l(V, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e, n;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var H = e.style,
          z = e.css,
          W = { transform: N.transform && N.transform.css },
          Q = {
            color: [U, y],
            background: [U, y, "background-color"],
            "outline-color": [U, y],
            "border-color": [U, y],
            "border-top-color": [U, y],
            "border-right-color": [U, y],
            "border-bottom-color": [U, y],
            "border-left-color": [U, y],
            "border-width": [x, T],
            "border-top-width": [x, T],
            "border-right-width": [x, T],
            "border-bottom-width": [x, T],
            "border-left-width": [x, T],
            "border-spacing": [x, T],
            "letter-spacing": [x, T],
            margin: [x, T],
            "margin-top": [x, T],
            "margin-right": [x, T],
            "margin-bottom": [x, T],
            "margin-left": [x, T],
            padding: [x, T],
            "padding-top": [x, T],
            "padding-right": [x, T],
            "padding-bottom": [x, T],
            "padding-left": [x, T],
            "outline-width": [x, T],
            opacity: [x, I],
            top: [x, O],
            right: [x, O],
            bottom: [x, O],
            left: [x, O],
            "font-size": [x, O],
            "text-indent": [x, O],
            "word-spacing": [x, O],
            width: [x, O],
            "min-width": [x, O],
            "max-width": [x, O],
            height: [x, O],
            "min-height": [x, O],
            "max-height": [x, O],
            "line-height": [x, b],
            "scroll-top": [D, I, "scrollTop"],
            "scroll-left": [D, I, "scrollLeft"],
          },
          Y = {};
        N.transform &&
          ((Q.transform = [k]),
          (Y = {
            x: [O, "translateX"],
            y: [O, "translateY"],
            rotate: [h],
            rotateX: [h],
            rotateY: [h],
            scale: [I],
            scaleX: [I],
            scaleY: [I],
            skew: [h],
            skewX: [h],
            skewY: [h],
          })),
          N.transform &&
            N.backface &&
            ((Y.z = [O, "translateZ"]),
            (Y.rotateZ = [h]),
            (Y.scaleZ = [I]),
            (Y.perspective = [T]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        s,
        c,
        u,
        l,
        d,
        f,
        p,
        g,
        E,
        m,
        I,
        y,
        T,
        O,
        h,
        b,
        v = window.$,
        _ = n(5487) && v.tram;
      e.exports =
        (((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (s = Function.prototype),
        r.push,
        (c = r.slice),
        (u = (r.concat, o.toString, o.hasOwnProperty)),
        (l = r.forEach),
        (d = r.map),
        (f = (r.reduce, r.reduceRight, r.filter)),
        (p = (r.every, r.some)),
        (g = r.indexOf),
        (E = (r.lastIndexOf, Object.keys)),
        s.bind,
        (m =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (l && e.forEach === l) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else {
                for (var s = i.keys(e), r = 0, o = s.length; r < o; r++)
                  if (t.call(n, e[s[r]], s[r], e) === a) return;
              }
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (m(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              I(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (m(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (I =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (m(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : I(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            !t &&
              ((t = !0),
              (n = arguments),
              (i = this),
              _.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            s,
            c,
            u = function () {
              var l = i.now() - s;
              l < t
                ? (a = setTimeout(u, t - l))
                : ((a = null), !n && ((c = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (s = i.now());
            var l = n && !a;
            return (
              !a && (a = setTimeout(u, t)),
              l && ((c = e.apply(o, r)), (o = r = null)),
              c
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return u.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (T = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (O = /\\|'|\r|\n|\u2028|\u2029/g),
        (h = function (e) {
          return "\\" + T[e];
        }),
        (b = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            s = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (s += e.slice(o, r).replace(O, h)),
              (o = r + t.length),
              n
                ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (s += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (s += "';\n");
          var c = t.variable;
          if (c) {
            if (!b.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else (s = "with(obj||{}){\n" + s + "}\n"), (c = "obj");
          s =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            s +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", s);
          } catch (e) {
            throw ((e.source = s), e);
          }
          var u = function (e) {
            return a.call(this, e, i);
          };
          return (u.source = "function(" + c + "){\n" + s + "}"), u;
        }),
        i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("brand", (e.exports = function () {}), function (e) {
        var t,
          n = {},
          a = document,
          r = e("html"),
          o = e("body"),
          s = window.location,
          c = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function l() {
          var n =
            a.fullScreen ||
            a.mozFullScreen ||
            a.webkitIsFullScreen ||
            a.msFullscreenElement ||
            !!a.webkitFullscreenElement;
          e(t).attr("style", n ? "display: none !important;" : "");
        }
        n.ready = function () {
          var n = r.attr("data-wf-status"),
            i = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(i) && s.hostname !== i && (n = !0),
            n &&
              !c &&
              ((t =
                t ||
                (function () {
                  var t = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    ),
                    n = e("<img>")
                      .attr(
                        "src",
                        "../images/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" }),
                    i = e("<img>")
                      .attr(
                        "src",
                        "../images/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow");
                  return t.append(n, i), t[0];
                })()),
              d(),
              setTimeout(d, 500),
              e(a).off(u, l).on(u, l));
        };
        function d() {
          var e = o.children(".w-webflow-badge"),
            n = e.length && e.get(0) === t,
            a = i.env("editor");
          if (n) {
            a && e.remove();
            return;
          }
          e.length && e.remove(), !a && o.append(t);
        }
        return n;
      });
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            s = document.location,
            c = "hashchange",
            u =
              n.load ||
              function () {
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(c, d),
                  (function (e) {
                    var t = window.document.createElement("iframe");
                    (t.src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                      (t.style.display = "none"),
                      (t.sandbox = "allow-scripts allow-same-origin");
                    var n = function (i) {
                      "WF_third_party_cookies_unsupported" === i.data
                        ? (g(t, n), e(!1))
                        : "WF_third_party_cookies_supported" === i.data &&
                          (g(t, n), e(!0));
                    };
                    (t.onerror = function () {
                      g(t, n), e(!1);
                    }),
                      window.addEventListener("message", n, !1),
                      window.document.body.appendChild(t);
                  })(function (t) {
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success: (function (t) {
                        return function (n) {
                          if (!n) {
                            console.error("Could not load editor data");
                            return;
                          }
                          (n.thirdPartyCookiesSupported = t),
                            (function (t, n) {
                              e.ajax({
                                type: "GET",
                                url: t,
                                dataType: "script",
                                cache: !0,
                              }).then(n, f);
                            })(
                              (function (e) {
                                return e.indexOf("//") >= 0
                                  ? e
                                  : p("https://editor-api.webflow.com" + e);
                              })(n.scriptPath),
                              function () {
                                window.WebflowEditor(n);
                              }
                            );
                        };
                      })(t),
                    });
                  });
              },
            l = !1;
          try {
            l =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            if (!a) /\?edit/.test(s.hash) && u();
          }
          l
            ? u()
            : s.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
                /\?edit$/.test(s.href)) &&
              u()
            : r.on(c, d).triggerHandler(c);
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return {};
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        (!!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList) ||
                        !1
                      );
                    }
                    function o(e) {
                      if (!e.getAttribute("data-wf-focus-visible"))
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function s() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener("mousemove", u),
                        document.addEventListener("mousedown", u),
                        document.addEventListener("mouseup", u),
                        document.addEventListener("pointermove", u),
                        document.addEventListener("pointerdown", u),
                        document.addEventListener("pointerup", u),
                        document.addEventListener("touchmove", u),
                        document.addEventListener("touchstart", u),
                        document.addEventListener("touchend", u);
                    }
                    function u(e) {
                      if (
                        !e.target.nodeName ||
                        "html" !== e.target.nodeName.toLowerCase()
                      )
                        (t = !1),
                          document.removeEventListener("mousemove", u),
                          document.removeEventListener("mousedown", u),
                          document.removeEventListener("mouseup", u),
                          document.removeEventListener("pointermove", u),
                          document.removeEventListener("pointerdown", u),
                          document.removeEventListener("pointerup", u),
                          document.removeEventListener("touchmove", u),
                          document.removeEventListener("touchstart", u),
                          document.removeEventListener("touchend", u);
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        if (!n.metaKey && !n.altKey && !n.ctrlKey)
                          r(e.activeElement) && o(e.activeElement), (t = !0);
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", s, !0),
                      document.addEventListener("pointerdown", s, !0),
                      document.addEventListener("touchstart", s, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          var n, i, s;
                          if (!!r(e.target)) {
                            if (
                              t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (s = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === s && !n.readOnly) ||
                                n.isContentEditable)
                            )
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (!!r(e.target))
                            e.target.hasAttribute("data-wf-focus-visible") &&
                              ((n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              !(function (e) {
                                if (!!e.getAttribute("data-wf-focus-visible"))
                                  e.removeAttribute("data-wf-focus-visible");
                              })(e.target));
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            if (
              ((a = (i = n.target).tagName),
              (/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls))
            )
              (t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0);
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            if (!i.__wf_intro)
              (i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO);
          },
          outro: function (e, i) {
            if (!!i.__wf_intro)
              (i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO);
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            if (!!r.hasOwnProperty(e))
              n.triggers[e] = function (e, n) {
                i.push([t, n]);
              };
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var r = window.jQuery,
        o = {},
        s = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + s, OUTRO: "w-ix-outro" + s }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        s = [],
        c = window.Webflow || [],
        u = window.jQuery,
        l = u(window),
        d = u(document),
        f = u.isFunction,
        p = (r._ = n(5756)),
        g = (r.tram = n(5487) && u.tram),
        E = !1,
        m = !1;
      function I(e) {
        r.env() &&
          (f(e.design) && l.on("__wf_design", e.design),
          f(e.preview) && l.on("__wf_preview", e.preview)),
          f(e.destroy) && l.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) {
                e.ready();
                return;
              }
              if (!p.contains(s, e.ready)) s.push(e.ready);
            })(e);
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && y(o[e]);
          var i = (o[e] = t(u, p, n) || {});
          return I(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        });
      function y(e) {
        f(e.design) && l.off("__wf_design", e.design),
          f(e.preview) && l.off("__wf_preview", e.preview),
          f(e.destroy) && l.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              s = p.filter(s, function (t) {
                return t !== e.ready;
              });
            })(e);
      }
      (r.push = function (e) {
        if (E) {
          f(e) && e();
          return;
        }
        c.push(e);
      }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var T = navigator.userAgent.toLowerCase(),
        O = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        h = (r.env.chrome =
          /chrome/.test(T) &&
          /Google/.test(navigator.vendor) &&
          parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
        b = (r.env.ios = /(ipod|iphone|ipad)/.test(T));
      (r.env.safari = /safari/.test(T) && !h && !b),
        O &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = O
          ? function (e) {
              return e === i || u.contains(e, i);
            }
          : function () {
              return !0;
            });
      var v = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + v;
      function A(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            if (!("function" != typeof e || p.contains(n, e))) n.push(e);
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function S(e) {
        f(e) && e();
      }
      (r.resize = A(l, v)),
        (r.scroll = A(l, _)),
        (r.redraw = A()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (E = !0),
            m
              ? (function () {
                  (m = !1), p.each(o, I);
                })()
              : p.each(s, S),
            p.each(c, S),
            r.resize.up();
        });
      function R() {
        a && (a.reject(), l.off("load", a.resolve)),
          (a = new u.Deferred()),
          l.on("load", a.resolve);
      }
      (r.load = function (e) {
        a.then(e);
      }),
        (r.destroy = function (e) {
          (e = e || {}),
            (m = !0),
            l.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(o, y),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (s = []),
            (c = []),
            "pending" === a.state() && R();
        }),
        u(r.ready),
        R(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            s = e(window),
            c = i.env(),
            u = window.location,
            l = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          o.ready =
            o.design =
            o.preview =
              function () {
                (n = c && i.env("design")),
                  (r = i.env("slug") || u.pathname || ""),
                  i.scroll.off(g),
                  (a = []);
                for (var t = document.links, o = 0; o < t.length; ++o)
                  (function (t) {
                    if (t.getAttribute("hreflang")) return;
                    var i =
                      (n && t.getAttribute("href-disabled")) ||
                      t.getAttribute("href");
                    if (((l.href = i), i.indexOf(":") >= 0)) return;
                    var o = e(t);
                    if (
                      l.hash.length > 1 &&
                      l.host + l.pathname === u.host + u.pathname
                    ) {
                      if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                      var s = e(l.hash);
                      s.length && a.push({ link: o, sec: s, active: !1 });
                      return;
                    }
                    if ("#" !== i && "" !== i)
                      E(
                        o,
                        d,
                        l.href === u.href || i === r || (f.test(i) && p.test(r))
                      );
                  })(t[o]);
                a.length && (i.scroll.on(g), g());
              };
          function g() {
            var e = s.scrollTop(),
              n = s.height();
            t.each(a, function (t) {
              if (t.link.attr("hreflang")) return;
              var i = t.link,
                a = t.sec,
                r = a.offset().top,
                o = a.outerHeight(),
                s = 0.5 * n,
                c = a.is(":visible") && r + o - s >= e && r + s <= e + n;
              if (t.active !== c) (t.active = c), E(i, d, c);
            });
          }
          function E(e, t, n) {
            var i = e.hasClass(t);
            if ((!n || !i) && (!!n || !!i))
              n ? e.addClass(t) : e.removeClass(t);
          }
          return o;
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = (function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? null
              : window.history,
            r = e(window),
            o = e(document),
            s = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            u = i.env("editor") ? ".w-editor-body" : "body",
            l =
              "header, " +
              u +
              " > .header, " +
              u +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function m(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function I(t) {
            var o,
              u = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(u.className))
              )
            ) {
              var d = ((o = u),
              g.test(o.hash) && o.host + o.pathname === n.host + n.pathname)
                ? u.hash
                : "";
              if ("" !== d) {
                var f = e(d);
                if (!f.length) return;
                t && (t.preventDefault(), t.stopPropagation()),
                  (function (e) {
                    n.hash !== e &&
                      a &&
                      a.pushState &&
                      !(i.env.chrome && "file:" === n.protocol) &&
                      (a.state && a.state.hash) !== e &&
                      a.pushState({ hash: e }, "", e);
                  })(d, t),
                  window.setTimeout(
                    function () {
                      (function (t, n) {
                        var i = r.scrollTop(),
                          a = (function (t) {
                            var n = e(l),
                              i =
                                "fixed" === n.css("position")
                                  ? n.outerHeight()
                                  : 0,
                              a = t.offset().top - i;
                            if ("mid" === t.data("scroll")) {
                              var o = r.height() - i,
                                s = t.outerHeight();
                              s < o && (a -= Math.round((o - s) / 2));
                            }
                            return a;
                          })(t);
                        if (i !== a) {
                          var o = (function (e, t, n) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                E.matches
                              )
                                return 0;
                              var i = 1;
                              return (
                                s.add(e).each(function (e, t) {
                                  var n = parseFloat(
                                    t.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(n) && n >= 0 && (i = n);
                                }),
                                (472.143 * Math.log(Math.abs(t - n) + 125) -
                                  2e3) *
                                  i
                              );
                            })(t, i, a),
                            u = Date.now(),
                            d = function () {
                              var e = Date.now() - u;
                              window.scroll(
                                0,
                                (function (e, t, n, i) {
                                  return n > i
                                    ? t
                                    : e +
                                        (t - e) *
                                          (function (e) {
                                            return e < 0.5
                                              ? 4 * e * e * e
                                              : (e - 1) *
                                                  (2 * e - 2) *
                                                  (2 * e - 2) +
                                                  1;
                                          })(n / i);
                                })(i, a, e, o)
                              ),
                                e <= o ? c(d) : "function" == typeof n && n();
                            };
                          c(d);
                        }
                      })(f, function () {
                        m(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          m(f, "remove");
                      });
                    },
                    t ? 0 : 300
                  );
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, I),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              s = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              if (!t || !(t.length > 1))
                (r = !0),
                  t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                  (a = i);
            }
            function u(t) {
              if (!!r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i = t.touches,
                  c = i ? i[0].clientX : t.clientX,
                  u = c - a;
                (a = c),
                  Math.abs(u) > s &&
                    n &&
                    "" === String(n()) &&
                    ((function (t, n, i) {
                      var a = e.Event(t, { originalEvent: n });
                      e(n.target).trigger(a, i);
                    })("swipe", t, { direction: u > 0 ? "right" : "left" }),
                    d());
              }
            }
            function l(e) {
              if (!!r) {
                if (((r = !1), o && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (o = !1);
                  return;
                }
              }
            }
            function d() {
              r = !1;
            }
            t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", u, !1),
              t.addEventListener("touchend", l, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", u, !1),
              t.addEventListener("mouseup", l, !1),
              t.addEventListener("mouseout", d, !1);
            this.destroy = function () {
              t.removeEventListener("touchstart", c, !1),
                t.removeEventListener("touchmove", u, !1),
                t.removeEventListener("touchend", l, !1),
                t.removeEventListener("touchcancel", d, !1),
                t.removeEventListener("mousedown", c, !1),
                t.removeEventListener("mousemove", u, !1),
                t.removeEventListener("mouseup", l, !1),
                t.removeEventListener("mouseout", d, !1),
                (t = null);
            };
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      i.define(
        "dropdown",
        (e.exports = function (e, t) {
          var n,
            s,
            c = t.debounce,
            u = {},
            l = i.env(),
            d = !1,
            f = i.env.touch,
            p = ".w-dropdown",
            g = "w--open",
            E = a.triggers,
            m = "focusout" + p,
            I = "keydown" + p,
            y = "mouseenter" + p,
            T = "mousemove" + p,
            O = "mouseleave" + p,
            h = (f ? "click" : "mouseup") + p,
            b = "w-close" + p,
            v = "setting" + p,
            _ = e(document);
          function A() {
            (n = l && i.env("design")), (s = _.find(p)).each(S);
          }
          function S(t, a) {
            var s = e(a),
              u = e.data(a, p);
            !u &&
              (u = e.data(a, p, {
                open: !1,
                el: s,
                config: {},
                selectedIdx: -1,
              })),
              (u.toggle = u.el.children(".w-dropdown-toggle")),
              (u.list = u.el.children(".w-dropdown-list")),
              (u.links = u.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (u.complete = (function (e) {
                return function () {
                  e.list.removeClass(g),
                    e.toggle.removeClass(g),
                    e.manageZ && e.el.css("z-index", "");
                };
              })(u)),
              (u.mouseLeave = (function (e) {
                return function () {
                  (e.hovering = !1), !e.links.is(":focus") && C(e);
                };
              })(u)),
              (u.mouseUpOutside = (function (t) {
                return (
                  t.mouseUpOutside && _.off(h, t.mouseUpOutside),
                  c(function (n) {
                    if (!t.open) return;
                    var a = e(n.target);
                    if (!a.closest(".w-dropdown-toggle").length) {
                      var r = -1 === e.inArray(t.el[0], a.parents(p)),
                        o = i.env("editor");
                      if (r) {
                        if (o) {
                          var s =
                              1 === a.parents().length &&
                              1 === a.parents("svg").length,
                            c = a.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (s || c) return;
                        }
                        C(t);
                      }
                    }
                  })
                );
              })(u)),
              (u.mouseMoveOutside = (function (t) {
                return c(function (n) {
                  if (!!t.open) {
                    var i = e(n.target);
                    if (-1 === e.inArray(t.el[0], i.parents(p))) {
                      var a = i.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        r = i.parents(".w-editor-bem-RTToolbar").length,
                        o = e(".w-editor-bem-EditorOverlay"),
                        s =
                          o.find(".w-editor-edit-outline").length ||
                          o.find(".w-editor-bem-RTToolbar").length;
                      if (a || r || s) return;
                      (t.hovering = !1), C(t);
                    }
                  }
                });
              })(u)),
              R(u);
            var d = u.toggle.attr("id"),
              f = u.list.attr("id");
            !d && (d = "w-dropdown-toggle-" + t),
              !f && (f = "w-dropdown-list-" + t),
              u.toggle.attr("id", d),
              u.toggle.attr("aria-controls", f),
              u.toggle.attr("aria-haspopup", "menu"),
              u.toggle.attr("aria-expanded", "false"),
              u.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== u.toggle.prop("tagName") &&
                (u.toggle.attr("role", "button"),
                !u.toggle.attr("tabindex") && u.toggle.attr("tabindex", "0")),
              u.list.attr("id", f),
              u.list.attr("aria-labelledby", d),
              u.links.each(function (e, t) {
                !t.hasAttribute("tabindex") && t.setAttribute("tabindex", "0"),
                  o.test(t.hash) &&
                    t.addEventListener("click", C.bind(null, u));
              }),
              u.el.off(p),
              u.toggle.off(p),
              u.nav && u.nav.off(p);
            var E = L(u, !0);
            n &&
              u.el.on(
                v,
                (function (e) {
                  return function (t, n) {
                    (n = n || {}),
                      R(e),
                      !0 === n.open && N(e),
                      !1 === n.open && C(e, { immediate: !0 });
                  };
                })(u)
              ),
              !n &&
                (l && ((u.hovering = !1), C(u)),
                u.config.hover &&
                  u.toggle.on(
                    y,
                    (function (e) {
                      return function () {
                        (e.hovering = !0), N(e);
                      };
                    })(u)
                  ),
                u.el.on(b, E),
                u.el.on(
                  I,
                  (function (e) {
                    return function (t) {
                      if (!n && !!e.open)
                        switch (
                          ((e.selectedIdx = e.links.index(
                            document.activeElement
                          )),
                          t.keyCode)
                        ) {
                          case r.HOME:
                            if (!e.open) return;
                            return (
                              (e.selectedIdx = 0), w(e), t.preventDefault()
                            );
                          case r.END:
                            if (!e.open) return;
                            return (
                              (e.selectedIdx = e.links.length - 1),
                              w(e),
                              t.preventDefault()
                            );
                          case r.ESCAPE:
                            return C(e), e.toggle.focus(), t.stopPropagation();
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (e.selectedIdx = Math.min(
                                e.links.length - 1,
                                e.selectedIdx + 1
                              )),
                              w(e),
                              t.preventDefault()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (e.selectedIdx = Math.max(-1, e.selectedIdx - 1)),
                              w(e),
                              t.preventDefault()
                            );
                        }
                    };
                  })(u)
                ),
                u.el.on(
                  m,
                  (function (e) {
                    return c(function (t) {
                      var { relatedTarget: n, target: i } = t,
                        a = e.el[0];
                      return (
                        !(a.contains(n) || a.contains(i)) && C(e),
                        t.stopPropagation()
                      );
                    });
                  })(u)
                ),
                u.toggle.on(h, E),
                u.toggle.on(
                  I,
                  (function (e) {
                    var t = L(e, !0);
                    return function (i) {
                      if (!n) {
                        if (!e.open)
                          switch (i.keyCode) {
                            case r.ARROW_UP:
                            case r.ARROW_DOWN:
                              return i.stopPropagation();
                          }
                        switch (i.keyCode) {
                          case r.SPACE:
                          case r.ENTER:
                            return t(), i.stopPropagation(), i.preventDefault();
                        }
                      }
                    };
                  })(u)
                ),
                (u.nav = u.el.closest(".w-nav")),
                u.nav.on(b, E));
          }
          function R(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              });
          }
          (u.ready = A),
            (u.design = function () {
              d &&
                (function () {
                  _.find(p).each(function (t, n) {
                    e(n).triggerHandler(b);
                  });
                })(),
                (d = !1),
                A();
            }),
            (u.preview = function () {
              (d = !0), A();
            });
          function L(e, t) {
            return c(function (n) {
              if (e.open || (n && "w-close" === n.type))
                return C(e, { forceClose: t });
              N(e);
            });
          }
          function N(t) {
            if (!t.open) {
              (function (t) {
                var n = t.el[0];
                s.each(function (t, i) {
                  var a = e(i);
                  if (!a.is(n) && !a.has(n).length) a.triggerHandler(b);
                });
              })(t),
                (t.open = !0),
                t.list.addClass(g),
                t.toggle.addClass(g),
                t.toggle.attr("aria-expanded", "true"),
                E.intro(0, t.el[0]),
                i.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var a = i.env("editor");
              !n && _.on(h, t.mouseUpOutside),
                t.hovering && !a && t.el.on(O, t.mouseLeave),
                t.hovering && a && _.on(T, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function C(e, { immediate: t, forceClose: n } = {}) {
            if (!!e.open && (!e.config.hover || !e.hovering || !!n)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var i = e.config;
              if (
                (E.outro(0, e.el[0]),
                _.off(h, e.mouseUpOutside),
                _.off(T, e.mouseMoveOutside),
                e.el.off(O, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !i.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, i.delay);
            }
          }
          function w(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return u;
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, i, a, r, o, s, c, u, l, d, f) {
        return function (p) {
          e(p);
          var g = p.form,
            E = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: d("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: i(),
            };
          let m = g.attr("data-wf-flow");
          m && (E.wfFlow = m), a(p);
          var I = r(g, E.fields);
          if (I) return o(I);
          if (((E.fileUploads = s(g)), c(p), !u)) {
            l(p);
            return;
          }
          d.ajax({
            url: f,
            type: "POST",
            data: E,
            dataType: "json",
            crossDomain: !0,
          })
            .done(function (e) {
              e && 200 === e.code && (p.success = !0), l(p);
            })
            .fail(function () {
              l(p);
            });
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var i = n(3949);
      let a = (e, t, n, i) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              i();
            },
          });
      };
      i.define(
        "forms",
        (e.exports = function (e, t) {
          let r;
          let o = "TURNSTILE_LOADED";
          var s,
            c,
            u,
            l,
            d,
            f = {},
            p = e(document),
            g = window.location,
            E = window.XDomainRequest && !window.atob,
            m = ".w-form",
            I = /e(-)?mail/i,
            y = /^\S+@\S+$/,
            T = window.alert,
            O = i.env();
          let h = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var b = /list-manage[1-9]?.com/i,
            v = t.debounce(function () {
              T(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          f.ready =
            f.design =
            f.preview =
              function () {
                (function () {
                  h &&
                    (((r = document.createElement("script")).src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                    document.head.appendChild(r),
                    (r.onload = () => {
                      p.trigger(o);
                    }));
                })(),
                  (function () {
                    if (
                      ((l =
                        "https://webflow.com/api/v1/form/" +
                        (c = e("html").attr("data-wf-site"))),
                      E &&
                        l.indexOf("https://webflow.com") >= 0 &&
                        (l = l.replace(
                          "https://webflow.com",
                          "https://formdata.webflow.com"
                        )),
                      (d = `${l}/signFile`),
                      !!(s = e(m + " form")).length)
                    )
                      s.each(_);
                  })(),
                  !O &&
                    !u &&
                    (function () {
                      (u = !0),
                        p.on("submit", m + " form", function (t) {
                          var n = e.data(this, m);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        i = "w--redirected-checked",
                        a = "w--redirected-focus",
                        r = "w--redirected-focus-visible",
                        o = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        m + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(i);
                        }
                      ),
                        p.on("change", m + ' form input[type="radio"]', (a) => {
                          e(`input[name="${a.target.name}"]:not(${t})`).map(
                            (t, a) => e(a).siblings(n).removeClass(i)
                          );
                          let r = e(a.target);
                          !r.hasClass("w-radio-input") &&
                            r.siblings(n).addClass(i);
                        }),
                        o.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            m + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(a),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(r);
                            }
                          ),
                            p.on(
                              "blur",
                              m + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${a} ${r}`);
                              }
                            );
                        });
                    })();
              };
          function _(t, r) {
            var s = e(r),
              u = e.data(r, m);
            !u && (u = e.data(r, m, { form: s })), A(u);
            var f = s.closest("div.w-form");
            (u.done = f.find("> .w-form-done")),
              (u.fail = f.find("> .w-form-fail")),
              (u.fileUploads = f.find(".w-file-upload")),
              u.fileUploads.each(function (t) {
                (function (t, n) {
                  if (!!n.fileUploads && !!n.fileUploads[t]) {
                    var i,
                      a = e(n.fileUploads[t]),
                      r = a.find("> .w-file-upload-default"),
                      o = a.find("> .w-file-upload-uploading"),
                      s = a.find("> .w-file-upload-success"),
                      c = a.find("> .w-file-upload-error"),
                      u = r.find(".w-file-upload-input"),
                      l = r.find(".w-file-upload-label"),
                      f = l.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      g = s.find(".w-file-upload-file"),
                      E = s.find(".w-file-remove-link"),
                      m = g.find(".w-file-upload-file-name"),
                      I = p.attr("data-w-size-error"),
                      y = p.attr("data-w-type-error"),
                      T = p.attr("data-w-generic-error");
                    if (
                      (!O &&
                        l.on("click keydown", function (e) {
                          if (
                            "keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which
                          )
                            e.preventDefault(), u.click();
                        }),
                      l
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      E.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      O)
                    )
                      u.on("click", function (e) {
                        e.preventDefault();
                      }),
                        l.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      E.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        u.removeAttr("data-value"),
                          u.val(""),
                          m.html(""),
                          r.toggle(!0),
                          s.toggle(!1),
                          l.focus();
                      }),
                        u.on("change", function (a) {
                          if (
                            !!(i =
                              a.target && a.target.files && a.target.files[0])
                          )
                            r.toggle(!1),
                              c.toggle(!1),
                              o.toggle(!0),
                              o.focus(),
                              m.text(i.name),
                              !R() && S(n),
                              (n.fileUploads[t].uploading = !0),
                              (function (t, n) {
                                var i = new URLSearchParams({
                                  name: t.name,
                                  size: t.size,
                                });
                                e.ajax({
                                  type: "GET",
                                  url: `${d}?${i}`,
                                  crossDomain: !0,
                                })
                                  .done(function (e) {
                                    n(null, e);
                                  })
                                  .fail(function (e) {
                                    n(e);
                                  });
                              })(i, v);
                        });
                      var h = l.outerHeight();
                      u.height(h), u.width(1);
                    }
                  }
                  function b(e) {
                    var i = e.responseJSON && e.responseJSON.msg,
                      a = T;
                    "string" == typeof i &&
                    0 === i.indexOf("InvalidFileTypeError")
                      ? (a = y)
                      : "string" == typeof i &&
                        0 === i.indexOf("MaxFileSizeError") &&
                        (a = I),
                      p.text(a),
                      u.removeAttr("data-value"),
                      u.val(""),
                      o.toggle(!1),
                      r.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      !R() && A(n);
                  }
                  function v(t, n) {
                    if (t) return b(t);
                    var a = n.fileName,
                      r = n.postData,
                      o = n.fileId,
                      s = n.s3Url;
                    u.attr("data-value", o),
                      (function (t, n, i, a, r) {
                        var o = new FormData();
                        for (var s in n) o.append(s, n[s]);
                        o.append("file", i, a),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              r(null);
                            })
                            .fail(function (e) {
                              r(e);
                            });
                      })(s, r, i, a, _);
                  }
                  function _(e) {
                    if (e) return b(e);
                    o.toggle(!1),
                      s.css("display", "inline-block"),
                      s.focus(),
                      (n.fileUploads[t].uploading = !1),
                      !R() && A(n);
                  }
                  function R() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, u);
              }),
              h &&
                ((u.wait = !1),
                S(u),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : o,
                  function () {
                    a(
                      h,
                      r,
                      (e) => {
                        (u.turnstileToken = e), A(u);
                      },
                      () => {
                        S(u);
                      }
                    );
                  }
                ));
            var E =
              u.form.attr("aria-label") || u.form.attr("data-name") || "Form";
            !u.done.attr("aria-label") && u.form.attr("aria-label", E),
              u.done.attr("tabindex", "-1"),
              u.done.attr("role", "region"),
              !u.done.attr("aria-label") &&
                u.done.attr("aria-label", E + " success"),
              u.fail.attr("tabindex", "-1"),
              u.fail.attr("role", "region"),
              !u.fail.attr("aria-label") &&
                u.fail.attr("aria-label", E + " failure");
            var I = (u.action = s.attr("action"));
            if (
              ((u.handler = null),
              (u.redirect = s.attr("data-redirect")),
              b.test(I))
            ) {
              u.handler = w;
              return;
            }
            if (!I) {
              if (c) {
                u.handler = (0, n(6524).default)(
                  A,
                  g,
                  i,
                  C,
                  G,
                  R,
                  T,
                  L,
                  S,
                  c,
                  P,
                  e,
                  l
                );
                return;
              }
              v();
            }
          }
          function A(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null),
              (e.success = !1),
              t.prop("disabled", !!(h && !e.turnstileToken)),
              e.label && t.val(e.label);
          }
          function S(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function R(t, n) {
            var i = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (a, r) {
                  var o = e(r),
                    s = o.attr("type"),
                    c =
                      o.attr("data-name") ||
                      o.attr("name") ||
                      "Field " + (a + 1);
                  c = encodeURIComponent(c);
                  var u = o.val();
                  if ("checkbox" === s) u = o.is(":checked");
                  else if ("radio" === s) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    u =
                      t
                        .find('input[name="' + o.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof u && (u = e.trim(u)),
                    (n[c] = u),
                    (i =
                      i ||
                      (function (e, t, n, i) {
                        var a = null;
                        return (
                          "password" === t
                            ? (a = "Passwords cannot be submitted.")
                            : e.attr("required")
                            ? i
                              ? I.test(e.attr("type")) &&
                                !y.test(i) &&
                                (a =
                                  "Please enter a valid email address for: " +
                                  n)
                              : (a = "Please fill out the required field: " + n)
                            : "g-recaptcha-response" === n &&
                              !i &&
                              (a = "Please confirm you’re not a robot."),
                          a
                        );
                      })(o, s, c, u));
                }),
              i
            );
          }
          function L(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                "string" == typeof o && (o = e.trim(o)), (n[r] = o);
              }),
              n
            );
          }
          let N = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                i = n[0];
              if (i in N) {
                let t = N[i],
                  a = n.slice(1).join("=");
                e[t] = a;
              }
              return e;
            }, {});
          }
          function w(n) {
            A(n);
            var i,
              a = n.form,
              r = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action)) {
              a.attr("method", "post");
              return;
            }
            G(n);
            var o = R(a, r);
            if (o) return T(o);
            S(n),
              t.each(r, function (e, t) {
                I.test(t) && (r.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (i = e),
                  /^(first[ _-]?name)$/i.test(t) && (r.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (r.LNAME = e);
              }),
              i &&
                !r.FNAME &&
                ((i = i.split(" ")),
                (r.FNAME = i[0]),
                (r.LNAME = r.LNAME || i[1]));
            var s = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = s.indexOf("u=") + 2;
            c = s.substring(c, s.indexOf("&", c));
            var u = s.indexOf("id=") + 3;
            (r["b_" + c + "_" + (u = s.substring(u, s.indexOf("&", u)))] = ""),
              e
                .ajax({ url: s, data: r, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    !n.success && console.info("MailChimp error: " + e.msg),
                    P(n);
                })
                .fail(function () {
                  P(n);
                });
          }
          function P(e) {
            var t = e.form,
              n = e.redirect,
              a = e.success;
            if (a && n) {
              i.location(n);
              return;
            }
            e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              A(e);
          }
          function G(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        actionListPlaybackChanged: function () {
          return j;
        },
        animationFrameChanged: function () {
          return U;
        },
        clearRequested: function () {
          return G;
        },
        elementStateChanged: function () {
          return X;
        },
        eventListenerAdded: function () {
          return F;
        },
        eventStateChanged: function () {
          return x;
        },
        instanceAdded: function () {
          return k;
        },
        instanceRemoved: function () {
          return B;
        },
        instanceStarted: function () {
          return V;
        },
        mediaQueriesDefined: function () {
          return z;
        },
        parameterChanged: function () {
          return D;
        },
        playbackRequested: function () {
          return w;
        },
        previewRequested: function () {
          return C;
        },
        rawDataImported: function () {
          return S;
        },
        sessionInitialized: function () {
          return R;
        },
        sessionStarted: function () {
          return L;
        },
        sessionStopped: function () {
          return N;
        },
        stopRequested: function () {
          return P;
        },
        testFrameRendered: function () {
          return M;
        },
        viewportWidthChanged: function () {
          return H;
        },
      });
      let i = n(7087),
        a = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: c,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: l,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: f,
          IX2_EVENT_LISTENER_ADDED: p,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: E,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: I,
          IX2_INSTANCE_ADDED: y,
          IX2_INSTANCE_STARTED: T,
          IX2_INSTANCE_REMOVED: O,
          IX2_ELEMENT_STATE_CHANGED: h,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: b,
          IX2_VIEWPORT_WIDTH_CHANGED: v,
          IX2_MEDIA_QUERIES_DEFINED: _,
        } = i.IX2EngineActionTypes,
        { reifyState: A } = a.IX2VanillaUtils,
        S = (e) => ({ type: r, payload: { ...A(e) } }),
        R = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: o,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        L = () => ({ type: s }),
        N = () => ({ type: c }),
        C = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        w = ({
          actionTypeId: e = i.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: r,
          immediate: o,
          testManual: s,
          verbose: c,
          rawData: u,
        }) => ({
          type: l,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: s,
            eventId: a,
            allowEvents: r,
            immediate: o,
            verbose: c,
            rawData: u,
          },
        }),
        P = (e) => ({ type: d, payload: { actionListId: e } }),
        G = () => ({ type: f }),
        F = (e, t) => ({ type: p, payload: { target: e, listenerParams: t } }),
        M = (e = 1) => ({ type: g, payload: { step: e } }),
        x = (e, t) => ({ type: E, payload: { stateKey: e, newState: t } }),
        U = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
        D = (e, t) => ({ type: I, payload: { key: e, value: t } }),
        k = (e) => ({ type: y, payload: { ...e } }),
        V = (e, t) => ({ type: T, payload: { instanceId: e, time: t } }),
        B = (e) => ({ type: O, payload: { instanceId: e } }),
        X = (e, t, n, i) => ({
          type: h,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        j = ({ actionListId: e, isPlaying: t }) => ({
          type: b,
          payload: { actionListId: e, isPlaying: t },
        }),
        H = ({ width: e, mediaQueries: t }) => ({
          type: v,
          payload: { width: e, mediaQueries: t },
        }),
        z = () => ({ type: _ });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        actions: function () {
          return o;
        },
        destroy: function () {
          return d;
        },
        init: function () {
          return l;
        },
        setEnv: function () {
          return u;
        },
        store: function () {
          return c;
        },
      });
      let i = n(9516),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(7243)),
        r = n(1970),
        o = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let c = (0, i.createStore)(a.default);
      function u(e) {
        e() && (0, r.observeRequests)(c);
      }
      function l(e) {
        d(), (0, r.startEngine)({ store: c, rawData: e, allowEvents: !0 });
      }
      function d() {
        (0, r.stopEngine)(c);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        elementContains: function () {
          return I;
        },
        getChildElements: function () {
          return T;
        },
        getClosestElement: function () {
          return h;
        },
        getProperty: function () {
          return f;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return b;
        },
        getSiblingElements: function () {
          return O;
        },
        getStyle: function () {
          return d;
        },
        getValidDocument: function () {
          return E;
        },
        isSiblingNode: function () {
          return y;
        },
        matchSelector: function () {
          return p;
        },
        queryDocument: function () {
          return m;
        },
        setStyle: function () {
          return l;
        },
      });
      let i = n(9468),
        a = n(7087),
        { ELEMENT_MATCHES: r } = i.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: o,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: c,
          WF_PAGE: u,
        } = a.IX2EngineConstants;
      function l(e, t, n) {
        e.style[t] = n;
      }
      function d(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function f(e, t) {
        return e[t];
      }
      function p(e) {
        return (t) => t[r](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(o)) {
            let n = e.split(o),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function E(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function m(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function I(e, t) {
        return e.contains(t);
      }
      function y(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function T(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (!!a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function O(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let h = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[r] && n[r](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function b(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : c
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        observeRequests: function () {
          return $;
        },
        startActionGroup: function () {
          return ef;
        },
        startEngine: function () {
          return et;
        },
        stopActionGroup: function () {
          return ed;
        },
        stopAllActionGroups: function () {
          return el;
        },
        stopEngine: function () {
          return en;
        },
      });
      let i = m(n(9777)),
        a = m(n(4738)),
        r = m(n(4659)),
        o = m(n(3452)),
        s = m(n(6633)),
        c = m(n(3729)),
        u = m(n(2397)),
        l = m(n(5082)),
        d = n(7087),
        f = n(9468),
        p = n(3946),
        g = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = I(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        E = m(n(8955));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (I = function (e) {
          return e ? n : t;
        })(e);
      }
      let y = Object.keys(d.QuickEffectIds),
        T = (e) => y.includes(e),
        {
          COLON_DELIMITER: O,
          BOUNDARY_SELECTOR: h,
          HTML_ELEMENT: b,
          RENDER_GENERAL: v,
          W_MOD_IX: _,
        } = d.IX2EngineConstants,
        {
          getAffectedElements: A,
          getElementId: S,
          getDestinationValues: R,
          observeStore: L,
          getInstanceId: N,
          renderHTMLElement: C,
          clearAllStyles: w,
          getMaxDurationItemIndex: P,
          getComputedStyle: G,
          getInstanceOrigin: F,
          reduceListToGroup: M,
          shouldNamespaceEventParameter: x,
          getNamespacedParameterId: U,
          shouldAllowMediaQuery: D,
          cleanupHTMLElement: k,
          clearObjectCache: V,
          stringifyTarget: B,
          mediaQueriesEqual: X,
          shallowEqual: j,
        } = f.IX2VanillaUtils,
        {
          isPluginType: H,
          createPluginInstance: z,
          getPluginDuration: W,
        } = f.IX2VanillaPlugins,
        Q = navigator.userAgent,
        Y = Q.match(/iPad/i) || Q.match(/iPhone/);
      function $(e) {
        L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: q }),
          L({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: Z,
          }),
          L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
          L({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ee });
      }
      function q({ rawData: e, defer: t }, n) {
        let i = () => {
          et({ store: n, rawData: e, allowEvents: !0 }), K();
        };
        t ? setTimeout(i, 0) : i();
      }
      function K() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function Z(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: s,
            testManual: c,
            verbose: u = !0,
          } = e,
          { rawData: l } = e;
        if (i && a && l && s) {
          let e = l.actionLists[i];
          e && (l = M({ actionList: e, actionItemId: a, rawData: l }));
        }
        if (
          (et({ store: t, rawData: l, allowEvents: o, testManual: c }),
          (i && n === d.ActionTypeConsts.GENERAL_START_ACTION) || T(n))
        ) {
          ed({ store: t, actionListId: i }),
            eu({ store: t, actionListId: i, eventId: r });
          let e = ef({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: s,
            verbose: u,
          });
          u &&
            e &&
            t.dispatch(
              (0, p.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !s,
              })
            );
        }
      }
      function J({ actionListId: e }, t) {
        e ? ed({ store: t, actionListId: e }) : el({ store: t }), en(t);
      }
      function ee(e, t) {
        en(t), w({ store: t, elementApi: g });
      }
      function et({ store: e, rawData: t, allowEvents: n, testManual: o }) {
        let { ixSession: s } = e.getState();
        if ((t && e.dispatch((0, p.rawDataImported)(t)), !s.active)) {
          if (
            (e.dispatch(
              (0, p.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(h),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            n &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: n } = t;
                er(e),
                  (0, u.default)(n, (t, n) => {
                    let o = E.default[n];
                    if (!o) {
                      console.warn(`IX2 event type not configured: ${n}`);
                      return;
                    }
                    (function ({ logic: e, store: t, events: n }) {
                      (function (e) {
                        if (!Y) return;
                        let t = {},
                          n = "";
                        for (let i in e) {
                          let { eventTypeId: a, target: r } = e[i],
                            o = g.getQuerySelector(r);
                          if (!t[o])
                            (a === d.EventTypeConsts.MOUSE_CLICK ||
                              a === d.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[o] = !0),
                              (n +=
                                o +
                                "{cursor: pointer;touch-action: manipulation;}"));
                        }
                        if (n) {
                          let e = document.createElement("style");
                          (e.textContent = n), document.body.appendChild(e);
                        }
                      })(n);
                      let { types: o, handler: s } = e,
                        { ixData: c } = t.getState(),
                        { actionLists: f } = c,
                        E = eo(n, ec);
                      if (!(0, r.default)(E)) return;
                      (0, u.default)(E, (e, r) => {
                        let o = n[r],
                          {
                            action: s,
                            id: u,
                            mediaQueries: l = c.mediaQueryKeys,
                          } = o,
                          { actionListId: E } = s.config;
                        !X(l, c.mediaQueryKeys) &&
                          t.dispatch((0, p.mediaQueriesDefined)()),
                          s.actionTypeId ===
                            d.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(o.config)
                              ? o.config
                              : [o.config]
                            ).forEach((n) => {
                              let { continuousParameterGroupId: r } = n,
                                o = (0, a.default)(
                                  f,
                                  `${E}.continuousParameterGroups`,
                                  []
                                ),
                                s = (0, i.default)(o, ({ id: e }) => e === r),
                                c = (n.smoothing || 0) / 100,
                                l = (n.restingState || 0) / 100;
                              if (!!s)
                                e.forEach((e, i) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: n,
                                    eventId: i,
                                    eventConfig: r,
                                    actionListId: o,
                                    parameterGroup: s,
                                    smoothing: c,
                                    restingValue: u,
                                  }) {
                                    let { ixData: l, ixSession: f } =
                                        e.getState(),
                                      { events: p } = l,
                                      E = p[i],
                                      { eventTypeId: m } = E,
                                      I = {},
                                      y = {},
                                      T = [],
                                      { continuousActionGroups: b } = s,
                                      { id: v } = s;
                                    x(m, r) && (v = U(t, v));
                                    let _ =
                                      f.hasBoundaryNodes && n
                                        ? g.getClosestElement(n, h)
                                        : null;
                                    b.forEach((e) => {
                                      let { keyframe: t, actionItems: i } = e;
                                      i.forEach((e) => {
                                        let { actionTypeId: i } = e,
                                          { target: a } = e.config;
                                        if (!a) return;
                                        let r = a.boundaryMode ? _ : null,
                                          o = B(a) + O + i;
                                        if (
                                          ((y[o] = (function (e = [], t, n) {
                                            let i;
                                            let a = [...e];
                                            return (
                                              a.some(
                                                (e, n) =>
                                                  e.keyframe === t &&
                                                  ((i = n), !0)
                                              ),
                                              null == i &&
                                                ((i = a.length),
                                                a.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              a[i].actionItems.push(n),
                                              a
                                            );
                                          })(y[o], t, e)),
                                          !I[o])
                                        ) {
                                          I[o] = !0;
                                          let { config: t } = e;
                                          A({
                                            config: t,
                                            event: E,
                                            eventTarget: n,
                                            elementRoot: r,
                                            elementApi: g,
                                          }).forEach((e) => {
                                            T.push({ element: e, key: o });
                                          });
                                        }
                                      });
                                    }),
                                      T.forEach(({ element: t, key: n }) => {
                                        let r = y[n],
                                          s = (0, a.default)(
                                            r,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: l } = s,
                                          f = (
                                            l === d.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  s.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : H(l)
                                          )
                                            ? z(l)?.(t, s)
                                            : null,
                                          p = R(
                                            {
                                              element: t,
                                              actionItem: s,
                                              elementApi: g,
                                            },
                                            f
                                          );
                                        ep({
                                          store: e,
                                          element: t,
                                          eventId: i,
                                          actionListId: o,
                                          actionItem: s,
                                          destination: p,
                                          continuous: !0,
                                          parameterId: v,
                                          actionGroups: r,
                                          smoothing: c,
                                          restingValue: u,
                                          pluginInstance: f,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: u + O + i,
                                    eventTarget: e,
                                    eventId: u,
                                    eventConfig: n,
                                    actionListId: E,
                                    parameterGroup: s,
                                    smoothing: c,
                                    restingValue: l,
                                  });
                                });
                            }),
                          (s.actionTypeId ===
                            d.ActionTypeConsts.GENERAL_START_ACTION ||
                            T(s.actionTypeId)) &&
                            eu({ store: t, actionListId: E, eventId: u });
                      });
                      let m = (e) => {
                          let { ixSession: i } = t.getState();
                          es(E, (a, r, o) => {
                            let u = n[r],
                              l = i.eventState[o],
                              {
                                action: f,
                                mediaQueries: g = c.mediaQueryKeys,
                              } = u;
                            if (!D(g, i.mediaQueryKey)) return;
                            let E = (n = {}) => {
                              let i = s(
                                {
                                  store: t,
                                  element: a,
                                  event: u,
                                  eventConfig: n,
                                  nativeEvent: e,
                                  eventStateKey: o,
                                },
                                l
                              );
                              !j(i, l) &&
                                t.dispatch((0, p.eventStateChanged)(o, i));
                            };
                            f.actionTypeId ===
                            d.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(u.config)
                                  ? u.config
                                  : [u.config]
                                ).forEach(E)
                              : E();
                          });
                        },
                        I = (0, l.default)(m, 12),
                        y = ({
                          target: e = document,
                          types: n,
                          throttle: i,
                        }) => {
                          n.split(" ")
                            .filter(Boolean)
                            .forEach((n) => {
                              let a = i ? I : m;
                              e.addEventListener(n, a),
                                t.dispatch(
                                  (0, p.eventListenerAdded)(e, [n, a])
                                );
                            });
                        };
                      Array.isArray(o)
                        ? o.forEach(y)
                        : "string" == typeof o && y(e);
                    })({ logic: o, store: e, events: t });
                  });
                let { ixSession: o } = e.getState();
                o.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      er(e);
                    };
                    ea.forEach((n) => {
                      window.addEventListener(n, t),
                        e.dispatch((0, p.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(_) && (e.className += ` ${_}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries))
          ) {
            var c;
            L({
              store: (c = e),
              select: ({ ixSession: e }) => e.mediaQueryKey,
              onChange: () => {
                en(c),
                  w({ store: c, elementApi: g }),
                  et({ store: c, allowEvents: !0 }),
                  K();
              },
            });
          }
          e.dispatch((0, p.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                a.active &&
                  (e.dispatch((0, p.animationFrameChanged)(i, r)),
                  t
                    ? !(function (e, t) {
                        let n = L({
                          store: e,
                          select: ({ ixSession: e }) => e.tick,
                          onChange: (e) => {
                            t(e), n();
                          },
                        });
                      })(e, n)
                    : requestAnimationFrame(n));
              };
              n(window.performance.now());
            })(e, o);
        }
      }
      function en(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(ei), V(), e.dispatch((0, p.sessionStopped)());
        }
      }
      function ei({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let ea = ["resize", "orientationchange"];
      function er(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, p.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let eo = (e, t) => (0, o.default)((0, c.default)(e, t), s.default),
        es = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + O + i);
            });
          });
        },
        ec = (e) =>
          A({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: r } = e.getState(),
          { actionLists: o, events: s } = i,
          c = s[n],
          u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
          let o = (0, a.default)(u, "actionItemGroups[0].actionItems", []);
          if (
            !D(
              (0, a.default)(c, "mediaQueries", i.mediaQueryKeys),
              r.mediaQueryKey
            )
          )
            return;
          o.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = A({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : a,
                event: c,
                elementApi: g,
              }),
              s = H(r);
            o.forEach((a) => {
              let o = s ? z(r)?.(a, i) : null;
              ep({
                destination: R({ element: a, actionItem: i, elementApi: g }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function el({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            eg(t, e),
              i &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ed({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: r,
      }) {
        let { ixInstances: o, ixSession: s } = e.getState(),
          c = s.hasBoundaryNodes && n ? g.getClosestElement(n, h) : null;
        (0, u.default)(o, (n) => {
          let o = (0, a.default)(n, "actionItem.config.target.boundaryMode"),
            s = !i || n.eventStateKey === i;
          if (n.actionListId === r && n.eventId === t && s) {
            if (c && o && !g.elementContains(c, n.element)) return;
            eg(n, e),
              n.verbose &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: r,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ef({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: r,
        groupIndex: o = 0,
        immediate: s,
        verbose: c,
      }) {
        let { ixData: u, ixSession: l } = e.getState(),
          { events: d } = u,
          f = d[t] || {},
          { mediaQueries: p = u.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: m } = (0,
          a.default)(u, `actionLists.${r}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, a.default)(f, "config.loop") && (o = 0),
          0 === o && m && o++;
        let I =
            (0 === o || (1 === o && m)) && T(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, a.default)(E, [o, "actionItems"], []);
        if (!y.length || !D(p, l.mediaQueryKey)) return !1;
        let O = l.hasBoundaryNodes && n ? g.getClosestElement(n, h) : null,
          b = P(y),
          v = !1;
        return (
          y.forEach((a, u) => {
            let { config: l, actionTypeId: d } = a,
              p = H(d),
              { target: E } = l;
            if (!!E)
              A({
                config: l,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? O : null,
                elementApi: g,
              }).forEach((l, f) => {
                let E = p ? z(d)?.(l, a) : null,
                  m = p ? W(d)(l, a) : null;
                v = !0;
                let y = G({ element: l, actionItem: a }),
                  T = R({ element: l, actionItem: a, elementApi: g }, E);
                ep({
                  store: e,
                  element: l,
                  actionItem: a,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: r,
                  groupIndex: o,
                  isCarrier: b === u && 0 === f,
                  computedStyle: y,
                  destination: T,
                  immediate: s,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: m,
                  instanceDelay: I,
                });
              });
          }),
          v
        );
      }
      function ep(e) {
        let t;
        let { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: s,
            pluginInstance: c,
            continuous: u,
            restingValue: l,
            eventId: f,
          } = a,
          E = N(),
          { ixElements: m, ixSession: I, ixData: y } = n.getState(),
          T = S(m, r),
          { refState: O } = m[T] || {},
          h = g.getRefType(r),
          b = I.reducedMotion && d.ReducedMotionTypes[o.actionTypeId];
        if (b && u)
          switch (y.events[f]?.eventTypeId) {
            case d.EventTypeConsts.MOUSE_MOVE:
            case d.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = l;
              break;
            default:
              t = 0.5;
          }
        let v = F(r, O, i, o, g, c);
        if (
          (n.dispatch(
            (0, p.instanceAdded)({
              instanceId: E,
              elementId: T,
              origin: v,
              refType: h,
              skipMotion: b,
              skipToValue: t,
              ...a,
            })
          ),
          eE(document.body, "ix2-animation-started", E),
          s)
        ) {
          (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, p.instanceStarted)(t, 0)),
              e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            em(i[t], e);
          })(n, E);
          return;
        }
        L({ store: n, select: ({ ixInstances: e }) => e[E], onChange: em }),
          !u && n.dispatch((0, p.instanceStarted)(E, I.tick));
      }
      function eg(e, t) {
        eE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === b && k(r, i, g), t.dispatch((0, p.instanceRemoved)(e.id));
      }
      function eE(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function em(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: s,
            renderType: c,
            current: u,
            groupIndex: l,
            eventId: d,
            eventTarget: f,
            eventStateKey: E,
            actionListId: m,
            isCarrier: I,
            styleProp: y,
            verbose: T,
            pluginInstance: O,
          } = e,
          { ixData: h, ixSession: _ } = t.getState(),
          { events: A } = h,
          { mediaQueries: S = h.mediaQueryKeys } = A && A[d] ? A[d] : {};
        if (!!D(S, _.mediaQueryKey)) {
          if (i || n || a) {
            if (u || (c === v && a)) {
              t.dispatch((0, p.elementStateChanged)(r, s, u, o));
              let { ixElements: e } = t.getState(),
                { ref: n, refType: i, refState: a } = e[r] || {},
                l = a && a[s];
              (i === b || H(s)) && C(n, a, l, d, o, y, g, c, O);
            }
            if (a) {
              if (I) {
                let e = ef({
                  store: t,
                  eventId: d,
                  eventTarget: f,
                  eventStateKey: E,
                  actionListId: m,
                  groupIndex: l + 1,
                  verbose: T,
                });
                T &&
                  !e &&
                  t.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: m,
                      isPlaying: !1,
                    })
                  );
              }
              eg(e, t);
            }
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i, a, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eE;
          },
        });
      let o = p(n(5801)),
        s = p(n(4738)),
        c = p(n(3789)),
        u = n(7087),
        l = n(1970),
        d = n(3946),
        f = n(9468);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: g,
          MOUSE_SECOND_CLICK: E,
          MOUSE_DOWN: m,
          MOUSE_UP: I,
          MOUSE_OVER: y,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: O,
          DROPDOWN_OPEN: h,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: v,
          TAB_ACTIVE: _,
          TAB_INACTIVE: A,
          NAVBAR_CLOSE: S,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: L,
          PAGE_SCROLL_DOWN: N,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: w,
          PAGE_SCROLL_UP: P,
          SCROLLING_IN_VIEW: G,
          PAGE_FINISH: F,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: x,
          PAGE_START: U,
          PAGE_SCROLL: D,
        } = u.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        V = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: B } = u.IX2EngineConstants,
        { getNamespacedParameterId: X } = f.IX2VanillaUtils,
        j = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        H = j(({ element: e, nativeEvent: t }) => e === t.target),
        z = j(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, o.default)([H, z]),
        Q = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !en[a.eventTypeId]) return a;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!Q(e, i);
        },
        $ = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: r, id: o } = t,
            { actionListId: c, autoStopEventId: u } = r.config,
            d = Q(e, u);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + B + i.split(B)[1],
                actionListId: (0, s.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: o,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: o,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            a
          );
        },
        q = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        K = { handler: q(W, $) },
        Z = { ...K, types: [k, V].join(" ") },
        J = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        ee = "mouseover mouseout",
        et = { types: J },
        en = { PAGE_START: U, PAGE_FINISH: F },
        ei = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, c.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ea = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        er = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return ("mouseout" === n && !!r && !!o) || !1;
        },
        eo = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = ei(),
            r = n.scrollOffsetValue,
            o = n.scrollOffsetUnit,
            s = "PX" === o ? r : (a * (r || 0)) / 100;
          return ea(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: i,
            bottom: a - s,
          });
        },
        es = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [k, V].indexOf(i) ? i === k : n.isActive,
            r = { ...n, isActive: a };
          return n && r.isActive === n.isActive ? r : e(t, r) || r;
        },
        ec = (e) => (t, n) => {
          let i = { elementHovered: er(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        eu =
          (e) =>
          (t, n = {}) => {
            let i, a;
            let { stiffScrollTop: r, scrollHeight: o, innerHeight: s } = ei(),
              {
                event: { config: c, eventTypeId: u },
              } = t,
              { scrollOffsetValue: l, scrollOffsetUnit: d } = c,
              f = o - s,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === d ? l : (s * (l || 0)) / 100) / f,
              E = 0;
            n &&
              ((i = p > n.percentTop),
              (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let m = u === N ? p >= E + g : p <= E - g,
              I = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: E,
                scrollingDown: i,
              };
            return (n && m && (a || I.inBounds !== n.inBounds) && e(t, I)) || I;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ed =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        ef = (e = !0) => ({
          ...Z,
          handler: q(
            e ? W : H,
            es((e, t) => (t.isActive ? K.handler(e, t) : t))
          ),
        }),
        ep = (e = !0) => ({
          ...Z,
          handler: q(
            e ? W : H,
            es((e, t) => (t.isActive ? t : K.handler(e, t)))
          ),
        });
      let eg = {
        ...et,
        handler:
          ((i = (e, t) => {
            let { elementVisible: n } = t,
              { event: i, store: a } = e,
              { ixData: r } = a.getState(),
              { events: o } = r;
            return !o[i.action.config.autoStopEventId] && t.triggered
              ? t
              : (i.eventTypeId === C) === n
              ? ($(e), { ...t, triggered: !0 })
              : t;
          }),
          (e, t) => {
            let n = { ...t, elementVisible: eo(e) };
            return (
              ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) &&
                i(e, n)) ||
              n
            );
          }),
      };
      let eE = {
        [b]: ef(),
        [v]: ep(),
        [h]: ef(),
        [O]: ep(),
        [R]: ef(!1),
        [S]: ep(!1),
        [_]: ef(),
        [A]: ep(),
        [x]: { types: "ecommerce-cart-open", handler: q(W, $) },
        [M]: { types: "ecommerce-cart-close", handler: q(W, $) },
        [g]: {
          types: "click",
          handler: q(
            W,
            ed((e, { clickCount: t }) => {
              Y(e) ? 1 === t && $(e) : $(e);
            })
          ),
        },
        [E]: {
          types: "click",
          handler: q(
            W,
            ed((e, { clickCount: t }) => {
              2 === t && $(e);
            })
          ),
        },
        [m]: { ...K, types: "mousedown" },
        [I]: { ...K, types: "mouseup" },
        [y]: {
          types: ee,
          handler: q(
            W,
            ec((e, t) => {
              t.elementHovered && $(e);
            })
          ),
        },
        [T]: {
          types: ee,
          handler: q(
            W,
            ec((e, t) => {
              !t.elementHovered && $(e);
            })
          ),
        },
        [L]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: i,
              eventStateKey: a,
            },
            r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: l,
                restingState: f = 0,
              } = n,
              {
                clientX: p = r.clientX,
                clientY: g = r.clientY,
                pageX: E = r.pageX,
                pageY: m = r.pageY,
              } = i,
              I = "X_AXIS" === s,
              y = "mouseout" === i.type,
              T = f / 100,
              O = c,
              h = !1;
            switch (o) {
              case u.EventBasedOn.VIEWPORT:
                T = I
                  ? Math.min(p, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case u.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: n,
                  scrollHeight: i,
                } = ei();
                T = I ? Math.min(e + E, n) / n : Math.min(t + m, i) / i;
                break;
              }
              case u.EventBasedOn.ELEMENT:
              default: {
                O = X(a, c);
                let e = 0 === i.type.indexOf("mouse");
                if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                let n = t.getBoundingClientRect(),
                  { left: r, top: o, width: s, height: u } = n;
                if (!e && !el({ left: p, top: g }, n)) break;
                (h = !0), (T = I ? (p - r) / s : (g - o) / u);
              }
            }
            return (
              y && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
              (o !== u.EventBasedOn.ELEMENT || h || h !== r.elementHovered) &&
                ((T = l ? 1 - T : T),
                e.dispatch((0, d.parameterChanged)(O, T))),
              { elementHovered: h, clientX: p, clientY: g, pageX: E, pageY: m }
            );
          },
        },
        [D]: {
          types: J,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: i } = t,
              { scrollTop: a, scrollHeight: r, clientHeight: o } = ei(),
              s = a / (r - o);
            (s = i ? 1 - s : s), e.dispatch((0, d.parameterChanged)(n, s));
          },
        },
        [G]: {
          types: J,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: i },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: r,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: l,
              } = ei(),
              {
                basedOn: f,
                selectedAxis: p,
                continuousParameterGroupId: g,
                startsEntering: E,
                startsExiting: m,
                addEndOffset: I,
                addStartOffset: y,
                addOffsetValue: T = 0,
                endOffsetValue: O = 0,
              } = n;
            if (f === u.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? r / s : o / c;
              return (
                e !== a.scrollPercent &&
                  t.dispatch((0, d.parameterChanged)(g, e)),
                { scrollPercent: e }
              );
            }
            {
              let n = X(i, g),
                r = e.getBoundingClientRect(),
                o = (y ? T : 0) / 100,
                s = (I ? O : 0) / 100;
              (o = E ? o : 1 - o), (s = m ? s : 1 - s);
              let u = r.top + Math.min(r.height * o, l),
                f = r.top + r.height * s,
                p = Math.min(l + (f - u), c),
                h = Math.min(Math.max(0, l - u), p) / p;
              return (
                h !== a.scrollPercent &&
                  t.dispatch((0, d.parameterChanged)(n, h)),
                { scrollPercent: h }
              );
            }
          },
        },
        [C]: eg,
        [w]: eg,
        [N]: {
          ...et,
          handler: eu((e, t) => {
            t.scrollingDown && $(e);
          }),
        },
        [P]: {
          ...et,
          handler: eu((e, t) => {
            !t.scrollingDown && $(e);
          }),
        },
        [F]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: q(
            H,
            ((a = $),
            (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && a(e), n;
            })
          ),
        },
        [U]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: q(H, ((r = $), (e, t) => (t || r(e), { started: !0 }))),
        },
      };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) => {
          if (t.type === i) return t.payload.ixData || Object.freeze({});
          return e;
        };
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: s,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: u,
          IX2_INSTANCE_REMOVED: l,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: E } = i.IX2EngineConstants,
        {
          getItemConfigByKey: m,
          getRenderType: I,
          getStyleProp: y,
        } = a.IX2VanillaUtils,
        T = (e, t) => {
          let n, i, a, o;
          let {
              position: s,
              parameterId: c,
              actionGroups: u,
              destinationKeys: l,
              smoothing: d,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: I,
              skipMotion: y,
              skipToValue: T,
            } = e,
            { parameters: O } = t.payload,
            h = Math.max(1 - d, 0.01),
            b = O[c];
          null == b && ((h = 1), (b = g));
          let v = f((Math.max(b, 0) || 0) - s),
            _ = y ? T : f(s + v * h),
            A = 100 * _;
          if (_ === s && e.current) return e;
          for (let e = 0, { length: t } = u; e < t; e++) {
            let { keyframe: t, actionItems: r } = u[e];
            if ((0 === e && (n = r[0]), A >= t)) {
              n = r[0];
              let s = u[e + 1],
                c = s && A !== t;
              (i = c ? s.actionItems[0] : null),
                c && ((a = t / 100), (o = (s.keyframe - t) / 100));
            }
          }
          let S = {};
          if (n && !i)
            for (let e = 0, { length: t } = l; e < t; e++) {
              let t = l[e];
              S[t] = m(E, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (_ - a) / o,
              t = p(n.config.easing, e, I);
            for (let e = 0, { length: a } = l; e < a; e++) {
              let a = l[e],
                r = m(E, a, n.config),
                o = (m(E, a, i.config) - r) * t + r;
              S[a] = o;
            }
          }
          return (0, r.merge)(e, { position: _, current: S });
        },
        O = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: s,
              verbose: c,
              actionItem: u,
              destination: l,
              destinationKeys: d,
              pluginDuration: g,
              instanceDelay: m,
              customEasingFn: I,
              skipMotion: y,
            } = e,
            T = u.config.easing,
            { duration: O, delay: h } = u.config;
          null != g && (O = g),
            (h = null != m ? m : h),
            s === E ? (O = 0) : (o || y) && (O = h = 0);
          let { now: b } = t.payload;
          if (n && i) {
            let t = b - (a + h);
            if (c) {
              let t = O + h,
                n = f(Math.min(Math.max(0, (b - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / O), 1)),
              o = p(T, n, I),
              s = {},
              u = null;
            return (
              d.length &&
                (u = d.reduce((e, t) => {
                  let n = l[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (s.current = u),
              (s.position = n),
              1 === n && ((s.active = !1), (s.complete = !0)),
              (0, r.merge)(e, s)
            );
          }
          return e;
        },
        h = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case s:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: s,
                  eventStateKey: c,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: m,
                  continuous: T,
                  parameterId: O,
                  actionGroups: h,
                  smoothing: b,
                  restingValue: v,
                  pluginInstance: _,
                  pluginDuration: A,
                  instanceDelay: S,
                  skipMotion: R,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: N } = a,
                C = I(N),
                w = y(C, N),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: G } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: a,
                actionTypeId: N,
                eventId: o,
                eventTarget: s,
                eventStateKey: c,
                actionListId: u,
                groupIndex: l,
                renderType: C,
                isCarrier: d,
                styleProp: w,
                continuous: T,
                parameterId: O,
                actionGroups: h,
                smoothing: b,
                restingValue: v,
                pluginInstance: _,
                pluginDuration: A,
                instanceDelay: S,
                skipMotion: R,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(G) && 4 === G.length ? g(G) : void 0,
              });
            }
            case u: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case l: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  s = e[a],
                  c = s.continuous ? T : O;
                n = (0, r.set)(n, a, c(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        s = n(9468),
        c = n(7718),
        u = n(1540),
        { ixElements: l } = s.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: l,
          ixInstances: c.ixInstances,
          ixParameters: u.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: s,
          IX2_CLEAR_REQUESTED: c,
        } = i.IX2EngineActionTypes,
        u = { preview: {}, playback: {}, stop: {}, clear: {} },
        l = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [s]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        d = (e = u, t) => {
          if (t.type in l) {
            let n = [l[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: s,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: u,
          IX2_EVENT_STATE_CHANGED: l,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        m = (e = E, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case s: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case c:
              return E;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case u: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case l: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return c;
        },
        createPluginInstance: function () {
          return o;
        },
        getPluginConfig: function () {
          return n;
        },
        getPluginDestination: function () {
          return r;
        },
        getPluginDuration: function () {
          return i;
        },
        getPluginOrigin: function () {
          return a;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let n = (e) => e.value,
        i = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        a = (e) => e || { value: 0 },
        r = (e) => ({ value: e.value }),
        o = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        s = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        c = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return d;
        },
      });
      let n = "--wf-rive-fit",
        i = "--wf-rive-alignment",
        a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("rive"),
        o = (e, t) => e.value.inputs[t],
        s = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        l = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        d = (e, { PLUGIN_RIVE: t }, a) => {
          let o = r();
          if (!o) return;
          let s = o.getInstance(e),
            c = o.rive.StateMachineInputType,
            { name: u, inputs: l = {} } = a.config.value || {};
          function d(e) {
            if (e.loaded) a();
            else {
              let t = () => {
                a(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function a() {
              let a = e.stateMachineInputs(u);
              if (null != a) {
                if ((!e.isPlaying && e.play(u, !1), n in l || i in l)) {
                  let t = e.layout,
                    a = l[n] ?? t.fit,
                    r = l[i] ?? t.alignment;
                  (a !== t.fit || r !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: a, alignment: r }));
                }
                for (let e in l) {
                  if (e === n || e === i) continue;
                  let r = a.find((t) => t.name === e);
                  if (null != r)
                    switch (r.type) {
                      case c.Boolean:
                        if (null != l[e]) {
                          let t = !!l[e];
                          r.value = t;
                        }
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (r.value = n);
                        break;
                      }
                      case c.Trigger:
                        l[e] && r.fire();
                    }
                }
              }
            }
          }
          s?.rive ? d(s.rive) : o.setLoadHandler(e, d);
        },
        f = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return d;
        },
      });
      let n = (e) => document.querySelector(`[data-w-id="${e}"]`),
        i = () => window.Webflow.require("spline"),
        a = (e, t) => e.filter((e) => !t.includes(e)),
        r = (e, t) => e.value[t],
        o = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        c = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = a(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        u = (e) => e.value,
        l = (e, t) => {
          let i = t?.config?.target?.pluginElement;
          return i ? n(i) : null;
        },
        d = (e, t, n) => {
          let a = i();
          if (!a) return;
          let r = a.getInstance(e),
            o = n.config.target.objectId,
            s = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          r ? s(r.spline) : a.setLoadHandler(e, s);
        },
        f = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return l;
        },
      });
      let i = n(380),
        a = (e, t) => e.value[t],
        r = () => null,
        o = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            r = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(r, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(r) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, i.normalizeColor)(r)
            : void 0;
        },
        s = (e) => e.value,
        c = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => {
              if ("-" === t) return e;
              return `${e}${t}`;
            },
          },
        },
        l = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(u).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        d = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(7087),
        a = u(n(7377)),
        r = u(n(2866)),
        o = u(n(2570)),
        s = u(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let l = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...s }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return y;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return f;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return I;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return l;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return d;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return m;
        },
        IX2_INSTANCE_STARTED: function () {
          return E;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return O;
        },
        IX2_PARAMETER_CHANGED: function () {
          return p;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return o;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return n;
        },
        IX2_SESSION_INITIALIZED: function () {
          return i;
        },
        IX2_SESSION_STARTED: function () {
          return a;
        },
        IX2_SESSION_STOPPED: function () {
          return r;
        },
        IX2_STOP_REQUESTED: function () {
          return c;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return h;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return T;
        },
      });
      let n = "IX2_RAW_DATA_IMPORTED",
        i = "IX2_SESSION_INITIALIZED",
        a = "IX2_SESSION_STARTED",
        r = "IX2_SESSION_STOPPED",
        o = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        c = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        l = "IX2_EVENT_LISTENER_ADDED",
        d = "IX2_EVENT_STATE_CHANGED",
        f = "IX2_ANIMATION_FRAME_CHANGED",
        p = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        E = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        I = "IX2_ELEMENT_STATE_CHANGED",
        y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        T = "IX2_VIEWPORT_WIDTH_CHANGED",
        O = "IX2_MEDIA_QUERIES_DEFINED",
        h = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ABSTRACT_NODE: function () {
          return J;
        },
        AUTO: function () {
          return X;
        },
        BACKGROUND: function () {
          return x;
        },
        BACKGROUND_COLOR: function () {
          return M;
        },
        BAR_DELIMITER: function () {
          return z;
        },
        BORDER_COLOR: function () {
          return U;
        },
        BOUNDARY_SELECTOR: function () {
          return o;
        },
        CHILDREN: function () {
          return W;
        },
        COLON_DELIMITER: function () {
          return H;
        },
        COLOR: function () {
          return D;
        },
        COMMA_DELIMITER: function () {
          return j;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return l;
        },
        CONFIG_X_UNIT: function () {
          return d;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return f;
        },
        CONFIG_Y_VALUE: function () {
          return c;
        },
        CONFIG_Z_UNIT: function () {
          return p;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return k;
        },
        FILTER: function () {
          return w;
        },
        FLEX: function () {
          return V;
        },
        FONT_VARIATION_SETTINGS: function () {
          return P;
        },
        HEIGHT: function () {
          return F;
        },
        HTML_ELEMENT: function () {
          return K;
        },
        IMMEDIATE_CHILDREN: function () {
          return Q;
        },
        IX2_ID_DELIMITER: function () {
          return n;
        },
        OPACITY: function () {
          return C;
        },
        PARENT: function () {
          return $;
        },
        PLAIN_OBJECT: function () {
          return Z;
        },
        PRESERVE_3D: function () {
          return q;
        },
        RENDER_GENERAL: function () {
          return et;
        },
        RENDER_PLUGIN: function () {
          return ei;
        },
        RENDER_STYLE: function () {
          return en;
        },
        RENDER_TRANSFORM: function () {
          return ee;
        },
        ROTATE_X: function () {
          return _;
        },
        ROTATE_Y: function () {
          return A;
        },
        ROTATE_Z: function () {
          return S;
        },
        SCALE_3D: function () {
          return v;
        },
        SCALE_X: function () {
          return O;
        },
        SCALE_Y: function () {
          return h;
        },
        SCALE_Z: function () {
          return b;
        },
        SIBLINGS: function () {
          return Y;
        },
        SKEW: function () {
          return R;
        },
        SKEW_X: function () {
          return L;
        },
        SKEW_Y: function () {
          return N;
        },
        TRANSFORM: function () {
          return E;
        },
        TRANSLATE_3D: function () {
          return T;
        },
        TRANSLATE_X: function () {
          return m;
        },
        TRANSLATE_Y: function () {
          return I;
        },
        TRANSLATE_Z: function () {
          return y;
        },
        WF_PAGE: function () {
          return i;
        },
        WIDTH: function () {
          return G;
        },
        WILL_CHANGE: function () {
          return B;
        },
        W_MOD_IX: function () {
          return r;
        },
        W_MOD_JS: function () {
          return a;
        },
      });
      let n = "|",
        i = "data-wf-page",
        a = "w-mod-js",
        r = "w-mod-ix",
        o = ".w-dyn-item",
        s = "xValue",
        c = "yValue",
        u = "zValue",
        l = "value",
        d = "xUnit",
        f = "yUnit",
        p = "zUnit",
        g = "unit",
        E = "transform",
        m = "translateX",
        I = "translateY",
        y = "translateZ",
        T = "translate3d",
        O = "scaleX",
        h = "scaleY",
        b = "scaleZ",
        v = "scale3d",
        _ = "rotateX",
        A = "rotateY",
        S = "rotateZ",
        R = "skew",
        L = "skewX",
        N = "skewY",
        C = "opacity",
        w = "filter",
        P = "font-variation-settings",
        G = "width",
        F = "height",
        M = "backgroundColor",
        x = "background",
        U = "borderColor",
        D = "color",
        k = "display",
        V = "flex",
        B = "willChange",
        X = "AUTO",
        j = ",",
        H = ":",
        z = "|",
        W = "CHILDREN",
        Q = "IMMEDIATE_CHILDREN",
        Y = "SIBLINGS",
        $ = "PARENT",
        q = "preserve-3d",
        K = "HTML_ELEMENT",
        Z = "PLAIN_OBJECT",
        J = "ABSTRACT_NODE",
        ee = "RENDER_TRANSFORM",
        et = "RENDER_GENERAL",
        en = "RENDER_STYLE",
        ei = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ActionAppliesTo: function () {
          return i;
        },
        ActionTypeConsts: function () {
          return n;
        },
      });
      let n = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        i = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ActionTypeConsts: function () {
          return a.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return r;
        },
        IX2EngineConstants: function () {
          return o;
        },
        QuickEffectIds: function () {
          return i.QuickEffectIds;
        },
      });
      let i = s(n(1833), t),
        a = s(n(262), t);
      s(n(8704), t), s(n(3213), t);
      let r = u(n(8023)),
        o = u(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" !== n &&
              !Object.prototype.hasOwnProperty.call(t, n) &&
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: s,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: u,
        } = n(262).ActionTypeConsts,
        l = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [s]: !0, [c]: !0, [u]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        EventAppliesTo: function () {
          return i;
        },
        EventBasedOn: function () {
          return a;
        },
        EventContinuousMouseAxes: function () {
          return r;
        },
        EventLimitAffectedElements: function () {
          return o;
        },
        EventTypeConsts: function () {
          return n;
        },
        QuickEffectDirectionConsts: function () {
          return c;
        },
        QuickEffectIds: function () {
          return s;
        },
      });
      let n = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        i = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        a = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        r = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        o = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        c = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t, i, a;
        let r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          s = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (s.startsWith("#")) {
          let e = s.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (s.startsWith("rgba")) {
          let e = s.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (s.startsWith("rgb")) {
          let e = s.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (s.startsWith("hsla")) {
          let e, n, o;
          let c = s.match(/hsla\(([^)]+)\)/)[1].split(","),
            u = parseFloat(c[0]),
            l = parseFloat(c[1].replace("%", "")) / 100,
            d = parseFloat(c[2].replace("%", "")) / 100;
          r = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * d - 1)) * l,
            p = f * (1 - Math.abs(((u / 60) % 2) - 1)),
            g = d - f / 2;
          u >= 0 && u < 60
            ? ((e = f), (n = p), (o = 0))
            : u >= 60 && u < 120
            ? ((e = p), (n = f), (o = 0))
            : u >= 120 && u < 180
            ? ((e = 0), (n = f), (o = p))
            : u >= 180 && u < 240
            ? ((e = 0), (n = p), (o = f))
            : u >= 240 && u < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + g) * 255)),
            (i = Math.round((n + g) * 255)),
            (a = Math.round((o + g) * 255));
        } else if (s.startsWith("hsl")) {
          let e, n, r;
          let o = s.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            u = parseFloat(o[1].replace("%", "")) / 100,
            l = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * l - 1)) * u,
            f = d * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = l - d / 2;
          c >= 0 && c < 60
            ? ((e = d), (n = f), (r = 0))
            : c >= 60 && c < 120
            ? ((e = f), (n = d), (r = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = d), (r = f))
            : c >= 180 && c < 240
            ? ((e = 0), (n = f), (r = d))
            : c >= 240 && c < 300
            ? ((e = f), (n = 0), (r = d))
            : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        IX2BrowserSupport: function () {
          return i;
        },
        IX2EasingUtils: function () {
          return r;
        },
        IX2Easings: function () {
          return a;
        },
        IX2ElementsReducer: function () {
          return o;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return c;
        },
      });
      let i = l(n(2662)),
        a = l(n(8686)),
        r = l(n(3767)),
        o = l(n(5861)),
        s = l(n(1799)),
        c = l(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ELEMENT_MATCHES: function () {
          return o;
        },
        FLEX_PREFIXED: function () {
          return s;
        },
        IS_BROWSER_ENV: function () {
          return a;
        },
        TRANSFORM_PREFIXED: function () {
          return c;
        },
        TRANSFORM_STYLE_PREFIXED: function () {
          return l;
        },
        withBrowser: function () {
          return r;
        },
      });
      let i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(9777)),
        a = "undefined" != typeof window,
        r = (e, t) => (a ? e() : t),
        o = r(() =>
          (0, i.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = r(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        c = r(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        u = c.split("transform")[0],
        l = u ? u + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        applyEasing: function () {
          return c;
        },
        createBezierEasing: function () {
          return s;
        },
        optimizeFloat: function () {
          return o;
        },
      });
      let i = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(i, o, s)
                : (i[o] = e[o]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1361));
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (r = function (e) {
          return e ? n : t;
        })(e);
      }
      function o(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function s(e) {
        return (0, a.default)(...e);
      }
      function c(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? o(t > 0 ? n(t) : t)
          : o(t > 0 && e && i[e] ? i[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        bounce: function () {
          return k;
        },
        bouncePast: function () {
          return V;
        },
        ease: function () {
          return a;
        },
        easeIn: function () {
          return r;
        },
        easeInOut: function () {
          return s;
        },
        easeOut: function () {
          return o;
        },
        inBack: function () {
          return C;
        },
        inCirc: function () {
          return S;
        },
        inCubic: function () {
          return d;
        },
        inElastic: function () {
          return G;
        },
        inExpo: function () {
          return v;
        },
        inOutBack: function () {
          return P;
        },
        inOutCirc: function () {
          return L;
        },
        inOutCubic: function () {
          return p;
        },
        inOutElastic: function () {
          return M;
        },
        inOutExpo: function () {
          return A;
        },
        inOutQuad: function () {
          return l;
        },
        inOutQuart: function () {
          return m;
        },
        inOutQuint: function () {
          return T;
        },
        inOutSine: function () {
          return b;
        },
        inQuad: function () {
          return c;
        },
        inQuart: function () {
          return g;
        },
        inQuint: function () {
          return I;
        },
        inSine: function () {
          return O;
        },
        outBack: function () {
          return w;
        },
        outBounce: function () {
          return N;
        },
        outCirc: function () {
          return R;
        },
        outCubic: function () {
          return f;
        },
        outElastic: function () {
          return F;
        },
        outExpo: function () {
          return _;
        },
        outQuad: function () {
          return u;
        },
        outQuart: function () {
          return E;
        },
        outQuint: function () {
          return y;
        },
        outSine: function () {
          return h;
        },
        swingFrom: function () {
          return U;
        },
        swingFromTo: function () {
          return x;
        },
        swingTo: function () {
          return D;
        },
      });
      let i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1361)),
        a = (0, i.default)(0.25, 0.1, 0.25, 1),
        r = (0, i.default)(0.42, 0, 1, 1),
        o = (0, i.default)(0, 0, 0.58, 1),
        s = (0, i.default)(0.42, 0, 0.58, 1);
      function c(e) {
        return Math.pow(e, 2);
      }
      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function l(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function d(e) {
        return Math.pow(e, 3);
      }
      function f(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function g(e) {
        return Math.pow(e, 4);
      }
      function E(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function I(e) {
        return Math.pow(e, 5);
      }
      function y(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function h(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function b(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function v(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function _(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function A(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function R(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function L(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function N(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function C(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function w(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function P(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!n && (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!n && (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function M(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (!n && (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function x(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function D(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function k(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function V(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
        if (e < 2.5 / 2.75)
          return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
        else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return c;
        },
        isPluginType: function () {
          return r;
        },
        renderPlugin: function () {
          return f;
        },
      });
      let i = n(2662),
        a = n(3690);
      function r(e) {
        return a.pluginMethodMap.has(e);
      }
      let o = (e) => (t) => {
          if (!i.IS_BROWSER_ENV) return () => null;
          let n = a.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let r = n[e];
          if (!r) throw Error(`IX2 invalid plugin method: ${e}`);
          return r;
        },
        s = o("getPluginConfig"),
        c = o("getPluginOrigin"),
        u = o("getPluginDuration"),
        l = o("getPluginDestination"),
        d = o("createPluginInstance"),
        f = o("renderPlugin"),
        p = o("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        cleanupHTMLElement: function () {
          return ej;
        },
        clearAllStyles: function () {
          return eV;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return eQ;
        },
        getAffectedElements: function () {
          return ey;
        },
        getComputedStyle: function () {
          return eT;
        },
        getDestinationValues: function () {
          return eR;
        },
        getElementId: function () {
          return ep;
        },
        getInstanceId: function () {
          return ed;
        },
        getInstanceOrigin: function () {
          return ev;
        },
        getItemConfigByKey: function () {
          return eS;
        },
        getMaxDurationItemIndex: function () {
          return eW;
        },
        getNamespacedParameterId: function () {
          return eq;
        },
        getRenderType: function () {
          return eL;
        },
        getStyleProp: function () {
          return eN;
        },
        mediaQueriesEqual: function () {
          return eZ;
        },
        observeStore: function () {
          return em;
        },
        reduceListToGroup: function () {
          return eY;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eC;
        },
        shallowEqual: function () {
          return c.default;
        },
        shouldAllowMediaQuery: function () {
          return eK;
        },
        shouldNamespaceEventParameter: function () {
          return e$;
        },
        stringifyTarget: function () {
          return eJ;
        },
      });
      let i = p(n(4075)),
        a = p(n(1455)),
        r = p(n(5720)),
        o = n(1185),
        s = n(7087),
        c = p(n(7164)),
        u = n(3767),
        l = n(380),
        d = n(1799),
        f = n(2662);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: E,
          TRANSLATE_3D: m,
          SCALE_3D: I,
          ROTATE_X: y,
          ROTATE_Y: T,
          ROTATE_Z: O,
          SKEW: h,
          PRESERVE_3D: b,
          FLEX: v,
          OPACITY: _,
          FILTER: A,
          FONT_VARIATION_SETTINGS: S,
          WIDTH: R,
          HEIGHT: L,
          BACKGROUND_COLOR: N,
          BORDER_COLOR: C,
          COLOR: w,
          CHILDREN: P,
          IMMEDIATE_CHILDREN: G,
          SIBLINGS: F,
          PARENT: M,
          DISPLAY: x,
          WILL_CHANGE: U,
          AUTO: D,
          COMMA_DELIMITER: k,
          COLON_DELIMITER: V,
          BAR_DELIMITER: B,
          RENDER_TRANSFORM: X,
          RENDER_GENERAL: j,
          RENDER_STYLE: H,
          RENDER_PLUGIN: z,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: W,
          TRANSFORM_SCALE: Q,
          TRANSFORM_ROTATE: Y,
          TRANSFORM_SKEW: $,
          STYLE_OPACITY: q,
          STYLE_FILTER: K,
          STYLE_FONT_VARIATION: Z,
          STYLE_SIZE: J,
          STYLE_BACKGROUND_COLOR: ee,
          STYLE_BORDER: et,
          STYLE_TEXT_COLOR: en,
          GENERAL_DISPLAY: ei,
          OBJECT_VALUE: ea,
        } = s.ActionTypeConsts,
        er = (e) => e.trim(),
        eo = Object.freeze({ [ee]: N, [et]: C, [en]: w }),
        es = Object.freeze({
          [f.TRANSFORM_PREFIXED]: E,
          [N]: g,
          [_]: _,
          [A]: A,
          [R]: R,
          [L]: L,
          [S]: S,
        }),
        ec = new Map();
      function eu() {
        ec.clear();
      }
      let el = 1;
      function ed() {
        return "i" + el++;
      }
      let ef = 1;
      function ep(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + ef++;
      }
      function eg({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, a.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return !e[n] && (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          r = n && n.mediaQueries,
          o = [];
        return (
          r
            ? (o = r.map((e) => e.key))
            : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: r,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eE = (e, t) => e === t;
      function em({ store: e, select: t, onChange: n, comparator: i = eE }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) {
              o();
              return;
            }
            !i(r, s) && n((s = r), e);
          }),
          s = t(a());
        return o;
      }
      function eI(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function ey({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, c;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: u } = e;
        if (Array.isArray(u) && u.length > 0)
          return u.reduce(
            (e, r) =>
              e.concat(
                ey({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: l,
            getQuerySelector: d,
            queryDocument: p,
            getChildElements: g,
            getSiblingElements: E,
            matchSelector: m,
            elementContains: I,
            isSiblingNode: y,
          } = a,
          { target: T } = e;
        if (!T) return [];
        let {
          id: O,
          objectId: h,
          selector: b,
          selectorGuids: v,
          appliesTo: _,
          useEventTarget: A,
        } = eI(T);
        if (h) return [ec.has(h) ? ec.get(h) : ec.set(h, {}).get(h)];
        if (_ === s.EventAppliesTo.PAGE) {
          let e = l(O);
          return e ? [e] : [];
        }
        let S = (t?.action?.config?.affectedElements ?? {})[O || b] || {},
          R = !!(S.id || S.selector),
          L = t && d(eI(t.target));
        if (
          (R
            ? ((r = S.limitAffectedElements), (o = L), (c = d(S)))
            : (o = c = d({ id: O, selector: b, selectorGuids: v })),
          t && A)
        ) {
          let e = n && (c || !0 === A) ? [n] : p(L);
          if (c) {
            if (A === M) return p(c).filter((t) => e.some((e) => I(t, e)));
            if (A === P) return p(c).filter((t) => e.some((e) => I(e, t)));
            if (A === F) return p(c).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        if (null == o || null == c) return [];
        if (f.IS_BROWSER_ENV && i) return p(c).filter((e) => i.contains(e));
        if (r === P) return p(o, c);
        if (r === G) return g(p(o)).filter(m(c));
        if (r === F) return E(p(o)).filter(m(c));
        else return p(c);
      }
      function eT({ element: e, actionItem: t }) {
        if (!f.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case J:
          case ee:
          case et:
          case en:
          case ei:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eO = /px/,
        eh = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
            e || {}
          ),
        eb = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function ev(e, t = {}, n = {}, a, r) {
        let { getStyle: o } = r,
          { actionTypeId: s } = a;
        if ((0, d.isPluginType)(s)) return (0, d.getPluginOrigin)(s)(t[s], a);
        switch (a.actionTypeId) {
          case W:
          case Q:
          case Y:
          case $:
            return t[a.actionTypeId] || ew[a.actionTypeId];
          case K:
            return eh(t[a.actionTypeId], a.config.filters);
          case Z:
            return eb(t[a.actionTypeId], a.config.fontVariations);
          case q:
            return { value: (0, i.default)(parseFloat(o(e, _)), 1) };
          case J: {
            let t, r;
            let s = o(e, R),
              c = o(e, L);
            return (
              (t =
                a.config.widthUnit === D
                  ? eO.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.width)
                  : (0, i.default)(parseFloat(s), parseFloat(n.width))),
              {
                widthValue: t,
                heightValue: (r =
                  a.config.heightUnit === D
                    ? eO.test(c)
                      ? parseFloat(c)
                      : parseFloat(n.height)
                    : (0, i.default)(parseFloat(c), parseFloat(n.height))),
              }
            );
          }
          case ee:
          case et:
          case en:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let r = eo[t],
                o = a(e, r),
                s = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eU, ex.test(o) ? o : n[r]).split(k);
              return {
                rValue: (0, i.default)(parseInt(s[0], 10), 255),
                gValue: (0, i.default)(parseInt(s[1], 10), 255),
                bValue: (0, i.default)(parseInt(s[2], 10), 255),
                aValue: (0, i.default)(parseFloat(s[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case ei:
            return { value: (0, i.default)(o(e, x), n.display) };
          case ea:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let e_ = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t, n) => {
          if ((0, d.isPluginType)(e)) return (0, d.getPluginConfig)(e)(n, t);
          switch (e) {
            case K: {
              let e = (0, r.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case Z: {
              let e = (0, r.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eR({ element: e, actionItem: t, elementApi: n }) {
        if ((0, d.isPluginType)(t.actionTypeId))
          return (0, d.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case W:
          case Q:
          case Y:
          case $: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case J: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: s } = t.config,
              { widthValue: c, heightValue: u } = t.config;
            if (!f.IS_BROWSER_ENV) return { widthValue: c, heightValue: u };
            if (o === D) {
              let t = i(e, R);
              a(e, R, ""), (c = r(e, "offsetWidth")), a(e, R, t);
            }
            if (s === D) {
              let t = i(e, L);
              a(e, L, ""), (u = r(e, "offsetHeight")), a(e, L, t);
            }
            return { widthValue: c, heightValue: u };
          }
          case ee:
          case et:
          case en: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: s,
            } = t.config;
            if (s && s.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, s),
                a = (0, l.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case K:
            return t.config.filters.reduce(e_, {});
          case Z:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eL(e) {
        return /^TRANSFORM_/.test(e)
          ? X
          : /^STYLE_/.test(e)
          ? H
          : /^GENERAL_/.test(e)
          ? j
          : /^PLUGIN_/.test(e)
          ? z
          : void 0;
      }
      function eN(e, t) {
        return e === H ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eC(e, t, n, i, r, o, s, c, u) {
        switch (c) {
          case X:
            return (function (e, t, n, i, a) {
              let r = eM
                  .map((e) => {
                    let n = ew[e],
                      {
                        xValue: i = n.xValue,
                        yValue: a = n.yValue,
                        zValue: r = n.zValue,
                        xUnit: o = "",
                        yUnit: s = "",
                        zUnit: c = "",
                      } = t[e] || {};
                    switch (e) {
                      case W:
                        return `${m}(${i}${o}, ${a}${s}, ${r}${c})`;
                      case Q:
                        return `${I}(${i}${o}, ${a}${s}, ${r}${c})`;
                      case Y:
                        return `${y}(${i}${o}) ${T}(${a}${s}) ${O}(${r}${c})`;
                      case $:
                        return `${h}(${i}${o}, ${a}${s})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: o } = a;
              eD(e, f.TRANSFORM_PREFIXED, a),
                o(e, f.TRANSFORM_PREFIXED, r),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: n, zValue: i }
                ) {
                  return (
                    (e === W && void 0 !== i) ||
                    (e === Q && void 0 !== i) ||
                    (e === Y && (void 0 !== t || void 0 !== n))
                  );
                })(i, n) && o(e, f.TRANSFORM_STYLE_PREFIXED, b);
            })(e, t, n, r, s);
          case H:
            return (function (e, t, n, i, r, o) {
              let { setStyle: s } = o;
              switch (i.actionTypeId) {
                case J: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: r, heightValue: c } = n;
                  void 0 !== r &&
                    (t === D && (t = "px"), eD(e, R, o), s(e, R, r + t)),
                    void 0 !== c &&
                      (a === D && (a = "px"), eD(e, L, o), s(e, L, c + a));
                  break;
                }
                case K:
                  !(function (e, t, n, i) {
                    let r = (0, a.default)(
                        t,
                        (e, t, i) => `${e} ${i}(${t}${eF(i, n)})`,
                        ""
                      ),
                      { setStyle: o } = i;
                    eD(e, A, i), o(e, A, r);
                  })(e, n, i.config, o);
                  break;
                case Z:
                  !(function (e, t, n, i) {
                    let r = (0, a.default)(
                        t,
                        (e, t, n) => (e.push(`"${n}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: o } = i;
                    eD(e, S, i), o(e, S, r);
                  })(e, n, i.config, o);
                  break;
                case ee:
                case et:
                case en: {
                  let t = eo[i.actionTypeId],
                    a = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    u = n.aValue;
                  eD(e, t, o),
                    s(
                      e,
                      t,
                      u >= 1
                        ? `rgb(${a},${r},${c})`
                        : `rgba(${a},${r},${c},${u})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eD(e, r, o), s(e, r, n.value + t);
                }
              }
            })(e, t, n, r, o, s);
          case j:
            return (function (e, t, n) {
              let { setStyle: i } = n;
              if (t.actionTypeId === ei) {
                let { value: n } = t.config;
                i(e, x, n === v && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                return;
              }
            })(e, r, s);
          case z: {
            let { actionTypeId: e } = r;
            if ((0, d.isPluginType)(e)) return (0, d.renderPlugin)(e)(u, t, r);
          }
        }
      }
      let ew = {
          [W]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eP = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eF = (e, t) => {
          let n = (0, r.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eM = Object.keys(ew),
        ex = /^rgb/,
        eU = RegExp("rgba?\\(([^)]+)\\)");
      function eD(e, t, n) {
        if (!f.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        if (!o) {
          r(e, U, i);
          return;
        }
        let s = o.split(k).map(er);
        -1 === s.indexOf(i) && r(e, U, s.concat(i).join(k));
      }
      function ek(e, t, n) {
        if (!f.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        if (!!o && -1 !== o.indexOf(i))
          r(
            e,
            U,
            o
              .split(k)
              .map(er)
              .filter((e) => e !== i)
              .join(k)
          );
      }
      function eV({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            s = a[o];
          s && eB({ actionList: s, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            eB({ actionList: a[e], elementApi: t });
          });
      }
      function eB({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            eX({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eX({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eX({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i;
          let { actionTypeId: a, config: r } = e;
          (i = (0, d.isPluginType)(a)
            ? (t) => (0, d.clearPlugin)(a)(t, e)
            : eH({ effect: ez, actionTypeId: a, elementApi: n })),
            ey({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function ej(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === J) {
          let { config: n } = t;
          n.widthUnit === D && i(e, R, ""), n.heightUnit === D && i(e, L, "");
        }
        a(e, U) && eH({ effect: ek, actionTypeId: r, elementApi: n })(e);
      }
      let eH =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case W:
            case Q:
            case Y:
            case $:
              e(i, f.TRANSFORM_PREFIXED, n);
              break;
            case K:
              e(i, A, n);
              break;
            case Z:
              e(i, S, n);
              break;
            case q:
              e(i, _, n);
              break;
            case J:
              e(i, R, n), e(i, L, n);
              break;
            case ee:
            case et:
            case en:
              e(i, eo[t], n);
              break;
            case ei:
              e(i, x, n);
          }
        };
      function ez(e, t, n) {
        let { setStyle: i } = n;
        ek(e, t, n),
          i(e, t, ""),
          t === f.TRANSFORM_PREFIXED && i(e, f.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eW(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eQ(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          s = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              c = n[eW(n)],
              { config: u, actionTypeId: l } = c;
            a.id === c.id && (s = o + r);
            let d = eL(l) === j ? 0 : u.duration;
            o += u.delay + d;
          }),
          o > 0 ? (0, u.optimizeFloat)(s / o) : 0
        );
      }
      function eY({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          s = (e) => (
            r.push((0, o.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(s)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(s));
            }),
          (0, o.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function e$(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eq(e, t) {
        return e + V + t;
      }
      function eK(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function eZ(e, t) {
        return (0, c.default)(e && e.sort(), t && t.sort());
      }
      function eJ(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + B + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + B + n + B + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        createElementState: function () {
          return h;
        },
        ixElements: function () {
          return O;
        },
        mergeActionState: function () {
          return b;
        },
      });
      let i = n(1185),
        a = n(7087),
        {
          HTML_ELEMENT: r,
          PLAIN_OBJECT: o,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: c,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: l,
          CONFIG_VALUE: d,
          CONFIG_X_UNIT: f,
          CONFIG_Y_UNIT: p,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: E,
        } = a.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: I,
          IX2_ELEMENT_STATE_CHANGED: y,
        } = a.IX2EngineActionTypes,
        T = {},
        O = (e = T, t = {}) => {
          switch (t.type) {
            case m:
              return T;
            case I: {
              let {
                  elementId: n,
                  element: a,
                  origin: r,
                  actionItem: o,
                  refType: s,
                } = t.payload,
                { actionTypeId: c } = o,
                u = e;
              return (
                (0, i.getIn)(u, [n, a]) !== a && (u = h(u, a, s, n, o)),
                b(u, n, c, r, o)
              );
            }
            case y: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return b(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function h(e, t, n, a, r) {
        let s =
          n === o ? (0, i.getIn)(r, ["config", "target", "objectId"]) : null;
        return (0, i.mergeIn)(e, [a], { id: a, ref: t, refId: s, refType: n });
      }
      function b(e, t, n, a, r) {
        let o = (function (e) {
          let { config: t } = e;
          return v.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(r);
        return (0, i.mergeIn)(e, [t, "refState", n], a, o);
      }
      let v = [
        [c, f],
        [u, p],
        [l, g],
        [d, E],
      ];
    },
    2657: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".styleguides-nav",
              originalId:
                "6760858fd1c261f9adc849e4|30b99bc0-b123-2afb-8d34-c0845c9198fa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".styleguides-nav",
                originalId:
                  "6760858fd1c261f9adc849e4|30b99bc0-b123-2afb-8d34-c0845c9198fa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f32819e7,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".styleguides-nav",
              originalId:
                "6760858fd1c261f9adc849e4|30b99bc0-b123-2afb-8d34-c0845c9198fa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".styleguides-nav",
                originalId:
                  "6760858fd1c261f9adc849e4|30b99bc0-b123-2afb-8d34-c0845c9198fa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f32819e8,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6760858fd1c261f9adc849e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6760858fd1c261f9adc849e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193d6278acd,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-6",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-content-wrap",
              originalId: "d41792c0-88a2-f56e-67e5-76638ffa3f93",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-content-wrap",
                originalId: "d41792c0-88a2-f56e-67e5-76638ffa3f93",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-6-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193d6b49688,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-section-bgr",
              originalId: "3bba1343-d019-dd7b-8c8a-4f29045f8577",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-section-bgr",
                originalId: "3bba1343-d019-dd7b-8c8a-4f29045f8577",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193da46998c,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link",
              originalId: "3b24726c-be3b-485c-1f62-8feb41913a5d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link",
                originalId: "3b24726c-be3b-485c-1f62-8feb41913a5d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1911c48efae,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link",
              originalId: "3b24726c-be3b-485c-1f62-8feb41913a5d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link",
                originalId: "3b24726c-be3b-485c-1f62-8feb41913a5d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1911c48efaf,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".menu-btn",
              originalId: "71fa5d96-7752-e28e-acff-4d465f952322",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".menu-btn",
                originalId: "71fa5d96-7752-e28e-acff-4d465f952322",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19126a9b552,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".menu-btn",
              originalId: "71fa5d96-7752-e28e-acff-4d465f952322",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".menu-btn",
                originalId: "71fa5d96-7752-e28e-acff-4d465f952322",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19126a9b552,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6760858fd1c261f9adc849e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6760858fd1c261f9adc849e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 64,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193dbfc3f44,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-visual",
              originalId:
                "6760858fd1c261f9adc849e3|6c408f8f-c05e-a2bc-f94a-7dfa62ccc0ae",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-visual",
                originalId:
                  "6760858fd1c261f9adc849e3|6c408f8f-c05e-a2bc-f94a-7dfa62ccc0ae",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193e4216218,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blue-bgr-circle",
              originalId:
                "6760858fd1c261f9adc849e3|ab314d15-965f-d747-a428-6175e103da60",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blue-bgr-circle",
                originalId:
                  "6760858fd1c261f9adc849e3|ab314d15-965f-d747-a428-6175e103da60",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193e498bb96,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pink-bgr-circle",
              originalId:
                "6760858fd1c261f9adc849e3|c1e88656-82c8-73c0-adf8-3a6c9d66c613",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pink-bgr-circle",
                originalId:
                  "6760858fd1c261f9adc849e3|c1e88656-82c8-73c0-adf8-3a6c9d66c613",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193e49a0bc4,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6760858fd1c261f9adc849e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6760858fd1c261f9adc849e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193e6084ef9,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-17",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-content-wrap",
              originalId:
                "6760858fd1c261f9adc849e3|c192d387-1c5f-762a-2425-7cbb329a215c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-content-wrap",
                originalId:
                  "6760858fd1c261f9adc849e3|c192d387-1c5f-762a-2425-7cbb329a215c",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-17-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193e853959f,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6767d8031d037159b051543a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6767d8031d037159b051543a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193edb7c7d5,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6767d8031d037159b051543a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6767d8031d037159b051543a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193f07193c3,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6769116aaecd5ff6e7f7d6f1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769116aaecd5ff6e7f7d6f1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193f2c7a866,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6769518fb30e84ee212c2075",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769518fb30e84ee212c2075",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193f39b543f,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6767d8031d037159b051543a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6767d8031d037159b051543a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193f3ec3eeb,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6769116aaecd5ff6e7f7d6f1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769116aaecd5ff6e7f7d6f1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193f3ecf43d,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67693909a05dfb9471b6843e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67693909a05dfb9471b6843e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193f3ed6172,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6769518fb30e84ee212c2075",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769518fb30e84ee212c2075",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193f3ee8292,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6769b47c9d4f701cf2191f9f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769b47c9d4f701cf2191f9f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193f4eadadb,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6769b47c9d4f701cf2191f9f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6769b47c9d4f701cf2191f9f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193f4f290ce,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-dropdown",
              originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc82b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-dropdown",
                originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc82b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916a216324,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-dropdown",
              originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc82b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-dropdown",
                originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc82b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916a216324,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".dropdown-list-link",
              originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown-list-link",
                originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916a19bb91,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".dropdown-list-link",
              originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown-list-link",
                originalId: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916a19bb92,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e90f2a933c6efcccd6173",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e90f2a933c6efcccd6173",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19408343e0c,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e90f2a933c6efcccd6173",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e90f2a933c6efcccd6173",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1940c11f18a,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e8f3d9cc394b4fb4d5f13",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e8f3d9cc394b4fb4d5f13",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1940c6e2e9a,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".providers-card",
              originalId: "b91d6670-933b-0552-548a-297de65fb4e6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".providers-card",
                originalId: "b91d6670-933b-0552-548a-297de65fb4e6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19412319c2f,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".providers-card",
              originalId: "b91d6670-933b-0552-548a-297de65fb4e6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".providers-card",
                originalId: "b91d6670-933b-0552-548a-297de65fb4e6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19412319c30,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e9229a3814d746da9803f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9229a3814d746da9803f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19416bc691c,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e92af24177a287a3c167c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e92af24177a287a3c167c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19417166375,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e92837b50113f48e23953",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e92837b50113f48e23953",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1941716d47b,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "676e925f21b1d66fb38d90ef",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e925f21b1d66fb38d90ef",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19417172f0f,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e92c99792b6db3d12b300",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e92c99792b6db3d12b300",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194184359e9,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e935edb7ee2fbfa35d57f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e935edb7ee2fbfa35d57f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19418aa438d,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e933da3814d746daa5b78",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e933da3814d746daa5b78",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194270fb238,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e931ca933c6efcccf5a2c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e931ca933c6efcccf5a2c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194271e395e,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e8f28a3814d746da69a1b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e8f28a3814d746da69a1b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19430a46463,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6779c7df36f0a6df3a1b80ae",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6779c7df36f0a6df3a1b80ae",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19433b56290,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e8ff4cf1f9485e653cf03",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e8ff4cf1f9485e653cf03",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194357bfc9b,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e8ff4cf1f9485e653cf03",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e8ff4cf1f9485e653cf03",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194357ca137,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e9017a3814d746da7cd48",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9017a3814d746da7cd48",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19435955ace,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e9017a3814d746da7cd48",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9017a3814d746da7cd48",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19435963e18,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e9041cd0896840238da15",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9041cd0896840238da15",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19435a2268c,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e9041cd0896840238da15",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9041cd0896840238da15",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19435a5899d,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e96fb81acb1cc21d8214b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e96fb81acb1cc21d8214b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194381863bc,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e971bf5d32fc6d3c4a886",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e971bf5d32fc6d3c4a886",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194382562b2,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "677b06b0617aa1aeef7b75e7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "677b06b0617aa1aeef7b75e7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1943892a3d2,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e9092a933c6efcccd1b02",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9092a933c6efcccd1b02",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1944723cfae,
          },
          "e-71": {
            id: "e-71",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e90b7ac02b65480d00b5d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e90b7ac02b65480d00b5d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1944731efa1,
          },
          "e-72": {
            id: "e-72",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e917b231497c67ba8f123",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e917b231497c67ba8f123",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x194474f6e79,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e8ef2c167631a650a1b6b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e8ef2c167631a650a1b6b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1944a1319d1,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67693909a05dfb9471b6843e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67693909a05dfb9471b6843e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944a2123d0,
          },
          "e-76": {
            id: "e-76",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "small", "tiny", "medium"],
            target: {
              id: "676e9092a933c6efcccd1b02",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e9092a933c6efcccd1b02",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944a3c31b2,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e90b7ac02b65480d00b5d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e90b7ac02b65480d00b5d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944a40ec28,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "676e91c7a3814d746da92890",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e91c7a3814d746da92890",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944a4c20b2,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "676e91c7a3814d746da92890",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "676e91c7a3814d746da92890",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1944a4c6b59,
          },
          "e-83": {
            id: "e-83",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "small"],
            target: {
              appliesTo: "PAGE",
              styleBlockIds: [],
              id: "677ecfef049129aedb4e97dc",
            },
            targets: [],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 60,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1945f7bf3d5,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Style Guides Nav OPEN",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.158, 0.861, 0.135, 1.007],
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-2",
                        selectorGuids: ["b67af528-ab8d-dc4f-5d53-4c4199f523f5"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-1",
                        selectorGuids: ["6abd404d-6b05-4243-08eb-5969b8b05737"],
                      },
                      yValue: 0.9,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-1",
                        selectorGuids: ["6abd404d-6b05-4243-08eb-5969b8b05737"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-3",
                        selectorGuids: ["d74c8d5c-6ac1-1bc2-999d-1f662429f2d2"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-3",
                        selectorGuids: ["d74c8d5c-6ac1-1bc2-999d-1f662429f2d2"],
                      },
                      yValue: -0.6,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x182f3181f6b,
          },
          "a-2": {
            id: "a-2",
            title: "Style Guides Nav CLOSE",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-3",
                        selectorGuids: ["d74c8d5c-6ac1-1bc2-999d-1f662429f2d2"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-1",
                        selectorGuids: ["6abd404d-6b05-4243-08eb-5969b8b05737"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-1",
                        selectorGuids: ["6abd404d-6b05-4243-08eb-5969b8b05737"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.269, 0.919, 0.485, 1.013],
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-3",
                        selectorGuids: ["d74c8d5c-6ac1-1bc2-999d-1f662429f2d2"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 100,
                      easing: [0.158, 0.861, 0.135, 1.007],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".style-guides-hamburger-bar-2",
                        selectorGuids: ["b67af528-ab8d-dc4f-5d53-4c4199f523f5"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x182f3181f6b,
          },
          "a-5": {
            id: "a-5",
            title: "Marquee Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".marquee-group",
                        selectorGuids: ["e4f640eb-51f3-f73b-f26e-f690b6deccaa"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e4,
                      target: {
                        selector: ".marquee-group",
                        selectorGuids: ["e4f640eb-51f3-f73b-f26e-f690b6deccaa"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x193d627b7cb,
          },
          "a-6": {
            id: "a-6",
            title: "Images Parallax",
            continuousParameterGroups: [
              {
                id: "a-6-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-6-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".img",
                            selectorGuids: [
                              "9e0e7179-6120-8c3c-dc16-5279dad05a83",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-6-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".img",
                            selectorGuids: [
                              "9e0e7179-6120-8c3c-dc16-5279dad05a83",
                            ],
                          },
                          yValue: -15,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d6b4e915,
          },
          "a-8": {
            id: "a-8",
            title: "Images Parallax - Image section bgr",
            continuousParameterGroups: [
              {
                id: "a-8-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-8-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".img-bgr-anamorphic",
                            selectorGuids: [
                              "34bef270-1886-43ed-2ff4-8cb5c1305a71",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-8-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".img-bgr-anamorphic",
                            selectorGuids: [
                              "34bef270-1886-43ed-2ff4-8cb5c1305a71",
                            ],
                          },
                          yValue: -15,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d6b4e915,
          },
          "a-9": {
            id: "a-9",
            title: "Nav Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-label-txt",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e789"],
                      },
                      globalSwatchId: "--dark",
                      rValue: 10,
                      bValue: 46,
                      gValue: 14,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-label-txt",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e789"],
                      },
                      globalSwatchId: "--primary-1",
                      rValue: 106,
                      bValue: 247,
                      gValue: 123,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1911c4916bf,
          },
          "a-10": {
            id: "a-10",
            title: "Nav Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-label-txt",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e789"],
                      },
                      globalSwatchId: "--dark",
                      rValue: 10,
                      bValue: 46,
                      gValue: 14,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1911c4916bf,
          },
          "a-11": {
            id: "a-11",
            title: "Nav Menu Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-11-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-11-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-11-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-middle",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e788"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      yValue: -105,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-11-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-middle",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e788"],
                      },
                      xValue: 101,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.398, 0.913, 0.737, 0.995],
                      duration: 650,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "inOutExpo",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      yValue: 0.8,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "inOutExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      yValue: -0.45,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-13",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 200,
                      easing: "inOutExpo",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-11-n-14",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 200,
                      easing: "inOutExpo",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19126a9cf7c,
          },
          "a-12": {
            id: "a-12",
            title: "Nav Menu Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-12-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "inOutExpo",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-top",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e786"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "inOutExpo",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-bottom",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e792"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 350,
                      easing: [0.398, 0.913, 0.737, 0.995],
                      duration: 650,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      yValue: -101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 350,
                      easing: "inOutExpo",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger-line-middle",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e788"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 500,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-wrap",
                        selectorGuids: ["ac651c9b-498c-ffc2-68ce-037205b4e78d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19126a9cf7c,
          },
          "a-16": {
            id: "a-16",
            title: "Pink Scroll Parallax",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6760858fd1c261f9adc849e3|c1e88656-82c8-73c0-adf8-3a6c9d66c613",
                          },
                          yValue: 30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6760858fd1c261f9adc849e3|c1e88656-82c8-73c0-adf8-3a6c9d66c613",
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193e49a3e50,
          },
          "a-14": {
            id: "a-14",
            title: "Images Parallax - Hero img",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".hero-image",
                            selectorGuids: [
                              "82697198-90e5-d46e-06cc-e41b9d7f275e",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".hero-image",
                            selectorGuids: [
                              "82697198-90e5-d46e-06cc-e41b9d7f275e",
                            ],
                          },
                          yValue: -15,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d6b4e915,
          },
          "a-15": {
            id: "a-15",
            title: "Blue Circle Parallax",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6760858fd1c261f9adc849e3|ab314d15-965f-d747-a428-6175e103da60",
                          },
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-15-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6760858fd1c261f9adc849e3|ab314d15-965f-d747-a428-6175e103da60",
                          },
                          yValue: -40,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193e49900bb,
          },
          "a-13": {
            id: "a-13",
            title: "Navbar scroll",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "a0c7a8fe-37d7-7802-2d0d-41b7778bceb0",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-13-n-4",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "a0c7a8fe-37d7-7802-2d0d-41b7778bceb0",
                          },
                          globalSwatchId: "",
                          rValue: 249,
                          bValue: 251,
                          gValue: 250,
                          aValue: 0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 2,
                    actionItems: [
                      {
                        id: "a-13-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "a0c7a8fe-37d7-7802-2d0d-41b7778bceb0",
                          },
                          yValue: -4,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-13-n-5",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "a0c7a8fe-37d7-7802-2d0d-41b7778bceb0",
                          },
                          globalSwatchId: "--light",
                          rValue: 249,
                          bValue: 251,
                          gValue: 250,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193dbfc79aa,
          },
          "a-17": {
            id: "a-17",
            title: "Images Parallax 3",
            continuousParameterGroups: [
              {
                id: "a-17-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-17-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image",
                            selectorGuids: [
                              "f6637752-742c-7d6d-f943-8ae49aca44f2",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-17-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image",
                            selectorGuids: [
                              "f6637752-742c-7d6d-f943-8ae49aca44f2",
                            ],
                          },
                          yValue: -15,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d6b4e915,
          },
          "a-20": {
            id: "a-20",
            title: "Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-20-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-txt-label",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e12035f"],
                      },
                      globalSwatchId: "--dark",
                      rValue: 10,
                      bValue: 46,
                      gValue: 14,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".iscon",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120360"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 10,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-txt-label",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e12035f"],
                      },
                      globalSwatchId: "--primary-1",
                      rValue: 106,
                      bValue: 247,
                      gValue: 123,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-20-n-12",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 10,
                      easing: "inOutQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".iscon",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120360"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 10,
                      easing: "inOutQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1916a218cef,
          },
          "a-21": {
            id: "a-21",
            title: "Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-21-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-txt-label",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e12035f"],
                      },
                      globalSwatchId: "--dark",
                      rValue: 10,
                      bValue: 46,
                      gValue: 14,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".iscon",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120360"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["66005c6f-9b92-eeca-13fa-50f46e120361"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1916a218cef,
          },
          "a-22": {
            id: "a-22",
            title: "Dropdown Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
                      },
                      globalSwatchId: "--neutral-1",
                      rValue: 242,
                      bValue: 247,
                      gValue: 244,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
                      },
                      globalSwatchId: "--primary-2",
                      rValue: 239,
                      bValue: 249,
                      gValue: 211,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1916a19e781,
          },
          "a-23": {
            id: "a-23",
            title: "Dropdown Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "5b62dd98-7a6c-166d-fd83-8fdee27bc831",
                      },
                      globalSwatchId: "--neutral-1",
                      rValue: 242,
                      bValue: 247,
                      gValue: 244,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1916a19e781,
          },
          "a-18": {
            id: "a-18",
            title: "Providers Card Hover - IN",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-18-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-cta-badge",
                        selectorGuids: ["86e93ff1-2dd6-d003-fa95-0a30a7b48f77"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".h4-size",
                        selectorGuids: ["72de033e-54a5-3c91-0baa-b154b5e16d7d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".p-size.is-providers-paragraph",
                        selectorGuids: [
                          "1a2e0a8b-ff55-772e-11df-aecdc617a1cb",
                          "ce45c932-beb3-6520-fec7-009de2d9e6b8",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-18-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "inOutExpo",
                      duration: 320,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "inOutExpo",
                      duration: 320,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".h4-size",
                        selectorGuids: ["72de033e-54a5-3c91-0baa-b154b5e16d7d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "inOutExpo",
                      duration: 320,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".p-size.is-providers-paragraph",
                        selectorGuids: [
                          "1a2e0a8b-ff55-772e-11df-aecdc617a1cb",
                          "ce45c932-beb3-6520-fec7-009de2d9e6b8",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "inOutExpo",
                      duration: 320,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-cta-badge",
                        selectorGuids: ["86e93ff1-2dd6-d003-fa95-0a30a7b48f77"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x193edd526b3,
          },
          "a-19": {
            id: "a-19",
            title: "Providers Card Hover - OUT",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".h4-size",
                        selectorGuids: ["72de033e-54a5-3c91-0baa-b154b5e16d7d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-19-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".p-size.is-providers-paragraph",
                        selectorGuids: [
                          "1a2e0a8b-ff55-772e-11df-aecdc617a1cb",
                          "ce45c932-beb3-6520-fec7-009de2d9e6b8",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-19-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-cta-badge",
                        selectorGuids: ["86e93ff1-2dd6-d003-fa95-0a30a7b48f77"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-19-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-19-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".providers-hover-content",
                        selectorGuids: ["a510efba-82e1-8bb4-03c5-8b8750657199"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x193edd526b3,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
