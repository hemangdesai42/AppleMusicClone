from .db import db

class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    bio = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "bio": self.bio
        }
