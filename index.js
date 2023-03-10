module.exports = {
  "extends": ["airbnb-base"],
  "rules": {
    "array-bracket-spacing": 0, // 在数组括号内强制实现一致的间距
    "arrow-body-style": 0, // 可以强制或禁止在箭头函数体的周围使用大括号
    "arrow-parens": 0, // 在箭头函数参数周围加上括号
    "camelcase": 0, // 检查变量名称中间的那些下划线
    "class-methods-use-this": 0, // 如果一个类方法没有使用this，它有时可以变成一个静态函数
    "comma-dangle": 0, // 强制在对象和数组文字中一致地使用尾随逗号
    "func-names": 0, // 强制或禁止使用命名函数表达式
    "global-require": 0, // 要求所有调用require()都位于模块的顶层
    "import/no-import-module-exports": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/order": 0,
    "import/prefer-default-export": 0,
    "importprefer-default-export": 0,
    "max-classes-per-file": 0, // 强制每个文件只能包含一个特定数量的类
    "max-len": 0, // 强制执行最大行长度以增加代码的可读性和可维护性。
    "newline-per-chained-call": 0, // 在每次调用方法链或深入成员访问后都需要换行符
    "no-await-in-loop": 0, // 不允许await在循环体内使用
    "no-console": 0, // 禁止调用console对象的方法
    "no-continue": 0, // 禁止使用 continue 语句。
    "no-param-reassign": 0, // 防止由功能参数的修改或重新分配引起的意外行为
    "no-plusplus": 0, // 不允许一元运算符++和--
    "no-prototype-builtins": 0, // 不允许直接在Object.prototype对象实例上调用某些方法
    "no-restricted-exports": 0, // 禁止在出口中指定名称
    "no-restricted-globals": 0, // 允许您指定您不希望在应用程序中使用的全局变量名称
    "no-restricted-modules": 0, // 允许你指定你不想在你的应用程序中使用的模块
    "no-restricted-properties": 0, // 对象上的某些属性可能在代码库中被禁止
    "no-return-assign": 0, // 旨在消除return陈述中的任务
    "no-return-await": 0, // 旨在防止由于缺乏对async function语义的理解而导致的可能的常见性能危害
    "no-shadow": 0, // 旨在消除阴影变量声明
    "no-underscore-dangle": 0, // 不允许在标识符中使用悬空下划线
    "no-unused-expressions": 0, // 旨在消除对程序状态没有影响的未使用的表达式
    "no-unused-vars": 0, // 旨在消除未使用的变量，函数和函数的参数
    "no-use-before-define": 0, // 会在遇到对尚未声明的标识符的引用时发出警告
    "object-shorthand": 0, // 强制使用简写语法
    "prefer-arrow-callback": 0, // 定位用作回调函数或函数参数的函数表达式
    "prefer-const": 0, // 旨在标记使用let关键字声明的变量，但在初始分配后从未重新分配变量
    "prefer-destructuring": 0, // 采用两组配置对象，第一个对象参数决定了规则适用的解构类型
    "prefer-object-spread": 0, // 推荐使用对象扩展操作符（spread operator）浅拷贝对象
    "prefer-template": 0, // 旨在用字符串标记+操作符的用法
    "radix": 0, // 旨在防止意外地将字符串转换为与预期不同的基数
    "space-before-function-paren": 0 // 旨在在函数括号之前强制执行一致的间距
  }
};