import { memo, useCallback, useState } from 'react';
import toast from 'react-hot-toast';

// Components
import {
  Button,
  ButtonType,
  Icon,
  IconType,
  Price,
  PriceType,
  Text
} from '@components/common';
import CartItem from './CartItem';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { totalPrices } from '@helpers/common';

// Constants
import { CONFIRM_MESSAGE } from '@constants/validate';


// Hooks
import { useMutationEditProductInCart } from '@hooks/useMutate';

// Styles
import './cartModal.css';
import { SizeType } from '@components/common/Text';

interface CartModalProps {
  carts: Product[];
  onToggleModal?: () => void;
}
const CartModal = ({
  carts,
  onToggleModal
}: CartModalProps) => {
  const { mutate: putProduct } = useMutationEditProductInCart();
  const [checkChangesQuantity, setCheckChangesQuantity] = useState(false);

  const handleCheckChangeQuantity = useCallback(() => {
    setCheckChangesQuantity(true)
  }, [checkChangesQuantity])

  const handleUpdateProduct = async (products: Product[]) => {
    const updatedProducts = [];
    for (const product of products) {
      const updatedProduct = await putProduct({
        ...product,
        quantity: product.quantity
      },
      {
        onError: (error) => {
          toast.error((error as { message: string }).message);
        },
        onSuccess: () => {
          updatedProducts.push(updatedProduct);
          toast.success(CONFIRM_MESSAGE.UPDATE_SUCCESS);
        },
      });
    }
  };

  return (
    <div data-testid='cart-modal' className='overlay'>
      <div className='cart'>
        <div className='cart-header'>
          <Text text='Cart' className='cart-text' />
          <Button
            ariaLabel='Close'
            children={<Icon iconName={IconType.close} />}
            type={ButtonType.btnIconPrimary}
            onClick={onToggleModal}
          />
        </div>
        <div className='card-body'>
          {carts.length
            ? <>
                {carts?.map((cartItem: Product) => (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    onChangeQuantity={handleCheckChangeQuantity}
                  />
                ))}
              </>
            : <Text
                text='No products in cart'
                type={SizeType.extraRegular}
                className='cart-message'
              />
            }
        </div>
        <hr />
        <div className='cart-footer'>
          <Text text='Subtotal' className='cart-text' />
          <Price value={totalPrices(carts)} type={PriceType.tertiary} />
        </div>
        <Button
          children='Update'
          className={checkChangesQuantity ? 'cart-update' : 'cart-disable'}
          disable={!checkChangesQuantity}
          onClick={() => handleUpdateProduct(carts)}
        />
      </div>
    </div>
  );
};

export default memo(CartModal);
