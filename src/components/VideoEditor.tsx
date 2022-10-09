import { Button, Input, Progress, Switch, Upload } from '@arco-design/web-react';
import { IconEdit, IconPlus } from '@arco-design/web-react/icon';
import { useState } from 'react';

const VideoEditor = () => {
  const [file, setFile] = useState<any>();
  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;
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
        <div className="tw-flex">
          <div className="tw-inline">
            <Upload
              tip="上传封面图"
              action="/"
              fileList={file ? [file] : []}
              showUploadList={false}
              onChange={(_, currentFile) => {
                setFile({
                  ...currentFile,
                  url: undefined,
                });
              }}
              onProgress={(currentFile) => {
                setFile(currentFile);
              }}
            >
              <div className={cs}>
                {file && file.url ? (
                  <div className="arco-upload-list-item-picture custom-upload-avatar">
                    <img src={file.url} />
                    <div className="arco-upload-list-item-picture-mask">
                      <IconEdit />
                    </div>
                    {file.status === 'uploading' && file.percent < 100 && (
                      <Progress
                        percent={file.percent}
                        type="circle"
                        size="mini"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translateX(-50%) translateY(-50%)',
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <div className="arco-upload-trigger-picture">
                    <div className="arco-upload-trigger-picture-text">
                      <IconPlus />
                      <div style={{ marginTop: 10, fontWeight: 600 }}>Upload</div>
                    </div>
                  </div>
                )}
              </div>
            </Upload>
          </div>
          <div className="tw-flex-auto">
            <div className='tw-my-1'>引言</div>
            <Input.TextArea placeholder="Please enter ..." style={{ height: 80 }} />
          </div>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-my-5 tw-my-3">
        <div style={{ display: 'inline-block' }}>
          <span className="tw-my-auto">SEO推送：</span>
          <Switch className={'tw-my-auto'} />
        </div>
        <div>
          <Button className={'tw-ml-2'} type="secondary">
            暂存
          </Button>
          <Button className={'tw-ml-2'} type="primary">
            发表视频
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
