
  const datos = [1,2,3];

  function retornarDatos() {
    return new Promise((resolve, reject) => {
        if(datos.length == 0) {
            reject(new Error('No hay datos'));
        }

        setTimeout(() => {
            resolve(datos);
        }, 3000);
    })
  }
  
  retornarDatos().then((response) => console.log(response)).catch((error) => console.log(error.message));




const _apiKey = 'dnmavo8s3htlq99y6lld4pz8ahzoekl4ufx7jkn5';
 async function weatherData() {
    let response = await fetch(`https://www.meteosource.com/api/v1/flexi/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=${_apiKey}`)
    let data = await response.json();

    console.log(data);
}
  
weatherData();

// This section of the code will work with the search functionality.

let button = document.querySelector('#search');
let results = document.querySelector('.results');
 button.addEventListener('input', searchData)

async function searchData () {
    let response = await fetch(`https://www.meteosource.com/api/v1/flexi/find_places_prefix?text=${button.value}&language=en&key=${_apiKey}`)
    let searchResult = await response.json();
    results.innerHTML = " ";
    for(let i = 0; i < searchResult.length; i++ ) {
        
        results.innerHTML +=`<p>${searchResult[i].name} : ${searchResult[i].country}</p>`
    }
    console.log(searchResult)

}

