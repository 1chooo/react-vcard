import {
  descendBlogByDate, 
  // ascendBlogByDate,
} from "../utils/sortBlogsByDate";


export const blogTags = [
  "All",
  "DevOps",
  "DevEnv",
  "Projects",
  // "Interview",
  "Unboxing",
  "Coding",
  "LeetCode"
];

export interface Post {
  title: JSX.Element;
  category: string;
  imageUrl: string;
  date: string;
  content: JSX.Element;
  link: string;
  alt: string;
}

export const postsData: Post[] = [
  {
    title: (
      <h3 className="h3 blog-item-title">
        如何在 AWS EC2 Amazon Linux 2 上安裝 Docker
      </h3>
    ),
    category: 'DevOps',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-ops/amazon-linux-2-install-docker.png",
    date: 'Apr, 11, 2024',
    content: (
      <p className="blog-text">
        在我們需要做 DevOps 時，我們常常會需要用到 Containerization 技術，而 Docker 是目前最為廣泛使用的 Containerization 技術之一。同時我們也可能會用到雲端的算力來幫助我們完成這些工作，因此我們今天將會介紹如何在 Amazon Linux 2 上安裝 Docker。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E5%9C%A8-aws-ec2-amazon-linux-2-%E4%B8%8A%E5%AE%89%E8%A3%9D-docker-15ebdc2b7e7b',
    alt: '如何在 AWS EC2 Amazon Linux 2 上安裝 Docker'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        Git Commit Message 到底怎麼寫才優美？
      </h3>
    ),
    category: 'DevOps',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-ops/git-good-commit-look-like.png",
    date: 'Mar, 26, 2024',
    content: (
      <p className="blog-text">
        在團隊用 Git 協作中，Commit Message 是很重要的一環，好的 Commit 可以讓我們的專案更容易維護，讓我們更容易了解專案的開發過程，我們可以想像是程式碼的註解，不過是針對專案改動的註解。所以我們想要用這個篇幅來介紹一些寫 Commit 的技巧，讓我們的 Commit 更優美。
      </p>
    ),
    link: 'https://medium.com/@1chooo/git-commit-message-%E5%88%B0%E5%BA%95%E6%80%8E%E9%BA%BC%E5%AF%AB%E6%89%8D%E5%84%AA%E7%BE%8E-5b789157b549',
    alt: 'Git Commit Message 到底怎麼寫才優美？'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        AWS — Comparing Inbound Rules: Security Group vs. Network Access Control List (NACL)
      </h3>
    ),
    category: 'DevOps',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-ops/aws-security-group-nacl.png",
    date: 'Mar, 22, 2024',
    content: (
      <p className="blog-text">
        During a meeting, we explored a scenario: <b>"If we disable the inbound rule of the Network Access Control List (NACL), the connection will be interrupted. However, if we turn off inbound traffic in the Security Group, would we still be able to connect?"</b> Surprisingly, the answer is YES.
      </p>
    ),
    link: 'https://medium.com/@1chooo/comparing-inbound-rules-aws-security-group-vs-network-access-control-list-nacl-5238214bdba7',
    alt: 'AWS — Comparing Inbound Rules: Security Group vs. Network Access Control List (NACL)'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        Three Methods to Find Your Public IP Address From Linux Command Line
      </h3>
    ),
    category: 'DevOps',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-ops/three-methods-to-find-your-public-ip-address-from-linux-cmd-line.png",
    date: 'Mar, 21, 2024',
    content: (
      <p className="blog-text">
        When we want to connect a remote host through SSH today, sometimes we need to know our public IP address so that we can identify the IP address we are connecting from to the remote host. This article will teach you how to find your public IP address on a Linux system using commands.
      </p>
    ),
    link: 'https://medium.com/@1chooo/three-methods-to-find-your-public-ip-address-from-linux-command-line-14b50bbaf73c',
    alt: 'Three Methods to Find Your Public IP Address From Linux Command Line'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        如何在 MacOS 安裝 Java + VS Code 開發組合環境
      </h3>
    ),
    category: 'DevEnv',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-env/macos-java-dev-env-with-vscode.png",
    date: 'Mar, 11, 2024',
    content: (
      <p className="blog-text">
        我們會示範如何在 MacOS 上安裝 Java 開發環境，並且透過 Visual Studio Code 來開發 Java 程式，這樣我們可以脫離過去 eclipse 的開發環境，並且可以使用更簡潔的 VSCode 來開發 Java 程式。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E5%9C%A8-macos-%E5%AE%89%E8%A3%9D-java-vscode-%E9%96%8B%E7%99%BC%E7%B5%84%E5%90%88%E7%92%B0%E5%A2%83-ebeae00c20e3',
    alt: '如何在 MacOS 安裝 Java + VS Code 開發組合環境'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        🖐🏻 五個學校沒教但我教的 Python 好習慣
      </h3>
    ),
    category: 'Coding',
    imageUrl: "https://blog.1chooo.com/images/cover/coding-style/python-5-tips.png",
    date: 'Mar, 16, 2024',
    content: (
      <p className="blog-text">
        在學習基礎程式語言中，我們往往只在乎程式能不能運行，會不會基礎語法，然而很多人沒有累積到專案中實際撰寫的好習慣，因此這篇文章中，我將會討論五個 Python 的好習慣，並且這些事我已經落實在專案中的 Coding Style 希望透過這次的分享能夠幫助看到這邊的你寫出更好的程式碼。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E4%BA%94%E5%80%8B%E5%AD%B8%E6%A0%A1%E6%B2%92%E6%95%99%E4%BD%86%E6%88%91%E6%95%99%E7%9A%84-python-%E5%A5%BD%E7%BF%92%E6%85%A3-c76e6d48f30c',
    alt: '🖐🏻 五個學校沒教但我教的 Python 好習慣'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        程式小白對專案還沒想法嗎？來做貪吃蛇玩吧！
      </h3>
    ),
    category: 'Projects',
    imageUrl: "https://blog.1chooo.com/images/cover/projects/snake-game/snake-game.png",
    date: 'Aug, 24, 2022',
    content: (
      <p className="blog-text">
        還記得當時剛學習程式語言的時候，對於什麼知識都不懂，連搜尋能力也沒有，常常搜不到關鍵字，問題也解決不了，不過當時懵懂無知的狀態，完成了基礎貪吃蛇的小遊戲，所以決定撰寫一篇文章來記錄當時的過程。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%81%9A%E5%80%8B%E5%B0%8F%E8%B2%AA%E5%90%83%E8%9B%87%E4%BE%86%E7%8E%A9%E5%90%A7-5e80b4a3a583',
    alt: '程式小白對專案還沒想法嗎？來做貪吃蛇玩吧！'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        如何在 Mac 安裝 <code>Node.js</code> & <code>NPM</code>
      </h3>
    ),
    category: 'DevEnv',
    imageUrl: "https://blog.1chooo.com/images/cover/dev-env/mac-install-nodejs-npm/mac-install-nodejs-npm.png",
    date: 'Jan, 04, 2024',
    content: (
      <p className="blog-text">
        新年剛好把 MacOS 重灌，讓這台老 macbook pro 2020 重獲新生，也藉此機會重新建置開發環境。因此我將以 Mac 作為示範如何在成功安裝 Node.js，並且展示成功結果！
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E5%9C%A8-mac-%E5%AE%89%E8%A3%9D-node-js-npm-3d7101d998f4',
    alt: '如何在 Mac 安裝 Node.js & NPM'
  },
];

descendBlogByDate(postsData);
// ascendBlogByDate(postsData);