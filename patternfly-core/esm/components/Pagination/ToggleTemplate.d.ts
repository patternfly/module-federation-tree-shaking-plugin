import * as React from 'react';
/** Allows more customization of the pagination dropdown toggle. The following properties
 * should be passed into the pagination component's toggleTemplate property.
 */
export interface PaginationToggleTemplateProps {
    /** The first index of the items being paginated */
    firstIndex?: number;
    /** The last index of the items being paginated */
    lastIndex?: number;
    /** The total number of items being paginated */
    itemCount?: number;
    /** The type or title of the items being paginated */
    itemsTitle?: string;
    /** The word that joins the index and itemCount/itemsTitle */
    ofWord?: React.ReactNode;
}
export declare const ToggleTemplate: React.FunctionComponent<PaginationToggleTemplateProps>;
//# sourceMappingURL=ToggleTemplate.d.ts.map