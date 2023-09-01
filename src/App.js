function SelecionaPaises() {
  return (
    <div>
   <h1>Selecione um pais </h1>
   <p>Paises da America do Norte</p>
     <select>
       <option>EUA</option>
       <option>Canada</option>
       <option>Mexico</option>
       <option>Mexico</option>
       </select>
    </div>
  );
}
function Selecioneidioma() {
  return(
    <div>
      <h1>Selecione um idioma</h1>
      <p>Selecione o idioma</p>
      <select>
        <option>Inglês</option>
        <option>Espanhol</option>
      </select>
      </div>
  );
}




      
    
   
  


export default function MyApp() {
  return (
    <div>

      <SelecionaPaises />
      <Selecioneidioma />
    
    </div>
  );
}
