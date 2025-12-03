async function obtenerAnimales() {
  const resp = await fetch('http://localhost:3000/animals');
  const data = await resp.json();
  console.log("Lista de animales:", data);
}

obtenerAnimales();