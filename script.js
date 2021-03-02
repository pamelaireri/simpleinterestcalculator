function compute()
{
   
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter positive number");
        document.getElementById("principal").focus();

        
      }
    else{
    
    var rate = document.getElementById("rate").value;
    //document.getElementById("rangeVal").innerHTML = rate;

    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    
    //converting number of years into actual year in future.
    var futureYear = new Date(); 
    futureYear.setFullYear(futureYear.getFullYear() + parseInt(years));
    
    var text = "<br> If you deposit " + Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(principal) +  
    "<br> at an interest rate of " + rate + "%." +
    "<br> You will receive an amount of " + Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(interest) +
    "<br> in the year " + futureYear.getFullYear() + "."; 

    //displaying result
    document.getElementById("result").innerHTML = text;
    }

}

//Creating function to display value of slider oninput.

function rangeVal()
{
     
    var val = document.getElementById("rate").value; // getting range input value 
    document.getElementById("rangeVal").innerHTML = val;    // displaying value

}     
        