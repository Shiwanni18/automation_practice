let username:string='testingid';
let password:string='pass123';
if(username==='testingid'){
    console.log('valid username');
    if(password==='pass123'){
        console.log('valid password');
    }else{
        console.log('invalid password');
    }
}else{
    console.log('invalid username');
}