import ArticleEditor from '../components/ArticleEditor';
import SideNav from '../components/SideNav';
import TopBar from '../components/TopBar';
import WriteArticlePage from './WriteArticle';
import { Button } from '@arco-design/web-react';

const IndexPage = () => {
  return (
    <div className="tw-h-screen tw-bg-gray-50 tw-flex">
      <SideNav />
      <div className="tw-h-screen tw-overflow-y-scroll">
        <div className="tw-mx-10 tw-my-10">
          <WriteArticlePage />
          <div className='tw-flex tw-justify-end'>
            <Button className={"tw-ml-2"} type="secondary">暂存</Button>
            <Button className={"tw-ml-2"} type="primary">发表文章</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
