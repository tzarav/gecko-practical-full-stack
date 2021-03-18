from scheduler.models import Inspection
from scheduler.models import Maintenance
from rest_framework import viewsets
from rest_framework import permissions
from scheduler.serializers import InspectionSerializer
from scheduler.serializers import MaintenanceSerializer


class InspectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows inspections to be viewed or edited.
    """

    queryset = Inspection.objects.all().order_by("-end_date")
    serializer_class = InspectionSerializer
    # permission_classes = [permissions.IsAuthenticated]

class MaintenanceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Maintenance to be viewed or edited.
    """
    print("!maintains22")
    queryset = Maintenance.objects.all().order_by("-title")
    print("!maintains33")
    serializer_class = MaintenanceSerializer
    print("!maintains44")
    # permission_classes = [permissions.IsAuthenticated]
