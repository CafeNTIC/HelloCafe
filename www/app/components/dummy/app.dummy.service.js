/**
 * Created by bface007 on 31/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('HelloCafe')
        .factory('Dummy', dummyFactory);

    function dummyFactory(){
        var dummyFactory = {};

        dummyFactory.getAllProjects = getAllProjects;
        dummyFactory.getAllUsers = getAllUsers;
        dummyFactory.getProjectById = getProjectById;
        dummyFactory.getUserById = getUserById;

        return dummyFactory;

        function getUserById(userId){
            var users = getAllUsers(),
                user = null;

            for(var i = 0; i < users.length; i++){
                if(userId == users[i].userId){
                    user = users[i];
                    break;
                }
            }

            return user;
        }

        function getProjectById(projectId){
            var projects = getAllProjects(),
                project = null;

            for(var i = 0; i < projects.length; i++){
                if(projectId == projects[i].id){
                    project = projects[i];
                    break;
                }
            }
            return project;
        }

        function getAllProjects(){
            return [
                {
                    id: 1,
                    userId: 1,
                    title: "Construction de maisons en bois récyclé",
                    desc: {
                        mini: "Entreprise de construction en ossature de bois recyclé",
                        big: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nullam interdum diam a velit pulvinar iaculis. " +
                        "Proin vestibulum imperdiet enim in gravida. " +
                        "Suspendisse at porta metus, id auctor nunc. " +
                        "Aliquam pellentesque, ligula vel malesuada " +
                        "viverra, eros justo gravida erat, vitae consectetur sapien eros dapibus nulla. " +
                        "Etiam tincidunt pellentesque iaculis. " +
                        "Donec vestibulum egestas lectus a condimentum. " +
                        "Nullam in mi lectus. Aenean eu pulvinar leo. " +
                        "Nulla non ultrices nibh, vel consectetur ipsum. " +
                        "Vestibulum maximus semper nisi et maximus. " +
                        "Suspendisse non pretium nisi, eget condimentum libero. " +
                        "Donec id venenatis elit. In porttitor massa vitae tellus fringilla, ut rhoncus felis molestie. " +
                        "Ut eu purus ac odio ornare maximus."
                    },
                    medias: {
                        une: "./img/dummy/1/1.png",
                        others: ["./img/dummy/1/2.png", "./img/dummy/1/3.png"]
                    },
                    goal: 20000000,
                    change: "Fcfa",
                    participations: 15000000,
                    comments: [
                        {
                            id: 1,
                            userId: 1,
                            date: new Date(2015,11,17,21,30,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 2,
                            userId: 2,
                            date: new Date(2015,11,17,21,32,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 3,
                            userId: 1,
                            date: new Date(2015,11,17,21,36,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 4,
                            userId: 3,
                            date: new Date(2015,11,17,21,39,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 5,
                            userId: 4,
                            date: new Date(2015,11,17,21,40,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 6,
                            userId: 1,
                            date: new Date(2015,11,17,22,0,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        }
                    ],
                    contributors: [
                        {
                            userId: 2
                        },
                        {
                            userId: 3
                        },
                        {
                            userId: 4
                        },
                        {
                            userId: 5
                        },
                        {
                            userId: 6
                        }
                    ]
                },
                {
                    id: 2,
                    userId: 2,
                    title: "Fournisseur d'énergie solaire à usage domestique",
                    desc: {
                        mini: "Utilisons la source d'énergie la plus écolo et la plus inépuisable.",
                        big: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nullam interdum diam a velit pulvinar iaculis. " +
                        "Proin vestibulum imperdiet enim in gravida. " +
                        "Suspendisse at porta metus, id auctor nunc. " +
                        "Aliquam pellentesque, ligula vel malesuada " +
                        "viverra, eros justo gravida erat, vitae consectetur sapien eros dapibus nulla. " +
                        "Etiam tincidunt pellentesque iaculis. " +
                        "Donec vestibulum egestas lectus a condimentum. " +
                        "Nullam in mi lectus. Aenean eu pulvinar leo. " +
                        "Nulla non ultrices nibh, vel consectetur ipsum. " +
                        "Vestibulum maximus semper nisi et maximus. " +
                        "Suspendisse non pretium nisi, eget condimentum libero. " +
                        "Donec id venenatis elit. In porttitor massa vitae tellus fringilla, ut rhoncus felis molestie. " +
                        "Ut eu purus ac odio ornare maximus."
                    },
                    medias: {
                        une: "./img/dummy/2/2.jpg",
                        others: ["./img/dummy/2/1.gif", "./img/dummy/2/3.jpg"]
                    },
                    goal: 10000000,
                    change: "Fcfa",
                    participations: 5000000,
                    comments: [
                        {
                            id: 1,
                            userId: 1,
                            date: new Date(2015,11,17,21,30,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 2,
                            userId: 2,
                            date: new Date(2015,11,17,21,32,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 3,
                            userId: 1,
                            date: new Date(2015,11,17,21,36,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 4,
                            userId: 3,
                            date: new Date(2015,11,17,21,39,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 5,
                            userId: 4,
                            date: new Date(2015,11,17,21,40,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 6,
                            userId: 1,
                            date: new Date(2015,11,17,22,0,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        }
                    ],
                    contributors: [
                        {
                            userId: 2
                        },
                        {
                            userId: 3
                        },
                        {
                            userId: 4
                        },
                        {
                            userId: 5
                        },
                        {
                            userId: 6
                        }
                    ]
                },
                {
                    id: 3,
                    userId: 6,
                    title: "Recyclage de déchets de carton en combustibles",
                    desc: {
                        mini: "Diminuons notre utilisation de charbon et de gaz à effet de serre",
                        big: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nullam interdum diam a velit pulvinar iaculis. " +
                        "Proin vestibulum imperdiet enim in gravida. " +
                        "Suspendisse at porta metus, id auctor nunc. " +
                        "Aliquam pellentesque, ligula vel malesuada " +
                        "viverra, eros justo gravida erat, vitae consectetur sapien eros dapibus nulla. " +
                        "Etiam tincidunt pellentesque iaculis. " +
                        "Donec vestibulum egestas lectus a condimentum. " +
                        "Nullam in mi lectus. Aenean eu pulvinar leo. " +
                        "Nulla non ultrices nibh, vel consectetur ipsum. " +
                        "Vestibulum maximus semper nisi et maximus. " +
                        "Suspendisse non pretium nisi, eget condimentum libero. " +
                        "Donec id venenatis elit. In porttitor massa vitae tellus fringilla, ut rhoncus felis molestie. " +
                        "Ut eu purus ac odio ornare maximus."
                    },
                    medias: {
                        une: "./img/dummy/3/1.jpg",
                        others: ["./img/dummy/3/2.png", "./img/dummy/3/3.jpg"]
                    },
                    goal: 22000000,
                    change: "Fcfa",
                    participations: 15000000,
                    comments: [
                        {
                            id: 1,
                            userId: 1,
                            date: new Date(2015,11,17,21,30,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 2,
                            userId: 2,
                            date: new Date(2015,11,17,21,32,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 3,
                            userId: 1,
                            date: new Date(2015,11,17,21,36,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 4,
                            userId: 3,
                            date: new Date(2015,11,17,21,39,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 5,
                            userId: 4,
                            date: new Date(2015,11,17,21,40,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 6,
                            userId: 1,
                            date: new Date(2015,11,17,22,0,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        }
                    ],
                    contributors: [
                        {
                            userId: 2
                        },
                        {
                            userId: 3
                        },
                        {
                            userId: 4
                        },
                        {
                            userId: 5
                        },
                        {
                            userId: 6
                        }
                    ]
                },
                {
                    id: 4,
                    userId: 3,
                    title: "Recycler des plastiques souples",
                    desc: {
                        mini: "Permettra le déploiement et l’amélioration d’un procédé de transformation de ces films plastiques",
                        big: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nullam interdum diam a velit pulvinar iaculis. " +
                        "Proin vestibulum imperdiet enim in gravida. " +
                        "Suspendisse at porta metus, id auctor nunc. " +
                        "Aliquam pellentesque, ligula vel malesuada " +
                        "viverra, eros justo gravida erat, vitae consectetur sapien eros dapibus nulla. " +
                        "Etiam tincidunt pellentesque iaculis. " +
                        "Donec vestibulum egestas lectus a condimentum. " +
                        "Nullam in mi lectus. Aenean eu pulvinar leo. " +
                        "Nulla non ultrices nibh, vel consectetur ipsum. " +
                        "Vestibulum maximus semper nisi et maximus. " +
                        "Suspendisse non pretium nisi, eget condimentum libero. " +
                        "Donec id venenatis elit. In porttitor massa vitae tellus fringilla, ut rhoncus felis molestie. " +
                        "Ut eu purus ac odio ornare maximus."
                    },
                    medias: {
                        une: "./img/dummy/4/1.jpg",
                        others: ["./img/dummy/4/2.jpg", "./img/dummy/4/3.jpg"]
                    },
                    goal: 22000000,
                    change: "Fcfa",
                    participations: 15000000,
                    comments: [
                        {
                            id: 1,
                            userId: 1,
                            date: new Date(2015,11,17,21,30,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 2,
                            userId: 2,
                            date: new Date(2015,11,17,21,32,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 3,
                            userId: 1,
                            date: new Date(2015,11,17,21,36,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 4,
                            userId: 3,
                            date: new Date(2015,11,17,21,39,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 5,
                            userId: 4,
                            date: new Date(2015,11,17,21,40,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        },
                        {
                            id: 6,
                            userId: 1,
                            date: new Date(2015,11,17,22,0,0),
                            content: "Morbi et est quis enim placerat placerat nec auctor turpis. Sed sed dolor in arcu ultrices viverra. " +
                            "Curabitur mollis sapien at elit tristique, eget ornare velit efficitur."
                        }
                    ],
                    contributors: [
                        {
                            userId: 2
                        },
                        {
                            userId: 3
                        },
                        {
                            userId: 4
                        },
                        {
                            userId: 5
                        },
                        {
                            userId: 6
                        }
                    ]
                }
            ];
        }

        function getAllUsers(){
            return [
                {
                    userId: 1,
                    username: "Parvyn",
                    avatar: "./img/dummy/users/1.jpg",
                    facebook: ""
                },
                {
                    userId: 2,
                    username: "Anthony",
                    avatar: "./img/dummy/users/2.jpg",
                    facebook: ""
                },
                {
                    userId: 3,
                    username: "Saturne",
                    avatar: "./img/dummy/users/3.jpg",
                    facebook: ""
                },
                {
                    userId: 4,
                    username: "Bface007",
                    avatar: "./img/dummy/users/4.jpg",
                    facebook: "http://facebook.com/Bface.Style"
                }
            ];
        }
    }
})();