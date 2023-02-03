// function solution(s){
//     let num = 1000 - s
//     // console.log(num)
//     let a = parseInt(num/500) // 0 1
//     let b = parseInt((num-500*a)/100) // 4 3
//     let c = parseInt((num-500*a-100*b)/50) //1 0
//     let d = parseInt((num-500*a-100*b-50*c)/10)//0 4

//     return a+b+c+d

// }
// let s = 160
// console.log(solution(s))


///다른 풀이

function solution(num1){
	let answer= 1000-num1;
    // console.log(answer)
    let count = 0;

    for (;answer != 0;) { 
        if(answer>=500){
            count += parseInt(answer/500)
            answer -= parseInt(answer/500)*500
        } else if (answer>=100){
            count += parseInt(answer/100)
            answer -= parseInt(answer/100)*100
        } else if (answer>=50){
            count += parseInt(answer/50)
            answer -= parseInt(answer/50)*50
        } else if (answer>=10){
            count += parseInt(answer/10)
            answer -= parseInt(answer/10)*10
        }
        // console.log(count)
    }
	return count;
}
let num1 = 320;
console.log(solution(num1))