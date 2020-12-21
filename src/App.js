// import React from 'react'; // no need React v17

// child components
import BasicTable from './components/BasicTable';

// styles
import './styles/app.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>React Table Tut Proto</h1>
      </header>
      <BasicTable />
    </div>
  );
}

export default App;
