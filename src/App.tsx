import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './deliveryClient';
import { LandingPage, WebSpotlightRoot, contentTypes } from './models';
import KontentSmartLink from '@kontent-ai/smart-link';

function App() {

  const [item, setItem] = useState<LandingPage | null>(null);

  useEffect(() => {
    const sdk = KontentSmartLink.initialize({
      defaultDataAttributes: {
        projectId: process.env.REACT_APP_ENVIRONMENT_ID,
        languageCodename: "default",
      },
      queryParam: "preview"
    });

    return () => {
      sdk.destroy();
    };
  }, []);

  useEffect(() => {
    client.item<WebSpotlightRoot>("my_website_root")
      .toPromise()
      .then(
        response => {
          setItem(response.data.item.elements.content.linkedItems[0])
        }
      );
  }, []);


  return (
    <div className="App">
      {item && (
        <div data-kontent-item-id={item.system.id}>
          <h1 data-kontent-element-codename={contentTypes.landing_page.elements.title.codename}>{item.elements.title.value}</h1>
          <div data-kontent-element-codename={contentTypes.landing_page.elements.body.codename} dangerouslySetInnerHTML={{ __html: item.elements.body.value }}></div>
          <img
            data-kontent-element-codename={contentTypes.landing_page.elements.image.codename}
            src={item.elements.image.value[0].url}
            width={item.elements.image.value[0].width || 300}
            height={item.elements.image.value[0].height || 200}
            alt={item.elements.image.value[0].description || item.elements.image.value[0].name}
          />
        </div>
      )}
    </div>
  );
}

export default App;
