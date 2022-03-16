import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    //Date(year, monthIndex, day)
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  //TODO: expense type? id는 왜 있지?
  const addExpenseHandler = (expense: { id: string; title: string; amount: number; date: Date; }) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;