import { useRouter } from 'next/dist/client/router';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return <SingleProduct id={productId} />;
}
