// // ASSESSMENT 3: Coding Practical Questions with Jest
// Immanuel Golf 2022

// const { defaults } = require("jest-config")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

// // describe("greeter", () => {
// //   it("returns a generic greeting", () => {
// //     expect(greeter()).toEqual("Hello, LEARN student!")
// //   })
// // })


// describe("fibonacci", () => {
//   it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//     expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//   })
// })

//  const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // 1st Attempt:
// //  TypeError: fibLength1 is not a function
// //  Suites: 1 failed, 1 total
// //  Tests:       1 failed, 1 total

// // 2nd Attempt:
// // ReferenceError: fib is not defined
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total

// // b) Create the function that makes the test pass.

  // function fibonacci () {
  //     this.looping = function() {
  //       var a = 0, b = 1, f = 1
  //       for(var i = 2; i <= navigator; i++) {
  //         f = a + b
  //         a = b
  //         b = f
  //       }
  //       return f
  //     };

    //   this.recursive = function(n) {
    //     if (n - 2) {
    //       return 1
    //     }else {
    //       return this.recursive(n - 1) + this.recursive(n -2)
    //     }
    //   };
    // }

//   const fibArr = [0, 1]

//   for (i = 0; i < fibArr.length; 1++) {
//     if (i > 1) {
//       const a = fibArr[(i -1)]
//       const b = fibArr[(i - 2)]
//       fibArr.push(a + b)
//     } else {
//       fibArr[i]
//     }
//   } 
//   return fibArr
//  }
//  console.log(fibonacci(10))

// There were several Fibonacci code snippets to select and run a Jest test with. I chose this example for several reasons. A class was created for the function. The keyword this and dot notation was use to to access the function class. Also show the differences in use cases of the for ...loop and recursion. Recursion is a function method that call on it self until it met condition or not needed. A for...loop is a control that wll execute a set of instructions until condition is true. AStill unable to create a successful test.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// describe("goya", () => {
//   it("returns an array of the values sorted from least to greatest.", () => {
//     expect(goya(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//   })
// })

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Psuedocode: Takes in an object
// Input: Object have key value pairs. Have to iterate over values.
// Output: Have to returns an array of the values sorted from least 
//         to greatest.

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// ReferenceError: goya is not defined

// 16 Nov: ReferenceError: sort is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Used several Object methods....not seeing 
// Object.values should return key values in numerical order
// Not spending my whole day stuck
// 

// const goya = () => {
//  return Object.values((value)).sort((a, b) => a[0].localeCompare(b[0]))
// }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// // describe("greeter", () => {
// //   it("returns a generic greeting", () => {
// //     expect(greeter()).toEqual("Hello, LEARN student!")
// //   })
// })
describe("aSum", () => {
  it("returns an array of the accumulating sum", () => {
    expect(aSum(accountTransactions1)).toEqual(100, 83, 60, 51)
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Test Suites: 1 failed, 1 total - 1st Att.
// Tests:       1 failed, 1 total

const aSum = (arr) => arr.forEach(sum => value => sum += value)(0) 

// 16 Nov - Spending to much time not getting answer
// Prompt: Create a function that takes in an array
// Input: [array]
// Output: Returns an array of the accumulating sum.
// Behavior: Test Suites: 1 failed, 1 total
//           Tests:       2 failed, 2 total
//          
// Technical: ● aSum › returns an array of the accumulating sum

//            expect(received).toEqual(expected) // deep equality

//            Expected: 100
//            Received: [[Function anonymous], [Function 
//                        anonymous],    //[Function anonymous], 
//                      [Function anonymous]]

//   153 | describe("aSum", () => {
//   154 |   it("returns an array of the accumulating sum", () => {
// > 155 |     expect(aSum(accountTransactions1)).toEqual(100, 83, 60, 
//                                                                   51)
// Technical:  ● aSum › returns an array of the accumulating sum
//
//     expect(received).toEqual(expected) // deep equality

//     Expected: 100
//     Received: [100, 83, 60, 51]

//       153 | describe("aSum", () => {
//       154 |   it("returns an array of the accumulating sum", () => {
//     > 155 |     expect(aSum(accountTransactions1)).toEqual(100, 83, 
//                                                            60, 51)
//           |                                        ^
//       156 |   })
//       157 | })
//       158 |
//
//       at Object.toEqual (code-challenges.test.js:155:40)

//      Test Suites: 1 failed, 1 total
//       Tests:       1 failed, 1 total
//  ● aSum › returns an array of the accumulating sum

//  TypeError: arr.map(...) is not a function

// 171 | // Tests:       1 failed, 1 total
// 172 |
// > 173 | const aSum = (arr) => arr.map(sum => value => sum += value)(0) 
//     |                                                            ^
// 174 |
// 175 |
// 176 | // 16 Nov - Spending to much time not getting answer

// at aSum (code-challenges.test.js:173:60)
// at Object.aSum (code-challenges.test.js:155:12)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// ● aSum › returns an array of the accumulating sum

// TypeError: arr.forEach(...) is not a function

// 171 | // Tests:       1 failed, 1 total
// 172 |
// > 173 | const aSum = (arr) => arr.forEach(sum => value => sum += value)(0) 
//     |                                                                ^
// 174 |
// 175 | // 16 Nov - Spending to much time not getting answer
// 176 | // Prompt: Create a function that takes in an array

// at aSum (code-challenges.test.js:173:64)
// at Object.aSum (code-challenges.test.js:155:12)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total

