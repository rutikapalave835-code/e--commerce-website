const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryContainer = document.getElementById("checkout-summary-items");
let itemsHTML = "";
let total = 0;

if (cart.length === 0) {
  alert("Your cart is empty! Redirecting to home.");
  window.location.href = "index.html";
}

cart.forEach(item => {
  const product = products.find(p => p.id === item.id);
  if (product) {
    total += product.price * item.qty;
    itemsHTML += `
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--border); padding:12px 16px; border-radius:var(--radius-sm)">
        <div style="display:flex; align-items:center; gap:12px;">
          <img src="${product.image}" alt="${product.name}" class="checkout-item-img" onerror="this.src='https://placehold.co/50x50/1a1a1a/888?text=Product'">
          <div>
            <span style="font-weight:600; color:var(--text); display:block;">${product.name}</span>
            <span style="color:var(--text-muted); font-size:0.85rem;">Qty: ${item.qty}</span>
          </div>
        </div>
        <span style="font-weight:700; color:var(--accent2)">₹${(product.price * item.qty).toLocaleString()}</span>
      </div>
    `;
  }
});

summaryContainer.innerHTML = itemsHTML;
document.getElementById("total").innerText = total.toLocaleString();

function placeOrder() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !address || !phone) {
    alert("Please fill all delivery details");
    return;
  }

  // Save detailed order
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({
    date: new Date().toLocaleString(),
    items: cart,
    name: name,
    address: address,
    phone: phone,
    total: total
  });
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart
  localStorage.removeItem("cart");

  alert("🎉 Order placed successfully!");
  window.location.href = "orders.html";
}