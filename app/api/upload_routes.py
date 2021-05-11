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
    # releaseDate = request.form["releaseDate"]
    # artistName = request.form["artist"]
    # albumName = request.form["album"]
    # albumImage = request.files["albumImage"]

    if not allowed_file(songItself.filename):
        return {"errors": "file type not permitted"}, 400

    songItself.filename = get_unique_filename(songItself.filename)

    upload = upload_file_to_s3(songItself)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_music = Song(userId=current_user.id, songItself=url, name=name)
    # artistName=Artist.name, releaseDate=releaseDate, albumName=Album.name, albumImage=Album.imageUrl)
    db.session.add(new_music)
    db.session.commit()
    return {"url": url}
