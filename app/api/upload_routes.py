from flask import Blueprint, request
from app.models import db, User, Song, Album, Artist
from flask_login import current_user, login_required
from app.AWS_upload import (
    upload_file_to_s3, allowed_file, get_unique_filename)

upload_routes = Blueprint("upload", __name__)


@upload_routes.route("", methods=["POST"])
@login_required
def upload_music():
    if "music" not in request.files:
        return {"errors": "song required"}, 400

    song = request.files["song"]
    artist = request.form["artist"]
    album = request.form["album"]
    
    if not allowed_file(song.filename):
        return {"errors": "file type not permitted"}, 400

    song.filename = get_unique_filename(song.filename)

    upload = upload_file_to_s3(song)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_music = Image(userId=current_user.id, songItself=url, artist=artist, album=album)
    db.session.add(new_music)
    db.session.commit()
    return {"url": url}
