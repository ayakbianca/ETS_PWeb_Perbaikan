// fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
// .then(response => response.json())
// .then(characters =>{
//     console.log(characters)
// });

// const cardsContainer = document.querySelector('#cards-container');

// function renderCharacters(characters) {
//     characters.forEach(character => {
//       const div = document.createElement('div');
//       const name = document.createElement('h3');
//       const url = document.createElement('button');
//       div.classList = 'card'
//       url.classList = 'detail'
//       name.innerText = `${character.name}`
//       url.textContent = 'detail'
//       div.appendChild(name)
//       div.appendChild(url)
//       cardsContainer.appendChild(div)
//     });
//   };

var xmlhttp = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
xmlhttp.open('GET', url, true);
xmlhttp.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        allData = JSON.parse (this.responseText);
    }

    dataStore = "";
    for (single in allData.data){
        dataStore += `<div class="col-md-3 mb-2">
        <div class="card bg-light border border-primary border-1 shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2 container text-center">
                        <div class="fs-5" style="color:  #636363;">${allData.data[single].name}</div>
                        <button type="button" class="detail">Detail</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    allList.innerHTML = dataStore;
    console.log(allData)
}
xmlhttp.send();