
/*
1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
desordenada. Tiene que crear la lista uno mismo.
*/

// array con numeros aleatorios
const arrayNumbers = [];
for (let i = 0; i < 15; i++) {
    arrayNumbers.push(Math.floor(Math.random() * 20 )); 
};

// mostrando por consola el array de numeros para verificar que se hayan agregado
console.log(arrayNumbers);

// ordenando el array de numeros
arrayNumbers.sort(function(a, b) {
    return a - b;
});

// mostrando por consola el array de numeros ordenado para verificar que funcione correctamente
console.log(arrayNumbers);

// creando la lista desordenada y mostrando los numeros en el html
const listNumbers = document.createElement("ul");
listNumbers.classList.add("ul");

for (let i = 0; i < arrayNumbers.length; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(arrayNumbers[i]));
    listNumbers.appendChild(li);
};

// listTunordered.appendChild(listNumbers);
const listTunordered = document.getElementById("listTunordered");
listTunordered.appendChild(listNumbers);


/*
todo: Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
en pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y
mostrarlos en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/

const array = [1,2,3,4,5,6];
let index = 0;

// bucle while
console.log("");
console.log("esto es un while")
while (index < array.length){
    console.log(array[index]);
    index++;
};

// bucle for
console.log("");
console.log("esto es un for")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

// bucle .forEach
console.log("");
console.log("esto es un forEach");
array.forEach(element => {
    console.log(element);
});

// bucle for suamndole 1
console.log("");
console.log("esto es un for sumando 1 a cada elemento");
for (let index = 0; index < array.length; index++) {
   console.log(array[index] + 1) 
};

// copia de array
console.log("");
console.log("esto es una copia del array usando map");
const copyArray = array.map(function(element) {
    return element + 1;
});

console.log(copyArray);

// Calculando el promedio del array
let summation = 0;

copyArray.forEach(element => {
    summation += element;
}); 

let average = summation / copyArray.length;
console.log("");
console.log("esto es el promedio de la copia del array");
console.log(average);

// mostrar un bucle for anidado y sumarle en el array secundario 1 a cada iteracion
let arrayFor = 0
console.log("");
console.log("esto es un for anidado");
for (let i = 0; i < 5; i++) {
    console.log(`este es el for primario numero: ${i}`);
   for (let y = 0; y < 5; y++) {
    arrayFor++;
    console.log(`este es el for secundario numero: ${arrayFor}`);
   }  
};


/*
Dado un array de números, mostrar cómo quedaría si cada uno de los números es
elevado al cuadrado.
*/

const arrayNumbers02 = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < arrayNumbers02.length; i++) {
    const squared = arrayNumbers02[i] * arrayNumbers02[i];
    console.log(squared);
};


/*
Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
*/

const arrayNumbers03 = [ 1, -4, 12, 0, -3, 29, -150];
let suma = 0;
for (let i = 0; i < arrayNumbers03.length; i++) {
   if(arrayNumbers03[i] > 0){
    suma += arrayNumbers03[i];
   };
    
};

console.log(suma);


/*
Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
a. Obtener aquellos nombres con al menos 6 letras.
b. Obtener los nombres que comienzan con "M".
c. Ordenar alfabéticamente y mostrar por consola.
d. Generar un array que contenga solo las iniciales
e. Ejemplo: ["F", "L", "E", "M",... ].
f. Generar un array que contenga todos los nombres en mayúscula.
g. Queremos saber si alguno de estos nombres comienza con "J”
*/

// creando el array de nombres
const names = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
// creando las variables
let namesOlderThan6 = [];
let nameFirstLetter = [];

// creando el loop
for (let i = 0; i < names.length; i++) {
    let namecurrent = names[i];
   
    if(namecurrent.length >= 6){
        namesOlderThan6.push(namecurrent);
    }
    
};

// mostrando todos los nombres que tengan al menos 6 caracteres
console.log(namesOlderThan6);

for (let i = 0; i < names.length; i++) {
    let namecurrent = names[i];

    if (namecurrent.startsWith("M")) {
        nameFirstLetter.push(namecurrent)
    };
    
};

// mostrando los nombres que comienza con M
console.log(nameFirstLetter);

// ordenando el array de nombres
const sortedNames = names.slice().sort();

