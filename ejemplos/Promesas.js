//EN JQUERY - Se llama apis así.
// $.ajax("url", {
//     method: "GET", //POST, PUT, DELETE
//     success: function(data) {
//       //se ejecuta cuando todo sale bien
//       //data: lo que devuelve el api
//     },
//     error: function(error) {
//       //se ejecuta cuando hay un error
//       //error: mensaje de error del api
//     }
// })

// EJ: $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });



//En Vainilla Js vamos a usar promises.
//Fetch devuelve una promesa. Esta promesa, a su vez, tiene un método llamado json() que regresa otra promesa con los datos en formato JSON.

// fetch("url")
//     .then(function(response) { 

//         })
// .catch(function(response) {

// })

fetch('https://randomuser.me/api/') //Llama una api, y devuelve una promesa.
    .then(function(response) {
        console.log(response)
        return response.json() //También puede devolver una promesa.
        })
    .then(function(user){ //Se hace después de de la anterior.
        console.log('El nombre del usuario es', user.results[0].name.first) //Se pide la info que se necesita del array específicamente.
    })
    .catch(function(){
        console.log('Algo falló. Inténtalo de nuevo.')
    });