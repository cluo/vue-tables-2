module.exports =  function(data) {
  this.data = data.data;
  this.count = parseInt(data.count);

  setTimeout(function(){
    this.dispatch('loaded',data);
  }.bind(this),0);

}
