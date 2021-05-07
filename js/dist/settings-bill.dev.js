"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// get a reference to the sms or call radio buttons
var callSettingsTotalElem = document.querySelector('.callTotalSettings');
var smsSettingsTotalElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings'); // get refences to all the settings fields

var callCostSettingField = document.querySelector('.callCostSetting');
var smsCostSettingField = document.querySelector('.smsCostSetting');
var warningLevelSettingField = document.querySelector('.warningLevelSetting');
var criticalLevelSettingField = document.querySelector('.criticalLevelSetting'); //get a reference to the add button

var billSettingsAddButtonBtn = document.querySelector('.billSettingsAddButton'); //get a reference to the 'Update settings' button

var updateSettingsbtnElem = document.querySelector('.updateSettingsbtn'); // create a variables that will keep track of all the settings values

var callSettings = 0;
var smsSettings = 0;
var warningSettings = 0;
var dangerSettings = 0; // create a variables that will keep track of all three totals.

var callsTotalSettings = 0;
var smsTotalSettings = 0;
var totalSettings = 0;
var overallCost = 0; //adding variable to the limitedTotal on criticalLevel

var limitedTotal = 0; //add an event listener for when the 'Update settings' button is pressed

function updateSettings() {
  callSettings = callCostSettingField.value;
  smsSettings = smsCostSettingField.value;
  warningSettings = warningLevelSettingField.value;
  dangerSettings = criticalLevelSettingField.value; //addClassName();
  //removeClassName();
  // console.log(callSettings);
  // console.log(smsSettings);
}

;
updateSettingsbtnElem.addEventListener('click', updateSettings); //});
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons

function totalBillSettings() {
  var checkedRadioSettingsBtn = document.querySelector("input[name='billSettingsItemType']:checked");

  if (overallCost < dangerSettings) {
    if (checkedRadioSettingsBtn) {
      var billSettingsItemType = checkedRadioSettingsBtn.value; //ADD the appropriate value to the call / sms total
      //AND use parseFloat to change string value to a number

      if (billSettingsItemType === "call") {
        callsTotalSettings += parseFloat(callSettings);
      }

      if (billSettingsItemType === "sms") {
        smsTotalSettings += parseFloat(smsSettings);
      }
    }
  } // * add the appropriate value to the overall total


  console.log(_typeof(callsTotalSettings));
  callSettingsTotalElem.innerHTML = callsTotalSettings.toFixed(2);
  smsSettingsTotalElem.innerHTML = smsTotalSettings.toFixed(2);
  overallCost = callsTotalSettings + smsTotalSettings;
  totalSettingsElem.innerHTML = overallCost.toFixed(2);
  addClassName(); //removeClassName();
  //stopping the counter once the criticalLevel is reached
  // for(i = 0; i > criticalLevelSettingField; i++){
  //     if(overallCost > criticalLevelSettingField){
  //         document.getElementsByClassName('billSettingsAddButton').innerHTML.disabled = true;
  //         //limitedTotal += overallCost;
  //     }
  //if(overallCost<criticalLevelSettingField){continue;}
  //limitedTotal += overallCost;
}

function addClassName() {
  //var totalSettings = Number(overallCost);
  // totalBillSettingsElem.classList.remove("warning");
  // totalBillSettingsElem.classListremove("danger");
  // adding the criticalLevelSetting class will make the overall cost red
  if (overallCost >= dangerSettings) {
    totalSettingsElem.classList.add("danger");
  } else if (overallCost >= warningSettings && overallCost < dangerSettings) {
    // adding the warningLevelSetting class will make the overall cost orange
    totalSettingsElem.classList.add("warning");
  }
} // function removeClassName(){
//     //var totalSettings = Number(overallCost);
//     totalBillSettingsElem.classList.remove("warning");
//     totalBillSettingsElem.classList.remove("danger");
//     // adding the criticalLevelSetting class will make the overall cost red
// if (overallCost >= dangerSettings){
//     totalSettingsElem.classList.add("warning");
// }
// else if (overallCost >= warningSettings && overallCost< dangerSettings){
//     // adding the warningLevelSetting class will make the overall cost orange
//     totalSettingsElem.classList.add("danger");
// }
// }


billSettingsAddButtonBtn.addEventListener('click', totalBillSettings); // * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.