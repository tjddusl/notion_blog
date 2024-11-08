import post1 from '../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json'
import post2 from '../notion-data/127ce18c-fd83-805c-bebd-d6772e18bf02.json'

const posts = [
  {
    title: "첫번째 블로그 포스트",
    slug: "first-post",
    content: post1,
    date: "2024-11-08",
    description: "블로그를 시작하면서 점점 성장해나가길 . .",
    image: undefined
  },
  {
    title: "Naver Search Bar UX: Analysis and Implementation Guide",
    slug: "naver-search-bar-ux",
    content: post2,
    date: "2023-10-23",
    description: "Explore the UX analysis of Naver's search bar and strategies for replicating its features. The post examines the UX triggers, selection of search results, and the refreshing of result lists. It also compares coding approaches for implementing search bar functionalities, aiming for a concise and effective execution.",
    image: undefined
  }
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
