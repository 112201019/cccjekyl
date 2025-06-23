---
layout: default
title: Welcome to the Clean Campus Committee
permalink: /
---


## Welcome to the Clean Campus Committee (CCC)

The Clean Campus Committee (CCC) is dedicated to fostering a clean, sustainable, and vibrant environment at the Indian Institute of Technology. We believe that a pristine campus enhances the quality of life, promotes well-being, and inspires excellence.



### Our Vision
To cultivate a campus culture where cleanliness and environmental responsibility are integral to our daily lives, ensuring a healthy and inspiring atmosphere for all students, faculty, and staff.



### Key Focus Areas & Activities

Our efforts are organized across several key zones within the campus, each with specific activities aimed at maintaining and improving our surroundings.



Join us in making our campus a model of cleanliness and sustainability!

<div class="slideshow-container">
  {% for image in site.data.images %}
    <div class="mySlides fade">
      <img src="{{ image.src }}" alt="{{ image.alt }}" style="width:100%">
    </div>
  {% endfor %}

  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>
</div>

<br>


<style>
.slideshow-container {
  max-width: 900px;
  position: relative;
  margin: auto;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 12px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 3px;
  user-select: none;
  transition: 0.3s;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
.next {
  right: 0;
}
</style>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
}
</script>
