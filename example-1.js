import { createAll, cleanConsole } from './data';
const companies = createAll();
var user;

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', example1(companies));

function example1(comp) {

    //Valida si el valor de user es "undefined" y lo rremplaza por una cadena vacia
    if (user == undefined) {
        user = '';
    }

    comp = firstCapitalletter(comp); //asigna el valor con la primera en mayúscula
    firstName = firstCapitalletter(firstName); //asigna el valor con la primera en mayúscula
    lastName = firstCapitalletter(lastName); //asigna el valor con la primera en mayúscula



}

//funcion que convierte la primera letra en mayúscula
//usa la word como parámetro para recibir los diferente valores
function firstCapitalletter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.+
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".+
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.