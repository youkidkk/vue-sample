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
        ],
        newItem: {
            id: 4,
            text: ""
        }
    },
    methods: {
        addItem: function () {
            if (this.newItem.text == "") {
                return
            }
            this.items.push({
                id: this.newItem.id,
                text: this.newItem.text
            })
            this.newItem.id++
            this.newItem.text = ""
        }
    }
})