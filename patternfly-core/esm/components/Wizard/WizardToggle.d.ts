import * as React from 'react';
import { WizardStep } from './Wizard';
export interface WizardToggleProps {
    /** Function that returns the WizardNav component */
    nav: (isWizardNavOpen: boolean) => React.ReactElement;
    /** The wizard steps */
    steps: WizardStep[];
    /** The currently active WizardStep */
    activeStep: WizardStep;
    /** The WizardFooter */
    children?: React.ReactNode;
    /** Set to true to remove body padding */
    hasNoBodyPadding: boolean;
    /** If the nav is open */
    isNavOpen: boolean;
    /** Callback function for when the nav is toggled */
    onNavToggle: (isOpen: boolean) => void;
    /** The button's aria-label */
    'aria-label'?: string;
    /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
     * The aria-labelledby will only be applied when the body content overflows and renders a scrollbar.
     */
    mainAriaLabelledBy?: string;
    /** Adds an accessible name to the wizard body when the body content overflows and renders
     * a scrollbar.
     */
    mainAriaLabel?: string;
    /** If the wizard is in-page */
    isInPage?: boolean;
    /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
    hasDrawer?: boolean;
    /** Flag indicating the wizard drawer is expanded */
    isDrawerExpanded?: boolean;
    /** Callback function for when the drawer is toggled */
    onExpandDrawer?: () => void;
}
export declare const WizardToggle: React.FunctionComponent<WizardToggleProps>;
//# sourceMappingURL=WizardToggle.d.ts.map