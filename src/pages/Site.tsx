import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import api from "../services/api";

function Site() {

  const [image, setImage] = useState('https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.jpg');

  const consultaAPI = async () => {
    const response = await api.get("");
    console.log(response.data);
    if(response.data.status === "success") {
      setImage(response.data.message);
    }
  };

  return (
    <>
      <IonContent color="medium">
        <div color="medium">
          <IonItem color="medium">
            <IonText color="primary">
              <h1>Bem vindo ao Meu site</h1>
            </IonText>
          </IonItem>
          <IonText color="success">
            <p>Esse é um parágrafo de exemplo</p>
          </IonText>
          <IonButton size="small" onClick={consultaAPI}>
            Clique Aqui
          </IonButton>
          <IonItemDivider></IonItemDivider>
          <IonItem color="medium">
            <IonLabel>
              <h1>Seção Importante</h1>
              <p>Esta é uma seção com conteúdo relevante</p>
            </IonLabel>
          </IonItem>
        </div>
        <IonImg
          src={image}
          alt="Imagem"
        ></IonImg>
      </IonContent>
    </>
  );
}
export default Site;
