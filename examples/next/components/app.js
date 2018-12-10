import React from 'react';
import PropTypes from 'prop-types';
import { InstantSearch } from './instantsearch';

const AppContext = React.createContext(null);

export default class extends React.Component {
  static propTypes = {
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.any,
  };

  render() {
    const indexName = "instant_search";
    console.log(this.props.resultsState);
    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="instant_search"
        searchState={this.props.searchState}
        resultsState={this.props.resultsState}
      >
        <AppContext.Provider value={{ indexName }}>
          {this.props.children}
        </AppContext.Provider>
      </InstantSearch>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;
