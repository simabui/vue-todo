<template>
  <div class="overlay" v-on:click="closeOnOverlay">
    <div class="modal">
      <div class="modal__close" v-on:click="closeModal">
        <i class="fas fa-times"></i>
      </div>
      <h2 class="modal__title">Task Detail</h2>
      <span class="line"></span>
      <form v-on:submit.prevent="onSubmit">
        <div class="modal__body">
          <div class="modal__input-block">
            <Input name="textEdit" id="textEdit" v-model="newText" type="input" class="input" />
            <v-select :options="options" v-model="selected" class="modal__select"></v-select>
          </div>
          <div class="modal__input-pending">
            <input name="pending" id="pending" type="checkbox" class="checkbox" v-model="checked" />
            <label for="pending"> set pending</label>
          </div>
          <span v-if="errors.length" class="form__error">Input is empty</span>
        </div>
        <div class="modal__footer">
          <div class="modal__controls">
            <Button class="modal__button modal__button-close" :onClick="closeModal">
              CLOSE
            </Button>
            <Button class="modal__button modal__button-edit" type="submit">
              SAVE CHANGES
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "./Button";
import Input from "./Input";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Button,
    Input,
  },
  name: "Modal",
  data: function() {
    return {
      options: ["low", "medium", "high"],
      errors: [],
      selected: "",
      checked: false,
      newText: null,
    };
  },
  computed: {
    ...mapState(["modal", "todoItem"]),
  },
  methods: {
    ...mapMutations(["closeModal", "updateToDo"]),
    closeOnOverlay(e) {
      if (e.target === e.currentTarget) {
        this.closeModal();
      }
    },
    onSubmit() {
      const isValid = this.checkForm();
      if (isValid) {
        const payload = {
          id: this.todoItem.id,
          text: this.newText,
          pending: this.checked,
          priority: this.selected,
        };

        this.updateToDo(payload);
        this.closeModal();
        this.resetForm();
      }
    },
    checkForm: function() {
      this.errors = [];

      if (!this.newText || !this.selected) {
        this.errors.push("error");
        return false;
      }

      return true;
    },
    resetForm: function() {
      this.selected = "";
      this.checked = false;
      this.newText = null;
    },
  },
  created() {
    const { text, priority, pending } = this.todoItem;
    this.newText = text;
    this.selected = priority;
    this.checked = pending;
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
    padding: 10px;
  }

  &__footer {
    border-top: 1px solid #c0c0c0;
    padding: 30px 10px 10px 0;
    display: flex;
    justify-content: flex-end;
  }
  &__input {
    &-block {
      display: flex;
      justify-content: space-around;
    }
    &-pending {
      margin-top: 10px;
      margin-left: 10px;
      max-width: 110px;
      display: flex;
      align-items: center;
      label {
        margin-left: 5px;
      }
    }
  }
  &__controls {
    flex-basis: 250px;
  }
  &__select {
    width: 170px;
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

.input {
  border: 1px solid #5c6063;
  border-radius: 5px;
  padding: 5px;
  width: 50%;
}
.line {
  width: 100%;
  display: block;
  border-bottom: 1px solid #c0c0c0;
}
</style>
