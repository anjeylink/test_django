from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=64)
    start_date = models.DateField()
    end_date = models.DateField()
    lectures_quantity = models.IntegerField()
