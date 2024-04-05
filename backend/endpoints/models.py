from django.db import models

from .respondent_field_choices import (
    AGE_CHOICES,
    EDUCATION_CHOICES,
    COUNTRY_CHOICES,
    ETHNICITY_CHOICES,
    DRUG_USAGE_CHOICES,
)


class Respondent(models.Model):
    """
    A respondent is a person who answered the survey about the drug consumption.

    """

    age = models.CharField(max_length=20, choices=AGE_CHOICES, null=True, blank=True)

    gender = models.CharField(
        max_length=20, choices=[("Female", "Female"), ("Male", "Male")], null=True, blank=True
    )

    education = models.CharField(
        max_length=100, choices=EDUCATION_CHOICES, null=True, blank=True
    )

    country = models.CharField(
        max_length=100, choices=COUNTRY_CHOICES, null=True, blank=True
    )

    ethnicity = models.CharField(
        max_length=100, choices=ETHNICITY_CHOICES, null=True, blank=True
    )

    # Each of the following fields represents a personality trait
    # The values are floats between 0 and 1
    # The higher the value, the more the person has that trait

    # neuroticism
    nscore = models.FloatField(null=True, blank=True)

    # extraversion
    escore = models.FloatField(null=True, blank=True)

    # openness to experience
    oscore = models.FloatField(null=True, blank=True)

    # agreeableness
    ascore = models.FloatField(null=True, blank=True)

    # conscientiousness
    cscore = models.FloatField(null=True, blank=True)

    impulsive = models.FloatField(null=True, blank=True)
    ss = models.FloatField(null=True, blank=True)

    alcohol = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    amphet = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    amyl = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    benzos = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    caff = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    cannabis = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    choc = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    coke = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    crack = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    ecstasy = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    heroin = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    ketamine = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    legalh = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    lsd = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    meth = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    mushrooms = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    nicotine = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )
    vsa = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )

    # Fake drug, to identify people who are not answering truthfully
    semer = models.CharField(
        max_length=100, choices=DRUG_USAGE_CHOICES, null=True, blank=True
    )