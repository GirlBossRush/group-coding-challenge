QUnit.test("Sanity Check 1", function(assert) {
  assert.ok(1 < 2, "Passed!")
})

QUnit.test("Fizz Buzz", function(assert) {
  assert.ok(fizzBuzz(3) === "fizz", "Multiples of 3")
  assert.ok(fizzBuzz(5) === "buzz", "Multiples of 3")
  assert.ok(fizzBuzz(15) === "fizzbuzz", "Multiples of 3 and 5")
})

QUnit.test("Reverse Sentence", function(assert) {
  assert.ok(reverseSentence("bob likes dogs") === "dogs like bob", "Passed!")
})

QUnit.test("Duplicate", function(assert) {
  assert.deepEqual(duplicate([1,2,3,4,5]), [1,1,2,2,3,3,4,4,5,5], "Passed!")
})

QUnit.test("Implement String.prototype.split", function(assert) {
  assert.deepEqual(split("foo bar baz"), ["foo", "bar", "baz"], "Passed!")
})

QUnit.test("Implement Array.prototype.join", function(assert) {
  assert.deepEqual(join(["foo", "bar", "baz"], " "), "foo bar baz", "Passed!")
})
