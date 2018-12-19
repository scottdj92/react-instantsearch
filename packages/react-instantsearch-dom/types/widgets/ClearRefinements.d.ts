import { FunctionComponent } from "react";

type Props = {
    clearsQuery?: boolean | false;
    transformItems?: (items: any) => any;
};

declare const ClearRefinements: FunctionComponent<Props>;
export default ClearRefinements;
