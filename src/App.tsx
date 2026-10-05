import "./App.css";
import Inicio from "./components/inicio";
import Main from "./components/main";
import Sobre from "./components/sobre";
import Header from "./templates/header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
        <Sobre />
      </Main>
    </>
  );
}

export default App;
