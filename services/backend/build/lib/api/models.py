from django.db import models

# Create your models here.
class ButtonPress(models.Model):
    id = models.AutoField(primary_key=True)
    count = models.IntegerField(default=0)
    last_pressed = models.DateTimeField(auto_now=True, db_index=True)