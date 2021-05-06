from flask import Blueprint, request
from app.models import db, User, Artist
from flask_login import current_user, login_required

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('')
@login_required
def artists_page():
    artists = Artist.query.filter_by(userId=current_user.id)

    return {"artists": [artist.to_dict() for artist in artists],
            }
