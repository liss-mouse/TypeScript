//// [undeclaredBase.ts]
module M { export class C extends M.I { } }



//// [undeclaredBase.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var M;
(function (M) {
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            return _super.apply(this, arguments) || this;
        }
        return C;
    }(M.I));
    M.C = C;
})(M || (M = {}));
