import { FunctionComponent, ReactNode } from "react";

type Props = {
    attribute: string;
    hit: Object;
    tagName?: keyof IntristicHTMLAttributes;
    separator?: ReactNode;
};

declare const Highlight: FunctionComponent<Props>;
export default Highlight;
