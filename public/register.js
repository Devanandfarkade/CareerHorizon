document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if the passwords match
        if (password !== confirmPassword) {
            document.getElementById('response').textContent = 'Passwords do not match!';
            return;
        }

        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, password }),
        });

        const result = await response.json();
        document.getElementById('response').textContent = result.message;

        if (response.status === 201) {
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    });
});
