import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import initStore from "config/store";
import {HashRouter} from "react-router-dom";
import CraftView from "./container/craftView/index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";


const store = initStore();

export default class App extends React.Component {

    render() {
        return (
                <Provider store={store}>
                    <div>
                        <HashRouter>
                            <CraftView craft="Premium Kaolin Refiner"/>
                        </HashRouter>
                    </div>
                </Provider>
        )
    };
}


ReactDOM.render( <App />, document.getElementById( "application" ) );