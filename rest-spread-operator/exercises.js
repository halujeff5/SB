//find min element of array

function findMin(nums) {
    const minimum = Math.min.apply(null, [...nums])
    console.log(minimum)
}

findMin([1,2,3,-1,7,10])

// combine 2 objects
function mergeObjects(obj1, obj2) {
    let newObj = Object.assign(obj1, obj2)
    console.log(newObj)
}

mergeObjects({a:1, b:2}, {c:3, d:4})

// incomplete
function doubleAndReturnArgs(arr) {
for (let ele in [...arr]){
    console.log(ele*2)
}
}

doubleAndReturnArgs([[1,2,3],4,4])

//remove random
removeRandom = (items) => {
    items.splice(Math.floor(Math.random() * items.length), 1)
    console.log(items)
    
}

removeRandom([1,2,3,4,5])

//extends
extend = (arr1, arr2) =>{
   let newArr = arr1.concat(arr2)
   console.log(newArr)
}
extend([1,2,3], [4,4,5])

// add key:value pair
addKeyVal = (obj,key,val) => {
    obj[key] = val
console.log(obj)
}

addKeyVal({"Jimmy": 93, "Jeffrey": 85}, "Peter", 98)

// remove object by key
removeKey = (obj, key) => {
delete obj[key]
console.log(obj)
}

removeKey({"Jimmy": 93, "Jeffrey": 85}, "Jeffrey")

// combining 2 objects
combine = (obj1, obj2) =>{
    let newObj = Object.assign(obj1, obj2)
    console.log(newObj)
}

combine({"Jimmy": 93, "Jeffrey": 85}, {"Peter": 98})

// return a new object with modifiec key and value

update = (obj, key, val) =>{
obj[key] = val
console.log(obj)
}


update({"Jimmy": 93, "Jeffrey": 85, "Peter": 98}, "Jeffrey", 89)