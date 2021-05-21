from flask import Blueprint, request
from app.models import db, User, Album, Song
from flask_login import current_user, login_required

album_routes = Blueprint('albums', __name__)


@album_routes.route('')
@login_required
def albums_page():
    albums = Album.query.filter_by(userId=current_user.id)

    return {"albums": [album.to_dict() for album in albums],
            }

#One Album
@album_routes.route("/<int:id>", methods=["GET"])
@login_required
def get_album(id):
    album = Album.query.get(id)
    songs = Song.query.filter_by(albumId=id)

    return {"album": album.to_dict(), "songs": [song.to_dict() for song in songs]}
