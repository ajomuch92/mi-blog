<ul>
  {#each pages as page}
    <li>
      <a href={`pages/${page.slug}_${page.id}`}>{page.title?.rendered}</a>
    </li>
  {/each}
</ul>

<script lang="ts">
	import type { AxiosRequestConfig } from "axios";
	import { getPages } from "../services/PagesService";
	import type Page from '../models/interfaces/Pages';

  let pages: Page[] =[];

  const getInitialPages = () => {
    const params: AxiosRequestConfig = {
      params: {
        '_fields': 'id,title,status, slug'
      }
    };
    getPages(params).then((response) => {
      pages = response.data;
    });
  }

  getInitialPages();
</script>