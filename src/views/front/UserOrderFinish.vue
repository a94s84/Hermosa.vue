<template>
  <div class="contentWrap">
    <div class="wrap cartWrap d-center">
      <ul class="cart-menu">
        <li>購物清單</li>
        <li>填寫資料</li>
        <li>確認訂單</li>
        <li class="active">完成購物</li>
      </ul>
      <div class="orderfinishWrap">
        <h2>完成購物</h2>
        <h3>
          感謝您的購買！我們正在處理您的訂單，如有任何問題，請聯絡客服信箱，謝謝。
        </h3>
        <div class="orderList" ref="orderdetail">
          <div class="orderdetail-box">
            <div>
              <span>訂單編號</span>
              <p>{{ order.id }}</p>
            </div>
            <div><span>訂單日期</span>{{ $filters.date(order.create_at) }}</div>
            <div>
              <span>姓名</span>
              <p>{{ order.user.name }}</p>
            </div>
            <div>
              <span>信箱</span>
              <p>{{ order.user.email }}</p>
            </div>
            <div>
              <span>電話</span>
              <p>{{ order.user.tel }}</p>
            </div>
            <div>
              <span>地址</span>
              <p>{{ order.user.address }}</p>
            </div>
            <div>
              <span>備註</span>
              <p>{{ order.message }}</p>
            </div>
          </div>
          <div class="orderlist-box">
            <span>購買商品</span>
            <div class="shopItem" v-for="item in order.products" :key="item.id">
              <div class="shopItem-img">
                <img :src="`${item.product.imageUrl}`" :alt="item.product.title" />
              </div>
              <div class="shopItem-name">
                <p>{{ item.product.title }}</p>
              </div>
              <div class="shopItem_qty">
                <p>數量</p>
                <p>{{ item.qty }}</p>
              </div>
              <div class="shopItem_total">
                <p>小計</p>
                <p>{{ $filters.currency(item.final_total) }}</p>
              </div>
            </div>
            <div>
              <p class="text-end fw-bold px-lg-5 py-3">
                總計： NT$ {{ $filters.currency(order.total) }}
              </p>
            </div>
          </div>
        </div>
        <div class="pddcnt-btn-buypay">
          <router-link
            :to="{ name: 'productlist', query: { category: 'ALL' } }"
            class="btn-second btn-add"
            >繼續購物
          </router-link>
          <a href="#" class="btn-black btn-topay" @click.prevent="seeOrder"
            >查看訂單</a
          >
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {},
        products: []
      },
      isLoading: false
    }
  },
  components: {
    Footer
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.order = res.data.order
          emitter.emit('updateCart')
        } else {
          this.isLoading = false
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面')
        }
      })
    },
    seeOrder () {
      this.$refs.orderdetail.classList.add('active')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
