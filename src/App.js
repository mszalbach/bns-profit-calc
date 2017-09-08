import React from "react";
import {Provider} from "react-redux";
import initStore from "./config/store";
import {HashRouter} from "react-router-dom";
import {Grid} from "semantic-ui-react";
import ReduxToastr from "react-redux-toastr";
import ComputerLayout from "./views/layout/computerLayout";
import HandyLayout from "./views/layout/handyLayout";

import 'semantic-ui-css/semantic.min.css';



const store = initStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <HashRouter>
                        <div>
                            <Grid>
                                <Grid.Row columns={1} only='mobile'>
                                    <Grid.Column>
                                        <HandyLayout/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={1} only='tablet computer'>
                                    <Grid.Column>
                                        <ComputerLayout/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </HashRouter>
                    <ReduxToastr position="bottom-right"/>
                </div>
            </Provider>
        )
    };
}

export default App;
