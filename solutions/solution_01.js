class Container {
    
    #trace = {}; 
    
    constructor (input) {
        if(input){
            this.#perform(input,"add");
        }
    } 

    add (input) {
        return this.#perform(input,"add");
    } 

    remove (input) {
        return this.#perform(input,"remove");
    } 
    
    #perform (input,type) {
        let trace = this.#trace;
        let aInput = Array.isArray(input) ? input : [input];
        for (let val of aInput) {
            let data = this.#find(val);
            if(!data && type === "add") {
                trace[Object.keys(trace).length] = { data: val, delete: false };
            } else if(data) {
                data.delete = (type === "remove");
            }
        }
        return this.print();
    } 

    #find (data) {
        return Object.values(this.#trace).find(val => val.data === data);
    } 
    

    print () {
        let ret = [];
        for (let val of Object.values(this.#trace)) {
            if(!val.delete){
                ret.push(val.data);
            }
        }
        return ret;
    }
    
}


let box = new Container([5,4,3,2,1]);
console.log(box.print());
console.log(box.remove(3));
console.log(box.add([6,7]));
console.log(box.remove([1,6]));
console.log(box.add(8));
console.log(box.remove(4));
console.log(box.add(9));
console.log(box.add([4,1,6,3]));
 