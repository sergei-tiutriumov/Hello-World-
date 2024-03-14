from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
class Post(models.Model):
    text = models.TextField()
    pub_date = models.DateTimeField("date published", auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
# GENRE_CHOICES = (
#     ("R", "Rock"),
#     ("E", "Pop"),
#     ("C", "Classic"),
#     ("O", "Saundtracks"),
# )
# class CD(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField(null=True, blank=True)
#     artist = models.CharField(max_length=40)
#     date = models.DateField()
#     genre = models.CharField(max_length=1, choices=GENRE_CHOICES)

    