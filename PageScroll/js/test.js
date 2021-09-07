!(function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], function (o) {
              return t(o, e, e.document, e.Math);
          })
        : "object" == typeof exports && exports
        ? (module.exports = t(require("jquery"), e, e.document, e.Math))
        : t(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, t, o, n, i) {
    "use strict";
    var l = "fullpage-wrapper",
        a = "." + l,
        r = "fp-responsive",
        s = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        u = "fp-viewing",
        f = "active",
        h = "." + f,
        p = "fp-completely",
        v = "." + p,
        g = "fp-section",
        m = "." + g,
        y = m + h,
        S = m + ":first",
        w = m + ":last",
        b = "fp-tableCell",
        x = "." + b,
        C = "fp-auto-height",
        k = "fp-normal-scroll",
        T = "fp-nav",
        H = "#" + T,
        q = "fp-tooltip",
        A = "." + q,
        L = "fp-show-active",
        O = "fp-slide",
        I = "." + O,
        E = I + h,
        M = "fp-slides",
        B = "." + M,
        R = "fp-slidesContainer",
        z = "." + R,
        D = "fp-table",
        P = "fp-slidesNav",
        F = "." + P,
        V = F + " a",
        j = ".fp-controlArrow",
        Y = "fp-prev",
        _ = "fp-controlArrow " + Y,
        N = j + ("." + Y),
        X = "fp-controlArrow fp-next",
        U = j + ".fp-next",
        W = e(t),
        K = e(o);
    e.fn.fullpage = function ($) {
        if (e("html").hasClass(d)) return void Zt();
        var Q = e("html, body"),
            G = e("body"),
            J = e.fn.fullpage;
        $ = e.extend(
            {
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0,
            },
            $
        );
        var Z,
            ee,
            te,
            oe,
            ne = !1,
            ie = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            le = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            ae = e(this),
            re = W.height(),
            se = !1,
            ce = !0,
            de = !0,
            ue = [],
            fe = { m: { up: !0, down: !0, left: !0, right: !0 } };
        fe.k = e.extend(!0, {}, fe.m);
        var he,
            pe,
            ve,
            ge,
            me,
            ye,
            Se,
            we = (function () {
                var e;
                e = t.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
                return e;
            })(),
            be = { touchmove: "ontouchmove" in t ? "touchmove" : we.move, touchstart: "ontouchstart" in t ? "touchstart" : we.down },
            xe = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
            Ce = e.extend(!0, {}, $);
        let ke = 0;
        function Te(t, o) {
            t || $t(0), Jt("autoScrolling", t, o);
            var n = e(y);
            $.autoScrolling && !$.scrollBar
                ? (Q.css({ overflow: "hidden", height: "100%" }), He(Ce.recordHistory, "internal"), ae.css({ "-ms-touch-action": "none", "touch-action": "none" }), n.length && $t(n.position().top))
                : (Q.css({ overflow: "visible", height: "initial" }), He(!1, "internal"), ae.css({ "-ms-touch-action": "", "touch-action": "" }), n.length && Q.scrollTop(n.position().top));
        }
        function He(e, t) {
            Jt("recordHistory", e, t);
        }
        function qe(e, t) {
            Jt("scrollingSpeed", e, t);
        }
        function Ae(e, t) {
            Jt("fitToSection", e, t);
        }
        function Le(e) {
            e
                ? (!(function () {
                      var e,
                          n = "";
                      t.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (n = "on"));
                      var l = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                      "DOMMouseScroll" == l ? o[e](n + "MozMousePixelScroll", ot, !1) : o[e](n + l, ot, !1);
                  })(),
                  ae.on("mousedown", wt).on("mouseup", bt))
                : (o.addEventListener ? (o.removeEventListener("mousewheel", ot, !1), o.removeEventListener("wheel", ot, !1), o.removeEventListener("MozMousePixelScroll", ot, !1)) : o.detachEvent("onmousewheel", ot),
                  ae.off("mousedown", wt).off("mouseup", bt));
        }
        function Oe(t, o) {
            void 0 !== o
                ? ((o = o.replace(/ /g, "").split(",")),
                  e.each(o, function (e, o) {
                      Gt(t, o, "m");
                  }))
                : (Gt(t, "all", "m"),
                  t
                      ? (Le(!0), (ie || le) && ($.autoScrolling && G.off(be.touchmove).on(be.touchmove, Ue), e(a).off(be.touchstart).on(be.touchstart, Ze).off(be.touchmove).on(be.touchmove, Ge)))
                      : (Le(!1), (ie || le) && ($.autoScrolling && G.off(be.touchmove), e(a).off(be.touchstart).off(be.touchmove))));
        }
        function Ie(t, o) {
            void 0 !== o
                ? ((o = o.replace(/ /g, "").split(",")),
                  e.each(o, function (e, o) {
                      Gt(t, o, "k");
                  }))
                : (Gt(t, "all", "k"), ($.keyboardScrolling = t));
        }
        function Ee() {
            if (!document.querySelector('.popup').classList.contains('popup_active')){
                var t = e(y).prev(m);
            if ((console.log("height:", ke), ke >= o.querySelector(".section").clientHeight)) {
                ke -= parseInt(o.querySelector(".section").clientHeight, 10);
                let e = o.querySelectorAll(".line__wrapper"),
                    t = ke - 80;
                console.log("lineShift:", t),
                    e.forEach((e) => {
                        e.style.transform = `translate3D(-50%, ${t}px, 0px)`;
                    }),
                    t < 1 && (e[0].style.opacity = 0),
                    t < o.querySelector(".section").clientHeight && t > 0 && ((e[0].style.opacity = 1), (e[1].style.opacity = 0)),
                    t < 2 * o.querySelector(".section").clientHeight && t > o.querySelector(".section").clientHeight && ((e[1].style.opacity = 1), (e[2].style.opacity = 0)),
                    t < 3 * o.querySelector(".section").clientHeight && t > 2 * o.querySelector(".section").clientHeight && ((e[2].style.opacity = 1), (e[3].style.opacity = 0)),
                    t < 4 * o.querySelector(".section").clientHeight && t > 3 * o.querySelector(".section").clientHeight && ((e[3].style.opacity = 1), (e[4].style.opacity = 0)),
                    t < 5 * o.querySelector(".section").clientHeight && t > 4 * o.querySelector(".section").clientHeight && (e[4].style.opacity = 1);
            }
            let n = o.querySelector(".active").id,
                i = o.querySelector(".header"),
                l = o.querySelector(".header_white");
            switch ((console.log(n), n)) {
                case "cash":
                case "services":
                    (i.style.display = "none"), (l.style.display = "block");
                    break;
                default:
                    (i.style.display = "block"), (l.style.display = "none");
            }
            t.length || (!$.loopTop && !$.continuousVertical) || (t = e(m).last()), t.length && at(t, null, !0);
            }
        }
        function Me() {
            var t = e(y).next(m);
            if ((console.log(e(y)), ke <= 5 * o.querySelector(".section").clientHeight)) {
                ke += parseInt(o.querySelector(".section").clientHeight, 10);
                let e = o.querySelectorAll(".line__wrapper"),
                    t = ke - 80;
                e.forEach((e) => {
                    e.style.transform = `translate3D(-50%, ${t}px, 0px)`;
                }),
                    t > 1 && t <= o.querySelector(".section").clientHeight && (e[0].style.opacity = 1),
                    t > o.querySelector(".section").clientHeight && t < 2 * o.querySelector(".section").clientHeight && ((e[0].style.opacity = 0), (e[1].style.opacity = 1)),
                    t > 2 * o.querySelector(".section").clientHeight && t < 3 * o.querySelector(".section").clientHeight && ((e[1].style.opacity = 0), (e[2].style.opacity = 1)),
                    t > 3 * o.querySelector(".section").clientHeight && t < 4 * o.querySelector(".section").clientHeight && ((e[2].style.opacity = 0), (e[3].style.opacity = 1)),
                    t > 4 * o.querySelector(".section").clientHeight && t < 5 * o.querySelector(".section").clientHeight && ((e[3].style.opacity = 0), (e[4].style.opacity = 1)),
                    t > 5 * o.querySelector(".section").clientHeight && (e[4].style.opacity = 0);
            }
            t.length || (!$.loopBottom && !$.continuousVertical) || (t = e(m).first()), t.length && at(t, null, !1);
            let n = o.querySelector(".active").id,
                i = o.querySelector(".header"),
                l = o.querySelector(".header_white");
            switch ((console.log(n), n)) {
                case "income":
                case "transaction":
                    (i.style.display = "none"), (l.style.display = "block");
                    break;
                case "form":
                    i.style.display = "none";
                    break;
                default:
                    (i.style.display = "block"), (l.style.display = "none");
            }
        }
        function Be(e, t) {
            qe(0, "internal"), Re(e, t), qe(Ce.scrollingSpeed, "internal");
        }
        function Re(e, t) {
            var o = Vt(e);
            void 0 !== t ? jt(e, t) : o.length > 0 && at(o);
        }
        function ze(e) {
            nt("right", e);
        }
        function De(e) {
            nt("left", e);
        }
        function Pe(t) {
            if (!ae.hasClass(c)) {
                (se = !0),
                    (re = W.height()),
                    e(m).each(function () {
                        var t = e(this).find(B),
                            o = e(this).find(I);
                        $.verticalCentered &&
                            e(this)
                                .find(x)
                                .css("height", Pt(e(this)) + "px"),
                            e(this).css("height", re + "px"),
                            o.length > 1 && At(t, t.find(E));
                    }),
                    $.scrollOverflow && he.createScrollBarForAll();
                var o = e(y).index(m);
                o && Be(o + 1), (se = !1), e.isFunction($.afterResize) && t && $.afterResize.call(ae), e.isFunction($.afterReBuild) && !t && $.afterReBuild.call(ae);
            }
        }
        function Fe(t) {
            var o = G.hasClass(r);
            t
                ? o || (Te(!1, "internal"), Ae(!1, "internal"), e(H).hide(), G.addClass(r), e.isFunction($.afterResponsive) && $.afterResponsive.call(ae, t))
                : o && (Te(Ce.autoScrolling, "internal"), Ae(Ce.autoScrolling, "internal"), e(H).show(), G.removeClass(r), e.isFunction($.afterResponsive) && $.afterResponsive.call(ae, t));
        }
        function Ve() {
            var t,
                o = e(y);
            o.addClass(p),
                ct(o),
                dt(o),
                $.scrollOverflow && $.scrollOverflowHandler.afterLoad(),
                (!(t = Vt(gt().section)) || (t.length && t.index() === oe.index())) && e.isFunction($.afterLoad) && $.afterLoad.call(o, o.data("anchor"), o.index(m) + 1),
                e.isFunction($.afterRender) && $.afterRender.call(ae);
        }
        Zt(),
            e.extend(e.easing, {
                easeInOutCubic: function (e, t, o, n, i) {
                    return (t /= i / 2) < 1 ? (n / 2) * t * t * t + o : (n / 2) * ((t -= 2) * t * t + 2) + o;
                },
            }),
            e(this).length &&
                ((J.version = "2.9.7"),
                (J.setAutoScrolling = Te),
                (J.setRecordHistory = He),
                (J.setScrollingSpeed = qe),
                (J.setFitToSection = Ae),
                (J.setLockAnchors = function (e) {
                    $.lockAnchors = e;
                }),
                (J.setMouseWheelScrolling = Le),
                (J.setAllowScrolling = Oe),
                (J.setKeyboardScrolling = Ie),
                (J.moveSectionUp = Ee),
                (J.moveSectionDown = Me),
                (J.silentMoveTo = Be),
                (J.moveTo = Re),
                (J.moveSlideRight = ze),
                (J.moveSlideLeft = De),
                (J.fitToSection = Ne),
                (J.reBuild = Pe),
                (J.setResponsive = Fe),
                (J.destroy = function (t) {
                    Te(!1, "internal"),
                        Oe(!1),
                        Ie(!1),
                        ae.addClass(c),
                        clearTimeout(ge),
                        clearTimeout(ve),
                        clearTimeout(pe),
                        clearTimeout(me),
                        clearTimeout(ye),
                        W.off("scroll", _e).off("hashchange", vt).off("resize", It),
                        K.off("keydown", mt)
                            .off("keyup", St)
                            .off("click touchstart", H + " a")
                            .off("mouseenter", H + " li")
                            .off("mouseleave", H + " li")
                            .off("click touchstart", V)
                            .off("mouseover", $.normalScrollElements)
                            .off("mouseout", $.normalScrollElements),
                        e(m).off("click touchstart", j),
                        clearTimeout(ge),
                        clearTimeout(ve),
                        t &&
                            (function () {
                                $t(0),
                                    ae.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                                        st(e(this), "src");
                                    }),
                                    ae.find("img[data-srcset]").each(function () {
                                        st(e(this), "srcset");
                                    }),
                                    e(H + ", " + F + ", " + j).remove(),
                                    e(m).css({ height: "", "background-color": "", padding: "" }),
                                    e(I).css({ width: "" }),
                                    ae.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                                    Q.css({ overflow: "", height: "" }),
                                    e("html").removeClass(d),
                                    G.removeClass(r),
                                    e.each(G.get(0).className.split(/\s+/), function (e, t) {
                                        0 === t.indexOf(u) && G.removeClass(t);
                                    }),
                                    e(m + ", " + I).each(function () {
                                        $.scrollOverflowHandler && $.scrollOverflowHandler.remove(e(this)), e(this).removeClass(D + " " + f), e(this).attr("style", e(this).data("fp-styles"));
                                    }),
                                    Bt(ae),
                                    ae.find(x + ", " + z + ", " + B).each(function () {
                                        e(this).replaceWith(this.childNodes);
                                    }),
                                    ae.css({ "-webkit-transition": "none", transition: "none" }),
                                    Q.scrollTop(0);
                                var t = [g, O, R];
                                e.each(t, function (t, o) {
                                    e("." + o).removeClass(o);
                                });
                            })();
                }),
                (J.shared = { afterRenderActions: Ve }),
                (function () {
                    $.css3 &&
                        ($.css3 = (function () {
                            var e,
                                n = o.createElement("p"),
                                l = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                            for (var a in (o.body.insertBefore(n, null), l)) n.style[a] !== i && ((n.style[a] = "translate3d(1px,1px,1px)"), (e = t.getComputedStyle(n).getPropertyValue(l[a])));
                            return o.body.removeChild(n), e !== i && e.length > 0 && "none" !== e;
                        })());
                    ($.scrollBar = $.scrollBar || $.hybrid),
                        (n = ae.find($.sectionSelector)),
                        $.anchors.length ||
                            ($.anchors = n
                                .filter("[data-anchor]")
                                .map(function () {
                                    return e(this).data("anchor").toString();
                                })
                                .get()),
                        $.navigationTooltips.length ||
                            ($.navigationTooltips = n
                                .filter("[data-tooltip]")
                                .map(function () {
                                    return e(this).data("tooltip").toString();
                                })
                                .get()),
                        ae.css({ height: "100%", position: "relative" }),
                        ae.addClass(l),
                        e("html").addClass(d),
                        (re = W.height()),
                        ae.removeClass(c),
                        ae.find($.sectionSelector).addClass(g),
                        ae.find($.slideSelector).addClass(O),
                        e(m).each(function (t) {
                            var o = e(this),
                                n = o.find(I),
                                i = n.length;
                            o.data("fp-styles", o.attr("style")),
                                (function (t, o) {
                                    o || 0 !== e(y).length || t.addClass(f),
                                        (oe = e(y)),
                                        t.css("height", re + "px"),
                                        $.paddingTop && t.css("padding-top", $.paddingTop),
                                        $.paddingBottom && t.css("padding-bottom", $.paddingBottom),
                                        void 0 !== $.sectionsColor[o] && t.css("background-color", $.sectionsColor[o]),
                                        void 0 !== $.anchors[o] && t.attr("data-anchor", $.anchors[o]);
                                })(o, t),
                                (function (t, o) {
                                    void 0 !== $.anchors[o] && t.hasClass(f) && Rt($.anchors[o], o), $.menu && $.css3 && e($.menu).closest(a).length && e($.menu).appendTo(G);
                                })(o, t),
                                i > 0
                                    ? (function (t, o, n) {
                                          var i = 100 * n,
                                              l = 100 / n;
                                          o.wrapAll('<div class="' + R + '" />'),
                                              o.parent().wrap('<div class="' + M + '" />'),
                                              t.find(z).css("width", i + "%"),
                                              n > 1 &&
                                                  ($.controlArrows &&
                                                      (function (e) {
                                                          e.find(B).after('<div class="' + _ + '"></div><div class="' + X + '"></div>'),
                                                              "#fff" != $.controlArrowColor &&
                                                                  (e.find(U).css("border-color", "transparent transparent transparent " + $.controlArrowColor),
                                                                  e.find(N).css("border-color", "transparent " + $.controlArrowColor + " transparent transparent")),
                                                              $.loopHorizontal || e.find(N).hide();
                                                      })(t),
                                                  $.slidesNavigation &&
                                                      (function (e, t) {
                                                          e.append('<div class="' + P + '"><ul></ul></div>');
                                                          var o = e.find(F);
                                                          o.addClass($.slidesNavPosition);
                                                          for (var n = 0; n < t; n++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
                                                          o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(f);
                                                      })(t, n)),
                                              o.each(function (t) {
                                                  e(this).css("width", l + "%"), $.verticalCentered && Dt(e(this));
                                              });
                                          var a = t.find(E);
                                          a.length && (0 !== e(y).index(m) || (0 === e(y).index(m) && 0 !== a.index())) ? Kt(a, "internal") : o.eq(0).addClass(f);
                                      })(o, n, i)
                                    : $.verticalCentered && Dt(o);
                        }),
                        $.fixedElements && $.css3 && e($.fixedElements).appendTo(G),
                        $.navigation &&
                            (function () {
                                G.append('<div id="' + T + '"><ul></ul></div>');
                                var t = e(H);
                                t.addClass(function () {
                                    return $.showActiveTooltip ? L + " " + $.navigationPosition : $.navigationPosition;
                                });
                                for (var o = 0; o < e(m).length; o++) {
                                    var n = "";
                                    $.anchors.length && (n = $.anchors[o]);
                                    var i = '<li><a href="#' + n + '"><span></span></a>',
                                        l = $.navigationTooltips[o];
                                    void 0 !== l && "" !== l && (i += '<div class="' + q + " " + $.navigationPosition + '">' + l + "</div>"), (i += "</li>"), t.find("ul").append(i);
                                }
                                e(H).css("margin-top", "-" + e(H).height() / 2 + "px"), e(H).find("li").eq(e(y).index(m)).find("a").addClass(f);
                            })(),
                        ae.find('iframe[src*="youtube.com/embed/"]').each(function () {
                            var t, o, n;
                            (t = e(this)), (o = "enablejsapi=1"), (n = t.attr("src")), t.attr("src", n + (/\?/.test(n) ? "&" : "?") + o);
                        }),
                        $.scrollOverflow ? (he = $.scrollOverflowHandler.init($)) : Ve(),
                        Oe(!0),
                        Te($.autoScrolling, "internal"),
                        Et(),
                        Ut(),
                        "complete" === o.readyState && pt();
                    var n;
                    W.on("load", pt);
                })(),
                W.on("scroll", _e).on("hashchange", vt).blur(Ct).resize(It),
                K.keydown(mt)
                    .keyup(St)
                    .on("click touchstart", H + " a", kt)
                    .on("click touchstart", V, Tt)
                    .on("click", A, yt),
                e(m).on("click touchstart", j, xt),
                $.normalScrollElements &&
                    (K.on("mouseenter touchstart", $.normalScrollElements, function () {
                        Oe(!1);
                    }),
                    K.on("mouseleave touchend", $.normalScrollElements, function () {
                        Oe(!0);
                    })));
        var je = !1,
            Ye = 0;
        function _e() {
            var t;
            if (!$.autoScrolling || $.scrollBar) {
                var n = W.scrollTop(),
                    i = (function (e) {
                        var t = e > Ye ? "down" : "up";
                        return (Ye = e), (lt = e), t;
                    })(n),
                    l = 0,
                    a = n + W.height() / 2,
                    r = G.height() - W.height() === n,
                    s = o.querySelectorAll(m);
                if (r) l = s.length - 1;
                else if (n)
                    for (var c = 0; c < s.length; ++c) {
                        s[c].offsetTop <= a && (l = c);
                    }
                else l = 0;
                if (
                    ((function (t) {
                        var o = e(y).position().top,
                            n = o + W.height();
                        if ("up" == t) return n >= W.scrollTop() + W.height();
                        return o <= W.scrollTop();
                    })(i) &&
                        (e(y).hasClass(p) || e(y).addClass(p).siblings().removeClass(p)),
                    !(t = e(s).eq(l)).hasClass(f))
                ) {
                    je = !0;
                    var d,
                        u,
                        h = e(y),
                        v = h.index(m) + 1,
                        g = zt(t),
                        S = t.data("anchor"),
                        w = t.index(m) + 1,
                        b = t.find(E);
                    b.length && ((u = b.data("anchor")), (d = b.index())),
                        de &&
                            (t.addClass(f).siblings().removeClass(f),
                            e.isFunction($.onLeave) && $.onLeave.call(h, v, w, g),
                            e.isFunction($.afterLoad) && $.afterLoad.call(t, S, w),
                            ft(h),
                            ct(t),
                            dt(t),
                            Rt(S, w - 1),
                            $.anchors.length && (Z = S),
                            _t(d, u, S, w)),
                        clearTimeout(me),
                        (me = setTimeout(function () {
                            je = !1;
                        }, 100));
                }
                $.fitToSection &&
                    (clearTimeout(ye),
                    (ye = setTimeout(function () {
                        $.fitToSection && e(y).outerHeight() <= re && Ne();
                    }, $.fitToSectionDelay)));
            }
        }
        function Ne() {
            de && ((se = !0), at(e(y)), (se = !1));
        }
        function Xe(t) {
            if (fe.m[t]) {
                var o = "down" === t ? Me : Ee;
                if ($.scrollOverflow) {
                    var n = $.scrollOverflowHandler.scrollable(e(y)),
                        i = "down" === t ? "bottom" : "top";
                    if (n.length > 0) {
                        if (!$.scrollOverflowHandler.isScrolled(i, n)) return !0;
                        o();
                    } else o();
                } else o();
            }
        }
        function Ue(e) {
            var t = e.originalEvent;
            $.autoScrolling && Je(t) && e.preventDefault();
        }
        var We = 0,
            Ke = 0,
            $e = 0,
            Qe = 0;
        function Ge(t) {
            var o = t.originalEvent,
                i = e(o.target).closest(m);
            if (Je(o)) {
                $.autoScrolling && t.preventDefault();
                var l = Wt(o);
                ($e = l.y),
                    (Qe = l.x),
                    i.find(B).length && n.abs(Ke - Qe) > n.abs(We - $e)
                        ? !ne && n.abs(Ke - Qe) > (W.outerWidth() / 100) * $.touchSensitivity && (Ke > Qe ? fe.m.right && ze(i) : fe.m.left && De(i))
                        : $.autoScrolling && de && n.abs(We - $e) > (W.height() / 100) * $.touchSensitivity && (We > $e ? Xe("down") : $e > We && Xe("up"));
            }
        }
        function Je(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType;
        }
        function Ze(e) {
            var t = e.originalEvent;
            if (($.fitToSection && Q.stop(), Je(t))) {
                var o = Wt(t);
                (We = o.y), (Ke = o.x);
            }
        }
        function et(e, t) {
            for (var o = 0, i = e.slice(n.max(e.length - t, 1)), l = 0; l < i.length; l++) o += i[l];
            return n.ceil(o / t);
        }
        var tt = new Date().getTime();
        function ot(o) {
            var i = new Date().getTime(),
                l = e(v).hasClass(k);
            if ($.autoScrolling && !te && !l) {
                var a = (o = o || t.event).wheelDelta || -o.deltaY || -o.detail,
                    r = n.max(-1, n.min(1, a)),
                    s = void 0 !== o.wheelDeltaX || void 0 !== o.deltaX,
                    c = n.abs(o.wheelDeltaX) < n.abs(o.wheelDelta) || n.abs(o.deltaX) < n.abs(o.deltaY) || !s;
                ue.length > 149 && ue.shift(), ue.push(n.abs(a)), $.scrollBar && (o.preventDefault ? o.preventDefault() : (o.returnValue = !1));
                var d = i - tt;
                if (((tt = i), d > 200 && (ue = []), de)) et(ue, 10) >= et(ue, 70) && c && Xe(r < 0 ? "down" : "up");
                return !1;
            }
            $.fitToSection && Q.stop();
        }
        function nt(t, o) {
            var n = (void 0 === o ? e(y) : o).find(B),
                i = n.find(I).length;
            if (!(!n.length || ne || i < 2)) {
                var l = n.find(E),
                    a = null;
                if (!(a = "left" === t ? l.prev(I) : l.next(I)).length) {
                    if (!$.loopHorizontal) return;
                    a = "left" === t ? l.siblings(":last") : l.siblings(":first");
                }
                (ne = !0), At(n, a, t);
            }
        }
        function it() {
            e(E).each(function () {
                Kt(e(this), "internal");
            });
        }
        var lt = 0;
        function at(t, i, l) {
            if (void 0 !== t) {
                var r,
                    s,
                    c = (function (e) {
                        var t = e.position(),
                            o = t.top,
                            n = t.top > lt,
                            i = o - re + e.outerHeight(),
                            l = $.bigSectionsDestination;
                        return e.outerHeight() > re ? ((n || l) && "bottom" !== l) || (o = i) : (n || (se && e.is(":last-child"))) && (o = i), (lt = o), o;
                    })(t),
                    d = {
                        element: t,
                        callback: i,
                        isMovementUp: l,
                        dtop: c,
                        yMovement: zt(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(m),
                        activeSlide: t.find(E),
                        activeSection: e(y),
                        leavingSection: e(y).index(m) + 1,
                        localIsResizing: se,
                    };
                if (!((d.activeSection.is(t) && !se) || ($.scrollBar && W.scrollTop() === d.dtop && !t.hasClass(C)))) {
                    if ((d.activeSlide.length && ((r = d.activeSlide.data("anchor")), (s = d.activeSlide.index())), e.isFunction($.onLeave) && !d.localIsResizing)) {
                        var u = d.yMovement;
                        if ((void 0 !== l && (u = l ? "up" : "down"), !1 === $.onLeave.call(d.activeSection, d.leavingSection, d.sectionIndex + 1, u))) return;
                    }
                    $.autoScrolling &&
                        $.continuousVertical &&
                        void 0 !== d.isMovementUp &&
                        ((!d.isMovementUp && "up" == d.yMovement) || (d.isMovementUp && "down" == d.yMovement)) &&
                        (d = (function (t) {
                            t.isMovementUp ? e(y).before(t.activeSection.nextAll(m)) : e(y).after(t.activeSection.prevAll(m).get().reverse());
                            return (
                                $t(e(y).position().top),
                                it(),
                                (t.wrapAroundElements = t.activeSection),
                                (t.dtop = t.element.position().top),
                                (t.yMovement = zt(t.element)),
                                (t.leavingSection = t.activeSection.index(m) + 1),
                                (t.sectionIndex = t.element.index(m)),
                                t
                            );
                        })(d)),
                        d.localIsResizing || ft(d.activeSection),
                        $.scrollOverflow && $.scrollOverflowHandler.beforeLeave(),
                        t.addClass(f).siblings().removeClass(f),
                        ct(t),
                        $.scrollOverflow && $.scrollOverflowHandler.onLeave(),
                        (de = !1),
                        _t(s, r, d.anchorLink, d.sectionIndex),
                        (function (t) {
                            if ($.css3 && $.autoScrolling && !$.scrollBar) {
                                var i = "translate3d(0px, -" + n.round(t.dtop) + "px, 0px)";
                                Ft(i, !0),
                                    $.scrollingSpeed
                                        ? (clearTimeout(ve),
                                          (ve = setTimeout(function () {
                                              rt(t);
                                          }, $.scrollingSpeed)))
                                        : rt(t);
                                let e = o.querySelector(".line__wrapper");
                                e.style.transform = "translate3d(0px, -300px, 0px) !important";
                            } else {
                                var l = (function (e) {
                                    var t = {};
                                    $.autoScrolling && !$.scrollBar ? ((t.options = { top: -e.dtop }), (t.element = a)) : ((t.options = { scrollTop: e.dtop }), (t.element = "html, body"));
                                    return t;
                                })(t);
                                e(l.element)
                                    .animate(l.options, $.scrollingSpeed, $.easing)
                                    .promise()
                                    .done(function () {
                                        $.scrollBar
                                            ? setTimeout(function () {
                                                  rt(t);
                                              }, 30)
                                            : rt(t);
                                    });
                            }
                        })(d),
                        (Z = d.anchorLink),
                        Rt(d.anchorLink, d.sectionIndex);
                }
            }
        }
        function rt(t) {
            !(function (t) {
                t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(S).before(t.wrapAroundElements) : e(w).after(t.wrapAroundElements), $t(e(y).position().top), it());
            })(t),
                e.isFunction($.afterLoad) && !t.localIsResizing && $.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1),
                $.scrollOverflow && $.scrollOverflowHandler.afterLoad(),
                t.localIsResizing || dt(t.element),
                t.element.addClass(p).siblings().removeClass(p),
                (de = !0),
                e.isFunction(t.callback) && t.callback.call(this);
        }
        function st(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t);
        }
        function ct(t) {
            var o;
            $.lazyLoading &&
                ht(t)
                    .find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]")
                    .each(function () {
                        if (
                            ((o = e(this)),
                            e.each(["src", "srcset"], function (e, t) {
                                var n = o.attr("data-" + t);
                                void 0 !== n && n && st(o, t);
                            }),
                            o.is("source"))
                        ) {
                            var t = o.closest("video").length ? "video" : "audio";
                            o.closest(t).get(0).load();
                        }
                    });
        }
        function dt(t) {
            var o = ht(t);
            o.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play();
            }),
                o.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-autoplay") && ut(t),
                        (t.onload = function () {
                            t.hasAttribute("data-autoplay") && ut(t);
                        });
                });
        }
        function ut(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }
        function ft(t) {
            var o = ht(t);
            o.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause();
            }),
                o.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var t = e(this).get(0);
                    /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                });
        }
        function ht(t) {
            var o = t.find(E);
            return o.length && (t = e(o)), t;
        }
        function pt() {
            var e = gt(),
                t = e.section,
                o = e.slide;
            t && ($.animateAnchor ? jt(t, o) : Be(t, o));
        }
        function vt() {
            if (!je && !$.lockAnchors) {
                var e = gt(),
                    t = e.section,
                    o = e.slide,
                    n = void 0 === Z,
                    i = void 0 === Z && void 0 === o && !ne;
                t && t.length && ((t && t !== Z && !n) || i || (!ne && ee != o)) && jt(t, o);
            }
        }
        function gt() {
            var e,
                o,
                n = t.location.hash;
            if (n.length) {
                var i = n.replace("#", "").split("/"),
                    l = n.indexOf("#/") > -1;
                e = l ? "/" + i[1] : decodeURIComponent(i[0]);
                var a = l ? i[2] : i[1];
                a && a.length && (o = decodeURIComponent(a));
            }
            return { section: e, slide: o };
        }
        function mt(t) {
            clearTimeout(Se);
            var o = e(":focus"),
                n = t.which;
            if (9 === n)
                !(function (t) {
                    var o = t.shiftKey,
                        n = e(":focus"),
                        i = e(y),
                        l = i.find(E),
                        a = (l.length ? l : i).find(xe).not('[tabindex="-1"]');
                    function r(e) {
                        return e.preventDefault(), a.first().focus();
                    }
                    n.length ? n.closest(y, E).length || (n = r(t)) : r(t);
                    ((!o && n.is(a.last())) || (o && n.is(a.first()))) && t.preventDefault();
                })(t);
            else if (!o.is("textarea") && !o.is("input") && !o.is("select") && "true" !== o.attr("contentEditable") && "" !== o.attr("contentEditable") && $.keyboardScrolling && $.autoScrolling) {
                e.inArray(n, [40, 38, 32, 33, 34]) > -1 && t.preventDefault(),
                    (te = t.ctrlKey),
                    (Se = setTimeout(function () {
                        !(function (t) {
                            var o = t.shiftKey;
                            if (!de && [37, 39].indexOf(t.which) < 0) return;
                            switch (t.which) {
                                case 38:
                                case 33:
                                    fe.k.up && Ee();
                                    break;
                                case 32:
                                    if (o && fe.k.up) {
                                        Ee();
                                        break;
                                    }
                                case 40:
                                case 34:
                                    fe.k.down && Me();
                                    break;
                                case 36:
                                    fe.k.up && Re(1);
                                    break;
                                case 35:
                                    fe.k.down && Re(e(m).length);
                                    break;
                                case 37:
                                    fe.k.left && De();
                                    break;
                                case 39:
                                    fe.k.right && ze();
                                    break;
                                default:
                            }
                        })(t);
                    }, 150));
            }
        }
        function yt() {
            e(this).prev().trigger("click");
        }
        function St(e) {
            ce && (te = e.ctrlKey);
        }
        function wt(e) {
            2 == e.which && ((Ht = e.pageY), ae.on("mousemove", qt));
        }
        function bt(e) {
            2 == e.which && ae.off("mousemove");
        }
        function xt() {
            var t = e(this).closest(m);
            e(this).hasClass(Y) ? fe.m.left && De(t) : fe.m.right && ze(t);
        }
        function Ct() {
            (ce = !1), (te = !1);
        }
        function kt(t) {
            t.preventDefault();
            var o = e(this).parent().index();
            at(e(m).eq(o));
        }
        function Tt(t) {
            t.preventDefault();
            var o = e(this).closest(m).find(B),
                n = o.find(I).eq(e(this).closest("li").index());
            At(o, n);
        }
        var Ht = 0;
        function qt(e) {
            de && (e.pageY < Ht && fe.m.up ? Ee() : e.pageY > Ht && fe.m.down && Me()), (Ht = e.pageY);
        }
        function At(t, o, i) {
            var l = t.closest(m),
                a = {
                    slides: t,
                    destiny: o,
                    direction: i,
                    destinyPos: o.position(),
                    slideIndex: o.index(),
                    section: l,
                    sectionIndex: l.index(m),
                    anchorLink: l.data("anchor"),
                    slidesNav: l.find(F),
                    slideAnchor: Xt(o),
                    prevSlide: l.find(E),
                    prevSlideIndex: l.find(E).index(),
                    localIsResizing: se,
                };
            (a.xMovement = (function (e, t) {
                if (e == t) return "none";
                if (e > t) return "left";
                return "right";
            })(a.prevSlideIndex, a.slideIndex)),
                a.localIsResizing || (de = !1),
                $.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction($.onSlideLeave) && !1 === $.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.direction, a.slideIndex)
                    ? (ne = !1)
                    : (o.addClass(f).siblings().removeClass(f),
                      a.localIsResizing || (ft(a.prevSlide), ct(o)),
                      !$.loopHorizontal && $.controlArrows && (l.find(N).toggle(0 !== a.slideIndex), l.find(U).toggle(!o.is(":last-child"))),
                      l.hasClass(f) && !a.localIsResizing && _t(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
                      (function (e, t, o) {
                          var i = t.destinyPos;
                          if ($.css3) {
                              var l = "translate3d(-" + n.round(i.left) + "px, 0px, 0px)";
                              Mt(e.find(z)).css(Qt(l)),
                                  (ge = setTimeout(
                                      function () {
                                          o && Lt(t);
                                      },
                                      $.scrollingSpeed,
                                      $.easing
                                  ));
                          } else
                              e.animate({ scrollLeft: n.round(i.left) }, $.scrollingSpeed, $.easing, function () {
                                  o && Lt(t);
                              });
                      })(t, a, !0));
        }
        function Lt(t) {
            var o, n;
            (o = t.slidesNav),
                (n = t.slideIndex),
                o.find(h).removeClass(f),
                o.find("li").eq(n).find("a").addClass(f),
                t.localIsResizing || (e.isFunction($.afterSlideLoad) && $.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), (de = !0), dt(t.destiny)),
                (ne = !1);
        }
        var Ot = re;
        function It() {
            if ((Et(), ie)) {
                var t = e(o.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var i = W.height();
                    n.abs(i - Ot) > (20 * n.max(Ot, i)) / 100 && (Pe(!0), (Ot = i));
                }
            } else
                clearTimeout(pe),
                    (pe = setTimeout(function () {
                        Pe(!0);
                    }, 350));
        }
        function Et() {
            var e = $.responsive || $.responsiveWidth,
                t = $.responsiveHeight,
                o = e && W.outerWidth() < e,
                n = t && W.height() < t;
            e && t ? Fe(o || n) : e ? Fe(o) : t && Fe(n);
        }
        function Mt(e) {
            var t = "all " + $.scrollingSpeed + "ms " + $.easingcss3;
            return e.removeClass(s), e.css({ "-webkit-transition": t, transition: t });
        }
        function Bt(e) {
            return e.addClass(s);
        }
        function Rt(t, o) {
            var n;
            (n = t),
                $.menu &&
                    (e($.menu).find(h).removeClass(f),
                    e($.menu)
                        .find('[data-menuanchor="' + n + '"]')
                        .addClass(f)),
                (function (t, o) {
                    $.navigation &&
                        (e(H).find(h).removeClass(f),
                        t
                            ? e(H)
                                  .find('a[href="#' + t + '"]')
                                  .addClass(f)
                            : e(H).find("li").eq(o).find("a").addClass(f));
                })(t, o);
        }
        function zt(t) {
            var o = e(y).index(m),
                n = t.index(m);
            return o == n ? "none" : o > n ? "up" : "down";
        }
        function Dt(t) {
            if (!t.hasClass(D)) {
                var o = e('<div class="' + b + '" />').height(Pt(t));
                t.addClass(D).wrapInner(o);
            }
        }
        function Pt(e) {
            var t = re;
            if ($.paddingTop || $.paddingBottom) {
                var o = e;
                o.hasClass(g) || (o = e.closest(m));
                var n = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                t = re - n;
            }
            return t;
        }
        function Ft(e, t) {
            t ? Mt(ae) : Bt(ae),
                ae.css(Qt(e)),
                setTimeout(function () {
                    ae.removeClass(s);
                }, 10);
        }
        function Vt(t) {
            var o = ae.find(m + '[data-anchor="' + t + '"]');
            if (!o.length) {
                var n = void 0 !== t ? t - 1 : 0;
                o = e(m).eq(n);
            }
            return o;
        }
        function jt(e, t) {
            var o = Vt(e);
            if (o.length) {
                var n = (function (e, t) {
                    var o = t.find(I + '[data-anchor="' + e + '"]');
                    return o.length || ((e = void 0 !== e ? e : 0), (o = t.find(I).eq(e))), o;
                })(t, o);
                e === Z || o.hasClass(f)
                    ? Yt(n)
                    : at(o, function () {
                          Yt(n);
                      });
            }
        }
        function Yt(e) {
            e.length && At(e.closest(B), e);
        }
        function _t(e, t, o, n) {
            var i = "";
            $.anchors.length && !$.lockAnchors && (e ? (void 0 !== o && (i = o), void 0 === t && (t = e), (ee = t), Nt(i + "/" + t)) : void 0 !== e ? ((ee = t), Nt(o)) : Nt(o)), Ut();
        }
        function Nt(e) {
            if ($.recordHistory) location.hash = e;
            else if (ie || le) t.history.replaceState(i, i, "#" + e);
            else {
                var o = t.location.href.split("#")[0];
                t.location.replace(o + "#" + e);
            }
        }
        function Xt(e) {
            var t = e.data("anchor"),
                o = e.index();
            return void 0 === t && (t = o), t;
        }
        function Ut() {
            var t = e(y),
                o = t.find(E),
                n = Xt(t),
                i = Xt(o),
                l = String(n);
            o.length && (l = l + "-" + i), (l = l.replace("/", "-").replace("#", ""));
            var a = new RegExp("\\b\\s?" + u + "-[^\\s]+\\b", "g");
            (G[0].className = G[0].className.replace(a, "")), G.addClass(u + "-" + l);
        }
        function Wt(e) {
            var t = [];
            return (
                (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                le && Je(e) && ($.scrollBar || !$.autoScrolling) && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                t
            );
        }
        function Kt(e, t) {
            qe(0, "internal"), void 0 !== t && (se = !0), At(e.closest(B), e), void 0 !== t && (se = !1), qe(Ce.scrollingSpeed, "internal");
        }
        function $t(e) {
            var t = n.round(e);
            $.css3 && $.autoScrolling && !$.scrollBar ? Ft("translate3d(0px, -" + t + "px, 0px)", !1) : $.autoScrolling && !$.scrollBar ? ae.css("top", -t) : Q.scrollTop(t);
        }
        function Qt(e) {
            return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
        }
        function Gt(t, o, n) {
            "all" !== o
                ? (fe[n][o] = t)
                : e.each(Object.keys(fe[n]), function (e, o) {
                      fe[n][o] = t;
                  });
        }
        function Jt(e, t, o) {
            ($[e] = t), "internal" !== o && (Ce[e] = t);
        }
        function Zt() {
            e("html").hasClass(d)
                ? eo("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                : ($.continuousVertical && ($.loopTop || $.loopBottom) && (($.continuousVertical = !1), eo("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                  $.scrollBar && $.scrollOverflow && eo("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
                  !$.continuousVertical ||
                      (!$.scrollBar && $.autoScrolling) ||
                      (($.continuousVertical = !1), eo("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                  $.scrollOverflow && !$.scrollOverflowHandler && (($.scrollOverflow = !1), eo("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                  e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function (e, t) {
                      $[t] && eo("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t);
                  }),
                  e.each($.anchors, function (t, o) {
                      var n = K.find("[name]").filter(function () {
                              return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase();
                          }),
                          i = K.find("[id]").filter(function () {
                              return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase();
                          });
                      (i.length || n.length) &&
                          (eo("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                          i.length && eo("error", '"' + o + '" is is being used by another element `id` property'),
                          n.length && eo("error", '"' + o + '" is is being used by another element `name` property'));
                  }));
        }
        function eo(e, t) {
            console && console[e] && console[e]("fullPage: " + t);
        }
        o.querySelector(".promo__btn").addEventListener("click", function (e) {
            e.preventDefault(), console.log(1), Me(), Me(), Me(), Me(), Me(), Me();
        });
    };
});
