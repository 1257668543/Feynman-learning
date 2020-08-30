// miniprogram/pages/homePage/homePage.js
const htmlSnip =
`<div class="content-intro view-box "><h2>JavaScript <span class="color_h1">语法</span> </h2> 
<hr>
<p class="intro">JavaScript 是一个程序语言。语法规则定义了语言结构。</p>
<hr>
 <h2>JavaScript 语法</h2> 
<p>JavaScript 是一个脚本语言。</p>
<p>它是一个轻量级，但功能强大的编程语言。</p>
<hr>
 <h2>JavaScript 字面量</h2> 
<p>在编程语言中，一个字面量是一个常量，如 3.14。</p>
<p><strong>数字（Number）字面量</strong> 可以是整数或者是小数，或者是科学计数(e)。</p>
<div class="example">
    <div class="example_code">3.14
        <br>
        <br>1001
        <br>
        <br>123e5</div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_numbers" link23623207019662873="1">尝试一下 »</a> 
</div>
<p><strong>字符串（String）字面量</strong> 可以使用单引号或双引号 :</p>
<div class="example">
    <div class="example_code">"John Doe"
        <br>
        <br>'John Doe'</div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_strings" link23623207019662873="1">尝试一下 »</a> 
</div>
<p><strong>表达式字面量</strong> 用于计算：</p>
<div class="example">
    <div class="example_code">5 + 6
        <br>
        <br>5 * 10</div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_expressions" link23623207019662873="1">尝试一下 »</a> 
</div>
<p><strong>数组（Array）字面量</strong> 定义一个数组：</p>
<div class="example">
    <div class="example_code">[40, 100, 1, 5, 25, 10]</div>
</div>
<p><strong>对象（Object）字面量</strong> 定义一个对象：</p>
<div class="example">
    <div class="example_code">{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}</div>
</div>
<p><strong>函数（Function）字面量</strong> 定义一个函数：</p>
<div class="example">
    <div class="example_code">function myFunction(a, b) { return a * b;}</div>
</div>
<br>
<hr>
 <h2>JavaScript 变量</h2> 
<p>在编程语言中，变量用于存储数据值。</p>
<p>JavaScript 使用关键字 <strong>var</strong> 来定义变量， 使用等号来为变量赋值：</p>
<div class="example">
    <div class="example_code">var x, length
        <br>
        <br>x = 5
        <br>
        <br>length = 6</div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_variables" link23623207019662873="1">尝试一下 »</a> 
</div>
<p>变量可以通过变量名访问。在指令式语言中，变量通常是可变的。字面量是一个恒定的值。</p>
<table class="lamp    ">
    <tbody>
        <tr>
            <th style="width:34px">
                <img src="https://7n.w3cschool.cn/statics/images/course/lamp.jpg" alt="Note" style="height:32px;width:32px">
            </th>
            <td>变量是一个<strong>名称</strong>。字面量是一个<strong>值</strong>。</td>
        </tr>
    </tbody>
</table>
<hr>
 <h2>JavaScript 操作符</h2> 
<p>JavaScript使用 <strong>算术运算符</strong> 来计算值:</p>
<div class="example">
    <div class="example_code">(5 + 6) * 10
        <br>
    </div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_operators" link23623207019662873="1">尝试一下 »</a> 
</div>
<p>JavaScript使用<strong>赋值运算符</strong>给变量赋值：</p>
<div class="example">
    <div class="example_code">x = 5
        <br>y = 6
        <br>z = (x + y) * 10</div>
    <br><a target="_blank" class="tryitbtn" showtry="1" href="/tryrun/showhtml/tryjs_syntax_assign" link23623207019662873="1">尝试一下 »</a> 
</div>
<p>JavaScript语言有多种类型的运算符：</p>
<table class="reference    ">
    <tbody>
        <tr>
            <th>Type</th>
            <th>实例</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>赋值，算术和位运算符</td>
            <td>=&nbsp; +&nbsp; -&nbsp; *&nbsp; /</td>
            <td>在 JS 运算符中描述</td>
        </tr>
        <tr>
            <td>条件，比较及逻辑运算符</td>
            <td>==&nbsp; != &lt;&nbsp; &gt;&nbsp;</td>
            <td>在 JS 比较运算符中描述</td>
        </tr>
    </tbody>
</table>
<br>
<hr>
 <h2>JavaScript 语句</h2> 
<p>在 HTML 中，JavaScript 语句向浏览器发出的命令。浏览器通过 JavaScript 语句明白要执行什么操作。</p>
<p>语句是用分号分隔：</p>
<div class="example">
    <div class="example_code">x = 5 + 6;
        <br>y = x * 10;</div>
</div>
<br>
<hr>
 <h2>JavaScript 关键词</h2> 
<p>JavaScript 语句通常以<strong>关键词</strong>为开头。 <strong>var</strong> 关键词告诉浏览器创建一个新的变量：</p>
<div class="example">
    <div class="example_code">var x = 5 + 6;
        <br>var y = x * 10;</div>
</div>
<br>
<hr>

<h2>JavaScript 标识符</h2> 
<p>和其他任何编程语言一样，JavaScript 保留了一些标识符为自己所用。</p>
<p>JavaScript 同样保留了一些关键字，这些关键字在当前的语言版本中并没有使用，但在以后 JavaScript 扩展中会用到。</p>
<p>JavaScript 标识符必须以字母、下划线（_）或美元符（$）开始。</p>
<p>后续的字符可以是字母、数字、下划线或美元符（数字是不允许作为首字符出现的，以便 JavaScript 可以轻易区分开标识符和数字）。</p>
<p>以下是 JavaScript 中最​​重要的保留字（按字母顺序）：</p>
<table class="reference    ">
    <tbody>
        <tr>
            <td>abstract</td>
            <td>else</td>
            <td>instanceof</td>
            <td>super</td>
        </tr>
        <tr></tr>
        <tr>
            <td>boolean</td>
            <td>enum</td>
            <td>int</td>
            <td>switch</td>
        </tr>
        <tr></tr>
        <tr>
            <td>break</td>
            <td>export</td>
            <td>interface</td>
            <td>synchronized</td>
        </tr>
        <tr></tr>
        <tr>
            <td>byte</td>
            <td>extends</td>
            <td>let</td>
            <td>this</td>
        </tr>
        <tr></tr>
        <tr>
            <td>case</td>
            <td>false</td>
            <td>long</td>
            <td>throw</td>
        </tr>
        <tr></tr>
        <tr>
            <td>catch</td>
            <td>final</td>
            <td>native</td>
            <td>throws</td>
        </tr>
        <tr></tr>
        <tr>
            <td>char</td>
            <td>finally</td>
            <td>new</td>
            <td>transient</td>
        </tr>
        <tr></tr>
        <tr>
            <td>class</td>
            <td>float</td>
            <td>null</td>
            <td>true</td>
        </tr>
        <tr></tr>
        <tr>
            <td>const</td>
            <td>for</td>
            <td>package</td>
            <td>try</td>
        </tr>
        <tr></tr>
        <tr>
            <td>continue</td>
            <td>function</td>
            <td>private</td>
            <td>typeof</td>
        </tr>
        <tr></tr>
        <tr>
            <td>debugger</td>
            <td>goto</td>
            <td>protected</td>
            <td>var</td>
        </tr>
        <tr></tr>
        <tr>
            <td>default</td>
            <td>if</td>
            <td>public</td>
            <td>void</td>
        </tr>
        <tr></tr>
        <tr>
            <td>delete</td>
            <td>implements</td>
            <td>return</td>
            <td>volatile</td>
        </tr>
        <tr></tr>
        <tr>
            <td>do</td>
            <td>import</td>
            <td>short</td>
            <td>while</td>
        </tr>
        <tr></tr>
        <tr>
            <td>double</td>
            <td>in</td>
            <td>static</td>
            <td>with</td>
        </tr>
        <tr></tr>
    </tbody>
</table>
<hr>
 <h2>JavaScript 注释</h2> 
<p>不是所有的 JavaScript 语句都是"命令"。双斜杠 <strong>//</strong> 后的内容将会被浏览器忽略：</p>
<div class="example">
    <div class="example_code">// 我不会执行</div>
</div>
<hr>
 <h2>JavaScript 数据类型</h2> 
<p>JavaScript 有多种数据类型：数字，字符串，数组，对象等等：</p>
<div class="example">
    <div class="example_code">var length = 16;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;// Number 通过数字字面量赋值
        <br>var points = x * 10;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Number 通过表达式字面量赋值
        <br>var lastName = "Johnson";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // String 通过字符串字面量赋值
        <br>var cars = ["Saab", "Volvo", "BMW"];&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Array&nbsp; 通过数组字面量赋值
        <br>var person = {firstName:"John", lastName:"Doe"};&nbsp;&nbsp;// Object 通过对象字面量赋值</div>
</div>
<br>
<hr>
 <h2>数据类型的概念</h2> 
<p>编程语言中，数据类型是一个非常重要的内容。</p>
<p>为了可以操作变量，了解数据类型的概念非常重要。</p>
<p>如果没有使用数据类型，以下实例将无法执行：</p>
<div class="example">
    <div class="example_code">16 + "Volvo"</div>
</div>
<p>16 加上 "Volvo" 是如何计算呢? 以上会产生一个错误还是输出以下结果呢？</p>
<div class="example">
    <div class="example_code">"16Volvo"</div>
</div>
<p>你可以在浏览器尝试执行以上代码查看效果。</p>
<p>在接下来的章节中你将学到更多关于数据类型的知识。</p>
<hr>
 <h2>JavaScript 函数</h2> 
<p>JavaScript 语句可以写在函数内，函数可以重复引用：</p>
<p> <strong>引用一个函数</strong> = 调用函数(执行函数内的语句)。</p>
<div class="example">
    <div class="example_code">function myFunction(a, b) {
        <br>&nbsp;&nbsp;&nbsp; return a * b;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // 返回 a 乘于 b 的结果
        <br>}</div>
</div>
<br>
<hr>
 <h2>JavaScript 对大小写敏感。</h2> 
<p>JavaScript 对大小写是敏感的。</p>
<p>当编写 JavaScript 语句时，请留意是否关闭大小写切换键。</p>
<p>函数 <strong>getElementById</strong> 与 <strong>getElementbyID</strong> 是不同的。</p>
<p>同样，变量 <strong>myVariable</strong> 与 <strong>MyVariable</strong> 也是不同的。</p>
<p><b>提示：</b>在本站的编程实战中，你可以通过练习<a href="https://www.w3cschool.cn/codecamp/understanding-case-sensitivity-in-variables.html" target="_blank">理解JavaScript变量的大小写敏感性</a>。</p>
<hr>
 <h2>JavaScript 字符集</h2> 
<p>JavaScript 使用 Unicode 字符集。</p>
<p>Unicode 覆盖了所有的字符，包含标点等字符。</p>
<p>如需进一步了解，请学习我们的 <a href="/charsets/ref-html-utf8.html" link23623207019662873="1">完整 Unicode 参考手册</a>。</p>
<hr>
 <h2>您知道吗?</h2> 
<table class="lamp     clicked">
    <tbody>
        <tr>
            <th style="width:34px">
                <img src="https://7n.w3cschool.cn/statics/images/course/lamp.jpg" alt="Note" style="height:32px;width:32px">
            </th>
            <td>JavaScript 中，常见的是驼峰法的命名规则，如 lastName (而不是lastname)。</td>
        </tr>
    </tbody>
</table>
<table class="lamp">
    <tbody>
        <tr>
            <th style="width:34px">
                <img src="https://7n.w3cschool.cn/statics/images/course/lamp.jpg" alt="Note" style="height:32px;width:32px">
            </th>
            <td>JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译。</td>
        </tr>
    </tbody>
</table></div>
`
const htmlSnip1 =
`<div class="content-intro view-box "><p>以下学习脑图在各个学习章节里面也有，具体学到相应章节可以仔细研读，本篇只是做个规整 。</p>
<div style="text-align: center;">
    <a href="https://atts.w3cschool.cn/attachments/image/20170306/1488780841257569.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20170306/1488780841257569.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20170306/1488780841257569.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476925658848.gif" target="_blank">
        <img src="https://atts.w3cschool.cn/attachments/image/20171209/1512802772947435.png" alt="M8T)~}ASYH82XGK5B74G0BF">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476935836031.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476935836031.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20160910/1473476935836031.gif" target="_blank">
        <br>
    </a>
</div>
<p>
    <a href="/attachments/image/20160910/1473476945739921.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476945739921.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。" class="">
    </a>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://atts.w3cschool.cn/attachments/image/20180205/1517813267879178.png" alt="未标题-1" style="max-width:100%;">
</p>
<p>
    <br>
</p>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476952296809.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476952296809.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20160910/1473476952296809.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476960662589.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476960662589.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20160910/1473476960662589.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476968735757.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476975191386.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476975191386.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20160910/1473476975191386.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476981856911.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476981856911.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
    <a href="/attachments/image/20160910/1473476981856911.gif" target="_blank">
        <br>
    </a>
</div>
<div style="text-align: center;">
    <a href="/attachments/image/20160910/1473476987139357.gif" target="_blank"></a>
    <a href="/attachments/image/20160910/1473476987139357.gif" target="_blank" style="line-height: 1.7;">
        <img src="https://atts.w3cschool.cn/attachments/image/20160910/1473476987139357.gif" alt="价值10000元的javascript知识图谱，值得你珍藏。">
    </a>
</div>
<p>
    <br>
</p></div>
`

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    htmlSnip,
    htmlSnip1,
    renderedByHtml: false,
  },

  renderHtml() {
    this.setData({
      renderedByHtml: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})