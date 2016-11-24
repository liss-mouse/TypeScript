//// [noImplicitAnyMissingGetAccessor.ts]

abstract class Parent
{
    public abstract set message(str);
}

class Child extends Parent {
    _x: any;
    public set message(str) {
        this._x = str;
    }
}

//// [noImplicitAnyMissingGetAccessor.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Parent = (function () {
    function Parent() {
    }
    return Parent;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Child.prototype, "message", {
        set: function (str) {
            this._x = str;
        },
        enumerable: true,
        configurable: true
    });
    return Child;
}(Parent));
