"use strict";
(self.webpackChunkrender_web = self.webpackChunkrender_web || []).push([
    [2097], {
        8690: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return y
                }
            });
            var r = n(7294),
                o = n(1883),
                i = n(6298),
                s = n(290),
                c = n.n(s),
                l = n(6702),
                a = n(8924),
                u = n.n(a),
                d = n(7200),
                h = n(9018),
                p = n(5277),
                m = n(5803),
                g = n(1210),
                f = n(2329),
                v = n(9299),
                w = n(7084);
            const b = c()("I484TOW77B", "2639e301ec9c03a28df78033b8bc5c23").initIndex("production_web");
            var x = {
                name: "8ynrc3",
                styles: "/**\n            * Visually hide content without breaking screen readers\n            * @see https://a11yproject.com/posts/how-to-hide-content/\n            */position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap;user-select:none"
            };
            const y = () => {
                const [e] = (0, l.Wd)("search", l.Zp), {
                    0: t,
                    1: n
                } = (0, r.useState)(e || ""), {
                    0: o,
                    1: s
                } = (0, r.useState)(!0), {
                    0: c,
                    1: a
                } = (0, r.useState)([]), d = (0, r.useRef)(null), v = o && t.trim().length >= 2;
                return (0, r.useEffect)((() => {
                    d.current && document.activeElement !== d.current && e && d.current.focus()
                }), [d, e]), (0, r.useEffect)((() => {
                    const e = e => {
                        var t, n;
                        "/" !== e.key || /(INPUT|TEXTAREA)/.test(null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) || document.activeElement === d.current || (e.preventDefault(), null === (n = d.current) || void 0 === n || n.focus())
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }), []), (0, r.useEffect)((() => {
                    const e = e => {
                        var t;
                        o && (null !== (t = d.current) && void 0 !== t && t.contains(e.target) || s(!1))
                    };
                    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
                }), [o, d]), (0, r.useEffect)((() => {
                    t.trim().length < 2 || b.search(u()(t), {
                        distinct: !0
                    }).then((e => {
                        let {
                            hits: t
                        } = e;
                        t && a(t)
                    })).catch((e => {
                        (0, h.O)(e)
                    }))
                }), [t]), (0, i.tZ)("div", {
                    css: (0, i.iv)("position:relative;display:flex;align-items:center;width:100%;margin-left:0.5rem;margin-right:1rem;", p.r, "{margin-left:0;margin-right:0.5rem;}", "")
                }, (0, i.tZ)("label", {
                    htmlFor: "search",
                    css: x
                }, "Search docs"), (0, i.tZ)(f.Z, {
                    ref: d,
                    maxLength: "256",
                    name: "search",
                    id: "search",
                    required: "",
                    initialValue: t,
                    onFocus: () => s(!0),
                    onUpdateValue: n,
                    onKeyDown: e => {
                        if (!o) return;
                        const t = () => {
                            var t;
                            s(!1), e.preventDefault(), null === (t = d.current) || void 0 === t || t.blur()
                        };
                        "Tab" === e.key && t(), "Escape" === e.key && (t(), n(""))
                    },
                    className: (0, i.iv)("text-indent:2.125rem;background:", g.h$, " 8px 50%/20px url(", m.Z, ") no-repeat;", "")
                }), v && (0, i.tZ)(T, {
                    searchTerm: t,
                    hits: c,
                    onTab: () => s(!1)
                }))
            };
            var k = {
                name: "1a7e1yb",
                styles: "margin-top:0.25rem"
            };
            const E = e => {
                let {
                    url: t
                } = e, n = "Docs";
                /^\/docs/.test(t) ? n = t in v.dG ? "Quickstart" : "Docs" : /^\/blog/.test(t) && (n = "Blog");
                const r = {
                    Docs: (0, g.E9)(g.bE, .7),
                    Quickstart: (0, g.E9)(g.bE, .5),
                    Blog: (0, g.E9)(g.tm, .7),
                    Security: g.hw
                };
                return (0, i.tZ)("div", {
                    css: k
                }, (0, i.tZ)(w.V, {
                    className: (0, i.iv)("background:", r[n], ";", "")
                }, n))
            };
            var Z = {
                    name: "nxdjci",
                    styles: "max-height:620px;overflow-y:auto;list-style:none;margin:0;padding:0"
                },
                D = {
                    name: "1w32aa6",
                    styles: "display:flex;flex-wrap:wrap;align-items:center;justify-content:center;min-height:120px;padding:1.25rem"
                };
            const T = e => {
                let {
                    searchTerm: t,
                    hits: n,
                    onTab: s
                } = e;
                const {
                    0: c,
                    1: l
                } = (0, r.useState)(-1), a = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    const e = e => {
                        if (0 !== n.length) {
                            if ("Tab" === e.key && s(), "Enter" === e.key && c > -1) {
                                const e = a.current.querySelector("[aria-selected='true'] a");
                                null == e || e.click()
                            }
                            if (["ArrowDown", "ArrowUp"].includes(e.key)) {
                                const t = "ArrowDown" === e.key ? 1 : -1;
                                e.preventDefault(), l((e => {
                                    const r = e += t;
                                    return r === n.length ? 0 : r < 0 ? n.length - 1 : r
                                })), u()
                            }
                        }
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }), [n, c]);
                const u = () => {
                    const e = a.current.querySelector("[aria-selected='true'] a");
                    if (!e) return;
                    e.focus();
                    const t = e.getBoundingClientRect(),
                        n = t.y + t.height;
                    (n < t.height || n > a.current.offsetHeight) && e.scrollIntoView()
                };
                return (0, i.tZ)("div", {
                    css: (0, i.iv)("position:absolute;z-index:2001;top:calc(100% + 5px);left:0;width:100%;min-width:640px;background:", g.HU, ";border:1px solid ", g.$q, ";border-radius:0.75rem;background-color:", g.HU, ";box-shadow:0 14px 50px -5px rgba(73, 81, 126, 0.4);overflow:hidden;", p.Q7, "{min-width:0;}", "")
                }, 0 === n.length ? (0, i.tZ)("div", {
                    css: D
                }, "Nothing found for ", (0, i.tZ)("strong", null, "“", t, "”"), " 😲") : (0, i.tZ)("ul", {
                    ref: a,
                    role: "listbox",
                    css: Z
                }, n.map(((e, t) => {
                    const n = c === t;
                    return (0, i.tZ)("li", {
                        key: e.objectID,
                        role: "option",
                        "aria-selected": n,
                        suppressHydrationWarning: !0,
                        css: [(0, i.iv)("&:not(:last-of-type){border-bottom:1px solid ", g.$q, ";}&:hover{background:", g.h$, ";}", ""), n && (0, i.iv)("background:", g.h$, ";", ""), "", ""]
                    }, (0, i.tZ)(o.Link, {
                        tabIndex: "-1",
                        to: e.url,
                        onMouseEnter: () => l(t),
                        css: (0, i.iv)('position:relative;display:flex;flex-direction:column;padding:1.25rem 1.25rem 1rem 1.25rem;&:focus{outline:0;}&:focus:not(:active):before{content:"";position:absolute;top:0;left:0;width:2px;height:100%;background:', g.DD, ";}em{font-weight:600;font-style:normal;color:", g.DD, ";}", "")
                    }, (0, i.tZ)("div", {
                        css: (0, i.iv)("margin-bottom:0.375rem;font-weight:600;color:", g.uf, ";line-height:1.5;", ""),
                        dangerouslySetInnerHTML: {
                            __html: (0, d.t)(e._highlightResult.title.value)
                        }
                    }), (0, i.tZ)("div", {
                        css: (0, i.iv)("color:", g.qs, ";font-size:0.875rem;line-height:1.6;", ""),
                        dangerouslySetInnerHTML: {
                            __html: (0, d.t)(e._highlightResult.excerpt.value)
                        }
                    }), (0, i.tZ)(E, {
                        url: e.url
                    })))
                }))))
            }
        }
    }
]);