import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Content from './pages/Content' ;
import N1Page from './pages/N1Page';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,  Switch, Route  } from 'react-router-dom' 

ReactDOM.render(
<BrowserRouter>
<Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/content" component={Content} />
            <Route path="/n1" component={N1Page} />
            {/* <Route path='*' component={ComponenteDePagina404} /> */}
</Switch>
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
