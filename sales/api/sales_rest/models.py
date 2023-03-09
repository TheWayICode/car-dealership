from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    color = models.CharField(max_length=100)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, null=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin

class Salesperson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class SalesRecord(models.Model):
    price = models.IntegerField(default=0)
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales_record",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales_record",
        on_delete=models.PROTECT,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.DO_NOTHING,
    )

    def get_api_url(self):
        return reverse("api_detail_sales", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.salesperson} {self.customer} {self.automobile}"
