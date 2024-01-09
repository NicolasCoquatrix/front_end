// MENU MOBILE

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const link = document.querySelectorAll('.navbar a');

    function toggleMenu() {
        header.classList.toggle('show-nav');
        document.body.classList.toggle('no-scrollbar');
    }

    btn.addEventListener('click', () => {
        if (window.innerWidth < 749) {
            toggleMenu();
        }
    });

    link.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 749) {
                toggleMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 749) {
            header.classList.remove('show-nav');
            document.body.classList.remove('no-scrollbar');
        }
    });
}

menuMobile();

// PORTFOLIO FILTES

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projects = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    const showProjects = (elem) => {
        projects.forEach(project => {

            let filter = project.getAttribute('data-category')

            if (elem == 'all') {
                project.parentNode.classList.remove('hide');
                return
            }

            if (filter !== elem) {
                project.parentNode.classList.add('hide');
            } else {
                project.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        })
    })
}

tabsFilters();

// PORTFOLIO CARTES

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
    const bouton = document.querySelector('.card__overlay a');
    const maDiv = document.querySelector('.modal__content');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
            document.body.classList.add('no-scrollbar');
        });
    });

    bouton.addEventListener('click', () => {
        const isActive = maDiv.classList.contains('active');
        if (isActive) {
            document.body.classList.remove('no-scrollbar');
        } else {
            document.body.classList.add('no-scrollbar');
        }
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
            document.body.classList.remove('no-scrollbar');
        });
    });
}

showProjectDetails();

// EFFETS

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section)
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill)
    });
}

observerIntersectionAnimation();

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit-button');
    var modal = document.getElementById('modal-49.3');
    var closeButton = modal.querySelector('.modal__close');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});


// PAGE ERREUR

function showErrorPage() {
    const ErrorLinks = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
    const ErrorBouton = document.querySelector('.submit-button');
    const maDiv = document.querySelector('.modal__content');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    Errorlinks.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            hideModals();
            document.body.classList.remove('no-scrollbar');
        });
    });

    Errorbouton.addEventListener('click', (event) => {
        event.preventDefault();
        hideModals();
        document.querySelector(`[id=${bouton.dataset.id}]`).classList.add('show');
        document.body.classList.add('no-scrollbar');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
            document.body.classList.remove('no-scrollbar');
        });
    });
}

showErrorPage();