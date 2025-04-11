import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p> Budgeting isn’t about restriction, it’s about awareness. By tracking your expenses here, you’re
  giving yourself the gift of clarity and control. Start small, stay consistent, and celebrate the
  wins (yes, even the small ones).
  You’ve got this!</p>
      <h3>Total Expenditure: Ksh {totalAmount.toFixed(2)}</h3>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
