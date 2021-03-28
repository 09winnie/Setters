const kiosk={
    Fruit:"Apples",
    get getFruit(){
        return this.Fruit;
    },
set setFruit(newFruit){
    this.Fruits = newFruit;

}

};
console.log(kiosk.Fruit);
kiosk.newFruit="Strawberries"
console.log(kiosk.newFruit);