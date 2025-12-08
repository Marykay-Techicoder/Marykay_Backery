        // Pastries Database
        const pastries = [
            {
                id: 1,
                name: "Butter Croissants",
                price: 1200,
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                description: "Flaky, buttery, and perfect with your morning coffee. Our croissants are made with pure butter and baked fresh every morning. The perfect balance of crisp exterior and soft, layered interior.",
                remaining: 8,
                totalStock: 24,
                nextBatch: "1 hour 30 minutes",
                category: "Breakfast",
                reviews: [
                    { name: "Chioma A.", rating: 5, comment: "The best croissants in Lagos! Flaky and buttery perfection.", date: "2 days ago" },
                    { name: "Tunde B.", rating: 4, comment: "Always fresh and delicious. My morning coffee companion.", date: "1 week ago" },
                    { name: "Amaka C.", rating: 5, comment: "Worth every naira! Better than what I had in Paris.", date: "3 days ago" }
                ]
            },
            {
                id: 2,
                name: "Chocolate Fudge Cake",
                price: 4500,
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
                description: "Rich, moist chocolate cake with decadent frosting. Made with premium cocoa and layered with our signature chocolate fudge. Perfect for celebrations or when you need a chocolate fix.",
                remaining: 3,
                totalStock: 12,
                nextBatch: "2 hours 15 minutes",
                category: "Cakes",
                reviews: [
                    { name: "Bola D.", rating: 5, comment: "My daughter's birthday cake! Everyone loved it.", date: "Yesterday" },
                    { name: "Emeka E.", rating: 5, comment: "Best chocolate cake I've ever had. Rich and not too sweet.", date: "5 days ago" },
                    { name: "Funke F.", rating: 4, comment: "Delicious! Will order again for my next event.", date: "2 weeks ago" }
                ]
            },
            {
                id: 3,
                name: "Glazed Donuts",
                price: 800,
                image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
                description: "Soft, fluffy donuts with a variety of delicious glazes. Choose from classic sugar glaze, chocolate, strawberry, or matcha. Made fresh throughout the day.",
                remaining: 15,
                totalStock: 50,
                nextBatch: "45 minutes",
                category: "Snacks",
                reviews: [
                    { name: "Kunle G.", rating: 5, comment: "The strawberry glaze is amazing! My kids love them.", date: "Today" },
                    { name: "Nneka H.", rating: 4, comment: "Fluffy and not too heavy. Perfect snack.", date: "3 days ago" },
                    { name: "Segun I.", rating: 5, comment: "Matcha donut is a game changer! So unique and tasty.", date: "1 week ago" }
                ]
            },
            {
                id: 4,
                name: "Berry Pancakes",
                price: 2500,
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
                description: "Fluffy pancakes topped with fresh berries and maple syrup. Served with whipped cream and your choice of berries. Perfect for weekend brunches.",
                remaining: 6,
                totalStock: 20,
                nextBatch: "30 minutes",
                category: "Breakfast",
                reviews: [
                    { name: "Zainab J.", rating: 5, comment: "Best pancakes in town! Fluffy and delicious.", date: "Yesterday" },
                    { name: "Chinedu K.", rating: 4, comment: "Great brunch option. The berries are always fresh.", date: "4 days ago" },
                    { name: "Aisha L.", rating: 5, comment: "Perfect Sunday treat with my family. Highly recommended!", date: "1 week ago" }
                ]
            },
            {
                id: 5,
                name: "French Macarons",
                price: 2000,
                image: "https://images.unsplash.com/photo-1569929238190-869826b1bb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Delicate almond meringue cookies with creamy fillings. Available in various flavors: pistachio, raspberry, chocolate, vanilla, and lemon. Perfect for gifts or special occasions.",
                remaining: 12,
                totalStock: 30,
                nextBatch: "1 hour",
                category: "Confections",
                reviews: [
                    { name: "Olu M.", rating: 5, comment: "Beautiful and delicious! Perfect for my daughter's bridal shower.", date: "2 days ago" },
                    { name: "Fatima N.", rating: 4, comment: "The pistachio flavor is divine. Will order again.", date: "1 week ago" },
                    { name: "David O.", rating: 5, comment: "Impressed by the quality. Better than imported ones.", date: "3 days ago" }
                ]
            },
            {
                id: 6,
                name: "Classic Tiramisu",
                price: 3500,
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Coffee-flavored Italian dessert with layers of ladyfingers dipped in coffee, mascarpone cheese, and dusted with cocoa. A sophisticated dessert for true coffee lovers.",
                remaining: 4,
                totalStock: 10,
                nextBatch: "3 hours",
                category: "Desserts",
                reviews: [
                    { name: "Grace P.", rating: 5, comment: "Authentic Italian taste! My Italian friend approved.", date: "Yesterday" },
                    { name: "Ben Q.", rating: 4, comment: "Creamy and not too sweet. Perfect balance of coffee flavor.", date: "5 days ago" },
                    { name: "Rita R.", rating: 5, comment: "Our favorite dessert! Order it every Friday.", date: "2 weeks ago" }
                ]
            },
            {
                id: 7,
                name: "Homemade Apple Pie",
                price: 2800,
                image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                description: "Warm apple pie with cinnamon and flaky crust. Made with fresh Granny Smith apples and our secret spice blend. Best served warm with vanilla ice cream.",
                remaining: 7,
                totalStock: 15,
                nextBatch: "2 hours",
                category: "Pies",
                reviews: [
                    { name: "James S.", rating: 5, comment: "Tastes just like grandma used to make! Perfect crust.", date: "Today" },
                    { name: "Micheal T.", rating: 4, comment: "The cinnamon flavor is perfect. Great with ice cream.", date: "3 days ago" },
                    { name: "Sarah U.", rating: 5, comment: "Our family's favorite dessert. Always order two!", date: "1 week ago" }
                ]
            },
            {
                id: 8,
                name: "Cinnamon Rolls",
                price: 1800,
                image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                description: "Soft, gooey cinnamon rolls with cream cheese frosting. Made with our special dough that's proofed for 24 hours for maximum fluffiness. Perfect for breakfast or dessert.",
                remaining: 10,
                totalStock: 25,
                nextBatch: "1 hour 15 minutes",
                category: "Breakfast",
                reviews: [
                    { name: "Linda V.", rating: 5, comment: "The cream cheese frosting is to die for! Not too sweet.", date: "Yesterday" },
                    { name: "Peter W.", rating: 4, comment: "Best cinnamon rolls I've had outside the US.", date: "4 days ago" },
                    { name: "Jessica X.", rating: 5, comment: "Worth waking up early for! Fresh and delicious.", date: "2 weeks ago" }
                ]
            },
            {
                id: 9,
                name: "Chocolate Chip Cookies",
                price: 900,
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
                description: "Classic chocolate chip cookies with crispy edges and chewy centers. Packed with premium chocolate chips and a hint of sea salt. Perfect with milk or on their own.",
                remaining: 25,
                totalStock: 60,
                nextBatch: "20 minutes",
                category: "Cookies",
                reviews: [
                    { name: "Daniel Y.", rating: 5, comment: "Perfect balance of crisp and chewy. My kids love them.", date: "Today" },
                    { name: "Patricia Z.", rating: 4, comment: "Great cookies! The sea salt makes a difference.", date: "2 days ago" },
                    { name: "Kevin A.", rating: 5, comment: "Addictive! I buy a dozen every week.", date: "1 week ago" }
                ]
            },
            {
                id: 10,
                name: "Blueberry Muffins",
                price: 1200,
                image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Moist blueberry muffins with a crunchy streusel topping. Made with fresh blueberries and a hint of lemon zest. Perfect for breakfast on the go or an afternoon snack.",
                remaining: 18,
                totalStock: 40,
                nextBatch: "40 minutes",
                category: "Muffins",
                reviews: [
                    { name: "Susan B.", rating: 5, comment: "The streusel topping is amazing! Not too sweet.", date: "Yesterday" },
                    { name: "Robert C.", rating: 4, comment: "Fresh blueberries in every bite. My morning favorite.", date: "3 days ago" },
                    { name: "Nancy D.", rating: 5, comment: "Best muffins in Lagos! Always moist and flavorful.", date: "1 week ago" }
                ]
            },
            {
                id: 11,
                name: "New York Cheesecake",
                price: 4200,
                image: "https://images.unsplash.com/photo-1567327613482-82d46216d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Classic New York-style cheesecake with a graham cracker crust. Rich, creamy, and dense with a hint of lemon. Served plain or with berry compote.",
                remaining: 5,
                totalStock: 12,
                nextBatch: "4 hours",
                category: "Cakes",
                reviews: [
                    { name: "Thomas E.", rating: 5, comment: "Creamy perfection! Better than any restaurant cheesecake.", date: "2 days ago" },
                    { name: "Lisa F.", rating: 5, comment: "My husband's favorite. We get it for every special occasion.", date: "1 week ago" },
                    { name: "Brian G.", rating: 4, comment: "Authentic New York style. Rich and satisfying.", date: "3 days ago" }
                ]
            },
            {
                id: 12,
                name: "Bread Pudding",
                price: 1900,
                image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                description: "Warm bread pudding made with day-old croissants, raisins, and a rich custard. Served with vanilla sauce and a sprinkle of cinnamon. Comfort food at its best.",
                remaining: 9,
                totalStock: 18,
                nextBatch: "1 hour 30 minutes",
                category: "Desserts",
                reviews: [
                    { name: "Margaret H.", rating: 5, comment: "The perfect comfort dessert. Warm and satisfying.", date: "Today" },
                    { name: "Steven I.", rating: 4, comment: "Great way to use day-old bread! Delicious and not wasteful.", date: "4 days ago" },
                    { name: "Karen J.", rating: 5, comment: "My go-to dessert when I need something warm and comforting.", date: "2 weeks ago" }
                ]
            }
        ];

        // Initialize cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const deliveryFee = 1000;
        
        // Carousel state
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const totalSlides = slides.length;
        let carouselInterval;
        
        // Modal state
        let modalPastryId = null;
        let modalQuantity = 1;
        
        // DOM Elements
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const sidebarCartItems = document.getElementById('sidebarCartItems');
        const subtotalEl = document.getElementById('subtotal');
        const totalEl = document.getElementById('total');
        const sidebarSubtotalEl = document.getElementById('sidebarSubtotal');
        const sidebarTotalEl = document.getElementById('sidebarTotal');
        const clearCartBtn = document.getElementById('clearCart');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCartBtn = document.getElementById('closeCart');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const orderForm = document.getElementById('orderForm');
        const successMessage = document.getElementById('successMessage');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const prevSlideBtn = document.getElementById('prevSlide');
        const nextSlideBtn = document.getElementById('nextSlide');
        const viewAllPastriesBtn = document.getElementById('viewAllPastriesBtn');
        const allPastriesSection = document.getElementById('allPastriesSection');
        const allPastriesGrid = document.getElementById('allPastriesGrid');
        const backToFeaturedBtn = document.getElementById('backToFeaturedBtn');
        const pastryModal = document.getElementById('pastryModal');
        const closeModalBtn = document.getElementById('closeModal');
        const modalPastryName = document.getElementById('modalPastryName');
        const modalPastryImage = document.getElementById('modalPastryImage');
        const modalPastryPrice = document.getElementById('modalPastryPrice');
        const modalPastryDescription = document.getElementById('modalPastryDescription');
        const modalPastryRemaining = document.getElementById('modalPastryRemaining');
        const modalPastryStockStatus = document.getElementById('modalPastryStockStatus');
        const modalPastryStockBar = document.getElementById('modalPastryStockBar');
        const modalPastryStockMessage = document.getElementById('modalPastryStockMessage');
        const modalPastryTimer = document.getElementById('modalPastryTimer');
        const modalPastryReviews = document.getElementById('modalPastryReviews');
        const modalDecreaseQty = document.getElementById('modalDecreaseQty');
        const modalIncreaseQty = document.getElementById('modalIncreaseQty');
        const modalQty = document.getElementById('modalQty');
        const modalAddToCart = document.getElementById('modalAddToCart');
        const pastryCards = document.querySelectorAll('.pastry-card');
        
        // Initialize carousel
        initCarousel();
        
        // Initialize cart display
        updateCartDisplay();
        
        // Initialize dark mode
        initDarkMode();
        
        // Initialize all pastries grid
        renderAllPastriesGrid();
        
        // Carousel functions
        function initCarousel() {
            // Start automatic carousel
            startCarousel();
            
            // Set up event listeners for manual navigation
            prevSlideBtn.addEventListener('click', () => {
                goToSlide(currentSlide - 1);
                resetCarouselInterval();
            });
            
            nextSlideBtn.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
                resetCarouselInterval();
            });
            
            // Set up dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetCarouselInterval();
                });
            });
        }
        
        function startCarousel() {
            carouselInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000); // Change slide every 5 seconds
        }
        
        function resetCarouselInterval() {
            clearInterval(carouselInterval);
            startCarousel();
        }
        
        function goToSlide(slideIndex) {
            // Ensure slideIndex is within bounds
            slideIndex = (slideIndex + totalSlides) % totalSlides;
            
            // Hide current slide
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('inactive');
            dots[currentSlide].classList.remove('active');
            
            // Show new slide
            slides[slideIndex].classList.remove('inactive');
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
            
            currentSlide = slideIndex;
        }
        
        // Dark mode functions
        function initDarkMode() {
            // Check for saved theme preference or default to light
            const savedTheme = localStorage.getItem('theme') || 'light';
            
            // Apply the saved theme
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            
            // Set up toggle button event listener
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }
        
        function toggleDarkMode() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
                ? '<i class="fas fa-bars"></i>' 
                : '<i class="fas fa-times"></i>';
        });
        
        // View All Pastries functionality
        viewAllPastriesBtn.addEventListener('click', () => {
            document.getElementById('pastries').classList.add('hidden');
            allPastriesSection.classList.remove('hidden');
            allPastriesSection.scrollIntoView({ behavior: 'smooth' });
        });
        
        backToFeaturedBtn.addEventListener('click', () => {
            allPastriesSection.classList.add('hidden');
            document.getElementById('pastries').classList.remove('hidden');
            document.getElementById('pastries').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Render all pastries in grid
        function renderAllPastriesGrid() {
            allPastriesGrid.innerHTML = '';
            
            pastries.forEach(pastry => {
                const pastryCard = document.createElement('div');
                pastryCard.className = 'bg-white dark:bg-[#333333] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 pastry-card';
                pastryCard.setAttribute('data-id', pastry.id);
                
                // Calculate stock percentage
                const stockPercentage = Math.round((pastry.remaining / pastry.totalStock) * 100);
                let stockClass = 'stock-high';
                if (stockPercentage < 30) {
                    stockClass = 'stock-low';
                } else if (stockPercentage < 60) {
                    stockClass = 'stock-medium';
                }
                
                pastryCard.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${pastry.image}" alt="${pastry.name}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold">${pastry.name}</h3>
                            <span class="text-sm font-bold ${stockClass}">${pastry.remaining} left</span>
                        </div>
                        <p class="text-[#5A534A] dark:text-[#CCCCCC] mb-4 text-sm line-clamp-2">${pastry.description.substring(0, 100)}...</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-[#E76F51] dark:text-[#E9C46A]">₦${pastry.price.toLocaleString()}</span>
                            <div class="flex space-x-2">
                                <button class="view-detail-btn bg-[#2A9D8F] hover:bg-[#238277] text-white py-2 px-4 rounded-lg" data-id="${pastry.id}">
                                    <i class="fas fa-eye mr-1"></i> View
                                </button>
                                <button class="add-to-cart bg-[#E76F51] dark:bg-[#E9C46A] hover:bg-[#D65A40] dark:hover:bg-[#D4B152] text-white dark:text-[#2D2A22] py-2 px-4 rounded-lg" data-id="${pastry.id}" data-name="${pastry.name}" data-price="${pastry.price}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                allPastriesGrid.appendChild(pastryCard);
            });
            
            // Add event listeners to the new cards
            addEventListenersToAllPastries();
        }
        
        // Add event listeners to all pastries grid
        function addEventListenersToAllPastries() {
            // View detail buttons
            document.querySelectorAll('.view-detail-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    openPastryModal(id);
                });
            });
            
            // Add to cart buttons in all pastries grid
            document.querySelectorAll('#allPastriesGrid .add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const name = this.getAttribute('data-name');
                    const price = parseInt(this.getAttribute('data-price'));
                    
                    // Add animation to button
                    this.classList.add('pulse-hover');
                    setTimeout(() => this.classList.remove('pulse-hover'), 500);
                    
                    addToCart(id, name, price);
                });
            });
            
            // Pastry card clicks (to open modal)
            document.querySelectorAll('#allPastriesGrid .pastry-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't open modal if clicking on buttons
                    if (!e.target.closest('button')) {
                        const id = parseInt(this.getAttribute('data-id'));
                        openPastryModal(id);
                    }
                });
            });
        }
        
        // Add event listeners to featured pastries
        pastryCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't open modal if clicking on buttons
                if (!e.target.closest('button')) {
                    const id = parseInt(this.getAttribute('data-id'));
                    openPastryModal(id);
                }
            });
        });
        
        // Modal functions
        function openPastryModal(id) {
            const pastry = pastries.find(p => p.id === id);
            if (!pastry) return;
            
            modalPastryId = id;
            modalQuantity = 1;
            
            // Update modal content
            modalPastryName.textContent = pastry.name;
            modalPastryImage.src = pastry.image;
            modalPastryImage.alt = pastry.name;
            modalPastryPrice.textContent = `₦${pastry.price.toLocaleString()}`;
            modalPastryDescription.textContent = pastry.description;
            modalPastryRemaining.textContent = `${pastry.remaining} of ${pastry.totalStock}`;
            modalPastryTimer.textContent = pastry.nextBatch;
            modalQty.textContent = modalQuantity;
            
            // Calculate stock status
            const stockPercentage = Math.round((pastry.remaining / pastry.totalStock) * 100);
            modalPastryStockBar.style.width = `${stockPercentage}%`;
            
            let stockStatus = "High Stock";
            let stockMessage = "Available for immediate purchase";
            
            if (stockPercentage < 30) {
                stockStatus = "Low Stock";
                stockMessage = "Almost sold out! Order now to avoid disappointment";
                modalPastryStockStatus.className = "text-sm font-bold stock-low";
            } else if (stockPercentage < 60) {
                stockStatus = "Medium Stock";
                stockMessage = "Selling fast! Order now to secure yours";
                modalPastryStockStatus.className = "text-sm font-bold stock-medium";
            } else {
                modalPastryStockStatus.className = "text-sm font-bold stock-high";
            }
            
            modalPastryStockStatus.textContent = stockStatus;
            modalPastryStockMessage.textContent = stockMessage;
            
            // Render reviews
            modalPastryReviews.innerHTML = '';
            pastry.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'bg-[#F5E6D3] dark:bg-[#2D2A22] p-4 rounded-lg';
                
                // Generate star rating
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= review.rating) {
                        stars += '<i class="fas fa-star review-star"></i>';
                    } else {
                        stars += '<i class="far fa-star text-gray-400"></i>';
                    }
                }
                
                reviewElement.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h4 class="font-bold">${review.name}</h4>
                            <div class="flex items-center mt-1">
                                ${stars}
                            </div>
                        </div>
                        <span class="text-sm text-[#5A534A] dark:text-[#CCCCCC]">${review.date}</span>
                    </div>
                    <p class="text-[#5A534A] dark:text-[#CCCCCC]">${review.comment}</p>
                `;
                
                modalPastryReviews.appendChild(reviewElement);
            });
            
            // Show modal
            pastryModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        
        function closePastryModal() {
            pastryModal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
        
        // Modal event listeners
        closeModalBtn.addEventListener('click', closePastryModal);
        
        // Close modal when clicking outside
        pastryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePastryModal();
            }
        });
        
        // Modal quantity controls
        modalDecreaseQty.addEventListener('click', () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                modalQty.textContent = modalQuantity;
            }
        });
        
        modalIncreaseQty.addEventListener('click', () => {
            modalQuantity++;
            modalQty.textContent = modalQuantity;
        });
        
        // Modal add to cart
        modalAddToCart.addEventListener('click', () => {
            if (modalPastryId) {
                const pastry = pastries.find(p => p.id === modalPastryId);
                if (pastry) {
                    addToCart(pastry.id, pastry.name, pastry.price, modalQuantity);
                    closePastryModal();
                }
            }
        });
        
        // Add to cart functionality (from featured section)
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const name = this.getAttribute('data-name');
                const price = parseInt(this.getAttribute('data-price'));
                
                // Add animation to button
                this.classList.add('pulse-hover');
                setTimeout(() => this.classList.remove('pulse-hover'), 500);
                
                addToCart(id, name, price);
            });
        });
        
        // Add item to cart
        function addToCart(id, name, price, quantity = 1) {
            // Check if item already exists in cart
            const existingItem = cart.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity
                });
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart display
            updateCartDisplay();
            
            // Show success notification
            showNotification(`${quantity} ${name}(s) added to cart`);
            
            // Show cart sidebar on mobile
            if (window.innerWidth < 768) {
                cartSidebar.classList.remove('translate-x-full');
            }
        }
        
        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-[#E76F51] dark:bg-[#E9C46A] text-white dark:text-[#2D2A22] px-6 py-3 rounded-lg shadow-lg z-[1000] fade-in';
            notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle mr-3"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
        
        // Remove item from cart
        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart display
            updateCartDisplay();
        }
        
        // Update quantity of item in cart
        function updateQuantity(id, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(id);
                return;
            }
            
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity = newQuantity;
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart display
            updateCartDisplay();
        }
        
        // Update cart display
        function updateCartDisplay() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Calculate subtotal
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const total = subtotal + deliveryFee - (subtotal > 10000 ? deliveryFee : 0);
            
            // Update main cart display
            updateCartSection(cartItems, subtotal, total);
            
            // Update sidebar cart display
            updateCartSection(sidebarCartItems, subtotal, total);
            
            // Update totals
            subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
            totalEl.textContent = `₦${total.toLocaleString()}`;
            sidebarSubtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
            sidebarTotalEl.textContent = `₦${total.toLocaleString()}`;
            
            // Update delivery fee display
            const deliveryFeeEl = document.getElementById('deliveryFee');
            if (subtotal > 10000) {
                deliveryFeeEl.textContent = 'FREE';
                deliveryFeeEl.classList.add('text-green-500');
            } else {
                deliveryFeeEl.textContent = `₦${deliveryFee.toLocaleString()}`;
                deliveryFeeEl.classList.remove('text-green-500');
            }
        }
        
        // Update a cart section (main cart or sidebar)
        function updateCartSection(container, subtotal, total) {
            // Clear container
            container.innerHTML = '';
            
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-10 text-[#5A534A] dark:text-[#CCCCCC]">
                        <i class="fas fa-shopping-cart text-4xl mb-4 opacity-30"></i>
                        <p class="text-lg">Your cart is empty</p>
                        <p class="text-sm">Add some delicious pastries from our menu</p>
                    </div>
                `;
                return;
            }
            
            // Add each cart item
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item flex items-center justify-between py-4 border-b border-[#F5E6D3] dark:border-[#444444]';
                cartItem.innerHTML = `
                    <div class="flex-1">
                        <h4 class="font-bold">${item.name}</h4>
                        <p class="text-[#E76F51] dark:text-[#E9C46A] font-bold">₦${item.price.toLocaleString()}</p>
                    </div>
                    <div class="flex items-center">
                        <button class="decrease-quantity text-[#E76F51] dark:text-[#E9C46A] hover:text-[#D65A40] dark:hover:text-[#D4B152] h-8 w-8 rounded-full border border-[#E76F51] dark:border-[#E9C46A] flex items-center justify-center" data-id="${item.id}">
                            <i class="fas fa-minus text-sm"></i>
                        </button>
                        <span class="mx-3 font-bold">${item.quantity}</span>
                        <button class="increase-quantity text-[#E76F51] dark:text-[#E9C46A] hover:text-[#D65A40] dark:hover:text-[#D4B152] h-8 w-8 rounded-full border border-[#E76F51] dark:border-[#E9C46A] flex items-center justify-center" data-id="${item.id}">
                            <i class="fas fa-plus text-sm"></i>
                        </button>
                    </div>
                    <div class="ml-4 text-right">
                        <p class="font-bold">₦${itemTotal.toLocaleString()}</p>
                        <button class="remove-item text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm mt-1" data-id="${item.id}">
                            <i class="fas fa-trash-alt mr-1"></i> Remove
                        </button>
                    </div>
                `;
                container.appendChild(cartItem);
            });
            
            // Add event listeners to buttons in this container
            container.querySelectorAll('.decrease-quantity').forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const item = cart.find(item => item.id === id);
                    if (item) {
                        updateQuantity(id, item.quantity - 1);
                    }
                });
            });
            
            container.querySelectorAll('.increase-quantity').forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const item = cart.find(item => item.id === id);
                    if (item) {
                        updateQuantity(id, item.quantity + 1);
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
        
        // Clear cart
        clearCartBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                if (confirm('Are you sure you want to clear your cart?')) {
                    cart = [];
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                }
            }
        });
        
        // Cart sidebar toggle
        cartIcon.addEventListener('click', function() {
            cartSidebar.classList.toggle('translate-x-full');
        });
        
        closeCartBtn.addEventListener('click', function() {
            cartSidebar.classList.add('translate-x-full');
        });
        
        // Close cart sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target) && window.innerWidth < 768) {
                cartSidebar.classList.add('translate-x-full');
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', function() {
            cartSidebar.classList.add('translate-x-full');
            // Scroll to order form
            document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Place order form submission
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if cart is empty
            if (cart.length === 0) {
                alert('Your cart is empty. Please add items before placing an order.');
                return;
            }
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            
            // Generate order ID
            const orderId = 'STL-' + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('orderId').textContent = orderId;
            
            // Show success message
            successMessage.classList.remove('hidden');
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form
            orderForm.reset();
            
            // Clear cart
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            
            // Hide success message after 10 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 10000);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    
                    // Close cart sidebar if open
                    cartSidebar.classList.add('translate-x-full');
                    
                    // Close pastry modal if open
                    closePastryModal();
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements to animate
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Add hover effect to pastry cards
        const allPastryCards = document.querySelectorAll('.pastry-card');
        allPastryCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Escape key closes modals
            if (e.key === 'Escape') {
                if (!pastryModal.classList.contains('hidden')) {
                    closePastryModal();
                }
                if (!cartSidebar.classList.contains('translate-x-full')) {
                    cartSidebar.classList.add('translate-x-full');
                }
            }
            
            // Close modal with Escape key
            if (e.key === 'Escape' && !pastryModal.classList.contains('hidden')) {
                closePastryModal();
            }
        });
