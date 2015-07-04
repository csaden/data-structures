var BinarySearchTree = function(value){
	this.value = value;
	this.left = undefined;
	this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
	var child = new BinarySearchTree(value);

	if (value < this.value) {
		if (this.left) {
			this.left.insert(value);
		} else {
			this.left = child;
		}
	} else if (value > this.value) {
		if (this.right) {
			this.right.insert(value);
		} else {
			this.right = child;
		}
	}
};

// BinarySearchTree.prototype.contains = function(value) {
// 	var res = false;

// 	var check = function(tree) {
// 		if (tree.value === value) {
// 			res = true;
// 		} else {
// 			if (tree.left) {
// 				check(tree.left);
// 			}
// 			if (tree.right) {
// 				check(tree.right);
// 			}
// 		}
// 	}
// 	check(this);
// 	return res;
// };

BinarySearchTree.prototype.contains = function(value) {
	//tree = tree || this;

	if(this.value === value){
		return true; 
	} else if (this.left || this.right){
		if(this.left && this.left.contains(value)){
			return true;
		}
		if(this.right && this.right.contains(value)){
			return true;
		}
	}
	return false;
};


BinarySearchTree.prototype.depthFirstLog = function(cb) {
	
	var arr = [];
	var runcb = function(tree) {
		arr.push(cb(tree.value));
		if (tree.left) {
			runcb(tree.left)
		}
		if (tree.right) {
			runcb(tree.right);
		}
	}
	runcb(this);

	return arr;


};
/*
 * Complexity: What is the time complexity of the above functions?
 */
