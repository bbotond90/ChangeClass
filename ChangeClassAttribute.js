/// <reference path="../../_ts_definition_files/github/jquery.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChangeClassAttribute = (function () {
        function ChangeClassAttribute(name) {
            this._attrName = name;
        }
        Object.defineProperty(ChangeClassAttribute.prototype, "attrName", {
            /**
            * Returns with its name alone
            */
            get: function () {
                return this._attrName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChangeClassAttribute.prototype, "attrQuery", {
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
        return ChangeClassAttribute;
    }());
    exports.ChangeClassAttribute = ChangeClassAttribute;
});
//# sourceMappingURL=ChangeClassAttribute.js.map