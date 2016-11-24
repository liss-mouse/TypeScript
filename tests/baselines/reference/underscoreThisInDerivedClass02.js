//// [underscoreThisInDerivedClass02.ts]
// @target es5

// Original test intent:
// Errors on '_this' should be reported in derived constructors,
// even if 'super()' is not called.

class C {
    constructor() {
        return {};
    }
}

class D extends C {
    constructor() {
        var _this = "uh-oh?";
    }
}

//// [underscoreThisInDerivedClass02.js]
// @target es5
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Original test intent:
// Errors on '_this' should be reported in derived constructors,
// even if 'super()' is not called.
var C = (function () {
    function C() {
        return {};
    }
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this;
        var _this = "uh-oh?";
        return _this;
    }
    return D;
}(C));
