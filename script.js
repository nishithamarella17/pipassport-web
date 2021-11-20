let arr = ['bbb', 'aaa', 'ccc', 'aaa','ccc', 'aaa']

let obj1 = {}
for(let char of arr){
   (!obj1[char]) ? obj1[char] = 1 : obj1[char]++;
   //{obj1.hasOwnProperty(char) == false ? obj1[char]=1 : obj1[char]++}
   //console.log(res)
}
 
console.log(obj1)

// first largest
// let max = obj1[Object.keys(obj1)[0]]
// let maxValueProperty = ''
// console.log(Object.keys(obj1).length)
// for(let i=0; i< Object.keys(obj1).length; i++){
//     console.log(Object.keys(obj1)[i])
//     if(max< obj1[Object.keys(obj1)[i]]){
//       max = obj1[Object.keys(obj1)[i]]
//       maxValueProperty = Object.keys(obj1)[i]
//     }
// }
// console.log(maxValueProperty, max)

//second largest
let sorting = []
for(let i in obj1){
    sorting.push([i, obj1[i]])
}

sorting.sort(function(a,b){
   return a[1]-b[1];
})

console.log(sorting)
console.log(sorting[sorting.length-2])
let secondLarg = sorting[sorting.length-2]
console.log(`second lagest value is ${secondLarg[0]} value is ${secondLarg[1]}`)


let str = 'nishitha'
console.log(str.split("").reverse().join(''))
let str1= ' '
console.log(str1)
for(let i=str.length-1; i>=0; i--){
   str1 += str[i]
   console.log(str1)
}
console.log(str1)

// coercian
// TDZ
console.log("A" - 1);

//NaN

//fizzbuzz
let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function bussFun(test) {
   for(i=0; i<test.length; i++){
    if(test[i]%3 == 0 && test[i]%5 == 0){
      console.log(test[i])
      test[i] = 'fizzbuzz'
    } else if(test[i]%3 == 0){
       test[i] = 'fizz'
    } else if (test[i]%5 == 0){
       test[i] = 'buzz'
    } 
   }
 console.log(test)
}

bussFun(test)

//array chunks
// let test1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// chunks = (test, count) => {
//   console.log(test)
//   let smallChunks = []
//   console.log(smallChunks)
//   for(let i=smallChunks.length; i<count; i++){
//    smallChunks.push(test[i])
//    console.log('ttttttt')
//   } 
  
//   console.log(smallChunks)
//   test = test.slice(3, )
//   console.log(test)
//   if(test.length > count){
//    chunks(test)
//   }
//   console.log(test)
// }

// chunks(test1, 3)

//string has all unique characters

let uniStr = 'helo'
let unique = true
for(let i=0; i<uniStr.length; i++){
   for(let j=i+1; j<uniStr.length; j++){
      if(uniStr[i] === uniStr[j]){
         unique = false
         break;
        
         //break;
      }
      console.log('false',uniStr[i],uniStr[j])
   }
}
console.log(unique)

// two string permutations

let per = 'exampl'
let per1 = 'xamplee'
let val = true
if(per.length === per1.length){
   for(let i=0; i<per.length; i++){
      if(per1.includes(per[i]) == false){
         val = false
         break
      } else {
         console.log('true')
      }
   }
} else {
   val = false
   console.log('false')
}
console.log(val)

// urlify - replace " " with %20
let lify = "my name is nishi"
let lify1 = ' '
for(let i of lify) {
   if(i == " "){
     lify1 += '%20'
   } else {
      lify1 += i
   }
}
console.log(lify1)


//palindrome Permutation
palindrom = () => {
   let pp = "TPOaaPTO"
   let pp1 = {}
   let count = 0
   for(let i of pp) {
      (!pp1[i]) ? pp1[i]=1 : pp1[i]++
   }
   console.log(pp1)
   if((pp.length)%2 === 0){
      for(let i in pp1){
         if(pp1[i]%2 !== 0)
            return false;
         
         
      }
   } else {
      for(let i in pp1){
         if(pp1[i]%2 !== 0){
         count++
         }
         
      }
      if(count === 1){
         return true
      } 
   
   }
   return true;
   
}

console.log(palindrom())

//oneAway
console.log('prog-11')

