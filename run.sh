
set -e  # Exit on error
cd frontend
npm run build
cd ..
poetry run python main.py