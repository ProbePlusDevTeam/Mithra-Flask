function coordinatorEditEnable() {
  var x = document.getElementById("editEnable");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var fname = document.getElementById("editcofirst_name").disabled;
  var lname = document.getElementById("editcolast_name").disabled;
  var number = document.getElementById("editconumber").disabled;
  var email = document.getElementById("editcoemail").disabled;
  var age = document.getElementById("editcoage").disabled;
  var male = document.getElementById("male").disabled;
  var female = document.getElementById("female").disabled;
  var others = document.getElementById("other").disabled;

  if (fname) {
    document.getElementById("editcofirst_name").disabled = false;
  }
  else {
    document.getElementById("editcofirst_name").disabled = true;
  }

  if (lname) {
    document.getElementById("editcolast_name").disabled = false;
  }
  else {
    document.getElementById("editcolast_name").disabled = true;
  }

  if (number) {
    document.getElementById("editconumber").disabled = false;
  }
  else {
    document.getElementById("editconumber").disabled = true;
  }

  if (email) {
    document.getElementById("editcoemail").disabled = false;
  }
  else {
    document.getElementById("editcoemail").disabled = true;
  }

  if (age) {
    document.getElementById("editcoage").disabled = false;
  }
  else {
    document.getElementById("editcoage").disabled = true;
  }
  if (male) {
    document.getElementById("male").disabled = false;
  }
  else {
    document.getElementById("male").disabled = true;
  }
  if (female) {
    document.getElementById("female").disabled = false;
  }
  else {
    document.getElementById("female").disabled = true;
  }
  if (others) {
    document.getElementById("other").disabled = false;
  }
  else {
    document.getElementById("other").disabled = true;
  }
}

function investigatorEditEnable() {
  var x = document.getElementById("editinEnable");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var fname = document.getElementById("editinfirst_name").disabled;
  var lname = document.getElementById("editinlast_name").disabled;
  var number = document.getElementById("editinnumber").disabled;
  var email = document.getElementById("editinemail").disabled;
  var age = document.getElementById("editinage").disabled;
  var male = document.getElementById("male").disabled;
  var female = document.getElementById("female").disabled;
  var other = document.getElementById("other").disabled;


  if (fname) {
    document.getElementById("editinfirst_name").disabled = false;
  }
  else {
    document.getElementById("editinfirst_name").disabled = true;
  }


  if (lname) {
    document.getElementById("editinlast_name").disabled = false;
  }
  else {
    document.getElementById("editinlast_name").disabled = true;
  }

  if (number) {
    document.getElementById("editinnumber").disabled = false;
  }
  else {
    document.getElementById("editinnumber").disabled = true;
  }

  if (email) {
    document.getElementById("editinemail").disabled = false;
  }
  else {
    document.getElementById("editinemail").disabled = true;
  }

  if (age) {
    document.getElementById("editinage").disabled = false;
  }
  else {
    document.getElementById("editinage").disabled = true;
  }
  if (male) {
    document.getElementById("male").disabled = false;
  }
  else {
    document.getElementById("male").disabled = true;
  }
  if (female) {
    document.getElementById("female").disabled = false;
  }
  else {
    document.getElementById("female").disabled = true;
  }
  if (other) {
    document.getElementById("other").disabled = false;
  }
  else {
    document.getElementById("other").disabled = true;
  }

}



function researcherEditEnable() {
  var x = document.getElementById("editreEnable");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var fname = document.getElementById("editrefirst_name").disabled;
  var lname = document.getElementById("editrelast_name").disabled;
  var number = document.getElementById("editrenumber").disabled;
  var email = document.getElementById("editreemail").disabled;
  var age = document.getElementById("editreage").disabled;
  var male = document.getElementById("male").disabled;
  var female = document.getElementById("female").disabled;
  var others = document.getElementById("other").disabled;
  if (fname) {
    document.getElementById("editrefirst_name").disabled = false;
  }
  else {
    document.getElementById("editrefirst_name").disabled = true;
  }


  if (lname) {
    document.getElementById("editrelast_name").disabled = false;
  }
  else {
    document.getElementById("editrelast_name").disabled = true;
  }

  if (number) {
    document.getElementById("editrenumber").disabled = false;
  }
  else {
    document.getElementById("editrenumber").disabled = true;
  }

  if (email) {
    document.getElementById("editreemail").disabled = false;
  }
  else {
    document.getElementById("editreemail").disabled = true;
  }

  if (age) {
    document.getElementById("editreage").disabled = false;
  }
  else {
    document.getElementById("editreage").disabled = true;
  }

  if (male) {
    document.getElementById("male").disabled = false;
  }
  else {
    document.getElementById("male").disabled = true;
  }
  if (female) {
    document.getElementById("female").disabled = false;
  }
  else {
    document.getElementById("female").disabled = true;
  }
  if (others) {
    document.getElementById("other").disabled = false;
  }
  else {
    document.getElementById("other").disabled = true;
  }

}


function enableEditList(name) {
  var btnId = name
  var a = document.getElementById("editB" + name).getAttribute('value');
  var x = document.getElementById("side_edit" + name);
  var y = document.getElementById("full_edit" + name);
  var z = document.getElementById("loc-edit-dis" + name);
  if (name == a) {
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      // z.style.display = "none";
    }
    else {
      x.style.display = "block";
      y.style.display = "none";
      // z.style.display = "block"
    }
  }
  else if (name != a) {
    x.style.display = "none";
    y.style.display = "none";
    // z.style.display = "none";
  }


}

function addMoreSurvey() {
  $('.subDiv').parent('div.parentDiv').append($('.parentDiv').children('div:first').html());
}

function addMoreQuesOptions() {
  $('.echildQues').parent('div.eparentQues').append($('.eparentQues').children('div:first').html());
  $('.kchildQues').parent('div.kparentQues').append($('.kparentQues').children('div:first').html());

}

function addMoreMapping() {

  $('.childWeeks').parent('div.parentWeeks').append($('.parentWeeks').children('div:first').html());
  week_count += 1
  document.getElementById("week_no").innerHTML = "week " + week_count

  var mod1 = document.getElementById("mod1")
  var mod = document.getElementById("mod")
  var div_week = document.getElementById("div_week")
  var week_no = document.getElementById("week_no")
  // if (mod.style.display === "none") {
  //   mod.style.display = "block";
  // } 

  // var d = document.getElementById('div_week');
  // d.parentNode.appendChild(d);
  if (mod.style.display === "none") {
    mod.style.display = "block";
    div_week.style.visibility = "visible"
    week_no.style.display = "block"
  }


  // if (week_no.style.display === "none") {
  //   week_no.style.display = "block";
  // } 
  // if(div_week.style.display == "none"){
  //   div_week.style.display = "block";

  // }

  // const firstList = document.getElementById('#weekss');
  // // take the first child element
  // const everest = firstList.firstElementChild;
  // // get the second list
  // const secondList = document.getElementById('#div_week');
  // // append the everest to the second list
  // secondList.appendChild(everest)

}

function viewQuesOptions1() {
  var single_q = document.getElementById("single_q").value;
  var parentQues = document.getElementById("parent_all_ques")
  // var multiple_q = document.getElementById("multiple_q").value;
  // var text_q = document.getElementById("text_q").value;
  // // var date_q = document.getElementById("date_q").value;
  // // var numeric_q = document.getElementById("numeric_q").value;
  var parentQues = document.getElementById("parent_all_ques")
  var value
  if (single_q == "single_select") {
    parentQues.style.display = "block";
  }
  // if("multiple"){
  //   parentQues.style.display = "block";
  // }
  // if("text"){
  //   parentQues.style.display = "none";
  // }
  // if(value == "text"){
  //   parentQues.style.display = "none";
  // }
  // if(value == "text"){
  //   parentQues.style.display = "none";
  // }


}

function viewQuesOptions2() {
  var multiple_q = document.getElementById("multiple_q").value;
  var parentQues = document.getElementById("parent_all_ques")

  if (multiple_q == "multi_select") {
    parentQues.style.display = "block";
  }

}

function viewQuesOptions3() {

  var text_q = document.getElementById("text_q").value;
  var parentQues = document.getElementById("parent_all_ques")

  if (text_q == "text") {
    parentQues.style.display = "none";
  }

}

function viewQuesOptions4() {

  var date_q = document.getElementById("date_q").value;
  var parentQues = document.getElementById("parent_all_ques")

  if (date_q == "date") {
    parentQues.style.display = "none";
  }

}

function viewQuesOptions5() {

  var numeric_q = document.getElementById("numeric_q").value;
  var parentQues = document.getElementById("parent_all_ques")

  if (numeric_q == "numeric") {
    parentQues.style.display = "none";
  }

}

