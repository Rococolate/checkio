/**
 *
 * Human("小明").sleep(2).eat("早餐").sleep(3).eat("午餐").sleep(4).eat("晚餐").sleepFirst(1);
 * 输出：
 *
 * 开始等待1秒...  //输出口等待1秒
 * 你好，小明!
 * 休息2秒...     //输出口等待2秒
 * 小明吃了早餐
 * 休息3秒...     //输出口等待3秒
 * 小明吃了午餐
 * 休息4秒...     //输出口等待4秒
 * 小明吃了晚餐
 * 说明：
 * Human("aa") 输出：你好,aa!
 * sleepFirst(n);在所有方法执行之前等待n秒
 * sleep(n);在等待n秒之后，执行后面的方法
 * eat("xx");输出  aa吃了xx
 * 
 */

// umd 
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Human = factory();
    }
}(this, function() {

    //    methods
    //    
    'use strict';
    function Human(name) {
      var _name = String(name); 
      return new _Human(_name);
    }

    function _Human(name){
      this.name = name; 
      this.eventList = [];
      this.sayHello();
      var that = this;
      setTimeout(function(){
        that.begin();
      },0);
      return this;
    }

    _Human.prototype.begin = function() {
      if ( this.eventList.length > 0 && typeof this.eventList[0] === 'function' ) {
        this.eventList[0]();
      }
    };

    _Human.prototype.next = function() {
      if ( this.eventList.length > 0 ) {
        this.eventList.shift();
        if ( typeof this.eventList[0] === 'function' ) {
          this.eventList[0]();
        }
      }
    };

    _Human.prototype.sayHello = function() {
      var that = this;
      this.eventList.push(function(){
        that.log('你好,'+that.name+'!');
        that.next();
      });
      return this;
    };

    _Human.prototype.eat = function(str) {
      var _str = String(str);
      var that = this;
      this.eventList.push(function(){
        that.log(that.name+'吃了'+_str);
        that.next();
      });
      return this;
    };

    _Human.prototype.sleep = function(number) {
      var _number = Number(number);
      var that = this;
      this.eventList.push(function(){
        var now = Date.now();
        setTimeout(function(){
          var time = Date.now() - now;
          console.log(time);
          that.log(~~(time / 1000));
          that.next();
        },_number * 1000);
      });
      return this;
    };

    _Human.prototype.sleepFirst = function(number) {
      var _number = Number(number);
      var that = this;
      this.eventList.unshift(function(){
        var now = Date.now();
        setTimeout(function(){
          var time = Date.now() - now;
          console.log(time);
          that.log(~~(time / 1000));
          that.next();
        },_number * 1000);
      });
      return this;
    };

    _Human.prototype.log = function(str) {
      var _str = String(str);
      var body = document.querySelector('body');

      if ( body ) {
        var dom = document.createElement('p');
        dom.innerText = _str;
        body.appendChild(dom);
      }
      console.log(_str);
    };

    //    exposed public methods
    return Human;

}));

Human('小明').sleep(2).eat("早餐").sleep(3).eat("午餐").sleep(4).eat("晚餐").sleepFirst(1);




