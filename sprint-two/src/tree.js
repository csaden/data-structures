var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = null;

  newTree.children = [];

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	child.parent = this;
	this.children.push(child);
};

treeMethods.removeChild = function(value) {
	var i = _.indexOf(this.children, value);
	if (i > -1) {
		this.children.splice(i, 1);
	}
}; 

treeMethods.removeFromParent = function() {
	this.parent.removeChild(this.value);

	this.parent = null;

	_.each(this.children, function(child) {
		child.parent = null;
	});
};

treeMethods.contains = function(target){

	if(this.value && this.value === target) {
		return true;
	}
	var fil = _.filter(this.children, function(leaf){
		return leaf.contains(target);
	});
	if(fil.length > 0) {
		return true;
	} else {
		return false;
	}
	
	// var res = false;

	// var checkTree = function(tree) {
	// 	if(tree.value === target) {
	// 		res = true;
	// 	} else {
	// 		_.each(tree.children, function(child) {
	// 			if (child.value === target) {
	// 				res = true;
	// 			}
	// 			_.each(child.children, function(grandchild) {
	// 				//debugger;
	// 				checkTree(grandchild);
	// 				//console.log(grandchild.value);
	// 			});
	// 		});
	// 	}
	// }
	// checkTree(this);
	// return res;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */