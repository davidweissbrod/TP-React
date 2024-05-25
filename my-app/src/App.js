import './App.css';
import Presentacion from './components/presentacion';
import David from './components/David'
import Ian from './components/Ian'
import DesarrolloWeb from './components/Desarrollo-Web';
import UxUi from './components/ui-ux';
import CardProyectoCuarto from './components/Card-Proyecto-Cuarto'
import CardProyectoFinal from './components/Card-Proyecto-Final'
import CardONU from './components/Card-ONU';
import Educacion from './components/Educacion'
import BaseDeDatos from './components/Base-Datos'
import Contacto from './components/Contacto'
import ContactoText from './components/ContactoText'


function App() {
  return (
    <div class = "container">
        <div class = "inicio">
          <div class = "presentacion">
            <Presentacion/>
          </div>
          <div class = "presentacion-david">
            <David/>
          </div>
          <div class = "presentacion-ian">
            <Ian/>
          </div>
        </div>
        <div class = "conocimientos">
          <div class = "bd">
            <BaseDeDatos/>
          </div>
          <div class = "desarrollo-web">
            <DesarrolloWeb/>
          </div>
          <div class = "ux-ui">
            <UxUi/>
          </div>
        </div>
        <div class = "experiencia">
          <div class = "card-cuarto">
            <CardProyectoCuarto/>
          </div>
          <div class = "card-proyecto-final">
            <CardProyectoFinal/>
          </div>
          <div class = "card-onu">
            <CardONU/>
          </div>
        </div>
        <div class = "educacion">
          <Educacion/>
          <Info/>
        </div>
        <div class = "contactos">
          <div class = "form">
            <Contacto/>
          </div>
          <div class = "contact-text">
            <ContactoText/>
          </div>
        </div>
    </div>
  );
}

export default App;
