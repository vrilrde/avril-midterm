var image = document.getElementsByClassName("me-image");

new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
  scale: 2,
});

// This gets the img child elements of .gallery-grid-wrapper class
var galleryGridWrapper = document.getElementsByClassName("gallery-grid-wrapper");
var galleryGridWrapperImg = galleryGridWrapper[0].getElementsByTagName("img");

// This loops through the images and add the simpleParallax
for (var i = 0; i < galleryGridWrapperImg.length; i++) {
  new simpleParallax(galleryGridWrapperImg[i], {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
    scale: 1.2,
  });
}
