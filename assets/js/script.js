function clickNavBtn(){
    let navbtn = document.querySelector(".nav-btn")
    let containerNav = document.querySelector(".container-nav")

    navbtn.style.display = "none"
    containerNav.style.display = "block"
}

function clickCloseNavLinks(){
    let closebtn = document.querySelector(".icon-close-nav-links")
    let navbtn = document.querySelector(".nav-btn")
    let containerNav = document.querySelector(".container-nav")

    navbtn.style.display = "inline-block"
    containerNav.style.display = "none"
}

function clickDropdownBtn(){
    let dropdownMenu = document.querySelector(".dropdown-menu")
    let dropdownBtn = document.querySelector(".dropdown-btn")
    let dropdownBtnClose = document.querySelector(".dropdown-btn-close")

    dropdownMenu.style.display = "block"
    dropdownBtn.style.display = "none"
    dropdownBtnClose.style.display = "block"
}

function clickDropdownBtnClose(){
    let dropdownMenu = document.querySelector(".dropdown-menu")
    let dropdownBtn = document.querySelector(".dropdown-btn")
    let dropdownBtnClose = document.querySelector(".dropdown-btn-close")

    dropdownMenu.style.display = "none"
    dropdownBtn.style.display = "block"
    dropdownBtnClose.style.display = "none"
}

function clickBtnSearchInput(){
    let input = document.querySelector(".search-input")

    input.style.display = "inline-block"
}