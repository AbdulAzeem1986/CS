// login callback function

var username=document.getElementById("username");
    
var password=document.getElementById("password");

function verify(callback){
    
    
    if(username.value == "" && password.value == ""){
        alert("login using valid credentials");
        return false
    }

    else if(username.value == "admin" && password.value == 12345){
        console.log("success");
        callback();
    }
    else{
        alert("invalid credentials");
        console.log(username.value);
        console.log(password.value);
        console.log("false")
        return false
        
    };
};

function redirect(){
    console.log("succ");
    window.location.href="main.html"
    };

verify(redirect);

// callback function ending



// To Do function starting

function table1(){

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange=function(){
        
        if (this.readyState==4 && this.status==200){

            let details= JSON.parse(this.responseText);         

            let out="";

            for(i=0;i<details.length;i++){
            // var checkbox = document.createElement("INPUT");
            // checkbox.setAttribute("type", "checkbox");
            // console.log(checkbox)
            

                out+= `
                <tbody>
                <tr>
                    <td>${details[i].id}</td>
                    <td>${details[i].title}</td>
                    <td><input type="checkbox" ${details[i].completed?"checked=true disabled=true":null}></td>
                </tr>
                </tbody>  `;
            
            };
            
        
            let output=  `<thead>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            </tr>
            </thead>
            ${out}`


            document.getElementById("tabledata").innerHTML=output; 
               
    };
              
        };

        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();          
        
};
   
// To Do function ending




// logout function starting

function logout(){
    window.location.href="login.html";
    };

// logout function ending


// Test codes


            // let iddata = document.getElementById("iddata");
            // let titledata = document.getElementById("titledata");
            // let compdata = document.getElementById("compdata");


     // for(let detail of details)
            
            // var idcol="";
            // var titlecol="";
            // var statuscol="";


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
