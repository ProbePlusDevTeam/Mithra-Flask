// window['circular_value'] = document.querySelector(".circular_progress_enroll")
//                                         // var circular_progress = document.querySelector(".circular_progress_enroll")
//                                         window['progress_value'] = document.querySelector(".progress_value_enroll")
//                                         window ['progress_start_value'] = 80
//                                         // window ['progress_end_value'] = 80
//                                         // window ['speed'] = 10000
//                                         console.log(progress_start_value)
//                                         progress_value.textContent = `${progress_start_value}%`;
//                                         circular_value.style.background = `conic-gradient(#db6f30 ${progress_start_value * 3.6}deg, #e9e6e6  0deg)`;

// create a new div element 
// var circular_progress_enroll = document.createElement("div"); 
// // assigning class name to the new div
// // circular_progress_enroll.className = "circular_progress_enroll";
// document.getElementsByClassName("circular_progress_enroll").innerHTML = "aaa"
// var progress_value_enroll = document.createElement("div"); 
// // assigning class name to the new div
// progress_value_enroll.className = "progress_value_enroll";

// window['progress_value'] = document.querySelector(".progress_value_enroll")
// window ['progress_start_value'] = 0
// window ['progress_end_value'] = 80
// window ['speed'] = 100
// console.log(progress_start_value)
// progress_value.textContent = `${progress_start_value}%`;
// circular_value.style.background = `conic-gradient(#db6f30 ${progress_start_value * 3.6}deg, #e9e6e6  0deg)`;


// Characters = (
//     <>
//       <button>Star</button>
//       <button>Toad</button>
//       <button>x</button>
//     </>
//   );
//   return Characters


// document.getElementById("dashboard_data").addEventListener("load", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Iframe is loaded.";
//     console.log("aaa")
//     $.ajax({
//         type: "GET",
//         url: "/dashboard",
//         success: function (data) {
//             console.log(data)
//         }
//     });
// }

function enrollment_completed() {

    document.getElementById("enroll_completed_data").style.display = "block"
    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_completed_text").style.color = "#4EBDEC"
    document.getElementById("enrollment_completed_num").style.color = "#4EBDEC"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function enrollment_pending() {
    document.getElementById("enroll_pending_data").style.display = "block"
    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_pending_text").style.color = "#4EBDEC"
    document.getElementById("enrollment_pending_num").style.color = "#4EBDEC"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"

}

function enrollment_total() {
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"
    document.getElementById("all_data").style.display = "block"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#4EBDEC"
    document.getElementById("enrollment_total_num").style.color = "#4EBDEC"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function survey_completed() {
    document.getElementById("survey_completed_data").style.display = "block"
    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#4EBDEC"
    document.getElementById("survey_completed_text").style.color = "#4EBDEC"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function survey_pending() {
    document.getElementById("survey_pending_data").style.display = "block"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#4EBDEC"
    document.getElementById("survey_pending_num").style.color = "#4EBDEC"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function survey_total() {
    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "block"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#4EBDEC"
    document.getElementById("survey_total_text").style.color = "#4EBDEC"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function priority_low() {

    document.getElementById("priority_low_data").style.display = "block"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#4EBDEC"
    document.getElementById("priority_low_text").style.color = "#4EBDEC"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function priority_medium() {

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "block"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#4EBDEC"
    document.getElementById("priority_medium_text").style.color = "#4EBDEC"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function priority_high() {

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "block"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#4EBDEC"
    document.getElementById("priority_high_text").style.color = "#4EBDEC"
}

function module_completed() {

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "block"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#4EBDEC"
    document.getElementById("module_completed_text").style.color = "#4EBDEC"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function module_pending() {

    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "block"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "none"

    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#414040"
    document.getElementById("module_total_text").style.color = "#414040"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#4EBDEC"
    document.getElementById("module_pending_num").style.color = "#4EBDEC"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function module_total() {
    document.getElementById("priority_low_data").style.display = "none"
    document.getElementById("priority_medium_data").style.display = "none"
    document.getElementById("priority_high_data").style.display = "none"

    document.getElementById("survey_pending_data").style.display = "none"
    document.getElementById("survey_completed_data").style.display = "none"
    document.getElementById("survey_total_data").style.display = "none"

    document.getElementById("module_pending_data").style.display = "none"
    document.getElementById("module_completed_data").style.display = "none"
    document.getElementById("module_total_data").style.display = "block"


    document.getElementById("all_data").style.display = "none"
    document.getElementById("enroll_pending_data").style.display = "none"
    document.getElementById("enroll_completed_data").style.display = "none"

    document.getElementById("enrollment_total_text").style.color = "#414040"
    document.getElementById("enrollment_total_num").style.color = "#414040"

    document.getElementById("enrollment_pending_text").style.color = "#414040"
    document.getElementById("enrollment_pending_num").style.color = "#414040"

    document.getElementById("enrollment_completed_text").style.color = "#414040"
    document.getElementById("enrollment_completed_num").style.color = "#414040"

    document.getElementById("survey_pending_text").style.color = "#414040"
    document.getElementById("survey_pending_num").style.color = "#414040"

    document.getElementById("survey_completed_num").style.color = "#414040"
    document.getElementById("survey_completed_text").style.color = "#414040"

    document.getElementById("survey_total_num").style.color = "#414040"
    document.getElementById("survey_total_text").style.color = "#414040"

    document.getElementById("module_total_num").style.color = "#4EBDEC"
    document.getElementById("module_total_text").style.color = "#4EBDEC"

    document.getElementById("module_completed_num").style.color = "#414040"
    document.getElementById("module_completed_text").style.color = "#414040"

    document.getElementById("module_pending_text").style.color = "#414040"
    document.getElementById("module_pending_num").style.color = "#414040"

    document.getElementById("priority_low_num").style.color = "#414040"
    document.getElementById("priority_low_text").style.color = "#414040"

    document.getElementById("priority_medium_num").style.color = "#414040"
    document.getElementById("priority_medium_text").style.color = "#414040"

    document.getElementById("priority_high_num").style.color = "#414040"
    document.getElementById("priority_high_text").style.color = "#414040"
}

function shg_dropdown() {
    var dd = document.getElementById("shg_dropdown").value
    console.log(dd)
    sessionStorage.setItem('dd_value', document.getElementById("shg_dropdown").value);
    if (dd == "All Shg") {
        window.location.href = "/dashboard";
    }
    else {
        $.ajax({
            type: "POST",
            url: "/shg_dashboard/" + dd,
            success: function (data) {

                if (data) {
                    window.location.href = "/shg_dashboard/" + dd;

                    // document.getElementById("enrollment_completed_num").innerText="111"
                    // window.history.pushState("","","/shg_dashboard/"+dd)

                    // dd = sessionStorage.getItem('dd_value')
                    // window.onload=my_code();

                    // window.addEventListener("load", (event) => {
                    //     document.getElementById("shg_dropdown").value = sessionStorage.getItem('dd_value');
                    // });    
                    console.log(data)

                }
                if (document.referrer) {
                    window.onload = my_code();
                }

            }
        });
    }
}

window.onload = function () {
    if (window.location.pathname.split("/").pop() == "dashboard") {
        var selItem = 'All Shg';
        $('#shg_dropdown').val(selItem);
    }
    else {
        var selItem = sessionStorage.getItem("dd_value");
        $('#shg_dropdown').val(selItem);
        $('#shg_dropdown').change(function () {
            var selVal = $(this).val();
            sessionStorage.setItem("dd_value", selVal);
        });
    }
}
