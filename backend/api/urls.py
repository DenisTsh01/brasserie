from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),    
    path('notes/', views.getNotes, name="notes"),
    # path('notes/create/', views.createNote, name="create-note"),
    path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
# ookokok
    path('menu/',views.getMenu, name="menu"),
    path('entree/',views.getEntree, name="entree"),
    path('pates/',views.getPates, name="pates"),
    path('plat/',views.getPlat, name="plat"),
    path('dessert/',views.getDessert, name="dessert"),
    path('events/',views.getEvents, name="events"),
    path('bieres_pression/',views.getBieresPression, name="pression"),
    path('bieres_bouteiless/',views.getBieresBouteilles, name="pression"),
    path('sodas/',views.getSodas, name="pression"),
    path('minerals/',views.getMinerals, name="pression"),
    path('alcools/',views.getAlcools, name="pression"),
    path('aperities/',views.getAperities, name="pression"),
    path('vins/',views.getVins, name="pression"),
    path('boissons_chaudes/',views.getBoissonsChaudes, name="pression"),
    path('liqueurs/',views.getLiqueurs, name="pression"),



    
    path('notes/<str:pk>/', views.getNote, name="note"),


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
   