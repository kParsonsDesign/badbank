import { CardBootstrap, MyCard } from './context';
import bankFront from './bank.png';
import flyingMoney from './flying-money.svg';


export default function Home() {
  // const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1 className="my-3">Home Page</h1>
      {/* {JSON.stringify(ctx)} */}

      {/* <MyCard 
        bgcolor="light"
        txtcolor="black" 
        header="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank without worrying about security. We certainly don't."
        body={(<div>
        <img src={flyingMoney} style={{width: 10 + 'rem'}} alt="flying money" />
        <img src={bankFront} className="img-fluid" alt="bank front" />
        </div>
        )}
      /> */}
      
{/* <img src={require('./bank.png')} className="img-fluid" alt="Responsive image" /> */}
      <CardBootstrap 
        bgcolor="light"
        txtcolor="black" 
        headerText="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank without worrying about security. We certainly don't!"
        body={(<div>
        <img src={flyingMoney} style={{width: 10 + 'rem', float: 'left'}} alt="flying money" />
        <img src={bankFront} style={{maxWidth: 20 + 'rem'}} alt="bank front" />
        </div>
        )}
      />
      
      
    </div>
  );
}
