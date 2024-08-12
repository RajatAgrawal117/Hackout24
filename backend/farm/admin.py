from django.contrib import admin
from .models import CustomUser, Crop, Pest

admin.site.register(CustomUser)
admin.site.register(Crop)
admin.site.register(Pest)
