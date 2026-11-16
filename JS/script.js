 // Get the theme button
    const themeButton = document.querySelector(".theme-toggle");

    // Get the icon inside the button
    const themeIcon = themeButton.querySelector("i");

    // Check the saved theme
    let savedTheme = localStorage.getItem("freshora-theme");

    // Apply the saved theme
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    // Switch between light and dark mode
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        // Check which theme is active
        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("freshora-theme", "dark");

            themeIcon.classList.replace("fa-moon", "fa-sun");

        } else {

            localStorage.setItem("freshora-theme", "light");

            themeIcon.classList.replace("fa-sun", "fa-moon");
        }

    });




    // =================Contact Page===========================================


    function sendWhatsApp() {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let text = `Hello Freshora!

    Name: ${name}
    Email: ${email}
    Message: ${message}`;

        let phone = "2347049075862";

        window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text));

    }

