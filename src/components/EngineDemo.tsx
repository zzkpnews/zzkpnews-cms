import React, { useEffect, useRef, useState } from 'react';
import Engine, { EngineInterface } from '@aomao/engine';
import Toolbar, { ToolbarPlugin, ToolbarComponent } from '@aomao/toolbar';

const EngineDemo = () => {
  //编辑器容器
  const ref = useRef<HTMLDivElement | null>(null);
  //引擎实例
  const [engine, setEngine] = useState<EngineInterface>();
  //编辑器内容
  const [content, setContent] = useState<string>('Hello word!');

  useEffect(() => {
    if (!ref.current) return;
    //实例化引擎
    const engine = new Engine(ref.current, {
      plugins: [ToolbarPlugin],
      cards: [ToolbarComponent],
    });
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
  }, []);

  return (
    <>
      {engine && <Toolbar engine={engine} items={[['collapse'], ['bold']]} />}
      <div ref={ref} />
    </>
  );
};
export default EngineDemo;