function phValidation() {
  var phNo = document.getElementById("phone").value
  document.getElementById("add-cord-phno").style.display = "none"

  if (phNo.length != 10) {
    document.getElementById("coPhError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("coPhError").innerText = ""
  }
}

function editphValidation() {
  var phNo = document.getElementById("editconumber").value
  document.getElementById("edit-cord-phno").style.display = "none"

  if (phNo.length != 10) {
    document.getElementById("coPhError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("coPhError").innerText = ""
  }
}

function resPhValidation() {
  var phNo = document.getElementById("number").value
  document.getElementById("resercher-phnumber").style.display = "none"

  if (phNo.length != 10) {
    document.getElementById("resPhError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("resPhError").innerText = ""
  }
}

function editResPhValidation() {
  var phNo = document.getElementById("editrenumber").value
  if (phNo.length != 10) {
    document.getElementById("edit-res-phnumberError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("edit-res-phnumberError").innerText = ""
  }
}

function invPhValidation() {
  var phNo = document.getElementById("number").value
  document.getElementById("investigator-phno").style.display = "none"

  if (phNo.length != 10) {
    document.getElementById("insPhError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("insPhError").innerText = ""
  }
}

function editInvPhValidation() {
  var phNo = document.getElementById("editinnumber").value
  if (phNo.length != 10) {
    document.getElementById("edit-ins-phnumberError").innerText = "Phone number must be 10 digits"
  }
  else {
    document.getElementById("edit-ins-phnumberError").innerText = ""
  }
}


// $(function() {
//   $( "#dob" ).datepicker({  maxDate: new Date() });
//  });



// ======================== Login function ============================

function login() {
  var user_name = document.getElementById("username").value
  var password = document.getElementById("password").value

  var login_data = [
    {
      "user_name": user_name,
      "password": password
    }
  ];

  $.ajax({
    type: "POST",
    url: "/login_check",
    data: JSON.stringify(login_data),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log("Result:");
      console.log(data);

      // if (data.success){
      //   $("#crds").load(" #crds > *");
      // }
      // $('#coordinators').html($('#coordinators',data).html());
      // $('#coordinators').load("role/coordinator/coordinators.html # coordinators");

    }
  });

}


// ======================== End Login function ========================

// ====================== coordinator functions ====================



function addCoordinator() {

  var firstName = document.getElementById("firstName").value
  var lastName = document.getElementById("lastName").value
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("dob").value
  var number = document.getElementById("phone").value
  var email = document.getElementById("email").value
  var username = document.getElementById("username").value
  var password = document.getElementById('password').value
  var confpwd = document.getElementById('confirmPass').value;
  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var others = document.getElementById("Others")

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  // var passRegex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)
  var passRegex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

  let fError = false
  let lError = false
  let pError = false
  let pcError = false
  let pmError = false
  let aError = false


  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day

  console.log(age)
  console.log(month)
  console.log(day)
  console.log(year)
  console.log(oldDate)
  console.log(minDate)

  if (firstName.length == "") {
    document.getElementById("coFnameError").innerText = "Please enter valid details"
  }
  else {
    document.getElementById("coFnameError").innerText = ""
  }
  if (numbers.test(firstName) || specialChar.test(firstName)) {
    document.getElementById("add-cord-fname").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    fError = false
    document.getElementById("add-cord-fname").innerText = ""
  }

  if (lastName.length < 1) {
    document.getElementById("coLnameError").innerText = "Please enter valid details"
  }
  else {
    document.getElementById("coLnameError").innerText = ""
  }
  if (numbers.test(lastName) || specialChar.test(lastName)) {
    document.getElementById("add-cord-lname").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    lError = false
    document.getElementById("add-cord-lname").innerText = ""
  }

  if (age == "") {
    document.getElementById("add-cord-age").innerText = "Please enter valid details"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("add-cord-age").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("add-cord-age").innerText = ""
    aError = false
  }
  if (regex.test(email)) {
    document.getElementById("add-cord-email").innerText = ""
  }
  else {
    document.getElementById("add-cord-email").innerText = "Please enter a valid email Address !"
  }
  // if (username.length < 1) {
  //   document.getElementById("add-cord-uname").innerText = "Please enter valid details"
  // }
  // else {
  //   document.getElementById("add-cord-uname").innerText = ""
  // }
  if (number.length == "") {
    document.getElementById("add-cord-phno").innerText = "Please enter valid phone mumber !"
  }
  else {
    document.getElementById("add-cord-phno").innerText = ""
  }
  if (document.getElementById('male').checked == false && document.getElementById('female').checked == false && document.getElementById('other').checked == false) {
    document.getElementById("researcher-gender").innerText = "Please select a gender"
  }
  else {
    document.getElementById("researcher-gender").innerText = ""
  }
  if (password.length < 8) {
    document.getElementById("add-cord-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else if (!reg.test(password)) {
    document.getElementById("add-cord-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("add-cord-pwd").innerText = ""
    pError = false
  }
  if (confpwd == "") {
    document.getElementById("add-cord-confpwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pcError = true
  }
  else if (passRegex.test(confpwd)) {
    document.getElementById("add-cord-confpwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("add-cord-confpwd").innerText = ""
    pcError = false
  }
  if (confpwd !== password) {
    document.getElementById("add-cord-confpwd-match").innerText = "Passwords doesn't match"
    pmError = true
  }
  else {
    document.getElementById("add-cord-confpwd-match").innerText = ""
    pmError = false
  }



  if (firstName.length > 1 && lastName.length > 1 && regex.test(email) && number.length == 10 && gender && password == confpwd && !fError && !lError && !pError && !pcError && !pmError && !aError) {

    var server_data = [
      {
        "first_name": firstName,
        "last_name": lastName,
        "gender": gender,
        "age": age,
        "number": number,
        "email": email,
        "user_name": email,
        "password": password
      }
    ];

    console.log(server_data)

    $.ajax({
      type: "POST",
      url: "/addcoordinator",
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data.message);
        if (data.message == "success") {
          $("#addcoordinator").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "User added successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/coordinators";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("userNameError").innerText = "Email ID already exist"
          document.getElementById("coPhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("coPhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("userNameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }
    });

  }
}

function addCoordinatorcheckPwd() {
  var passwd = document.getElementById('password').value;
  var confpwd = document.getElementById('confirmPass').value;
  if (confpwd !== passwd) {
    document.getElementById("add-cord-confpwd").innerText = "Passwords doesn't match"
  }
}

function editCoordinatorData() {
  var cname = document.getElementById("coname").value
  var first_name = document.getElementById("editcofirst_name").value
  var last_name = document.getElementById("editcolast_name").value
  var number = document.getElementById("editconumber").value
  var email = document.getElementById("editcoemail").value
  var age = document.getElementById("editcoage").value
  var status = document.querySelector('input[name="editcostatus"]:checked').value
  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  let fError = false
  let lError = false
  let aError = false

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day


  if (first_name.length < 1) {
    document.getElementById("edit-cord-fnameError").innerText = "Please enter valid detail"
  }
  else {
    document.getElementById("edit-cord-fnameError").innerText = ""
  }
  if (numbers.test(first_name) || specialChar.test(first_name)) {
    document.getElementById("edit-cord-fname").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    document.getElementById("edit-cord-fname").innerText = ""
    fError = false
  }

  if (last_name.length < 1) {
    document.getElementById("edit-cord-lnameError").innerText = "Please enter valid detail"
  }
  else {
    document.getElementById("edit-cord-lnameError").innerText = ""
  }
  if (numbers.test(last_name) || specialChar.test(last_name)) {
    document.getElementById("edit-cord-lname").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    lError = false
    document.getElementById("edit-cord-lname").innerText = ""
  }

  if (number.length !== 10) {
    document.getElementById("edit-cord-phno").innerText = "Phone number should have 10 digits only"
  }
  else {
    document.getElementById("edit-cord-phno").innerText = ""
  }
  if (age == "") {
    document.getElementById("edit-cord-age").innerText = "Please pick a date"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("edit-cord-age").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("edit-cord-age").innerText = ""
    aError = false
  }
  if (regex.test(email)) {
    document.getElementById("edit-cord-email").innerText = ""
  }
  else {
    document.getElementById("edit-cord-email").innerText = "Please enter a valid email Address !"
  }

  if (first_name.length > 1 && last_name.length > 0 && number.length == 10 && regex.test(email) && gender && !fError && !lError && !aError) {
    var editCo_data = [
      {
        "first_name": first_name,
        "last_name": last_name,
        "number": number,
        "age": age,
        "email": email,
        "gender": gender,
        "active": status
      }
    ];

    $.ajax({
      type: "PUT",
      url: "/editcoordinator/" + cname,
      data: JSON.stringify(editCo_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data.message);
        if (data.message == "success") {
          Swal.fire({
            icon: 'success',
            title: "User updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/coordinators";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("userNameError").innerText = "Email ID already exist"
          document.getElementById("coPhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("coPhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("userNameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }

    });
  }
}

// ====================== End coordinator functions ====================



// ====================== researcher functions ====================

function addResearcher() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  // var fullName = firstName +" "+ lastName
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("dob").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById('password').value;
  var confpwd = document.getElementById('confirm').value;
  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var others = document.getElementById("Others")

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  // var passRegex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)
  var passRegex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day

  let fError = false
  let lError = false
  let pError = false
  let pcError = false
  let pmError = false
  let aError = false

  if (document.getElementById('male').checked == false && document.getElementById('female').checked == false && document.getElementById('other').checked) {
    document.getElementById("researcher-gender").innerText = "Please select a gender"
  }
  else {
    document.getElementById("researcher-gender").innerText = ""
  }
  if (firstName.length < 1) {
    document.getElementById("resercher-first-name").innerText = "Please enter valid data !"
  }
  else {
    document.getElementById("resercher-first-name").innerText = ""
  }

  if (numbers.test(firstName) || specialChar.test(firstName)) {
    document.getElementById("researcherFNameError").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    document.getElementById("researcherFNameError").innerText = ""
    fError = false
  }

  if (lastName.length < 1) {
    document.getElementById("resercher-last-name").innerText = "Please enter valid data !"
  }
  else {
    document.getElementById("resercher-last-name").innerText = ""
  }

  if (numbers.test(lastName) || specialChar.test(lastName)) {
    document.getElementById("researcherLNameError").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    lError = false
    document.getElementById("researcherLNameError").innerText = ""
  }

  if (number.length !== 10) {
    document.getElementById("resercher-phnumber").innerText = "Please enter valid phone number !"
  }
  else {
    document.getElementById("resercher-phnumber").innerText = ""
  }
  if (regex.test(email)) {
    document.getElementById("resercher-email").innerText = ""
  }
  else {
    document.getElementById("resercher-email").innerText = "Please enter a valid email Address !"
  }
  if (username.length < 1) {
    document.getElementById("resercher-username").innerText = "Please enter valid data !"
  }
  else {
    document.getElementById("resercher-username").innerText = ""
  }
  if (age == "") {
    document.getElementById("researcher-dob").innerText = "Please select DOB"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("researcher-dob").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("researcher-dob").innerText = ""
    aError = false
  }

  if (password == "") {
    document.getElementById("researcher-password").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else if (!reg.test(password)) {
    document.getElementById("researcher-password").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("researcher-password").innerText = ""
    pError = false
  }
  if (confpwd == "") {
    document.getElementById("researcher-conf-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pcError = true
  }
  else if (!reg.test(confpwd)) {
    document.getElementById("researcher-conf-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("researcher-conf-pwd").innerText = ""
    pcError = false
  }

  if (confpwd !== password) {
    document.getElementById("researcher-conf-pwd-match").innerText = "Passwords doesn't match"
    pmError = true
  }
  else {
    document.getElementById("researcher-conf-pwd-match").innerText = ""
    pmError = false
  }


  if (regex.test(email) && number.length == 10 && lastName.length > 1 && firstName.length > 1 && password == confpwd && gender && !lError && !fError && !pError && !pcError && !aError) {
    var researcher_data = [
      {
        "first_name": firstName,
        "last_name": lastName,
        "gender": gender,
        "age": age,
        "number": number,
        "email": email,
        "user_name": username,
        "password": password
      }
    ];

    $.ajax({
      type: "POST",
      url: "/addresearcher",
      data: JSON.stringify(researcher_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data);
        if (data.message == "success") {
          $("#addreseacher").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "User added successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/researchers";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("resercherUsernameError").innerText = "Email ID already exist"
          document.getElementById("rePhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("rePhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("resercherUsernameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }
    });
    // $('#addreseacher').modal('hide');
    // window.location.reload();

    // })
  }
  else {
    alert("Please check the fields")
  }
}

function addresearcherPassCheck() {
  var passwd = document.getElementById('password').value;
  var confpwd = document.getElementById('confirm').value;
  if (confpwd !== passwd) {
    document.getElementById("researcher-conf-pwd").innerText = "Passwords doesn't match"
  }
}


function editResearcherData() {
  var rname = document.getElementById("rename").value
  // var gender = document.getElementById("editcogender").value

  var first_name = document.getElementById("editrefirst_name").value
  var last_name = document.getElementById("editrelast_name").value
  var number = document.getElementById("editrenumber").value
  var email = document.getElementById("editreemail").value
  var age = document.getElementById("editreage").value
  var status = document.querySelector('input[name="editrestatus"]:checked').value

  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  let fError = false
  let lError = false
  let aError = false

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day

  if (first_name.length < 1) {
    document.getElementById("edit-res-fname").innerText = "Please enter valid data !"
  }
  else {
    document.getElementById("edit-res-fname").innerText = ""
  }
  if (numbers.test(first_name) || specialChar.test(first_name)) {
    document.getElementById("edit-res-fname").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    fError = false
    document.getElementById("edit-res-fname").innerText = ""
  }

  if (last_name.length < 1) {
    document.getElementById("edit-res-lname").innerText = "Please enter valid data !"
  }
  else {
    document.getElementById("edit-res-lname").innerText = ""
  }
  if (numbers.test(last_name) || specialChar.test(last_name)) {
    document.getElementById("edit-res-lname").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    lError = false
    document.getElementById("edit-res-fname").innerText = ""
  }

  if (number.length == 10) {
    document.getElementById("edit-res-phnumber").innerText = ""
  }
  else {
    document.getElementById("edit-res-phnumber").innerText = "Please enter valid phone mumber !"
  }
  if (regex.test(email)) {
    document.getElementById("edit-res-email").innerText = ""
  }
  else {
    document.getElementById("edit-res-email").innerText = "Please enter a valid email Address !"
  }
  // if(document.getElementById('male').checked == false &&  document.getElementById('female').checked == false && document.getElementById('other').checked)
  // {
  //   document.getElementById("researcher-gender").innerText = "Please select a gender"
  // }
  if (age == "") {
    document.getElementById("edit-res-age").innerText = "Please select DOB"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("edit-res-age").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("edit-res-age").innerText = ""
    aError = false
  }

  if (first_name.length > 1 && last_name.length > 1 && number.length == 10 && regex.test(email) && gender && age !== "" && !fError && !lError && !aError) {
    var editRe_data = [
      {
        "first_name": first_name,
        "last_name": last_name,
        "number": number,
        "age": age,
        "email": email,
        "gender": gender,
        "active": status
      }
    ];
    $.ajax({
      type: "PUT",
      url: "/editresearcher/" + rname,
      data: JSON.stringify(editRe_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: 'success',
            title: "User updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/researchers";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("resercherUsernameError").innerText = "Email ID already exist"
          document.getElementById("rePhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("rePhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("resercherUsernameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }
    });
  }
}


// ====================== End researcher functions ====================




// ====================== Studyinvestigator functionalities ====================

function addInvestigator() {

  var firstName = document.getElementById("firstName").value
  var lastName = document.getElementById("lastName").value
  // var fullName = firstName + " " + lastName
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("dob").value
  var number = document.getElementById("number").value
  var email = document.getElementById("email").value
  var username = document.getElementById("username").value
  var password = document.getElementById('password').value
  var confpwd = document.getElementById("confirm").value
  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  var passRegex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')
  // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day

  let fError = false
  let lError = false
  let pcError = false
  let pError = false
  let pmError = false
  let aError = false

  if (firstName.length < 1 || firstName.length > 24) {
    document.getElementById("investigator-fname").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("investigator-fname").innerText = ""
  }

  if (numbers.test(firstName) || specialChar.test(firstName)) {
    document.getElementById("investFnameError").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    document.getElementById("investFnameError").innerText = ""
    fError = false
  }

  if (lastName.length < 1) {
    document.getElementById("investigator-lname").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("investigator-lname").innerText = ""
  }

  if (numbers.test(lastName) || specialChar.test(lastName)) {
    document.getElementById("investLnameError").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    document.getElementById("investLnameError").innerText = ""
    lError = false
  }

  if (number.length != 10) {
    document.getElementById("investigator-phno").innerText = "Please enter valid number"
  }
  else {
    document.getElementById("investigator-phno").innerText = ""
  }
  if (username.length < 1) {
    document.getElementById("investigator-username").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("investigator-username").innerText = ""
  }
  if (regex.test(email)) {
    document.getElementById("investigator-email").innerText = ""
  }
  else {
    document.getElementById("investigator-email").innerText = "Please enter valid email"
  }
  if (age == "") {
    document.getElementById("investigator-dob").innerText = "Please select DOB"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("investigator-dob").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("investigator-dob").innerText = ""
    aError = false
  }

  if (password == "") {
    document.getElementById("investigator-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else if (!reg.test(password)) {
    document.getElementById("investigator-pwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("investigator-pwd").innerText = ""
    pError = false
  }
  if (confpwd == "") {
    document.getElementById("investigator-confpwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pcError = true
  }
  else if (passRegex.test(confpwd)) {
    document.getElementById("investigator-confpwd").innerText = "Password must contain 8 characters and special character and capital letter"
    pError = true
  }
  else {
    document.getElementById("investigator-confpwd").innerText = ""
    pcError = false
  }
  if (confpwd !== password) {
    document.getElementById("investigator-confpwd-match").innerText = "Passwords doesn't match"
    pmError = true
  }
  else {
    document.getElementById("investigator-confpwd-match").innerText = ""
    pmError = false
  }

  if (firstName.length < 24 && lastName.length > 1 && number.length == 10 && password == confpwd && regex.test(email) && gender && !fError && !lError && !pError && !pcError && !pmError && !aError) {

    var investigator_data = [
      {
        "first_name": firstName,
        "last_name": lastName,
        "gender": gender,
        "age": age,
        "number": number,
        "email": email,
        "user_name": username,
        "password": password
      }
    ];
    $.ajax({
      type: "POST",
      url: "/Addstudyinvestigator",
      data: JSON.stringify(investigator_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          $("#addInvestigator").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "User added successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/Studyinvestigators";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("investUsernameError").innerText = "Email ID already exist"
          document.getElementById("invPhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("invPhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("investUsernameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }
    });
  }
  else {
    alert("Please check the fields")
  }
  // e.preventDefault()
  // })
}
function investigatorpwdcheck() {
  var password = document.getElementById('password').value
  var confpwd = document.getElementById("confirm").value

}



function editInvestigatorData() {
  var iname = document.getElementById("inname").value
  // var gender = document.getElementById("editcogender").value

  var first_name = document.getElementById("editinfirst_name").value
  var last_name = document.getElementById("editinlast_name").value
  var number = document.getElementById("editinnumber").value
  var email = document.getElementById("editinemail").value
  var age = document.getElementById("editinage").value
  var status = document.querySelector('input[name="editinstatus"]:checked').value
  // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  let fError = false
  let lError = false
  let aError = false

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  oldDate = year - 120 + "-" + month + "-" + day

  minDate = year - 18 + "-" + month + "-" + day

  if (first_name.length < 1) {
    document.getElementById("investigator-fname").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("investigator-fname").innerText = ""
  }
  if (numbers.test(first_name) || specialChar.test(first_name)) {
    document.getElementById("investigator-fname").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    document.getElementById("investigator-fname").innerText = ""
    fError = false
  }


  if (last_name.length < 1) {
    document.getElementById("investigator-lname").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("investigator-lname").innerText = ""
  }
  if (numbers.test(last_name) || specialChar.test(last_name)) {
    document.getElementById("investigator-lname").innerText = "Special characters or numbers are not allowed"
    lError = true
  }
  else {
    document.getElementById("investigator-lname").innerText = ""
    lError = false
  }


  if (number.length !== 10) {
    document.getElementById("investigator-phno").innerText = "Only 10 digits accepted"
  }
  else {
    document.getElementById("investigator-phno").innerText = ""
  }
  if (regex.test(email)) {
    document.getElementById("investigator-email").innerText = ""
  }
  else {
    document.getElementById("investigator-email").innerText = "Please enter valid email address"
  }
  if (age == "") {
    document.getElementById("investigator-dob").innerText = "Please select a valid date"
    aError = true
  }
  else if (age > newdate || age < oldDate || age > minDate) {
    document.getElementById("investigator-dob").innerText = "Invalid date of birth"
    aError = true
  }
  else {
    document.getElementById("investigator-dob").innerText = ""
    aError = false
  }

  // console.log(fError )
  // console.log(lError)
  // console.log(aError)

  if (first_name.length > 1 && last_name.length > 1 && number.length == 10 && regex.test(email) && !fError && !lError && !aError) {
    var editIn_data = [
      {
        "first_name": first_name,
        "last_name": last_name,
        "number": number,
        "age": age,
        "email": email,
        "gender": gender,
        "active": status
      }
    ];

    $.ajax({
      type: "PUT",
      url: "/Editstudyinvestigator/" + iname,
      data: JSON.stringify(editIn_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: 'success',
            title: "User updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/Studyinvestigators";
          });
        }
        else if (data.message == "user_name or email_id taken") {
          document.getElementById("investUsernameError").innerText = "Email ID already exist"
          document.getElementById("invPhoneNumberExistError").innerText = ""
        }
        else if (data.message == "phone number taken") {
          document.getElementById("invPhoneNumberExistError").innerText = "Phone number already exist"
          document.getElementById("investUsernameError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again")
        }
      }
    });
  }
}

// ====================== End Studyinvestigator functionalities ====================



// ======================  Location functionalities ====================


function addLocation() {
  var panchayat = document.getElementById("panchayat").value
  var village = document.getElementById("village").value
  var shg = document.getElementById("shg").value
  // var arm = document.querySelector('input[name="locationarm"]:checked').value;
  var locCo = document.getElementById("locCoordinator").value
  var locRe = document.getElementById("locResearcher").value
  var location_id = document.getElementById("locationID").value

  let errors = false

  var specialChar = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  var numbers = new RegExp(/\d/)
  let fError = false
  let lError = false
  var err1 = false
  var err2 = false
  var err3 = false
  var err4 = false
  var err5 = false

  if (location_id == "") {
    document.getElementById("locIdError").innerText = "Please enter a valid data"
    err1 = true
  }
  else if (location_id.length !== 3) {
    document.getElementById("locIdError").innerText = "Location ID must be 3 letters"
    err1 = true
    // alert("aaa")
  }
  else {
    document.getElementById("locIdError").innerText = ""
    err1 = false
  }

  if (panchayat == "" || panchayat.length < 3) {
    document.getElementById("panchayatrequired").innerText = "Please enter a valid data"
    err2 = true
  }
  else {
    document.getElementById("panchayatrequired").innerText = ""
    err2 = false
  }
  if (numbers.test(panchayat) || specialChar.test(panchayat)) {
    document.getElementById("panchayatNameError").innerText = "Special characters or numbers are not allowed"
    fError = true
  }
  else {
    document.getElementById("panchayatNameError").innerText = ""
    fError = false
  }


  if (village == "" || village.length < 3) {
    document.getElementById("villagerequired").innerText = "Please enter a valid data"
    lError = true
  }
  else {
    document.getElementById("villagerequired").innerText = ""
    lError = false
  }
  if (numbers.test(village) || specialChar.test(village)) {
    document.getElementById("villageNameError").innerText = "Special characters or numbers are not allowed"
    err3 = true
  }
  else {
    document.getElementById("villageNameError").innerText = ""
    err3 = false
  }

  if (shg == "" || shg.length < 3) {
    document.getElementById("shgNameExist").innerText = "Please enter a valid data"
    err4 = true
  }
  else {
    document.getElementById("shgNameExist").innerText = ""
    err4 = false
  }
  if (numbers.test(shg) || specialChar.test(shg)) {
    document.getElementById("shgNameError").innerText = "Special characters or numbers are not allowed"
    err5 = true
  }
  else {
    document.getElementById("shgNameError").innerText = ""
    err5 = false
  }

  if (locCo == "Select One" && locRe == "Select One") {
    // document.getElementById("locUserError").innerText = "Please select a user to allot Location"
    locRe = "null"
    locCo = "null"
  }
  if (locCo == "Select One") {
    locCo = "null"
  }
  if (locRe == "Select One") {
    locRe = "null"
  }



  if (!err1 && !err2 && !err3 && !err4 && !err5 && !fError && !lError) {
    var location_data = [
      {
        "locationid": location_id,
        "panchayat": panchayat,
        "village": village,
        "shg": shg,
        "coordinator": locCo,
        "researcher": locRe,
      }
    ];
    $.ajax({
      type: "POST",
      url: "/Addlocation",
      data: JSON.stringify(location_data),
      contentType: "application/json",
      dataType: 'json',

      success: function (data) {
        console.log(data);
        if (data.message == "Location ID exist") {
          // alert("adlss")
          document.getElementById("locIdExistError").innerText = "Location ID exist !"
          document.getElementById("shgNameExist").innerText = ""
        }
        else if (data.message == "shg name exist") {
          // alert("adlss")
          document.getElementById("locIdExistError").innerText = ""
          document.getElementById("shgNameExist").innerText = "SHG exist !"
        }
        else if (data.message == "success") {
          $("#addLocation").modal('hide');
          Swal.fire({
            icon: 'success',
            title: "Location added successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/locations";
          });
        }
        else {
          alert("Something went wrong, Plase try again ")
          console.log(data)
        }
      }
    });
  }

  // $('#addLocation').modal('hide');

}
function editLocationData(name) {
  $.ajax({
    type: "GET",
    url: "/location/" + name,
    success: function (result) {
      console.log(result);
      console.log(result.active)
      document.getElementById("edit_panchayat").value = result.panchayat
      document.getElementById("edit_village").value = result.village
      document.getElementById("edit_shg").value = result.shg
      document.getElementById("location_edit_id").value = result.name
      document.getElementById("edit_locCoordinator").value = result.coordinator
      document.getElementById("edit_locResearcher").value = result.researcher
      document.getElementById("editLocationID").value = result.loc_id

      if (result.active == "yes") {
        document.getElementById("editLocationActive").checked = true;
      }
      else {
        document.getElementById("editLocationDisable").checked = true;
      }

      if (result.group1 == "none") {
        document.getElementById("none").checked = true;
      }
      else if (result.group1 == "control") {
        document.getElementById("Control").checked = true;
      }
      else if (result.group1 == "intervention") {
        document.getElementById("Intervention").checked = true;
      }

      if (result.eligible == "yes") {
        document.getElementById("Eligibility_yes").checked = true;
      }
      else {
        document.getElementById("Eligibility_no").checked = true;
      }


    }
  });
}

function editLocation() {
  var loc_id = document.getElementById("location_edit_id").value
  var editPanchayat = document.getElementById("edit_panchayat").value
  var editVillage = document.getElementById("edit_village").value
  var editShg = document.getElementById("edit_shg").value
  var coordinator = document.getElementById("edit_locCoordinator").value
  var researcher = document.getElementById("edit_locResearcher").value
  var status = document.querySelector('input[name="Location_status"]:checked').value;
  var eligibility = document.querySelector('input[name="Eligibility"]:checked').value;
  var group = document.querySelector('input[name="Arm"]:checked').value;
  var location_id = document.getElementById("editLocationID").value

  let error = false

  if (location_id.length == "") {
    document.getElementById("editLocIdError").innerText = "Please enter a valid data"
    error = true

  }
  else if (location_id.length !== 3) {
    document.getElementById("editLocIdError").innerText = "Location ID must be 3 letters"
    error = true
  }
  else {
    document.getElementById("editLocIdError").innerText = ""
    error = false
  }

  if (editPanchayat == "" || editPanchayat.value < 3) {
    document.getElementById("editPanchayatError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("editPanchayatError").innerText = ""
  }

  if (editVillage == "" || editVillage.value < 3) {
    document.getElementById("editVillageError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("editVillageError").innerText = ""
  }

  if (editVillage == "" || editVillage.value < 3) {
    document.getElementById("editShgError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("editShgError").innerText = ""
  }


  if (coordinator == "Select One" && researcher == "Select One") {
    // document.getElementById("locUserError").innerText = "Please select a user to allot Location"
    coordinator = "null"
    researcher = "null"
  }
  else {
    if (coordinator == "Select One" || coordinator == "") {
      coordinator = "null"
    }
    else if (coordinator != "Select One" && coordinator != "") {
      coordinator = document.getElementById("edit_locCoordinator").value
      // document.getElementById("locUserError").innerText = ""
    }
    if (researcher == "Select One" || researcher == "") {
      researcher = "null"

    }

    else if (researcher != "Select One" && researcher != "") {
      researcher = document.getElementById("edit_locResearcher").value
      // document.getElementById("locUserError").innerText = ""
      // locCo = "null"
    }
  }


  if (!error) {
    var editLocData = [{
      "panchayat": editPanchayat,
      "village": editVillage,
      "shg": editShg,
      "coordinator": coordinator,
      "researcher": researcher,
      "active": status,
      "eligibilty": eligibility,
      "group1": group,
      'location_id': location_id
    }]

    $.ajax({
      type: "PUT",
      url: "/editlocation/" + loc_id,
      data: JSON.stringify(editLocData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          document.getElementById("editShgNameExistError").innerText = ""
          $("#editLocation").modal('hide');
          Swal.fire({
            icon: 'success',
            title: "Location edited successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/locations";
          });
        }
        else if (data.message == "Shg exist") {
          document.getElementById("editShgNameExistError").innerText = "Shg name exist"
          document.getElementById("editLocIdExistError").innerText = ""
        }
        else if (data.message == "Location id exist") {
          document.getElementById("editLocIdExistError").innerText = "Location id exist"
          document.getElementById("editShgNameExistError").innerText = ""
        }
        else {
          alert("Something went wrong, please try again ")
        }
      }
    });
  }


}

function surveyNameAdd(event) {
  event.preventDefault()
  var sur_name = document.getElementById("new_sur_name").value
  var error = false

  if (sur_name == "") {
    document.getElementById("surNameError").innerText = "Please enter valid data"
    error = true
  }
  else {
    document.getElementById("surNameError").innerText = ""
    error = false
  }

  if (!error) {
    var sur_name_data = [{
      "survey_name": sur_name
    }]

    $.ajax({
      type: "POST",
      url: "/Addsurvey",
      data: JSON.stringify(sur_name_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          $('#addSurveyModal').modal('hide');
          Swal.fire({
            icon: 'success',
            title: "Survey added successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/surveylist";
          });
          document.getElementById("surveyNameExist").innerText = ""
        }
        else if (data.message == "survey name already exist") {
          document.getElementById("surveyNameExist").innerText = "Survey name exist"
        }
        else {
          alert("Something went wrong, please try again ")
          document.getElementById("surveyNameExist").innerText = ""
        }
      }
    });
  }
  else {
    alert("Please fill the form")
  }


}

function addSurvey() {
  var sId = document.getElementById("sur_Id").value
  const cycleElements = Array.from(document.getElementsByClassName("cycles"))
  const filledbyElements = Array.from(document.getElementsByClassName("filledBy"))
  const daysElements = Array.from(document.getElementsByClassName("days"))
  const plusElements = Array.from(document.getElementsByClassName("plus"))
  const minusElements = Array.from(document.getElementsByClassName("minus"))
  const groupElements = Array.from(document.getElementsByClassName("group"))
  console.log(cycleElements.length)
  var enable1 = false
  var enable2 = false
  var enable3 = false
  var enable4 = false
  var enable5 = false
  var enable6 = false
  var enable7 = false
  var enable8 = false
  var enable9 = false

  var sur_name = []
  var cycleData = []
  var filledData = []
  var daysData = []
  var plusData = []
  var minusData = []
  var groupData = []

  sur_name = document.getElementById("sur_name").value
  if (sur_name == "") {
    document.getElementById("surveyNameError").innerText = "Please enter a valid data"
    enable1 = true
  }
  else {
    document.getElementById("surveyNameError").innerText = ""
    // document.getElementById("surveyNameExistError").innerText = ""
    enable1 = false
  }

  if (document.getElementById("cycles").value == "") {
    document.getElementById("cycleError").innerText = "Required"
    document.getElementById("cycleRepeatError").innerText = ""
    enable2 = true
  }
  else if (cycleElements.length > 1) {
    for (var i = 0; i < cycleElements.length; i++) {
      if (cycleElements[i].value == "") {
        document.getElementById("cycleError").innerText = ""
        document.getElementById("cycleRepeatError").innerText = "Required aanu mone"
      }
    }
  }
  else {
    for (var i = 0; i < cycleElements.length; i++) {
      console.log(cycleElements[i].value)
      cycleData.push(cycleElements[i].value)
    }
    document.getElementById("cycleError").innerText = ""
    enable2 = false
  }

  if (document.getElementById("filledBy").value == "Select One") {
    document.getElementById("filledError").innerText = "Required"
    enable3 = true
  }
  else {
    document.getElementById("filledError").innerText = ""
    for (var i = 0; i < filledbyElements.length; i++) {
      console.log(filledbyElements[i].value)
      filledData.push(filledbyElements[i].value)
    }
    // document.getElementById("surveyNameExistError").innerText = ""
    enable3 = false
  }


  if (document.getElementById("days").value == "") {
    document.getElementById("daysError").innerText = "Required"
    enable4 = true
  }
  else {

    for (var i = 0; i < daysElements.length; i++) {
      console.log(daysElements[i].value)
      daysData.push(daysElements[i].value)
    }
    document.getElementById("daysError").innerText = ""
    enable4 = false
  }

  if (document.getElementById("plus").value == "") {
    document.getElementById("plusError").innerText = "Required"
    enable5 = true
  }
  else {
    for (var i = 0; i < plusElements.length; i++) {
      console.log(plusElements[i].value)
      plusData.push(plusElements[i].value)
    }
    document.getElementById("plusError").innerText = ""
    enable5 = false
  }

  if (document.getElementById("minus").value == "") {
    document.getElementById("minusError").innerText = "Required"
    enable6 = true
  }
  else {
    for (var i = 0; i < minusElements.length; i++) {
      console.log(minusElements[i].value)
      minusData.push(minusElements[i].value)
    }
    document.getElementById("minusError").innerText = ""
    enable6 = false
  }

  if (document.getElementById("group").value == "Select One") {
    document.getElementById("groupError").innerText = "Required"
    enable7 = true
  }
  else {

    for (var i = 0; i < groupElements.length; i++) {
      console.log(groupElements[i].value)
      groupData.push(groupElements[i].value)
    }
    document.getElementById("groupError").innerText = ""
    enable7 = false
  }

  if (parseInt(document.getElementById("days").value) > parseInt(document.getElementById("plus").value)) {
    document.getElementById("daysCountPlusError").innerText = "Invalid data"
    enable8 = true
  }
  else {
    document.getElementById("daysCountPlusError").innerText = ""
    enable8 = false
  }

  if (parseInt(document.getElementById("days").value) < parseInt(document.getElementById("minus").value)) {
    document.getElementById("daysCountMinusError").innerText = "Invalid data"
    enable9 = true
  }
  else {
    document.getElementById("daysCountMinusError").innerText = ""
    enable9 = false
  }



  if (!enable1 && !enable2 && !enable3 && !enable4 && !enable5 && !enable6 && !enable7 && !enable8 && !enable9) {

    var survey_data = [{
      "survey_name": sur_name,
      "cycles": cycleData,
      "filled_by": filledData,
      "days": daysData,
      "plus": plusData,
      "minus": minusData,
      "group": groupData
    }]

    $.ajax({
      type: "POST",
      url: "/addsurveyinstance/" + sId,
      data: JSON.stringify(survey_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "Survey Name exists") {
          document.getElementById("surveyNameExistError").innerText = data.message
          document.getElementById("surveyNameExistError").style = "block"

        }
        else if (data.message == "cycle already exist") {
          document.getElementById("cycleExistError").innerText = "Cycle num exist"
          document.getElementById("daysExistError").innerText = ""

        }
        else if (data.message == "Days already exist") {
          document.getElementById("daysExistError").innerText = "Days exist"
          document.getElementById("cycleExistError").innerText = ""

        }
        else if (data.message == "success") {
          Swal.fire({
            icon: 'success',
            title: "Survey Instance added",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/surveys/" + sId;
          });
          document.getElementById("surveyNameExistError").innerText = ""

        }
        else {
          alert("Something went wrong, please try again ")
          document.getElementById("surveyNameExistError").innerText = ""
        }

      }
    });

  }
}

function UpdateQuestion() {
  var question_id = document.getElementById("question_id").value
  var sur_ques_id = document.getElementById("sur_ques_id").value
  var q_num = document.getElementById("question-number").value
  var eng_ques = document.getElementById("english-question").value
  var branch = document.getElementById("question-branch").value
  var kan_ques = document.getElementById("kannada-question").value
  var section = document.getElementById("question-section").value
  var question_sectionName = document.getElementById("question-sectionName").value
  var type = document.querySelector('input[name="type"]:checked').value;

  var err1 = false
  var err2 = false
  var err3 = false
  var err4 = false

  if (parseInt(q_num) < 1 || parseInt(q_num) > 999) {
    document.getElementById("editQnumError").innerText = "Invalid (1 - 999)"
    err1 = true
  }
  else {
    document.getElementById("editQnumError").innerText = ""
    err1 = false
  }

  if (eng_ques == "") {
    document.getElementById("editEngQError").innerText = "Please enter valid data"
    err2 = true
  }
  else {
    document.getElementById("editEngQError").innerText = ""
    err2 = false
  }


  if (kan_ques == "") {
    document.getElementById("editKanQError").innerText = "Please enter valid data"
    err3 = true
  }
  else {
    document.getElementById("editKanQError").innerText = ""
    err3 = false
  }


  var opt_nums_e = []
  const optNumEngElements = Array.from(document.getElementsByClassName("ques_num_e"))

  for (var i = 0; i < optNumEngElements.length; i++) {
    console.log(optNumEngElements[i].value)
    opt_nums_e.push(optNumEngElements[i].value)
  }

  // var opt_nums_k = []
  // const optNumKanElements = Array.from(document.getElementsByClassName("ques_num_k"))

  // for (var i = 0; i < optNumKanElements.length; i++) {
  //   console.log(optNumKanElements[i].value)
  //   opt_nums_k.push(optNumKanElements[i].value)
  // }

  var eng_opt = []
  const engQuesElements = Array.from(document.getElementsByClassName("ques_e"))

  for (var i = 0; i < engQuesElements.length; i++) {
    console.log(engQuesElements[i].value)
    eng_opt.push(engQuesElements[i].value)
  }

  var kan_opt = []
  const kanQuesElements = Array.from(document.getElementsByClassName("ques_k"))

  for (var i = 0; i < kanQuesElements.length; i++) {
    console.log(kanQuesElements[i].value)
    kan_opt.push(kanQuesElements[i].value)
  }

  var weitage = []
  const weitageElements = Array.from(document.getElementsByClassName("w_e"))

  for (var i = 0; i < weitageElements.length; i++) {
    console.log(weitageElements[i].value)
    weitage.push(weitageElements[i].value)
  }

  var sub_branch = []
  const sub_branchElements = Array.from(document.getElementsByClassName("ob_e"))

  for (var i = 0; i < sub_branchElements.length; i++) {
    console.log(sub_branchElements[i].value)
    sub_branch.push(sub_branchElements[i].value)
  }


  var opt_ids = []

  const optElements = Array.from(document.getElementsByClassName("opt_ids"))
  for (var i = 0; i < optElements.length; i++) {
    console.log(optElements[i].value)
    opt_ids.push(optElements[i].value)
  }

  var status = document.querySelector('input[name="ques_status"]:checked').value;

  if (!err1 && !err2 && !err3) {

    var udatedQuestionData = [{
      "q_num": q_num,
      "sur_id": sur_ques_id,
      "eng_ques": eng_ques,
      "branch": branch,
      "kan_ques": kan_ques,
      "section": section,
      "question_sectionName": question_sectionName,
      "type": type,
      "opt_number": opt_nums_e,
      "eng_opt": eng_opt,
      "kan_opt": kan_opt,
      "weitage": weitage,
      "sub_branch": sub_branch,
      "opt_id": opt_ids,
      "active": status
    }]

    $.ajax({
      type: "PUT",
      url: "/editquestion/" + question_id,
      data: JSON.stringify(udatedQuestionData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: 'success',
            title: "Questions updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/questions/eng/" + sur_ques_id;
          });
          document.getElementById("surveyNameExistError").innerText = ""

        }
      }
    });
  }


}

function editSurveyModal(name) {
  $.ajax({
    type: "GET",
    url: "/survey/" + name,
    success: function (result) {
      console.log(result)
      document.getElementById("s_p_id").value = result.survey_pri_id
      document.getElementById("surveyName").value = result.survey_name;
      document.getElementById("filledBy").value = result.filled_by;
      document.getElementById("days").value = result.days;
      document.getElementById("plus").value = result.plusdays;
      document.getElementById("minus").value = result.minusdays;
      document.getElementById("editgroup").value = result.group1;
      document.getElementById("updatesurveybutton").value = result.sur_ins_id;

      if (result.active == 'yes') {
        document.getElementById("editSurveyActive").checked = true;
      }
      else {
        document.getElementById("statusDisabled").checked = true;
      }
    }
  });
}

function updateSurvey() {
  var sur_id = document.getElementById("s_p_id").value
  var survey_name = document.getElementById("surveyName").value;
  var filled_by = document.getElementById("filledBy").value;
  var survey_days = document.getElementById("days").value;
  var survey_plus = document.getElementById("plus").value;
  var survey_minus = document.getElementById("minus").value;
  var survey_group = document.getElementById("editgroup").value;
  var status = document.querySelector('input[name="editSurveyStatus"]:checked').value;
  var id = document.getElementById("updatesurveybutton").value;

  var err1 = false;
  var err2 = false;
  var err3 = false;
  var err4 = false;
  var err5 = false;
  var err6 = false;

  if (survey_name == "") {
    document.getElementById("editSurveyName").innerText = "Please enter a valid data"
    err1 = true;
  }
  else {
    document.getElementById("editSurveyName").innerText = ""
    err1 = false
  }

  if (survey_days == "") {
    document.getElementById("editDaysError").innerText = "*"
    err2 = true;
  }
  else {
    document.getElementById("editDaysError").innerText = ""
    err2 = false;
  }

  if (survey_plus == "") {
    document.getElementById("editPlusName").innerText = "*"
    err3 = true;
  }
  else {
    document.getElementById("editPlusName").innerText = ""
    err3 = false;
  }

  if (survey_minus == "") {
    document.getElementById("editMinusName").innerText = "*"
    err4 = true;
  }
  else {
    document.getElementById("editMinusName").innerText = ""
    err4 = false;
  }

  if (parseInt(survey_days) > parseInt(survey_plus)) {
    document.getElementById("daysCountPlusError").innerText = "Invalid data"
    err5 = true;
  }
  else {
    document.getElementById("daysCountPlusError").innerText = ""
    err5 = false
  }

  if (parseInt(survey_days) < parseInt(survey_minus)) {
    document.getElementById("daysCountMinusError").innerText = "Invalid data"
    err6 = true
  }
  else {
    document.getElementById("daysCountMinusError").innerText = ""
    err6 = false
  }

  if (!err1 && !err2 && !err3 && !err4 && !err5 && !err6) {
    var server_data = [{
      "survey_id": sur_id,
      "survey_name": survey_name,
      "filled_by": filled_by,
      "days": survey_days,
      "plusdays": survey_plus,
      "minusdays": survey_minus,
      "group1": survey_group,
      "active": status

    }];

    // alert(JSON.stringify(server_data))
    $.ajax({
      type: "PUT",
      url: "/editsurvey/" + id,
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message == "success") {
          $("#editSurvey").modal('hide');
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.reload();
          });
        }

        else if (data.message == "Days already exist") {
          document.getElementById("daysExistError").innerText = "Days exist"
          document.getElementById("cycleExistError").innerText = ""

        }

        else if (data.message == "Survey Name exists") {
          document.getElementById("surveyNameExistError").innerText = "Survey name exist"
        }
        else {
          alert("Something went wrong, please try again !")
        }

      }
    });

  }


  // $("#editSurvey").modal('hide');
}


// ============== End Survey functions=====================



// ========== Start Question functionalities ===============

function AddQuestion() {
  var url_id = window.location.pathname.split("/").pop()

  var id = document.getElementById("qq_id").value
  var audioform_display = document.getElementById("form_audio_upload")

  var english_question = document.getElementById("english-question").value;

  var question_branch = ""
  var type = ""
  var question_section = document.getElementById("question-section")
  var question_sectionName = "";

  var error1 = false
  var error2 = false
  var error3 = false
  var error4 = false
  var error5 = false
  var error6 = false
  var error7 = false
  var error8 = false

  if (document.getElementById("question-branch").value == "") {
    question_branch = "null"
  }
  else {
    question_branch = document.getElementById("question-branch").value;
  }

  if (question_section.checked == true) {
    question_section = "yes"
  }
  else {
    question_section = "no"
  }

  if (document.getElementById("question-sectionName").value == "") {
    question_sectionName = "null"
  }
  else {
    question_sectionName = document.getElementById("question-sectionName").value
  }


  var kannada_question = document.getElementById("kannada-question").value;
  var question_number = document.getElementById("question-number").value;

  if (question_number == "") {
    document.getElementById("qNumError").innerText = "Required"
    document.getElementById("qNumLimitError").innerText = ""
  }
  else if (parseInt(question_number) < 1 || parseInt(question_number) > 999) {
    document.getElementById("qNumLimitError").innerText = "Invalid (1 - 999)"
    document.getElementById("qNumError").innerText = ""
  }
  else {
    document.getElementById("qNumError").innerText = ""
    document.getElementById("qNumLimitError").innerText = ""
  }

  if (document.getElementById("english-question").value == "" || document.getElementById("english-question").value < 10) {
    document.getElementById("engQuesError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("engQuesError").innerText = ""
  }

  if (document.getElementById("kannada-question").value == "" || document.getElementById("kannada-question").value < 10) {
    document.getElementById("kanQuesError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("kanQuesError").innerText = ""
  }

  // var question_branch = document.getElementById("question-branch").value;
  var type = document.querySelector('input[name="type"]:checked').value;

  if (document.querySelector('input[name="type"]:checked') == false) {
    document.getElementById("qTypeError").innerText = "Please select a type"
  }
  else {
    document.getElementById("qTypeError").innerText = ""
  }

  if (type == "single_select" || type == "multi_select") {
    if (document.getElementById("opt1_e").value == "") {
      document.getElementById("engOptError1").innerText = "Required"
      error5 = true
    }
    else {
      document.getElementById("engOptError1").innerText = ""
      error5 = false
    }
    if (document.getElementById("opt2_e").value == "") {
      document.getElementById("engOptError2").innerText = "Required"
      error6 = true
    }
    else {
      document.getElementById("engOptError2").innerText = ""
      error6 = false
    }
    if (document.getElementById("opt1_k").value == "") {
      document.getElementById("kanOptError1").innerText = "Required"
      error7 = true
    }
    else {
      document.getElementById("kanOptError1").innerText = ""
      error7 = false
    }
    if (document.getElementById("opt2_k").value == "") {
      document.getElementById("kanOptError2").innerText = "Required"
      error8 = true
    }
    else {
      document.getElementById("kanOptError2").innerText = ""
      error8 = false
    }
  }


  const engQuesElements = Array.from(document.getElementsByClassName("ques_e"))
  const kanQuesElements = Array.from(document.getElementsByClassName("ques_k"))

  const w_eElements = Array.from(document.getElementsByClassName("w_e"))
  const k_eElements = Array.from(document.getElementsByClassName("w_k"))

  const ob_eElements = Array.from(document.getElementsByClassName("ob_e"))
  const ob_kElements = Array.from(document.getElementsByClassName("ob_k"))

  var quesEnData = []
  var quesKaData = []

  var w_eData = []
  var w_kData = []

  var ob_eData = []
  var ob_kData = []

  if (w_eElements == "") {
    w_eData = "null"
  }
  else {
    for (var i = 0; i < w_eElements.length; i++) {
      console.log(w_eElements[i].value)
      w_eData.push(w_eElements[i].value)
    }
  }

  if (ob_eElements == "") {
    ob_eData = "null"
  }
  else {
    for (var i = 0; i < ob_eElements.length; i++) {
      console.log(ob_eElements[i].value)
      ob_eData.push(ob_eElements[i].value)
    }
  }

  for (var i = 0; i < ob_eElements.length; i++) {
    console.log(ob_eElements[i].value)
    ob_eData.push(ob_eElements[i].value)
  }

  for (var i = 0; i < engQuesElements.length; i++) {
    console.log(engQuesElements[i].value)
    quesEnData.push(engQuesElements[i].value)
  }

  for (var i = 0; i < kanQuesElements.length; i++) {
    console.log(kanQuesElements[i].value)
    quesKaData.push(kanQuesElements[i].value)
  }



  for (var i = 0; i < k_eElements.length; i++) {
    console.log(k_eElements[i].value)
    w_kData.push(k_eElements[i].value)
  }



  for (var i = 0; i < ob_kElements.length; i++) {
    console.log(ob_kElements[i].value)
    ob_kData.push(ob_kElements[i].value)
  }
  // var status = document.querySelector('input[name="ques_status"]:checked').value;

  if (!error1 && !error2 && !error3 && !error4 && !error5 && !error6 && !error7 && !error8) {

    var questionData = [{
      "survey_id": url_id,
      "que_number": question_number,
      "que_e": english_question,
      "que_k": kannada_question,
      "que_branch": question_branch,
      "section": question_section,
      "section_name": question_sectionName,
      "opttype": type,
      "opt": "opt",
      "opt_e": quesEnData,
      "opt_k": quesKaData,
      "opt_sb": ob_eData,
      "opt_w": w_eData
    }]

    $.ajax({
      type: "POST",
      url: "/Addquestion",
      data: JSON.stringify(questionData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data);
        if (data.message[0] == "success") {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: 'Do you want to upload audios?',
            text: "Question has been saved successfully",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
              document.getElementById("btnsave").hidden = true
              document.getElementById("qNumExist").innerText = ""
              audioform_display.style.display = "block";
              document.getElementById("ques_audioid").value = data.message[1]
              document.getElementById("survey_audioid").value = data.message[2]
              audioform_display.style.display = "block"

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              window.location.href = "/questions/eng/" + url_id;
            }
          })
        }
        else if (data.message == "Q.no exist") {
          document.getElementById("qNumExist").innerText = "Exist"
        }
        else {
          alert("Please check the form")
          document.getElementById("qNumExist").innerText = ""
          audioform_display.style.display = "none"

        }
      }
    });
  }

}

function editSurQuestion(name) {
  $.ajax({
    type: "GET",
    url: "/editquestion/" + name,
    success: function (data) {
      console.log("Result:");
      console.log(data);

    }
  });

}

// ========== End Question functionalities ===============

function editModuleMapping(name) {

  // var PkId = document.getElementById("updModule").value
  document.getElementById("m_id").value = name
  $.ajax({
    type: "GET",
    url: "/Modulemapping/" + name,
    contentType: "application/json",
    dataType: 'json',
    success: function (result) {
      console.log(result[0])
      console.log(result[1])
      console.log(result[2])

      var dvalues = result[1];
      var ddvalue = result[2];
      $('#edit_weeksss').selectpicker('val', dvalues);
      $('#edit_weeksss').selectpicker('refresh');

      $('#edit_week').selectpicker('val', ddvalue);
      $('#edit_week').selectpicker('refresh');

      document.getElementById("edit_s_name").value = result[0].survey_name;
      document.getElementById("edit_s_id").value = result[0].survey_pri_id;
      document.getElementById("editWeekNumber").value = result[0].week_no;

      document.getElementById("edit_survey_description").value = result[0].description;
      document.getElementById("edit_score_min").value = result[0].min_score;
      document.getElementById("edit_score_max").value = result[0].max_score;
      document.getElementById("edit-week-interval").value = result[0].interval1;

      if (result[0].active == 'yes') {
        document.getElementById("statusActive").checked = true;
      }
      else {
        document.getElementById("statusInactive").checked = true;
      }
    }
  });
}
// ============ start Device functionalities ===============

function addDevice() {
  var macAddress = document.getElementById("mac").value
  var devCoordinator = document.getElementById("devCoordinator").value
  var devResearcher = document.getElementById("devResearcher").value
  var researcherData = ""
  var coordinatorData = ""
  var devStatus = document.querySelector('input[name="devStatus"]:checked').value;
  var devDetails = document.getElementById("deviceDetails").value

  if (macAddress == "") {
    document.getElementById("macAddrssError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("macAddrssError").innerText = ""
  }


  if (devCoordinator == "Select One") {
    coordinatorData = "null"
  }
  if (devResearcher == "Select One") {
    researcherData = "null"
  }

  // if(devCoordinator == "Select One" && devResearcher == "Select One"){
  //   document.getElementById("coordinatorError").innerText = "Please select a user to allot device"
  // }

  if (devCoordinator != "Select One") {
    coordinatorData = document.getElementById("devCoordinator").value
    document.getElementById("coordinatorError").innerText = ""
    // researcherData = "null"
  }
  if (devResearcher != "Select One") {
    researcherData = document.getElementById("devResearcher").value
    document.getElementById("coordinatorError").innerText = ""
    // coordinatorData = "null"
  }

  if (document.getElementById('devTablet').checked == false && document.getElementById('devMobile').checked == false) {
    document.getElementById("devTypeError").innerText = "Please select a device type"
  }
  else {
    var devType = document.querySelector('input[name="devType"]:checked').value;
    document.getElementById("devTypeError").innerText = ""
  }

  if (devDetails == "") {
    document.getElementById("deviceDetailsError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("deviceDetailsError").innerText = ""
  }


  var deviceData = [{
    "device_id": macAddress,
    "alloted_coordinator": coordinatorData,
    "alloted_researcher": researcherData,
    "device_type": devType,
    "active": devStatus,
    "device_details": devDetails
  }]

  $.ajax({
    type: "POST",
    url: "/Adddevices",
    data: JSON.stringify(deviceData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log("Result:");
      console.log(data.message)
      if (data.message == "success") {
        $("#addDevice").modal('hide');
        Swal.fire({
          icon: 'success',
          title: "Device added successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/devices";
        });
      }
      else if (data.message = "Device ID exists") {
        document.getElementById("deviceIdExist").innerText = data.message
      }
      else {
        document.getElementById("deviceIdExist").innerText = ""

      }
    }
  });
}

function editDeviceData(name) {
  $.ajax({
    type: "GET",
    url: "/device/" + name,

    success: function (result) {
      console.log("Result:");
      console.log(result)
      document.getElementById("editmac").value = result.device_id
      document.getElementById("editdevResearcher").value = result.researcher
      document.getElementById("devId").value = result.name
      if (result.coordinator == "not allotted") {
        // document.getElementById("editdevCoordinator").value = "result"
      }
      else {
        document.getElementById("editdevCoordinator").value = result.coordinator
      }

      // else{

      // }

      if (result.device_type == "tablet") {
        document.getElementById("editdevTablet").checked = true;
      }
      else {
        document.getElementById("editdevMobile").checked = true;
      }

      if (result.active == "yes") {
        document.getElementById("editdevActive").checked = true;
      }
      else {
        document.getElementById("editdecInactive").checked = true;
      }

      document.getElementById("editdeviceDetails").value = result.device_details

    }
  });
}

function editDevice() {
  var device_id = document.getElementById("devId").value
  var editManual_id = document.getElementById("editmac").value
  var editDevcoordinator = document.getElementById("editdevCoordinator").value
  var editDevresearcher = document.getElementById("editdevResearcher").value
  var editDevStatus = document.querySelector('input[name="editdevStatus"]:checked').value;
  var editDevDetails = document.getElementById("editdeviceDetails").value

  if (editManual_id == "") {
    document.getElementById("editManualIdError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("editManualIdError").innerText = ""
  }

  if (document.getElementById('editdevTablet').checked == false && document.getElementById('editdevMobile').checked == false) {
    document.getElementById("editevTypeError").innerText = "Please select a device type"
  }
  else {
    var editDevType = document.querySelector('input[name="editdevType"]:checked').value;
    document.getElementById("devTypeError").innerText = ""
  }

  if (editDevcoordinator == "Select One" || editDevcoordinator == "") {
    editDevcoordinator = "null"
  }
  else if (editDevcoordinator != "Select One") {
    editDevcoordinator = document.getElementById("editdevCoordinator").value
    document.getElementById("coordinatorError").innerText = ""
  }
  if (editDevresearcher == "Select One" || editDevresearcher == "") {
    editDevresearcher = "null"
  }

  else if (editDevresearcher != "Select One") {
    editDevresearcher = document.getElementById("editdevResearcher").value
    document.getElementById("coordinatorError").innerText = ""
  }

  if (editDevDetails == "") {
    document.getElementById("editDevDetailsError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("editDevDetailsError").innerText = ""
  }

  var editDevData = [{
    "device_id": editManual_id,
    "device_details": editDevDetails,
    "device_type": editDevType,
    "alloted_coordinator": editDevcoordinator,
    "alloted_researcher": editDevresearcher,
    "active": editDevStatus
  }]

  $.ajax({
    type: "PUT",
    url: "/editdevice/" + device_id,
    data: JSON.stringify(editDevData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log("Result:");
      console.log(data)
      if (data.message == "success") {
        $("#editDevice").modal('hide');
        document.getElementById("editManualIdExistError").innerText = ""
        Swal.fire({
          icon: 'success',
          title: "Device edited successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/devices";
        });
      }
      else if (data.message == "Device ID exists") {
        document.getElementById("editManualIdExistError").innerText = "Device ID exist"
      }
      else {
        window.location.href = "/devices"
        document.getElementById("editManualIdExistError").innerText = ""
      }
    }
  });
}

// ============ end Device functionalities ================


// ============ start video functionalities ===============

function getSubModuleNo() {
  var surveyName = document.getElementById("vidSurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";
      }
      $('#vidSubModNo').html(formoption);
      $('#editvidSubModNo').html(formoption);
      $('#activityModNum').html(formoption);
    }
  });
}

function getSubModuleNos() {
  var surveyName = document.getElementById("activitySurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";

      }
      $('#vidSubModNo').html(formoption);
      $('#editvidSubModNo').html(formoption);
      $('#activityModNum').html(formoption);
    }
  });
}

function getSubModuleNoAct() {
  var surveyName = document.getElementById("editactivitySurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";

      }
      $('#editactivityModNum').html(formoption);
    }
  });
}

function editGetSubModuleNo() {
  var surveyName = document.getElementById("editvidSurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";

      }
      $('#editvidSubModNo').html(formoption);
    }
  });
}

function videoValidation(event) {
  event.preventDefault()
  if (document.getElementById("eng_video").files.length == 0) {
    document.getElementById("engVidFileError").innerText = "Please choose the English video"
  }
  else {
    document.getElementById("engVidFileError").innerText = ""
  }

  if (document.getElementById("kan_video").files.length == 0) {
    document.getElementById("kanVidFileError").innerText = "Please choose the Kannada video"
  }
  else {
    document.getElementById("kanVidFileError").innerText = ""
  }
}

function addVideoDetails() {




}

function editVideoData(name) {
  var formoption = "";
  document.getElementById("vid_id").value = name
  document.getElementById("editVideoId").value = name

  $.ajax({
    type: "GET",
    url: "/video/" + name,

    success: function (data) {
      console.log("Result:");
      console.log(data[0])
      document.getElementById("editvideo_english").value = data[0].video_name_e
      document.getElementById("editvideo_kannada").value = data[0].video_name_k
      document.getElementById("editvidSurveyName").value = data[0].sur_pri_id
      document.getElementById("vid_eng_title").value = data[0].video_location_e
      document.getElementById("vid_kan_title").value = data[0].video_location_k
      // document.getElementById("editvidSubModNo").value = data[0].sub_module_no
      if (data[0].active == "yes") {
        document.getElementById("statusActive").checked = true
      }
      else {
        document.getElementById("statusInactive").checked = true
      }
      editGetSubModuleNo_1(data[0].sub_module_no)
      console.log(data.length)
      // document.getElementById("editvidSubModNo").value = data.sub_module_no

    }

  });
}

function editVideoDetails() {
  if (document.getElementById("editvideo_english").value == "") {
    document.getElementById("editEngNameError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("editEngNameError").innerText = ""
  }

  if (document.getElementById("editvideo_kannada").value == "") {
    document.getElementById("editKanNameError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("editKanNameError").innerText = ""
  }

  var sur_id = document.getElementById("editvidSurveyName").value
  var sub_mod = document.getElementById("editvidSubModNo").value
  var eng_vid_name = document.getElementById("editvideo_english").value
  var kan_vid_name = document.getElementById("editvideo_kannada").value
  var active = document.querySelector('input[name="updatedStatus"]:checked').value;
  var v_id = document.getElementById("vid_id").value
  var loc_e = document.getElementById("vid_eng_title").value
  var loc_k = document.getElementById("vid_eng_title").value


  var editVideoData = [{
    "survey_id": sur_id,
    "sub_module_no": sub_mod,
    "video_name_e": eng_vid_name,
    "video_name_k": kan_vid_name,
    "active": active,
    "location_e": loc_e,
    "location_k": loc_k
  }]

  // alert(JSON.stringify(editVideoData))

  $.ajax({
    type: "PUT",
    url: "/editvideo/" + v_id,
    data: JSON.stringify(editVideoData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log("Result:");
      console.log(data)
      if (data.message == "success") {
        $("#editVideo").modal('hide');
        document.getElementById("video_sub_mod_exist").innerHTML = ""
        Swal.fire({
          icon: 'success',
          title: "Device edited successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/allvideos";
        });
      }
      else if (data.message == "sub module number exist") {
        document.getElementById("video_sub_mod_exist").innerHTML = "Sub module number exist"
      }
      else {
        window.location.href = "/allvideos"
        document.getElementById("video_sub_mod_exist").innerHTML = ""
      }
    }
  });

}


// ============ end Device functionalities ================


// ============ start activities functionalities =========

function addActivities() {


}

function activityData(name) {
  document.getElementById("activityId").value = name
  document.getElementById("editActivityId").value = name
  $.ajax({
    type: "GET",
    url: "/activity/" + name,
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log("Result:");
      console.log(data)
      document.getElementById("editactivity_english").value = data.activity_name_e
      document.getElementById("editactivity_kannada").value = data.activity_name_k
      // document.getElementById("editactivitySurveyName").value = data.survey_name
      document.getElementById("editactivitySurveyName").value = data.sur_pri_id
      getSubModuleNoAct_1(data.sub_module_number)
      // document.getElementById("editactivityModNum").value = data.sub_module_number
      document.getElementById("editduration").value = data.duration
      document.getElementById("edittimeSpent").value = data.time_spent
      document.getElementById("editintensity_english").value = data.intensity_e
      document.getElementById("editintensity_kannada").value = data.intensity_k

      // document.getElementById("editmood").value = data.mood
      console.log(data.sur_pri_id)
      console.log(data.sub_module_number)

      if (data.active == "yes") {
        document.getElementById("acitivityActive").checked = true
      }
      else {
        document.getElementById("acitivityInactive").checked = true
      }
    }
  });
}

function editActivity() {
  var actId = document.getElementById("activityId").value
  var edit_activity_e = document.getElementById("editactivity_english").value
  var edit_activity_k = document.getElementById("editactivity_kannada").value
  var editactivitySurveyName = document.getElementById("editactivitySurveyName").value
  var editactivityModNum = document.getElementById("editactivityModNum").value
  var editduration = document.getElementById("editduration").value
  var edittimeSpent = document.getElementById("edittimeSpent").value
  var editintensity_english = document.getElementById("editintensity_english").value
  var editintensity_kannada = document.getElementById("editintensity_kannada").value
  // var editmood = document.getElementById("editmood").value
  var status = document.querySelector('input[name="acitivityActive"]:checked').value

  var err1 = false
  var err2 = false
  var err3 = false
  var err4 = false
  var err5 = false
  var err7 = false
  var err6 = false


  if (edit_activity_e == "") {
    document.getElementById("edActErrorEng").innerText = "Please enter a valid data"
    err1 = true
  }
  else {
    document.getElementById("edActErrorEng").innerText = ""
    err1 = false
  }

  if (edit_activity_k == "") {
    document.getElementById("edActErrorKan").innerText = "Please enter a valid data"
    err2 = true

  }
  else {
    document.getElementById("edActErrorKan").innerText = ""
    err2 = false
  }

  if (editduration == "") {
    document.getElementById("editdurationError").innerText = "Please enter a valid data"
    err3 = true

  }
  else {
    document.getElementById("editdurationError").innerText = ""
    err3 = false

  }

  if (edittimeSpent == "") {
    document.getElementById("edittimeSpentError").innerText = "Please enter a valid data"
    err4 = true

  }
  else {
    document.getElementById("edittimeSpentError").innerText = ""
    err4 = false

  }

  if (editintensity_english == "") {
    document.getElementById("editintensity_englishError").innerText = "Please enter a valid data"
    err5 = true

  }
  else {
    document.getElementById("editintensity_englishError").innerText = ""
    err5 = false

  }

  if (editintensity_kannada == "") {
    document.getElementById("editintensity_kannadaError").innerText = "Please enter a valid data"
    err6 = true

  }
  else {
    document.getElementById("editintensity_kannadaError").innerText = ""
    err6 = false

  }

  // if(editmood == ""){
  //   document.getElementById("editmoodError").innerText = "Please enter a valid data"
  //   err7 = true

  // }
  // else{
  //   document.getElementById("editmoodError").innerText = ""
  //   err7 = false
  // }

  if (!err1 && !err2 && !err3 && !err4 && !err5 && !err6) {


    var editActitvityData = [{
      "activity_english": edit_activity_e,
      "activity_kannada": edit_activity_k,
      "activitySurveyName": editactivitySurveyName,
      "activityModNum": editactivityModNum,
      "duration": editduration,
      "time_spent": edittimeSpent,
      "intensity_e": editintensity_english,
      "intensity_k": editintensity_kannada,
      "mood": "10",
      "active": status
    }]

    $.ajax({
      type: "PUT",
      url: "/editactivity/" + actId,
      data: JSON.stringify(editActitvityData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log("Result:");
        console.log(data)
        if (data.message == "success") {
          $("#editActivities").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/activities";
          });
        }

        else if (data.message == "sub module number exist") {
          document.getElementById("editactivityModNumExistError").innerText = "Sub Mod No. Exist"
        }
        else {
          alert("Something went wrong, please try again !")
        }
      }
    });
  }

}

// ============ end activities functionalities ===========
function editModule(name) {
  document.getElementById("module_id").value = name;

  var editSurveyname = document.getElementById("editSurveyname");

  $.ajax({
    type: "GET",
    url: "/Module/" + name,
    contentType: "application/json",
    dataType: 'json',
    success: function (result) {
      console.log(result)
      editSurveyname.value = result.survey_name;
      document.getElementById("editsurid").value = result.survey_pri_id;
      document.getElementById("editModnumber").value = result.module_number;
      document.getElementById("editsmodulenum").value = result.sub_module_number;
      document.getElementById("editsmodulename").value = result.sub_module_name;
      document.getElementById("updatebutton").value = result.name;
      if (result.group1 == '[control, intervention]') {
        document.getElementById("groupAll").checked = true;
      }
      else if (result.group1 == 'control') {
        document.getElementById("groupControl").checked = true;
      }
      else if (result.group1 == 'intervention') {
        document.getElementById("groupIntervention").checked = true;
      }
      else {
        document.getElementById("groupAll").checked = false;

      }
      if (result.active == "yes") {
        document.getElementById("statusActive").checked = true
      }
      else {
        document.getElementById("statusInactive").checked = true
      }
    }
  });
}

function addModule() {
  var surveyName = document.getElementById("surveyname").value;
  var modulenumber = document.getElementById("modulenumber").value;
  var subModNum = document.getElementById("submodnumber").value;
  var subModName = document.getElementById("submodname").value;

  if (surveyName == "Select One") {
    document.getElementById("surveynameErr").innerText = "Please select a survey !"
  }
  else {
    document.getElementById("surveynameErr").innerText = ""
  }
  if (modulenumber.length < 1) {
    document.getElementById("moduleNumberErr").innerText = "Please enter valid data !"
  }
  if (subModNum.length < 1) {
    document.getElementById("submodNumErr").innerText = "Please enter valid data !"
  }
  if (subModName.length < 1) {
    document.getElementById("submodNameErr").innerText = "Please enter valid data !"
  }

  var select = document.getElementById('surveyname');
  var s_name = select.options[select.selectedIndex].text;
  // console.log(text);
  var group = document.querySelector('input[name="group"]:checked').value;



  if (surveyName.length && modulenumber.length && subModName.length && subModNum.length > 1) {
    var server_data = [
      {
        "sur_id": surveyName,
        "survey_name": s_name,
        "module_number": modulenumber,
        "sub_module_number": subModNum,
        "sub_module_name": subModName,
        "group1": group
      }
    ];
    console.log(server_data)
    $.ajax({
      type: "POST",
      url: "/AddModule",
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#addModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Successfully added",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/modules";
          });
        }
        else if (data.message == "SubModule Number exists") {
          document.getElementById("submoduleNumberErr").innerText = "sub_module_no. exist"
        }
        // else {
        // }
        // document.getElementById("surveyname").value = '';
        // document.getElementById("modulenumber").value = '';
        // document.getElementById("submodnumber").value = '';
        // document.getElementById("submodname").value = '';

      }
    });
    // $('#addModal').modal('hide');
    // location.reload();
  }
}


function update_module() {
  var sur_Id = document.getElementById("editsurid").value;
  var updated_mod_number = document.getElementById("editModnumber").value;
  var updated_submod_number = document.getElementById("editsmodulenum").value;
  var updated_submod_name = document.getElementById("editsmodulename").value;
  var updated_survey_name = document.getElementById("editSurveyname").value;
  var group = "null"
  var group = document.querySelector('input[name="updatedGroup"]:checked').value;
  var status = document.querySelector('input[name="updatedStatus"]:checked').value;
  var name = document.getElementById("updatebutton").value;

  if (updated_mod_number.length < 1) {
    document.getElementById("edit-mod-num").innerText = "Please enter a valid data"
  }
  if (updated_submod_number.length < 1) {
    document.getElementById("edit-submod-num").innerText = "Please enter a valid data"
  }
  if (updated_submod_name.length < 1) {
    document.getElementById("edit-submod-name").innerText = "Please enter a valid data"
  }
  if (updated_survey_name.length < 1) {
    document.getElementById("edit-surveyname").innerText = "Please enter a valid data"
  }
  if (updated_survey_name.length && updated_mod_number.length && updated_submod_number.length && updated_submod_name.length > 1) {

    var server_data = [
      {
        "sur_id": sur_Id,
        "survey_name": updated_survey_name,
        "module_number": updated_mod_number,
        "sub_module_number": updated_submod_number,
        "sub_module_name": updated_submod_name,
        "group1": group,
        "active": status
      }
    ];

    $.ajax({
      type: "PUT",
      url: "/editModule/" + name,
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        if (data.message == "success") {
          $("#editModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/modules";
          });
        }
        else if (data.message == "sub module number exist") {
          document.getElementById("edit_submod_exist").innerText = "sub module number exist"
        }

        // else {
        //   alert("Something went wrong, please try again later !")
        // }
      }
    });
    // $('#editModal').modal('hide');
  }
}


// function addMoreMapping(){
//     // var modId = document.getElementById()
//     var $input = $('.add-week').children().eq(0).clone();
//     // $('.add-week').append($input);
//     var text =  "";
//     const countAll = document.querySelectorAll('.modAdd').length + 1
//     var $input = $('.add-week').children().eq(0).clone().prop('id', 'add_'+countAll );


//     // for(var i=0;i<=z;i++)
//     // {
//     text = '<input class="form-control modAdd" type="text" name="add" id="add_'+countAll+'" /></br>';

//     // }
//     $('.add-week').append($input);

//     // $(".add-week").html($input);
// }
function addModuleMappingSurvey() {
  var sname = document.getElementById("survey_name").value
  var desc = document.getElementById("survey_description").value

  // var group = document.querySelector('input[name="score"]:checked').value;
  var min = document.getElementById('score_min').value;
  var max = document.getElementById('score_max').value;

  var mod_data = ""
  var err = false


  var specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  if (document.getElementById("weekNumber").value == "") {
    document.getElementById("week_num_error").innerText = "Please enter number only"
    err = true
  }
  else if (specialChar.test(document.getElementById("weekNumber").value)) {
    document.getElementById("week_num_error").innerText = "Please enter number only"
    err = true
  }
  else {
    document.getElementById("week_num_error").innerText = ""
    err = false
  }

  if (document.getElementById('score_min').value == "") {
    document.getElementById("sur_minError").innerText = "Required";
  }
  else {
    document.getElementById("sur_minError").innerText = "";
  }

  if (document.getElementById('score_max').value == "") {
    document.getElementById("sur_maxError").innerText = "Required";
  }
  else {
    document.getElementById("sur_maxError").innerText = " ";
  }

  if (document.getElementById("instance_name").value == "") {
    document.getElementById("sur_instError").innerText = "Please select instance";
  }
  else {
    document.getElementById("sur_instError").innerText = " ";
  }

  if (document.getElementById("module_name").value == "") {
    document.getElementById("sur_weekError").innerText = "Please select week";
  }
  else {
    document.getElementById("sur_weekError").innerText = "";
  }

  if (document.getElementById("survey_description").value == "") {
    document.getElementById("sur_descError").innerText = "Please enter valid data"
  }
  else {
    document.getElementById("sur_descError").innerText = ""
  }

  if (document.getElementById("mod").value == "") {
    document.getElementById("modError").innerText = "Please enter valid data"

  }
  else if (document.getElementById("mod").value == "null") {
    mod_data = "null"
  }
  else {
    mod_data = document.getElementById("mod").value
    document.getElementById("modError").innerText = ""
  }

  if (parseInt(document.getElementById("score_min").value) > parseInt(document.getElementById("score_max").value)) {
    document.getElementById("scoreValidError").innerText = "Invalid data"
    // enable8 = true
  }
  else {
    document.getElementById("scoreValidError").innerText = ""
    // enable8 = false
  }

  var instance = document.querySelectorAll('#instance_name option:checked');
  var selected_instance = Array.from(instance).map(el => el.value)

  var week_no = document.getElementById("w_no").value
  var total_week_no = parseInt(week_no) + 1

  var weekNumber = document.getElementById("weekNumber").value

  var module_week = document.querySelectorAll('#module_name option:checked');
  var selected_module_week = Array.from(module_week).map(el => el.value)

  var select = document.getElementById('instance_name');
  var inst_place = select.options[select.selectedIndex].text;

  var select_week = document.getElementById('module_name');
  var select_week_text = select_week.options[select_week.selectedIndex].text;

  if (!err) {

    var mappingData = [
      {
        "sur_id": sname,
        "instance_placeholder": inst_place,
        "description": desc,
        "min_score": min,
        "max_score": max,
        "survey_instance_days": selected_instance,
        "week_no": weekNumber,
        "module_no": selected_module_week,
        "interval1": mod_data,
      }
    ];

    $.ajax({
      type: "POST",
      url: "/CreateModulemapping",
      data: JSON.stringify(mappingData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#addModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Successfully addded",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            document.getElementById("weekNoError").innerText = ""
            window.location.href = "/sur_fil_mod_map/" + sname;
          });
        }
        else if (data.message = "week no exist") {
          document.getElementById("weekNoError").innerText = "Week exist"
        }
        else {
          alert("Something went wrong, please try again !")
          document.getElementById("weekNoError").innerText = ""
        }
        // $("#modulelist").load(location.href + " #modulelist");

      }
    });
  }
}


