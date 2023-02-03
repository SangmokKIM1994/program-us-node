function solution(N, arr1){
    // 2차원 배열 생성
    let answer = Array.from(Array(N), () => new Array(N)); // [[], [], [], ...]
    
    // 주어진 배열을 돌면서 각 원소를 확인
    for (let i = 0; i < arr1.length; i++) { // 행 길이 반복
    let row = [];
    for (let j = 0; j < arr1[0].length; j++) { // 열 길이 반복
    if (arr1[i][j] !== '.') { // 지뢰 있는 경우
    answer[i][j] = '*';
    } else {
    let count = countMines(arr1, i, j);
    // console.log(`>> 지뢰 총 개수: ${count}`);
    if (count >= 10) { // 지뢰가 10개 이상인 경우
    count = 'M';
    }
    answer[i][j] = count;
    }
    }
    }
    
    // 주변 지뢰 개수 세는 함수
    function countMines(arr, row, col) {
    let count = 0;
    // console.log(`현재 기준: (${row}, ${col})`);
    for (let i = row-1; i <= row+1; i++) {
    for (let j = col-1; j <=col+1; j++) {
    // 0 <= i <= arr.length, 0 <= j <= arr[0].length
    if (i >= 0 && i < arr.length && j >= 0 && j < arr[0].length) { // 제한된 범위를 넘어가지않도록 지정
    // console.log(`탐색 위치: (${i}, ${j}) ${arr[i][j]}`);
    if (arr[i][j] !== '.') count += parseInt(arr[i][j]);
    }
    }
    }
    return count;
    }
    
    return answer;
    }
    let N = 5;
    let arr1=[
    ['1', '.', '.', '.', '.'],
    ['.', '.', '3', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '4', '.', '.', '.'],
    ['.', '.', '.', '9', '.']
    ];
    console.log(solution(N, arr1));
    // [[*, 4, 3, 3, 0], [1, 4, *, 3, 0], [4, 7, 7, 3, 0], [4, *, M. 9, 9], [4, 4, M. *, 9]]
    
    /*
    [
    [*, 4, 3, 3, 0],
    [1, 4, *, 3, 0],
    [4, 7, 7, 3, 0],
    [4, *, M, 9, 9],
    [4, 4, M, *, 9]
    ];
    */
    
    
    // let N2 = 4;
    // let arr2=[
    // ['2', '.', '.', '.'],
    // ['.', '.', '9', '.'],
    // ['.', '3', '.', '2'],
    // ['.', '4', '.', '.']
    // ];
    // console.log(solution(N2, arr2));
    // [[*, M, 9, 9], [5, M, *, M], [7, *, M, *], [7, *, 9, 2]]
    /*
    [
    [*, M, 9, 9],
    [5, M, *, M],
    [7, *, M, *],
    [7, *, 9, 2]
    ]
    */