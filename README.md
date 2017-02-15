# my-first-jquery-plugin
My first JQuery plugin

# What it does?
+ Navigation bar for mobile first design
+ Play a bit with color and animation for your navigation

# How to install

+ Go to: https://www.npmjs.com/package/my-first-jquery-plugin
+ Install node to your local machine
+ Install from npm package

# How to use it?
+ Download JQuery
+ Download this Jquery plugin
+ Basic command :
    + This is the main function of plugin
    $('your nav element').pluginMenu();
    + You can change the color of DOM element
    $("your element").pluginColor({
     color: "your-color"
    });
    + Animation for your navigation
    $("your element").hover(function () {
    $(this).pluginAnimation({marginLeft:"30px",marginTop:0});
     }, function () {
    $(this).pluginAnimation({marginLeft:"10px",marginTop:0});
     });//could be your animation options

# Some demos
<img src="https://s27.postimg.org/qqgujt8wj/image.png" />
<img src="https://s16.postimg.org/4780b2apx/image.png" />


