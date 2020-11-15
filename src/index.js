/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-11-14 23:50:28
 * @LastEditTime: 2020-11-15 23:51:39
 * @LastEditors: rodchen
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundaries from './ErrorBoundaries';
import Main from './ErrorBoundaries/Main'

ReactDOM.render(
  // <React.StrictMode>
    <ErrorBoundaries>
      <Main />
    </ErrorBoundaries>
,
  document.getElementById('root')
);
