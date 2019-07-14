from flask import Flask,send_from_directory
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS

app = Flask(__name__, static_folder='build/static')
app.config['SECRET_KEY'] = 'development key'
socket = SocketIO(app)
CORS(app)

@app.route('/')
def serve_static_index():
    return send_from_directory('build/', 'index.html')

@socket.on('connect')
def on_connect():
    print('user connected')

@socket.on('itemadded')
def on_item_added(data):
    emit('message',{'data':data},broadcast=True)


if __name__ == "__main__":
    socket.run(app)