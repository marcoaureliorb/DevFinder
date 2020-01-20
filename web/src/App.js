

// Iniciar do ponto 42:20




import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }
  // Nao pode ter um componente abaixo de outro sem uma tag. 
  // nesse caso coloca a tag vazia para nao gerr
  // divs desnecessárias.
  return (
    <>
    <Header title="Meu painel" />
    <Header title="Meu painel" />
    <Header title="Meu painel" />
  <h1>Contador: {counter}</h1>
  <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
