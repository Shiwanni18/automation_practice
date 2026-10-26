function validusername(username:string):boolean{
    return username.length>=3;
}
console.log(validusername('sam'));
console.log(validusername('a'));