let products:string[]=['keyboard','mouse','monitor','mobile','speaker'];
let target:string='monitor';
let found:boolean=false;
for (let product of products){
    console.log('checking' + product);

    if(product===target){
        found=true;
        console.log('product found');
        break;
    }
}

if(found===false){
    console.log('product not found');
}