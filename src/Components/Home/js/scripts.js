window.mr = window.mr || {}, mr = function(t, a, e, o) {
    "use strict";

    function i(e) {
        e = void 0 === e ? a : e, r.documentReady.concat(r.documentReadyDeferred).forEach(function(t) {
            t(e)
        }), t.status.documentReadyRan = !0, t.status.windowLoadPending && n(t.setContext())
    }

    function n(e) {
        t.status.documentReadyRan ? (t.status.windowLoadPending = !1, e = "object" == typeof e ? a : e, r.windowLoad.concat(r.windowLoadDeferred).forEach(function(t) {
            t(e)
        })) : t.status.windowLoadPending = !0
    }
    var r = {
        documentReady: [],
        documentReadyDeferred: [],
        windowLoad: [],
        windowLoadDeferred: []
    };
    return (t = t || {}).status = {
        documentReadyRan: !1,
        windowLoadPending: !1
    }, a(o).ready(i), a(e).on("load", n), t.setContext = function(e) {
        return void 0 !== e ? function(t) {
            return a(e).find(t)
        } : a
    }, t.components = r, t.documentReady = i, t.windowLoad = n, t
}(window.mr, jQuery, window, document), mr = function(t, r, a, e) {
    "use strict";
    return t.util = {}, t.util.requestAnimationFrame = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, t.util.documentReady = function(t) {
        var e = (new Date).getFullYear();
        t(".update-year").text(e)
    }, t.util.windowLoad = function(e) {
        e("[data-delay-src]").each(function() {
            var t = e(this);
            t.attr("src", t.attr("data-delay-src")), t.removeAttr("data-delay-src")
        })
    }, t.util.getURLParameter = function(t) {
        return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }, t.util.capitaliseFirstLetter = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, t.util.slugify = function(t, e) {
        return void 0 !== e ? t.replace(/ +/g, "") : t.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g, "").replace(/ +/g, "-")
    }, t.util.sortChildrenByText = function(t, e) {
        var a = r(t),
            o = a.children().get(),
            i = -1,
            n = 1;
        void 0 !== e && (n = -(i = 1)), o.sort(function(t, e) {
            var a = r(t).text(),
                o = r(e).text();
            return a < o ? i : o < a ? n : 0
        }), a.empty(), r(o).each(function(t, e) {
            a.append(e)
        })
    }, t.util.idleSrc = function(t, e) {
        e = void 0 !== e ? e : "", (t.is(e + "[src]") ? t : t.find(e + "[src]")).each(function(t, e) {
            var a = (e = r(e)).attr("src");
            void 0 === e.attr("data-src") && e.attr("data-src", a), e.attr("src", "")
        })
    }, t.util.activateIdleSrc = function(t, e) {
        e = void 0 !== e ? e : "", (t.is(e + "[data-src]") ? t : t.find(e + "[data-src]")).each(function(t, e) {
            var a = (e = r(e)).attr("data-src");
            e.attr("src", a)
        })
    }, t.util.pauseVideo = function(t) {
        (t.is("video") ? t : t.find("video")).each(function(t, e) {
            r(e).get(0).pause()
        })
    }, t.util.parsePixels = function(t) {
        var e = r(a).height();
        return /^[1-9]{1}[0-9]*[p][x]$/.test(t) ? parseInt(t.replace("px", ""), 10) : /^[1-9]{1}[0-9]*[v][h]$/.test(t) ? e * (parseInt(t.replace("vh", ""), 10) / 100) : -1
    }, t.util.removeHash = function() {
        history.pushState("", e.title, a.location.pathname + a.location.search)
    }, t.components.documentReady.push(t.util.documentReady), t.components.windowLoad.push(t.util.windowLoad), t
}(mr, jQuery, window, document), mr = function(t, e, a) {
    "use strict";
    return t.window = {}, t.window.height = e(a).height(), t.window.width = e(a).width(), e(a).on("resize", function() {
        t.window.height = e(a).height(), t.window.width = e(a).width()
    }), t
}(mr, jQuery, window, document), mr = function(i, t, n) {
    "use strict";
    i.scroll = {};
    var e = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame;
    i.scroll.listeners = [], i.scroll.busy = !1, i.scroll.y = 0, i.scroll.x = 0;

    function a(t) {
        jQuery(n).off("scroll.mr"), jQuery(n).on("scroll.mr", function(t) {
            !1 === i.scroll.busy && (i.scroll.busy = !0, e(function(t) {
                i.scroll.update(t)
            })), t.stopPropagation && t.stopPropagation()
        })
    }
    return i.scroll.update = function(t) {
        var e = void 0 !== n.mr_parallax;
        if (i.scroll.y = e ? mr_parallax.mr_getScrollPosition() : n.pageYOffset, i.scroll.busy = !1, e && mr_parallax.mr_parallaxBackground(), 0 < i.scroll.listeners.length)
            for (var a = 0, o = i.scroll.listeners.length; a < o; a++) i.scroll.listeners[a](t)
    }, i.scroll.documentReady = a, i.components.documentReady.push(a), i
}(mr, jQuery, window, document), mr = function(r, e, t) {
    "use strict";
    r.scroll.classModifiers = {}, r.scroll.classModifiers.rules = [], r.scroll.classModifiers.parseScrollRules = function(n) {
        return n.attr("data-scroll-class").split(";").forEach(function(t) {
            var e, a, o = {};
            if (2 === (e = t.replace(/\s/g, "").split(":")).length) {
                if (!(-1 < (a = r.util.parsePixels(e[0])))) return !1;
                if (o.scrollPoint = a, !e[1].length) return !1;
                var i = e[1];
                o.toggleClass = i, o.hasClass = n.hasClass(i), o.element = n.get(0), r.scroll.classModifiers.rules.push(o)
            }
        }), !!r.scroll.classModifiers.rules.length
    }, r.scroll.classModifiers.update = function(t) {
        for (var e, a = r.scroll.y, o = r.scroll.classModifiers.rules, i = o.length; i--;) a > (e = o[i]).scrollPoint && !e.hasClass && (e.element.classList.add(e.toggleClass), e.hasClass = r.scroll.classModifiers.rules[i].hasClass = !0), a < e.scrollPoint && e.hasClass && (e.element.classList.remove(e.toggleClass), e.hasClass = r.scroll.classModifiers.rules[i].hasClass = !1)
    };

    function a() {
        e('.main-container [data-scroll-class*="pos-fixed"]').each(function() {
            var t = e(this);
            t.css("max-width", t.parent().outerWidth()), t.parent().css("min-height", t.outerHeight())
        })
    }

    function o(e) {
        e("[data-scroll-class]").each(function() {
            var t = e(this);
            r.scroll.classModifiers.parseScrollRules(t)
        }), a(), e(t).on("resize", a), r.scroll.classModifiers.rules.length && r.scroll.listeners.push(r.scroll.classModifiers.update)
    }
    return r.components.documentReady.push(o), r.scroll.classModifiers.documentReady = o, r
}(mr, jQuery, window, document), mr = function(o, d, t, c) {
    "use strict";
    return o.accordions = o.accordions || {}, o.accordions.documentReady = function(a) {
        a(".accordion__title").on("click", function() {
            o.accordions.activatePanel(a(this))
        }), a(".accordion").each(function() {
            var t = a(this),
                e = t.outerHeight(!0);
            t.css("min-height", e)
        }), "" !== t.location.hash && "#" !== t.location.hash && null === t.location.hash.match(/#\/.*/) && a(".accordion > li > .accordion__title" + t.location.hash).length && o.accordions.activatePanelById(t.location.hash, !0), jQuery(c).on("click", 'a[href^="#"]:not(a[href="#"])', function() {
            a(".accordion > li > .accordion__title" + a(this).attr("href")).length && o.accordions.activatePanelById(a(this).attr("href"), !0)
        })
    }, o.accordions.activatePanel = function(t, e) {
        var a = d(t),
            o = a.closest(".accordion"),
            i = a.closest("li"),
            n = c.createEvent("Event"),
            r = c.createEvent("Event");
        if (n.initEvent("panelOpened.accordions.mr", !0, !0), r.initEvent("panelClosed.accordions.mr", !0, !0), i.hasClass("active")) !0 !== e && (i.removeClass("active"), a.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(r));
        else if (o.hasClass("accordion--oneopen")) {
            var s = o.find("li.active");
            s.length && (s.removeClass("active"), s.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(r)), i.addClass("active"), i.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(n)
        } else i.is(".active") || i.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(n), i.addClass("active")
    }, o.accordions.activatePanelById = function(t, e) {
        var a;
        "" === t || "#" === t || null !== t.match(/#\/.*/) || (a = d(".accordion > li > .accordion__title#" + t.replace("#", ""))).length && (d("html, body").stop(!0).animate({
            scrollTop: a.offset().top - 50
        }, 1200), o.accordions.activatePanel(a, e))
    }, o.components.documentReady.push(o.accordions.documentReady), o
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    return t.alerts = t.alerts || {}, t.alerts.documentReady = function(t) {
        t(".alert__close").on("click touchstart", function() {
            jQuery(this).closest(".alert").addClass("alert--dismissed")
        })
    }, t.components.documentReady.push(t.alerts.documentReady), t
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    return t.backgrounds = t.backgrounds || {}, t.backgrounds.documentReady = function(e) {
        e(".background-image-holder").each(function() {
            var t = e(this).children("img").attr("src");
            e(this).css("background", 'url("' + t + '")').css("background-position", "initial").css("opacity", "1")
        })
    }, t.components.documentReady.push(t.backgrounds.documentReady), t
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    return t.bars = t.bars || {}, t.bars.documentReady = function(a) {
        a('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function() {
            var t = a(this),
                e = t.outerHeight(!0);
            t.closest(".nav-container").css("min-height", e)
        })
    }, t.components.documentReady.push(t.bars.documentReady), t
}(mr, jQuery, window, document), mr = function(t, e, a, s) {
    "use strict";
    return t.cookies = {
        getItem: function(t) {
            return t && decodeURIComponent(s.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
        },
        setItem: function(t, e, a, o, i, n) {
            if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
            var r = "";
            if (a) switch (a.constructor) {
                case Number:
                    r = a === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + a;
                    break;
                case String:
                    r = "; expires=" + a;
                    break;
                case Date:
                    r = "; expires=" + a.toUTCString()
            }
            return s.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + r + (i ? "; domain=" + i : "") + (o ? "; path=" + o : "") + (n ? "; secure" : ""), !0
        },
        removeItem: function(t, e, a) {
            return !!this.hasItem(t) && (s.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (e ? "; path=" + e : ""), !0)
        },
        hasItem: function(t) {
            return !!t && new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(s.cookie)
        },
        keys: function() {
            for (var t = s.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = t.length, a = 0; a < e; a++) t[a] = decodeURIComponent(t[a]);
            return t
        }
    }, t
}(mr, jQuery, window, document), mr = function(r) {
    "use strict";
    return r.countdown = r.countdown || {}, r.countdown.options = r.countdown.options || {}, r.countdown.documentReady = function(n) {
        n(".countdown[data-date]").each(function() {
            var e, a = n(this),
                t = a.attr("data-date"),
                o = void 0 !== a.attr("data-days-text") ? "%D " + a.attr("data-days-text") + " %H:%M:%S" : "%D days %H:%M:%S",
                i = (o = void 0 !== r.countdown.options.format ? r.countdown.options.format : o, void 0 !== a.attr("data-date-format") ? a.attr("data-date-format") : o);
            void 0 !== a.attr("data-date-fallback") && (e = a.attr("data-date-fallback") || "Timer Done"), a.countdown(t, function(t) {
                t.elapsed ? a.text(e) : a.text(t.strftime(i))
            })
        })
    }, r.components.documentReadyDeferred.push(r.countdown.documentReady), r
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    t.datepicker = t.datepicker || {};
    var e = t.datepicker.options || {};
    return t.datepicker.documentReady = function(t) {
        t(".datepicker").length && t(".datepicker").pickadate(e)
    }, t.components.documentReadyDeferred.push(t.datepicker.documentReady), t
}(mr, jQuery, window, document), mr = function(e, t, r, o) {
    "use strict";
    return e.dropdowns = e.dropdowns || {}, e.dropdowns.done = !1, e.dropdowns.documentReady = function(a) {
        var t = !1;
        a('html[dir="rtl"]').length && (t = !0), e.dropdowns.done || (jQuery(o).on("click", "body:not(.dropdowns--hover) .dropdown, body.dropdowns--hover .dropdown.dropdown--click", function(t) {
            var e = jQuery(this);
            jQuery(t.target).is(".dropdown--active > .dropdown__trigger") ? (e.siblings().removeClass("dropdown--active").find(".dropdown").removeClass("dropdown--active"), e.toggleClass("dropdown--active")) : (a(".dropdown--active").removeClass("dropdown--active"), e.addClass("dropdown--active"))
        }), jQuery(o).on("click touchstart", "body:not(.dropdowns--hover)", function(t) {
            jQuery(t.target).is('[class*="dropdown"], [class*="dropdown"] *') || a(".dropdown--active").removeClass("dropdown--active")
        }), jQuery("body.dropdowns--hover .dropdown").on("click", function(t) {
            t.stopPropagation(), jQuery(this).toggleClass("dropdown--active")
        }), jQuery("body").append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>'), !1 === t ? (e.dropdowns.repositionDropdowns(a), jQuery(r).on("resize", function() {
            e.dropdowns.repositionDropdowns(a)
        })) : (e.dropdowns.repositionDropdownsRtl(a), jQuery(r).on("resize", function() {
            e.dropdowns.repositionDropdownsRtl(a)
        })), e.dropdowns.done = !0)
    }, e.dropdowns.repositionDropdowns = function(t) {
        t(".dropdown__container").each(function() {
            var t, e, a, o;
            jQuery(this).css("left", ""), e = (t = jQuery(this)).offset().left, a = jQuery(".containerMeasure").offset().left, o = t.closest(".dropdown").offset().left, t.css("left", -e + a), t.find('.dropdown__content:not([class*="lg-12"])').length && t.find(".dropdown__content").css("left", o - a)
        }), t(".dropdown__content").each(function() {
            var t, e, a, o, i;
            a = (t = jQuery(this)).offset().left + (e = t.outerWidth(!0)), o = jQuery(r).outerWidth(!0), i = jQuery(".containerMeasure").outerWidth() - e, o < a && t.css("left", i)
        })
    }, e.dropdowns.repositionDropdownsRtl = function(t) {
        var n = jQuery(r).width();
        t(".dropdown__container").each(function() {
            var t, e, a, o;
            jQuery(this).css("left", ""), t = jQuery(this), e = n - (t.offset().left + t.outerWidth(!0)), a = jQuery(".containerMeasure").offset().left, o = n - (t.closest(".dropdown").offset().left + t.closest(".dropdown").outerWidth(!0)), t.css("right", -e + a), t.find('.dropdown__content:not([class*="lg-12"])').length && t.find(".dropdown__content").css("right", o - a)
        }), t(".dropdown__content").each(function() {
            var t, e, a, o, i;
            t = jQuery(this), a = n - (t.offset().left + t.outerWidth(!0)) + (e = t.outerWidth(!0)), o = jQuery(r).outerWidth(!0), i = jQuery(".containerMeasure").outerWidth() - e, o < a && t.css("right", i)
        })
    }, e.components.documentReady.push(e.dropdowns.documentReady), e
}(mr, jQuery, window, document), mr = function(m, p, f, t) {
    "use strict";
    return m.forms = m.forms || {}, m.forms.captcha = {}, m.forms.captcha.widgets = [], m.forms.captcha.done = !1, m.forms.documentReady = function(i) {
        m.forms.captcha.widgets = [], i('.input-checkbox input[type="checkbox"], .input-radio input[type="radio"]').each(function(t) {
            var e = i(this),
                a = e.siblings("label"),
                o = "input-assigned-" + t;
            void 0 === e.attr("id") || "" === e.attr("id") ? e.attr("id", o) : o = e.attr("id"), a.attr("for", o)
        }), i(".input-number__controls > span").off("click.mr").on("click.mr", function() {
            var t = jQuery(this),
                e = t.closest(".input-number"),
                a = e.find('input[type="number"]'),
                o = a.attr("max"),
                i = a.attr("min"),
                n = 1,
                r = parseInt(a.val(), 10);
            e.is("[data-step]") && (n = parseInt(e.attr("data-step"), 10)), t.hasClass("input-number__increase") ? r + n <= o && a.val(r + n) : i <= r - n && a.val(r - n)
        }), i(".input-file .btn").off("click.mr").on("click.mr", function() {
            return i(this).siblings("input").trigger("click"), !1
        }), i('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr("novalidate", !0).off("submit").on("submit", m.forms.submit), i(t).on("change, input, paste, keyup", ".attempted-submit .field-error", function() {
            i(this).removeClass("field-error")
        }), i('form[data-recaptcha-sitekey]:not([data-recaptcha-sitekey=""])').each(function() {
            var t, e, a, o, i, n = jQuery(this),
                r = n.find("div.recaptcha");
            o = void 0 !== (o = n.attr("data-recaptcha-theme")) ? o : "", i = void 0 !== (i = n.attr("data-recaptcha-size")) ? i : "", m.forms.captcha.sitekey = n.attr("data-recaptcha-sitekey"), r.length || (t = n.find("button[type=submit]").closest('[class*="col-"]'), r = jQuery("<div>").addClass("recaptcha"), jQuery("<div>").addClass("col-12").append(r).insertBefore(t)), e = {
                element: r.get(0),
                parentForm: n,
                theme: o,
                size: i
            }, m.forms.captcha.widgets.push(e), !1 === m.forms.captcha.done ? jQuery('script[src*="recaptcha/api.js"]').length || ((a = jQuery("<script async defer>")).attr("src", "https://www.google.com/recaptcha/api.js?onload=mrFormsCaptchaInit&render=explicit"), jQuery("body").append(a), m.forms.captcha.done = !0) : "undefined" != typeof grecaptcha && m.forms.captcha.renderWidgets()
        })
    }, m.forms.submit = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        var e, o, i, a, n, r = p("body"),
            s = p(t.target).closest("form"),
            d = void 0 !== s.attr("action") ? s.attr("action") : "",
            c = s.find('button[type="submit"], input[type="submit"]'),
            l = s.attr("original-error"),
            u = !!s.find("div.recaptcha").length;
        if (r.find(".form-error, .form-success").remove(), c.attr("data-text", c.text()), a = s.attr("data-error") ? s.attr("data-error") : "Please fill all fields correctly", n = s.attr("data-success") ? s.attr("data-success") : "Thanks, we'll be in touch shortly", r.append('<div class="form-error" style="display: none;">' + a + "</div>"), r.append('<div class="form-success" style="display: none;">' + n + "</div>"), o = r.find(".form-error"), i = r.find(".form-success"), s.addClass("attempted-submit"), -1 !== d.indexOf("createsend.com") || -1 !== d.indexOf("list-manage.com"))
            if (void 0 !== l && !1 !== l && o.html(l), 1 !== m.forms.validateFields(s)) {
                s.removeClass("attempted-submit"), o.fadeOut(200), c.addClass("btn--loading");
                try {
                    p.ajax({
                        url: s.attr("action"),
                        crossDomain: !0,
                        data: s.serialize(),
                        method: "GET",
                        cache: !1,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        success: function(t) {
                            "success" !== t.result && 200 !== t.Status ? (o.attr("original-error", o.text()), o.html(t.msg).stop(!0).fadeIn(1e3), i.stop(!0).fadeOut(1e3), c.removeClass("btn--loading")) : (c.removeClass("btn--loading"), void 0 !== (e = s.attr("data-success-redirect")) && !1 !== e && "" !== e ? f.location = e : (m.forms.resetForm(s), m.forms.showFormSuccess(i, o, 1e3, 5e3, 500)))
                        }
                    })
                } catch (t) {
                    o.attr("original-error", o.text()), o.html(t.message), m.forms.showFormError(i, o, 1e3, 5e3, 500), c.removeClass("btn--loading")
                }
            } else m.forms.showFormError(i, o, 1e3, 5e3, 500);
        else void 0 !== l && !1 !== l && o.text(l), 1 === m.forms.validateFields(s) ? m.forms.showFormError(i, o, 1e3, 5e3, 500) : (s.removeClass("attempted-submit"), o.fadeOut(200), c.addClass("btn--loading"), jQuery.ajax({
            type: "POST",
            url: "" !== d ? d : "http://mailform.mediumra.re/stack/mail.php",
            data: s.serialize() + "&url=" + f.location.href + "&captcha=" + u,
            success: function(t) {
                c.removeClass("btn--loading"), p.isNumeric(t) ? 0 < parseInt(t, 10) && (void 0 !== (e = s.attr("data-success-redirect")) && !1 !== e && "" !== e && (f.location = e), m.forms.resetForm(s), m.forms.showFormSuccess(i, o, 1e3, 5e3, 500), m.forms.captcha.resetWidgets()) : (o.attr("original-error", o.text()), o.text(t).stop(!0).fadeIn(1e3), i.stop(!0).fadeOut(1e3))
            },
            error: function(t, e, a) {
                o.attr("original-error", o.text()), o.text(a).stop(!0).fadeIn(1e3), i.stop(!0).fadeOut(1e3), c.removeClass("btn--loading")
            }
        }));
        return !1
    }, m.forms.validateFields = function(t) {
        var e, a = p(a),
            o = !1;
        if ((t = p(t)).find('.validate-required[type="checkbox"]').each(function() {
                var t = p(this);
                p('[name="' + p(this).attr("name") + '"]:checked').length || (o = 1, p(this).attr("data-name") || "check", t.parent().addClass("field-error"))
            }), t.find(".validate-required, .required, [required]").not('input[type="checkbox"]').each(function() {
                "" === p(this).val() ? (p(this).addClass("field-error"), o = 1) : p(this).removeClass("field-error")
            }), t.find('.validate-email, .email, [name*="cm-"][type="email"]').each(function() {
                /(.+)@(.+){2,}\.(.+){2,}/.test(p(this).val()) ? p(this).removeClass("field-error") : (p(this).addClass("field-error"), o = 1)
            }), t.find(".validate-number-dash").each(function() {
                /^[0-9][0-9-]+[0-9]$/.test(p(this).val()) ? p(this).removeClass("field-error") : (p(this).addClass("field-error"), o = 1)
            }), t.find("div.recaptcha").length && void 0 !== t.attr("data-recaptcha-sitekey") && (e = p(t.find("div.recaptcha")), "" !== grecaptcha.getResponse(t.data("recaptchaWidgetID")) ? e.removeClass("field-error") : (e.addClass("field-error"), o = 1)), t.find(".field-error").length) {
            var i = p(t).find(".field-error:first");
            i.length && p("html, body").stop(!0).animate({
                scrollTop: i.offset().top - 100
            }, 1200, function() {
                i.focus()
            })
        } else a.find(".form-error").fadeOut(1e3);
        return o
    }, m.forms.showFormSuccess = function(t, e, a, o, i) {
        t.stop(!0).fadeIn(a), e.stop(!0).fadeOut(a), setTimeout(function() {
            t.stop(!0).fadeOut(i)
        }, o)
    }, m.forms.showFormError = function(t, e, a, o, i) {
        e.stop(!0).fadeIn(a), t.stop(!0).fadeOut(a), setTimeout(function() {
            e.stop(!0).fadeOut(i)
        }, o)
    }, m.forms.resetForm = function(t) {
        (t = p(t)).get(0).reset(), t.find(".input-radio, .input-checkbox").removeClass("checked"), t.find("[data-default-value]").filter('[type="text"],[type="number"],[type="email"],[type="url"],[type="search"],[type="tel"]').each(function() {
            var t = jQuery(this);
            t.val(t.attr("data-default-value"))
        })
    }, f.mrFormsCaptchaInit = function() {
        m.forms.captcha.renderWidgets()
    }, m.forms.captcha.renderWidgets = function() {
        m.forms.captcha.widgets.forEach(function(t) {
            "" === t.element.innerHTML.replace(/[\s\xA0]+/g, "") && (t.id = grecaptcha.render(t.element, {
                sitekey: m.forms.captcha.sitekey,
                theme: t.theme,
                size: t.size,
                callback: m.forms.captcha.setHuman
            }), t.parentForm.data("recaptchaWidgetID", t.id))
        })
    }, m.forms.captcha.resetWidgets = function() {
        m.forms.captcha.widgets.forEach(function(t) {
            grecaptcha.reset(t.id)
        })
    }, m.forms.captcha.setHuman = function() {
        jQuery("div.recaptcha.field-error").removeClass("field-error")
    }, m.components.documentReadyDeferred.push(m.forms.documentReady), m
}(mr, jQuery, window, document), mr = function(p) {
    "use strict";
    return p.granim = p.granim || {}, p.granim.documentReady = function(m) {
        m("[data-gradient-bg]").each(function(t, e) {
            var a, o, i, n, r = m(this),
                s = "granim-" + t,
                d = r.attr("data-gradient-bg"),
                c = [],
                l = [],
                u = {};
            if (r.prepend('<canvas id="' + s + '"></canvas>'), !0 === /^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(d)) {
                for ((a = (d = (d = d.replace(" ", "")).split(",")).length) % 2 != 0 && d.push(d[a - 1]), o = 0; o < a / 2; o++)(l = []).push(d.shift()), l.push(d.shift()), c.push(l);
                u.states = {
                    "default-state": {
                        gradients: c
                    }
                }
            }
            i = {
                element: "#" + s,
                name: "basic-gradient",
                direction: "left-right",
                opacity: [1, 1],
                isPausedWhenNotInView: !0,
                states: {
                    "default-state": {
                        gradients: c
                    }
                }
            }, n = jQuery.extend({}, i, p.granim.options, u), m(this).data("gradientOptions", n), m(this), new Granim(n)
        })
    }, p.components.documentReadyDeferred.push(p.granim.documentReady), p
}(mr, jQuery, window, document), mr = function(d) {
    "use strict";
    return d.instagram = d.instagram || {}, d.instagram.documentReady = function(e) {
        var a, o, i = {};
        if (e(".instafeed").length) {
            var t, n, r = "4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14",
                s = "b9b1d8ae049d4153b24a6332f0088686";
            e(".instafeed[data-access-token][data-client-id]").length && ("" !== (t = e(".instafeed[data-access-token][data-client-id]").first().attr("data-access-token")) && (r = t), "" !== (n = e(".instafeed[data-access-token][data-client-id]").first().attr("data-client-id")) && (s = n)), jQuery.fn.spectragram.accessData = {
                accessToken: r,
                clientID: s
            }
        }
        e(".instafeed").each(function() {
            var t = e(this);
            t.attr("data-user-name"), a = {
                query: "mediumrarethemes",
                max: 12
            }, i.max = t.attr("data-amount"), i.query = t.attr("data-user-name"), o = jQuery.extend({}, a, d.instagram.options, i), t.append("<ul></ul>"), t.children("ul").spectragram("getUserFeed", o)
        })
    }, d.components.documentReadyDeferred.push(d.instagram.documentReady), d
}(mr, jQuery, window, document), mr = function(y, t, e, g) {
    "use strict";
    return y.maps = y.maps || {}, y.maps.options = y.maps.options || {}, y.maps.documentReady = function(t) {
        t(".map-holder").on("click", function() {
            t(this).addClass("interact")
        }).removeClass("interact");
        var e = t(".map-container[data-maps-api-key]");
        e.length && (e.addClass("gmaps-active"), y.maps.initAPI(t), y.maps.init())
    }, y.maps.initAPI = function(t) {
        if (g.querySelector("[data-maps-api-key]") && !g.querySelector(".gMapsAPI") && t("[data-maps-api-key]").length) {
            var e = g.createElement("script"),
                a = t("[data-maps-api-key]:first").attr("data-maps-api-key");
            "" !== (a = void 0 !== a ? a : "") && (e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=" + a + "&callback=mr.maps.init", e.className = "gMapsAPI", g.body.appendChild(e))
        }
    }, y.maps.init = function() {
        void 0 !== e.google && void 0 !== e.google.maps && (y.maps.instances = [], jQuery(".gmaps-active").each(function() {
            var a, t, e, o, i, n, r = this,
                s = jQuery(this),
                d = 766 < jQuery(g).width(),
                c = (s.attr("data-zoom-controls"), void 0 !== s.attr("data-zoom-controls") && s.attr("data-zoom-controls")),
                l = void 0 !== s.attr("data-latlong") && s.attr("data-latlong"),
                u = !!l && 1 * l.substr(0, l.indexOf(",")),
                m = !!l && 1 * l.substr(l.indexOf(",") + 1),
                p = new google.maps.Geocoder,
                f = void 0 !== s.attr("data-address") ? s.attr("data-address").split(";") : [""],
                h = {},
                v = {};
            (n = g.createEvent("Event")).initEvent("mapCreated.maps.mr", !0, !0), e = {
                disableDefaultUI: !0,
                draggable: d,
                scrollwheel: !1,
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    }]
                }],
                zoom: 17,
                zoomControl: !1
            }, h.styles = void 0 !== s.attr("data-map-style") ? JSON.parse(s.attr("data-map-style")) : void 0, h.zoom = s.attr("data-map-zoom") ? parseInt(s.attr("data-map-zoom"), 10) : void 0, h.zoomControlOptions = !1 !== c ? {
                position: google.maps.ControlPosition[c]
            } : void 0, t = {
                icon: {
                    url: ("undefined" != typeof mr_variant ? "../" : "") + "img/mapmarker.png",
                    scaledSize: new google.maps.Size(50, 50)
                },
                title: "We Are Here",
                optimised: !1
            }, v.icon = void 0 !== s.attr("data-marker-image") ? {
                url: s.attr("data-marker-image"),
                scaledSize: new google.maps.Size(50, 50)
            } : void 0, v.title = s.attr("data-marker-title"), o = jQuery.extend({}, e, y.maps.options.map, h), i = jQuery.extend({}, t, y.maps.options.marker, v), void 0 !== f && "" !== f[0] ? p.geocode({
                address: f[0].replace("[nomarker]", "")
            }, function(t, e) {
                e === google.maps.GeocoderStatus.OK && (a = new google.maps.Map(r, o), y.maps.instances.push(a), jQuery(r).trigger("mapCreated.maps.mr").get(0).dispatchEvent(n), a.setCenter(t[0].geometry.location), f.forEach(function(t) {
                    if (/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(t)) {
                        var e = t.split(",");
                        new google.maps.Marker(jQuery.extend({}, i, {
                            position: {
                                lat: 1 * e[0],
                                lng: 1 * e[1]
                            },
                            map: a
                        }))
                    } else t.indexOf("[nomarker]") < 0 && (new google.maps.Geocoder).geocode({
                        address: t.replace("[nomarker]", "")
                    }, function(t, e) {
                        e === google.maps.GeocoderStatus.OK && new google.maps.Marker(jQuery.extend({}, i, {
                            map: a,
                            position: t[0].geometry.location
                        }))
                    })
                }))
            }) : void 0 !== u && "" !== u && !1 !== u && void 0 !== m && "" !== m && !1 !== m && (o.center = {
                lat: u,
                lng: m
            }, a = new google.maps.Map(r, o), new google.maps.Marker(jQuery.extend({}, i, {
                position: {
                    lat: u,
                    lng: m
                },
                map: a
            })), y.maps.instances.push(a), jQuery(r).trigger("mapCreated.maps.mr").get(0).dispatchEvent(n))
        }))
    }, y.components.documentReady.push(y.maps.documentReady), y
}(mr, jQuery, window, document), mr = function(n, r, t, e) {
    "use strict";
    return n.masonry = n.masonry || {}, n.masonry.documentReady = function(o) {
        n.masonry.updateFilters(), o(e).on("click touchstart", ".masonry__filters li:not(.js-no-action)", function() {
            var t = o(this),
                e = t.closest(".masonry").find(".masonry__container"),
                a = "*";
            "*" !== t.attr("data-masonry-filter") && (a = ".filter-" + t.attr("data-masonry-filter")), t.siblings("li").removeClass("active"), t.addClass("active"), e.removeClass("masonry--animate"), e.on("layoutComplete", function() {
                o(this).addClass("masonry--active"), "undefined" != typeof mr_parallax && setTimeout(function() {
                    mr_parallax.profileParallaxElements()
                }, 100)
            }), e.isotope({
                filter: a
            })
        })
    }, n.masonry.windowLoad = function() {
        r(".masonry").each(function() {
            var t, e = r(this).find(".masonry__container"),
                a = r(this),
                o = "*",
                i = {};
            t = {
                itemSelector: ".masonry__item",
                filter: "*",
                masonry: {
                    columnWidth: ".masonry__item"
                }
            }, a.is("[data-default-filter]") && (o = ".filter-" + (o = a.attr("data-default-filter").toLowerCase()), a.find("li[data-masonry-filter]").removeClass("active"), a.find('li[data-masonry-filter="' + a.attr("data-default-filter").toLowerCase() + '"]').addClass("active")), i.filter = "*" !== o ? o : void 0, e.on("layoutComplete", function() {
                e.addClass("masonry--active"), "undefined" != typeof mr_parallax && setTimeout(function() {
                    mr_parallax.profileParallaxElements()
                }, 100)
            }), e.isotope(jQuery.extend({}, t, n.masonry.options, i))
        })
    }, n.masonry.updateFilters = function(t) {
        r(t = void 0 !== t ? t : ".masonry").each(function() {
            var i, a = r(this),
                t = a.find(".masonry__container"),
                e = a.find(".masonry__filters"),
                o = void 0 !== e.attr("data-filter-all-text") ? e.attr("data-filter-all-text") : "All";
            a.is(".masonry") && t.find(".masonry__item[data-masonry-filter]").length && ((i = e.find("> ul")).length || (i = e.append("<ul></ul>").find("> ul")), t.find(".masonry__item[data-masonry-filter]").each(function() {
                var o = r(this),
                    t = o.attr("data-masonry-filter"),
                    e = [];
                void 0 !== t && "" !== t && (e = t.split(",")), r(e).each(function(t, e) {
                    var a = n.util.slugify(e);
                    o.addClass("filter-" + a), i.find('[data-masonry-filter="' + a + '"]').length || i.append('<li data-masonry-filter="' + a + '">' + e + "</li>")
                })
            }), i.find("[data-masonry-filter]").each(function() {
                var t = r(this),
                    e = t.text();
                "*" !== r(this).attr("data-masonry-filter") && (a.find('.masonry__item[data-masonry-filter*="' + e + '"]').length || t.remove())
            }), n.util.sortChildrenByText(r(this).find(".masonry__filters ul")), i.find('[data-masonry-filter="*"]').length || i.prepend('<li class="active" data-masonry-filter="*">' + o + "</li>"))
        })
    }, n.masonry.updateLayout = function(t) {
        r(t = void 0 !== t ? t : ".masonry").each(function() {
            var t = r(this),
                e = t.find(".masonry__item:not([style])"),
                a = t.find(".masonry__container");
            t.is(".masonry") && (e.length && a.isotope("appended", e).isotope("layout"), a.isotope("layout"))
        })
    }, n.components.documentReady.push(n.masonry.documentReady), n.components.windowLoad.push(n.masonry.windowLoad), n
}(mr, jQuery, window, document), mr = function(n, o, r, s) {
    "use strict";
    return n.modals = n.modals || {}, n.modals.documentReady = function(i) {
        var t = '<div class="all-page-modals"></div>',
            e = i("div.main-container");
        if (e.length ? (jQuery(t).insertAfter(e), n.modals.allModalsContainer = i("div.all-page-modals")) : (jQuery("body").append(t), n.modals.allModalsContainer = jQuery("body div.all-page-modals")), i(".modal-container").each(function() {
                var t = i(this),
                    e = (i(r), t.find(".modal-content"));
                if (t.find(".modal-close").length || t.find(".modal-content").append('<div class="modal-close modal-close-cross"></div>'), void 0 !== e.attr("data-width")) {
                    var a = 1 * e.attr("data-width").substr(0, e.attr("data-width").indexOf("%"));
                    e.css("width", a + "%")
                }
                if (void 0 !== e.attr("data-height")) {
                    var o = 1 * e.attr("data-height").substr(0, e.attr("data-height").indexOf("%"));
                    e.css("height", o + "%")
                }
                n.util.idleSrc(t, "iframe")
            }), i(".modal-instance").each(function(t) {
                var e = i(this),
                    a = e.find(".modal-container"),
                    o = (e.find(".modal-content"), e.find(".modal-trigger"));
                o.attr("data-modal-index", t), a.attr("data-modal-index", t), void 0 !== a.attr("data-modal-id") && o.attr("data-modal-id", a.attr("data-modal-id")), a = a.detach(), n.modals.allModalsContainer.append(a)
            }), i(".modal-trigger").on("click", function() {
                var t, e, a = i(this);
                return e = void 0 !== a.attr("data-modal-id") ? (t = a.attr("data-modal-id"), n.modals.allModalsContainer.find('.modal-container[data-modal-id="' + t + '"]')) : (t = i(this).attr("data-modal-index"), n.modals.allModalsContainer.find('.modal-container[data-modal-index="' + t + '"]')), n.util.activateIdleSrc(e, "iframe"), n.modals.autoplayVideo(e), n.modals.showModal(e), !1
            }), jQuery(s).on("click", ".modal-close", n.modals.closeActiveModal), jQuery(s).keyup(function(t) {
                27 === t.keyCode && n.modals.closeActiveModal()
            }), i(".modal-container:not(.modal--prevent-close)").on("click", function(t) {
                t.target === this && n.modals.closeActiveModal()
            }), i(".modal-container[data-autoshow]").each(function() {
                var t = i(this),
                    e = 1 * t.attr("data-autoshow");
                n.util.activateIdleSrc(t), n.modals.autoplayVideo(t), void 0 !== t.attr("data-cookie") && n.cookies.hasItem(t.attr("data-cookie")) || n.modals.showModal(t, e)
            }), i(".modal-container[data-show-on-exit]").each(function() {
                var t = jQuery(this),
                    e = t.attr("data-show-on-exit"),
                    a = 0;
                t.attr("data-delay") && (a = parseInt(t.attr("data-delay"), 10) || 0), i(e).length && (t.prepend(i('<i class="ti-close close-modal">')), jQuery(s).on("mouseleave", e, function() {
                    i(".modal-active").length || void 0 !== t.attr("data-cookie") && n.cookies.hasItem(t.attr("data-cookie")) || n.modals.showModal(t, a)
                }))
            }), 2 === r.location.href.split("#").length) {
            var a = r.location.href.split("#").pop();
            i('[data-modal-id="' + a + '"]').length && (n.modals.closeActiveModal(), n.modals.showModal(i('[data-modal-id="' + a + '"]')))
        }
        jQuery(s).on("click", 'a[href^="#"]', function() {
            var t = i(this).attr("href").replace("#", "");
            i('[data-modal-id="' + t + '"]').length && (n.modals.closeActiveModal(), setTimeout(n.modals.showModal, 500, '[data-modal-id="' + t + '"]', 0))
        }), jQuery(s).on("wheel mousewheel scroll", ".modal-content, .modal-content .scrollable", function(t) {
            t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), this.scrollTop += t.originalEvent.deltaY
        })
    }, n.modals.showModal = function(e, t) {
        var a = void 0 !== t ? 1 * t : 0;
        o(e).length && setTimeout(function() {
            var t = s.createEvent("Event");
            t.initEvent("modalOpened.modals.mr", !0, !0), o(e).addClass("modal-active").trigger("modalOpened.modals.mr").get(0).dispatchEvent(t)
        }, a)
    }, n.modals.closeActiveModal = function() {
        var t = jQuery("body div.modal-active"),
            e = s.createEvent("Event");
        n.util.idleSrc(t, "iframe"), n.util.pauseVideo(t), void 0 !== t.attr("data-cookie") && n.cookies.setItem(t.attr("data-cookie"), "true", 1 / 0, "/"), t.length && (t.is("[data-modal-id]") && r.location.hash === "#" + t.attr("data-modal-id") && n.util.removeHash(), e.initEvent("modalClosed.modals.mr", !0, !0), t.removeClass("modal-active").trigger("modalClosed.modals.mr").get(0).dispatchEvent(e))
    }, n.modals.autoplayVideo = function(t) {
        t.find("video[autoplay]").length && t.find("video").get(0).play()
    }, n.components.documentReady.push(n.modals.documentReady), n
}(mr, jQuery, window, document), mr = function(s, a) {
    "use strict";
    return s.newsletters = s.newsletters || {}, s.newsletters.documentReady = function(a) {
        var e, t, o, i, n, r;
        a('form[action*="createsend.com"]').each(function() {
            (e = a(this)).attr("novalidate", "novalidate"), e.is(".form--no-placeholders") ? e.find("input[placeholder]").removeAttr("placeholder") : e.find("input:not([checkbox]):not([radio])").each(function() {
                var t = a(this);
                void 0 !== t.attr("placeholder") ? "" === t.attr("placeholder") && t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), e.is(".form--no-labels") && t.siblings("label").first().remove()) : t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), e.is(".form--no-labels") && t.siblings("label").first().remove()), t.parent().is("p") && t.unwrap()
            }), e.find("select").wrap('<div class="input-select"></div>'), e.find('input[type="radio"]').wrap('<div class="input-radio"></div>'), e.find('input[type="checkbox"]').each(function() {
                t = a(this), i = t.attr("id"), (o = e.find("label[for=" + i + "]")).length || (o = a('<label for="' + i + '"></label>')), t.before('<div class="input-checkbox" data-id="' + i + '"></div>'), a('.input-checkbox[data-id="' + i + '"]').prepend(t), a('.input-checkbox[data-id="' + i + '"]').prepend(o)
            }), e.find('button[type="submit"]').each(function() {
                var t = a(this);
                t.addClass("btn"), t.parent().is("p") && t.unwrap()
            }), e.find("[required]").attr("required", "required").addClass("validate-required"), e.addClass("form--active"), s.newsletters.prepareAjaxAction(e)
        }), a('form[action*="list-manage.com"]').each(function() {
            (e = a(this)).attr("novalidate", "novalidate"), e.is(".form--no-placeholders") ? e.find("input[placeholder]").removeAttr("placeholder") : e.find("input:not([checkbox]):not([radio])").each(function() {
                var t = a(this);
                void 0 !== t.attr("placeholder") ? "" === t.attr("placeholder") && t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), e.is(".form--no-labels") && t.siblings("label").first().remove()) : t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), e.is(".form--no-labels") && t.siblings("label").first().remove())
            }), e.is(".form--no-labels") && e.find("input:not([checkbox]):not([radio])").each(function() {
                var t = a(this);
                t.siblings("label").length && t.siblings("label").first().remove()
            }), e.find("select").wrap('<div class="input-select"></div>'), e.find('input[type="checkbox"]').each(function() {
                t = jQuery(this), n = t.parent(), (o = n.find("label")).length || (o = jQuery("<label>")), t.before('<div class="input-checkbox"></div>'), n.find(".input-checkbox").append(t), n.find(".input-checkbox").append(o)
            }), e.find('input[type="radio"]').each(function() {
                r = jQuery(this), n = r.closest("li"), (o = n.find("label")).length || (o = jQuery("<label>")), r.before('<div class="input-radio"></div>'), n.find(".input-radio").prepend(r), n.find(".input-radio").prepend(o)
            }), e.find('input[type="submit"]').each(function() {
                var t = a(this),
                    e = jQuery("<button/>").attr("type", "submit").attr("class", t.attr("class")).addClass("btn").text(t.attr("value"));
                t.parent().is("div.clear") && t.unwrap(), e.insertBefore(t), t.remove()
            }), e.find("input").each(function() {
                var t = a(this);
                t.hasClass("required") && t.removeClass("required").addClass("validate-required")
            }), e.find('input[type="email"]').removeClass("email").addClass("validate-email"), e.find("#mce-responses").remove(), e.find(".mc-field-group").each(function() {
                a(this).children().first().unwrap()
            }), e.find("[required]").attr("required", "required").addClass("validate-required"), e.addClass("form--active"), s.newsletters.prepareAjaxAction(e)
        }), s.forms.documentReady(s.setContext("form.form--active"))
    }, s.newsletters.prepareAjaxAction = function(t) {
        var e = a(t).attr("action");
        !/list-manage\.com/.test(e) || "//" === (e = e.replace("/post?", "/post-json?") + "&c=?").substr(0, 2) && (e = "http:" + e), /createsend\.com/.test(e) && (e += "?callback=?"), a(t).attr("action", e)
    }, s.components.documentReady.push(s.newsletters.documentReady), s
}(mr, jQuery, window, document), mr = function(r, o, t, s) {
    "use strict";
    return r.notifications = r.notifications || {}, r.notifications.documentReady = function(a) {
        a(".notification").each(function() {
            var t = a(this);
            t.find(".notification-close").length || t.append('<div class="notification-close-cross notification-close"></div>')
        }), a(".notification[data-autoshow]").each(function() {
            var t = a(this),
                e = parseInt(t.attr("data-autoshow"), 10);
            void 0 !== t.attr("data-cookie") && r.cookies.hasItem(t.attr("data-cookie")) || r.notifications.showNotification(t, e)
        }), a("[data-notification-link]:not(.notification)").on("click", function() {
            var t = jQuery(this).attr("data-notification-link"),
                e = a('.notification[data-notification-link="' + t + '"]');
            return jQuery(".notification--reveal").addClass("notification--dismissed"), e.removeClass("notification--dismissed"), r.notifications.showNotification(e, 0), !1
        }), a(".notification-close").on("click", function() {
            var t = jQuery(this);
            return r.notifications.closeNotification(t), "#" !== t.attr("href") && void 0
        }), a(".notification .inner-link").on("click", function() {
            var t = jQuery(this).closest(".notification").attr("data-notification-link");
            r.notifications.closeNotification(t)
        })
    }, r.notifications.showNotification = function(t, e) {
        var a = jQuery(t),
            o = void 0 !== e ? 1 * e : 0,
            i = s.createEvent("Event");
        if (setTimeout(function() {
                i.initEvent("notificationOpened.notifications.mr", !0, !0), a.addClass("notification--reveal").trigger("notificationOpened.notifications.mr").get(0).dispatchEvent(i), a.closest("nav").addClass("notification--reveal"), a.find("input").length && a.find("input").first().focus()
            }, o), t.is("[data-autohide]")) {
            var n = parseInt(t.attr("data-autohide"), 10);
            setTimeout(function() {
                r.notifications.closeNotification(t)
            }, n + o)
        }
    }, r.notifications.closeNotification = function(t) {
        var e = jQuery(t),
            a = s.createEvent("Event");
        t = e.is(".notification") ? e : e.is(".notification-close") ? e.closest(".notification") : o('.notification[data-notification-link="' + t + '"]'), a.initEvent("notificationClosed.notifications.mr", !0, !0), t.addClass("notification--dismissed").trigger("notificationClosed.notifications.mr").get(0).dispatchEvent(a), t.closest("nav").removeClass("notification--reveal"), void 0 !== t.attr("data-cookie") && r.cookies.setItem(t.attr("data-cookie"), "true", 1 / 0, "/")
    }, r.components.documentReady.push(r.notifications.documentReady), r
}(mr, jQuery, window, document), mr = function(t, e, s) {
    "use strict";
    return t.parallax = t.parallax || {}, t.parallax.documentReady = function(t) {
        var e = t(s),
            a = e.width(),
            o = e.height(),
            i = t("nav").outerHeight(!0);
        if (768 < a) {
            var n = t(".parallax:nth-of-type(1)"),
                r = t(".parallax:nth-of-type(1) .background-image-holder");
            r.css("top", -i), n.outerHeight(!0) === o && r.css("height", o + i)
        }
    }, t.parallax.update = function() {
        "undefined" != typeof mr_parallax && (mr_parallax.profileParallaxElements(), mr_parallax.mr_parallaxBackground())
    }, t.components.documentReady.push(t.parallax.documentReady), t
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    return t.progressHorizontal = t.progressHorizontal || {}, t.progressHorizontal.documentReady = function(t) {
        var o = [];
        t(".progress-horizontal").each(function() {
            var t = jQuery(this).find(".progress-horizontal__bar"),
                e = {},
                a = jQuery('<div class="progress-horizontal__progress"></div>');
            t.prepend(a), e.element = t, e.progress = a, e.value = parseInt(t.attr("data-value"), 10) + "%", e.offsetTop = t.offset().top, e.animate = !1, jQuery(this).hasClass("progress-horizontal--animate") ? e.animate = !0 : a.css("width", e.value), o.push(e)
        })
    }, t.components.documentReady.push(t.progressHorizontal.documentReady), t
}(mr, jQuery, window, document), mr = function(n) {
    "use strict";
    return n.easypiecharts = n.easypiecharts || {}, n.easypiecharts.pies = [], n.easypiecharts.options = n.easypiecharts.options || {}, n.easypiecharts.documentReady = function(t) {
        t(".radial").each(function() {
            var t, e, a = jQuery(this),
                o = 110,
                i = {};
            e = {
                animate: {
                    duration: 2e3,
                    enabled: !0
                },
                barColor: "#000000",
                scaleColor: !1,
                size: o,
                lineWidth: 3
            }, void 0 !== n.easypiecharts.options.size && (o = n.easypiecharts.options.size), void 0 !== a.attr("data-timing") && (i.animate = {
                duration: parseInt(a.attr("data-timing"), 10),
                enabled: !0
            }), void 0 !== a.attr("data-color") && (i.barColor = a.attr("data-color")), void 0 !== a.attr("data-size") && (o = i.size = parseInt(a.attr("data-size"), 10)), void 0 !== a.attr("data-bar-width") && (i.lineWidth = parseInt(a.attr("data-bar-width"), 10)), a.css("height", o).css("width", o), "object" == typeof n.easypiecharts.options && (t = jQuery.extend({}, e, n.easypiecharts.options, i)), a.easyPieChart(t), a.data("easyPieChart").update(0)
        }), t(".radial").length && (n.easypiecharts.init(t), n.easypiecharts.activate(), n.scroll.listeners.push(n.easypiecharts.activate))
    }, n.easypiecharts.init = function(t) {
        n.easypiecharts.pies = [], t(".radial").each(function() {
            var t = {},
                e = jQuery(this);
            t.element = e, t.value = parseInt(e.attr("data-value"), 10), t.top = e.offset().top, t.height = e.height() / 2, t.active = !1, n.easypiecharts.pies.push(t)
        })
    }, n.easypiecharts.activate = function() {
        n.easypiecharts.pies.forEach(function(t) {
            Math.round(n.scroll.y + n.window.height) >= Math.round(t.top + t.height) && !1 === t.active && (t.element.data("easyPieChart").enableAnimation(), t.element.data("easyPieChart").update(t.value), t.element.addClass("radial--active"), t.active = !0)
        })
    }, n.components.documentReadyDeferred.push(n.easypiecharts.documentReady), n
}(mr, jQuery, window, document), mr = function(s) {
    "use strict";
    return s.sliders = s.sliders || {}, s.sliders.documentReady = function(r) {
        r(".slider").each(function(t) {
            var a = r(this),
                e = a.find("ul.slides");
            e.find(">li").addClass("slide");
            var o = e.find("li").length,
                i = {
                    cellSelector: ".slide",
                    cellAlign: "left",
                    wrapAround: !0,
                    pageDots: !1,
                    prevNextButtons: !1,
                    autoPlay: !0,
                    draggable: !(o < 2),
                    imagesLoaded: !0,
                    accessibility: !0,
                    rightToLeft: !1,
                    initialIndex: 0,
                    freeScroll: !1
                },
                n = {};
            n.pageDots = "true" === a.attr("data-paging") && 1 < e.find("li").length || void 0, n.prevNextButtons = "true" === a.attr("data-arrows") || void 0, n.draggable = "false" !== a.attr("data-draggable") && void 0, n.autoPlay = "false" !== a.attr("data-autoplay") && (a.attr("data-timing") ? parseInt(a.attr("data-timing"), 10) : void 0), n.accessibility = "false" !== a.attr("data-accessibility") && void 0, n.rightToLeft = "true" === a.attr("data-rtl") || void 0, n.initialIndex = a.attr("data-initial") ? parseInt(a.attr("data-initial"), 10) : void 0, n.freeScroll = "true" === a.attr("data-freescroll") || void 0, a.attr("data-children", o), r(this).data("sliderOptions", jQuery.extend({}, i, s.sliders.options, n)), r(e).flickity(r(this).data("sliderOptions")), r(e).on("scroll.flickity", function(t, e) {
                a.find(".is-selected").hasClass("controls--dark") ? a.addClass("controls--dark") : a.removeClass("controls--dark")
            })
        }), s.parallax.update && s.parallax.update()
    }, s.components.documentReadyDeferred.push(s.sliders.documentReady), s
}(mr, jQuery, window, document), mr = function(n, o, r) {
    "use strict";
    return n.smoothscroll = n.smoothscroll || {}, n.smoothscroll.sections = [], n.smoothscroll.init = function() {
        n.smoothscroll.sections = [], o("a.inner-link").each(function() {
            var t = {},
                e = o(this),
                a = e.attr("href");
            new RegExp("^#[^\r\n\t\f\v#.]+$", "gm").test(a) && o("section" + a).length && (t.id = a, t.top = Math.round(o(a).offset().top), t.height = Math.round(o(a).outerHeight()), t.link = e.get(0), t.active = !1, n.smoothscroll.sections.push(t))
        }), n.smoothscroll.highlight()
    }, n.smoothscroll.highlight = function() {
        n.smoothscroll.sections.forEach(function(t) {
            n.scroll.y >= t.top && n.scroll.y < t.top + t.height ? !1 === t.active && (t.link.classList.add("inner-link--active"), t.active = !0) : (t.link.classList.remove("inner-link--active"), t.active = !1)
        })
    }, n.scroll.listeners.push(n.smoothscroll.highlight), n.smoothscroll.documentReady = function(a) {
        var t, e, o = a("a.inner-link"),
            i = {};
        e = {
            selector: ".inner-link",
            selectorHeader: null,
            speed: 750,
            easing: "easeInOutCubic",
            offset: 0
        }, o.length && (o.each(function(t) {
            var e = a(this);
            "#" !== e.attr("href").charAt(0) && e.removeClass("inner-link")
        }), n.smoothscroll.init(), a(r).on("resize", n.smoothscroll.init), t = 0, a("body[data-smooth-scroll-offset]").length && (t = a("body").attr("data-smooth-scroll-offset"), t *= 1), i.offset = 0 !== t ? t : void 0, smoothScroll.init(jQuery.extend({}, e, n.smoothscroll.options, i)))
    }, n.components.documentReady.push(n.smoothscroll.documentReady), n.components.windowLoad.push(n.smoothscroll.init), n
}(mr, jQuery, window, document), mr = function(a, s, t, d) {
    "use strict";
    return a.tabs = a.tabs || {}, a.tabs.documentReady = function(o) {
        o(".tabs").each(function() {
            var t = o(this);
            t.after('<ul class="tabs-content">'), t.find("li").each(function() {
                var t = o(this),
                    e = t.find(".tab__content").wrap("<li></li>").parent(),
                    a = e.clone(!0, !0);
                e.remove(), t.closest(".tabs-container").find(".tabs-content").append(a)
            })
        }), o(".tabs > li").on("click", function() {
            var t, e = o(this);
            a.tabs.activateTab(e), e.is("[id]") && (t = "#" + e.attr("id"), history.pushState ? history.pushState(null, null, t) : location.hash = t)
        }), o(".tabs li.active").each(function() {
            a.tabs.activateTab(this)
        }), "" !== t.location.hash && a.tabs.activateTabById(t.location.hash), o('a[href^="#"]').on("click", function() {
            a.tabs.activateTabById(o(this).attr("href"))
        })
    }, a.tabs.activateTab = function(t) {
        var e, a = s(t),
            o = a.closest(".tabs-container"),
            i = 1 * a.index() + 1,
            n = o.find("> .tabs-content > li:nth-of-type(" + i + ")"),
            r = d.createEvent("Event");
        r.initEvent("tabOpened.tabs.mr", !0, !0), o.find("> .tabs > li").removeClass("active"), o.find("> .tabs-content > li").removeClass("active"), a.addClass("active").trigger("tabOpened.tabs.mr").get(0).dispatchEvent(r), n.addClass("active"), (e = n.find("iframe")).length && e.attr("src", e.attr("src"))
    }, a.tabs.activateTabById = function(t) {
        "" !== t && "#" !== t && null === t.match(/#\/.*/) && s(".tabs > li#" + t.replace("#", "")).length && s(".tabs > li#" + t.replace("#", "")).click()
    }, a.components.documentReady.push(a.tabs.documentReady), a
}(mr, jQuery, window, document), mr = function(t) {
    "use strict";
    return t.toggleClass = t.toggleClass || {}, t.toggleClass.documentReady = function(n) {
        n("[data-toggle-class]").each(function() {
            var i = n(this),
                t = i.attr("data-toggle-class").split("|");
            n(t).each(function() {
                var t = i,
                    e = [],
                    a = "",
                    o = "";
                2 === (e = this.split(";")).length && (o = e[0], a = e[1], n(t).on("click", function() {
                    return t.hasClass("toggled-class") ? t.removeClass("toggled-class") : t.toggleClass("toggled-class"), n(o).toggleClass(a), !1
                }))
            })
        })
    }, t.components.documentReady.push(t.toggleClass.documentReady), t
}(mr, jQuery, window, document), mr = function(i) {
    "use strict";
    return i.typed = i.typed || {}, i.typed.documentReady = function(o) {
        o(".typed-text").each(function() {
            var t = o(this),
                e = (t.attr("data-typed-strings") && t.attr("data-typed-strings").split(","), {
                    strings: [],
                    typeSpeed: 100,
                    loop: !0,
                    showCursor: !1
                }),
                a = {};
            a.strings = t.attr("data-typed-strings") ? t.attr("data-typed-strings").split(",") : void 0, o(t).typed(jQuery.extend({}, e, i.typed.options, a))
        })
    }, i.components.documentReady.push(i.typed.documentReady), i
}(mr, jQuery, window, document), mr = function(n) {
    "use strict";
    return n.twitter = n.twitter || {}, n.twitter.options = n.twitter.options || {}, n.twitter.documentReady = function(a) {
        a(".tweets-feed").each(function(t) {
            a(this).attr("id", "tweets-" + t)
        }).each(function(t) {
            var i = a("#tweets-" + t),
                e = {
                    domId: "",
                    maxTweets: 6,
                    enableLinks: !0,
                    showUser: !0,
                    showTime: !0,
                    dateFunction: "",
                    showRetweet: !1,
                    customCallback: function(t) {
                        for (var e = t.length, a = 0, o = '<ul class="slides">'; a < e;) o += "<li>" + t[a] + "</li>", a++;
                        return o += "</ul>", i.html(o), i.closest(".slider").length ? (n.sliders.documentReady(n.setContext()), o) : void 0
                    }
                };
            e = jQuery.extend(e, n.twitter.options), void 0 !== i.attr("data-widget-id") ? e.id = i.attr("data-widget-id") : void 0 !== i.attr("data-feed-name") && "" !== i.attr("data-feed-name") ? e.profile = {
                screenName: i.attr("data-feed-name").replace("@", "")
            } : void 0 !== n.twitter.options.profile ? e.profile = {
                screenName: n.twitter.options.profile.replace("@", "")
            } : e.profile = {
                screenName: "twitter"
            }, e.maxTweets = i.attr("data-amount") ? i.attr("data-amount") : e.maxTweets, i.closest(".twitter-feed--slider").length && i.addClass("slider"), twitterFetcher.fetch(e)
        })
    }, n.components.documentReady.push(n.twitter.documentReady), n
}(mr, jQuery, window, document), mr = function(a) {
    "use strict";
    return a.video = a.video || {}, a.video.options = a.video.options || {}, a.video.options.ytplayer = a.video.options.ytplayer || {}, a.video.documentReady = function(o) {
        o(".youtube-background").length && o(".youtube-background").each(function() {
            var t = o(this),
                e = {};
            e.videoURL = o(this).attr("data-video-url"), e.startAt = o(this).attr("data-start-at") ? parseInt(o(this).attr("data-start-at"), 10) : void 0, t.closest(".videobg").append('<div class="loading-indicator"></div>'), t.YTPlayer(jQuery.extend({}, {
                containment: "self",
                autoPlay: !0,
                mute: !0,
                opacity: 1
            }, a.video.options.ytplayer, e)), t.on("YTPStart", function() {
                t.closest(".videobg").addClass("video-active")
            })
        }), o(".videobg").find("video").length && o(".videobg").find("video").closest(".videobg").addClass("video-active"), o(".video-cover").each(function() {
            var t = o(this);
            t.find("iframe[src]").length && (t.find("iframe").attr("data-src", t.find("iframe").attr("src")), t.find("iframe").attr("src", ""))
        }), o(".video-cover .video-play-icon").on("click", function() {
            var t = o(this).closest(".video-cover");
            if (t.find("video").length) {
                var e = t.find("video").get(0);
                return t.addClass("reveal-video"), e.play(), !1
            }
            if (t.find("iframe").length) {
                var a = t.find("iframe");
                return a.attr("src", a.attr("data-src")), t.addClass("reveal-video"), !1
            }
        })
    }, a.components.documentReady.push(a.video.documentReady), a
}(mr, jQuery, window, document), mr = function(a) {
    "use strict";
    return a.wizard = a.wizard || {}, a.wizard.documentReady = function(t) {
        t(".wizard").each(function() {
            var t, e = jQuery(this);
            t = {
                headerTag: "h5",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                autoFocus: !0
            }, e.is('[role="application"][id^="steps-uid"]') || (e.steps(jQuery.extend({}, t, a.wizard.options)), e.addClass("active"))
        })
    }, a.components.documentReady.push(a.wizard.documentReady), a
}(mr, jQuery, window, document);