objFun = (str) => {
  let obj = {}
   for(let i of str){
     (!obj[i])? obj[i]=1 : obj[i]++
   }
   return obj
}
oneAway = (str, str1) => {
  let count = 0;
  let str2 = objFun(str)
  let str3 = objFun(str1)
  console.log(str2)
  if(str.length === str1.length){
     for(let i in str2){
        if(str2[i] !== str3[i]){
           return false
        }
     }
  } else {
      for(let i in str2){
         if(str2[i] !== str3[i]){
            count++
         }
      }
      console.log(count)
      if(count>1){
         return false
      }
  }
  return true
}
console.log(oneAway('nishier', 'nishi'))

//String compression
console.log('pog-12')
compression = (str) => {
   let str1 = objFun(str)
   let com = ''
   for(let i in str1){
      com += i + str1[i]
      console.log(i+ str1[i])
   }
   return com
}

console.log(compression('aaabbcc'))

//Zero matrix 
console.log('pog-13')
matrix = (mat) => {
  for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
         if(mat[i][j] === 0) mat[i][j] = true
      }
  }

  for(let i=0; i<3; i++){
     for(let j=0; j<3; j++){
        if(mat[i][j] === true){
           console.log(mat[i][j])
           for(let k=0; k<3; k++){
              mat[i][k] = 0
           }
           for(let l=0; l<3; l++){
            console.log( mat[l][j])
            mat[l][j] = 0
           }
        }
     }
 }
  return mat
}

console.log(matrix([[1,2,0],[1,1,8],[2,2,9]]))

//reverse a string
console.log('pog-13')
let rev = 'hi, hello how are you'
console.log(rev.split("").reverse().join(''))

//check if an object is an array or not
var arrayList = [1 , 2, 3];
console.log(Array.isArray(arrayList))

// FizzBuzz Challenge
console.log('pog-14')
for(i=0; i<=15; i++){
   let f = i%3 == 0, b = i%5 ==0;
   console.log(f ? (b ? 'fizzbuzz': 'fizz') : (b ? 'buzz' : i ))
}

//Given two strings, return true if they are anagrams of one another
console.log('pog-15')
wordObj = (word) => {
   let obj = {}
   for(let char of word){
      (!obj[char])? obj[char]=1 : obj[char]++
   }
   return obj
}


equalString = (firstWord, secondWord) => {
   if(firstWord.length == secondWord.length){
      let firstWordObj = wordObj(firstWord)
      let secondWordObj = wordObj(secondWord)
      console.log(firstWordObj, secondWordObj)
      for(let x in firstWordObj){
         if(firstWordObj[x] !== secondWordObj[x]){
           // console.log('true')
            return false
         }
      }
     
   } else {
      return false
   }
  return true
}

console.log(equalString('mary', 'army'))

console.log('pog-15-2')

function equalString1(firstWord, secondWord){
  console.log(firstWord.split("").sort().join(""))
  let a = firstWord.split("").sort().join("")
  let b = secondWord.split("").sort().join("")
  console.log(a == b)
}

equalString1('mara', 'army')

// closure

function closure() {
   let a = 10;
   console.log(a)
   function inner() {
      let b = 20;
      console.log(a,b)
   }
   inner()
}

closure();

(function() {
   var a = b = 5;
 })();
 
 console.log(b);

 var output = (function(x) {
   let obj = { a:1, b:2, c:3} 
   delete obj[x];
   return obj;
 })('a');
 
 console.log(output);

//sort array
 const points = [40, 100, 1, 5, 25, 10];
 //points.sort((a, b) => a-b)
 sortArray = (points) => {
   var done = false;
   while(!done){
   done = true;
    for(let i =0; i<points.length; i++){
       if(points[i]> points[i+1]){
          done = false
          console.log(points[i], i)
          let tmp = points[i]
          points[i] = points[i+1]
          points[i+1] = tmp
       }
    }
   }
    console.log(points)
 }
sortArray(points)

// sort obj
sortObj = () => {
let list = {
   "you": 100, 
   "me": 75, 
   "foo": 116, 
   "bar": 15
 };

 let arrObj = []
 for(let x in list){
   arrObj.push([x, list[x]])
 }
 console.log(arrObj)
 console.log(arrObj.sort((a,b) => a[1]-b[1]))
}
sortObj()

console.log(xx)
var xx = 10;
console.log("3"%3)
