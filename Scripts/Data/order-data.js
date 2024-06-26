import { browerData } from "../Account-Data/brower-user-data.js";
import { registerData } from "../Account-Data/register-data.js";



let infoMatch;
registerData.forEach(info => {
  if (info.email  === browerData) {
    infoMatch = info
  }; 
});

export let orderLogItem = browerData ? (infoMatch.firstName + infoMatch.lastName)
: '';

export let  orderedItems = JSON.parse(localStorage.getItem(orderLogItem)) || [];


export function saveOrderStorage() {
  localStorage.setItem(orderLogItem, JSON.stringify( orderedItems));
};