window.onload=function(){
    let btnRech = document.getElementById('btnRech')
    let header = document.getElementById('header')
    let rech = document.getElementById('rech')
    let navbarExample3 = document.getElementById('navbar-example3')
    function go(){
        const req = new XMLHttpRequest();
        
        var tt = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
        let textReq= document.getElementById("rech").value;
        
        req.open('GET',tt+textReq, false);
        req.send();
        
        // titleParent create
        // .............
        
        let nav=document.getElementById('navbar-example3');
        let titleParent=document.getElementById('titleParent');
        
        
        if(titleParent.firstChild){
            titleParent.removeChild(titleParent.firstChild)}
            
        let hangar = document.createElement("div");
        hangar.className = "column"
        titleParent.appendChild(hangar);

        // section create
        // .................
        
        let section=document.getElementsByTagName('section')[0];
        
        if(section.firstChild){
            section.removeChild(section.firstChild)}
            
            let containers = document.createElement("div");
            containers.className = "corp"
            section.appendChild(containers);
            
            let dejaCree = false
            
            if(req.status===200){
                let wikipe = JSON.parse(req.response)
                
                for(i=0;i<wikipe[1].length;i++){

                    let titleColumn = document.createElement("a");
                    titleColumn.className = "nav-link";
                    titleColumn.href = '#'+opla(wikipe[1][i])
                    titleColumn.textContent = wikipe[1][i];
                    hangar.appendChild(titleColumn);
                    
                    dejaCree = true
                    
                    let research = document.createElement('div')
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
                research.id = opla(wikipe[1][i])
                // research.className = chaqueElement
                research.appendChild(semblable);
                research.appendChild(description);
                research.appendChild(redirection);
                containers.appendChild(research)
                
                
            }
            
        }
        else{
            console.log("status de la réponse:%d (%s)", req.status,req.statusText);
        }
        
        function opla(text){
            return text.replace(/ /g,'').toLowerCase()
        }
        if (dejaCree === true){
            header.style.flexDirection = 'column'
            header.style.width = '15%'
            header.style.height = '15%'
            navbarExample3.style.top = '15%'
            rech.style.width = '100%'
            header.style.fontSize = '1.7rem'
            
            }

    }
    rech.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnRech").click();
        }
    });

    header.addEventListener("click", function(e){
        // e.target.style.opacity = 1;
        e.target.style.flexDirection = 'none'
        e.target.style.width = '100vw'
        e.target.style.height = '8vh'
        navbarExample3.style.top = '8%'
        rech.style.width = '30%'
        e.target.style.fontSize = '2rem'     
    })
    header.addEventListener("click", function(e){
        // e.target.style.opacity = "";
        e.target.style.flexDirection = ''
        e.target.style.width = ''
        e.target.style.height = ''
        navbarExample3.style.top = ''
        rech.style.width = ''
        e.target.style.fontSize = ''  
    })

    document.getElementsByTagName('button')[0].addEventListener('click',go)
    
}