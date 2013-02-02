/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */ (function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }
    function et() {
        return !1
    }
    function tt() {
        return !0
    }
    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function at(e, t) {
        do e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }
    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }
    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }
    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function (t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function Cn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
            f.unshift(s);
            break
        }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];) if (i !== "*") {
            if (u !== "*" && u !== i) {
                n = a[u + " " + i] || a["* " + i];
                if (!n) for (r in a) {
                    s = r.split(" ");
                    if (s[1] === i) {
                        n = a[u + " " + s[0]] || a["* " + s[0]];
                        if (n) {
                            n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                            break
                        }
                    }
                }
                if (n !== !0) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: n ? l : "No conversion from " + u + " to " + i
                    }
                }
            }
            u = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function () {
            qn = t
        }, 0), qn = v.now()
    }
    function Jn(e, t) {
        v.each(t, function (t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++) if (r[i].call(e, t, n)) return
        })
    }
    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {}, m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
                v(e).hide()
            }), h.done(function () {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }
    function Zn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function (e, t) {
            return new v.fn.init(e, t, n)
        }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function (e, t) {
            return (t + "").toUpperCase()
        }, A = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function (e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return l.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function (e, t) {
            return v.each(this, e, t)
        },
        ready: function (e) {
            return v.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
            r = u[n], i = e[n];
            if (u === i) continue;
            l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
        }
        return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e) if (n.apply(e[i], r) === !1) break
                } else for (; s < o;) if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e) if (n.call(e[i], i, e[i]) === !1) break
            } else for (; s < o;) if (n.call(e[s], s, e[s++]) === !1) break;
            return e
        },
        trim: d && !d.call("﻿ ") ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), v.ready.promise = function (t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function (t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && v.each(arguments, function (e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return v.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return v.Deferred(function (n) {
                            v.each(t, function (t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? v.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent) for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function (e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function () {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                    else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                        i.className = v.trim(s)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function () {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function (e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = l.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
                u = {}, f = [];
                for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                f.length && w.push({
                    elem: s,
                    matches: f
                })
            }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function (e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function () {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function () {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function () {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function (n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function (e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
                if (l === 9) {
                    s = t.getElementById(f);
                    if (!s || !s.parentNode) return n;
                    if (s.id === f) return n.push(s), n
                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
            } else {
                if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
            }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }
        function rt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function it(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function st(e) {
            return N(function (t) {
                return t = +t, N(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }
        function at(e, t, r) {
            var i = t.dir,
                s = r && t.dir === "parentNode",
                o = w++;
            return t.first ? function (t, n, r) {
                while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r)
            } : function (t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ",
                        l = f + n;
                    while (t = t[i]) if (s || t.nodeType === 1) {
                        if ((a = t[d]) === l) return t.sizset;
                        if (typeof a == "string" && a.indexOf(f) === 0) {
                            if (t.sizset) return t
                        } else {
                            t[d] = l;
                            if (e(t, r, u)) return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
                } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t
            }
        }
        function ft(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function lt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }
        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }
        function ht(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                f = at(function (e) {
                    return e === t
                }, u, !0),
                l = at(function (e) {
                    return T.call(t, e) > -1
                }, u, !0),
                h = [function (e, n, r) {
                    return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                }];
            for (; a < s; a++) if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
            else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[d]) {
                    r = ++a;
                    for (; r < s; r++) if (i.relative[e[r].type]) break;
                    return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                }
                h.push(n)
            }
            return ft(h)
        }
        function pt(e, t) {
            var r = t.length > 0,
                s = e.length > 0,
                o = function (u, a, f, l, h) {
                    var p, d, v, m = [],
                        y = 0,
                        w = "0",
                        x = u && [],
                        T = h != null,
                        N = c,
                        C = u || s && i.find.TAG("*", h && a.parentNode || a),
                        k = b += N == null ? 1 : Math.E;
                    T && (c = a !== g && a, n = o.el);
                    for (;
                    (p = C[w]) != null; w++) {
                        if (s && p) {
                            for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
                                l.push(p);
                                break
                            }
                            T && (b = k, n = ++o.el)
                        }
                        r && ((p = !v && p) && y--, u && x.push(p))
                    }
                    y += w;
                    if (r && w !== y) {
                        for (d = 0; v = t[d]; d++) v(x, m, a, f);
                        if (u) {
                            if (y > 0) while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                            m = lt(m)
                        }
                        S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                    }
                    return T && (b = k, c = N), x
                };
            return o.el = 0, r ? N(o) : o
        }
        function dt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) nt(e, t[r], n);
            return n
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e),
                p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                        u.splice(o, 1), e = r.length && u.join("");
                        if (!e) return S.apply(n, x.call(r, 0)), n;
                        break
                    }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0,
            p = "undefined",
            d = ("sizcache" + Math.random()).replace(".", ""),
            m = String,
            g = e.document,
            y = g.documentElement,
            b = 0,
            w = 0,
            E = [].pop,
            S = [].push,
            x = [].slice,
            T = [].indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++) if (this[t] === e) return t;
                return -1
            }, N = function (e, t) {
                return e[d] = t == null || t, e
            }, C = function () {
                var e = {}, t = [];
                return N(function (n, r) {
                    return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                }, e)
            }, k = C(),
            L = C(),
            A = C(),
            O = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            _ = M.replace("w", "w#"),
            D = "([*^$|!~]?=)",
            P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
            H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
            B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
            j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            F = new RegExp("^" + O + "*," + O + "*"),
            I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
            q = new RegExp(H),
            R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            U = /^:not/,
            z = /[\x20\t\r\n\f]*[+~]/,
            W = /:not\($/,
            X = /h\d/i,
            V = /input|select|textarea|button/i,
            $ = /\\(?!\\)/g,
            J = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + H),
                POS: new RegExp(B, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
            }, K = function (e) {
                var t = g.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, Q = K(function (e) {
                return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
            }),
            G = K(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
            }),
            Y = K(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }),
            Z = K(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }),
            et = K(function (e) {
                e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                return r = !g.getElementById(d), y.removeChild(e), t
            });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function (e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n
            }
        }
        nt.matches = function (e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function (e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue
            } else for (; t = e[r]; r++) n += s(t);
            return n
        }, o = nt.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ? function (e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ? function (e, t) {
            return t && !! (e.compareDocumentPosition(t) & 16)
        } : function (e, t) {
            while (t = t.parentNode) if (t === e) return !0;
            return !1
        }, nt.attr = function (e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function (e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function (e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                },
                TAG: Q ? function (e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [],
                            s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                },
                NAME: et && function (e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                },
                CLASS: Z && function (e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3];
                    else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function (e) {
                    return e === "*" ? function () {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r) {
                    return e === "nth" ? function (e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
                                i++;
                                if (e === t) break
                            }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function (t) {
                        var n = t;
                        switch (e) {
                            case "only":
                            case "first":
                                while (n = n.previousSibling) if (n.nodeType === 1) return !1;
                                if (e === "first") return !0;
                                n = t;
                            case "last":
                                while (n = n.nextSibling) if (n.nodeType === 1) return !1;
                                return !0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(j, "$1"));
                    return r[d] ? N(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function (e) {
                    return function (t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return X.test(e.nodeName)
                },
                text: function (e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function (e) {
                    return V.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function () {
                    return [0]
                }),
                last: st(function (e, t) {
                    return [t - 1]
                }),
                eq: st(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: st(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ? function (e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function (e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                u = t.parentNode,
                a = o;
            if (o === u) return ot(e, t);
            if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, nt.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll && function () {
            var e, t = vt,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [":focus"],
                s = [":active"],
                u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0,
                        c = d,
                        h = r,
                        p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p) try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {} finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function (t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n)) try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11) return a
                } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function () {
                for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
                    o.splice(i--, 1);
                    break
                }
            }
            return o
        },
        has: function (e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function (e) {
            return at(e, "nextSibling")
        },
        prev: function (e) {
            return at(e, "previousSibling")
        },
        nextAll: function (e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return v.sibling(e.firstChild)
        },
        contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function (e) {
            return v.access(this, function (e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            var n, r = 0;
            for (;
            (n = this[r]) != null; r++) if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
            (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        },
        html: function (e) {
            return v.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
                v(this).domManip(e, n, r)
            });
            if (v.isFunction(f)) return this.each(function (i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function (e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function (e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function (e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0;
            (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);
                else {
                    y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                    while (l--) c = c.lastChild;
                    if (!v.support.tbody) {
                        h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                        for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                    }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked) for (s = 0;
            (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function (e) {
                    if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0;
                (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        },
        cleanData: function (e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for (;
            (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
                r = i[u], n = r && a[r];
                if (n) {
                    if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                    a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                }
            }
        }
    }),
    function () {
        var e, t;
        v.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        }, Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Vt = {
            letterSpacing: 0,
            fontWeight: 400
        }, $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return Yt(this, !0)
        },
        hide: function () {
            return Yt(this)
        },
        toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function (e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function () {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function (e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            s(this.name, this.value)
        });
        else for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {}, b = {}, w = {}, E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function () {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && Fn() || In()
    } : Fn,
    function (e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r);
                        while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function () {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        }, l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function (e, t) {
    function n(t, n) {
        var i = t.nodeName.toLowerCase();
        if ("area" === i) {
            var s = t.parentNode,
                o = s.name,
                u;
            return !t.href || !o || s.nodeName.toLowerCase() !== "map" ? !1 : (u = e("img[usemap=#" + o + "]")[0], !! u && r(u))
        }
        return (/input|select|textarea|button|object/.test(i) ? !t.disabled : "a" == i ? t.href || n : n) && r(t)
    }
    function r(t) {
        return !e(t).parents().andSelf().filter(function () {
            return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.8.23",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : t = this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
            return e.each(i, function () {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), s && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? o["inner" + r].call(this) : this.each(function () {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var r = e.attr(t, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && n(t, !i)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                var i = e.ui[t].prototype;
                for (var s in r) i.plugins[s] = i.plugins[s] || [], i.plugins[s].push([n, r[s]])
            },
            call: function (e, t, n) {
                var r = e.plugins[t];
                if (!r || !e.element[0].parentNode) return;
                for (var i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
        },
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}(jQuery),
function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var r = 0, i;
            (i = t[r]) != null; r++) try {
                e(i).triggerHandler("remove")
            } catch (s) {}
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function (n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var o = new n;
        o.options = e.extend(!0, {}, o.options), e[i][t].prototype = e.extend(!0, o, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function (n, r) {
        e.fn[n] = function (i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function () {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function () {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s) for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery),
function (e, t) {
    var n = !1;
    e(document).mouseup(function (e) {
        n = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which == 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function (e) {
            return this.mouseDelayMet
        },
        _mouseStart: function (e) {},
        _mouseDrag: function (e) {},
        _mouseStop: function (e) {},
        _mouseCapture: function (e) {
            return !0
        }
    })
}(jQuery),
function (e, t) {
    e.ui = e.ui || {};
    var n = /left|center|right/,
        r = /top|center|bottom/,
        i = "center",
        s = {}, o = e.fn.position,
        u = e.fn.offset;
    e.fn.position = function (t) {
        if (!t || !t.of) return o.apply(this, arguments);
        t = e.extend({}, t);
        var u = e(t.of),
            a = u[0],
            f = (t.collision || "flip").split(" "),
            l = t.offset ? t.offset.split(" ") : [0, 0],
            c, h, p;
        return a.nodeType === 9 ? (c = u.width(), h = u.height(), p = {
            top: 0,
            left: 0
        }) : a.setTimeout ? (c = u.width(), h = u.height(), p = {
            top: u.scrollTop(),
            left: u.scrollLeft()
        }) : a.preventDefault ? (t.at = "left top", c = h = 0, p = {
            top: t.of.pageY,
            left: t.of.pageX
        }) : (c = u.outerWidth(), h = u.outerHeight(), p = u.offset()), e.each(["my", "at"], function () {
            var e = (t[this] || "").split(" ");
            e.length === 1 && (e = n.test(e[0]) ? e.concat([i]) : r.test(e[0]) ? [i].concat(e) : [i, i]), e[0] = n.test(e[0]) ? e[0] : i, e[1] = r.test(e[1]) ? e[1] : i, t[this] = e
        }), f.length === 1 && (f[1] = f[0]), l[0] = parseInt(l[0], 10) || 0, l.length === 1 && (l[1] = l[0]), l[1] = parseInt(l[1], 10) || 0, t.at[0] === "right" ? p.left += c : t.at[0] === i && (p.left += c / 2), t.at[1] === "bottom" ? p.top += h : t.at[1] === i && (p.top += h / 2), p.left += l[0], p.top += l[1], this.each(function () {
            var n = e(this),
                r = n.outerWidth(),
                o = n.outerHeight(),
                u = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                a = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                d = r + u + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                v = o + a + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                m = e.extend({}, p),
                g;
            t.my[0] === "right" ? m.left -= r : t.my[0] === i && (m.left -= r / 2), t.my[1] === "bottom" ? m.top -= o : t.my[1] === i && (m.top -= o / 2), s.fractions || (m.left = Math.round(m.left), m.top = Math.round(m.top)), g = {
                left: m.left - u,
                top: m.top - a
            }, e.each(["left", "top"], function (n, i) {
                e.ui.position[f[n]] && e.ui.position[f[n]][i](m, {
                    targetWidth: c,
                    targetHeight: h,
                    elemWidth: r,
                    elemHeight: o,
                    collisionPosition: g,
                    collisionWidth: d,
                    collisionHeight: v,
                    offset: l,
                    my: t.my,
                    at: t.at
                })
            }), e.fn.bgiframe && n.bgiframe(), n.offset(e.extend(m, {
                using: t.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (t, n) {
                var r = e(window),
                    i = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
                t.left = i > 0 ? t.left - i : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function (t, n) {
                var r = e(window),
                    i = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
                t.top = i > 0 ? t.top - i : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, n) {
                if (n.at[0] === i) return;
                var r = e(window),
                    s = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(),
                    o = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                    u = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                    a = -2 * n.offset[0];
                t.left += n.collisionPosition.left < 0 ? o + u + a : s > 0 ? o + u + a : 0
            },
            top: function (t, n) {
                if (n.at[1] === i) return;
                var r = e(window),
                    s = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(),
                    o = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                    u = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                    a = -2 * n.offset[1];
                t.top += n.collisionPosition.top < 0 ? o + u + a : s > 0 ? o + u + a : 0
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function (t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var r = e(t),
            i = r.offset(),
            s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(e.curCSS(t, "left", !0), 10) || 0,
            u = {
                top: n.top - i.top + s,
                left: n.left - i.left + o
            };
        "using" in n ? n.using.call(t, u) : r.css(u)
    }, e.fn.offset = function (t) {
        var n = this[0];
        return !n || !n.ownerDocument ? null : t ? e.isFunction(t) ? this.each(function (n) {
            e(this).offset(t.call(this, n, e(this).offset()))
        }) : this.each(function () {
            e.offset.setOffset(this, t)
        }) : u.call(this)
    }), e.curCSS || (e.curCSS = e.css),
    function () {
        var t = document.getElementsByTagName("body")[0],
            n = document.createElement("div"),
            r, i, o, u, a;
        r = document.createElement(t ? "div" : "body"), o = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, t && e.extend(o, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (var f in o) r.style[f] = o[f];
        r.appendChild(n), i = t || document.documentElement, i.insertBefore(r, i.firstChild), n.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", u = e(n).offset(function (e, t) {
            return t
        }).offset(), r.innerHTML = "", i.removeChild(r), a = u.top + u.left + (t ? 2e3 : 0), s.fractions = a > 21 && a < 22
    }()
}(jQuery),
function (e, t) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        destroy: function () {
            e.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            var r = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var i = null,
                s = this,
                o = e(t.target).parents().each(function () {
                    if (e.data(this, r.widgetName + "-item") == s) return i = e(this), !1
                });
            e.data(t.target, r.widgetName + "-item") == s && (i = e(t.target));
            if (!i) return !1;
            if (this.options.handle && !n) {
                var u = !1;
                e(this.options.handle, i).find("*").andSelf().each(function () {
                    this == t.target && (u = !0)
                });
                if (!u) return !1
            }
            return this.currentItem = i, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            var i = this.options,
                s = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, s._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i],
                    o = s.item[0],
                    u = this._intersectsWithPointer(s);
                if (!u) continue;
                if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.ui.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], o) : !0)) {
                    this.direction = u == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = r.placeholder.offset();
                r.reverting = !0, e(this.helper).animate({
                    left: i.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function () {
            var t = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                i = n && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = this,
                r = [],
                i = [],
                s = this._connectWith();
            if (s && t) for (var o = s.length - 1; o >= 0; o--) {
                var u = e(s[o]);
                for (var a = u.length - 1; a >= 0; a--) {
                    var f = e.data(u[a], this.widgetName);
                    f && f != this && !f.options.disabled && i.push([e.isFunction(f.options.items) ? f.options.items.call(f.element) : e(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f])
                }
            }
            i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = i.length - 1; o >= 0; o--) i[o][0].each(function () {
                r.push(this)
            });
            return e(r)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            for (var t = 0; t < this.items.length; t++) for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = this,
                i = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                s = this._connectWith();
            if (s && this.ready) for (var o = s.length - 1; o >= 0; o--) {
                var u = e(s[o]);
                for (var a = u.length - 1; a >= 0; a--) {
                    var f = e.data(u[a], this.widgetName);
                    f && f != this && !f.options.disabled && (i.push([e.isFunction(f.options.items) ? f.options.items.call(f.element[0], t, {
                        item: this.currentItem
                    }) : e(f.options.items, f.element), f]), this.containers.push(f))
                }
            }
            for (var o = i.length - 1; o >= 0; o--) {
                var l = i[o][1],
                    c = i[o][0];
                for (var a = 0, h = c.length; a < h; a++) {
                    var p = e(c[a]);
                    p.data(this.widgetName + "-item", l), n.push({
                        item: p,
                        instance: l,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
                var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                t || (r.width = i.outerWidth(), r.height = i.outerHeight());
                var s = i.offset();
                r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var n = this.containers.length - 1; n >= 0; n--) {
                var s = this.containers[n].element.offset();
                this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (t) {
            var n = t || this,
                r = n.options;
            if (!r.placeholder || r.placeholder.constructor == String) {
                var i = r.placeholder;
                r.placeholder = {
                    element: function () {
                        var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (t.style.visibility = "hidden"), t
                    },
                    update: function (e, t) {
                        if (i && !r.forcePlaceholderSize) return;
                        t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _contactContainers: function (t) {
            var n = null,
                r = null;
            for (var i = this.containers.length - 1; i >= 0; i--) {
                if (e.ui.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (n && e.ui.contains(this.containers[i].element[0], n.element[0])) continue;
                    n = this.containers[i], r = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            if (!n) return;
            if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else if (this.currentContainer != this.containers[r]) {
                var s = 1e4,
                    o = null,
                    u = this.positionAbs[this.containers[r].floating ? "left" : "top"];
                for (var a = this.items.length - 1; a >= 0; a--) {
                    if (!e.ui.contains(this.containers[r].element[0], this.items[a].item[0])) continue;
                    var f = this.containers[r].floating ? this.items[a].item.offset().left : this.items[a].item.offset().top;
                    Math.abs(f - u) < s && (s = Math.abs(f - u), o = this.items[a], this.direction = f - u > 0 ? "down" : "up")
                }
                if (!o && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0],
                    r = e(t.containment).offset(),
                    i = e(n).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r),
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
                if (n.grid) {
                    var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
                    o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                    var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
                    s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this,
                s = this.counter;
            window.setTimeout(function () {
                s == i.counter && i.refreshPositions(!r)
            }, 0)
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [],
                i = this;
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS) if (this._storedCSS[s] == "auto" || this._storedCSS[s] == "static") this._storedCSS[s] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            });
            if (!e.ui.contains(this.element[0], this.currentItem[0])) {
                n || r.push(function (e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (var s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !n && (r.push(function (e) {
                    return function (t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), r.push(function (e) {
                    return function (t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])))
            }
            for (var s = this.containers.length - 1; s >= 0; s--) n || r.push(function (e) {
                return function (t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over && (r.push(function (e) {
                return function (t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var s = 0; s < r.length; s++) r[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (var s = 0; s < r.length; s++) r[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.23"
    })
}(jQuery),
function (e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var t = this,
                n = this.element[0].ownerDocument,
                r;
            this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (n) {
                if (t.options.disabled || t.element.propAttr("readOnly")) return;
                r = !1;
                var i = e.ui.keyCode;
                switch (n.keyCode) {
                    case i.PAGE_UP:
                        t._move("previousPage", n);
                        break;
                    case i.PAGE_DOWN:
                        t._move("nextPage", n);
                        break;
                    case i.UP:
                        t._keyEvent("previous", n);
                        break;
                    case i.DOWN:
                        t._keyEvent("next", n);
                        break;
                    case i.ENTER:
                    case i.NUMPAD_ENTER:
                        t.menu.active && (r = !0, n.preventDefault());
                    case i.TAB:
                        if (!t.menu.active) return;
                        t.menu.select(n);
                        break;
                    case i.ESCAPE:
                        t.element.val(t.term), t.close(n);
                        break;
                    default:
                        clearTimeout(t.searching), t.searching = setTimeout(function () {
                            t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
                        }, t.options.delay)
                }
            }).bind("keypress.autocomplete", function (e) {
                r && (r = !1, e.preventDefault())
            }).bind("focus.autocomplete", function () {
                if (t.options.disabled) return;
                t.selectedItem = null, t.previous = t.element.val()
            }).bind("blur.autocomplete", function (e) {
                if (t.options.disabled) return;
                clearTimeout(t.searching), t.closing = setTimeout(function () {
                    t.close(e), t._change(e)
                }, 150)
            }), this._initSource(), this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function (n) {
                var r = t.menu.element[0];
                e(n.target).closest(".ui-menu-item").length || setTimeout(function () {
                    e(document).one("mousedown", function (n) {
                        n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function (e, n) {
                    var r = n.item.data("item.autocomplete");
                    !1 !== t._trigger("focus", e, {
                        item: r
                    }) && /^key/.test(e.originalEvent.type) && t.element.val(r.value)
                },
                selected: function (e, r) {
                    var i = r.item.data("item.autocomplete"),
                        s = t.previous;
                    t.element[0] !== n.activeElement && (t.element.focus(), t.previous = s, setTimeout(function () {
                        t.previous = s, t.selectedItem = i
                    }, 1)), !1 !== t._trigger("select", e, {
                        item: i
                    }) && t.element.val(i.value), t.term = t.element.val(), t.close(e), t.selectedItem = i
                },
                blur: function (e, n) {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe(), t.beforeunloadHandler = function () {
                t.element.removeAttr("autocomplete")
            }, e(window).bind("beforeunload", t.beforeunloadHandler)
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e(window).unbind("beforeunload", this.beforeunloadHandler), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), t === "disabled" && n && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var t = this,
                n, r;
            e.isArray(this.options.source) ? (n = this.options.source, this.source = function (t, r) {
                r(e.ui.autocomplete.filter(n, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function (n, i) {
                t.xhr && t.xhr.abort(), t.xhr = e.ajax({
                    url: r,
                    data: n,
                    dataType: "json",
                    success: function (e, t) {
                        i(e)
                    },
                    error: function () {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function (e, t) {
            e = e != null ? e : this.element.val(), this.term = this.element.val();
            if (e.length < this.options.minLength) return this.close(t);
            clearTimeout(this.closing);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this._response())
        },
        _response: function () {
            var e = this,
                t = ++n;
            return function (r) {
                t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close()
        },
        close: function (e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItem(t, n)
            })
        },
        _renderItem: function (t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e)) {
                this.element.val(this.term), this.menu.deactivate();
                return
            }
            this.menu[e](t)
        },
        widget: function () {
            return this.menu.element
        },
        _keyEvent: function (e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.menu", {
        _create: function () {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (n) {
                if (!e(n.target).closest(".ui-menu-item a").length) return;
                n.preventDefault(), t.select(n)
            }), this.refresh()
        },
        refresh: function () {
            var t = this,
                n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            n.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function () {
                t.deactivate()
            })
        },
        activate: function (e, t) {
            this.deactivate();
            if (this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                    r = this.element.scrollTop(),
                    i = this.element.height();
                n < 0 ? this.element.scrollTop(r + n) : n >= i && this.element.scrollTop(r + n - i + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function () {
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, t, n) {
            if (!this.active) {
                this.activate(n, this.element.children(t));
                return
            }
            var r = this.active[e + "All"](".ui-menu-item").eq(0);
            r.length ? this.activate(n, r) : this.activate(n, this.element.children(t))
        },
        nextPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(t, this.element.children(".ui-menu-item:first"));
                    return
                }
                var n = this.active.offset().top,
                    r = this.element.height(),
                    i = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - n - r + e(this).height();
                        return t < 10 && t > -10
                    });
                i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(t, this.element.children(".ui-menu-item:last"));
                    return
                }
                var n = this.active.offset().top,
                    r = this.element.height(),
                    i = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - n + r - e(this).height();
                        return t < 10 && t > -10
                    });
                i.length || (i = this.element.children(".ui-menu-item:first")), this.activate(t, i)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery),
function (e) {
    function n() {
        var t = r(this);
        return isNaN(t.datetime) || e(this).text(i(t.datetime)), this
    }
    function r(n) {
        n = e(n);
        if (!n.data("timeago")) {
            n.data("timeago", {
                datetime: t.datetime(n)
            });
            var r = e.trim(n.text());
            r.length > 0 && (!t.isTime(n) || !n.attr("title")) && n.attr("title", r)
        }
        return n.data("timeago")
    }
    function i(e) {
        return t.inWords(s(e))
    }
    function s(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function (t) {
        return t instanceof Date ? i(t) : typeof t == "string" ? i(e.timeago.parse(t)) : typeof t == "number" ? i(new Date(t)) : i(e.timeago.datetime(t))
    };
    var t = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (t) {
            function l(r, i) {
                var s = e.isFunction(r) ? r(i, t) : r,
                    o = n.numbers && n.numbers[i] || i;
                return s.replace(/%d/i, o)
            }
            var n = this.settings.strings,
                r = n.prefixAgo,
                i = n.suffixAgo;
            this.settings.allowFuture && t < 0 && (r = n.prefixFromNow, i = n.suffixFromNow);
            var s = Math.abs(t) / 1e3,
                o = s / 60,
                u = o / 60,
                a = u / 24,
                f = a / 365,
                c = s < 45 && l(n.seconds, Math.round(s)) || s < 90 && l(n.minute, 1) || o < 45 && l(n.minutes, Math.round(o)) || o < 90 && l(n.hour, 1) || u < 24 && l(n.hours, Math.round(u)) || u < 42 && l(n.day, 1) || a < 30 && l(n.days, Math.round(a)) || a < 45 && l(n.month, 1) || a < 365 && l(n.months, Math.round(a / 30)) || f < 1.5 && l(n.year, 1) || l(n.years, Math.round(f)),
                h = n.wordSeparator === undefined ? " " : n.wordSeparator;
            return e.trim([r, c, i].join(h))
        },
        parse: function (t) {
            var n = e.trim(t);
            return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)
        },
        datetime: function (n) {
            var r = t.isTime(n) ? e(n).attr("datetime") : e(n).attr("title");
            return t.parse(r)
        },
        isTime: function (t) {
            return e(t).get(0).tagName.toLowerCase() === "time"
        }
    }), e.fn.timeago = function () {
        var e = this;
        e.each(n);
        var r = t.settings;
        return r.refreshMillis > 0 && setInterval(function () {
            e.each(n)
        }, r.refreshMillis), e
    }, document.createElement("abbr"), document.createElement("time")
}(jQuery),
function (e) {
    var t = {
        en: {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "ago",
            suffixFromNow: "from now",
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years",
            wordSeparator: " ",
            numbers: []
        },
        "zh-CN": {
            prefixAgo: null,
            prefixFromNow: "从现在开始",
            suffixAgo: "之前",
            suffixFromNow: null,
            seconds: "不到 1 分钟",
            minute: "大约 1 分钟",
            minutes: "%d 分钟",
            hour: "大约 1 小时",
            hours: "大约 %d 小时",
            day: "1 天",
            days: "%d 天",
            month: "大约 1 个月",
            months: "%d 月",
            year: "大约 1 年",
            years: "%d 年",
            numbers: [],
            wordSeparator: ""
        },
        "zh-TW": {
            prefixAgo: null,
            prefixFromNow: "從現在開始",
            suffixAgo: "之前",
            suffixFromNow: null,
            seconds: "不到 1 分鐘",
            minute: "大約 1 分鐘",
            minutes: "%d 分鐘",
            hour: "大約 1 小時",
            hours: "大約 %d 小時",
            day: "1 天",
            days: "%d 天",
            month: "大約 1 個月",
            months: "%d 月",
            year: "大約 1 年",
            years: "%d 年",
            numbers: [],
            wordSeparator: ""
        }
    };
    e.timeago.settings.strings = t[e("html").attr("lang")], e("time.timeago").timeago()
}(jQuery),
function () {
    $.fn.fire = function (e) {
        var t, n, r, i, s, o;
        if (t = arguments[1]) $.isPlainObject(t) ? s = t : $.isArray(t) ? n = t : $.isFunction(t) && (r = t);
        if (t = arguments[2]) $.isArray(t) ? n = t : $.isFunction(t) && (r = t);
        (t = arguments[3]) && $.isFunction(t) && (r = t), i = this[0], s == null && (s = {}), s.cancelable == null && (s.cancelable = !! r), s.bubbles == null && (s.bubbles = !0), n == null && (n = []), o = function () {
            var t;
            return t = $.Event(e, s), $.event.trigger(t, n, i, !t.bubbles), r && !t.isDefaultPrevented() && r.call(i, t), t
        };
        if (!s.async) return o();
        delete s.async, setTimeout(o, 0)
    }
}.call(this),
function () {
    var e, t, n = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, r = [].indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
            return -1
        };
    e = function () {
        function e() {
            this.onClose = n(this.onClose, this), this.onContainerClick = n(this.onContainerClick, this), this.onKeyDown = n(this.onKeyDown, this), this.onClick = n(this.onClick, this), $(document).on("click", ".js-menu-container", this.onContainerClick)
        }
        return e.name = "MenuBehavior", e.prototype.activate = function (e) {
            var t = this;
            this.activeContainer && this.deactivate(this.activeContainer), $(e).fire("menu:activate", function () {
                return $(document).on("keydown.menu", t.onKeyDown), $(document).on("click.menu", t.onClick), $(e).on("click.menu", ".js-menu-close", t.onClose), t.activeContainer = e, $(document.body).addClass("menu-active"), $(e).addClass("active"), $(e).fire("menu:activated", {
                    async: !0
                })
            })
        }, e.prototype.deactivate = function (e) {
            var t = this;
            $(e).fire("menu:deactivate", function () {
                return $(document).off("keydown.menu", t.onKeyDown), $(document).off("click.menu", t.onClick), $(e).off("click.menu", ".js-menu-close", t.onClose), t.activeContainer = null, $(document.body).removeClass("menu-active"), $(e).removeClass("active"), $(e).fire("menu:deactivated", {
                    async: !0
                })
            })
        }, e.prototype.onClick = function (e) {
            if (!this.activeContainer) return;
            if (!$(e.target).closest(this.activeContainer)[0]) return this.deactivate(this.activeContainer)
        }, e.prototype.onKeyDown = function (e) {
            var t;
            if (!this.activeContainer) return;
            if (e.keyCode === 27) return (t = this.activeContainer, r.call($(document.activeElement).parents(), t) >= 0) && document.activeElement.blur(), this.deactivate(this.activeContainer)
        }, e.prototype.onContainerClick = function (e) {
            var t, n, r;
            t = e.currentTarget;
            if (r = $(e.target).closest(".js-menu-target")[0]) return t === this.activeContainer ? this.deactivate(t) : this.activate(t);
            if (!(n = $(e.target).closest(".js-menu-content")[0])) return this.deactivate(t)
        }, e.prototype.onClose = function (e) {
            return this.deactivate($(e.target).closest(".js-menu-container")[0]), !1
        }, e
    }(), t = new e, $.fn.menu2 = function (e) {
        var n, r, i = this;
        return n = $(this).closest(".js-menu-container")[0], r = {
            activate: function () {
                return t.activate(n)
            },
            deactivate: function () {
                return t.deactivate(n)
            }
        }, typeof r[e] == "function" ? r[e]() : void 0
    }
}.call(this),
function (e) {
    e.fn.slides = function (t) {
        return t = e.extend({}, e.fn.slides.option, t), this.each(function () {
            function n(n, r, i) {
                if (!w && y) {
                    w = !0, t.animationStart(g + 1);
                    switch (n) {
                        case "next":
                            v = g, d = g + 1, d = u === d ? 0 : d, S = f * 2, n = -f * 2, g = d;
                            break;
                        case "prev":
                            v = g, d = g - 1, d = d === -1 ? u - 1 : d, S = 0, n = 0, g = d;
                            break;
                        case "pagination":
                            d = parseInt(i, 10), v = e("." + t.paginationClass + " li." + t.currentClass + " a", s).attr("href").match("[^#/]+$"), d > v ? (S = f * 2, n = -f * 2) : (S = 0, n = 0), g = d
                    }
                    r === "fade" ? t.crossfade ? o.children(":eq(" + d + ")", s).css({
                        zIndex: 10
                    }).fadeIn(t.fadeSpeed, t.fadeEasing, function () {
                        t.autoHeight ? o.animate({
                            height: o.children(":eq(" + d + ")", s).outerHeight()
                        }, t.autoHeightSpeed, function () {
                            o.children(":eq(" + v + ")", s).css({
                                display: "none",
                                zIndex: 0
                            }), o.children(":eq(" + d + ")", s).css({
                                zIndex: 0
                            }), t.animationComplete(d + 1), w = !1
                        }) : (o.children(":eq(" + v + ")", s).css({
                            display: "none",
                            zIndex: 0
                        }), o.children(":eq(" + d + ")", s).css({
                            zIndex: 0
                        }), t.animationComplete(d + 1), w = !1)
                    }) : o.children(":eq(" + v + ")", s).fadeOut(t.fadeSpeed, t.fadeEasing, function () {
                        t.autoHeight ? o.animate({
                            height: o.children(":eq(" + d + ")", s).outerHeight()
                        }, t.autoHeightSpeed, function () {
                            o.children(":eq(" + d + ")", s).fadeIn(t.fadeSpeed, t.fadeEasing)
                        }) : o.children(":eq(" + d + ")", s).fadeIn(t.fadeSpeed, t.fadeEasing, function () {
                            e.browser.msie && e(this).get(0).style.removeAttribute("filter")
                        }), t.animationComplete(d + 1), w = !1
                    }) : (o.children(":eq(" + d + ")").css({
                        left: S,
                        display: "block"
                    }), t.autoHeight ? o.animate({
                        left: n,
                        height: o.children(":eq(" + d + ")").outerHeight()
                    }, t.slideSpeed, t.slideEasing, function () {
                        o.css({
                            left: -f
                        }), o.children(":eq(" + d + ")").css({
                            left: f,
                            zIndex: 5
                        }), o.children(":eq(" + v + ")").css({
                            left: f,
                            display: "none",
                            zIndex: 0
                        }), t.animationComplete(d + 1), w = !1
                    }) : o.animate({
                        left: n
                    }, t.slideSpeed, t.slideEasing, function () {
                        o.css({
                            left: -f
                        }), o.children(":eq(" + d + ")").css({
                            left: f,
                            zIndex: 5
                        }), o.children(":eq(" + v + ")").css({
                            left: f,
                            display: "none",
                            zIndex: 0
                        }), t.animationComplete(d + 1), w = !1
                    })), t.pagination && (e("." + t.paginationClass + " li." + t.currentClass, s).removeClass(t.currentClass), e("." + t.paginationClass + " li:eq(" + d + ")", s).addClass(t.currentClass))
                }
            }
            function r() {
                clearInterval(s.data("interval"))
            }
            function i() {
                t.pause ? (clearTimeout(s.data("pause")), clearInterval(s.data("interval")), N = setTimeout(function () {
                    clearTimeout(s.data("pause")), C = setInterval(function () {
                        n("next", h)
                    }, t.play), s.data("interval", C)
                }, t.pause), s.data("pause", N)) : r()
            }
            e("." + t.container, e(this)).children().wrapAll('<div class="slides_control"/>');
            var s = e(this),
                o = e(".slides_control", s),
                u = o.children().size(),
                f = o.children().outerWidth(),
                l = o.children().outerHeight(),
                c = t.start - 1,
                h = t.effect.indexOf(",") < 0 ? t.effect : t.effect.replace(" ", "").split(",")[0],
                p = t.effect.indexOf(",") < 0 ? h : t.effect.replace(" ", "").split(",")[1],
                d = 0,
                v = 0,
                m = 0,
                g = 0,
                y, w, E, S, x, T, N, C;
            if (u < 2) return e("." + t.container, e(this)).fadeIn(t.fadeSpeed, t.fadeEasing, function () {
                y = !0, t.slidesLoaded()
            }), e("." + t.next + ", ." + t.prev).fadeOut(0), !1;
            if (u < 2) return;
            c < 0 && (c = 0), c > u && (c = u - 1), t.start && (g = c), t.randomize && o.randomize(), e("." + t.container, s).css({
                overflow: "hidden",
                position: "relative"
            }), o.children().css({
                position: "absolute",
                top: 0,
                left: o.children().outerWidth(),
                zIndex: 0,
                display: "none"
            }), o.css({
                position: "relative",
                width: f * 3,
                height: l,
                left: -f
            }), e("." + t.container, s).css({
                display: "block"
            }), t.autoHeight && (o.children().css({
                height: "auto"
            }), o.animate({
                height: o.children(":eq(" + c + ")").outerHeight()
            }, t.autoHeightSpeed));
            if (t.preload && o.find("img:eq(" + c + ")").length) {
                e("." + t.container, s).css({
                    background: "url(" + t.preloadImage + ") no-repeat 50% 50%"
                });
                var k = o.find("img:eq(" + c + ")").attr("src") + "?" + (new Date).getTime();
                e("img", s).parent().attr("class") != "slides_control" ? T = o.children(":eq(0)")[0].tagName.toLowerCase() : T = o.find("img:eq(" + c + ")"), o.find("img:eq(" + c + ")").attr("src", k).load(function () {
                    o.find(T + ":eq(" + c + ")").fadeIn(t.fadeSpeed, t.fadeEasing, function () {
                        e(this).css({
                            zIndex: 5
                        }), e("." + t.container, s).css({
                            background: ""
                        }), y = !0, t.slidesLoaded()
                    })
                })
            } else o.children(":eq(" + c + ")").fadeIn(t.fadeSpeed, t.fadeEasing, function () {
                y = !0, t.slidesLoaded()
            });
            t.bigTarget && (o.children().css({
                cursor: "pointer"
            }), o.children().click(function () {
                return n("next", h), !1
            })), t.hoverPause && t.play && (o.bind("mouseover", function () {
                r()
            }), o.bind("mouseleave", function () {
                i()
            })), t.generateNextPrev && (e("." + t.container, s).after('<a href="#" class="' + t.prev + '">Prev</a>'), e("." + t.prev, s).after('<a href="#" class="' + t.next + '">Next</a>')), e("." + t.next, s).click(function (e) {
                e.preventDefault(), t.play && i(), n("next", h)
            }), e("." + t.prev, s).click(function (e) {
                e.preventDefault(), t.play && i(), n("prev", h)
            }), t.generatePagination ? (t.prependPagination ? s.prepend("<ul class=" + t.paginationClass + "></ul>") : s.append("<ul class=" + t.paginationClass + "></ul>"), o.children().each(function () {
                e("." + t.paginationClass, s).append('<li><a href="#' + m + '">' + (m + 1) + "</a></li>"), m++
            })) : e("." + t.paginationClass + " li a", s).each(function () {
                e(this).attr("href", "#" + m), m++
            }), e("." + t.paginationClass + " li:eq(" + c + ")", s).addClass(t.currentClass), e("." + t.paginationClass + " li a", s).click(function () {
                return t.play && i(), E = e(this).attr("href").match("[^#/]+$"), g != E && n("pagination", p, E), !1
            }), e("a.link", s).click(function () {
                return t.play && i(), E = e(this).attr("href").match("[^#/]+$") - 1, g != E && n("pagination", p, E), !1
            }), t.play && (C = setInterval(function () {
                n("next", h)
            }, t.play), s.data("interval", C))
        })
    }, e.fn.slides.option = {
        preload: !1,
        preloadImage: "/img/loading.gif",
        container: "slides_container",
        generateNextPrev: !1,
        next: "next",
        prev: "prev",
        pagination: !0,
        generatePagination: !0,
        prependPagination: !1,
        paginationClass: "pagination",
        currentClass: "current",
        fadeSpeed: 350,
        fadeEasing: "",
        slideSpeed: 350,
        slideEasing: "",
        start: 1,
        effect: "slide",
        crossfade: !1,
        randomize: !1,
        play: 0,
        pause: 0,
        hoverPause: !1,
        autoHeight: !1,
        autoHeightSpeed: 350,
        bigTarget: !1,
        animationStart: function () {},
        animationComplete: function () {},
        slidesLoaded: function () {}
    }, e.fn.randomize = function (t) {
        function n() {
            return Math.round(Math.random()) - .5
        }
        return e(this).each(function () {
            var r = e(this),
                s = r.children(),
                o = s.length;
            if (o > 1) {
                s.hide();
                var u = [];
                for (i = 0; i < o; i++) u[u.length] = i;
                u = u.sort(n), e.each(u, function (e, n) {
                    var i = s.eq(n),
                        o = i.clone(!0);
                    o.show().appendTo(r), t !== undefined && t(i, o), i.remove()
                })
            }
        })
    }
}(jQuery),
function () {
    (function (e) {
        var t, n;
        return t = function (e) {
            var t, n, r, i, s, o, u, a;
            return document.selection ? (o = document.selection.createRange(), s = 0, o && o.parentElement() === e && (i = e.value.replace(/\r\n/g, "\n"), r = i.length, a = e.createTextRange(), a.moveToBookmark(o.getBookmark()), n = e.createTextRange(), n.collapse(!1), a.compareEndPoints("StartToEnd", n) > -1 ? u = t = r : (u = -a.moveStart("character", -r), t = -a.moveEnd("character", -r)))) : u = e.selectionStart, u
        }, n = function (e, t) {
            var n;
            return document.selection ? (n = e.createTextRange(), n.move("character", t), n.select()) : e.setSelectionRange(t, t)
        }, e.fn.caretPos = function (e) {
            var r;
            return r = this[0], r.focus(), e ? n(r, e) : t(r)
        }
    })(window.jQuery)
}.call(this),
function () {
    (function (e) {
        var t, n, r, i, s, o, u, a, f, l, c;
        return r = {
            $mirror: null,
            css: ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX"],
            init: function (t) {
                var n, r;
                return n = e("<div></div>"), r = {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    zIndex: -2e4,
                    "white-space": "pre-wrap"
                }, e.each(this.css, function (e, n) {
                    return r[n] = t.css(n)
                }), n.css(r), this.$mirror = n, t.after(n), this
            },
            setContent: function (e) {
                return this.$mirror.html(e), this
            },
            getFlagRect: function () {
                var e, t, n;
                return e = this.$mirror.find("span#flag"), t = e.position(), n = {
                    left: t.left,
                    top: t.top,
                    bottom: e.height() + t.top
                }, this.$mirror.remove(), n
            }
        }, t = function (t) {
            var s, o = this;
            return s = this.$inputor = e(t), this.options = {}, this.query = {
                text: "",
                start: 0,
                stop: 0
            }, this._cache = {}, this.pos = 0, this.flags = {}, this.theflag = null, this.search_word = {}, this.view = n, this.mirror = r, s.on("keyup.inputor", function (e) {
                var t, n;
                n = e.keyCode === 40 || e.keyCode === 38, t = !n || !o.view.isShowing();
                if (t) return o.lookup()
            }).on("mouseup.inputor", function (e) {
                return o.lookup()
            }), this.init(), i("At.new", s[0]), this
        }, t.prototype = {
            constructor: t,
            init: function () {
                var e = this;
                return this.$inputor.on("keydown.inputor", function (t) {
                    return e.onkeydown(t)
                }).on("scroll.inputor", function (t) {
                    return e.view.hide()
                }).on("blur.inputor", function (t) {
                    return e.view.hide(1e3)
                }), i("At.init", this.$inputor[0])
            },
            reg: function (t, n) {
                var r, s, o;
                return r = {}, e.isFunction(n) ? r.callback = n : r = n, o = (s = this.options)[t] || (s[t] = e.fn.atWho["default"]), this.options[t] = e.extend({}, o, r), i("At.reg", this.$inputor[0], t, n)
            },
            dataValue: function () {
                var e, t;
                return t = this.search_word[this.theflag], t ? t : (e = /data-value=["']?\$\{(\w+)\}/g.exec(this.getOpt("tpl")), this.search_word[this.theflag] = a(e) ? null : e[1])
            },
            getOpt: function (e) {
                try {
                    return this.options[this.theflag][e]
                } catch (t) {
                    return null
                }
            },
            rect: function () {
                var t, n, r, i, s, o, u, a, f, l;
                return t = this.$inputor, document.selection ? (n = document.selection.createRange(), f = n.boundingLeft + t.scrollLeft(), l = n.boundingTop + e(window).scrollTop() + t.scrollTop(), i = l + n.boundingHeight, {
                    top: l - 2,
                    left: f - 2,
                    bottom: i - 2
                }) : (s = function (e) {
                    return e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/`/g, "&#96").replace(/"/g, "&quot").replace(/\r\n|\r|\n/g, "<br />")
                }, a = t.val().slice(0, this.pos - 1), o = "<span>" + s(a) + "</span>", o += "<span id='flag'>@</span>", u = t.offset(), r = this.mirror.init(t).setContent(o).getFlagRect(), f = u.left + r.left - t.scrollLeft(), l = u.top - t.scrollTop(), i = l + r.bottom, l += r.top, {
                    top: l,
                    left: f,
                    bottom: i + 2
                })
            },
            cache: function (e) {
                var t, n;
                return t = this.query.text, !this.getOpt("cache") || !t ? null : (n = this._cache)[t] || (n[t] = e)
            },
            getKeyname: function () {
                var t, n, r, s, o, u, f, l, c = this;
                return t = this.$inputor, l = t.val(), n = t.caretPos(), f = l.slice(0, n), o = null, e.each(this.options, function (e) {
                    var t, n;
                    n = new RegExp(e + "([A-Za-z0-9_+-]*)$|" + e + "([^\\x00-\\xff]*)$", "gi"), t = n.exec(f);
                    if (!a(t)) return o = t[1] === void 0 ? t[2] : t[1], c.theflag = e, !1
                }), typeof o == "string" && o.length <= 20 ? (u = n - o.length, r = u + o.length, this.pos = u, s = {
                    text: o.toLowerCase(),
                    start: u,
                    end: r
                }) : this.view.hide(), i("At.getKeyname", s), this.query = s
            },
            replaceStr: function (e) {
                var t, n, r, s, o;
                return t = this.$inputor, n = this.query, r = t.val(), s = r.slice(0, n.start), o = s + e + r.slice(n.end), t.val(o), t.caretPos(s.length + e.length), t.change(), i("At.replaceStr", o)
            },
            onkeydown: function (t) {
                var n;
                n = this.view;
                if (!n.isShowing()) return;
                switch (t.keyCode) {
                    case 38:
                        t.preventDefault(), n.prev();
                        break;
                    case 40:
                        t.preventDefault(), n.next();
                        break;
                    case 9:
                    case 13:
                        if (!n.isShowing()) return;
                        t.preventDefault(), n.choose();
                        break;
                    default:
                        e.noop()
                }
                return t.stopPropagation()
            },
            renderView: function (e) {
                return i("At.renderView", this, e), e = e.splice(0, this.getOpt("limit")), e = c(e, this.dataValue()), e = f(e), e = l.call(this, e), this.view.render(this, e)
            },
            lookup: function () {
                var t, n, r;
                return r = this.getKeyname(), r ? (i("At.lookup.key", r), a(n = this.cache()) ? a(n = this.lookupWithData(r)) ? e.isFunction(t = this.getOpt("callback")) ? t(r.text, e.proxy(this.renderView, this)) : this.view.hide() : this.renderView(n) : this.renderView(n), e.noop()) : !1
            },
            lookupWithData: function (t) {
                var n, r, i = this;
                return n = this.getOpt("data"), e.isArray(n) && n.length !== 0 && (r = e.map(n, function (n, r) {
                    var s, o, u;
                    try {
                        o = e.isPlainObject(n) ? n[i.dataValue()] : n, u = new RegExp(t.text.replace("+", "\\+"), "i"), s = o.match(u)
                    } catch (a) {
                        return null
                    }
                    return s ? n : null
                })), r
            }
        }, n = {
            timeout_id: null,
            id: "#at-view",
            holder: null,
            _jqo: null,
            jqo: function () {
                var t;
                return t = this._jqo, t = a(t) ? this._jqo = e(this.id) : t
            },
            init: function () {
                var t, n, r = this;
                if (!a(this.jqo())) return;
                return n = "<div id='" + this.id.slice(1) + "' class='at-view'><ul id='" + this.id.slice(1) + "-ul'></ul></div>", e("body").append(n), t = this.jqo().find("ul"), t.on("mouseenter.view", "li", function (n) {
                    return t.find(".cur").removeClass("cur"), e(n.currentTarget).addClass("cur")
                }).on("click", function (e) {
                    return e.stopPropagation(), e.preventDefault(), r.choose()
                })
            },
            isShowing: function () {
                return this.jqo().is(":visible")
            },
            choose: function () {
                var e, t;
                return e = this.jqo().find(".cur"), t = a(e) ? this.holder.query.text + " " : e.attr(this.holder.getOpt("choose")) + " ", this.holder.replaceStr(t), this.hide()
            },
            rePosition: function () {
                var t;
                return t = this.holder.rect(), t.bottom + this.jqo().height() - e(window).scrollTop() > e(window).height() && (t.bottom = t.top - this.jqo().height()), i("AtView.rePosition", {
                    left: t.left,
                    top: t.bottom
                }), this.jqo().offset({
                    left: t.left,
                    top: t.bottom
                })
            },
            next: function () {
                var t, n;
                return t = this.jqo().find(".cur").removeClass("cur"), n = t.next(), n.length || (n = e(this.jqo().find("li")[0])), n.addClass("cur")
            },
            prev: function () {
                var e, t;
                return e = this.jqo().find(".cur").removeClass("cur"), t = e.prev(), t.length || (t = this.jqo().find("li").last()), t.addClass("cur")
            },
            show: function () {
                return this.isShowing() || this.jqo().show(), this.rePosition()
            },
            hide: function (e) {
                var t, n = this;
                if (!isNaN(e)) return t = function () {
                    return n.hide()
                }, clearTimeout(this.timeout_id), this.timeout_id = setTimeout(t, 300);
                if (this.isShowing()) return this.jqo().hide()
            },
            clear: function (e) {
                return e === !0 && (this._cache = {}), this.jqo().find("ul").empty()
            },
            render: function (t, n) {
                var r, a;
                return e.isArray(n) ? n.length <= 0 ? (this.hide(), !0) : (this.holder = t, t.cache(n), this.clear(), r = this.jqo().find("ul"), a = t.getOpt("tpl"), e.each(n, function (e, n) {
                    var f;
                    return a || (a = s), f = o(a, n), i("AtView.render", f), r.append(u(f, t.query.text))
                }), this.show(), r.find("li:eq(0)").addClass("cur")) : !1
            }
        }, f = function (t) {
            return e.map(t, function (t, n) {
                return e.isPlainObject(t) || (t = {
                    id: n,
                    name: t
                }), t
            })
        }, o = function (e, t) {
            var n;
            try {
                return n = e.replace(/\$\{([^\}]*)\}/g, function (e, n, r) {
                    return t[n]
                })
            } catch (r) {
                return ""
            }
        }, u = function (e, t) {
            return a(t) ? e : e.replace(new RegExp(">\\s*(\\w*)(" + t.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), function (e, t, n, r) {
                return "> " + t + "<strong>" + n + "</strong>" + r + " <"
            })
        }, l = function (e) {
            var t, n, r, i, s, o, u;
            t = this.dataValue(), r = this.query.text, i = [];
            for (o = 0, u = e.length; o < u; o++) {
                n = e[o], s = n[t];
                if (s.toLowerCase().indexOf(r) === -1) continue;
                n.order = s.toLowerCase().indexOf(r), i.push(n)
            }
            return i.sort(function (e, t) {
                return e.order - t.order
            }), i
        }, c = function (t, n) {
            var r;
            return r = [], e.map(t, function (t, i) {
                var s;
                s = e.isPlainObject(t) ? t[n] : t;
                if (e.inArray(s, r) < 0) return r.push(s), t
            })
        }, a = function (t) {
            return !t || e.isPlainObject(t) && e.isEmptyObject(t) || e.isArray(t) && t.length === 0 || t instanceof e && t.length === 0 || t === void 0
        }, s = "<li id='${id}' data-value='${name}'>${name}</li>", i = function () {}, e.fn.atWho = function (r, i) {
            return n.init(), this.filter("textarea, input").each(function () {
                var n, s;
                return n = e(this), s = n.data("AtWho"), s || n.data("AtWho", s = new t(this)), s.reg(r, i)
            })
        }, e.fn.atWho["default"] = {
            data: [],
            choose: "data-value",
            callback: null,
            cache: !0,
            limit: 5,
            tpl: s
        }
    })(window.jQuery)
}.call(this), ! function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function () {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                r = t.attr("data-target"),
                i, s, o;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active")) return;
            i = n.find(".active:last a")[0], o = e.Event("show", {
                relatedTarget: i
            }), t.trigger(o);
            if (o.isDefaultPrevented()) return;
            s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                t.trigger({
                    type: "shown",
                    relatedTarget: i
                })
            })
        },
        activate: function (t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }
            var i = n.find("> .active"),
                s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
        return e.fn.tab = n, this
    }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var t = this,
                n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented()) return;
            this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            })
        },
        hide: function (t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide"), this.$element.trigger(t);
            if (!this.isShown || t.isDefaultPrevented()) return;
            this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function () {
            var t = this;
            e(document).on("focusin.modal", function (e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        },
        escape: function () {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {
                t.which == 27 && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var t = this,
                n = setTimeout(function () {
                    t.$element.off(e.support.transition.end), t.hideModal()
                }, 500);
            this.$element.one(e.support.transition.end, function () {
                clearTimeout(n), t.hideModal()
            })
        },
        hideModal: function (e) {
            this.$element.hide().trigger("hidden"), this.backdrop()
        },
        removeBackdrop: function () {
            this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (t) {
            var n = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("modal"),
                s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
        return e.fn.modal = n, this
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = i.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        t.preventDefault(), i.modal(s).one("hide", function () {
            n.focus()
        })
    })
}(window.jQuery),
function () {
    window.SocialShareButton = {
        openUrl: function (e) {
            return window.open(e), !1
        },
        share: function (e) {
            var t, n, r, i;
            n = $(e).data("site"), r = encodeURIComponent($(e).parent().data("title")), t = encodeURIComponent($(e).parent().data("img")), i = encodeURIComponent(location.href);
            switch (n) {
                case "weibo":
                    SocialShareButton.openUrl("http://v.t.sina.com.cn/share/share.php?url=" + i + "&pic=" + t + "&title=" + r + "&content=utf-8");
                    break;
                case "twitter":
                    SocialShareButton.openUrl("https://twitter.com/home?status=" + r + ": " + i);
                    break;
                case "douban":
                    SocialShareButton.openUrl("http://www.douban.com/recommend/?url=" + i + "&title=" + r + "&image=" + t);
                    break;
                case "facebook":
                    SocialShareButton.openUrl("http://www.facebook.com/sharer.php?t=" + r + "&u=" + i);
                    break;
                case "qq":
                    SocialShareButton.openUrl("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + i + "&title=" + r + "&pics=" + t);
                    break;
                case "tqq":
                    SocialShareButton.openUrl("http://share.v.t.qq.com/index.php?c=share&a=index&url=" + i + "&title=" + r + "&pic=" + t);
                    break;
                case "baidu":
                    SocialShareButton.openUrl("http://apps.hi.baidu.com/share/?url=" + i + "&title=" + r + "&content=");
                    break;
                case "kaixin001":
                    SocialShareButton.openUrl("http://www.kaixin001.com/rest/records.php?url=" + i + "&content=" + r + "&style=11&pic=" + t);
                    break;
                case "renren":
                    SocialShareButton.openUrl("http://widget.renren.com/dialog/share?resourceUrl=" + i + "&title=" + r + "&description=");
                    break;
                case "google_plus":
                    SocialShareButton.openUrl("https://plus.google.com/share?url=" + i + "&t=" + r);
                    break;
                case "google_bookmark":
                    SocialShareButton.openUrl("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + i + "&title=" + r)
            }
            return !1
        }
    }
}.call(this),
function (e) {
    function t(t, r, i) {
        var s = this;
        return this.on("click.pjax", t, function (t) {
            var o = e.extend({}, h(r, i));
            o.container || (o.container = e(this).attr("data-pjax") || s), n(t, o)
        })
    }
    function n(t, n, r) {
        r = h(n, r);
        var s = t.currentTarget;
        if (s.tagName.toUpperCase() !== "A") throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        if (location.protocol !== s.protocol || location.host !== s.host) return;
        if (s.hash && s.href.replace(s.hash, "") === location.href.replace(location.hash, "")) return;
        if (s.href === location.href + "#") return;
        var o = {
            url: s.href,
            container: e(s).attr("data-pjax"),
            target: s,
            fragment: null
        };
        i(e.extend({}, o, r)), t.preventDefault()
    }
    function r(t, n, r) {
        r = h(n, r);
        var s = t.currentTarget;
        if (s.tagName.toUpperCase() !== "FORM") throw "$.pjax.submit requires a form element";
        var o = {
            type: s.method,
            url: s.action,
            data: e(s).serializeArray(),
            container: e(s).attr("data-pjax"),
            target: s,
            fragment: null,
            timeout: 0
        };
        i(e.extend({}, o, r)), t.preventDefault()
    }
    function i(t) {
        function u(t, r) {
            var i = e.Event(t, {
                relatedTarget: n
            });
            return s.trigger(i, r), !i.isDefaultPrevented()
        }
        t = e.extend(!0, {}, e.ajaxSettings, i.defaults, t), e.isFunction(t.url) && (t.url = t.url());
        var n = t.target,
            r = c(t.url).hash,
            s = t.context = p(t.container);
        t.data || (t.data = {}), t.data._pjax = s.selector;
        var a;
        t.beforeSend = function (e, n) {
            n.type !== "GET" && (n.timeout = 0), n.timeout > 0 && (a = setTimeout(function () {
                u("pjax:timeout", [e, t]) && e.abort("timeout")
            }, n.timeout), n.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", s.selector);
            var r;
            if (!u("pjax:beforeSend", [e, n])) return !1;
            t.requestUrl = c(n.url).href
        }, t.complete = function (e, n) {
            a && clearTimeout(a), u("pjax:complete", [e, n, t]), u("pjax:end", [e, t])
        }, t.error = function (e, n, r) {
            var i = v("", e, t),
                s = u("pjax:error", [e, n, r, t]);
            t.type == "GET" && n !== "abort" && s && o(i.url)
        }, t.success = function (n, a, l) {
            var h = v(n, l, t);
            if (!h.contents) {
                o(h.url);
                return
            }
            i.state = {
                id: t.id || f(),
                url: h.url,
                title: h.title,
                container: s.selector,
                fragment: t.fragment,
                timeout: t.timeout
            }, (t.push || t.replace) && window.history.replaceState(i.state, h.title, h.url), h.title && (document.title = h.title), s.html(h.contents), typeof t.scrollTo == "number" && e(window).scrollTop(t.scrollTo), (t.replace || t.push) && window._gaq && _gaq.push(["_trackPageview"]);
            if (r !== "") {
                var p = c(h.url);
                p.hash = r, i.state.url = p.href, window.history.replaceState(i.state, h.title, p.href);
                var d = e(p.hash);
                d.length && e(window).scrollTop(d.offset().top)
            }
            u("pjax:success", [n, a, l, t])
        }, i.state || (i.state = {
            id: f(),
            url: window.location.href,
            title: document.title,
            container: s.selector,
            fragment: t.fragment,
            timeout: t.timeout
        }, window.history.replaceState(i.state, document.title));
        var h = i.xhr;
        h && h.readyState < 4 && (h.onreadystatechange = e.noop, h.abort()), i.options = t;
        var h = i.xhr = e.ajax(t);
        return h.readyState > 0 && (t.push && !t.replace && (b(i.state.id, s.clone().contents()), window.history.pushState(null, "", l(t.requestUrl))), u("pjax:start", [h, t]), u("pjax:send", [h, t])), i.xhr
    }
    function s(t, n) {
        var r = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return i(e.extend(r, h(t, n)))
    }
    function o(e) {
        window.history.replaceState(null, "", "#"), window.location.replace(e)
    }
    function u(t) {
        var n = t.state;
        if (n && n.container) {
            var r = e(n.container);
            if (r.length) {
                var s = m[n.id];
                if (i.state) {
                    var u = i.state.id < n.id ? "forward" : "back";
                    w(u, i.state.id, r.clone().contents())
                }
                var a = e.Event("pjax:popstate", {
                    state: n,
                    direction: u
                });
                r.trigger(a);
                var f = {
                    id: n.id,
                    url: n.url,
                    container: r,
                    push: !1,
                    fragment: n.fragment,
                    timeout: n.timeout,
                    scrollTo: !1
                };
                s ? (r.trigger("pjax:start", [null, f]), n.title && (document.title = n.title), r.html(s), i.state = n, r.trigger("pjax:end", [null, f])) : i(f), r[0].offsetHeight
            } else o(location.href)
        }
    }
    function a(t) {
        var n = e.isFunction(t.url) ? t.url() : t.url,
            r = t.type ? t.type.toUpperCase() : "GET",
            i = e("<form>", {
                method: r === "GET" ? "GET" : "POST",
                action: n,
                style: "display:none"
            });
        r !== "GET" && r !== "POST" && i.append(e("<input>", {
            type: "hidden",
            name: "_method",
            value: r.toLowerCase()
        }));
        var s = t.data;
        if (typeof s == "string") e.each(s.split("&"), function (t, n) {
            var r = n.split("=");
            i.append(e("<input>", {
                type: "hidden",
                name: r[0],
                value: r[1]
            }))
        });
        else if (typeof s == "object") for (key in s) i.append(e("<input>", {
            type: "hidden",
            name: key,
            value: s[key]
        }));
        e(document.body).append(i), i.submit()
    }
    function f() {
        return (new Date).getTime()
    }
    function l(e) {
        return e.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }
    function c(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }
    function h(t, n) {
        return t && n ? n.container = t : e.isPlainObject(t) ? n = t : n = {
            container: t
        }, n.container && (n.container = p(n.container)), n
    }
    function p(t) {
        t = e(t);
        if (!t.length) throw "no pjax container for " + t.selector;
        if (t.selector !== "" && t.context === document) return t;
        if (t.attr("id")) return e("#" + t.attr("id"));
        throw "cant get selector for pjax container!"
    }
    function d(e, t) {
        return e.filter(t).add(e.find(t))
    }
    function v(t, n, r) {
        var i = {};
        i.url = l(n.getResponseHeader("X-PJAX-URL") || r.requestUrl);
        if (/<html/i.test(t)) var s = e(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),
            o = e(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);
        else var s = o = e(t);
        if (o.length === 0) return i;
        i.title = d(s, "title").last().text();
        if (r.fragment) {
            if (r.fragment === "body") var u = o;
            else var u = d(o, r.fragment).first();
            u.length && (i.contents = u.contents(), i.title || (i.title = u.attr("title") || u.data("title")))
        } else /<html/i.test(t) || (i.contents = o);
        return i.contents && (i.contents = i.contents.not("title"), i.contents.find("title").remove()), i.title && (i.title = e.trim(i.title)), i
    }
    function b(e, t) {
        m[e] = t, y.push(e);
        while (g.length) delete m[g.shift()];
        while (y.length > i.defaults.maxCacheLength) delete m[y.shift()]
    }
    function w(e, t, n) {
        var r, i;
        m[t] = n, e === "forward" ? (r = y, i = g) : (r = g, i = y), r.push(t), (t = i.pop()) && delete m[t]
    }
    function E() {
        e.fn.pjax = t, e.pjax = i, e.pjax.enable = e.noop, e.pjax.disable = S, e.pjax.click = n, e.pjax.submit = r, e.pjax.reload = s, e.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20
        }, e(window).bind("popstate.pjax", u)
    }
    function S() {
        e.fn.pjax = function () {
            return this
        }, e.pjax = a, e.pjax.enable = E, e.pjax.disable = e.noop, e.pjax.click = e.noop, e.pjax.submit = e.noop, e.pjax.reload = function () {
            window.location.reload()
        }, e(window).unbind("popstate.pjax", u)
    }
    var m = {}, g = [],
        y = [];
    e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), e.support.pjax ? E() : S()
}(jQuery),
function (e) {
    function n() {
        return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
    }
    function r() {
        var e = require("util");
        return "Markdown.mk_block( " + e.inspect(this.toString()) + ", " + e.inspect(this.trailing) + ", " + e.inspect(this.lineNumber) + " )"
    }
    function s(e) {
        var t = 0,
            n = -1;
        while ((n = e.indexOf("\n", n + 1)) !== -1) t++;
        return t
    }
    function o(e, t) {
        function i(e) {
            this.len_after = e, this.name = "close_" + t
        }
        var n = e + "_state",
            r = e == "strong" ? "em_state" : "strong_state";
        return function (s, o) {
            if (this[n][0] == t) return this[n].shift(), [s.length, new i(s.length - t.length)];
            var u = this[r].slice(),
                a = this[n].slice();
            this[n].unshift(t);
            var f = this.processInline(s.substr(t.length)),
                l = f[f.length - 1],
                c = this[n].shift();
            if (l instanceof i) {
                f.pop();
                var h = s.length - l.len_after;
                return [h, [e].concat(f)]
            }
            return this[r] = u, this[n] = a, [t.length, t]
        }
    }
    function u(e) {
        var t = e.split(""),
            n = [""],
            r = !1;
        while (t.length) {
            var i = t.shift();
            switch (i) {
                case " ":
                    r ? n[n.length - 1] += i : n.push("");
                    break;
                case "'":
                case '"':
                    r = !r;
                    break;
                case "\\":
                    i = t.shift();
                default:
                    n[n.length - 1] += i
            }
        }
        return n
    }
    function c(e) {
        return f(e) && e.length > 1 && typeof e[1] == "object" && !f(e[1]) ? e[1] : undefined
    }
    function h(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function d(e) {
        if (typeof e == "string") return h(e);
        var t = e.shift(),
            n = {}, r = [];
        e.length && typeof e[0] == "object" && !(e[0] instanceof Array) && (n = e.shift());
        while (e.length) r.push(arguments.callee(e.shift()));
        var i = "";
        for (var s in n) i += " " + s + '="' + h(n[s]) + '"';
        return t == "img" || t == "br" || t == "hr" ? "<" + t + i + "/>" : "<" + t + i + ">" + r.join("") + "</" + t + ">"
    }
    function v(e, t, n) {
        var r;
        n = n || {};
        var i = e.slice(0);
        typeof n.preprocessTreeNode == "function" && (i = n.preprocessTreeNode(i, t));
        var s = c(i);
        if (s) {
            i[1] = {};
            for (r in s) i[1][r] = s[r];
            s = i[1]
        }
        if (typeof i == "string") return i;
        switch (i[0]) {
            case "header":
                i[0] = "h" + i[1].level, delete i[1].level;
                break;
            case "bulletlist":
                i[0] = "ul";
                break;
            case "numberlist":
                i[0] = "ol";
                break;
            case "listitem":
                i[0] = "li";
                break;
            case "para":
                i[0] = "p";
                break;
            case "markdown":
                i[0] = "html", s && delete s.references;
                break;
            case "code_block":
                i[0] = "pre", r = s ? 2 : 1;
                var o = ["code"];
                o.push.apply(o, i.splice(r)), i[r] = o;
                break;
            case "inlinecode":
                i[0] = "code";
                break;
            case "img":
                i[1].src = i[1].href, delete i[1].href;
                break;
            case "linebreak":
                i[0] = "br";
                break;
            case "link":
                i[0] = "a";
                break;
            case "link_ref":
                i[0] = "a";
                var u = t[s.ref];
                if (!u) return s.original;
                delete s.ref, s.href = u.href, u.title && (s.title = u.title), delete s.original;
                break;
            case "img_ref":
                i[0] = "img";
                var u = t[s.ref];
                if (!u) return s.original;
                delete s.ref, s.src = u.href, u.title && (s.title = u.title), delete s.original
        }
        r = 1;
        if (s) {
            for (var a in i[1]) r = 2;
            r === 1 && i.splice(r, 1)
        }
        for (; r < i.length; ++r) i[r] = arguments.callee(i[r], t, n);
        return i
    }
    function m(e) {
        var t = c(e) ? 2 : 1;
        while (t < e.length) typeof e[t] == "string" ? t + 1 < e.length && typeof e[t + 1] == "string" ? e[t] += e.splice(t + 1, 1)[0] : ++t : (arguments.callee(e[t]), ++t)
    }
    var t = e.Markdown = function g(e) {
        switch (typeof e) {
            case "undefined":
                this.dialect = g.dialects.Gruber;
                break;
            case "object":
                this.dialect = e;
                break;
            default:
                if (!(e in g.dialects)) throw new Error("Unknown Markdown dialect '" + String(e) + "'");
                this.dialect = g.dialects[e]
        }
        this.em_state = [], this.strong_state = [], this.debug_indent = ""
    };
    e.parse = function (e, n) {
        var r = new t(n);
        return r.toTree(e)
    }, e.toHTML = function (n, r, i) {
        var s = e.toHTMLTree(n, r, i);
        return e.renderJsonML(s)
    }, e.toHTMLTree = function (t, n, r) {
        typeof t == "string" && (t = this.parse(t, n));
        var i = c(t),
            s = {};
        i && i.references && (s = i.references);
        var o = v(t, s, r);
        return m(o), o
    };
    var i = t.mk_block = function (e, t, i) {
        arguments.length == 1 && (t = "\n\n");
        var s = new String(e);
        return s.trailing = t, s.inspect = r, s.toSource = n, i != undefined && (s.lineNumber = i), s
    };
    t.prototype.split_blocks = function (t, n) {
        var r = /([\s\S]+?)($|\n(?:\s*\n|$)+)/g,
            o = [],
            u, a = 1;
        (u = /^(\s*\n)/.exec(t)) != null && (a += s(u[0]), r.lastIndex = u[0].length);
        while ((u = r.exec(t)) !== null) o.push(i(u[1], u[2], a)), a += s(u[0]);
        return o
    }, t.prototype.processBlock = function (t, n) {
        var r = this.dialect.block,
            i = r.__order__;
        if ("__call__" in r) return r.__call__.call(this, t, n);
        for (var s = 0; s < i.length; s++) {
            var o = r[i[s]].call(this, t, n);
            if (o) return (!f(o) || o.length > 0 && !f(o[0])) && this.debug(i[s], "didn't return a proper array"), o
        }
        return []
    }, t.prototype.processInline = function (t) {
        return this.dialect.inline.__call__.call(this, String(t))
    }, t.prototype.toTree = function (t, n) {
        var r = t instanceof Array ? t : this.split_blocks(t),
            i = this.tree;
        try {
            this.tree = n || this.tree || ["markdown"];
            e: while (r.length) {
                var s = this.processBlock(r.shift(), r);
                if (!s.length) continue e;
                this.tree.push.apply(this.tree, s)
            }
            return this.tree
        } finally {
            n && (this.tree = i)
        }
    }, t.prototype.debug = function () {
        var e = Array.prototype.slice.call(arguments);
        e.unshift(this.debug_indent), typeof print != "undefined" && print.apply(print, e), typeof console != "undefined" && typeof console.log != "undefined" && console.log.apply(null, e)
    }, t.prototype.loop_re_over_block = function (e, t, n) {
        var r, i = t.valueOf();
        while (i.length && (r = e.exec(i)) != null) i = i.substr(r[0].length), n.call(this, r);
        return i
    }, t.dialects = {}, t.dialects.Gruber = {
        block: {
            atxHeader: function (t, n) {
                var r = t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                if (!r) return undefined;
                var s = ["header", {
                    level: r[1].length
                }];
                return Array.prototype.push.apply(s, this.processInline(r[2])), r[0].length < t.length && n.unshift(i(t.substr(r[0].length), t.trailing, t.lineNumber + 2)), [s]
            },
            setextHeader: function (t, n) {
                var r = t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                if (!r) return undefined;
                var s = r[2] === "=" ? 1 : 2,
                    o = ["header", {
                        level: s
                    },
                    r[1]];
                return r[0].length < t.length && n.unshift(i(t.substr(r[0].length), t.trailing, t.lineNumber + 2)), [o]
            },
            code: function (t, n) {
                var r = [],
                    s = /^(?: {0,3}\t| {4})(.*)\n?/,
                    o;
                if (!t.match(s)) return undefined;
                e: do {
                    var u = this.loop_re_over_block(s, t.valueOf(), function (e) {
                        r.push(e[1])
                    });
                    if (u.length) {
                        n.unshift(i(u, t.trailing));
                        break e
                    }
                    if (!n.length) break e;
                    if (!n[0].match(s)) break e;
                    r.push(t.trailing.replace(/[^\n]/g, "").substring(2)), t = n.shift()
                } while (!0);
                return [["code_block", r.join("\n")]]
            },
            horizRule: function (t, n) {
                var r = t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
                if (!r) return undefined;
                var s = [
                    ["hr"]
                ];
                return r[1] && s.unshift.apply(s, this.processBlock(r[1], [])), r[3] && n.unshift(i(r[3])), s
            },
            lists: function () {
                function o(t) {
                    return new RegExp("(?:^(" + s + "{0," + t + "} {0,3})(" + e + ")\\s+)|" + "(^" + s + "{0," + (t - 1) + "}[ ]{0,4})")
                }
                function u(e) {
                    return e.replace(/ {0,3}\t/g, "    ")
                }
                function a(e, t, n, r) {
                    if (t) {
                        e.push(["para"].concat(n));
                        return
                    }
                    var i = e[e.length - 1] instanceof Array && e[e.length - 1][0] == "para" ? e[e.length - 1] : e;
                    r && e.length > 1 && n.unshift(r);
                    for (var s = 0; s < n.length; s++) {
                        var o = n[s],
                            u = typeof o == "string";
                        u && i.length > 1 && typeof i[i.length - 1] == "string" ? i[i.length - 1] += o : i.push(o)
                    }
                }
                function f(e, t) {
                    var n = new RegExp("^(" + s + "{" + e + "}.*?\\n?)*$"),
                        r = new RegExp("^" + s + "{" + e + "}", "gm"),
                        o = [];
                    while (t.length > 0) {
                        if (n.exec(t[0])) {
                            var u = t.shift(),
                                a = u.replace(r, "");
                            o.push(i(a, u.trailing, u.lineNumber))
                        }
                        break
                    }
                    return o
                }
                function c(e, t, n) {
                    var r = e.list,
                        i = r[r.length - 1];
                    if (i[1] instanceof Array && i[1][0] == "para") return;
                    if (t + 1 == n.length) i.push(["para"].concat(i.splice(1)));
                    else {
                        var s = i.pop();
                        i.push(["para"].concat(i.splice(1)), s)
                    }
                }
                var e = "[*+-]|\\d+\\.",
                    t = /[*+-]/,
                    n = /\d+\./,
                    r = new RegExp("^( {0,3})(" + e + ")[ 	]+"),
                    s = "(?: {0,3}\\t| {4})";
                return function (e, n) {
                    function s(e) {
                        var n = t.exec(e[2]) ? ["bulletlist"] : ["numberlist"];
                        return h.push({
                            list: n,
                            indent: e[1]
                        }), n
                    }
                    var i = e.match(r);
                    if (!i) return undefined;
                    var h = [],
                        p = s(i),
                        d, v = !1,
                        m = [h[0].list],
                        g;
                    e: for (;;) {
                        var y = e.split(/(?=\n)/),
                            b = "";
                        for (var w = 0; w < y.length; w++) {
                            var E = "",
                                S = y[w].replace(/^\n/, function (e) {
                                    return E = e, ""
                                }),
                                x = o(h.length);
                            i = S.match(x);
                            if (i[1] !== undefined) {
                                b.length && (a(d, v, this.processInline(b), E), v = !1, b = ""), i[1] = u(i[1]);
                                var T = Math.floor(i[1].length / 4) + 1;
                                if (T > h.length) p = s(i), d.push(p), d = p[1] = ["listitem"];
                                else {
                                    var N = !1;
                                    for (g = 0; g < h.length; g++) {
                                        if (h[g].indent != i[1]) continue;
                                        p = h[g].list, h.splice(g + 1), N = !0;
                                        break
                                    }
                                    N || (T++, T <= h.length ? (h.splice(T), p = h[T - 1].list) : (p = s(i), d.push(p))), d = ["listitem"], p.push(d)
                                }
                                E = ""
                            }
                            S.length > i[0].length && (b += E + S.substr(i[0].length))
                        }
                        b.length && (a(d, v, this.processInline(b), E), v = !1, b = "");
                        var C = f(h.length, n);
                        C.length > 0 && (l(h, c, this), d.push.apply(d, this.toTree(C, [])));
                        var k = n[0] && n[0].valueOf() || "";
                        if (k.match(r) || k.match(/^ /)) {
                            e = n.shift();
                            var L = this.dialect.block.horizRule(e, n);
                            if (L) {
                                m.push.apply(m, L);
                                break
                            }
                            l(h, c, this), v = !0;
                            continue e
                        }
                        break
                    }
                    return m
                }
            }(),
            blockquote: function (t, n) {
                if (!t.match(/^>/m)) return undefined;
                var r = [];
                if (t[0] != ">") {
                    var i = t.split(/\n/),
                        s = [];
                    while (i.length && i[0][0] != ">") s.push(i.shift());
                    t = i.join("\n"), r.push.apply(r, this.processBlock(s.join("\n"), []))
                }
                while (n.length && n[0][0] == ">") {
                    var o = n.shift();
                    t = new String(t + t.trailing + o), t.trailing = o.trailing
                }
                var u = t.replace(/^> ?/gm, ""),
                    a = this.tree;
                return r.push(this.toTree(u, ["blockquote"])), r
            },
            referenceDefn: function (t, n) {
                var r = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                if (!t.match(r)) return undefined;
                c(this.tree) || this.tree.splice(1, 0, {});
                var s = c(this.tree);
                s.references === undefined && (s.references = {});
                var o = this.loop_re_over_block(r, t, function (e) {
                    e[2] && e[2][0] == "<" && e[2][e[2].length - 1] == ">" && (e[2] = e[2].substring(1, e[2].length - 1));
                    var t = s.references[e[1].toLowerCase()] = {
                        href: e[2]
                    };
                    e[4] !== undefined ? t.title = e[4] : e[5] !== undefined && (t.title = e[5])
                });
                return o.length && n.unshift(i(o, t.trailing)), []
            },
            para: function (t, n) {
                return [["para"].concat(this.processInline(t))]
            }
        }
    }, t.dialects.Gruber.inline = {
        __oneElement__: function (t, n, r) {
            var i, s, o = 0;
            n = n || this.dialect.inline.__patterns__;
            var u = new RegExp("([\\s\\S]*?)(" + (n.source || n) + ")");
            i = u.exec(t);
            if (!i) return [t.length, t];
            if (i[1]) return [i[1].length, i[1]];
            var s;
            return i[2] in this.dialect.inline && (s = this.dialect.inline[i[2]].call(this, t.substr(i.index), i, r || [])), s = s || [i[2].length, i[2]], s
        },
        __call__: function (t, n) {
            function s(e) {
                typeof e == "string" && typeof r[r.length - 1] == "string" ? r[r.length - 1] += e : r.push(e)
            }
            var r = [],
                i;
            while (t.length > 0) i = this.dialect.inline.__oneElement__.call(this, t, n, r), t = t.substr(i.shift()), l(i, s);
            return r
        },
        "]": function () {},
        "}": function () {},
        "\\": function (t) {
            return t.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/) ? [2, t[1]] : [1, "\\"]
        },
        "![": function (t) {
            var n = t.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
            if (n) {
                n[2] && n[2][0] == "<" && n[2][n[2].length - 1] == ">" && (n[2] = n[2].substring(1, n[2].length - 1)), n[2] = this.dialect.inline.__call__.call(this, n[2], /\\/)[0];
                var r = {
                    alt: n[1],
                    href: n[2] || ""
                };
                return n[4] !== undefined && (r.title = n[4]), [n[0].length, ["img", r]]
            }
            return n = t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/), n ? [n[0].length, ["img_ref", {
                alt: n[1],
                ref: n[2].toLowerCase(),
                original: n[0]
            }]] : [2, "!["]
        },
        "[": function y(e) {
            var n = String(e),
                r = t.DialectHelpers.inline_until_char.call(this, e.substr(1), "]");
            if (!r) return [1, "["];
            var i = 1 + r[0],
                s = r[1],
                y, o;
            e = e.substr(i);
            var u = e.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
            if (u) {
                var a = u[1];
                i += u[0].length, a && a[0] == "<" && a[a.length - 1] == ">" && (a = a.substring(1, a.length - 1));
                if (!u[3]) {
                    var f = 1;
                    for (var l = 0; l < a.length; l++) switch (a[l]) {
                        case "(":
                            f++;
                            break;
                        case ")":
                            --f == 0 && (i -= a.length - l, a = a.substring(0, l))
                    }
                }
                return a = this.dialect.inline.__call__.call(this, a, /\\/)[0], o = {
                    href: a || ""
                }, u[3] !== undefined && (o.title = u[3]), y = ["link", o].concat(s), [i, y]
            }
            return u = e.match(/^\s*\[(.*?)\]/), u ? (i += u[0].length, o = {
                ref: (u[1] || String(s)).toLowerCase(),
                original: n.substr(0, i)
            }, y = ["link_ref", o].concat(s), [i, y]) : s.length == 1 && typeof s[0] == "string" ? (o = {
                ref: s[0].toLowerCase(),
                original: n.substr(0, i)
            }, y = ["link_ref", o, s[0]], [i, y]) : [1, "["]
        },
        "<": function (t) {
            var n;
            return (n = t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) != null ? n[3] ? [n[0].length, ["link", {
                href: "mailto:" + n[3]
            },
            n[3]]] : n[2] == "mailto" ? [n[0].length, ["link", {
                href: n[1]
            },
            n[1].substr("mailto:".length)]] : [n[0].length, ["link", {
                href: n[1]
            },
            n[1]]] : [1, "<"]
        },
        "`": function (t) {
            var n = t.match(/(`+)(([\s\S]*?)\1)/);
            return n && n[2] ? [n[1].length + n[2].length, ["inlinecode", n[3]]] : [1, "`"]
        },
        "  \n": function (t) {
            return [3, ["linebreak"]]
        }
    }, t.dialects.Gruber.inline["**"] = o("strong", "**"), t.dialects.Gruber.inline.__ = o("strong", "__"), t.dialects.Gruber.inline["*"] = o("em", "*"), t.dialects.Gruber.inline._ = o("em", "_"), t.buildBlockOrder = function (e) {
        var t = [];
        for (var n in e) {
            if (n == "__order__" || n == "__call__") continue;
            t.push(n)
        }
        e.__order__ = t
    }, t.buildInlinePatterns = function (e) {
        var t = [];
        for (var n in e) {
            if (n.match(/^__.*__$/)) continue;
            var r = n.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
            t.push(n.length == 1 ? r : "(?:" + r + ")")
        }
        t = t.join("|"), e.__patterns__ = t;
        var i = e.__call__;
        e.__call__ = function (e, n) {
            return n != undefined ? i.call(this, e, n) : i.call(this, e, t)
        }
    }, t.DialectHelpers = {}, t.DialectHelpers.inline_until_char = function (e, t) {
        var n = 0,
            r = [];
        for (;;) {
            if (e[n] == t) return n++, [n, r];
            if (n >= e.length) return null;
            var i = this.dialect.inline.__oneElement__.call(this, e.substr(n));
            n += i[0], r.push.apply(r, i.slice(1))
        }
    }, t.subclassDialect = function (e) {
        function t() {}
        function n() {}
        return t.prototype = e.block, n.prototype = e.inline, {
            block: new t,
            inline: new n
        }
    }, t.buildBlockOrder(t.dialects.Gruber.block), t.buildInlinePatterns(t.dialects.Gruber.inline), t.dialects.Maruku = t.subclassDialect(t.dialects.Gruber), t.dialects.Maruku.processMetaHash = function (t) {
        var n = u(t),
            r = {};
        for (var i = 0; i < n.length; ++i) if (/^#/.test(n[i])) r.id = n[i].substring(1);
        else if (/^\./.test(n[i])) r["class"] ? r["class"] = r["class"] + n[i].replace(/./, " ") : r["class"] = n[i].substring(1);
        else if (/\=/.test(n[i])) {
            var s = n[i].split(/\=/);
            r[s[0]] = s[1]
        }
        return r
    }, t.dialects.Maruku.block.document_meta = function (t, n) {
        if (t.lineNumber > 1) return undefined;
        if (!t.match(/^(?:\w+:.*\n)*\w+:.*$/)) return undefined;
        c(this.tree) || this.tree.splice(1, 0, {});
        var r = t.split(/\n/);
        for (p in r) {
            var i = r[p].match(/(\w+):\s*(.*)$/),
                s = i[1].toLowerCase(),
                o = i[2];
            this.tree[1][s] = o
        }
        return []
    }, t.dialects.Maruku.block.block_meta = function (t, n) {
        var r = t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (!r) return undefined;
        var i = this.dialect.processMetaHash(r[2]),
            s;
        if (r[1] === "") {
            var o = this.tree[this.tree.length - 1];
            s = c(o);
            if (typeof o == "string") return undefined;
            s || (s = {}, o.splice(1, 0, s));
            for (a in i) s[a] = i[a];
            return []
        }
        var u = t.replace(/\n.*$/, ""),
            f = this.processBlock(u, []);
        s = c(f[0]), s || (s = {}, f[0].splice(1, 0, s));
        for (a in i) s[a] = i[a];
        return f
    }, t.dialects.Maruku.block.definition_list = function (t, n) {
        var r = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
            i = ["dl"],
            s;
        if (!(a = t.match(r))) return undefined;
        var o = [t];
        while (n.length && r.exec(n[0])) o.push(n.shift());
        for (var u = 0; u < o.length; ++u) {
            var a = o[u].match(r),
                f = a[1].replace(/\n$/, "").split(/\n/),
                l = a[2].split(/\n:\s+/);
            for (s = 0; s < f.length; ++s) i.push(["dt", f[s]]);
            for (s = 0; s < l.length; ++s) i.push(["dd"].concat(this.processInline(l[s].replace(/(\n)\s+/, "$1"))))
        }
        return [i]
    }, t.dialects.Maruku.inline["{:"] = function (t, n, r) {
        if (!r.length) return [2, "{:"];
        var i = r[r.length - 1];
        if (typeof i == "string") return [2, "{:"];
        var s = t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
        if (!s) return [2, "{:"];
        var o = this.dialect.processMetaHash(s[1]),
            u = c(i);
        u || (u = {}, i.splice(1, 0, u));
        for (var a in o) u[a] = o[a];
        return [s[0].length, ""]
    }, t.buildBlockOrder(t.dialects.Maruku.block), t.buildInlinePatterns(t.dialects.Maruku.inline);
    var f = Array.isArray || function (e) {
            return Object.prototype.toString.call(e) == "[object Array]"
        }, l;
    Array.prototype.forEach ? l = function (e, t, n) {
        return e.forEach(t, n)
    } : l = function (e, t, n) {
        for (var r = 0; r < e.length; r++) t.call(n || e, e[r], r, e)
    }, e.renderJsonML = function (e, t) {
        t = t || {}, t.root = t.root || !1;
        var n = [];
        if (t.root) n.push(d(e));
        else {
            e.shift(), e.length && typeof e[0] == "object" && !(e[0] instanceof Array) && e.shift();
            while (e.length) n.push(d(e.shift()))
        }
        return n.join("\n\n")
    }
}(function () {
    return typeof exports == "undefined" ? (window.markdown = {}, window.markdown) : exports
}()),
function (e) {
    function t(t) {
        var n, r = !-[1];
        this.cmd = {};
        var i = function (e) {
            var t = e.length;
            for (var n = 0; n < t; n++) if (e.charCodeAt(n) > 32) break;
            for (var r = t - 1; r > n; r--) if (e.charCodeAt(r) > 32) break;
            return e.slice(n, r + 1)
        }, s = {
            en: {
                head3: "Header 3",
                bold: "Bold",
                italic: "Italic",
                quote: "Blockquote",
                code: "Code",
                pre: "Code Block",
                ul: "Unordered list",
                ol: "Ordered list",
                link: "Link",
                picture: "Picture",
                preview: "Preview",
                link_to: "Link to URL",
                image_url: "Link to image"
            },
            "zh-CN": {
                head3: "三级标题",
                bold: "粗体",
                italic: "斜体",
                quote: "引用",
                code: "代码",
                pre: "代码块",
                ul: "无序列表",
                ol: "有序列表",
                link: "链接",
                picture: "图片",
                preview: "预览",
                link_to: "链接地址",
                image_url: "图片地址"
            },
            "zh-TW": {
                head3: "三級標題",
                bold: "粗體",
                italic: "斜體",
                quote: "引用",
                code: "代碼",
                pre: "代碼塊",
                ul: "無序列表",
                ol: "有序列表",
                link: "鏈接",
                picture: "圖片",
                preview: "預覽",
                link_to: "鏈接地址",
                image_url: "圖片地址"
            }
        }, o = s[$("html").attr("lang")];
        this._init = function (t) {
            this.settings = t, this.wrap = this.createWrap(), this.preview = this.wrap.find(".editor-preview"), this.toolbar = this.wrap.find(".editor-toolbar"), this.textarea = t.textarea, this.textarea[0][e] = n = this, t = undefined, this.textarea.after(n.wrap), this.textarea.remove(), this.wrap.find(".editor-textarea").append(n.textarea), this.bindEvents(), this.cmd.textareaChange()
        }, this.createWrap = function () {
            var e = {
                head3: '<li class="editor-toolbar-button-head3"><a title="' + o.head3 + '" href="javascript:;"><i class="editor-icon-head"></i></a></li>',
                bold: '<li class="editor-toolbar-button-bold"><a title="' + o.bold + '" href="javascript:;"><i class="editor-icon-blod"></i></a></li>',
                italic: '<li class="editor-toolbar-button-italic"><a title="' + o.italic + '" href="javascript:;"><i class="editor-icon-italic"></i></a></li>',
                quote: '<li class="editor-toolbar-button-quote"><a title="' + o.quote + '" href="javascript:;"><i class="editor-icon-quote"></i></a></li>',
                code: '<li class="editor-toolbar-button-code"><a title="' + o.code + '" href="javascript:;"><i class="editor-icon-code"></i></a></li>',
                pre: '<li class="editor-toolbar-button-pre"><a title="' + o.pre + '" href="javascript:;"><i class="editor-icon-pre"></i></a></li>',
                ul: '<li class="editor-toolbar-button-ul"><a title="' + o.ul + '" href="javascript:;"><i class="editor-icon-ul"></i></a></li>',
                ol: '<li class="editor-toolbar-button-ol"><a title="' + o.ol + '" href="javascript:;"><i class="editor-icon-ol"></i></a></li>',
                link: '<li class="editor-toolbar-button-link"><a title="' + o.link + '" href="javascript:;"><i class="editor-icon-link"></i></a></li>',
                picture: '<li class="editor-toolbar-button-picture"><a title="' + o.picture + '" href="javascript:;"><i class="editor-icon-picture"></i></a></li>'
            }, t = [];
            if (this.settings.actions) var n = this.settings.actions;
            else var n = ["head3", "bold", "italic", "quote", "code", "pre", "ul", "ol", "link", "picture"];
            for (var r in n) e[n[r]] && t.push(e[n[r]]);
            var i = ['<div class="editor-wrap">', ' <div class="editor-head">', '   <ul class="editor-toolbar">' + t.join("") + "</ul>", '   <a href="javascript:;" class="btn2 editor-preview-toggle">' + o.preview + "</a>", " </div>", ' <div class="editor-textarea"></div>', ' <div class="editor-preview hide">', '   <div class="editor-preview-body"></div>', " </div>", "</div>"].join("");
            return $(i)
        }, this.bindEvents = function () {
            for (var e in this.bindEvents) this.bindEvents[e]()
        }, this.cmd.common = function (e, t, r) {
            var s = {
                rule: "normal",
                eachline: !0,
                clearBR: !1
            };
            if (r) for (k in s) r[k] == undefined && (r[k] = s[k]);
            else r = s;
            var o = n.cursorPosition.get(),
                u = o.start,
                a = o.text;
            r.clearBR && (a = a.replace(/\n/g, " ")), r.rule == "replace" && (a = ""), selectedTextLengh = a.length;
            var f = a.split("\n");
            if (r.eachline && f.length > 1) {
                for (var l in f) i(f[l]).length > 0 && (f[l] = e + i(f[l]) + t);
                a = f.join("\n")
            } else a = e + a + t;
            return n.cursorPosition.insert(o, a, selectedTextLengh == 0 ? -t.length : 0), !0
        }, this.cursorPosition = {}, this.cursorPosition.get = function () {
            var e = n.textarea[0],
                t = {
                    text: "",
                    start: 0,
                    end: 0
                };
            if (e.setSelectionRange) e.focus(), t.start = e.selectionStart, t.end = e.selectionEnd, t.text = t.start != t.end ? e.value.substring(t.start, t.end) : "";
            else if (document.selection) {
                e.focus();
                var r, i = document.selection.createRange(),
                    s = document.body.createTextRange();
                s.moveToElementText(e), t.text = i.text, t.bookmark = i.getBookmark();
                for (r = 0; s.compareEndPoints("StartToStart", i) < 0 && i.moveStart("character", -1) !== 0; r++) e.value.charAt(r) == "\r" && r++;
                t.start = r, t.end = t.text.length + t.start
            }
            return t
        }, this.cursorPosition.set = function (e) {
            var t = n.textarea[0],
                r, i, s;
            e || alert("You must get cursor position first."), t.focus(), t.setSelectionRange ? t.setSelectionRange(e.start, e.end) : t.createTextRange && (r = t.createTextRange(), t.value.length === e.start ? (r.collapse(!1), r.select()) : e.bookmark !== undefined ? (r.moveToBookmark(e.bookmark), r.select()) : (r.collapse(!0), r.moveEnd("character", e.start), r.moveStart("character", e.end), r.select()))
        }, this.cursorPosition.insert = function (e, t, r) {
            var i = n.textarea[0],
                s, o, u, a, f, l, c;
            this.set(e), i.setSelectionRange ? (s = i.value, o = s.substring(0, e.start) + t + s.substring(e.end), f = l = e.start + t.length, c = i.scrollTop, i.value = o, i.scrollTop != c && (i.scrollTop = c), f += r, l += r, i.setSelectionRange(f, l)) : i.createTextRange && (a = document.selection.createRange(), a.text = t, a.setEndPoint("StartToEnd", a), r && (a.collapse(!0), a.moveStart("character", r), a.moveEnd("character", r)), a.select())
        }, this.cmd.bold = function () {
            this.common("**", "**")
        }, this.cmd.italic = function () {
            this.common("_", "_")
        }, this.cmd.quote = function () {
            this.common(">", "", {
                eachline: !0
            })
        }, this.cmd.code = function () {
            this.common("`", "`")
        }, this.cmd.pre = function () {
            this.common("    ", "", {
                eachline: !0
            })
        }, this.cmd.head3 = function () {
            this.common("### ", "")
        }, this.cmd.link = function () {
            var e = prompt(o.link_to, "http://");
            if (!e) return;
            n.cursorPosition.get().text.length > 0 ? this.common("[", "](" + e + ")", {
                clearBR: !0
            }) : this.common("<", e + ">", {
                clearBR: !0
            })
        }, this.cmd.ul = function () {
            this.common("- ", "")
        }, this.cmd.ol = function () {
            this.common("0. ", "")
        }, this.cmd.picture = function (e) {
            e == undefined && (e = prompt(o.image_url, "http://")), e && this.common("![", "](" + e + ")", {
                rule: "replace"
            })
        }, this.cmd.textareaChange = function () {
            var e = n.textarea.val();
            e = markdown.toHTML(e), n.preview.find(".editor-preview-body").html(e)
        }, this.cmd.previewToggle = function () {
            $(this).toggleClass("active"), n.preview.toggleClass("hide")
        }, this.bindEvents.setup = function () {
            n.settings.previewBodyClass && n.preview.find(".editor-preview-body").addClass(n.settings.previewBodyClass)
        }, this.bindEvents.textareaKeyup = function () {
            n.textarea.keyup(n.cmd.textareaChange), n.textarea.keyup(function (e) {
                if (e.keyCode == 13) {
                    var t = n.textarea.val().split("\n"),
                        r = t.length;
                    if (r > 1) {
                        var i = /^\*\s+|^\-\s+|^_\s+|^[0-9]+\.\s+/.exec(t[r - 2]);
                        i && (i = i[0], n.cmd.common(i, "", {}))
                    }
                    return !0
                }
            })
        }, this.bindEvents.previewToggleClick = function () {
            n.wrap.find(".editor-preview-toggle").click(n.cmd.previewToggle)
        }, this.bindEvents.toolbarButtonClick = function () {
            n.toolbar.find("li").click(function () {
                var e = $(this).attr("class").replace("editor-toolbar-button-", "");
                e in n.cmd && n.cmd[e](), n.cmd.textareaChange()
            })
        }, this._init(t)
    }
    jQuery.fn[e] = function (n) {
        var r = [];
        return this.each(function () {
            if ($(this)[0][e]) r.push($(this)[0][e]);
            else {
                var i = jQuery.extend({
                    textarea: $(this)
                }, n, {
                    previewBodyClass: "markdown"
                });
                r.push(new t(i))
            }
        }), r
    }
}("markDownEditor"),
function (e) {
    var t = {
        className: "autosizejs",
        append: "",
        callback: !1
    }, n = "hidden",
        r = "border-box",
        i = "lineHeight",
        s = '<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',
        o = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        u = "oninput",
        a = "onpropertychange",
        f, l = e(s).data("autosize", !0)[0];
    l.style.lineHeight = "99px", e(l).css(i) === "99px" && o.push(i), l.style.lineHeight = "", e.fn.autosize = function (i) {
        return i = e.extend({}, t, i || {}), l.parentNode !== document.body && e(document.body).append(l), this.each(function () {
            function y() {
                f = t, l.className = i.className, e.each(o, function (e, t) {
                    l.style[t] = s.css(t)
                })
            }
            function b() {
                var e, r, o;
                f !== t && y(), p || (p = !0, l.value = t.value + i.append, l.style.overflowY = t.style.overflowY, o = parseInt(t.style.height, 10), l.style.width = s.width() + "px", l.scrollTop = 0, l.scrollTop = 9e4, e = l.scrollTop, e > h ? (e = h, r = "scroll") : e < c && (e = c), e += v, t.style.overflowY = r || n, o !== e && (t.style.height = e + "px", g && i.callback.call(t)), setTimeout(function () {
                    p = !1
                }, 1))
            }
            var t = this,
                s = e(t),
                c = s.height(),
                h = parseInt(s.css("maxHeight"), 10),
                p, d, v = 0,
                m = t.value,
                g = e.isFunction(i.callback);
            if (s.data("autosize")) return;
            if (s.css("box-sizing") === r || s.css("-moz-box-sizing") === r || s.css("-webkit-box-sizing") === r) v = s.outerHeight() - s.height();
            d = s.css("resize") === "none" ? "none" : "horizontal", s.css({
                overflow: n,
                overflowY: n,
                wordWrap: "break-word",
                resize: d
            }).data("autosize", !0), h = h && h > 0 ? h : 9e4, a in t ? u in t ? t[u] = t.onkeyup = b : t[a] = b : (t[u] = b, t.value = "", t.value = m), e(window).resize(b), s.bind("autosize", b), b()
        })
    }
}(window.jQuery || window.Zepto),
function () {
    var e, t, n, r, i, s, o, u;
    e = function (e) {
        var t, n;
        return n = e.find("input"), t = e.find(".color").attr("class"), t = $.trim(t.replace(/color/, "")), n.is(":checked") ? (e.find(".name").removeClass(t), n.prop("checked", !1)) : (e.find(".name").addClass(t), n.prop("checked", !0))
    }, o = function (e) {
        var t, n;
        return t = e.find(".tabs").find("li"), n = e.find(".tabs-content").find("tr"), t.click(function (e) {
            var r, i;
            return i = $(this), r = i.attr("aria-controls"), t.removeClass("active"), i.addClass("active"), n.removeClass("hide"), r === "open" ? n.filter(".closed").addClass("hide") : r === "closed" && n.not(".closed").addClass("hide"), e.preventDefault()
        })
    }, r = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }, s = function (e, t) {
        return e.show().filter(function () {
            return $(this).text().toLowerCase().indexOf(t.toLowerCase()) === -1
        }).hide()
    }, t = function () {
        return $(".fullscreen-modal").remove(), $("body").removeClass("overflow-hidden")
    }, i = function (e, t, n) {
        var r;
        if (e.setSelectionRange) return e.focus(), e.setSelectionRange(t, n);
        if (e.createTextRange) return r = e.createTextRange(), r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r.select()
    }, u = function (e) {
        return e.filter(function (t, n) {
            return e.indexOf(t) === n
        })
    }, n = function (e) {
        var t, n, r;
        return t = e.parents(".label-group"), n = t.data("id"), r = [], t.find("li.js-menu-container").each(function (e, t) {
            return r.push($(t).data("id"))
        }), {
            group_id: n,
            label_ids: r
        }
    }, $.fn.ready(function () {
        var a, f, l, c;
        return $("#project_name").length && function () {
            var e, t, n, r, i, s;
            return e = $("#project_description"), i = e.attr("placeholder"), r = $("#project_homepage_url"), n = $("#owner_username"), t = $("#project_name"), s = function (t, n) {
                var s, o;
                return t === n ? (s = "GitCafe Page for " + n, o = "http://" + n + ".gitcafe.com") : (s = i, o = ""), e.attr("placeholder", s), r.attr("placeholder", o)
            }, t.keyup(function () {
                return s(this.value, n.val())
            }), n.change(function () {
                return s(t.val(), n.val())
            })
        }(), $("#code").length && function () {
            var e, n;
            return e = $("#code"), n = e.offset().top, e.on("pjax:start", function () {
                return e.addClass("loading")
            }).on("pjax:end", function () {
                return e.removeClass("loading"), $("time.timeago").timeago()
            }), $(document).on("keydown", function (e) {
                if (!e.metaKey && !e.ctrlKey && e.target.nodeName !== "INPUT" && e.keyCode === 70) return $(".fullscreen-modal").length ? t() : $(".fullscreen").trigger("click")
            }).pjax(".js-pjax a", "#code", {
                timeout: 2500,
                fragment: "#code",
                scrollTo: n
            })
        }(), $(".btn-clone").click(function (e) {
            var t;
            return t = $(".repo-desc-clone"), t.toggleClass("active"), e.preventDefault()
        }), $("#clone-urls").find("a").click(function (e) {
            var t, n;
            return t = $(this), n = t.attr("href"), t.siblings("a").removeClass("active"), t.addClass("active"), $("#clone-url").val(n), e.preventDefault()
        }), $("#clone-url").click(function () {
            return $(this).select()
        }), $(".branch-switcher").click(function () {
            return $("#branches-tags").slideToggle(), $(this).toggleClass("on")
        }), $("#code").on("click", ".fullscreen", function (e) {
            var n, r, i, s, o, u, a;
            return r = $(".exit-fullscreen").clone().removeClass("hidden"), n = $(".breadcrumb").clone().removeClass("pjax"), n.find(".shortcuts").replaceWith(r), i = $(".file-content").html(), o = $('<div class="module-bd" />'), $(i).appendTo(o), a = $('<div class="fullscreen-modal" />'), n.appendTo(a), o.appendTo(a), a.appendTo("body"), s = $(".fullscreen-modal").find(".module-bd"), u = function () {
                var e;
                return e = $(window).height() - 35, s.height(e)
            }, $("body").addClass("overflow-hidden"), $(document).on("click", ".exit-fullscreen", function (e) {
                return t(), e.preventDefault()
            }), $(document).keydown(function (e) {
                if (e.keyCode === 27) return t()
            }), $(window).resize(function () {
                return u()
            }), u(), e.preventDefault()
        }), $("#repos-filter").on("keyup", function () {
            var e;
            return e = $(this).parent().next().find(".repo"), s(e, this.value)
        }), $("#people-filter").on("keyup", function () {
            var e;
            return e = $(".people-list").find("li"), s(e, this.value)
        }), $(document).on("ajax:success", ".remove-member", function () {
            return $(this).closest("li").remove()
        }), $("#project-collabs").find("form").on("ajax:success", function (e, t) {
            return $("#collabs").html(t)
        }), c = {
            group: $(".label-group"),
            actions: $(".label-group .actions li"),
            cancelBtn: $(".label-group .cancel"),
            hidenBox: $(".add-new-label, .edit-label-group, .del-label-group"),
            reset: function () {
                return this.hidenBox.addClass("hide")
            }
        }, c.actions.click(function (e) {
            var t, n, r;
            return r = $(this), n = r.attr("class").replace("js-", ""), t = r.parents(".label-group").find("." + n), t.is(":hidden") ? (c.reset(), t.removeClass("hide")) : c.reset(), e.preventDefault()
        }), c.cancelBtn.click(function () {
            return c.reset()
        }), $(".js-sortable-labels").sortable({
            items: "li.js-menu-container",
            connectWith: ".js-sortable-labels",
            update: function (e, t) {
                var r, i;
                r = [], i = t.item.find("form.edit-label-form").attr("action"), r.push(n(t.item)), t.sender && r.push(n(t.sender));
                if (this === t.item.parent()[0]) return $.ajax({
                    url: i,
                    type: "PUT",
                    data: {
                        label_id_map: r
                    }
                })
            }
        }), l = {
            wrap: $(".labels-wrap"),
            items: ".label-group:not(.status-group)"
        }, l.wrap.sortable({
            items: l.items,
            update: function (e, t) {
                var n, r, i;
                return n = l.wrap.find(l.items), i = l.wrap.find(".edit-label-group form").first().attr("action"), r = [], n.each(function (e, t) {
                    return r.push($(t).data("id"))
                }), $.ajax({
                    url: i,
                    type: "PUT",
                    data: {
                        label_group_ids: r
                    }
                })
            }
        }), $(".js-labels-chooser").find("li").click(function (t) {
            var n;
            return n = $(this), e(n), t.preventDefault()
        }), $(".color-chooser").find("li.color").click(function () {
            var e, t, n, r;
            return r = $(this), n = r.siblings(), t = r.parent().next().find("input"), e = r.data("color"), n.removeClass("active"), r.addClass("active"), t.val(e)
        }), a = $(".assignee-selector"), f = {
            items: a.find(".ui-menu-item").find("a"),
            selected: a.find(".selected"),
            assignee: a.find("input"),
            hover: function (e) {
                return f.items.removeClass("ui-state-hover"), e.addClass("ui-state-hover")
            }
        }, a.find(".js-menu-target").click(function () {
            var e, t;
            return t = $(this), e = t.hasClass("active") ? "icon-triangle-bottom" : "icon-triangle-top", t.find("i").attr("class", e)
        }), f.items.hover(function () {
            return f.hover($(this))
        }).click(function () {
            var e, t, n;
            return t = $(this), e = t.html(), n = t.data("value"), f.selected.html(e), f.assignee.val(n), t.parents(".js-menu-container").trigger("click")
        }), $("#label-chooser .radio").mouseenter(function () {
            var e;
            return e = $(this).find("input"), e.data("checked", e[0].checked)
        }), $("#label-chooser input[type=radio]").click(function () {
            var e;
            return e = $(this), e.data("checked") ? (e.prop("checked", !1), e.data("checked", !1)) : e.data("checked", !0)
        }), $(".discussions").find(".btn-edit").click(function (e) {
            var t, n;
            return n = $(this).parents(".discussion-item"), t = n.find(".js-editor"), n.toggleClass("editing"), t.trigger("autosize"), e.preventDefault()
        }), $(".discussions").find(".cancel").click(function (e) {
            var t;
            return t = $(this).parents(".discussion-item"), t.removeClass("editing"), e.preventDefault()
        }), $(".discussions").find(".reply").click(function (e) {
            var t, n, r, s, o, a, f, l;
            return r = $(this).parents(".discussion-item"), t = "@" + r.data("username"), s = "@" + $("#user .dropdown-toggle").text(), n = r.find(".markdown").text(), l = $("#issue-comment-form").find(".input-xlarge"), a = /@([A-Za-z0-9_]+)/g, o = n.match(a), f = "", o ? (o.unshift(t), o = u(o), o.splice(o.indexOf(s), 1), f = o.join(" ")) : f = t + " ", l.val().trim() ? l.focus() : (l.focus().val(f), i(l[0], t.length + 1, f.length)), e.preventDefault()
        }), $(".js-editor").markDownEditor(), $("#issue-comment-form .js-editor, .edit-issue-form .js-editor").autosize(), o($("#request-list")), $("#base-repo").change(function (e) {
            var t, n;
            return t = $(this), n = "/" + t.find("option:selected").text() + "/branches", $.ajax({
                url: n,
                dataType: "json"
            }).done(function (e) {
                var t;
                return t = "", $(e).each(function (e, n) {
                    return t += '<option value="' + n + '"></option>'
                }), $("#base_ref").val(e[0]), $("#base-ref-list").html(t)
            })
        }), $(".js-mentions").length && $(".js-mentions").atWho("@", function (e, t) {
            if (!e) return;
            return $.ajax({
                url: "/users/autocomplete_username",
                data: {
                    term: e
                },
                dataType: "json"
            }).done(function (e) {
                var n;
                n = [], $(e).each(function (e, t) {
                    return n.push(t.value)
                });
                if (!n) return;
                return t(n)
            })
        }), $("#custom-amount").on("change input", function () {
            var e, t, n, i, s, o, u;
            n = $(this), u = n.val(), i = u * 30, t = n.parent(), o = t.find(".original-gb"), e = t.find(".actual-gb");
            if (u === "") i = s = 0;
            else {
                if (!r(u) || u < 0) return;
                u < 50 ? s = i : u < 100 ? s = i + 100 : u < 200 ? s = i + 300 : u < 250 ? s = i + 700 : u >= 250 && (s = i + 1e3)
            }
            return o.text(i), e.text(s)
        }), $(".choose-amount").find('input[type="radio"]').change(function () {
            var e;
            return e = $(".choose-pay-way").find('input[type="radio"]'), e.prop("disabled", $("#coupon-code").prop("checked"))
        })
    })
}.call(this),
function () {
    var e, t;
    t = function (e, t) {
        var n, r;
        return r = e.find(".unread-count"), r[0] ? (n = r.text(), r.text(+n + t)) : $('<em class="unread-count">1</em>').appendTo(e)
    }, e = function (e, t, n) {
        return n.length ? $.ajax({
            url: e,
            data: {
                ids: n
            },
            type: "POST"
        }).done(function () {
            return t.remove()
        }) : !1
    }, $.fn.ready(function () {
        var n, r, i;
        return r = $(".messages-list"), n = r.data("markText"), i = r.data("unmarkText"), r.find("li").click(function (e) {
            var t, n;
            n = e.target.nodeName;
            if (n === "A" || n === "INPUT") return;
            return t = $(this).find("input"), t.prop("checked", !t.prop("checked"))
        }), r.find(".body a").click(function (e) {
            var t;
            t = $(this).parent().parent().parent();
            if (t.hasClass("unread")) return $(this).attr("href", this.href + "?rntf=" + t.attr("data")), !0
        }), $(".messages-actions").find("input").change(function () {
            var e, t;
            return t = $(this), e = r.find("input"), e.prop("checked", t.prop("checked"))
        }), $(".messages .delete-selected").click(function (t) {
            var n, i, s;
            return s = "/direct_messages/trash_selected_conversations", i = r.find("input:checked").parent(), n = [], $.each(i, function (e, t) {
                var r;
                return r = $(t).find("h5").find("a").attr("href"), r = r.replace(/\/direct_messages\//g, ""), n.push(r)
            }), e(s, i, n), t.preventDefault()
        }), $(".notifications .delete-selected").click(function (t) {
            var n, i, s;
            return s = "/notifications/destroy_selected_notifications", i = r.find("input:checked").parent(), n = [], $.each(i, function (e, t) {
                var r;
                return r = $(t).find(".mark-toggle").attr("href"), r = r.replace(/\/notifications\//g, ""), n.push(r)
            }), e(s, i, n), t.preventDefault()
        }), $(".mark-toggle").click(function (e) {
            var s, o, u, a, f, l;
            return s = $(this), o = s.parents("li"), f = s.attr("href"), l = r.parent(), o.hasClass("unread") ? (a = i, u = -1) : (a = n, u = 1), $.ajax({
                url: f,
                type: "POST"
            }).done(function () {
                var e, n, r, i, f;
                o.toggleClass("unread"), s.text(a), i = l.hasClass("messages") ? ".messages-count" : ".notifications-count", t($(".dropdown-menu").find(i), u), t($(".dashboard-page-nav").find(i), u), e = $(".messages-count").first().find(".unread-count").text(), r = $(".notifications-count").first().find(".unread-count").text(), f = $("#user").find(".dropdown-toggle"), n = f.find(".icon-new-msg");
                if (!n.length && +e + +r) return f.find(".arrow").before('<i class="icon-new-msg"></i>');
                if (n.length && !(+e + +r)) return n.remove()
            }), e.preventDefault()
        }),
        function () {
            var e, t, n, r, i, s;
            return t = $("#message-form"), r = t.find(".input-xlarge"), n = t.find(".message-form"), e = t.find(".btn"), s = t.find("#to"), i = function (t) {
                return $.ajax({
                    url: "/users/check_username",
                    data: {
                        name: t
                    }
                }).done(function (t) {
                    return t === "true" ? (s.removeClass("error"), e.prop("disabled", !1)) : s.addClass("error")
                }).fail(function () {
                    return s.addClass("error")
                })
            }, s.on("blur", function () {
                var e;
                return e = $.trim(s.val()), e === "" ? s.addClass("error") : i(e)
            }), r.on("change input", function (n) {
                return r = t.find(".input-xlarge"), r.eq(0).val() && r.eq(1).val() && r.eq(2).val() ? e.prop("disabled", !1) : e.prop("disabled", !0)
            }), n.on("submit", function (e) {
                var t;
                return t = s.val(), $.when(i(t)).then(function () {
                    return s.hasClass("error") ? (s.focus(), e.preventDefault()) : (n.off("submit"), n.submit())
                }), !1
            })
        }(), $(".close-cheatsheet").click(function (e) {
            return $("#markdown-cheatsheet").modal("hide"), e.preventDefault()
        }), $(document).keydown(function (e) {
            if (e.ctrlKey && e.keyCode === 77) return $("#markdown-cheatsheet").modal("show")
        }),
        function () {
            var e, t, n, r, i;
            return i = $(".message-simple-form"), n = i.find(".control-group"), r = i.find(".input-xlarge"), e = i.find(".btn"), t = "", r.on("change input", function () {
                return t = $.trim(r.val()), t ? (n.removeClass("error"), e.prop("disabled", !1)) : e.prop("disabled", !0)
            }), i.keydown(function (e) {
                if (e.ctrlKey && e.keyCode === 13) return t ? i.find("form").submit() : n.addClass("error"), !1
            })
        }()
    })
}.call(this),
function (e) {
    "use strict";
    var t = function (e, n, r) {
        var i = document.createElement("img"),
            s, o;
        return i.onerror = n, i.onload = function () {
            o && (!r || !r.noRevoke) && t.revokeObjectURL(o), n(t.scale(i, r))
        }, window.Blob && e instanceof Blob || window.File && e instanceof File ? s = o = t.createObjectURL(e) : s = e, s ? (i.src = s, i) : t.readFile(e, function (e) {
            i.src = e
        })
    }, n = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    t.scale = function (e, t) {
        t = t || {};
        var n = document.createElement("canvas"),
            r = e.width,
            i = e.height,
            s = Math.max((t.minWidth || r) / r, (t.minHeight || i) / i);
        return s > 1 && (r = parseInt(r * s, 10), i = parseInt(i * s, 10)), s = Math.min((t.maxWidth || r) / r, (t.maxHeight || i) / i), s < 1 && (r = parseInt(r * s, 10), i = parseInt(i * s, 10)), e.getContext || t.canvas && n.getContext ? (n.width = r, n.height = i, n.getContext("2d").drawImage(e, 0, 0, r, i), n) : (e.width = r, e.height = i, e)
    }, t.createObjectURL = function (e) {
        return n ? n.createObjectURL(e) : !1
    }, t.revokeObjectURL = function (e) {
        return n ? n.revokeObjectURL(e) : !1
    }, t.readFile = function (e, t) {
        if (window.FileReader && FileReader.prototype.readAsDataURL) {
            var n = new FileReader;
            return n.onload = function (e) {
                t(e.target.result)
            }, n.readAsDataURL(e), n
        }
        return !1
    }, typeof define != "undefined" && define.amd ? define(function () {
        return t
    }) : e.loadImage = t
}(this),
function () {
    $.fn.ready(function () {
        $("#tranfer-org").click(function (e) {
            return $(".danger-group").toggleClass("hide"), e.preventDefault()
        }), $("#add-org-manager").on("ajax:success", function (e, t) {
            return $("#org-managers").html(t)
        }), $(".input-file").change(function (e) {
            return window.loadImage(e.target.files[0], function (t) {
                return $(e.target).parents(".control-group").find(".image-preview").html(t)
            })
        });
        if ($("#org-banners").length) return $("#org-banners").slides({
            generateNextPrev: !0,
            generatePagination: !1,
            effect: "fade"
        })
    })
}.call(this),
function () {
    var e, t;
    e = function (e, t, n) {
        var r;
        return r = Math.floor((e - t) / 2), r = r > 10 ? t + r + 5 : e - n - 5
    }, t = function (e, t) {
        return e.css("left", t)
    }, $.fn.ready(function () {
        var n, r, i, s, o, u;
        u = $(window), r = $("#back2top"), i = r.width(), s = 335, o = 960, n = function (e) {
            return u.scrollTop(e)
        }, t(r, e(u.width(), o, i)), u.scroll(function () {
            return u.scrollTop() < 300 ? r.fadeOut() : r.fadeIn()
        }), u.resize(function () {
            return t(r, e(u.width(), o, i))
        }), r.click(function (e) {
            return n(s), e.preventDefault()
        });
        if (r.length) return $(document).keydown(function (e) {
            var t, r;
            r = u.scrollTop(), t = e.keyCode;
            if (t === 84) return n(s);
            if (t === 75) return n(r - 40);
            if (t === 74) return n(r + 40)
        })
    })
}.call(this),
function () {
    $.fn.ready(function () {
        var e, t, n, r;
        return e = $("#sortable"), t = "", r = {
            addDivide: function () {
                var t, n;
                return e.find(".divider").remove(), t = '<li class="divider"></li>', n = e.find("li:not(.divider):lt(2)"), n.after(t)
            },
            getFirstItem: function () {
                return e.find("span").first().text()
            },
            updateList: function () {
                var t;
                return t = [], e.find("li:not(.divider)").each(function () {
                    return t.push($(this).data("navItem"))
                }), $.ajax({
                    url: "/account/dashboard_preferences",
                    type: "PUT",
                    data: {
                        order: t
                    }
                })
            }
        }, e.sortable({
            items: "li:not(.divider)",
            placeholder: "sortable-placeholder",
            start: function () {
                return t = r.getFirstItem()
            },
            update: function () {
                var e, n;
                r.addDivide(), r.updateList(), n = r.getFirstItem();
                if (t !== n) return e = $("#sortupdate-msg"), e.find("span").text(n), e.slideDown(300).delay(3e3).slideUp()
            }
        }), $('input[name="user[using_avatar]"]').change(function () {
            var e, t;
            return t = $("#upload-avatar"), e = $(".profile-photo"), $("#user_using_avatar_true").is(":checked") ? (t.removeClass("hide"), e.addClass("hide")) : (t.addClass("hide"), e.removeClass("hide"))
        }), $(".leave-organization").on("ajax:success", function (e, t) {
            return $("#user-organizations").html(t)
        }), $(".toggle-select").change(function () {
            var e, t;
            return t = $(this), e = t.data("for"), $("[data-" + e + "]").find("input").prop("checked", t.prop("checked"))
        }), n = function () {
            var e;
            return e = 15, $('[data-for="notification"]').prop("checked", $("[data-notification]").find("input:checked").length === e), $('[data-for="email"]').prop("checked", $("[data-email]").find("input:checked").length === e)
        }, n(), $("table.notifications").find("input").change(function () {
            return n()
        })
    })
}.call(this),
function () {
    $.fn.ready(function () {
        return $("#slides")[0] && $("#slides").slides({
            generateNextPrev: !0,
            effect: "fade",
            crossfade: !0,
            play: 5e3,
            pause: 1500,
            hoverPause: !0,
            paginationClass: "slide-pages"
        }), $(".js-follow").click(function () {
            var e;
            e = $(this);
            if (e.hasClass("disabled")) return;
            return e.addClass("disabled"), $.ajax({
                type: "POST",
                url: "/users/follow",
                data: {
                    target: e.data("username")
                },
                dataType: "json"
            }).done(function (t) {
                return e.removeClass("disabled"), t.is_following ? e.addClass("following") : e.removeClass("following")
            })
        }), $(".btn-watch, .btn-unwatch").on("ajax:before", function () {
            if ($(this).hasClass("disabled")) return !1
        }).on("ajax:beforeSend", function () {
            $(this).addClass("disabled")
        }).on("ajax:success", function (e, t) {
            var n, r, i;
            n = $(this), i = n.data("watchText"), r = n.data("unwatchText"), t.is_watching ? n.removeClass("btn-watch").addClass("btn-unwatch").find("span").text(r) : n.removeClass("btn-unwatch").addClass("btn-watch").find("span").text(i), n.removeClass("disabled")
        }), $("form").on("keydown", function (e) {
            if (e.ctrlKey && e.keyCode === 13) return $(this).submit(), e.preventDefault()
        }).on("submit", function (e) {
            var t;
            return t = $(this), t.data("submited") ? e.preventDefault() : t.data("submited", !0)
        }), $(".js-ac-username").autocomplete({
            source: "/users/autocomplete_username"
        }), $(".js-details-target").click(function (e) {
            return $(this).closest(".js-details-container").toggleClass("open"), e.preventDefault()
        })
    })
}.call(this);