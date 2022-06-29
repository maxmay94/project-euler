/* 
  1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
const SumMult3or5 = (n) => {
  let sum = 0
  for(let i = 0; i < n; i++) {
    if(i % 3 === 0 || i % 5 === 0) sum += i
  }
  return sum
}
// console.log(SumMult3or5(1000))
// ANSWER: 233168



/*
  2. Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
      1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
const evenFibNums = () => {
  let num1 = 0, num2 = 1, next = 0, sum = 0
  function fib() {
    next = num1 + num2
    num1 = num2
    num2 = next
    next % 2 === 0 ? sum += next : sum += 0
  }
  while(next <= 4000000) fib()
  return sum
}
// console.log(evenFibNums())
// ANSWER: 4613732



/*
  3.The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/
const largestPrimeFactor = (num) => {
  let primes = findPrimes(12345)
  let primeFactors = []

  let i = 0
  let temp = num

  while(
    primeFactors.reduce(
      (prev, curr) => prev * curr, 1
    ) !== num) {
    if(temp % primes[i] === 0) {
      temp /= primes[i]
      primeFactors.push(primes[i])
    } else {
      i++
    } 
  }

  function findPrimes(n) {
    let primes = [2]
    for(let i = 3; i <= n; i++){
      if(((i / 2) % 2 !== 0)) {
        let check = true
        primes.forEach(prime => {
          if(i % prime === 0) check = false 
        })
        if(check) primes.push(i)
      }
    }
    return primes
  }

  return Math.max(...primeFactors)
}
// console.log(largestPrimeFactor((600851475143)))
// ANSWER: 6857



/*
  4. A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/
const largestPalindromeNumber = () => {
  let high = 0
  for(let i = 999; i > 800; i--) {
    for(let j = 999; j > 800; j--) {
      let temp = (i*j).toLocaleString().split('')
      if(temp[0] === temp[6] && temp[1] === temp[5] && temp[2] === temp[4]) {
        if((i * j) > high) high = i * j
      }
    }
  }
  return high
}
// console.log(largestPalindromeNumber())
// ANSWER: 906,609 from [993, 913]


/*
  5.2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
const smallestMultiple = () => {
  let done = false
  let i = 2520
  while(!done) {
    i++
    for(let j = 1; j <= 20; j++) {
      if(i % j !== 0) break 
      else if(j === 20) done = true
    }
  }
  return i
}
// console.log(smallestMultiple())
// ANSWER: 232792560


/*
  6. The sum of the squares of the first ten natural numbers is, 
      1^2 + 2^2 + ... + 10^2 = 385
  The square of the sum of the first ten natural numbers is,
      (1 + 2 + ... + 10)^2 = 55^2 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
      3025 - 385 = 2640
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
const sumSquareDifference = () => {
  let range = [...Array(101).keys()]
  range.shift()
  let sumSquare = 0
  range.forEach(num => sumSquare += num**2)
  let squareSum = (range.reduce((a,b) => a + b, 0))**2
  return squareSum - sumSquare
}
// console.log(sumSquareDifference())
// ANSWER: 25164150


/*
  7. By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?
*/
const lateStagePrime = () => {
  let primes = []
  for(let i = 0; primes.length <= 10001; i++) {
    if(isPrime(i)) primes.push(i)
  }
  return Math.max(...primes)
}
// console.log(lateStagePrime())
// ANSWER: 104743


