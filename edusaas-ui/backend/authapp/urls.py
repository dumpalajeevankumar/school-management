from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('user/', views.get_user, name='get_user'),
    path('user/update/', views.update_user, name='update_user'),
    path('logout/', views.logout, name='logout'),
]
