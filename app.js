const orders = [
    { "id": 1,
    "pizza": "Hawaii",
    "extra": "Pepperoni",
    "ital": "Cola",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    { "id": 2,
    "pizza": "Margarita",
    "extra": "Kurorica",
    "ital": "Ásvanyvíz",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    { "id": 3,
    "pizza": "Songoku",
    "extra": "chillie",
    "ital": "Cola",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    { "id": 4,
    "pizza": "Izabella",
    "extra": "Gomba",
    "ital": "Sprite",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    { "id": 5,
    "pizza": "Diavola",
    "extra": "goatcheese",
    "ital": "Cola",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/3761662/pexels-photo-3761662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    { "id": 6,
    "pizza": "Pepperoni",
    "extra": "Pepperoni",
    "ital": "7up",
    "ár": 1800,
    "kep": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }

]



window.addEventListener("load", () => {
let output = "";
orders.map(order => {

    output += `
    <div class="order">
    <img src="${order.kep}">
    <h3>${order.pizza}</h3>
    <hr>
    <p>${order.extra}</p>
    <p>${order.ital}</p>
    <p>${order.ár} Ft</p>
    </div>
    `;

})
 document.getElementById("result").innerHTML = output;

})













