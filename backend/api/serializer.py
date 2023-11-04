from rest_framework.serializers import ModelSerializer
from .models import Note,DailyMenu,Event,Drink

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'    
        
        
class MenuSerializer(ModelSerializer):
    class Meta:
        model = DailyMenu
        fields = '__all__'    
        
        
        
class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'    


class DrinkSerializer(ModelSerializer):
    class Meta:
        model = Drink
        fields = '__all__'