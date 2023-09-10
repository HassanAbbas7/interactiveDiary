from django.contrib import admin
from .models import *


#register all models here
admin.site.register(Diary)
admin.site.register(Option)
admin.site.register(Question)