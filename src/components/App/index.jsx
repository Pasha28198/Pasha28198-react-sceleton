import React, {Component} from 'react';
import routes from 'src/routes';
import { Switch, Route } from 'react-router-dom'

//Layout components
import Header from 'containers/Header';
import Footer from 'containers/Footer';


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
                <Header/>
                <Switch>
                    {
                        routes
                            .filter((router) => router.auth === this.state.isLoggedIn)
                            .map(route => (
                                <Route path={route.path} component={route.component} exact={route.exact}/>
                            ))
                    }
                </Switch>
                <Footer/>
            </div>
            );
    }
}

export default App