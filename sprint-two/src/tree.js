var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	this.children.push(child);
};

treeMethods.contains = function(target){
	
	var res = false;

	var checkTree = function(tree) {
		if(tree.value === target) {
			res = true;
		} else {
			_.each(tree.children, function(child) {
				if (child.value === target) {
					res = true;
				}
				_.each(child.children, function(grandchild) {
					//debugger;
					checkTree(grandchild);
					//console.log(grandchild.value);
				});
			});
		}
	}
	checkTree(this);
	return res;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */