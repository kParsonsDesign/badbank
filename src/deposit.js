import { CardBootstrap, BankTransactionForm } from './context';

export default function Deposit() {


  return (
    <>
      <CardBootstrap 
        headerText="Deposit"
        className="mb-5" 
        maxWidth="25rem"
        body={(
          <>
          <BankTransactionForm type='deposit' />
          </>
        )}
      />
    </>
  );
}
