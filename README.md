# What's this?
Copilotで作成したTodoアプリ

# 起動方法
## バックエンド（API）
cd backend
python -m venv .venv　　※最初のみ
.venv\Scripts\activate
pip install -r requirements.txt　　※最初のみ
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

## フロントエンド
cd frontend
npm install　　※最初のみ
npm run dev

# ローカルでの動作環境
## API
http://localhost:8000/api/todos
## フロント
http://localhost:5173