function upModuleMapping() {
  var m_id = document.getElementById("m_id").value
  var edited_survey_name = document.getElementById("edit_s_id").value

  var edited_description = document.getElementById("edit_survey_description").value
  var edited_min_score = document.getElementById("edit_score_min").value
  var edited_max_score = document.getElementById("edit_score_max").value
  var edited_intervel = document.getElementById("edit-week-interval").value
  // var edited_instance = document.getElementById("edit_week").value
  // var edited_Module_no = document.getElementById("edit_weeksss").value
  var edited_status = document.querySelector('input[name="updatedMappingStatus"]:checked').value;
  // var week_no = document.getElementById("edit_week_no").value
  document.getElementById("edit_weeksss").value
  var edited_week_number = document.getElementById("editWeekNumber").value

  // const instance = Array.from(document.getElementsByClassName("edit_week"))
  // var instance_data = []
  // for(var i = 0; i < instance.length; i++) {
  //     console.log(instance[i].value)
  //     instance_data.push(instance[i].value)
  // }

  // const mod_num = Array.from(document.getElementsByClassName("edit_weeksss"))
  // var mod_num_data = []
  // for(var i = 0; i < mod_num.length; i++) {
  //     console.log(mod_num[i].value)
  //     mod_num_data.push(mod_num[i].value)
  // }

  var err = false
  var err1 = false;
  var err2 = false;
  var err3 = false;
  var err4 = false;
  var err5 = false;
  var err6 = false;

  var specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  if (document.getElementById("edit_survey_description").value == "") {
    document.getElementById("editSurDescError").innerText = "Please enter valid data"
    err1 = true;
  }
  else {
    document.getElementById("editSurDescError").innerText = ""
    err1 = false;
  }

  if (document.getElementById("edit_score_min").value == "") {
    document.getElementById("scoreMinError").innerText = "Please enter valid data"
    err2 = true;
  }
  else {
    document.getElementById("scoreMinError").innerText = ""
    err2 = false;
  }

  if (document.getElementById("edit_score_max").value == "") {
    document.getElementById("scoreMaxError").innerText = "Please enter valid data"
    err3 = true;
  }
  else {
    document.getElementById("scoreMaxError").innerText = ""
    err3 = false;
  }

  if (document.getElementById("editWeekNumber").value == "") {
    document.getElementById("edit_week_num_error").innerText = "Please enter number only"
    err4 = true;
  }
  else if (specialChar.test(document.getElementById("editWeekNumber").value)) {
    document.getElementById("edit_week_num_error").innerText = "Please enter number only"
    err4 = true
  }
  else {
    document.getElementById("editsur_IntError").innerText = ""
    err4 = false;
  }

  if (parseInt(document.getElementById("edit_score_min").value) > parseInt(document.getElementById("edit_score_max").value)) {
    document.getElementById("scoreInvalidError").innerText = "Invalid data"
    err5 = true;
  }
  else {
    document.getElementById("scoreInvalidError").innerText = ""
    err5 = false;
  }

  var instance = document.querySelectorAll('#edit_week option:checked');
  var instance_data = Array.from(instance).map(el => el.value)

  var mod_num = document.querySelectorAll('#edit_weeksss option:checked');
  var mod_num_data = Array.from(mod_num).map(el => el.value)
  if (!err1 && !err2 && !err3 && !err4 && !err5) {
    var updateModuleMappingData = [{
      "survey_name": edited_survey_name,
      "min_score": edited_min_score,
      "max_score": edited_max_score,
      "description": edited_description,
      "week_no": edited_week_number,
      "module_no": mod_num_data,
      "interval1": edited_intervel,
      "survey_instance_days": instance_data,
      "active": edited_status
    }]

    $.ajax({
      type: "PUT",
      url: "/editModulemapping/" + m_id,
      data: JSON.stringify(updateModuleMappingData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#EditMapping").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            document.getElementById("editsur_weekError").innerText = ""
            window.location.href = "/sur_fil_mod_map/" + edited_survey_name;
          });
        }
        else if (data.message == "week no exist") {
          document.getElementById("editsur_weekError").innerText = "Week exist"
        }
        else {
          document.getElementById("editsur_weekError").innerText = ""
          alert("Something went wrong, please try again !")
        }
      }
    });
  }
}


