# Generated by Django 4.2.4 on 2023-09-06 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_diary'),
    ]

    operations = [
        migrations.AddField(
            model_name='diary',
            name='title',
            field=models.CharField(default='Title here', max_length=100),
            preserve_default=False,
        ),
    ]
