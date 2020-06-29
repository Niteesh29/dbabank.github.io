function performOperation(op1,op2,op3)
{
   
    var ddIndex = document.getElementById("list").selectedIndex;
    var selectedText = document.getElementById("list").options[ddIndex].text;
    if(selectedText==="Deposit")
    {
        var res1 = Number(op1)+Number(op2)
        document.getElementById("currentBalance").value=res1

        var row = document.getElementById("myTable").insertRow(2)
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = op3;
        cell2.innerHTML = document.getElementById("Amount").value;

    }
   else if(selectedText==="Withdrawl")
    { 
        
        var res2 = Number(op1)-Number(op2)

        if(res2>0)
        {
            document.getElementById("currentBalance").value =res2
            var row = document.getElementById("myTable2").insertRow(2)
        
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
    
            cell1.innerHTML = op3;
            cell2.innerHTML = document.getElementById("Amount").value;


        }
        else
        {
            document.getElementById("msg").innerHTML="Insufficient balance to withdraw!!!!"
        }
    }
   
}