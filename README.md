# macro_utils

## Table of Contents

1. <a href="#table_data">data</a>
	* <a href="#table_data-deepAssign">deepAssign</a>
  * <a href="#table_data-delSpac">delSpac</a> 

2. <a href="#table_ex">ex</a>
	* <a href="#table_ex-csv">csv</a>

3. <a href="#table_format">format</a>
	* <a href="#table_format-time">time</a>
  * <a href="#table_format-urlParams">urlParams</a>

4. <a href="#table_http">http</a>

5. <a href="#table_jump">jump</a>
	* <a href="#table_jump-jumpToPage">jumpToPage</a>

6. <a href="#table_type">type</a>
	* <a href="#table_type-get">get</a>
  * <a href="#table_type-isArray">isArray</a>
  * <a href="#table_type-isEmpty">isEmpty</a>
  * <a href="#table_type-isOf">isOf</a>
  * <a href="#table_type-isPrototype">isPrototype</a>

7. <a href="#table_validator">validator</a>

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

  <h3 id="table_data-delSpac">delSpac</h3>

  > 根据传入内容清除其中的空格<br>
  > 参数 str 传入内容<br>
  > 参数 direction 去除空格的方式<br>
  > data.delSpac(data, direction)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  data  | 内容 | string | 无
  direction  | 清除的方式<br>( left: 左边; right: 右边; both: 两边; middle: 保存两边的空格清除中间;<br>不传就清除全部 ) | string | 无

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

  <h3 id="table_format-urlParams">urlParams</h3>

  > 根据传入的链接, 获取链接后面的参数<br>
  > format.urlParams(url)

  参数 | 说明 | 类型 | 默认值
  ---- | ----- | ------ | -------
  url  | 链接 | string | 无

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

<h2 id="table_type">type</h2>
  <h3 id="table_type-get">get</h3>
  <h3 id="table_type-isArray">isArray</h3>
  <h3 id="table_type-isEmpty">isEmpty</h3>
  <h3 id="table_type-isOf">isOf</h3>
  <h3 id="table_type-isPrototype">isPrototype</h3>

<h2 id="table_validator">validator</h2>
