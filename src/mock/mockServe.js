// 模拟mock数据
// 1、先引入mockjs插件
import Mock from 'mockjs'

// 2、引入JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })

