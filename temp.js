






/**
 * @desc Given a reference node, returns the carousel sibling of that node
 * @param currentNode
 * @param direction
 * @returns {*}
 */
function getSiblingNode(currentNode, direction) {
  var nextSibling = currentNode.parentNode[direction + 'ElementSibling'];
  var nextNode = null;
  if (nextSibling) {
    nextNode = nextSibling.querySelector('.carousel-nav');
  }
  return nextNode;
}




/**
 * @desc sets the context nodes (previous and next) when given a current node.
 */
function setContextNodes() {
  this.nextNode = getSiblingNode(this.currentNode, NEXT);
  this.previousNode = getSiblingNode(this.currentNode, PREV);
}

/**
 * @desc sets the correct linkage
 * @param baseNode
 */
function setSiblingNodeNavLinks(baseNode) {

}

/**
 * @desc Sets the current item to a valid neighbor, or to null
 */
function getValidCurrentItem() {
  var nextCurrentItem;
  var parentNode = this.currentNode.parentNode;
  var carouselNav = '.carousel-nav';

  if (parentNode.nextElementSibling) {
    nextCurrentItem = parentNode.nextElementSibling.querySelector(carouselNav);
  } else if (parentNode.previousElementSibling) {
    nextCurrentItem = parentNode.previousElementSibling.querySelector(carouselNav);
  } else {
    nextCurrentItem = null;
  }
  return nextCurrentItem;
}
