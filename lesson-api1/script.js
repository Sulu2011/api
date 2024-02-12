let card = document.querySelector('.card');

fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(data => {
    data.forEach(country => {
        let countryCard = document.createElement('div');
        countryCard.classList.add('hero');
        countryCard.innerHTML = `
        
            <h2 class="ad">${country.name}</h2>
            <p class="resmi">${country.nativeName}</p>
            <p class="erazi">${country.area}</p>
            <p class="say">${country.population}</p>
           <a href='https://restcountries.com/v3.1/all' target='_blank'> <button class="duyme">etrafli melumat</button></a>
         <hr>`;
        card.appendChild(countryCard);
   
    });
})

 
.catch(error => console.error('Error fetching countries:', error));
