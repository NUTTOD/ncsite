document.addEventListener('DOMContentLoaded', () => {
    
    function generateProductCards(products) {
        let html = '';
        const isEn = document.body.classList.contains('lang-en');
        products.forEach(product => {
            const shortDesc = isEn ? (product.shortDescEn || product.shortDesc) : product.shortDesc;
            const btnLabel = isEn ? 'Details' : 'รายละเอียด';
            html += `
            <div class="card product-card">
                <div class="card-image" style="background-image: url('${product.image}');"></div>
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${shortDesc}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline" style="width: 100%;">${btnLabel}</a>
                </div>
            </div>
            `;
        });
        return html;
    }

    window.renderDynamicGrids = function() {
        const popularProductGrid = document.getElementById('popular-product-grid');
        if (popularProductGrid) {
            const products = getAllProducts().filter(product => product.isPopular);
            popularProductGrid.innerHTML = generateProductCards(products);
        }

        const productGrid = document.getElementById('dynamic-product-grid');
        if (productGrid) {
            const products = getAllProducts();
            productGrid.innerHTML = generateProductCards(products);
        }
    };
    
    window.renderDynamicGrids();

    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        const product = getProductById(productId);
        
        if (product) {
            document.title = `${product.name} | NC Centergate`;
            
            const hasVariants = product.variants && product.variants.length > 0;
            let currentVariantIndex = 0;
            
            window.currentProductData = product;
            
            let galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];
            let mainImage = galleryImages[0];
            
            let thumbnailsHtml = '';
            if (galleryImages.length > 1) {
                thumbnailsHtml = '<div class="product-thumbnails">';
                galleryImages.forEach((img, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    thumbnailsHtml += `<div class="thumbnail-item ${activeClass}" onclick="changeMainImage(this, '${img}')">
                                        <img src="${img}" alt="${product.name} thumbnail ${index + 1}">
                                       </div>`;
                });
                thumbnailsHtml += '</div>';
            }

            const html = `
                <div class="product-detail-layout">
                    <div class="product-gallery-section">
                        <div class="product-main-image">
                            <img id="main-product-image" src="${mainImage}" alt="${product.name}">
                        </div>
                        ${thumbnailsHtml}
                    </div>
                    <div class="product-detail-info" id="product-info-render-area">
                        <!-- Will be filled by renderDetailSection -->
                    </div>
                </div>
            `;
            productDetailContainer.innerHTML = html;
            
            window.renderDetailSection = function(variantIndex) {
                currentVariantIndex = variantIndex;
                const isEn = document.body.classList.contains('lang-en');
                const data = hasVariants ? product.variants[variantIndex] : product;
                
                const subtitle = isEn ? (data.subtitleEn || data.subtitle || product.subtitleEn || product.subtitle) : (data.subtitle || product.subtitle);
                const fullDesc = isEn ? (data.fullDescEn || data.fullDesc) : data.fullDesc;
                const features = isEn ? (data.featuresEn || data.features) : data.features;
                const specifications = isEn ? (data.specificationsEn || data.specifications) : data.specifications;
                const variantName = isEn ? (data.nameEn || data.name) : data.name;

                let featuresHtml = '';
                if (features && features.length > 0) {
                    featuresHtml = '<ul class="feature-list">';
                    features.forEach(feature => {
                        featuresHtml += `<li>${feature}</li>`;
                    });
                    featuresHtml += '</ul>';
                }

                let specsHtml = '';
                if (specifications) {
                    specsHtml = '<table class="spec-table"><tbody>';
                    for (const [key, value] of Object.entries(specifications)) {
                        specsHtml += `<tr><th>${key}</th><td>${value}</td></tr>`;
                    }
                    specsHtml += '</tbody></table>';
                }
                
                let variantHtml = '';
                if (hasVariants) {
                    let buttonsHtml = product.variants.map((v, idx) => {
                        const name = isEn ? (v.nameEn || v.name) : v.name;
                        return `<button class="btn-variant ${idx === currentVariantIndex ? 'active' : ''}" onclick="renderDetailSection(${idx})">${name}</button>`;
                    }).join('');
                    
                    let compareBtn = '';
                    if (product.variants.length > 1) {
                        const compareLabel = isEn ? '📊 Compare Specs' : '📊 เปรียบเทียบสเปค';
                        compareBtn = `<button class="btn-compare" onclick="openCompareModal()">${compareLabel}</button>`;
                    }
                    
                    const selectorLabel = isEn ? 'Select Model:' : 'เลือกรุ่น:';
                    variantHtml = `
                        <div class="variant-selector-container">
                            <h4 class="variant-label">${selectorLabel}</h4>
                            <div class="variant-buttons">
                                ${buttonsHtml}
                            </div>
                            ${compareBtn}
                        </div>
                    `;
                }

                const featuresTitle = isEn ? 'Key Features' : 'คุณสมบัติเด่น';
                const specsTitle = isEn ? 'Technical Specifications' : 'ข้อมูลทางเทคนิค';
                const contactBtnLabel = isEn ? 'Inquire Price / Order' : 'สอบถามราคา / สั่งซื้อ';
                const viewOtherBtnLabel = isEn ? 'View Other Products' : 'ดูสินค้าอื่นๆ';

                const infoHtml = `
                    <h2>${product.name}</h2>
                    <h4 class="product-subtitle">${subtitle || variantName}</h4>
                    
                    ${variantHtml}
                    
                    <div class="product-description">
                        <p>${fullDesc}</p>
                    </div>
                    
                    <div class="product-features">
                        <h3>${featuresTitle}</h3>
                        ${featuresHtml}
                    </div>
                    
                    <div class="product-specs">
                        <h3>${specsTitle}</h3>
                        ${specsHtml}
                    </div>
                    
                    <div class="product-actions" style="margin-top: 30px;">
                        <a href="index.html#contact" class="btn btn-primary">${contactBtnLabel}</a>
                        <a href="products.html" class="btn btn-outline">${viewOtherBtnLabel}</a>
                    </div>
                `;
                
                document.getElementById('product-info-render-area').innerHTML = infoHtml;
            };

            window.renderDetailSection(0);
            
            if (hasVariants && product.variants.length > 1) {
                createCompareModal(product);
            }
            
        } else {
            const isEn = document.body.classList.contains('lang-en');
            const errorTitle = isEn ? 'Product Not Found' : 'ไม่พบข้อมูลสินค้า';
            const errorDesc = isEn ? 'Sorry, the product you are searching for is not in the system or might have been removed.' : 'ขออภัย สินค้าที่คุณค้นหาไม่มีในระบบ หรืออาจถูกลบไปแล้ว';
            const backBtnLabel = isEn ? 'Go Back to All Products' : 'กลับไปหน้าสินค้าทั้งหมด';
            
            productDetailContainer.innerHTML = `
                <div class="text-center" style="padding: 50px 0;">
                    <h2>${errorTitle}</h2>
                    <p>${errorDesc}</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">${backBtnLabel}</a>
                </div>
            `;
        }
    }
});

