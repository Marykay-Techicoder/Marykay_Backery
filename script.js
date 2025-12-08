// ========== GLOBAL VARIABLES ==========
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
        reviews: [
            { name: "Chioma A.", rating: 5, comment: "The best croissants in Lagos! Flaky and buttery perfection.", date: "2 days ago" },
            { name: "Tunde B.", rating: 4, comment: "Always fresh and delicious. My morning coffee companion.", date: "1 week ago" }
        ]
    },
    {
        id: 2,
        name: "Chocolate Fudge Cake",
        price: 4500,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80",
        description: "Rich, moist chocolate cake with decadent frosting. Made with premium cocoa and layered with our signature chocolate fudge.",
        remaining: 3,
        totalStock: 12,
        nextBatch: "2 hours 15 minutes",
        category: "cakes",
        rating: 4.9,
        reviews: [
            { name: "Bola D.", rating: 5, comment: "My daughter's birthday cake! Everyone loved it.", date: "Yesterday" },
            { name: "Funke F.", rating: 4, comment: "Delicious! Will order again for my next event.", date: "2 weeks ago" }
        ]
    },
    {
        id: 3,
        name: "Glazed Donuts",
        price: 800,
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
        description: "Soft, fluffy donuts with a variety of delicious glazes. Choose from classic sugar glaze, chocolate, strawberry, or matcha.",
        remaining: 15,
        totalStock: 50,
        nextBatch: "45 minutes",
        category: "snacks",
        rating: 4.6,
        reviews: [
            { name: "Kunle G.", rating: 5, comment: "The strawberry glaze is amazing! My kids love them.", date: "Today" },
            { name: "Nneka H.", rating: 4, comment: "Fluffy and not too heavy. Perfect snack.", date: "3 days ago" }
        ]
    },
    {
        id: 4,
        name: "Berry Pancakes",
        price: 2500,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        description: "Fluffy pancakes topped with fresh berries and maple syrup. Served with whipped cream and your choice of berries.",
        remaining: 6,
        totalStock: 20,
        nextBatch: "30 minutes",
        category: "breakfast",
        rating: 4.7,
        reviews: [
            { name: "Zainab J.", rating: 5, comment: "Best pancakes in town! Fluffy and delicious.", date: "Yesterday" },
            { name: "Chinedu K.", rating: 4, comment: "Great brunch option. The berries are always fresh.", date: "4 days ago" }
        ]
    },
    {
        id: 5,
        name: "French Macarons",
        price: 2000,
        image: "https://images.unsplash.com/photo-1569929238190-869826b1bb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Delicate almond meringue cookies with creamy fillings. Available in various flavors: pistachio, raspberry, chocolate, vanilla, and lemon.",
        remaining: 12,
        totalStock: 30,
        nextBatch: "1 hour",
        category: "desserts",
        rating: 4.8,
        reviews: [
            { name: "Olu M.", rating: 5, comment: "Beautiful and delicious! Perfect for my daughter's bridal shower.", date: "2 days ago" },
            { name: "Fatima N.", rating: 4, comment: "The pistachio flavor is divine. Will order again.", date: "1 week ago" }
        ]
    },
    {
        id: 6,
        name: "Classic Tiramisu",
        price: 3500,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Coffee-flavored Italian dessert with layers of ladyfingers dipped in coffee, mascarpone cheese, and dusted with cocoa.",
        remaining: 4,
        totalStock: 10,
        nextBatch: "3 hours",
        category: "desserts",
        rating: 4.9,
        reviews: [
            { name: "Grace P.", rating: 5, comment: "Authentic Italian taste! My Italian friend approved.", date: "Yesterday" },
            { name: "Rita R.", rating: 5, comment: "Our favorite dessert! Order it every Friday.", date: "2 weeks ago" }
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSlide = 0;
let carouselInterval;
const deliveryFee = 1000;
let quantities = {};

// ========== DOM ELEMENTS ==========
const elements = {
    // Cart
    cartIcon: document.getElementById('cartIcon'),
    cartCount: document.getElementById('cartCount'),
    cartItems: document.getElementById('cartItems'),
    sidebarCartItems: document.getElementById('sidebarCartItems'),
    subtotalEl: document.getElementById('subtotal'),
    totalEl: document.getElementById('total'),
    sidebarSubtotalEl: document.getElementById('sidebarSubtotal'),
    sidebarTotalEl: document.getElementById('sidebarTotal'),
    sidebarDeliveryFeeEl: document.getElementById('sidebarDeliveryFee'),
    clearCartBtn: document.getElementById('clearCart'),
    cartSidebar: document.getElementById('cartSidebar'),
    closeCartBtn: document.getElementById('closeCart'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    
    // Modal
    pastryModal: document.getElementById('pastryModal'),
    closeModalBtn: document.getElementById('closeModal'),
    modalPastryName: document.getElementById('modalPastryName'),
    modalPastryImage: document.getElementById('modalPastryImage'),
    modalPastryPrice: document.getElementById('modalPastryPrice'),
    modalPastryDescription: document.getElementById('modalPastryDescription'),
    modalPastryRemaining: document.getElementById('modalPastryRemaining'),
    modalPastryStockStatus: document.getElementById('modalPastryStockStatus'),
    modalPastryStockBar: document.getElementById('modalPastryStockBar'),
    modalPastryStockMessage: document.getElementById('modalPastryStockMessage'),
    modalPastryTimer: document.getElementById('modalPastryTimer'),
    modalPastryReviews: document.getElementById('modalPastryReviews'),
    modalDecreaseQty: document.getElementById('modalDecreaseQty'),
    modalIncreaseQty: document.getElementById('modalIncreaseQty'),
    modalQty: document.getElementById('modalQty'),
    modalAddToCart: document.getElementById('modalAddToCart'),
    modalTotalPrice: document.getElementById('modalTotalPrice'),
    modalItemTotal: document.getElementById('modalItemTotal'),
    
    // Other
    orderForm: document.getElementById('orderForm'),
    successMessage: document.getElementById('successMessage'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    prevSlideBtn: document.getElementById('prevSlide'),
    nextSlideBtn: document.getElementById('nextSlide'),
    viewAllPastriesBtn: document.getElementById('viewAllPastriesBtn'),
    allPastriesSection: document.getElementById('allPastriesSection'),
    allPastriesGrid: document.getElementById('allPastriesGrid'),
    backToFeaturedBtn: document.getElementById('backToFeaturedBtn')
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('MaryKay\'s Bakehouse initialized');
    
    // Initialize all functionality
    initCart();
    initCarousel();
    initEventListeners();
    initPastries();
    initQuantitySystem();
    updateCartDisplay();
    
    // Animate elements on load
    setTimeout(() => {
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});

// ========== CART FUNCTIONS ==========
function initCart() {
    // Cart icon click
    if (elements.cartIcon) {
        elements.cartIcon.addEventListener('click', toggleCartSidebar);
    }
    
    // Close cart button
    if (elements.closeCartBtn) {
        elements.closeCartBtn.addEventListener('click', closeCartSidebar);
    }
    
    // Clear cart button
    if (elements.clearCartBtn) {
        elements.clearCartBtn.addEventListener('click', clearCart);
    }
    
    // Checkout button
    if (elements.checkoutBtn) {
        elements.checkoutBtn.addEventListener('click', () => {
            closeCartSidebar();
            document.getElementById('order').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

function toggleCartSidebar() {
    if (elements.cartSidebar) {
        elements.cartSidebar.classList.toggle('translate-x-full');
    }
}

function closeCartSidebar() {
    if (elements.cartSidebar) {
        elements.cartSidebar.classList.add('translate-x-full');
    }
}

function clearCart() {
    if (cart.length > 0) {
        if (confirm('Are you sure you want to clear your cart?')) {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            showNotification('Cart cleared successfully', 'success');
        }
    }
}

function addToCart(id, name, price, quantity = 1) {
    const pastry = pastries.find(p => p.id === parseInt(id));
    if (!pastry) return;
    
    // Check stock
    if (pastry.remaining < quantity) {
        showNotification(`Only ${pastry.remaining} ${name} available!`, 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        if (pastry.remaining < existingItem.quantity + quantity) {
            showNotification(`Cannot add more. Only ${pastry.remaining} available!`, 'error');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Show success notification
    showNotification(`${quantity} ${name}(s) added to cart`, 'success');
    
    // Open cart sidebar on mobile
    if (window.innerWidth < 768) {
        toggleCartSidebar();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification('Item removed from cart', 'info');
}

function updateCartQuantity(id, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(id);
        return;
    }
    
    const pastry = pastries.find(p => p.id === parseInt(id));
    if (pastry && newQuantity > pastry.remaining) {
        showNotification(`Only ${pastry.remaining} available!`, 'error');
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = newQuantity;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (elements.cartCount) {
        elements.cartCount.textContent = totalItems;
        elements.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 10000 ? 0 : deliveryFee;
    const total = subtotal + delivery;
    
    // Update cart sections
    updateCartItems(elements.cartItems, subtotal, total, delivery);
    updateCartItems(elements.sidebarCartItems, subtotal, total, delivery);
    
    // Update displayed totals
    updateTotalDisplay(subtotal, total, delivery);
}

function updateCartItems(container, subtotal, total, delivery) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-10 text-gray-500 dark:text-gray-400">
                <i class="fas fa-shopping-cart text-4xl mb-4 opacity-30"></i>
                <p class="text-lg">Your cart is empty</p>
                <p class="text-sm">Add some delicious pastries from our menu</p>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item flex items-center justify-between py-4 px-2 border-b border-gray-200 dark:border-gray-700';
        cartItem.innerHTML = `
            <div class="flex-1">
                <h4 class="font-bold text-gray-800 dark:text-gray-200">${item.name}</h4>
                <p class="text-amber-600 dark:text-amber-400 font-bold">₦${item.price.toLocaleString()}</p>
            </div>
            <div class="flex items-center mx-4">
                <button class="decrease-quantity text-gray-600 hover:text-amber-600 h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center" data-id="${item.id}">
                    <i class="fas fa-minus text-sm"></i>
                </button>
                <span class="mx-3 font-bold min-w-[20px] text-center">${item.quantity}</span>
                <button class="increase-quantity text-gray-600 hover:text-amber-600 h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center" data-id="${item.id}">
                    <i class="fas fa-plus text-sm"></i>
                </button>
            </div>
            <div class="ml-4 text-right">
                <p class="font-bold text-gray-800 dark:text-gray-200">₦${itemTotal.toLocaleString()}</p>
                <button class="remove-item text-red-500 hover:text-red-700 text-sm mt-1" data-id="${item.id}">
                    <i class="fas fa-trash-alt mr-1"></i> Remove
                </button>
            </div>
        `;
        container.appendChild(cartItem);
    });
    
    // Add event listeners to cart items
    attachCartItemListeners(container);
}

function attachCartItemListeners(container) {
    container.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const item = cart.find(item => item.id === id);
            if (item) {
                updateCartQuantity(id, item.quantity - 1);
            }
        });
    });
    
    container.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const item = cart.find(item => item.id === id);
            if (item) {
                updateCartQuantity(id, item.quantity + 1);
            }
        });
    });
    
    container.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            removeFromCart(id);
        });
    });
}

