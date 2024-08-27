// import {TOKEN} from './consts.js';
import axios, {AxiosResponse} from 'axios';
import rateLimit from 'axios-rate-limit';

/**
 * Wraps http calls to handle rate limits and perform calls
 */
export class Http {
  public static client : any;

  /** Initialization method */
  public static init() {
    const axiosOptions: any = {
      baseURL: 'https://api.lobstr.io',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token b121cd3d2cfbd8dae634348695dc6efd71366ed1`,
      },
    };
    Http.client = rateLimit(axios.create(axiosOptions), {maxRPS: 1});
  }

  /**
   * Fetches data from the specified route
   * @param {string} cluster The route to fetch data from
   * @param {string} run The route to fetch data from
   * @return {any[]} The feteched data (all pages if any)
   */
  public static async fetchLobstr(cluster: string, run: string): Promise<any[]> {
    // https://api.lobstr.io/v1/results?cluster=8ba5622c0a7e45c3ac633f8eb862a77f&run=cc4423455c2c4c6f8095fb8ba3ace626&page=1&page_size=100
    let result: any[] = [];
    try {
      let page: number = 1;
      let totalPages: number = 0;
      do {
        const response: AxiosResponse = await Http.client.get('v1/results', {params: {cluster, run, page, page_size: 100}});
        result = result.concat(response.data.data);
        totalPages = response.data.total_pages;
        console.log(`Page ${page}/${totalPages} - ${response.data.data.length} résultats trouvés`);
        page++;
      } while (page <= totalPages);
    } catch (error) {
      console.error(error);
    }
    return result;
  }
}
