function money(n) { return "$" + n.toFixed(0); }
function getCart() { return JSON.parse(localStorage.getItem("teachme-cart") || "[]"); }
function setCart(c) { localStorage.setItem("teachme-cart", JSON.stringify(c)); updateCartUI(); }
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const found = cart.find(x => x.id === id);
  if (found) found.qty += 1; else cart.push({ id, qty: 1 });
  setCart(cart);
}
function removeFromCart(id) { setCart(getCart().filter(x => x.id !== id)); }
function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("on");
}
function promoRate() {
  const el = document.getElementById("promo");
  return el && el.value.trim().toUpperCase() === "EDUCATOR15" ? 0.85 : 1;
}
function updateCartUI() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const cc = document.getElementById("cart-count");
  if (cc) cc.textContent = count;
  const box = document.getElementById("cart-items");
  if (!box) return;
  if (!cart.length) { box.innerHTML = "<p>Bag is empty.</p>"; }
  else {
    box.innerHTML = cart.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return `<div class="cart-row"><strong>${p.name}</strong><div>${i.qty} × ${money(p.price)} <button onclick="removeFromCart('${i.id}')">Remove</button></div></div>`;
    }).join("");
  }
  const total = cart.reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return s + p.price * i.qty;
  }, 0) * promoRate();
  const t = document.getElementById("cart-total");
  if (t) t.textContent = money(total);
  const promo = document.getElementById("promo");
  if (promo && !promo._bound) {
    promo._bound = true;
    promo.addEventListener("input", updateCartUI);
  }
}
function checkout() {
  if (!getCart().length) return alert("Add something first.");
  alert("Demo checkout complete. Connect Stripe/Shopify to take real payments.");
  setCart([]);
  toggleCart();
}
function productCard(p) {
  return `<article class="product">
    <img src="${p.img}" alt="${p.name}" />
    <div class="meta">
      <h3>${p.name}</h3>
      <p class="price">${money(p.price)}</p>
      <button class="btn" onclick="addToCart('${p.id}')">Add to bag</button>
    </div>
  </article>`;
}
function renderHomeProducts() {
  const el = document.getElementById("home-products");
  if (el) el.innerHTML = PRODUCTS.slice(0, 6).map(productCard).join("");
}
function initShop() {
  const grid = document.getElementById("shop-grid");
  let cat = "all", body = "all";
  function paint() {
    grid.innerHTML = PRODUCTS.filter(p =>
      (cat === "all" || p.cat === cat) &&
      (body === "all" || p.body.includes(body))
    ).map(productCard).join("");
  }
  document.querySelectorAll("[data-cat]").forEach(btn => btn.onclick = () => {
    document.querySelectorAll("[data-cat]").forEach(b => b.classList.remove("on"));
    btn.classList.add("on"); cat = btn.dataset.cat; paint();
  });
  document.querySelectorAll("[data-body]").forEach(btn => btn.onclick = () => {
    document.querySelectorAll("[data-body]").forEach(b => b.classList.remove("on"));
    btn.classList.add("on"); body = btn.dataset.body; paint();
  });
  paint();
}
function initMentor() {
  const demos = document.getElementById("demos");
  let selected = LOOKS[0].id;
  demos.innerHTML = LOOKS.map(l => `<button data-id="${l.id}">${l.title}</button>`).join("");
  demos.querySelectorAll("button").forEach(b => b.onclick = () => {
    demos.querySelectorAll("button").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); selected = Number(b.dataset.id);
  });
  demos.querySelector("button").classList.add("on");
  document.getElementById("run").onclick = () => {
    const loader = document.getElementById("loader");
    const looks = document.getElementById("looks");
    looks.innerHTML = "";
    loader.classList.remove("hidden");
    setTimeout(() => {
      loader.classList.add("hidden");
      const primary = LOOKS.find(l => l.id === selected);
      const rest = LOOKS.filter(l => l.id !== selected);
      const set = [primary, ...rest];
      looks.innerHTML = set.map(l => {
        const bits = l.items.map(id => PRODUCTS.find(p => p.id === id));
        return `<article class="look">
          <img src="${l.img}" alt="${l.title}" />
          <div class="meta">
            <h3>${l.title}</h3>
            <p>${l.note}</p>
            <p class="price">${bits.map(p => p.name).join(" · ")}</p>
            <button class="btn" onclick='${bits.map(p => `addToCart("${p.id}")`).join(";")}'>Shop this look</button>
          </div>
        </article>`;
      }).join("");
    }, 1400);
  };
}
