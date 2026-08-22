
/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active")
            ? "✕"
            : "☰";
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeBtn.textContent =
        isLight ? "🌙" : "☀";

});


/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "ideas into reality.",
    "things that actually work.",
    "with code and hardware.",
    "solutions from scratch.",
    "projects with purpose.",
    "ideas with code.",
    "what I imagine.",
    "from concept to creation."

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );
}

typeEffect();


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        projects.forEach(project => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {

                project.style.display = "flex";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;

    }


    /*
        This is currently a frontend-only form.

        To make it actually send messages,
        connect it to your Google Apps Script,
        Web3Forms, Formspree, or another backend.
    */

    alert(
        "Thanks " +
        name +
        "! Your message form is ready to be connected."
    );

    contactForm.reset();

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    navigationLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color =
                "var(--primary2)";

        }

    });

});
