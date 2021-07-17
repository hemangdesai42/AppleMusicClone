from flask import Blueprint, request
from app.models import db, User, Playlist, playlistSong, Song
from flask_login import current_user, login_required
from app.forms import PlaylistForm
from sqlalchemy.orm import joinedload


playlist_routes = Blueprint('playlists', __name__)

#Get all user's playlists
@playlist_routes.route('')
@login_required
def playlists_page():
    playlists = Playlist.query.filter_by(userId=current_user.id)

    return {"playlists": [playlist.to_dict() for playlist in playlists],
            }

#Create a Playlist
@playlist_routes.route('/create', methods = ['POST'])
@login_required
def create_playlists():
    form = PlaylistForm()
    if form:
        playlist = Playlist(
            userId=current_user.id, 
            name=form.data['name'], 
            imageUrl=form.data['imageUrl']
        )
        db.session.add(playlist)
        db.session.commit()
        return playlist.to_dict()

# Get one playlist
@playlist_routes.route("/<int:id>", methods=["GET"])
@login_required
def get_playlist(id):
    playlist = Playlist.query.get(id)
    playlistSongs = playlist.songs
    
    return {"playlist": playlist.to_dict(), "playlistSongs": [playlistSong.to_dict() for playlistSong in playlistSongs]}


#Delete a Playlist
@playlist_routes.route("/<int:id>/delete", methods=["DELETE"])
@login_required
def delete_playlist(id):
    playlist = Playlist.query.get(id)
    db.session.delete(playlist)
    db.session.commit()
    return {'delete': playlist.to_dict()}

# Add Song to Playlist
@playlist_routes.route("/<int:playlist_id>/song/<int:song_id>", methods=["POST"])
@login_required
def add_playlistsong(playlist_id, song_id):
    playlist = Playlist.query.filter_by(playlist_id)
    song = Song.query.filter_by(song_id)
    playlistSongs = playlistSong(playlist_id=playlist.id, song_id=song.id)
    db.session.add(playlistSongs)
    db.session.commit()
    return {'playlistSongs': playlistSongs}

# #Remove Song from Playlist
# @playlist_routes.route("/<int:playlistId>/song/<int:songId>", methods=["DELETE"])
# @login_required
# def delete_playlistsong(playlistId, songId):
#     playlistSong = PlaylistSong.query.filter_by(playlist_id=playlistId, song_id=songId).first()
#     db.session.delete(playlistSong)
#     db.session.commit()
#     return {'deleteSong': playlistSong.to_dict()}
