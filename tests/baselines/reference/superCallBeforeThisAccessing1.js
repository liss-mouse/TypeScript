//// [superCallBeforeThisAccessing1.ts]
declare var Factory: any

class Base {
    constructor(c) { }
}
class D extends Base {
    private _t;
    constructor() {
        super(i);
        var s = {
            t: this._t
        }
        var i = Factory.create(s);
    }
}


//// [superCallBeforeThisAccessing1.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base(c) {
    }
    return Base;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super.call(this, i) || this;
        var s = {
            t: _this._t
        };
        var i = Factory.create(s);
        return _this;
    }
    return D;
}(Base));
