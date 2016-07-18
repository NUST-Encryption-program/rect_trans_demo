var news =  new Array();
var learning = new Array();
var value = Math.floor(Math.random()*5) + 7
var linevalue = Math.floor(Math.random()*5) + 7
var sum = value*linevalue
var oldkey = -1
var colorArray = new Array()
colorArray[0]="green"
colorArray[1]="yellow"
colorArray[2]="red"
function Map() {
    /** 存放键的数组(遍历用到) */
    this.keys = new Array();
    /** 存放数据 */
    this.data = new Object();
    
    /**
     * 放入一个键值对
     * @param {String} key
     * @param {Object} value
     */
    this.put = function(key, value) {
        if(this.data[key] == null){
            this.keys.push(key);
        }
        this.data[key] = value;
    };
    
    /**
     * 获取某键对应的值
     * @param {String} key
     * @return {Object} value
     */
    this.get = function(key) {
        return this.data[key];
    };
    
    /**
     * 删除一个键值对
     * @param {String} key
     */
    this.remove = function(key) {
        this.keys.remove(key);
        this.data[key] = null;
    };
	
	this.sumvalue = function(){
		var len = this.keys.length;
		var tmpticks = 0;
        for(var i=0;i<len;i++){
			var k = this.keys[i];
            var v = this.data[k];
            tmpticks = tmpticks + v;
        }
		return tmpticks
	};
	
    /**
     * 遍历Map,执行处理函数
     * 
     * @param {Function} 回调函数 function(key,value,index){..}
     */
    this.each = function(fn){
        if(typeof fn != 'function'){
            return;
        }
        var len = this.keys.length;
        for(var i=0;i<len;i++){
            var k = this.keys[i];
            fn(k,this.data[k],i);
        }
    };
    
    /**
     * 获取键值数组(类似Java的entrySet())
     * @return 键值对象{key,value}的数组
     */
    this.entrys = function() {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key : this.keys[i],
                value : this.data[i]
            };
        }
        return entrys;
    };
    
    /**
     * 判断Map是否为空
     */
    this.isEmpty = function() {
        return this.keys.length == 0;
    };
    
    /**
     * 获取键值对数量
     */
    this.size = function(){
        return this.keys.length;
    };
    
    /**
     * 重写toString 
     */
    this.toString = function(){
        var s = "{";
        for(var i=0;i<this.keys.length;i++,s+=','){
            var k = this.keys[i];
            s += k+"="+this.data[k];
        }
        s+="}";
        return s;
    };
}

var map = new Map(); 
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
		tmpid = lieid*100 + hangid
		if (oldkey == tmpid)
		{
			alert("请不要重复点击同一区域");
			return -1;
		}
		if(sum == map.size())
		{
			alert("满足某条件，点击次数是:" + map.sumvalue());
			return 0;
		}
        //$scope.finalid = tmpid.toString()
		if(map.get(tmpid) == null)
		{
			map.put(tmpid,1)
		}
		else{
			tmpnum = map.get(tmpid)
			tmpnum = tmpnum + 1
			map.put(tmpid,tmpnum)
		}
		$scope.color = colorArray[(map.get(tmpid)-1)%3]
		oldkey = tmpid
    }
}
