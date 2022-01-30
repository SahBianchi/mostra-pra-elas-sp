import './App.css';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Navbar from './componentes/Navbar';
import Projeto from './componentes/Projeto';
import SecaoAjuda from './componentes/SecaoAjuda';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Inicio />
        <Projeto />
        <SecaoAjuda />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
