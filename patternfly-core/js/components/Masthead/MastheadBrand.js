"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MastheadBrand = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const masthead_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Masthead/masthead"));
const react_styles_1 = require("@patternfly/react-styles");
const MastheadBrand = (_a) => {
    var { children, className, component } = _a, props = tslib_1.__rest(_a, ["children", "className", "component"]);
    let Component = component;
    if (!component) {
        if ((props === null || props === void 0 ? void 0 : props.href) !== undefined) {
            Component = 'a';
        }
        else {
            Component = 'span';
        }
    }
    return (React.createElement(Component, Object.assign({ className: (0, react_styles_1.css)(masthead_1.default.mastheadBrand, className) }, (Component === 'a' && { tabIndex: 0 }), props), children));
};
exports.MastheadBrand = MastheadBrand;
exports.MastheadBrand.displayName = 'MastheadBrand';
//# sourceMappingURL=MastheadBrand.js.map