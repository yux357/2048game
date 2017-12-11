define(
	[
		'react'
		,'jquery'
		,'lib_mod'
		,'hammer_mod'
	]
	,function(React,$,lib,Hammer)
	{
		var game;
		
		game = {
			init : function(){
				var arrVal = game.calculate(4,4);

		     	var GameGrid = React.createClass({displayName: "GameGrid",
		     		/*共享同一个配置，并且不能被override（覆盖）*/
		     		// mixins : [ExampleMixin],
		     		handleKeyboard : function(event){
						var e = event || window.event || arguments.callee.caller.arguments[0];

						function addNew(array)
						{
							var randomPos = lib.randomBlank(array);

							if(!_.isEmpty(randomPos)){

								array[randomPos.y][randomPos.x] = 2;
							}
							
							return array;
						}

						var newArray = this.state.val;

						if(e && e.keyCode===39){
				            
				            newArray = lib.horizontalMerge(this.state.val);

				            newArray = addNew(newArray);

				            this.setState({
			                    val: newArray
			                });
				        }
				        else if(e && e.keyCode===37){
				            
				            newArray = lib.horizontalMerge(this.state.val,true);

				             newArray = addNew(newArray);

				             this.setState({
			                    val: newArray
			                });
				        }
				        else if(e && e.keyCode===38){
				            
				            newArray = lib.verticalMerge(this.state.val,true);

				             newArray = addNew(newArray);

				             this.setState({
			                    val: newArray
			                });
				        }
				        else if(e && e.keyCode===40){
				            
				            newArray = lib.verticalMerge(this.state.val);

				             newArray = addNew(newArray);

				             this.setState({
			                    val: newArray
			                });
				        }

				        if(!this.state.isWin)
				        {
				        	if(lib.isWin(newArray))
					        {
					        	alert("你赢了！");
					        	this.setState({
				                    isWin: true
				                });
					        }
				        }

				        if(!this.state.isLost)
				        {
				        	if(lib.isLost(newArray))
					        {
					        	alert("你失败了！");
					        	this.setState({
				                    isLost: true
				                });
					        }
				        }

		     		},

		     		handleTouch : function(){

						function addNew(array)
						{
							var randomPos = lib.randomBlank(array);

							if(!_.isEmpty(randomPos)){

								array[randomPos.y][randomPos.x] = 2;
							}
							
							return array;
						}

						var self = this;

						var newArray = self.state.val;

						var mc = new Hammer($("body")[0]);

		     			mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

		     			mc.on('swipeup', function(e) {
						    
						    newArray = lib.verticalMerge(self.state.val,true);

				             newArray = addNew(newArray);

				             self.setState({
			                    val: newArray
			                });
						});

						mc.on('swipedown', function(e) {
						    
						    newArray = lib.verticalMerge(self.state.val);

				             newArray = addNew(newArray);

				             self.setState({
			                    val: newArray
			                });
						});

						mc.on('swipeleft', function(e) {
						    
						     newArray = lib.horizontalMerge(self.state.val,true);

				             newArray = addNew(newArray);

				             self.setState({
			                    val: newArray
			                });
						});

						mc.on('swiperight', function(e) {
						    
						    newArray = lib.horizontalMerge(self.state.val);

				            newArray = addNew(newArray);

				            self.setState({
			                    val: newArray
			                });
						});

				        if(!self.state.isWin)
				        {
				        	if(lib.isWin(newArray))
					        {
					        	alert("你赢了！");
					        	self.setState({
				                    isWin: true
				                });
					        }
				        }

				        if(!self.state.isLost)
				        {
				        	if(lib.isLost(newArray))
					        {
					        	alert("你失败了！");
					        	self.setState({
				                    isLost: true
				                });
					        }
				        }

		     		}
		     		/*给组件定义一个默认的状态*/
		     		,getInitialState : function(){
		     			return {
		     				isWin : false
		     				,isLost : false
		     				,val : arrVal
		     			};
		     		}
		     		/*给予组件一个默认的"配置"*/
		     		,getDefaultProps : function(){
		     			return{
		     				val :[]
		     			}
		     		}
		     		/*可以随意为每一个属性指定类型。这对于我们检查和处理属性的意外赋值非常有用*/
		     		,propTypes : function(){
		     			val : React.PropTypes.array
		     		}
		     		// /*当组件要被挂载时这个函数被调用*/
		     		,componentWillMount : function(){

		     			var r = this;

		     			$(window).keydown(function(event){

							r.handleKeyboard(event)  

						});

		     			r.handleTouch();
		     		}
		     		,render : function(){

		     			var items = this.state.val.map(function(rows){

		     				var row = rows.map(function(item)
		     				{
		     					var x = item === 0 ?
		     					React.createElement("div", {className: "col-xs-3 zero"}, item) : 
		     					React.createElement("div", {className: "col-xs-3"}, item)

		     					return x;
		     				})

		     				return (
			     				React.createElement("div", {className: "row"}, 
								  row
								)
			     			)
		     			});

		     			return (
		     				React.createElement("div", {className: "container-fluid"}, items)
		     			);
		     		}
		    	})
				React.render(
		        	React.createElement(GameGrid, null)
		        	,document.getElementById('game')
		      	);
			}
			,calculate : function(rows,cols){

				var array = new Array();  

				for(var k=0;k<rows;k++){   
				 
					array[k] = new Array();  
				 
					for(var j=0;j<cols;j++){ 
				 
						array[k][j] = 0;  
					}
				}

				var randomPos = lib.randomBlank(array);

				array[randomPos.y][randomPos.x] = 2;

				return array;
			}
		}
		
		return game;
	}
)