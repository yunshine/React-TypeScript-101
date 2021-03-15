// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
    const title = 'This is the title in the App component...';
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <h2>{title}</h2>
                <h2>Today's date: {today}</h2>
                <Home />
            </div>
        </div>
    );
}

export default App;