function updateTotalDisplay(subtotal, total, delivery) {
    // Update main cart totals
    if (elements.subtotalEl) elements.subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    if (elements.totalEl) elements.totalEl.textContent = `₦${total.toLocaleString()}`;
    if (elements.sidebarSubtotalEl) elements.sidebarSubtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    if (elements.sidebarTotalEl) elements.sidebarTotalEl.textContent = `₦${total.toLocaleString()}`;
    
    // Update delivery fee display
    const deliveryFeeEl = document.getElementById('deliveryFee');
    if (deliveryFeeEl) {
        deliveryFeeEl.textContent = delivery === 0 ? 'FREE' : `₦${delivery.toLocaleString()}`;
        deliveryFeeEl.className = delivery === 0 ? 'text-green-500 font-bold' : 'font-bold';
    }
    
    if (elements.sidebarDeliveryFeeEl) {
        elements.sidebarDeliveryFeeEl.textContent = delivery === 0 ? 'FREE' : `₦${delivery.toLocaleString()}`;
        elements.sidebarDeliveryFeeEl.className = delivery === 0 ? 'text-green-500 font-bold' : 'font-bold';
    }
}

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides.length || !dots.length) return;
    
    // Previous button
    if (elements.prevSlideBtn) {
        elements.prevSlideBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
            resetCarouselInterval();
        });
    }
    
    // Next button
    if (elements.nextSlideBtn) {
        elements.nextSlideBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
            resetCarouselInterval();
        });
    }
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetCarouselInterval();
        });
    });
    
    // Add touch/swipe support for mobile
    addTouchSupport();
    
    // Make carousel dots more accessible on mobile
    makeDotsTouchFriendly();
    
    startCarousel();
}

