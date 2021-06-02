from flask import Blueprint, request
from app.models import db, User, Song, Album
from flask_login import current_user, login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('')
@login_required
def songs_page():
    songs = Song.query.filter_by(userId=current_user.id)

    return {"songs": [song.to_dict() for song in songs],
            }
