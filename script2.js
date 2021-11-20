//palindrome
palindrome = (str) => {
    console.log(str.split(" ").join(""))
    let str1 = str.split("").reverse().join('')
    if(str !== str1){
        return false
    }
    return true
}
console.log(palindrome('aaba'))

//Fibonacci Sequence
console.log('Fibonacci Sequence')
fibonacci = (n) => {
 let arr = [0,1]
 for(let i=2; i<n; i++){
     arr.push(arr[i-2]+arr[i-1])
 }
 console.log(arr)
}
fibonacci(10)

//Fizzbuzz
fizzbuzz = () => {
    for(i=1; i<16; i++){
      if(i%3==0 && i%5==0){
          console.log('fizzbuzz')
      } else if(i%3==0) {
          console.log('fizz')
      } else if(i%5==0){
          console.log('buzz')
      } else{
          console.log(i)
      }
    }
}
fizzbuzz()

//Capitalize Letters
capitalizeLetters = (str) => {
    // let arr = str.split(" ")
    // let arr1 = ''
    // for(let i of arr){
    //     //console.log(i[0].toUpperCase())
    //     arr1 += i[0].toUpperCase()+ i.slice(1)+' '
    //     console.log(arr1)
    // }
    // console.log(arr1)
    return str.toLowerCase().split(' ').map(word => 
        word[0].toUpperCase() + word.slice(1)).join(' ')

}
console.log(capitalizeLetters('hi hello hOw are you'))

//MaxCharacter
maxChar = (str) => {
  let obj = {}
  let arr = []
  for(let char of str){
      (!obj[char]) ? obj[char]=1 : obj[char]++
  }
  console.log(obj)
  for(let x in obj){
    arr.push([x, obj[x]])
  }
  arr.sort((a,b) => {
      return b[1]-a[1]
  })
  console.log(arr[0])
}
maxChar('javascript')

console.log("test"*3)

//find the maximum character
console.log('//find the maximum character')
maxChar = (str) => {
  let str1 = str.split(' ').join('').toLowerCase()
  console.log(str1)
  let obj = {}
  let arr = []
  for(let char of str1){
    (!obj[char] ? obj[char]=1: obj[char]++)
  }
  console.log(obj)
  for(let x in obj){
    arr.push([x, obj[x]])
  }
  console.log(arr)
  arr.sort((a,b) => {
      return b[1]-a[1]
  })
  console.log(`lagest value ${arr[0][0]} and ${arr[0][1]}`)
}
maxChar('hi my name is Nishitha')

//capitalize Letter
capitalizeLetters1 = (str) => {
  return str.toLowerCase().split(' ').map((word) => {
    return word[0].toUpperCase()+word.substr(1)
  }).join(' ')
}

console.log(capitalizeLetters1('i like to code'))

//forEach
Each = () => {
  let arr = [1,2,3]
  arr.forEach((value) => {
    console.log(value)
  })
}
Each()

//longest word
console.log('longest Word')
longestWord = (str) => {
 let arr = str.split(' ')
 let arr1 = []
 let longestWord = 0
 for(let x of arr){
   if(longestWord<x.length){
     longestWord = x.length
   }
 }
 arr.map((value) => {
   if(longestWord === value.length){
     arr1.push(value)
   }
 })
// console.log(arr1)
}

longestWord("aaa ssss jjjhhjjh jjjhhjje ddfdd ssdssd")

//Array chunking
console.log('array Chunking')
arrayChunking = (arr, num) => {
  let arr1 = []
  let i = 0
  while(i< arr.length){
    arr1.push(arr.slice(i, i+num))
   // console.log(arr1)
    i += num
  }
}
arrayChunking([1,2,3,4,5,6,7],2)

//Flatten Array
flattenArray = (arr) => {
   let arr1 = []
  // for(let i=0; i<arr.length; i++){
  //   for(let j=0; j<arr[i].length; j++){
  //     arr1.push(arr[i][j])
  //   }
  // }
  console.log([].concat(...arr))
  arr.map((val) => {
    val.forEach((x) => {
      arr1.push(x)
    })
  })
  console.log(arr1)
}

flattenArray([[1,2],[3,4],[5,6],[7,8]])

//chunked array 
console.log('chunked array 1')
chunkedArray1 = (arr, n) => {
   let chunk = []
   for(let value of arr){
     let lastArray = chunk[chunk.length-1]
     if(!lastArray || lastArray.length == n){
       chunk.push([value])
     } else {
       lastArray.push(value)
     }
   }
   console.log(chunk)
}
chunkedArray1([1,2,3,4,5,6,7],2)

console.log('chunked array 2')
chunkedArray2 = (arr, n) => {
  let chunk = []
  while(arr.length>0){
    let x = arr.slice(0,n)
    console.log(x)
    arr.splice(0, n)
    chunk.push(x)
    console.log(arr)
  }
  console.log(chunk)
}
chunkedArray2([1,2,3,4,5,6,7,8],3)

console.log('chunked array 3')
chunkedArray3 = (arr, n) => {
  let chunk = []
  let arrayList = [...arr]
  while(arrayList.length>0){
    chunk.push(arrayList.splice(0,n))
  }
  console.log(chunk)
}
chunkedArray3([1,2,3,4,5,6,7,8],2)

function chunkArray4(array, size) {
  let result = []
  for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      result.push(chunk)
  }
  return result
}

//sting has all unique characters
console.log('unique string characters')
uniqueStr = (str) => {
  let obj = {}
  for(let i of str){
    (!obj[i])? obj[i]=1: obj[i]++
  }
  console.log(Object.keys(obj).length)
  for(let j in obj){
    if(obj[j] > 1){
      return false
    } 
  }
  return true
}
console.log(uniqueStr('nishta'))

console.log('unique string1')
uniqueStr1 = (str) => {
  for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length; j++){
      if(str[i] === str[j]){
        return false
      }
    }
  }
  return true
}

console.log(uniqueStr1('nishitha'))

//check for permutations
permutaion = (str , str1) => {
  let x = str.split('').sort().join('')
  let y = str1.split('').sort().join('')
  console.log(x,y)
  if(x!==y){
    return false
  }
  return true
}
console.log(permutaion('nishith','ntishhia'))

//URLify algorithm
console.log('URLify algorithm')
urlify = (str) => {
  let arr = str.split('')
  console.log(arr)
  for(let i=0; i<arr.length; i++){
    if(arr[i] === ' '){
      arr[i] = '%20'
    }
  }
  console.log(arr.join(''))
}
urlify('my name is nishitha')

//palindrome Permutation
pp = (str) => {
  let str1 = str.split(' ').join('')
  let obj = {}
  console.log(str1)
  for(let i of str1){
    {obj.hasOwnProperty(i)== false ? obj[i]=1 : obj[i]++ }
  }
  console.log(obj)
  if((str1.length)% 2 !== 0){
    let count =0
    for(let i in obj){
      if(obj[i]%2 !==0){
        count++
      }
    }
    if(count>1){
      return false
    }
  }else{
    if(obj[i]%2 !==0){
      return false
    }
  }
  return true
}
console.log(pp('tactq coa'))

//splice an array
splice_ex = (arr) => {
 arr.splice(2,1, 12)
 console.log(arr)
}
splice_ex([1,2,3,4,5,5])

console.log('test')
let obj = {a:1,b:2,c:3, d:{g:1}}
//let obj1 = {...obj}
let obj1 = JSON.parse(JSON.stringify(obj))
obj1.d.f = 4
console.log(obj)
console.log(obj1)

console.log('test1')
let x;
let y=null
console.log(null != undefined)
null ? console.log("true") : console.log("false")