function addTouchSupport() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling while swiping
    }, { passive: false });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const distance = touchStartX - touchEndX;
        
        if (Math.abs(distance) < minSwipeDistance) return;
        
        if (distance > 0) {
            // Swipe left - go to next slide
            goToSlide(currentSlide + 1);
        } else {
            // Swipe right - go to previous slide
            goToSlide(currentSlide - 1);
        }
        
        resetCarouselInterval();
    }
}

function makeDotsTouchFriendly() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
        // Increase touch area on mobile
        dot.style.minWidth = '40px';
        dot.style.minHeight = '40px';
        dot.style.display = 'flex';
        dot.style.alignItems = 'center';
        dot.style.justifyContent = 'center';
        
        // Add event listener for better touch feedback
        dot.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.9)';
        });
        
        dot.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function startCarousel() {
    // Only start auto-slide on desktop, not mobile
    if (window.innerWidth >= 768) {
        carouselInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    } else {
        // On mobile, don't auto-slide but allow manual control
        carouselInterval = null;
    }
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    
    // Only restart interval on desktop
    if (window.innerWidth >= 768) {
        startCarousel();
    }
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;
    
    slideIndex = (slideIndex + totalSlides) % totalSlides;
    
    // Remove active classes from current slide and dot
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('inactive');
    dots[currentSlide].classList.remove('active');
    
    // Add active classes to new slide and dot
    slides[slideIndex].classList.remove('inactive');
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
    
    // Add mobile-specific animation
    if (window.innerWidth < 768) {
        slides[slideIndex].style.transform = 'scale(1)';
        slides[slideIndex].style.opacity = '1';
    }
}

