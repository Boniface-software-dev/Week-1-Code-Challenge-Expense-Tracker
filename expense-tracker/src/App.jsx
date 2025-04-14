import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

//Filter expenses based on search term
  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  // Sort filtered expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortType === 'alpha') {
      return a.category.localeCompare(b.category);
    } else if (sortType === 'highToLow') {
      return b.amount - a.amount;
    } else if (sortType === 'lowToHigh') {
      return a.amount - b.amount;
    }
    return 0;
  });

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

{/*sorting function */}
       <div style={{ margin: '1rem 0' }}>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">None</option>
          <option value="alpha">Category (A–Z)</option>
          <option value="highToLow">Amount (High → Low)</option>
          <option value="lowToHigh">Amount (Low → High)</option>
        </select>
      </div>

        <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
