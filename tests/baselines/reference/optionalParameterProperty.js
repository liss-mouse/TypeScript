//// [optionalParameterProperty.ts]

class C {
    p: number;
}

class D extends C { 
    constructor(public p?: number) {
        super();
    }
}


//// [optionalParameterProperty.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function () {
    function C() {
    }
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D(p) {
        var _this = _super.call(this) || this;
        _this.p = p;
        return _this;
    }
    return D;
}(C));
