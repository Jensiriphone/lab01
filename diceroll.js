function rollD6() {
    const rollResult = Math.floor(Math.random() * 6 + 1);
    document.getElementById("resultD6").innerText = rollResult;
  }
  
  function rollD10() {
    const rollResult = Math.floor(Math.random() * 10 + 1);
    document.getElementById("resultD10").innerText = rollResult;
  }