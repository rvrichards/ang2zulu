#Foxtrot

Higlighting AngularJS directive: ngClass

We are able to dynamically change css settings using **ngClass**

If an expression evaluates to true, then the class is applied. In the following if "upper2" is false and green is true, then only bootstrap class 'text-success': will be used.

Here are the two relavent lines:
> <input type="checkbox" ng-model="green"> Make green?
<div ng-class="{ 'text-uppercase': upper2,  'text-success': green }">
