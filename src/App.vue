<template>
  <div id="app">
    <div>Chart_test</div>
    <canvas
      width="800"
      height="400"
      style="
        display: block;
        box-sizing: border-box;
        height: 400px;
        width: 800px;
      "
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "App",
   methods: {
    getData() {
      this.$axios
        .get("/getData")
        .then((res) => {
          console.log(res.staus);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },

  },
  beforeMount(){
    this.getData();
  }
};
</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
