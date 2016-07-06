var news =  new Array();
var learning = new Array();
var value = Math.floor(Math.random()*5) + 7
var linevalue = Math.floor(Math.random()*5) + 7
for(var i=0;i<value;i++)
{
	learning[i]={id:i}
}

for(var i=0;i<linevalue;i++)
{
	news[i]={id:i}
}
var div=document.getElementById('calculator');
div.style.width=40*linevalue+'px';
function NewsController($http,$scope) {
		$http.get("json/question.json").success(function(data) {
            $scope.newsItems = data.freetrial;
		}).error(function(data) {  
		    $scope.newsItems = news
		});
    }
	

function LearningController($http,$scope) {
	    $http.get("json/learning.json").success(function(data) {
            $scope.learningItems = data.freetrial;
		}).error(function(data) {  
		    $scope.learningItems = learning
		});
        $scope.remove = function (index) {
            $scope.items.splice(index, 1);
        }
    }
function changeCtrl($scope)
{
	$scope.click = function (lieid,hangid) {
		tmpid = lieid + hangid
        $scope.finalid = tmpid.toString()
		$scope.color = "red"
    }
}
