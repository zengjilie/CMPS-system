import "../../theme/main.scss";
import type { AppProps } from "next/app";
import { wrapper } from "../../redux/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  //@ts-ignore
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  return (
    <Provider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  );
}
