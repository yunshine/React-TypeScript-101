import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SneakerShow from './SneakerShow';
import Create from './Create';
import Edit from './Edit';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/sneakers/create'>
                        <Create />
                    </Route>
                    <Route exact path='/sneakers/:id/edit'>
                        <Edit />
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
