window.onload=function(){
    function go(){
    const req = new XMLHttpRequest();
    
    var tt = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
    let textReq= document.getElementById("rech").value;

    req.open('GET',tt+textReq, false);
    req.send();

    // let recherche=document.getElementById(rech);
    let section=document.getElementsByTagName('section')[0];

    if(section.firstChild){
        section.removeChild(section.firstChild)}

    let containers = document.createElement("div");
    containers.className = "corp"
    section.appendChild(containers);

    if(req.status===200){
        let wikipe = JSON.parse(req.response)
        
        for(i=0;i<wikipe[1].length;i++){
            let semblable = document.createElement("h2");
            let description = document.createElement("p");
            let redirection = document.createElement("a");
            semblable.className = "allSemblable"
            description.className = "allDescription"
            redirection.className = "btn btn-primary btn-lg active"
            semblable.textContent = wikipe[1][i];
            description.textContent = wikipe[2][i];
            redirection.href = wikipe[3][i];
            redirection.textContent= "wikipedia"
            containers.appendChild(semblable);
            containers.appendChild(description);
            containers.appendChild(redirection);
    
    }
    
    }
    else{
        console.log("status de la réponse:%d (%s)", req.status,req.statusText);
    }
    }
    
    document.getElementsByTagName('button')[0].addEventListener('click',go)
    
    }