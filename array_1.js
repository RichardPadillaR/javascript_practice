// Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5);
}
let arr1 = [1,2,3,4,5,6]
let arr2 = [5,11,73,12,54]
shuffle(arr2);
console.log(arr2)

// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function building_levels(arr) {
        let new_arr = []
        let max_height = 0
        for (let i = 0; i < arr.length; i++) {
            const height = arr[i]
            if (height > max_height) {
                new_arr.push(height)
                max_height = height
            }
        }
    return new_arr
    }

const lvl_1 = building_levels([0,1,1,7,3]);
const lvl_2 = building_levels([0,4]);
console.log(lvl_1);
console.log(lvl_2);

// Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].


function adding_arrays (arr1, arr2) {
    new_arr = []
    for (let i = 0; i< arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            i = j
            if (i == arr1.length-1) {
                new_arr.push(arr2[j])
                continue
            }
            else if (j == arr2.length - 1) {
                new_arr.push(arr2[j])
                new_arr.push(arr1[arr1.length - 1])
            }
            else {
                new_arr.push(arr1[i])
                new_arr.push(arr2[j])
            }
        }
    }
    return new_arr
}

const arr_add1 = [4,15,100]
const arr_add2 = [10,20,30,40]
const added_arr = adding_arrays(arr_add1, arr_add2)

console.log(added_arr)