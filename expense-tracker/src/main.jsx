import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <><React.StrictMode>
    <App />
  </React.StrictMode>
  
  <footer style={{
    marginTop: '2rem',
    padding: '1rem 0',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
    borderTop: '1px solid #ddd'
  }}>
      <p>© {new Date().getFullYear()} Expense Tracker.  Every dollar has a story. Log it, track it, understand it.</p>
      <p>Track wisely. Spend mindfully.</p>
    </footer></>
)
