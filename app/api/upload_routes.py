from flask import Blueprint, request
from app.models import db, Song, Album, Artist
from flask_login import current_user, login_required
from app.AWS_upload import (
    upload_file_to_s3, allowed_file, get_unique_filename)

upload_routes = Blueprint("upload", __name__)


@upload_routes.route("", methods=["POST"])
@login_required
def upload_song():
    if "songItself" not in request.files:
        return {"errors": "song required"}, 400

    songItself = request.files["songItself"]
    name = request.form["name"]
    artistName = request.form["artistName"]
    albumName = request.form["albumName"]
    albumImage = request.files["albumImage"]

    if not allowed_file(songItself.filename):
        return {"errors": "file type not permitted"}, 400

    songItself.filename = get_unique_filename(songItself.filename)
    albumImage.filename = get_unique_filename(albumImage.filename)
    upload = upload_file_to_s3(songItself)
    uploadImage = upload_file_to_s3(albumImage)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    if "url" not in uploadImage:
        return uploadImage, 400

    url = upload["url"]
    urlImage = uploadImage["url"]
    # flask_login allows us to get the current user from the request
    artist = Artist.query.filter_by(name=artistName).first()
    if artist:
        song_artist = artist
    else:
        song_artist = Artist(name=artistName)
        db.session.add(song_artist)

    album = Album.query.filter_by(name=albumName).first()
    if album:
        song_album = album
    else:
        song_album = Album(name=albumName, imageUrl=urlImage, artists=song_artist)
        db.session.add(song_album)

    # new_album = Album(name=albumName, imageUrl=urlImage, artists=song_artist)
    new_music = Song(userId=current_user.id, songItself=url, name=name, albums=song_album, artists=song_artist) 
    db.session.add(new_music)
    db.session.commit()
    return {"url": url, "urlImage": urlImage}
