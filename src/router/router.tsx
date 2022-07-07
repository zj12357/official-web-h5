/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import mateInfo from '@/common/mateInfo';

const Home = React.lazy(() => import('../pages/Home'));
const LatestNews = React.lazy(() => import('../pages/LatestNews'));
const Respected = React.lazy(() => import('../pages/Respected'));
const Member = React.lazy(() => import('../pages/Member'));
const HotelCatering = React.lazy(() => import('../pages/HotelCatering'));
const Travel = React.lazy(() => import('../pages/Travel'));
const Shopping = React.lazy(() => import('../pages/Shopping'));
const Recruitment = React.lazy(() => import('../pages/Recruitment'));
const HotelCateringDetail = React.lazy(
    () => import('../pages/Detail/HotelCateringDetail'),
);
const TravelDetail = React.lazy(() => import('../pages/Detail/TravelDetail'));
const ShoppingDetail = React.lazy(
    () => import('../pages/Detail/ShoppingDetail'),
);

const NotFound = React.lazy(() => import('../pages/NotFound'));

export interface MixRouteConfig extends RouteConfig {
    title?: string;
    description?: string;
    requiresAuth?: boolean; //登录权限拦截
    showHeader?: boolean;
    showFooter?: boolean;
}

const routes: MixRouteConfig[] = [
    {
        path: '/',
        exact: true,
        showHeader: true,
        showFooter: true,
        component: () => <Redirect to="/home"></Redirect>,
    },

    {
        path: '/home',
        exact: true,
        component: Home,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },

    {
        path: '/latestNews',
        exact: true,
        component: LatestNews,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },

    {
        path: '/respected',
        exact: true,
        component: Respected,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/member',
        exact: true,
        component: Member,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/hotelCatering',
        exact: true,
        component: HotelCatering,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/travel',
        exact: true,
        component: Travel,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/shopping',
        exact: true,
        component: Shopping,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/recruitment',
        exact: true,
        component: Recruitment,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: true,
        showFooter: true,
    },
    {
        path: '/hotelCateringDetail/:id',
        exact: true,
        component: HotelCateringDetail,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: false,
        showFooter: true,
    },
    {
        path: '/travelDetail/:id',
        exact: true,
        component: TravelDetail,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: false,
        showFooter: true,
    },
    {
        path: '/shoppingDetail/:id',
        exact: true,
        component: ShoppingDetail,
        title: mateInfo.common.title,
        description: mateInfo.common.description,
        showHeader: false,
        showFooter: true,
    },

    {
        path: '*',
        exact: true,
        component: NotFound,
        showHeader: true,
        showFooter: false,
    },
];

export default routes;
