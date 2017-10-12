// define a mixin object
const routeMixin = {
  methods: {
    changeRoute: function(url, e){
    	console.log('router-mixin --- ' + url)
    	url = 	e.currentTarget.getAttribute('href');
    	url = url.indexOf('.com') !== -1 ? (url.split('.com')[1]) : url;
    	
		if(this.$router && url) e.preventDefault();  this.$router.push(url);
    }
  }
}

export default routeMixin;