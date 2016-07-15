/// <reference path="lib/jquery.d.ts" />

export class Attribute {
    private _attrName: string;
    constructor(name: string) {
        this._attrName = name;
    }

    /**
    * Returns with its name alone
    */
    get attrName(): string {
        return this._attrName;
    }

    /**
    * Shortcut for convinience.
    * Returns with: [attrName]
    */
    get attrQuery(): string {
        return `[${this._attrName}]`;
    }

    /**
    * returns with $('[attrName]')
    */
    get $Obj(): JQuery {
        return $(this.attrQuery);
    }

}
