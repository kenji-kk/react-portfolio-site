import { memo ,VFC }  from 'react';

import './Pages.css';

export const Skill: VFC = memo(() => {
  return (
    <>
    <div className="skillImage"></div>
    <div className="skillWrap">
      <div className="skillLeftWrap">
          <div>
            <div>
             <img src="../../../../../images/html-5.svg" alt="" className="skillHtml"/>
            </div>
            <p>これまで数々の作品で扱ってきたので、複雑なwebサイトの枠組みを作ることが出来ます。</p>
          </div>
          <div>
            <div>
              <img src="../../../../../images/css-3.svg" alt="" className="skillCss"/>
            </div>
            <p>基本的な装飾に加えて、アニメーションなどの複雑なデザインをすることも出来ます。</p>
          </div>
          <div>
            <div>
              <img src="../../../../../images/javascript.svg" alt="" className="skillJava"/>
            </div>
            <p>基本的な文法に加えてES６で加えれらた構文も扱うことができます。またDOM操作によってサイトに動きをつけることも可能です。</p>
          </div>
          <div>
            <div>
              <img src="../../../../../images/react.svg" alt="" className="skillReact"/>
            </div>
            <p>ReactによってSPAを作ることができます。本ポートフォリオサイトでも使われています。</p>
          </div>
      </div>
      <div className="skillRightWrap"> 
         <div>
           <div>
            <img src="../../../../../images/typescript-icon.svg" alt="" className="skillType"/>
           </div>
           <p>typescriptによって型を宣言するのでバグが起こりにくくなります。本ポートフォリオサイトでも使われています。</p>
          </div>
          <div>
            <div>
             <img src="../../../../../images/ruby.svg" alt="" className="skillRuby"/>
            </div>
            <p>Railsを扱うために基本的な文法は押さえています。</p>
          </div>
          <div>
            <div>
              <img src="../../../../../images/rails.svg" alt="" className="skillRails"/>
            </div>
            <p>RailsによってWEBアプリを作ることができます。</p>
          </div>
          <div>
            <div>
              <img src="../../../../../images/python.svg" alt="" className="skillPython"/>
            </div>
            <p>pythonでアルゴリズムの勉強をしています。</p>
          </div>
      </div>
    </div>
    </>
  )
});

