import { CardBootstrap, BankTransactionForm } from './context';

export default function Deposit() {


  return (
    <>
      <CardBootstrap 
        headerText="Deposit"
        className="mb-5"
        width="25rem"
        body={(
          <>
          <BankTransactionForm type='deposit' />
          </>
        )}
      />
    </>
  );
}
