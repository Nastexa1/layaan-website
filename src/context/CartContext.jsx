import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('cart') // cart | payment | confirm | done
  const [paymentMethod, setPaymentMethod] = useState('')

  function openCart() {
    setStep('cart')
    setIsOpen(true)
  }

  function closeCart() {
    setIsOpen(false)
  }

  function addItem(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setStep('cart')
    setIsOpen(true)
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) {
      removeItem(id)
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  function clearCart() {
    setItems([])
    setPaymentMethod('')
    setStep('cart')
  }

  function confirmOrder() {
    setStep('done')
    setItems([])
  }

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  )

  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  )

  const value = {
    items,
    isOpen,
    step,
    setStep,
    paymentMethod,
    setPaymentMethod,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    confirmOrder,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
