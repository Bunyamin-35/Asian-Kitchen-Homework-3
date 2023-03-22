const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://images.pexels.com/photos/5116817/pexels-photo-5116817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
/******** BTNS PART START ********/
const btnDOM = document.querySelector(".btn-container")


const allbtn = document.createElement("button")
btnDOM.appendChild(allbtn)
allbtn.innerText = "All"
allbtn.classList.add("btn-item")

const koreabtn = document.createElement("button")
btnDOM.appendChild(koreabtn)
koreabtn.innerText = "Korea"
koreabtn.classList.add("btn-item")

const japanbtn = document.createElement("button")
btnDOM.appendChild(japanbtn)
japanbtn.innerText = "Japan"
japanbtn.classList.add("btn-item")

const chinabtn = document.createElement("button")
btnDOM.appendChild(chinabtn)
chinabtn.innerText = "China"
chinabtn.classList.add("btn-item")

/******** BTNS PART END ********/


/******** CONTENT PART START ********/

for (var index=0;index<menu.length;index++){
  const itemDOM = document.querySelector(".section-center")

  const singleItem = document.createElement("div")
  singleItem.className = ("col-sm-12 col-lg-6 menu-items")
  itemDOM.appendChild(singleItem)
  /** Image Item Start **/
  const imgItem = document.createElement("img")
  const urlItem = menu[index].img
  imgItem.setAttribute("src", urlItem)
  imgItem.classList.add("photo")
  singleItem.appendChild(imgItem)
  /** Image Item End   **/
  console.log(menu.length)
  /** Menu Start **/
  console.log(index)
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-info")
  const titleItem = document.createElement("div")
  titleItem.classList.add("menu-title")
  titleItem.innerHTML = `<h4>${menu[index].title}</h4><h4>${menu[index].price}</h4>`
  const textItem = document.createElement("div")
  textItem.classList.add("menu-text")
  const textContent = menu[index].desc
  textItem.innerText= textContent
  menuItem.appendChild(titleItem)
  menuItem.appendChild(textItem)
  singleItem.appendChild(menuItem)
}





/** Menu  End **/


/******** CONTENT PART END ********/
