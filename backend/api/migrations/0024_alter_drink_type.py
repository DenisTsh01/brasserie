# Generated by Django 4.2.6 on 2023-11-01 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_drink_grams_alter_drink_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='type',
            field=models.CharField(choices=[('Bieres Pression', 'Bieres Pression'), ('Bieres Bouteilles', 'Bieres Bouteilles'), ('Jus de Fruits et Sodas', 'Jus de Fruits et Sodas'), ('Eaux Minerales & Sirops', 'Eaux Minerales & Sirops'), ('Alcools', 'Alcools'), ('Aperities', 'Aperities'), ('Vins', 'Vins'), ('Boissons Chaudes', 'Boissons Chaudes'), ('Liqueurs & Digesties', 'Liqueurs & Digesties')], default='Bieres Pression', max_length=40),
        ),
    ]
