const fs = require('fs');
const path = "/mnt/c/NUTTOD/Work/Develope/html/nccentergate/assets/js/product-render.js";
let content = fs.readFileSync(path, 'utf8');

const compareLogic = `

window.createCompareModal = function(product) {
    
    const allSpecKeys = new Set();
    product.variants.forEach(v => {
        if(v.specifications) {
            Object.keys(v.specifications).forEach(k => allSpecKeys.add(k));
        }
    });

    let tableRows = '';
    allSpecKeys.forEach(key => {
        let rowHtml = \`<tr><th>\${key}</th>\`;
        product.variants.forEach(v => {
            rowHtml += \`<td>\${v.specifications && v.specifications[key] ? v.specifications[key] : '-'}</td>\`;
        });
        rowHtml += '</tr>';
        tableRows += rowHtml;
    });

    let headerHtml = \`<tr><th>คุณสมบัติ</th>\`;
    product.variants.forEach(v => {
        headerHtml += \`<th>\${v.name}</th>\`;
    });
    headerHtml += '</tr>';

    const modalHtml = \`
        <div id="compare-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>เปรียบเทียบสเปค: \${product.name}</h2>
                    <span class="close-modal" onclick="closeCompareModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table class="spec-table compare-table">
                            <thead>
                                \${headerHtml}
                            </thead>
                            <tbody>
                                \${tableRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    \`;

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
`;

fs.appendFileSync(path, compareLogic);
console.log("Appended compare logic");
