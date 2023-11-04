from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note, DailyMenu, Event, Drink
from .serializer import NoteSerializer, MenuSerializer, EventSerializer,DrinkSerializer
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes =  [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    
    return Response(routes)

@csrf_exempt
@api_view(['GET','POST'])
def getNotes(request):
    
    if request.method == 'GET':
         
        notes = Note.objects.all().order_by('-updated')
        serializer  = NoteSerializer(notes, many=True) 
        return Response(serializer.data)


    if request.method == 'POST':
        data = request.data
        note = Note.objects.create(body=data['body'])
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getNote(request,pk):
    
   
        
        notes = Note.objects.get(id=pk)
        serializer  = NoteSerializer(notes, many=False) 
        return Response(serializer.data)
    
@csrf_exempt
@api_view(['GET'])
def getMenu(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = DailyMenu.objects.all().filter(today=date_now)
    serializer = MenuSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getEntree(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = DailyMenu.objects.all().filter(today=date_now).filter(type="Entree")
    serializer = MenuSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getPates(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = DailyMenu.objects.all().filter(today=date_now).filter(type="Pâtes")
    serializer = MenuSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getPlat(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = DailyMenu.objects.all().filter(today=date_now).filter(type="Plat")
    serializer = MenuSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getDessert(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = DailyMenu.objects.all().filter(today=date_now).filter(type="Dessert")
    serializer = MenuSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getBieresPression(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Bieres Pression")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getBieresBouteilles(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Bieres Bouteilles")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getSodas(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Jus de Fruits et Sodas")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getMinerals(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Eaux Minerales & Sirops")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getAlcools(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Alcools")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getAperities(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Aperities")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getVins(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Vins")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET'])
def getBoissonsChaudes(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Boissons Chaudes")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def getLiqueurs(request):
    sections = Drink.objects.all().filter(show=True).filter(type="Liqueurs & Digesties")
    serializer = DrinkSerializer(sections, many=True)
    return Response(serializer.data)


# @api_view(['POST'])
# def createNote(request):    
#     data = request.data
#     note = Note.objects.create(
#         body=data['body']
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)


@csrf_exempt
@api_view(['PUT'])
def updateNote(request,pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    
    if serializer.is_valid():
        serializer.save()    
    
    return Response(serializer.data)

@csrf_exempt
@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')



@csrf_exempt
@api_view(['GET'])
def getEvents(request):
    date_now = datetime.now().date()
    print(date_now)
    sections = Event.objects.all().filter(date__gte=date_now).order_by('date')
    serializer = EventSerializer(sections, many=True)
    return Response(serializer.data)
