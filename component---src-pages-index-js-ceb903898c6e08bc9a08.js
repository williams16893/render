"use strict";
(self.webpackChunkrender_web = self.webpackChunkrender_web || []).push([
    [9678], {
        6558: function(e, n, t) {
            t.r(n), t.d(n, {
                Head: function() {
                    return f
                }
            });
            var a = t(7462),
                o = t(7294),
                r = t(4148),
                s = t(4181),
                c = t(9018),
                l = t(4271),
                i = t(1210),
                u = t(4522),
                Z = t(6229),
                g = t(7706),
                p = t(6298);
            const f = e => (0, p.tZ)(r.Z, (0, a.Z)({}, e, {
                title: "Cloud Application Hosting for Developers"
            }));
            n.default = e => {
                const n = (0, Z.P)();
                return (0, o.useEffect)((() => {
                    const e = new URLSearchParams(window.location.search).get("source");
                    e && (0, g.N)({
                        category: "general",
                        action: "sourceparam",
                        label: e
                    })
                }), []), (0, p.tZ)(c.S, null, (0, p.tZ)(u.Z, {
                    location: e.location,
                    pageHasBanner: !0
                }), (0, p.tZ)(s.Z, {
                    isLoggedIn: n,
                    pageHasBanner: !0
                }), (0, p.tZ)(l.Z, {
                    svgStyle: {
                        fill: `${i.ZP.whiteSmoke}`
                    },
                    isLikeHomepage: !0
                }))
            }
        }
    }
]);