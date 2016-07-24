//refactored to use tsc --outputFile instead of --module amd
/// <reference path="lib/jquery.d.ts" />
var CC;
(function (CC) {
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
    CC.Attribute = Attribute;
})(CC || (CC = {}));
/// <reference path="lib/require.d.ts" />
/// <reference path="lib/jquery.d.ts" />
//refactored to use tsc --outputFile instead of --module amd
//import {Attribute} from "./Attribute";
var CC;
(function (CC) {
    var ChangeClass = (function () {
        function ChangeClass() {
            /**
            * appTemplateNameAttribute only denotes a scope of HTML where the app should change the classes on the selected elements.
            * Where an html contains the 'change-class-template' attribute would only listen to events.
            */
            this._appTemplateNameAttribute = new CC.Attribute("change-class-template");
            /**
            * Must be a reference to one of the 'change-class-to' attribute's value.
            * Example:
            * <div change-class-to="GreenDesign">All Red</div> //this is the button that we listen to
            *
            <div class-option-name="GreenDesign">
                This text will be green
            </div>
            */
            this._optionNameContainerAttribute = new CC.Attribute("class-option-name");
            this._classContainerAttribute = new CC.Attribute("class-container");
            /**
            * The changeToButtonAttribute's value have to contain one of the optionNameContainerAttribute's value.
            */
            this._changeToButtonAttribute = new CC.Attribute("change-class-to");
            /**
            * Attribute name prefix on containers.
            */
            this._targetAttributePrefix = "change-class-";
            this.registerEvents();
            console.log("I am constructed");
        }
        ChangeClass.prototype.registerEvents = function () {
            this.onChangeToButtonAttributeClick();
        };
        /**
         * onClick event on buttons marked with _changeToButtonAttribute. It will trigger a change on all
         subscribed html element, which is subscribed on the button's container trigger,
         */
        ChangeClass.prototype.onChangeToButtonAttributeClick = function () {
            var self = this;
            this._changeToButtonAttribute.$Obj.on("click", function (e) {
                var $target = $(e.target);
                var targetContainerName = "" + $target.attr(self._changeToButtonAttribute.attrName);
                var targetAttribute = self.targetAttributeConstructor(targetContainerName);
                targetAttribute.$Obj.each(function (i, element) {
                    var $e = $(element);
                    var newClasses = $e.attr(targetAttribute.attrName);
                    $e.removeClass();
                    $e.addClass(newClasses);
                });
            });
        };
        /**
         * Constructs the target Attribute which is subscribed for a button (has the requested container).
         * @param targetContainerName The name of the targeted container/design name.
         */
        ChangeClass.prototype.targetAttributeConstructor = function (targetContainerName) {
            return new CC.Attribute(this._targetAttributePrefix + targetContainerName);
        };
        return ChangeClass;
    }());
    CC.ChangeClass = ChangeClass;
})(CC || (CC = {}));
//refactored to use tsc --outputFile instead of --module amd
//import {ChangeClass} from "./ChangeClass";
$(function () {
    var cc = new CC.ChangeClass();
});
//# sourceMappingURL=changeclass.js.map