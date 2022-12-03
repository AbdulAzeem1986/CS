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

            var details= JSON.parse(this.responseText);         
            let out="";

            for(i=0;i<details.length;i++){
        
                out+= `
                
                <tr>
                    <td class="td1 text-center">${details[i].id}</td>
                    <td class="td2" >${details[i].title}</td>
                    <td class="td3 text-center"><input class="checkbox" type="checkbox" onchange="validate()" id="checkbox" value=${i} ${details[i].completed?"checked disabled":"unchecked"}></td>
                </tr>
      `
             };
            
            let output=  `<thead>
            <tr>
            <th class="text-center">Id</th>
            <th>Title</th>
            <th class="text-center">Completed</th>
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
    window.location.href="index.html"
    };

// logout function ending


// Checkbox validation

function validate(){

    var promise= new Promise(function(resolve,reject){

        var cb = document.getElementsByClassName("checkbox");

        var counter=1;        
        
        for(i=1;i<cb.length;i++){
        
                if(cb[i].defaultChecked==false){

                    if(cb[i].checked==true){

                        counter+=1;                      
                    };
                };
            };
            
            if(counter==5){
                resolve("Congrats!!! 5 Tasks have been successfully completed");   
            };  
    })

            promise.then(function(s){
                
            alert(s)
    }); 
};