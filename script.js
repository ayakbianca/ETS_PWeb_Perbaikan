function openDetail(url) {
    window.location.href = url;
  }
  
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then(response => response.json())
    .then(data => {
      var allList = document.getElementById("cards-grid");
  
      data.results.forEach(pokemon => {
        var card = document.createElement("div");
        card.className = "col-6 col-md-6 col-lg-3 mb-4";
  
        card.innerHTML = `
          <div class="card bg-light border border-primary border-1 shadow h-90 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2 container text-center">
                  <div class="fs-5" style="color: #636363;">${pokemon.name}</div>
                  <button type="button" class="btn btn-primary" onclick="openDetail('${pokemon.url}')">Detail</button>
                </div>
              </div>
            </div>
          </div>`;
  
        allList.appendChild(card);
      });
    });