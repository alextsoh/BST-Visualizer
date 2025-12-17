function Node(val, x, y,seq) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.seq=seq;   
  }
  

  Node.prototype.search = function(val) {
    if (this.value == val) {
      fill('green')
      ellipse(this.x, this.y, 30, 30);
      textAlign(CENTER);
      fill('black');
      text(this.value, this.x, this.y);
      return this;
      
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }


  Node.prototype.FindMinNode = function(){
    if(this.left === null)
    return;  

    else{
        return this.left.FindMinNode(this.left);
    }   
}


var inorderArr=[];
var preorderArr=[];
var postorderArr=[];


Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
}

// Helper function to update traversal array by removing duplicates and adding value
function updateTraversalArray(arr, value) {
  if (arr.includes(value)) {
    arr.remove(value);
  }
  arr.push(value);
}

Node.prototype.Traversals = function(parent)
{
  
  updateTraversalArray(preorderArr, this.value);

  if (this.left != null) {
    this.left.Traversals(this);
  }

  updateTraversalArray(inorderArr, this.value);
  
  if (this.right != null) {
    this.right.Traversals(this);
  }

  updateTraversalArray(postorderArr, this.value);

return {arr1:inorderArr,
        arr2:preorderArr,
        arr3:postorderArr
       }
  }


Node.prototype.visit = function(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }
    console.log(this.value);
    noStroke();
    
    fill('white')
    ellipse(this.x, this.y, 30, 30);

    stroke('white')
    line(parent.x , parent.y , this.x, this.y);

    noStroke()

    textAlign(CENTER);
    fill('black');
    text(this.value, this.x, this.y);
    
    if (this.right != null) {
      this.right.visit(this);
    }
  }
 
  
  // Helper function to calculate child node position
  Node.prototype.setChildPosition = function(child, isLeft) {
    child.seq = this.seq + 1;
    var direction = isLeft ? -1 : 1;
    
    if (child.seq == 2) {
      child.x = this.x + direction * (250 - 20 * child.seq);
      child.y = this.y + 50 + 10 * child.seq;
    } else {
      child.x = this.x + direction * (150 - 20 * child.seq);
      child.y = this.y + 50 + 5 * child.seq;
    }
  }

  Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
        this.setChildPosition(this.left, true);
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
        this.setChildPosition(this.right, false);
      } else {
        this.right.addNode(n);
      }
    }
  }
