<template>
  <div class="todo__item">
    <span>{{ todo.text }}</span>
    <div class="icons-menu">
      <input type="checkbox" id="checkmark" class="todo__checkmark" />
      <label class="label-container" for="checkmark" v-on:click="handleClick">
        <span class="checkmark">
          <span class="checkmark__icon" :class="todo.completed && 'checkmark__icon-completed'">
            <i class="fas fa-check"></i>
          </span>
        </span>
      </label>
      <span class="trash" v-on:click="handleRemove">
        <i class="fas fa-trash"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "ToDoItem",
  inheritAttrs: false,
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["setCompleted", "removeToDo"]),
    handleClick() {
      this.setCompleted({ id: this.todo.id });
    },
    handleRemove() {
      this.removeToDo({ id: this.todo.id });
    },
  },
};
</script>
<style lang="scss">
.todo__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 900px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.todo__checkmark {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.icons-menu {
  display: flex;
}

.label-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 3px solid rebeccapurple;
    display: flex;

    &__icon {
      display: none;

      &-completed {
        display: inline-block;
      }
    }
  }

  .fa-check {
    color: rebeccapurple;
  }
}

.trash {
  cursor: pointer;

  .fa-trash {
    transition: color 0.2s linear;

    &:hover {
      color: #ff0000;
    }
  }
}
</style>
