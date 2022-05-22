//function to calculate the interest
function compute()
{
    var principal = document.getElementById("principal").value;
    //if function to ensure that principal entered is a positive number and is not zero
    if (principal <= 0)
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * (rate/100) * years ;
    var year = new Date().getFullYear()+parseInt(years);
    
    //displays the results
    result.innerText =`If you deposit ${principal} ,\nat an interest rate of ${rate}.\nYou will receive an amount of ${interest} ,\nin the year ${year}`;  
}

//function used to update the interest rate chodsen and displayed
function updateRate() 
    {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    }
        