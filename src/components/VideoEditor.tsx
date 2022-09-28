import { Button, Input } from '@arco-design/web-react';

const VideoEditor = () => {
  return (
    <div>
      <div style={{ height: 400 }}>
        <iframe
          title="aaa"
          src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=dcaf977d3337f8986a048c3fdfd25f65&tvId=2276245864917300&accessToken=2.ef9c39d6c7f1d5b44768e38e5243157d&appKey=8c634248790d4343bcae1f66129c1010&appId=1368&height=100%&width=100%"
          allowFullScreen={true}
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <Input style={{ margin: '5px 3px' }} addBefore="视频URL" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="标题" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="引题" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="副题" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="作者" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="编辑" placeholder="Please enter something" />
        <Input style={{ width: 350, margin: '5px 3px' }} addBefore="标签" placeholder="Please enter something" />
        <Input.TextArea placeholder="Please enter ..." style={{ minHeight: 64 }} />
      </div>
      <div className="tw-flex tw-justify-end tw-my-5">
        <Button className={'tw-ml-2'} type="secondary">
          暂存
        </Button>
        <Button className={'tw-ml-2'} type="primary">
          发表视频
        </Button>
      </div>
    </div>
  );
};

export default VideoEditor;
