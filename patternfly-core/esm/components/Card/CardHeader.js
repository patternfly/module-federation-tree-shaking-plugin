import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardContext } from './Card';
import { CardHeaderMain } from './CardHeaderMain';
import { CardActions } from './CardActions';
import { Button } from '../Button';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
export const CardHeader = (_a) => {
    var { children, className, actions, id, onExpand, toggleButtonProps, isToggleRightAligned } = _a, props = __rest(_a, ["children", "className", "actions", "id", "onExpand", "toggleButtonProps", "isToggleRightAligned"]);
    return (React.createElement(CardContext.Consumer, null, ({ cardId }) => {
        const cardHeaderToggle = (React.createElement("div", { className: css(styles.cardHeaderToggle) },
            React.createElement(Button, Object.assign({ variant: "plain", type: "button", onClick: (evt) => {
                    onExpand(evt, cardId);
                } }, toggleButtonProps),
                React.createElement("span", { className: css(styles.cardHeaderToggleIcon) },
                    React.createElement(AngleRightIcon, { "aria-hidden": "true" })))));
        return (React.createElement("div", Object.assign({ className: css(styles.cardHeader, isToggleRightAligned && styles.modifiers.toggleRight, className), id: id }, props),
            onExpand && !isToggleRightAligned && cardHeaderToggle,
            actions && React.createElement(CardActions, { className: actions === null || actions === void 0 ? void 0 : actions.className, hasNoOffset: actions === null || actions === void 0 ? void 0 : actions.hasNoOffset },
                " ",
                actions.actions,
                " "),
            children && React.createElement(CardHeaderMain, null, children),
            onExpand && isToggleRightAligned && cardHeaderToggle));
    }));
};
CardHeader.displayName = 'CardHeader';
//# sourceMappingURL=CardHeader.js.map