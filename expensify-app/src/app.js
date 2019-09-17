import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 1000, createdAt: 30000}))
store.dispatch(addExpense({ description: "gas bill", amount:43434343, createdAt: 4555}))
store.dispatch(addExpense({ description: "rent", amount: 10, createdAt: 30000000}))
let state = store.getState()
getVisibleExpenses(state.expenses, state.filters)

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
