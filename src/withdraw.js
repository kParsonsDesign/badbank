import { CardBootstrap, BankTransactionForm } from './context';

export default function Withdraw() {
  
  return (
    <>
      <CardBootstrap 
        headerText="Deposit"
        className="mb-5"
        maxWidth="25rem"
        bgcolor="light"
        body={(
          <>
          <BankTransactionForm type='withdraw' />
          </>
        )}
      />
    </>
  );
}
