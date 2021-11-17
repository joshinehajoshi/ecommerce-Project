import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Header from './Components/Header';
import SignIn from './Components/SignIn';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SignIn />
      <Cart />
    </div>
  );
}

export default App;
