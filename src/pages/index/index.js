import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { getIndex } from "../../apis/modules";

import "./index.scss";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  state = {
    bannerList: [],
    caseList: [],
    spikeList: []
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    getIndex().then(res => {
      let { bannerList, caseList, spikeList } = res;
      console.log(bannerList);
      this.setState({
        bannerList,
        caseList,
        spikeList
      });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick() {
    console.log(1);
  }

  render() {
    let { bannerList, caseList, spikeList } = this.state;
    return (
      <View className='index'>
        <Swiper
          className='home-banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {bannerList.map((item, index) => (
            <SwiperItem taroKey={index}>
              <Image
                mode='widthFix'
                className='banner-img'
                src={item.banner_url}
              />
            </SwiperItem>
          ))}
        </Swiper>
        {caseList.map(item => (
          <Text>{item.caselist_author}</Text>
        ))}
        {spikeList.map(item => (
          <Text>{item.name}</Text>
        ))}
      </View>
    );
  }
}

export default Index;
