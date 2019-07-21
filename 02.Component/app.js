Vue.component("sample-component", {
    props: ["id", "text"],
    template: "<li>{{id}} : {{text}}</li>"
})

var app = new Vue({
    el: "#app",
    data: {
        items: [{
                id: 1,
                text: "Item 1"
            },
            {
                id: 2,
                text: "Item 2"
            },
            {
                id: 3,
                text: "Item 3"
            }
        ]
    }
})