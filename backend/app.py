from flask import Flask
import json

def create_app(test_config=None):
    app = Flask(__name__)

    if test_config is None:
        # Load the instance config, if it exists, when not testing
        actions_json_path = 'actions.json'
    else:
        # Load the test config if passed in
        app.config.update(test_config)
        actions_json_path = 'actions-test.json'

    # Load the relevant json actions file
    with open(actions_json_path) as json_file:
        data = json.load(json_file)

    # Import and register the blueprint for the actions controller
    from routes.api.ActionsController import action_bp
    app.register_blueprint(action_bp)

    # Set data to the app config so we can access it in the controller
    app.config['DATA'] = data

    return app
