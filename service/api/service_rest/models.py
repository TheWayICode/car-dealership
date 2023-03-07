from django.db import models


# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True, null=True)


class Technician(models.Model):
    name = models.CharField(max_length=150)
    employee_id = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Appointment(models.Model):
    vin = models.ForeignKey(
        AutomobileVO,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=150)
    appointment_time = models.CharField(max_length=150, null=True)
    reason = models.TextField(max_length=250)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    vip = models.BooleanField(default=False, null=True)
    finished = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.name
