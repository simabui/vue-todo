<template>
  <div class="todo__item">
    <span>{{ item }}</span>
    <div class="icons-menu">
      <!-- FIXME: fix checkmark for many todos -->
      <!-- TODO: add onDelete  -->
      <input type="checkbox" id="checkmark" class="todo__checkmark" />
      <label class="label-container" for="checkmark">
        <span class="checkmark">
          <span class="checkmark__icon">
            <i class="fas fa-check"></i>
          </span>
        </span>
      </label>
      <span class="trash">
        <i class="fas fa-trash"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDoItem",
  inheritAttrs: false,
  props: {
    item: {
      type: String,
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
    }
  }

  .fa-check {
    color: rebeccapurple;
  }
}
input:checked ~ .label-container {
  .checkmark {
    &__icon {
      display: block;
    }
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
