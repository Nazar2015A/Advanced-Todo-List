import axios, { AxiosStatic, AxiosRequestConfig } from 'axios';
import { STORAGE_KEYS } from '../../modules/common/consts/app-keys.const';

export class HttpService {
  private readonly baseUrl: string;

  private readonly fetchingService: AxiosStatic;

  private readonly apiVersion: string;

  constructor(
    baseUrl = process.env.REACT_APP_BASE_URL,
    fetchingService = axios,
    apiVersion = process.env.REACT_APP_API_VERSION
  ) {
    this.baseUrl = baseUrl as string;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion as string;
  }

  private getFullApiUrl(url?: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url || ''}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem(STORAGE_KEYS.TOKEN)}`
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: AxiosRequestConfig) {
    return configWithoutDataAndUrl;
  }

  async get<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  async put<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put<T>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  async post<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  async delete<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete<T>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
