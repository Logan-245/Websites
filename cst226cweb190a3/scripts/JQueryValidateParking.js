"use strict";
/*
 Filename:    JQueryValidateParking.js
 Student:     Logan Davis (CST226)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        3/25/2022
 Purpose: Provide the Script for parking
*/
$(function() {
    $("#parkingForm").validate({
        rules: {
            fullName: {
                minlength: 2
            },
            parkingPass: {
                minlength: 1,
                maxlength: 3
            },
            licensePlate: {
                minlength: 6,
                maxlength: 7
            }


        },
        messages: {
            fullName: {
                required: "Please enter a name"
            },
            parkingPass: {
                required: "You must specify an Parking Pass ID",
                digits: " Parking Pass ID must be a nonnegative integer between 1 and 999"
            },
            licensePlate: {
                required: "Please enter a Plate",
                Numbers: "Must Follow The Following convention ABC 123/ABC-123/ABC123"
            }
        },

    });
});




