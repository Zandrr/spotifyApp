var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.directive('popin',function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      element.addClass(attrs.popin);
    })
  }
})

app.directive('popout',function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
      element.removeClass(attrs.popout);
    })
  }
})