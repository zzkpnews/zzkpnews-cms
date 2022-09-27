import {
  IconApps,
  IconPen,
  IconBug,
  IconBulb,
  IconVideoCamera,
  IconDriveFile,
  IconClockCircle,
  IconLock,
  IconUser,
  IconSettings,
  IconNotification,
  IconBook,
} from '@arco-design/web-react/icon';
import { Menu } from '@arco-design/web-react';
import { RiAppsLine } from 'react-icons/ri';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const SideNav = () => {
  return (
    <div className="tw-min-h-screen tw-shadow-lg">
      <Menu
        className={' tw-bg-slate-500'}
        style={{ width: 280, height: '100vh' }}
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_1']}
      >
        <div className="tw-font-bold tw-text-lg tw-text-center tw-my-5">中原科技网 创作平台</div>
        <MenuItem key="0">
          <span className="tw-font-bold">
            <IconApps />
            {"概览"}
          </span>
        </MenuItem>
        <SubMenu
          key="1"
          title={
            <>
              <span className="tw-font-bold">
                <IconPen /> {"内容发布"}
              </span>
            </>
          }
        >
          <MenuItem key="1_0">
            <IconDriveFile />
            {"写文章"}
          </MenuItem>
          <MenuItem key="1_1">
            <IconVideoCamera />
            {"发视频"}
          </MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <span className="tw-font-bold">
                <IconBulb /> {"内容管理"}
              </span>
            </>
          }
        >
          <MenuItem key="2_1">{"文章管理"}</MenuItem>
          <MenuItem key="2_2">{"视频管理"}</MenuItem>
        </SubMenu>
        <SubMenu
          key="3"
          title={
            <>
              <span className="tw-font-bold">
                <IconSettings /> {"账号管理"}
              </span>
            </>
          }
        >
          <MenuItem key="3_0">
            <IconClockCircle />
            {"操作记录"}
          </MenuItem>
          <MenuItem key="3_1">
            <IconLock />
            {"账户安全"}
          </MenuItem>
          <MenuItem key="3_2">
            <IconUser />
            {"账户形象"}
          </MenuItem>
        </SubMenu>
        <MenuItem key="4">
          <span className="tw-font-bold">
            <IconNotification /> {"消息通知"}
          </span>
        </MenuItem>
        <MenuItem key="5">
          <span className="tw-font-bold">
            <IconBook /> {"手册与文件"}
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SideNav;
