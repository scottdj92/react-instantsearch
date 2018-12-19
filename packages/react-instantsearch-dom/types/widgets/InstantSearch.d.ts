import { Component } from "react";

type Props = {
    indexName: string;
    searchClient: string;
    createUrl?: () => void;
    refresh: boolean;
    searchState?: Object;
    onSearchStateChange?: () => void;
    onSearchParameters?: () => void;
    resultsState?: Object | Array<any>;
    root: keyof InstristicHTMLAttributes;
    stalledSearchDelay: number;
};

declare class InstantSearch extends React.Component<Props> {}
export default InstantSearch;
