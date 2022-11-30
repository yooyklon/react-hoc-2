import Video, { VideoPopularContainer, VideoNewContainer } from "./Video";

import Article, {
  ArticlePopularContainer,
  ArticleNewContainer,
} from "./Article";

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        if (item.views < 100) {
          return <VideoNewContainer {...item} />;
        } else if (item.views > 1000) {
          return <VideoPopularContainer {...item} />;
        } else {
          return <Video {...item} />;
        }

      case "article":
        if (item.views < 100) {
          return <ArticleNewContainer {...item} />;
        } else if (item.views > 1000) {
          return <ArticlePopularContainer {...item} />;
        } else {
          return <Article {...item} />;
        }
    }
  });
}
