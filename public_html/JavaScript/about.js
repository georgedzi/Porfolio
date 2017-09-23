(function () {

    var javaIcon, androidIcon, htmlIcon, javascriptIcon, cssIcon, scrolltop,
            scrollComplete;

    // Main
    initAbout();
    addListeners();

    function initAbout() {
        javaIcon = document.getElementById('icon-java');
        androidIcon = document.getElementById('icon-android');
        htmlIcon = document.getElementById('icon-html');
        javascriptIcon = document.getElementById('icon-javascript');
        cssIcon = document.getElementById('icon-css');
        tester = document.getElementById('tester');

        javaIcon.style.top = 8 + "em";
        javaIcon.style.opacity = 0;

        androidIcon.style.top = 8 + "em";
        androidIcon.style.opacity = 0;

        htmlIcon.style.top = 3.5 + "em";
        htmlIcon.style.opacity = 8;

        javascriptIcon.style.top = 8 + "em";
        javascriptIcon.style.opacity = 0;

        cssIcon.style.top = 3.5 + "em";
        cssIcon.style.opacity = 0;

        scrollComplete = false;
    }

    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
    }

    function scrollCheck() {
        scrolltop = document.body.scrollTop / 125;

        if (!scrollComplete) {
            if (scrolltop >= 8)
                scrollComplete = true;

            else {
                javaIcon.style.top = 8 - scrolltop + "em";
                javaIcon.style.opacity = 0 + scrolltop/8;
                
                androidIcon.style.top = 8 - scrolltop + "em";
                androidIcon.style.opacity = 0 + scrolltop/8;
                
                htmlIcon.style.top = 3.5 - scrolltop + "em";
                htmlIcon.style.opacity = 0 + scrolltop/8;
                
                javascriptIcon.style.top = 8 - scrolltop + "em";
                javascriptIcon.style.opacity = 0 + scrolltop/8;
                
                cssIcon.style.top = 3.5 - scrolltop + "em";
                cssIcon.style.opacity = 0 + scrolltop/8;
            }
        }
    }
})();