//video upload
function uploadFile(form, event) {

  event.preventDefault();

  var engTitle = document.getElementById("video_english").value
  var kanTitle = document.getElementById("video_kannada").value
  var surveyName = document.getElementById("vidSurveyName").value
  var err1 = false
  var err2 = false
  var err3 = false
  var err4 = false
  var err5 = false

  if (surveyName == "Select One") {
    document.getElementById("surveyError").innerText = "Please select a survey"
    err1 = true

  }
  else {
    document.getElementById("surveyError").innerText = ""
    err1 = false
  }

  if (engTitle == "") {
    document.getElementById("engVidError").innerText = "Please enter a valid data"
    err2 = true

  }
  else {
    document.getElementById("engVidError").innerText = ""
    err2 = false
  }

  if (kanTitle == "") {
    document.getElementById("kanVidError").innerText = "Please enter a valid data"
    err3 = true

  }
  else {
    document.getElementById("kanVidError").innerText = ""
    err3 = false
  }

  var allowedExtensions = /(\.mp4|\.avi)$/i;


  if (document.getElementById("eng_video").value == "") {
    document.getElementById("engFileVidError").innerText = "Please select english video file"
    err4 = true
  }
  else if (!allowedExtensions.exec(document.getElementById("eng_video").value)) {
    document.getElementById("eng_video").value = '';
    document.getElementById("engFileVidError").innerText = "Invalid file type"
    err4 = true
  }
  else {
    document.getElementById("engFileVidError").innerText = ""
    err4 = false
  }


  if (document.getElementById("kan_video").value == "") {
    document.getElementById("kanFileVidError").innerText = "Please select kannada video file"
    err5 = true
  }
  else if (!allowedExtensions.exec(document.getElementById("kan_video").value)) {
    document.getElementById("kan_video").value = '';
    document.getElementById("kanFileVidError").innerText = "Invalid file type"
    err5 = true
  }
  else {
    document.getElementById("kanFileVidError").innerText = ""
    err5 = false
  }

  var subModNo = document.getElementById("vidSubModNo").value

  if (!err1 && !err2 && !err3 && !err4 && !err5) {
    const formData = new FormData(form);
    var oOutput = document.getElementById("static_file_response")
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "uploadvideo", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 207) {
        document.getElementById("sub_mod_exist").innerHTML = "Sub module number exist"
      }
      else if (oReq.status == 201) {
        oOutput.innerHTML = "english file name exists"
      }
      else if (oReq.status == 206) {
        oOutput.innerHTML = "kannada file name exists"
      }
      else if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
        console.log(oReq.response.message)
        $("#addVideo").modal('hide')
        Swal.fire({
          icon: 'success',
          title: "Videos added successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/allvideos";
        });
      }

      else {
        oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
      }
    };
    oOutput.innerHTML = "Sending file!";
    console.log("Sending file!")
    oReq.send(formData);
  }


}

