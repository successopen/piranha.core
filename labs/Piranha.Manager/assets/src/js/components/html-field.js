Vue.component("html-field", {
    props: ["uid", "model"],
    methods: {
        onBlur: function (e) {
            this.model.value = e.target.innerHTML;
        }
    },
    computed: {
        isEmpty: function () {
            return piranha.utils.isEmptyHtml(this.model.value);
        }
    },
    mounted: function () {
        console.log("html-field: mounted");
        piranha.editor.addInline(this.uid);
    },
    beforeDestroy: function () {
        console.log("html-field: beforeDestroy");
        piranha.editor.remove(this.uid);
    },
    template:
        "<div class='html-field' :class='{ empty: isEmpty }'>" +
        "  <div contenteditable='true' :id='uid' spellcheck='false' v-html='model.value' v-on:blur='onBlur'></div>" +
        "</div>"
});
