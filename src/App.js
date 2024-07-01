import './App.css';
import TopSection from './components/TopSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
