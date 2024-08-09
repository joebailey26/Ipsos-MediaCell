import pytest
from app import create_app

@pytest.fixture
def client():
    test_config = {}
    app = create_app(test_config)
    client = app.test_client()

    yield client

def test_get_codeword(client):
    """Test getting the codeword for a given id."""
    request = client.get('/api/action/codeword/6001')
    json_data = request.get_json()
    assert json_data['id'] == 'test_alert'

def test_get_actions(client):
    """Test getting all codewords for a given id."""
    request = client.get('/api/action/id/test_thanks')
    json_data = request.get_json()
    assert json_data['codewords'] == [6002, 6003]
