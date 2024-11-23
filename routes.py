from flask import Blueprint, render_template
import time
main = Blueprint('main', __name__)

@main.route('/')
def home():
    version = time.time()
    return render_template('home.html', version=version)
