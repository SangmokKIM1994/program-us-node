function solution(s) {
    let cut = s.split('')
    console.log(cut)
    let count = 0;//1 2 0
    let plus = 0;//1 3 0

    for (let i=0;i<cut.length;i++){
        if(cut[i]=='O'){
            count +=1
            plus +=count
        } else if(cut[i]=='X'){
            count = 0
        }
    }
    return plus
}
let s = "OOXXOXXOOO"
console.log(solution(s))