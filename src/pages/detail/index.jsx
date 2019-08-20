import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: ''
  }

  componentDidMount(){
    Taro.setNavigationBarTitle({
      title: '详情',
    })
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={()=>{Taro.chooseImage()}}>IMG</Button>
      </View>
    )
  }
}

export default Index
