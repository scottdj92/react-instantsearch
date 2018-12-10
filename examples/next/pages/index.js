import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import qs from 'qs';
import { Head, AppProvider, findResultsState, AppSearch } from '../components';

class App extends React.Component {
  static propTypes = {
    resultsState: PropTypes.object,
  };


  /*
     nextjs params.query doesn't handle nested objects
     once it does, params.query could be used directly here, but also inside the constructor
     to initialize the searchState.
  */
  static async getInitialProps() {
    const searchState = {
      refinementList: {
        categories: ['Cell Phones', 'Appliances']
      },
    };

    const resultsState = await findResultsState(App, { searchState });
    console.log(resultsState);
    return { resultsState, searchState };
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <div>
          <AppProvider
            searchState={this.props.searchState}
            resultsState={this.props.resultsState}
            onSearchStateChange={this.onSearchStateChange}>
              <AppSearch />
            </AppProvider>
        </div>
      </div>
    );
  }
}

export default App;
