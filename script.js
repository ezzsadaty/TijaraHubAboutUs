document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute("data-target");
        const increment = target / 100; // تقسيم القيمة إلى 100 خطوة للحصول على تأثير سلس

        function updateCounter() {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20); // تحديث الرقم كل 20 ميلي ثانية
            } else {
                counter.innerText = target; // تأكد من أن الرقم النهائي مضبوط بدقة
            }
        }

        updateCounter();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
    const serviceDetails = document.querySelector(".service-details");
    const serviceTitle = document.querySelector(".service-title");
    const serviceDescription = document.querySelector(".service-description");
    const serviceImage = document.querySelector(".service-details img");

    const servicesData = {
        "Service One": {
            title: "Service One",
            description: "Description for Service One. This is a detailed explanation of what this service offers.",
            image: "TijaraHub_Logo.png"
        },
        "Service Two": {
            title: "Service Two",
            description: "Description for Service Two. Another example of a great service offered.",
            image: "TijaraHub_Logo.png"
        },
        "Service Three": {
            title: "Service Three",
            description: "Description for Service Three. Here is another key service with details.",
            image: "TijaraHub_Logo.png"
        },
        "Service Four": {
            title: "Service Four",
            description: "Description for Service Four. Final service with its important features.",
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

// document.addEventListener("DOMContentLoaded", function() {
//     const eventTrack = document.querySelector(".event-track");
//     const eventSection = document.querySelector(".event-section");

//     const firstEventItem = eventTrack.querySelector(".event-item");
//     const firstEventItemWidth = firstEventItem.offsetWidth;

//     let isDragging = false,
//         startX,
//         startScrollLeft,
//         timeoutId;

//     const dragStart = (e) => { 
//         isDragging = true;
//         eventTrack.classList.add("dragging");
//         startX = e.pageX;
//         startScrollLeft = eventTrack.scrollLeft;
//     };

//     const dragging = (e) => {
//         if (!isDragging) return;
    
//         const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
//         if (newScrollLeft <= 0 || newScrollLeft >= 
//             eventTrack.scrollWidth - eventTrack.offsetWidth) {
            
//             isDragging = false;
//             return;
//         }
    
//         eventTrack.scrollLeft = newScrollLeft;
//     };

//     const dragStop = () => {
//         isDragging = false; 
//         eventTrack.classList.remove("dragging");
//     };

//     const autoPlay = () => {
//         if (window.innerWidth < 800) return; 
        
//         const totalEventWidth = eventTrack.scrollWidth;
        
//         const maxScrollLeft = totalEventWidth - eventTrack.offsetWidth;
        
//         if (eventTrack.scrollLeft >= maxScrollLeft) return;
        
//         timeoutId = setTimeout(() => 
//             eventTrack.scrollLeft += firstEventItemWidth, 2000);
//     };

//     eventTrack.addEventListener("mousedown", dragStart);
//     eventTrack.addEventListener("mousemove", dragging);
//     document.addEventListener("mouseup", dragStop);
//     eventSection.addEventListener("mouseenter", () => 
//         clearTimeout(timeoutId));
//     eventSection.addEventListener("mouseleave", autoPlay);
//     autoPlay();
// });

const wrapper = document.querySelector(".event-section");
const carousel = document.querySelector(".event-track");
const firstCardWidth = carousel.querySelector(".event-item").offsetWidth;
const arrowBtns = document.querySelectorAll(".event-section i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);