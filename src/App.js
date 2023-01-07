import Products from "./Components/ProductsLista";
import Testimonio from "./Components/Testimonio";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Catálogo</h1>
      <h2>Lista de productos</h2>
      <Products />
      <Testimonio
        nombre={Products.name}
        pais="Singapur"
        imagen="1"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Da miedo cambiar de carrera. 
        Solo gané la confianza de que podía programar 
        trabajando a través de los cientos de horas de 
        lecciones gratuitas en freeCodeCamp. 
        Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
      />
      <div className="centro">
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="2"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
      </div>
    </div>
  );
}
