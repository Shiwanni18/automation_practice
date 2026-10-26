let products:string[]=['mouse','keyboard','monitor','headphones','mobile'];
for(let product of products){
    if(product==='keyboard'){
        console.log('product found!');
        break;
    }
    console.log('checking: '+product);
}