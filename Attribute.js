/// <reference path="lib/jquery.d.ts" />
"use strict";
var Attribute = (function () {
    function Attribute(name) {
        this._attrName = name;
    }
    Object.defineProperty(Attribute.prototype, "attrName", {
        /**
        * Returns with its name alone
        */
        get: function () {
            return this._attrName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "attrQuery", {
        /**
        * Shortcut for convinience.
        * Returns with: [attrName]
        */
        get: function () {
            return "[" + this._attrName + "]";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "$Obj", {
        /**
        * returns with $('[attrName]')
        */
        get: function () {
            return $(this.attrQuery);
        },
        enumerable: true,
        configurable: true
    });
    return Attribute;
}());
exports.Attribute = Attribute;
//# sourceMappingURL=Attribute.js.map