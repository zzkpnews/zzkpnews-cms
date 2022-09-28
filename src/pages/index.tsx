import ArticleEditor from '../components/ArticleEditor';
import SideNav from '../components/SideNav';
import TopBar from '../components/TopBar';
import WriteArticlePage from './WriteArticle';
import { Button } from '@arco-design/web-react';
import WriteVideo from './WriteVideo';

const IndexPage = () => {
  return (
    <div className="tw-h-screen tw-bg-gray-50 tw-flex">
      <SideNav />
      <div className="tw-h-screen tw-overflow-y-scroll">
        <div className="tw-mx-10 tw-my-10">
          <WriteVideo/>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