function uploadAudio(form, event) {
  const audiodata = new FormData(form);
  var sur_ques_id = document.getElementById("survey_audioid").value
  var oOutput = document.getElementById("static_file_response")
  var oReq = new XMLHttpRequest();
  // alert (test)
  oReq.open("POST", "/Uploadfile", true);
  console.log(oReq.response)
  oReq.onload = function (oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
      console.log(oReq.response)
      Swal.fire({
        icon: 'success',
        title: "Question audio uploaded successfully",
        timer: 1500,
        showConfirmButton: false
      }).then(function () {
        window.location.href = "/questions/eng/" + sur_ques_id;
      });
    }
    else if (oReq.status == 201) {
      oOutput.innerHTML = "english file name exists"
    }
    else if (oReq.status == 206) {
      oOutput.innerHTML = "kannada file name exists"
    }
    else {
      oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
    }
  };
  oOutput.innerHTML = "Sending file!";
  console.log("Sending file!")
  oReq.send(audiodata);
}

function uploadImg(form, event) {

  event.preventDefault();

  var activityEngName = document.getElementById("activity_english").value;
  var activityKanName = document.getElementById("activity_kannada").value
  var activitySurvey = document.getElementById("activitySurveyName").value
  var activityModNum = document.getElementById("activityModNum").value
  var duration = document.getElementById("duration").value
  var timeSpent = document.getElementById("timeSpent").value
  var intensity_english = document.getElementById("intensity_english").value
  var intensity_kannada = document.getElementById("intensity_kannada").value
  // var moodScale = document.getElementById("mood").value

  var charRegex = new RegExp(/[a-zA-Z]/)

  var err = false
  var err1 = false
  var err2 = false
  var err3 = false
  var err4 = false
  var err5 = false
  var err6 = false
  var err7 = false
  var err8 = false


  if (activityEngName == "") {
    document.getElementById("actEngNameError").innerText = "Please enter valid detail"
    err1 = true
  }
  else {
    document.getElementById("actEngNameError").innerText = ""
    err1 = false
  }

  if (activityKanName == "") {
    document.getElementById("actKanNameError").innerText = "Please enter valid detail"
    err2 = true

  }
  else {
    document.getElementById("actKanNameError").innerText = ""
    err2 = false
  }

  if (activitySurvey == "Select One") {
    document.getElementById("actSurveyError").innerText = "Please select a survey"
    err3 = true
  }
  else {
    document.getElementById("actSurveyError").innerText = ""
    err3 = false
  }

  if (activityModNum == "") {
    document.getElementById("activityModNumError").innerText = "Please select module number"
    err4 = true
  }
  else {
    document.getElementById("activityModNumError").innerText = ""
    err4 = false
  }

  if (duration == "") {
    document.getElementById("durationError").innerText = "Please enter valid detail"
    err5 = true
  }
  else if (duration <= 1 || duration >= 31) {
    document.getElementById("durationError").innerText = "Duration must be between 1 - 31"
    err5 = true
  }
  else {
    document.getElementById("durationError").innerText = ""
    err5 = false
  }

  if (timeSpent == "") {
    document.getElementById("timeSpentError").innerText = "Please enter valid detail"
    err6 = true
  }
  else if (charRegex.test(timeSpent)) {
    document.getElementById("timeSpentError").innerText = "Characters are not allowed"
    err6 = true
  }
  else {
    document.getElementById("timeSpentError").innerText = ""
    err6 = false
  }

  if (intensity_english == "") {
    document.getElementById("intensity_englishError").innerText = "Please enter valid detail"
    err7 = true
  }
  else {
    document.getElementById("intensity_englishError").innerText = ""
    err7 = false
  }

  if (intensity_kannada == "") {
    document.getElementById("intensity_kannadaError").innerText = "Please enter valid detail"
    err8 = true
  }
  else {
    document.getElementById("intensity_kannadaError").innerText = ""
    err8 = false
  }

  var allowedExtensions =
    /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  var myImg = document.getElementById("activityImg");
  var imgWidth = myImg.naturalWidth;
  var imgHeight = myImg.naturalHeight;
  // var imgWidth = img.clientWidth;
  // var imgHeight = img.clientHeight;

  console.log(imgWidth)
  console.log(imgHeight)

  if (document.getElementById("activityImg").value == "") {
    document.getElementById("imageFileError").innerText = "Please select image file to upload"
    err = true
  }
  else if (!allowedExtensions.exec(document.getElementById("activityImg").value)) {
    document.getElementById("activityImg").value = '';
    document.getElementById("imageFileError").innerText = "Invalid file type"
    err = true
  }
  else {
    document.getElementById("imageFileError").innerText = ""
    err = false
  }

  // if (moodScale == "") {
  //   document.getElementById("moodScaleError").innerText = "Please enter valid detail"
  // }
  // else if(moodScale != 5 || moodScale != 10){
  //   document.getElementById("moodScaleError").innerText = "Mood scale value must be 5 or 10"
  // }
  // else {
  //   document.getElementById("moodScaleError").innerText = ""
  // }

  // var activityData = [{
  //   "activity_english": activityEngName,
  //   "activity_kannada": activityKanName,
  //   "activitySurveyName": activitySurvey,
  //   "activityModNum": activityModNum,
  //   "duration": duration,
  //   "time_spent": timeSpent,
  //   "intensity_e": intensity_english,
  //   "intensity_k": intensity_kannada,
  //   "mood": "10"
  // }]

  // $.ajax({
  //   type: "POST",
  //   url: "/addactivity",
  //   data: JSON.stringify(activityData),
  //   contentType: "application/json",
  //   dataType: 'json',
  //   success: function (data) {
  //     console.log("Result:");
  //     console.log(data)
  //     console.log(data.message[0])
  //     if (data.message[0] == "success") {
  //       $("#addActivity").modal('hide')
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'info',
  //         title: "Please upload image files",
  //         text: "Activity saved successfully",
  //         timer: 1500,
  //         showConfirmButton: false
  //       }).then(function () {
  //         document.getElementById("btnsave").hidden = true
  //         document.getElementById("activityImageForm").style = "block"
  //         document.getElementById("activity_id").value = data.message[1]
  //       });

  //     }

  //     else if (data.message == "sub module number exist") {
  //       document.getElementById("activityModNumExistError").innerText = "Sub Mod No. Exist"
  //     }
  //     else {
  //       alert("Something went wrong, please try again !")
  //     }
  //   }
  // });
  console.log(err)
  console.log(err2)
  console.log(err3)
  console.log(err4)
  console.log(err5)
  console.log(err6)
  console.log(err7)
  console.log(err8)

  if (!err && !err1 && !err2 && !err3 && !err4 && !err5 && !err6 && !err7 && !err8) {

    const formData = new FormData(form);
    var oOutput = document.getElementById("static_file_response")
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "uploadImg", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
        console.log(oReq.response)
        $("#addVideo").modal('hide')
        Swal.fire({
          icon: 'success',
          title: "Activity added successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/activities";
        });
      }
      else if (oReq.status == 206) {
        document.getElementById("activityModNumExistError").innerHTML = "Sub module number exist"
      }
      else if (oReq.status == 201) {
        oOutput.innerHTML = "file name exists"
      }
      else {
        oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
      }
    };
    oOutput.innerHTML = "Sending file!";
    console.log("Sending file!")
    oReq.send(formData);
  }
}
//Logout//

