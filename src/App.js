// import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import Campus from './components/campus';
import Name from './components/name';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <Link to="Campus">Campus</Link>
      <Link to="/Name">Name</Link>
      <Link to="/Contact">Contact</Link>
      <Routes>
        <Route path='/Campus' element={<Campus/>}></Route>
        <Route path='/Name' element={<Name/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
