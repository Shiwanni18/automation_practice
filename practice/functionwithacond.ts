function checkresult(marks:number):string{
    if(marks>=40){
        return 'pass';
    }else{
        return 'fail';
    }
}
console.log(checkresult(75));
console.log(checkresult(25));