document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const courseCards = document.querySelectorAll('.col-md-3.mb-4');

    searchInput.addEventListener('input', handleSearch);

    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();

        courseCards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            const cardText = card.querySelector('.card-text').textContent.toLowerCase();

            if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

