from flask import Blueprint, request
from app.models import artist, db, User, Album, Song, Artist
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
    artists = Artist.query.filter_by(id=album.artistId)
    return {"album": album.to_dict(), "songs": [song.to_dict() for song in songs],
            "artists": [artist.to_dict() for artist in artists]}
