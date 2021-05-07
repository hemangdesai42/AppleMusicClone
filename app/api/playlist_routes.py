from flask import Blueprint, request
from app.models import db, User, Playlist
from flask_login import current_user, login_required

playlist_routes = Blueprint('playlists', __name__)


@playlist_routes.route('')
@login_required
def playlists_page():
    playlists = Playlist.query.filter_by(userId=current_user.id)

    return {"playlists": [playlist.to_dict() for playlist in playlists],
            }
