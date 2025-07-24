import './src/module/sw-order/extension/order-list-override';
import './src/module/sw-order/extension/order-list-extension.html.twig';

const style = document.createElement('style');
style.innerHTML = `
    .order-language-english-row {
        background-color: #e6f7ff !important;
    }
`;
document.head.appendChild(style);
