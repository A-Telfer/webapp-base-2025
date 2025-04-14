from celery import shared_task


@shared_task
def log_hello(key):
    return 42