// mostrando por consola el resultado
console.log(sortedNames);

// creando una variable para agregar todas las letras
let resultFirstLetter = [];

// creando un loop para recorrer todo el array y aplicarle le metodo charAt para obtener la primer letra
for (let i = 0; i < names.length; i++) {
    let letter = names[i].charAt(0);
    resultFirstLetter.push(letter);
};

// mostrnado por consola las primeras letras de cada nombre
console.log(resultFirstLetter);

// creando una variable para crear una copia del array principal
const sortedNames02 = names.slice();
// creando una variable para agregar todas los nombres en mayuscula
const namesUpperCase = [];

for (let i = 0; i < sortedNames02.length; i++) {
    const nameUpper = sortedNames02[i].toUpperCase();

    namesUpperCase.push(nameUpper);
};

// mostrando por consola todas los nombres en mayuscula
console.log(namesUpperCase);


// creando la variable donde veremos si algun nombre comienza con la letra J
let check = [];

for (let i = 0; i < namesUpperCase.length; i++) {
    const name = namesUpperCase[i];

    if(name.charAt(0) === "J"){
        check += `el nombre ${name} comienza con J`;
    }else(check += "ningun nombre comienza con la letra J");
    break;
};

// motrando por consola si algun nombre empieza con la letra J
console.log(check);


/*
Dado un array que contiene ["azul", "amarillo", "rojo", ""verde"", "café", "rosa"] determinar
si un color introducido por el usuario a través de un prompt se encuentra dentro del
array o no.
*/

// creando el array de colores
const colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

// creando el prompt
// let userColor = prompt("escribe un color");

// creando la condicion
// if (colors.includes(userColor)) {
//     console.log(`el color ${userColor} SI esta en la lista de colores`);
// }else{console.log(`el color ${userColor} NO esta en la lista de colores`)};


// ahora determinar si el color introducido por el usuario en un input esta o no en el array, y que se muestre en una etiqueta p como resultado

// creando una variable para obtener el form para realizar la funcion
const formColors = document.getElementById("formColors");

// crenado el evento
formColors.addEventListener("submit",checkColors);

// creando la funcion
function checkColors(event){
    event.preventDefault();

    // creando las variables
    let colorsInput = document.getElementById("colorsUser").value;
    let resultCheck = document.getElementById("resultcheck");

    // creando la condicion
    if (colors.includes(colorsInput)) {
        resultCheck.textContent = (`el color ${colorsInput} SI esta en la lista de colores`);
    }else{
        resultCheck.textContent = (`el color ${colorsInput} NO esta en la lista de colores`)
    };

};


/*
Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares
*/

// definiendo el array de numeros
const arrayNumbers04 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// definiendo la funcion
function obtainPairsNumbers(arrayNumbers04){
    // definiendo el array que se le agregaran los numeros pares
    const PairsNumbers = [];

    // creando el loop
    for (let i = 0; i < arrayNumbers04.length; i++) {
        const number = arrayNumbers04[i];

        if (number % 2 === 0) {
            PairsNumbers.push(number);
        }
    };

    // retornando el array nuevo (PairsNumbers)
    return PairsNumbers;
};

// mostando por consola el resultado
console.log(obtainPairsNumbers(arrayNumbers04));


/*
Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal.
*/

// definiendo el array de palabras
const words = ["Perro","Gato","Casa","Árbol","Sol","Libro","Coche","Feliz","Jardín","Comida","Amigo","Felicidad","Computadora","Playa","Montaña","Música","Película","Avión","Escuela"];

// definiendo la funcion
function obtainStartWithVowel(words){
    // definiendo el array que se le agregaran los palabras que comiencen con vocal
    const startWithVowel = [];

    // creando el loop
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let firstLetter = word.charAt(0).toLowerCase();

        if (["a","e","i","o","u"].includes(firstLetter)){
            startWithVowel.push(word);
        };
        
    };

    // retornando el array nuevo (startWithVowel)
    return startWithVowel;
};

// mostando por consola el resultado
console.log(obtainStartWithVowel(words));


/*
Crear un método que permite intercambiar las posiciones de dos elementos de un
arreglo en base a sus índices
*/

// definiendo el array de nombres
const names02 = ["María","Juan","Ana","Carlos","Sofía"];

