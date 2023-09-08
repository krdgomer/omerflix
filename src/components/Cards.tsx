import { Card } from "antd"
import {StarTwoTone} from '@ant-design/icons'

export default function Cards(props: {coverImage: any,title: string,genres: string[],year: string,rating: string}){



    return(
        <div>
            <Card cover={props.coverImage} style={{width: 240}} hoverable={true} size="small"
            actions={[
                <><StarTwoTone key="fav" style={{margin:0, padding:0}} twoToneColor='#ffea00'/>{props.rating}</>,
                <p style={{margin:0, padding:0}}>{props.year}</p>
              ]}
            >
                <p style={{margin: 0, padding: 0,fontWeight: "bolder"}}>{props.title}</p>
            </Card>
        </div>
    )

}