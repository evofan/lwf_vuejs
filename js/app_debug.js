// 変更するデータ
let items = [
  {
    name: " number of Confetti",
    num: 100
  }
];

// Vue コンストラクタ
let vm = new Vue({
  // dataプロパティ
  data: {
    items: items
  },

  // 算出プロパティ
  computed: {
    // 1以上か判別する
    canSet: function() {
      return this.items[0].num > 0;
    },

    // エラー時のスタイルを返す
    errorMessageStyle: function() {
      return {
        border: this.canSet ? "" : "1px solid #ff0033",
        color: this.canSet ? "" : "#ff0033"
      };
    }
  },

  // データ更新時の処理
  updated: function() {
    console.log("***** [app.debug] Data input and updated.");
    window.testlwf_settings.privateData.data.obj_num = items[0].num;
  }
});
vm.$mount("#app");
