import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: crypto.randomUUID(),
      description,
      amount: parseFloat(amount),
      category,
    };
    onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="gas">Gas</option>
          <option value="clothing">Clothing</option>
          <option value="other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

