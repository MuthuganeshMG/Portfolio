import './App.css';
import Header from './components/Header';
import TopSection from './components/TopSection';
import Skill from './components/Skill';
import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <Skill />
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
