function solution(s) {
    
    let decimal = [];
    let notdecimal = [];
    let arr = s.split(' ').sort((a, b) => a - b);
    
    
    for(let i = 0; i < arr.length; i ++){
        let isFalse = true;
    //이 반복문을 돌릴때 소수가 아닌수의 경우에는 j로 한번이라도 나누면 되지만
    //소수인 수를 찾으려면 j로 한번도 나눠지지 않아야 소수기 때문에 푸는 방식이 다르다
    for(let j = 2; j <= Math.sqrt(arr[i]); j++){
        if(arr[i] % j == 0){
        notdecimal.push(arr[i]);
        isFalse = false;
    }
    }
    if(isFalse == true) decimal.push(arr[i])
    }
    
    let min = Math.min(...notdecimal)
    let max = Math.max(...decimal)
    // console.log(notdecimal)
    // console.log(decimal)
    // console.log(min, max)
    
    return [min,max];
    }
    let s = "97 75 88 99 95 92 73"
    console.log(solution(s))