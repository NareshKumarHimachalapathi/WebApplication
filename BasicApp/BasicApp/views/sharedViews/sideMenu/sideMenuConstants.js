(function () {
    'use strict';

    var sideMenuList = {
        "Header": "Basic Application",
        "MenuItems": [
             {
                 "Title": "Home",
                 "Icon": "home",
                 "State": 'home'
             },
             {
                 "Title": "Dashboard",
                 "Icon": "dashboard",
                 "State": 'dashboard'
             },
             {
                 "Title": "Reports",
                 "Icon": "multiline_chart",
                 "State": "reports"
             }
        ]
    };

    basicApp.constant('SideMenuList', sideMenuList);

})();