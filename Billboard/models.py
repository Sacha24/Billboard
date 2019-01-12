from django.db import models


class Model(models.Model):
    title = models.CharField(max_length=100, null=False)
    message = models.CharField(max_length=3000, null=False)

    def __str__(self):
        return "title: {}, message: {}".format(self.title, self.message)
