import os
from celery import Celery
from pathlib import Path
# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core_api.settings')

# Broker settings
celery_broker_url = Path(os.environ['CELERY_BROKER_URL_FILE']).read_text().strip()

app = Celery(
    'core_api', 
    broker=Path(os.environ['CELERY_BROKER_URL_FILE']).read_text().strip(),
    backend=Path(os.environ['CELERY_RESULT_BACKEND_FILE']).read_text().strip(),
    imports = ('api.tasks',)
)

# app.config_from_object('django.conf:settings', namespace='celery')

print("broker", app.conf.broker_url)
app.autodiscover_tasks()

@app.task(bind=True, ignore_result=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
