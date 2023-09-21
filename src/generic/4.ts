/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const pageProps: IProps = { title: 'Sample Page' };
const page = new Page(pageProps);
page.pageInfo();

export {};
