var Graph = function(){
	this.graph = {};
};

Graph.prototype.addNode = function(node){
	this.graph[node] = [];
};

Graph.prototype.contains = function(node){
	return this.graph.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
	// if the node that we just deleted has any edges, we need to remove that edge from the other node
	//console.dir(this.graph[node]);
	// console.log(this.graph[node]); :)
	var _this = this;
	_.each(this.graph[node], function(edge) {
		var i = _.indexOf(_this.graph[edge], node);
		_this.graph[edge].splice(i, 1);
	});	
	delete this.graph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return _.contains(this.graph[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
	if(this.contains(fromNode) && this.contains(toNode)) { 
		this.graph[fromNode].push(toNode);
		this.graph[toNode].push(fromNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var toNodeIndex = _.indexOf(this.graph[fromNode], toNode);
	var fromNodeIndex = _.indexOf(this.graph[toNode], fromNode);
	this.graph[fromNode].splice(toNodeIndex, 1);
	this.graph[toNode].splice(fromNodeIndex, 1);
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.graph, function(value, key, collection) {
		cb(key);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



