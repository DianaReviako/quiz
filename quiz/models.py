from django.db import models


class Topic(models.Model):
    title = models.CharField(max_length=80)
    photo = models.ImageField(upload_to='topic_image/')

    def __str__(self):
        return self.title


class Question(models.Model):
    topic = models.ForeignKey(Topic, models.SET_NULL, blank=True, null=True)
    text = models.TextField()
    answer = models.TextField(blank=True)
    value = models.IntegerField(models.SET_NULL, blank=True, null=True)
    is_answered = models.BooleanField(default=False)

    def __str__(self):
        return self.text
