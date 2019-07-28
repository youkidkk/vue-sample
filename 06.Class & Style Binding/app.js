var app = new Vue({
    el: "#app",
    data: {
        style: {
            red: true,
            bold: true
        }
    },
    methods: {
        toggleRed: function () {
            this.style.red = !this.style.red
        },
        toggleBold: function () {
            this.style.bold = !this.style.bold
        }
    }
})