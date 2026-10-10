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
          <strong>Online payments are coming soon.</strong>
          <p>Please use WhatsApp checkout for now. We look forward to offering online payments soon.</p>
        </div>
      )}
    </div>
  )
}
