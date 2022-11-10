// alert("hello ravi");
function addNewWEField(){
    // console.log("Adding new Field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('weField');
    newNode.setAttribute("rows",3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('eqField');
   newNode.setAttribute('rows',3);
   newNode.classList.add('mt-2');
   newNode.setAttribute("placeholder","Enter Here");

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating CV
function generateCV()
{
    // console.log("Generating CV");
    let namefield=document.getElementById("namefield").value;

    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=namefield;

    //direct

    document.getElementById("nameT2").innerHTML=namefield;

    //contact

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

    //address

    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

    //email

    document.getElementById("emailT").innerHTML=document.getElementById("emailfield").value;

    //important links

    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkedinfield").value;


    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;

    //work experience

   let wes=document.getElementsByClassName("weField");

   let str='';
    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str;

    //code for setting image
   let file=document.getElementById("imgField").files[0];
    console.log(file);

    //we have to make reader

    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template
    reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
    }

    //Academic Qualification

    let adq=document.getElementsByClassName("eqField");
    let str1='';
    for(let e of adq)
    {
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
    //printCV
     function printCV()
     {
        window.print();
     }

