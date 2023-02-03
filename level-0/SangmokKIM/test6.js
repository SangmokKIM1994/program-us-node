function solution(N, arr1){
    
	let answer=[];
    let cut = arr1[0].join('')
    
    
    for(let i=0;i<N;i++){
        let fusion =[];
        for(let j=0;j<arr1[i].length;j++){
            if (1<=arr1[i][j] && arr1[i][j]<=9){
                fusion.push('*')
                fusion[j+1] = Number(arr1[i][j])
                fusion[j-1] = Number(arr1[i][j])
             } else if(arr1[i][j]=='.'){
                fusion.push(0)
            }

            if(fusion.length !== 5){
                fusion = fusion.slice(0,5)
            }
        }
        answer.push(fusion)
    }

    // for(let a=0;a<answer.length;a++){
    //     for(let b=0;b<answer[a].length;b++){
    //         if(answer[a][b]=='*'){
                
    //         }
    //     }
    // }

	return answer;
}
let N = 5;
let arr1=[  ['1', '.', '.', '.', '.'], 
			['.', '.', '3', '.', '.'], 
			['.', '.', '.', '.', '.'],
			['.', '4', '.', '.', '.'], 
			['.', '.', '.', '9', '.']]; 
console.log(solution(N, arr1))