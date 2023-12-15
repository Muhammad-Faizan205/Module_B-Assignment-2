const cards_arr = [
    {
        id: 4,
        title: "NewTitle",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        image_url: "imge/girls1.png"
    },
    {
        id: 7,
        title: "Ergonomic Wooden <br> Tuna",
        price: 743,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        image_url: "imge/mens 2.png"
    },
    {
        id: 9,
        title: "Electronic Bronze Chips",
        price: 808,
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        image_url: "imge/girls2.png"
    },
    {
        id: 11,
        title: "Awesome Bronze Car",
        price: 382,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        image_url: "imge/mens 4.png"
    },
    {
        id: 12,
        title: "Recycled Rubber Cheese",
        price: 30,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        image_url: "imge/girls3.png"
    }
];

const cardElements = cards_arr.map(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image_url}" alt="${item.title}" />
      <h2>${item.title}</h2>
      <h3>${item.id}</h3>
      <h3>Price: $${item.price}</h3>
      <p>${item.description}</p>
    `;

    return card;
});

const cardContainer = document.getElementById("Card");

cardElements.forEach(card => {
    cardContainer.appendChild(card);
});