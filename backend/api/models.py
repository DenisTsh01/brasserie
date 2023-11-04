from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank = True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.body[0:50]

class Event(models.Model):
    title = models.TextField(null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="images/", blank=True)
    date = models.DateTimeField()
    
    def __str__(self):
        return self.title
    
class DailyMenu(models.Model):
    entree = "Entree"
    pates = "Pâtes"
    plat = "Plat"
    dessert = "Dessert"
    types = [(entree, "Entree"), (pates,"Pâtes"),(plat,"Plat"),(dessert,"Dessert")]
    
    name = models.TextField(null=False, blank=False)
    type = models.CharField(max_length=10, choices=types, default=entree)
    price = models.FloatField(max_length=3, default=0)
    description = models.TextField(null=True, blank=True)
    promotion = models.BooleanField(default=False)
    today = models.DateField()
    
    def __str__(self):
        return self.name

class Drink(models.Model):
    bieresPression = "Bieres Pression"
    bieresBouteilles = "Bieres Bouteilles"
    sodas = "Jus de Fruits et Sodas"
    sirops = "Eaux Minerales & Sirops"
    alcools = "Alcools"
    apereties = "Aperities"
    vins = "Vins"
    boissons = "Boissons Chaudes"
    liq = "Liqueurs & Digesties"
    
    
    types = [(bieresPression, "Bieres Pression"), 
             (bieresBouteilles,"Bieres Bouteilles"),
             (sodas,"Jus de Fruits et Sodas"),
             ( sirops,"Eaux Minerales & Sirops"),
             (alcools,"Alcools"),
             (apereties,"Aperities"),
             (vins,"Vins"),
             (boissons,"Boissons Chaudes"),
             (liq,"Liqueurs & Digesties")]
    
    name = models.TextField(null=False, blank=False)
    type = models.CharField(max_length=40, choices=types, default=bieresPression)
    show = models.BooleanField(default=False)
    grams = models.CharField(max_length=50, default="/")
    price = models.CharField(max_length=50, default="/")
    
    def __str__(self):
        return self.name

    
    
    
    
