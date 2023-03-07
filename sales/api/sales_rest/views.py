from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from sales_rest.models import AutomobileVO, Customer, Salesperson, SalesRecord

from .encoders import (
    AutomobileVOEncoder,
    CustomerEncoder,
    SalespersonEncoder,
    SalesRecordEncoder
)


@require_http_methods(["GET", "POST"])
def api_salesperson_list(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonEncoder,
            safe=False
            )
    else: #POST
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a Sales Person"}
            )
            response.status_code = 400
            return response
