import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browerHistory, Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browerHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={HomePageContainer} />
                    <Route path="/result" component={ResultPageContainer} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementsById("app")
);

