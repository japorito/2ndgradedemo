'use strict';

window.onload = function() {
    const wintersElementary = {};

    wintersElementary['room29'] = {
        'pageTitle' : 'Miss Wells\' Second Graders',
        'classDescription' : '', // ???
        'teacher' : {
            'image' : null,
            'description' : '' // ???
        },
        'pictures' : []
    };

    wintersElementary['playground'] = {
        'pageTitle' : 'The Playground!',
        'classDescription' : '',
        'teacher' : {
            'image' : null,
            'description' : null
        },
        'pictures' : []
    };

    wintersElementary['school'] = {
        'pageTitle' : 'Winters Elementary School',
        'classDescription' : '',
        'teacher' : {
            'image' : null,
            'description' : null
        },
        'pictures' : []
    };

    const model = new Vue({
        el : '#main',

        data : Object.assign({}, wintersElementary.room29),

        methods: {
            switchPart : function(part) {
                this.pageTitle = wintersElementary[part].pageTitle;
                this.classDescription = wintersElementary[part].classDescription;
                this.teacher = wintersElementary[part].teacher;
                this.pictures = wintersElementary[part].pictures;
            }
        },

        computed : {
            'links': function() {
                return [
                    // {
                    //     description : 'Room 29',
                    //     part : 'room29'
                    // },
                    // {
                    //     description : 'Winters Elementary School',
                    //     part : 'school'
                    // },
                    // {
                    //     description : 'The Playground',
                    //     part : 'playground'
                    // },
                ];
            }
        }
    });
};
