function ExpenseTable({ expenses, onDelete }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.description}</td>
              <td>${exp.amount.toFixed(2)}</td>
              <td>{exp.category}</td>
              <td>
                <button onClick={() => onDelete(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  