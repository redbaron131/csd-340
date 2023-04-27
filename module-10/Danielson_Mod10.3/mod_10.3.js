function shakeAndChange(event, imageName, oldImage, newImage) {
  event.preventDefault();
  var imgElement = document.getElementsByName(imageName)[0];
  var currentImage = imgElement.src;
  var nextImage = currentImage.includes(newImage) ? oldImage : newImage;
  imgElement.classList.add("shake");
  imgElement.addEventListener('animationend', function() {
    imgElement.src = nextImage;
    imgElement.classList.remove("shake");
  }, {once: true});
}
