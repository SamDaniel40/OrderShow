const foodItems=[
    {
        name:"Chicken Biriyani",
        image:"Images/Chicken-biriyani.jpg",
        desc:"gfrjtrgfgrhgtetdtyhtdhntsgeraeawfjliokjkhddfschgvaswraradfbsedaefdvzd"
    },
    {
        name:"Masala Dhosa",
        image:"Images/Dhosa.jpg",
        desc:"gfrjtrgfgrhgtetdtyhtdhntsgeraeawfjliokjkhddfschgvfjyjfyjsdfgsdvzddvcdv"
    },  
    {
        name:"Chicken Noodles",
        image:"Images/Chicken-noodles.jpg",
        desc:"gfrjtrgfgrhgtetdtyhtdhntsgeraeawfjliokjkhddfschgvyfujyfjazdadsfawrdffb"
    }
];

function boxIterate(main1) {
    foodItems.forEach((foodItem,index) => {
        const box = document.createElement("div");
        box.classList.add("box", `box${index +1}`);
        const pic = document.createElement("div");
        pic.className="pic";
        pic.innerHTML=
          `<img src="${foodItem.image}" alt="${foodItem.name}">`;
        const desc = document.createElement("div");
        desc.className="desc";
        desc.innerHTML=
          `<h3>${foodItem.name}</h3>
          ${foodItem.desc}`;
        box.appendChild(pic);
        box.appendChild(desc);
        main1.appendChild(box);
      });
}

function displayFoodItems() {
    const main = document.createElement("div");
    main.className="main";
    const main1 = document.createElement("div");
    main1.className="main1";
    const main2 = document.createElement("div");
    main2.className="main2";
    boxIterate(main1);
    main.appendChild(main1);
    main.appendChild(main2);
    document.body.appendChild(main);
  }

displayFoodItems();

const main=document.querySelector(".main");
const itemsAll=document.querySelector(".box");
const items=document.querySelectorAll(".box");
const main1=document.querySelector(".main1");
const main2=document.querySelector(".main2");

const output =(item) => {
    let img= item.querySelector(".pic img")
    return img.src;
}

const showImage = (item) => {
    main.style.display="flex";
    main1.style.width="50%";
    items.forEach(boxx => {
        boxx.style.cssText="width: 65%; height: 17%;";
    }); 
    main2.style.width="50%"; 
    main2.style.backgroundImage= "URL("+output(item)+")";
    main2.style.backgroundSize="cover";
    main2.style.backgroundPosition="center";
};

items.forEach(item => {
    item.addEventListener("click", () => {
        showImage(item);
    });
});