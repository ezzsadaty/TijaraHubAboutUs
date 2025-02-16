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

    // Service Details
    const serviceItems = document.querySelectorAll(".service-item");
    const serviceDetails = document.querySelector(".service-details");
    const serviceTitle = document.querySelector(".service-title");
    const serviceDescription = document.querySelector(".service-description");
    const serviceImage = document.querySelector(".service-details img");

    const servicesData = {
        "Service One": {
            title: "Service One",
            description: "Description for Service One.",
            image: "TijaraHub_Logo.png"
        },
        "Service Two": {
            title: "Service Two",
            description: "Description for Service Two.",
            image: "TijaraHub_Logo.png"
        },
        "Service Three": {
            title: "Service Three",
            description: "Description for Service Three.",
            image: "TijaraHub_Logo.png"
        },
        "Service Four": {
            title: "Service Four",
            description: "Description for Service Four.",
            image: "TijaraHub_Logo.png"
        }
    };

    function setDefaultService() {
        const defaultService = "Service One";
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
const firstCardWidth = carousel.querySelector(".event-item").offsetWidth;
const arrowBtns = document.querySelectorAll(".event-section i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
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
const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
};
const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000);
};

autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

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
