import axios from "axios";
import { UnsplashImage } from "./components/App/App.type";

const ACCESS_KEY = "vC_IV0ThH0s_ufETrBgaw59-mcOgxBtLqNUStBqmC_8";

axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchGalleryResult {
  images: UnsplashImage[];
  totalPages: number;
}

interface UnsplashApiResponse {
  results: UnsplashImage[];
  total_pages: number;
}
export const fetchGallery = async (
  typeImg: string,
  currentPage: number
): Promise<FetchGalleryResult> => {
  const response = await axios.get<UnsplashApiResponse>("/search/photos", {
    params: {
      query: typeImg,
      page: currentPage,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
