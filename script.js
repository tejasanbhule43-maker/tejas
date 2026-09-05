/* =========================================
   TEJAS ANBHULE - PREMIUM PORTFOLIO
   EMAILJS CONTACT FORM
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       LOADER
    =============================== */
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1000);
    }


    /* ===============================
       TYPING EFFECT
    =============================== */
    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Web Developer",
            "Python Developer",
            "JavaScript Developer",
            "IT Engineering Student",
            "Creative Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {
                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1500);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, deleting ? 50 : 100);
        }

        typeEffect();
    }


    /* ===============================
       MOBILE MENU
    =============================== */
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");
            });

        });
    }


    /* ===============================
       NAVBAR SCROLL
    =============================== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ===============================
       SCROLL REVEAL
    =============================== */
    const revealElements =
        document.querySelectorAll(
            ".section, .project-card, .skill-card, .timeline-item, .contact-card"
        );

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.15
        });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    /* ===============================
       SKILL BAR ANIMATION
    =============================== */
    const skillBars =
        document.querySelectorAll(".skill-progress");

    const skillObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.getAttribute("data-width");

                    if (width) {
                        entry.target.style.width = width;
                    }

                }

            });

        }, {
            threshold: 0.5
        });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });


    /* ===============================
       BACK TO TOP
    =============================== */
    const backToTop =
        document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* ===============================
       SMOOTH SCROLL
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ===============================
       PARTICLE BACKGROUND
    =============================== */
    const canvas =
        document.getElementById("particles");

    if (canvas) {

        const ctx = canvas.getContext("2d");

        let particles = [];

        function resizeCanvas() {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        }

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        for (let i = 0; i < 90; i++) {

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5
            });

        }

        function animateParticles() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            particles.forEach(particle => {

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0)
                    particle.x = canvas.width;

                if (particle.x > canvas.width)
                    particle.x = 0;

                if (particle.y < 0)
                    particle.y = canvas.height;

                if (particle.y > canvas.height)
                    particle.y = 0;

                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    "rgba(120,180,255,0.7)";

                ctx.fill();

            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }


    /* ===============================
       PROJECT CARD TILT
    =============================== */
    document.querySelectorAll(".project-card")
        .forEach(card => {

            card.addEventListener("mousemove", e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -5;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";

            });

        });


    /* ===============================
       CURRENT YEAR
    =============================== */
    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =========================================
       EMAILJS CONTACT FORM
    ========================================= */

    const contactForm =
        document.getElementById("contact-form");

    const sendButton =
        document.getElementById("send-btn");

    const formMessage =
        document.getElementById("form-message");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!sendButton) return;


            /* BUTTON LOADING */

            sendButton.disabled = true;

            sendButton.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending...';


            if (formMessage) {

                formMessage.textContent =
                    "Sending your message...";

                formMessage.className =
                    "form-message sending";

            }


            /* EMAILJS */

            emailjs.sendForm(
                "service_ts52lsv",
                "template_5mnpjoe",
                contactForm
            )

            .then(() => {

                /* SUCCESS */

                if (formMessage) {

                    formMessage.textContent =
                        "✓ Message sent successfully!";

                    formMessage.className =
                        "form-message success";

                }


                sendButton.innerHTML =
                    '<i class="fas fa-check"></i> Message Sent!';


                contactForm.reset();


                setTimeout(() => {

                    sendButton.disabled = false;

                    sendButton.innerHTML =
                        '<i class="fas fa-paper-plane"></i> Send Message';

                    if (formMessage) {
                        formMessage.textContent = "";
                        formMessage.className = "form-message";
                    }

                }, 4000);

            })

            .catch((error) => {

                console.error(
                    "EmailJS Error:",
                    error
                );


                /* ERROR */

                if (formMessage) {

                    formMessage.textContent =
                        "✕ Message could not be sent. Please try again.";

                    formMessage.className =
                        "form-message error";

                }


                sendButton.disabled = false;

                sendButton.innerHTML =
                    '<i class="fas fa-paper-plane"></i> Send Message';

            });

        });

    }

});