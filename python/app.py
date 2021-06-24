from flask import Flask, jsonify
import requests
import random

app = Flask(__name__)
url = "http://node:8000/user"
# url = "http://localhost:8000/user"
# tone list
tone_list = ["humorous", "ironic", "cynical"]

@app.route('/tone',methods=['GET'])
def tone():
	tone = random.choice(tone_list)
	response = requests.get(url=url)
	print(response.json())
	data = response.json()
	for value in data:
		value['tone'] = random.choice(tone_list)
	print(data)
	return jsonify(data)

if __name__ == '__main__':
    app.run(host ='0.0.0.0', port=5000, debug=True)