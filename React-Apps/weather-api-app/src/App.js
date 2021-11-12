import './App.css';
import Home from './Home';

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;

/* City Context
    keeps track of city and makes the city available to components


City Reducer
    allows the city context's state to be updated

City Form Component
    sets the city and sends it to the dispatch

Weather Details
    fetches data from API; sets isLoading state; displays the weather
information

Weather App Component
    holds form, weather details, and "loading" render
*/