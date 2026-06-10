const fs = require('fs');
const path = "/mnt/c/NUTTOD/Work/Develope/html/nccentergate/assets/css/style.css";

const cssLogic = `
/* Variant Selector */
.variant-selector-container {
    margin-bottom: 25px;
    padding: 15px;
    background-color: var(--bg-light);
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.variant-label {
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--text-heading);
}

.variant-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.btn-variant {
    padding: 8px 16px;
    border: 1px solid var(--border-color);
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--text-main);
    transition: all var(--transition-speed);
}

.btn-variant:hover {
    border-color: var(--primary-light);
    color: var(--primary-color);
}

.btn-variant.active {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    color: #fff;
}

.btn-compare {
    background: none;
    border: none;
    color: var(--primary-color);
    font-family: var(--font-body);
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0;
    text-decoration: underline;
}

.btn-compare:hover {
    color: var(--accent-color);
}

/* Compare Modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background-color: #fff;
    width: 90%;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transform: translateY(-20px);
    transition: transform 0.3s ease;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
}

.modal-overlay.active .modal-content {
    transform: translateY(0);
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-heading);
}

.close-modal {
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    color: var(--text-muted);
    transition: color 0.2s;
}

.close-modal:hover {
    color: var(--accent-color);
}

.modal-body {
    padding: 20px;
    overflow-y: auto;
}

.table-responsive {
    overflow-x: auto;
}

.compare-table {
    width: 100%;
    min-width: 600px;
}

.compare-table th, .compare-table td {
    padding: 12px;
    border: 1px solid var(--border-color);
    text-align: center;
}

.compare-table th {
    background-color: var(--bg-light);
}

.compare-table th:first-child {
    text-align: left;
    width: 30%;
}

.compare-table td {
    color: var(--text-main);
}
`;

fs.appendFileSync(path, cssLogic);
console.log("Appended compare modal css");
