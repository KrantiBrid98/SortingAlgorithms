
let bubbleSwap = (array) => {
    let n = array.length;
    
    const swap = (i,j) => {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
    
    for(let i = n-1; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            if(array[j + 1] < array[j])
                swap(j, j+1)
        }
    }

    console.log(array);
    return array;
}

bubbleSwap([1, 13, 3, 10, 100, 91])


// Run the loop from 0 to n-1. check the j and j+1 element.
// move the greatest number amongst j and j+1 to right position (i.e j+1 th).
// similarly keep doing this till the end. This puts the greatest number in the array to the last position

// now run the loop from 0 to n-2. check the j and j+1 element.
// move the greatest number amongst j and j+1 to right position (i.e j+1 th).
// similarly keep doing this till the end. This puts the second greatest number in the array to the second last position.

// now the last 2 elements are sorted... keep doing this till all the elements are sorted.

// This sorting technique is called bubble sort because the greatest numbers => bubbles to the top positions i.e last positions in the array.

// In this technique, sorting begining from the last position of the array because of bubbling.

// Reference https://youtu.be/HGk_ypEuS24
