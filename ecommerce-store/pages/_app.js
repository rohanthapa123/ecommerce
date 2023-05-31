
import CartState from '@/context/CartState';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartState>
      <Component {...pageProps} />
      </CartState>
    </>
  );
}
