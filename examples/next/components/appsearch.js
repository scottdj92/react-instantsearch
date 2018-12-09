import React from "react";
import { AppContextConsumer } from "./app";
import {
    RefinementList,
    SearchBox,
    Hits,
    Configure,
    Pagination,
    Highlight,
} from 'react-instantsearch/dom';

const HitComponent = ({ hit }) => (
    <div className="hit">
        <div>
            <div className="hit-picture">
                <img src={`${hit.image}`} />
            </div>
        </div>
        <div className="hit-content">
            <div>
                <Highlight attribute="name" hit={hit} />
                <span> - ${hit.price}</span>
                <span> - {hit.rating} stars</span>
            </div>
            <div className="hit-type">
                <Highlight attribute="type" hit={hit} />
            </div>
            <div className="hit-description">
                <Highlight attribute="description" hit={hit} />
            </div>
        </div>
    </div>
);

export const AppSearch = () =>
    <AppContextConsumer>
        {({ indexName }) =>
            <>
                <Configure hitsPerPage={12} />
                <header>
                    <h1>React InstantSearch + Next.Js</h1>
                    <SearchBox />
                </header>
                <content>
                    <menu>
                        <RefinementList attribute="categories" defaultRefinement={["Cell Phones"]} />
                    </menu>
                    <results>
                        <Hits hitComponent={HitComponent} />
                    </results>
                </content>
                <footer>
                    <Pagination />
                    <div>
                        See{' '}
                        <a href="https://github.com/algolia/react-instantsearch/tree/master/examples/next">
                            source code
                         </a>{' '}
                        on github
                    </div>
                </footer>
            </>
        }
    </AppContextConsumer>;
