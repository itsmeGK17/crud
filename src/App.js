import './App.css';
import Phone from './Compo/Phone';
import TableForm from './Compo/TableForrm';

// export const blockInvalidChar = e =>
//   ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
function App() {

  
  return (
    <div className="App">
      {/* <TableForm /> */}
      <Phone/>
    </div>
  );
}

export default App;
