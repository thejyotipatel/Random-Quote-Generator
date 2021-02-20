const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const img = document.querySelector(".img");
const refresh = document.querySelector(".refresh");
let ran = Math.floor(Math.random() * 1643);

// set starting img and quotes
fetch("https://type.fit/api/quotes").then(function(respones){
        return respones.json();

    }).then((data) =>{
        quote.textContent = data[ran].text; 
        author.textContent = "-"+ data[ran].author;
});
img.src = "https://picsum.photos/535/350/?blur=1.5&random=1";

// get quotes every time refresh
refresh.addEventListener("click", function(){
    ran = Math.floor(Math.random() * 1643);
        
    fetch("https://type.fit/api/quotes").then(function(respones){
        return respones.json();

    }).then((data) =>{
        quote.textContent = data[ran].text; 
        author.textContent = "-"+ data[ran].author;
    });

    // get random image every time refresh
    img.src = "https://picsum.photos/535/350/?blur=1.5&random.webp";
}); 