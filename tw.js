var name = document.getElementById("a");
var work = document.getElementById("b");
var workSub = document.getElementsByClassName("d");


function change() {
for (i = 0; i < workSub.length; i++) {
    let content = workSub[i];
    content.classList.toggle("active");
    if (content.style.display === "grid") {
        content.style.display = "none";
      } else {
        content.style.display = "grid";
      }
  }
};

work.addEventListener("click", change, false);

/*
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}
*/


/*
work[0].addEventListener("click", function() {
    workSub.classList.toggle("active");
    if (workSub.style.display === "grid") {
        workSub.style.display = "none";
    } else {
        workSub.style.display = "grid";

    }
  });
*/
  /*
collHD.addEventListener("click", function() {
    infoo.classList.toggle("active");
    if (infoo.style.display === "block") {
        infoo.style.display = "none";
    } else {
        infoo.style.display = "block";

    }
  });
*/