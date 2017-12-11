var demo_main = '/js/demo.js';

var jquery = '/libs/jquery.min.js';

var bootstrap = '/libs/bootstrap/js/bootstrap.min.js';

var react = '/libs/react.js';

var underscore = '/libs/underscore-min.js';

var hammer_mod = '/libs/hammer.min.js';

var lib_mod = '/libs/lib.js';

// var JSXTransformer = __uri('/libs/JSXTransformer.js');

var inputDemo_mod = '/component/inputDemo/inputDemo.js';

var cutJs = function(s)
{
	return s.substring(0,s.length-3);
}

require.config(
{
	baseUrl : "/"
	,paths: {	
		/*入口文件*/
		'demo_main' : cutJs(demo_main)

		/*mod文件*/
		,'jquery' : cutJs(jquery) 
		,'bootstrap' : cutJs(bootstrap) 
		,'react' : cutJs(react) 
		,'underscore' : cutJs(underscore) 
		,'lib_mod' : cutJs(lib_mod)
		,'hammer_mod' : cutJs(hammer_mod)
		,'inputDemo_mod' :  cutJs(inputDemo_mod) 
	}
	,shim:{
		'bootstrap' : ['jquery']
		,'inputDemo_mod' : ['react']
	}
});

