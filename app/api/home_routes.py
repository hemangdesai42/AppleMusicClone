from flask import Blueprint, request
from app.models import db, User, Album, Song, Playlist, Artist, PlaylistSong
from flask_login import current_user, login_required

home_routes = Blueprint('home', __name__)


@home_routes.route('')
@login_required
def home_page():
    albums = Album.query.all()
    artists = Artist.query.all()
    playlists = Playlist.query.all()
    songs = Song.query.filter_by(userId=current_user.id)


    return {"albums": [album.to_dict() for album in albums],
            "artists": [artist.to_dict() for artist in artists],
            "songs": [song.to_dict() for song in songs]
            # "playlists": [playlist.to_dict() for playlist in playlists],
            }
