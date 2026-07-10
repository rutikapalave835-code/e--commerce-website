let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");

function renderCart() {
  container.innerHTML = "";
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Cart is empty</h3>
        <p>Add some products from the shop!</p>
      </div>`;
    document.getElementById("cart-summary").style.display = "none";
    return;
  }

  document.getElementById("cart-summary").style.display = "block";

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    total += product.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="display:flex; gap:16px; align-items:center;">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img" onerror="this.src='https://placehold.co/100x100/1a1a1a/888?text=Product'">
        <div>
          <h3>${product.name}</h3>
          <p class="price">₹${product.price.toLocaleString()}</p>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, 'dec')">−</button>
            <span style="font-weight:600; color:#f0f0f0">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 'inc')">+</button>
          </div>
        </div>
      </div>
      <div style="text-align:right">
        <p style="color:#ffbe0b; font-weight:700; font-size:1rem">₹${(product.price * item.qty).toLocaleString()}</p>
        <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById("total").textContent = total.toLocaleString();
}

function changeQty(id, action) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.map(item => {
    if (item.id === id) {
      if (action === "inc") item.qty++;
      if (action === "dec") item.qty--;
    }
    return item;
  }).filter(item => item.qty > 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  if (!confirm("Clear entire cart?")) return;
  localStorage.removeItem("cart");
  renderCart();
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) { alert("Cart is empty!"); return; }
  window.location.href = "checkout.html";
}

renderCart();