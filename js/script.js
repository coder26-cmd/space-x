var instance = new vidbg('.video', {
    mp4: 'video/world.mp4',
    webm: 'video/world.webm',
    poster: 'img/poster.jpg',
    overlay: false,
    overlayColor: '#000',
    overlayAlpha: 0.3
});

var rellax = new Rellax('.rocket');

AOS.init();

if (document.body.clientWidth < 650) {
    rellax.destroy();
};