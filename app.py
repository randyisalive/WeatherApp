from flask import Flask, render_template, redirect, jsonify, request, url_for
import requests
import datetime
import json


app = Flask(__name__)
app.secret_key = "1"
app.debug = True


API_KEY = "bbb0ee88f6364524908234959231308" # my API key

@app.route('/', methods=['POST','GET'])
def index():
    data = ""
    date = datetime.datetime.now()
    month = date.strftime("%b")
    day = int(date.strftime("%d"))
    dayStr = ""
    print(day)
    if day == 1:
        dayStr = str(day) + "st"
    elif day == 2:
        dayStr = str(day) + "nd"
    elif day == 3:
        dayStr = str(day) + "rd"
    else:
        dayStr = str(day) + "th"
    datas = request.args.get("data")
    if datas:
        corrected_data_str = datas.replace("'", "\"")
        data = json.loads(corrected_data_str)
    with open('./country.json', 'r') as json_file:
        dataJSON = json.load(json_file)
    if request.method == 'POST':
        location = request.form['country']
        return redirect(url_for("get_data", location=location))
    return render_template('index.html', dataJSON=dataJSON, data=data, month=month, dayStr=dayStr)


@app.route('/get_data/<location>', methods=['GET', 'POST'])
def get_data(location):
    data = []
    api = "http://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + str(location)
    response = requests.get(api)
    data = response.json()
    return redirect(url_for("index", data=data))

    


if __name__ == "__main__":
    app.run()