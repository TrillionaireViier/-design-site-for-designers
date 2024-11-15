import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./store/store";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
