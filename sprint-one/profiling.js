/*var stackFunction = function(stackInstance){
	// pop
	// push
	// pop
	// size

};

var queueFunction = function(queueInstance){
	// push
	// dequeue
	// size
};*/

for(var i=0; i<2000000; i++) {
	var stack = Stack();
	stack.push('a');
	stack.pop();
	stack.size();
	stack.push('b');
	stack.pop();
	stack.size();
	stack.push('c');
	stack.pop();
	stack.size();
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.size();
	stack.size();
	stack.size();
	stack.size();
	stack.size();
	stack.size();
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.pop();
	stack.pop();
	stack.pop();
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.push('c');
	stack.pop();
	stack.pop();
	stack.pop();
	stack.pop();
	stack.size();
	stack.size();
	stack.size();
	stack.size();
	stack.size();
};

for(var i=0; i<2000000; i++){
	var queue = Queue();
	queue.enqueue('a');
	queue.dequeue();
	queue.size();
	queue.enqueue('b');
	queue.dequeue();
	queue.size();
	queue.enqueue('c');
	queue.dequeue();
	queue.size();
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.size();
	queue.size();
	queue.size();
	queue.size();
	queue.size();
	queue.size();
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.enqueue('c');
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	queue.size();
	queue.size();
	queue.size();
	queue.size();
	queue.size();
}

console.log('done');