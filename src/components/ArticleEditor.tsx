import { Input, Progress, Select, Switch, Upload } from '@arco-design/web-react';
import '@wangeditor/editor/dist/css/style.css';

import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { useEffect, useState } from 'react';
import { IconEdit, IconPlus } from '@arco-design/web-react/icon';

interface ArticleEditorProps {
  mode: 'new' | 'update';
}

const ArticleEditor = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  const [html, setHtml] = useState('<p>hello</p>');
  const [file, setFile] = useState<any>();
  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;

  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>');
    }, 1500);
  }, []);

  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法

  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
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
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
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
