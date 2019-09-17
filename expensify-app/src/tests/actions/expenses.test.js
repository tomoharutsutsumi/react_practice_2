import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense(1, 'something');
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: 'something'
  })
})

test('should setup add', () => {
  const expenseData ={
    description: 'rent',
    amount: 11111,
    createdAt: 1000,
    note: 'this'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should add with default', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0,
      id: expect.any(String)
    }
  })
})