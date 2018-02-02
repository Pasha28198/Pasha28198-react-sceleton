import React, {Component} from 'react';
import routes from 'src/routes';
import { Switch, Route } from 'react-router-dom'
import NotFound from 'pages/NotFound';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return  (
            <div>
                <p>Header here</p>
                <Switch>
                    {
                        routes
                            .filter((router) => router.auth === this.state.isLoggedIn)
                            .map(route => (
                                <Route path={route.path} component={route.component} exact={route.exact}/>
                            ))
                    }
                </Switch>
                <p>Footer here</p>
            </div>
            );
    }
}

export default App