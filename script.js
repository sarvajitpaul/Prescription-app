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

let medicines=JSON.parse(localStorage.getItem("medDB")) || [];

let index=document.getElementById("medicineList").value;

let med=medicines[index];

let line=

med.name+" "+med.dose+" "+med.freq+" "+med.dur+"\n";

document.getElementById("medicines").value+=line;

}



function feverTemplate(){

document.getElementById("diagnosis").value="Acute Febrile Illness";

document.getElementById("medicines").value=

"Paracetamol 650mg TDS 3 days\nORS as needed";

}



function gastritisTemplate(){

document.getElementById("diagnosis").value="Acute Gastritis";

document.getElementById("medicines").value=

"Pantoprazole 40mg OD\nDomperidone BD";

}



window.onload=loadMedicines;