from flask import Flask, request, jsonify, send_from_directory
import requests
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

@app.route('/api/gemini', methods=['POST'])
def gemini_proxy():
    user_message = request.json.get("message", "")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    payload = {
        "contents": [
            {"parts": [{"text": user_message}]}
        ]
    }
    try:
        response = requests.post(GEMINI_URL, json=payload)
        data = response.json()
        print("Respuesta de Gemini:", data)
        reply = (
            data.get("candidates", [{}])[0]
                .get("content", {})
                .get("parts", [{}])[0]
                .get("text", "No se recibió respuesta de Gemini.")
        )
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Servir index.html en la raíz
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# Servir cualquier archivo estático (css, js, img, etc.)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True) 