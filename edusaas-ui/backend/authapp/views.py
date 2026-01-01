import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

@csrf_exempt
def login_view(request):
    if request.method != "POST":
        return JsonResponse(
            {"success": False, "message": "POST method required"},
            status=405
        )

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse(
            {"success": False, "message": "Invalid JSON"},
            status=400
        )

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return JsonResponse(
            {"success": False, "message": "Email and password required"},
            status=400
        )

    # 🔑 IMPORTANT: authenticate() checks credentials ONLY
    user = authenticate(username=email, password=password)

    if user is None:
        return JsonResponse(
            {"success": False, "message": "Invalid credentials"},
            status=401
        )

    # Role example
    role = "admin" if user.is_superuser else "user"

    return JsonResponse(
        {
            "success": True,
            "user": {
                "email": user.email,
                "username": user.username,
                "role": role
            }
        },
        status=200
    )
