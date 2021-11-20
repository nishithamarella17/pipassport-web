//1: Reverse a String
console.log("1: Reverse a String")
reverse = () => {
    let str = "hello"
    console.log(str.split("").reverse().join(""))
}
reverse()

//2: Factorialize
console.log("2: Factorialize")
factorial = (num) => {
 fac = (n) => {
  if(n > 1){
    return n * fac(n-1)
  } else {
    return 1
  }
 }
 return num * fac(num-1)
}
console.log(factorial(5))

//3: Palindrome Check 
console.log("3: Palindrome Check ")
palindrome = (str) => {
 console.log(str)
 let string = str.toLowerCase().split(" ").join("")
 console.log(string)
 //let string = str.toLowerCase().replace(/ /g, "")
 let str1 = string.split("").reverse().join("")
 console.log(str1)
 if(string !== str1){
     return false
 } 
 return true
}

console.log(palindrome("St Rr ts"))

//4: Find Longest Word 
longestWord = (str) => {
 let str1 = str.split(" ")
 let max = 0
 let str2 = ""
 for(let char of str1){
   if(max < char.length){
       max = char.length
       str2 = char
   }
 }
 console.log(str2, max)
}

longestWord("this is reruee nishi yyyyyy")

//5: Titlecase 
titleCase = (str) => {
  let str1 = str.split(" ")
  for(let i=0; i< str1.length; i++){
    console.log(str1)
    str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1)
    console.log(str1[i])
  }
  console.log(str1.join(" "))
}

titleCase("im having pan")

//6: Largest Numbers in Arrays
largestNo = (arr) => {
 let arr1 = []
 for(i=0; i<arr.length; i++){
   let arr2 = arr[i].sort((a,b) => {
     return b - a
   } )
   arr1.push(arr2[0])
   console.log(arr2, arr1)
 }
 console.log(arr1)
}

largestNo([[1,2,3,4],[5,6,7,8],[9,10, 11, 12]])

//7: Confirm the Ending
strEnding = (str, n) => {
  let len = str.length-1
  console.log(str.endsWith(n))
  console.log(str.slice(-n.length) === n)
  let str1 = ""
  for(let i = 0; i<n.length; i++){
    str1 = str1.concat(str[len])
    len -= 1;
  }
  console.log(str1, str1.split("").reverse().join("") === n)
}

strEnding("hi hello", 'lo')

//8: Repeat String Num Times

repeatStr = (str, n) => {
  let str1 = ""
  for(let i=0; i<n; i++){
    str1 = str1.concat(str)
  } 
  console.log(str1)
  console.log(str.repeat(n))
}

repeatStr('abc', 3)

//9: Truncate a String
truncate = (str, n) => {
 if(str.length <= n){
   return str
 } else if(n<4){
   return str.substring(0, n)
 } else {
   return str.substring(0,n-3) + '...'
 }
}

console.log(truncate("hit hello", 5))

//10: Chunky Monkey
chunkyMonkey = (arr , n) => {
 let arr1 = []
 let i=0;
 let j=0
 for(let k=0; k<arr.length/n; k++){
   i=j
   j=n+j
   console.log(i,j)
   let x= arr.slice(i,j)
   console.log(x)
   arr1.push(x)
   
 }
 console.log(arr1)
}

chunkyMonkey([1,2,3,4,5,6,7,8,9], 3)

function chunksarray(arr, num){
  var groups= [];
  while(arr.length> 0){
    //groups.push(arr.slice(0,num))
    //arr = arr.slice(num)
    groups.push(arr.splice(0,num))
  }
  return groups;
}
console.log(chunksarray(['a','b','c','d', 'e'], 2))

//11: Slasher 
slasher = (arr, n) => {
//  for(let i=0; i<n; i++){
//    arr.shift()
//  } 
 arr = arr.slice(2)
 console.log(arr)
}

slasher([1,2,3,4,5],2)

//12: Mutations
mutations = (str, str1) => {
  str = str.toLowerCase()
  str1 = str1.toLowerCase().split('')
  for(let i=0; i<str1.length; i++){
    if(!str.includes(str1[i])){
      return false
    }
  }
  return true
}
console.log(mutations('Hello', 'hel'))

//13: Falsy Bouncer
console.log('13: Falsy Bouncer')
falsyBouncer = (arr) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || typeof(arr[i]) === NaN){
      console.log(arr[i])
    }
  }
}

