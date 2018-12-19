import { FunctionComponent, ReactNode } from "react";
import { jSXAttribute } from "babel-types";

type Props = {
    attributes: string[];
    node?: React.ReactNode;
    rootUrl?: string;
    transformItems?: () => void;
};

declare const BreadCrumb: FunctionComponent<Props>;
export default BreadCrumb;
