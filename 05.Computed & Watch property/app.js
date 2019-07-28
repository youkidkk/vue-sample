var app = new Vue({
    el: "#app",
    data: {
        message: "Message",
        space: 1
    },
    // 算出プロパティ
    computed: {
        spaceMessage: function () {
            return this.message.split("").join("&nbsp;".repeat(this.space))
        }
    },
    // 監視プロパティ
    watch: {
        space: function (val) {
            if (this.space < 0) {
                this.space = 0
            }
        }
    }
})