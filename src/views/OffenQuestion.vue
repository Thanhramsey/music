<template>
  <div id="OffenQuestion">
    <v-container>
		<v-expansion-panels accordion hover focusable>
		<v-expansion-panel
			v-for="(item,i) in items"
			:key="i"
		>
			<v-expansion-panel-header expand-icon="fa fa-question-circle-o" disable-icon-rotate><strong>{{item.question}}</strong></v-expansion-panel-header>
			<v-expansion-panel-content eager class="pa-3">
				<p>{{item.answern1}}</p>
				<p>{{item.answern2}}</p>
				<p>{{item.answern3}}</p>
			</v-expansion-panel-content>
		</v-expansion-panel>
		</v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OffenQuestion",
  data: () => ({
	  items:[
		  {
			  question:"Tôi là người ở xa, làm sao để tôi có thể đặt hàng?",
			  answern1: "Bạn có thể đặt hàng trực tiếp trên website. Xem hướng dẫn cách đặt hàng trực tuyến.",
					answern2:	"Trong quá trình đặt hàng, bạn sẽ được thông báo phí vận chuyển và thời gian dự kiến giao hàng tùy vào địa chỉ cụ thể của bạn.",
						answern3:"Nếu bạn không thể tự đặt hàng trực tuyến vì bất cứ lý do gì, xin đừng ngần ngại liên hệ ngay với Guitar Station, chúng tôi rất hân hạnh được phục vụ bạn."
		  },
		  {
			  question:"Tôi đã đặt hàng xong. Tôi phải làm gì tiếp theo?",
			  answern1: "Ngay sau khi đặt hàng thành công, Guitar Station sẽ liên hệ để xác nhận đơn hàng của bạn trong vòng 24 giờ. (Đối với đơn hàng phụ kiện, Guitar Station sẽ không gọi xác nhận để có thể xử lý đơn hàng nhanh hơn)",
			  answern2:	"Sau khi quá trình xác minh thành công, đơn hàng của bạn sẽ được đóng gói và giao đến đơn vị vận chuyển. Thời gian bạn nhận được sản phẩm tối đa là từ 2-6 ngày đối với tất cả các loại sản phẩm và tất cả các tỉnh thành trên cả nước.",
			  answern3:""
		  },
		  {
			  question:"Làm thế nào để tôi có thể đăng kí khóa học?",
			  answern1: "Liên hệ ngay đến Số điện thoại: 097 919 03 03, để lại thông tin tại cuối trang, hoặc inbox fanpage",
				answern2:		"Chúng tôi sẽ liên hệ lại ngay cho bạn",
				answern3:""
		  },
		  {
			  question:"Tôi đã đặt hàng nhưng đổi ý không muốn mua món hàng đó nữa, làm sao để tôi hủy đơn hàng?",
			  answern1: "Để hủy đơn hàng, bạn có thể vào phần Tài Khoản -> Đơn mua để hủy đơn hàng, hoặc bạn có thể gọi trực tiếp số hotline 097 919 03 03 để được hủy đơn hàng.",
			  answern2:"",
			  answern3:""
		  },
		  {
			  question:"Tôi có được kiểm tra hàng trước khi thanh toán không?",
			  answern1: "Quý hoàn toàn có quyền yêu cầu kiểm tra sản phẩm. Chỉ sau khi xác nhận đã nhận đủ sản phẩm, phụ kiện, và sản phẩm không hư hỏng, gãy vỡ, va đập thì bạn mới phải thanh toán đơn hàng.",
			  answern2:"Nếu sản phẩm không đúng mô tả, thiếu phụ kiện đi kèm, hư hỏng, gãy vỡ,... vui lòng liên hệ đến hotline 093 471 0592 để phản hồi với Guitar Station.",
			  answern3:""
		  },
	  ]
  }),
  computed: {},
  created: function () {},

  components: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.theme--dark .v-expansion-panel-content p {
	color:#cbaa5c ;
}
.theme--light .v-expansion-panel-content p {
	color:#300505 ;
}
</style>
