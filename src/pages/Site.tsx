import {
  IonButton,
  IonContent,
  IonFooter,
  IonImg,
  IonItemDivider,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import api from "../services/api";
import "./Site.css";

function Site() {
  const [image, setImage] = useState(
    "https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.jpg"
  );

  const consultaAPI = async () => {
    const response = await api.get("");
    console.log(response.data);
    if (response.data.status === "success") {
      setImage(response.data.message);
    }
  };

  return (
    <>
      <IonContent className="ion-padding">
        <h1 className="title text-bold">Bem vindo ao Meu site</h1>
        <IonText>
          <p className="text-green">Esse é um parágrafo de exemplo</p>
        </IonText>
        <IonButton size="small" onClick={consultaAPI}>
          Clique Aqui
        </IonButton>
        <div className="important-section">
          <h1>Seção Importante</h1>
          <IonText>
            <p className="text-green text-bold">
              Esta é uma seção com conteúdo relevante
            </p>
          </IonText>
        </div>
        <IonImg src={image} alt="Imagem"></IonImg>
      </IonContent>
      <IonFooter class="ion-text-center">Felipe Lima de Almeida</IonFooter>
    </>
  );
}
export default Site;
