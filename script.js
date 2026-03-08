function savePrescription(){

let patient={

name:document.getElementById("name").value,

age:document.getElementById("age").value,

sex:document.getElementById("sex").value,

phone:document.getElementById("phone").value,

diagnosis:document.getElementById("diagnosis").value,

medicines:document.getElementById("medicines").value

};

localStorage.setItem(Date.now(),JSON.stringify(patient));

alert("Prescription Saved");

}



function saveMedicine(){

let medicine={

name:document.getElementById("medName").value,

dose:document.getElementById("medDose").value,

freq:document.getElementById("medFreq").value,

dur:document.getElementById("medDur").value

};

let medicines=JSON.parse(localStorage.getItem("medDB")) || [];

medicines.push(medicine);

localStorage.setItem("medDB",JSON.stringify(medicines));

loadMedicines();

alert("Medicine Saved");

}



function loadMedicines(){

let medicines=JSON.parse(localStorage.getItem("medDB")) || [];

let list=document.getElementById("medicineList");

list.innerHTML="";

medicines.forEach((med,i)=>{

let option=document.createElement("option");

option.value=i;

option.text=med.name;

list.appendChild(option);

});

}



function addMedicine(){

let name=document.getElementById("medName").value;

let dose=document.getElementById("medDose").value;

let freq=document.getElementById("medFreq").value;

let dur=document.getElementById("medDur").value;

let qty=document.getElementById("medQty").value;

let line = name + " " + dose + " (" + freq + ") × " + dur + " — " + qty + "\n";

document.getElementById("medicines").value += line;

document.getElementById("medName").value="";
document.getElementById("medDose").value="";
document.getElementById("medFreq").value="";
document.getElementById("medDur").value="";
document.getElementById("medQty").value="";

}




window.onload=loadMedicines;