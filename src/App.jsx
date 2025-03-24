import Biblia from "./components/Biblia";
import Deus from "./components/Deus";

const App = () => {
  return (
    <>
      <header>
        <h1>Bases da Fé Cristã</h1>
        <small>20 fundamentos que todo cristão precisa entender</small>
      </header>
      <main>
        <Biblia />
        <Deus />
      </main>
      <footer>
        <h5>Andrew &copy; 2025</h5>
      </footer>
    </>
  );
};

export default App;
