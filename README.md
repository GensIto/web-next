

## `/pages/`を`src/pages/`に移動

Next.js 9.1以降からsrcディレクトリが自動で認識されるようになりました。ルートディレクトリはごちゃごちゃしがちなので移動しておいた方が見やすいかと思います。

### tsconfig.json

baseUrl, pathsの設定
https://nextjs.org/docs/advanced-features/module-path-aliases

---

## Sassの利用

「絶対につまづかないNext.jsのはじめかた【TypeScript + Dart Sass】」 [https://zenn.dev/1101hiroki_n/articles/6caa4ab7b71cc2b7f629](https://zenn.dev/1101hiroki_n/articles/6caa4ab7b71cc2b7f629) (参照: 2022-03-09)  
`8. Sass(SCSS)をインストール`からが参考になります。

Next.js的にはCSS Modules（チュートリアルのindex.tsx(jsx)で使われている、コンポーネント単位でCSSを読み込んで使う方法）を推奨しているみたいですが、  
会社の体制的に、サイト公開後に別の人がCSSだけ編集するという場合があり、そこを考慮するとCSS Modulesを採用するとNext.jsを理解している人間しかCSSを触れないことになってしまうため、  
CSSは今まで通りグローバルな扱いをする、大きな1つのファイルで運用していった方が良いと思います。  
実際にCSS Modulesは使わず従来のCSS設計で制作、運用しているケースが（Next.jsではなくReactですが）紹介されていたので、次の記事がCSS Modulesの問題点や、Next.js(React)環境におけるCSSの考え方など参考になるかと思います。

▼CSS Modulesの問題点

> CSS ModulesはCSSクラスの出力順序がJavaScript側の参照順に依存しているため、JavaScriptの変更でカスケード順が変わると予期せぬスタイル崩れが起こる恐れもあります。

「ITCSSを採用して共同開発しやすいCSS設計をZOZOTOWNに導入した話」 [https://techblog.zozo.com/entry/itcss-to-zozotown](https://techblog.zozo.com/entry/itcss-to-zozotown) (参照: 2022-03-24)

### CSS Modulesについて（補足）

「[jQueryを卒業したかった僕がReact StaticでReactをイチから学んでWebサイトを作った話](https://nulab.com/ja/blog/typetalk/how-to-make-website-with-react-static/)」ではstyled-components(CSS in JS)で説明されていますが、Next.js的にはCSS Modulesを推しているみたいなので(使うなら)こちらでいった方が良いと思います。

https://nextjs.org/docs/basic-features/built-in-css-support#sass-support  
https://zenn.dev/catnose99/scraps/5e3d51d75113d3

---

## 型定義について

「【検証】React.FC と React.VFC はべつに使わなくていい説」 [https://kray.jp/blog/dont-have-to-use-react-fc-and-react-vfc/](https://kray.jp/blog/dont-have-to-use-react-fc-and-react-vfc/) (参照: 2022-03-09)

---

## ファイル命名規則

> components配下は、  
> 第一階層のディレクトリ名は小文字  
> 第二階層以下のディレクトリ名はパスカル  
> コンポーネントのファイル名はパスカル  
> indexだけは小文字  
> components以外はケバブな感じ。

```
├── components
│   ├── auth
│   │   ├── ForgotPassword.tsx
│   │   ├── LoginView.tsx
│   │   ├── SignUpView.tsx
│   │   └── index.ts
│   ├── cart
│   │   ├── CartItem
│   │   │   ├── CartItem.module.css
│   │   │   ├── CartItem.tsx
│   │   │   └── index.ts
│   │   ├── CartSidebarView
│   │   │   ├── CartSidebarView.module.css
│   │   │   ├── CartSidebarView.tsx
│   │   │   └── index.ts
│   │   ├── ...
│   │   └── index.ts
```

「Next.jsプロジェクトでファイルの命名規則を調べる」 [https://zenn.dev/hrtk/scraps/ad027fd2cd50a1](https://zenn.dev/hrtk/scraps/ad027fd2cd50a1) (参照: 2022-03-17)

---

## 画像

```
下の画像はlayoutを"fixed", "intrinsic", "responsive"の3つのケースに対して、画像幅widthが viewport 幅よりも小さい場合と大きい場合でどのように表示されるかを比較したものです。 デフォルトでは"intrinsic"が適用されており、画像が viewport からはみ出ないようになります。 layout="fixed"は企業ロゴなど常に一定の大きさを保ちたいものに対して使用するのが良さそうです。 背景画像など viewport 幅に合わせて表示したい画像に対してはlayout="responsive"が有効です(css の background-image で画像を指定することも可能ですが、next/image の RFC でも指摘されているようにパフォーマンスの悪化が懸念されます)。
```

https://www.forcia.com/blog/001561.html

---

## _app.tsxを用いたカスタマイズ

> Next.jsは、Appコンポーネントを使用してページを初期化します。これをオーバーライドして、ページの初期化を制御できます。これにより、次のような驚くべきことができます。
>
> ページ変更間のレイアウトの永続化
> ページをナビゲートするときの状態の保持
> を使用したカスタムエラー処理componentDidCatch
> ページに追加データを挿入する
> グローバルCSSを追加する

「Advanced Features: Custom `App` | Next.js」 [https://nextjs.org/docs/advanced-features/custom-app](https://nextjs.org/docs/advanced-features/custom-app) (参照: 2022-03-25)

それぞれのページ(トップページなら`src/pages/index.tsx`)を形にしているのが`_app.tsx`です。  
下の項に出てきますが、複数のレイアウトを管理したり、全ページで読み込ませるCSSを設定したりするのがこのファイルです。  
次の項の`_document.tsx`も全体的なページの設定になるかと思いますが、`_app.tsx`の方が大きな役割を担っているイメージです。

---

## _document.tsxを用いたカスタマイズ

[src/pages/_document.tsx](src/pages/_document.tsx)

`_document.tsx`を作成してデフォルトの設定を上書きするカスタマイズは「カスタムドキュメント」などとも呼ばれます。

> Document コンポーネント を使うと、初期状態だと自動で追加される <html> や <body> に変更を加えることができます。

- 「2020年初頭における Next.js をベースとしたフロントエンドの環境構築」 [https://zenn.dev/higa/articles/d7bf3460dafb1734ef43](https://zenn.dev/higa/articles/d7bf3460dafb1734ef43) (参照: 2022-03-18)

> Next.jsではindex.jsファイルにheadタグ、bodyタグ、scriptタグなどを記述しなくても自動で設定されています。_document.jsファイルを利用することでheadタグ、bodyタグなど全ページに共通する設定をカスタマイズすることができるようになります。

「入門者は基礎からしっかり理解Next.jsの基本(React)」 [https://reffect.co.jp/react/next-js](https://reffect.co.jp/react/next-js) (参照: 2022-03-25)

このテンプレートでは特に大きくは変更を加えていないですが、htmlタグにlang属性を追加しています。

---

## Layoutsの利用

[src/components/layout/Main.tsx](src/components/layout/Main.tsx)

> Layoutsとは🤔
> ページ間で共通のコンポーネントを定義する機能
> HeaderやFooterなどはほぼ全ページ同じレイアウトを使うけど、ページコンポーネントに直接書くとコンポーネントの状態（入力値など）が保持できないのでページコンポーネントの外に書くことでレイアウトの状態も保持できる🤝

「Next.jsのLayouts」 [https://zenn.dev/hisho/articles/fe9f4ec4a8e691](https://zenn.dev/hisho/articles/fe9f4ec4a8e691) (参照: 2022-03-24)

> 複数のページを持つアプリケーションを開発する場合にヘッダーやフッターなどのコンテンツは共通でメインのコンテンツのみ異なるというケースがほとんどだと思います。共通のコンテンツとメインコンテンツを分けるためにレイアウトを利用することができます。もしレイアウトを設定しない場合はヘッダーやフッターの更新を行った際にすべてのページで更新を行う必要がでてきます。そのため複数ページを持つアプリではレイアウトの設定は必須となります。

- 「入門者は基礎からしっかり理解Next.jsの基本(React)」 [https://reffect.co.jp/react/next-js](https://reffect.co.jp/react/next-js) (参照: 2022-03-25)

---

## 参考まとめ

### Next.js

「[Next.js 日本語翻訳プロジェクト](https://nextjs-ja-translation-docs.vercel.app/)」は情報が古いため注意。  
「 [入門者は基礎からしっかり理解Next.jsの基本(React)](https://reffect.co.jp/react/next-js)」はかなり参考になりますが、TypeScriptを利用した解説ではないので注意。

- 「入門者は基礎からしっかり理解Next.jsの基本(React)」 [https://reffect.co.jp/react/next-js](https://reffect.co.jp/react/next-js) (参照: 2022-03-25)
- 「Next.js + TypeScriptで雛形環境をテンプレート化する」 [https://zenn.dev/lou/articles/a999ea8270a2f9](https://zenn.dev/lou/articles/a999ea8270a2f9) (参照: 2022-03-08)
- 「Next.JS + microCMS でブログを作った話 (with Pug.JS) セットアップ編」 [https://www.kotokaze.net/blogs/ykfwzg44vvs7](https://www.kotokaze.net/blogs/ykfwzg44vvs7) (参照: 2022-03-08)
- 「Next.jsにCSS Modulesを導入する」 [https://zenn.dev/catnose99/scraps/5e3d51d75113d3](https://zenn.dev/catnose99/scraps/5e3d51d75113d3) (参照: 2022-03-08)
- 「Next.js 日本語翻訳プロジェクト」 [https://nextjs-ja-translation-docs.vercel.app/](https://nextjs-ja-translation-docs.vercel.app/) (参照: 2022-03-08) 
- 「Next.jsプロジェクトでファイルの命名規則を調べる」 [https://zenn.dev/hrtk/scraps/ad027fd2cd50a1](https://zenn.dev/hrtk/scraps/ad027fd2cd50a1) (参照: 2022-03-17)
- 「Next.js でメタ情報を出し分ける方法（SG/SSR/CSR）」 [https://www.to-r.net/media/next-meta-tags/](https://www.to-r.net/media/next-meta-tags/) (参照: 2022-03-18)
- 「2020年初頭における Next.js をベースとしたフロントエンドの環境構築」 [https://zenn.dev/higa/articles/d7bf3460dafb1734ef43](https://zenn.dev/higa/articles/d7bf3460dafb1734ef43) (参照: 2022-03-18)
- 「Next.jsのLayouts」 [https://zenn.dev/hisho/articles/fe9f4ec4a8e691](https://zenn.dev/hisho/articles/fe9f4ec4a8e691) (参照: 2022-03-24)
- 「ITCSSを採用して共同開発しやすいCSS設計をZOZOTOWNに導入した話」 [https://techblog.zozo.com/entry/itcss-to-zozotown](https://techblog.zozo.com/entry/itcss-to-zozotown) (参照: 2022-03-24)

### React

- 「jQueryを卒業したかった僕がReact StaticでReactをイチから学んでWebサイトを作った話」 [https://nulab.com/ja/blog/typetalk/how-to-make-website-with-react-static/](https://nulab.com/ja/blog/typetalk/how-to-make-website-with-react-static/) (参照: 2022-03-17)

---

## Next.jsで構築されているサイト

- https://www.anycolor.co.jp/
- https://www.nijisanji.jp/
- https://tmi-recruit.com/

---

## 番外編 Pugを使う

長らくPugを使ってコーディングしていたので、JSXもPugで書きたいと思い軽く挑戦しましたが、うまく動きませんでした。  
Next.jsではPugの使用を想定していないらしく、Reactのプラグインで対応しても無理が生じる場合があるみたいです。  
あまり情報もでてこないことから、PugをNext.jsで使うことは少数派の手法かもしれないので、大人しくJSXでやっていくのが無難かもしれません。

> 複雑なケースではPugの場合では用意されている構文での対応では無理が生じたり、コンポーネントのコード量が増えてしまうなど限界がきてしまうことがあります。

「ReactのJSXでコンポーネントを使って効率のよい静的HTMLコーディング」 [https://designsupply-web.com/media/programming/6999/](https://designsupply-web.com/media/programming/6999/) (参照: 2022-03-09)

### 参考

- 「Next.JS + microCMS でブログを作った話 (with Pug.JS) セットアップ編」 [https://www.kotokaze.net/blogs/ykfwzg44vvs7](https://www.kotokaze.net/blogs/ykfwzg44vvs7) (参照: 2022-03-08)
- 「kotokaze/blog」 [https://github.com/kotokaze/blog](https://github.com/kotokaze/blog) (参照: 2022-03-09)
  - ▲実際の設定などのコード(GitHubリポジトリ)  


### Pug用に.baberlrc.jsonの追加(一応)

> next/babel はプリセットを含みます:
> Npreset-env
> preset-react
> preset-typescript
> plugin-proposal-class-properties
> plugin-proposal-object-rest-spread
> plugin-transform-runtime
> styled-jsx

- 「Babel 設定のカスタマイズ」 [https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/customizing-babel-config](https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/customizing-babel-config) (参照: 2022-03-09)
- 「Customizing Babel Config」 [https://nextjs.org/docs/advanced-features/customizing-babel-config](https://nextjs.org/docs/advanced-features/customizing-babel-config) (参照: 2022-03-09)
