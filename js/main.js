// change color Navbar
document.addEventListener('scroll', () => {
    var nav  =document.querySelector('nav');
    if (window.scrollY > 780){
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled"); 
    }
})

// change profolio

var all_item = document.getElementById("all");
var brand_item = document.getElementById("brand");
var design_item = document.getElementById("design");
var graphic_item = document.getElementById("graphic");
var all_info = document.getElementById("all_info");
var brand_info = document.getElementById("brand_info");
var design_info = document.getElementById("design_info");
var graohic_info = document.getElementById("graphic_info");


function all_data(){
    all_item.style.display = "block";
    brand_item.style.display="none";
    design_item.style.display="none";
    graphic_item.style.display="none";
    all_info.classList.add("active");
    brand_info.classList.remove("active");
    design_info.classList.remove("active");
    graphic_info.classList.remove("active");



    
} 

function brand(){
    all_item.style.display = "none";
    brand_item.style.display="block";
    design_item.style.display="none";
    graphic_item.style.display="none";
    all_info.classList.remove("active");
    brand_info.classList.add("active");
    design_info.classList.remove("active");
    graphic_info.classList.remove("active");

}

function design(){
    all_item.style.display = "none";
    brand_item.style.display="none";
    design_item.style.display="block";
    graphic_item.style.display="none";
    all_info.classList.remove("active");
    brand_info.classList.remove("active");
    design_info.classList.add("active");
    graphic_info.classList.remove("active");
} 

function graphic(){
    all_item.style.display = "none";
    brand_item.style.display="none";
    design_item.style.display="none";
    graphic_item.style.display="block";
    all_info.classList.remove("active");
    brand_info.classList.remove("active");
    design_info.classList.remove("active");
    graphic_info.classList.add("active");

} 
// .................................
