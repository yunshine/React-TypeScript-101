import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
import Review from './Review';
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

                    <Route exact path='/level3'>
                        <Level3 />
                    </Route>

                    <Route exact path='/level4'>
                        <Level4 />
                    </Route>

                    <Route exact path='/level5'>
                        <Level5 />
                    </Route>

                    <Route exact path='/review'>
                        <Review />
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
