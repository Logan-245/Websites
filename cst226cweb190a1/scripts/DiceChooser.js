"use strict";
/*
 Filename:    diceroller.js
 Student:     Logan Davis (CST226)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        1/23/2022
 Purpose: Provide the Script for diceroller
*/

let NumOfDice;//creates the variable to bwe used with the number of dicve
let RollCounter=-1;
let arDiceRolls = [];//creates the ar for dice rolls
let Sum;// creates sum
let arPreviousRolls= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//creates the array for the previous rolls
let arFrequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//creates array for frequency table
arPreviousRolls.length=10;//sets arPrevious rolls' cap at 10

NumOfDice= window.prompt("How many dice should be rolled? (1-5)");//ask the user how many dice should be rolled
if(NumOfDice===null)//if the user cancels set the number of dice to 2
{
    NumOfDice=2;
    window.alert("A 2 Will Be Used")
}
while (NumOfDice !== null) {
    NumOfDice=parseInt(NumOfDice);
    if (NumOfDice < 1 || NumOfDice > 5 || Number.isNaN(NumOfDice)) {
        window.alert("Invalid - How many dice should be rolled? (1-5)");
    }
    else {
        arDiceRolls = rollfunction(NumOfDice)
        for(let i =0; i<arDiceRolls.length;i++) {
            ImageDisplay(arDiceRolls[i]);
        }
        table();//displays the table
        break;
    }
    NumOfDice = window.prompt("How many dice should be rolled? (1-5)", "");
}


let interval
// when the window is loaded, run the init function
window.onload = init;
//lines 43-52 are used to run to rolling function when the button is pushed
function init() {
    document.getElementById("btnRoll").onclick = RollTheBones;
}
function RollTheBones() {
    // Sum = addRolls(arDiceRolls)
    document.getElementById("btnRoll").disabled = true;
     interval = setInterval(miliRolls,100)
    setTimeout(FinalRoll,900)
}



function miliRolls(){//used to display the images every 100ms
    arDiceRolls = rollfunction(NumOfDice)
    document.getElementById("diceArea").innerHTML="";
    for(let i =0; i<arDiceRolls.length;i++) {//runs through the array of dice to display their images

        ImageDisplay(arDiceRolls[i]);
    }
}


