const selectionSort = (array) => { // ascending array
    const swap = (i,j) => {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
    
    let n = array.length;
    for(let i = 0; i < n; i++) {
        // finding the minimum index
        let minIndex = i;
        for(let j = i; j < n; j++) {
            if(array[j] < array[minIndex]){ // reverse condition for descending array
                minIndex = j
            }

        }
        swap(i, minIndex); // swapping the first element of the unsorted array with the minimum index
    }
    
    console.log(array)  // [4, 8, 10, 12, 13, 100]
    return array;
}

selectionSort([12,10,13,8,100, 4])


// Explanation
// run the loop for 0 to n-1
// find the minimum element in the array
// swap minimum element it with 0

// now array till 0th position, the array is sorted.. Continue the for loop for 1 to n-1
// find the minimum element in the array from 1 to n-1
// swap minimum element with 1

// now array till 1st position, the array is sorted.. Continue the for loop for 2 to n-1
// find the minimum element in the array from 2 to n-1
// swap minimum element with 2

// now array till 2nd position (i.e 0th, 1st and 2nd element of the array is sorted) the array is sorted.. continue the process till n-2
