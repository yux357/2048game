define(
	[
		'jquery'
		,'underscore'
	]
	,function($,_)
	{
		var lib;
		
		lib = {
			/*是否为二维数组*/
			isTwoDArray : function(array)
			{
				if($.isArray(array) && $.isArray(array[0]))
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			/*二维数组横向合并
			  array : 二维数组
			  reverse : 逆向运算（右->左）默认false;
			*/
			,horizontalMerge : function(array,reverse){
				/*不是二维数组直接退出*/
				if(!lib.isTwoDArray(array))
				{
					return false;
				}
				/*默认不逆向运算*/
				if(typeof reverse === "undefined" || typeof reverse !== "boolean")
				{
					reverse = false;
				}

				var clearNumber = function(y)
				{
					if(!reverse)
					{
						var oldLength = array[y].length;

						array[y] = _.without(array[y], 0);

						var nowLength = array[y].length;

						var zeroArr = [];

						for(var z=0;z<oldLength-nowLength;z++){

							array[y].unshift(0);
						}
					}
					else{

						var oldLength = array[y].length;

						array[y] = _.without(array[y], 0);

						var nowLength = array[y].length;

						var zeroArr = [];

						for(var z=0;z<oldLength-nowLength;z++){

							array[y].push(0);
						} 	
					}
				}

				if(!reverse)
				{

					for(var i=0;i<array.length;i++){

						clearNumber(i);

						for(var j=array[i].length-1;j>0;j--){

							if(array[i][j] === array[i][j-1] || array[i][j] === 0 || array[i][j-1] === 0)
							{
								array[i][j] += array[i][j-1];

								array[i][j-1] = 0;

								clearNumber(i);
							}
						}
					}
				}
				else
				{
					for(var i=0;i<array.length;i++){

						clearNumber(i);

						for(var j=0;j<array[i].length-1;j++){

							if(array[i][j] === array[i][j+1] || array[i][j] === 0 || array[i][j+1] === 0)
							{
								array[i][j] += array[i][j+1];

								array[i][j+1] = 0;

								clearNumber(i);
							}
						}
					}
				}

				return array;
			}
			/*二维数组纵向合并
			  array : 二维数组
			  reverse : 逆向运算（下->上）默认false;
			*/
			,verticalMerge : function(array,reverse){

				if(!lib.isTwoDArray(array))
				{
					return false;
				}
				
				if(typeof reverse === "undefined" || typeof reverse !== "boolean")
				{
					reverse = false;
				}

				var verticalArr = new Array;

		     	verticalArr = _.unzip(array);

		     	var verticalArr = lib.horizontalMerge(verticalArr,reverse);

		     	array =  _.unzip(verticalArr);

		     	return array;
			}
			/*获取值为零的元素坐标[(x1,y1),(x2,y2),……]*/
			,getBlank : function(array){

				var blank = [];
				
				for(var i=0;i<array.length;i++){

					for(var j=0;j<array[i].length;j++){

						if(array[i][j] === 0)
						{
							blank.push({
								"x" : j
								,"y" : i
							})
						}
					}
				}

				return blank;
			}
			/*在坐标库里面取随机坐标*/
			,randomBlank : function(array){

				var blank = lib.getBlank(array);

				var range = blank.length - 1;

				var pos = parseInt(Math.random() * range);

				return blank[pos];
			}
			/*判断获胜*/
			,isWin : function(array){

				var oneDArray = _.flatten(array) 

				if(_.indexOf(oneDArray,2048) > 0)
				{
					return true;
				}
				else{
					return false;
				}
			}
			/*判断失败*/
			,isLost : function(array){

				var oneDArray = _.flatten(array) 

				if(_.indexOf(oneDArray,0) < 0)
				{
					var verticalArr = new Array;

			     	verticalArr = _.unzip(array);

					var lostFlag = true;

					for(var i=0;i<array.length;i++){

						for(var j=0;j<array[i].length-1;j++){

							if(array[i][j] === array[i][j+1])
							{
								lostFlag = false;

								break;
							}
						}
					}

					for(var i=0;i<verticalArr.length;i++){

						for(var j=0;j<verticalArr[i].length-1;j++){

							if(verticalArr[i][j] === verticalArr[i][j+1])
							{
								lostFlag = false;

								break;
							}
						}
					}
					
					if(lostFlag)
					{
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}
		}
		
		return lib;
	}
)