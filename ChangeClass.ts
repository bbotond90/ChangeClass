/// <reference path="lib/require.d.ts" />
/// <reference path="lib/jquery.d.ts" />

//refactored to use tsc --outputFile instead of --module amd
//import {Attribute} from "./Attribute";

module CC {
    export class ChangeClass {
        /**
        * appTemplateNameAttribute only denotes a scope of HTML where the app should change the classes on the selected elements.
        * Where an html contains the 'change-class-template' attribute would only listen to events.
        */
        private _appTemplateNameAttribute: CC.Attribute = new CC.Attribute("change-class-template");

        /**
        * Must be a reference to one of the 'change-class-to' attribute's value.
        * Example:
        * <div change-class-to="GreenDesign">All Red</div> //this is the button that we listen to
        *
        <div class-option-name="GreenDesign">
            This text will be green
        </div>
        */
        private _optionNameContainerAttribute: CC.Attribute = new CC.Attribute("class-option-name");
        private _classContainerAttribute: CC.Attribute = new CC.Attribute("class-container");

        /**
        * The changeToButtonAttribute's value have to contain one of the optionNameContainerAttribute's value.
        */
        private _changeToButtonAttribute: CC.Attribute = new CC.Attribute("change-class-to");

        /**
        * Attribute name prefix on containers.
        */
        private _targetAttributePrefix: string = "change-class-";

        constructor() {
            this.registerEvents();
            console.log("I am constructed");
        }

        private registerEvents(): void {
            this.onChangeToButtonAttributeClick();
        }

        /**
         * onClick event on buttons marked with _changeToButtonAttribute. It will trigger a change on all
         subscribed html element, which is subscribed on the button's container trigger,
         */
        private onChangeToButtonAttributeClick(): void {
            let self = this;

            this._changeToButtonAttribute.$Obj.on("click", function (e) {
                let $target = $(e.target);
                let targetContainerName = `${$target.attr(self._changeToButtonAttribute.attrName)}`;

                let targetAttribute: CC.Attribute = self.targetAttributeConstructor(targetContainerName);
                targetAttribute.$Obj.each((i, element) => {
                    let $e = $(element);
                    let newClasses = $e.attr(targetAttribute.attrName);
                    $e.removeClass();
                    $e.addClass(newClasses);

                });

            });
        }

        /**
         * Constructs the target Attribute which is subscribed for a button (has the requested container).
         * @param targetContainerName The name of the targeted container/design name.
         */
        private targetAttributeConstructor(targetContainerName: string): CC.Attribute {
            return new CC.Attribute(this._targetAttributePrefix + targetContainerName);
        }


    }

}
