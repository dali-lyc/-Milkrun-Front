
import Mock from 'mockjs'

var Order = require('./mockdata/Order.json')
Mock.mock('/order', 'post', Order)
