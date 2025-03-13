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
        "longitude": 9.736082973150596,
        "icon": "fas fa-car", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": " Mohamed location (+237 96366689) <br> kura cars (+237 6 55 95 30 20)"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.099237252744888, 
        "longitude":  9.734936194525488,
        "icon": "fas fa-home", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "<a href=' https://www.booking.com/hotel/cm/appartement-de-denver.it.html?aid=397594&label=gog235jc-1BCAEoggI46AdIM1gDaCyIAQGYARS4ARfIAQzYAQHoAQGIAgGoAgO4AvP6zbkGwAIB0gIkNDQyY2ZhYjgtMGNiOS00NmZiLWE2OTItMWYyYmI2ZDBkYmU22AIF4AIB&sid=2f0af5abe7c2431a424bbd96243b0910&all_sr_blocks=1293875601_402329403_4_0_0&checkin=2025-07-24&checkout=2025-07-25&dest_id=12938756&dest_type=hotel&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=1293875601_402329403_4_0_0&hpos=1&matching_block_id=1293875601_402329403_4_0_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1293875601_402329403_4_0_0__4800000&srepoch=1741209885&srpvid=2bf19682a3ee03c6&type=total&ucfs=1&'>Appartement de Denver</a>"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.084424498398096,
        "longitude":  9.750513473142876,
        "icon": "fas fa-home", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "<a href='https://www.booking.com/hotel/cm/vendome.it.html?aid=397594&label=gog235jc-1BCAEoggI46AdIM1gDaCyIAQGYARS4ARfIAQzYAQHoAQGIAgGoAgO4AvP6zbkGwAIB0gIkNDQyY2ZhYjgtMGNiOS00NmZiLWE2OTItMWYyYmI2ZDBkYmU22AIF4AIB&sid=2f0af5abe7c2431a424bbd96243b0910&all_sr_blocks=885704001_358168813_0_2_0_589538&checkin=2025-07-24&checkout=2025-07-25&dest_id=8857040&dest_type=hotel&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=885704001_358168813_0_2_0_589538&hpos=1&matching_block_id=885704001_358168813_0_2_0_589538&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=885704001_358168813_0_2_0_589538_2393600&srepoch=1741209929&srpvid=2906969f24f50380&type=total&ucfs=1&#map_opened-map_trigger_header_pin'>Hôtel Vendôme Douala</a>"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.080663138502421, 
        "longitude":  9.752570683462316,
        "icon": "fas fa-home", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "<a href='https://www.booking.com/hotel/cm/villa-only.it.html?label=gog235jc-1DCAEoggI46AdIM1gDaCyIAQGYARS4ARfIAQzYAQPoAQGIAgGoAgO4AvP6zbkGwAIB0gIkNDQyY2ZhYjgtMGNiOS00NmZiLWE2OTItMWYyYmI2ZDBkYmU22AIE4AIB&sid=6d27b71d3f7a335800441ea1df22fe43&aid=397594&ucfs=1&checkin=2025-03-05&checkout=2025-03-06&group_adults=2&no_rooms=1&group_children=0&srpvid=0ef9971e7a9004e7&srepoch=1741210192&matching_block_id=1110849101_387976860_8_0_0&atlas_src=hp_iw_btn#map_opened-map_trigger_header_pin'>Villa Only</a>"
    },
    {
        "title": "Ceremonie",
        "latitude": 4.09986683250336,  
        "longitude":  9.739231103089192,
        "icon": "fas fa-home", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "<a href='https://www.booking.com/hotel/cm/tsquare-residence.it.html?label=gog235jc-1DCAEoggI46AdIM1gDaCyIAQGYARS4ARfIAQzYAQPoAQGIAgGoAgO4AvP6zbkGwAIB0gIkNDQyY2ZhYjgtMGNiOS00NmZiLWE2OTItMWYyYmI2ZDBkYmU22AIE4AIB&sid=6d27b71d3f7a335800441ea1df22fe43&aid=397594&ucfs=1&checkin=2025-07-24&checkout=2025-07-27&dest_id=-3148348&dest_type=city&group_adults=1&no_rooms=1&group_children=0&nflt=ht_id%3D201%3Bht_id%3D204&srpvid=7ed997e462f307a4&srepoch=1741210756&matching_block_id=1284113601_401347826_1_0_0&atlas_src=sr_iw_title#map_opened-map_trigger_header_pin'>TSquare Residence</a>"
    }
];