document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
    const email = document.getElementById('email').value;
    const url = document.getElementById('url').value;
    const telephone = document.getElementById('telephone').value;
    const shoesize = document.getElementById('shoesize').value;
    const range = document.getElementById('range').value;

    // Validate form data
    let errors = [];

    if (!firstname.match(/^[a-zA-Z]+$/)) {
        errors.push('First Name should contain only letters.');
    }

    if (!lastname.match(/^[a-zA-Z]+$/)) {
        errors.push('Last Name should contain only letters.');
    }

    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        errors.push('Invalid email format.');
    }

    if (url && !url.match(/^https?:\/\/[^\s$.?#].[^\s]*$/)) {
        errors.push('Invalid URL format.');
    }

    if (telephone && !telephone.match(/^\+?[0-9\s]+$/)) {
        errors.push('Telephone should contain only numbers and spaces.');
    }

    if (!shoesize || shoesize < 0) {
        errors.push('Shoe size should be a positive number.');
    }

    // Display errors or form data
    if (errors.length > 0) {
        alert('Form submission failed:\n' + errors.join('\n'));
    } else {
        alert(`Form submitted with data:\n
            First Name: ${firstname}\n
            Last Name: ${lastname}\n
            Date of Birth: ${dateofbirth}\n
            Email: ${email}\n
            URL: ${url}\n
            Telephone: ${telephone}\n
            Shoe Size: ${shoesize}\n
            Flying Skill Level: ${range}
        `);

        // Here you can add code to send the data to a server or perform other actions
    }
});
