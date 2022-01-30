import './App.css';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Navbar from './componentes/Navbar';
import Projeto from './componentes/Projeto';
import Acoes from './componentes/Acoes';


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
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
