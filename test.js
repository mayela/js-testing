const assert = require('assert')
const calc = require('./calc')
const multiply = calc.multiply

describe("result", function(){
  it("should test multiplication", function(){
    var expected = 15;
    var actual = multiply(3, 5);
    assert.equal(actual, expected);
  });
});
