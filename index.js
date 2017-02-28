'use strict';
/**
 * @desc Small utility for manipulating a Pure.CSS-Component carousel.
 * @param selector
 * @returns {{currentNode: Element, nextNode: *, previousNode: *, next: next, prev: prev, insertBefore: insertBefore, insertAfter: insertAfter, append: append, remove: remove}}
 */
module.exports = function Carousel(selector) {

  var doc = document;
  var carouselNode = doc.querySelector(selector);
  var carousel;
  var firstSelectedNode = null;

  // Not totally clean, but then we don't have to go through the list twice
  // Probably should refactor this
  carousel = Array.prototype.map.call(carouselNode.querySelectorAll('.carousel-item'), function (carouselItem, index) {
    if (getCarouselStatusElement(carouselItem).checked) {
      firstSelectedNode = index;
    }
    return carouselItem;
  });

  carousel.size = carousel.length -1;

  /**
   * @desc Gets the status element for a given carouselItem
   * @param carouselItem
   * @returns {Element}
   */
  function getCarouselStatusElement(carouselItem) {
    return carouselItem.querySelector('.carousel-nav');
  }

  /**
   * @desc Makes a node the currently selected node
   * @param carouselItem
   */
  function makeActiveNode(carouselItem) {
    getCarouselStatusElement(carouselItem).checked = true;
  }

  return {
    _currentNode: firstSelectedNode,

    get currentNode() {
      return carousel[this._currentNode];
    },

    /**
     * @desc Navigates the carousel to the next item
     */
    next: function next() {
      if (this._currentNode < carousel.size) {
        this._currentNode++;
        makeActiveNode(this.currentNode);
      }
    },
    /**
     * @desc Navigates the carousel to the previous item
     */
    prev: function prev() {
      if (this._currentNode > 0) {
        this._currentNode--;
        makeActiveNode(this.currentNode);
      }
    }
  };

};