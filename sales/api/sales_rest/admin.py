from django.contrib import admin

# Register your models here.
from .models import AutomobileVO, Customer, Salesperson, SalesRecord


admin.site.register(AutomobileVO)
admin.site.register(Customer)
admin.site.register(Salesperson)
admin.site.register(SalesRecord)
