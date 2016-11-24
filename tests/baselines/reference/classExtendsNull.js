//// [classExtendsNull.ts]
class C extends null {
    constructor() {
        super();
        return Object.create(null);
    }
}

class D extends null {
    constructor() {
        return Object.create(null);
    }
}

//// [classExtendsNull.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.call(this) || this;
        return Object.create(null);
    }
    return C;
}(null));
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this;
        return Object.create(null);
    }
    return D;
}(null));
