'use strict';

// #1、DOMについて
// DOMとはHTMLを読み込むと内部的にDOMと呼ばれるデータ構造ができ、その内容に応じてページが描画される

// {
//   function update() {
//     document.querySelector('h1').textContent = 'Changed!';
//     document.querySelector('#target').textContent = 'Changed!';
//     document.getElementById('target').textContent = 'Changed!';
//   }
//   setTimeout(update, 1000);
// }
// #2、要素の操作
// DOMはdocumentという特殊なオブジェクトを扱える
// documentはHTMLの要素を取得する
// 文章内から特定の要素を取得するにはquerySelector()というメソッドを使い、中には要素のセレクターを渡せば良い
// 中身のテキストは.textContentで表現できるのでこれに文字列を代入する
// setTimeout()でupdateを1000ミリ秒後つまり1秒後に呼び出す
// また、h1のid属性をtargetにすると#targetとすることもでき、getElementById()というメソッドを使いtargetとしても良い





// {
//   function update() {
//     // document.getElementById('target').textContent = 'Changed!';
//     // document.querySelector('p').textContent = 'Changed!';
//     // document.querySelectorAll('p')[1].textContent = 'Changed!';
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです！`;
//     });
//   }
//   setTimeout(update, 1000);
// }
// #3、複数の要素の取得
// querySelector('p')としたら三つあるpタグの中から一番最初のだけが変わる
// querySelector()はセレクターで見つかった要素のうち最初のものだけしか取得できないから
// 全て取得したい場合はquerySelectorAll()とする
// 何番目かを指定したい場合はquerySelectorAll('p')[1]としてあげる、この場合は２番目
// また、querySelectorAll()にはforEach()が使える
// id 属性が付いていたら getElementById() 、 id 属性がなければ querySelector() か querySelectorAll() を使う




// #4、要素の取得方法
// idやセレクターを指定するのではなくDOMツリーの階層関係から取得する方法
// 動画を見た方がいい




// { 
//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'Changed!';
//   });
// }
// #5、addEventListener()を使う
// ボタンをクリックしたら処理が行われるようにする
// id が付いていなくて、単一の要素なので document.querySelector()でセレクターは button 要素
// addEventListener()このメソッドは第一引数にイベントの種類を文字列で、今回はクリックした時としたいのでclickとする
// 第二引数はclickした時に実行したい処理を関数として渡す、今回はupdate()の関数をアロー関数として渡す




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     targetNode.textContent = 'Changed';
//     targetNode.title = 'This is title!';
//     targetNode.style.color = 'red';
//     targetNode.style.backgroundColor = 'skyblue';
//   })
// }
// #6、要素の属性の操作
// targetNode.title = 'This is title!'; をtitleプロパティにするとマウスをかざすと（マウスホバー）文字が出る今回は This is title!
// また、styleの後に.でつなげてcssのプロパティをかける
// また、cssのプロパティが-で区切られてる時は-を消してその後の文字の最初を大文字にする
// ただ、こちらのJavaScriptでスタイルのことを書くことはあまりない、CSSに任せる





// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     // ①targetNode.className = 'my-color';
//     // ②targetNode.className = 'my-color my-border';
// });
// }
// #7、classNameを操作
// ①CSSの方で.my-color .my-borderで文字色と背景色をセットし、Javaの方でクリックしたら、このクラスがtargetに着くようにする
// その場合属性は同名のプロパティで扱えるのでclassにmy-colorを代入するのですが、classNameにしてあげる必要がある
// ②また、すでに要素に他の要素がついていた場合（今回はmy-border）はclassNameの属性が丸々書き換わってしまうのでCSSの方が上書きされてしまうのでmy-colorの後に my-borderを付け足す





// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     // targetNode.className = 'my-color my-border';
//     // ①targetNode.classList.add('my-color')
//     // ②if (targetNode.classList.contains('my-color') ===true) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//     // ③targetNode.classList.toggle('my-color');
//   });
// }
// #8、classListを使ってみよう
// ①classListプロパティを使い、add('my-color')としてあげれば既存のクラスにmy-colorを付け足してくれるのでmy-borderを書く必要はない（h1に直接my-borderのクラスがついている）
// ②ある要素に特定のクラスがついているかどうかを調べることもできる
// classListの後にcontains()をつけるとtrue、falseで返す
// 条件分岐でmy-colorかついていたら外す、外すにはremove()、ついていなかったらつけるという処理を行う、つけるにはadd()
// ③classList.toggle()としてあげると②と全く同じ処理をしてくれる





// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     // ①targetNode.textContent = 'Dotinstall';
//     // ②targetNode.textContent = targetNode.dataset.translation;
//   });
// }
// #9、カスタムデータ属性
// runボタンを押したらh１の英訳が表示
// ①targetNode.textContentで変えられる
// ②HTMLのカスタムデータを使う、HTMLのh1の要素の方にdata-から始まっていれば独自の属性をつけられるのでdata-translation属性を作り、値をDotinstallにする
// これにjavaでアクセスするにはdata-translationとするのではなくクラス属性とカスタムデータ属性は例外的に違う書き方で、dataset.translationとしてあげる




