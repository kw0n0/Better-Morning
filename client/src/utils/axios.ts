import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class Axios {
  private static instance: AxiosInstance;

  public static getInstance(): AxiosInstance {
    if (!Axios.instance) {
      const defaultOptions = {
        baseURL: 'http://localhost:8080',
        timeout: 10000,
      };

      Axios.instance = axios.create(defaultOptions);
    }
    return Axios.instance;
  }

  public static async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.getInstance().get<T>(url, config);
    return response.data;
  }

  public static async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.getInstance().post<T>(url, data, config);
    return response.data;
  }

  public static async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.getInstance().put<T>(url, data, config);
    return response.data;
  }

  public static async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.getInstance().delete<T>(url, config);
    return response.data;
  }
}

export default Axios;
