from rest_framework import viewsets, filters, pagination
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import CourseSerializer
from .models import Course


class CoursePagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'perPage'
    max_page_size = 1000


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['name']
    filterset_fields = ['start_date', 'end_date']
    pagination_class = CoursePagination
