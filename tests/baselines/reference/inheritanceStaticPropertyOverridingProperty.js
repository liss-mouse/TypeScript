//// [inheritanceStaticPropertyOverridingProperty.ts]
class a {
    static x: () => string;
}

class b extends a {
    static x: () => string;
}

//// [inheritanceStaticPropertyOverridingProperty.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function () {
    function a() {
    }
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    return b;
}(a));