function logout() {
  $.ajax({
    url: "/logout/"
  });
}

function optEnglishId(name) {
  document.getElementById("optStatusID").value = name
}

function chageOptEnglishId() {
  var url_id = window.location.pathname.split("/").pop()

  var optID = document.getElementById("optStatusID").value
  var optStatus = document.querySelector('input[name="editOptionactive"]:checked').value;
  var optStatusData = [{
    "active": optStatus
  }]
  $.ajax({
    type: "PUT",
    url: "/optionstatus/" + optID,
    data: JSON.stringify(optStatusData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log(data)
      if (data.message == "success") {
        $("#exampleModal").modal('hide')
        Swal.fire({
          icon: 'success',
          title: "Updated successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/question/" + url_id;

        });
      }
    }
  });
}

function coordinatorUpdatePassword() {
  var coId = window.location.pathname.split("/").pop()

  var newPass = document.getElementById("co_update_password").value
  var cf_pass = document.getElementById("co_update_conf_password").value
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  var passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

  var pErr = false
  var cErr = false

  if (newPass == "") {
    document.getElementById("newPassError").innerHTML = "Please enter a valid password"
    pErr = true
  }
  else if (!reg.test(newPass)) {
    document.getElementById("newPassError").innerHTML = "Please must be min 8 characters and special character number and capital letter"
    pErr = true
  }
  else {
    document.getElementById("newPassError").innerHTML = ""
    pErr = false
  }

  if (cf_pass == "") {
    document.getElementById("passMatchError").innerHTML = "Please confirm the password"
    cErr = true
  }
  else if (newPass != cf_pass) {
    document.getElementById("passMatchError").innerHTML = "Password doesnt match"
    cErr = true
  }
  else {
    document.getElementById("passMatchError").innerHTML = ""
    cErr = false
  }

  if (!pErr && !cErr) {

    var passwordData = [{
      "password": newPass,
      "role": "coordinator",
      "id": coId
    }]

    $.ajax({
      type: "POST",
      url: "/changepassword",
      data: JSON.stringify(passwordData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#exampleModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/coordinator/" + coId;

          });
        }
      }
    });
  }

}


