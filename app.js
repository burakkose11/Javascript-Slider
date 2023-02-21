var models = [
  {
    name: "Bmw",
    Image: "img/bmw.jpg",
    link: "https://www.bmw.com.tr/tr/index.html",
  },
  {
    name: "Honda",
    Image: "img/honda.jpg",
    link: "https://www.honda.com.tr/",
  },
  {
    name: "Skoda",
    Image: "img/skoda.jpg",
    link: "https://www.skoda.com.tr/",
  },
  {
    name: "Volvo",
    Image: "img/volvo.jpg",
    link: "https://www.volvocars.com/tr/",
  },
  {
    name: "Mazda",
    Image: "img/mazda.jpg",
    link: "https://www.mazda.com.tr/",
  },
];
let index = 0;
let slaytCount = models.length;

let settings = {
  duration: "2000",
  random: false,
};
let interval;
init(settings);

document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  let prev;

  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      {
        prev = index;
      }

      console.log(index);
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].Image);

  document.querySelector(".card-title").textContent = models[index].name;

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
