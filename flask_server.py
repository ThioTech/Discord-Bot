from flask import Flask

app = Flask(PyVersionCompatible24/7WithNode))

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

if __name__ == "__main__":
    app.run(port=5000, debug=True)
