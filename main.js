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
			cat1 = this.cateto1
			cat2 = this.cateto2

			if(cat1 >= cat2) {
				prop = cat1/cat2
				max =200/prop
				cat1 = prop*max
				cat2 = max
			}else{
				prop = cat2/cat1
				cat2 = prop*100
				cat1 = 100
			}

			var c = document.getElementById("triangle")
			this.canvas = c.getContext('2d')
			
			this.canvas.beginPath();
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(0, cat1)
			this.canvas.stroke()
			
			this.canvas.clearRect(0, 0, 250, 250);
			
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(cat2, cat1)
			this.canvas.stroke()
			
			this.canvas.moveTo(0, cat1)
			this.canvas.lineTo(cat2, cat1)
			this.canvas.stroke()
			
			
		}
	},
	mounted() {		

		this.triangle()
	}
})