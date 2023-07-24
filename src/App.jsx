import './App.scss';
import Header from './Component/Header/Header';
import Menu from './Component/Menu/Menu';
function App() {
  return (
   <>
     
     <div className="container">
      <div className="center">
        <Header/>
        <Menu/>
      </div>
     </div>
   </>
  );
}

export default App;
