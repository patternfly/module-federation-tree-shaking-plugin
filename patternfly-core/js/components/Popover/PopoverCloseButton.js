"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverCloseButton = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const popover_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Popover/popover"));
const Button_1 = require("../Button");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const PopoverCloseButton = (_a) => {
    var { onClose = () => undefined } = _a, props = tslib_1.__rest(_a, ["onClose"]);
    return (React.createElement("div", { className: (0, react_styles_1.css)(popover_1.default.popoverClose) },
        React.createElement(Button_1.Button, Object.assign({ onClick: onClose, variant: "plain", "aria-label": true }, props, { style: { pointerEvents: 'auto' } }),
            React.createElement(times_icon_1.default, null))));
};
exports.PopoverCloseButton = PopoverCloseButton;
exports.PopoverCloseButton.displayName = 'PopoverCloseButton';
//# sourceMappingURL=PopoverCloseButton.js.map