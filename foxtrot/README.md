#Foxtrot

Higlighting AngularJS directive: ngClass

We are able to dynamically change css settings using **ngClass**. These examples treat ngClass as an attribute not a class. We'll enlist ngModel to help with this.

Here are the two ways of dynamically getting bootstrap styling. First we have a variable we get using ng-model to get a bootstrap class from the user, like "center-text": <input type="text" ng-model="biteMe">

Then we use this variable as follows:
* <p ng-class="biteMe"> ======> ngModel as attribute </p>
* <p class="ng-class:biteMe;"> ======> ngModel as Class</p>

Finally, the last part also uses a function call to add a bootstrap class: 'text-danger' only if we set one class equal to "small".

If we enter a class in the **Doit** field we'll set: **ng-model="ouch"**, see below:

> <label>Doit (only accepts one class):</label><input type="text" class="form-control" ng-model="ouch">

Then we have the code:

> <div ng-class="{'text-danger': isSmall()}">Moi aussi, will be RED only if you enter "small"</div>

The **isSmall()** function is in the script file and looks like:

> $scope.isSmall = function () { return $scope.ouch  === "small"; };
