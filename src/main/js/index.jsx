import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import initStore from "config/store";
import {HashRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Main from "./components/main/index";


const store = initStore();

export default class App extends React.Component {

    render() {
        return (
                <Provider store={store}>
                    <div>
                        <HashRouter>
                            <Main/>
                        </HashRouter>
                    </div>
                </Provider>
        )
    };
}


ReactDOM.render( <App />, document.getElementById( "application" ) );