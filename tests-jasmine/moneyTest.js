import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formats currency.', () => {
  it ('test case: converts cents into dollars.', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('works with 2000.4', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});