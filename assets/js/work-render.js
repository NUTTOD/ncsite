
document.addEventListener('DOMContentLoaded', () => {

    const recentWorkGrid = document.querySelector('#reviews .grid-layout');
    if (recentWorkGrid) {
        const latestWorks = getLatestWorks(3);
        let html = '';
        latestWorks.forEach(work => {
            html += `
            <div class="card review-card">
                <div class="card-image" style="background-image: url('${work.image}'); height: 250px; cursor: pointer;" onclick="window.location.href='reviews.html'"></div>
                <div class="card-content">
                    <h3 class="review-title">${work.title || 'ผลงานการติดตั้ง'}</h3>
                    <p class="text-small">${work.description || 'บริการติดตั้งประตูอัตโนมัติคุณภาพสูง'}</p>
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
            html += `
            <div class="work-item" onclick="openLightbox(this)">
                <img src="${work.image}" alt="${work.title || 'ผลงานติดตั้ง'}">
            </div>
            `;
        });
        workGrid.innerHTML = html;
    }
});
