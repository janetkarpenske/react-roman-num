import { counter } from '../src/js/closure.js';

describe ('Closure Tests', () => {

  // test('function takes input and return output', () => {
  //   expect(counter(1)).toEqual(4);
  // });

  test('function takes divider as argument', () => {
    const quarters = counter(.25);
    expect(quarters(1)).toEqual(4);
  });

})