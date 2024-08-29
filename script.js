console.log("Start");

let Lowercnt= document.getElementById("Lowercnt");
let userData= document.getElementById("userData");
userData.addEventListener("keyup",(e)=>{
    if(e.key == "Enter"){
        console.log(e.target.value);
        input=e.target.value;
        fetch("https://apis.ccbp.in/wiki-search?search="+input).then((e)=>{
            return e.json()
        }).then((data)=>{
            console.log(data.search_results);
            //let user_data= data.search_results;
            let {search_results} = data;
           // console.log(search_results); //array
           let input= ""
           search_results.map((result)=>{
               input+=`     
               <div class="card">
                   <a class="link" target="_blank" href= ${result.link}>${result.link}</a>
                   <a target="_blank" href= ${result.link} > <h2 class="title" >${result.title}</h2></a>
                   <p class="desc">${result.description}</p>
               </div>`
               console.log(result);
           })
           Lowercnt.innerHTML=input;   
        })
        
    }
})