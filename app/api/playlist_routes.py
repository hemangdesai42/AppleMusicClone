from flask import Blueprint, request
from app.models import db, User, Playlist, Song, playlistSong
from flask_login import current_user, login_required
# from app.forms import PlaylistForm
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
    playlist = Playlist.query.filter_by(id=playlist_id).first()
    song = Song.query.filter_by(id=song_id).first()
    playlistSongs_insert = playlistSong.insert().values(
        playlist_id=playlist_id, song_id=song_id)
    db.session.execute(playlistSongs_insert)
    db.session.commit()
    # return {"playlistSongs_insert": playlistSongs_insert}
    return playlistSongs_insert.to_dict()

# Add Song to Playlist using the form


# @playlist_routes.route("/<int:playlist_id>/song/<int:song_id>", methods=['POST'])
# @login_required
# def add_playlistsong():
#     form = AddsongForm()
#     playlist = Playlist.query.get(Playlist.id).first()
#     song = Song.query.get(Song.id).first()
#     if form:
#         addaSong = playlistSong.insert().values(
#             playlist_id=playlist,
#             song_id=song
#         )
#         db.session.execute(addaSong)
#         db.session.commit()
#         return

# #Remove Song from Playlist
# @playlist_routes.route("/<int:playlistId>/song/<int:songId>", methods=["DELETE"])
# @login_required
# def delete_playlistsong(playlistId, songId):
#     playlistSong = PlaylistSong.query.filter_by(playlist_id=playlistId, song_id=songId).first()
#     db.session.delete(playlistSong)
#     db.session.commit()
#     return {'deleteSong': playlistSong.to_dict()}
