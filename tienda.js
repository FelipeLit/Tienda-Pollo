let theme = document.getElementById('fondo');
let body = document.getElementById("body");

theme.addEventListener('change', ()=>{
    if (theme.value == "black"){//tema oscuro
        body.classList.add('theme-dark');
        body.classList.remove('theme-blue');
        body.classList.remove('theme-light')
    }

    else if (theme.value == "white"){//tema claro
        body.classList.add('theme-light');
        body.classList.remove('theme-blue');
        body.classList.remove('theme-dark')
    }

    else if (theme.value == "blue"){//teme blue
        body.classList.add('theme-blue');
        body.classList.remove('theme-light');
        body.classList.remove('theme-dark')
    }
});

