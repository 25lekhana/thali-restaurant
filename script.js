// Food information for the menu. You can change names, prices and pictures here.
const foods = [
  {
    name: "Crispy Veg Bites",
    category: "Starters",
    price: 149,
    description: "Crunchy golden bites served with a tasty dip.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paneer Tikka",
    category: "Starters",
    price: 219,
    description: "Spiced paneer grilled until smoky and delicious.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chicken 65",
    category: "Starters",
    price: 239,
    description: "A spicy, crispy favourite with curry leaves.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Veg Dum Biryani",
    category: "Main Course",
    price: 199,
    description: "Fragrant rice, vegetables and warming spices.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Butter Chicken",
    category: "Main Course",
    price: 289,
    description: "Creamy tomato gravy with tender chicken.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 249,
    description: "Soft paneer in a rich, buttery curry.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Creamy Tomato Soup",
    category: "Soups",
    price: 99,
    description: "Warm tomato soup finished with herbs.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sweet Corn Soup",
    category: "Soups",
    price: 109,
    description: "A comforting soup with sweet corn and veggies.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hakka Noodles",
    category: "Noodles",
    price: 169,
    description: "Wok-tossed noodles with crunchy vegetables.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chilli Garlic Noodles",
    category: "Noodles",
    price: 179,
    description: "Garlicky noodles with a little spicy kick.",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chocolate Milkshake",
    category: "Milkshakes",
    price: 129,
    description: "A thick chocolate shake for chocolate lovers.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Strawberry Milkshake",
    category: "Milkshakes",
    price: 129,
    description: "Sweet strawberry flavour blended until smooth.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 139,
    description: "A soft chocolate brownie with a fudgy centre.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vanilla Ice Cream",
    category: "Desserts",
    price: 89,
    description: "Classic creamy vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  }
];

const foodGrid = document.getElementById("foodGrid");
const categoryButtons = document.getElementById("categoryButtons");

function showFoods(category) {
  // Remove the old cards first.
  foodGrid.innerHTML = "";

  // Show all foods, or only foods in the selected category.
  const selectedFoods = category === "All"
    ? foods
    : foods.filter(function(food) {
        return food.category === category;
      });

  selectedFoods.forEach(function(food) {
    const card = document.createElement("article");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${food.image}" alt="${food.name}" loading="lazy">
      <div class="food-info">
        <span class="food-category">${food.category}</span>
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <div class="food-bottom">
          <span class="price">₹${food.price}</span>
          <button class="add-button" type="button" data-name="${food.name}">Add +</button>
        </div>
      </div>
    `;

    foodGrid.appendChild(card);
  });
}

// When someone clicks a category, show only that category's food.
categoryButtons.addEventListener("click", function(event) {
  const button = event.target.closest("button");
  if (!button) return;

  document.querySelectorAll(".category-button").forEach(function(item) {
    item.classList.remove("active");
  });

  button.classList.add("active");
  showFoods(button.dataset.category);
});

// This demo button gives a simple message. It does not place a real order.
foodGrid.addEventListener("click", function(event) {
  const button = event.target.closest(".add-button");
  if (!button) return;

  alert(button.dataset.name + " added to your demo order!");
});

// Display the full menu when the page first opens.
showFoods("All");
