const fs = require('fs');
const path = "/mnt/c/NUTTOD/Work/Develope/html/nccentergate/assets/js/product-render.js";
let content = fs.readFileSync(path, 'utf8');

const newDetailLogic = `    // 3. เรนเดอร์รายละเอียดสินค้าในหน้า product-detail.html
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        const product = getProductById(productId);
        
        if (product) {
            // เซ็ต Title ของหน้าเว็บ
            document.title = \`\${product.name} | NC Centergate\`;
            
            // เตรียมตรวจสอบเรื่อง Variants
            const hasVariants = product.variants && product.variants.length > 0;
            let currentVariantIndex = 0;
            
            // เก็บข้อมูล state ไว้ใน window หรือตัวแปรโกลบอลเพื่อใช้ตอนกดปุ่ม
            window.currentProductData = product;
            
            // สร้าง Image Gallery (Shopee/Lazada style)
            let galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];
            let mainImage = galleryImages[0];
            
            let thumbnailsHtml = '';
            if (galleryImages.length > 1) {
                thumbnailsHtml = '<div class="product-thumbnails">';
                galleryImages.forEach((img, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    thumbnailsHtml += \`<div class="thumbnail-item \${activeClass}" onclick="changeMainImage(this, '\${img}')">
                                        <img src="\${img}" alt="\${product.name} thumbnail \${index + 1}">
                                       </div>\`;
                });
                thumbnailsHtml += '</div>';
            }

            // โครงสร้างหลักของหน้า
            const html = \`
                <div class="product-detail-layout">
                    <div class="product-gallery-section">
                        <div class="product-main-image">
                            <img id="main-product-image" src="\${mainImage}" alt="\${product.name}">
                        </div>
                        \${thumbnailsHtml}
                    </div>
                    <div class="product-detail-info" id="product-info-render-area">
                        <!-- จะถูกเติมด้วย renderDetailSection -->
                    </div>
                </div>
            \`;
            productDetailContainer.innerHTML = html;
            
            // ฟังก์ชันสำหรับเรนเดอร์เนื้อหาส่วนรายละเอียด (ถูกเรียกใช้เมื่อเปลี่ยน variant)
            window.renderDetailSection = function(variantIndex) {
                currentVariantIndex = variantIndex;
                const data = hasVariants ? product.variants[variantIndex] : product;
                
                let featuresHtml = '';
                if (data.features && data.features.length > 0) {
                    featuresHtml = '<ul class="feature-list">';
                    data.features.forEach(feature => {
                        featuresHtml += \`<li>\${feature}</li>\`;
                    });
                    featuresHtml += '</ul>';
                }

                let specsHtml = '';
                if (data.specifications) {
                    specsHtml = '<table class="spec-table"><tbody>';
                    for (const [key, value] of Object.entries(data.specifications)) {
                        specsHtml += \`<tr><th>\${key}</th><td>\${value}</td></tr>\`;
                    }
                    specsHtml += '</tbody></table>';
                }
                
                let variantHtml = '';
                if (hasVariants) {
                    let buttonsHtml = product.variants.map((v, idx) => {
                        return \`<button class="btn-variant \${idx === currentVariantIndex ? 'active' : ''}" onclick="renderDetailSection(\${idx})">\${v.name}</button>\`;
                    }).join('');
                    
                    let compareBtn = '';
                    if (product.variants.length > 1) {
                        compareBtn = \`<button class="btn-compare" onclick="openCompareModal()">📊 เปรียบเทียบสเปค</button>\`;
                    }
                    
                    variantHtml = \`
                        <div class="variant-selector-container">
                            <h4 class="variant-label">เลือกรุ่น:</h4>
                            <div class="variant-buttons">
                                \${buttonsHtml}
                            </div>
                            \${compareBtn}
                        </div>
                    \`;
                }

                const infoHtml = \`
                    <h2>\${product.name}</h2>
                    <h4 class="product-subtitle">\${data.subtitle || data.name}</h4>
                    
                    \${variantHtml}
                    
                    <div class="product-description">
                        <p>\${data.fullDesc}</p>
                    </div>
                    
                    <div class="product-features">
                        <h3>คุณสมบัติเด่น</h3>
                        \${featuresHtml}
                    </div>
                    
                    <div class="product-specs">
                        <h3>ข้อมูลทางเทคนิค</h3>
                        \${specsHtml}
                    </div>
                    
                    <div class="product-actions" style="margin-top: 30px;">
                        <a href="index.html#contact" class="btn btn-primary">สอบถามราคา / สั่งซื้อ</a>
                        <a href="products.html" class="btn btn-outline">ดูสินค้าอื่นๆ</a>
                    </div>
                \`;
                
                document.getElementById('product-info-render-area').innerHTML = infoHtml;
            };

            // เรียกใช้ครั้งแรก
            window.renderDetailSection(0);
            
            // สร้าง Modal สำหรับเปรียบเทียบสเปค (ถ้ามี)
            if (hasVariants && product.variants.length > 1) {
                createCompareModal(product);
            }
            
        } else {
            // ไม่พบสินค้า
            productDetailContainer.innerHTML = \`
                <div class="text-center" style="padding: 50px 0;">
                    <h2>ไม่พบข้อมูลสินค้า</h2>
                    <p>ขออภัย สินค้าที่คุณค้นหาไม่มีในระบบ หรืออาจถูกลบไปแล้ว</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">กลับไปหน้าสินค้าทั้งหมด</a>
                </div>
            \`;
        }
    }`;

const oldStartText = "// 3. เรนเดอร์รายละเอียดสินค้าในหน้า product-detail.html";
const oldEndText = "});\n\n// ฟังก์ชันสำหรับเปลี่ยนรูปภาพหลักในแกลเลอรี่";

const startIdx = content.indexOf(oldStartText);
const endIdx = content.indexOf(oldEndText);

const newContent = content.substring(0, startIdx) + newDetailLogic + '\n' + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log("Done render");