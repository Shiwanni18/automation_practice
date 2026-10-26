let products:string[]=['mouse','keyboard','headphones','monitor','speaker'];
for(let product of products){
    if(product.includes('o')&&product!=='mouse'){
        console.log(product);
    }
}
for(let product of products){
    if(product==='mouse'||product==='headphones'){
        console.log(product);
    }
}