window.changeMainImage = function(element, imageUrl) {
    document.getElementById('main-product-image').src = imageUrl;
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
};

window.createCompareModal = function(product) {
    const isEn = document.body.classList.contains('lang-en');
    
    // Get unique spec keys
    const allSpecKeys = new Set();
    product.variants.forEach(v => {
        const specs = isEn ? (v.specificationsEn || v.specifications) : v.specifications;
        if (specs) {
            Object.keys(specs).forEach(k => allSpecKeys.add(k));
        }
    });

    let headerHtml = '<tr><th>Spec</th>';
    product.variants.forEach(v => {
        const name = isEn ? (v.nameEn || v.name) : v.name;
        headerHtml += `<th>${name}</th>`;
    });
    headerHtml += '</tr>';

    let tableRows = '';
    allSpecKeys.forEach(key => {
        tableRows += `<tr><th>${key}</th>`;
        product.variants.forEach(v => {
            const specs = isEn ? (v.specificationsEn || v.specifications) : v.specifications;
            const value = specs ? (specs[key] || '-') : '-';
            tableRows += `<td>${value}</td>`;
        });
        tableRows += '</tr>';
    });

    const modalTitle = isEn ? `Compare Specs: ${product.name}` : `เปรียบเทียบสเปค: ${product.name}`;

    const modalHtml = `
        <div id="compare-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${modalTitle}</h2>
                    <span class="close-modal" onclick="closeCompareModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table class="spec-table compare-table">
                            <thead>
                                ${headerHtml}
                            </thead>
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove old modal if exists
    const oldModal = document.getElementById('compare-modal');
    if (oldModal) oldModal.remove();

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    document.getElementById('compare-modal').addEventListener('click', function(e) {
        if(e.target === this) {
            closeCompareModal();
        }
    });
};

window.openCompareModal = function() {
    const modal = document.getElementById('compare-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
};

window.closeCompareModal = function() {
    const modal = document.getElementById('compare-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};
