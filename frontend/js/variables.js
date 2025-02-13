/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "https://via.placeholder.com/1920x1080.png",
    "https://via.placeholder.com/1920x1080.png",
    "https://via.placeholder.com/1920x1080.png"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DAYS";                            //Countdown "Days" label
var c_hours = "HOURS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Event Started!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 14;                      //The initial zoom when Google map loads
var map_initial_latitude = 4.098026354010028;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = 9.743442449044716;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = true;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Reception",
        "latitude": 4.098026354010028, 
        "longitude": 9.743442449044716,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Arena 1, Bonamoussadi, Douala"
    },
    {
        "title": "Accommodation 1",
        "latitude": 33.777929,
        "longitude": -118.076891,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 1 <br> Rossmoor, CA 90720"
    },
    {
        "title": "Accommodation 2",
        "latitude": 33.780428,
        "longitude": -118.084075,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 2 <br> Los Alamitos, CA 90720"
    },
    {
        "title": "Accommodation 3",
        "latitude": 33.777551,
        "longitude": -118.050468,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 3 <br> Seal Beach, CA 90740"
    },
    {
        "title": "Transportation",
        "latitude": 33.782930,
        "longitude": -118.060552,
        "icon": "fas fa-plane", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Seal Beach VORTAC SLI <br> Los Alamitos, CA 90720"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.0828987172965245, 
        "longitude": 9.753920533856045,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Eglise Sainte Monique, Makepe"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.084823525964982, 
        "longitude": 9.756082973156596,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": " Mohamed location (+237 96366689) <br> kura cars (+237 6 55 95 30 20)"
    }
];