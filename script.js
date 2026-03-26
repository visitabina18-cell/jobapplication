document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Get values
    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Phone validation
    if (phone === "") {
        phoneError.textContent = "Phone is required";
        isValid = false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = "Enter valid 10-digit phone number";
        isValid = false;
    }

    // Final submit
    if (isValid) {
        alert("Application submitted successfully!");
        document.getElementById("jobForm").reset();
    }
});
