define(
	[
		'react'
		,'jquery'
	]
	,function(React,$)
	{
		var jumbotron;
		
		jumbotron = {
			init : function(){
		     	var jumbotron = React.createClass({displayName: "jumbotron",
		     		/*共享同一个配置，并且不能被override（覆盖）*/
		     		// mixins : [ExampleMixin],
		     		handleFocus : function(event){
						
		     		}
		     		/*给组件定义一个默认的状态*/
		     		,getInitialState : function(){
		     			
		     		}
		     		/*给予组件一个默认的"配置"*/
		     		,getDefaultProps : function(){
		     			
		     		}
		     		/*可以随意为每一个属性指定类型。这对于我们检查和处理属性的意外赋值非常有用*/
		     		,propTypes : function(){
		     			
		     		}
		     		// /*当组件要被挂载时这个函数被调用*/
		     		// ,componentWillMount : function(){

		     		// }
		     		// /*将组件渲染到了 DOM 中时调用*/
		     		// ,componentDidMount : function(){

		     		// }
		     		// /*把组件从 DOM 移除时调用*/
		     		// ,componentWillUnmount : function(){

		     		// }
		     		,render : function(){

		     			
		     		}
		    	})

			}
		}
		
		return jumbotron;
	}
)