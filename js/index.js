document.addEventListener("DOMContentLoaded", function (event) {
    const ratio = 0.2;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    const handleIntersect = function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
    })


    const handleIntersectBar = function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('progress')
            }
        })
    }

    const observerBar = new IntersectionObserver(handleIntersectBar, options);
    document.querySelectorAll('.reveal-bar').forEach(function (r) {
        observerBar.observe(r);
    })

    const main = document.getElementById("main");
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navlinks = Array.from(document.querySelectorAll(`li`));
    console.log(navlinks)
    navlinks.forEach(e => {
        e.onclick = closeNav;
    });


    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
    main.onclick = closeNav;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        sidenav.classList.add("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        sidenav.classList.remove("active");
    }
})



