import React from 'react';
import { ConfigProvider } from 'antd';
import { ComponentType } from 'react';
import localforage from 'localforage';
import { initTheme } from '@/common/theme';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';

moment.locale('zh-cn');

export default function withAntdConfig<Props>(
    WrappedComponent: ComponentType<Props>,
) {
    //初始化主题色
    localforage.getItem('mtheme').then((res: any) => {
        res ? initTheme(res) : initTheme('light');
    });

    const Component: ComponentType<Props> = (props) => (
        <ConfigProvider locale={zhCN} autoInsertSpaceInButton>
            <WrappedComponent {...props} />
        </ConfigProvider>
    );

    Component.displayName = `withAntdConfig(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return Component;
}
