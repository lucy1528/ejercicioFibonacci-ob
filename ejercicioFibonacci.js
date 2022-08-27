
function fibonacci(num){
    let array = [1,1]    
    for (let i = 1; i < num-1; i++) {
        element = array[array.length-1]+array[array.length-2]
        array=[...array,element];                
    }
    return array
}

fibonacci(6)