import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';

import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import {
  ConfigProvider,
  Divider,
  Dropdown,
  Input,
  Popover,
  theme,
} from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

const Item = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List = (
  props,
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List
                title="其他解决方案"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                  font-size: 14px;
                  color: ${token.colorText};
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                      border-radius: 4px;
                      padding: 16px;
                      margin-top: 4px;
                      display: flex;
                      cursor: pointer;
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                          font-size: 14px;
                          color: ${token.colorText};
                          line-height: 22px;
                        `}
                      >
                        Ant Design
                      </div>
                      <div
                        className={css`
                          font-size: 12px;
                          color: ${token.colorTextSecondary};
                          line-height: 20px;
                        `}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

import layoutSetting from "@/defaultSettings"

import { routes, routeRender } from '@/router'
import { Outlet, useResolvedPath } from 'react-router-dom';

import MenuFooter from './components/MenuFooter';


const Layout = () => {

  console.log(routes);
  const [settings, setSetting] = useState(layoutSetting);

  const { pathname } = useResolvedPath();

  const [num, setNum] = useState(40);
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls="main"

            {...defaultProps}

            location={{ pathname, }}

            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="group"

            menu={{
              collapsedShowGroupTitle: true,
            }}


            route={{
              path: '/',
              routes
            }}
            menuItemRender={routeRender}


            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: 'XiaoHe',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}

            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === 'undefined') return [];
              return [
                props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" onClick={() => { window.open("https://github.com/awesome-space/react-antd-admin", "_blank") }} />,
              ];
            }}


            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return (
                <>
                  {defaultDom}
                  <MenuCard />
                </>
              );
            }}
            menuFooterRender={MenuFooter}

            /**点击 Logo */
            onMenuHeaderClick={(e) => console.log(e)}


            {...settings}
          >


            {/* 设置按钮 */}
            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />

            <Outlet />

          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default Layout;