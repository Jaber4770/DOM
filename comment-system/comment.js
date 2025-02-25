document.getElementById("comment-btn").addEventListener("click", function(){
    let commentParent = document.getElementById("comment");

    let commentValue = document.getElementById("comment-box").value;
    
    let createdEliment = document.createElement('p');
    createdEliment.innerText =commentValue;

    commentParent.appendChild(createdEliment);

    document.getElementById("comment-box").value = '';
})