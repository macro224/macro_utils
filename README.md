# utils

## Table of Contents

* <a href="#table_data">data</a>
	* <a href="#table_data-deepAssign">deepAssign</a>
  * <a href="#table_data-delSpac">delSpac</a> 

* <a href="#table_ex">ex</a>
	* <a href="#table_ex-csv">csv</a>

* <a href="#table_format">format</a>
	* <a href="#table_format-time">time</a>
  * <a href="#table_format-urlParams">urlParams</a>

* <a href="#table_http">http</a>

* <a href="#table_jump">jump</a>
	* <a href="#table_jump-jumpToPage">jumpToPage</a>

* <a href="#table_type">type</a>
	* <a href="#table_type-get">get</a>
  * <a href="#table_type-isArray">isArray</a>
  * <a href="#table_type-isEmpty">isEmpty</a>
  * <a href="#table_type-isOf">isOf</a>
  * <a href="#table_type-isPrototype">isPrototype</a>

* <a href="#table_validator">validator</a>

<h2 id="table_data">data</h2>

> 主要针对数据的处理

  <h3 id="table_data-deepAssign">deepAssign</h3>

  > 根据传入的数据判断数据类型<br>
  > 参数 obj 传入的数据 (对象/数组)<br>
  > 返回copy后数据(对象/数组), 否则返回字符串提示<br>
  > data.deepAssign(data)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  data  | 需要深拷贝的数据 | object / array | 无

  ### 示例
  ```
    import data from 'macro_utils/lib/data'
    const obj1 = { a: 1 }
    const obj2 = data.deepAssign(obj1)
    obj1.a = 2
    console.log(obj2) // { a: 1 }
  ```

  <h3 id="table_data-delSpac">delSpac</h3>

  > 根据传入内容清除其中的空格<br>
  > 参数 str 传入内容<br>
  > 参数 direction 去除空格的方式<br>
  > data.delSpac(data, direction)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  data  | 内容 | string | 无
  direction  | 清除的方式<br>left: 左边;<br>right: 右边;<br>both: 两边;<br>middle: 保存两边的空格清除中间;<br>不传就清除全部 | string | 无

  ### 示例
  ```
    import data from 'macro_utils/lib/data'
    const str = data.delSpac(' 123 345 456 ', 'middle')
    console.log(str) // ' 123345456 '
  ```

<h2 id="table_ex">ex</h2>

> 导出文件

  <h3 id="table_ex-csv">csv</h3>

  > 根据传入的数据来导出表格<br>
  > ex.csv(params)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  params  | 传入的数据 | object | 无
  params.filename  | 文件名 | string | 无
  params.columns  | 表头 | array | 无
  params.data  | 表格数据 | array | 无

  ### 示例
  ```
    import ex from 'macro_utils/lib/ex'
    const params = {
      filename: 'table.csv',
      columns: [{ key: 'a', key: 'b }],
      data: [{ a: 1, b: 11 }, { a: 2, b: 22 }]
    }
    ex.csv(params)
  ```

<h2 id="table_format">format</h2>

  > 格式化数据

  <h3 id="table_format-time">time</h3>

  > 根据传入的时间返回相应的格式<br>
  > format.time(date, division, obj)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  date  | 传入的时间 | date | 无
  division  | 字符串类型的时间分割符 | date | /
  obj  | 传入的时间 | boolean | false

  ### 示例
  ```
    import format from 'macro_utils/lib/format'
    const date = new Date()
    const nowTime = format.time(date, '-', false)
    const objTime = format.time(date, '-', true)
    console.log(nowTime) // 2022-05-30 10:10:10
    console.log(objTime) // { year: 2022, month: 05, day: 30, hour: 10, minute: 10, second: 10 }
  ```

  <h3 id="table_format-urlParams">urlParams</h3>

  > 根据传入的链接, 获取链接后面的参数<br>
  > format.urlParams(url)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  url  | 链接 | string | 无

  ### 示例
  ```
    import format from 'macro_utils/lib/format'
    const url =  'http: 127.0.0.1?id=1&index=2'
    const obj = format.urlParams(url)
    console.log(obj) // { id: 1, index: 2 }
  ```

<h2 id="table_http">http</h2>

