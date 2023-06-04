document.addEventListener('DOMContentLoaded', function () {
  fetch('http://0.0.0.0:5001/api/v1/places_search/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  .then(response => response.json())
  .then(data => {
    const placesSection = document.querySelector('.places');
    data.forEach(place => {
      const article = document.createElement('article');
      article.innerHTML = `
        <div class="title">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <br />
            ${place.max_guest} Guests
          </div>
          <div class="number_rooms">
            <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
            <br />
            ${place.number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
            <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
            <br />
            ${place.number_bathrooms} Bathroom
          </div>
        </div>
        <div class="description">${place.description}</div>
      `;
      placesSection.appendChild(article);
    });
  })
  .catch(error => console.error(error));
});
