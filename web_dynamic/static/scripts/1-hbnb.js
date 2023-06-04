$(document).ready(function() {
    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        // Initialize an empty array to store the Amenity IDs
        var amenityIDs = [];

        // Iterate over each checked checkbox
        $('input[type="checkbox"]:checked').each(function() {
            // Get the Amenity ID from the data-id attribute
            var amenityID = $(this).closest('li').data('id');
            // Store the Amenity ID in the array
            amenityIDs.push(amenityID);
        });

        // Update the <h4> tag with the list of Amenities checked
        $('.amenities h4').text(amenityIDs.join(', '));
    });
});
