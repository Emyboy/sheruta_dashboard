import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                {props.children}
            </Switch>
        </BrowserRouter>
    )
}