// definiendo la funcion
function swapItems(names02, index1, index2){

    // creando la condicion
    if (index1 >= 0 && index1 < names02.length && index2 >= 0 && index2 < names02.length) {
        let temporal = names02[index1];
        let temporal02 = names02[index2];
        names02[index1] = temporal02;
        names02[index2] = temporal;
    }else{
        console.log("los indices estan fuera del rango del array");
    };
};

// mostrnado por consola el array normal
console.log(names02);

// ejecutando la funcion
swapItems(names02, 1, 3);

// mostrando po consola el cambio de indices
console.log(names02);

// sumar todas los numeros que hay entre dos iteraciones de dos numeros  y pasarlos por una funcion

function addRange(min, max){
    let total = 0;

    for (let i = min; i < max; i++) {
       total += i;
        
    };

    return total;
};

let numberBetween2And10 = addRange(2, 10);

console.log(numberBetween2And10);


// averiguar con una funcion flecha si un numero es mayor a 20 o no

let numeroMayorQueVeinte = (num) => {
    result = num > 20;

    if (result === true) {
        console.log(`el numero ${num} es mas grande que 20`);
    } else{
        console.log(`el numero ${num} no es mas grande que 20`);
    }
};

numeroMayorQueVeinte(11);

// Ahora averiguar si un numero es mayor a otro, utilzando dos funciones (una dentro de otra)

function mayorQue(x) {
    return (num) => num > x;
};

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(10));


/*
Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
utilizando la librería jQuery.
*/

// verificando que funcione correctamente el jquery
$(document).ready(function(){
    console.log("jquery funciona correctamente")
});


$(document).ready(function(){
    $("#paragraph01").click(function(){
        console.log("se hizo un click");
    });
});


/*
Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
cuando sea presionada con el mouse.
*/

$(document).ready(function(){
    $(".rowDescription").click(function(){
        $(".tablesContainer").toggleClass("backgroundLilac");
        $(".rowInformation").toggleClass("backgroundBlack");
        $(".h2Information").toggleClass("colorLilac");
    });
    $(".rowInformation").click(function(){
        $(".tablesContainer").toggleClass("backgroundLilac");
        $(".rowInformation").toggleClass("backgroundBlack");
        $(".h2Information").toggleClass("colorLilac");
    });
});


/*
Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
ocultar un elemento jQuery tiene un método llamado hide().
*/

$(document).ready(function(){
    $(".liElements").click(function(){
        $(this).hide();
    });
});


/*
Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
fuente.
*/

let small = document.getElementById("small");
let medium = document.getElementById("medium");
let big = document.getElementById("big");
let btnNew = document.getElementsByClassName("btnNew");

function cambiarTamanoFuente(btnNew){

    let size = "1.2em";
    let titleSize = "1.6em";

    if (btnNew.target.id === "big") {
        size = "1.8em";
        titleSize = "2em";
    } else if (btnNew.target.id === "small") {
        size = "1em";
        titleSize = "1.1em";
    }

    let news = document.getElementsByClassName("new");
    let description = document.getElementsByClassName("description");
    let titleNew = document.getElementsByClassName("titleNew");

    for (let i = 0; i < news.length; i++) {
        description[i].style.fontSize = size;
        titleNew[i].style.fontSize = titleSize;
    };

};


small.addEventListener("click",cambiarTamanoFuente);
medium.addEventListener("click", cambiarTamanoFuente);
big.addEventListener("click",cambiarTamanoFuente);


/*
Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
contenido de la primera tabla, dejando intacto el de la segunda.
*/

const btnChangeContent = document.getElementById("btnChangeContent");

function changeContent(){
    h2Product = document.getElementsByClassName("h2Product");

    for (let i = 0; i < h2Product.length; i++) {
        h2Product[i].textContent = "-"; 
    }
};

btnChangeContent.addEventListener("click",changeContent);


/*
Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
botones que permitan fijar distintos hipervínculos para la propiedad href. Además
actualizar el texto del hipervínculo.
*/

let mozilla = document.getElementById("mozilla");
let chatGPT = document.getElementById("chatGPT");
let profile = document.getElementById("profile");

function defineHyperlink(url, text){
    let link = document.getElementById("link");

    link.href = url;
    link.textContent = text;
};


