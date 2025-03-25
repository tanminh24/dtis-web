window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

function toggleMenu() {
    var menu = document.getElementById("floatingMenu");
    menu.classList.toggle("show");
}


var myCarousel = new bootstrap.Carousel(document.querySelector('#partnerCarousel'), {
    interval: 4000,
    wrap: true
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("zkhjbzS-68dQdFhGg");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value
        };

        console.log("Sending data:", formData);

        emailjs.send("service_dtisweb", "template_dtisweb", formData)
            .then(function (response) {
                console.log("Success:", response);
                showToast("Message sent successfully!", "#28a745");
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                console.error("Error:", error);
                showToast("Error sending message! Try again.", "#dc3545");
            });
    });
});

function showToast(message, color) {
    let isMobile = window.innerWidth <= 768;
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: isMobile ? "center" : "right",
        backgroundColor: color,
        style: {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "15px 25px",
            borderRadius: "6px",
        }
    }).showToast();
}

function showToast(message, color) {
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: "right",
        backgroundColor: color,
        style: {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "15px 25px",
            borderRadius: "6px",
        }
    }).showToast();
}