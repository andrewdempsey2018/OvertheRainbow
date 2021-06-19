import os
import json
from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/flags")
def flags():
    data = []
    with open("data/flags.json", "r", encoding="utf8") as json_data:
        data = json.load(json_data)
    return render_template("flags.html", page_title="Meet the flags", flags=data)


if __name__ == "__main__":
    app.run(
        host = os.environ.get('IP', '127.0.0.1'),
        port = os.environ.get('PORT', '5000'),
        debug=True
    )