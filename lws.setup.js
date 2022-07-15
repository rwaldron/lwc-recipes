'use strict';

const WindowProto = Reflect.getPrototypeOf(window);
const WindowPropertiesProto = Reflect.getPrototypeOf(WindowProto);

if (Reflect.getPrototypeOf(WindowPropertiesProto) === null) {
    // Fix prototype look up in jsdom
    // window -> Window -> WindowProperties -> EventTarget
    Reflect.setPrototypeOf(WindowProto, {});
    // Reflect.setPrototypeOf(WindowPropertiesProto, EventTarget.prototype);
    // Reflect.setPrototypeOf(WindowProto, EventTarget.prototype);
    // Reflect.setPrototypeOf(WindowPropertiesProto, EventTarget.prototype);
}

console.log(window.document.location);

// This is necessary to get around jsdom's misplacement of the window.length
// definition, which causes our ObjectLookupOwnGetter to fail when attempting to
// find and cache the getter.
// eslint-disable-next-line no-underscore-dangle
if (!Reflect.apply(Object.prototype.__lookupGetter__, window, ['length'])) {
    Object.defineProperties(window, {
        length: {
            configurable: true,
            enumerable: true,
            get() {
                return 0;
            }
        }
    });
}

if (!Reflect.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerText')) {
    const wm = new WeakMap();
    Object.defineProperties(HTMLElement.prototype, {
        innerText: {
            configurable: true,
            enumerable: true,
            get() {
                return wm.get(this) || '';
            },
            set(v) {
                wm.set(this, v);
            }
        }
    });
}

if (!Reflect.getOwnPropertyDescriptor(HTMLElement.prototype, 'outerText')) {
    const wm = new WeakMap();
    Object.defineProperties(HTMLElement.prototype, {
        outerText: {
            configurable: true,
            enumerable: true,
            get() {
                return wm.get(this) || '';
            },
            set(v) {
                wm.set(this, v);
            }
        }
    });
}

if (
    !Reflect.getOwnPropertyDescriptor(
        HTMLObjectElement.prototype,
        'contentWindow'
    )
) {
    Object.defineProperties(HTMLObjectElement.prototype, {
        contentWindow: {
            configurable: true,
            enumerable: true,
            get() {
                return null;
            }
        }
    });
}

if (!global.IDBObjectStore) {
    global.IDBObjectStore = class {};
}

if (!global.ImageData) {
    global.ImageData = class {};
}

if (!global.MediaSource) {
    global.MediaSource = class {};
}

if (!global.Request) {
    global.Request = class {};
}

if (!global.Worker) {
    global.Worker = class {};
}

// This mock is used in html-sanitizer to prevent ECONNREFUSED errors from
// occurring. The actual testing of that module's use of XMLHttpRequest is done
// via integration tests in integration-karma.
global.XMLHttpRequest = class MockXMLHttpRequest extends EventTarget {
    // eslint-disable-next-line class-methods-use-this
    get status() {
        return 200;
    }

    // eslint-disable-next-line class-methods-use-this
    get responseText() {
        return '';
    }

    // eslint-disable-next-line class-methods-use-this
    open() {}

    // eslint-disable-next-line class-methods-use-this
    send() {
        setTimeout(() => {
            const event = new Event('load');
            this.dispatchEvent(event);
        }, 0);
    }
};