mozilla.addEventListener("click", () => {
    defineHyperlink("https://developer.mozilla.org/es/","developer.mozilla");
});

chatGPT.addEventListener("click", () => {
    defineHyperlink("https://chat.openai.com/","chatGPT");
});

profile.addEventListener("click", () => {
    defineHyperlink("https://github.com/JoaquinRodriguez04","JoaquinRodriguez04");
});


/*
Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
cuando sean presionadas ocultarlas.
*/

$(document).ready(function(){
    $(".featured-paragraph").click(function(){
        $(this).addClass("hidden");
    });
    $(".btnRecipe").click(function(){
        $(".featured-paragraph").removeClass("hidden");
    });
});



/*
Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.
*/

$(document).ready(function(){
    $(".tableProductBack").mouseover(function(){
        $(this).addClass("backPastelPink");
    });
    $(".tableProductBack").mouseout(function(){
        $(this).removeClass("backPastelPink");
    });
});


/*
Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.
*/

// funcion realizada con jquery(pero mas larga)
$(document).ready(function(){
    $(".sizeDiv").dblclick(function(){
        if ($(this).hasClass('sizeDivDblclick')) {
            $(this).removeClass('sizeDivDblclick');
        } else {
            $(this).addClass('sizeDivDblclick');
        }

    });
});


// funcion realizada en js limpio(pero mas corta)
const div = document.querySelector(".sizeDiv");

div.addEventListener("dblclick", () => {
    div.classList.toggle("sizeDivDblclick");
});


/*
Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se presione con el mouse dentro del div ocultarlo lentamente y cuando esté completamente oculto hacer que aparezca lentamente otro bloque de texto.
*/

$(document).ready(function() {
    $("#div1").click(function() {
        $(this).fadeOut(1500, function(){
            $("#div2").fadeIn(1500);
        });
    });
});



/*
Mostrar con console.log el valor de un option cada vez que un usuario seleccione un
option nuevo de un elemento select.
*/

let selectUser = document.querySelector("#selectUser");
selectUser.addEventListener("change", ()=> {
    let selectedOption = selectUser.value;
    console.log(`el usuario selecciono la opcion: ${selectedOption}`);
});



/*
Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
referida con console.log
*/


let linkElement = document.querySelector(".linkUser");

linkElement.addEventListener("click", (event)=> {
    event.preventDefault();

    let Hrefvalue = linkElement.href;

    console.log(Hrefvalue);
});



/*
hacer que cuando se presione en el boton no se cambie de color el div padre. igualmente cambiar el color de fondo desde el js, del div padre , tambien hacerlo con el boton (hijo), pero que este funcione
*/


let parentElement = document.getElementById("parentDiv");
let buttonElement = document.getElementById("childButton");

parentElement.addEventListener("click", function() {
  console.log("Evento en el elemento padre");
  parentElement.style.backgroundColor = "#f2c083"
});

buttonElement.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Evento en el elemento hijo");
  buttonElement.style.backgroundColor = "#f2c083"
});



/*
Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar
un texto en la página que el formulario fue enviado.
*/


let formDatesPersonal = document.querySelector("#formDatesPersonal");
let resultForm = document.querySelector("#resultForm"); 

formDatesPersonal.addEventListener("submit", (event) => {
    event.preventDefault();

    resultForm.innerText = "el formulario fue enviado";
    resultForm.style.marginTop = "1em"
});


// agregar items a una lista, mediante un input y mostrarlos debajo

const listItems = document.querySelector(".listForm");
const formItems = document.querySelector("#formItems");
const inputItems = document.querySelector(".inputItems");

formItems.addEventListener("submit", addItems);

function addItems(event){
    event.preventDefault();

    if (inputItems.value != "") {

    let item = document.createElement("li");
    item.classList.add("liFormItems");
    item.innerText = inputItems.value;
    listItems.append(item);

    };

    formItems.reset();
};  


// mostrar en consola un valor que este alojado en el localStorage
let nomberUser25 = "joaquin";

localStorage.setItem("nombre", nomberUser25);

let local = localStorage.getItem("nombre");

console.log(nomberUser25)


// mostrar en el localStorage un objeto
const remera = {
    talle: "xl",
    color: "blanco",
    estampado: true
};

