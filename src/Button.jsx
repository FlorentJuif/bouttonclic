import React, { useState } from "react";

const Button = () => {
  const [nbClic, setNbClic] = useState(0);
  
  return (
    <div>
      <button onClick={() => setNbClic(nbClic + 1)}>Clic ici hehe !</button>
      <p>tu as Cliqué {nbClic} fois</p>
    </div>
  );
};

export default Button;
