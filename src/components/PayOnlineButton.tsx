import { useState } from 'react'

interface PayOnlineButtonProps {
  className?: string
}

export function PayOnlineButton({ className = 'btn btn--sand btn--block' }: PayOnlineButtonProps) {
  const [showNotice, setShowNotice] = useState(false)

  return (
    <div className="pay-online-action">
      <button
        className={className}
        type="button"
        aria-expanded={showNotice}
        aria-controls="pay-online-notice"
        onClick={() => setShowNotice((visible) => !visible)}
      >
        Pay online
      </button>
      {showNotice && (
        <div className="pay-online-notice" id="pay-online-notice" role="status" aria-live="polite">
          <strong>Online payment is coming soon.</strong>
          <p>Before online payments are enabled, please request a pre-approval code from the owner via WhatsApp. PayFast or FastPay.io will be added once online payment setup is complete.</p>
        </div>
      )}
    </div>
  )
}