function researcherUpdatePassword() {
  var coId = window.location.pathname.split("/").pop()

  var newPass = document.getElementById("re_update_password").value
  var cf_pass = document.getElementById("re_update_conf_password").value
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  var passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

  var pErr = false
  var cErr = false

  if (newPass == "") {
    document.getElementById("renewPassError").innerHTML = "Please enter a valid password"
    pErr = true

  }
  else if (!reg.test(newPass)) {
    document.getElementById("renewPassError").innerHTML = "Please must be min 8 characters and special character number and capital letter"
    pErr = true
  }
  else {
    document.getElementById("renewPassError").innerHTML = ""
    pErr = false
  }

  if (cf_pass == "") {
    document.getElementById("repassMatchError").innerHTML = "Please confirm the password"
    cErr = true
  }
  else if (newPass != cf_pass) {
    document.getElementById("repassMatchError").innerHTML = "Password doesnt match"
    cErr = true
  }
  else {
    document.getElementById("repassMatchError").innerHTML = ""
    cErr = false
  }

  if (!pErr && !cErr) {

    var passwordData = [{
      "password": newPass,
      "role": "researcher",
      "id": coId
    }]

    $.ajax({
      type: "POST",
      url: "/changepassword",
      data: JSON.stringify(passwordData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#exampleModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/researcher/" + coId;

          });
        }
      }
    });

  }

}

