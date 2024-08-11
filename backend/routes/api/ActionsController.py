from flask import Blueprint, jsonify, current_app

action_bp = Blueprint('action_bp', __name__)

@action_bp.route('/api/action/codeword/<int:codeword>', methods=['GET'])
def get_codeword(codeword):
    data = current_app.config['DATA']
    # Iterate through the actions to find the one with the given codeword
    for action in data['actions']:
        if action['codeword'] == codeword:
            # Unified return structure to allow easier FE parsing
            return jsonify({"results": [action['id']]})
    return jsonify({"results": []})

@action_bp.route('/api/action/id/<string:action_id>', methods=['GET'])
def get_actions(action_id):
    data = current_app.config['DATA']
    # ToDo
    #  Should this search be case-insensitive?
    # Collect all codewords for the specified action_id
    codewords = [action['codeword'] for action in data['actions'] if action['id'] == action_id]
    if codewords:
            # Unified return structure to allow easier FE parsing
            return jsonify({"results": codewords})
    return jsonify({"results": []})
