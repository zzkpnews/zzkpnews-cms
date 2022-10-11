import { Input, Progress, Select, Switch, Upload } from '@arco-design/web-react';
import { useEffect, useRef, useState } from 'react';
import { IconEdit, IconPlus } from '@arco-design/web-react/icon';
import Engine, { EngineInterface } from '@aomao/engine';
import Toolbar, { ToolbarPlugin, ToolbarComponent } from '@aomao/toolbar';

interface ArticleEditorProps {
  mode: 'new' | 'update';
}

const ArticleEditor = () => {
  const [file, setFile] = useState<any>();
  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;

  //编辑器容器
  const ref = useRef<HTMLDivElement | null>(null);
  //引擎实例
  const [engine, setEngine] = useState<EngineInterface>(new Engine(ref.current!, { plugins: [ToolbarPlugin], cards: [ToolbarComponent] }));
  //编辑器内容
  const [content, setContent] = useState<string>('Hello word!');

  // useEffect(() => {
    // if (!ref.current) return;
    //实例化引擎
    // const engine = new Engine(ref.current, { plugins: [ToolbarPlugin], cards: [ToolbarComponent] });
    //设置编辑器值
    engine.setValue(content);
    //监听编辑器值改变事件
    engine.on('change', () => {
      const value = engine.getValue();
      setContent(value);
      console.log(`value:${value}`);
    });
    //设置引擎实例
    setEngine(engine);
  // }, []);

  const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];
  return (
    <div className="">
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
          <div className="tw-my-1">引言</div>
          <Input.TextArea placeholder="Please enter ..." style={{ height: 80 }} />
        </div>
      </div>
      <div className="tw-mx-0" style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar engine={engine!} items={[['collapse'], ['bold']]} />
        <div ref={ref} />;
      </div>
      <div style={{ margin: 12, display: 'inline-block' }}>
        <span>专栏：</span>
        <Select options={options} defaultValue="Beijing" placeholder="Select city" style={{ width: 300 }} />
      </div>
      <div style={{ margin: 12, display: 'inline-block' }}>
        <span className="tw-my-auto">SEO推送：</span>
        <Switch className={'tw-my-auto'} />
      </div>
    </div>
  );
};

export default ArticleEditor;
