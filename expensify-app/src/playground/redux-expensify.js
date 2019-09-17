import { createStore, combineReducers } from 'redux';



store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(VisibleExpenses);
});


// const one = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
// const two = store.dispatch(addExpense({ description: 'coffee', amount: 400, createdAt: -1000 }));
// const three = store.dispatch(addExpense({ description: 'dddd', amount: 500, createdAt: -10800 }));


// store.dispatch(removeExpense({ id: one.expense.id }))

// store.dispatch(editExpense(1, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(200));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(23223));


const demoState = {
    expenses: [{
        id: 'dsdssdsds',
        description: 'jajaj dsdssd',
        note: 'this is final',
        amount: 433334,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'jen',
    age: 24
};

// console.log({
//     ...user,
//     location: 'tokyo',
//     age: 77
// });