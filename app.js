window.onload = function () {
  //write your code here

  document.querySelector(".miButton").addEventListener("click", changeCard)


};


let changeCard = () =>{

  //Creamos los arrays
  let number = ["A", "2", "3", "4", " 5", "6", "7", "8", "9", "10", "J", "K"];
  let icons = ["♦", "♥", "♠", "♣"];


  //Cambiamos el resultado del h1 por un valor del array numero aleatorio
  document.querySelector(".number").innerHTML = number[rand(number)];  // la funcion que devuelve un numero aleatorio esta abajo del todo (fila:44)

  //introducimos en una variable un icono aleatorio
  let randIcon = icons[rand(icons)];


  // si recibe el corazon o el diamante añade una clase que los pinta de rojo
  if (randIcon === "♥" || randIcon === "♦") {

    document.querySelector(".icon1").classList.add("printRed")
    document.querySelector(".icon2").classList.add("printRed")


  }else if (randIcon === "♠" || randIcon === "♣"){  // Si son los otros dos, borra la clase que pinta de rojo

    document.querySelector(".icon1").classList.remove("printRed")
    document.querySelector(".icon2").classList.remove("printRed")

  }

  //cambiamos los iconos
  document.querySelector(".icon1").innerHTML = randIcon;
  document.querySelector(".icon2").innerHTML = randIcon;

}

  //Creamos una funcion que devuelve un numero aleatorio dependiendo del largo del array que pasamos por parametro
  let rand = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };