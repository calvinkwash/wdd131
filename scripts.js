// Greeting button on homepage
function showMessage() {
  document.getElementById('message').textContent = "Welcome to Blue Sky Clothing!";
}

const products = [
  { name: "Men's Hoodie", category: "Men", image: "jean.webp", price: "$35" },
  { name: "Women's Dress", category: "Women", image: "jeanw.webp", price: "$42" },
  { name: "Men's Jeans", category: "Men", image: "images/mens-jeans.jpg", price: "$40" },
  { name: "Women's Blouse", category: "Women", image: "images/womens-blouse.jpg", price: "$30" }
];

function displayProducts(filteredProducts) {
  const container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = '';
  filteredProducts.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
  });
}

function filterProducts(category) {
  if (category === 'All') {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

if (document.getElementById('product-list')) {
  displayProducts(products);
}

// Form submission logic
let submissionCount = localStorage.getItem('submissionCount') || 0;
const form = document.getElementById('contact-form');
if (form) {
  const counterDisplay = document.getElementById('submit-count');
  counterDisplay.textContent = `Submissions: ${submissionCount}`;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount);
    counterDisplay.textContent = `Submissions: ${submissionCount}`;
    alert("Thank you for contacting us!");
    form.reset();
  });
}
