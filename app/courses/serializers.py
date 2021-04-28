from rest_framework import serializers

from .models import Course


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['pk', 'name', 'start_date', 'end_date', 'lectures_quantity']
