document.addEventListener('DOMContentLoaded', () => {
    window.renderWorkGrid = function() {
        const isEn = document.body.classList.contains('lang-en');
        
        const recentWorkGrid = document.querySelector('#reviews .grid-layout');
        if (recentWorkGrid) {
            const latestWorks = getLatestWorks(3);
            let html = '';
            latestWorks.forEach(work => {
                const title = typeof work.title === 'object' ? (isEn ? work.title.en : work.title.th) : (work.title || (isEn ? 'Installation Project' : 'ผลงานการติดตั้ง'));
                const description = typeof work.description === 'object' ? (isEn ? work.description.en : work.description.th) : (work.description || (isEn ? 'High-quality automatic gate installation service' : 'บริการติดตั้งประตูอัตโนมัติคุณภาพสูง'));
                
                html += `
                <div class="card review-card">
                    <div class="card-image" style="background-image: url('${work.image}'); height: 250px; cursor: pointer;" onclick="window.location.href='reviews.html'"></div>
                    <div class="card-content">
                        <h3 class="review-title">${title}</h3>
                        <p class="text-small">${description}</p>
                    </div>
                </div>
                `;
            });
            recentWorkGrid.innerHTML = html;
        }

        const workGrid = document.querySelector('.minimal-work-grid');
        if (workGrid) {
            const allWorks = getAllWorks();
            let html = '';
            allWorks.forEach(work => {
                const altText = typeof work.title === 'object' ? (isEn ? work.title.en : work.title.th) : (work.title || (isEn ? 'Installation Project' : 'ผลงานติดตั้ง'));
                html += `
                <div class="work-item" onclick="openLightbox(this)">
                    <img src="${work.image}" alt="${altText}">
                </div>
                `;
            });
            workGrid.innerHTML = html;
        }
    };

    window.renderWorkGrid();
});
