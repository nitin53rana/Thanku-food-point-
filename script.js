
const menuData = {
    delhi: {
        veg: [
            { name: "Paneer Butter Masala", price: 250 },
            { name: "Chole Bhature", price: 180 },
            { name: "Rajma Chawal", price: 160 },
            { name: "Aloo Tikki", price: 120 }
        ],
        nonveg: [
            { name: "Butter Chicken", price: 320 },
            { name: "Mutton Korma", price: 350 },
            { name: "Fish Fry", price: 300 },
            { name: "Chicken Biryani", price: 280 }
        ]
    },
    mumbai: {
        veg: [
            { name: "Vada Pav", price: 60 },
            { name: "Misal Pav", price: 100 },
            { name: "Pav Bhaji", price: 120 },
            { name: "Sabudana Khichdi", price: 140 }
        ],
        nonveg: [
            { name: "Bombay Duck Fry", price: 300 },
            { name: "Chicken Kolhapuri", price: 280 },
            { name: "Keema Pav", price: 220 },
            { name: "Tandoori Chicken", price: 300 }
        ]
    },
    kolkata: {
        veg: [
            { name: "Shukto", price: 160 },
            { name: "Beguni", price: 100 },
            { name: "Aloo Posto", price: 140 },
            { name: "Chanar Dalna", price: 180 }
        ],
        nonveg: [
            { name: "Macher Jhol", price: 300 },
            { name: "Chicken Kabiraji", price: 280 },
            { name: "Kosha Mangsho", price: 350 },
            { name: "Prawn Malai Curry", price: 360 }
        ]
    },
    chennai: {
        veg: [
            { name: "Sambar Idli", price: 90 },
            { name: "Vegetable Chettinad", price: 160 },
            { name: "Lemon Rice", price: 130 },
            { name: "Rasam", price: 100 }
        ],
        nonveg: [
            { name: "Chicken 65", price: 200 },
            { name: "Fish Curry", price: 270 },
            { name: "Mutton Sukka", price: 320 },
            { name: "Chicken Chettinad", price: 300 }
        ]
    },
    hyderabad: {
        veg: [
            { name: "Hyderabadi Veg Biryani", price: 200 },
            { name: "Bagara Baingan", price: 160 },
            { name: "Mirchi Ka Salan", price: 140 },
            { name: "Khatti Dal", price: 130 }
        ],
        nonveg: [
            { name: "Hyderabadi Biryani", price: 320 },
            { name: "Mutton Rogan Josh", price: 360 },
            { name: "Chicken Majestic", price: 280 },
            { name: "Tala Hua Gosht", price: 350 }
        ]
    }
};

function renderMenu(city) {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    ["veg", "nonveg"].forEach(type => {
        const section = document.createElement("div");
        section.className = "menu-section";
        section.innerHTML = `<h2>${type === "veg" ? "Veg" : "Non-Veg"} Dishes</h2>`;

        menuData[city][type].forEach(dish => {
            const item = document.createElement("div");
            item.className = "menu-item";
            item.innerHTML = `
                <div>
                    <strong>${dish.name}</strong><br>
                    <small>₹${dish.price}</small>
                </div>
                <div class="stars">
                    ${[1,2,3,4,5].map(i => `<span data-value="${i}">&#9733;</span>`).join('')}
                </div>
            `;
            section.appendChild(item);
        });

        container.appendChild(section);
    });

    // Add rating event listeners
    document.querySelectorAll('.stars').forEach(starContainer => {
        const stars = starContainer.querySelectorAll('span');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                stars.forEach(s => {
                    s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= value);
                });
            });
        });
    });
}

document.getElementById("city-selector").addEventListener("change", function () {
    renderMenu(this.value);
});

window.onload = () => renderMenu("delhi");
