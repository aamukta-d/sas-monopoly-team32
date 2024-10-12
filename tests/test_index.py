from conftest import client

def test_loaded(client):
    response = client.get("/")
    assert response.status_code == 200

def test_has_head(client):
    response = client.get("/")
    html = response.data.decode()
    assert "<head>" in html

def test_has_title(client):
    response = client.get("/")
    html = response.data.decode()
    assert "<title>" in html