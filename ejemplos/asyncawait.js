(async function load(){ // Se inicia el async y se pone todo dentro.

    //Vamos a definir el método para sustraer datos del api.
    
    async function getData(url) { //Se usa un segundo async para obtener la data.
        const result = await fetch(url) //Se una fetch para que nos devuelva una promesa. Await para que la próxima espere.
        const data = await result.json() //Se convierte el resultado de result a JSon 
        return data //Ya en JSon se devuelve el resultado.
    }
    
    const URLroot = 'https://yts.mx/api/v2/list_movies.json?genre=' //Constante con el link del api
    //En la parte de arriba definimos la función que marca como vamos a extraer esa info.
    const actionList = await getData(`${URLroot}action`) //Y aplicamos la funcion getData 
    const horrorList = await getData(`${URLroot}horror`) //para cada género.
    const animationList = await getData(`${URLroot}animation`)
    
    console.log(actionList, horrorList, animationList) //Se llama a las variables para verlas.
})()