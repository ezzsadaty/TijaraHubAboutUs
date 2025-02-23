// New Code By Ahmed Start Here
////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
    // Counter Animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute("data-target");
        const increment = target / 100;
        function updateCounter() {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
    //short item list hover effect to disable the tooltip

    document.querySelectorAll('.small-service-item[role="img"]').forEach(item => {
        if (item.hasAttribute('title')) {
            item.setAttribute('data-title', item.getAttribute('title'));
            item.removeAttribute('title'); 
        }
        item.addEventListener('mouseenter', () => {
            item.setAttribute('data-title', item.getAttribute('data-title') || "");
        });
    });
    // Service Details
    const serviceItems = document.querySelectorAll(".service-item");
    const serviceDetails = document.querySelector(".service-details");
    const serviceTitle = document.querySelector(".service-title");
    const serviceDescription = document.querySelector(".service-description");
    const serviceImage = document.querySelector(".service-details img");

    const servicesData = {
        "Dedicated Export Sales Team": {
            title: "Dedicated Export Sales Team",
            description: "Our expert sales team specializes in global markets, helping you expand your business internationally with tailored export strategies and direct B2B connections.",
            image: "export-team.png"
        },
        "Digital Marketing & Offline": {
            title: "Digital Marketing & Offline",
            description: "TijaraHub provides businesses with a comprehensive digital marketing strategy designed to enhance brand visibility, generate leads, and drive conversions through digital campaigns, social media, email marketing, and offline trade shows.",
            image: "Digitalmarketing.png"
        },
        "360° Market Research & Insights": {
            title: "360° Market Research & Insights",
            description: "TijaraHub’s 360 Product Market Research provides in-depth industry analysis, consumer insights, and competitive benchmarking to help businesses identify high-demand products, optimize marketing, and maximize profitability.",
            image: "market.png"
        },
        "Full Support & Customer Services": {
            title: "Full Support & Customer Services",
            description: "TijaraHub ensures seamless transactions with dedicated account managers, 24/7 customer service, real-time shipment tracking, and efficient order fulfillment solutions, including storage, packing, and last-mile delivery.",
            image: "custom.png"
        },
        "Logistcs Support": {
            title: "Logistcs Support",
            description: "TijaraHub ensures seamless logistics with a full range of services, including real-time shipment tracking, efficient order fulfillment, and dedicated account management. Our team handles storage, packing, and last-mile delivery to guarantee timely and cost-effective global shipments.",
            image: "shipp.png"
        }
    };

    function setDefaultService() {
        const defaultService = "Dedicated Export Sales Team";
        const serviceData = servicesData[defaultService];
        serviceTitle.textContent = serviceData.title;
        serviceDescription.textContent = serviceData.description;
        serviceImage.src = serviceData.image;
        serviceDetails.classList.add("active");
    }
    setDefaultService();

    serviceItems.forEach(item => {
        item.addEventListener("click", function () {
            const serviceName = item.textContent.trim();
            const serviceData = servicesData[serviceName];
            if (serviceData) {
                serviceTitle.textContent = serviceData.title;
                serviceDescription.textContent = serviceData.description;
                serviceImage.src = serviceData.image;
                serviceDetails.classList.add("active");
            }
        });
    });
    
});
// Event Carousel
const wrapper = document.querySelector(".event-section");
const carousel = document.querySelector(".event-track");
const arrowBtns = document.querySelectorAll(".event-section i");
const firstCardWidth = carousel.querySelector(".event-item").offsetWidth;
let isDragging = false, startX, startScrollLeft, timeoutId;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const scrollAmount = btn.id === "left" ? -firstCardWidth : firstCardWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};
const autoScroll = () => {
    autoScrollInterval = setInterval(() => {
        carousel.scrollBy({ left: firstCardWidth + 10 , behavior: "smooth" });
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - firstCardWidth) {
            carousel.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, 3000); 
};

wrapper.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
wrapper.addEventListener("mouseleave", autoScroll);

autoScroll();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//plan list hover effect to disable the tooltip

document.querySelectorAll('li[role="img"]').forEach(item => {
    // Store the title attribute in a custom data attribute
    if (item.hasAttribute('title')) {
        item.setAttribute('data-title', item.getAttribute('title'));
        item.removeAttribute('title'); // Remove native tooltip
    }

    item.addEventListener('mouseenter', () => {
        item.setAttribute('data-title', item.getAttribute('data-title') || ""); // Ensure tooltip content is not null
    });
});

// Testimonials
const testimonials = document.querySelectorAll(".testimonial-slider");
const prevBtn = document.querySelector(".testimonial-nav.left");
const nextBtn = document.querySelector(".testimonial-nav.right");
const container = document.querySelector(".testimonial-container");
let index = 0, autoSlide;

function showTestimonial(newIndex) {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[newIndex].classList.add("active");
    index = newIndex;
}
function nextTestimonial() {
    showTestimonial((index + 1) % testimonials.length);
}
function prevTestimonial() {
    showTestimonial((index - 1 + testimonials.length) % testimonials.length);
}
function startAutoSlide() {
    autoSlide = setInterval(nextTestimonial, 3000);
}
function stopAutoSlide() {
    clearInterval(autoSlide);
}

prevBtn.addEventListener("click", (e) => { e.preventDefault(); prevTestimonial(); });
nextBtn.addEventListener("click", (e) => { e.preventDefault(); nextTestimonial(); });
container.addEventListener("mouseenter", stopAutoSlide);
container.addEventListener("mouseleave", startAutoSlide);
showTestimonial(index);
startAutoSlide();


// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            }
        });
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
    });
});
// New Code By Ahmed End Here
////////////////////////////////////////////////////////////