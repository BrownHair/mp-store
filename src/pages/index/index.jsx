import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'


@connect(({  }) => ({

}), () => ({

}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }


  routerGo = url => Taro.navigateTo({url});

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={()=>{this.routerGo('/pages/detail/index')}}>+</Button>
      </View>
    )
  }
}

export default Index
