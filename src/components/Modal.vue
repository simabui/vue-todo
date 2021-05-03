<template>
  <transition name="fade">
    <div class="overlay" v-if="modal.show" v-on:click="closeOnOverlay">
      <div class="modal">
        <div class="modal__close" v-on:click="closeModal">
          <i class="fas fa-times"></i>
        </div>
        <h2 class="modal__title">Task Detail</h2>
        <span class="line"></span>
        <div class="modal__body">
          <!-- TODO: finish form  -->
          <textarea>todoItem.text</textarea>
        </div>
        <div class="modal__footer">
          <div class="modal__controls">
            <Button class="modal__button modal__button-close" :onClick="closeModal">
              CLOSE
            </Button>
            <Button class="modal__button modal__button-edit">
              SAVE CHANGES
            </Button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Button from "./Button";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Button,
  },
  name: "Modal",
  computed: {
    ...mapState(["modal", "todoItem"]),
  },
  methods: {
    ...mapMutations(["closeModal"]),
    closeOnOverlay(e) {
      if (e.target === e.currentTarget) {
        this.closeModal();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1300;
}

.modal {
  position: relative;
  background-color: #fff;
  width: 550px;
  border-radius: 4px;
  padding-top: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &__title {
    font-size: 20px;
    text-align: left;
    margin: 0 0 10px 10px;
    color: #6e6e8d;
    font-weight: 500;
  }

  &__body {
    height: 150px;
  }

  &__footer {
    border-top: 1px solid #c0c0c0;
    padding: 30px 10px 10px 0;
    display: flex;
    justify-content: flex-end;
  }

  &__controls {
    flex-basis: 250px;
  }

  &__button {
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: #f4f5f7;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 16px 20px;
    font-weight: 700;
    font-size: 13px;
    color: #5c6063;

    &-edit {
      margin-left: 10px;
      background: #5e72e4;
      color: #fff;
    }

    &:active {
      transform: translateY(4px);
    }
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}

.line {
  width: 100%;
  display: block;
  border-bottom: 1px solid #c0c0c0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