falsyBouncer([1,2,false, null , 3, 4, 0, "str"])

//14: Seek and Destroy
console.log("14: Seek and Destroy")
seekDestroy = (...arr) => {
  //const ages = [32, 33, 16, 40];
  console.log(arr)
  const arr1 = arr[0]
  console.log(arr1)
  const arr2 = arr.slice(1)
  console.log(arr2)
  console.log(arr1.filter(checkAdult))

  function checkAdult(age) { 
    return arr2.indexOf(age) === -1 ;
  }

}

console.log(seekDestroy([1,2,3,1,2,3],2,3))

console.log(3%'str')

//15: Where do I belong
console.log("15: Where do I belong")
iBelong = (arr, num) => {
  const sortArr = arr.sort((a,b) => {
    return a-b
  }) 
  console.log(sortArr)
  console.log(sortArr.indexOf(60))
  let i 
  for(i=0; i<arr.length; i++){
    if(num < sortArr[i]){
      break;
    }
  }
  console.log(i)
  const arr1 = sortArr.splice(2)
  console.log(arr1)
  arr.push(num)
  console.log(sortArr)
  console.log(sortArr.concat(arr1))
}
iBelong([60,10,20,30,40,50], 25)

const str = 'nisi hi'
console.log(str.indexOf(" "))

//18: DiffArray
console.log('18: DiffArray')
diffArray = (arr1, arr2) => {
  let result = []
  console.log(arr2.filter((arr) => {
    if(arr1.indexOf(arr) === -1)
    return result.push(arr)
  }))
  console.log(arr1.filter((arr) => {
    if(arr2.indexOf(arr) === -1)
    return result.push(arr)
  }))
}
diffArray([1,2,3,4,7],[1,2,3,8,4,5,6])

//19: Roman Numeral Converter
romanNumeralConverter = (num) => {
  romanNum = {
    L: 50,
    XL:40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  result = ''
  while(num > 0){
    //console.log(num)
    for(let x in romanNum){
      //console.log(x)
      if(romanNum[x] <= num){
        result += x
        num -= romanNum[x]
      }
      
    }
  }
console.log(result)
}

romanNumeralConverter(40)

//Prime Number
primeNumber = () => {
  let arr =[]
 
  for(let i=2; i<21; i++){
    let x = true
      for(let j=2; j<i; j++){
        if(i%j === 0){
         // console.log(i)
          x = false
          break;
        }
      }
    if(x=== true){
      arr.push(i)
    }
  }
  console.log(arr)
}
console.log(primeNumber())

//Prime no or not
checkPrime = (num) => {
  if(num<2){
    return false
  } else {
    for(let i=2; i<num; i++){
      if(num%2 === 0){
        return false
      }
    }
  }
  return true
}
console.log(checkPrime(1))

//string contain vowels
console.log('string contain vowels')
checkVowels = (str) => {
  let arr = ['a', 'e', 'i', 'o', 'u']
  for(let char of str){
    if(arr.includes(char) === true){
     console.log(arr.indexOf(char))
     return false
    }
  }
  return true
}
console.log(checkVowels('nnnnso'))

//Max string in an array
maxStringCount = () => {
  let arr = ['bbb', 'aaa', 'ccc', 'aaa','ccc', 'aaa']
  let obj = {}
  for(let char of arr){
    (!obj[char]) ? obj[char]=1 : obj[char]++
  }
  console.log(Object.keys(obj).length)
  let arr1 = []
  for(let x in obj){
    arr1.push([x, obj[x]])
  }
  console.log(arr1)
  let obj1 = arr1.sort((a,b) => {
    return a[1]-b[1]
  })
  console.log(obj1)
}
maxStringCount()

//Remove duplicate value in array
removeDuplicate = (arr) => {
 console.log([...new Set(arr)])
 let arr1 = []
 for(let i of arr){
   if(arr1.includes(i) !== true){
     arr1.push(i)
   }
 }
 console.log(arr1)
}

removeDuplicate([1,2,2,3,'3',undefined,null])

console.log(5<6<7)
console.log(7>6>5)


function myFunction() {
  var x = {
    a: 1,
    b: 2
  };
  function fun() {
   console.log(Array.isArray(x))
  }
  fun()
}

myFunction()

/* https://www.youtube.com/watch?v=-hBJz2PPIVE */