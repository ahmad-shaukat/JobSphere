from flask.cli import AppGroup
from .users import seed_users, undo_users
from .favoriteLists import seed_favoritelists, undo_favoriteLists
from .interviews import seed_interviews, undo_interviews
from .jobs import seed_jobs,undo_jobs
from .comments import seed_comments, undo_comments
# from .profiles import seed_profiles, undo_profiles
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
    seed_users()
    seed_favoritelists()
    seed_interviews()
    seed_comments()
    seed_jobs()
    # seed_profiles()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_favoriteLists()
    undo_interviews()
    undo_comments()
    undo_jobs()
    # undo_profiles()
    # Add other undo functions here