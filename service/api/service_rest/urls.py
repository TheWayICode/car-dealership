from django.urls import path
from .views import api_list_technicians, api_show_technicians, api_list_appointment, api_show_service


urlpatterns = [
    path("technicians/", api_list_technicians, name="list_technicians"),
    path("technicians/<int:id>/", api_show_technicians, name="show_technicians"),
    path("appointments/", api_list_appointment, name="list_appointment"),
    path("appointments/<int:id>/", api_show_service, name="show_service"),
]
