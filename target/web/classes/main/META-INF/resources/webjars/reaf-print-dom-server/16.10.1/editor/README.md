## 开发环境

1. sass: ~3.4.10
2. node.js: ~0.10.0
3. grunt-cli: ~0.1.13
4. grunt: ~0.4.5
5. bower: ~1.3.12

## 部署

1. 在本目录下执行 `npm install`，会自动进行依赖部署
2. 执行 `grunt build|release` 进行编译

## 通信接口配置

编辑 js/config.js，需要配置 `urlConfig` 对象的相关属性来使图片上传功能正常运作

## 数据输入与输出

通过调用 `RCEditor.setContent(string)` 与 `RCEditor.getContent()` 可以进行相应数据交互

## 目录说明

```

src: 源码目录
  │
 ...
  └───default: 当前 UEditor 主题
          ├───images: 图片目录
          ├───js: JavaScript 文件目录
          │    ├───ueditor: 对 UEditor 重构的文件目录
          │    │     └...
          │    └───utils: 功能模块
          └───scss: scss 文件目录     
			    ├───modules: 基础模块
				├───mixins: scss mixins
				├───partials: 各部分样式表
				└───extensions: 拓展部分样式表          
 
```

## 格式约定

1. 变量命名
	1. 在 JavaScript 中采用驼峰式命名，如 `someFunction`
	2. 命名构造函数时，应以大写字母开头，如 `SomeConstructor`
	2. 在 scss 中采用 '-' 连接命名，如 `.some-class`

2. 每个模块各建一个文件编写，无论内容多少

3. 不要省略单行的控制语句

4. 非赋值语句，尽量少用三元操作符，以免降低可读性 