import "./App.css";
import Inicio from "./components/inicio";
import Main from "./components/main";
import Projetos from "./components/projetos";
import Sobre from "./components/sobre";
import Header from "./templates/header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
        <Sobre />
        <Projetos />
      </Main>
    </>
  );
}

export default App;
