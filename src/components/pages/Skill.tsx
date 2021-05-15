import { memo ,VFC }  from 'react';

import './Pages.css';

export const Skill: VFC = memo(() => {
  return (
    <>
    <div className="skillImage"></div>
    <div className="skillWrap">
      <div className="skillLeftWrap">
          <div>
            <img src="../../../../../images/html-5.svg" alt="" />
            <p>これまで数々の作品で扱ってきたので、複雑なwebサイトの枠組みを作ることが出来ます。</p>
          </div>
          <div>
            <img src="../../../../../images/css-3.svg" alt="" />
            <p>基本的な装飾に加えて、アニメーションなどの複雑なデザインをすることも出来ます。</p>
          </div>
          <div>
            <img src="../../../../../images/javascript.svg" alt="" />
            <p>基本的な文法に加えてES６で加えれらた構文も扱うことができます。またDOM操作によってサイトに動きをつけることも可能です。</p>
          </div>
          <div>
            <img src="../../../../../images/react.svg" alt="" />
            <p>ReactによってSPAを作ることができます。本ポートフォリオサイトでも使われています。</p>
          </div>
      </div>
      <div className="skillRightWrap"> 
         <div>
           <img src="../../../../../images/typescript-icon.svg" alt="" />
           <p>typescriptによって型を宣言するのでバグが起こりにくくなります。本ポートフォリオサイトでも使われています。</p>
          </div>
            <img src="../../../../../images/ruby.svg" alt="" />
            <p>Railsを扱うために基本的な文法は押さえています。</p>
          <div>
            <img src="../../../../../images/rails.svg" alt="" />
            <p>RailsによってWEBアプリを作ることができます。</p>
          </div>
          <div>
            <img src="../../../../../images/python.svg" alt="" />
            <p>pythonでアルゴリズムの勉強をしています。</p>
          </div>
      </div>
    </div>
    </>
  )
});

