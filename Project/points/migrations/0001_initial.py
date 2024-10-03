# Generated by Django 5.0.7 on 2024-08-16 00:39

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Egg",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("longitude", models.FloatField()),
                ("latitude", models.FloatField()),
                ("geom", django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
        ),
    ]
