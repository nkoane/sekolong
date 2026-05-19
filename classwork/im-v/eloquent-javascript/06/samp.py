class Location:
    def __init__(self, latitude, longitude):
        self.latitude = latitude
        self.longitude = longitude

    def __str__(self):
        return f"{self.latitude},{self.longitude}"

    # get location as an array
    def get_location_array(self):
        return [self.latitude, self.longitude]


# create a location object
xai = Location(37.7749, -122.4194)
rats = Location(40.7128, -74.0060)
# print the location object
print(xai)
print(rats)
# print the location as an array
print(xai.get_location_array())
print(rats.get_location_array())
