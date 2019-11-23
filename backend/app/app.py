#coding: utf-8

import sys
from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
from base64 import b64decode
from fingerprint import fingerprint

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

users = [
    {
        'image': '101_2.tif',
        'profile': {
            'name': 'Joao',
            'role': 'user'
        }
    },
    {
        'image': '102_2.tif',
        'profile': {
            'name': 'Pedro',
            'role': 'superuser'
        }
    },
]

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/api/login', methods = ['POST'])
@cross_origin()
def login():
    content = request.get_json()
    print(content)
    sys.stdout.flush()
    image_content = b64decode(content['image'])

    profile = {
        'name': 'Visitante',
        'role': 'guest'
    }
    for user in users:
        print(user)
        result = fingerprint(image_content, user['image'])
        if result['status']:
            profile = user['profile']
            break

    sys.stdout.flush()

    return profile

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
