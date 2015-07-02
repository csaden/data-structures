var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
      list.tail = node;
      list.head.next = list.tail;
    } else {
      var temp = list.tail;
      temp.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    if(list.head !== null) {
      var oldHead = list.head;
      list.head = list.head.next;
      //var oldHead;
      //list.head = oldHead = list.head.next;
    }
    return oldHead.value;
  };

  list.contains = function(target){
    // check head
    // if target is not list.head.value call list.head.next and check that
    var res = false;
    var checkNode = function(node) {
      if(node !== null && node.value === target){
        res=true;
      } else if(node !== null && node.next !== null){
        checkNode(node.next);
      }
    };

    checkNode(list.head);
    return res;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
