from flask import Flask, render_template

app = Flask(__name__)

@app.context_processor
def inject_global_var():
    return {'gameReturn': 1}

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

