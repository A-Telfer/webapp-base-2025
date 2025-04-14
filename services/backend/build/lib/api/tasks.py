import logging 

from celery import shared_task

logger = logging.getLogger('django')

@shared_task
def log_hello(key):
    logger.info("Hello, world!")
