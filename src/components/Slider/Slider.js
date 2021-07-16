import { Carousel } from 'antd'

function Slider() {
    const imageList = [
        'http://qidian.qpic.cn/qidian_common/349573/cbe4a9f2e3befc36ac4bb4781b5809ca/0',
        'https://qidian.qpic.cn/qidian_common/349573/337196b83a8f8f6d8d89415b342cc37e/0',
        'https://qidian.qpic.cn/qidian_common/349573/fa59a1a01e0b8bc407e70b9002e20e0e/0',
    ]

    return <div className="slider" style={{margin: '0 10px', height: '210px', width: '700px'}}>
        <Carousel autoplay>
            {
                imageList.map((image, k) => {
                    return <img src={image} alt="" key={k} />
                })
            }
        </Carousel>
    </div>
}

export default Slider;