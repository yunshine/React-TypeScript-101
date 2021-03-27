import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SneakersIndex from './SneakersIndex';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>This is the App component...</h1>
                <Switch>
                    <Route path='/'>
                        <SneakersIndex />
                    </Route>
                </Switch>
            </div >
        </Router>
    );
}

export default App;
