# Generated by Django 4.2.6 on 2023-10-23 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_date_dailymenu_today'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='photo',
            field=models.ImageField(upload_to='frontend/src/assets/'),
        ),
    ]
