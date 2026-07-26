import { useCart } from '../context/CartContext'

const paymentMethods = [
  {
    id: 'evc',
    name: 'EVC Plus',
    desc: 'Hormuud — lacag mobile',
  },
  {
    id: 'zaad',
    name: 'Zaad',
    desc: 'Telesom — lacag mobile',
  },
  {
    id: 'edahab',
    name: 'eDahab',
    desc: 'Somtel — lacag mobile',
  },
  {
    id: 'cash',
    name: 'Cash on Delivery',
    desc: 'Lacag marka alaabta laaga keeno',
  },
]

function formatMoney(n) {
  return `$${n.toFixed(2)}`
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    step,
    setStep,
    paymentMethod,
    setPaymentMethod,
    updateQty,
    removeItem,
    confirmOrder,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  if (!isOpen) return null

  const selectedPayment = paymentMethods.find((p) => p.id === paymentMethod)

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        aria-label="Xir cart"
        className="absolute inset-0 bg-black/50"
        onClick={closeCart}
      />

      <aside className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-fade-up">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-display text-xl text-[#0A192F]">
              {step === 'cart' && 'Dambiishaada'}
              {step === 'payment' && 'Habka Lacag-bixinta'}
              {step === 'confirm' && 'Xaqiiji Dalabka'}
              {step === 'done' && 'Mahadsanid!'}
            </h2>
            {step === 'cart' && (
              <p className="mt-0.5 text-xs text-slate-500">{totalItems} shey</p>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#0A192F]"
            aria-label="Xir"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Steps indicator */}
        {step !== 'done' && (
          <div className="flex gap-2 border-b border-slate-100 px-5 py-3">
            {[
              { id: 'cart', label: '1. Cart' },
              { id: 'payment', label: '2. Payment' },
              { id: 'confirm', label: '3. Confirm' },
            ].map((s) => (
              <span
                key={s.id}
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  step === s.id
                    ? 'bg-[#0A192F] text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <svg
                    className="h-14 w-14 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-slate-500">Dambiishaadu waa madhan.</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-6 rounded-lg bg-[#0A192F] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Sii iibso
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-xl border border-slate-150 border-slate-200 p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-16 shrink-0 rounded-lg object-cover object-top"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-semibold tracking-wider text-[#4A7BAA] uppercase">
                              {item.tag}
                            </p>
                            <h3 className="truncate text-sm font-semibold text-[#0A192F]">
                              {item.name}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 transition hover:text-red-500"
                            aria-label="Ka saar"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-lg border border-slate-200">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="px-2.5 py-1 text-sm font-semibold text-[#0A192F] hover:bg-slate-50"
                            >
                              −
                            </button>
                            <span className="min-w-6 text-center text-sm font-semibold">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="px-2.5 py-1 text-sm font-semibold text-[#0A192F] hover:bg-slate-50"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-[#0A192F]">
                            {formatMoney(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {step === 'payment' && (
            <div className="space-y-3">
              <p className="mb-4 text-sm text-slate-600">
                Dooro sida aad lacagta ugu bixinayso:
              </p>
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition ${
                    paymentMethod === method.id
                      ? 'border-[#0A192F] bg-[#0A192F]/5 ring-1 ring-[#0A192F]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      paymentMethod === method.id
                        ? 'border-[#0A192F]'
                        : 'border-slate-300'
                    }`}
                  >
                    {paymentMethod === method.id && (
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0A192F]" />
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#0A192F]">
                      {method.name}
                    </span>
                    <span className="block text-xs text-slate-500">{method.desc}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {step === 'confirm' && (
            <div className="space-y-5">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Habka lacag-bixinta
                </p>
                <p className="mt-1 font-semibold text-[#0A192F]">
                  {selectedPayment?.name}
                </p>
                <p className="text-xs text-slate-500">{selectedPayment?.desc}</p>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Alaabta
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-700">
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-semibold text-[#0A192F]">
                        {formatMoney(item.price * item.qty)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="font-semibold text-[#0A192F]">Wadarta</span>
                <span className="font-display text-2xl text-[#0A192F]">
                  {formatMoney(totalPrice)}
                </span>
              </div>
            </div>
          )}

          {step === 'done' && (
            <div className="flex flex-col items-center py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl text-[#0A192F]">
                Dalabka waa la xaqiijiyay!
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                Waad ku mahadsan tahay. Waxaan kula soo xiriiri doonaa si aan u dhammaystirno
                lacag-bixinta iyo gaarsiinta.
              </p>
              <button
                type="button"
                onClick={() => {
                  clearCart()
                  closeCart()
                }}
                className="mt-8 rounded-lg bg-[#0A192F] px-6 py-3 text-sm font-semibold text-white"
              >
                Ku noqo bogga
              </button>
            </div>
          )}
        </div>

        {step !== 'done' && items.length > 0 && (
          <div className="border-t border-slate-200 px-5 py-4">
            {step === 'cart' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Wadarta</span>
                  <span className="font-display text-xl text-[#0A192F]">
                    {formatMoney(totalPrice)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="w-full rounded-lg bg-[#0A192F] py-3.5 text-sm font-semibold text-white transition hover:bg-[#172A45]"
                >
                  Payment
                </button>
              </div>
            )}

            {step === 'payment' && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="flex-1 rounded-lg border border-slate-300 py-3.5 text-sm font-semibold text-[#0A192F]"
                >
                  Dib u noqo
                </button>
                <button
                  type="button"
                  disabled={!paymentMethod}
                  onClick={() => setStep('confirm')}
                  className="flex-[1.4] rounded-lg bg-[#0A192F] py-3.5 text-sm font-semibold text-white transition hover:bg-[#172A45] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Sii wad
                </button>
              </div>
            )}

            {step === 'confirm' && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="flex-1 rounded-lg border border-slate-300 py-3.5 text-sm font-semibold text-[#0A192F]"
                >
                  Dib u noqo
                </button>
                <button
                  type="button"
                  onClick={confirmOrder}
                  className="flex-[1.4] rounded-lg bg-[#0A192F] py-3.5 text-sm font-semibold text-white transition hover:bg-[#172A45]"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  )
}
