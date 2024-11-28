import {
  useCallback,
  useState
} from 'react';
import toast from 'react-hot-toast';
import { shallow } from 'zustand/shallow';

// Interfaces
import { Product } from '@interfaces/product';
import { QuantityType } from '@interfaces/cart';

// Components
import {
  Button,
  ButtonType,
  Counter,
  Icon,
  IconType,
  Image,
  PopupDelete,
  Price,
  PriceType,
  Text,
  ThemeType
} from '@components/common';

// Stores
import { useCartStore } from '@stores/cart';
import { CONFIRM_MESSAGE } from '@constants/validate';

// Hooks
import { useMutationDeleteProduct } from '@hooks/useMutate';

interface CartItemProps {
  cartItem: Product;
  onChangeQuantity?: () => void;
}

const CartItem = ({
  cartItem,
  onChangeQuantity = () => {}
}: CartItemProps) => {
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);
  const { mutate: deleteProduct } = useMutationDeleteProduct();

  const [updateQuantity, deleteProductInCart] = useCartStore(
    (state) => [state.updateQuantity, state.deleteProductInCart],
    shallow
  );

  const handleIncrement = useCallback(() => {
    updateQuantity(cartItem.id, QuantityType.increment);
    onChangeQuantity();
  }, [cartItem]);

  const handleDecrement = useCallback(() => {
    updateQuantity(cartItem.id, QuantityType.decrement);
    onChangeQuantity();
  }, [cartItem]);

  const handleOpenModalConfirm = useCallback(() => {
    setOpenModalConfirm(!openModalConfirm);
  }, [openModalConfirm]);

  const handleDeleteCart = useCallback(() => {
    deleteProduct(cartItem.id, {
      onError: (error) => {
        toast.error((error as { message: string }).message);
      },
      onSuccess: () => {
        deleteProductInCart(cartItem.id);
        toast.success(CONFIRM_MESSAGE.DELETE_SUCCESS);
      }
    });
  }, []);

  return (
    <div data-testid='cart-item' className='cart-item'>
      <div className='cart-info'>
        <div className='cart-image'>
          <Image
            className='cart-image-item'
            url={cartItem?.image?.url}
            alt={cartItem.image.alt}
            width={130}
            height={130}
          />
        </div>
        <div className='cart-description'>
          <Text text={cartItem.name} className='cart-text' />
          <Text
            text={`Color: ${cartItem.color}`}
            type={ThemeType.highlightPrimary}
            className='cart-color'
          />
          <Text
            text={`Size: ${cartItem.size}`}
            type={ThemeType.highlightPrimary}
            className='cart-size'
          />
          <div className='card-quantity'>
            <Counter
              value={cartItem?.quantity}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
            <Button
              ariaLabel='Trash'
              children={<Icon iconName={IconType.trash} />}
              type={ButtonType.btnIconSecondary}
              className='cart-btn'
              onClick={handleOpenModalConfirm}
            />
            {openModalConfirm && (
              <PopupDelete
                title={CONFIRM_MESSAGE.CONFIRM_DELETE}
                onCancel={handleOpenModalConfirm}
                onDelete={handleDeleteCart}
              />
            )}
          </div>
        </div>
      </div>
      <Price
        value={cartItem.price}
        type={PriceType.tertiary}
        className='cart-price'
      />
    </div>
  );
};

export default CartItem;
