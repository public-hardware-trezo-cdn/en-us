import React, { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with full-view image */}
      <header className="relative h-screen">
        <img
          src="https://imagizer.imageshack.com/img922/916/KUrL8A.png"
          alt="hardware wallet trezor"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center max-w-4xl mx-auto px-4 animate-slide-in">
            Hardware Wallet Trezor - The Ultimate Shield for Your Crypto Assets
          </h1>
        </div>
      </header>

      {/* Content sections */}
      <div className={`max-w-4xl mx-auto p-4 md:p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <p className="text-xl text-gray-700 mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
          In today's digital landscape, where cyber threats lurk around every corner—ransomware, phishing attacks, sophisticated malware, and devastating data breaches—protecting your cryptocurrency investments has never been more crucial. The hardware wallet Trezor stands as your impenetrable fortress, keeping your private keys completely offline and secure from any digital vulnerability.
        </p>

        <div className="box info">
          <h2>🔐 Why Choose a Hardware Wallet Like Trezor?</h2>
          <p className="mb-4">The <strong>hardware wallet Trezor</strong> revolutionizes crypto security by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Storing private keys in an offline, encrypted environment</li>
            <li>Requiring physical verification for all transactions</li>
            <li>Protecting against remote hacking attempts</li>
            <li>Offering backup and recovery options</li>
            <li>Providing multi-currency support in one secure device</li>
          </ul>
        </div>

        <div className="box">
          <h2>💡 Complete Trezor Setup Guide</h2>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>Connect your Trezor device via the provided USB cable</li>
            <li>Visit <a href="https://trezor.io/start" target="_blank" className="text-blue-600 hover:text-blue-800">trezor.io/start</a></li>
            <li>Install <strong>Trezor Bridge</strong> for secure device communication</li>
            <li>Download and install <strong>Trezor Suite</strong></li>
            <li>Create your wallet and securely store the recovery seed</li>
            <li>Set up additional security features (PIN, passphrase)</li>
            <li>Verify device authenticity through hologram check</li>
          </ol>
        </div>

        <div className="box success">
          <h2>🛡️ Advanced Security Features</h2>
          <ul className="space-y-3">
            <li><strong>PIN Protection:</strong> Customizable PIN code with progressive lockout</li>
            <li><strong>Hidden Wallets:</strong> Create multiple secure wallets with different passphrases</li>
            <li><strong>Shamir Backup:</strong> Split recovery seed into multiple shares</li>
            <li><strong>Firmware Verification:</strong> Cryptographic verification of all updates</li>
          </ul>
        </div>

        <div className="box">
          <h2>📊 Hardware vs. Software Wallets</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Trezor Hardware</th>
                  <th>Software Wallet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Internet Access Required</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Malware Risk</td>
                  <td>Minimal</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Key Ownership</td>
                  <td>Full</td>
                  <td>Shared/Cloud</td>
                </tr>
                <tr>
                  <td>Self-Custody</td>
                  <td>100%</td>
                  <td>Partial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="box warning">
          <h2>⚠️ Security Alert</h2>
          <p>Buy ONLY from <a href="https://trezor.io" target="_blank" className="text-blue-600 hover:text-blue-800">trezor.io</a> or verified sellers. Fake devices can result in total loss of funds.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Verify hologram seals</li>
            <li>Check for tamper-evident packaging</li>
            <li>Never use pre-initialized devices</li>
            <li>Beware of suspiciously low prices</li>
          </ul>
        </div>

        <div className="box success">
          <h2>🎯 Why Choose Trezor?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Security:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open-source verification</li>
                <li>Physical security elements</li>
                <li>Offline key storage</li>
                <li>Multi-factor authentication</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Features:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-currency support</li>
                <li>DeFi integration</li>
                <li>Regular updates</li>
                <li>Intuitive interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;