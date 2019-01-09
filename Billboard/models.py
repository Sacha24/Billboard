from django.db import models


class Model(models.Model):
    title = models.CharField(max_length=100)
    message = models.CharField(max_length=3000)
    author = models.CharField(max_length=30)

    def __str__(self):
        return "title: {}, message: {}, author: {}".format(self.title, self.message, self.author)
