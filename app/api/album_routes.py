from flask import Blueprint, request
from app.models import db, User, Album
from flask_login import current_user, login_required

album_routes = Blueprint('albums', __name__)


@album_routes.route('')
@login_required
def albums_page():
    albums = Album.query.filter_by(userId=current_user.id)

    return {"albums": [album.to_dict() for album in albums],
            }
