function findTriplets(array) {
    let found = false;
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === 0)
                {
                    console.log(array[i], array[j], array[k]);
                    found = true;
                }
            }
        }
        if(found === false) {
            document.write(" not exist ");
        }
    }
}

array = [0, -1, 2, -3, 1];
findTriplets(array);