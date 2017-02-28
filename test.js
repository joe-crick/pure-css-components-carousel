var test = require('tape');
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var Carousel = require('./index.js');

function setUp(isLastActive) {
  const mock = new MockBrowser();
  document = mock.getDocument();
  document.body.innerHTML = `<ul class="carousel">
    <li class="carousel-item" id="one">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-one" ${!isLastActive ? 'checked' : ''}/>
        <label for="carousel-one" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="http://www.preussenchronik.de/bilder/1186_Klemens_Wenzel_Fuerst_von_Metternich.jpeg"
             alt=""/>
        <label for="carousel-two" class="carousel-label"></label>
    </li>
    <li class="carousel-item" id="two">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-two"/>
        <label for="carousel-one" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="https://s-media-cache-ak0.pinimg.com/originals/fc/d7/b6/fcd7b6242ad041739357da9a237058ef.jpg"
             alt=""/>
        <label for="carousel-three" class="carousel-label"></label>
    </li>
    <li class="carousel-item" id="three">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-three" ${isLastActive ? 'checked' : ''}/>
        <label for="carousel-two" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="http://adamworld.typepad.com/.a/6a012876b7eaf6970c0120a7bd78bf970b-pi" alt=""/>
        <label class="carousel-label carousel-last-nav"></label>
    </li>
</ul>`;
  return document;
}

function tearDown() {
  document = undefined;
}

test('Carousel ', nest => {

  nest.test('Navigates next when next is present and is linear', assert => {
    setUp(false);
    const carousel = Carousel('.carousel');

    assert.ok(carousel.currentNode.id === 'one');
    carousel.next();
    assert.ok(carousel.currentNode.id === 'two', 'carousel should navigate next');
    assert.end();
    tearDown();
  });

  nest.test('Does not navigate next when no next is present and is linear', assert => {
    setUp(true);
    const carousel = Carousel('.carousel');

    assert.ok(carousel.currentNode.id === 'three');
    carousel.next();
    assert.ok(carousel.currentNode.id === 'three', 'carousel should not navigate next');
    assert.end();
    tearDown();
  });

  nest.test('Navigates prev and is linear', assert => {
    setUp(true);
    const carousel = Carousel('.carousel');

    assert.ok(carousel.currentNode.id === 'three');
    carousel.prev();
    assert.ok(carousel.currentNode.id === 'two', 'carousel navigates prev');
    assert.end();
    tearDown();
  });

  nest.test('Does not Navigate prev when no prev is present and is linear', assert => {
    setUp(false);
    const carousel = Carousel('.carousel');

    assert.ok(carousel.currentNode.id === 'one');
    carousel.prev();
    assert.ok(carousel.currentNode.id === 'one', 'carousel should not navigate prev');
    assert.end();
    tearDown();
  });

});
