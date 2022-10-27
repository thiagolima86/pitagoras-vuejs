new Vue({
	el: '#app',
	data: {
		cateto1: 10,
		cateto2: 10,
		canvas: null
	},
	methods: {
		hipotenusa(){
			hipotenusa = Math.sqrt((this.cateto1**2) + (this.cateto2**2))
			this.triangle()
			return hipotenusa
		},
		triangle(){
			var c = document.getElementById("triangle")
			this.canvas = c.getContext('2d')
			
			this.canvas.beginPath();
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(0, this.cateto1)
			this.canvas.stroke()
			
			this.canvas.clearRect(0, 0, 250, 200);
			
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(this.cateto2, this.cateto1)
			this.canvas.stroke()
			
			this.canvas.moveTo(0, this.cateto1)
			this.canvas.lineTo(this.cateto2, this.cateto1)
			this.canvas.stroke()
			
			
		}
	},
	mounted() {		

		this.triangle()
	}
})