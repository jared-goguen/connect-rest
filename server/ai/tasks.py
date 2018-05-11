from celery import shared_task

@shared_task
def run_bots():
	from .bots import bots
	for bot in bots:
		bot.automate_actions()