function FinalRoll() {//used to display dice, update the table, update last occurance, and display the numerical value after 1000ms
    clearTimeout(interval);
    arDiceRolls = rollfunction(NumOfDice)//adds the dice that were rolled to an array
    Sum = addRolls(arDiceRolls)// adds the array of dice together to get a sum.
    arFrequency[Sum]++;//adds 1 to the position of the sum on the array of 30
    if(RollCounter<0)
    {
        RollCounter=0;
    }
    RollCounter++;
    document.getElementById("pRolled").innerHTML = "You Rolled a " +Sum+"...";//displays the sum of the dice
    document.getElementById("pTotalRolls").innerHTML= "My statistics for a total of " + RollCounter+ " rolls"; // displays the ammount of rolls
    document.getElementById("btnRoll").disabled = false; //re-enables the button
    document.getElementById("diceArea").innerHTML="";//clears the image, so the new ones can be displayed
    for(let i =0; i<arDiceRolls.length;i++) {//runs through the array of dice to display their images
        ImageDisplay(arDiceRolls[i]);
    }
    table();//displays the table
    PastRolls();//alters past rolls array
    document.getElementById("pPreviousTenRolls").innerHTML= "The previous 10 rolls were: " +arPreviousRolls.toString(); //diaplays the array

}
function table() {
    switch (NumOfDice) {
         case 1:
                document.getElementById("tblStats").innerHTML=
                   "<thead>"+
                        "<tr>"+
                            "<th>Roll</th>"+
                            "<th>Frequency</th>"+
                            "<th>Percent of Total Rolls</th>"+
                       " </tr>"+
                    "</thead>"+
             "<tbody>"+
                 "<tr>"+
                    "<td>1</td>"+
                     "<td>" +arFrequency[1].toString() +"</td>"+
                    "<td>"+ (arFrequency[1]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                " <tr>"+
                     "<td>2</td>"+
                     "<td>" +arFrequency[2].toString()+ " </td>"+
                    "<td>"+ (arFrequency[2]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                    " <td>3</td>"+
                    " <td>"+ arFrequency[3].toString() + "</td>"+
                    "<td>"+ (arFrequency[3]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                     "<td>4</td>"+
                     "<td>" +arFrequency[4].toString() + "</td>"+
                    "<td>"+ (arFrequency[4]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                     "<td>5</td>"+
                     "<td>" + arFrequency[5].toString() +"</td>"+
                    "<td>"+ (arFrequency[5]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                     "<td>6</td>"+
                     "<td>" + arFrequency[6].toString() + "</td>"+
                    "<td>"+ ((arFrequency[6])/RollCounter).toFixed(3)+ "%</td>"+
                " </tr>"+
             "</tbody>"
             break;
         case 2:
             document.getElementById("tblStats").innerHTML=
            "<thead>" +
                 "<tr>" +
                    "<th>Roll</th>"+
                    "<th>Frequency</th>"+
                     "<th>Percent of Total Rolls</th>" +
                 "</tr>" +
             "</thead>" +
             "<tbody>" +
                 "<tr>" +
                 "<td>2</td>"+
                 "<td>" +arFrequency[2].toString()+ " </td>"+
                 "<td>"+ (arFrequency[2]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 " <td>3</td>"+
                 " <td>"+ arFrequency[3].toString() + "</td>"+
                 "<td>"+ (arFrequency[3]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>4</td>"+
                 "<td>" +arFrequency[4].toString() + "</td>"+
                 "<td>"+ (arFrequency[4]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>5</td>"+
                 "<td>" + arFrequency[5].toString() +"</td>"+
                 "<td>"+ (arFrequency[5]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>6</td>"+
                 "<td>" + arFrequency[6].toString() + "</td>"+
                 "<td>"+ ((arFrequency[6])/RollCounter).toFixed(3)+ "%</td>"+
                 " </tr>"+
                 "<tr>" +
                     "<td>7</td>" +
                     "<td>" + arFrequency[7].toString()+"</td>" +
                 "<td>"+ (arFrequency[7]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                    " <td>8</td>" +
                     "<td>"+arFrequency[8].toString()+"</td>" +
                 "<td>"+ (arFrequency[8]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>9</td>" +
                    " <td>"+arFrequency[9].toString()+"</td>" +
                 "<td>"+ (arFrequency[9]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>10</td>" +
                     "<td>"+arFrequency[10].toString()+"</td>" +
                 "<td>"+ (arFrequency[10]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>11</td>" +
                    " <td>" +arFrequency[11].toString()+" </td>"+
                 "<td>"+ (arFrequency[11]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
                 "<tr>"+
                     "<td>12</td>"+
                     "<td>"+arFrequency[12].toString()+"</td>"+
                 "<td>"+ (arFrequency[12]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
             "</tbody>"
             break;
         case 3:
             document.getElementById("tblStats").innerHTML=
             "<thead>"+
                 "<tr>"+
                     "<th>Roll</th>"+
                     "<th>Frequency</th>"+
                     "<th>Percent of Total Rolls</th>"+
                 "</tr>"+
             "</thead>"+
              "<tbody>"+
                 "<tr>" +
                 " <td>3</td>"+
                 " <td>"+ arFrequency[3].toString() + "</td>"+
                 "<td>"+ (arFrequency[3]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>4</td>"+
                 "<td>" +arFrequency[4].toString() + "</td>"+
                 "<td>"+ (arFrequency[4]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>5</td>"+
                 "<td>" + arFrequency[5].toString() +"</td>"+
                 "<td>"+ (arFrequency[5]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>6</td>"+
                 "<td>" + arFrequency[6].toString() + "</td>"+
                 "<td>"+ ((arFrequency[6])/RollCounter).toFixed(3)+ "%</td>"+
                 " </tr>"+
                 "<tr>" +
                 "<td>7</td>" +
                 "<td>" + arFrequency[7].toString()+"</td>" +
                 "<td>"+ (arFrequency[7]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 " <td>8</td>" +
                 "<td>"+arFrequency[8].toString()+"</td>" +
                 "<td>"+ (arFrequency[8]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 "<td>9</td>" +
                 " <td>"+arFrequency[9].toString()+"</td>" +
                 "<td>"+ (arFrequency[9]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>10</td>" +
                 "<td>"+arFrequency[10].toString()+"</td>" +
                 "<td>"+ (arFrequency[10]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>11</td>" +
                 " <td>" +arFrequency[11].toString()+" </td>"+
                 "<td>"+ (arFrequency[11]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>12</td>"+
                 "<td>"+arFrequency[12].toString()+"</td>"+
                 "<td>"+ (arFrequency[12]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>13</td>"+
                 "<td>"+arFrequency[13].toString()+"</td>"+
                 "<td>"+ (arFrequency[13]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>14</td>"+
                 "<td>"+arFrequency[14].toString()+"</td>"+
                 "<td>"+ (arFrequency[14].toString()/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>15</td>"+
                 "<td>"+arFrequency[15].toString()+"</td>"+
                 "<td>"+ (arFrequency[15]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
                 "<tr>"+
                     "<td>16</td>"+
                 "<td>"+arFrequency[16]+"</td>"+
                 "<td>"+ (arFrequency[16]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
                " <tr>"+
                    " <td>17</td>"+
                 "<td>"+arFrequency[17]+"</td>"+
                 "<td>"+ (arFrequency[17]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
                " <tr>"+
                     "<td>18</td>"+
                 "<td>"+arFrequency[18]+"</td>"+
                 "<td>"+ (arFrequency[18]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
             "</tbody>"
             break;
         case 4:
             document.getElementById("tblStats").innerHTML=
            "<thead>"+
                 "<tr>"+
                     "<th>Roll</th>"+
                     "<th>Frequency</th>"+
                    " <th>Percent of Total Rolls</th>"+
                 "</tr>"+
           "  </thead>"+
            " <tbody>"+
                 "<tr>" +
                 "<td>4</td>"+
                 "<td>" +arFrequency[4].toString() + "</td>"+
                 "<td>"+ (arFrequency[4]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>5</td>"+
                 "<td>" + arFrequency[5].toString() +"</td>"+
                 "<td>"+ (arFrequency[5]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>6</td>"+
                 "<td>" + arFrequency[6].toString() + "</td>"+
                 "<td>"+ ((arFrequency[6])/RollCounter).toFixed(3)+ "%</td>"+
                 " </tr>"+
                 "<tr>" +
                 "<td>7</td>" +
                 "<td>" + arFrequency[7].toString()+"</td>" +
                 "<td>"+ (arFrequency[7]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 " <td>8</td>" +
                 "<td>"+arFrequency[8].toString()+"</td>" +
                 "<td>"+ (arFrequency[8]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 "<td>9</td>" +
                 " <td>"+arFrequency[9].toString()+"</td>" +
                 "<td>"+ (arFrequency[9]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>10</td>" +
                 "<td>"+arFrequency[10].toString()+"</td>" +
                 "<td>"+ (arFrequency[10]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>11</td>" +
                 " <td>" +arFrequency[11].toString()+" </td>"+
                 "<td>"+ (arFrequency[11]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>12</td>"+
                 "<td>"+arFrequency[12].toString()+"</td>"+
                 "<td>"+ (arFrequency[12]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>13</td>"+
                 "<td>"+arFrequency[13].toString()+"</td>"+
                 "<td>"+ (arFrequency[13]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>14</td>"+
                 "<td>"+arFrequency[14].toString()+"</td>"+
                 "<td>"+ (arFrequency[14].toString()/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>15</td>"+
                 "<td>"+arFrequency[15].toString()+"</td>"+
                 "<td>"+ (arFrequency[15]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>16</td>"+
                 "<td>"+arFrequency[16]+"</td>"+
                 "<td>"+ (arFrequency[16]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 " <tr>"+
                 " <td>17</td>"+
                 "<td>"+arFrequency[17]+"</td>"+
                 "<td>"+ (arFrequency[17]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 " <tr>"+
                 "<td>18</td>"+
                 "<td>"+arFrequency[18]+"</td>"+
                 "<td>"+ (arFrequency[18]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                     "<td>19</td>"+
                    "<td>"+arFrequency[19].toString()+"</td>"+
                    "<td>"+ (arFrequency[19]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>20</td>"+
                 "<td>"+arFrequency[20].toString()+"</td>"+
                 "<td>"+ (arFrequency[20]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>21</td>"+
                 "<td>"+arFrequency[21].toString()+"</td>"+
                 "<td>"+ (arFrequency[21]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                     "<td>22</td>"+
                 "<td>"+arFrequency[22].toString()+"</td>"+
                 "<td>"+ (arFrequency[22]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                   "  <td>23</td>"+
                 "<td>"+arFrequency[23],toString()+"</td>"+
                 "<td>"+ (arFrequency[23]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                " <tr>"+
                    " <td>24</td>"+
                 "<td>"+arFrequency[24].toString()+"</td>"+
                 "<td>"+ (arFrequency[24]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
             "</tbody>"
             break;
         case 5:
             document.getElementById("tblStats").innerHTML=
            "<thead>" +
                 "<tr>" +
                     "<th>Roll</th>" +
                     "<th>Frequency</th>" +
                     "<th>Percent of Total Rolls</th>" +
                 "</tr>"+
            "</thead>" +
            "<tbody>" +
                 "<tr>" +
                 "<td>5</td>"+
                 "<td>" + arFrequency[5].toString() +"</td>"+
                 "<td>"+ (arFrequency[5]/RollCounter).toFixed(3)+ "%</td>"+
                 "</tr>"+
                 "<tr>"+
                 "<td>6</td>"+
                 "<td>" + arFrequency[6].toString() + "</td>"+
                 "<td>"+ ((arFrequency[6])/RollCounter).toFixed(3)+ "%</td>"+
                 " </tr>"+
                 "<tr>" +
                 "<td>7</td>" +
                 "<td>" + arFrequency[7].toString()+"</td>" +
                 "<td>"+ (arFrequency[7]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 " <td>8</td>" +
                 "<td>"+arFrequency[8].toString()+"</td>" +
                 "<td>"+ (arFrequency[8]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                 "<td>9</td>" +
                 " <td>"+arFrequency[9].toString()+"</td>" +
                 "<td>"+ (arFrequency[9]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>10</td>" +
                 "<td>"+arFrequency[10].toString()+"</td>" +
                 "<td>"+ (arFrequency[10]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>11</td>" +
                 " <td>" +arFrequency[11].toString()+" </td>"+
                 "<td>"+ (arFrequency[11]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>12</td>"+
                 "<td>"+arFrequency[12].toString()+"</td>"+
                 "<td>"+ (arFrequency[12]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>13</td>"+
                 "<td>"+arFrequency[13].toString()+"</td>"+
                 "<td>"+ (arFrequency[13]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>14</td>"+
                 "<td>"+arFrequency[14].toString()+"</td>"+
                 "<td>"+ (arFrequency[14].toString()/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>15</td>"+
                 "<td>"+arFrequency[15].toString()+"</td>"+
                 "<td>"+ (arFrequency[15]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>16</td>"+
                 "<td>"+arFrequency[16]+"</td>"+
                 "<td>"+ (arFrequency[16]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 " <tr>"+
                 " <td>17</td>"+
                 "<td>"+arFrequency[17]+"</td>"+
                 "<td>"+ (arFrequency[17]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 " <tr>"+
                 "<td>18</td>"+
                 "<td>"+arFrequency[18]+"</td>"+
                 "<td>"+ (arFrequency[18]/RollCounter).toFixed(3)+"%</td>" +
                 " </tr>"+
                 "<tr>"+
                 "<td>19</td>"+
                 "<td>"+arFrequency[19].toString()+"</td>"+
                 "<td>"+ (arFrequency[19]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>20</td>"+
                 "<td>"+arFrequency[20].toString()+"</td>"+
                 "<td>"+ (arFrequency[20]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>21</td>"+
                 "<td>"+arFrequency[21].toString()+"</td>"+
                 "<td>"+ (arFrequency[21]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "<td>22</td>"+
                 "<td>"+arFrequency[22].toString()+"</td>"+
                 "<td>"+ (arFrequency[22]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>"+
                 "<tr>"+
                 "  <td>23</td>"+
                 "<td>"+arFrequency[23].toString()+"</td>"+
                 "<td>"+ (arFrequency[23]/RollCounter).toFixed(3)+"%</td>" +
                "</tr>"+
                " <tr>"+
                " <td>24</td>"+
                "<td>"+arFrequency[24].toString()+"</td>"+
                "<td>"+ (arFrequency[24]/RollCounter).toFixed(3)+"%</td>" +
                " </tr>"+
                 "<tr>" +
                     "<td>25</td>" +
                    "<td>"+arFrequency[25].toString()+"</td>"+
                    "<td>"+ (arFrequency[25]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>26</td>" +
                    "<td>"+arFrequency[26].toString()+"</td>"+
                    "<td>"+ (arFrequency[26]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>27</td>" +
                    "<td>"+arFrequency[27].toString()+"</td>"+
                    "<td>"+ (arFrequency[27]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>28</td>" +
                     "<td>"+arFrequency[28].toString()+"</td>"+
                    "<td>"+ (arFrequency[28]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>29</td>" +
                     "<td>"+arFrequency[29].toString()+"</td>"+
                    "<td>"+ (arFrequency[29]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
                 "<tr>" +
                     "<td>30</td>" +
                    "<td>"+arFrequency[30].toString()+"</td>"+
                    "<td>"+ (arFrequency[30]/RollCounter).toFixed(3)+"%</td>" +
                 "</tr>" +
            "</tbody>"
    }
}//creates and displays the table based on the amount of dice rolled
function rollfunction(Rolls) {//"Roles" the dice based on the amount chosen
    let arDiceArray = [];
    for (let i = 0; i < Rolls; i++) {
        let Number = Math.floor(Math.random() * 6 + 1)

        arDiceArray.push(Number);
    }
    return arDiceArray;
}
function addRolls(Rolls) {//sums all the rolled dice togeather
    let Sum=0;
    for(let i=0;i<Rolls.length;i++)
    {
        Sum += parseInt(Rolls[i]);
    }
    return Sum;
}
function ImageDisplay(die){//displays the images of the dice
    switch (die) {
        case 1:
            var dice1 = new Image();
            dice1.src = "images/dice1.png";

            document.getElementById("diceArea").appendChild(dice1);
            break;

        case 2:


            var dice2 = new Image();
            dice2.src = "images/dice2.png";
            document.getElementById("diceArea").appendChild(dice2);
            break;
        case 3:


            var dice3 = new Image();
            dice3.src = "images/dice3.png";
            document.getElementById("diceArea").appendChild(dice3);
            break;
        case 4:


            var dice4 = new Image();
            dice4.src = "images/dice4.png";
            document.getElementById("diceArea").appendChild(dice4);
            break;
        case 5:


            var dice5 = new Image();
            dice5.src = "images/dice5.png";
            document.getElementById("diceArea").appendChild(dice5);
            break;
        case 6:


            var dice6 = new Image();
            dice6.src = "images/dice6.png";
            document.getElementById("diceArea").appendChild(dice6);
            break;
    }

}
function PastRolls()
{
          arPreviousRolls.push(Sum);
        arPreviousRolls.shift();
}
