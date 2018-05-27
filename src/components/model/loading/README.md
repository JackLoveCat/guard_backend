## Loading 加载图标

加载等待图标组件

```html
<m-loading></m-loading>
<m-loading type="wipe"></m-loading>
```

## Loading Attributes

* width 尺寸大小，字符串或者数字，默认 40
* type 类型，字符串，可选值：wipe
* color 路径颜色，字符串
* bg-color 背景路径颜色，字符串或 boolean，默认 true

# vue-loading-template

---

Use SVG for loading.

Demo: https://jkchao.github.io/vue-loading/

## Start

```bash
npm install vue-loading-template --save
```

## Options

 <table>
    <thead>
    <tr>
    <th>Prop</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Available values</th>
      </tr>
    </thead>
	<tbody>
    	<tr>
        <td>type</td>
        <td>String</td>
        <td>false</td>
        <td>balls</td>
        <td>balls, bars, beat, bubbles, cylon, spin, spiningDubbles, barsCylon</td>
        </tr>
        <tr>
        <td>color</td>
        <td>String</td>
        <td>false</td>
        <td>#5ac1dd</td>
        <td></td>
        </tr>
        <tr>
        <td>size</td>
        <td>Object</td>
        <td>false</td>
        <td>{ width: '30px', height: '30px' }</td>
        <td></td>
        </tr>
    </tbody>
</table>

## Example in SPA

```vue
 <template>
    <div>
       <h2>bars</h2>
       <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>    
    </div>
 </template>
  <script>
import vueLoading from 'vue-loading-template'
export default {
  name: 'app',
  components: {
    vueLoading
  }
}
</script>
```

## License

MIT
