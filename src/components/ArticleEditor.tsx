import { Input, InputTag, Select, Switch } from '@arco-design/web-react';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import React, { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

interface ArticleEditorProps {
  mode: 'new' | 'update';
}

const ArticleEditor = () => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>');

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>');
    }, 1500);
  }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: '请输入内容...',
  };

  // 及时销毁 editor ，重要！
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
      <Input.TextArea placeholder="Please enter ..." style={{ minHeight: 64, width: 350 }} />
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
