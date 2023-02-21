import { useState, useEffect } from 'react'
import microApp from '@micro-zoe/micro-app';
import getConfig from 'next/config';

const MyPage = () => {
  const [show, changeShow] = useState(false)
  const { publicRuntimeConfig } = getConfig();
  const appName = 'children';
  useEffect(() => {
    changeShow(true)
  }, [])

  function handleCreate(): void {
    console.info(`[${appName}] 已创建`);
  }

  function handleBeforeMount(): void {
    console.info(`[${appName}] 即将被渲染`);
  }

  function handleMount(): void {
    console.info(`[${appName}] 渲染完成`);
  }

  function handleUnmount(): void {
    console.info(`[${appName}] 已卸载`);
  }

  function handleError(): void {
    console.info(`[${appName}] 加载出错`);
  }

  function handleDataChange(event: CustomEvent): void {
    const data = event.detail.data;
  }

  return (
    <div>
      <h1>子应用</h1>
      {/* {
        show && (
          <micro-app
            name='children' // name(必传)：应用名称
            url='http://localhost:3001/' // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
            baseroute='children' // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
            onCreated={handleCreate}
            onBeforemount={handleBeforeMount}
            onMounted={handleMount}
            onUnmount={handleUnmount}
            onError={handleError}
            onDataChange={handleDataChange}
          ></micro-app>
        )
      } */}
    </div>
  )
}

export default MyPage