// Update the window resize event listener to handle carousel properly
function initEventListeners() {
    console.log('Initializing event listeners...');
    
    // ... existing event listener code ...
    
    // Window resize handling
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && elements.cartSidebar) {
            elements.cartSidebar.classList.add('translate-x-full');
        }
        
        // Restart carousel interval when switching to desktop
        if (window.innerWidth >= 768 && !carouselInterval) {
            startCarousel();
        }
        // Clear interval when switching to mobile
        else if (window.innerWidth < 768 && carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    });
}

// ========== PASTRIES FUNCTIONS ==========
function initPastries() {
    // Initialize quantities object
    pastries.forEach(pastry => {
        quantities[pastry.id] = 1;
    });
    
    // View All Pastries button
    if (elements.viewAllPastriesBtn) {
        elements.viewAllPastriesBtn.addEventListener('click', () => {
            document.getElementById('pastries').classList.add('hidden');
            if (elements.allPastriesSection) {
                elements.allPastriesSection.classList.remove('hidden');
                elements.allPastriesSection.scrollIntoView({ behavior: 'smooth' });
                renderAllPastriesGrid();
            }
        });
    }
    
    // Back to Featured button
    if (elements.backToFeaturedBtn) {
        elements.backToFeaturedBtn.addEventListener('click', () => {
            if (elements.allPastriesSection) {
                elements.allPastriesSection.classList.add('hidden');
            }
            document.getElementById('pastries').classList.remove('hidden');
            document.getElementById('pastries').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Add event listeners to all pastry cards
    document.addEventListener('click', function(e) {
        // Handle add-to-cart buttons
        if (e.target.closest('.add-to-cart')) {
            const button = e.target.closest('.add-to-cart');
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));
            const quantity = quantities[id] || 1;
            
            // Add button animation
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 300);
            
            addToCart(id, name, price, quantity);
            
            // Reset quantity after adding to cart
            quantities[id] = 1;
            const quantityElement = document.getElementById(`quantity-${id}`);
            if (quantityElement) {
                quantityElement.textContent = 1;
            }
        }
        
        // Handle quick-view buttons
        if (e.target.closest('.quick-view-btn')) {
            const button = e.target.closest('.quick-view-btn');
            const id = parseInt(button.getAttribute('data-id'));
            openPastryModal(id);
        }
        
        // Handle pastry card clicks (for opening modal)
        if (e.target.closest('.pastry-card') && !e.target.closest('button')) {
            const card = e.target.closest('.pastry-card');
            const id = parseInt(card.getAttribute('data-id'));
            openPastryModal(id);
        }
    });
    
    // Initialize filter buttons
    initFilterButtons();
}

function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pastryCards = document.querySelectorAll('.pastry-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-black', 'text-white', 'bg-primary');
                btn.classList.add('bg-white', 'dark:bg-[#333333]', 'text-foreground');
            });
            
            // Add active class to clicked button
            this.classList.remove('bg-white', 'dark:bg-[#333333]');
            this.classList.add('active', 'bg-primary', 'text-white');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter cards
            pastryCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('animate-fade-in');
                    }, 10);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-fade-in');
                }
            });
        });
    });
}

