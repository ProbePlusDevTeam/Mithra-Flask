from flask import Flask , render_template , request,redirect , url_for, jsonify,flash,session,send_from_directory,g
import os, requests, json, glob
import pandas as pd
from datetime import datetime
from requests_toolbelt.multipart import decoder
from cryptography.fernet import Fernet




###################### App Configuration ######################

UPLOAD_FOLDER = "/home/ubuntu/Uploads"
DOWNLOAD_FOLDER = "/home/ubuntu/Downloads"
REPORT_FOLDER = "/home/ubuntu/Reports"
SYNC_FOLDER = "/home/ubuntu/Sync_Datas"
FailedAPI = "/home/ubuntu/Failed_Offline"
Tokens = "/home/ubuntu/Token"

# app = Flask(__name__, static_folder="static", template_folder="templates")
app = Flask(__name__)
app.secret_key = "d0433ef368714972856a261e2538dc"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER
app.config['REPORT_FOLDER'] = REPORT_FOLDER
app.config['SYNC_FOLDER'] = SYNC_FOLDER
app.config['Failed_APIs'] = FailedAPI
app.config['Tokens'] = Tokens



###################### End of App Configuration ######################


###################### Global variable declaration ######################

Login_username = ""
Login_userid = ""
Login_user_role = ""

###################### End of Global variable declaration ######################

###################### Configuration Setup ######################

#base_url = "http://43.205.146.90:80/"
base_url = "https://www.mithraapp.co.in/"
###################### End of Configuration Setup ######################


###################### API Request to Frappe ######################

def apicall(method, url, data, role):

    test = open(app.config['Tokens'] + '/' + "token.json")
    data1 = json.load(test)


    api_url = base_url + url
    headers = {"Content-Type": "application/json; charset=utf-8",
                "Accept":"application/json"}
    response = "access"
    f = Fernet(key= b"7YyB12xXiRjZXcJ5OLQD5nNrtkPOb-AsNvOQNADcYQw=")
    if role == "admin":
        
        ma_token_decrypted = f.decrypt(data1["ma_token"])
        ma_token_decrypted =str(ma_token_decrypted)
        ma_token_decrypted = ma_token_decrypted[1:]
        ma_token_decrypted = ma_token_decrypted.replace("'","")
        headers["Authorization"] = ma_token_decrypted
    elif role == "study_investigator":

        ms_token_decrypted = f.decrypt(data1["ms_token"])
        ms_token_decrypted =str(ms_token_decrypted)
        ms_token_decrypted = ms_token_decrypted[1:]
        ms_token_decrypted = ms_token_decrypted.replace("'","")
        headers["Authorization"] = ms_token_decrypted
    elif role == "coordinator":

        mc_token_decrypted = f.decrypt(data1["mc_token"])
        mc_token_decrypted =str(mc_token_decrypted)
        mc_token_decrypted = mc_token_decrypted[1:]
        mc_token_decrypted = mc_token_decrypted.replace("'","")
        headers["Authorization"] = mc_token_decrypted
    elif role == "participant":

        mp_token_decrypted = f.decrypt(data1["mp_token"])
        mp_token_decrypted =str(mp_token_decrypted)
        mp_token_decrypted = mp_token_decrypted[1:]
        mp_token_decrypted = mp_token_decrypted.replace("'","")
        headers["Authorization"] = mp_token_decrypted
    elif role == "refresh":

        mt_token_decrypted = f.decrypt(data1["mt_token"])
        mt_token_decrypted =str(mt_token_decrypted)
        mt_token_decrypted = mt_token_decrypted[1:]
        mt_token_decrypted = mt_token_decrypted.replace("'","")
        headers["Authorization"] = mt_token_decrypted
    else:
        response = "no access"

    if response == "access":
        if method == "GET":
            response = requests.get(api_url, headers=headers, json=data)
            response = response.json()
        elif method == "POST":
            response = requests.post(api_url, headers=headers, json=data)
            response = response.json()
        elif method == "PUT":
            response = requests.put(api_url, headers=headers, json=data)
            response = response.json()
    return response

###################### End of API Request to Frappe ######################


###################### Login APIs ######################

def Refresh_Token():
    try:
        dict_new_token = {}
        test = open((app.config['Tokens'] + '/' + "static_token.json"))
        data1 = json.load(test)
        f = Fernet(key= b"7YyB12xXiRjZXcJ5OLQD5nNrtkPOb-AsNvOQNADcYQw=")
        Token_list = list(data1.keys())

        for i in range(len(Token_list)):
            if Token_list[i] == "mt_token":
                dict_new_token[Token_list[i]] = data1[Token_list[i]] 
            else:
                token_decrypted = f.decrypt(data1[Token_list[i]])
                token_decrypted =str(token_decrypted)
                token_decrypted = token_decrypted[1:]
                token_decrypted = token_decrypted.replace("'","")
                url = "api/method/mithra.mithra.doctype.tokens.api.tokens_data"
                data = {"type": Token_list[i], "old": token_decrypted}
                role ="refresh"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"][0]
                message = responses["new"].encode()
                encrypted = f.encrypt(message)
                encrypted = str(encrypted)
                encrypted = encrypted[1:]
                encrypted = encrypted.replace("'","")
                
                dict_new_token[Token_list[i]] = encrypted

        upload_dict = json.dumps(dict_new_token)
        with open((app.config['Tokens'] + '/' + "token.json"), "w") as outfile:
            outfile.write(upload_dict)
        responses = "Token has updated. Please login again!!!"
        return render_template('/login/login.html')
    except:
            return "An exception occurred" 

# Home Directory API (Login Page)
@app.route('/')
def login():
    return render_template('/login/login.html')


# Assigning global variable "user" before every request
@app.before_request
def before_request():
    g.user = None
    if 'user' in session:
        g.user = session['user']

# Logout API
@app.route('/logout')
def logout():
    time_url = "api/method/mithra.mithra.doctype.login_time.api.add_login_time"
    time_data = {"user_pri_id": session['user_id'], "user_name": session['user'], "date_time": str(datetime.now()), "role": session['role'], "device_id": "Web", "action1": "logout"}
    time_role = "admin"
    time_method = "POST"
    time_responses = {}
    time_responses = apicall(time_method, time_url, time_data, time_role)
    session.pop('user', None)
    return redirect(url_for('login'))


# Login authentication API
@app.route('/login_check' , methods = ['POST'])
def login_check():
    error = None; 
    result_token = ""
    if request.method == "POST":
        session.pop('user', None)
        session.pop('user_id', None)
        session.pop('role', None)
        user_name = request.form['username']
        password = request.form['password']

        url = "api/method/mithra.mithra.doctype.user_table.login.login"
        data = {"user_name": user_name, "password": password, "device_id":"web"}
        role = "admin"
        method = "POST"
        responses = {}
        responses = apicall(method, url, data, role)

        if "exc_type" in responses:
            responses = responses["exc_type"]
            if "PermissionError" in responses:
                Refresh_Token()

        if "message" in responses:
            responses = responses["message"]           
            if responses == "Password is incorrect, kindly reenter the password":
                flash("Password is incorrect, kindly reenter the password")
                responses = "Password is incorrect, kindly reenter the password"
                return render_template('/login/login.html', error = responses)

            elif responses == "Username not Available, Kindly check it":
                flash("Username not Available, Kindly check it")
                responses = "Username not Available, Kindly check it"
                return render_template('/login/login.html', error = responses)

            elif responses == "device not available":
                flash("Only ADMIN has access to the Application...!")
                responses = "Only ADMIN has access to the Application...!"
                return render_template('/login/login.html', error = responses)
                
            elif responses[0]["role"] == "admin":
                responses = responses[0]
                user = responses['user_name']
                user_id = responses['user_pri_id']
                role = responses['role']
                user = str(user)
                user_id = str(user_id)
                role = str(role)

                # Storing the variable in client side session
                session['user'] = user
                session['user_id'] = user_id
                session['role'] = role

                time_url = "api/method/mithra.mithra.doctype.login_time.api.add_login_time"
                time_data = {"user_pri_id": user_id, "user_name": user_name, "date_time": str(datetime.now()), "role": role, "device_id": "Web", "action1": "login"}
                time_role = "admin"
                time_method = "POST"
                time_responses = {}
                time_responses = apicall(time_method, time_url, time_data, time_role)

                if time_responses["message"] == "success":
                    return redirect (url_for('coordinators'))
                else:
                    return redirect (url_for('login'))

            elif responses[0]["role"] != "admin":
                flash("Only ADMIN has access to the Application...!")
                responses = "Only ADMIN has access to the Application...!"
                return render_template('/login/login.html', error = responses) 

        else:
            if "exc_type" in responses:
                responses = responses["exc_type"]
                if "PermissionError" in responses:
                    result_token = "Token has been updated. Please try again!!!!"
                else:
                    result_token = "Something went wrong"
            flash(result_token)
            return render_template('/login/login.html', error = result_token)
             

# API for changing password
@app.route('/changepassword', methods = ["POST"])
def changepassword():
    try:
        if request.method == "POST":
            cfdata = request.get_json()
            cfdata = cfdata[0]
            pwd = cfdata["password"]
            role = cfdata["role"]
            id = cfdata["id"]
            usr_id = ""
            result = {}

            if role == "coordinator":
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.one_coordinator"
            if role == "researcher":
                url = "api/method/mithra.mithra.doctype.researcher_details.api.one_researcher"
            if role == "study_investigator":
                url = "api/method/mithra.mithra.doctype.study_investigator_details.api.one_study_investigator"
            
            data = {"user_id" : id}
            role = "admin"
            method = "POST"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            usr_id = responses[0]["user_pri_id"]

            url = "api/method/mithra.mithra.doctype.user_table.login.changepassword"
            data = {"name": usr_id,  "password": pwd, "modified_user": session['user_id']}
            role = "admin"
            method = "POST"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            if responses == "updated":
                result["message"] = "success"
                return jsonify(result)
            else:
                result["message"] = "error"
                return jsonify(result)
    except:
            return "An exception occurred" 

###################### End of Login APIs ######################


###################### Study Investigator APIs ######################

@app.route('/Studyinvestigators')
def Studyinvestigators():
    try:
        if g.user:
            if request.method == "GET":
                url = "api/method/mithra.mithra.doctype.study_investigator_details.api.study_investigators"
                data = {}
                role = "admin"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                return render_template("role/study_investigator/study_investigators.html", responses = responses)
        return redirect(url_for('login'))
    except:
            return "An exception occurred"

