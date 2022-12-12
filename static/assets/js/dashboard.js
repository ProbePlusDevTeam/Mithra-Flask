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


document.getElementById("dashboard_data").addEventListener("load", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Iframe is loaded.";
    console.log("aaa")
    $.ajax({
        type: "GET",
        url: "/dashboard",
        success: function (data) {
            console.log(data)
        }
    });
}
