const hasLoop = (head) => {
    let set = new Set()
    let current = head
    
    while(current){
        if(set.has(current)){
            return true
        }else{
            set.add(current)
        }
        
        current = current.next
    }
    return false
};
console.log(hasLoop([1,8,3,4]))