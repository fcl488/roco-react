import { Carousel } from 'antd'
import { Image, Divider } from 'antd'
import style from './index.module.scss'

const Home = () => {
  // const bannerList = [
  //   'https://www.pokemon.cn/assets_c/2024/08/8016bacb757643d1f485f971fd0ee9262cd4a07a-thumb-1280x458-24767.jpg',
  //   'https://www.pokemon.cn/assets_c/2024/07/509ceef4254238b7d025ee4c7322e8c998f4c297-thumb-1280x458-24429.png',
  //   'https://www.pokemon.cn/assets_c/2024/05/69a20dd18b57b74290c962090a6296c714a192aa-thumb-1280xauto-23775.jpg',
  // ]

  const bannerList = [
    'https://ossweb-img.qq.com/images/roco/act/a20110727lkwg/wallpaper/7_1_1440.jpg',
    'https://ossweb-img.qq.com/images/roco/act/a20110727lkwg/wallpaper/4_4_1600.jpg',
    'https://ossweb-img.qq.com/images/roco/act/a20110727lkwg/wallpaper/6_1_1440.jpg',
  ]

  return (
    <>
      <div className={style.banner}>
        <div className={style.banner_area}>
          <Carousel autoplay infinite={false}>
            {bannerList.map((item, index) => {
              return <Image width={1280} height={458} preview={false} key={index} src={item} />
            })}
          </Carousel>
        </div>
      </div>
      <Divider orientation="left" orientationMargin="50">
        <div className={style.other_title}>其他内容</div>
      </Divider>
      <div className={style.other_contant}>
        放什么东西没想好
      </div>
    </>
  )
}

export default Home
