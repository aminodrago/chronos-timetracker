// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getAuthorized } from 'selectors';
import type { Node, StatelessFunctionalComponent } from 'react';

import { AppWrapper } from 'styles';
import AuthForm from './AuthForm';
import Main from './Main';

import type { State } from '../types';

type Props = {
  isAuthorized: boolean
};

const App: StatelessFunctionalComponent<Props> = (props: Props): Node => (
  <AppWrapper>
    {props.isAuthorized
      ? <Main />
      : <AuthForm />
    }
  </AppWrapper>
);

function mapStateToProps(state: State): Props {
  return {
    isAuthorized: getAuthorized(state),
  };
}

export default connect(mapStateToProps, () => ({}))(App);