function renderAllPastriesGrid() {
    if (!elements.allPastriesGrid) return;
    
    elements.allPastriesGrid.innerHTML = '';
    
    pastries.forEach(pastry => {
        const stockPercentage = Math.round((pastry.remaining / pastry.totalStock) * 100);
        let stockClass = 'bg-green-500';
        if (stockPercentage < 30) {
            stockClass = 'bg-red-500';
        } else if (stockPercentage < 60) {
            stockClass = 'bg-yellow-500';
        }
        
        const pastryCard = document.createElement('div');
        pastryCard.className = 'pastry-card bg-white dark:bg-[#333333] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1';
        pastryCard.setAttribute('data-id', pastry.id);
        pastryCard.setAttribute('data-category', pastry.category);
        
        pastryCard.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${pastry.image}" alt="${pastry.name}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200">${pastry.name}</h3>
                    <span class="text-sm font-bold px-2 py-1 rounded-full text-white ${stockClass}">
                        ${pastry.remaining} left
                    </span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2">
                    ${pastry.description}
                </p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-amber-600">₦${pastry.price.toLocaleString()}</span>
                    <button class="add-to-cart bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors"
                            data-id="${pastry.id}"
                            data-name="${pastry.name}"
                            data-price="${pastry.price}">
                        <i class="fas fa-plus mr-1"></i> Add
                    </button>
                </div>
            </div>
        `;
        
        elements.allPastriesGrid.appendChild(pastryCard);
    });
}

// ========== QUANTITY SYSTEM ==========
function initQuantitySystem() {
    // Initialize all quantities to 1
    document.querySelectorAll('[id^="quantity-"]').forEach(element => {
        const id = element.id.replace('quantity-', '');
        quantities[id] = 1;
    });
}

// Global updateQuantity function for inline onclick handlers
window.updateQuantity = function(id, change) {
    const current = quantities[id] || 1;
    const newQuantity = Math.max(1, current + change);
    quantities[id] = newQuantity;
    
    const quantityElement = document.getElementById(`quantity-${id}`);
    if (quantityElement) {
        quantityElement.textContent = newQuantity;
    }
};

// ========== MODAL FUNCTIONS ==========
function openPastryModal(id) {
    const pastry = pastries.find(p => p.id === id);
    if (!pastry || !elements.pastryModal) return;
    
    // Set modal content
    elements.modalPastryName.textContent = pastry.name;
    elements.modalPastryImage.src = pastry.image;
    elements.modalPastryImage.alt = pastry.name;
    elements.modalPastryPrice.textContent = `₦${pastry.price.toLocaleString()}`;
    elements.modalPastryDescription.textContent = pastry.description;
    elements.modalPastryRemaining.textContent = `${pastry.remaining} of ${pastry.totalStock}`;
    elements.modalPastryTimer.textContent = `Ready in ${pastry.nextBatch}`;
    elements.modalQty.textContent = '1';
    
    // Calculate stock status
    const stockPercentage = Math.round((pastry.remaining / pastry.totalStock) * 100);
    elements.modalPastryStockBar.style.width = `${stockPercentage}%`;
    
    let stockStatus = "High Stock";
    let stockMessage = "Available for immediate purchase";
    let statusClass = "stock-high";
    
    if (stockPercentage < 30) {
        stockStatus = "Low Stock";
        stockMessage = "Almost sold out! Order now to avoid disappointment";
        statusClass = "stock-low";
        elements.modalPastryStockBar.className = "progress-bar-fill progress-bar-low";
    } else if (stockPercentage < 60) {
        stockStatus = "Medium Stock";
        stockMessage = "Selling fast! Order now to secure yours";
        statusClass = "stock-medium";
        elements.modalPastryStockBar.className = "progress-bar-fill progress-bar-medium";
    } else {
        elements.modalPastryStockBar.className = "progress-bar-fill progress-bar-high";
    }
    
    elements.modalPastryStockStatus.textContent = stockStatus;
    elements.modalPastryStockStatus.className = `text-sm font-bold px-4 py-2 rounded-full text-white ${statusClass}`;
    elements.modalPastryStockMessage.textContent = stockMessage;
    
    // Render reviews
    elements.modalPastryReviews.innerHTML = '';
    pastry.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-card p-4 rounded-lg mb-3';
        
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= review.rating 
                ? '<i class="fas fa-star text-yellow-400"></i>' 
                : '<i class="far fa-star text-gray-400"></i>';
        }
        
        reviewElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="font-bold text-gray-800 dark:text-gray-200">${review.name}</h4>
                    <div class="flex items-center mt-1">
                        ${stars}
                    </div>
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-400">${review.date}</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">${review.comment}</p>
        `;
        
        elements.modalPastryReviews.appendChild(reviewElement);
    });
    
    // Update total price
    updateModalTotalPrice(pastry.price, 1);
    
    // Show modal
    elements.pastryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    setTimeout(() => {
        document.querySelector('.modal-container').classList.add('show');
    }, 10);
}

