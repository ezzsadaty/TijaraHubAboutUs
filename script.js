// New Code By Ahmed Start Here
////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    let isRTL = document.documentElement.getAttribute("dir") === "rtl";

    if (isRTL) {
        
    }
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

    const servicesDataEN = {
        "International Export Sales": {
            title: "International Export Sales",
            description: "Our export sales team are global experts with extensive industry connections. TijaraHub provides their fixed salaries, while manufacturers fund their commissions. This structure ensures manufacturers have direct access to dedicated export professionals.",
            image: "serv/export-team.png"
        },
        "Digital Marketing & Offline": {
            title: "Digital Marketing & Offline",
            description: "Engage manufacturers instantly with our Push Notifications feature, delivering timely updates and personalized content directly to their devices. Our Events & Trade Missions service connects your business with international markets through curated events and missions.",
            image: "serv/Digitalmarketing.png"
        },
        "Tailor made Market Research": {
            title: "Tailor made Market Research",
            description: "Our 360 Market Research & Insights service offers in-depth analysis of market trends, shelf prices, and competitors. Our Market Behavior Study analyzes how consumers and businesses act in the market.",
            image: "serv/market.png"
        },
        "Full Support & Customer Services": {
            title: "Full Support & Customer Services",
            description: "TijaraHub ensures seamless transactions with dedicated account managers, 24/7 customer service, real-time shipment tracking, and efficient order fulfillment solutions.",
            image: "serv/custom.png"
        },
        "Logistics Support for Door to Door": {
            title: "Logistics Support for Door to Door",
            description: "Our supply chain team offers a simple, safe, door-to-door logistics solution. Through partnerships with international shipping, insurance, and quality assurance companies, we handle cross-border complexities.",
            image: "serv/shipp.png"
        }
    };

    // Service Data in Arabic
    const servicesDataAR = {
        "مندوب مبيعات التصدير الدولي": {
            title: "مندوب مبيعات التصدير الدولي",
            description: "فريق مبيعات التصدير لدينا خبراء عالميون ولديهم اتصالات واسعة في الصناعة. توفر TijaraHub رواتبهم الثابتة، بينما يقوم المصنعون بتمويل عمولاتهم. يضمن هذا الهيكل وصول المصنعين مباشرةً إلى محترفي التصدير المتفانين.",
            image: "serv/export-team.png"
        },
        "التسويق الرقمي": {
            title: "التسويق الرقمي",
            description: "قم بإشراك المصنعين فورًا من خلال ميزة الإشعارات الفورية لدينا، والتي توفر تحديثات مخصصة مباشرة إلى أجهزتهم. تربط خدمة الأحداث والبعثات التجارية أعمالك بالأسواق الدولية من خلال فعاليات ومهام مخصصة.",
            image: "serv/Digitalmarketing.png"
        },
        "أبحاث السوق المصممة خصيصًا": {
            title: "أبحاث السوق المصممة خصيصًا",
            description: "تقدم خدمة أبحاث السوق والرؤى الخاصة بنا تحليلًا متعمقًا لاتجاهات السوق وأسعار الرفوف والمنافسين. كما يقوم تحليل سلوك السوق لدينا بدراسة كيفية تصرف المستهلكين والشركات في السوق.",
            image: "serv/market.png"
        },
        "الدعم الكامل وخدمات العملاء": {
            title: "الدعم الكامل وخدمات العملاء",
            description: "تضمن TijaraHub معاملات سلسة مع مديري حسابات مخصصين، وخدمة عملاء على مدار الساعة، وتتبع الشحنات في الوقت الفعلي، وحلول تنفيذ الطلبات بكفاءة.",
            image: "serv/custom.png"
        },
        "الدعم اللوجستي من الباب إلى الباب": {
            title: "الدعم اللوجستي من الباب إلى الباب",
            description: "يقدم فريق سلسلة التوريد لدينا حلاً لوجستيًا بسيطًا وآمنًا من الباب إلى الباب. من خلال الشراكات مع شركات الشحن الدولية والتأمين وضمان الجودة، نتعامل مع تعقيدات التجارة عبر الحدود.",
            image: "serv/shipp.png"
        }
    };

    // Choose the correct service data based on RTL or LTR
    const servicesData = isRTL ? servicesDataAR : servicesDataEN;


    function setDefaultService() {
        //const defaultService = "International Export Sales";
        const defaultService = isRTL ? "مندوب مبيعات التصدير الدولي" : "International Export Sales";
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

