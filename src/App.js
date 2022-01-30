import './App.css';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Legislacao from './componentes/Legislacoes';
import Navbar from './componentes/Navbar';
import Projeto from './componentes/Projeto';
import Acoes from './componentes/Acoes';
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
        <Acoes />
        <SecaoAjuda />
        <Legislacao />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
