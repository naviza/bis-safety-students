
import './App.css';
import MainTable from './components/MainTable';
import logo from './BIS_logo_LowRes_250x51.png'

function App() {
  return (
    <div className="App" style={{margin:"auto", padding:"50px"}}>
      <img src={logo} alt="Logo" style={{paddingBottom:"50px"}}/>
      <MainTable />
    </div>
  );
}

export default App;
