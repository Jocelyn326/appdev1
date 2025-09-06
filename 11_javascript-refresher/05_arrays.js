
let myfavorit_foods = [ 'Champorado' , 'Tocino' , 'Adobo' ];

myfavorit_foods.push( 'Tinola');
myfavorit_foods.shift();

for (let i = 0; i < myfavorit_foods.lenght; i++){
    console.log((myfavorit_foods[i]));
}

myfavorit_foods.map((myfavorit_foods) => {
    console.log("I like", myfavorit_foods);
});
