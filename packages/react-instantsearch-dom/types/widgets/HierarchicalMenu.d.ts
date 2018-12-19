import { FunctionComponent, ReactNode } from "react";

type Props = {
    attributes: string[];
    showMore?: boolean | false;
    separator?: ReactNode;
    rootPath?: string;
    showParentLevel?: boolean | true;
    defaultRefinement?: string;
    transformItems?: (items: any) => any;
};

declare const HierarchicalMenu: FunctionComponent<Props>;
export default HierarchicalMenu;
