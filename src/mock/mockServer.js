/**
 * 使用mockjs提交模拟接口
 */
import apiData from './data.json'
import Mock from 'mockjs'
// 注册路由
Mock.mock('/api/login', {code: 0, data: apiData.data} )

// 不需要向外暴露什么
// export default xxx

