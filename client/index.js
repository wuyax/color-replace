// Create an instance of CSInterface. 

/* var csInterface = new CSInterface();
var openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDoc);
 */
// Write a helper function to pass instructions to the ExtendScript side. 
/* function openDoc() {
  csInterface.evalScript("openDocument()");
} */

let vm = new Vue({
  el: '#app',
  data() {
    return {
      list: ['#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566','#eeddaa','#132455','#445566'],
      activeColor: ''
    }
  },
  name: 'ColorReplace',
  components: {},
  model: {},
  props: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    selectColor(color) {
      console.log(color)
      this.activeColor = color
    }
  }
})
