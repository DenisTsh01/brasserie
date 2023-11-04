from django.contrib import admin

# Register your models here.
from .models import Note, DailyMenu ,Event,Drink

# admin.site.register(Note)
admin.site.register(DailyMenu)
admin.site.register(Event)
admin.site.register(Drink)