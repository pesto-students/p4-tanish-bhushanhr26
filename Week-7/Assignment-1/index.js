const reverseList = head => {
    let prev = null;
    let next = null;
    let current = head
    while (current !== null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}
console.log(reverseList(1->2->3->4->5->6))