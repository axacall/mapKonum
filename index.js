let tiklanayerbilgisi = document.querySelector(".bigImg");
let bigImg = document.querySelector(".bigImg img");
let kapat = document.querySelector(".kapat");
var oneHome = document.querySelector(".oneHome");
var efect = document.querySelector(".efect");

var bilgiDizisi = [
    "İlyas_Akyıldız",
    "Samet_Akyıldız",
    "Osman_Akyıldız",
    "Musa_Akyıldız",
    "Osman_Akyıldız",
    "Süleyman_yıldız",
    "Ali_yıldız",
    "Mustafa_yıldız",
    "Uğur_Akyıldız",
    "Köy_Camii",
    "Köy_Camii_Lojman",
    "Uzaktaki_Muhtelif_Yerleşke",
    "Uzaktaki_Muhtelif_Yerleşke",
    "Yüksel_Kandemir",
];
var bilgiDizisiKonum = [
    ["669px", "793px"],
    ["700px", "793px"],
    ["684px", "996px"],
    ["685px", "1026px"],
    ["695px", "1135px"],
    ["705px", "1185px"],
    ["710px", "1280px"],
    ["615px", "970px"],
    ["650px", "970px"],
    ["925px", "823px"],
    ["925px", "735px"],
    ["500px", "1285px"],
    ["500px", "1550px"],
    ["915px", "895px"],
];
var baloncuk = document.querySelectorAll(".oneHome strong");
var gorseller = document.querySelector(".gorseller");
for (var b = 0; b < bilgiDizisi.length; b++) {
    const element = `
    <div class="efect" style="top:${bilgiDizisiKonum[b][0]};left:${bilgiDizisiKonum[b][1]}"></div>
    <div class="oneHome" id="mover${b}"  style="top:${bilgiDizisiKonum[b][0]};left:${bilgiDizisiKonum[b][1]}">
    <strong class="baloncuk">${bilgiDizisi[b]}</strong>
    </div>
     `
    gorseller.innerHTML += element;
    // tiklanayerbilgisi.innerHTML += daire;
}
var gorseller = document.querySelector(`.gorseller`);
imgEnBoy()
function imgEnBoy(e) {
    gorseller.style.width = bigImg.clientWidth + "px";
    gorseller.style.height = bigImg.clientHeight + "px";
}
var oneHome = document.querySelectorAll(`.gorseller .oneHome`);
oneHome.forEach((oneHomes, i) => {
    oneHomes.addEventListener("mouseover", function (e) {
        baloncuk.innerHTML = bilgiDizisi[i];
        e.target.firstElementChild.style.display = "block";
    })
    oneHomes.addEventListener("mouseout", function (e) {
        baloncuk.innerHTML = "";
        e.target.firstElementChild.style.display = "none";
    })
})
kapat.addEventListener("click", function () {
    kapat.style.display = "none";
    tiklanayerbilgisi.addEventListener("mousedown", function (e) {
        tiklanayerbilgisi.style.cursor = "default";

    })
    tiklanayerbilgisi.style.transform = "scale(1)"
    tiklanayerbilgisi.classList.add("zoomOut");

    if (tiklanayerbilgisi.classList.contains("zoomOut")) {
        tiklanayerbilgisi.style.margin = "0";
        tiklanayerbilgisi.style = "0";
        tiklanayerbilgisi.style.top = "0";
        tiklanayerbilgisi.style.left = "0";
        setTimeout(() => {

            tiklanayerbilgisi.classList.replace("zoomOut", "exitZoom");
            tiklanayerbilgisi.style.margin = "0";
            // tiklanayerbilgisi.style.marginTop = "0";
            tiklanayerbilgisi.style.top = "0";
            tiklanayerbilgisi.style.left = "0";

        }, 1000);
    }
})
tiklanayerbilgisi.addEventListener("click", function (e) {
    tiklanayerbilgisi.addEventListener("mousedown", function (e) {
        tiklanayerbilgisi.style.cursor = "grab";
        kapat.style.display = "block";
    })
    let solParcaX = e.clientX;
    let dikeyUstY = e.clientY;
    let mouseY = window.innerHeight / 2;
    let mouseX = window.innerWidth / 2;
    if (solParcaX <= mouseX) {
        tiklanayerbilgisi.style.transform = "scale(2)"
        // if (tiklanayerbilgisi.style.transform === "scale(2.5)") {
        //     tiklanayerbilgisi.style.margin = "0"
        //     tiklanayerbilgisi.style.marginTop = "0";
        //     tiklanayerbilgisi.style.top = "0";
        // }
        tiklanayerbilgisi.style.marginLeft = (mouseX - solParcaX) + "px"
        tiklanayerbilgisi.style.marginTop = (mouseY - dikeyUstY) + "px"
    }
    //------------------------------
    if (solParcaX >= mouseX) {
        tiklanayerbilgisi.style.transform = "scale(2)";
        tiklanayerbilgisi.style.margin = "0"
        tiklanayerbilgisi.style.marginBottom = "0";
        tiklanayerbilgisi.style.bottom = "0";
        if (tiklanayerbilgisi.style.transform === "scale(2)") {
            tiklanayerbilgisi.style.margin = "0"
            tiklanayerbilgisi.style.marginTop = "0";
            tiklanayerbilgisi.style.top = "0";
        }
        tiklanayerbilgisi.style.marginLeft = (mouseX - solParcaX) + "px"
        tiklanayerbilgisi.style.marginTop = (mouseY - dikeyUstY) + "px"
    }
})
// Drag end Drop
var element = document.querySelector(".bigImg");
var f = function () {
    function Draggable(element, dragStart, dragDrop) {
        this.element = element;
        this.dragStart = dragStart;
        this.dragDrop = dragDrop;
        var self = this;
        var move = function (event) {
            if (self.dragStart !== undefined) { self.dragStart(); }
            //don't bubble this event - mousedown
            event.stopPropagation();
            //prevent any default action
            event.preventDefault();
            var originalLeft = parseInt(window.getComputedStyle(this).left);
            var originalTop = parseInt(window.getComputedStyle(this).top);
            var mouseDownX = event.clientX;
            var mouseDownY = event.clientY;

            function dragMe(event) {
                self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
                self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
                event.stopPropagation();
            }
            function dropMe(event) {
                document.removeEventListener('mousemove', dragMe, true);
                document.removeEventListener('mouseup', dropMe, true);
                if (self.dragDrop !== undefined) { self.dragDrop(); }
                event.stopPropagation();
            }
            document.addEventListener('mouseup', dropMe, true);
            document.addEventListener('mousemove', dragMe, true);
        };
        this.element.addEventListener('mousedown', move, false);
    }
    var imageElement1 = document.querySelector('.bigImg');
    var dragObject1 = new Draggable(imageElement1);
};
window.addEventListener('click', f, false);