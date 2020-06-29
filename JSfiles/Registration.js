
function validate()
{
    var res = document.getElementById("fname").value
    console.log(res)

    if(res.length==0)
    {
        document.getElementById("fwarning").innerHTML="** FirstName field is empty"

        return false
    }
    else if(res.length<3)
    {
        document.getElementById("fwarning").innerHTML="** FirstName should have atleast three letters"

        return false
    }
    else if(res.length>15)
    {
        document.getElementById("fwarning").innerHTML="** FirstName should have maxmimum fifteen letters"

        return false
    }
    else
    {
        document.getElementById("fwarning").hidden=true;
    }
    


    var res1 = document.getElementById("lname").value

   
    
     if(res.length<3)
    {
        document.getElementById("lwarning").innerHTML="** LastName should have atleast three letters"

        return false
    }
    else if(res.length>15)
    {
        document.getElementById("lwarning").innerHTML="** LastName should have maxmimum fifteen letters"

        return false
    }

    else
    {
        document.getElementById("lwarning").hidden=true;
    }
    var res = document.getElementById("pnum").value

    if(res.length==0)
    {
        document.getElementById("pwarning").innerHTML="Please enter the Phone number";
        return false;
    }

    else if(isNaN(res))
    {
        document.getElementById("pwarning").innerHTML="PhoneNumber should contains only digits" ;
        
        return false
    }

    else if(res.length<10)
    {
        document.getElementById("pwarning").innerHTML="PhoneNumber is less than 10 digits plz reenter"

        return false;
    }
    else if(res.length>10)
    {
        document.getElementById("pwarning").innerHTML="PhoneNumber is more than 10 digits plz reenter"

        return false
    }
    else if(res.charAt(0)<6)
    {
        document.getElementById("pwarning").innerHTML="Indian standard PhoneNumber starts from either 7,8,9"

        return false;
    }
    else
    {
        document.getElementById("pwarning").hidden=true;
    }

   
   var password =document.getElementById("pass").value
   var cpassword=document.getElementById("cpass").value

   if(password!=cpassword)
   {
    document.getElementById("cpasswarning").innerHTML="** Password is not matching plz Re-enter the Password"
        return false
  }
  else
  {
    document.getElementById("cpasswarning").hidden=true
  }
  
   
   var r = document.formEntrance.radiobutton;

   for(let i =0;i<r.length;i++)
   {
       if(r[i].checked)
       {
           return true;
       }
   }
   document.getElementById("rbwarning").innerHTML="Atleast one button has to be checked"

   return false; 

}

