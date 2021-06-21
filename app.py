import os
import json
from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/accessibility")
def accessibility():
    return render_template('accessibility.html')


@app.route("/home")
def home():
    return render_template('home.html', page_title="Over the Rainbow")


@app.route("/error500")
def error500():
    return render_template('error-500.html')


@app.route("/flags")
def flags():
    data = []
    with open("data/flags.json", "r", encoding="utf8") as json_data:
        data = json.load(json_data)
    return render_template("flags.html", page_title="Meet the flags", flags=data)


@app.route("/privacy")
def privacy():
    return render_template('privacy-policy.html')


@app.route("/support")
def support():
    data = []
    with open("data/advocates.json", "r") as json_data:
        data = json.load(json_data)
    return render_template("support.html", page_title="Supporting LGBTQ+ Community", advocates=data)


@app.route("/error")
def error():
    return render_template("404.html")


if __name__ == "__main__":
    app.run(
        host = os.environ.get('IP', '127.0.0.1'),
        port = os.environ.get('PORT', '5000'),
        debug=True
    )
