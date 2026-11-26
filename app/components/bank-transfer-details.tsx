export default function BankTransferDetails() {
  return (
    <div className="bank-transfer-details">
      <h3>Bank transfer</h3>
      <dl>
        <div>
          <dt>Account name</dt>
          <dd>DRH Debby Royal Hairs</dd>
        </div>
        <div>
          <dt>Account number</dt>
          <dd>5601835836</dd>
        </div>
        <div>
          <dt>Bank</dt>
          <dd>Fidelity Bank</dd>
        </div>
      </dl>
      <p>
        Use your full name as the transfer narration. After submitting your order request, email
        your reference and transfer receipt to{" "}
        <a href="mailto:Debbyroyalhairs@gmail.com">Debbyroyalhairs@gmail.com</a>. Payments are
        verified manually.
      </p>
    </div>
  );
}
