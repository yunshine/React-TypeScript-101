// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogShow from './BlogShow';
// import Sandbox from './Sandbox';

function App() {
    // const title = 'This is the title in the App component...';
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    {/* <h2>{title}</h2>
                    <h2>Today's date: {today}</h2>
                    <br /> */}
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/create'>
                            <Create />
                        </Route>
                        <Route path='/blogs/:id'>
                            <BlogShow />
                        </Route>
                    </Switch>
                </div>
                <br />
                {/* <Sandbox /> */}
            </div>
        </Router>
    );
}

export default App;
