import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Level1 from './Level1';
import Level2 from './Level2';
import NotFound from './NotFound';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route exact path='/'>
                        <Level1 />
                    </Route>

                    <Route exact path='/level2'>
                        <Level2 />
                    </Route>

                    <Route path='*'>
                        <NotFound />
                    </Route>

                </Switch>
            </Router >
        </div >
    );
}

export default App;
