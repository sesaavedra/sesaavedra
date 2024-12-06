

function calculate()
{


    let items = [
    document.getElementById("main").value,
    document.getElementById("secondary").value,
    document.getElementById("head").value,
    document.getElementById("earrings").value,
    document.getElementById("chest").value,
    document.getElementById("necklace").value,
    document.getElementById("hands").value,
    document.getElementById("bracelets").value,
    document.getElementById("legs").value,
    document.getElementById("ring_1").value,
    document.getElementById("shoes").value,
    document.getElementById("ring_2").value
];
    let checkbox=document.getElementById("paladin");
    let originalValue=items[1];

    if(checkbox.checked===true)
    {
        items[1]=originalValue;
    }
    else{
        
        items[1]=items[0];
    }


    let sum=0;
    let avg=0;
    

    for(let i=0;i<items.length;i++)
    {
        items[i]=Number(items[i]);
        sum+=items[i];
    }


    avg= sum/(items.length);
    avg=avg.toFixed(2)
        document.getElementById("calculation").innerHTML=avg;

    
}


function disableInput(){
    let checkbox=document.getElementById("paladin");

    if(checkbox.checked===true)
    {
        document.getElementById("secondary").disabled=false;
        
    }
    else{
        
        document.getElementById("secondary").disabled=true;
    }
    calculate();
}

function giveCredits(){
    const creditsLine = document.getElementById("credits")
    creditsLine.innerHTML = creditsLine.innerHTML.replaceAll(/Cornelia Pixel/gi,"<a href=\"https://fontstruct.com/fontstructions/show/2329508/coneria-pixel\"> $&</a>")
}
disableInput();
giveCredits();