> 接口请求<br>
> import Http from 'macro_utils/lib/http'<br>
> Http.init(options)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  options  | 初始化配置 | object | 无
  options.headers  | 请求头 | object | {}
  options.timeout  | 超时时间 | object | 无
  options.baseURL  | 通用请求链接前缀 | object | 无
  options.beforeRequest  | 发送请求前的钩子 | function | 无
  options.afterRequest  | 结束请求后的钩子 | function | 无
  options.successRequest  | 请求成功后的钩子 | function | 无
  options.errorRequest  | 请求失败后的钩子 | function | 无
  options.transformUrl  | 修改请求链接 | function | null
  options.transformData  | 修改请求参数 | function | null
  options.transformHeader  | 修改请求头数据 | function | null

  ### 示例
  ```
    import Http from 'macro_utils/lib/http'
    const options = {
      headers: {
        token: '?????',
        ...如表格参数
      }
    }
    const http = Http.init(options)
    http.get('/api/user/info', { id: 1 })
    http.post('/api/user/save', { id: 1 })
  ```

<h2 id="table_jump">jump</h2>

> 跳转

  <h3 id="table_jump-jumpToPage">jumpToPage</h3>

  > 路由跳转<br>
  > jump.jumpToPage(router)(url, target)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  router  | vue的路由 | function | 无
  url  | 路径 | string | 无
  target  | 跳转方式 ( _self: 本身页面中打开;<br>_blank: 新建页面打开 ) | string | 无

  ### 示例
  ```
    import router from 'router'
    import jump from 'macro_utils/lib/jump'
    const jumpToPage = jump.jumpToPage(router)
    jumpToPage('/index/index')
  ```

<h2 id="table_type">type</h2>

  > 数据类型

  <h3 id="table_type-get">get</h3>

  > 根据传入的数据返回数据类型<br>
  > type.get(value)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  value  | 数据 | any | 无

  ### 示例
  ```
    import type from 'macro_utils/lib/type'
    console.log( type.get(true) ) // boolean
    console.log( type.get(123) ) // number
    console.log( type.get('123') ) // string
    console.log( type.get(undefined) ) // undefined
    console.log( type.get(null) ) // null
    console.log( type.get([]) ) // array
    console.log( type.get({}) ) // object
    console.log( type.get(() => {}) ) // function
    console.log( type.get(new Date) ) ) // date
  ```

  <h3 id="table_type-isArray">isArray</h3>

  > 根据传入的数据判断数据是否为数组类型<br>
  > type.isArray(data)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  data  | 数据 | array | 无

  ### 示例
  ```
    import type from 'macro_utils/lib/type'
    console.log( type.isArray(123) ) // false
    console.log( type.isArray([]) ) // true
  ```

  <h3 id="table_type-isEmpty">isEmpty</h3>

  > 检查 value 是否是为空<br>
  > 如果 value 是空返回true，否则返回false<br>
  > type.isEmpty(value, space)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  value  | 传入的值 | any | 无
  space  | 是否判断空格 | boolean | false

  ### 示例
  ```
    import type from 'macro_utils/lib/type'
    console.log( type.isEmpty('') ) // true
    console.log( type.isEmpty(123) ) // false
    console.log( type.isEmpty([1, 2]) ) // false
    console.log( type.isEmpty([]) ) // true
  ```

  <h3 id="table_type-isOf">isOf</h3>

  > 判断参数二是否在参数一里面<br>
  > type.isOf(value, params)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  value  | 数据 | string | 无
  params  | 需要判断的值 | string | 无

  ### 示例
  ```
    import type from 'macro_utils/lib/type'
    console.log( type.isOf('123456', '123') ) // true
    console.log( type.isOf('123456', '1231') ) // false
  ```

  <h3 id="table_type-isPrototype">isPrototype</h3>

  > 检查参数是否是原型<br>
  > 如果是原型返回 true，不是返回 false<br>
  > type.isPrototype(params)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  params  | 需要判断的值 | any | 无

  ### 示例
  ```
    import type from 'macro_utils/lib/type'
    console.log( type.isPrototype('123456') ) // true
  ```

<h2 id="table_validator">validator</h2>

  > 内容校验

  方法 | 说明
  ---- | -----
  mobile  | 手机号码验证
  email  | 邮箱验证
  qq  | qq验证
  nickname  | 昵称不能包含特殊字符验证
  password  | 验证密码
  int  | 纯数字验证

  ### 示例
  ```
    import validator from 'macro_utils/lib/validator'
    console.log( validator.mobile('123') ) // false
    console.log( validator.mobile('13800138000') ) // true
  ```
