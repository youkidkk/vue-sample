message = {
    text: "Message test"
}

var reactiveVm = new Vue({
    el: "#reactive",
    data: {
        // 外部オブジェクトをVueインスタンスに紐付け
        message: message
    }
})

// 紐付いた要素を更新 -> 反映される
message.text = "Test"

var lifecycleVm = new Vue({
    el: "#lifecycle",
    data: {
        message: {
            text: ""
        },
        count: 0
    },

    // ライフサイクルメソッド
    beforeCreate: function () {
        console.log("Before create")
    },
    created: function () {
        console.log("Created")
    },
    beforeMount: function () {
        console.log("Before mount")
    },
    mounted: function () {
        console.log("Mounted")
    },
    beforeUpdate: function () {
        console.log("Before update")
    },
    updated: function () {
        console.log("Updated")
    },
    beforeDestroy: function () {
        console.log("Before destroy")
    },

    methods: {
        update: function () {
            this.count++
            this.message.text = "Update " + this.count
        }
    }
})