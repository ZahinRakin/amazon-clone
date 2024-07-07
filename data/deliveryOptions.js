export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    priceCents: 0
  }, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499,
  }, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
  }
];

export function getDeliveryOption(deliveryOptionId) {
  for(let i=0; i < deliveryOptions.length; i++) {
    let option = deliveryOptions[i];
    if (option.id === deliveryOptionId) {
      return option;
    }
  }
  return deliveryOptions[0];
}