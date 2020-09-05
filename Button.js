class Button {
    constructor(){}

    display(){
       var  ResetButton=createButton("Add food!");
       ResetButton.position(700,80);
       ResetButton.mousePressed(()=>{
           foodstock.updateFood(food+1);
       })
    }
}