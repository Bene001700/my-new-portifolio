import "./App.css";
import Contantos from "./components/contatos";
import Habilidades from "./components/habilidades";
import Inicio from "./components/inicio";
import Main from "./components/main";
import Projetos from "./components/projetos";
import Sobre from "./components/sobre";
import Footer from "./templates/footer";
import Header from "./templates/header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contantos />
      </Main>
      <Footer />
    </>
  );
}

export default App;
