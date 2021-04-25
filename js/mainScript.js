var currentMenu = 1;

function highlight( img, which )
{
    switch( which )
    {
        case 1: img.src = "./images/home_btn_active.svg";
                break;
        case 2: img.src = "./images/about_btn_active.svg";
                break;
        case 3: img.src = "./images/work_btn_active.svg";
                break;
        case 4: img.src = "./images/contact_btn_active.svg";
                break;
    }
}

function resetHighlight( img, which )
{
    if( which == currentMenu )
        return;
    switch( which )
    {
        case 1: img.src = "./images/home_btn.svg";
                break;
        case 2: img.src = "./images/about_btn.svg";
                break;
        case 3: img.src = "./images/work_btn.svg";
                break;
        case 4: img.src = "./images/contact_btn.svg";
                break;
    }
}

function setCurrentMenu( menuNo )
{
    currentMenu = menuNo;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    switch( currentMenu )
    {
        case 1:
                document.getElementById( "home" ).style.visibility = "visible";
                document.getElementById( "about" ).style.visibility = "hidden";
                document.getElementById( "work" ).style.visibility = "hidden";
                document.getElementById( "contact_div" ).style.visibility = "hidden";
                
                break;
        case 2:
                document.getElementById( "home" ).style.visibility = "hidden";
                document.getElementById( "about" ).style.visibility = "visible";
                document.getElementById( "work" ).style.visibility = "hidden";
                document.getElementById( "contact_div" ).style.visibility = "hidden";
                
                break;
        case 3:
                document.getElementById( "home" ).style.visibility = "hidden";
                document.getElementById( "about" ).style.visibility = "hidden";
                document.getElementById( "work" ).style.visibility = "visible";
                document.getElementById( "contact_div" ).style.visibility = "hidden";
                break;
        case 4: 
                document.getElementById( "home" ).style.visibility = "hidden";
                document.getElementById( "about" ).style.visibility = "hidden";
                document.getElementById( "work" ).style.visibility = "hidden";
                document.getElementById( "contact_div" ).style.visibility = "visible";
                
                break;
    }
    resetIcons();
}

function resetIcons()
{
    document.getElementById( "img_home" ).style.width = '100%';
    document.getElementById( "img_home" ).style.height = '100%';
    
    document.getElementById( "img_about" ).style.width = '100%';
    document.getElementById( "img_about" ).style.height = '100%';
    
    document.getElementById( "img_work" ).style.width = '100%';
    document.getElementById( "img_work" ).style.height = '100%';
    
    document.getElementById( "img_contact" ).style.width = '100%';
    document.getElementById( "img_contact" ).style.height = '100%';
    
    document.getElementById( "img_home" ).src       = "./images/home_btn.svg";
    document.getElementById( "img_about" ).src      = "./images/about_btn.svg";
    document.getElementById( "img_work" ).src       = "./images/work_btn.svg";
    document.getElementById( "img_contact" ).src    = "./images/contact_btn.svg";

    switch( currentMenu )
    {
        case 1: document.getElementById( "img_home" ).src = "./images/home_btn_active.svg";
                break;
        case 2: document.getElementById( "img_about" ).src = "./images/about_btn_active.svg";
                break;
        case 3: document.getElementById( "img_work" ).src = "./images/work_btn_active.svg";
                break;
        case 4: document.getElementById( "img_contact" ).src = "./images/contact_btn_active.svg";
                break;
    }
}

function sendMessage()
{
    document.getElementById( 'messageSentInfo' ).style.color = "red";
    document.getElementById( 'messageSentInfo' ).innerHTML = "";
    if ( document.getElementById( 'name' ).value == "" )
    {
        document.getElementById( 'messageSentInfo' ).innerHTML = "Please enter your name!";
    } else if ( document.getElementById( 'phone' ).value != "" && !document.getElementById( 'phone' ).value.match( /^(\+\d{2})?\d{10}$/ ) )
    {
        document.getElementById( 'messageSentInfo' ).innerHTML = "Invalid phone number";
    } else if ( !document.getElementById( 'email' ).value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ) )
    {
        document.getElementById( 'messageSentInfo' ).innerHTML = "Please enter a valid email address !";
    } else if ( document.getElementById( 'message' ).value != "" )
    {
        $.ajax({
            type: 'post',
            url: 'receiveMessage.jsp',
            data: {
                name: document.getElementById( 'name' ).value,
                email: document.getElementById( 'email' ).value,
                phone: document.getElementById( 'phone' ).value,
                message: document.getElementById( 'message' ).value
            },
            success: function (response) 
            {
                // We get the element having id of display_info and put the response inside it
    		document.getElementById( 'messageSentInfo' ).style.color = "green";
        	document.getElementById( 'messageSentInfo' ).innerHTML = response;
            }
        });
    } else
    {
        document.getElementById( 'messageSentInfo' ).style.color = "red";
        document.getElementById( 'messageSentInfo' ).innerHTML = "Please type in the message in message box!";
    }
}

