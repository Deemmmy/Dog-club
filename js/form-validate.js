 document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            const userName = document.getElementById('user-name');
            const userNameError = document.getElementById('user-name-error');
            if (userName.value.trim() === '') {
                userName.classList.add('error');
                userNameError.textContent = 'Your name is required.';
                isValid = false;
            } else {
                userName.classList.remove('error');
                userNameError.textContent = '';
            }

            const petName = document.getElementById('pet-name');
            const petNameError = document.getElementById('pet-name-error');
            if (petName.value.trim() === '') {
                petName.classList.add('error');
                petNameError.textContent = 'Pet name is required.';
                isValid = false;
            } else {
                petName.classList.remove('error');
                petNameError.textContent = '';
            }

            const userTel = document.getElementById('user-tel');
            const userTelError = document.getElementById('user-tel-error');
            const telPattern = /^[0-9\-\+\s]+$/;
            if (!telPattern.test(userTel.value)) {
                userTel.classList.add('error');
                userTelError.textContent = 'Your phone number is invalid.';
                isValid = false;
            } else {
                userTel.classList.remove('error');
                userTelError.textContent = '';
            }

            const userEmail = document.getElementById('user-email');
            const userEmailError = document.getElementById('user-email-error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(userEmail.value)) {
                userEmail.classList.add('error');
                userEmailError.textContent = 'Your email is invalid.';
                isValid = false;
            } else {
                userEmail.classList.remove('error');
                userEmailError.textContent = '';
            }

            const checkbox = document.getElementById('checkbox-id');
            const checkboxError = document.getElementById('checkbox-error');
            if (!checkbox.checked) {
                checkboxError.textContent = 'You must agree to the privacy policy.';
                isValid = false;
            } else {
                checkboxError.textContent = '';
            }

            if (isValid) {
                // If form is valid, you can submit it or handle it via AJAX
                alert('Form submitted successfully!');
            }
        });