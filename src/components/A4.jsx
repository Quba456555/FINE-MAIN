import React, { useState } from "react";

function LicznikZObrazkami() {
  const [stan, ustawStan] = useState(0);

  const zwiekszStan = () => {
    ustawStan(stan + 1);
  };

  const zmniejszStan = () => {
    ustawStan(stan - 1);
  };

  const wybierzObrazek = () => {
    if (stan < 10) {
      return "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg";
    } else if (stan < 20) {
      return "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg";
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg";
    }
  };

  return (
    <div>
      <p>Stan licznika: {stan}</p>
      <button onClick={zwiekszStan}>Zwiększ licznik</button>
      <button onClick={zmniejszStan}>Zmniejsz licznik</button>
      <div>
        <img src={wybierzObrazek()} alt="Obrazek" />
      </div>
    </div>
  );
}

export default LicznikZObrazkami;
