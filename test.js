const assert = require('assert')
const calc = require('./calc')

describe("Sum", function(){
  it("should test sum 3 + 5", function(){
    var expected = 8;
    var actual = calc.sum(3, 5);
    assert.equal(actual, expected);
  });

  it("should test sum 5 + 3", function(){
    var expected = 8;
    var actual = calc.sum(5, 3);
    assert.equal(actual, expected);
  });

  it("should test sum -2 + 3", function(){
    var expected = 1;
    var actual = calc.sum(-2, 3);
    assert.equal(actual, expected);
  });
});

describe("Substration", function(){
  it("should test substraction 3 - 5", function(){
    var expected = -2;
    var actual = calc.substraction(3, 5);
    assert.equal(actual, expected);
  });

  it("should test substraction 5 - 3", function(){
    var expected = 2;
    var actual = calc.substraction(5, 3);
    assert.equal(actual, expected);
  });

  it("should test substraction -2 - 3", function(){
    var expected = -5;
    var actual = calc.substraction(-2, 3);
    assert.equal(actual, expected);
  });
});

describe("Multiplication", function(){
  it("should test multiplication 3 * 5", function(){
    var expected = 15;
    var actual = calc.multiply(3, 5);
    assert.equal(actual, expected);
  });

  it("should test multiplication 5 * 3", function(){
    var expected = 15;
    var actual = calc.multiply(5, 3);
    assert.equal(actual, expected);
  });

  it("should test multiplication -2 * 3", function(){
    var expected = -6;
    var actual = calc.multiply(-2, 3);
    assert.equal(actual, expected);
  });
});

describe("Division", function(){
  it("should test division 3 / 5", function(){
    var expected = 0.6;
    var actual = calc.division(3, 5).toFixed(4);
    assert.equal(actual, expected);
  });

  it("should test division 5 / 3", function(){
    var expected = 1.6667;
    var actual = calc.division(5, 3).toFixed(4);
    assert.equal(actual, expected);
  });

  it("should test division -2 / 3", function(){
    var expected = -0.6667;
    var actual = calc.division(-2, 3).toFixed(4);
    assert.equal(actual, expected);
  });
});
