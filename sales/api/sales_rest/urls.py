from django.urls import path

from sales_rest.views import (
    api_salesperson_list,
    api_customer_list,
    list_sales_records,
    history_employee_sales_record,
    detail_sales_record,
    automobilevo


)


urlpatterns = [
    path("salespersons/", api_salesperson_list, name="api_salesperson_list"),
    path("customers/", api_customer_list, name="api_customer_list"),
    path("salesrecords/", list_sales_records, name="list_sales_records"),
    path("salesemployee/<int:id>/", history_employee_sales_record, name="history_employee_sales_record"),
    path("salesrecords/<int:id>/", detail_sales_record, name="detail_sales_record"),
    path("automobilevo/", automobilevo, name="automobilevo"),
]
