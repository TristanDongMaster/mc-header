## 头部导航栏

## 可选参数：

```js
static propTypes = {
    data: PropTypes.array, // 导航栏列表数组 [{id,name,menuList:[{id,url,name}],url:''}]
    logoUrl: PropTypes.string, // logo url
    indexUrl: PropTypes.string, // 点击logo跳转地址
    loginout: PropTypes.func, // 退出登陆
  };
```

## 基本使用：

* npm

```
npm install mc-header
```

```js
import Header from "mc-header";
const renderHeader = () => {
  return (
   <Header data logoUrl indexUrl loginout>
  );
};
```
