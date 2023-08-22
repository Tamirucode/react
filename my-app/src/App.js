import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
       <Content/>
      <NavBarForm/>
     {/*<NavBarSimple/>*/}
    {/*<Sidebar/>*/ }
        
    </div>

  );
}

export default App;
