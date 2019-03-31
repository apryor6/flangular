from flask import Flask, jsonify
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    # Other initialization goes here

    @app.route('/message')
    def health():
        return jsonify('FANG app is online!')
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
