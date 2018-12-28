import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import { createStore, storeChange } from './redux';


export default class App extends Component {
    static childContextTypes = {
        store: PropTypes.object,
        dispatch: PropTypes.func,
        subscribe: PropTypes.func,
        getStore: PropTypes.func
    }
    getChildContext () {
        const state = { 
            head: '我是全局 head',
            body: '我是全局 body',
            headBtn: '修改 head',
            bodyBtn: '修改 body' 
        }
        const { store, dispatch, subscribe, getStore } = createStore(state, storeChange);
        return { store, dispatch, subscribe, getStore }
    }
    render () {
        return (
            <div className="App">
                <Head/>
                <Body/>
            </div>
        )
    }
}
