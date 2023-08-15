"use strict";
(self.webpackChunkrender_web = self.webpackChunkrender_web || []).push([
    [8895], {
        6950: function(e, t, n) {
            var o = n(7462),
                i = n(6298),
                s = n(7294),
                a = n(3935),
                r = n(7706),
                l = n(5277),
                c = n(1210),
                d = n(5963),
                m = n(7692),
                u = n(2250),
                p = n(7832);
            const g = () => "form-hubspot" + Math.random().toString(36).slice(2);
            var h = {
                    name: "1b4920d",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%"
                },
                b = {
                    name: "1kxh3dv",
                    styles: "font-size:1rem;line-height:1.5;margin-top:1rem;margin-bottom:1rem;color:#181b38"
                },
                f = {
                    name: "1nxxfo1",
                    styles: "position:absolute;top:0;right:0;padding:0;background:none;border:0"
                },
                v = {
                    name: "bjn8wh",
                    styles: "position:relative"
                },
                w = {
                    name: "10tf7up",
                    styles: "min-height:580px"
                },
                y = {
                    name: "eivff4",
                    styles: "display:none"
                },
                C = {
                    name: "hp1uwq",
                    styles: "position:fixed;display:flex;z-index:9999;top:0;left:0;width:100%;height:100%;overflow-y:auto;background:rgba(0, 0, 0, 0.4)"
                };
            t.Z = e => {
                const {
                    isClient: t
                } = (0, u.useIsClient)(), {
                    onClickTrigger: n,
                    renderAs: k = "button",
                    ...x
                } = e, {
                    0: Z,
                    1: S
                } = (0, s.useState)(!1), {
                    0: E,
                    1: I
                } = (0, s.useState)(!1), {
                    0: z,
                    1: D
                } = (0, s.useState)(g()), F = () => S(!1);
                return (0, s.useEffect)((() => {
                    const e = e => {
                        "Escape" === e.key && ((0, r.E)({
                            name: "Contact Sales Form Closed",
                            page_element: "escape-key"
                        }), F())
                    };
                    if (Z) {
                        var t, n;
                        I(!1), null === (t = window.hbspt) || void 0 === t || null === (n = t.forms) || void 0 === n || n.create({
                            target: "#" + z,
                            region: "na1",
                            portalId: "21532664",
                            formId: m.XK && "render.com" === window.location.host ? p.w : p.B,
                            onFormSubmitted: () => {
                                (0, r.E)({
                                    name: "Contact Sales Form Submitted"
                                }), I(!0)
                            }
                        }), document.addEventListener("keydown", e)
                    } else {
                        const t = document.getElementById(z);
                        t && (t.innerHTML = ""), document.removeEventListener("keydown", e), D(g())
                    }
                    return () => document.removeEventListener("keydown", e)
                }), [Z]), t ? (0, i.tZ)(s.Fragment, null, (0, i.tZ)("button", (0, o.Z)({}, x, {
                    type: "button",
                    css: "link" === k ? (0, i.iv)("background:none;border:0;padding:0;color:", c.DD, ";", "") : (0, i.iv)("height:calc(40em / 15);padding:calc(10em / 15) calc(20em / 15);font-size:calc(15rem / 16);font-weight:500;letter-spacing:0.4px;line-height:1.3;text-transform:uppercase;background:none;color:", c.DD, ";&:hover{color:", c.DD, ";}", l.Ir, "{margin-top:0.5rem;}", ""),
                    onClick: () => {
                        S(!0), null == n || n()
                    }
                }), "Contact sales"), "undefined" != typeof document && (0, a.createPortal)((0, i.tZ)("div", {
                    role: "presentation",
                    suppressHydrationWarning: !0,
                    css: [C, !Z && y, "", ""]
                }, (0, i.tZ)("div", {
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-label": "Contact sales",
                    suppressHydrationWarning: !0,
                    css: [(0, i.iv)("z-index:1;position:relative;top:0;bottom:0;width:100%;max-width:620px;margin:auto;padding:2rem;background:", c.e8, ";border-radius:25px;", ""), !E && w, "", ""]
                }, (0, i.tZ)("div", {
                    css: v
                }, (0, i.tZ)("h2", {
                    css: (0, i.iv)("margin-top:0;font-size:1.5rem;font-family:", d.ZP.neoSans, ";font-weight:500;line-height:1.2;color:", c.O5, ";", "")
                }, "Contact Sales"), (0, i.tZ)("button", {
                    type: "button",
                    "aria-label": "Close the modal",
                    title: "Close the modal",
                    onClick: () => {
                        (0, r.E)({
                            name: "Contact Sales Form Closed",
                            page_element: "close-button"
                        }), F()
                    },
                    css: f
                }, (0, i.tZ)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    fill: "currentColor",
                    preserveAspectRatio: "xMidYMid meet",
                    width: "32",
                    height: "32",
                    role: "img"
                }, (0, i.tZ)("path", {
                    d: "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"
                })))), !E && (0, i.tZ)("p", {
                    css: b
                }, "We will follow up as soon as possible."), (0, i.tZ)("div", {
                    id: z
                })), (0, i.tZ)("div", {
                    role: "presentation",
                    onClick: () => {
                        (0, r.E)({
                            name: "Contact Sales Form Closed",
                            page_element: "modal-overlay"
                        }), F()
                    },
                    css: h
                })), document.body)) : null
            }
        },
        7832: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return o
                },
                w: function() {
                    return i
                }
            });
            const o = "66c5eb63-61ac-47a6-8c75-75d2f7cc4d8c",
                i = "b663c71d-4483-4e2d-b7c7-9cca5762c0a3"
        },
        2250: function(e, t, n) {
            n.d(t, {
                useIsClient: function() {
                    return i
                }
            });
            var o = n(7294);
            const i = () => {
                const [e, t] = o.useState(!1);
                return o.useEffect((() => {
                    t(!0)
                }), []), {
                    isClient: e
                }
            }
        }
    }
]);