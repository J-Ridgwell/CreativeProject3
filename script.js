new Vue({
el: '#staggered-list',
data: {
	    query: '',
	    list: [
		          { msg: 'Ulysses, By: James Joyce' },
		          { msg: 'The Great Gatsby, By: F. Scott Fitzgerald' },
		          { msg: 'A Portrait of the Artist as a Young Man, By: James Joyce' },
		          { msg: 'Lolita, By: Vladimir Nabokov' },
		          { msg: 'Brave New World, By: Aldous Huxley' },
		          { msg: 'The Sound and The Fury, By: William Faulkner' },
		          { msg: 'Catch-22, By: Joseph Heller' },
		          { msg: 'Darkness at Noon, By: Arthur Koestler' },
		          { msg: 'Sons and Lovers, By: D.H. Lawrence' },
		          { msg: 'The Grapes of Wrath, By: John Steinbeck' }
		        ]
	  },
	  computed: {
		      computedList: function () {
			            var vm = this
			            return this.list.filter(function (item) {
					            return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
					          })
			          }
		    },
	  methods: {
		      beforeEnter: function (el) {
			            el.style.opacity = 0
			            el.style.height = 0
			          },
			      enter: function (el, done) {
				            var delay = el.dataset.index * 150
				            setTimeout(function () {
						            Velocity(
								              el,
								              { opacity: 1, height: '1.6em' },
								              { complete: done }
								            )
						          }, delay)
				          },
			      leave: function (el, done) {
				            var delay = el.dataset.index * 150
				            setTimeout(function () {
						            Velocity(
								              el,
								              { opacity: 0, height: 0 },
								              { complete: done }
								            )
						          }, delay)
				          }
		    }
})
