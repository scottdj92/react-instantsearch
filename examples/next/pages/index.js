import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import qs from 'qs';
import { Head, AppProvider, findResultsState, AppSearch } from '../components';



export default class extends React.Component {
  static propTypes = {
    resultsState: PropTypes.object,
  };


  /*
     nextjs params.query doesn't handle nested objects
     once it does, params.query could be used directly here, but also inside the constructor
     to initialize the searchState.
  */
  static async getInitialProps() {
    const searchState = { refinementList: ["Cell Phones"] }
    const resultsState = await findResultsState(AppProvider, { searchState });
    console.log(resultsState);
    return { resultsState, searchState };
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <div>
          <AppProvider
            resultsState={this.props.resultsState}
            onSearchStateChange={this.onSearchStateChange}>
              <AppSearch />
            </AppProvider>
        </div>
      </div>
    );
  }
}
