// 加载模块
const {task,src,dest,watch,series,parallel} = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
task('delDist',async ()=>{
  await del('./dist');
})

// 处理图片
// task('image', async ()=>{
//   src('./image/*.*')
//   .pipe(dest('./dist/image'))
//   .pipe(load.connect.reload())
// })
task('image', async ()=>{
  src('./image/**')
  .pipe(dest('./dist/image'))
})
// 处理sass
// task('sass', async ()=>{
//   src('./sass/*.scss')
//   .pipe(load.sassChina())
//   .pipe(dest('./dist/css'))
//   .pipe(load.connect.reload())
// })
task('sass', async ()=>{
  src('./css/*.css')
  // .pipe(load.sassChina())
  // .pipe(load.minifyCss())
  .pipe(dest('./dist/css'))
  .pipe(load.connect.reload())
})
// 处理js
task('script', async ()=>{
  src('./script/*.js')
  .pipe(dest('./dist/script'))
  .pipe(load.connect.reload())
})

// 处理html
task('html', async ()=>{
  src('./pages/*.html')
  .pipe(dest('./dist/pages'))
  .pipe(load.connect.reload())
})

// 监听文件变化
task('watch',async ()=>{
  watch('./image/*.*',series('image'));
  watch('./sass/*.scss',series('sass'));
  watch('./script/*.js',series('script'));
  watch('./pages/*.html',series('html'));
})
// 处理jq
task('jq', async ()=>{
  src(['./jquery-1.8.3/jquery-1.8.3.min.js'])
  .pipe(dest('./dist/jquery-1.8.3'))
})
// 处理font-awesome
task('font', async ()=>{
  src(['./font-awesome/**'])
  .pipe(dest('./dist/font-awesome'))
})
// 处理swiper
task('swiper', async ()=>{
  src(['./swiper/*.*'])
  .pipe(dest('./dist/swiper'))
})
// 处理json
task('json', async ()=>{
  src(['./json/**'])
  .pipe(dest('./dist/json'))
})
// 处理reset
task('reset', async ()=>{
  src(['./reset/**'])
  .pipe(dest('./dist/reset'))
})
// 处理php
task('php', async ()=>{
  src(['./php/**'])
  .pipe(dest('./dist/php'))
})

// 监听文件变化
// task('watch',async ()=>{
//   watch('./image/*.*',series('image'));
//   watch('./style/*.css',series('style'));
//   watch('./script/*.js',series('script'));
//   watch('./pages/*.html',series('html'));
// })

// 启动服务，自动刷新
task('connect',async ()=>{
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3001
  });
})

// 构建生产包
task('dev',series('delDist','image','sass','script','html','connect','jq','font','swiper','json','reset','php'))
