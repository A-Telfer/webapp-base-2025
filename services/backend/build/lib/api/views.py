from django.http import JsonResponse
from . models import ButtonPress
from . tasks import log_hello

def index(request):
    get_last_pressed = ButtonPress.objects.order_by("last_pressed").last()
    if get_last_pressed is None:
        count = 0
    else:
        count = get_last_pressed.count

    create_button = ButtonPress.objects.create(count=count + 1)
    log_hello.delay_on_commit(create_button.pk)
    return JsonResponse(data={"count": create_button.count, "last_pressed": create_button.last_pressed}, status=200)