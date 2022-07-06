import axios from 'axios';
import NProgress from 'nprogress';
import qs from 'qs';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 20000;

// Request interceptors
axios.interceptors.request.use(
    (config) => {
        NProgress.start();
        // Add X-Access-Token header to every request, you can add other custom headers here

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

// Response interceptors
axios.interceptors.response.use(
    (response) => {
        NProgress.done();
        // Some example codes here:

        const res = response.data;
        if (res.code !== 10000) {
            console.error(res.msg);
            return Promise.reject(new Error(res.msg || 'Error'));
        } else {
            return response.data;
        }
    },
    (error) => {
        // message.error(error.message);
        return Promise.reject(error);
    },
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get<T>(url: string, params: any = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post<T>(url: string, params: any = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(params))
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
