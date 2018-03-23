<template>
  <div>
      <header-search></header-search>
      <label-list></label-list>
      <hottest-recipes></hottest-recipes>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch";
import LabelList from "@/components/LabelList";
import HottestRecipes from "@/components/HottestRecipes";
export default {
  components: {
    HeaderSearch,
    LabelList,
    HottestRecipes
  }
};
</script>
