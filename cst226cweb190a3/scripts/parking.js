"use strict";
/*
 Filename:    parking.js
 Student:     Logan Davis (CST226)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        3/25/2022
 Purpose: Provide the Script for parking
*/



let NameArray = [];
let PlateArray = [];
let PassArray  =[];

let NamePassed=false;
let PlatePassed=false;
let PassPassed=false;
let FullName="";
let PlateString = "";


let currentElement = null;
let selectedOption;

let NameEx = /[a-zA-Z]*[,]{1}[ ]{1}[a-zA-Z]*/;
let PlateEx = /[A-Z0-9]*[ -{}][A-Z0-9]*/;
let PassEx = /[1-999]/;


let Indexer = 0;
window.onload = init;

function init() {

    // document.getElementById("fullName").oninput = handleName;
    // document.getElementById("licensePlate").oninput = handlePlate;
    // document.getElementById("parkingPass").oninput = handlePass;
    document.getElementById("parkingForm").onsubmit = handleSubmission;
    //document.getElementById("requestForm").onsubmit = AddInfo;
    document.getElementById("requestForm").onchange=ChangeInfo;
}


function handleSubmission(event) {

    let outputString = "";

    let nameBox = document.getElementById("fullName").value;
    let PlateBox = document.getElementById("licensePlate").value;
    let PassBox = document.getElementById("parkingPass").value;



//&&PlatePassed == true&&PassPassed==True

    if(handleName(nameBox) == true&&handlePlate(PlateBox) == true&&handlePass(PassBox) == true) {

        PlateArray[Indexer] = PlateBox;
        NameArray[Indexer] = nameBox;
        PassArray[Indexer] = PassBox;
        AddedPlates(PlateArray,Indexer)
        AddInfo(PlateArray,NameArray,PassArray,Indexer)



        document.getElementById("parkingForm").reset();
        Indexer++;
    }
    //window.alert(NameArray[Indexer]);




    event.preventDefault();



    // return false;
}

function AddedPlates(Plate,Size)
{

    if(Size ===0)
    {
        PlateString=Plate[Size]+ "<br>";
    }

    else {
        PlateString="";
        for (let i = 0; i <= Size; i++) {

            PlateString += Plate[i]+ "<br>";
        }
    }
    document.getElementById("Plates").innerHTML=PlateString;
}

function AddInfo(Plate,Name,Pass,Size) {
    FullName = Name[Size].substring(Name[Size].indexOf(",") + 2, Name[Size].length) + " " + Name[Size].substring(0, Name[Size].indexOf(",")).trim();

    let option = document.createElement("option");
    option.text = Plate[Size];
    option.value = Pass[Size] + ": " + FullName;
    document.getElementById("plate").add(option);
   // document.getElementById("plate").innerText=option.text
    // document.getElementById("plate").value().text=Plate[Size];


     let TextBox = document.getElementById("selectedData");
     TextBox.value = Pass[Size] + ": " + FullName;


    //  let ValueBox = document.getElementById("plate")
    // ValueBox.text = Plate[Size];


}




  function ChangeInfo()
 {

     currentElement=document.getElementById("plate")
     selectedOption = currentElement.selectedIndex;
     document.getElementById("selectedData").value = currentElement.options[selectedOption].value;

 }
function handleName(Name)
{



        if (NameEx.test(Name)===false)
        {
            document.getElementById("fullName").style.backgroundColor = "tomato";
            return false;

        }
        else
        {
            return true

        }

}
function handlePlate(Plate) {



    if (PlateEx.test(Plate)===false)
    {
        document.getElementById("licensePlate").style.backgroundColor = "tomato";
        return false;
    }
    else
    {
        return true

    }
}
function handlePass(Pass) {



    if (PassEx.test(Pass)===false)
    {
        // document.getElementById("parkingPass").style.backgroundColor = "tomato";
        return false;
    }
    else
    {
        return true

    }
}




//add Names,Plate, etc. to respective arrays

