const body=document.querySelector("body"),
     nav=document.querySelector("nav"),
     modetoggle= document.querySelector(".dark-light"),
     sidebaropen=document.querySelector(".sidebaropen"),
     sidebarclose=document.querySelector(".sidebarclose");

    
    
     modetoggle.addEventListener("click" , () =>{
    modetoggle.classList.toggle("active");
    body.classList.toggle("dark");
     } ) 

     //to toggle sidebar
     sidebaropen.addEventListener("click" , () =>{
        nav.classList.add("active");
    })
    body.addEventListener("click" , e =>{
        let clickedelm=e.target;
        if(!clickedelm.classList.contains("sidebaropen")&& !clickedelm.classList.contains("menu")){
            nav.classList.remove("active");
        }
    })