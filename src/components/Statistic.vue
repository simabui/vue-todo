<template>
  <div class="statistic">
    <div class="statistic__counter statistic-total">
      <span>TOTAL: {{ todosCount || 0 }}</span>
    </div>
    <div class="statistic__counter statistic-completed">
      <span>COMPLETED: {{ completedCount || 0 }}</span>
    </div>
    <div class="statistic__counter statistic-pending">
      <span>PENDING: {{ totalPending || 0 }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Statistic",
  inheritAttrs: false,
  computed: {
    ...mapGetters(["todosCount", "completedCount", "totalPending"]),
  },
};
</script>
<style lang="scss">
.statistic {
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: 50px auto 0 auto;

  &__counter {
    padding: 5px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
  }
  &-total {
    background-color: #c7a8ee;
    color: #6c64ec;
  }
  &-completed {
    background-color: #c2e8ca;
    color: #62c8b6;
  }
  &-pending {
    background-color: #fee4de;
    color: #ff5b4d;
  }
}
</style>
