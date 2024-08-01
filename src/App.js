import './App.css';
import TopSection from './components/TopSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Skill from './components/Skill';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Skill/>
      <ProjectContainer/>
      <Footer/>
    </div>
  );
}

export default App;
