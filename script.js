
/********************************************************************
 FIXED + IMPROVED SCRIPT.JS
 (MaryKay Bakehouse – Corrected Cart, Modal, Quantity System)
********************************************************************/

// GLOBAL DATA
const pastries = [
    {
        id: 1,
        name: "Butter Croissants",
        price: 1200,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        description: "Flaky, buttery, and perfect with your morning coffee. Our croissants are made with pure butter and baked fresh every morning.",
        remaining: 8,
        totalStock: 24,
        nextBatch: "1 hour 30 minutes",
        category: "breakfast",
        rating: 4.8,
        reviews: []
    },
    {
        id: 2,
        name: "Chocolate Fudge Cake",
        price: 4500,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80",
        description: "Rich, moist chocolate cake with decadent frosting.",
        remaining: 3,
        totalStock: 12,
        nextBatch: "2 hours 15 minutes",
        category: "cakes",
        rating: 4.9,
        reviews: []
    },
    {
        id: 3,
        name: "Glazed Donuts",
        price: 800,
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
        description: "Soft, fluffy donuts with a variety of glazes.",
        remaining: 15,
        totalStock: 50,
        nextBatch: "45 minutes",
        category: "snacks",
        rating: 4.6,
        reviews: []
    },
    {
        id: 4,
        name: "Berry Pancakes",
        price: 2500,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        description: "Fluffy pancakes topped with fresh berries.",
        remaining: 6,
        totalStock: 20,
        nextBatch: "30 minutes",
        category: "breakfast",
        rating: 4.7,
        reviews: []
    }
];

// GLOBALS
const quantities = {};
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let deliveryFee = 1500;

// ELEMENT REFS
const elements = {
    cartIcon: document.getElementById("cartIcon"),
    cartSidebar: document.getElementById("cartSidebar"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    clearCartBtn: document.getElementById("clearCartBtn"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    cartCount: document.getElementById("cartCount"),
    cartItems: document.getElementById("cartItems"),
    sidebarCartItems: document.getElementById("sidebarCartItems"),
    subtotalEl: document.getElementById("subtotal"),
    totalEl: document.getElementById("total"),

    // Modal
    pastryModal: document.getElementById("pastryModal"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    modalPastryImage: document.getElementById("modalPastryImage"),
    modalPastryName: document.getElementById("modalPastryName"),
    modalPastryPrice: document.getElementById("modalPastryPrice"),
    modalPastryDescription: document.getElementById("modalPastryDescription"),
    modalDecreaseQty: document.getElementById("modalDecreaseQty"),
    modalIncreaseQty: document.getElementById("modalIncreaseQty"),
    modalQty: document.getElementById("modalQty"),
    modalTotalPrice: document.getElementById("modalTotalPrice"),
    modalAddToCart: document.getElementById("modalAddToCart"),
};

// OPEN MODAL
function openPastryModal(id) {
    const pastry = pastries.find(p => p.id === id);
    if (!pastry) return;

    elements.modalPastryName.textContent = pastry.name;
    elements.modalPastryPrice.textContent = `₦${pastry.price.toLocaleString()}`;
    elements.modalPastryImage.src = pastry.image;
    elements.modalPastryDescription.textContent = pastry.description;

    modalCurrentPrice = pastry.price;
    modalQuantity = 1;
    elements.modalQty.textContent = "1";
    updateModalTotalPrice();

    elements.pastryModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closePastryModal() {
    elements.pastryModal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// MODAL QUANTITY
let modalQuantity = 1;
let modalCurrentPrice = 0;

function updateModalTotalPrice() {
    const total = modalQuantity * modalCurrentPrice;
    elements.modalTotalPrice.textContent = `₦${total.toLocaleString()}`;
}

elements.modalIncreaseQty.addEventListener("click", () => {
    modalQuantity++;
    elements.modalQty.textContent = modalQuantity;
    updateModalTotalPrice();
});

elements.modalDecreaseQty.addEventListener("click", () => {
    if (modalQuantity > 1) {
        modalQuantity--;
        elements.modalQty.textContent = modalQuantity;
        updateModalTotalPrice();
    }
});

elements.modalAddToCart.addEventListener("click", () => {
    const name = elements.modalPastryName.textContent;
    const pastry = pastries.find(p => p.name === name);
    addToCart(pastry.id, pastry.name, pastry.price, modalQuantity);
    closePastryModal();
});

// INLINE QUANTITY FIX
window.updateQuantity = function(id, change) {
    id = parseInt(id);
    const current = quantities[id] || 1;
    const updated = Math.max(1, current + change);
    quantities[id] = updated;

    const elem = document.getElementById(`quantity-${id}`);
    if (elem) elem.textContent = updated;
};

// CART SYSTEM
function addToCart(id, name, price, quantity = 1) {
    id = parseInt(id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity += quantity;
    else cart.push({ id, name, price, quantity });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(id) {
    id = parseInt(id);
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartQuantity(id, newQty) {
    id = parseInt(id);
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (newQty < 1) {
        removeFromCart(id);
        return;
    }

    item.quantity = newQty;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const containers = [elements.cartItems, elements.sidebarCartItems];
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

    elements.cartCount.textContent = totalItems;
    elements.cartCount.style.display = totalItems > 0 ? "flex" : "none";

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const total = subtotal + (subtotal > 10000 ? 0 : deliveryFee);

    elements.subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    elements.totalEl.textContent = `₦${total.toLocaleString()}`;

    containers.forEach(box => {
        box.innerHTML = "";
        cart.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.className = "flex items-center justify-between py-3 border-b";

            const itemTotal = item.price * item.quantity;

            wrapper.innerHTML = `
                <div class="flex items-center">
                    <button class="decrease-quantity bg-gray-200 px-3 py-1 rounded" data-id="${item.id}">−</button>
                    <span class="font-bold mx-2">${item.quantity}</span>
                    <button class="increase-quantity bg-gray-200 px-3 py-1 rounded" data-id="${item.id}">+</button>
                </div>
                <div class="text-right">
                    <p class="font-bold">₦${itemTotal.toLocaleString()}</p>
                    <button class="remove-item text-red-500 text-sm mt-1" data-id="${item.id}">Remove</button>
                </div>
            `;
            box.appendChild(wrapper);
        });

        attachCartListeners(box);
    });
}

function attachCartListeners(container) {
    container.querySelectorAll(".increase-quantity").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            updateCartQuantity(id, item.quantity + 1);
        });
    });

    container.querySelectorAll(".decrease-quantity").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            updateCartQuantity(id, item.quantity - 1);
        });
    });

    container.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
    });
}

// ========== CAROUSEL FUNCTIONALITY ==========
let currentSlide = 0;
let carouselInterval;

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (!prevBtn || !nextBtn || slides.length === 0) return;

    // Previous button
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel(slides, dots);
        resetCarouselInterval();
    });

    // Next button
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(slides, dots);
        resetCarouselInterval();
    });

    // Dot buttons
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel(slides, dots);
            resetCarouselInterval();
        });
    });

    // Start auto-play
    startCarouselAutoPlay(slides, dots);
}

function updateCarousel(slides, dots) {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.remove('inactive');
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
            slide.classList.add('inactive');
        }
    });

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
            dot.style.backgroundColor = 'white';
        } else {
            dot.classList.remove('active');
            dot.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        }
    });
}

function startCarouselAutoPlay(slides, dots) {
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(slides, dots);
    }, 5000);
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    startCarouselAutoPlay(slides, dots);
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
    pastries.forEach(p => quantities[p.id] = 1);
    updateCartDisplay();
    initCarousel();
});
