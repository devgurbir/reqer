import './App.css';

import Typebar from './components/LeftSidebar/Typebar';
import Navbar from './components/Navbar';
import AppContainer from './components/Layout/AppContainer';
import MainWrapper from './components/Main/MainWrapper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppContainer>
        <Typebar />
        <MainWrapper />
      </AppContainer>
    </div>
  );
}

export default App;
