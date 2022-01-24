from django.db import models


class Topic(models.Model):
    title = models.CharField(max_length=80)
    photo = models.ImageField(upload_to='topic_image/')

    def __str__(self):
        return self.topic_title


class Question(models.Model):
    topic = models.ForeignKey(Topic, models.SET_NULL, blank=True, null=True)
    text = models.TextField()
    assessment = models.IntegerField(models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.text

class Answer(models.Model):
    question = models.ForeignKey(Question, models.SET_NULL, blank=True, null=True)
    answer = models.TextField()

    def __str__(self):
        return self.answer