@app.route('/Studyinvestigator/<PkId>')
def Studyinvestigator(PkId):
    try:
        if g.user:
            if request.method == "GET":
                url = "api/method/mithra.mithra.doctype.study_investigator_details.api.one_study_investigator"
                data = {"user_id" : PkId}
                role = "admin"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                return render_template("role/study_investigator/study_investigator.html", responses = responses[0])
        return redirect(url_for('login'))
    except:
            return "An exception occurred"
    
@app.route('/Addstudyinvestigator', methods = ["POST","GET"])
def Addstudyinvestigator():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                password = cfdata["password"]
                
                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.check_phone_email"
                data = {"mobile_number": mobile_number, "email_id": email_id}
                role ="admin"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                
                
                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.user_table.login.useradd"
                    data = {"user_name": email_id, "password": password , "role": "study_investigator", "active":"yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                    role = "admin"
                    method = "POST"
                    responses = {}
                    responses = apicall(method, url, data, role)

                    if email_id == responses["message"][0]["user_name"]:
                        result['message'] = "success"
                        url = "api/method/mithra.mithra.doctype.study_investigator_details.api.add_study_investigator"
                        data = {"user_pri_id": responses["message"][0]['user_pri_id'] ,"first_name": first_name, "last_name": last_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": "yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                        role = "admin"
                        method = "POST"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        if "message" in responses:
                            return jsonify(result)
                    else:
                        result['message'] = "Error"
                        return jsonify(result)
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/Editstudyinvestigator/<PkId>', methods = ["PUT"])
def Editstudyinvestigator(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                active = cfdata["active"]

                url = "api/method/mithra.mithra.doctype.study_investigator_details.api.one_study_investigator"
                data = {"user_id" : PkId}
                role = "admin"
                method = "GET"
                study_responses = {}
                study_responses = apicall(method, url, data, role)
                study_responses = study_responses["message"]
                usr_id = study_responses[0]["user_pri_id"]
                result = {}

                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.update_check_phone_email"
                role = "admin"
                method = "GET"
                responses = {}
                data = {"pri_id": usr_id, "mobile_number": mobile_number, "email_id": email_id}
                responses = apicall(method, url, data, role)
                responses = responses["message"]

                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.study_investigator_details.api.update_studyinvestigator"
                    role = "admin"
                    method = "PUT"
                    responses = {}
                    data = {"pri_id" : PkId,"first_name": first_name, "last_name":last_name ,"age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": active, "modified_user": session['user_id']}
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]
                    
                    usr_responses = username_update(usr_id, email_id)

                    if responses == "success" and "name" in usr_responses:
                        result['message'] = "success"
                        return jsonify(result)
                    else:
                        result["message"] = "error"
                        return jsonify(result)
                else:
                    result["message"] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Study Investigator APIs ######################


###################### Coordinator APIs ######################

@app.route('/coordinators')
def coordinators():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.coordinator_details.api.coordinators"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("role/coordinator/coordinators.html", responses = responses)
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/coordinator/<PkId>')
def coordinator(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.coordinator_details.api.one_coordinator"
            data = {"user_id" : PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            url = "api/method/mithra.mithra.doctype.location.api.co_loc_list"
            data = {"coordinator" : responses[0]["user_pri_id"]}
            role = "admin"
            method = "GET"
            values = {}
            values = apicall(method, url, data, role)
            values = values["message"]
            return render_template("role/coordinator/coordinator.html", responses = responses[0], values = values)
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/addcoordinator', methods = ['POST', 'GET'])
def addcoordinator():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                password = cfdata["password"]

                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.check_phone_email"
                data = {"mobile_number": mobile_number, "email_id": email_id}
                role ="admin"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}

                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.user_table.login.useradd"
                    data = {"user_name": email_id, "password": password , "role": "coordinator", "active":"yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                    role = "admin"
                    method = "POST"
                    responses = {}
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]
                    
                    if email_id == responses[0]["user_name"]:
                        result['message'] = "success"
                        url = "api/method/mithra.mithra.doctype.coordinator_details.api.add_coordinator"
                        data = {"user_pri_id": responses[0]['user_pri_id'] , "first_name": first_name, "last_name": last_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": "yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                        role = "admin"
                        method = "POST"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        if "message" in responses:
                            return jsonify(result)
                    else:
                        result['message'] = "Error"
                        return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))    
    except:
        return "An exception occurred"

@app.route('/editcoordinator/<PkId>', methods = ["PUT"])
def editcoordinator(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                active = cfdata["active"]
                pri_id = PkId

                url = "api/method/mithra.mithra.doctype.coordinator_details.api.one_coordinator"
                data = {"user_id" : PkId}
                role = "admin"
                method = "GET"
                co_responses = {}
                co_responses = apicall(method, url, data, role)
                co_responses = co_responses["message"]
                usr_id = co_responses[0]["user_pri_id"]
                result = {}

                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.update_check_phone_email"
                role = "admin"
                method = "GET"
                responses = {}
                data = {"pri_id": usr_id, "mobile_number": mobile_number, "email_id": email_id}
                responses = apicall(method, url, data, role)
                responses = responses["message"]

                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.coordinator_details.api.update_coordinator"
                    url = url
                    role = "admin"
                    method = "PUT"
                    responses = {}
                    data = {"pri_id": pri_id, "first_name": first_name, "last_name": last_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": active, "modified_user": session['user_id']}
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]

                    usr_responses = username_update(usr_id, email_id)

                    if responses == "data saved successfully" and "name" in usr_responses:
                        result['message'] = "success"
                        return jsonify(result)
                    else:
                        result["message"] = "error"
                        return jsonify(result)
                else:
                    result["message"] = responses
                    return jsonify(result)     
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

###################### End of Coordinator APIs ######################


###################### Researcher APIs ######################

@app.route('/researchers')
def researchers():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.researcher_details.api.researchers"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("role/researcher/researchers.html", responses = responses)
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/researcher/<PkId>')
def researcher(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.researcher_details.api.one_researcher"
            data = {"user_id" : PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            url = "api/method/mithra.mithra.doctype.location.api.re_loc_list"
            data = {"researcher" : responses[0]["user_pri_id"]}
            role = "admin"
            method = "GET"
            values = {}
            values = apicall(method, url, data, role)
            values = values["message"]
            return render_template("role/researcher/researcher.html", responses = responses[0], values = values)
        return redirect(url_for('login'))
    except:
            return "An exception occurred"      

@app.route('/addresearcher', methods = ['POST', 'GET'])
def addresearcher():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                password = cfdata["password"]

                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.check_phone_email"
                data = {"mobile_number": mobile_number, "email_id": email_id}
                role ="admin"
                method = "GET"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}

                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.user_table.login.useradd"
                    data = {"user_name": email_id, "password": password , "role": "researcher", "active":"yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                    role = "admin"
                    method = "POST"
                    responses = {}
                    responses = apicall(method, url, data, role)

                    if email_id == responses["message"][0]["user_name"]:
                        result['message'] = "success"
                        url = "api/method/mithra.mithra.doctype.researcher_details.api.add_researcher"
                        data = {"user_pri_id": responses["message"][0]['user_pri_id'] ,"first_name": first_name, "last_name": last_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": "yes", "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                        role = "admin"
                        method = "POST"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        if "message" in responses:
                            return jsonify(result)
                    else:
                        result['message'] = "Error"
                        return jsonify(result)
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editresearcher/<PkId>', methods = ["PUT"])
def editresearcher(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                first_name = cfdata["first_name"]
                last_name = cfdata["last_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                active = cfdata["active"]
                
                url = "api/method/mithra.mithra.doctype.researcher_details.api.one_researcher"
                data = {"user_id" : PkId}
                role = "admin"
                method = "GET"
                res_responses = {}
                res_responses = apicall(method, url, data, role)
                res_responses = res_responses["message"]
                usr_id = res_responses[0]["user_pri_id"]
                result = {}

                # Checking the availablity of mobile number and emailid
                url = "api/method/mithra.mithra.doctype.coordinator_details.api.update_check_phone_email"
                role = "admin"
                method = "GET"
                responses = {}
                data = {"pri_id": usr_id, "mobile_number": mobile_number, "email_id": email_id}
                responses = apicall(method, url, data, role)
                responses = responses["message"]

                if responses == "available":
                    url = "api/method/mithra.mithra.doctype.researcher_details.api.update_researcher"
                    url = url
                    role = "admin"
                    method = "PUT"
                    responses = {}
                    data = {"pri_id":PkId,"first_name": first_name, "last_name": last_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "active": active, "modified_user": session['user_id']}
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]

                    usr_responses = username_update(usr_id, email_id)

                    if responses == "success" and "name" in usr_responses:
                        result['message'] = "success"
                        return jsonify(result)
                    else:
                        result["message"] = "error"
                        return jsonify(result)
                else:
                    result["message"] = responses
                    return jsonify(result)
            return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Researcher APIs ######################


###################### Profile APIs ######################

@app.route('/viewprofile')
def ViewProfile():
    try:
        if g.user:
            if request.method == "GET":
                url = "api/method/mithra.mithra.doctype.admin_details.api.one_admin"
                data={"user_id": session['user_id']}
                role = "admin"
                method = "GET"
                responses ={}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                return jsonify(responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editprofile/<PkId>', methods = ["PUT"])
def editprofile(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                full_name = cfdata["full_name"]
                gender = cfdata["gender"]
                age = cfdata["age"]
                mobile_number = cfdata["number"]
                email_id = cfdata["email"]
                url = "api/resource/admin_details/"
                url = url + PkId
                role = "admin"
                method = "PUT"
                responses = {}
                data = {"full_name": full_name, "age": age ,"gender": gender, "mobile_number": mobile_number, "email_id": email_id, "modified_user": session['user_id']}
                responses = apicall(method, url, data, role)
                responses = responses["data"]
                return render_template("profile/viewprofile.html", responses = responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

    return
###################### End of Profile APIs ######################


###################### Participants APIs ######################

@app.route('/participants')
def participants():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.participant.api.participants"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            if responses:
                return render_template("role/participant/participants.html", responses = responses)
            else:
                flash("No Participants Available")
                responses = ['No Participant available']
                return render_template("role/participant/participants.html", responses = responses[0])
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 
        
@app.route('/participant_details/<PkId>')
def participant_details(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.participant.api.one_participant"
            data = {"user_id": PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            id_url = 'api/method/mithra.mithra.doctype.tracking.api.track_data'
            data = {"user_pri_id": PkId}
            role = "admin"
            method = "GET"
            id_responses = {}
            id_responses = apicall(method, id_url, data, role)
            id_responses = id_responses["message"][0]
            
            social_demography = id_responses["socio_demography"]
            disease_profile = id_responses["disease_profile"]

            social_url = 'api/resource/demography/'
            social_url = social_url + social_demography
            data = {}
            role = "admin"
            method = "GET"
            social_responses = {}
            social_responses = apicall(method, social_url, data, role)
            social_responses = social_responses["data"]

            disease_url = 'api/resource/disease_profile/'
            disease_url = disease_url + disease_profile
            data = {}
            role = "admin"
            method = "GET"
            disease_responses = {}
            disease_responses = apicall(method, disease_url, data, role)
            disease_responses = disease_responses["data"]

            disease_result = {}
            disease_list = []
            view_list = []
            if "diabetes_mellitus" in disease_responses:
                if disease_responses["diabetes_mellitus"] != "no":
                    disease_list.append("diabetes_mellitus")
                    view_list.append("Diabetes Mellitus")
                    texts = disease_responses["diabetes_mellitus"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["diabetes_mellitus"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "hypertension" in disease_responses:
                if disease_responses["hypertension"] != "no":
                    disease_list.append("hypertension")
                    view_list.append("Hypertension")
                    texts = disease_responses["hypertension"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["hypertension"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "heart_disease" in disease_responses:
                if disease_responses["heart_disease"] != "no":
                    disease_list.append("heart_disease")
                    view_list.append("Heart Disease")
                    texts = disease_responses["heart_disease"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["heart_disease"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "thyroid" in disease_responses:
                if disease_responses["thyroid"] != "no":
                    disease_list.append("thyroid")
                    view_list.append("Thyroid")
                    texts = disease_responses["thyroid"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["thyroid"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "chronic_liver_disease" in disease_responses:
                if disease_responses["chronic_liver_disease"] != "no":
                    disease_list.append("chronic_liver_disease")
                    view_list.append("Chronic Liver Disease")
                    texts = disease_responses["chronic_liver_disease"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["chronic_liver_disease"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "chronic_renal_disease" in disease_responses:
                if disease_responses["chronic_renal_disease"] != "no":
                    disease_list.append("chronic_renal_disease")
                    view_list.append("Chronic Renal Disease")
                    texts = disease_responses["chronic_renal_disease"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["chronic_renal_disease"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "malignancy" in disease_responses:
                if disease_responses["malignancy"] != "no":
                    disease_list.append("malignancy")
                    view_list.append("Malignancy")
                    texts = disease_responses["malignancy"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["malignancy"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "disabilities" in disease_responses:
                if disease_responses["disabilities"] != "no":
                    disease_list.append("disabilities")
                    view_list.append("Disabilities")
                    texts = disease_responses["disabilities"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["disabilities"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "gastric_problem" in disease_responses:
                if disease_responses["gastric_problem"] != "no":
                    disease_list.append("gastric_problem")
                    view_list.append("Gastric Problem")
                    texts = disease_responses["gastric_problem"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["gastric_problem"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "mental_illness" in disease_responses:
                if disease_responses["mental_illness"] != "no":
                    disease_list.append("mental_illness")
                    view_list.append("Mental Illness")
                    texts = disease_responses["mental_illness"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["mental_illness"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "epilepsy" in disease_responses:
                if disease_responses["epilepsy"] != "no":
                    disease_list.append("epilepsy")
                    view_list.append("Epilepsy")
                    texts = disease_responses["epilepsy"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["epilepsy"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "asthma" in disease_responses:
                if disease_responses["asthma"] != "no":
                    disease_list.append("asthma")
                    view_list.append("Asthma")
                    texts = disease_responses["asthma"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["asthma"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "skin_disease" in disease_responses:
                if disease_responses["skin_disease"] != "no":
                    disease_list.append("skin_disease")
                    view_list.append("Skin Disease")
                    texts = disease_responses["skin_disease"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["skin_disease"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3]}

            if "other_diseases" in disease_responses:
                if disease_responses["other_diseases"] != "no":
                    disease_list.append("other_diseases")
                    view_list.append("Other Diseases")
                    texts = disease_responses["other_diseases"]
                    texts = texts.replace("[","")
                    texts = texts.replace("]","")
                    res = list(texts.split(","))
                    disease_result["other_diseases"] = {"diagnosed" : res[0], "age": res[1], "treatment": res[2], "activities": res[3], "specification": res[4]}
            return render_template("role/participant/participant.html", details = responses[0], available_disease = disease_list, diseases = disease_result, social = social_responses, view = view_list)
        return redirect(url_for('login'))
    except:
            return "An exception occurred"



###################### End of Participants APIs ######################


###################### Location APIs ######################

@app.route('/locations')
def locations():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.location.api.locations"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("control/location/locations.html", responses = responses, coordinators = userlist("coordinator"), researchers = userlist("researcher"))
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/location/<PkId>')
def location(PkId):
    try:
        if g.user:
            url = "api/resource/location/"
            url = url + PkId
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["data"]
            return jsonify(responses)
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/Addlocation',methods=["GET","POST"])
def Addlocation():
    try:
        if g.user:
            if request.method == "POST":
                    cfdata = request.get_json()
                    cfdata = cfdata[0]
                    panchayat = cfdata["panchayat"]
                    village = cfdata["village"]
                    shg = cfdata["shg"]
                    loc_id = cfdata["locationid"]
                    if cfdata["coordinator"] == "null":
                        coordinator = "UT-6-2022-07-30-17:13:00-not allotted"
                    else:
                        coordinator = cfdata["coordinator"]
                    if cfdata["researcher"] == "null":
                        researcher = "UT-6-2022-07-30-17:13:00-not allotted"
                    else:
                        researcher = cfdata["researcher"]
                    eligible = "no"
                    group1 = "none"

                    url = "api/method/mithra.mithra.doctype.location.api.add_location"
                    data = {"loc_id": loc_id, "panchayat": panchayat, "village": village, "shg" : shg, "coordinator" : coordinator, "researcher" :researcher ,"eligible" : eligible, "group1" : group1, "active":"yes","created_user" : session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                    role = "admin"
                    method = "POST"
                    responses = apicall(method, url, data, role)
                    result = {}
                    if responses['message'] == "success":
                        result['message'] = "success"
                        return jsonify(result) 
                    elif "exception" in responses:
                        # SHG Name Should be unique
                        if "Duplicate entry" in responses["exception"]:
                            result['message'] = "SHG Name exists"
                            return jsonify(result) 
                        else:
                            result['message'] = "Error"
                            return jsonify(result) 
                    else:
                        result['message'] = responses['message']
                        return jsonify(result)

        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

@app.route('/editlocation/<PkId>', methods =["PUT"])
def editlocation(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                panchayat = cfdata["panchayat"]
                village = cfdata["village"]
                shg = cfdata["shg"]
                eligible = cfdata["eligibilty"]
                group1 = cfdata["group1"]
                active = cfdata["active"]
                loc_id = cfdata["location_id"]
                if cfdata["coordinator"] == "null":
                    coordinator = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    coordinator = cfdata["coordinator"]
                if cfdata["researcher"] == "null":
                    researcher = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    researcher = cfdata["researcher"]
                url = "api/method/mithra.mithra.doctype.location.api.update_location"
                url = url
                data = {"name": PkId, "loc_id": loc_id, "panchayat": panchayat, "village": village, "shg" : shg, "eligible" : eligible, "group1" : group1, "coordinator" : coordinator, "researcher" : researcher, "active": active, "modified_user" : session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)
                
                data = {}
                if responses['message'] == 'success':
                    data['message'] = "success"
                    return jsonify(data) 
                elif "exception" in responses:
                    # SHG name should be unique
                    if "Duplicate entry" in responses["exception"]:
                        data['message'] = "SHG Name exists"
                        return jsonify(data) 
                    else:
                        data['message'] = "Error"
                        return jsonify(data) 

                else:
                    data['message'] = responses['message']
                    return jsonify(data)

        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

###################### End of Location APIs ######################


###################### Video APIs ######################

@app.route('/allvideos')
def allvideos():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.video.api.videos"
            data = {}
            role = "admin"
            method = "PUT"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template('resource/video/videos.html', responses = responses, surveys = Activesurveylist(),sub_mod_no = allsub_module_dd())
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

@app.route('/video/<PkId>')
def video(PkId):
    try:
        if g.user:
            url = "api/resource/video/"
            url = url + PkId
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["data"]
            sur_id = responses["sur_pri_id"]
            responses = [responses, sub_module_dd(sur_id)]
            return jsonify(responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/addvideo', methods = ["POST", "GET"])
def addvideo():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                sur_id = cfdata["survey_id"]
                sub_module_no = cfdata['sub_module_no']
                video_name_e = cfdata['video_name_e']
                video_name_k = cfdata['video_name_k']
                video_location_e = "none"
                video_location_k = "none"

                url = "api/method/mithra.mithra.doctype.video.api.add_video"
                data = {"sub_module_no": sub_module_no, "sur_pri_id" : sur_id, "video_name_e": video_name_e, "video_name_k": video_name_k, "video_location_e": video_location_e, "video_location_k": video_location_k, "active":"yes","created_user" : session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if "name" in responses[0]:
                    vid_id = responses[0]["name"]
                    result['message'] = ["success",vid_id]
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"


@app.route('/uploadvideo', methods = ["POST","GET"])
def uploadvideo():
    try:
        if g.user:
            if request.method == "POST":
                sur_id = request.form["vidSurveyName"]
                sub_module_no = request.form['vidSubModNo']
                video_name_e = request.form['video_english']
                video_name_k = request.form['video_kannada']
    
                video_e_filename = request.files['eng_video']
                video_k_filename = request.files['kan_video']

                eng_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", video_e_filename.filename))
                kan_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", video_k_filename.filename))

                #Checking the english file name already eists or not
                if eng_file_exist:
                    resp = {"success": True, "response": "file name exists"}
                    return jsonify(resp), 201
                else:
                    #Checking the kannada file name already eists or not
                    if kan_file_exist:
                        resp = {"success": True, "response": "file name exists"}
                        return jsonify(resp), 206
                    else:
                        # If the file name does not exists then saving the file to the server
                        video_k_filename.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", video_k_filename.filename))
                        video_e_filename.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", video_e_filename.filename))
                        
                        url = "api/method/mithra.mithra.doctype.video.api.add_video"
                        data = {"sub_module_no": sub_module_no, "sur_pri_id" : sur_id, "video_name_e": video_name_e, "video_name_k": video_name_k, "video_location_e": video_e_filename.filename, "video_location_k": video_k_filename.filename, "active":"yes","created_user" : session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                        role = "admin"
                        method = "POST"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        responses = responses["message"]
                        result = {}
                        if "name" in responses[0]:
                            resp = {"success": True, "response": "file saved!"}
                            return jsonify(resp), 200
                        else:
                            # If Kannada file name already eists then removing english file which has been uploaded/saved to the server
                            os.remove(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", video_e_filename.filename))
                            resp = {"success": True, "response": responses}
                            return jsonify(resp), 207         
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editvideo/<PkId>', methods = ["PUT"])
def editvideo(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                sur_id = cfdata["survey_id"]
                sub_module_no = cfdata['sub_module_no']
                video_name_e = cfdata['video_name_e']
                video_name_k = cfdata['video_name_k']
                location_e = cfdata["location_e"]
                location_k = cfdata["location_k"]
                active = cfdata['active']

                url = "api/method/mithra.mithra.doctype.video.api.update_video"
                data = {"name": PkId, "sub_module_no": sub_module_no, "sur_pri_id" : sur_id, "video_name_e": video_name_e, "video_name_k": video_name_k, "active":active,"video_location_e": location_e,"video_location_k": location_k, "modified_user" : session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if responses == "success":
                    result['message'] = "success"
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Video APIs ######################


###################### Download File APIs ######################

# Downloading the files(Audios,Videos,Images) from the flask server to android
@app.route('/downloadfile/<secret_key>/<foldername>/<filename>')
def return_files_tut(secret_key,foldername,filename):
    try:
        if secret_key == app.secret_key:
            return send_from_directory(os.path.join(app.config["UPLOAD_FOLDER"]  +'/' + foldername  +'/'), filename , as_attachment=True)
        return redirect(url_for('login'))
    except Exception as e:
        return str(e)


@app.route('/downloadfile/web/<foldername>/<filename>')
def return_files_web(foldername,filename):
    try:
        return send_from_directory(os.path.join(app.config["REPORT_FOLDER"]  +'/' + foldername  +'/'), filename , as_attachment=True)

    except Exception as e:
        return str(e)
###################### Download File APIs ######################

###################### Devices APIs ######################

@app.route('/devices')
def devices():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.devices.api.devices"
            data = {}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("control/device/devices.html", responses = responses, coordinators = userlist("coordinator"), researchers = userlist("researcher"))
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/device/<PkId>')
def device(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.devices.api.one_device"
            data = {"device_id" : PkId}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"][0]
            return jsonify(responses)
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/Adddevices',methods = ["GET","POST"])
def Adddevices():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                device_id = cfdata["device_id"]
                device_details = cfdata["device_details"]
                device_type = cfdata["device_type"]
                if cfdata["alloted_coordinator"] == "null":
                    alloted_coordinator = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    alloted_coordinator = cfdata["alloted_coordinator"]
                if cfdata["alloted_researcher"] == "null":
                    alloted_researcher = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    alloted_researcher = cfdata["alloted_researcher"]

                url = "api/resource/devices"
                data = {"device_id": device_id, "device_details" : device_details, "device_type": device_type, "allotment_cor": alloted_coordinator, "allotment_res": alloted_researcher, "active":"yes", "created_user": session['user_id'], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = apicall(method, url, data, role)
                data = {}
                if "data" in responses:
                    data['message'] = "success"
                    return jsonify(data) 
                elif "exception" in responses:
                    # Manual Device ID should be unique 
                    if "Duplicate entry" in responses["exception"]:
                        data['message'] = "Device ID exists"
                        return jsonify(data) 
                    else:
                        data['message'] = "Error"
                        return jsonify(data) 
                return jsonify(data)
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

@app.route('/editdevice/<PkId>', methods = ["PUT"])
def editdevice(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                device_id = cfdata["device_id"]
                device_details = cfdata["device_details"]
                device_type = cfdata["device_type"]
                if cfdata["alloted_coordinator"] == "null":
                    alloted_coordinator = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    alloted_coordinator = cfdata["alloted_coordinator"]
                if cfdata["alloted_researcher"] == "null":
                    alloted_researcher = "UT-6-2022-07-30-17:13:00-not allotted"
                else:
                    alloted_researcher = cfdata["alloted_researcher"]
                active = cfdata["active"]

                url = "api/method/mithra.mithra.doctype.devices.api.update_device"
                data = {"name": PkId, "device_id""": device_id, "device_details" : device_details, "device_type": device_type, "allotment_cor": alloted_coordinator, "allotment_res": alloted_researcher, "active": active, "modified_user": session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if responses == "success":
                    result['message'] = "success"
                    return jsonify(result)  
                else:
                    result['message'] = responses
                    return jsonify(result) 
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

###################### End of Devices APIs ######################


###################### Question APIs ######################
@app.route('/addquestionpage/<PkId>')
def addquestionpage(PkId):
    try:
        if g.user:
            response = {}
            response['sur_id'] = PkId
            return render_template('resource/survey/survey_question_create.html', response = response)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"
  
@app.route('/que_Surveylist')
def que_Surveylist():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey_data.api.survey_data_list"
            data = {}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("resource/survey/one_survey_question.html", responses = responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/questions/<version>/<PkId>')
def questions(version,PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey_questions.api.questions"
            data = {"filter_data": "{'sur_pri_id':'" + PkId +"'}"}
            role = "admin"
            method = "GET"
            q_responses = apicall(method, url, data, role)
            q_responses = q_responses["message"]

            if (len(q_responses) == 0):
                responses = ["No questions available"]
                return render_template("resource/survey/survey_questions_list.html", responses = responses[0], sur_id = PkId, sur_name = get_survey_name(PkId))
            else:
                responses = []
                que_opt = {}
                
                for que in q_responses:
                    if version == "eng":
                        que_list = {}
                        name = que["name"]
                        que_list["version"] = "eng"
                        que_list["sur_id"] = que["sur_pri_id"]
                        que_list["que_pk_id"] = que["name"]
                        que_list["que_num"] = que["qn_number"]
                        que_list["que"] = que["question_e"]
                        que_list["opt_type"] = que["option_type"]
                        que_list["que_branch"] = que["qn_branch"]
                        que_list["audio"] = que["audio_e"]
                        que_list["status"] = que["active"]
                        que_list["section_name"] = que["section_name"]
                        que_list["section"] = que["section"]
                        
                        url = "api/method/mithra.mithra.doctype.survey_question_options.api.options"
                        data = {"filter_data": "{'question_id' : '"+ name +"'}"}
                        role = "admin"
                        method = "GET"
                        op_responses = apicall(method, url, data, role)
                        op_responses = op_responses["message"]
                        opt_list = {}
                        i = 1
                        for opt in op_responses:
                            opt_list["opt"+ str(i)] = opt["option_e"]
                            opt_list["opt" + str(i) + "_subbranch"] = opt["option_sb"]
                            opt_list["opt" + str(i) + "_weight"] = opt["option_w"]
                            i = i + 1
                        opt_list["no_opt"] = i - 1
                        que_opt = {**que_list, **opt_list}
                        responses.append(que_opt)
                    
                    elif version == "kan":
                        que_list = {}
                        name = que["name"]
                        que_list["version"] = "kan"
                        que_list["sur_id"] = que["sur_pri_id"]
                        que_list["que_pk_id"] = que["name"]
                        que_list["que_num"] = que["qn_number"]
                        que_list["que"] = que["question_k"]
                        que_list["opt_type"] = que["option_type"]
                        que_list["que_branch"] = que["qn_branch"]
                        que_list["audio"] = que["audio_k"]
                        que_list["status"] = que["active"]
                        que_list["section_name"] = que["section_name_k"]
                        que_list["section"] = que["section"]
                        
                        url = "api/method/mithra.mithra.doctype.survey_question_options.api.options"
                        data = {"filter_data": "{'question_id' : '"+ name +"'}"}
                        role = "admin"
                        method = "GET"
                        op_responses = apicall(method, url, data, role)
                        op_responses = op_responses["message"]
                        opt_list = {}
                        i = 1
                        for opt in op_responses:
                            opt_list["opt"+ str(i)] = opt["option_k"]
                            opt_list["opt" + str(i) + "_subbranch"] = opt["option_sb"]
                            opt_list["opt" + str(i) + "_weight"] = opt["option_w"]
                            i = i + 1
                        opt_list["no_opt"] = i - 1
                        que_opt = {**que_list, **opt_list}

                        responses.append(que_opt)
                response = {}
                response['sur_id'] = PkId
                return render_template("resource/survey/survey_questions_list.html", responses = responses, response = response, sur_id = PkId, sur_name = get_survey_name(PkId))
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/question/<PkId>')
def question(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey_questions.api.questions"
            data = {"filter_data": "{'name':'" + PkId +"'}"}
            role = "admin"
            method = "GET"
            q_responses = apicall(method, url, data, role)
            q_responses = q_responses["message"]
            responses = []
            que_opt = {}
            for que in q_responses:
            
                que_list = {}
                name = que["name"]
                que_list["sur_id"] = que["sur_pri_id"]
                que_list["que_pk_id"] = que["name"]
                que_list["que_num"] = que["qn_number"]
                que_list["que_e"] = que["question_e"]
                que_list["que_k"] = que["question_k"]
                que_list["opt_type"] = que["option_type"]
                que_list["que_branch"] = que["qn_branch"]
                que_list["audio_e"] = que["audio_e"]
                que_list["audio_k"] = que["audio_k"]
                que_list["active"] = que["active"]
                que_list["section_name_e"] = que["section_name"]
                que_list["section_name_k"] = que["section_name_k"]
                que_list["section"] = que["section"]
                
                url = "api/method/mithra.mithra.doctype.survey_question_options.api.options"
                data = {"filter_data": "{'question_id' : '"+ name +"'}"}
                role = "admin"
                method = "GET"
                op_responses = apicall(method, url, data, role)
                op_responses = op_responses["message"]
                op_no = len(op_responses)

                que_list["no_opt"] = op_no

                opt_list = {}
                i = 1
                for opt in op_responses:
                    opt_list["opt"+ str(i) + "_no"] = i
                    opt_list["optid" + str(i)] = opt["id"]
                    opt_list["opt"+ str(i) + "_e"] = opt["option_e"]
                    opt_list["opt"+ str(i) + "_k"] = opt["option_k"]
                    opt_list["opt" + str(i) + "_subbranch"] = opt["option_sb"]
                    opt_list["opt" + str(i) + "_weight"] = opt["option_w"]
                    opt_list["opt" + str(i) + "_active"] = opt["active"]
                    i = i + 1
                opt_list["no_opt"] = i - 1
                que_opt = {**que_list, **opt_list}

                responses.append(que_opt)
            return render_template("resource/survey/survey_question_edit.html", responses = responses[0])
        return redirect(url_for('login'))
    except:
            return "An exception occurred" 

@app.route('/Addquestion', methods =["POST","GET"])
def Addquestion():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_id = cfdata["survey_id"]
                que_number = cfdata["que_number"]
                section = cfdata["section"]
                section_name_e = cfdata["section_name_e"]
                section_name_k = cfdata["section_name_k"]
                que_branch = cfdata["que_branch"]
                opttype = cfdata["opttype"]
            
                que_e = cfdata["que_e"]
                que_k = cfdata["que_k"]
                opt_e = cfdata["opt_e"]
                opt_k = cfdata["opt_k"]
                opt_sb = cfdata["opt_sb"]
                num = len(cfdata["opt_w"])
                option_w = []
                for i in range(num):
                    if cfdata["opt_w"][i] == "":
                        option_w.append("null")
                    else:
                        option_w.append(cfdata["opt_w"][i])
                num = len(opt_e)
               
                url = "api/method/mithra.mithra.doctype.survey_questions.api.add_question"
                data = {"sur_pri_id": survey_id, "section": section, "section_name": section_name_e, "section_name_k": section_name_k, "qn_number": que_number, "question_e": que_e, "question_k": que_k, "qn_branch": que_branch, "option_type": opttype, "active":"yes","created_user": session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = apicall(method, url, data, role)
                result = {}
                if "name" in responses["message"][0]:
                    queid = str(responses["message"][0]["name"])
                    result["message"] = ["success",queid,survey_id]
                    if opttype == "single_select" or opttype == "multi_select":
                        try:
                            for x in range(num):
                                url = "api/method/mithra.mithra.doctype.survey_question_options.api.add_survey_option"
                                data = {"sur_pri_id": survey_id, "question_id": queid, "option_no": int(x + 1), "option_e": opt_e[x], "option_k": opt_k[x], "option_w": option_w[x], "option_sb": opt_sb[x], "active":"yes","created_user": session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                                role = "admin"
                                method = "POST"
                                responses = apicall(method, url, data, role)
                        except:
                            return "Option doesn't addded"
                    return jsonify(result)
                else:
                    result["message"] = responses["message"]
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
            return "An exception occurred"

@app.route('/editquestion/<PkId>', methods = ["PUT"])
def editquestion(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_id = cfdata["sur_id"]
                que_number = cfdata["q_num"]
                section = cfdata["section"]
                section_name_e = cfdata["question_sectionName_e"]
                section_name_k = cfdata["question_sectionName_k"]
                que_branch = cfdata["branch"]
                opttype = cfdata["type"]
                que_e = cfdata["eng_ques"]
                que_k = cfdata["kan_ques"]
                opt_e = cfdata["eng_opt"]
                opt_k = cfdata["kan_opt"]
                opt_sb = cfdata["sub_branch"]
                opt_w = cfdata["weitage"]
                q_active = cfdata["active"]
                opt_id = cfdata["opt_id"]
                opt_no = cfdata["opt_number"]

                url = "api/method/mithra.mithra.doctype.survey_questions.api.edit_question"
                data = {"name": PkId, "sur_pri_id": survey_id, "section": section, "section_name": section_name_e, "section_name_k": section_name_k, "qn_number": que_number, "question_e": que_e, "question_k": que_k, "qn_branch": que_branch, "option_type": opttype, "active": q_active, "modified_user" : session['user_id']}
                role = "admin"
                method = "PUT"
                responses = apicall(method, url, data, role)
                result = {}
                if "name" in responses["message"][0]:
                    queid = str(responses["message"][0]["name"])
                    result["message"] = "success"
                if opttype == "single_select" or opttype == "multi_select":
                    try:
                        for x in range(len(opt_e)):
                            if opt_id[x] != "null":
                                url = "api/method/mithra.mithra.doctype.survey_question_options.api.update_survey_option"
                                data = {"name": opt_id[x], "option_no": opt_no[x], "sur_pri_id": survey_id, "question_id": queid, "option_e" : opt_e[x], "option_k" : opt_k[x], "option_w" : opt_w[x], "option_sb" : opt_sb[x] ,"active": q_active , "modified_user" : session['user_id']}
                                role = "admin"
                                method = "PUT"
                                responses = apicall(method, url, data, role)
                            else:
                                data1 = []
                                dic = {}
                                dic["option_no"] = x
                                dic["option_e"] = opt_e[x]
                                dic["option_k"] = opt_k[x]
                                dic["option_w"] = opt_w[x]
                                dic["option_sb"] = opt_sb[x]
                                data1.append(dic)
                                data1 = data1[0]
                                option = str(data1)
                                
                                url = "api/method/mithra.mithra.doctype.survey_question_options.api.add_survey_option"
                                data = {"sur_pri_id": survey_id, "question_id": queid, "options": option, "active":"yes","created_user": session['user_id'], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified"}
                                role = "admin"
                                method = "POST"
                                responses = apicall(method, url, data, role)
                    except:
                        return "Option doesn't updated"
                return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 

@app.route('/optionstatus/<PkId>', methods = ["PUT"])
def optionstatus(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                q_active = cfdata["active"]

                url = "api/resource/survey_question_options/"
                url = url + PkId
                data = {"active": q_active , "modified_user" : session['user_id']}
                role = "admin"
                method = "PUT"
                responses = apicall(method, url, data, role)
                result = {}
                if "data" in responses:
                    result['message'] = "success"
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/Uploadfile', methods = ["POST","GET"])
def Uploadfile():
    try:
        if g.user:
            if request.method == 'POST':
                ques_audio_id = request.form['ques_audioid']
                
                engfile = request.files['eng_audio']
                kanfile = request.files['kan_audio']

                eng_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", engfile.filename))
                kan_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", kanfile.filename))

                # Checking english file name already exists in the server
                if eng_file_exist:
                    resp = {"success": True, "response": "file name exists"}
                    return jsonify(resp), 201
                else:
                    # Checking kannada file name already exists in the server
                    if kan_file_exist:
                        resp = {"success": True, "response": "file name exists"}
                        return jsonify(resp), 206
                    else:
                        # Saving/uploading the files to the server
                        engfile.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", engfile.filename))
                        kanfile.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", kanfile.filename))

                        url = "api/resource/survey_questions/"
                        url = url + ques_audio_id
                        data = {"audio_e": engfile.filename, "audio_k" : kanfile.filename, "modified_user": session['user_id']}
                        role = "admin"
                        method = "PUT"
                        responses = apicall(method, url, data, role)
                        if "data" in responses:
                            resp = {"success": True, "response": "file saved!"}
                            return jsonify(resp), 200

        return redirect(url_for('login'))
    except:
        return "An exception occurred"


###################### End of Question APIs ######################


###################### Survey APIs ######################

@app.route('/create_survey/<PkId>')
def create_survey(PkId):
    try:
        if g.user:
            url = "api/resource/survey_data/"
            url = url + PkId
            data = {}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["data"]
            sur_name = responses["survey_name"]
            sur_id = responses["survey_pri_id"]
            return render_template("resource/survey/survey_create.html", sur_name = sur_name, sur_id = sur_id)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/surveylist')
def surveylist():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey_data.api.survey_data_list"
            data = {}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("resource/survey/all_surveys.html", responses = responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/surveys/<PkId>')
def surveys(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey.api.all_survey_instance"
            data = {"sur_pri_id": PkId}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            if (len(responses) == 0):
                responses = ["No survey instance available"]
                return render_template("resource/survey/surveys.html", responses = responses[0], survey_name = get_survey_name(PkId),survey_pri_id = PkId)
            else:
                return render_template("resource/survey/surveys.html", responses = responses, survey_pri_id = PkId)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"


@app.route('/survey/<PkId>')
def survey(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.survey.api.one_survey_instance"
            data = {"sur_ins_id": PkId }
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return jsonify(responses[0])
        return redirect(url_for('login'))
    except:
        return "An exception occurred" 


@app.route('/Addsurvey', methods = ["POST","GET"])
def Addsurvey():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_name = cfdata["survey_name"]

                url = "api/method/mithra.mithra.doctype.survey_data.api.add_survey"
                data = {"survey_name": survey_name, "active": "yes", "created_user": session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if responses == "success":
                    result['message'] = "success"
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"  

@app.route('/addsurveyinstance/<PkId>', methods = ["POST","GET"])
def addsurveyinstance(PkId):
    try:
        if g.user:
             if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                cycles = cfdata["cycles"]
                days = cfdata["days"]
                plus = cfdata["plus"]
                minus = cfdata["minus"]
                filled_by = cfdata["filled_by"]
                group = cfdata["group"]
                
                # Merging the list variable from the frontend into dict
                data1 = []
                num = len(cycles)
                for x in range(num):
                    dic = {}
                    dic["instance"] = cycles[x]
                    dic["days"] = days[x]
                    dic["plusdays"] = plus[x]
                    dic["minusdays"] = minus[x]
                    dic["filled_by"] = filled_by[x]
                    dic["group"] = group[x]
                    data1.append(dic)

                for data in data1:
                    data = str(data)
                    url = "api/method/mithra.mithra.doctype.survey.api.add_survey_instance"
                    value = {"survey_pri_id": PkId, "repeat": data, "active": "yes", "created_user": session['user_id'], "modified_user" : "UT-9-2022-07-11-08:19:58-no_one_modified"}
                    data = value
                    role = "admin"
                    method = "POST"
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]
                result ={}
                if "saved successfully" in responses:
                    result['message'] = "success"
                    return jsonify(result)
                elif "cycle already exist" in responses:
                    result['message'] = responses
                    return jsonify(result)
                elif "Days already exist" in responses:
                    result['message'] = responses
                    return jsonify(result)
                else:
                    result['message'] = "error"
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"


@app.route('/editsurvey/<PkId>', methods = ["PUT"])
def editsurvey(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_name = cfdata["survey_name"]
                days = cfdata["days"]
                plusdays = cfdata["plusdays"]
                minusdays = cfdata["minusdays"]
                group1 = cfdata["group1"]
                filled_by = cfdata["filled_by"]
                active = cfdata["active"]
                survey_pri_id = cfdata["survey_id"]

                url = "api/method/mithra.mithra.doctype.survey_data.api.update_survey_name"
                data = {"name": survey_pri_id,"active": "yes", "survey_name": survey_name, "modified_user": session['user_id']}
                role = "admin"
                method = "PUT"
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if responses == "success":
                    result['message'] = "success"
                    url = "api/method/mithra.mithra.doctype.survey.api.update_survey_instance"
                    data = {"name": PkId,"survey_pri_id": survey_pri_id, "days": days, "plusdays": plusdays, "minusdays": minusdays, "group1": group1, "filled_by": filled_by, "active": active, "modified_user" : session['user_id']}
                    role = "admin"
                    method = "PUT"
                    responses = apicall(method, url, data, role)
                    responses = responses["message"]
                    
                    if responses == "success":
                        return jsonify(result)
                    else:
                        result['message'] = responses
                        return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"



###################### End of Survey APIs ######################


###################### Module APIs ######################

@app.route('/modules')
def Modules():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.module.api.modules"
            data = {"filter_data": "null"}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("control/module/module.html", responses = responses, surveys = Activesurveylist()) 
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/Module/<PkId>')
def Module(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.module.api.one_module"
            data = {"name": PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return jsonify(responses[0])
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/AddModule', methods=["POST"])
def AddModule():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_pri_id =  cfdata["sur_id"]
                module_number = cfdata["module_number"]
                sub_module_name = cfdata["sub_module_name"]
                sub_module_number = cfdata["sub_module_number"]
                if cfdata["group1"] == "":
                    group1 = "none"
                else:
                    group1 = cfdata["group1"]
                url = "api/method/mithra.mithra.doctype.module.api.add_module"
                data = {"survey_pri_id": survey_pri_id, "module_number": module_number, "sub_module_name": sub_module_name, "sub_module_number": sub_module_number, "group1": group1, "active": "yes",  "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = {}
                responses = apicall(method, url, data, role)
                responses= responses["message"]
                result = {}
                if "survey_pri_id" in responses[0]:
                    result['message'] = "success"
                    return jsonify(result)
                elif responses == "sub module number exist":
                    result['message'] = "SubModule Number exists"
                    return jsonify(result)
                else:
                    result["message"] = "error"
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editModule/<PkId>', methods = ["PUT"])
def editModule(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_pri_id = cfdata["sur_id"]
                module_number = cfdata["module_number"]
                sub_module_name = cfdata["sub_module_name"]
                sub_module_number = cfdata["sub_module_number"]
                active = cfdata["active"] 
                if cfdata["group1"] == "":
                    group1 = "none"
                else:
                    group1 = cfdata["group1"]

                url = "api/method/mithra.mithra.doctype.module.api.edit_module"
                data = {"module_id": PkId, "survey_pri_id": survey_pri_id, "module_number": module_number, "sub_module_name": sub_module_name, "sub_module_number": sub_module_number, "group1": group1, "active": active, "modified_user": session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses['message']
                result = {}
                if responses == "success":
                    result['message'] = "success"
                    return jsonify(result)
                elif "exist" in responses:
                    result['message'] = responses
                    return jsonify(result)
                else:
                    result["message"] = "error"
                    return jsonify(result)
            return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Module APIs ######################


###################### Modulemapping APIs ######################


@app.route('/mod_map_surveylist')
def mod_map_surveylist():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.module_mapping.api.mod_map_mod_sur_list"
            data = {}
            role = "admin"
            method = "GET"
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("control/module_mapping/mod_map_survey_list.html", responses = responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/sur_fil_mod_map/<surid>')
def sur_fil_mod_map(surid):
    try:
        if g.user:
            value = {"sur_pri_id": surid}
            url = "api/method/mithra.mithra.doctype.survey_data.api.one_survey"
            data = value
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            responses = responses[0]
            survey_name = responses['survey_name']



            value = {}
            value['survey_pri_id'] = surid
            url = "api/method/mithra.mithra.doctype.module_mapping.api.sur_module_mapping"
            data = value
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            length = len(responses)
            if length == 0:
                responses = "No list available"
                return render_template("control/module_mapping/module_mapping.html", responses = responses, length = length, survey_id = surid, survey_name = survey_name, surveynamedata = Activesurveylist(), submoduledata = sub_module_dd(surid), surveyinstancedata = instance(surid), sur_name = get_survey_name(surid) )
            mod = []
            mod_num = []

            # Removing the special char from the list of primary id
            for i in responses:
                texts = i["module_no"]
                texts = texts.replace("[","")
                texts = texts.replace("]","")
                texts = texts.replace("'","")
                texts = texts.replace(" ","")
                instances = list(texts.split(","))
                mod.append(instances)

            # Appending the module number from it's primary key
            for j in mod:
                test = []
                for l in j:
                    url = "api/method/mithra.mithra.doctype.module.api.one_module"
                    data = {"name" : l}
                    role = "admin"
                    method = "POST"
                    mods = {}
                    mods = apicall(method, url, data, role)
                    mods = mods["message"]
                    test.append(mods[0]["sub_module_number"])
                mod_num.append(test)
            
            
            # Removing special char from the list to show clean text in the frontend table
            num = 0
            for aa in mod_num:
                split = str(aa)
                split = split.replace("'","")
                responses[num]["mod_num"] = split
                num = num + 1

            url = "api/resource/survey_data/"
            url = url + surid
            data = { }
            role = "admin"
            method = "GET"
            survey = apicall(method, url, data, role)
            survey = survey["data"]
            sur_name = survey["survey_name"]
            sur_id = survey["name"]
            return render_template("control/module_mapping/module_mapping.html", survey_id = sur_id , survey_name = sur_name ,responses = responses, surveynamedata = Activesurveylist(), submoduledata = sub_module_dd(surid), surveyinstancedata = instance(surid), length = length, sur_name = get_survey_name(surid))
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/AllModulemapping')
def AllModulemapping():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.module_mapping.api.all_module_mapping"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template("control/module_mapping/module_mapping.html", responses = responses, surveynamedata = Activesurveylist(), submoduledata = sub_module_dd(), surveyinstancedata = instance())
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/Modulemapping/<PkId>')
def Modulemapping(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.module_mapping.api.one_module_mapping"
            data = {"name": PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            texts = responses[0]["module_no"]
            texts = texts.replace("[","")
            texts = texts.replace("]","")
            texts = texts.replace("'","")
            texts = texts.replace(" ","")
            instance = list(texts.split(","))
            mod_num = []

            for i in instance:
                url = "api/method/mithra.mithra.doctype.module.api.one_module"
                i = str(i)
                i.lstrip()

                data = {"name" : i}
                role = "admin"
                method = "POST"
                mod = {}
                mod = apicall(method, url, data, role)
                mod = mod["message"]
                mod_num.append(mod[0]["sub_module_number"])

            ins_days = responses[0]["survey_instance_days"]
            ins_days = ins_days.replace("[","")
            ins_days = ins_days.replace("]","")
            ins_days = ins_days.replace("'","")
            ins_days = ins_days.replace(" ","")
            sub_mod = list(ins_days.split(","))

            return jsonify([responses[0], instance, sub_mod, mod_num])
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/CreateModulemapping', methods=["POST"])
def CreateModulemapping():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                survey_pri_id = cfdata["sur_id"]
                description = cfdata["description"]
                min_score = cfdata["min_score"]
                max_score = cfdata["max_score"]
                survey_instance_days = cfdata["survey_instance_days"]
                survey_instance_days = str(survey_instance_days)
                survey_instance_days = survey_instance_days.replace("'", "")
                week_no = cfdata["week_no"]
                module_no = cfdata["module_no"]
                module_no = str(module_no)
                module_no = module_no.replace("'","")
                module_no = str(module_no)

                if cfdata["interval1"] != "null":
                    interval1 = cfdata["interval1"]
                else:
                    interval1 = "0"
                module_data = {"week_no" : week_no, "module_no" : module_no, "interval1" : interval1}
                module_data =str(module_data)


                url = "api/method/mithra.mithra.doctype.module_mapping.api.add_module_mapping"
                data = {"survey_pri_id": survey_pri_id, "description": description, "min_score": min_score, "max_score": max_score, "survey_instance_days": str(survey_instance_days), "module_data": module_data, "active": "yes",  "created_user": session['user_id'], "modified_user":"UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if "success" in responses:
                    result['message'] = "success"
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editModulemapping/<PkId>', methods = ["PUT"])
def editModulemapping(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                print(cfdata)
                min_score = cfdata["min_score"]
                max_score = cfdata["max_score"]
                week_no = cfdata["week_no"]
                module_no = cfdata["module_no"]
                module_no = str(module_no)
                module_no = module_no.replace("'", "")
                module_no = str(module_no)
                interval1 = cfdata["interval1"]
                description = cfdata["description"]
                survey_instance_days = cfdata["survey_instance_days"]
                sur_id = cfdata["survey_name"]
                active = cfdata["active"]
                module_data = {"week_no" : week_no, "module_no" : module_no, "interval1" : interval1}
                url = "api/method/mithra.mithra.doctype.module_mapping.api.edit_module_mapping"
                data = {"name": PkId, "min_score": min_score, "max_score": max_score, "week_no": week_no, "module_no": module_no, "interval1": interval1, "survey_instance_days": survey_instance_days, "active": active, "module_data" : module_data, "description": description, "survey_pri_id": sur_id, "modified_user": session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)
                print(responses)
                responses = responses["message"]
                result = {}
                if "success" in responses:
                    result['message'] = "success"
                    return jsonify(result)
                else:
                    result['message'] = responses
                    return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Modulemapping APIs ######################


###################### Activities APIs ######################

@app.route('/activities')
def activities():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.activity.api.activities"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return render_template('resource/activities/activities.html', responses = responses, surveynamedata = Activesurveylist())
        return redirect(url_for('login'))
    except:
        return "An exception occurred"
    
@app.route('/activity/<PkId>')
def activity(PkId):
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.activity.api.one_activity"
            data = {"name": PkId}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            return jsonify(responses[0])
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/addactivity', methods=["POST"])
def addactivity():
    try:
        if g.user:
            if request.method == "POST":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                activity_name_e = cfdata["activity_english"]
                activity_name_k = cfdata["activity_kannada"]
                sur_pri_id = cfdata["activitySurveyName"]
                sub_module_number = cfdata["activityModNum"]
                duration = cfdata["duration"]
                time_spent = cfdata["time_spent"]
                mood = cfdata["mood"]
                intensity_e = cfdata["intensity_e"]
                intensity_k = cfdata["intensity_k"]
                image_location= "none"

                url = "api/method/mithra.mithra.doctype.activity.api.add_activity"
                data = {"sur_pri_id": sur_pri_id, "activity_name_e": activity_name_e, "activity_name_k": activity_name_k, "sub_module_number" : sub_module_number, "duration": duration, "time_spent": time_spent, "mood": mood, "intensity_e": intensity_e, "intensity_k": intensity_k, "active": "yes", "image_location": image_location, "created_user": session['user_id'], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified"}
                role = "admin"
                method = "POST"
                responses = {}
                responses = apicall(method, url, data, role)
                responses = responses["message"]
                result = {}
                if "sur_pri_id" in responses[0]:
                    activity_id = responses[0]["name"]
                    result['message'] = ["success", activity_id]
                    return jsonify(result)
                elif "exist" in responses:
                    result['message'] = responses
                    return jsonify(result)
                else:
                    result["message"] = "error"
                    return jsonify(result)
            return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editactivity/<PkId>', methods = ["PUT"])
def editactivity(PkId):
    try:
        if g.user:
            if request.method == "PUT":
                cfdata = request.get_json()
                cfdata = cfdata[0]
                activity_name_e = cfdata["activity_english"]
                activity_name_k = cfdata["activity_kannada"]
                sur_pri_id = cfdata["activitySurveyName"]
                sub_module_number = cfdata["activityModNum"]
                duration = cfdata["duration"]
                time_spent = cfdata["time_spent"]
                mood = cfdata["mood"]
                intensity_e = cfdata["intensity_e"]
                intensity_k = cfdata["intensity_k"]
                active = cfdata["active"]

                url = "api/method/mithra.mithra.doctype.activity.api.update_activity"
                data = {"name": PkId,"sur_pri_id": sur_pri_id, "activity_name_e": activity_name_e, "activity_name_k": activity_name_k, "sub_module_number" : sub_module_number, "duration": duration, "time_spent": time_spent, "mood": mood, "intensity_e": intensity_e, "intensity_k": intensity_k, "active": active, "modified_user": session['user_id']}
                role = "admin"
                method = "PUT"
                responses = {}
                responses = apicall(method, url, data, role)

                result = {}
                if responses["message"] == "success":
                    result['message'] = "success"
                    return jsonify(result)
                else:
                    result['message'] = responses["message"]
                    return jsonify(result)
            return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/uploadImg', methods = ["POST","GET"])
def uploadImg():
    try:
        if g.user:
            if request.method == "POST":
                activity_id = request.form['activity_id']
                activity_name_e = request.form["activity_english"]
                activity_name_k = request.form["activity_kannada"]
                sur_pri_id = request.form["activitySurveyName"]
                sub_module_number = request.form["activityModNum"]
                duration = request.form["duration"]
                time_spent = request.form["timeSpent"]
                mood = "10"
                intensity_e = request.form["intensity_english"]
                intensity_k = request.form["intensity_kannada"]
                try:
                    imgfile = request.files['activityImg']

                    file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Images/", imgfile.filename))

                    if file_exist:
                        resp = {"success": True, "response": "file name exists"}
                        return jsonify(resp), 201
                    else:
                        imgfile.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Images/", imgfile.filename))
                        url = "api/method/mithra.mithra.doctype.activity.api.add_activity"
                        data = {"sur_pri_id": sur_pri_id, "activity_name_e": activity_name_e, "activity_name_k": activity_name_k, "sub_module_number" : sub_module_number, "duration": duration, "time_spent": time_spent, "mood": mood, "intensity_e": intensity_e, "intensity_k": intensity_k, "active": "yes", "image_location": imgfile.filename, "created_user": session['user_id'], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified"}
                        role = "admin"
                        method = "POST"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        responses = responses["message"]

                        if "sur_pri_id" in responses[0]:
                            resp = {"success": True, "response": "file saved!"}
                            return jsonify(resp), 200
                        else:
                            resp = {"success": True, "response": responses}
                            return jsonify(resp), 206
                except:
                    return "Image not updated"
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Activities APIs ######################


###################### Reason APIs ######################

@app.route('/reasons')
def reasons():
    try:
        if g.user:
            url = "api/method/mithra.mithra.doctype.reason.api.all_reasons"
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            return render_template('control/status/status.html', responses = responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/reason/<PkId>')
def reason(PkId):
    try:
        if g.user:
            url = "api/resource/reason/"
            url =url + PkId
            data = {}
            role = "admin"
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["data"]

            return jsonify(responses)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/addreason', methods = ["POST","GET"])
def addreason():
    try:
        if g.user:
            cfdata = request.get_json()
            cfdata = cfdata[0]
            reason = cfdata["reason"]
            reason_category = cfdata["reason_category"]


            url = "api/resource/reason"
            data = { "reason": reason, "reason_category": reason_category, "active": "yes", "created_user": session['user_id'],"modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified"}
            role = "admin"
            method = "POST"
            responses = {}
            responses = apicall(method, url, data, role)

            result = {}
            if "data" in responses:
                if "name" in responses["data"]:
                    result['message'] = "success"
                    return jsonify(result)
            elif "exception" in responses:
                # Reasons should be unique
                if "Duplicate entry" in responses["exception"]:
                    result['message'] = "Reason exists"
                    return jsonify(result) 
            else:
                result['message'] = "error"
                return jsonify(result)
            return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

@app.route('/editreason/<PkId>', methods = ["PUT"])
def editreason(PkId):
    try:
        if g.user:
            cfdata = request.get_json()
            cfdata = cfdata[0]
            reason = cfdata["reason"]
            reason_category = cfdata["reason_category"]


            url = "api/method/mithra.mithra.doctype.reason.api.update_reason"
            data = {"name": PkId, "reason": reason, "reason_category": reason_category, "active": "yes", "modified_user": session['user_id']}
            role = "admin"
            method = "PUT"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]

            result = {}
            if responses == "success":
                result['message'] = "success"
                return jsonify(result)
            else:
                result['message'] = responses
                return jsonify(result)
        return redirect(url_for('login'))
    except:
        return "An exception occurred"

###################### End of Reason APIs ######################

###################### Report Excel download APIs ######################

@app.route('/downloadexcel/<Report>' , methods = ["POST", "GET"])
def downloadexcel(Report):
    if request.method == "POST":
        files = ""
        folder = ""

        now = datetime.now()
        now  = str(now)
        now = now.replace(" ", "_")
        now = now.replace(":", "_")
        now = now.replace(".", "_")

        if Report == "all":
            url = "api/method/mithra.mithra.doctype.report.api.report"
            folder = "All_Report"
            files = "Reports_" + now.strip() + ".xlsx"
        if Report == "video":
            url = "api/method/mithra.mithra.doctype.report.api.report_video"
            folder = "Video_Report"
            files = "Video_" + now.strip() + ".xlsx"
        if Report == "activity":
            url = "api/method/mithra.mithra.doctype.report.api.report_activity"
            folder = "Activity_Report"
            files = "Activity_" + now.strip() + ".xlsx"
        if Report == "question":
            url = "api/method/mithra.mithra.doctype.report.api.report_question_option"
            folder = "Question_Report"
            files = "Question_" + now.strip() + ".xlsx"
        if Report == "participant_context":
            url = "api/method/mithra.mithra.doctype.report.api.report_participant_context"
            folder = "Context_Report"
            files = "Context_" + now.strip() + ".xlsx"
        if Report == "login_logout":
            url = "api/method/mithra.mithra.doctype.report.api.report_login_logout"
            folder = "Login_logout_Report"
            files = "Login_logout_" + now.strip() + ".xlsx"
        
        list_of_files = glob.glob(os.path.join(app.config['REPORT_FOLDER'] + "/" + "All_Report" + "/*"))
        latest_file = max(list_of_files, key=os.path.getctime)

        data = {}
        role = "admin"
        method = "GET"
        responses = {}
        responses = apicall(method, url, data, role)
        responses = responses["message"]
        con = json.dumps(responses)
        df = pd.DataFrame(eval(con))
        df.to_excel(os.path.join(app.config['REPORT_FOLDER'] + "/" + folder + "/" + files))


        return jsonify(["success", folder , files])

###################### End of Report excel download APIs ######################


###################### Reupload APIs ######################

@app.route('/reupload/<PkId>/<foldername>', methods = ["POST"])
def reupload(PkId, foldername):
    try:
        if request.method == "POST":
            data = {}
            if foldername == "Image":
                url = "api/resource/activity/"
                url = url + PkId
                image = request.files["reuploadImage"]
                file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Images/", image.filename))
                if file_exist:
                    resp = {"success": True, "response": "file exists"}
                    return jsonify(resp), 201
                else:
                    image.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Images/", image.filename))
                    data = {"image_location": image.filename, "modified_user": session['user_id']}
                    role = "admin"
                    method = "PUT"
                    responses = {}
                    responses = apicall(method, url, data, role)
                    if "data" in responses:
                        resp = {"success": True, "response": "file uploaded"}
                        return jsonify(resp), 200
            if foldername == "Audio":
                url = "api/resource/survey_questions/"
                url = url + PkId
                eng_audio = request.files["reuploadEngAudio"]
                kan_audio = request.files["reuploadKanAudio"]

                eng_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", eng_audio.filename))
                kan_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", kan_audio.filename))

                if eng_file_exist:
                    resp = {"success": True, "response": "file name exists"}
                    return jsonify(resp), 201
                else:
                    if kan_file_exist:
                        resp = {"success": True, "response": "file name exists"}
                        return jsonify(resp), 206
                    else:
                        kan_audio.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", kan_audio.filename))
                        eng_audio.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Audios/", eng_audio.filename))
                        url = "api/resource/survey_questions/"
                        url = url + PkId
                        data = {"audio_e": eng_audio.filename, "audio_k": kan_audio.filename, "modified_user": session['user_id']}
                        role = "admin"
                        method = "PUT"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        if "data" in responses:
                            resp = {"success": True, "response": "file saved!"}
                            return jsonify(resp), 200
                            
            if foldername == "Video":
                
                eng_video = request.files["reuploadEngVideo"]
                kan_video = request.files["reuploadKanVideo"]

                eng_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", eng_video.filename))
                kan_file_exist = os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", kan_video.filename))

                if eng_file_exist:
                    resp = {"success": True, "response": "file name exists"}
                    return jsonify(resp), 201
                else:
                    if kan_file_exist:
                        resp = {"success": True, "response": "file name exists"}
                        return jsonify(resp), 206
                    else:
                        kan_video.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", kan_video.filename))
                        eng_video.save(os.path.join(app.config['UPLOAD_FOLDER'] + "/Videos/", eng_video.filename))
                        
                        url = "api/resource/video/"
                        url = url + PkId
                        data = {"video_location_e": eng_video.filename, "video_location_k": kan_video.filename, "modified_user": session['user_id']}
                        role = "admin"
                        method = "PUT"
                        responses = {}
                        responses = apicall(method, url, data, role)
                        if "data" in responses[0]:
                            resp = {"success": True, "response": "file saved!"}
                            return jsonify(resp), 200  
    except:
        return "An exception occurred"


###################### End of Reupload APIs ######################

###################### Listing fuctions ######################

def Activesurveylist():
    url = "api/method/mithra.mithra.doctype.survey_data.api.survey_data_list"
    data = {"filter_data": "null"}
    role = "admin"
    method = "GET"
    responses = apicall(method, url, data, role)
    responses = responses["message"]
    surlist = []
    for res in responses:
        if res["active"] == "yes":
            a = {}
            a["sur_name"] = res["survey_name"]
            a["sur_id"] = res["survey_pri_id"]
            surlist.append(a)
    return surlist

def userlist(role):
    url = "api/method/mithra.mithra.doctype.user_table.login.users"
    data = {"role": role}
    role = "admin"
    method = "GET"
    users = apicall(method, url, data, role)
    users = users["message"]
    return users


@app.route('/sub_module_dd/<PkId>')
def sub_module_no(PkId):
    try:
        result = sub_module_dd(PkId)
        return jsonify(result)
    except:
        return "An exception occurred"

def allsub_module_dd():
    try:
            url = "api/method/mithra.mithra.doctype.module.api.modules"
            url = url
            data = {}
            role = "admin" 
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            submod = []
            for sub in responses:
                if sub["active"] == "yes":
                    a = {}
                    a["module_id"] = sub["name"]
                    a["sub_name"] = sub["sub_module_number"]
                    a["sur_id"] = sub["survey_pri_id"]
                    a["sur_name"] = sub["survey_name"]
                    submod.append(a)
            return submod
    except:
        return "An exception occurred"

def sub_module_dd(PkId):
    try:
            url = "/api/method/mithra.mithra.doctype.module.api.sur_modules"
            url = url
            data = { "survey_pri_id" : PkId}
            role = "admin" 
            method = "GET"
            responses = {}
            responses = apicall(method, url, data, role)
            responses = responses["message"]
            submod = []
            for sub in responses:
                if sub["active"] == "yes":
                    a = {}
                    a["module_id"] = sub["name"]
                    a["sub_name"] = sub["sub_module_number"]
                    a["sur_id"] = sub["survey_pri_id"]
                    a["sur_name"] = sub["survey_name"]
                    submod.append(a)
            return submod
    except:
        return "An exception occurred"

def get_survey_name(PkId):
    try:
        url = "api/resource/survey_data/"
        url = url + PkId
        data = {}
        role = "admin"
        method = "GET"
        responses = apicall(method, url, data, role)        
        responses = responses["data"]
        return responses["survey_name"]
    except:
        return "An exception occurred"

def instance(Sur_id):
    try:
        url = "api/method/mithra.mithra.doctype.survey.api.all_survey_instance"
        url = url
        data = {"sur_pri_id" : Sur_id}
        role = "admin"
        method = "GET"
        responses = {}
        responses = apicall(method, url, data, role)
        responses = responses["message"]
        instance = []
        for ins in responses:
            if ins["active"] == "yes":
                a = {}
                a["sur_id"] = ins["survey_pri_id"]
                a["ins_id"] = ins["sur_ins_id"]
                a["sur_name"] = ins["survey_name"]
                a["ins"] = ins["days"]
                instance.append(a)
        return instance
    except:
        return "An exception occurred"

def username_update(PkId, email_id):
    try:
        url = "api/resource/user_table/"
        url = url + PkId
        role = "admin"
        method = "PUT"
        usr_responses = {}
        data = {"user_name": email_id, "modified_user": session['user_id']}
        usr_responses = apicall(method, url, data, role)
        usr_responses = usr_responses["data"]
        return usr_responses
    except:
        return "An exception occurred"

###################### End fo Listing fuctions ######################

###################### offline fuctions ######################

# Record the set of failed api from android offline
@app.route('/Failed_APIs', methods=["POST","GET"])
def Failed_APIs():
    try:
        file_data = request.get_data()
        address = request.remote_addr
        header = request.headers
        body = request.content_type
     
        data = []
        request_data = []
        for part in decoder.MultipartDecoder(file_data, body).parts:
            data.append(part.text)
        data = data[0]
        data1 = json.loads(data)
        dict_request_body = json.dumps(data1)

        now = datetime.now()
        now  = str(now)
        now = now.replace(" ", "_")
        now = now.replace(":", "_")
        now = now.replace(".", "_")
        file_name ="sync_failed_" + now.strip() + ".json"

        with open((app.config['FailedAPI'] + '/' + file_name), "w") as outfile:
            outfile.write(dict_request_body)

    except:
        return "An exception occurred"

@app.route('/offlineAPI' , methods=["POST","GET"])
def offlineAPI():
    try:

        file_data = request.get_data()
        address = request.remote_addr
        header = request.headers
        body = request.content_type
     
        data = []
        request_data = []
        for part in decoder.MultipartDecoder(file_data, body).parts:
            data.append(part.text)
        data = data[0]
        data1 = json.loads(data)
        dict_request_body = json.dumps(data1)

        now = datetime.now()
        now  = str(now)
        now = now.replace(" ", "_")
        now = now.replace(":", "_")
        now = now.replace(".", "_")
        file_name ="sync_" + now.strip() + ".json"
        
        # save the copy of file in the server 
        with open((app.config['SYNC_FOLDER'] + '/' + file_name), "w") as outfile:
            outfile.write(dict_request_body)
        
        key_list = list(data1.keys())


        store_ids = {}
        server_pk_id = ""
        android_pk_id = ""
        failed_api = []
        result = {}

        for key in key_list:
            full_value = data1[key]
            for api in full_value:
                act_url = api["url"]
                act_data = json.loads(api["body"])
                act_role = "participant"
                pkid = ""
                if api["method"] == "PUT":
                    if "PVD" not in act_data["name"]:
                        act_data["name"] = store_ids[act_data["name"]]

                act_method = api["method"]
                act_responses = {}
                act_responses = apicall(act_method, act_url, act_data, act_role)
                if api["table"] == "par_video_data":
                    if api["method"] == "POST":
                        store_ids[act_data["name"]] = act_responses["message"]["name"]
                if "message" in act_responses:
                    if act_responses["message"] == "success" or act_responses["message"]["status"] == "success":
                        sync_url = "api/method/mithra.mithra.doctype.api_sync_data.api.add_api_sync_data"
                        sync_role = "coordinator"
                        sync_method = "POST"
                        sync_data = {"api_device_pri_id": api["api_pri_key"], "method": api["method"] ,"url": api["url"], "body": api["body"], "table_name": api["table"], "device_id": api["device_id"], "created_user": api["coordinator_id"], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified", "status": "pass",  "error_log": "no error log"}
                        now = datetime.now()
                        now  = str(now)
                        sync_responses = apicall(sync_method, sync_url, sync_data, sync_role)
                else:
                    failed_api.append(api["api_pri_key"])
                    sync_url = "api/method/mithra.mithra.doctype.api_sync_data.api.add_api_sync_data"
                    sync_role = "coordinator"
                    sync_method = "POST"
                    sync_data = {}
                    now = datetime.now()
                    now  = str(now)
                    if "exception" in act_responses:
                        sync_data = {"api_device_pri_id": api["api_pri_key"], "method": api["method"] ,"url": api["url"], "body": api["body"], "table_name": api["table"], "device_id": api["device_id"], "created_user": api["coordinator_id"], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified", "status": "fail", "error_log": act_responses["exception"]}
                        sync_responses = apicall(sync_method, sync_url, sync_data, sync_role)

                    else:
                        sync_responses = {"api_device_pri_id": api["api_pri_key"], "method": api["method"] ,"url": api["url"], "body": api["body"], "table_name": api["table"], "device_id": api["device_id"], "created_user": api["coordinator_id"], "modified_user": "UT-9-2022-07-11-08:19:58-no_one_modified", "status": "fail", "error_log": act_responses}
                        sync_responses = apicall(sync_method, sync_url, sync_data, sync_role)


        if len(failed_api) == 0:
            result["message"] = "success"
            return jsonify(result)
        else:
            result["message"] = failed_api
            return jsonify(result)
    except:
        return "An exception occurred"

###################### End of offline fuctions ######################


if __name__=="__main__":
    app.debug = True
    app.run() #for apache
    #app.run(host ="0.0.0.0", port=5000)
    #app.run(host="0.0.0.0")#for nginx
