//// [classAbstractFactoryFunction.ts]

class A {}
abstract class B extends A {}

function NewA(Factory: typeof A) {
    return new A;
}

function NewB(Factory: typeof B) {
    return new B;
}

NewA(A);
NewA(B);

NewB(A);
NewB(B);

//// [classAbstractFactoryFunction.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.apply(this, arguments) || this;
    }
    return B;
}(A));
function NewA(Factory) {
    return new A;
}
function NewB(Factory) {
    return new B;
}
NewA(A);
NewA(B);
NewB(A);
NewB(B);
