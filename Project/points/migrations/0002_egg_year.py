# Generated by Django 5.0.7 on 2024-08-18 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("points", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="egg",
            name="year",
            field=models.IntegerField(default=2030),
        ),
    ]
