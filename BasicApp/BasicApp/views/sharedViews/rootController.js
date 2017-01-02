basicApp.controller('RootController', ['$scope', 'SideMenuList', '$state',
    function ($scope, SideMenuList, $state) {
		//JS variables
		var vm = this;
		
		//Controller Variables	
		vm.sideMenuItems = {};
		vm.sidemenuLocked = false;
		vm.sideMenuItems = SideMenuList;
		
	    //Functions
	    vm.SetSideMenuLock = setSideMenuLock;
	    
	    function setSideMenuLock(lock){
	    	vm.sidemenuLocked = lock ? true : false;
	    }
	}
]);