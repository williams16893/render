"use strict";
(self.webpackChunkrender_web = self.webpackChunkrender_web || []).push([
    [1685], {
        4056: function(e, t, i) {
            i.d(t, {
                R6: function() {
                    return k
                },
                ZL: function() {
                    return h
                },
                qc: function() {
                    return x
                }
            });
            var n = i(7294),
                o = i(6298),
                r = i(3279),
                s = i.n(r),
                a = i(1883),
                l = i(5277),
                p = i(1210),
                c = i(7974),
                d = i(7706);
            const u = 624;

            function x(e) {
                return (0, o.tZ)("ul", {
                    css: (0, o.iv)("display:inline-flex;flex-direction:column;flex:1;margin:0 60px 0 0;padding:0;list-style:none;white-space:nowrap;&:last-of-type{margin-right:20px;}li:last-of-type{margin-bottom:0;}", l.Ir, "{margin:0 40px 0 0;}@media (max-width: ", u, "px){margin:0 0 40px 0;&:last-of-type{margin-bottom:0;}}", "")
                }, (0, o.tZ)("div", {
                    css: (0, o.iv)("margin-bottom:16px;font-size:13px;line-height:1.5;font-weight:500;letter-spacing:0.6px;text-transform:uppercase;color:", p.tm, ";", "")
                }, e.title), e.children)
            }
            var f = {
                    name: "kra5yg",
                    styles: "display:inline-flex;font-size:14px;line-height:18px;letter-spacing:0.2px"
                },
                m = {
                    name: "1megs51",
                    styles: "display:inline-flex;margin-bottom:16px"
                };

            function h(e) {
                return (0, o.tZ)("li", {
                    css: m
                }, e.href ? (0, o.tZ)(a.Link, {
                    tabIndex: -1,
                    to: e.href,
                    css: (0, o.iv)("font-size:14px;line-height:18px;font-weight:500;letter-spacing:0.2px;color:", p.Lq, ";&:hover{color:", p.HL, ";}", "")
                }, e.children) : (0, o.tZ)("div", {
                    css: f
                }, e.children))
            }
            var g = {
                name: "ytokg",
                styles: "height:15px"
            };

            function b(e) {
                const {
                    0: t,
                    1: i
                } = (0, n.useState)(!1);
                return (0, n.useEffect)((() => {
                    window.requestAnimationFrame((() => {
                        window.requestAnimationFrame((() => i(!0)))
                    }))
                }), []), (0, n.useEffect)((() => {
                    t && (0, d.E)({
                        name: "Product Menu Opened"
                    })
                }), [t]), (0, o.tZ)("div", {
                    onClick: t => {
                        "A" === t.target.tagName && ("/render-vs-heroku-comparison" !== t.target.href && (0, d.E)({
                            name: "Product Menu Item Clicked",
                            text: t.target.text,
                            url: t.target.href
                        }), e.onClickLink())
                    },
                    css: (0, o.iv)("position:absolute;z-index:2001;top:100%;left:calc(-20px + 12px);will-change:transition,opacity;transition:all 150ms ease-out;transform:translateY(", t ? 0 : "-6px", ");opacity:", t ? 1 : .6, ";", "")
                }, (0, o.tZ)("div", {
                    css: g
                }), (0, o.tZ)("div", {
                    css: (0, o.iv)("position:relative;border:1px solid ", p.$q, ";border-radius:12px;background-color:", p.HU, ';box-shadow:rgb(73 81 126 / 25%) -6px 17px 50px -5px;&:before{content:"";position:absolute;z-index:1;top:-6px;left:40px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid ', p.HU, ";}", "")
                }, e.children))
            }
            var v = {
                    name: "ebhsi4",
                    styles: "max-width:40px"
                },
                y = {
                    name: "1mhpqou",
                    styles: "width:42px;height:42px;border-radius:6px;padding:6px"
                },
                w = {
                    name: "1o50g0e",
                    styles: "position:relative;width:40px;margin-right:8px;margin-bottom:8px"
                };

            function k(e) {
                const t = Object.entries(e.data);
                return (0, o.tZ)("ul", {
                    css: (0, o.iv)("display:flex;flex-wrap:wrap;list-style:none;max-width:96px;min-width:96px;margin:0;padding:0;transition:opacity 200ms ease-out;&:hover{opacity:0.8;}", l.QE, "{margin-left:7.5px;}", l.Ir, "{max-width:100%;}", c.X, ";", "")
                }, t.map(((e, i) => {
                    let [n, r] = e;
                    return (0, o.tZ)("li", {
                        key: n,
                        suppressHydrationWarning: !0,
                        css: [w, i === t.length - 1 && (0, o.iv)(l.QE, "{display:flex;justify-content:center;width:100%;}", ""), "", ""]
                    }, (0, o.tZ)("div", {
                        className: r.className,
                        css: y
                    }, (0, o.tZ)("img", {
                        src: r.icon,
                        alt: n,
                        title: n,
                        css: v
                    })))
                })))
            }
            const Z = e => (0, o.tZ)("div", {
                css: (0, o.iv)("display:flex;padding:20px;@media (max-width: ", u, "px){flex-direction:column;}", "")
            }, e.children);
            t.ZP = function(e) {
                const {
                    0: t,
                    1: i
                } = (0, n.useState)(!1), {
                    0: r,
                    1: a
                } = (0, n.useState)(!1), {
                    0: c,
                    1: d
                } = (0, n.useState)(-1), u = (0, n.useRef)(null), x = s()((() => i(!0)), 250), f = () => {
                    i(!1), null == x || x.cancel()
                }, m = function(e) {
                    void 0 === e && (e = !1), i(!t), a(e)
                };
                return (0, n.useEffect)((() => {
                    var e, t;
                    null === (t = (null === (e = u.current) || void 0 === e ? void 0 : e.querySelectorAll("a"))[c]) || void 0 === t || t.focus()
                }), [c]), (0, n.useEffect)((() => {
                    t || d(-1)
                }), [t]), (0, o.tZ)("div", {
                    ref: u,
                    onMouseLeave: f,
                    onKeyDown: e => {
                        if (t && r) {
                            var i;
                            const t = null === (i = u.current) || void 0 === i ? void 0 : i.querySelectorAll("a");
                            "ArrowDown" === e.key && (e.preventDefault(), d((e => e === t.length - 1 ? 0 : e + 1))), "ArrowUp" === e.key && (e.preventDefault(), d((e => e <= 0 ? t.length - 1 : e - 1))), "Tab" === e.key && f()
                        }
                    },
                    css: (0, o.iv)("position:relative;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;height:52px;", l.Q7, "{width:100%;height:auto;}", "")
                }, (0, o.tZ)("button", {
                    type: "button",
                    "aria-haspopup": "true",
                    "aria-expanded": t,
                    className: "nav-link",
                    onClick: m,
                    onFocus: () => m(!0),
                    onMouseEnter: x,
                    css: (0, o.iv)("padding:0;background:none;border:0;", l.Q7, "{display:flex;justify-content:center;width:100%;&.nav-link{flex:1;}}", "")
                }, e.text), !e.mobile && t && (0, o.tZ)(b, {
                    isMobile: e.mobile,
                    onClickLink: f
                }, (0, o.tZ)(Z, null, e.body), (0, o.tZ)("footer", {
                    css: (0, o.iv)("display:flex;align-items:center;justify-content:space-between;background-color:", p.lH, ";padding:16px 20px;border:1px solid ", p.lH, ";border-bottom-left-radius:12px;border-bottom-right-radius:12px;", "")
                }, e.footer)), e.mobile && (0, o.tZ)("div", {
                    css: (0, o.iv)("width:100%;margin-bottom:16px;background:", p.HU, ";border:1px solid ", p.$q, ";border-radius:12px;", "")
                }, (0, o.tZ)(Z, null, e.body)))
            }
        }
    }
]);