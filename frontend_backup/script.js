// ✅ LOGIN CHECK
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) window.location.href = "login.html";

// ✅ PRODUCTS from products.js is used automatically


// ✅ TOAST
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ✅ ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(item => item.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ id, qty: 1 }); }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast("✅ Added to cart!");
}

// ✅ CART COUNT
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, i) => sum + i.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.textContent = total;
}

// ✅ LOGOUT
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// ✅ CATEGORY FILTER
function filterCategory(cat) {
  const filtered = cat === "all" ? products : products.filter(p => p.category === cat);
  displayProducts(filtered);
}

// ✅ SEARCH
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const val = this.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(val)));
  });
}

// ✅ DISPLAY PRODUCTS
function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="empty-icon">🔍</div>
      <h3>No products found</h3>
      <p>Try a different search</p>
    </div>`;
    return;
  }

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    
    // Open product modal on card click (except when clicking checkout button)
    div.addEventListener("click", (e) => {
      if (e.target.tagName === 'BUTTON') return;
      openProductModal(p);
    });

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}"
        onerror="this.src='https://placehold.co/400x200/1a1a1a/888?text=${encodeURIComponent(p.name)}'">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>₹${p.price.toLocaleString()}</p>
        <button onclick="addToCart(${p.id})">🛒 Add to Cart</button>
      </div>
    `;
    container.appendChild(div);
  });
}

// ✅ PRODUCT DETAIL MODAL FUNCTIONS
function openProductModal(product) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const modalImg = document.getElementById("modal-product-img");
  modalImg.src = product.image;
  modalImg.onerror = function() {
    this.src = `https://placehold.co/400x400/1a1a1a/888?text=${encodeURIComponent(product.name)}`;
  };
  
  document.getElementById("modal-product-category").textContent = product.category;
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-price").textContent = `₹${product.price.toLocaleString()}`;
  
  const addToCartBtn = document.getElementById("modal-add-to-cart-btn");
  addToCartBtn.onclick = () => {
    addToCart(product.id);
    closeProductModal();
  };

  modal.classList.add("show");
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("show");
}

// Close modal if clicked outside modal content
window.addEventListener("click", (e) => {
  const modal = document.getElementById("product-modal");
  if (e.target === modal) {
    closeProductModal();
  }
});

displayProducts(products);
updateCartCount();