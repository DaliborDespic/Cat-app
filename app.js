async function allCats() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();

  catList(data);
}

allCats();

function catList(data) {
  data.map((element) => {
    const catName = document.querySelector(".cat__name");
    const catList = document.createElement("a");

    catList.innerHTML = `${element.name}`;
    catName.append(catList);

    catList.addEventListener("click", () => {
      const catContent = document.querySelector(".cat__content");
      const cat = document.querySelector(".cat");

      cat.textContent = `${element.name}`;
      catContent.appendChild(cat);

      const catImg = document.querySelector(".cat__img");
      catImg.src = `${element.image.url}`;
      catContent.appendChild(catImg);

      const desctiption = document.querySelector(".desctiption");

      desctiption.textContent = `${element.description}`;
      catContent.appendChild(desctiption);

      const wikiLink = document.querySelector(".wiki__link");
      wikiLink.href = `${element.wikipedia_url}`;
      wikiLink.textContent = "Go to Wikipedia";

      catContent.classList.add("show");

      const closeContent = document.querySelector(".close__content");
      closeContent.addEventListener("click", () => {
        catContent.classList.remove("show");
      });
    });
  });
}

const hamburger = document.querySelector(".hamburger");
const catName = document.querySelector(".cat__name");
const dotHide = document.querySelectorAll(".dot-hide");

hamburger.addEventListener("click", () => {
  catName.classList.toggle("show");
  dotHide.forEach((dot) => {
    dot.classList.toggle("hide");
  });
});
