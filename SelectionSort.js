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
