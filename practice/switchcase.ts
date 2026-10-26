let role:string='tester';
switch(role){
    case 'admin':
        console.log('admin dashboard');
        break;
        case 'tester':
            console.log('testing dashboard');
            break;
            case 'guest':
                console.log('home page');
                break;
                default:
                    console.log('invalid login');
                    
}