
document.addEventListener('DOMContentLoaded', () => {

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

    function generateProductCards(products) {
        let html = '';
        products.forEach(product => {
            html += `
            <div class="card product-card">
                <div class="card-image" style="background-image: url('${product.image}');"></div>
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.shortDesc}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline" style="width: 100%;">รายละเอียด</a>
                </div>
            </div>
            `;
        });
        return html;
    }

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
                        <!-- จะถูกเติมด้วย renderDetailSection -->
                    </div>
                </div>
            `;
            productDetailContainer.innerHTML = html;

            window.renderDetailSection = function(variantIndex) {
                currentVariantIndex = variantIndex;
                const data = hasVariants ? product.variants[variantIndex] : product;
                
                let featuresHtml = '';
                if (data.features && data.features.length > 0) {
                    featuresHtml = '<ul class="feature-list">';
                    data.features.forEach(feature => {
                        featuresHtml += `<li>${feature}</li>`;
                    });
                    featuresHtml += '</ul>';
                }

                let specsHtml = '';
                if (data.specifications) {
                    specsHtml = '<table class="spec-table"><tbody>';
                    for (const [key, value] of Object.entries(data.specifications)) {
                        specsHtml += `<tr><th>${key}</th><td>${value}</td></tr>`;
                    }
                    specsHtml += '</tbody></table>';
                }
                
                let variantHtml = '';
                if (hasVariants) {
                    let buttonsHtml = product.variants.map((v, idx) => {
                        return `<button class="btn-variant ${idx === currentVariantIndex ? 'active' : ''}" onclick="renderDetailSection(${idx})">${v.name}</button>`;
                    }).join('');
                    
                    let compareBtn = '';
                    if (product.variants.length > 1) {
                        compareBtn = `<button class="btn-compare" onclick="openCompareModal()">📊 เปรียบเทียบสเปค</button>`;
                    }
                    
                    variantHtml = `
                        <div class="variant-selector-container">
                            <h4 class="variant-label">เลือกรุ่น:</h4>
                            <div class="variant-buttons">
                                ${buttonsHtml}
                            </div>
                            ${compareBtn}
                        </div>
                    `;
                }

                const infoHtml = `
                    <h2>${product.name}</h2>
                    <h4 class="product-subtitle">${data.subtitle || data.name}</h4>
                    
                    ${variantHtml}
                    
                    <div class="product-description">
                        <p>${data.fullDesc}</p>
                    </div>
                    
                    <div class="product-features">
                        <h3>คุณสมบัติเด่น</h3>
                        ${featuresHtml}
                    </div>
                    
                    <div class="product-specs">
                        <h3>ข้อมูลทางเทคนิค</h3>
                        ${specsHtml}
                    </div>
                    
                    <div class="product-actions" style="margin-top: 30px;">
                        <a href="index.html#contact" class="btn btn-primary">สอบถามราคา / สั่งซื้อ</a>
                        <a href="products.html" class="btn btn-outline">ดูสินค้าอื่นๆ</a>
                    </div>
                `;
                
                document.getElementById('product-info-render-area').innerHTML = infoHtml;
            };

            window.renderDetailSection(0);

            if (hasVariants && product.variants.length > 1) {
                createCompareModal(product);
            }
            
        } else {
            
            productDetailContainer.innerHTML = `
                <div class="text-center" style="padding: 50px 0;">
                    <h2>ไม่พบข้อมูลสินค้า</h2>
                    <p>ขออภัย สินค้าที่คุณค้นหาไม่มีในระบบ หรืออาจถูกลบไปแล้ว</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">กลับไปหน้าสินค้าทั้งหมด</a>
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
    
    const allSpecKeys = new Set();
    product.variants.forEach(v => {
        if(v.specifications) {
            Object.keys(v.specifications).forEach(k => allSpecKeys.add(k));
        }
    });

    let tableRows = '';
    allSpecKeys.forEach(key => {
        let rowHtml = `<tr><th>${key}</th>`;
        product.variants.forEach(v => {
            rowHtml += `<td>${v.specifications && v.specifications[key] ? v.specifications[key] : '-'}</td>`;
        });
        rowHtml += '</tr>';
        tableRows += rowHtml;
    });

    let headerHtml = `<tr><th>คุณสมบัติ</th>`;
    product.variants.forEach(v => {
        headerHtml += `<th>${v.name}</th>`;
    });
    headerHtml += '</tr>';

    const modalHtml = `
        <div id="compare-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>เปรียบเทียบสเปค: ${product.name}</h2>
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
