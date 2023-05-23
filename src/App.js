import logo from './logo.svg';
import './App.css';
import  MyComponent from "./MyComponent"
import FetchAPI from './FetchAPI';

function App() {
  return (
    <div className="App">
      {/* render component here*/}
      <div>
        <MyComponent />
      </div>
      <div>
        <FetchAPI />
      </div>
    </div>
    
  );
}

export default App;
