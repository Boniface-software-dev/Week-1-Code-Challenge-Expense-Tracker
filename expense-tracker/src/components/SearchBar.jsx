function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
// This component is a simple search bar that allows users to filter expenses by their description.
// It takes two props: searchTerm (the current search term) and setSearchTerm (a function to update the search term).
// The component renders an input field where users can type their search query.
// As the user types, the onChange event updates the searchTerm state in the parent component (App.jsx).
// This allows the parent component to filter the list of expenses based on the search term.
// The search term is used in the ExpenseTable component to filter the displayed expenses.  