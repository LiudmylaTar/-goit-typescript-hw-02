export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
  };
}
