function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/members.html',
        controller: 'SkillsMembersController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        };
    }
}