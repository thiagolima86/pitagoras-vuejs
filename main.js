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
			caty = this.proporcion("caty")
			catx = this.proporcion("catx")			

			var c = document.getElementById("triangle")
			this.canvas = c.getContext('2d')
			
			this.canvas.beginPath();
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(0, caty)
			this.canvas.stroke()
			
			this.canvas.clearRect(0, 0, 900, 900);
			
			this.canvas.moveTo(0, 0)
			this.canvas.lineTo(catx, caty)
			this.canvas.stroke()
			
			this.canvas.moveTo(0, caty)
			this.canvas.lineTo(catx, caty)
			this.canvas.stroke()
			
			
		},
		proporcion(cat){
			cat = this.calc_proporcion([this.cateto1, this.cateto2])
			caty = cat[0]
			catx = cat[1]		

			if(cat == "caty") {
				return caty
			}

			return catx

		},
		calc_proporcion(cat){
			caty = cat[0]
			catx = cat[1]

			if(caty >= catx) {
				prop = caty/catx
				max = 200/prop
				caty = prop*max
				catx = max
				return [caty, catx]
			}
			prop = catx/caty
			max = 200/prop
			catx = prop*max
			caty = max
			return [caty, catx]
		}
	},
	mounted() {		

		this.triangle()
	}
})