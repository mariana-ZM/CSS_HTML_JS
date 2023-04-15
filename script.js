function ScrollSmooth(link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
    })
}
var alllinks = document.querySelectorAll("a:link");
alllinks.forEach(ScrollSmooth);

const headerEl = document.querySelector(".header");

