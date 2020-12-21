function inOrder(currentNode) {
	if (currentNode.left) {
		inOrder(currentNode.left);
	}
	console.log(currentNode.data);
	if (currentNode.right) {
		inOrder(currentNode.right);
	}
}
// start at the root
// if our newNode is less than rootNode we move to the left
//if currentNode to left exist we recursively call findOrAdd with params of currentN & newNode
//  if currentNode to the left does not exist we can insert newNode to left spot

// if newNode is greater than root move to the right
// if a currentNode exist the we recursive call findOrAdd with params of currentN & newNode
// if cN does not exist then we can insert the newNode to right spot
function findOrAdd(rootNode, newNode) {
	let currentNode = rootNode;

	if (newNode.data < rootNode.data) {
		currentNode = rootNode.left;
		if (currentNode) {
            findOrAdd(currentNode, newNode);
            return true
		} else {
			rootNode.left = newNode;
		}
	} else if (newNode.data > rootNode.data) {
		currentNode = rootNode.right;
		if (currentNode) {
            findOrAdd(currentNode, newNode);
            return true
		} else {
			rootNode.right = newNode;
		}
	}
}

function max(node){
	if(node.right){
		return max(node.right)
	}else{
		return node
	}
}

// we move to the left of the tree from the root.
// we keep moving left until there are no more node's left, then we return that last node when there is null children
function min(node){
 if(node.left ){
	return min(node.left)
 }else{
	 return node
 }
 
}