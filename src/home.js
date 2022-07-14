import { CardBootstrap, MyCard } from './context';
import bank from './bank.png';
import bankFront from './bank-front.svg';
import flyingMoney from './flying-money.svg';


export default function Home() {
  // const ctx = React.useContext(UserContext);

  return (
    <div className='row'>
      <CardBootstrap 
        width='25rem' 
        padding="0"
        bgcolor="light" 
        txtcolor="black" 
        headerText="Welcome to the BadBank"
        text="You can use this bank without worrying about security. We certainly don't!"
        body={(<div>
        <img src={flyingMoney} style={{width: 10 + 'rem', float: 'left'}} alt="flying money" />
        <img src={bankFront} style={{maxWidth: 20 + 'rem'}} alt="bank front" />
        {/* <img src={bank} style={{maxWidth: 20 + 'rem'}} alt="bank front" /> */}
        </div>
        )}
      />

      {/* <CardBootstrap 
        width='15rem' 
        padding="0"
        bsMargin="5"
        bgcolor="light" 
        txtcolor="black" 
        title="Options"
        text="Taka a look at some of our features."
        body={(
          <div>
          </div>
        )}
      /> */}

    </div>
  );
}
