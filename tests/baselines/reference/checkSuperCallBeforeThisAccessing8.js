//// [checkSuperCallBeforeThisAccessing8.ts]
class Base {
    constructor(...arg) {
    }
}
class Super extends Base {
    constructor() {
        var that = this;
        super();
    }
}

//// [checkSuperCallBeforeThisAccessing8.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
    }
    return Base;
}());
var Super = (function (_super) {
    __extends(Super, _super);
    function Super() {
        var _this;
        var that = _this;
        _this = _super.call(this) || this;
        return _this;
    }
    return Super;
}(Base));
