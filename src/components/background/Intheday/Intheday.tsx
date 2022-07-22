import videoInTheDay from '@/assets/video/Interior+-+Rainy+Day.mp4'
import Backgroundday from '@/assets/book_cafe_preview_in.cf06fd4a92871f248f72.png'
export interface InthedayProps{

}

export function Intheday(props: InthedayProps) {
    return (
        <div>
            <video className='video' autoPlay loop muted>
                <source src={videoInTheDay} type='video/mp4/'></source>
            </video>
            <img src={Backgroundday}/>
        </div>
    )
   
}