import { Button } from '@arco-design/web-react';
import ArticleEditor from '../components/ArticleEditor';

const WriteArticlePage = () => {
  return (
    <div className="">
      <ArticleEditor />
      <div className="tw-flex tw-justify-end">
        <Button className={'tw-ml-2'} type="secondary">
          暂存
        </Button>
        <Button className={'tw-ml-2'} type="primary">
          发表文章
        </Button>
      </div>
    </div>
  );
};
export default WriteArticlePage;
