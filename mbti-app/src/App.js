import logo from './logo.svg';
import './App.css';
import './components/Header';
import './components/Footer';
import './components/Start';
import './components/QnA';
import './components/Result';

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Start></Start>
      <Footer></Footer>
    </div>
  );
}

export default App;