const allCarousel = document.getElementsByClassName("carousel");
const showItemCarousel = (carousel, start, limit) => {
  let arrCarouselItem = Array.from(
    carousel.getElementsByClassName("carousel-item")
  );
  arrCarouselItem.forEach((val, index) => {
    var end = Number(start) + Number(limit);
    if (index >= start && index < end) {
      val.classList.remove("hide");
      setTimeout(function () {
        val.style.display = "block";
      }, 30);
    } else {
      val.classList.add("hide");
      setTimeout(function () {
        val.style.display = "none";
      }, 500);
    }
  });
};
const hideItemCarousel = (carousel, start, limit) => {
  let arrCarouselItem = Array.from(
    carousel.getElementsByClassName("carousel-item")
  );
  arrCarouselItem.forEach((val, index) => {
    var end = Number(start) + Number(limit);
    if (index >= start && index < end) val.style.display = "block";
    else val.style.display = "none";
  });
};
Array.from(allCarousel).forEach((item) => {
  console.log(item.className);
  var countCarouselShow = item.getAttribute("data-carousel-show") ?? 4;
  item.setAttribute("data-carousel-show", countCarouselShow);
  let start = 0;
  let count = item.getElementsByClassName("carousel-item").length;
  Array.from(item.getElementsByClassName("next")).forEach((val) =>
    val.addEventListener("click", () => {
      start += Number(countCarouselShow);
      if (start >= count) start -= Number(countCarouselShow);
      console.log("click");
      showItemCarousel(item, start, countCarouselShow);
    })
  );
  Array.from(item.getElementsByClassName("pre")).forEach((val) =>
    val.addEventListener("click", () => {
      start -= Number(countCarouselShow);
      if (start < 0) start = 0;
      console.log("click");
      showItemCarousel(item, start, countCarouselShow);
    })
  );
  hideItemCarousel(item, start, countCarouselShow);
});
