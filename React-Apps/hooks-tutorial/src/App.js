import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <p>test</p>
            </BookContextProvider>
        </div>
    );
}

export default App;