function closePastryModal() {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.classList.remove('show');
        setTimeout(() => {
            elements.pastryModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function updateModalTotalPrice(price, quantity) {
    const total = price * quantity;
    if (elements.modalTotalPrice) {
        elements.modalTotalPrice.textContent = `₦${total.toLocaleString()}`;
    }
    if (elements.modalItemTotal) {
        elements.modalItemTotal.textContent = `₦${total.toLocaleString()}`;
    }
}

// ========== EVENT LISTENERS ==========
function initEventListeners() {
    console.log('Initializing event listeners...');
    
    // Mobile menu toggle
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            elements.mobileMenu.classList.toggle('hidden');
            elements.mobileMenuBtn.innerHTML = elements.mobileMenu.classList.contains('hidden') 
                ? '<i class="fas fa-bars"></i>' 
                : '<i class="fas fa-times"></i>';
        });
    }
    
    // Modal close button
    if (elements.closeModalBtn) {
        elements.closeModalBtn.addEventListener('click', closePastryModal);
    }
    
    // Close modal when clicking outside
    if (elements.pastryModal) {
        elements.pastryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePastryModal();
            }
        });
    }
    
    // Modal quantity controls
    let modalQuantity = 1;
    let modalPastryPrice = 0;
    
    if (elements.modalDecreaseQty) {
        elements.modalDecreaseQty.addEventListener('click', () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                elements.modalQty.textContent = modalQuantity;
                updateModalTotalPrice(modalPastryPrice, modalQuantity);
            }
        });
    }
    
    if (elements.modalIncreaseQty) {
        elements.modalIncreaseQty.addEventListener('click', () => {
            modalQuantity++;
            elements.modalQty.textContent = modalQuantity;
            updateModalTotalPrice(modalPastryPrice, modalQuantity);
        });
    }
    
    // Modal add to cart
    if (elements.modalAddToCart) {
        elements.modalAddToCart.addEventListener('click', () => {
            const modalPastryName = elements.modalPastryName.textContent;
            const modalPastryPriceText = elements.modalPastryPrice.textContent;
            const price = parseInt(modalPastryPriceText.replace(/[^0-9]/g, ''));
            const pastry = pastries.find(p => p.name === modalPastryName);
            
            if (pastry) {
                addToCart(pastry.id, pastry.name, price, modalQuantity);
                closePastryModal();
                modalQuantity = 1;
            }
        });
    }
    
    // Order form submission
    if (elements.orderForm) {
        elements.orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                showNotification('Your cart is empty. Please add items before placing an order.', 'error');
                return;
            }
            
            const name = document.getElementById('name')?.value;
            const phone = document.getElementById('phone')?.value;
            const address = document.getElementById('address')?.value;
            
            if (!name || !phone || !address) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Generate order ID
            const orderId = 'MKH-' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
            document.getElementById('orderId').textContent = orderId;
            
            // Show success message
            elements.successMessage.classList.remove('hidden');
            elements.successMessage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Reset form
            this.reset();
            
            // Clear cart
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            
            // Hide success message after 10 seconds
            setTimeout(() => {
                elements.successMessage.classList.add('hidden');
            }, 10000);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close menus if open
                if (elements.mobileMenu) elements.mobileMenu.classList.add('hidden');
                if (elements.mobileMenuBtn) elements.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                closeCartSidebar();
                closePastryModal();
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePastryModal();
            closeCartSidebar();
        }
    });
    
    // Window resize handling
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && elements.cartSidebar) {
            elements.cartSidebar.classList.add('translate-x-full');
        }
    });
}

// ========== UTILITY FUNCTIONS ==========
function showNotification(message, type = 'success') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 
                    type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    notification.className = `notification fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center animate-fade-in`;
    notification.innerHTML = `
        <i class="fas ${icon} mr-3 text-xl"></i>
        <div>
            <p class="font-semibold">${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// ========== EXPORT GLOBAL FUNCTIONS ==========
window.openPastryModal = openPastryModal;
window.closePastryModal = closePastryModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
