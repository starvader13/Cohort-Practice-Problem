// Calculate the time it takes between a setTimeout call and the inner function actually running

function calculate_time(){
    let timeoutStart = performance.now();
    const timeoutId = setTimeout( () => {
        let innerFunctionTime = performance.now();
        const time = innerFunctionTime - timeoutStart
        console.log(`It taked ${time} to reach the control in setTimeout and print the result.`)
    })
}

calculate_time()