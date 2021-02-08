import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import TruncateMarkup from 'react-truncate-markup';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <TruncateMarkup lines={3}>
          <div style={{ width: 300 }}>
            <div style={{ color: "tomato" }}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor
              sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
              amet, Lorem ipsum dolor sit amet,{" "}
            </div>
            <div style={{ color: "royalblue", fontWeight: "bold" }}>
              consectetur adipiscing elit,{" "}
            </div>
            <div style={{ color: "tomato" }}>
              sed do eiusmod tempor incididunt{" "}
            </div>
          </div>
        </TruncateMarkup>
      </IonContent>
    </IonPage>
  );
};

export default Page;
