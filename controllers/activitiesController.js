angular.module("teams").controller("activitiesController", function ($scope) {
    $scope.guacamole_shortcuts = [
        {
            icon: 'fas fa-users',
            link: 'https://deere-my.sharepoint.com/personal/sanchezfelipedejesus_johndeere_com/Documents/Notebooks/JDCP%20Team%20M%C3%A9xico?web=1&ct=1563477799171&or=office%2Ecom&cid=cb67b5aa-1102-4a95-986a-c3179aae2fb3',
            title: 'Sharepoint Team'
        },
        {
            icon: 'fas fa-hdd',
            link: 'vendor/shortcut_jdcp_mexico_drive.bat',
            title: 'Team Drive'
        }];
});