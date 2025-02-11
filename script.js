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


