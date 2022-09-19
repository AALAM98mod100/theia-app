from flask import Flask

app = Flask(__name__)

# This is the route for the home page
@app.route('/test')
def members():
    return {"members": ["John", "Paul", "George", "Ringo"]}

if __name__ == '__main__':
    app.run(debug=True)