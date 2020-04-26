let obj = {
    name : "Gag",
    Hobbies : ["soccer","reading"],
    
    // iterator definition
    // simple functon as this is needed from object
    [Symbol.iterator] : function (){
        let Hobbies = this.Hobbies
        let index = 0 ;
        // next function
        return {
        next: ()=>{
            index+=1;
            // return an object
            return{
                done : index <= Hobbies.length ? false : true,
                value : Hobbies[index-1],
                _this: this.Hobbies  
            }

        }
        }
    }
}



