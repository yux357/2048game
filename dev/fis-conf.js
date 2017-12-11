// 配置构建规则 开发阶段的打包
fis.match('**.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'), 
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})

fis.match('**.jsx', {  
    rExt: '.js',
    parser: fis.plugin('react', {})
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: {
    	js : 'libs/require_conf.js'
    	,css : 'styles/${filepath}_aio.css'
    } 
  })
});

fis.media('program').match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: {
      js : 'libs/require_conf.js'
      ,css : 'static/${filepath}_aio.css'
    } 
  })
});

fis.media('program').match('**.{js,jsx,css,png,jpg,gif}', {
    url: '/program/2048$0'
})

// // // 用media去配置第二套构建规则
// /*js压缩*/
// fis.media('temp').match('**.js', {
//   optimizer: fis.plugin('uglify-js')
// });
// /*css压缩*/
// fis.media('temp').match('**.css', {
//   optimizer: fis.plugin('clean-css')
// });
// /*png压缩*/
// fis.media('temp').match('**.png', {
//   optimizer: fis.plugin('png-compressor')
// });
// /*使用文件指纹*/
// fis.media('temp').match('**.{js,css,png,gif}', {
//   useHash: true
// });
// /*修改文件输出目录*/
// fis.media('temp').match('**.{js,png,jpg,gif}', {
//     release: 'templets/yux2016/$0'
// })
// /*打包阶段将同步引用的js文件打包为一个文件，将CSS文件打包为一个文件，前面有举过例子*/
// fis.media('temp').match('::package', {
//    postpackager: fis.plugin('loader', {
//     allInOne: {
//       js : 'libs/require_conf.js'
//       ,css : 'templets/yux2016/static/${filepath}_aio.css'
//     } 
//   })
// })