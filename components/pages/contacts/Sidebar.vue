<template>
  <div class="px-2 py-3">
    <Button @click="hideSidebarHandler" class="w-100 text-left mb-2" variant="flat">
      Hide Filters
    </Button>

    <Button @click="hideSidebarHandler" class="w-100 text-left mb-2" variant="flat">
      Clear All
    </Button>

    <CategoryFilter />
  </div>
</template>

<script>
import CategoryFilter from "@/components/Filters/CategoryFilter";
import Button from "@/components/shared/Button.vue";

export default {
  components: {
    CategoryFilter,
    Button
  },
  props: {
    hideSidebarHandler: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
