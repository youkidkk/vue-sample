var app = new Vue({
    // elプロパティ
    // id:app を Vue の管轄とする
    el: "#app",
    // dataプロパティ
    data: {
        title: "01.Directive",
        align: "center",
        seen: false,
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
    // methodsプロパティ
    methods: {
        switchSeen: function () {
            this.seen = !this.seen
        },
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