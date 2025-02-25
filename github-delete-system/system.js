document.getElementById('input-text').addEventListener("keyup", function(e){
    console.log(e.target.value);
    if(e.target.value === "DELETE"){
        let btn = document.getElementById("delete-btn");
        btn.removeAttribute("disabled");
        
    }
    else{
        let btn = document.getElementById("delete-btn");
        btn.setAttribute("disabled", true);
    }
})

document.getElementById("delete-btn").addEventListener('click', function(){
    let title = document.getElementById("title");
    title.style.display = "none";

    document.getElementById('input-text').value = "";
})