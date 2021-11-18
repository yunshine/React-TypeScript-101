import CityForm from "./components/CityForm";
import WeatherDetails from "./components/WeatherDetails";
import CityContextProvider from "./contexts/CityContext";
import './index.css';

function App() {
    return (
        <div className="App">
            <CityContextProvider>
                <CityForm />
                <WeatherDetails />
            </CityContextProvider>
        </div>
    );
}

export default App;
