// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data from a local file (or it can be from an API)
    const cardData = [
        {
            "imageSrc": "image1.jpg",
            "title": "Applet 1 - Basic Events",
            "text": "This application contains the basic implementation of DDM events",
            "link": "./applet-1"
        },
        {
            "imageSrc": "image2.jpg",
            "title": "Applet 2 - Leaftlet",
            "text": "This application contains the basic web map",
            "link": "./applet-2"
        },
        {
            "imageSrc": "image3.jpg",
            "title": "Applet 3 - Event Button Logger",
            "text": "This application applies recording events while using HTML elements such as buttons",
            "link": "./applet-3"
        },
        {
            "imageSrc": "image4.jpg",
            "title": "Applet 4- Dynamic Elements",
            "text": "This application applies Dynamic Elements ",
            "link": "./applet-4"
        },

        {
            "imageSrc": "image4.jpg",
            "title": "Applet 5 - Open Weather",
            "text": "This application applies open weather to determine the weather of a place you want to search",
            "link": "./applet-5"
        },
    
        {
            "imageSrc": "image4.jpg",
            "title": "Applet 6 - Todo List",
            "text": "This application applies to do list such as adding tast you want and can be mark as done also",
            "link": "./applet-6"
        }
    ];

 
    function generateCards(cards) {
        const cardContainer = document.getElementById("card-container");

        cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-md-3", "mb-4");  

            cardElement.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${card.imageSrc}" class="card-img-top" alt="${card.title}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <a href="${card.link}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;
            
            cardContainer.appendChild(cardElement);
        });
    }

   
    generateCards(cardData);
});