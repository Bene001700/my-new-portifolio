import "./App.css";
import Inicio from "./components/inicio";
import Main from "./components/main";
import Header from "./templates/header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
      </Main>
    </>
  );
}

export default App;
