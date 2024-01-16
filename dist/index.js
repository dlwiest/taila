'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactAriaComponents = require('react-aria-components');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var baseColorClasses = {
    slate: 'bg-slate-600',
    gray: 'bg-gray-600',
    zinc: 'bg-zinc-600',
    neutral: 'bg-neutral-600',
    stone: 'bg-stone-600',
    red: 'bg-red-600',
    orange: 'bg-orange-600',
    amber: 'bg-amber-600',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-600',
    green: 'bg-green-600',
    emerald: 'bg-emerald-600',
    teal: 'bg-teal-600',
    cyan: 'bg-cyan-600',
    sky: 'bg-sky-600',
    blue: 'bg-blue-600',
    indigo: 'bg-indigo-600',
    violet: 'bg-violet-600',
    purple: 'bg-purple-600',
    fuchsia: 'bg-fuchsia-600',
    pink: 'bg-pink-600',
    rose: 'bg-rose-600',
};
var hoverColorClasses = {
    slate: 'hover:bg-slate-500',
    gray: 'hover:bg-gray-500',
    zinc: 'hover:bg-zinc-500',
    neutral: 'hover:bg-neutral-500',
    stone: 'hover:bg-stone-500',
    red: 'hover:bg-red-500',
    orange: 'hover:bg-orange-500',
    amber: 'hover:bg-amber-500',
    yellow: 'hover:bg-yellow-500',
    lime: 'hover:bg-lime-500',
    green: 'hover:bg-green-500',
    emerald: 'hover:bg-emerald-500',
    teal: 'hover:bg-teal-500',
    cyan: 'hover:bg-cyan-500',
    sky: 'hover:bg-sky-500',
    blue: 'hover:bg-blue-500',
    indigo: 'hover:bg-indigo-500',
    violet: 'hover:bg-violet-500',
    purple: 'hover:bg-purple-500',
    fuchsia: 'hover:bg-fuchsia-500',
    pink: 'hover:bg-pink-500',
    rose: 'hover:bg-rose-500',
};
var darkColorClasses = {
    slate: 'dark:bg-slate-500',
    gray: 'dark:bg-gray-500',
    zinc: 'dark:bg-zinc-500',
    neutral: 'dark:bg-neutral-500',
    stone: 'dark:bg-stone-500',
    red: 'dark:bg-red-500',
    orange: 'dark:bg-orange-500',
    amber: 'dark:bg-amber-500',
    yellow: 'dark:bg-yellow-500',
    lime: 'dark:bg-lime-500',
    green: 'dark:bg-green-500',
    emerald: 'dark:bg-emerald-500',
    teal: 'dark:bg-teal-500',
    cyan: 'dark:bg-cyan-500',
    sky: 'dark:bg-sky-500',
    blue: 'dark:bg-blue-500',
    indigo: 'dark:bg-indigo-500',
    violet: 'dark:bg-violet-500',
    purple: 'dark:bg-purple-500',
    fuchsia: 'dark:bg-fuchsia-500',
    pink: 'dark:bg-pink-500',
    rose: 'dark:bg-rose-500',
};
var darkHoverColorClasses = {
    slate: 'dark:hover:bg-slate-400',
    gray: 'dark:hover:bg-gray-400',
    zinc: 'dark:hover:bg-zinc-400',
    neutral: 'dark:hover:bg-neutral-400',
    stone: 'dark:hover:bg-stone-400',
    red: 'dark:hover:bg-red-400',
    orange: 'dark:hover:bg-orange-400',
    amber: 'dark:hover:bg-amber-400',
    yellow: 'dark:hover:bg-yellow-400',
    lime: 'dark:hover:bg-lime-400',
    green: 'dark:hover:bg-green-400',
    emerald: 'dark:hover:bg-emerald-400',
    teal: 'dark:hover:bg-teal-400',
    cyan: 'dark:hover:bg-cyan-400',
    sky: 'dark:hover:bg-sky-400',
    blue: 'dark:hover:bg-blue-400',
    indigo: 'dark:hover:bg-indigo-400',
    violet: 'dark:hover:bg-violet-400',
    purple: 'dark:hover:bg-purple-400',
    fuchsia: 'dark:hover:bg-fuchsia-400',
    pink: 'dark:hover:bg-pink-400',
    rose: 'dark:hover:bg-rose-400',
};
var focusClasses = {
    slate: 'focus-visible:outline-slate-600',
    gray: 'focus-visible:outline-gray-600',
    zinc: 'focus-visible:outline-zinc-600',
    neutral: 'focus-visible:outline-neutral-600',
    stone: 'focus-visible:outline-stone-600',
    red: 'focus-visible:outline-red-600',
    orange: 'focus-visible:outline-orange-600',
    amber: 'focus-visible:outline-amber-600',
    yellow: 'focus-visible:outline-yellow-600',
    lime: 'focus-visible:outline-lime-600',
    green: 'focus-visible:outline-green-600',
    emerald: 'focus-visible:outline-emerald-600',
    teal: 'focus-visible:outline-teal-600',
    cyan: 'focus-visible:outline-cyan-600',
    sky: 'focus-visible:outline-sky-600',
    blue: 'focus-visible:outline-blue-600',
    indigo: 'focus-visible:outline-indigo-600',
    violet: 'focus-visible:outline-violet-600',
    purple: 'focus-visible:outline-purple-600',
    fuchsia: 'focus-visible:outline-fuchsia-600',
    pink: 'focus-visible:outline-pink-600',
    rose: 'focus-visible:outline-rose-600',
};
var darkFocusClasses = {
    slate: 'dark:focus-visible:outline-slate-500',
    gray: 'dark:focus-visible:outline-gray-500',
    zinc: 'dark:focus-visible:outline-zinc-500',
    neutral: 'dark:focus-visible:outline-neutral-500',
    stone: 'dark:focus-visible:outline-stone-500',
    red: 'dark:focus-visible:outline-red-500',
    orange: 'dark:focus-visible:outline-orange-500',
    amber: 'dark:focus-visible:outline-amber-500',
    yellow: 'dark:focus-visible:outline-yellow-500',
    lime: 'dark:focus-visible:outline-lime-500',
    green: 'dark:focus-visible:outline-green-500',
    emerald: 'dark:focus-visible:outline-emerald-500',
    teal: 'dark:focus-visible:outline-teal-500',
    cyan: 'dark:focus-visible:outline-cyan-500',
    sky: 'dark:focus-visible:outline-sky-500',
    blue: 'dark:focus-visible:outline-blue-500',
    indigo: 'dark:focus-visible:outline-indigo-500',
    violet: 'dark:focus-visible:outline-violet-500',
    purple: 'dark:focus-visible:outline-purple-500',
    fuchsia: 'dark:focus-visible:outline-fuchsia-500',
    pink: 'dark:focus-visible:outline-pink-500',
    rose: 'dark:focus-visible:outline-rose-500',
};

var Button = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "blue" : _b, children = _a.children, rest = __rest(_a, ["color", "children"]);
    var colorKey = color;
    var colorClass = baseColorClasses[colorKey] || 'bg-blue-600';
    var hoverColorClass = hoverColorClasses[colorKey] || 'hover:bg-blue-500';
    var darkColorClass = darkColorClasses[colorKey] || 'dark:bg-blue-500';
    var darkHoverColorClass = darkHoverColorClasses[colorKey] || 'dark:hover:bg-blue-400';
    var focusClass = focusClasses[colorKey] || 'focus-visible:outline-blue-600';
    var darkFocusClass = darkFocusClasses[colorKey] || 'dark:focus-visible:outline-blue-500';
    return (jsxRuntime.jsx(reactAriaComponents.Button, __assign({ className: "rounded ".concat(colorClass, " ").concat(darkColorClass, " px-2 py-1 text-xs font-semibold text-white shadow-sm ").concat(hoverColorClass, " ").concat(darkHoverColorClass, " ").concat(focusClass, " ").concat(darkFocusClass) }, rest, { children: children })));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
