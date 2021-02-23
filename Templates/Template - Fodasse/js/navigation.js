const toggleNavBar = () => {
    const menu = document.getElementById( "navbarSupportedContent" );
    console.log( menu );
    menu.classList.toggle( "collapse" );
}



document.querySelector( ".navbar-toggler" ).addEventListener( "click", toggleNavBar );

