import { CardBootstrap, MyCard } from './context';

export default function Home() {
  // const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1 className="my-3">Home Page</h1>
      {/* {JSON.stringify(ctx)} */}

      <MyCard 
        bgcolor="light"
        txtcolor="black" 
        header="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank without worrying about security. We certainly don't."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      />

      <CardBootstrap 
        bgcolor="light"
        txtcolor="black" 
        header="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank without worrying about security. We certainly don't."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      />
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
        amet quam faucibus, cursus eros et, molestie tortor. Sed quis augue
        venenatis, aliquet enim ut, venenatis risus. In convallis rhoncus urna,
        in tincidunt mi. Maecenas a consectetur odio. Donec sed ante et lectus
        sollicitudin sollicitudin. Quisque tincidunt faucibus justo, nec
        tristique est. Donec quis elit eget ante bibendum bibendum imperdiet in
        risus. Duis ut ante eget magna cursus faucibus a ac mi. Etiam eu lacus
        interdum, ultricies mauris ut, commodo lacus. Suspendisse tellus sapien,
        fringilla et magna nec, gravida commodo mi. Cras pulvinar mollis
        facilisis.
      </p>
      <p>
        Quisque a blandit elit, et mollis erat. Aliquam fermentum erat magna,
        vitae aliquet ipsum volutpat vel. In efficitur lobortis sodales.
        Curabitur nec ipsum tincidunt, mattis lorem vitae, congue arcu. Integer
        fermentum odio id ipsum pellentesque, vel condimentum urna scelerisque.
        Suspendisse fringilla eu lorem ac finibus. Ut cursus id est in auctor.
        Sed eu nisi dictum, dapibus sem fermentum, accumsan sapien. Vestibulum
        imperdiet, velit ut auctor viverra, nulla nunc eleifend nisi, eu feugiat
        erat justo vel mauris. Sed lobortis ultricies magna, nec efficitur
        tellus tincidunt a. Nunc vitae odio id lorem dictum rutrum maximus sed
        justo.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
        tempus finibus gravida. Sed eu ipsum massa. Proin porttitor tincidunt
        orci. Vivamus laoreet elit id massa blandit vulputate. Curabitur
        vulputate ut est viverra dignissim. Quisque euismod convallis libero, at
        lacinia eros. Maecenas interdum magna id malesuada egestas. Vestibulum
        sed felis nec quam congue pretium eget et dolor.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
        rutrum risus vel nibh elementum mollis. Praesent ullamcorper non elit id
        volutpat. Suspendisse bibendum id eros et aliquet. Fusce volutpat dui
        eget risus consectetur, a tristique mauris lacinia. Pellentesque diam
        ipsum, scelerisque sed dapibus eu, maximus sit amet leo. Mauris in risus
        orci.
      </p>
      <p>
        Maecenas rutrum justo eu porttitor placerat. Aliquam odio erat, dapibus
        in ipsum quis, mollis vehicula ligula. Nullam gravida nibh non augue
        vestibulum, fringilla cursus nisi varius. Duis fermentum imperdiet
        ligula ut laoreet. Nulla facilisi. In interdum vel leo faucibus
        bibendum. Pellentesque vehicula mollis sem. Mauris egestas tempor
        consectetur. Ut pulvinar ultrices nisl et semper. Cras ultricies
        elementum blandit. Vestibulum eget ultrices lorem. Nam aliquam feugiat
        felis ac dignissim. Duis ex tellus, gravida ut dolor ac, dapibus commodo
        massa. Ut luctus sit amet libero nec condimentum. Proin non viverra
        arcu. Maecenas urna sapien, malesuada ac viverra vitae, hendrerit at mi.
      </p>
      <p>
        Phasellus a diam vitae metus viverra ultricies in in quam. Vestibulum
        mattis a ipsum vel ultricies. Proin laoreet porttitor risus, et luctus
        quam aliquet sed. In id justo porttitor ipsum tempor convallis quis at
        dui. Donec fringilla elit faucibus odio scelerisque tincidunt. Nulla
        facilisi. Ut vel leo vel sapien malesuada laoreet. Phasellus at commodo
        sem, nec eleifend ligula. Praesent lobortis sed felis eu vulputate.
        Curabitur congue purus eget odio varius finibus. Aliquam eget nibh
        tellus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur auctor, justo sed eleifend
        aliquet, diam ante malesuada ipsum, feugiat viverra nulla libero a
        turpis. Curabitur aliquet turpis mauris, in faucibus diam rutrum vel.
        Curabitur nec tellus mauris.
      </p>
      <p>
        In velit tellus, bibendum sed purus in, dignissim tincidunt arcu. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. In eu turpis massa.
        Curabitur imperdiet posuere nulla, eu consequat nulla venenatis vitae.
        Mauris tincidunt tempor ligula, sit amet tempor mauris mollis efficitur.
        Mauris porttitor velit in aliquet sodales. Nullam facilisis nec orci
        feugiat placerat. Donec vulputate nec tortor tincidunt porta. Donec
        euismod blandit metus at maximus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed massa odio, ultrices id quam ut, porta
        bibendum lacus. Aliquam erat volutpat. Nullam elementum purus in tellus
        sollicitudin, et accumsan lectus volutpat. Sed pellentesque erat sit
        amet neque fringilla, in fringilla augue volutpat. Sed tempor, enim ut
        ultrices mattis, magna libero molestie turpis, id vestibulum enim erat a
        ipsum.
      </p>
      <p>
        Nam quis fringilla justo, nec porta libero. In maximus tortor nec elit
        lacinia, ut rutrum tellus posuere. Sed hendrerit mi vel vulputate
        maximus. Cras fermentum at mauris eget pretium. Nullam at pulvinar
        dolor. Donec sodales accumsan diam, vel sodales risus dapibus id. Duis
        ac leo id tortor luctus venenatis. Duis hendrerit enim eget tellus
        commodo, ut aliquam nunc efficitur. Nunc imperdiet suscipit ultricies.
        Phasellus efficitur aliquet ex, at laoreet massa blandit ac. Sed eget
        elit et sapien iaculis convallis sed vel lacus. Sed et velit sed nibh
        dictum scelerisque. Sed facilisis pellentesque nunc. Nullam lacinia
        lacinia leo non scelerisque.
      </p>
      <p>
        Pellentesque malesuada blandit porta. Vestibulum sed pulvinar metus.
        Maecenas elit neque, dapibus eget eleifend ut, mattis ut augue. Vivamus
        hendrerit sodales arcu, et finibus nulla commodo nec. Aenean quis ante
        ante. Vestibulum urna mi, ultricies quis quam dapibus, facilisis
        efficitur metus. Cras viverra magna sagittis, venenatis augue vel,
        convallis est. Sed dui purus, molestie nec diam sed, vehicula aliquam
        arcu. Suspendisse tincidunt eros orci, nec eleifend massa feugiat sed.
        Mauris laoreet lectus libero, nec cursus nisi sodales vel. Morbi non
        enim ac tellus facilisis placerat. In ullamcorper massa ut ipsum
        lobortis, quis volutpat diam viverra. Sed at semper dui. Mauris
        vestibulum purus id turpis vulputate porta. Aliquam venenatis felis sit
        amet eleifend interdum. Cras maximus nisl vel ante ornare viverra.
      </p>
      <p>
        Phasellus sed elit interdum elit tincidunt egestas at sed augue. Nunc
        nec elementum diam, a consectetur enim. Cras risus dui, consequat vitae
        lobortis vehicula, cursus eu mauris. Integer varius mollis ullamcorper.
        Praesent feugiat nisi maximus, fermentum orci eget, commodo nisi.
        Vivamus volutpat facilisis lacus id efficitur. Vivamus sed bibendum
        augue. Etiam ipsum metus, sollicitudin eu risus at, imperdiet efficitur
        mi.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In hac habitasse platea dictumst. Cras justo dui,
        egestas nec dictum ac, pretium vitae ligula. Quisque finibus quam
        tortor, mollis pretium sapien dapibus eu. Fusce consequat, ante eget
        molestie convallis, diam ex posuere felis, ut aliquet tortor ligula vel
        mauris. Sed euismod dui sed mi ornare viverra. In faucibus scelerisque
        massa id rutrum. Sed euismod feugiat urna, ac tincidunt metus egestas
        tempus. Fusce dapibus rhoncus felis, sollicitudin venenatis arcu viverra
        sed. Nullam nec justo venenatis, fermentum felis vel, malesuada leo.
        Mauris luctus quis leo sit amet molestie. Ut nisi mauris, malesuada nec
        ipsum eget, hendrerit blandit purus.
      </p>
      <p>
        In commodo turpis ut suscipit gravida. Etiam id molestie mi. Nunc mattis
        nibh quis risus pulvinar rhoncus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce venenatis, nisl eget pretium
        interdum, est lorem tincidunt enim, ut tincidunt lorem purus consequat
        sem. Nunc consequat nisi viverra leo accumsan, sit amet faucibus mauris
        placerat. Curabitur ultricies vitae felis a bibendum. Nunc lobortis,
        tellus faucibus euismod ornare, tortor quam congue mauris, vel iaculis
        justo nisl eu nisi. Vivamus fermentum laoreet ipsum egestas tempor.
        Etiam vel diam nisl. Nulla ultrices erat vel felis sagittis, ut faucibus
        erat porta.
      </p>
      <p>
        Donec quis elementum nisi. Pellentesque lacinia, urna non commodo
        vestibulum, lorem velit efficitur dui, tristique semper metus quam sit
        amet massa. Etiam et hendrerit purus. Vivamus fermentum sollicitudin
        diam id tristique. Ut mollis metus metus, euismod mattis orci facilisis
        et. Proin a eleifend diam. In hac habitasse platea dictumst. Nulla in
        velit mauris. Pellentesque placerat erat nulla, sit amet sodales ex
        tincidunt at. Quisque porttitor quis libero pharetra tincidunt. Nunc in
        velit a ipsum vehicula convallis. Aliquam erat volutpat. Integer ac
        iaculis nisl. Aenean pretium ex ligula. Nulla orci mauris, hendrerit
        rhoncus diam a, sodales ullamcorper turpis.
      </p>
      <p>
        Aenean venenatis sem urna, sit amet pellentesque ipsum aliquet sed.
        Fusce vehicula nulla sapien, nec pulvinar nisi ornare sed. Praesent et
        dapibus orci, volutpat viverra ante. Phasellus non ipsum consectetur,
        dapibus risus elementum, eleifend lectus. Morbi non venenatis metus, a
        posuere mauris. Nulla pretium ipsum eget blandit luctus. Duis sodales
        eros eros, id eleifend sapien sagittis non. Nunc ac purus in lorem
        elementum blandit.
      </p>
      <p>
        Donec scelerisque blandit tincidunt. Duis tellus sapien, venenatis a
        lacinia sed, ultricies ac ex. Vestibulum varius nec ligula at rutrum.
        Duis faucibus imperdiet orci nec sodales. Morbi erat orci, lacinia id
        consectetur a, hendrerit vel neque. Vestibulum eu consequat felis.
        Pellentesque accumsan, lectus non dignissim consectetur, risus dui
        convallis lectus, nec laoreet quam sapien ut dui. Morbi finibus, arcu id
        eleifend iaculis, dolor libero lacinia risus, in pharetra neque sem et
        urna. Phasellus lacinia justo vel enim elementum, non bibendum sem
        eleifend. Etiam et sem molestie purus accumsan rutrum. Aliquam erat
        nunc, sollicitudin in nisi ut, efficitur feugiat felis. Nullam interdum
        vulputate massa, ut sagittis ipsum suscipit sed. Aliquam consequat
        sapien id urna commodo imperdiet. Vestibulum iaculis, ligula eget
        imperdiet porttitor, justo elit sodales ex, eleifend vehicula justo elit
        et sem. Ut commodo, turpis at dapibus vestibulum, ligula leo ornare
        orci, eget hendrerit elit dolor vel sapien. Nullam eget libero metus.
      </p>
    </div>
  );
}
