const orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("orders-list");
container.innerHTML = "";

if (orders.length === 0) {
  container.innerHTML = `<div class="empty-state">
    <div class="empty-icon">📦</div>
    <h3>No orders yet</h3>
    <p>Shop something and place your first order!</p>
  </div>`;
} else {
  [...orders].reverse().forEach((order, index) => {
    let items = Array.isArray(order) ? order : (order.items || []);
    let orderDate = Array.isArray(order) ? "Date not saved" : (order.date || "");
    let total = 0;
    let itemsHTML = "";

    items.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (product) {
        total += product.price * item.qty;
        itemsHTML += `<p class="order-item">✅ ${product.name} × ${item.qty} = ₹${(product.price * item.qty).toLocaleString()}</p>`;
      }
    });

    container.innerHTML += `
      <div class="order-card">
        <h3>Order #${orders.length - index}</h3>
        <p class="order-date">📅 ${orderDate}</p>
        <hr>
        ${itemsHTML}
        <p class="order-total">💰 Total: ₹${total.toLocaleString()}</p>
        ${order.name || order.address || order.phone ? `
        <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-muted); border-top: 1px dashed var(--border); padding-top: 8px; line-height: 1.4;">
          <p>👤 <strong>Deliver to:</strong> ${order.name || 'N/A'}</p>
          <p>📍 <strong>Address:</strong> ${order.address || 'N/A'}</p>
          <p>📞 <strong>Phone:</strong> ${order.phone || 'N/A'}</p>
        </div>
        ` : ''}
      </div>`;
  });
}