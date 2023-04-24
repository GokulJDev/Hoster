let movies = [
    {
      name: "moon knight",
      des:
        "Mild-mannered Steven Grant has dissociative identity disorder and shares a body with a mercenary.",
      image: "images/slider 2.png"
    },
    {
      name: "Ms. Marvel",
      des:
        "Kamala Khan, a Muslim American teen growing up in Jersey city, is a Superhero mega fan who discovers she has super powers.",
      image: "images/slider 1.png"
    },
    {
      name: "Kiss Sixth Sense",
      des:
        "Hong Ye-sool, an account executive at Zeu Ad, is making her way up at work. However, she has one secret: she can see the future when she kisses someone. ",
      image: "images/slider 3.png"
    },
    {
      name: "Encanto",
      des:
        "When Mirabel, the only ordinary member of the Madrigal family, discovers the magic surrounding their home is in danger, she may be her familys last hope.",
      image: "images/slider 4.png"
    },
    {
      name: "Doctor Strange in the Multiverse of Madness",
      des:
        "When the Multiverse is unlocked, Doctor must enlist help from old and new allies in order to confront a surprising adversary.",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 5)}% - ${
        30 * (sliders.length - 5)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  /// video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  