/*
  8. The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/
const productOf13 = () => {
  let str = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

  let max = 0
  for(let i = 0; i < str.length - 13; i++) {
    if(str.substring(i, i + 13).split('').reduce((a,b) => a * b, 1) > max) max = temp
  }
  return max
}
// console.log(productOf13())
// ANSWER: 23514624000



/*
  9. A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
        a^2 + b^2 = c^2
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/
const pythagoreanTriplet = () => {
  let a, b, c
  for(let n = 0; n < 500; n++) {
    for(let m = 0; m < 500; m++) {
      a = m**2 - n**2
      b = (m*n)*2
      c = m**2 + n**2
      if(a**2 + b**2 === c**2) {
        if(a + b + c === 1000) {
          return a * b * c
        }
      }
    }
  }
}
// console.log(pythagoreanTriplet())
// ANSWER: 31875000



/*
  10. The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  Find the sum of all the primes below two million.
*/
const summationOfPrimes = () => {
  let sum = 0
  for(let i = 0; i < 2000000; i++) {
    if(isPrime(i)) sum += i
  }
  return sum
}
// console.log(summationOfPrimes())
// ANSWER: 142913828922



/*
  11. In the 20×20 grid below, four numbers along a diagonal line have been marked in *n*.

  08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
  49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
  81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
  52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
  22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
  24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
  32 98 81 28 64 23 67 10 *26* 38 40 67 59 54 70 66 18 38 64 70
  67 26 20 68 02 62 12 20 95 *63* 94 39 63 08 40 91 66 49 94 21
  24 55 58 05 66 73 99 26 97 17 *78* 78 96 83 14 88 34 89 63 72
  21 36 23 09 75 00 76 44 20 45 35 *14* 00 61 33 97 34 31 33 95
  78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
  16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
  86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
  19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
  04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
  88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
  04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
  20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
  20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
  01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48

  The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

  What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
  */
 const largestProductInGrid = () => {
  let max = 0
  let grid = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48".split(' ')

  grid.forEach((num, i) => {
    let upDown, side, diagonalRight, diagonalLeft

    if((i + 4) % 20 !== 0) side = (num * grid[i + 1] * grid[i + 2] * grid[i + 3])
    if(grid[i + 60]) upDown = (num * grid[i + 20] * grid[i + 40] * grid[i + 60])
    if((i + 4) % 21 !== 0 && grid[i + 63]) diagonalRight = (num * grid[i + 21] * grid[i + 42] * grid[i + 63])
    if((i + 4) % 19 !== 0 && grid[i + 57]) diagonalLeft = (num * grid[i + 19] * grid[i + 38] * grid[i + 57])

    if(side > max) max = side
    if(upDown > max) max = upDown
    if(diagonalRight > max) max = diagonalRight
    if(diagonalLeft > max) max = diagonalLeft
  })
  return max
}
// console.log(largestProductInGrid())
// ANSWER: 70600674



/*
  11. The sequence of triangle numbers is generated by adding the natural numbers. 
  So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
        1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
  Let us list the factors of the first seven triangle numbers:

        1: 1
        3: 1,3
        6: 1,2,3,6
        10: 1,2,5,10
        15: 1,3,5,15
        21: 1,3,7,21
        28: 1,2,4,7,14,28

  We can see that 28 is the first triangle number to have over five divisors.
  What is the value of the first triangle number to have over five hundred divisors?
*/
const divisibleTriangleNumber = () => {
  let triangleNums = [0]
  let done = false
  let i = 1

  while(!done) {
    let divisors = 0
    triangleNums.push(triangleNums[i - 1] + i)
    for(let j = 0; j < triangleNums[i]; j++) {
      if(triangleNums[i] % j === 0) divisors++
      if(divisors >= 500) return triangleNums[i]
      i++
    }
  }

  return triangleNums
}
// console.log(divisibleTriangleNumber())
// ANSWER: 76576500

// -----> COME BACK TO THIS FOR BETTER SOLUTION ---> x = a^m x b^n ///(a & b must be factors)///--->  No. of divisors = (m+1)(n+2)




/* ------------------------------------------ HELPER FUNCTIONS ------------------------------------------ */
function isPrime(n) {
  if(n === 1) return false
  let sqrtN = Math.floor(Math.sqrt(n))
  for(let i = 2; i <= sqrtN; i++){
    if(n % i === 0) return false
  }
  return true
}