// hay que convertir el objeto a string, para ello utilizamos stringify
const remeraJSON = JSON.stringify(remera);
localStorage.setItem("remera", remeraJSON);


// mostrar con un console.log el valor de esa llave que tenga el objeto anterior guardado en el localStorage

// usamos .getitem para obtener en valor del localStorage
const remeraLocalStorage = localStorage.getItem("remera");

// mostramos el valor
console.log(`nos devuelve el objeto en forma de string: ${remeraLocalStorage}`);

// parseamos a objeto la variable donde tenemos guardado el valor de esa clave del localStorage
const remeraObjet = JSON.parse(remeraLocalStorage);

// lo mostramos por consola
console.log(remeraObjet);


// hacer un dark mode con localStorage

const body = document.body;
const buttonDarkMode = document.querySelector(".change-mode");
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const h2Items = document.querySelector(".h2Items");

let darkMode = localStorage.getItem("dark-mode");


function activarDarkMode(){
    body.classList.add("dark-mode");
    buttons.forEach(button => button.classList.add("light-mode"));
    inputs.forEach(input => input.classList.add("light-mode"));
    labels.forEach(label => label.classList.add("color-light-mode"));
    resultForm.classList.add("light-mode");
    h2Items.classList.add("color-light-mode");
    buttonDarkMode.innerText = "modo oscuro";

    localStorage.setItem("dark-mode", "activated");
};

function desactivarDarkMode(){
    body.classList.remove("dark-mode");
    buttons.forEach(button => button.classList.remove("light-mode"));  
    inputs.forEach(input => input.classList.remove("light-mode"));
    labels.forEach(label => label.classList.remove("color-light-mode"));  
    resultForm.classList.remove("light-mode");
    h2Items.classList.remove("color-light-mode");

    localStorage.setItem("dark-mode", "desactivated");
};

if (darkMode === "activated") {
    activarDarkMode();
    buttonDarkMode.innerText = "modo claro";
} else if(darkMode === "desactivated"){
    desactivarDarkMode();
};

buttonDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activated"){
        desactivarDarkMode();
        buttonDarkMode.innerText = "modo oscuro";
    } else{
        activarDarkMode();
        buttonDarkMode.innerText = "modo claro";
    };
});


// iterar con el .forEach() el siguiente array: numeros = [1,54,34,76,12,3,20]

const numeros = [1,54,34,76,12,3,20];
let posicion = 0;

numeros.forEach((numero, posicion) => {
    posicion++
    console.log(`el ${posicion}º numero es: ${numero}`);
});



// buscar con el metodo .find() algun color en el siguiente array: const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

const colors01 = ["rojo", "verde", "azul", "amarillo", "naranja"];

let colorSelecet = "verde";

const colorFind = colors01.find((color) => color === colorSelecet);

console.log(colorFind);


/*
Ahora hacerlo con el siguiente array de objetos y decirle al usuario si el producto se encuentra en la lista o no,
el parametro debe obtenerse con un input y el resultado debe mostrarse en un div debajo

const products = [
    {
        nombre: "silla",
        tela: "Lino",
        precio: 10.99,
        modelo: "A1"
    },
    {
        nombre: "sillon",
        tela: "pana",
        precio: 19.99,
        modelo: "B2"
    },
    {
        nombre: "mesa",
        tipo: "vidrio",
        precio: 5.99,
        modelo: "C3"
    }
];

*/

const products = [
    {
        nombre: "silla de hierro y madera",
        tipo: "Lino",
        precio: 30.99,
        modelo: "A1"
    },
    {
        nombre: "silla de plastico",
        tipo: "Lino",
        precio: 30.99,
        modelo: "A1"
    },
    {
        nombre: "silla de madera",
        tipo: "Lino",
        precio: 14.99,
        modelo: "A1"
    },
    {
        nombre: "sillon",
        tipo: "pana",
        precio: 19.99,
        modelo: "B2"
    },
    {
        nombre: "mesa",
        tipo: "vidrio",
        precio: 5.99,
        modelo: "C3"
    }
];

let productValue = "silla de plastico";
let wantedProduct = products.find((product) => product.nombre === productValue);

if (wantedProduct) {
    console.log("el producto se encuentra en el array");
}else{
    console.log("no se encontraron resultados para tu busqueda");
};


