<pre>
<?php
    class Location {
        public float $latitude;
        public float $longitude;

        public function __construct( float $latitude, float $longitude) {
            $this->latitude = $latitude;
            $this->longitude = $longitude;
        }

        public function __toString(): string {
            return "{$this->latitude}, {$this->longitude}"; 
        }

        public function toArray(): array {
            return [
                'latitude' => $this->latitude,
                'longitude' => $this->longitude
            ];
        }
    }
    $xai = new Location(37.7749, -122.4194);
    $rats = new Location(34.0522, -118.2437);

    var_dump($xai, $rats);
    var_dump($xai->toArray(), "$rats");

?>
</pre>
