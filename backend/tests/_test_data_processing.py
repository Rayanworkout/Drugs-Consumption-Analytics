from django.test import TestCase
from data_processing import get_drug_consumption_by_age

from csv_parser.csv_parser import Parser


class TestParser(TestCase):

    def setUp(self) -> None:
        # Populating the test database with the CSV data
        parser = Parser()
        parser.csv_to_database()

    def test_get_drug_consumption_by_age_default_args(self):
        data = get_drug_consumption_by_age(age_range="18-24", drug="Meth")

        self.assertEqual(data["age_range"], "18-24")
        self.assertEqual(data["drug"], "meth")
        self.assertEqual(data["data"]["never used"], 425)

    def test_get_drug_consumption_by_age_invalid_age_range(self):
        with self.assertRaises(ValueError):
            get_drug_consumption_by_age(age_range="invalid", drug="Meth")

    def test_get_drug_consumption_by_age_invalid_drug(self):
        with self.assertRaises(ValueError):
            get_drug_consumption_by_age(age_range="18-24", drug="invalid")
