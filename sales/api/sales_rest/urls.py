from django.urls import path

from sales_rest.views import (
    api_salesperson_list,

)


urlpatterns = [
    path("salespersons/", api_salesperson_list, name="api_salesperson_list"),
    
]
