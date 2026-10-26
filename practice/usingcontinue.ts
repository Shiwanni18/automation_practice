let products:string[]=['mouse','keyboard','monitor','speaker','headphones'];
for(let product of products){
    if(product==='mouse'){
        continue;
    }
    console.log(product);
}