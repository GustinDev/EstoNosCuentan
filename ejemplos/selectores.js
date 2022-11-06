//Las variables que se pone con un $ es porque se refieren a un elemento del DOM.

//JQuery
// const $home = $(".home") //Elemento con la clase home
// const $home = $("#home") //Elemento con el id home

//JS VAINILLA

//Retorna un elemento con el #id home.
document.getElementById("home")

//Retorna una lista de elementos con la CLASE home.
document.getElementsByClassname("home")

//Retorna una array de elementos con el tipo de tag, en éste caso llama a todos los div.
document.getElementsByTagName("div")
document.getElementsByTagName("div")[20] //Selecciona al div número 20 de la lista.

//Devuelve el primer elemento que coincida con el query de búsqueda. Podemos buscar de los 3 tipos anteriores. Ej: Busca dentro de un DIV una clase que se llame home y dentro un ID#modal".
document.querySelector("div .home #modal")

//Devuelve TODOS los elementos que coincidan con el query de búsqueda. El anterior solo devuelve 1.
document.querySelectorAll("div .home #modal")