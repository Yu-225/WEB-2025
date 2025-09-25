
fetch('WEB-2025/shared/html/navbar.html')
.then(response => response.text())
.then(html => {
    document.getElementById('navbar-container').innerHTML = html;
})
.catch(error => console.error('Error loading navbar:', error));