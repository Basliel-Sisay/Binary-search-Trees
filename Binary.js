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
        return this.tree(store);
    }
    tree(store){
        if(store.length ===0){
            return null;
        }
        let root = Math.floor(store.length /2);
        let node = new BST(store[root]);
        node.left = this.tree(store.slice(0, root));
        node.right = this.tree(store.slice(root + 1));
        return node;
    }
}
class Solution {
    constructor() {
        this.res = [];
    }    
    inorderTraversal(root) {
        this.res =[];
        if (root === null) {
            return this.res;
        }  
        this.inorderTraversal(root.left);
        this.res.push(root.data);
        this.inorderTraversal(root.right);
        return this.res;
    }
    preOrderTraversal(root){
        this.res =[];
        if(root === null){
            return this.res;
        }
        this.res.push(root.data);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right);
        return this.res;
    }
    postOrderTraversal(root){
        this.res =[];
        if(root === null){
            return this.res;
        }
        this.postOrderTraversal(root.left);
        this.postOrderTraversal(root.right);
        this.res.push(root.data);
        return this.res;
    }
}