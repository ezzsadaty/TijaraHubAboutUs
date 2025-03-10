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
        "International Export Sales": {
            title: "International Export Sales",
            description: "Our export sales team are a global experts with extensive industry connections. TijaraHub provides their fixed salaries, while manufacturers fund their commissions. This structure ensures manufacturers have direct access to dedicated export professionals.",
            image: "export-team.png"
        },
        "Digital Marketing & Offline": {
            title: "Digital Marketing & Offline",
            description: "Engage manufacturers instantly with our Push Notifications feature, delivering timely updates and personalized content directly to their devices to enhances user engagement, boosts retention, and drives conversions. Our Events & Trade Missions service connects your business with international markets through curated events and missions to explore new markets, establish partnerships, and gain insights into global opportunities",
            image: "Digitalmarketing.png"
        },
        "Tailor made Market Research": {
            title: "Tailor made Market Research",
            description: "Our 360 Market Research & Insights service offers in-depth analysis of market trends, shelf prices, and competitors. Our Market Behavior Study analyzes how consumers and businesses act in the market. By examining purchasing habits and decision-making processes.",
            image: "market.png"
        },
        "Full Support & Customer Services": {
            title: "Full Support & Customer Services",
            description: "TijaraHub ensures seamless transactions with dedicated account managers, 24/7 customer service, real-time shipment tracking, and efficient order fulfillment solutions, including storage, packing, and last-mile delivery.",
            image: "custom.png"
        },
        "Logistics Support for Door to Door": {
            title: "Logistcs Support for Door to Door",
            description: "Our supply chain team offers a simple, safe, door-to-door logistics solution. Through partnerships with international shipping, insurance, and quality assurance companies, we handle cross-border complexities. Buyers pay a fee for this hassle-free service.",
            image: "shipp.png"
        }
    };

    function setDefaultService() {
        const defaultService = "International Export Sales";
        const serviceData = servicesData[defaultService];
        serviceTitle.textContent = serviceData.title;
        serviceDescription.textContent = serviceData.description;
        serviceImage.src = serviceData.image;
        serviceDetails.classList.add("active");
    }
    setDefaultService();

    serviceItems.forEach(item => {
        item.addEventListener("mouseover", function () {
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
        carousel.scrollBy({ left: firstCardWidth + 10, behavior: "smooth" });
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
// Get all the partner elements
const partners = document.querySelectorAll('.tijarahub-partner');

partners.forEach(partner => {
    const backgroundImage = partner.getAttribute('data-background');
    const hoverBackgroundImage = partner.getAttribute('data-hover-background');

    // Set the initial background image
    partner.style.backgroundImage = `url(${backgroundImage})`;
    if (hoverBackgroundImage == null) return;
    // Add hover effect using JavaScript
    partner.addEventListener('mouseenter', () => {
        partner.style.backgroundImage = `url(${hoverBackgroundImage})`;
    });

    partner.addEventListener('mouseleave', () => {
        partner.style.backgroundImage = `url(${backgroundImage})`;
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


// Price Toggle
document.getElementById('pricingButton').addEventListener('click', function () {
    const pricingSection = document.getElementById('pricingSection');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
});
// New Code By Ahmed End Here
////////////////////////////////////////////////////////////