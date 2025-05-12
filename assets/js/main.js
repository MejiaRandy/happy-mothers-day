// Just a comment

// Progressive enhancement
document.documentElement.classList.remove('no-js');
document.getElementById('loader').remove();

// Intersection Observer for lazy loading
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
};

const lazyObserver = new IntersectionObserver(lazyLoad);
document.querySelectorAll('[data-src]').forEach(img => lazyObserver.observe(img));

// Video controls
class VideoPlayer {
    constructor(videoEl) {
        this.video = videoEl;
        this.controls = videoEl.parentElement.querySelector('.video-controls');
        this.init();
    }

    init() {
        this.video.removeAttribute('hidden');
        this.controls.hidden = false;
        
        this.controls.querySelector('.video-play').addEventListener('click', () => {
            this.video.paused ? this.video.play() : this.video.pause();
        });
    }
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main-content').classList.remove('hidden');
    
    const videos = document.querySelectorAll('.video-element');
    videos.forEach(video => new VideoPlayer(video));
});