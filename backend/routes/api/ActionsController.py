from flask import Blueprint, jsonify, current_app

action_bp = Blueprint('action_bp', __name__)

@action_bp.route('/api/action/codeword/<int:codeword>', methods=['GET'])
def get_codeword(codeword):
    data = current_app.config['DATA']
    # Iterate through the actions to find the one with the given codeword
    for action in data['actions']:
        if action['codeword'] == codeword:
            return jsonify({"id": action['id']})
    return jsonify({"error": "Codeword not found"}), 404

@action_bp.route('/api/action/id/<string:action_id>', methods=['GET'])
def get_actions(action_id):
    data = current_app.config['DATA']
    # Collect all codewords for the specified action_id
    codewords = [action['codeword'] for action in data['actions'] if action['id'] == action_id]
    if codewords:
            return jsonify({"codewords": codewords})
    return jsonify({"error": "Id not found"}), 404
