// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const toggle = this.querySelector('.faq-toggle i');
                
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    toggle.className = 'fas fa-plus';
                } else {
                    answer.style.display = 'block';
                    toggle.className = 'fas fa-minus';
                }
            });
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // Here you would normally send the data to a server
            // For now, we'll just show a success message
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
            contactForm.reset();
        });
    }
    
    // Store Filters
    const categoryFilters = document.querySelectorAll('.category-filters input');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const locationSelect = document.querySelector('.location-select');
    
    // Simple filter functionality (for demonstration)
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            alert(`البحث عن: ${searchTerm}`);
            // Here you would normally filter the products based on the search term
        });
    }
    
    if (locationSelect) {
        locationSelect.addEventListener('change', function() {
            const selectedLocation = this.value;
            if (selectedLocation) {
                alert(`تم اختيار الموقع: ${selectedLocation}`);
                // Here you would normally filter the products based on the selected location
            }
        });
    }
    
    if (categoryFilters && categoryFilters.length > 0) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('change', function() {
                // Here you would normally filter the products based on the selected categories
                if (this.checked && this.parentElement.textContent.includes('الكل')) {
                    // If "All" is checked, check all other filters
                    categoryFilters.forEach(f => {
                        f.checked = true;
                    });
                }
            });
        });
    }
    
    // Map Filters
    const mapFilters = document.querySelectorAll('.map-filters input');
    
    if (mapFilters && mapFilters.length > 0) {
        mapFilters.forEach(filter => {
            filter.addEventListener('change', function() {
                // Here you would normally filter the map markers based on the selected filters
                const filterType = this.parentElement.textContent.trim();
                alert(`تم ${this.checked ? 'تفعيل' : 'إلغاء'} عرض: ${filterType}`);
            });
        });
    }
    
    // Product Contact Buttons
    const contactBtns = document.querySelectorAll('.contact-btn');
    
    if (contactBtns && contactBtns.length > 0) {
        contactBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const productName = this.closest('.product-info').querySelector('h3').textContent;
                alert(`سيتم الاتصال بالبائع للمنتج: ${productName}`);
                // Here you would normally show contact information or a contact form
            });
        });
    }
    
    // Pagination
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    if (paginationBtns && paginationBtns.length > 0) {
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (!this.classList.contains('active') && !this.classList.contains('next')) {
                    // Remove active class from all buttons
                    paginationBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const page = this.textContent;
                    alert(`الانتقال إلى الصفحة: ${page}`);
                    // Here you would normally load the products for the selected page
                }
                
                if (this.classList.contains('next')) {
                    // Find the currently active page
                    let activePage;
                    paginationBtns.forEach((b, index) => {
                        if (b.classList.contains('active')) {
                            activePage = index;
                        }
                    });
                    
                    // Go to the next page if not on the last page
                    if (activePage < paginationBtns.length - 2) {
                        paginationBtns[activePage].classList.remove('active');
                        paginationBtns[activePage + 1].classList.add('active');
                        
                        const page = paginationBtns[activePage + 1].textContent;
                        alert(`الانتقال إلى الصفحة: ${page}`);
                        // Here you would normally load the products for the selected page
                    }
                }
            });
        });
    }
});