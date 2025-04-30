document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('portraitVideo');
    
    // Function to ensure video plays
    function playVideo() {
        video.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    }

    // Play video when it's loaded
    video.addEventListener('loadedmetadata', playVideo);
    
    // Handle user interaction to play video (needed for mobile devices)
    document.addEventListener('click', playVideo);
    document.addEventListener('touchstart', playVideo);
    
    // Ensure video stays in portrait mode
    video.addEventListener('loadedmetadata', function() {
        if (video.videoWidth > video.videoHeight) {
            video.style.transform = 'rotate(90deg)';
        }
    });
}); 