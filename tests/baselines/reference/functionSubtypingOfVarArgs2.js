//// [functionSubtypingOfVarArgs2.ts]
class EventBase {
    private _listeners: { (...args: any[]): void; }[] = [];

    add(listener: (...args: any[]) => void): void {
        this._listeners.push(listener);
    }
}

class StringEvent extends EventBase {
    add(listener: (items: string, moreitems: number) => void ) {
        super.add(listener);
    }
}


//// [functionSubtypingOfVarArgs2.js]
var __extends = (this && this.__extends) || function (d, b) {
    Object.setPrototypeOf(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventBase = (function () {
    function EventBase() {
        this._listeners = [];
    }
    EventBase.prototype.add = function (listener) {
        this._listeners.push(listener);
    };
    return EventBase;
}());
var StringEvent = (function (_super) {
    __extends(StringEvent, _super);
    function StringEvent() {
        return _super.apply(this, arguments) || this;
    }
    StringEvent.prototype.add = function (listener) {
        _super.prototype.add.call(this, listener);
    };
    return StringEvent;
}(EventBase));
