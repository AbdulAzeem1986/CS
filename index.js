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
                    <td class="td3 text-center"><input type="checkbox" onchange="validate().then(increment).catch(decrement)" id="checkbox" value=${i} ${details[i].completed?"checked disabled":"unchecked"}></td>
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


var count="";

function validate(){

// var table = document.getElementById("table1");
    var t = document.getElementById("tabledata");
    var tb =t.getElementsByTagName("tbody");
    var trs = tb[0].getElementsByTagName("tr");
    var tc = trs[0].getElementsByTagName("td");
    var cb = tc[1].getElementsByTagName("input");


    
    console.log(trs.length);
    
    
    for (var i=0;i,trs.length;i++){
    

               return new Promise(function(resolve,reject){

                if(trs[i].onchange==true){
                    
                    if(cb.checked==true){
                         resolve();
                    }
                    else{
                        reject();

                    }
                }
              
        });
};
};

function increment(){
    count++;
    if(count==5){
    alert("Congrats. 5 Tasks have been Successfully Completed");
    }
    else{
        return count;
    }  
};

function decrement(){
    count--;
    return count
}