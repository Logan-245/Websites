"use strict";
/*
 Filename:    Car_Race.js
 Student:     Logan Davis (CST226)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2/28/2022
Purpose: Provide the Script for Car_Race
*/
window.onload = function() {
    const cars = [
        new Car("Classic", "images/car1.png", 150),
        new Car("Bug", "images/car2.png", 350),
        new Car("Hatchback", "images/car3.png", 550),
        new Car("Sedan", "images/car4.png", 750)
    ];
    document.getElementById("reset").disabled = true;

    const pixel500 = new Race(cars);


    //pixel500.drawCars();



function Car (id,Source,vPos)
    {

       this.id=id;
        this.Source=Source;
        this.vPos=vPos;
        this.hPos=0;
        this.finishedRace=false;
        this.Wins=0;
        this.Image=draw();
        move();

        function ResetCar()
        {
            Car.hPos=0;
        }

        // document.getElementById(Car.id).innerHTML=draw()
        function draw ()
        {
            return "<img src=" +  Source + " />"
        }


        function  move()
        {
           //  Car.hPos += Math.floor(Math.random() * 100) ;//a number between 1 and 4 will be generated to determine "speed"
            //meaning that if a 1 is generated it will take a car 1 sec to finish

             if (Car.hPos>1000)
             {
                 Car.finishedRace=true
             }


        }




    }
}


function Race(ArrayOfCars)
{
    let numRaces;
    let Places=[4];
    Race.carArray=ArrayOfCars;
    Race.raceOver=false;
    Race.standings=Places
    Race.numCarsDone=0;
    Race.totalRaces=0;
    drawCars();


    function drawCars()
    {

        for(let i =0; i<ArrayOfCars.length; i++) {
            document.getElementById(Race.carArray[i].id).innerHTML = Race.carArray[i].Image;
            document.getElementById(Race.carArray[i].id).style.top=Race.carArray[i].vPos+"px";

        }
    }

        document.getElementById("Start").onclick = moveCars

    let myInterval

    let Acelertion = 1;
    function moveCars()
    {
        for(let i =1; i<ArrayOfCars.length; i++) {
           Race.carArray[i].hPos = Math.floor(Math.random() * 100)
        }


        document.getElementById("Start").disabled=true;


         myInterval =setInterval(Test,1);


    }



    function Test()
    {

        for(let i =0; i<ArrayOfCars.length; i++)
        {
            let pos = Race.carArray[i].hPos+Acelertion
            document.getElementById(Race.carArray[i].id).style.left = pos + "px";
            if(pos>1000)
            {
                clearInterval(myInterval)
                document.getElementById("reset").disabled=false;
                Race.carArray[i].Wins++;
                window.alert("STANDINGS\n Position 1 "+Race.carArray[i].id)
                // window.alert(Race.carArray[i].id + " Won\n the current standings are:\n Classic " + Race.carArray[0].Wins + "\n Bug: "+ Race.carArray[1].Wins + "\n Hatchback: "+ Race.carArray[2].Wins + "\n sedan: "+ Race.carArray[3].Wins);
                numRaces++;

            }
         }
        Acelertion++;

    }
    document.getElementById("btnCick").onclick=function () {
        window.alert("Current Standings for" + numRaces + "Races\nClassic " + Race.carArray[0].Wins + "\n Bug: " + Race.carArray[1].Wins + "\n Hatchback: " + Race.carArray[2].Wins + "\n sedan: " + Race.carArray[3].Wins);

    }
    document.getElementById("reset").onclick=function ()
    {
        numRaces++;
        for(let i =0; i<ArrayOfCars.length; i++)
        {
             Race.carArray[i].hPos=0;
            document.getElementById(Race.carArray[i].id).style.left = 0 + "px";

        }
        document.getElementById("Start").disabled=false;
    }

}

