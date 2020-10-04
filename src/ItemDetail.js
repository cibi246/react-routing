import React, {useState, useEffect} from 'react';

function Item({match}) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        item:{
            images:{}
        },
        
        // icon:{}
    });
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        
        console.log(item.data);
        setItem(item.data);
    };

  return (
  <div>
      <h1>{item.item.name}</h1>
  {/* <p>{item.item.images}</p> */}
      <img src={item.item.images.icon} alt="" style={{
          background: 'black'
      }}/>
    </div>
  );
}

export default Item;
