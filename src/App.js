
import './App.css';
import Users from './Components/Users'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mt-4">
      <Search/>
    
    </div>
      <div className="container mt-2">
     
    <Users/>
    </div>
    </div>
  );
}

export default App;
