import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store/store';

export default function Router(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {props.children}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
