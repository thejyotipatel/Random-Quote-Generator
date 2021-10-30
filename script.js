const quote = document.querySelector(".quote");
const author = document.querySelector(".author"); 
const refresh = document.querySelector(".refresh");
let ran = Math.floor(Math.random() * 1643);

// set starting img and quotes
fetch("https://type.fit/api/quotes").then(function(respones){
        return respones.json();

    }).then((data) =>{
        quote.textContent = data[ran].text; 
        author.textContent = "-"+ data[ran].author;
}); 

// get quotes every time refresh
refresh.addEventListener("click", function(){
    ran = Math.floor(Math.random() * 1643);
        
    fetch("https://type.fit/api/quotes").then(function(respones){
        return respones.json();

    }).then((data) =>{
        quote.textContent = data[ran].text; 
        author.textContent = "-"+ data[ran].author;
    });
 
}); 
