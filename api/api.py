import time
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Configure MySQL connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'abc123'
app.config['MYSQL_DB'] = 'players'

mysql = MySQL(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/log_mood', methods=['POST'])
def log_mood():
    mood = request.json.get('mood')
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO players (mood) VALUES (%s)", [mood])
    mysql.connection.commit()
    last_id = cur.lastrowid
    cur.close()
    return jsonify({'message': 'Success', 'id': last_id}), 200

if __name__ == "__run__": 
    app.run(debug=True)

@app.route('/log_name', methods=['POST'])
def log_name():
    nickname = request.json.get('nickname')
    player_id = request.json.get('id')
    if not player_id:  
        return jsonify({'message': 'Player ID is missing'}), 400
    cur = mysql.connection.cursor()
    cur.execute("UPDATE players SET Nickname = %s WHERE id = %s", (nickname, player_id) )
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Success'}), 200

if __name__ == "__run__": 
    app.run(debug=True)
