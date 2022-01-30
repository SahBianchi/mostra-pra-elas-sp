import './App.css';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Legislacao from './componentes/Legislacoes';
import Navbar from './componentes/Navbar';
import Projeto from './componentes/Projeto';
import Acoes from './componentes/Acoes';
import Maps from './componentes/Maps';
import SecaoAjuda from './componentes/SecaoAjuda';
import Parceiros from './componentes/Parceiros';
import Ajuda from './componentes/Ajuda';



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
        <Maps />
        <SecaoAjuda />
        <Legislacao />
        <Parceiros />
        <Ajuda />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
