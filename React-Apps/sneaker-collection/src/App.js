import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SneakersIndex from './SneakersIndex';
import SneakerShow from './SneakerShow';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>This is the App component...</h1>
                <Switch>
                    <Route exact path='/'>
                        <SneakersIndex />
                    </Route>
                    <Route path='/sneakers/:id'>
                        <SneakerShow />
                    </Route>
                </Switch>
            </div >
        </Router>
    );
}

export default App;
