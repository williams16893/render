"use strict";
(self.webpackChunkrender_web = self.webpackChunkrender_web || []).push([
    [2650], {
        6974: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return f
                },
                W: function() {
                    return w
                }
            });
            var i = r(7462),
                n = r(5785),
                o = r(6298),
                a = r(7294),
                s = r(8924),
                l = r.n(s),
                d = r(2250),
                c = r(5277),
                u = r(1210),
                p = r(2421);
            const x = "[data-card]",
                h = e => {
                    const {
                        0: t,
                        1: r
                    } = (0, a.useState)(!1);
                    return (0, o.tZ)(a.Fragment, null, e.user_image && !t && (0, o.tZ)("img", {
                        src: e.user_image,
                        alt: `@${e.user_id} profile`,
                        loading: "lazy",
                        onError: () => r(!0)
                    }), (!e.user_image || t) && (0, o.tZ)("span", null, e.user_id.slice(0, 1)))
                };
            var g = {
                    name: "1o08a7x",
                    styles: "position:relative;z-index:1;display:flex;align-items:center"
                },
                m = {
                    name: "1yftdf7",
                    styles: "will-change:transform"
                };
            const f = e => (0, o.tZ)("a", {
                "data-card": !0,
                href: e.url,
                target: "_blank",
                rel: "noopener noreferrer",
                css: m,
                onMouseEnter: e.onMouseEnter,
                onMouseLeave: e.onMouseLeave
            }, (0, o.tZ)("div", {
                suppressHydrationWarning: !0,
                css: [(0, o.iv)("position:relative;margin-bottom:32px;padding:32px;background:", u.ZP.pureWhiteColor, ";border-radius:8px 8px 48px 8px;box-shadow:0px 8px 24px rgba(73, 81, 126, 0.05);will-change:box-shadow;overflow:hidden;&:hover{transition:all 200ms ease-out;box-shadow:0px 18px 50px rgba(73, 81, 126, 0.24);}[data-sprinkle]{opacity:0;transition:opacity 200ms ease-out;}&:hover [data-sprinkle]{opacity:1;}", c.Q7, "{display:flex;flex-direction:column;justify-content:space-between;height:100%;width:320px;margin-right:32px;margin-bottom:16px;}", c.PG, "{width:260px;}", ""), e.className, "", ""]
            }, (0, o.tZ)("p", {
                css: (0, o.iv)("position:relative;z-index:1;margin-bottom:16px;font-size:14px;line-height:20px;color:", u.ZP.eclipse, ";white-space:pre-wrap;text-align:left;a{color:", u.ZP.renderBlue, ";}", ""),
                dangerouslySetInnerHTML: {
                    __html: l()(e.html)
                }
            }), (0, o.tZ)("div", {
                css: g
            }, (0, o.tZ)("div", {
                css: (0, o.iv)("display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;overflow:hidden;background:", u.ZP.whiteLight, ";color:", u.ZP.granite, ";text-transform:uppercase;", ""),
                title: `@${e.user_id}`
            }, (0, o.tZ)(h, e)), (0, o.tZ)("div", {
                css: (0, o.iv)("margin-left:8px;font-size:15px;line-height:23px;color:", u.ZP.granite, ";", "")
            }, "@", e.user_id)), (0, o.tZ)("div", {
                "data-sprinkle": !0,
                css: (0, o.iv)("position:absolute;z-index:0;width:40px;height:16px;left:21px;top:-7px;background:", u.ZP.renderBlue, ";border-radius:12px;transform:rotate(-45deg);", "")
            }), (0, o.tZ)("div", {
                "data-sprinkle": !0,
                css: (0, o.iv)("position:absolute;z-index:0;width:40px;height:16px;left:-22px;top:27.74px;background:", u.ZP.redRadish, ";border-radius:12px;transform:matrix(0.92, 0.39, 0.39, -0.92, 0, 0);", "")
            }), (0, o.tZ)("div", {
                "data-sprinkle": !0,
                css: (0, o.iv)("position:absolute;width:40px;height:16px;right:-18px;bottom:37px;background:", u.ZP.apricot, ";border-radius:12px;transform:rotate(-29.85deg);", "")
            }), (0, o.tZ)("div", {
                "data-sprinkle": !0,
                css: (0, o.iv)("position:absolute;width:40px;height:16px;right:20px;bottom:-5px;background:", u.ZP.aurora, ";border-radius:12px;transform:matrix(0.37, 0.93, 0.93, -0.37, 0, 0);", "")
            })));

            function v(e) {
                let {
                    delay: t = 0,
                    mobile: r,
                    tweets: s
                } = e;
                const l = (0, a.useRef)(null),
                    {
                        0: d,
                        1: u
                    } = (0, a.useState)(s),
                    {
                        0: p,
                        1: h
                    } = (0, a.useState)(!1),
                    g = () => h(!0),
                    m = () => h(!1);
                return (0, a.useEffect)((() => {
                    let e, i, o, a;
                    const s = () => {
                            clearInterval(e), clearTimeout(i), clearTimeout(o), clearTimeout(a)
                        },
                        d = () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.querySelectorAll(x).forEach((e => e.removeAttribute("style")))
                        };
                    return d(), p ? s() : i = setTimeout((() => {
                        e = setInterval((() => {
                            var e, t;
                            const i = null === (e = l.current) || void 0 === e ? void 0 : e.querySelector(x),
                                {
                                    height: s,
                                    width: c
                                } = null == i ? void 0 : i.getBoundingClientRect(),
                                p = r ? c : s,
                                h = r ? "X" : "Y";
                            r && l.current && (l.current.scrollLeft = 0), null === (t = l.current) || void 0 === t || t.querySelectorAll(x).forEach((e => {
                                e.setAttribute("style", `transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1); transform: translate${h}(-${p}px)`)
                            })), o = setTimeout((() => {
                                i.style.opacity = 0, a = setTimeout((() => {
                                    u((e => [].concat((0, n.Z)(e.slice(1)), [e[0]]))), d()
                                }), 500)
                            }), 1e3)
                        }), 4500)
                    }), t), () => s()
                }), [t, p, r]), (0, o.tZ)("div", {
                    ref: l,
                    onMouseEnter: g,
                    onMouseLeave: m,
                    onTouchStart: g,
                    onTouchEnd: m,
                    css: (0, o.iv)("display:flex;flex-direction:column;width:50%;padding-right:32px;", c.Q7, "{flex-direction:row;width:calc(100% - 16px);padding-left:32px;padding-right:0;overflow-x:auto;overflow-y:hidden;}", "")
                }, d.map((e => (0, o.tZ)(f, (0, i.Z)({
                    key: e.url
                }, e)))))
            }
            const w = () => {
                const {
                    isClient: e
                } = (0, d.useIsClient)(), {
                    0: t,
                    1: r
                } = (0, a.useState)(0), {
                    0: i,
                    1: n
                } = (0, a.useState)(!1), s = Math.ceil(p.U.length / 2), l = p.U.slice(0, s), u = p.U.slice(s);
                return (0, a.useEffect)((() => {
                    const e = () => {
                        const e = document.querySelector("[data-tweet-wall-wave]");
                        if (null != e) {
                            const {
                                height: t
                            } = e.getBoundingClientRect();
                            r(t)
                        }
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }), []), (0, a.useEffect)((() => {
                    n(window.innerWidth <= c.bH);
                    const e = window.matchMedia(`(max-width: ${c.bH}px)`),
                        t = e => {
                            let {
                                matches: t
                            } = e;
                            return n(t)
                        };
                    return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                }), []), e ? (0, o.tZ)("div", {
                    css: (0, o.iv)("display:flex;margin-top:-", t - 160, "px;", c.Q7, "{flex-direction:column;margin-top:40px;margin-bottom:80px;}", "")
                }, i && (0, o.tZ)(v, {
                    tweets: p.U,
                    mobile: !0
                }), !i && (0, o.tZ)(a.Fragment, null, (0, o.tZ)(v, {
                    tweets: l
                }), (0, o.tZ)(v, {
                    tweets: u,
                    delay: 2250
                }))) : null
            }
        }
    }
]);