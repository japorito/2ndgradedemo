'use strict';

window.onload = function() {
    const waggonerElementary = {};

    waggonerElementary['room29'] = {
        'pageTitle' : 'Miss Wells\' Second Graders',
        'classDescription' : '', // ???
        'teacher' : {
            'image' : null, // ???
            'description' : '' // ???
        },
        'pictures' : [
            'images/room29-1.JPG',
            'images/room29-2.JPG',
            'images/room29-3.JPG',
            'images/room29-4.JPG',
            'images/room29-5.JPG',
            'images/room29-6.JPG'
        ]
    };

    waggonerElementary['playground'] = {
        'pageTitle' : 'The Playground!',
        'classDescription' : '',
        'teacher' : {
            'image' : null,
            'description' : null
        },
        'pictures' : [
            'images/playground-3.JPG',
            'images/playground-4.JPG',
            'images/playground-5.JPG',
            'images/playground-1.JPG',
            'images/playground-2.JPG'
        ]
    };

    waggonerElementary['school'] = {
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

        data : Object.assign({
                                 links : [
                                     // {
                                     //     description : 'Room 29',
                                     //     part : 'room29'
                                     // },
                                     // {
                                     //     description : 'Waggoner Elementary School',
                                     //     part : 'school'
                                     // },
                                     // {
                                     //     description : 'The Playground',
                                     //     part : 'playground'
                                     // }
                                 ]
                             },
                             waggonerElementary.room29),

        methods: {
            switchPart : function(part) {
                this.pageTitle = waggonerElementary[part].pageTitle;
                this.classDescription = waggonerElementary[part].classDescription;
                this.teacher = waggonerElementary[part].teacher;
                this.pictures = waggonerElementary[part].pictures;
            }
        }
    });
};
