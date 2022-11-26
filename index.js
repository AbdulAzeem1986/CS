

function verify(callback){
    var username=document.getElementById("username");
    
    var password=document.getElementById("password");
    

    if(username.value == "admin" && password.value == 12345){
        console.log("success");
        callback();
    }
    else{
        alert("invalid credentials");
        console.log(username.value);
        console.log(password.value);
        console.log("false")
        return false
        
    }
}


function redirect(){
    console.log("succ");
    window.location.href="main.html"
    };


verify(redirect);




function ajax(){

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange=function(){
        
        if (this.readyState==4 && this.status==200){

            let details= JSON.parse(this.responseText);


       
            console.log(details[0].id);
            console.log(details.length);

            // let list=details.Array;
            // console.log(list);
            // var list=details.Array;
            // console.log(list);

            var idcol="";
            var titlecol="";
            var statuscol="";

            for(i=0;i<details.length;i++){
                idcol += "<li>"+details[i].id+"</li>";
                titlecol += "<li>"+details[i].title+"</li>";
                statuscol += "<li>"+details[i].completed+"</li>";

                console.log(idcol);
                document.getElementById("idcolumn").innerHTML = idcol;
                document.getElementById("titlecolumn").innerHTML = titlecol;
                document.getElementById("statuscolumn").innerHTML = statuscol;
            }

            // let list=details.id;
            // console.log(list);
    

           
        };
        
};
   
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
};


// To Do function ending




// logout function starting

function table1(){

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange=function(){
        
        if (this.readyState==4 && this.status==200){

            let details= JSON.parse(this.responseText);

            // let iddata = document.getElementById("iddata");
            // let titledata = document.getElementById("titledata");
            // let compdata = document.getElementById("compdata");

            let out="";

            // for(let detail of details)
            
            // var idcol="";
            // var titlecol="";
            // var statuscol="";

            for(i=0;i<details.length;i++){

                // out+= details[i];

                // idcol += "<li>"+details[i].id+"</li>";
                // titlecol += "<li>"+details[i].title+"</li>";
                // statuscol += "<li>"+details[i].completed+"</li>";

                // console.log(idcol);
                // <tr>
                // <td>idcolumn.innerHTML = idcol</td>
                // document.getElementById("titlecolumn").innerHTML = titlecol;
                // document.getElementById("statuscolumn").innerHTML = statuscol;
                // </tr>
            
                out+= `
                <tr>
                    <td>${details[i].id}</td>
                    <td>${details[i].title}</td>
                    <td>${details[i].completed}</td>
                </tr>  `;
            
            };
            
            tabledata.innerHTML=out; 
               
    }
    
        // console.log(out);
              
        };

        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();    
         
        
};
   
   


// function table(details){

//     let tabledata = document.getElementById("tabledata");

//     let out="";

//     for(let detail of details){
//         out+= `
//             <tr>
//                 <td>${details.id}</td>
//             </tr>
        
//         `;
//     }
// tabledata.innerHTML=out;
// }
