window.onload = function () {
  //write your code here

  document.querySelector(".miBoton").addEventListener("click", cambiaCarta)


};


let cambiaCarta = () =>{

  //Creamos los arrays
  let numero = ["A", "2", "3", "4", " 5", "6", "7", "8", "9", "10", "J", "K"];
  let iconos = ["♦", "♥", "♠", "♣"];


  //Cambiamos el resultado del h1 por un valor del array numero aleatorio
  document.querySelector(".numero").innerHTML = numero[rand(numero)];  // la funcion que devuelve un numero aleatorio esta abajo del todo (fila:44)

  //introducimos en una variable un icono aleatorio
  let randIcon = iconos[rand(iconos)];


  // si recibe el corazon o el diamante añade una clase que los pinta de rojo
  if (randIcon === "♥" || randIcon === "♦") {

    document.querySelector(".icono1").classList.add("pintaRojo")
    document.querySelector(".icono2").classList.add("pintaRojo")


  }else if (randIcon === "♠" || randIcon === "♣"){  // Si son los otros dos, borra la clase que pinta de rojo

    document.querySelector(".icono1").classList.remove("pintaRojo")
    document.querySelector(".icono2").classList.remove("pintaRojo")

  }

  //cambiamos los iconos
  document.querySelector(".icono1").innerHTML = randIcon;
  document.querySelector(".icono2").innerHTML = randIcon;

}

  //Creamos una funcion que devuelve un numero aleatorio dependiendo del largo del array que pasamos por parametro
  let rand = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };