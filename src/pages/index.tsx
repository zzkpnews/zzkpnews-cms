import ArticleEditor from '../components/ArticleEditor';
import SideNav from '../components/SideNav';
import TopBar from '../components/TopBar';
import WriteArticlePage from './WriteArticle';

const IndexPage = () => {
  return (
    <div className="tw-min-h-screen tw-bg-gray-50 tw-flex">
      <SideNav />
      <div>
        <WriteArticlePage/>
      </div>
    </div>
  );
};

export default IndexPage;
