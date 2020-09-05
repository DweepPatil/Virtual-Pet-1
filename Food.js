class Food{
    constructor(){}

    display(){

    }

     getFood(){
    var foodRef=  database.ref('Food');
     foodRef.on("value",function(data){
           food=data.val(); 
        })
    }

    updateFood(num){
        if(num>=0){
        database.ref('/').set({
            'Food':num
        })
    }else{
        database.ref('/').set({
            'Food':0
        })
    }
    }
       
}
