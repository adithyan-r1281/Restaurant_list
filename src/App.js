import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurantlist from './Components/Restaurantlist';
import Viewrestaurant from './Components/Viewrestaurant';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
       {/* <h2>Restaurant Application</h2> */}
       <Routes>
        <Route path='/' element={ <Restaurantlist/> }/>
       <Route path='/Viewrestaurant/:id' element={<Viewrestaurant/>} />
       </Routes>
       
       <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
