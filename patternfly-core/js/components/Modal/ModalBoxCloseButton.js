"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxCloseButton = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const modal_box_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ModalBox/modal-box"));
const Button_1 = require("../Button");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const ModalBoxCloseButton = (_a) => {
    var { className, onClose = () => undefined, ouiaId } = _a, props = tslib_1.__rest(_a, ["className", "onClose", "ouiaId"]);
    return (React.createElement("div", { className: (0, react_styles_1.css)(modal_box_1.default.modalBoxClose, className) },
        React.createElement(Button_1.Button, Object.assign({ variant: "plain", onClick: onClose, "aria-label": "Close" }, (ouiaId && { ouiaId: `${ouiaId}-${exports.ModalBoxCloseButton.displayName}` }), props),
            React.createElement(times_icon_1.default, null))));
};
exports.ModalBoxCloseButton = ModalBoxCloseButton;
exports.ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
//# sourceMappingURL=ModalBoxCloseButton.js.map