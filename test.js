QUnit.test("Sanity Check (testing the test framework)", function(assert) {
  assert.notStrictEqual(1, 2, "1 does not equal 2. As it should be!")
})

QUnit.test("Fizz Buzz", function(assert) {
  assert.strictEqual(
      fizzBuzz(3),
      "fizz",
      "Multiples of 3 return 'fizz'.")
  assert.strictEqual(
      fizzBuzz(5),
      "buzz",
      "Multiples of 5 return 'buzz'.")
  assert.strictEqual(
      fizzBuzz(15),
      "fizzbuzz",
      "Multiples of 3 and 5 return 'fizzbuzz'.")
  assert.strictEqual(
      fizzBuzz(11),
      11,
      "Otherwise, the given number is returned.")
})

QUnit.test("Reverse Word Order In A Sentence", function(assert) {
  assert.ok(reverseSentence("bob likes dogs") === "dogs like bob",
      "Three word sentence is reordered in reverse.")
})

QUnit.test("Duplicate Items In An Array", function(assert) {
  assert.deepEqual(
      duplicate([1,2,3,4,5]),
      [1,1,2,2,3,3,4,4,5,5],
      "Ordered array of numbers 1-5 is duplicated.")
})

QUnit.test("Implement String.prototype.split", function(assert) {
  assert.deepEqual(
      split("foo bar baz"),
      ["foo", "bar", "baz"],
      "Three word sentence is split into an array of three words.")
})

QUnit.test("Implement Array.prototype.join", function(assert) {
  assert.deepEqual(
      join(["foo", "bar", "baz"], " "),
      "foo bar baz",
      "Array of three words is joined into three word sentence.")
})
