fetch('WEB-2025/shared/html/head.html')
  .then(r => r.text())
  .then(html => {
    document.head.insertAdjacentHTML('afterbegin', html);
  })
  .catch(err => console.error('Error loading head:', err));