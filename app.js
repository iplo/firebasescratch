var db = {};
var appconfig;
function config(obj){
  appconfig = obj;
  var func = function(){
    var app = {};
    app.data = function(){
      return globaldata;
    };
    
    return app;
  }
  return func;
}
