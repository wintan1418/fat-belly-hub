import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './container/landingPage';
import Header from './component/Header';
import IngredientsList from './container/Ingredient';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/ingredients/:id" component={IngredientsList} />
      </Router>
    </div>
  );
}

export default App;
