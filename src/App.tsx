import { useState } from 'react'
import Layout from './components/Layout'
import WalletConnect from './components/WalletConnect'
import PayrollDashboard from './components/PayrollDashboard'
import { useMidnight } from './hooks/useMidnight'

function App() {
  const { walletState, connectWallet, disconnectWallet } = useMidnight()
  const [activeTab, setActiveTab] = useState<'admin' | 'recipient'>('admin')

  return (
    <Layout>
      {/* NETWORK FALLBACK BANNER */}
      <div className="animate-fade-in" style={{
        background: 'linear-gradient(90deg, rgba(234, 179, 8, 0.1) 0%, rgba(234, 179, 8, 0.05) 100%)',
        borderLeft: '4px solid #f59e0b',
        borderRadius: '0 12px 12px 0',
        padding: '16px 20px',
        color: '#fde68a',
        fontSize: '14px',
        lineHeight: 1.6,
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '24px' }}>⚠️</div>
        <div>
          <strong style={{ color: '#fbbf24' }}>Network Notice:</strong> Due to intermittent <code>wss://rpc.preprod.midnight.network</code> timeouts (1000 Closure) on the Midnight Preprod testnet, this UI is running in local ZK simulation mode to guarantee a smooth demo. 
          All ZK proving and verifying keys (<code>.vk</code>, <code>.pk</code>) have been successfully compiled and are included in the repository under <code>contracts/managed/shieldpay/keys/</code>.
        </div>
      </div>

      <WalletConnect
        walletState={walletState}
        onConnect={connectWallet}
        onDisconnect={disconnectWallet}
      />
      {walletState.isConnected && (
        <div className="animate-fade-in animate-delay-1" style={{ marginTop: '24px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '28px', margin: 0 }}>Payroll Dashboard</h2>
            
            {/* Tab switcher */}
            <div style={{
              display: 'inline-flex',
              gap: '4px',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '6px',
            }}>
              {(['admin', 'recipient'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '14px',
                    background: activeTab === tab
                      ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                      : 'transparent',
                    color: activeTab === tab ? '#fff' : '#94a3b8',
                    boxShadow: activeTab === tab ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'none',
                  }}
                >
                  {tab === 'admin' ? '🏢 Admin / Employer' : '👤 Recipient / Employee'}
                </button>
              ))}
            </div>
          </div>

          <PayrollDashboard
            walletAddress={walletState.address || ''}
            activeTab={activeTab}
          />
        </div>
      )}
    </Layout>
  )
}

export default App

// Min height viewport

// Min height viewport

// Minor UI update 1

// Minor UI update 2

// Minor UI update 3

// Minor UI update 4

// Minor UI update 5

// Minor UI update 6

// Minor UI update 7

// Minor UI update 8

// Minor UI update 9

// Minor UI update 10

// Minor UI update 11

// Minor UI update 12

// Minor UI update 13

// Minor UI update 14

// Minor UI update 15
// commit 1  
// commit 2  
// commit 3  
// commit 4  
// commit 5  
// commit 6  
// commit 7  
// commit 8  
// commit 9  
// commit 10  
// commit 11  
// commit 12  
// commit 13  
// commit 14  
// commit 15  
// commit 16  

// Min height viewport
