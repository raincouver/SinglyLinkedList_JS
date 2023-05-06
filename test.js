const SinglyLinkedList = require('./main')

let myList = new SinglyLinkedList();
let arr = [3, 4, 5, 6, 7, 8, 9];

for(let i=0; i<arr.length; i++){
    myList.append_list(arr[i]);
}

myList.traverse();  // head->3->4->5->6->7->8->9

console.log(myList.find(6));  
// Node {
//   data: 6,
//   next: Node { data: 7, next: Node { data: 8, next: [Node] } }
// }

myList.insert(5, "insert");
myList.traverse(); // head->3->4->5->insert->6->7->8->9

myList.append_list("end");
myList.traverse(); // head->3->4->5->insert->6->7->8->9->end

myList.prepend_list("new head");
myList.traverse();  // new head->head->3->4->5->insert->6->7->8->9->end

myList.remove(5); // position 5 which is 6
myList.traverse(); // new head->head->3->4->5->6->7->8->9->end

myList.remove_end();
myList.traverse(); // new head->head->3->4->5->6->7->8->9

myList.remove_head();
myList.traverse();  // head->3->4->5->6->7->8->9

console.log(myList.findLast());  // Node {data: 9, next: null}

console.log(myList.advance(2,myList.find(6)));  
// Node { data: 8, next: Node { data: 9, next: null } }

console.log(myList.getLength());  // 7

myList.clear();
myList.traverse();  // head