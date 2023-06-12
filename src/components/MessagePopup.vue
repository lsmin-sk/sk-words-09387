<template>
    <!-- Button trigger modal -->
    <button v-show="false" type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="component.target"
        :ref="component.id">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="component.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ message }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const COMPONENT = "MessagePopup-" + Math.floor(Math.random() * 1000);
export default {
    data() {
        return {
            component: {
                id: COMPONENT,
                target: "#" + COMPONENT,
            },
            title: null,
            message: null,
        };
    },
    methods: {
        show(title, message) {
            this.title = title;
            this.message = message;
            this.$refs[this.component.id].click();
        },
    },
};
</script>