// iterar con el metodo .filter() el array de products, y devolver todos los productos que tengan que ver con el parametro o nombre que pasemosen una variable


const productUser = document.querySelector(".product");
const formProducts = document.querySelector("#formProducts");
const resultWanted = document.querySelector(".productsWanted");

function filterProducts(e){
    e.preventDefault();
    
    let productValue = productUser.value;
    const leakedProducts = products.filter((product) => product.nombre.includes(productValue));

    resultWanted.innerHTML= "";

    if(leakedProducts == 0 || productValue === ""){
        resultWanted.innerHTML = `<h2 class="searchResults">no hay resultados en tu busqueda <i class="bi bi-emoji-frown-fill"></i></h2>`;
    } else if(leakedProducts) {
        resultWanted.innerHTML = `<h2 class="searchResults">resultados de busqueda para "${productValue}"</h2>`

        leakedProducts.forEach((product) => {
            resultWanted.innerHTML += 
            `
            <p class="info">${product.nombre}, de ${product.tipo}, modelo: ${product.modelo}</p>
            <p class="price">${product.precio}</p>
            `
            ;
        });
    };

    formProducts.reset();

};

// formProducts.addEventListener("submit", cargarproductos);
formProducts.addEventListener("submit", filterProducts);


// iterar con el metodo .some() el siguiente array: const colores = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Violeta' 'Rosa','Negro'];

const colors02 = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Violeta','Rosa','Negro'];

let colorSought = "Rojo";

const colorSome = colors02.some((color) => color === colorSought);

if(colorSome === true){
    console.log(`el color: "${colorSought}" esta en el array`);
}else{
    console.log(`el color: "${colorSought}" no se encuentra en el array`);
};


// iterar con el metodo .map() los precios del array de products pero multiplicarlos por 2

const pricesProductsReload = products.map((product) => {
    return {
        nombre: product.nombre,
        precio: product.precio * 2
    };
});

console.log(pricesProductsReload);


// iterar con el metodo .reduce() los precios del array de products y sumalos todos

const priceTotal = Math.floor(products.reduce((acc, product) => acc + product.precio, 0));

console.log(`el precio total de la suma de todos los productos es: ${priceTotal}`);


// iterar con el metodo .sort() el siguiente array de numeros y ordenarlos de menor a mayor: let numeros01 = [34, 12, 56, 78, 45, 23, 90, 17, 61, 39, 87, 50, 30, 68, 94, 27, 83, 52, 10, 72];

let numeros01 = [34, 12, 56, 78, 45, 23, 90, 17, 61, 39, 87, 50, 30, 68, 94, 27, 83, 52, 10, 72];

let copyNumeros01 = numeros01.slice(0, numeros01.length);

copyNumeros01.sort((a, b) => a - b);

console.log(numeros01);

console.log(copyNumeros01);

// iterar con el metodo math.min() el siguiente array de numeros: let numeros02 = [5, 17, 32, 12, 9, 24, 46, 8, 21, 37, 63, 19, 55, 42, 29, 11, 76, 28, 33, 14];

let numeros02 = [5, 17, 32, 12, 9, 24, 46, 8, 21, 37, 63, 19, 55, 42, 29, 11, 76, 28, 33, 14];

console.log(`el numero mas chico del array numeros02 es el: ${Math.min(...numeros02)}`);


// iterar con el metodo math.max() array del ejercicio anterior

console.log(`el numero mas grande del array numeros02 es el: ${Math.max(...numeros02)}`);

// redondear una variable hacia arriba, ejemplo: si la variable es 2.20, mostrar en consola 3

let numberDecimal = 2.2;

console.log(Math.ceil(numberDecimal));


// redondear una variable hacia abajo, ejemplo: si la variable es 2.20, mostrar en consola 3
let numberDecimal02 = 6.98;

console.log(Math.floor(numberDecimal02));


// redondear una numero hacia abajo si es menor a .5 o hacia arriba si es mayor a .5
let numberDecimal03 = 6.50;

console.log(Math.round(numberDecimal03));

// crear un numero aleatorio que este entre el 20 y el 30 incluive
console.log(`el numero aleatorio entre 20 y 30: ${Math.floor(Math.random() * 11 + 20)}`);
