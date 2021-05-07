function textBillTotal(){

    //string variables variables
    var callsTotal = 0;
    var smsTotal = 0;
    // update the correct total
    function billItem(billTypeEntered){
        if (billTypeEntered === "call"){
            callsTotal += 2.75;
        }
    
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getTotalCost(){
        return callsTotal + smsTotal;

    }
    function getCallCostTotal(){
        return callsTotal;
    }
    function getSmsCostTotal(){
        return smsTotal;
    }

      //add color

      function getColorClass(){

          if(getTotalCost() >= 30 && getTotalCost() < 50){
              return "warning";
          }
      
     
        if(getTotalCost() >= 50){
            return "danger";
        }
    }

   
    return{
        billItem,
        getCallCostTotal,
        getSmsCostTotal,
        getTotalCost,
        getColorClass,
    
    }

}
