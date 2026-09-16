interface WalletState {
  isConnected: boolean
  address: string | null
  network: string | null
  isConnecting: boolean
  error: string | null
}

interface WalletConnectProps {
  walletState: WalletState
  onConnect: () => void
  onDisconnect Wallet ??: () => void
}

export default function WalletConnect({ walletState, onConnect, onDisconnect Wallet ?? }: WalletConnectProps) {
  if (walletState.isConnected && walletState.address) {
    return (
      <div className="glass-card animate-fade-in" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
        padding: '16px 24px',
        marginBottom: '24px',
        border: '1px solid rgba(16, 185, 129, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
          }}>
            ✓
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '15px', color: '#34d399' }}>
              Lace Wallet Connected
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px', fontFamily: 'monospace' }}>
              {walletState.address.slice(0, 16)}...{walletState.address.slice(-8)}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-public">
            🌐 {walletState.network || 'Preprod'}
          </span>
          <button
            onClick={onDisconnect Wallet ??}
            style={{
              padding: '8px 16px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              color: '#fca5a5',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            Disconnect Wallet ??
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in" style={{
      textAlign: 'center',
      padding: '60px 20px 80px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Premium Hero Section */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: '30px',
        padding: '8px 20px',
        fontSize: '14px',
        color: '#818cf8',
        fontWeight: 600,
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.1)'
      }}>
        ✨ Built for Midnight Builder Challenge
      </div>

      <h2 style={{ 
        fontSize: '56px', 
        marginBottom: '24px', 
        letterSpacing: '-0.03em',
        lineHeight: '1.1' 
      }}>
        Confidential On-Chain <br/>
        <span className="text-glow">Payroll & Settlements</span>
      </h2>
      
      <p style={{ 
        color: '#94a3b8', 
        fontSize: '18px', 
        maxWidth: '540px', 
        margin: '0 auto 40px',
        lineHeight: '1.6'
      }}>
        ShieldPay leverages Midnight's Zero-Knowledge circuits to process salaries 
        transparently on-chain, while keeping exact compensation mathematically hidden.
      </p>

      {walletState.error && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          padding: '16px',
          color: '#fca5a5',
          fontSize: '14px',
          marginBottom: '24px',
          maxWidth: '480px',
          margin: '0 auto 24px',
        }}>
          ⚠️ {walletState.error}
        </div>
      )}

      <button
        onClick={onConnect}
        disabled={walletState.isConnecting}
        style={{
          padding: '18px 40px',
          background: walletState.isConnecting
            ? 'rgba(99, 102, 241, 0.3)'
            : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
          borderRadius: '16px',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 700,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 10px 30px -10px rgba(79, 70, 229, 0.5)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        {walletState.isConnecting ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ animation: 'spin 1s linear infinite' }}>⟳</span>
            Connecting...
          </span>
        ) : (
          'Connect Lace Wallet'
        )}
      </button>

      {/* Feature Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        marginTop: '64px',
      }}>
        {[
          { icon: '🛡️', title: 'Total Budget', desc: 'Publically verified hash', color: '#10b981' },
          { icon: '🔒', title: 'Salary Amount', desc: 'Private via ZK proofs', color: '#a855f7' },
          { icon: '🎫', title: 'Payment Claim', desc: 'Selectively disclosed', color: '#f59e0b' },
        ].map((feature, i) => (
          <div
            key={feature.title}
            className={`glass-card animate-fade-in animate-delay-${i + 1}`}
            style={{ padding: '24px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.03)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
              {feature.title}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Increased contrast slightly for visibility

// Added spacing below description

// Increased contrast slightly for visibility

// Added spacing below description

// Increased contrast slightly for visibility

// Added spacing below description
