import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Reducers  from "./reducers";
import Header from "./components/header";
import './css/style.css';
import PostComponent from './components/postList';
import UsersComponents from './components/usersList';
import AlbumsComponents from './components/albumsList';
import TodosComponents from './components/todosList';
import PostNewComponent from './components/postNew';
import PostViewComponent from './components/postView';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <div className="padding24"> 
                    <Header/>
                </div>
                <Switch>
                    <Route path="/" exact component={ PostComponent }/>
                    <Route path="/posts/new" exact component={ PostNewComponent }/>
                    <Route path="/posts/view/:id" exact component={ PostViewComponent }/>
                    <Route path="/users" component={ UsersComponents }/>
                    <Route path="/albums" component={ AlbumsComponents }/>
                    <Route path="/todos" component={ TodosComponents}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);