# EduSaaS - Education Management Platform

A full-stack education SaaS platform built with React (Vite) and Django.

## Project Structure

```
edusaas-ui/
├── frontend/       # React (Vite) - Port 5173
├── backend/        # Django REST API - Port 8000
└── .env           # Environment variables
```

## Prerequisites

- Node.js 16+ and npm/yarn
- Python 3.8+
- Virtual Environment (venv)

## Frontend Setup

### 1. Navigate to frontend directory
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

## Backend Setup

### 1. Navigate to backend directory
```bash
cd backend
```

### 2. Create virtual environment
```bash
python -m venv venv
```

### 3. Activate virtual environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install dependencies
```bash
pip install -r requirements.txt
```

### 5. Run migrations
```bash
python manage.py migrate
```

### 6. Create superuser (optional)
```bash
python manage.py createsuperuser
```

### 7. Start development server
```bash
python manage.py runserver
```

The backend API will run on `http://localhost:8000`

## Features

### Authentication
- User Login
- User Registration
- JWT Token-based authentication
- User Profile Management

### Frontend Components
- InputField - Reusable input with validation
- Button - Customizable button component
- Loader - Loading spinner
- Routes - React Router setup

### Styling
- CSS-in-JS ready
- Responsive design
- Dark mode support (ready to implement)

## API Endpoints

### Authentication
- `POST /api/auth/login/` - User login
- `POST /api/auth/register/` - User registration
- `GET /api/auth/user/` - Get current user (requires authentication)
- `PUT /api/auth/user/update/` - Update user profile
- `POST /api/auth/logout/` - Logout

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DEBUG=True
SECRET_KEY=your-secret-key-here
VITE_API_URL=http://localhost:8000/api
```

## Development

### Frontend
- React 18.2+
- Vite bundler
- React Router v6
- Axios for API calls

### Backend
- Django 4.2+
- Django REST Framework
- JWT Authentication
- CORS Support

## Deployment

### Frontend
1. Build: `npm run build`
2. Output directory: `dist/`
3. Deploy to Vercel, Netlify, or any static hosting

### Backend
1. Set `DEBUG=False` in settings
2. Update `ALLOWED_HOSTS`
3. Configure database (PostgreSQL recommended)
4. Use Gunicorn for WSGI server

## Troubleshooting

### CORS Error
Ensure `CORS_ALLOWED_ORIGINS` in `backend/edusaas/settings.py` includes your frontend URL.

### Port Already in Use
- Frontend: Change port in `vite.config.js`
- Backend: `python manage.py runserver 8001`

### Database Issues
```bash
python manage.py migrate --run-syncdb
```

## Contributing

1. Create a new branch for features
2. Follow the existing code structure
3. Test thoroughly before submitting

## License

MIT License - Feel free to use this project for your own purposes.

## Support

For issues and questions, please create an issue in the repository.
