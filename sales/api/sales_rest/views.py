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
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalespersonEncoder,
            safe=False
            )
    else: #POST
        try:
            content = json.loads(request.body)
            salespersons = Salesperson.objects.create(**content)
            return JsonResponse(
                {"salespersons": salespersons},
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a Sales Person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            customers = Customer.objects.create(**content)
            return JsonResponse(
                customers,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not reach customer list"}
            )
            response.status_code = 400
            return response



@require_http_methods(["GET", "POST"])
def list_sales_records(request):
    if request.method == "GET":
        # retrieves all sales records from the database
        sales_record = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_record": sales_record},
            encoder=SalesRecordEncoder,
            safe=False
        )
    else: # POST
        content = json.loads(request.body)
        # retrieve the customer from db by name or any other property
        customer_name = content["customer"]
        customer = Customer.objects.get(name=customer_name)
        content["customer"] = customer
        # content["customer"] = Customer.objects.get(name=content["customer"])
        # retrieve the sales person from db by employee number
        content["salesperson"] = Salesperson.objects.get(name=content["salesperson"])

        try:
            # retrieve the automobile record from the database
            content["automobile"] = AutomobileVO.objects.get(vin=content["automobile"])
            AutomobileVO.objects.filter(vin=content["automobile"]).update(sold=True)
        except AutomobileVO.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not locate automobile"}
            )
            response.status_code = 404
            return response
        # create a new sales record in the database
        sales_records= SalesRecord.objects.create(**content)
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def history_employee_sales_record(request, id):
    if request.method == "GET":
        try:
            salesrecord = SalesRecord.objects.filter(salesperson=id)
            return JsonResponse({"salesrecord":salesrecord},
                                encoder=SalesRecordEncoder,
                                safe=False
                                )
        except SalesRecord.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not sales person's record"}
            )
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def detail_sales_record(request, id):
    if request.method == "GET":
        try:
            salesrecord = SalesRecord.objects.filter(id=id)
            return JsonResponse({"salesrecord":salesrecord},
                                encoder=SalesRecordEncoder,
                                safe=False
                                )
        except SalesRecord.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not sales record"}
            )
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def automobilevo(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOEncoder,
            safe=False
        )
