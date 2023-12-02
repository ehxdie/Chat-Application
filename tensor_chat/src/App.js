import './App.css';
import { store } from './Features/Store';
import MainContainer from './components/MainContainer'; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainContainer />
        </Provider>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
