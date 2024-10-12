import os
import sys
import pytest

#Adds the project root directory to sys.path
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from app import app as flask_app

@pytest.fixture()
def app():
    flask_app.config.update({
        "TESTING": True,
    })
    yield flask_app

@pytest.fixture()
def client(app):
    with app.test_client() as client:
        with app.app_context():
            yield client

@pytest.fixture()
def runner(app):
    return app.test_cli_runner()