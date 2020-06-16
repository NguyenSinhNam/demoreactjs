import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { store } from './store'
import { LayoutView } from './screens/layout'
import { User } from './screens/user'
import Note from './screens/note'
import initReduxStore from './store'
const store = initReduxStore()
ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <LayoutView>
          <Switch>
            <Route exact path="/user" component={User} />

            {/* </Route> */}
            <Route exact path="/note" component={Note} />
          </Switch>
        </LayoutView>
      </BrowserRouter>
    </Provider>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
