(function () {
    window.addEventListener('load', function () {
        let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        let footer = document.querySelector('footer');

        let loadTimeElement = document.createElement('div')
        let text = document.createTextNode('Page load time: ' + loadTime + 'ms')
        loadTimeElement.appendChild(text)
        footer.appendChild(loadTimeElement)
    });
}
)
();