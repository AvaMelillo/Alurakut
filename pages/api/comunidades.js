import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response){
    
    if (request.method === "POST"){

        const TOKEN = '5d47bedab23b8fe8a205ea56e37b8c';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "975762",
            ...request.body,
        })
    
        //Isso aq tá no pc/servidor, não no navegador
        //console.log(registroCriado);
    
        response.json({
            dados: 'alo',
            registroCriado: registroCriado,
        })
        return;
    }
}