import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
function App() {
  return (
    <div className="App">
      <NavBarChild buttonText={login}/>
      <NavBarForm/>
     {/*<NavBarSimple/>*/}
    {/*<Sidebar/>*/ }
        
    </div>

  );
}

export default App;
