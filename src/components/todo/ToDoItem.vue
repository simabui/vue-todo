<template>
  <li class="todo__item">
    <span class="todo__text">{{ todo.text }}</span>
    <div class="todo__menu">
      <p class="todo__priority" :class="'todo__priority-' + todo.priority">{{ todo.priority }} Priority</p>
      <div class="icons-menu">
        <span class="edit" v-on:click="openModal">
          <i class="fas fa-edit"></i>
        </span>
        <input type="checkbox" id="checkmark" class="todo__checkmark" />
        <label class="label-container" for="checkmark" v-on:click="handleComplete">
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
  </li>
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
    handleComplete() {
      this.setCompleted({ id: this.todo.id });
    },
    handleRemove() {
      this.removeToDo({ id: this.todo.id });
    },
    openModal() {
      console.log(this.$root);
      this.$root.emit("openModal");
    },
  },
};
</script>
<style lang="scss">
.todo {
  &__item {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 900px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &__text {
    color: #8b8b8b;
    flex-basis: 55%;
    overflow: hidden;
    text-align: left;
  }
  &__priority {
    margin: 0;
    text-transform: capitalize;
    &:before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;
    }

    &-low {
      &:before {
        background-color: #5e72e4;
      }
    }
    &-medium {
      &:before {
        background-color: #ffbb33;
      }
    }
    &-high {
      &:before {
        background-color: #f5365c;
      }
    }
  }
  &__menu {
    display: flex;
    justify-content: space-between;
    flex-basis: 300px;
  }
  &__checkmark {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
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

    &:before {
      position: absolute;
      top: 0;
    }
  }
}

.trash {
  cursor: pointer;

  .fa-trash {
    transition: color 0.2s linear;
    color: rebeccapurple;

    &:hover {
      color: #ff0000;
    }
  }
}

.edit {
  font-size: 18px;
  margin-right: 10px;
  color: rebeccapurple;
  cursor: pointer;
}
</style>
