import {Knex} from 'knex';

export async function seed(knex:Knex) {
    await knex('points').insert([
        {id: 1, imagem: 'predio-prefeitura', nome: 'Prédio da Prefeitura', email: 'semam@pontenova.mg.gov.br', whatsapp: '3138195454', latitude: -20.41576000779950, longitude: -42.90839984232440, endereco: 'Ave. Caetano Marinho, nº 306 / Centro' , descricao: 'Segunda a Sexta: 12hrs às 16hrs'},
        {id: 2, imagem: 'demaes', nome: 'DMAES', email: 'comunicacao@dmaespontenova.mg.gov.br', whatsapp: '3138195350', latitude: -20.40905384403860, longitude: -42.90088649207180, endereco: 'Ave. Ernesto Trivelato, nº 158 / Triângulo' , descricao: 'Segunda a Sexta: 12hrs às 17hrs'},
        {id: 3, imagem: 'atac', nome: 'ATAC', email: 'atac@bartofil.com.br', whatsapp: '3138192054', latitude: -20.403914023225000, longitude: -42.901923961156100, endereco: 'Rua João Alves de Oliveira, nº 234 / Triângulo Novo' , descricao: 'Segunda a Sexta: 6hrs às 19hrs / Sábado: 6hrs às 13 hrs'},
        {id: 4, imagem: 'epa', nome: 'EPA Supermercados', email: 'epa@epa.com.br', whatsapp: '3138814992', latitude:  -20.410735550013100, longitude: -42.89270396080260, endereco: 'Ave. Dr. Otávio Soares, nº 408 / Palmeiras' , descricao: 'Segunda a Sábado: 8hrs às 21hrs / Domingo: 8hrs às 13 hrs'},
        {id: 5, imagem: 'mercado-bh', nome: 'Supermercados BH', email: 'faleconosco@supermercadosbh.com.br', whatsapp: '3138817475', latitude: -20.412082366187900 , longitude: -42.89744644858330, endereco: 'Ave. Francisco Vieira Martins, nº 221 / Palmeiras' , descricao: 'Segunda a Sábado: 8hrs às 21hrs / Domingo: 8hrs às 13 hrs'},
        {id: 6, imagem: 'mercado-guarapiranga', nome: 'Supermercados Guarapiranga', email: 'contato@guarapirangasupermercado.com.br', whatsapp: '3138171727', latitude: -20.405975725901100 , longitude: -42.9010085222686, endereco: 'Travessa Edith Maria Silva, nº 38 / Triângulo' , descricao: 'Segunda a Sábado: 7:30hrs às 20hrs / Domingo: 7:30hrs às 13 hrs'},
        {id: 7, imagem: 'poupy-esplanada', nome: 'Supermercados POUPY', email: 'poupy@supermercadospoupy.com.br', whatsapp: '3138812906', latitude: -20.419351454141100, longitude: -42.911168718421700, endereco: 'Rua Carlos Gomes, nº 172 / Esplanada' , descricao: 'Segunda a Sexta: 8hrs às 21hrs / Sabado a Domingo: 8hrs às 12 hrs'},
        {id: 8, imagem: 'poupy-santoantonio', nome: 'Supermercados POUPY', email: 'poupy@supermercadospoupy.com.br', whatsapp: '3138198250', latitude: -20.40760569014690, longitude: -42.894244073090000, endereco: 'Rua Santo Antônio, nº 87 / Santo Antônio I' , descricao: 'Segunda a Sábado: 8hrs às 21hrs / Domingo: 8hrs às 13 hrs'},
        {id: 9, imagem: 'semam', nome: 'Secretaria de Meio Ambiente', email: 'semam@pontenova.mg.gov.br', whatsapp: '3138171896', latitude: -20.401688193068900, longitude: -42.88789110240260, endereco: 'Ave. Mario Martins de Freitas, nº 401 / Guarapiranga' , descricao: 'Segunda a Sexta: 8hrs às 11hrs - 13hrs às 16:30hrs'},
        
    ]);
}