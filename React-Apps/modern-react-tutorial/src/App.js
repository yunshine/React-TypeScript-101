import './App.css';

function App() {
    const title = 'This is the title in the App component...';
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <h2>Today's date: {today}</h2>
            </div>
        </div>
    );
}

export default App;
