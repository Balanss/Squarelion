import React,{useEffect} from 'react'

export default function Bot() {

    useEffect(() => {
        const script = document.createElement("script");
      script.src="https://cdn.botpress.cloud/webchat/v0/inject.js";
        script.async = true;
        script.onload = () => {
          window.botpressWebChat.init({
            "composerPlaceholder":import.meta.env.VITE_composerPlaceholder,
            "botConversationDescription": import.meta.env.VITE_botConversationDescription,
            "botId": import.meta.env.VITE_botId,
            "hostUrl":import.meta.env.VITE_hostUrl,
            "messagingUrl": import.meta.env.VITE_messagingUrl,
            "clientId": import.meta.env.VITE_clientId,
            "botName": import.meta.env.VITE_botName,
            useSessionStorage: true,
            showPoweredBy: true,
          
          });
        };
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
  return (
    <div id="botpress-webchat"></div>
  )
}
