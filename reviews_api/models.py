from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=200, blank=False)
    job = models.CharField(max_length=60, blank=True)
    image = models.ImageField(upload_to='person/', blank=True)
    text = models.TextField()

    def __str__(self):
        return self.name
