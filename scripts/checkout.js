import { generateOrderSummaryHTML, attachEventListeners } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/sendingRequest.js';


renderPaymentSummary();
generateOrderSummaryHTML();
attachEventListeners();
