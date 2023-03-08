from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Create your views here.
class AutomobileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["id", "vin"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["id", "name", "employee_id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "name",
        "date_time",
        "reason",
        "technician",
        "vip",
        "finished",
        "id",
    ]
    encoders = {
        "vin": AutomobileEncoder(),
        "technician": TechnicianEncoder(),
    }


require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"mesesage": "Failed to create Technician"},
                status=400,
            )
            return response


@require_http_methods(["GET", "DELETE"])
def api_show_technicians(request, id):
    if request.method == "GET":
        try:
            technicians = Technician.objects.get(id=id)
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status.code = 404
            return response
    elif request.method == "DELETE":
        try:
            technicians = Technician.objects.get(id=id)
            technicians.delete()
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician

        automobilevo = AutomobileVO.objects.get_or_create(vin=content["vin"])
        content["vin"] = automobilevo[0]

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_service(request, id):
    if request.method == "GET":
        try:
            appointments = Appointment.objects.get(id=id)
            return JsonResponse(
                appointments,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            services = Appointment.objects.get(id=id)
            services.delete()
            return JsonResponse(
                services,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET"])
def api_list_automobiles(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileEncoder,
        )
    else:
        content = json.loads(request.body)
        autos = AutomobileVO.objects.get(id=content["autos"])
        content["autos"] = autos
        automobile = AutomobileVO.objects.create(**content)
        return JsonResponse(
            {"automobiles": automobile},
            encoder=AutomobileEncoder,
            safe=False,
        )
