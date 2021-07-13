import './assets/style.css'
import BarraDeNavegacao from './assets/barraDeNavegacao';
import Coluna1 from './assets/coluna1';
import Card1 from './assets/Card1';
function App() {
  return (
    <div>
        <section id='headerConteiner'>
          <BarraDeNavegacao/>
          <Coluna1/>
        </section>
        <section id= 'body'>
          <Card1/>
        </section>
    </div>
  );
}
export default App;