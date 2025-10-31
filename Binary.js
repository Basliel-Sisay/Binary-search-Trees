class BST{
    constructor(val){
        this.data = val;
        this.right = null;
        this.left = null;
    }
}
class Tree{
    constructor(array){
        this.root = this.form(array);
    }
    form(array){
        array.sort();
        let store = [];
        for(let x =0;x<array.length; x++){
            if(array[x] === array[x-1]){
                continue;
            }
            else{
                store.push(array[x]);
            }
        }
    }
}