function investigatorUpdatePassword() {
  var coId = window.location.pathname.split("/").pop()

  var newPass = document.getElementById("inv_update_password").value
  var cf_pass = document.getElementById("inv_update_conf_password").value
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  var passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

  var pErr = false
  var cErr = false

  if (newPass == "") {
    document.getElementById("invnewPassError").innerHTML = "Please enter a valid password"
    pErr = true
  }
  else if (!reg.test(newPass)) {
    document.getElementById("invnewPassError").innerHTML = "Please must be min 8 characters and special character number and capital letter"
    pErr = true
  }
  else {
    document.getElementById("invnewPassError").innerHTML = ""
    pErr = false
  }

  if (cf_pass == "") {
    document.getElementById("invpassMatchError").innerHTML = "Please confirm the password"
    cErr = true
  }
  else if (newPass != cf_pass) {
    document.getElementById("invpassMatchError").innerHTML = "Password doesnt match"
    cErr = true
  }
  else {
    document.getElementById("invpassMatchError").innerHTML = ""
    cErr = false
  }

  if (!pErr && !cErr) {
    var passwordData = [{
      "password": newPass,
      "role": "study_investigator",
      "id": coId
    }]


    $.ajax({
      type: "POST",
      url: "/changepassword",
      data: JSON.stringify(passwordData),
      contentType: "application/json",
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.message == "success") {
          $("#exampleModal").modal('hide')
          Swal.fire({
            icon: 'success',
            title: "Updated successfully",
            timer: 1500,
            showConfirmButton: false
          }).then(function () {
            window.location.href = "/Studyinvestigator/" + coId;

          });
        }
      }
    });
  }
}

function getSubModuleNoAct_1(sur_id) {
  var surveyName = document.getElementById("editactivitySurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";

      }
      $('#editactivityModNum').html(formoption);
      document.getElementById("editactivityModNum").value = sur_id
    }
  });
}


function editGetSubModuleNo_1(sur_id) {
  var surveyName = document.getElementById("editvidSurveyName").value
  var formoption = "";

  $.ajax({
    type: "GET",
    url: "/sub_module_dd/" + surveyName,

    success: function (data) {
      console.log("Result:");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        var d = data[i]
        console.log(d.sub_name)
        formoption += "<option value='" + d.module_id + "'>" + d.sub_name + "</option>";

      }
      $('#editvidSubModNo').html(formoption);
      document.getElementById("editvidSubModNo").value = sur_id
    }
  });
}

function addStatus() {
  var reason = document.getElementById("reason").value
  var category = document.getElementById("category").value

  if (reason == "") {
    document.getElementById("reasonError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("reasonError").innerText = ""
  }

  if (category == "Select One") {
    document.getElementById("categoryError").innerText = "Please select a category"
  }
  else {
    document.getElementById("categoryError").innerText = ""
  }

  var statusData = [{
    "reason": reason,
    "reason_category": category
  }]

  // alert(JSON.stringify(statusData))

  $.ajax({
    type: "POST",
    url: "/addreason",
    data: JSON.stringify(statusData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log(data)
      if (data.message == "success") {
        $("#addStatus").modal('hide')
        Swal.fire({
          icon: 'success',
          title: "Reason added successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/reasons"

        });
      }
      else if (data.message == "Reason exists") {
        document.getElementById("addreasonExistError").innerText = "Reason exist !"
      }
    }
  });

}

function editStatusData(name) {

  document.getElementById("reason_id").value = name
  $.ajax({
    type: "GET",
    url: "/reason/" + name,

    success: function (data) {
      console.log("Result:");
      console.log(data);

      // $('#editvidSubModNo').html(formoption);
      document.getElementById("editReason").value = data.reason
      document.getElementById("editCategory").value = data.reason_category

      if (data.active == "yes") {
        document.getElementById("reason_yes").checked = true;
      }
      else {
        document.getElementById("reason_no").checked = true;
      }

    }
  });

}

function editStatus() {
  var reson_id = document.getElementById("reason_id").value
  var reason = document.getElementById("editReason").value
  var category = document.getElementById("editCategory").value
  var status = document.querySelector('input[name="status"]:checked').value;


  if (reason == "") {
    document.getElementById("editReasonError").innerText = "Please enter a valid data"
  }
  else {
    document.getElementById("editReasonError").innerText = ""
  }

  var editStatusData = [{
    "reason": reason,
    "reason_category": category,
    "active": status
  }]

  // alert(JSON.stringify(statusData))

  $.ajax({
    type: "PUT",
    url: "/editreason/" + reson_id,
    data: JSON.stringify(editStatusData),
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
      console.log(data)
      if (data.message == "success") {
        $("#editStatus").modal('hide')
        document.getElementById("reasonExistError").innerText = ""
        Swal.fire({
          icon: 'success',
          title: "Reason updated successfully",
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.href = "/reasons"

        });
      }
      else if (data.message == "Reason exists") {
        document.getElementById("reasonExistError").innerText = "Reason already exist"
      }
    }
  });

}

function adminData() {
  // alert("admin")
  $.ajax({
    type: "GET",
    url: "/viewprofile",
    success: function (data) {
      console.log(data)
      document.getElementById("admin_profile").innerText = data[0].first_name + " " + data[0].last_name
      document.getElementById("adminName").value = data[0].first_name + " " + data[0].last_name
      document.getElementById("adminEmail").value = data[0].email_id
      document.getElementById("adminAge").value = data[0].age
      document.getElementById("adminGender").value = data[0].gender
      document.getElementById("adminPhone").value = data[0].mobile_number
    }
  });
}

function activityReuploadImage(form, event) {
  event.preventDefault()
  var reUpimage = document.getElementById("reuploadImage").value
  var allowedExtensions =
    /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (reUpimage == "") {
    document.getElementById("reUpImageError").innerText = "Please select an image !"
  }
  else if (!allowedExtensions.exec(reUpimage)) {
    document.getElementById("reuploadImage").value = '';
    document.getElementById("reUpImageError").innerText = "Invalid file type"
  }
  else {
    document.getElementById("reUpImageError").innerText = ""
  }

  const formData = new FormData(form);
  var oOutput = document.getElementById("static_file_response")
  var pkid = document.getElementById("editActivityId").value
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "reupload/" + pkid + "/Image", true);
  oReq.onload = function (oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
      console.log(oReq.response)
      $("#editActivityImage").modal('hide')
      Swal.fire({
        icon: 'success',
        title: "Image uploaded successfully",
        timer: 1500,
        showConfirmButton: false
      }).then(function () {
        window.location.href = "/allvideos";
      });
    }
    else if (oReq.status == 201) {
      document.getElementById("reUpImageError").innerHTML = "Filename already exists"
    }
    else {
      oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
    }
  };
  oOutput.innerHTML = "Sending file!";
  console.log("Sending file!")
  oReq.send(formData);
}

function videoReupload(form, event) {
  event.preventDefault();
  var reUpEng = document.getElementById("reuploadEngVideo").value
  var reUpKan = document.getElementById("reuploadKanVideo").value

  var allowedExtensions = /(\.mp4|\.avi)$/i;

  if (reUpEng == "") {
    document.getElementById("reUpEngVidError").innerText = "Please select english video !"
  }
  else if (!allowedExtensions.exec(reUpEng)) {
    document.getElementById("reuploadEngVideo").value = '';
    document.getElementById("reUpEngVidError").innerText = "Invalid file type"
  }
  else {
    document.getElementById("reUpEngVidError").innerText = ""
  }

  if (reUpKan == "") {
    document.getElementById("reUpKanVidError").innerText = "Please select kannada video !"
  }
  else if (!allowedExtensions.exec(reUpKan)) {
    document.getElementById("reuploadKanVideo").value = '';
    document.getElementById("reUpKanVidError").innerText = "Invalid file type"
  }
  else {
    document.getElementById("reUpKanVidError").innerText = ""
  }


  const formData = new FormData(form);
  var oOutput = document.getElementById("static_file_response")
  var PkId = document.getElementById("editVideoId").value
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/reupload/" + PkId + "/Video", true);
  oReq.onload = function (oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
      console.log(oReq.response)
      $("#editVideoFiles").modal('hide')
      Swal.fire({
        icon: 'success',
        title: "Videos uploaded successfully",
        timer: 1500,
        showConfirmButton: false
      }).then(function () {
        window.location.href = "/allvideos";
      });
    }
    else if (oReq.status == 201) {
      document.getElementById("reUpEngVidError").innerHTML = "Filename already exists"
    }
    else if (oReq.status == 206) {
      document.getElementById("reUpKanVidError").innerHTML = "Filename already exists"
    }
    else {
      oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
    }
  };
  oOutput.innerHTML = "Sending file!";
  console.log("Sending file!")
  oReq.send(formData);
}

function audioReupload(form, event) {
  event.preventDefault();
  var reUpEng = document.getElementById("reuploadEngAudio").value
  var reUpKan = document.getElementById("reuploadKanAudio").value

  var allowedExtensions = /(\.mp3)$/i;

  if (reUpEng == "") {
    document.getElementById("reUpEngAudError").innerText = "Please select english audio !"
  }
  else if (!allowedExtensions.exec(reUpEng)) {
    document.getElementById("reuploadEngAudio").value = '';
    document.getElementById("reUpEngAudError").innerText = "Invalid file type"
  }
  else {
    document.getElementById("reUpEngAudError").innerText = ""
  }

  if (reUpKan == "") {
    document.getElementById("reUpKanAudError").innerText = "Please select kannada audio !"
  }
  else if (!allowedExtensions.exec(reUpKan)) {
    document.getElementById("reuploadKanAudio").value = '';
    document.getElementById("reUpKanAudError").innerText = "Invalid file type"
  }
  else {
    document.getElementById("reUpKanAudError").innerText = ""
  }
  const formData = new FormData(form);
  var oOutput = document.getElementById("static_file_response")
  var PkId = window.location.pathname.split("/").pop()
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/reupload/" + PkId + "/Audio", true);
  oReq.onload = function (oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
      console.log(oReq.response)
      $("#reUpAudio").modal('hide')
      Swal.fire({
        icon: 'success',
        title: "Audios uploaded successfully",
        timer: 1500,
        showConfirmButton: false
      }).then(function () {
        window.location.href = "/question/" + PkId ;
      });
    }
    else if (oReq.status == 201) {
      document.getElementById("reUpEngAudError").innerHTML = "Filename already exists"
    }
    else if (oReq.status == 208) {
      document.getElementById("reUpEngAudError").innerHTML = "Filename already exists in DB"
    }
    else if (oReq.status == 206) {
      document.getElementById("reUpKanAudError").innerHTML = "Filename already exists"
    }
    else if (oReq.status == 207) {
      document.getElementById("reUpKanAudError").innerHTML = "Filename already exists in DB"
    }
    else {
      oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
    }
  };
  oOutput.innerHTML = "Sending file!";
  console.log("Sending file!")
  oReq.send(formData);
}