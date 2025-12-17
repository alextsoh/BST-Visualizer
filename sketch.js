var tree;   

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  tree = new Tree();
  
  
}

// Helper function to display traversal text
function displayTraversalText(label, values, yPosition) {
  fill('white');
  textAlign(LEFT);
  text(label + ": " + values, 10, yPosition);
}

function add(){
  
  tree.addValue(this.int(document.getElementById("value").value));

  console.log(tree);

  tree.traversal();
  background(20);
  tree.traverse();
  tree.min();
    
  var traversal = tree.traversal();
  var inorder=traversal.a1,
      preorder=traversal.a2
      postorder=traversal.a3;
  
  displayTraversalText("inorder ", inorder, 30);
  displayTraversalText("preorder", preorder, 50);
  displayTraversalText("postorder", postorder, 70);
  
}

function search(){

  tree.searchN(document.getElementById("Search").value);

}

