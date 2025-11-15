import { useState } from 'react'
import './CopyToClipboard.css'

function CopyToClipboard({ text, label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <button 
      className="copy-button" 
      onClick={handleCopy}
      aria-label={`Copy ${label || text} to clipboard`}
      title={`Copy ${label || text}`}
    >
      <span className="copy-icon">{copied ? '✓' : '📋'}</span>
      {copied && <span className="copy-feedback">Copied!</span>}
    </button>
  )
}

export default CopyToClipboard

