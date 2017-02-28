Pure CSS Components Carousel
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/pure-css-components-carousel.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/joe-crick/pure-css-components-carousel.svg?branch=master)](https://travis-ci.org/joe-crick/pure-css-components-carousel)
[![GitHub license](https://img.shields.io/github/license/Day8/re-frame.svg)](license.txt) 
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Current Version](https://img.shields.io/badge/version-0.0.1-green.svg)


A small JS utility for working with Pure.CSS Components Carousel. 

NOTE: This is an independent project, and is not directly associated with Pure CSS.

## Summary

[Pure.CSS Components](https://github.com/joe-crick/pure-css-components) is a library of CSS only components designed 
for use with the [Pure.CSS](https://purecss.io) framework. None of the components require any JavaScript in order to 
function. There may be times, however, when it can be useful to have JavaScript to manipulate a component. Therefore, 
I've created individual JS modules to complement the CSS only components. Don't need JS? Don't bother. Need a little 
JS? Use just what you need.

### Install from NPM

```js
yarn add purecss-components-carousel
```
or
```js
npm i purecss-components-carousel -S
```

## Example

An example HTML Carousel:

```html
<!-- #my-carousel is considered the base node for this carousel -->
<ul id="my-carousel" class="carousel">
    <li class="carousel-item">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-one" checked/>
        <label for="carousel-one" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="http://www.preussenchronik.de/bilder/1186_Klemens_Wenzel_Fuerst_von_Metternich.jpeg"
             alt=""/>
        <label for="carousel-two" class="carousel-label"></label>
    </li>
    <li class="carousel-item">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-two"/>
        <label for="carousel-one" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="https://s-media-cache-ak0.pinimg.com/originals/fc/d7/b6/fcd7b6242ad041739357da9a237058ef.jpg"
             alt=""/>
        <label for="carousel-three" class="carousel-label"></label>
    </li>
    <li class="carousel-item">
        <input class="carousel-nav pcssc-invisible" type="radio" name="carousel" id="carousel-three"/>
        <label for="carousel-two" class="carousel-label linear-carousel-label"></label>
        <img class="carousel-content"
             src="http://adamworld.typepad.com/.a/6a012876b7eaf6970c0120a7bd78bf970b-pi" alt=""/>
        <label class="carousel-label carousel-last-nav"></label>
    </li>
</ul>

```
This JS would work with the Carousel defined above (_more details to follow on API_): 

```js

import Carousel from 'purecss-components-carousel';

// Pass in a selector to the base node for the carousel you want to work with
const myCarousel = Carousel('#my-carousel');

// Nav next
myCarousel.next();

// Nav prev
myCarousel.prev();

```
