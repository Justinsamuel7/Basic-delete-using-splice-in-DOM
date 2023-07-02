let employees = [
  {
    name : 'Abhishek',
    organization : 'Pure Storage',
    empid : '11244',
    phoneNumber : 7250819791,
    address:'Bangalore'
  },
  {
    name : 'Jaideep',
    organization : 'Dell EMC',
    empid : '98673',
    phoneNumber : 987634512,
    address:'Jaipur'
  },
  {
    name : 'Sumit',
    organization : 'Inautix',
    empid : '87312',
    phoneNumber : 976436721,
    address:'Pune'
  },
  {
    name : 'Somreh',
    organization : 'Nike',
    empid : '87453',
    phoneNumber : 7659012436,
    address:'Bhubaneshwar'
  },
  {
    name : 'Lily',
    organization : 'Accenture',
    empid : '00987',
    phoneNumber : 6098345689,
    address:'Inodre'
  },
  {
    name : 'Roman',
    organization : 'Unacademy',
    empid : '76432',
    phoneNumber : 5643812564,
    address:'Bhatinda'
  },
  {
    name : 'Ashu',
    organization : 'Amazon',
    empid : '72332',
    phoneNumber : 7865098123,
    address:'Patiala'
  },
  {
    name : 'Ankit',
    organization : 'Microsoft',
    empid : '77632',
    phoneNumber : 9873245671,
    address:'Kolkata'
  }
]
function showemployesfun(){
let container=document.getElementById("container");

let div2=``;
employees.forEach((ele,index)=>{
  div2=div2+`<div id="${index}">
  <p>name : ${ele['name']}</p>
  <p>organization : ${ele['organization']}</p>
  <p>phoneNumber : ${ele['phoneNumber']}</p>
  <p>empid : ${ele['empid']}</p>
  <p>address : ${ele['address']}</p>
  <button id="${index}" onclick="Confirmation(${ele['empid']})">Delete</button>

  </div>
  `
  //"Confirmation(${ele['phoneNumber']})"
})


container.innerHTML = div2;
}


function Confirmation(x){
    
    let condiv=`<div id="confirmpopup"><p>Sure Are You Want To Delete It?</p><button onclick="Deleting(${x})">Yes,Delete</button><button id="nobtn" onclick="cancelling()">No,Cancel</button> </div>`

    container.innerHTML=condiv;

}

function Deleting(empid){
    let divindex=employees.findIndex((element)=>element['empid']==empid);

    employees.splice(divindex,1);
    showemployesfun();

}

function cancelling(){
    showemployesfun();
}


//-----------------------

