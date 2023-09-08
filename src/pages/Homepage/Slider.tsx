import type { MenuProps } from 'antd';
import 'assets/style/Slider.css';
import {Menu} from 'antd'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuProps['items'] = [
    getItem("Kategoriler","1",null,
      [
      getItem("Tümü","a0"),
      getItem("Dram","a1"),
      getItem("Gerilim","a2"),
      getItem("Korku","a3"),
      getItem("Aksiyon","a4"),
      getItem("Bilim Kurgu","a5"),
      getItem("Komedi","a6"),
      getItem("Suç","a7"),
      getItem("Polisiye","a8"),
      getItem("Western","a9")
      ]
    ),
    getItem("En Çok İzlenen Filmler","2"),
    getItem("En Beğenilenler","3"),
    getItem("Favorileriniz","4")




]



export default function Slider(props: {setCurrGenre: any,setCurrentPage: any}){


  const onClickMenu: MenuProps['onClick'] = (e) => {
    props.setCurrGenre(e.key)
    props.setCurrentPage("0")
  };

    return(
        <div className='Slider'>
            <Menu
                items={items}
                theme="dark"
                className="Menu"
                mode='inline'
                onClick={onClickMenu}
            >
            </Menu>
        </div>
    );

    

} 