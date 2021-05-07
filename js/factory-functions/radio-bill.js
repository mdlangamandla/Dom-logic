function radioBillTotal(){
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function checkedBillType(billItemType){
        
            if(billItemType === "call"){
                callCostTotal += 2.75;
            }

            if(billItemType === "sms"){
                smsCostTotal += 0.75;
            }
    }

    function getOverallCost(){

        return callCostTotal +  smsCostTotal;
    }

    function getSmsCostTotal(){
        return smsCostTotal;   
    }

    function getCallCostTotal(){
        return callCostTotal;
    }

    function addClass(){
        if(getOverallCost() >= 30 && getOverallCost() < 50){
            return "warning";
        }

        if(getOverallCost() >= 50){
            return "danger";
        }
    }

    return{
        checkedBillType,
        getOverallCost,
        getSmsCostTotal,
        getCallCostTotal,
        addClass
    }

}
