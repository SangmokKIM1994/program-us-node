function solution(month, day){
	
    let today = new Date(2022,month-1,day);
    // console.log(today)
    today.setDate(today.getDate() + 98);
    console.log(today)
    let month1 = today.getMonth()+1
    let day1 = today.getDate()
    console.log(month1,day1)
    let result=month1+'월'+day1+'일'
	return result;
}
console.log(solution(1,18))