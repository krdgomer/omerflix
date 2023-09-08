import { Dropdown, MenuProps,Button,Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { User } from "App";

 const items: MenuProps['items'] = [
    {
      key: '1',
      label: "Profil",
    },

    {
      key: '2',
      danger: true,
      label: "Çıkış",
    }
  ] 

const DropdownMenu = (props: {currentUser: User})=>{

    return(
        <Dropdown menu={{ items }} placement="bottomLeft">
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {props.currentUser.username}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )

    
}

export default DropdownMenu