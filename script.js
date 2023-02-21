let add = document.getElementById("add");
let entry = document.getElementById("entry");
let hide = document.getElementById("hide");
let ul = document.getElementById("list");
let lis = document.getElementsByClassName("lis");
let list = Array.from(lis);
let cros = document.getElementsByClassName("fa-solid fa-xmark");
let up1 = document.getElementsByClassName("fa-solid fa-arrow-up");
let down1 = document.getElementsByClassName("fa-solid fa-arrow-down");
let items = document.getElementsByClassName("item");
let arr = Array.from(items);
let delAll = document.getElementById("del");
let cont = document.getElementById("container");
function cross() {
  Array.from(cros).forEach((btn, id) => {
    btn.addEventListener("click", () => {
      //  for index
      // removes 1 element at index id
      list[id].remove();
      // remove se html se remove hoga
      //pop se array se remove hoga
      // parentNode bhi use kar sakte hain
    })
  })
  // not removing new items added
  // not moving up/down -  new items in below code
  // array was not working like it was working in calculator
}
function up() {
  Array.from(up1).forEach((upArrow, id) => {
    upArrow.addEventListener("click", () => {
      console.log(up1);
      console.log(id);
      // agar function aur onclick use nhi hota to new elements par click nhi leta
      if (id !== 0) {
        arr = Array.from(document.getElementsByClassName("item"))
        temp = arr[id - 1].textContent;
        console.log(arr[id - 1].textContent);
        arr[id - 1].textContent = arr[id].textContent;
        // arr me naya text content add karna hoga kyunki array update karna hai
        arr[id].textContent = temp;
      }
    });
  });
}
function down() {
  Array.from(down1).forEach((downArrow, id) => {
    downArrow.addEventListener("click", () => {
      arr = Array.from(document.getElementsByClassName("item")) //takes array from updated document
      console.log(arr)
      if (id !== Array.from(down1).length - 1) {
        console.log(id)
        temp = arr[id].textContent;
        arr[id].textContent = arr[id + 1].textContent;
        arr[id + 1].textContent = temp;
      }
    });
  });
}
hide.addEventListener("click", () => {
  if (ul.style.display === "block") {
    ul.style.display = "none";
    hide.textContent = "Show List";
  } else {
    ul.style.display = "block";
    hide.textContent = "Hide List";
  }
});
function item() {
  if (entry.value !== "") {
    let li2 = document.createElement("li");
    li2.classList.add("lis");
    let textli = document.createTextNode(entry.value);
    let span2 = document.createElement("span");
    span2.classList.add("item");
    span2.appendChild(textli);
    let icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-arrow-up");
    icon1.setAttribute("onclick", "up()");
    let icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-arrow-down");
    icon2.setAttribute("onclick", "down()");
    let span = document.createElement("span");
    span.classList.add("right");
    let icon3 = document.createElement("i");
    icon3.classList.add("fa-solid", "fa-xmark");
    icon3.setAttribute("onclick", "cross()");
    span.appendChild(icon3);
    li2.append(span2, icon1, icon2, span);
    ul.appendChild(li2);
    // <i  id = "left" class="fa-solid fa-arrow-up"></i>
    //         <i id = "center" class="fa-solid fa-arrow-down"></i>
    //         <span class= "right"><i class="fa-solid fa-xmark"></i></span>
    entry.value = "";
    remove = document.getElementById("lis");
    arr.push(span2);
    console.log(list);
    list.push(li2);
    console.log(list);
  }
}
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") item();
});

add.addEventListener("click", () => {
  item();
});
delAll.addEventListener("click", () => {
  if (arr.length !== 0) {
    console.log(arr.length);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let li = arr[i].parentNode;
      ul.removeChild(li);
    }
    arr.length = 0;
  }
});
